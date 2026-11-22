# Dan Crane: EPK

One-page press kit for **stay home.** (out 2.2.27). Plain HTML, CSS and a little JS. No build step, no paid services.

## Editing

**All text and links live in `content.js`.** Open it, change what's between the quotes, save, refresh.

- Empty links (`""`) are hidden on the live site.
- While `showTodos: true`, missing links show as dashed "To add" boxes and the bios show "Draft: check". **Set it to `false` before sending the link out.**
- The link-preview text (what shows in iMessage, WhatsApp, X, Facebook) is at the top of `index.html`, because preview bots don't run JavaScript.

## Where files go

| What | Path |
|---|---|
| Logo, drawn "stay home." title (dark + light versions) | `assets/brand/` |
| Typeface (Jost, free licence, hosted here) | `assets/fonts/` |
| "stay home." cover | `assets/cover/stay-home.jpg` |
| Press and live photos (each one downloads when clicked) | `assets/photos/` |
| Album and single artwork | `assets/releases/` |
| Press sheet (one-page A4 PDF, built from `content.js`) | `assets/press/dan-crane-press-sheet.pdf` |

To add a photo: drop it in `assets/photos/` and add a line for it in `content.js` (`photos` or `livePhotos`).

After changing photos, the cover, the bio or the press quotes, rebuild the downloads:

```bash
node tools/make-press-sheet.js    # rebuilds the one-page press sheet PDF (needs Playwright)
bash tools/make-press-pack.sh     # rebuilds the press-pack zip (includes the PDF, so run it second)
node tools/make-og-image.js       # rebuilds the share-preview image (needs Playwright)
```

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy free on GitHub Pages

1. **Get the files onto `main`.** On github.com/dancrane78/epk, open a pull request from `claude/dan-crane-epk-website-w39r53` into `main` and merge it. (The repo is new, so if there's no `main` yet, go to **Settings → Branches**, set the default branch to `claude/dan-crane-epk-website-w39r53`, and use that branch in step 3 instead.)
2. Make sure the repo is **public**. GitHub Pages is free only for public repos on a free account.
3. Go to **Settings → Pages**. Under **Build and deployment**, choose **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, then **Save**.
4. Wait a minute or two, then refresh that page. It shows the live address: **https://dancrane78.github.io/epk/**
5. Check the share preview by pasting the address into https://www.opengraph.xyz.

From then on, every change you commit to `main` (including editing `content.js` in GitHub's web editor) goes live within a minute or two.

### Custom domain (optional)

To use your own domain, e.g. `epk.massivecranes.com`:

1. In **Settings → Pages → Custom domain**, enter the domain and save.
2. At your domain registrar, add a `CNAME` record: `epk` → `dancrane78.github.io`.
3. Once it resolves, tick **Enforce HTTPS**.
4. Update the four `https://dancrane78.github.io/epk/` addresses at the top of `index.html` to the new domain.
