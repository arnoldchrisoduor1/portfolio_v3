#!/usr/bin/env bash
# Local Next.js static export build.

build_local() {
  log_step_start "build" "Local Next.js build"

  if [[ ! -f "${DEPLOY_ROOT}/package.json" ]]; then
    log_step_fail "build" "Local Next.js build" "package.json not found"
    return 1
  fi

  pushd "$DEPLOY_ROOT" >/dev/null

  if [[ ! -d node_modules ]]; then
    log_info "node_modules missing — running npm ci / npm install"
    if [[ -f package-lock.json ]]; then
      npm ci
    else
      npm install
    fi
    change_record "[installed] local npm dependencies"
  fi

  log_info "Running npm run build…"
  # Stream build output; spinner not needed when output is visible
  if ! npm run build; then
    popd >/dev/null
    log_step_fail "build" "Local Next.js build" "npm run build failed"
    return 1
  fi

  if [[ ! -d out ]] || [[ -z "$(ls -A out 2>/dev/null)" ]]; then
    popd >/dev/null
    log_step_fail "build" "Local Next.js build" "out/ missing or empty"
    return 1
  fi

  if [[ ! -f out/index.html ]]; then
    popd >/dev/null
    log_step_fail "build" "Local Next.js build" "out/index.html missing"
    return 1
  fi

  local count
  count="$(find out -type f | wc -l | tr -d ' ')"
  popd >/dev/null
  change_record "[built]     out/ (${count} files)"
  log_step_ok "build" "Local Next.js build" "${count} files in out/"
}
