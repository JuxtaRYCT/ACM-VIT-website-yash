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
export type EventSponsor = {
  name: string;
  tier?: string;
  logo?: string;
};
export type EventEditionLink = { label: string; href: string };
export type EventPastEdition = {
  year: string;
  edition: string;
  description: string;
  links?: EventEditionLink[];
  collectibles?: EventCollectibleItem[];
  sponsors?: EventSponsor[];
};
export type EventCollectibleItem = {
  name: string;
  image?: string;
  desc?: string;
};
export type EventCollectibleYear = {
  year: string;
  items: EventCollectibleItem[];
};

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
  pastEditions?: EventPastEdition[];
  collectibles?: EventCollectibleYear[];
  instagramHandle?: string;
  isAcmW?: boolean;
  hideCtaBanner?: boolean;
  themeColor?: string;
}

const themeHex: Record<EventDetail["themeKey"], string> = {
  tech: "#9B51E0",
  cc: "#42CD9D",
  design: "#FF0054",
  research: "#135DE2",
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
    tagline: "ACM-VIT's flagship hackathon since 2017.",
    eyebrow: "ACM-VIT · ACM-W · Flagship Hackathon",
    themeKey: "brand",
    themeColor: "#4AB887",
    cassetteSvg: "/events/c2c-cassette.svg",
    shortDescription:
      "Code2Create (C2C) is ACM-VIT's flagship hackathon. First conducted in 2017 and now six editions deep, it has grown into a national platform for builders from across India to ship real solutions to real problems.",
    longDescription: [
      "Code2Create is one of the oldest and most prestigious student-run hackathons at VIT. The first edition went up in 2017 and the event has run six editions to date, becoming a national platform that brings together developers, designers and entrepreneurs from colleges across the country to build impactful solutions to real-world problems.",
      "Today C2C is recognised as one of ACM-VIT's premier events. The most recent edition, Code2Create 6.0 in 2025, received over 2,300 total registrations including 200+ external registrations from institutions across India, making it the largest edition in the event's history. Participants compete across multiple innovation tracks while interacting with mentors, industry professionals, and distinguished speakers.",
      "Across its journey C2C has served as a launchpad for hundreds of student projects, giving participants 48 hours to transform an idea into a working product. Supported by leading technology companies and industry partners, the event consistently encourages creativity, problem solving, and engineering excellence, while fostering a vibrant developer community at VIT and beyond.",
      "Code2Create runs under ACM-W's umbrella as part of the chapter's commitment to championing more women in STEM. Each edition raises the bar and strengthens its legacy as one of the most anticipated student hackathons hosted by the university.",
      "For the latest updates on upcoming editions, follow @c2c.acmvit and @acmvit on Instagram.",
    ],
    format: "Offline · Multi-track flagship hackathon",
    duration: "48 hours",
    mode: "Offline",
    audience: "Undergraduate students across India",
    team: "Teams of 2 to 4",
    organizedBy: "ACM-VIT · ACM-W · Cross-domain",
    firstHeld: "2017",
    recurrence: "Annual flagship · 6 editions to date",
    registrationUrl: "https://c2c.acmvit.in",
    primaryCtaLabel: "Visit c2c.acmvit.in",
    stats: [
      { value: "6", label: "Editions" },
      { value: "48h", label: "Per Edition" },
      { value: "5000+", label: "Past Participants" },
      { value: "30+", label: "Sponsors To Date" },
    ],
    tracks: [],
    schedule: [],
    prizes: [],
    highlights: [],
    perks: [],
    faq: [],
    isAcmW: true,
    instagramHandle: "c2c.acmvit",
    socials: [
      { label: "Instagram · @c2c.acmvit", href: "https://instagram.com/c2c.acmvit" },
      { label: "Instagram · @acmvit", href: "https://instagram.com/acmvit" },
      { label: "Website", href: "https://c2c.acmvit.in" },
    ],
    pastEditions: [
      {
        year: "2025",
        edition: "Code2Create 6.0",
        description: "Largest edition to date. 2,300+ total registrations including 200+ external sign-ups from institutions across India, run as a multi-track innovation hackathon with mentors and industry partners on the floor.",
        links: [
          { label: "Website", href: "https://c2c.acmvit.in" },
          { label: "@c2c.acmvit", href: "https://instagram.com/c2c.acmvit" },
        ],
        collectibles: [
          { name: "C2C 6.0 Sticker - Variant 1", image: "/events/c2c/sticker-1.png", desc: "First sticker variant from the 2025 edition." },
          { name: "C2C 6.0 Sticker - Variant 2", image: "/events/c2c/sticker-2.png", desc: "Second sticker variant from the 2025 edition." },
          { name: "RunPod Credits", desc: "USD 25 in compute credits from RunPod for every participant." },
          { name: "ElevenLabs Credits", desc: "USD 50 in API credits from ElevenLabs for every participant." },
        ],
        sponsors: [
          { name: "RunPod", tier: "Platinum", logo: "/events/c2c/sponsors/runpod.svg" },
          { name: "ElevenLabs", tier: "Gold", logo: "/events/c2c/sponsors/elevenlabs.svg" },
        ],
      },
      {
        year: "2021",
        edition: "Code2Create 5.0",
        description: "First fully online edition during the pandemic. Virtual judging, Discord-based mentor rooms, and a sponsor pool that broadened C2C's national reach across colleges.",
        collectibles: [
          { name: "ACM-VIT Schwag Kit", desc: "Chapter merch and curated swag for every participant." },
          { name: "Patron Stickers", desc: "Sticker pack from the edition's industry patrons." },
        ],
        sponsors: [
          { name: "Meribachat", tier: "Gold", logo: "/events/c2c/sponsors/meribachat.svg" },
          { name: "Mcwitties", tier: "Silver", logo: "/events/c2c/sponsors/mcwitties.svg" },
          { name: "Capital Inc.", tier: "Silver", logo: "/events/c2c/sponsors/capitalinc.svg" },
          { name: "Skill Oxide", tier: "Silver", logo: "/events/c2c/sponsors/skilloxide.svg" },
          { name: "OneDrop", tier: "Silver", logo: "/events/c2c/sponsors/onedrop.svg" },
          { name: "GitHub", tier: "Sponsor", logo: "/events/c2c/sponsors/github.svg" },
          { name: "Sashido", tier: "Sponsor", logo: "/events/c2c/sponsors/sashido.svg" },
          { name: "Wolfram Language", tier: "Sponsor", logo: "/events/c2c/sponsors/wolframlanguage.svg" },
          { name: "Balsamiq", tier: "Sponsor", logo: "/events/c2c/sponsors/balsamiq.svg" },
          { name: "Replit", tier: "Sponsor", logo: "/events/c2c/sponsors/replit.svg" },
          { name: "Taskade", tier: "Sponsor", logo: "/events/c2c/sponsors/taskade.svg" },
          { name: "O'Reilly", tier: "Sponsor", logo: "/events/c2c/sponsors/oreilly.svg" },
          { name: "Bilda", tier: "Sponsor", logo: "/events/c2c/sponsors/bilda.svg" },
          { name: "Sticker Mule", tier: "Sponsor", logo: "/events/c2c/sponsors/stickermule.svg" },
          { name: "EchoAR", tier: "Sponsor", logo: "/events/c2c/sponsors/echoar.svg" },
          { name: "Axure", tier: "Sponsor", logo: "/events/c2c/sponsors/axure.svg" },
          { name: "Egghead.io", tier: "Sponsor" },
          { name: "C4 Projects", tier: "Mentoring Partner", logo: "/events/c2c/sponsors/c4projects.svg" },
          { name: "Zuddl", tier: "Portal Partner", logo: "/events/c2c/sponsors/zuddl.svg" },
        ],
      },
      {
        year: "2020",
        edition: "Code2Create 4.0",
        description: "Offline edition held on campus with an expanded sponsor roster and mentor pool. Strongest industry partner lineup of any edition to that point.",
        collectibles: [
          { name: "Digital Schwag Pack", desc: "Online edition schwag delivered digitally to all participants." },
          { name: "Patron Stickers", desc: "Sticker pack from sponsoring patrons of the edition." },
        ],
        sponsors: [
          { name: "JetBrains", tier: "Patron", logo: "/events/c2c/sponsors/jetbrains.svg" },
          { name: "DigitalOcean", tier: "Patron", logo: "/events/c2c/sponsors/digitalocean.svg" },
          { name: "Slack", tier: "Patron", logo: "/events/c2c/sponsors/slack.svg" },
          { name: "CloudSploit", tier: "Patron", logo: "/events/c2c/sponsors/cloudsploit.svg" },
          { name: "GeeksforGeeks", tier: "Patron", logo: "/events/c2c/sponsors/geeksforgeeks.svg" },
          { name: "Wolfram Alpha", tier: "Patron", logo: "/events/c2c/sponsors/wolframalpha.svg" },
          { name: "Coding Blocks", tier: "Patron", logo: "/events/c2c/sponsors/codingblocks.svg" },
          { name: "Axure", tier: "Patron", logo: "/events/c2c/sponsors/axure.svg" },
          { name: "Rosenfeld", tier: "Patron", logo: "/events/c2c/sponsors/rosenfeld.svg" },
          { name: "GitHub", tier: "Sponsor", logo: "/events/c2c/sponsors/github.svg" },
          { name: "Devfolio", tier: "Platinum Sponsor", logo: "/events/c2c/sponsors/devfolio.svg" },
          { name: "Fold", tier: "Sponsor", logo: "/events/c2c/sponsors/fold.svg" },
          { name: "Matic", tier: "Sponsor", logo: "/events/c2c/sponsors/matic.svg" },
        ],
      },
      {
        year: "2019",
        edition: "Code2Create 3.0",
        description: "Largest pre-pandemic edition, with industry mentors from across Bangalore and Mumbai and the most diverse sponsor roster in C2C history at the time.",
        collectibles: [
          { name: "ACM-VIT Schwag Kit", desc: "Chapter merch and curated swag for every participant." },
          { name: "Patron Stickers", desc: "Sticker pack from the edition's industry patrons." },
        ],
        sponsors: [
          { name: "GitHub", tier: "Title Sponsor", logo: "/events/c2c/sponsors/github.svg" },
          { name: "HackerEarth", tier: "Platform Sponsor", logo: "/events/c2c/sponsors/hackerearth.svg" },
          { name: "Indriya Construction Company", tier: "Platinum Sponsor", logo: "/events/c2c/sponsors/indriya.svg" },
          { name: "DigitalOcean", tier: "Cloud Partner", logo: "/events/c2c/sponsors/digitalocean.svg" },
          { name: "IBM", tier: "Innovation Partner", logo: "/events/c2c/sponsors/ibm.svg" },
          { name: "Hasura", tier: "Innovation Partner", logo: "/events/c2c/sponsors/hasura.svg" },
          { name: "Coding Blocks", tier: "Learning Partner", logo: "/events/c2c/sponsors/codingblocks.svg" },
          { name: "AnitaB.org", tier: "Patron", logo: "/events/c2c/sponsors/anitab.svg" },
          { name: "Axure RP", tier: "Patron", logo: "/events/c2c/sponsors/axure.svg" },
          { name: "Bugsee", tier: "Patron", logo: "/events/c2c/sponsors/bugsee.svg" },
          { name: "CloudSploit", tier: "Patron", logo: "/events/c2c/sponsors/cloudsploit.svg" },
          { name: "InVision", tier: "Patron", logo: "/events/c2c/sponsors/invision.svg" },
          { name: "Jenkins", tier: "Patron", logo: "/events/c2c/sponsors/jenkins.svg" },
          { name: "JetBrains", tier: "Patron", logo: "/events/c2c/sponsors/jetbrains.svg" },
          { name: "Sketch", tier: "Patron", logo: "/events/c2c/sponsors/sketch.svg" },
          { name: "Slang Labs", tier: "Patron", logo: "/events/c2c/sponsors/slanglabs.svg" },
          { name: "Shift", tier: "Patron", logo: "/events/c2c/sponsors/shift.svg" },
          { name: "Sticker Mule", tier: "Patron", logo: "/events/c2c/sponsors/stickermule.svg" },
          { name: "Taskade", tier: "Patron", logo: "/events/c2c/sponsors/taskade.svg" },
          { name: "TTA", tier: "Patron", logo: "/events/c2c/sponsors/tta.svg" },
          { name: ".Tech Domains", tier: "Patron", logo: "/events/c2c/sponsors/techdomains.svg" },
          { name: "Wolfram Language", tier: "Patron", logo: "/events/c2c/sponsors/wolframlanguage.svg" },
        ],
      },
      {
        year: "2018",
        edition: "Code2Create 2.0",
        description: "Second edition, expanding tracks, sponsors, and on-campus participation. Built the foundation for C2C becoming a national flagship.",
        collectibles: [
          { name: "ACM-VIT Schwag Kit", desc: "Chapter merch and curated swag for every participant." },
          { name: "Patron Stickers", desc: "Sticker pack from the edition's industry patrons." },
        ],
        sponsors: [
          { name: "JSP Projects Pvt. Ltd.", tier: "Gold Sponsor", logo: "/events/c2c/sponsors/jsp.svg" },
          { name: "Balsamiq", tier: "Silver Sponsor", logo: "/events/c2c/sponsors/balsamiq.svg" },
          { name: "GitLab", tier: "Diversity Sponsor", logo: "/events/c2c/sponsors/gitlab.svg" },
          { name: "Iconscout", tier: "Patron", logo: "/events/c2c/sponsors/iconscout.svg" },
          { name: "Slack", tier: "Patron", logo: "/events/c2c/sponsors/slack.svg" },
          { name: "Twilio", tier: "Patron", logo: "/events/c2c/sponsors/twilio.svg" },
          { name: "Zulip", tier: "Chat Partner", logo: "/events/c2c/sponsors/zulip.svg" },
          { name: "Custom Baba", tier: "Merchandise Partner", logo: "/events/c2c/sponsors/custombaba.svg" },
          { name: "The Photography Club (TPC)", tier: "Media Partner", logo: "/events/c2c/sponsors/tpc.svg" },
          { name: "Ozonetel", tier: "Cloud Partner", logo: "/events/c2c/sponsors/ozonetel.svg" },
          { name: "GeeksforGeeks", tier: "Coding Partner", logo: "/events/c2c/sponsors/geeksforgeeks.svg" },
          { name: "npm", tier: "Sponsor", logo: "/events/c2c/sponsors/npm.svg" },
          { name: "Product Hunt", tier: "Sponsor", logo: "/events/c2c/sponsors/producthunt.svg" },
          { name: "Zeplin", tier: "Sponsor", logo: "/events/c2c/sponsors/zeplin.svg" },
          { name: "Travis CI", tier: "Sponsor", logo: "/events/c2c/sponsors/travisci.svg" },
          { name: "Docker", tier: "Sponsor", logo: "/events/c2c/sponsors/docker.svg" },
        ],
      },
      {
        year: "2017",
        edition: "Code2Create 1.0",
        description: "The inaugural edition. Campus-first hackathon that laid the foundation for everything that followed.",
        collectibles: [
          { name: "ACM-VIT Schwag Kit", desc: "Chapter merch and curated swag for every participant." },
          { name: "Patron Stickers", desc: "Sticker pack from the inaugural edition's patrons." },
        ],
        sponsors: [
          { name: "Transitus", tier: "Sponsor", logo: "/events/c2c/sponsors/transitus.svg" },
          { name: "Tricentis", tier: "Sponsor", logo: "/events/c2c/sponsors/tricentis.svg" },
        ],
      },
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
    tagline: "ACM-VIT's annual campus-wide scavenger hunt.",
    eyebrow: "ACM-VIT · Campus Scavenger Hunt",
    themeKey: "cc",
    themeColor: "#F5753B",
    cassetteSvg: "/events/cryptic-hunt-cassette.svg",
    shortDescription:
      "Cryptic Hunt is ACM-VIT's flagship scavenger hunt - a 36-hour campus-wide adventure where teams decode multi-layered clues, scan QR codes, and race across VIT Vellore to top the leaderboard.",
    longDescription: [
      "Cryptic Hunt is a campus-wide scavenger hunt packed with riddles, QR codes, and hidden clues scattered across VIT Vellore. Teams of 2 to 5 race against the clock over 36 hours, solving puzzles that blend lateral thinking, internet sleuthing, steganography, and physical exploration of the campus.",
      "The entire hunt runs through a custom-built app developed by ACM-VIT, available on both Android and iOS. Every clue, submission, and leaderboard update happens in real time through the app, making it a seamless mobile-first experience from start to finish.",
      "Since its debut in 2022, Cryptic Hunt has grown into one of the most anticipated events on the VIT calendar. With 2,700+ participants across four editions, it has become a tradition that brings together puzzle enthusiasts, curious explorers, and competitive teams every fall semester.",
      "What sets Cryptic Hunt apart is its blend of digital and physical. You're not just sitting at a laptop - you're running across campus, scanning hidden QR codes behind buildings, decoding ciphers in the library, and piecing together clues that span the real and the virtual.",
      "For the latest updates, follow @acmvit on Instagram and visit cryptichunt.acmvit.in.",
    ],
    format: "Offline · Campus scavenger hunt via mobile app",
    duration: "36 hours",
    mode: "Offline",
    audience: "All VIT students",
    team: "Teams of 2 to 5",
    organizedBy: "ACM-VIT · Cross-domain",
    firstHeld: "2022",
    recurrence: "Annual · Fall semester",
    registrationUrl: "https://cryptichunt.acmvit.in",
    primaryCtaLabel: "Visit cryptichunt.acmvit.in",
    hideCtaBanner: true,
    stats: [
      { value: "4", label: "Editions" },
      { value: "36h", label: "Per Edition" },
      { value: "2700+", label: "Past Participants" },
      { value: "App", label: "Android & iOS" },
    ],
    tracks: [
      { name: "Lateral Thinking", description: "Wordplay, riddles, cryptic crosswords, lateral logic puzzles." },
      { name: "Campus Exploration", description: "QR codes, physical clues, and hidden markers scattered across VIT Vellore." },
      { name: "Steganography", description: "Hidden data in images, audio spectrograms, and encoded files." },
      { name: "Web Sleuthing", description: "URL surgery, view-source, image EXIF, deep-Google." },
    ],
    schedule: [
      { time: "T-0", title: "Hunt Opens", description: "First clues drop on the Cryptic Hunt app." },
      { time: "T+12h", title: "Mid-hunt Checkpoint" },
      { time: "T+24h", title: "Final Stretch" },
      { time: "T+36h", title: "Hunt Closes + Results" },
    ],
    prizes: [
      { place: "1st Team", value: "Cash + ACM-VIT custom merch" },
      { place: "2nd & 3rd", value: "Cash + swag kit" },
      { place: "Fastest Solve Bounties", value: "Special prizes for first-to-crack milestones" },
    ],
    highlights: [],
    perks: [
      "Custom mobile app experience on Android & iOS",
      "Real-time leaderboard and hint system",
      "Full solution walkthroughs released post-event",
      "Custom merch and stickers for participants",
    ],
    faq: [
      { q: "Do I need to be on campus?", a: "Yes. Cryptic Hunt is a physical scavenger hunt across VIT Vellore campus." },
      { q: "Do I need to download an app?", a: "Yes. The hunt runs entirely through the Cryptic Hunt app, available on both Android and iOS." },
      { q: "What's a good team size?", a: "3 to 4 is the sweet spot - enough coverage to split up and explore while staying coordinated." },
    ],
    instagramHandle: "acmvit",
    socials: [
      { label: "Instagram · @acmvit", href: "https://instagram.com/acmvit" },
      { label: "Website", href: "https://cryptichunt.acmvit.in" },
    ],
    pastEditions: [
      {
        year: "2025",
        edition: "Cryptic Hunt 4.0",
        description: "Largest edition yet, featuring refined app experience, new puzzle mechanics, and collectible stickers for participants. Sponsored by Hey Hoku.",
        links: [
          { label: "Website", href: "https://cryptichunt.acmvit.in" },
          { label: "Solutions", href: "https://github.com/ACM-VIT/Cryptic-Hunt-Solutions-2025" },
        ],
        collectibles: [
          { name: "CH Espresso Sticker", image: "/events/cryptic-hunt/ch-espresso.png", desc: "Limited-edition Cryptic Hunt sticker from the 2025 edition." },
          { name: "CH Timeless Sticker", image: "/events/cryptic-hunt/ch-timeless.png", desc: "Limited-edition Cryptic Hunt sticker from the 2025 edition." },
        ],
        sponsors: [
          { name: "Hey Hoku", tier: "Sponsor" },
        ],
      },
      {
        year: "2024",
        edition: "Cryptic Hunt 3.0",
        description: "Third edition that expanded the puzzle chain and campus coverage, with Urban Jungle coming on board as sponsor.",
        links: [
          { label: "Solutions", href: "https://github.com/ACM-VIT/Cryptic-Hunt-Solutions-2024" },
        ],
        sponsors: [
          { name: "Urban Jungle", tier: "Sponsor" },
        ],
      },
      {
        year: "2023",
        edition: "Cryptic Hunt 2.0",
        description: "Second edition building on the inaugural format with more puzzles, wider campus coverage, and a growing participant base.",
        links: [
          { label: "Solutions", href: "https://github.com/ACM-VIT/Cryptic-Hunt-Solutions-2023" },
        ],
      },
      {
        year: "2022",
        edition: "Cryptic Hunt 1.0",
        description: "The inaugural edition. A brand-new campus scavenger hunt format powered by a custom-built app, setting the foundation for what would become one of ACM-VIT's most beloved events.",
        links: [
          { label: "Solutions", href: "https://github.com/ACM-VIT/Cryptic-Hunt-22-solutions" },
        ],
      },
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
    eyebrow: "ACM-VIT · RCPC · Competitive Coding",
    themeKey: "cc",
    themeColor: "#9B51E0",
    cassetteSvg: "/events/reverse-coding-cassette.svg",
    shortDescription:
      "Reverse Coding (RCPC) is one of the premier competitive coding events hosted by ACM-VIT. An unconventional reverse-engineering competition where participants decipher hidden code logic based on provided input-output patterns or executable files - no problem statements, just test cases.",
    longDescription: [
      "Reverse Coding is one of the largest competitive coding events at VIT Vellore. Nicknamed RCPC - in homage to ICPC, once conducted by ACM-VIT's parent body ACM International - it has been running since 2018 and has grown into an ACM-VIT staple with 7 editions and over 5,000 participants to date.",
      "Instead of being given a problem statement and writing code from scratch, participants must deduce the underlying logic of a mystery program. They are provided with runnable or executable files that display specific input and output test cases. Programmers analyse the relationship between inputs and outputs to spot hidden patterns in strings, numbers, or sequences, then reverse-engineer the algorithm and submit code in C, C++, Java, or Python to pass hidden test cases on a custom portal.",
      "The entire event runs on a portal fully developed by ACM-VIT - frontend, backend, everything. Since the 2024 edition every year's portal has had a new theme: the 2024 edition was themed around algorithms and time complexity, the 2025 edition embraced Star Wars, and the 2026 edition went with Formula 1.",
      "Reverse Coding is an annual event held during the winter semester. It rewards pattern recognition, hypothesis-testing, and the ability to write code from a fuzzy specification. Some problems are simple math, others are string manipulation, others involve lateral reasoning. The lore is real.",
    ],
    format: "Online · Reverse-engineering coding contest on custom portal",
    duration: "3 hours",
    mode: "Online",
    audience: "All undergraduate students",
    team: "Teams of 2 to 4",
    organizedBy: "ACM-VIT · Competitive Coding Domain",
    firstHeld: "2018",
    recurrence: "Annual · Winter semester",
    registrationUrl: "https://rcpc.acmvit.in",
    primaryCtaLabel: "Visit rcpc.acmvit.in",
    stats: [
      { value: "7", label: "Editions" },
      { value: "5000+", label: "Past Participants" },
    ],
    tracks: [
      { name: "Pattern Recognition", description: "Most problems reduce to spotting the rule that maps input to output." },
      { name: "Math & Number Theory", description: "Sequences, modular arithmetic, prime properties - common building blocks." },
      { name: "String Transformation", description: "Encoding, decoding, character mapping - read carefully." },
    ],
    schedule: [
      { time: "00:00", title: "Contest Opens", description: "Problem set drops as I/O pairs only on the custom portal." },
      { time: "02:30", title: "Scoreboard Frozen - Final 30 Minutes" },
      { time: "03:00", title: "Contest Ends + Editorials Released" },
    ],
    prizes: [
      { place: "1st", value: "Cash + ACM-VIT custom merch" },
      { place: "2nd & 3rd", value: "Cash + swag kit" },
      { place: "First Solve Bonuses", value: "Recognition per problem for fastest solve" },
    ],
    highlights: [],
    perks: [
      "Full editorials with worked examples post-contest",
      "Community Discord with hint and discussion channels",
      "Pathway into ACM-VIT's internal CP cohort",
      "Custom-themed portal experience each year",
    ],
    faq: [
      { q: "How do I know what to code without a problem statement?", a: "That's the contest. The I/O pairs are the specification. Analyse the patterns and reverse-engineer the logic." },
      { q: "What language can I use?", a: "C, C++, Java, or Python - submitted through the custom RCPC portal." },
      { q: "Is partial credit awarded?", a: "Yes - submissions are graded per test case." },
      { q: "What is RCPC?", a: "RCPC is the nickname for Reverse Coding, in homage to ICPC which was conducted by ACM-VIT's parent body ACM International." },
    ],
    instagramHandle: "acmvit",
    socials: [
      { label: "Instagram · @acmvit", href: "https://instagram.com/acmvit" },
      { label: "2026 Portal · rcpc.acmvit.in", href: "https://rcpc.acmvit.in" },
      { label: "2025 Portal · futureportal.acmvit.in", href: "http://futureportal.acmvit.in/" },
    ],
    pastEditions: [
      {
        year: "2026",
        edition: "RCPC 2026",
        description: "Formula 1-themed edition. The portal at rcpc.acmvit.in featured an F1-inspired design, continuing the tradition of a unique portal theme each year.",
        links: [
          { label: "Portal", href: "https://rcpc.acmvit.in" },
          { label: "Solutions", href: "https://github.com/ACM-VIT/rc26-solutions" },
        ],
        collectibles: [
          { name: "RCPC Sticker", desc: "Limited-edition RCPC sticker from the 2026 edition." },
        ],
      },
      {
        year: "2025",
        edition: "RCPC 2025",
        description: "Star Wars-themed edition. The portal at futureportal.acmvit.in brought a galaxy far, far away to competitive coding. Sponsored by EaseMyTrip.",
        links: [
          { label: "Portal", href: "http://futureportal.acmvit.in/" },
          { label: "Solutions", href: "https://github.com/ACM-VIT/rc-2025-solutions" },
        ],
        collectibles: [
          { name: "RCPC Sticker", desc: "Limited-edition RCPC sticker from the 2025 edition." },
        ],
        sponsors: [
          { name: "EaseMyTrip", tier: "Sponsor" },
        ],
      },
      {
        year: "2024",
        edition: "RCPC 2024",
        description: "Algorithms and time complexity-themed edition. First year with a themed portal experience, setting the standard for future editions. Sponsored by EaseMyTrip.",
        sponsors: [
          { name: "EaseMyTrip", tier: "Sponsor" },
        ],
      },
      {
        year: "2023",
        edition: "RCPC 2023",
        description: "Continued the annual tradition with a growing participant base and a refined contest format. Sponsored by Into The Verse.",
        sponsors: [
          { name: "Into The Verse", tier: "Sponsor" },
        ],
      },
      {
        year: "2022",
        edition: "RCPC 2022",
        description: "Return after a pandemic-year gap, bigger than ever. Sponsored by Nuclei.",
        links: [
          { label: "Solutions", href: "https://github.com/ACM-VIT/Reverse-Coding-2022-Solutions" },
        ],
        sponsors: [
          { name: "Nuclei", tier: "Sponsor" },
        ],
      },
      {
        year: "2020",
        edition: "RCPC 2020",
        description: "Edition held during a challenging year, backed by a strong roster of sponsors.",
        sponsors: [
          { name: "Recover", tier: "Sponsor" },
          { name: "Uacelt", tier: "Sponsor" },
          { name: "Code Asylums", tier: "Sponsor" },
          { name: "ClassRoom", tier: "Sponsor" },
          { name: "Replit", tier: "Sponsor" },
        ],
      },
      {
        year: "2019",
        edition: "RCPC 2019",
        description: "Second edition, building on the inaugural format with increased participation. Sponsored by Coding Blocks.",
        sponsors: [
          { name: "Coding Blocks", tier: "Sponsor" },
        ],
      },
      {
        year: "2018",
        edition: "RCPC 2018",
        description: "The inaugural edition. A brand-new reverse-engineering coding format that would grow into one of ACM-VIT's most beloved events. Sponsored by Foxmula.",
        sponsors: [
          { name: "Foxmula", tier: "Sponsor" },
        ],
      },
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
