# Deploying portfolio_v3

Interactive, menu-driven deploy for this static Next.js export.

## Quick start

From Git Bash (or any bash) in the project root:

```bash
./deploy.sh
```

No CLI flags. Pick a numbered menu option; press Enter to accept defaults.

| Option | What it does |
|--------|----------------|
| 1 | Full deploy: build → commit/push → server pull → checks → containers → reachability |
| 2 | Local build + push to GitHub only |
| 3 | Server pull + `docker compose up -d --build` (skip local build/git) |
| 4 | Restart containers only |
| 5 | Pre-flight checks (ports / DNS / SSL / Docker / Nginx) |
| 6 | **First-time provision** (Docker, Nginx, Certbot, UFW, clone, site config) |
| 7 | Tail `deploy.log` |
| 0 | Exit |

On a brand-new droplet, run **6** once, then **1** for deploys.

## Architecture

```
Internet → host Nginx (:80/:443) → 127.0.0.1:8472 → Docker (nginx:alpine serving out/)
```

- Build happens **locally** (`npm run build` → `out/`), committed and pulled on the server.
- Host Nginx + Certbot handle TLS; the container only listens on localhost.

## `deploy.config`

Created on first successful config prompt. **Gitignored.** Stores:

- `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`
- `DEPLOY_SSH_ALIAS` (default `portfolio-deploy`)
- `DEPLOY_REMOTE_DIR` (default `/opt/portfolio_v3`)
- `DEPLOY_DOMAIN`, `DEPLOY_APP_PORT`, `DEPLOY_PUBLIC_URL`, git URL/branch

**Reset / change server:** delete `deploy.config` and re-run `./deploy.sh` — you will be prompted again.

## SSH

- Default key: `~/.ssh/id_ed25519` (this is what the current droplet accepts).
- An older `personal` / `personal.pub` pair may live in the repo working tree; the script copies it to `~/.ssh/portfolio_personal` and can optionally install the public key on the server. Prefer keeping keys only under `~/.ssh/` (they are gitignored).
- The script can add a `~/.ssh/config` Host alias (preview + confirm first). After that: `ssh portfolio-deploy`.

## Domain & SSL

If `DEPLOY_DOMAIN` is empty, the site is served over **HTTP** at `http://<server-ip>`.  
Point DNS A record at the droplet, set the domain in `deploy.config` (or re-answer prompts), then re-run provision/checks and accept the Certbot prompt.

## Logs & audit

Each run appends to `deploy.log` (gitignored) and prints:

1. A **changes made** list (`[installed]`, `[pulled]`, `(no changes)`, …)
2. A **step results** table with total time

## Manual one-offs (not fully in the script)

See notes at the bottom of this file after the first provisioning pass — anything done by hand on the server that the script does not encode should be listed there.

---

## Server notes from first setup

Done on `perseonal-server` (`104.248.224.133`, Ubuntu 24.04) during the initial pass:

- **Working SSH key is `~/.ssh/id_ed25519`**, not the in-repo `personal` key. The droplet’s `authorized_keys` only had the ed25519 key. `personal` / `personal.pub` are gitignored; copies live under `~/.ssh/portfolio_personal(.pub)` if you still want them.
- First provisioning used `deploy/remote-bootstrap.sh` once (same steps as menu option 6). Safe to ignore later — option 6 is the supported path.
- Added **1G swapfile** (`/swapfile`) because the droplet has ~1GB RAM.
- Host stack: Docker Engine + Compose plugin, host Nginx reverse-proxy → `127.0.0.1:8472`, Certbot installed but **no cert issued** (no domain configured yet).
- UFW enabled: 22, 80, 443.
- Project cloned to `/opt/portfolio_v3`.
- SSH alias `portfolio-deploy` written to local `~/.ssh/config`.
- Domain **oduor-arnold.com** (+ www) pointed at the droplet; Nginx `server_name` updated; Let's Encrypt cert issued via certbot (expires ~2026-12-10, auto-renew enabled).
- Live URLs: https://oduor-arnold.com and https://www.oduor-arnold.com (HTTP → HTTPS redirect).
- `deploy.config` uses `DEPLOY_DOMAIN=oduor-arnold.com` and `DEPLOY_PUBLIC_URL=https://oduor-arnold.com`.
