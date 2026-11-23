// Renders the Instagram posts in tools/social-posts.html to assets/social/.
// Run from the repo root:
//   node tools/make-social-posts.js              → the catalogue and since-2004 posts
//   node tools/make-social-posts.js countdown    → also a countdown post (days to 2 Feb 2027 from today)
//   node tools/make-social-posts.js countdown 30 → a countdown with a fixed number
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const root = path.resolve(__dirname, "..");
  const wantCountdown = process.argv[2] === "countdown";
  const days = wantCountdown ? process.argv[3] : null;
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 5000 }, deviceScaleFactor: 1 });
  await p.goto("file://" + path.join(root, "tools/social-posts.html") + (days ? "?days=" + days : ""));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  const posts = [["catalogue", "post-four-albums.jpg"], ["ostr", "post-since-2004.jpg"]];
  if (wantCountdown) posts.push(["countdown", "post-countdown-" + (await p.textContent("#days")) + "-days.jpg"]);
  for (const [id, file] of posts) {
    await (await p.$("#" + id)).screenshot({ path: path.join(root, "assets/social", file), type: "jpeg", quality: 92 });
    console.log("Wrote assets/social/" + file);
  }
  await b.close();
})();
