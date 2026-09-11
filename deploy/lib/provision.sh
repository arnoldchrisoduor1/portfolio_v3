#!/usr/bin/env bash
# First-time (idempotent) server provisioning:
# Docker + Compose plugin, Nginx, Certbot, UFW, swap, project clone, site config.

provision_server() {
  log_step_start "prov" "Provision server"

  config_ensure
  ssh_setup_keys || return 1
  ssh_offer_config_alias

  ui_section "Provisioning plan"
  echo "  Host:     ${DEPLOY_USER}@${DEPLOY_HOST}"
  echo "  Dir:      ${DEPLOY_REMOTE_DIR}"
  echo "  Domain:   ${DEPLOY_DOMAIN:-"(none — HTTP via IP)"}"
  echo "  App port: ${DEPLOY_APP_PORT}"
  echo "  Will install/ensure: Docker, Compose plugin, Nginx, Certbot, UFW, git, curl"
  echo ""
  if ! ui_confirm "Proceed with provisioning?" Y; then
    log_step_skip "prov" "Provision server" "declined"
    return 0
  fi

  # --- Base packages ---
  log_info "Updating apt & installing base packages…"
  ssh_cmd "export DEBIAN_FRONTEND=noninteractive
    apt-get update -qq
    apt-get install -y -qq ca-certificates curl gnupg lsb-release git ufw openssl \
      apt-transport-https software-properties-common >/dev/null"
  change_record "[ensured]   base apt packages (curl,git,ufw,openssl,…)"

  # --- Swap (low-RAM droplet) ---
  if ssh_cmd "test -f /swapfile || swapon --show | grep -q ."; then
    log_info "Swap already present"
    change_record "(no changes) swap already configured"
  else
    log_info "Creating 1G swapfile (droplet has low RAM)…"
    ssh_cmd "
      fallocate -l 1G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=1024
      chmod 600 /swapfile
      mkswap /swapfile
      swapon /swapfile
      grep -q '/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
    "
    change_record "[created]   1G /swapfile"
  fi

  # --- Docker ---
  if ssh_cmd "command -v docker >/dev/null && docker compose version >/dev/null 2>&1"; then
    log_ok "Docker + Compose already installed"
    change_record "(no changes) Docker already installed"
  else
    log_info "Installing Docker Engine + Compose plugin…"
    ssh_cmd "
      export DEBIAN_FRONTEND=noninteractive
      install -m 0755 -d /etc/apt/keyrings
      if [[ ! -f /etc/apt/keyrings/docker.asc ]]; then
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
        chmod a+r /etc/apt/keyrings/docker.asc
      fi
      arch=\$(dpkg --print-architecture)
      codename=\$(. /etc/os-release && echo \"\$VERSION_CODENAME\")
      echo \"deb [arch=\${arch} signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \${codename} stable\" \
        > /etc/apt/sources.list.d/docker.list
      apt-get update -qq
      apt-get install -y -qq docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
      systemctl enable --now docke
    "
    change_record "[installed] docker-ce, docker-compose-plugin"
  fi
  ssh_cmd "systemctl enable --now docker"
  log_ok "$(ssh_cmd 'docker --version; docker compose version')"

  # --- Nginx (host reverse proxy) ---
  if ssh_cmd "command -v nginx >/dev/null"; then
    log_ok "Nginx already installed"
    change_record "(no changes) Nginx already installed"
  else
    log_info "Installing Nginx…"
    ssh_cmd "export DEBIAN_FRONTEND=noninteractive; apt-get install -y -qq nginx; systemctl enable --now nginx"
    change_record "[installed] nginx"
  fi

  # --- Certbot ---
  if ssh_cmd "command -v certbot >/dev/null"; then
    log_ok "Certbot already installed"
    change_record "(no changes) Certbot already installed"
  else
    log_info "Installing Certbot…"
    ssh_cmd "export DEBIAN_FRONTEND=noninteractive; apt-get install -y -qq certbot python3-certbot-nginx"
    change_record "[installed] certbot, python3-certbot-nginx"
  fi

  # --- UFW ---
  log_info "Configuring UFW (22/80/443)…"
  ssh_cmd "
    ufw allow OpenSSH >/dev/null
    ufw allow 80/tcp >/dev/null
    ufw allow 443/tcp >/dev/null
    ufw --force enable >/dev/null
    ufw status
  "
  change_record "[enabled]   ufw rules for 22, 80, 443"

  # --- Project directory / clone ---
  if ssh_cmd "test -d '${DEPLOY_REMOTE_DIR}/.git'"; then
    log_ok "Project already cloned at ${DEPLOY_REMOTE_DIR}"
    change_record "(no changes) repo already at ${DEPLOY_REMOTE_DIR}"
    ssh_cmd "cd '${DEPLOY_REMOTE_DIR}' && git fetch origin && git checkout '${DEPLOY_BRANCH}' && git pull --ff-only origin '${DEPLOY_BRANCH}'" || true
  else
    log_info "Cloning ${DEPLOY_GIT_URL} → ${DEPLOY_REMOTE_DIR}"
    ssh_cmd "mkdir -p '$(dirname "$DEPLOY_REMOTE_DIR")' && git clone --branch '${DEPLOY_BRANCH}' '${DEPLOY_GIT_URL}' '${DEPLOY_REMOTE_DIR}'"
    change_record "[cloned]    ${DEPLOY_GIT_URL} → ${DEPLOY_REMOTE_DIR}"
  fi

  # --- Nginx site config ---
  provision_nginx_site

  # --- Optional SSL ---
  if [[ -n "${DEPLOY_DOMAIN:-}" ]]; then
    if ui_confirm "Issue Let's Encrypt cert for ${DEPLOY_DOMAIN} now? (DNS must already point here)" N; then
      local email
      email="$(ui_ask "Email for Let's Encrypt" "arnoldchrisoduor@gmail.com")"
      if ssh_cmd "certbot --nginx -d '${DEPLOY_DOMAIN}' --non-interactive --agree-tos -m '${email}' --redirect"; then
        change_record "[issued]    SSL cert for ${DEPLOY_DOMAIN}"
      else
        log_warn "Certbot failed — site remains on HTTP. Re-run after DNS propagates."
      fi
    fi
  else
    log_info "No domain set — skipping SSL. Site will be reachable at http://${DEPLOY_HOST}"
  fi

  log_step_ok "prov" "Provision server" "complete"
}

provision_nginx_site() {
  local server_name="${DEPLOY_DOMAIN:-_}"
  # If no domain, also accept the raw IP as server_name
  if [[ -z "${DEPLOY_DOMAIN:-}" ]]; then
    server_name="${DEPLOY_HOST}"
  fi

  local tpl="${DEPLOY_ROOT}/deploy/templates/nginx-portfolio.conf.tpl"
  local rendered
  rendered="$(sed -e "s/__DOMAIN__/${server_name}/g" -e "s/__APP_PORT__/${DEPLOY_APP_PORT}/g" "$tpl")"

  local remote_conf="/etc/nginx/sites-available/portfolio"
  local remote_enabled="/etc/nginx/sites-enabled/portfolio"

  # Upload via SSH stdin
  local existing=""
  existing="$(ssh_cmd "cat '${remote_conf}' 2>/dev/null" || true)"
  if [[ "$existing" == "$rendered" ]]; then
    log_ok "Nginx site config already correct"
    change_record "(no changes) Nginx config already correct"
  else
    printf '%s\n' "$rendered" | ssh_cmd "cat > '${remote_conf}'"
    change_record "[created]   ${remote_conf}"
    log_ok "Wrote ${remote_conf}"
  fi

  ssh_cmd "
    rm -f /etc/nginx/sites-enabled/default
    ln -sfn '${remote_conf}' '${remote_enabled}'
    nginx -t
    systemctl reload nginx
  "
  change_record "[enabled]   nginx site portfolio (default site removed)"
}
