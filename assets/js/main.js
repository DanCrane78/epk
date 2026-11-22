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
      else if (k === "html") n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function get(path) { return path.split(".").reduce(function (o, k) { return o && o[k]; }, C); }
  function todo(what) { return TODO ? el("div", { class: "todo", text: "To add: " + what + " (content.js)" }) : null; }
  function words(s) { return s.trim().split(/\s+/).length; }
  function ext(url) { return /^https?:/.test(url) ? { target: "_blank", rel: "noopener" } : {}; }
  function link(url, text, cls) {
    var a = el("a", Object.assign({ href: url, class: cls }, ext(url)), [text]);
    return a;
  }

  // Simple text slots: <span data-k="release.title">
  document.querySelectorAll("[data-k]").forEach(function (n) {
    var v = get(n.getAttribute("data-k"));
    if (v != null) n.textContent = v;
  });

  // ── Hero
  var R = C.release || {};
  $("presave").appendChild(R.presaveUrl
    ? link(R.presaveUrl, R.presaveLabel || "Pre-save", "btn btn--solid")
    : todo("pre-save link"));

  // ── Listen
  function spotifyEmbed(url) {
    var m = /open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|album|playlist|artist)\/([A-Za-z0-9]+)/.exec(url || "");
    return m ? "https://open.spotify.com/embed/" + m[1] + "/" + m[2] + "?utm_source=generator&theme=0" : null;
  }
  (C.listen || []).forEach(function (t) {
    var src = spotifyEmbed(t.spotify);
    var item = el("div", { class: "track" }, [
      el("div", { class: "track__head" }, [
        el("h3", { class: "track__title", text: t.title }),
        el("p", { class: "soft", text: t.note })
      ])
    ]);
    if (src) {
      var tall = /\/album\/|\/playlist\//.test(src);
      item.appendChild(el("iframe", {
        class: "track__player", src: src, title: "Spotify player: " + t.title,
        height: tall ? "352" : "152", loading: "lazy",
        allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }));
    } else {
      item.appendChild(todo("Spotify link for " + t.title));
    }
    $("listen-list").appendChild(item);
  });
  var P = C.privateLink || {};
  if (P.url) {
    $("private-link").appendChild(el("div", { class: "private" }, [
      link(P.url, P.label + " ↗", "private__link"),
      el("p", { class: "soft", text: P.note })
    ]));
  } else if (TODO) {
    $("private-link").appendChild(todo("private SoundCloud / Bandcamp link"));
  }

  // ── Bio
  function draftTag() { return TODO ? el("span", { class: "draft", text: "Draft: check" }) : null; }
  var bs = $("bio-short-text");
  bs.appendChild(el("p", { text: C.bioShort }));
  $("bio-short-count").textContent = words(C.bioShort) + " words";
  var bl = $("bio-long-text");
  (C.bioLong || []).forEach(function (p) { bl.appendChild(el("p", { text: p })); });
  $("bio-long-count").textContent = words((C.bioLong || []).join(" ")) + " words";
  if (TODO) {
    document.querySelectorAll(".bio__head h3").forEach(function (h) { h.appendChild(draftTag()); });
  }

  (C.discography || []).forEach(function (d) {
    $("disco").appendChild(el("li", {}, [
      el("span", { class: "disco__title", text: d.title }),
      el("span", { class: "disco__credit", text: d.credit }),
      el("span", { class: "disco__meta", text: [d.format, d.year].filter(Boolean).join(" · ") })
    ]));
  });

  // ── Photos
  (C.photos || []).forEach(function (p) {
    var name = (p.full || p.src).split("/").pop();
    $("gallery").appendChild(el("li", {}, [
      el("a", { href: p.full || p.src, download: "dan-crane-" + name, class: "gallery__item",
                "aria-label": "Download full size: " + p.alt }, [
        el("img", { src: p.src, alt: p.alt, loading: "lazy", decoding: "async", width: "1200", height: "1500" }),
        el("span", { class: "gallery__dl", "aria-hidden": "true", text: "Download ↓" })
      ]),
      p.credit ? el("p", { class: "soft credit", text: "Photo: " + p.credit }) : null
    ]));
  });
  var PP = C.pressPack || {};
  var dl = $("press-dl");
  if (PP.zip) dl.appendChild(el("a", { href: PP.zip, download: "", class: "btn btn--solid" }, ["Download press pack (.zip)"]));
  if (PP.sheet) dl.appendChild(el("a", { href: PP.sheet, download: "", class: "btn btn--ghost" }, ["Press sheet (PDF)"]));
  else if (TODO) dl.appendChild(todo("press sheet PDF"));

  // ── Live video: loads only when clicked (keeps the page fast and private)
  var V = C.liveVideo || {};
  function videoSrc(url) {
    var y = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|live\/|shorts\/))([\w-]{11})/.exec(url || "");
    if (y) return { src: "https://www.youtube-nocookie.com/embed/" + y[1] + "?autoplay=1&rel=0", thumb: "https://i.ytimg.com/vi/" + y[1] + "/hqdefault.jpg" };
    var v = /vimeo\.com\/(?:video\/)?(\d+)/.exec(url || "");
    if (v) return { src: "https://player.vimeo.com/video/" + v[1] + "?autoplay=1&dnt=1", thumb: null };
    return null;
  }
  var vs = videoSrc(V.url);
  if (vs) {
    var poster = vs.thumb || ((C.photos || [])[1] || {}).src;
    var btn = el("button", { type: "button", class: "video", "aria-label": "Play video: " + (V.caption || "live") }, [
      el("img", { src: poster, alt: "", loading: "lazy" }),
      el("span", { class: "video__play", "aria-hidden": "true", text: "▶" })
    ]);
    btn.addEventListener("click", function () {
      var f = el("iframe", { src: vs.src, title: V.caption || "Live video", allow: "autoplay; fullscreen; picture-in-picture", allowfullscreen: "" });
      var wrap = el("div", { class: "video video--on" }, [f]);
      btn.replaceWith(wrap);
      f.focus();
    });
    $("video").appendChild(btn);
  } else {
    $("video").appendChild(todo("live video link (YouTube or Vimeo)"));
  }
  (C.shows || []).forEach(function (s) {
    if (!TODO && !s.date && s.venue === "Venue") return;
    $("shows").appendChild(el("li", {}, [
      el("span", { class: "shows__date", text: s.date || (TODO ? "date" : "") }),
      el("span", { class: "shows__venue", text: s.venue }),
      el("span", { class: "shows__city soft", text: s.city })
    ]));
  });
  if (TODO && (C.shows || []).some(function (s) { return s.venue === "Venue"; }))
    $("shows").after(todo("past shows list"));

  // ── Contact
  var K = C.contact || {}, cm = $("contact-main");
  if (K.email) cm.appendChild(link("mailto:" + K.email, K.email, "contact__email"));
  else cm.appendChild(todo("contact email"));
  if (K.instagram) cm.appendChild(el("p", {}, [link("https://instagram.com/" + K.instagram.replace(/^@/, ""), "Instagram @" + K.instagram.replace(/^@/, ""), "contact__ig")]));
  else if (TODO) cm.appendChild(todo("Instagram handle"));
  (C.profiles || []).forEach(function (p) {
    if (p.url) $("profiles").appendChild(el("li", {}, [link(p.url, p.name, "")]));
    else if (TODO) $("profiles").appendChild(el("li", {}, [el("span", { class: "todo todo--inline", text: p.name + " link" })]));
  });

  // ── Copy buttons
  var toast = $("toast"), t;
  function say(msg) { toast.textContent = msg; toast.classList.add("is-on"); clearTimeout(t); t = setTimeout(function () { toast.classList.remove("is-on"); }, 2200); }
  function fallbackCopy(text) {
    var ta = el("textarea", { readonly: "", style: "position:fixed;opacity:0" }); ta.value = text;
    document.body.appendChild(ta); ta.select();
    var ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
    ta.remove(); return ok;
  }
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var src = $(b.getAttribute("data-copy"));
      var text = Array.prototype.map.call(src.querySelectorAll("p"), function (p) { return p.textContent; }).join("\n\n");
      var done = function () { b.textContent = "Copied"; say("Bio copied to clipboard"); setTimeout(function () { b.textContent = "Copy"; }, 2000); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, function () { if (fallbackCopy(text)) done(); });
      else if (fallbackCopy(text)) done();
    });
  });
})();
