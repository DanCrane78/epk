// Renders assets/press/dan-crane-press-sheet.pdf, the one-page A4 press sheet,
// from tools/press-sheet.html (which reads content.js). Run from the repo root:
//   node tools/make-press-sheet.js
// Needs Playwright (npx playwright install chromium, if you don't have it).
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const root = path.resolve(__dirname, "..");
  const out = path.join(root, "assets/press/dan-crane-press-sheet.pdf");
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto("file://" + path.join(root, "tools/press-sheet.html"), { waitUntil: "load" });
  await p.evaluate(() => document.fonts.ready);
  const over = await p.evaluate(() => {
    const pg = document.querySelector(".page"), cols = document.querySelector(".cols");
    const bottom = cols.getBoundingClientRect().bottom;
    const colOver = Math.max(...[...cols.querySelectorAll("section")].map((sec) => Math.ceil(sec.getBoundingClientRect().bottom - bottom)));
    return Math.max(pg.scrollHeight - pg.clientHeight, colOver);
  });
  if (over > 0) console.warn("Warning: content is " + over + "px too tall for one page; it will be cut off.");
  await p.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
  await b.close();
  console.log("Wrote assets/press/dan-crane-press-sheet.pdf");
})();
