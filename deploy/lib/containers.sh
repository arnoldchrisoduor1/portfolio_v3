#!/usr/bin/env bash
# Docker Compose bring-up / restart on the server.

containers_up() {
  log_step_start "docker" "docker compose up -d --build"

  # Stream output live
  if ! retry 2 5 "docker compose up" -- ssh_cmd \
    "cd '${DEPLOY_REMOTE_DIR}' && docker compose up -d --build"; then
    log_step_fail "docker" "docker compose up" "failed"
    return 1
  fi

  change_record "[restarted] containers via docker compose up -d --build"
  # Show status
  ssh_cmd "cd '${DEPLOY_REMOTE_DIR}' && docker compose ps" || true
  log_step_ok "docker" "docker compose up -d --build"
}

containers_restart() {
  log_step_start "restart" "Restart containers (no rebuild)"

  if ! ssh_cmd "cd '${DEPLOY_REMOTE_DIR}' && docker compose restart"; then
    log_step_fail "restart" "Restart containers" "failed"
    return 1
  fi
  change_record "[restarted] containers (compose restart)"
  ssh_cmd "cd '${DEPLOY_REMOTE_DIR}' && docker compose ps" || true
  log_step_ok "restart" "Restart containers"
}
