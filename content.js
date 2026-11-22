/*
  ───────────────────────────────────────────────────────────────
  DAN CRANE — EPK CONTENT
  This is the only file you need to edit to change text and links.

  Rules of thumb:
  • Keep the quotes "..." around every value.
  • Leave a link as "" (empty) and that item is hidden on the live
    site, or shown as a dashed "to add" box while showTodos is true.
  • Save, refresh the page. That's it.

  (The link-preview text for Facebook/Twitter/iMessage lives at the
  top of index.html, because preview bots don't run JavaScript.)
  ───────────────────────────────────────────────────────────────
*/

window.EPK = {

  // While true, missing links show as dashed "to add" boxes and the
  // bios show a "draft" tag. Set to false before you send the link out.
  showTodos: true,

  artist: "Dan Crane",
  aka: "of Massive Cranes",          // shown softly under the name
  genre: "Ambient electronic hip hop",

  // ── 1. HERO ──────────────────────────────────────────────────
  release: {
    title: "stay home.",
    type: "Album",
    date: "2.2.27",                  // short form shown in the hero
    dateLong: "2 February 2027",     // long form used in the text
    single: "oh well.",
    presaveLabel: "Pre-save",
    presaveUrl: "",                  // TODO: pre-save link (e.g. a free Feature.fm / Linkfire / DistroKid HyperFollow page)
  },

  // ── 2. LISTEN ────────────────────────────────────────────────
  // Paste normal Spotify share links (open.spotify.com/track/... or /album/...).
  // The page turns them into embedded players automatically.
  listen: [
    { title: "oh well.", note: "Lead single · out 2.2.27", spotify: "" },              // TODO
    { title: "music to sit down to", note: "Previous release", spotify: "" },         // TODO
  ],
  privateLink: {
    label: "Unreleased: full album stream",
    note: "Private link for labels and press. Please don't share.",
    url: "",                         // TODO: private SoundCloud / Bandcamp link
  },

  // ── 3. BIO ───────────────────────────────────────────────────
  // DRAFTS: written from the facts in the brief. Please check every line.
  bioShort:
    "Dan Crane of Massive Cranes makes ambient electronic hip hop: slow, warm " +
    "records built for headphones and small rooms. He writes, produces and " +
    "performs every part himself, and plays it all live. His new album, stay " +
    "home., and its lead single, oh well., are both out on 2 February 2027.",

  bioLong: [
    "Dan Crane makes ambient electronic hip hop: unhurried records where " +
    "soft synth beds, dusty drums and close-miked voice sit in the same " +
    "quiet room. He writes, produces and performs every part himself, and " +
    "takes the whole thing on stage, building the songs live rather than " +
    "playing them back. Nothing is borrowed or outsourced: the beats, the " +
    "words and the voice all come from the same person.",

    "He has been making records for a long time. As Dan Fresh he rapped in " +
    "the group Skill Mega and appeared on albums by O.S.T.R. Later, as " +
    "Massive Cranes, he moved towards something slower and more open, " +
    "releasing music to sit down to, Fallen (a collaboration with Observer, " +
    "aka Mr J of Lost Souls) and Bindweeds, featuring Lady Paradox. Dan " +
    "Crane of Massive Cranes is the same voice with more space around it.",

    "His new album, stay home., is about the small, steady life inside four " +
    "walls: what you keep, what you let go, what stays with you when the " +
    "door is shut. The lead single, oh well., shrugs at the things you can't " +
    "change and keeps walking. It is the first full record under his own " +
    "name. Both are out on 2 February 2027.",
  ],

  // ── 4. PHOTOS ────────────────────────────────────────────────
  // src  = smaller web version shown on the page
  // full = full-size original that downloads when clicked
  photos: [
    { src: "assets/photos/web/portrait.jpg", full: "assets/photos/full/portrait.jpg", alt: "Dan Crane, toned portrait", credit: "" },
    { src: "assets/photos/web/live-1.jpg",   full: "assets/photos/full/live-1.jpg",   alt: "Dan Crane performing live", credit: "" },
    { src: "assets/photos/web/live-2.jpg",   full: "assets/photos/full/live-2.jpg",   alt: "Dan Crane on stage behind his live rig", credit: "" },
    { src: "assets/cover/stay-home-cover.jpg", full: "assets/cover/stay-home-cover.jpg", alt: "stay home. album cover", credit: "" },
  ],
  pressPack: {
    zip: "assets/press/dan-crane-press-pack.zip",
    sheet: "",                       // TODO: e.g. "assets/press/dan-crane-press-sheet.pdf"
  },

  // ── 5. LIVE ──────────────────────────────────────────────────
  // Paste a normal YouTube or Vimeo link. It only loads when clicked.
  liveVideo: {
    url: "",                         // TODO
    caption: "Live",
  },
  shows: [
    // TODO: replace with real shows, newest first.
    { date: "", venue: "Venue", city: "City" },
    { date: "", venue: "Venue", city: "City" },
    { date: "", venue: "Venue", city: "City" },
  ],

  // ── DISCOGRAPHY ──────────────────────────────────────────────
  discography: [
    { title: "stay home.", credit: "Dan Crane", year: "2027", format: "Album" },
    { title: "oh well.", credit: "Dan Crane", year: "2027", format: "Single" },
    { title: "music to sit down to", credit: "Massive Cranes", year: "", format: "" },                       // TODO year/format
    { title: "Fallen", credit: "Massive Cranes & Observer (Mr J of Lost Souls)", year: "", format: "" },     // TODO
    { title: "Bindweeds", credit: "Massive Cranes feat. Lady Paradox", year: "", format: "" },               // TODO
    // TODO: add the other releases here, same shape as above.
  ],

  // ── 6. CONTACT ───────────────────────────────────────────────
  contact: {
    email: "",                       // TODO: booking / press email
    instagram: "",                   // TODO: handle without the @
  },
  profiles: [
    { name: "Spotify",     url: "" },  // TODO
    { name: "Apple Music", url: "" },  // TODO
    { name: "Bandcamp",    url: "" },  // TODO
    { name: "SoundCloud",  url: "" },  // TODO
    { name: "YouTube",     url: "" },  // TODO
  ],

  footer: "© Dan Crane",
};
