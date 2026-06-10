#!/usr/bin/env bash
# Sierra Website — dev server launcher
# Usage:  bash start.sh [PORT]
# Kills any existing process on the port, then starts `next dev`.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

PORT="${1:-3000}"

# ── PATH: add Node.js so `node` is available ───────────────────────────────────
export PATH="/c/Program Files/nodejs:$PATH"

# ── Verify node_modules are installed ──────────────────────────────────────────
NEXT_BIN="$SCRIPT_DIR/node_modules/.bin/next"
if [ ! -f "$NEXT_BIN" ]; then
  echo ""
  echo "ERROR: node_modules not found."
  echo "       Run:  npm install   (or pnpm install)"
  echo ""
  exit 1
fi

# ── Kill anything already listening on PORT ────────────────────────────────────
kill_port() {
  local port="$1"
  local pids

  # Windows (Git Bash) — netstat.exe + taskkill.exe
  if command -v netstat.exe > /dev/null 2>&1; then
    pids=$(netstat.exe -ano 2>/dev/null \
      | grep -E "[:.]${port}[[:space:]]" \
      | grep "LISTENING" \
      | awk '{print $NF}' \
      | sort -u \
      || true)

    if [ -n "$pids" ]; then
      echo "  Port ${port} in use — killing PID(s): $(echo $pids | tr '\n' ' ')"
      for pid in $pids; do
        taskkill.exe /F /PID "$pid" > /dev/null 2>&1 && echo "  Killed PID $pid" || true
      done
      sleep 0.8
    else
      echo "  Port ${port} is free"
    fi

  # Unix / macOS fallback
  elif command -v lsof > /dev/null 2>&1; then
    pids=$(lsof -ti ":${port}" 2>/dev/null || true)
    if [ -n "$pids" ]; then
      echo "  Port ${port} in use — killing PID(s): $pids"
      echo "$pids" | xargs kill -9 2>/dev/null || true
      sleep 0.8
    else
      echo "  Port ${port} is free"
    fi
  else
    echo "  (Cannot check port — netstat.exe and lsof not found)"
  fi
}

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Sierra Website — dev server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Checking port ${PORT}…"
kill_port "$PORT"
echo ""
echo "  Starting:  http://localhost:${PORT}"
echo ""

# exec replaces this shell process so Ctrl-C / terminal output work naturally
exec "$NEXT_BIN" dev --port "$PORT"
