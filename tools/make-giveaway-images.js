// Renders the Instagram images for the free-song giveaway into assets/social/:
//   giveaway-post.jpg  (1080x1350, 4:5 feed post)
//   giveaway-story.jpg (1080x1920, story)
// Run from the repo root:  node tools/make-giveaway-images.js
// Needs Playwright (npx playwright install chromium, if you don't have it).
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
(async () => {
  const root = path.resolve(__dirname, "..");
  fs.mkdirSync(path.join(root, "assets/social"), { recursive: true });
  const b = await chromium.launch();
  for (const [format, h] of [["post", 1350], ["story", 1920]]) {
    const p = await b.newPage({ viewport: { width: 1080, height: h } });
    await p.goto("file://" + path.join(root, "tools/giveaway-template.html") + "?format=" + format);
    await p.evaluate(() => document.fonts.ready);
    await p.waitForLoadState("networkidle");
    const out = path.join(root, "assets/social/giveaway-" + format + ".jpg");
    await p.screenshot({ path: out, type: "jpeg", quality: 90 });
    console.log("Wrote " + path.relative(root, out));
    await p.close();
  }
  await b.close();
})();
