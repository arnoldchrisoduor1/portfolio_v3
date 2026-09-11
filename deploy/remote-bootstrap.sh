#!/usr/bin/env bash
# One-shot remote provisioner (idempotent). Invoked from local machine during first setup.
set -euo pipefail

echo "==> apt update + base packages"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq ca-certificates curl gnupg lsb-release git ufw openssl \
  apt-transport-https software-properties-common

echo "==> swap"
if [[ ! -f /swapfile ]]; then
  fallocate -l 1G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=1024
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  grep -q '/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
  echo "swap created"
else
  echo "swap exists"
fi
swapon --show || true
free -h

echo "==> Docker"
if command -v docker >/dev/null && docker compose version >/dev/null 2>&1; then
  echo "Docker already installed"
else
  install -m 0755 -d /etc/apt/keyrings
  if [[ ! -f /etc/apt/keyrings/docker.asc ]]; then
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    chmod a+r /etc/apt/keyrings/docker.asc
  fi
  arch="$(dpkg --print-architecture)"
  codename="$(. /etc/os-release && echo "$VERSION_CODENAME")"
  echo "deb [arch=${arch} signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu ${codename} stable" \
    > /etc/apt/sources.list.d/docker.list
  apt-get update -qq
  apt-get install -y -qq docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
fi
systemctl enable --now docke
docker --version
docker compose version

echo "==> Nginx"
if command -v nginx >/dev/null; then
  echo "Nginx already installed"
else
  apt-get install -y -qq nginx
fi
systemctl enable --now nginx
nginx -v

echo "==> Certbot"
if command -v certbot >/dev/null; then
  echo "Certbot already installed"
else
  apt-get install -y -qq certbot python3-certbot-nginx
fi
certbot --version

echo "==> UFW"
ufw allow OpenSSH >/dev/null || true
ufw allow 80/tcp >/dev/null || true
ufw allow 443/tcp >/dev/null || true
ufw --force enable
ufw status

REMOTE_DIR="/opt/portfolio_v3"
GIT_URL="https://github.com/arnoldchrisoduor1/portfolio_v3.git"
BRANCH="main"

echo "==> Clone project"
if [[ -d "${REMOTE_DIR}/.git" ]]; then
  echo "Already cloned"
  cd "$REMOTE_DIR"
  git fetch origin
  git checkout "$BRANCH"
  git pull --ff-only origin "$BRANCH" || true
else
  mkdir -p "$(dirname "$REMOTE_DIR")"
  git clone --branch "$BRANCH" "$GIT_URL" "$REMOTE_DIR"
fi

APP_PORT="8472"
SERVER_NAME="104.248.224.133"

echo "==> Nginx site config"
cat > /etc/nginx/sites-available/portfolio <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name ${SERVER_NAME};

    location / {
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
rm -f /etc/nginx/sites-enabled/default
ln -sfn /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
nginx -t
systemctl reload nginx

echo "==> Provision complete"
echo "Next: pull latest (after local push of docker-compose bind), then docker compose up"
