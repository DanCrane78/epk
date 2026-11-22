/* Renders content.js into the page. You shouldn't need to edit this file. */
(function () {
  "use strict";
  var C = window.EPK;
  if (!C) return;
  var TODO = !!C.showTodos;

  function $(id) { return document.getElementById(id); }
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function get(path) { return path.split(".").reduce(function (o, k) { return o && o[k]; }, C); }
  function todo(what, inline) { return TODO ? el("div", { class: "todo" + (inline ? " todo--inline" : ""), text: "to add: " + what + " (content.js)" }) : null; }
  function words(s) { return s.trim().split(/\s+/).length; }
  function link(url, text, cls) {
    var ext = /^https?:/.test(url);
    return el("a", { href: url, class: cls, target: ext ? "_blank" : null, rel: ext ? "noopener" : null }, [text]);
  }
  function each(list, fn) { (list || []).forEach(fn); }
  function fileName(p) { return "dan-crane-" + p.split("/").pop(); }

  document.querySelectorAll("[data-k]").forEach(function (n) {
    var v = get(n.getAttribute("data-k"));
    if (v != null) n.textContent = v;
  });

  // ── Hero
  var R = C.release || {};
  $("hero-cover").src = R.cover; $("hero-cover").alt = R.coverAlt || "";
  var ps = R.presaveUrl ? link(R.presaveUrl, R.presaveLabel || "pre-save", "btn btn--light") : todo("pre-save link");
  if (ps) $("presave").appendChild(ps);
  each(C.facts, function (f) { $("facts").appendChild(el("div", {}, [el("dt", { text: f.big }), el("dd", { text: f.small })])); });

  // ── Listen
  function spotifyEmbed(url) {
    var m = /open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|album|playlist|artist)\/([A-Za-z0-9]+)/.exec(url || "");
    return m ? { src: "https://open.spotify.com/embed/" + m[1] + "/" + m[2] + "?utm_source=generator&theme=0", tall: m[1] !== "track" } : null;
  }
  each(C.listen, function (t) {
    var e = spotifyEmbed(t.spotify);
    var item = el("div", { class: "track" }, [
      el("h3", { class: "track__title", text: t.title }),
      el("p", { class: "soft track__note", text: t.note })
    ]);
    if (e) item.appendChild(el("iframe", { class: "track__player", src: e.src, title: "Spotify: " + t.title,
      height: e.tall ? "352" : "152", loading: "lazy", allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" }));
    else { var td = todo("Spotify link for " + t.title); if (td) { td.classList.add("todo--player"); item.appendChild(td); } }
    if (e || TODO) $("listen-list").appendChild(item);
  });
  var P = C.privateLink || {};
  if (P.url) $("private-link").appendChild(el("div", { class: "private" }, [link(P.url, P.label + " →", "private__link"), el("p", { class: "soft", text: P.note })]));
  else if (TODO) $("private-link").appendChild(todo("private SoundCloud / Bandcamp link for stay home."));
  if (C.buy && C.buy.url) $("buy").appendChild(link(C.buy.url, C.buy.label + " →", "btn btn--ghost"));

  // ── Bio
  $("bio-short-text").appendChild(el("p", { text: C.bioShort }));
  $("bio-short-count").textContent = "· " + words(C.bioShort) + " words";
  each(C.bioLong, function (p) { $("bio-long-text").appendChild(el("p", { text: p })); });
  $("bio-long-count").textContent = "· " + words((C.bioLong || []).join(" ")) + " words";

  // ── Albums
  each(C.albums, function (a) {
    var art = a.cover
      ? el("img", { class: "album__cover", src: a.cover, alt: a.title + " cover", loading: "lazy", width: "800", height: "800" })
      : el("div", { class: "album__cover album__cover--text", "aria-hidden": "true" }, [el("span", { text: a.title.toLowerCase().replace(/ ep$/, "") + "." })]);
    var tl = el("ol", { class: "tracklist" });
    each(a.tracks, function (t) { tl.appendChild(el("li", {}, [el("span", { text: t[0] }), el("span", { class: "soft", text: t[1] })])); });
    var links = el("p", { class: "album__links" });
    each(a.links, function (l) { if (l.url) links.appendChild(link(l.url, l.name)); });
    $("albums").appendChild(el("article", { class: "album" }, [
      art,
      el("h3", {}, [a.title, a.with ? el("span", { class: "soft", text: " " + a.with }) : null]),
      el("p", { class: "album__meta soft", text: a.meta }),
      tl,
      a.note ? el("p", { class: "album__note soft", text: a.note }) : null,
      links
    ]));
  });

  // ── Singles + Dan Fresh tables (labels for the stacked mobile layout)
  function row(cells, heads) {
    return el("tr", {}, cells.map(function (c, i) { return el("td", { "data-l": heads[i], class: i === 1 ? "n" : null }, [c]); }));
  }
  each(C.singles, function (s) {
    $("singles").appendChild(row([el("span", {}, [s.title, s.extra ? el("span", { class: "soft", text: " " + s.extra }) : null]), s.year, s.note], ["release", "year", "note"]));
  });
  each(C.singleCovers, function (s) {
    $("single-covers").appendChild(el("li", {}, [
      el("img", { src: s.src, alt: s.title + " cover", loading: "lazy", width: "700", height: "700" }),
      el("p", {}, [el("b", { text: s.title }), el("br"), el("span", { class: "soft", text: s.note })])
    ]));
  });
  each(C.fresh, function (f) { $("fresh").appendChild(row([f.release, f.year, f.part], ["release", "year", "dan's part"])); });
  each(C.collaborators, function (p) { $("people").appendChild(el("div", { class: "person" }, [el("h3", { text: p.name }), el("p", { class: "soft", text: p.text })])); });
  each(C.collabPhotos, function (p) {
    $("collab-photos").appendChild(el("figure", {}, [
      el("a", { href: p.src, download: fileName(p.src), "aria-label": "Download: " + p.alt }, [el("img", { src: p.src, alt: p.alt, loading: "lazy" })]),
      el("figcaption", { class: "soft", text: p.caption })
    ]));
  });

  // ── Photos (each one downloads)
  function dlTile(p) {
    return el("li", {}, [el("a", { href: p.src, download: fileName(p.src), class: "dl", "aria-label": "Download photo: " + p.alt }, [
      el("img", { src: p.src, alt: p.alt, loading: "lazy", decoding: "async" }),
      el("span", { class: "dl__tag", "aria-hidden": "true", text: "download ↓" })
    ]), p.caption ? el("p", { class: "soft caption", text: p.caption }) : null]);
  }
  each(C.photos, function (p) { $("gallery").appendChild(dlTile(p)); });
  var PC = C.photosCredit || {}, pc = $("photo-credit");
  if (PC.name) {
    pc.appendChild(document.createTextNode("Photos: "));
    if (PC.instagram) pc.appendChild(link("https://www.instagram.com/" + PC.instagram.replace(/^@/, "") + "/", PC.name + " (Instagram @" + PC.instagram.replace(/^@/, "") + ")"));
    else pc.appendChild(document.createTextNode(PC.name));
  } else pc.remove();
  // ── Free song (Kit form): hidden when giveaway.show is false
  if (!(C.giveaway && C.giveaway.show) && $("free-song")) $("free-song").remove();

  var PP = C.pressPack || {}, dl = $("press-dl");
  if (PP.zip) dl.appendChild(el("a", { href: PP.zip, download: "", class: "btn btn--solid" }, ["download press pack (.zip)"]));
  var navSheet = $("nav-sheet");   // the "press sheet" link in the top menu
  if (navSheet) { if (PP.sheet) navSheet.href = PP.sheet; else navSheet.parentNode.remove(); }
  if (PP.sheet) dl.appendChild(el("a", { href: PP.sheet, download: "", class: "btn btn--ghost" }, ["press sheet (pdf)"]));
  else if (TODO) dl.appendChild(todo("press sheet PDF", true));

  // ── Live: video loads only when clicked
  var V = C.liveVideo || {};
  function videoSrc(url) {
    var y = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|live\/|shorts\/))([\w-]{11})/.exec(url || "");
    if (y) return { src: "https://www.youtube-nocookie.com/embed/" + y[1] + "?autoplay=1&rel=0", thumb: "https://i.ytimg.com/vi/" + y[1] + "/hqdefault.jpg" };
    var v = /vimeo\.com\/(?:video\/)?(\d+)/.exec(url || "");
    if (v) return { src: "https://player.vimeo.com/video/" + v[1] + "?autoplay=1&dnt=1", thumb: null };
    return null;
  }
  function player(vs, caption, poster, posterFirst) {
    var btn = el("button", { type: "button", class: "video", "aria-label": "Play video: " + caption }, [
      el("img", { src: (posterFirst && poster) || vs.thumb || poster, alt: "", loading: "lazy" }),
      el("span", { class: "video__play", "aria-hidden": "true", text: "▶" })
    ]);
    btn.addEventListener("click", function () {
      var f = el("iframe", { src: vs.src, title: caption, allow: "autoplay; fullscreen; picture-in-picture", allowfullscreen: "" });
      btn.replaceWith(el("div", { class: "video video--on" }, [f])); f.focus();
    });
    return btn;
  }

  // ── Videos section
  var shownVideos = 0;
  each(C.videos, function (v) {
    var vsrc = videoSrc(v.url);
    if (!vsrc && !TODO) return;
    shownVideos++;
    $("video-list").appendChild(el("figure", { class: "vid" }, [
      vsrc ? player(vsrc, v.title, v.poster, true) : todo("YouTube link for " + v.title),
      el("figcaption", {}, [el("b", { text: v.title }), el("span", { class: "soft", text: " " + (v.note || "") })])
    ]));
  });
  if (!shownVideos) { $("videos").remove(); var nv = document.querySelector('a[href="#videos"]'); if (nv) nv.parentNode.remove(); }

  var vs = videoSrc(V.url);
  if (vs) {
    $("video").appendChild(player(vs, V.caption || "Live video", ((C.livePhotos || [])[0] || {}).src));
  } else if (TODO) {
    var t = todo("live video link (YouTube or Vimeo)"); t.classList.add("todo--video"); $("video").appendChild(t);
  } else {
    var first = (C.livePhotos || [])[0];
    if (first) $("video").appendChild(el("img", { class: "live__lead", src: first.src, alt: first.alt, loading: "lazy" }));
  }
  each(C.shows, function (s) {
    $("shows").appendChild(el("li", {}, [el("span", { class: "shows__date", text: s.date }), el("span", { text: s.venue }), el("span", { class: "soft shows__city", text: s.city })]));
  });
  if (TODO) $("shows").after(todo("earlier shows", true));
  each(C.livePhotos, function (p) { $("live-photos").appendChild(dlTile(p)); });

  // ── Press
  each(C.press, function (q) {
    var src = q.url ? link(q.url, q.outlet) : q.outlet;
    $("quotes").appendChild(el("figure", { class: "quote" }, [
      el("blockquote", {}, [el("p", { text: q.paraphrased ? q.text : "\u201c" + q.text + "\u201d" })]),
      el("figcaption", { class: "soft" }, [el("span", {}, [src, ", " + q.kind]), q.paraphrased && TODO ? el("span", { class: "draft", text: "paraphrased: swap in exact line" }) : null])
    ]));
  });
  var pa = $("press-also");
  pa.appendChild(document.createTextNode((C.pressAlso || "") + " Interviewed by "));
  each(C.interviews, function (iv, i, arr) {
    pa.appendChild(link(iv.url, iv.name));
    pa.appendChild(document.createTextNode(i < arr.length - 2 ? ", " : i === arr.length - 2 ? " and " : "."));
  });

  // ── Contact
  var K = C.contact || {}, cm = $("contact-main");
  if (K.email) cm.appendChild(link("mailto:" + K.email, K.email, "contact__email"));
  else if (TODO) cm.appendChild(todo("contact email"));
  if (K.instagram) cm.appendChild(el("p", {}, [link("https://instagram.com/" + K.instagram.replace(/^@/, ""), "instagram @" + K.instagram.replace(/^@/, ""))]));
  else if (TODO) cm.appendChild(todo("Instagram handle"));
  each(C.profiles, function (p) { if (p.url) $("profiles").appendChild(el("li", {}, [link(p.url, p.name)])); });

  // ── Copy buttons
  var toast = $("toast"), tm;
  function say(msg) { toast.textContent = msg; toast.classList.add("is-on"); clearTimeout(tm); tm = setTimeout(function () { toast.classList.remove("is-on"); }, 2200); }
  function fallbackCopy(text) {
    var ta = el("textarea", { readonly: "", style: "position:fixed;opacity:0" }); ta.value = text;
    document.body.appendChild(ta); ta.select();
    var ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
    ta.remove(); return ok;
  }
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var text = Array.prototype.map.call($(b.getAttribute("data-copy")).querySelectorAll("p"), function (p) { return p.textContent; }).join("\n\n");
      var done = function () { b.textContent = "copied"; say("bio copied to clipboard"); setTimeout(function () { b.textContent = "copy"; }, 2000); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, function () { if (fallbackCopy(text)) done(); });
      else if (fallbackCopy(text)) done();
    });
  });
})();
