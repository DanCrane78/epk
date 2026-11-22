#!/usr/bin/env bash
# Rebuilds assets/press/dan-crane-press-pack.zip from the full-size photos,
# the cover, the logo and the press sheet. Run from the repo root:
#   bash tools/make-press-pack.sh
set -euo pipefail
cd "$(dirname "$0")/.."
out=assets/press/dan-crane-press-pack.zip
tmp=$(mktemp -d); pack="$tmp/Dan Crane - press pack"
mkdir -p "$pack/photos" "$pack/artwork" "$pack/logo"
cp assets/photos/full/* "$pack/photos/"
cp assets/cover/* "$pack/artwork/"
cp assets/brand/logo.* "$pack/logo/" 2>/dev/null || true
cp assets/press/*.pdf "$pack/" 2>/dev/null || true
node -e '
  global.window = {}; require("./content.js"); const C = window.EPK;
  const txt = [C.artist + " — " + C.genre, "", "SHORT BIO", C.bioShort, "", "LONG BIO", C.bioLong.join("\n\n")].join("\n");
  require("fs").writeFileSync(process.argv[1], txt + "\n");' "$pack/bio.txt"
rm -f "$out"; (cd "$tmp" && zip -rq -X - "Dan Crane - press pack") > "$out"
rm -rf "$tmp"; echo "Wrote $out ($(du -h "$out" | cut -f1))"
