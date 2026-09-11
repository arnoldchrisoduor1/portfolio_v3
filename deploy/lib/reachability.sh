#!/usr/bin/env bash
# Public + internal reachability checks with retry/backoff.

reachability_check() {
  log_step_start "reach" "Reachability check"

  local url="${DEPLOY_PUBLIC_URL}"
  local app_port="${DEPLOY_APP_PORT}"
  local ok_public=0
  local ok_internal=0

  # Internal: curl localhost:APP_PORT on serve
  log_info "Internal check: curl http://127.0.0.1:${app_port}/"
  set +e
  local internal_out
  internal_out="$(ssh_cmd "curl -sS -o /dev/null -w '%{http_code}' --max-time 5 http://127.0.0.1:${app_port}/" 2>/dev/null)"
  local irc=$?
  set -e
  if [[ $irc -eq 0 && "$internal_out" =~ ^[23] ]]; then
    log_ok "Container responds on :${app_port} (HTTP ${internal_out})"
    ok_internal=1
  else
    log_err "Container NOT responding on localhost:${app_port} (code=${internal_out:-none})"
  fi

  # Public URL with retries
  log_info "Public check: ${url}"
  local attempt=1
  local max=6
  local delay=3
  set +e
  while (( attempt <= max )); do
    local code
    code="$(curl -sS -o /dev/null -w '%{http_code}' --max-time 10 -L "$url" 2>/dev/null)"
    local crc=$?
    if [[ $crc -eq 0 && "$code" =~ ^[23] ]]; then
      log_ok "Public URL healthy (HTTP ${code})"
      ok_public=1
      break
    fi
    log_warn "Public check attempt ${attempt}/${max}: code=${code:-err} — retry in ${delay}s"
    sleep "$delay"
    delay=$(( delay + 2 ))
    attempt=$(( attempt + 1 ))
  done
  set -e

  if [[ $ok_internal -eq 1 && $ok_public -eq 1 ]]; then
    log_step_ok "reach" "Reachability check" "internal+public OK"
    return 0
  elif [[ $ok_internal -eq 1 && $ok_public -eq 0 ]]; then
    log_step_fail "reach" "Reachability" "container OK but nginx/proxy/DNS/SSL misconfigured"
    return 1
  elif [[ $ok_internal -eq 0 && $ok_public -eq 1 ]]; then
    log_step_ok "reach" "Reachability check" "public OK (internal check odd)"
    return 0
  else
    log_step_fail "reach" "Reachability" "both internal and public failed"
    return 1
  fi
}
