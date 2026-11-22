/*
  ───────────────────────────────────────────────────────────────
  DAN CRANE — EPK CONTENT
  This is the only file you need to edit to change text and links.

  Rules of thumb:
  • Keep the quotes "..." around every value, and the commas between items.
  • Leave a link as "" (empty) and that item is hidden on the live
    site, or shown as a dashed "to add" box while showTodos is true.
  • Images live in assets/: photos/, releases/, cover/.
  • Save, refresh the page. That's it.

  (The link-preview text for Facebook/Twitter/iMessage lives at the
  top of index.html, because preview bots don't run JavaScript.)
  ───────────────────────────────────────────────────────────────
*/

window.EPK = {

  // While true, missing links show as dashed "to add" boxes and
  // paraphrased press lines are flagged. Set to false before sending.
  showTodos: false,

  artist: "Dan Crane",
  lede: "For twenty years, on and off (mostly off), a rapper from the South of England has been making records with the same producer in Łódź. Somewhere along the way, the records got quieter. That turned out to be the point.",
  updated: "updated 22 november 2026",

  // ── HERO ─────────────────────────────────────────────────────
  release: {
    title: "stay home.",
    date: "2.2.27",
    dateLong: "2 february 2027",
    single: "oh well.",
    cover: "assets/cover/stay-home.jpg",
    coverAlt: "stay home. cover: a brick semi-detached house in snow under pylons",
    presaveLabel: "pre-save stay home.",
    presaveUrl: "",                  // TODO: pre-save link
  },

  facts: [
    { big: "4", small: "albums, 2024 to 2026" },
    { big: "39", small: "album tracks released" },
    { big: "Łódź / London", small: "made with O.S.T.R across the two cities" },
    { big: "2 Feb 2027", small: "stay home. release date" },
  ],

  // ── LISTEN ───────────────────────────────────────────────────
  // Paste normal Spotify share links; they become players automatically.
  listen: [
    // When "oh well." is out, add it back as the first line:
    // { title: "oh well.", note: "lead single from stay home. · out 2.2.27", spotify: "PASTE LINK" },
    { title: "Music To Sit Down To", note: "2026 · ten tracks, one instruction on the cover", spotify: "https://open.spotify.com/album/5yabsI251rLdfxGSslpkOB" },
    { title: "the full catalogue", note: "four albums in three years, plus the Kensal Green EP and the singles", spotify: "https://open.spotify.com/artist/31H2LvdE3eArkCFj9dWu1Y" },
  ],
  privateLink: {
    label: "stay home.: private stream",
    note: "Unreleased. It's meant for labels and press, and it works best if you sit down first. Please don't share.",
    url: "https://on.soundcloud.com/HRJBfDT22X4lh7DVgM",
  },
  buy: { label: "buy vinyl and cd on elasticStage", url: "https://elasticstage.com/carnival" },

  // ── VIDEOS ───────────────────────────────────────────────────
  // Paste normal YouTube links (youtube.com/watch?v=... or youtu.be/...).
  // They load only when clicked. A video with no link is hidden.
  videos: [
    { title: "Monsters", note: "Massive Cranes · 2023", url: "https://youtu.be/xW-vxRqPNyw", poster: "assets/releases/monsters.jpg" },
    { title: "Robert Frost", note: "Massive Cranes · 2023", url: "https://youtu.be/Uzf-C0JoiO0", poster: "assets/releases/robert-frost.jpg" },
    { title: "Porcelain Faces", note: "Massive Cranes & Observer · from Fallen", url: "https://youtu.be/FZozCYID_s0", poster: "assets/releases/porcelain-faces.jpg" },
    { title: "Gordons Alive", note: "Massive Cranes & Observer · 2025", url: "https://youtu.be/J4LxiQNJ1tk", poster: "assets/releases/gordons-alive.jpg" },
  ],

  // ── BIO ──────────────────────────────────────────────────────
  bioShort: "Dan Crane is a songwriter and rapper from the South of England, and the interesting thing about him is not how loud he got but how quiet. As Massive Cranes he made four albums in three years, with O.S.T.R, Helen Fisher and Observer, and finally alone. His new album, stay home., is out on 2 February 2027.",

  bioLong: [
    "In 2004, a young London group called Skill Mega put out a twelve-inch record with a producer from Łódź. It had three songs on it. It was called Bitter Blocker, and almost nobody remembers it. But it may be the most important record in this story, for a simple reason: the rapper and producer got older but never really stopped thinking he was too loud… turns out that was the point.",
    "We like to tell musical careers as a string of breakthroughs. The big single. The big year. Dan Crane's career doesn't look like that. It looks like a conversation that has been going on for twenty years. As Dan Fresh he rapped in Brighton's Lost Souls, then in Skill Mega, the London group he co-founded with Reps, DJ Rod Dixon and O.S.T.R., one of Poland's best-known rappers and producers. There was an EP, two albums, and guest verses on three O.S.T.R. records.",
    "Then something unexpected happened. He slowed down. As Massive Cranes (a name that came from his young son) he made four albums in three years: Monuments with O.S.T.R and the pianist Helen Fisher, Carnival with O.S.T.R, Fallen with his old Lost Souls friend Observer, and Music To Sit Down To, which he made entirely alone.",
    "In 1978, Brian Eno wrote that ambient music should be “as ignorable as it is interesting.” It sounds like a contradiction. It is, in fact, a job description. Most music competes for your attention. Dan Crane's waits for you. It is made for the least dramatic moments of a day: the coat still on, the kettle still warm, the bus not here yet. Those moments, it turns out, are the ones that belong to us entirely.",
    "Here's the thing. We assume the most important music is the music we notice. But the music we live with is the music that lets us notice everything else. His new album, stay home., is out on 2 February 2027. It is the first under his own name.",
  ],

  bioHistory: "Every long partnership has an origin story, and this one is unglamorous. Before Massive Cranes, Dan rapped as Dan Fresh: first in Brighton's Lost Souls, then in Skill Mega, the London group he co-founded in 2004 with Reps, DJ Rod Dixon and O.S.T.R. The run produced an EP, two albums and guest verses on three O.S.T.R. records. It was a long apprenticeship, though nobody called it that at the time.",

  // ── ALBUMS AND EPS ───────────────────────────────────────────
  // tracks: ["name", "length"]
  albums: [
    {
      title: "Music To Sit Down To", with: "",
      meta: "24 July 2026 · 10 tracks · 32 min · written and composed by Dan Thurlow",
      cover: "assets/releases/music-to-sit-down-to.jpg",
      tracks: [["Black dog (intro)","1:57"],["Girl and Clown","3:01"],["Walk","2:51"],["Grenades","3:24"],["John's Head","2:48"],["Statues","3:51"],["Empty Chairs","3:35"],["Bindweeds (feat. Lady Paradox)","3:45"],["The Wait","3:37"],["In the Middle","3:39"]],
      note: "Singles: \"Girl and Clown\", \"Walk\", \"Statues\", \"Bindweeds\".",
      links: [{ name: "Spotify", url: "https://open.spotify.com/album/5yabsI251rLdfxGSslpkOB" }, { name: "Apple Music", url: "https://music.apple.com/gb/album/music-to-sit-down-to/6792583985" }],
    },
    {
      title: "Fallen", with: "with Observer",
      meta: "5 September 2025 · 8 tracks · 26 min",
      cover: "assets/releases/fallen.jpg",
      tracks: [["Spilled Coffee","2:48"],["Gordons Alive","3:28"],["Arc of Darkness","2:58"],["Porcelain Faces","3:06"],["Daylight Saving","2:29"],["Fallen","3:26"],["Everything Was Gone","4:12"],["Brothers Keeper","3:35"]],
      note: "Singles: \"Fallen\", \"Gordons Alive\".",
      links: [{ name: "Apple Music", url: "https://music.apple.com/gb/album/fallen/1831524539" }],
    },
    {
      title: "Carnival", with: "with O.S.T.R",
      meta: "8 March 2025 · 10 tracks · 30 min",
      cover: "assets/releases/carnival-album.jpg",
      tracks: [["Somethings Missing","2:25"],["Carnival","3:48"],["My Mate Mark","3:19"],["Birthday","2:30"],["Grounding Out","2:26"],["This House","3:14"],["The Cut","3:23"],["Sins","3:51"],["Asterisks","3:05"],["All Left Unsaid","2:08"]],
      note: "Preceded by the single \"Asterisks\" / \"Carnival\" (Massive Cranes & O.S.T.R., 24 January 2025). \"The Cut\" also released as a single.",
      links: [{ name: "Apple Music", url: "https://music.apple.com/gb/album/carnival/1795334088" }, { name: "SoundCloud", url: "https://soundcloud.com/massive_cranes" }],
    },
    {
      title: "Monuments", with: "with O.S.T.R and Helen Fisher",
      meta: "1 March 2024 · 11 tracks · 36 min · debut album",
      cover: "assets/releases/monuments.jpg",
      tracks: [["The Beginning","4:22"],["Monsters","3:10"],["The Heartbeats","3:13"],["Ulcerated Wounds","3:54"],["Monuments","3:20"],["Elephants","3:18"],["Joker","2:24"],["Little Bits","3:06"],["Robert Frost","2:49"],["Shut Your Mouth","2:44"],["At Sea","3:40"]],
      note: "Words by Dan Thurlow (with Helen Fisher on five). Music by Adam Ostrowski (O.S.T.R) and Helen Fisher.",
      links: [{ name: "Apple Music", url: "https://music.apple.com/gb/album/monuments/1730396096" }],
    },
    {
      title: "Kensal Green EP", with: "",
      meta: "2025 · 3 tracks · 9 min",
      cover: "",                       // no artwork yet: shows a text tile
      tracks: [["Kensal Green","4:00"],["Sit Back","2:24"],["That Summer","3:00"]],
      note: "",
      links: [{ name: "Bandcamp", url: "https://massive-cranes.bandcamp.com/album/kensal-green-ep" }, { name: "Apple Music", url: "https://music.apple.com/gb/album/kensal-green-ep-single/1819213369" }],
    },
  ],

  // ── SINGLES ──────────────────────────────────────────────────
  singles: [
    { title: "Bindweeds", extra: "feat. Lady Paradox", year: "2026", note: "Released 10 July 2026; written with Lady Paradox (Rebekah Watson). Also on Music To Sit Down To" },
    { title: "Statues", year: "2026", note: "Written and produced by Dan alone; from Music To Sit Down To" },
    { title: "Walk", year: "2026", note: "From Music To Sit Down To" },
    { title: "Girl and Clown", year: "2026", note: "Lead single from Music To Sit Down To" },
    { title: "Gordons Alive", year: "2025", note: "From Fallen" },
    { title: "Kensal Green EP", year: "2025", note: "Bandcamp 7 March, streaming 4 July 2025: \"Kensal Green\", \"Sit Back\", \"That Summer\"" },
    { title: "Fallen", year: "2025", note: "Title track of Fallen, with Observer" },
    { title: "The Cut", year: "2025", note: "Single" },
    { title: "Asterisks", year: "2025", note: "With O.S.T.R; B-side \"Carnival\"" },
    { title: "Little Bits", year: "2024", note: "From Monuments" },
    { title: "The Beginning · Monsters · Elephants · Robert Frost", year: "2023", note: "The first Massive Cranes singles, ahead of Monuments" },
  ],
  singleCovers: [
    { src: "assets/releases/bindweeds.jpg", title: "bindweeds.", note: "2026 · feat. lady paradox" },
    { src: "assets/releases/statues.jpg", title: "statues.", note: "2026" },
    { src: "assets/releases/walk.jpg", title: "walk.", note: "2026" },
    { src: "assets/releases/girl-and-clown.jpg", title: "girl and clown.", note: "2026" },
    { src: "assets/releases/gordons-alive.jpg", title: "gordons alive.", note: "2025 · with observer" },
    { src: "assets/releases/porcelain-faces.jpg", title: "porcelain faces.", note: "artwork · from fallen" },
    { src: "assets/releases/the-cut.jpg", title: "the cut.", note: "2025 · x o.s.t.r." },
    { src: "assets/releases/asterisks.jpg", title: "asterisks.", note: "2025 · x o.s.t.r." },
    { src: "assets/releases/carnival-single.jpg", title: "carnival.", note: "single · 2025 · x o.s.t.r." },
    { src: "assets/releases/moving-in-circles.jpg", title: "moving in circles.", note: "x o.s.t.r." },
    { src: "assets/releases/moving-in-circles-big-bird.jpg", title: "moving in circles.", note: "big bird version" },
    { src: "assets/releases/robert-frost.jpg", title: "robert frost.", note: "2023" },
    { src: "assets/releases/monsters.jpg", title: "monsters.", note: "2023" },
  ],

  // ── AS DAN FRESH ─────────────────────────────────────────────
  freshIntro: "Most of the records below were made in the 2000s, between London and Łódź, by people who had no idea they were laying the foundations for something twenty years later. That is usually how foundations get laid.",
  fresh: [
    { release: "Skill Mega · Skill Mega (Flash Fry Records)", year: "2012", part: "Main vocals with Reps on all 12 tracks; produced by O.S.T.R. Guests include Mr J (\"Tony Heart\", \"Family\") and O.S.T.R. (\"Take Me In Your Arms\")" },
    { release: "Ja tu tylko sprzątam · O.S.T.R. (Asfalt Records)", year: "2008", part: "Guest verse on \"Jestem tylko dzieckiem\", with El Da Sensei" },
    { release: "Normal Magic · Skill Mega (Asfalt Records)", year: "2007", part: "Debut album, 11 tracks, produced by O.S.T.R., released 16 May 2007" },
    { release: "HollyŁódź · O.S.T.R. (Asfalt Records)", year: "2007", part: "Guest verse on \"Po co?\", with Modry" },
    { release: "7 · O.S.T.R. (Asfalt Records)", year: "2006", part: "Guest verse on \"Perfect City\", with Tame One and Reps. The album was nominated for a Fryderyk award" },
    { release: "Bitter Blocker · Skill Mega (Cryogenic Records, 12\")", year: "2004", part: "\"Project Skill Mega\", \"Gardening\", \"Broken\"; the first record with O.S.T.R. producing" },
    { release: "Lost Souls (Janomi Records, Brighton)", year: "2002 to 2004", part: "Founding crew, with Reps, Mr J, Witchdoctor Wise and Uncle Dicky" },
  ],

  // ── COLLABORATORS ────────────────────────────────────────────
  collaborators: [
    { name: "O.S.T.R", text: "Adam Ostrowski, from Łódź, is one of Poland's best-known rappers and producers. He first produced for Dan in 2004, on a three-song twelve-inch. Ask why an English rapper's closest collaborator lives in Poland and the answer is disarmingly simple: they started, and neither of them stopped. Composer on Monuments and Carnival." },
    { name: "Helen Fisher", text: "Pianist and vocalist. On Monuments she is not an accompanist but a co-writer, including on “The Beginning” and “At Sea”. Live, she plays keys beside him in the London club shows." },
    { name: "Observer", text: "Mr J (Joe Clark), from Brighton's Lost Souls: the crew Dan started out in, more than twenty years ago. Fallen (2025) is what happens when old friends come back to the same table. Co-writer of “Gordons Alive”; also a guest on Skill Mega's “Tony Heart” and “Family”." },
    { name: "Lady Paradox", text: "Rebekah Watson, a Leicester rapper and lyricist known for introspective, jazz-tinged UK hip hop. On “Bindweeds” (2026), which she co-wrote, two writers who prize restraint meet in the middle." },
  ],
  collabPhotos: [
    { src: "assets/photos/with-ostr-2.jpg", alt: "Dan Crane and O.S.T.R. in a record shop covered in stickers", caption: "Dan and O.S.T.R." },
    { src: "assets/photos/with-ostr-1.jpg", alt: "Dan Crane and O.S.T.R., heads together", caption: "Friends since the early 2000s." },
  ],

  // ── PHOTOS (press) ───────────────────────────────────────────
  photosNote: "Black and white, toned to the stay home. palette. Notice what isn't here: no crowds, no stage lights, no props. Just a man standing still or sitting down, which is more or less what the music sounds like. Click any photo to download it. Hi-res originals and colour versions on request.",
  // Photographer credit for the press photos (Instagram handle without the @).
  photosCredit: { name: "LifeMediaEnt", instagram: "lifemediaent" },
  photos: [
    { src: "assets/photos/press-5.jpg", alt: "Dan Crane on a terraced street, hand to chin" },
    { src: "assets/photos/press-6.jpg", alt: "Dan Crane standing in a back street" },
    { src: "assets/photos/press-7.jpg", alt: "Dan Crane by a hedge and lamppost" },
    { src: "assets/photos/press-8.jpg", alt: "Dan Crane sitting on a sofa, smiling" },
  ],
  pressPack: {
    zip: "assets/press/dan-crane-press-pack.zip",
    sheet: "",                       // TODO: e.g. "assets/press/dan-crane-press-sheet.pdf"
  },

  // ── LIVE ─────────────────────────────────────────────────────
  liveText: "Here's a puzzle. How does music made for sitting down work on a stage? Dan Crane has tested it in both kinds of room: London clubs with Helen Fisher on keys, and a big stage with O.S.T.R. in front of a full room. It turns out quiet travels further than you'd think. A launch show for stay home. is planned for February 2027.",
  liveVideo: { url: "", caption: "Dan Crane live" },   // TODO: YouTube or Vimeo link
  shows: [
    { date: "Feb 2027", venue: "stay home. launch show", city: "planned" },
    { date: "23 Jul 2026", venue: "Ram Jam Records, with Sunsara", city: "Kingston" },
    // TODO: add earlier shows, newest first: { date: "", venue: "", city: "" },
  ],
  livePhotos: [
    { src: "assets/photos/live-big-stage.jpg", alt: "Dan Crane on a big stage, arm raised to a packed crowd", caption: "On stage with O.S.T.R." },   // TODO: venue, city, date
    { src: "assets/photos/live-neon.jpg", alt: "Dan Crane live under a neon sign, Helen Fisher on keys" },
    { src: "assets/photos/live-helen.jpg", alt: "Dan Crane and Helen Fisher on stage against a brick wall" },
    { src: "assets/photos/live-club.jpg", alt: "Dan Crane on a club stage" },
    { src: "assets/photos/live-mic.jpg", alt: "Dan Crane rapping into a microphone" },
    { src: "assets/photos/live-room.jpg", alt: "Dan Crane alone at the mic in a dark room" },
    { src: "assets/photos/live-bw-1.jpg", alt: "Dan Crane on stage, hand raised, head down" },
    { src: "assets/photos/live-bw-2.jpg", alt: "Dan Crane mid-verse under stage light" },
    { src: "assets/photos/live-bw-3.jpg", alt: "Dan Crane leaning into the mic, arm out" },
    { src: "assets/photos/live-bw-4.jpg", alt: "Dan Crane on stage, head bowed, hand in hair" },
    { src: "assets/photos/live-bw-5.jpg", alt: "Dan Crane on stage, looking down, hand on head" },
  ],

  // ── PRESS ────────────────────────────────────────────────────
  // paraphrased: true marks lines that aren't exact quotes yet.
  // When you have the real line, put it in "text" and set paraphrased: false.
  press: [
    { text: "Called Monuments a poetic masterpiece.", outlet: "Illustrate Magazine", kind: "album review", url: "https://illustratemagazine.com/monuments-by-massive-cranes-album-review/", paraphrased: true },
    { text: "'Girl and Clown' showcases Massive Cranes' minimalist direction", outlet: "The Real Ding", kind: "headline", url: "https://www.therealding.com/post/girl-and-clown-showcases-massive-cranes-minimalist-direction", paraphrased: false },
    { text: "Massive Cranes release reflective new track 'Statues'", outlet: "The Indie Grid", kind: "headline", url: "https://theindiegrid.co.uk/latest-news/massive-cranes-release-reflective-new-track-statues/", paraphrased: false },
    { text: "Massive Cranes\u2019 'Monuments': Journey Through Trip-Hop/Emo Rap Sound", outlet: "Dulaxi", kind: "headline", url: "https://dulaxi.com/massive-cranes-monuments-journey-through-trip-hop-emo-rap-sound/", paraphrased: false },
    { text: "Massive Cranes continue new phase with 'Girl and Clown'", outlet: "Ignite Music Magazine", kind: "headline, May 2026", url: "https://www.ignitemusicmag.co/post/massive-cranes-continue-new-phase-with-girl-and-clown", paraphrased: false },
    { text: "Heard \"The Beginning\" as melancholy you can still move to.", outlet: "Bored City", kind: "single review", url: "https://boredcity.co/massive-cranes-the-beginning/", paraphrased: true },
  ],
  pressAlso: "Also covered by The Real Ding (\"Statues\") and Little Chief Music (Monuments).",
  interviews: [
    { name: "The Other Side Reviews", url: "https://theothersidereviews.com/a-chat-with-massive-cranes-26-03-23/" },
    { name: "Bored City", url: "https://boredcity.co/conversation-with-massive-cranes/" },
  ],

  // ── CONTACT ──────────────────────────────────────────────────
  contact: {
    blurb: "Booking, press and label enquiries:",
    email: "dan@massivecranes.com",
    instagram: "massive_cranes",
  },
  profiles: [
    { name: "Spotify",     url: "https://open.spotify.com/artist/31H2LvdE3eArkCFj9dWu1Y" },
    { name: "Apple Music", url: "https://music.apple.com/gb/artist/massive-cranes/1708582738" },
    { name: "Bandcamp",    url: "https://massive-cranes.bandcamp.com" },
    { name: "SoundCloud",  url: "https://soundcloud.com/massive_cranes" },
    { name: "Vinyl & CD (elasticStage)", url: "https://elasticstage.com/carnival" },
    { name: "Linktree",    url: "https://linktr.ee/massive_cranes" },
  ],

  footer: "© Dan Crane",
};
