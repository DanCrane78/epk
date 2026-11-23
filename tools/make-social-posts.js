// Renders the Instagram posts in tools/social-posts.html to assets/social/.
// Run from the repo root:  node tools/make-social-posts.js
// The countdown counts to 2 Feb 2027 from today; to fix the number: node tools/make-social-posts.js 71
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const root = path.resolve(__dirname, "..");
  const days = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 3000 }, deviceScaleFactor: 1 });
  await p.goto("file://" + path.join(root, "tools/social-posts.html") + (days ? "?days=" + days : ""));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  const n = await p.textContent("#days");
  for (const [id, file] of [["countdown", "post-countdown-" + n + "-days.jpg"], ["ostr", "post-since-2004.jpg"]]) {
    await (await p.$("#" + id)).screenshot({ path: path.join(root, "assets/social", file), type: "jpeg", quality: 92 });
    console.log("Wrote assets/social/" + file);
  }
  await b.close();
})();
