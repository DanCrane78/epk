// Renders assets/og/og-image.jpg (1200x630), the picture shown when the link
// is shared. Run from the repo root:  node tools/make-og-image.js
// Needs Playwright (npx playwright install chromium, if you don't have it).
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const root = path.resolve(__dirname, "..");
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.goto("file://" + path.join(root, "tools/og-template.html"));
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(root, "assets/og/og-image.jpg"), type: "jpeg", quality: 88 });
  await b.close();
  console.log("Wrote assets/og/og-image.jpg");
})();
