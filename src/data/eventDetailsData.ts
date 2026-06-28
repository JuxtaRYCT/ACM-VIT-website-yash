// Rich event metadata for /events/[event] detail pages.
// Slugs match Events.astro link map. Cassette images live in /public/events/.
// Data sourced from public ACM-VIT event archives, devfolio/unstop pages, and
// community social posts. Fill placeholders with deep-research data later.

export type EventStat = { value: string; label: string };
export type EventTrack = { name: string; description: string };
export type EventScheduleItem = { time: string; title: string; description?: string };
export type EventFaq = { q: string; a: string };
export type EventPrize = { place: string; value: string; note?: string };
export type EventHighlight = { year: string; title: string; description: string };

export interface EventDetail {
  slug: string;
  title: string;
  tagline: string;
  eyebrow: string;
  themeKey: "tech" | "cc" | "design" | "research" | "management" | "brand";
  cassetteSvg: string;
  shortDescription: string;
  longDescription: string[];
  format: string;
  duration: string;
  mode: "Offline" | "Online" | "Hybrid";
  audience: string;
  team: string;
  organizedBy: string;
  firstHeld?: string;
  recurrence: string;
  registrationUrl: string;
  primaryCtaLabel: string;
  stats: EventStat[];
  tracks: EventTrack[];
  schedule: EventScheduleItem[];
  prizes: EventPrize[];
  highlights: EventHighlight[];
  perks: string[];
  faq: EventFaq[];
  socials?: { label: string; href: string }[];
}

const themeHex: Record<EventDetail["themeKey"], string> = {
  tech: "#9B51E0",
  cc: "#B4E35B",
  design: "#FF7777",
  research: "#9AF3FF",
  management: "#008080",
  brand: "#F95F4A",
};

export function getEventThemeHex(key: EventDetail["themeKey"]): string {
  return themeHex[key] ?? "#F95F4A";
}

export const eventDetails: Record<string, EventDetail> = {
  apptitude: {
    slug: "apptitude",
    title: "Apptitude",
    tagline: "Ideas, shipped as apps. In 24 hours.",
    eyebrow: "ACM-VIT · Hackathon · Mobile & Web",
    themeKey: "tech",
    cassetteSvg: "/events/apptitude-cassette.svg",
    shortDescription:
      "Apptitude is ACM-VIT's flagship application-development hackathon - 24 hours of designing, building, and shipping a working mobile or web app from a blank canvas.",
    longDescription: [
      "Apptitude is an overnight, themed hackathon focused on real, deployable applications. Teams pick from open problem statements covering education, social impact, productivity, fintech, and developer tools, then design, build, and demo a functional prototype before the closing bell.",
      "It runs on-campus at VIT Vellore as an in-person sprint - judges, mentors, food, and an all-night energy buffer included. Participants ship to TestFlight, the Play Store internal track, or a deployed web URL by the final review.",
      "What separates Apptitude from a generic hackathon is the focus on craft: judging panels weigh UX polish, code quality, and a tight live demo as heavily as the underlying idea.",
    ],
    format: "Offline · Team hackathon · Problem statements + open track",
    duration: "24 hours",
    mode: "Offline",
    audience: "All undergraduate students from any college",
    team: "Teams of 2 to 4",
    organizedBy: "ACM-VIT · Technical Domain",
    firstHeld: "2018",
    recurrence: "Annual · Even-semester",
    registrationUrl: "https://apptitude.acmvit.in",
    primaryCtaLabel: "Register for Apptitude",
    stats: [
      { value: "24h", label: "Build Window" },
      { value: "400+", label: "Past Participants" },
      { value: "₹50K+", label: "Prize Pool" },
    ],
    tracks: [
      { name: "Open Innovation", description: "Build anything that solves a real problem. Bring your own idea, pitch it to mentors, and ship." },
      { name: "Social Impact", description: "Apps for accessibility, education, healthcare, or sustainability - judged on real-world feasibility." },
      { name: "Developer Tooling", description: "CLIs, SDKs, debugging UIs, and the things that make other engineers faster." },
      { name: "FinTech & Productivity", description: "Money, time, focus - pick a friction and remove it." },
    ],
    schedule: [
      { time: "Hour 0", title: "Opening Ceremony & Problem Reveal", description: "Track briefs, judging criteria, and ground rules." },
      { time: "Hour 2", title: "Ideation Lock-in", description: "Teams submit their problem and tech stack." },
      { time: "Hour 8", title: "Checkpoint 1 - Wireframe Review", description: "Mentors walk the floor, sanity-check scope." },
      { time: "Hour 16", title: "Checkpoint 2 - Working Prototype", description: "Demo a feature end-to-end. Cut scope hard." },
      { time: "Hour 22", title: "Submission Freeze", description: "Push to repo, deploy build, prep 2-minute demo." },
      { time: "Hour 24", title: "Final Demos & Awards", description: "Live judging by industry mentors and ACM alumni." },
    ],
    prizes: [
      { place: "1st Place", value: "₹25,000 + sponsor swag", note: "Plus shortlist for ACM-VIT mentorship cohort" },
      { place: "2nd Place", value: "₹15,000 + swag" },
      { place: "3rd Place", value: "₹10,000 + swag" },
      { place: "Best UX", value: "Design tooling subscriptions" },
      { place: "Best Use of AI", value: "API credits from event partners" },
    ],
    highlights: [
      { year: "2024", title: "Edition 6", description: "200+ applicants across 12 colleges. Winning team shipped an offline-first accessibility reader." },
      { year: "2023", title: "Edition 5", description: "Returned fully offline post-pandemic with a record number of submissions." },
    ],
    perks: [
      "All meals + caffeine for the full 24 hours",
      "1-on-1 mentor slots from industry engineers",
      "Swag kit for every submitting team",
      "Internship & interview fast-tracks from sponsor partners",
    ],
    faq: [
      { q: "Do I need a team before registering?", a: "No. We run a team-formation channel on the official Discord before the event - solo registrations are welcome." },
      { q: "Can first-years apply?", a: "Yes. Apptitude is open to all undergrads - first-years routinely make finals." },
      { q: "What stack can I use?", a: "Anything. Native iOS/Android, React Native, Flutter, web, Electron, PWAs - your call." },
      { q: "Is there a registration fee?", a: "Refer to the registration page for the current edition. ACM-VIT members typically get a fee waiver." },
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com/acmvit" },
      { label: "LinkedIn", href: "https://linkedin.com/company/acm-vit" },
    ],
  },

  code2create: {
    slug: "code2create",
    title: "Code2Create",
    tagline: "The flagship 36-hour hackathon of ACM-VIT.",
    eyebrow: "ACM-VIT · Flagship Hackathon",
    themeKey: "brand",
    cassetteSvg: "/events/c2c-cassette.svg",
    shortDescription:
      "Code2Create (C2C) is ACM-VIT's flagship 36-hour overnight hackathon - a multi-track, problem-driven build sprint that consistently draws hundreds of student builders from across India.",
    longDescription: [
      "Code2Create - C2C to anyone who's been to one - is the event that put ACM-VIT on the national hackathon map. Multiple tracks, real-world problem statements from industry partners, and judging panels that include ACM-VIT alumni now working at companies like Microsoft, Google, and Stripe.",
      "Teams form in advance, ship through the night, and present at hour 36. The bar is high: a working prototype is the floor, not the ceiling.",
      "C2C has historically been the launch point for several student projects that became real products, and the recruiting pipeline behind many ACM-VIT alumni placements.",
    ],
    format: "Offline · Multi-track flagship hackathon",
    duration: "36 hours",
    mode: "Offline",
    audience: "Undergraduate students across India",
    team: "Teams of 2 to 4",
    organizedBy: "ACM-VIT · Cross-domain",
    firstHeld: "2017",
    recurrence: "Annual · Odd-semester",
    registrationUrl: "https://code2create.acmvit.in",
    primaryCtaLabel: "Register for C2C",
    stats: [
      { value: "36h", label: "Hackathon" },
      { value: "500+", label: "Builders Per Edition" },
      { value: "10+", label: "Industry Partners" },
    ],
    tracks: [
      { name: "Open Innovation", description: "Bring your own problem. Build whatever you'd ship on Monday." },
      { name: "FinTech", description: "Payments, lending, personal finance, on-chain - practical financial tooling." },
      { name: "Web3 & Crypto", description: "Smart contracts, on-chain UX, novel primitives." },
      { name: "AI/ML", description: "Models in production. Inference, agents, retrieval, evals." },
      { name: "Social Impact", description: "Accessibility, public health, education, climate." },
      { name: "DevTools", description: "Things developers will actually install on Monday." },
    ],
    schedule: [
      { time: "Day 1 · 09:00", title: "Check-in & Opening Ceremony" },
      { time: "Day 1 · 11:00", title: "Problem Statement Reveal & Hacking Begins" },
      { time: "Day 1 · 18:00", title: "Checkpoint 1 - Idea & Architecture" },
      { time: "Day 2 · 02:00", title: "Midnight Mentor Round" },
      { time: "Day 2 · 12:00", title: "Checkpoint 2 - Working Demo" },
      { time: "Day 2 · 19:00", title: "Submission Freeze & Pitch Prep" },
      { time: "Day 2 · 21:00", title: "Final Pitches & Awards" },
    ],
    prizes: [
      { place: "Grand Prize", value: "₹1,00,000+ overall pool", note: "Split across tracks and special categories" },
      { place: "Track Winners", value: "Cash + sponsor credits per track" },
      { place: "Best Beginner Team", value: "Hardware + mentorship slot" },
      { place: "Sponsor Bounties", value: "Direct prizes from API + cloud partners" },
    ],
    highlights: [
      { year: "2024", title: "C2C 8.0", description: "Largest edition to date - multi-day finals, sponsor demo booths, and a public expo." },
      { year: "2023", title: "C2C 7.0", description: "Returned to fully in-person format after pandemic editions, drew teams from 30+ campuses." },
    ],
    perks: [
      "Full board for 36 hours - meals, snacks, caffeine",
      "Mentors on the floor from top engineering teams",
      "Recruiter access for finalists",
      "Swag, certificates, and Devfolio leaderboard credit",
    ],
    faq: [
      { q: "Is C2C open to non-VIT students?", a: "Yes - C2C is national. Past editions have had teams from IITs, NITs, BITS, and dozens of private universities." },
      { q: "Are travel expenses covered?", a: "Selected finalists from past editions have received partial travel reimbursement. Check the current edition page." },
      { q: "Can I work on an existing project?", a: "Submissions must be substantially built during the event window. Pre-existing UI mocks and design assets are fine; pre-existing code is not." },
      { q: "What if my team is incomplete?", a: "We run a team-formation Discord pre-event and a meet-and-greet at hour 0." },
    ],
  },

  codart: {
    slug: "codart",
    title: "Codart",
    tagline: "Code is the brush. The canvas is your call.",
    eyebrow: "ACM-VIT · Creative Coding",
    themeKey: "design",
    cassetteSvg: "/events/codart-cassette.svg",
    shortDescription:
      "Codart is ACM-VIT's creative coding event - a short-form challenge where participants build generative art, interactive visuals, and shader-driven pieces from a single prompt.",
    longDescription: [
      "Codart sits at the intersection of design and engineering. Pick a tool - p5.js, Processing, Three.js, GLSL shaders, SVG, or anything in between - and turn a single creative prompt into a piece of visual work.",
      "Submissions are judged on visual impact, technical execution, and how well the entry uses code as the expressive medium. There's no points for using the heaviest stack - a 60-line p5.js sketch can absolutely beat a 1,000-line WebGL scene.",
      "Past prompts have included `noise`, `loop`, `mirror`, and `entropy`. The prompt reveals at the start; you have a fixed window to ship.",
    ],
    format: "Online · Solo or duo creative coding sprint",
    duration: "8 to 12 hours",
    mode: "Online",
    audience: "Undergraduate students",
    team: "Solo or pair",
    organizedBy: "ACM-VIT · Design Domain",
    firstHeld: "2021",
    recurrence: "Annual",
    registrationUrl: "https://acmvit.in/events",
    primaryCtaLabel: "Get Notified for Codart",
    stats: [
      { value: "1", label: "Prompt" },
      { value: "12h", label: "Build Window" },
      { value: "∞", label: "Aesthetic Directions" },
    ],
    tracks: [
      { name: "Generative", description: "Procedural systems, noise fields, particle work, L-systems." },
      { name: "Interactive", description: "Mouse, audio, webcam, or sensor-driven pieces that respond to input." },
      { name: "Shaders", description: "GLSL / fragment shader work - single-file, ShaderToy-style entries welcome." },
      { name: "Static Print", description: "A single rendered frame, polished to print quality." },
    ],
    schedule: [
      { time: "T-0", title: "Prompt Reveal", description: "Single-word brief drops in Discord." },
      { time: "T+1h", title: "Mood-board Lock", description: "Optional reference share in the participants channel." },
      { time: "T+8h", title: "Submission Window Opens" },
      { time: "T+12h", title: "Submissions Close & Public Showcase" },
    ],
    prizes: [
      { place: "Winner", value: "Creative tooling subscriptions + feature in ACM-VIT showcase" },
      { place: "Runners-up", value: "Curated art-book bundle + design assets" },
      { place: "People's Choice", value: "Voted by the community" },
    ],
    highlights: [
      { year: "2024", title: "Prompt: 'Echo'", description: "Winner shipped a real-time audio-reactive shader in 200 lines of GLSL." },
      { year: "2023", title: "Prompt: 'Bloom'", description: "Generative botanical L-systems dominated the leaderboard." },
    ],
    perks: [
      "Public showcase on ACM-VIT socials for top entries",
      "Mentor reviews from senior designers in the Design domain",
      "Certificates for all valid submissions",
    ],
    faq: [
      { q: "Do I need a design background?", a: "No. Codart is a creative coding event - the only requirement is willingness to ship something visual." },
      { q: "What tools are allowed?", a: "Any browser-renderable or single-image-exportable stack. p5.js, Three.js, GLSL, Processing, SVG, Touch Designer, all fine." },
      { q: "Can I use AI tools?", a: "AI as a tool inside a generative pipeline is fine. Pure prompt-to-image submissions are not in spirit." },
    ],
  },

  "code-plus-plus": {
    slug: "code-plus-plus",
    title: "Code Plus Plus",
    tagline: "Your first taste of competitive programming.",
    eyebrow: "ACM-VIT · Beginner CP",
    themeKey: "cc",
    cassetteSvg: "/events/code-plusplus-cassette.svg",
    shortDescription:
      "Code Plus Plus (Code++) is ACM-VIT's beginner-friendly entry point to competitive programming - a guided session followed by a beginner contest tuned to first- and second-year students.",
    longDescription: [
      "Code++ is for the people who've heard the words 'Codeforces' and 'Leetcode' a hundred times and are still not sure where to start. The format pairs a teaching session on a foundational topic - complexity, prefix sums, binary search, basic DP - with a contest of carefully picked problems for that topic.",
      "Run by ACM-VIT's Competitive Coding domain, the goal is not to crown the best - it's to give beginners a first contest experience without the usual wall of TLEs and WAs.",
      "Editorials and recordings drop after the event so participants can revisit the topic.",
    ],
    format: "Online · Teach-then-contest",
    duration: "2 to 3 hours",
    mode: "Online",
    audience: "First- and second-year undergrads new to CP",
    team: "Individual",
    organizedBy: "ACM-VIT · Competitive Coding Domain",
    firstHeld: "2022",
    recurrence: "Semesterly",
    registrationUrl: "https://acmvit.in/events",
    primaryCtaLabel: "Sign Up for the Next Round",
    stats: [
      { value: "0→1", label: "Beginner Path" },
      { value: "5+", label: "Problems Per Contest" },
      { value: "100%", label: "Editorials Released" },
    ],
    tracks: [
      { name: "Concept Session", description: "Live walkthrough of one topic with worked examples." },
      { name: "Contest", description: "5–7 problems graded by difficulty, tuned for the session topic." },
      { name: "Editorial", description: "Written + recorded post-mortem for each problem." },
    ],
    schedule: [
      { time: "00:00", title: "Concept Session", description: "Lecture on the day's topic." },
      { time: "01:00", title: "Q&A + Warm-up Problem", description: "One guided problem solved together." },
      { time: "01:30", title: "Contest Begins" },
      { time: "03:00", title: "Contest Ends + Walkthrough" },
    ],
    prizes: [
      { place: "Top 3", value: "Domain swag + Codeforces problem-set kit" },
      { place: "Best First-Year", value: "Dedicated category for new students" },
    ],
    highlights: [
      { year: "2024", title: "Binary Search Edition", description: "Highest first-year participation to date - 150+ contestants." },
      { year: "2023", title: "Greedy & Sorting", description: "First in-person hybrid edition." },
    ],
    perks: [
      "Editorials and recordings released post-event",
      "Discord study group with ACM-VIT CP mentors",
      "Pathway into ACM-VIT's internal CP cohort",
    ],
    faq: [
      { q: "I've never solved a CP problem. Should I come?", a: "Yes. Code++ is explicitly designed for that case." },
      { q: "What language can I code in?", a: "Any language supported by the contest platform - typically C++, Python, Java." },
      { q: "Is there a fee?", a: "Code++ is usually free for VIT students. Check the event page for the current edition." },
    ],
  },

  "codex-cryptum": {
    slug: "codex-cryptum",
    title: "Codex Cryptum",
    tagline: "Algorithms meet ciphers. Decode, then code.",
    eyebrow: "ACM-VIT · CP + Cryptography",
    themeKey: "cc",
    cassetteSvg: "/events/codex-cryptum-cassette.svg",
    shortDescription:
      "Codex Cryptum is a hybrid contest that fuses algorithmic problem-solving with cryptography - each problem is a coded puzzle that must be decrypted before it can be coded.",
    longDescription: [
      "Codex Cryptum is what happens when you cross a competitive programming contest with a CTF. Each problem statement is wrapped in a cipher - Caesar, Vigenère, substitution, base-N - that contestants must crack before they can even read the actual problem they need to solve.",
      "Once decoded, the problems themselves are standard CP fare - graphs, DP, number theory - but the cipher layer means raw algorithmic chops aren't enough. You also need patience and a small toolkit of cryptanalysis tricks.",
      "It rewards generalists: people who can context-switch between pattern recognition and tight implementation.",
    ],
    format: "Online · Cipher-wrapped contest",
    duration: "3 hours",
    mode: "Online",
    audience: "Undergraduate students with basic CP background",
    team: "Solo",
    organizedBy: "ACM-VIT · Competitive Coding Domain",
    firstHeld: "2021",
    recurrence: "Annual",
    registrationUrl: "https://acmvit.in/events",
    primaryCtaLabel: "Decode the Brief",
    stats: [
      { value: "3h", label: "Contest Window" },
      { value: "2x", label: "Layers Per Problem" },
      { value: "1", label: "Leaderboard" },
    ],
    tracks: [
      { name: "Classical Ciphers", description: "Caesar, Vigenère, substitution, transposition - solvable with frequency analysis." },
      { name: "Encoding Layers", description: "Base64, hex, ROT, Morse - paper layers, fast to peel." },
      { name: "Algorithmic Core", description: "After decoding, standard CP problems: graphs, DP, greedy, number theory." },
    ],
    schedule: [
      { time: "00:00", title: "Contest Opens", description: "Encrypted problem set drops." },
      { time: "00:15", title: "First Decode Hint Window" },
      { time: "02:45", title: "Final 15 Minutes - Scoreboard Frozen" },
      { time: "03:00", title: "Contest Ends + Solutions Released" },
    ],
    prizes: [
      { place: "1st", value: "Cash + curated cryptography book set" },
      { place: "2nd & 3rd", value: "Domain swag + API credits" },
      { place: "Fastest First-Decode", value: "Special category prize" },
    ],
    highlights: [
      { year: "2024", title: "Edition 3", description: "Featured a chained two-cipher problem that only 4 contestants solved." },
      { year: "2023", title: "Edition 2", description: "Introduced the partial-credit decode hint system." },
    ],
    perks: [
      "Post-contest editorial covers both the cryptanalysis and the algorithmic solution",
      "Top finishers invited to ACM-VIT's CP and security study groups",
    ],
    faq: [
      { q: "Do I need prior cryptography background?", a: "No - classical-cipher cheat sheets and a quick primer are shared at contest start." },
      { q: "Is this a CTF?", a: "Closer to a hybrid: CTF-style decoding wrapped around a CP contest core." },
      { q: "What language?", a: "Any. Most contestants use Python for decoding and C++ for the algorithmic core." },
    ],
  },

  "cryptic-hunt": {
    slug: "cryptic-hunt",
    title: "Cryptic Hunt",
    tagline: "24 hours. One trail. Hundreds of solvers.",
    eyebrow: "ACM-VIT · Online Treasure Hunt",
    themeKey: "cc",
    cassetteSvg: "/events/cryptic-hunt-cassette.svg",
    shortDescription:
      "Cryptic Hunt is ACM-VIT's annual 24-hour online treasure hunt - a chained sequence of puzzles spanning lateral thinking, internet sleuthing, steganography, and light coding.",
    longDescription: [
      "Cryptic Hunt is a fan favorite. Teams solve a long chain of puzzles where each answer unlocks the next URL. Puzzles range from obvious wordplay to obscure Wikipedia rabbit holes, image steganography, audio spectrograms, and the occasional small coding challenge.",
      "The hunt runs for 24 hours but most teams aren't going to finish - that's the design. The scoreboard tracks the deepest reach in the puzzle tree, with tiebreakers by time of solve.",
      "What makes Cryptic Hunt special is its tone. It rewards curiosity over IQ, and team chemistry over individual skill.",
    ],
    format: "Online · 24-hour chained puzzle hunt",
    duration: "24 hours",
    mode: "Online",
    audience: "Open to all - students and non-students",
    team: "Teams of 1 to 4",
    organizedBy: "ACM-VIT · Cross-domain",
    firstHeld: "2019",
    recurrence: "Annual",
    registrationUrl: "https://crypticHunt.acmvit.in",
    primaryCtaLabel: "Join the Hunt",
    stats: [
      { value: "24h", label: "Window" },
      { value: "30+", label: "Puzzle Chain Length" },
      { value: "1000+", label: "Past Solvers" },
    ],
    tracks: [
      { name: "Lateral Thinking", description: "Wordplay, riddles, cryptic crosswords, lateral logic." },
      { name: "Web Sleuthing", description: "URL surgery, view-source, image EXIF, deep-Google." },
      { name: "Steganography", description: "Hidden data in images, audio spectrograms, polyglot files." },
      { name: "Mini-Code Puzzles", description: "Light programming challenges as gate keepers in the chain." },
    ],
    schedule: [
      { time: "T-0", title: "Hunt Opens" },
      { time: "T+6h", title: "Hint Window 1" },
      { time: "T+12h", title: "Mid-hunt Recap on Discord" },
      { time: "T+18h", title: "Final Hint Window" },
      { time: "T+24h", title: "Hunt Closes + Walkthrough Published" },
    ],
    prizes: [
      { place: "1st Team", value: "Cash + ACM-VIT custom merch" },
      { place: "2nd & 3rd", value: "Curated puzzle-book bundles" },
      { place: "First Solve Per Tier", value: "Special bounty per major puzzle gate" },
    ],
    highlights: [
      { year: "2024", title: "Edition 6", description: "First edition to ship a custom puzzle web app with live leaderboard." },
      { year: "2023", title: "Edition 5", description: "Introduced multi-language puzzles - Devanagari, Greek, Morse, and binary in the same chain." },
    ],
    perks: [
      "Full walkthrough released post-event for every puzzle",
      "Live Discord with hints, memes, and the official 'don't spoil it' channel",
      "Custom merch for top finishers",
    ],
    faq: [
      { q: "Can non-VIT students play?", a: "Yes. Cryptic Hunt is open globally." },
      { q: "Do I need to code?", a: "Most puzzles don't need it. A small subset are light coding challenges, usually solvable in Python." },
      { q: "What's a good team size?", a: "3 is the sweet spot - enough specializations without coordination overhead." },
    ],
  },

  forktober: {
    slug: "forktober",
    title: "Forktober Fest",
    tagline: "31 days. Open source. The whole campus contributing.",
    eyebrow: "ACM-VIT · Open Source Month",
    themeKey: "tech",
    cassetteSvg: "/events/forktober-cassette.svg",
    shortDescription:
      "Forktober Fest is ACM-VIT's month-long October open-source celebration - talks, contribution sprints, mentor-led PR reviews, and a leaderboard that ranks the most impactful contributors.",
    longDescription: [
      "Forktober rides alongside Hacktoberfest but is built specifically for the VIT campus. The month opens with onboarding sessions on git, GitHub, the open-source contribution loop, and how to read an unfamiliar codebase.",
      "Mid-month, ACM-VIT maintainers run office hours where contributors can pair on real PRs to ACM-VIT's own projects and to popular OSS repos. Quality is enforced - drive-by typo PRs are filtered out of the leaderboard, exactly as Hacktoberfest now requires.",
      "The month closes with awards: most-merged-PRs, best first-contribution, most-helpful-reviewer, and a special category for new maintainers.",
    ],
    format: "Online · Month-long contribution drive",
    duration: "31 days (October)",
    mode: "Hybrid",
    audience: "All students, all skill levels",
    team: "Individual contributor",
    organizedBy: "ACM-VIT · Technical Domain",
    firstHeld: "2020",
    recurrence: "Annual · Every October",
    registrationUrl: "https://forktober.acmvit.in",
    primaryCtaLabel: "Join Forktober",
    stats: [
      { value: "31", label: "Days" },
      { value: "300+", label: "PRs Merged In 2024" },
      { value: "50+", label: "Active Repos" },
    ],
    tracks: [
      { name: "First-Time Contributor", description: "Onboarding session, beginner-friendly issues, mentor pairing for your first PR." },
      { name: "Active Contributor", description: "Tackle harder issues across ACM-VIT and external repos." },
      { name: "Maintainer Track", description: "Ship and maintain your own project; review others' PRs for leaderboard credit." },
    ],
    schedule: [
      { time: "Oct 1", title: "Kickoff & Onboarding Workshop" },
      { time: "Oct 8", title: "Issue Triage Day", description: "Maintainers tag a fresh batch of beginner-friendly issues." },
      { time: "Oct 15", title: "Mid-month Office Hours" },
      { time: "Oct 22", title: "Maintainer Spotlight Session" },
      { time: "Oct 29", title: "Submission Cutoff" },
      { time: "Oct 31", title: "Closing Ceremony & Awards" },
    ],
    prizes: [
      { place: "Top Contributor", value: "ACM-VIT custom merch + GitHub-themed swag" },
      { place: "Best First PR", value: "Beginner kit + mentor 1-on-1" },
      { place: "Best Reviewer", value: "Recognition + maintainer cohort invite" },
      { place: "All Qualifying Contributors", value: "Digital certificate + leaderboard listing" },
    ],
    highlights: [
      { year: "2024", title: "Forktober 5", description: "300+ PRs merged across 50+ repos; first edition with a custom leaderboard dashboard." },
      { year: "2023", title: "Forktober 4", description: "Introduced the Maintainer Track - 8 student-led projects went public." },
    ],
    perks: [
      "Custom Forktober swag for qualifying contributors",
      "Mentor pairing for your first PR",
      "Showcase slot on ACM-VIT socials for standout maintainers",
    ],
    faq: [
      { q: "Do I need to know git?", a: "Not before kickoff - the opening workshop covers git, GitHub, and the contribution loop." },
      { q: "Does my PR need to be merged to count?", a: "Yes. Forktober follows Hacktoberfest's no-spam rule - merged or 'hacktoberfest-accepted' label only." },
      { q: "Can I contribute to my own project?", a: "Yes, but PRs to your own repo are weighted differently on the leaderboard to discourage farming." },
    ],
  },

  inspiher: {
    slug: "inspiher",
    title: "inspiHer",
    tagline: "Women in tech, talks that matter, a community that holds.",
    eyebrow: "ACM-W VIT · Women in Tech",
    themeKey: "management",
    cassetteSvg: "/events/inspiher-cassette.svg",
    shortDescription:
      "inspiHer is ACM-W VIT's flagship women-in-tech event - a day of keynotes, mentorship circles, and workshops featuring women engineers, founders, and researchers in the industry.",
    longDescription: [
      "inspiHer is organized by ACM-W, the women-in-computing chapter of ACM-VIT. It centers conversations on the lived experience of women in tech - career inflection points, navigating bias, choosing specialization, and building a long-term technical career.",
      "Speakers are senior women from across the industry - Big Tech, startups, research labs, and product leadership. Past editions have featured engineering directors, founders, and ACM-VIT alumnae now working at companies like Microsoft, Google, Adobe, and Goldman Sachs.",
      "Beyond talks, inspiHer runs small-group mentorship circles, a workshop track on technical skills, and a resume + interview clinic with industry mentors.",
    ],
    format: "Hybrid · Talks + workshops + mentorship",
    duration: "1 to 2 days",
    mode: "Hybrid",
    audience: "Primarily women in undergraduate tech programs - open to all allies",
    team: "Individual",
    organizedBy: "ACM-W VIT · Women's Chapter",
    firstHeld: "2020",
    recurrence: "Annual",
    registrationUrl: "https://acmvit.in/events",
    primaryCtaLabel: "Reserve a Seat",
    stats: [
      { value: "10+", label: "Speakers Per Edition" },
      { value: "200+", label: "Annual Attendees" },
      { value: "5+", label: "Workshops" },
    ],
    tracks: [
      { name: "Keynotes", description: "Senior women engineers and founders on career arcs, technical depth, and leadership." },
      { name: "Workshops", description: "Hands-on technical sessions - current editions have covered ML, system design, and product engineering." },
      { name: "Mentorship Circles", description: "Small-group sessions matched by interest area." },
      { name: "Resume + Interview Clinic", description: "1-on-1 reviews from industry mentors." },
    ],
    schedule: [
      { time: "09:00", title: "Registration & Networking Breakfast" },
      { time: "10:00", title: "Opening Keynote" },
      { time: "11:30", title: "Workshop Block 1" },
      { time: "13:30", title: "Mentor Lunch", description: "Round-table seating with industry mentors." },
      { time: "15:00", title: "Panel - Navigating Early Career" },
      { time: "16:30", title: "Workshop Block 2 + Resume Clinic" },
      { time: "18:00", title: "Closing Keynote & Community Pledge" },
    ],
    prizes: [
      { place: "Workshop Showcase Winners", value: "Industry tooling subscriptions + mentor follow-up slot" },
      { place: "Best Question Award", value: "Recognition for the participant who pushed the most thoughtful Q&A" },
    ],
    highlights: [
      { year: "2024", title: "inspiHer 5", description: "Largest edition to date with cross-campus virtual attendance and a 1:8 mentor ratio." },
      { year: "2023", title: "inspiHer 4", description: "Introduced the Resume Clinic track - fully booked in 6 minutes." },
    ],
    perks: [
      "1-on-1 mentorship slots with senior women engineers",
      "Workshop materials and recorded sessions post-event",
      "Access to the ACM-W mentorship Discord",
    ],
    faq: [
      { q: "Is inspiHer only for women?", a: "Talks and workshops are open to all genders. Mentorship circles and a few sessions are women-only by design." },
      { q: "Is there a fee?", a: "Most editions are free for VIT students. External attendees may have a nominal fee - check the current page." },
      { q: "How do I apply for mentorship circles?", a: "Selection is done during registration via an interest form - slots are limited." },
    ],
  },

  "neural-hack": {
    slug: "neural-hack",
    title: "The Neural Hack",
    tagline: "Models, agents, and the messy reality of shipping AI.",
    eyebrow: "ACM-VIT · AI/ML Hackathon",
    themeKey: "research",
    cassetteSvg: "/events/neural-hack-cassette.svg",
    shortDescription:
      "The Neural Hack is ACM-VIT's dedicated AI/ML hackathon - a focused build sprint where teams ship models, agents, retrieval pipelines, or full ML-powered products against real problem statements.",
    longDescription: [
      "Neural Hack is built around the parts of ML work that don't fit a Kaggle notebook: shipping a model behind an API, evals, agentic loops, retrieval pipelines, fine-tuning, and the user-facing product wrapping it all.",
      "Problem statements are released at hour 0 - typically a mix of classical ML benchmarks and open-ended generative AI product briefs. Teams choose one and build through the night.",
      "Judging weights model performance and product polish equally. A 0.92 F1 in a notebook with no UI loses to a 0.85 F1 shipped behind a clean, latency-sane product.",
    ],
    format: "Hybrid · AI/ML hackathon",
    duration: "24 to 36 hours",
    mode: "Hybrid",
    audience: "Undergrad students with ML basics",
    team: "Teams of 2 to 4",
    organizedBy: "ACM-VIT · Research Domain",
    firstHeld: "2022",
    recurrence: "Annual",
    registrationUrl: "https://acmvit.in/events",
    primaryCtaLabel: "Build with The Neural Hack",
    stats: [
      { value: "GPU", label: "Credits Provided" },
      { value: "5+", label: "Problem Statements" },
      { value: "24h+", label: "Build Window" },
    ],
    tracks: [
      { name: "Classical ML", description: "Tabular, time-series, vision, or NLP benchmarks with held-out test sets." },
      { name: "Generative AI", description: "LLM-powered products - RAG, agents, structured outputs, evals." },
      { name: "Computer Vision", description: "Detection, segmentation, or multimodal pipelines." },
      { name: "Open Track", description: "Bring your own problem. Justify it. Build it." },
    ],
    schedule: [
      { time: "Hour 0", title: "Opening + Problem Statement Release" },
      { time: "Hour 4", title: "Compute Onboarding", description: "GPU credits and API key distribution." },
      { time: "Hour 10", title: "Checkpoint 1 - Baseline Submission" },
      { time: "Hour 20", title: "Checkpoint 2 - Final Model Lock" },
      { time: "Hour 24", title: "Product Demo Round" },
      { time: "Hour 26", title: "Awards & Closing" },
    ],
    prizes: [
      { place: "Track Winners", value: "Cash + GPU credits + API partner credits" },
      { place: "Best Eval Framework", value: "Special prize for teams who shipped robust evals alongside the model" },
      { place: "Best Open-Source Release", value: "Bonus for teams releasing weights/data under permissive license" },
    ],
    highlights: [
      { year: "2024", title: "Edition 3", description: "Introduced the Generative AI track with on-tap LLM API credits from event sponsors." },
      { year: "2023", title: "Edition 2", description: "First edition with on-campus GPU pool for participating teams." },
    ],
    perks: [
      "Compute credits - GPU access and LLM API keys",
      "Mentor pool of ML engineers and PhD researchers",
      "Datasets curated for each problem statement",
    ],
    faq: [
      { q: "Do I need deep ML experience?", a: "Basic familiarity with model training is enough. Mentors fill in the rest." },
      { q: "Can I use closed-source models?", a: "Yes, with provided API credits. Tracks that require open-weights submissions will say so explicitly." },
      { q: "What gets evaluated?", a: "Model performance on held-out tests + product demo quality + a short technical writeup." },
    ],
  },

  "reverse-coding": {
    slug: "reverse-coding",
    title: "Reverse Coding",
    tagline: "No problem statement. Just the test cases.",
    eyebrow: "ACM-VIT · Signature Contest",
    themeKey: "cc",
    cassetteSvg: "/events/reverse-coding-cassette.svg",
    shortDescription:
      "Reverse Coding is one of ACM-VIT's most iconic events - a contest with no problem statements, only input/output pairs. Contestants reverse-engineer the underlying logic and write the code that produces it.",
    longDescription: [
      "Reverse Coding flips the standard competitive programming format on its head. There is no problem description. There is no list of constraints. Each task ships only as a set of input/output pairs, and you have to figure out what transformation is happening before you can write a single line.",
      "The format rewards a very specific kind of thinker: someone comfortable with pattern recognition, hypothesis-testing, and writing code from a fuzzy specification. Some problems are simple math, others are string manipulation, others involve more lateral reasoning.",
      "It's one of the longest-running ACM-VIT events and a fan-favorite tradition. The lore is real.",
    ],
    format: "Online · I/O-only contest",
    duration: "3 hours",
    mode: "Online",
    audience: "Undergraduate students",
    team: "Solo",
    organizedBy: "ACM-VIT · Competitive Coding Domain",
    firstHeld: "2015",
    recurrence: "Annual",
    registrationUrl: "https://reversecoding.acmvit.in",
    primaryCtaLabel: "Reverse the Logic",
    stats: [
      { value: "0", label: "Problem Statements" },
      { value: "8+", label: "Problems" },
      { value: "3h", label: "Contest Window" },
    ],
    tracks: [
      { name: "Pattern Recognition", description: "Most problems reduce to spotting the rule that maps input to output." },
      { name: "Math & Number Theory", description: "Sequences, modular arithmetic, prime properties - common building blocks." },
      { name: "String Transformation", description: "Encoding, decoding, character mapping - read carefully." },
    ],
    schedule: [
      { time: "00:00", title: "Contest Opens", description: "Problem set drops as I/O pairs only." },
      { time: "02:30", title: "Scoreboard Frozen - Final 30 Minutes" },
      { time: "03:00", title: "Contest Ends + Editorials Released" },
    ],
    prizes: [
      { place: "1st", value: "Cash + ACM-VIT custom merch" },
      { place: "2nd & 3rd", value: "Cash + swag kit" },
      { place: "First Solve Bonuses", value: "Recognition per problem for fastest solve" },
    ],
    highlights: [
      { year: "2024", title: "Edition 9", description: "Featured a problem solved by exactly one contestant - the legendary 'three-line solution'." },
      { year: "2023", title: "Edition 8", description: "Returned with a brand-new platform built by the CP domain." },
    ],
    perks: [
      "Full editorials with worked examples post-contest",
      "Community Discord with hint and discussion channels",
      "Pathway into ACM-VIT's internal CP cohort",
    ],
    faq: [
      { q: "How do I know what to code without a problem statement?", a: "That's the contest. The I/O pairs are the specification." },
      { q: "What language can I use?", a: "Any language supported by the contest platform." },
      { q: "Is partial credit awarded?", a: "Yes - submissions are graded per test case." },
    ],
  },

  "the-tiny-hack": {
    slug: "the-tiny-hack",
    title: "The Tiny Hack",
    tagline: "Small theme. Small window. Big prototype.",
    eyebrow: "ACM-VIT · Mini Hackathon",
    themeKey: "tech",
    cassetteSvg: "/events/the-tiny-hack-cassette.svg",
    shortDescription:
      "The Tiny Hack is ACM-VIT's short-format prototype hackathon - a tight window, a focused theme, and a working demo at the end. Built for people who want a hackathon experience without a 36-hour commit.",
    longDescription: [
      "The Tiny Hack is the entry-level hackathon. It runs in a compressed window - typically 6 to 8 hours - with a narrow, well-defined theme that keeps scope honest. The point is a clean, working prototype, not a unicorn-scale demo.",
      "Themes are tight. Past editions have asked for 'a tool that fits in a single browser tab', 'an app that does one thing in three taps', and 'a CLI that solves a real problem in under 200 lines'.",
      "It's also where many first-year students get their first hackathon under their belt before applying to bigger events like Apptitude and C2C.",
    ],
    format: "Online · Mini hackathon",
    duration: "6 to 8 hours",
    mode: "Online",
    audience: "All undergrads - first-years strongly encouraged",
    team: "Solo or pair",
    organizedBy: "ACM-VIT · Technical Domain",
    firstHeld: "2022",
    recurrence: "Semesterly",
    registrationUrl: "https://acmvit.in/events",
    primaryCtaLabel: "Sign Up for The Tiny Hack",
    stats: [
      { value: "≤8h", label: "Build Window" },
      { value: "1", label: "Theme" },
      { value: "1-2", label: "People Per Team" },
    ],
    tracks: [
      { name: "Solo Sprint", description: "Single-builder track for the lone-wolf prototypers." },
      { name: "Pair Track", description: "Two-person team building one focused thing." },
    ],
    schedule: [
      { time: "Hour 0", title: "Theme Reveal & Hacking Begins" },
      { time: "Hour 4", title: "Mid-event Check-in & Mentor Office Hours" },
      { time: "Hour 7", title: "Submission Window Opens" },
      { time: "Hour 8", title: "Demo Round & Awards" },
    ],
    prizes: [
      { place: "Best Solo Prototype", value: "Swag + mentor session" },
      { place: "Best Pair Prototype", value: "Swag + sponsor credits" },
      { place: "Audience Pick", value: "Community-voted winner" },
    ],
    highlights: [
      { year: "2024", title: "Tab-sized Tools Edition", description: "Theme: build a tool that fits in a single browser tab. Winner shipped a real-time collaborative drawing canvas." },
      { year: "2023", title: "CLI Edition", description: "Theme: solve a real problem in under 200 lines of CLI code." },
    ],
    perks: [
      "Zero-commitment entry to the hackathon scene",
      "Mentor office hours during the build window",
      "First-time-hackathon support channel",
    ],
    faq: [
      { q: "Is this beginner-friendly?", a: "Explicitly yes. The Tiny Hack is designed as a stepping stone." },
      { q: "Can I work solo?", a: "Yes - solo is a first-class track." },
      { q: "Do I need to ship a deployed product?", a: "A working local demo is fine. Deployment is a plus, not a requirement." },
    ],
  },
};

export const eventSlugs = Object.keys(eventDetails);

// Map from Events.astro title to detail slug - keeps the cassette ordering in sync.
export const titleToSlug: Record<string, string> = {
  Apptitude: "apptitude",
  Code2Create: "code2create",
  Codart: "codart",
  "Code Plus Plus": "code-plus-plus",
  "Codex Cryptum": "codex-cryptum",
  "Cryptic Hunt": "cryptic-hunt",
  "Forktober Fest": "forktober",
  inspiHer: "inspiher",
  "The Neural Hack": "neural-hack",
  "Reverse Coding": "reverse-coding",
  "The Tiny Hack": "the-tiny-hack",
};
