#!/usr/bin/env bash
# Fetch all URLs from urls.txt in parallel, save HTML by sanitized filename.
# Skips PDFs (we just record their existence).
set -u
ROOT="$(cd "$(dirname "$0")" && pwd)"
URLS="$ROOT/urls.txt"
OUT="$ROOT/pages"
mkdir -p "$OUT"

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36"

fetch_one() {
  local url="$1"
  # skip PDFs
  case "$url" in *.pdf) return 0 ;; esac
  # sanitize: strip protocol+host, replace / with __, trim trailing __
  local path="${url#https://sierradigitalinc.com/}"
  path="${path%/}"
  [ -z "$path" ] && path="_home"
  local fname="${path//\//__}.html"
  local target="$OUT/$fname"
  # already fetched? skip (resumable)
  if [ -s "$target" ]; then
    echo "SKIP $url"
    return 0
  fi
  if curl -sS --max-time 30 -A "$UA" -L "$url" -o "$target.tmp" -w "%{http_code}\n" > "$target.code" 2>"$target.err"; then
    mv "$target.tmp" "$target"
    echo "OK   $(cat "$target.code") $url"
  else
    echo "FAIL $url ($(cat "$target.err" 2>/dev/null | head -1))"
    rm -f "$target.tmp"
  fi
}
export -f fetch_one
export OUT UA

# 8-way parallel
grep -v '^$' "$URLS" | xargs -P 8 -I {} bash -c 'fetch_one "$@"' _ {}
echo "DONE"
ls "$OUT" | wc -l
