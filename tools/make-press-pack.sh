#!/usr/bin/env bash
# Rebuilds assets/press/dan-crane-press-pack.zip from the photos, the cover
# and release artwork, the logos, the press sheet and the bios in content.js. Run from the repo root:
#   bash tools/make-press-pack.sh
set -euo pipefail
cd "$(dirname "$0")/.."
out=assets/press/dan-crane-press-pack.zip
tmp=$(mktemp -d); pack="$tmp/Dan Crane - press pack"
mkdir -p "$pack/photos" "$pack/artwork" "$pack/logo"
cp assets/photos/* "$pack/photos/"
cp assets/cover/* assets/releases/* "$pack/artwork/"
cp assets/brand/logo*.svg assets/brand/stay-home-title*.svg "$pack/logo/"
cp assets/press/*.pdf "$pack/" 2>/dev/null || true
node -e '
  global.window = {}; require("./content.js"); const C = window.EPK;
  const txt = [C.artist, C.lede, "", "SHORT BIO", C.bioShort, "", "LONG BIO", C.bioLong.join("\n\n"), "", "HISTORY", C.bioHistory].join("\n");
  require("fs").writeFileSync(process.argv[1], txt + "\n");' "$pack/bio.txt"
rm -f "$out"; (cd "$tmp" && zip -rq -X - "Dan Crane - press pack") > "$out"
rm -rf "$tmp"; echo "Wrote $out ($(du -h "$out" | cut -f1))"
