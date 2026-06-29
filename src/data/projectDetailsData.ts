// Rich project metadata for /projects/[project] detail pages.
// Slugs match projects grid. Mirrors eventDetailsData.ts structure.

import { techTools, type TechTool } from "./techDomainData";

export type ProjectStat = { value: string; label: string };
export type ProjectLink = { label: string; href: string; kind?: "github" | "website" | "play" | "appstore" | "download" | "docs" | "demo" | "external" };
export type ProjectDeveloper = {
  name?: string;
  github: string; // username only (no URL prefix)
  role?: string;
};
export type ProjectDesigner = {
  name: string;
  linkedin: string;
  role?: string;
};

export type ProjectStatus = "online" | "degraded" | "maintenance" | "offline" | "archived";

export interface ProjectVersion {
  label: string;
  year: string;
  blurb: string;
  techSlugs: string[];
  developers?: ProjectDeveloper[];
  designers?: ProjectDesigner[];
  links?: ProjectLink[];
  themeColor?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  eyebrow: string;
  themeColor: string;
  themeColorSecondary?: string;
  shortDescription: string;
  longDescription: string[];
  status: ProjectStatus;
  statusNote?: string;
  cassetteSvg?: string;
  heroImage?: string;
  gallery?: { src: string; alt: string }[];
  galleryLayout?: "phone" | "landscape";
  stats?: ProjectStat[];
  features?: ProjectFeature[];
  techStack: { category: string; slugs: string[] }[];
  developers?: ProjectDeveloper[];
  designers?: ProjectDesigner[];
  links: ProjectLink[];
  versions?: ProjectVersion[];
  /** Falls back to a deterministic seed if not provided. */
  commitGraphSeed?: number;
}

const techBySlug: Record<string, TechTool> = Object.fromEntries(
  techTools.map((t) => [t.slug, t])
);

export function lookupTechTool(slug: string): TechTool | undefined {
  return techBySlug[slug];
}

export const projectDetails: Record<string, ProjectDetail> = {
  acmone: {
    slug: "acmone",
    title: "ACMOne",
    tagline: "All of ACM, in one.",
    eyebrow: "ACM-VIT · Mobile · Chapter Ops",
    themeColor: "#F95F4A",
    themeColorSecondary: "#2A1410",
    shortDescription:
      "Internal app for ACM-VIT's 100+ organising committee. Announcements, events calendar, meetings, ID scanning for On Duty and Night Slips, learning resources - one place for everything chapter ops.",
    longDescription: [
      "Running a 100-strong student chapter gets messy fast. Meetings stack up, deadlines slip through DMs, ODs get lost in spreadsheets. ACMOne is what ACM-VIT built so the people running ACM-VIT could stop firefighting and start shipping.",
      "Members get real-time announcements, a shared events calendar, meeting agendas + minutes in one place, and an ID scanner that takes On Duty and Night Slip registrations from a 10-minute Google Form ritual down to a tap. Leads manage roles, assign tasks, and track who's actually around for the next event.",
      "The Android app is built in React Native + Expo with Firebase + Auth0 for sign-in. The backend is FastAPI on Docker, SQLAlchemy talking to PostgreSQL on CockroachDB, and a Google APIs integration so calendar + sheets stay in sync with the chapter's existing workflows.",
    ],
    status: "online",
    statusNote: "Internal - chapter only",
    heroImage: "/projects/acmone/acmone-logo.webp",
    gallery: [
      { src: "/projects/acmone/screen-1.webp", alt: "ACMOne home screen" },
      { src: "/projects/acmone/screen-2.webp", alt: "ACMOne events view" },
      { src: "/projects/acmone/screen-3.webp", alt: "ACMOne ID scanning flow" },
    ],
    galleryLayout: "landscape",
    stats: [
      { value: "100+", label: "Committee members" },
      { value: "Android", label: "Platform" },
      { value: "2024", label: "First shipped" },
      { value: "Internal", label: "Audience" },
    ],
    features: [
      { title: "Real-time announcements", description: "Push updates to the whole committee so nothing lives in a forgotten DM." },
      { title: "Events calendar", description: "Every workshop, meeting, and deadline in one shared view. No more 'when was that again?'" },
      { title: "Meeting ops", description: "Schedule, set agendas, capture minutes. Past meetings stay searchable." },
      { title: "ID scanning for OD / Night Slip", description: "Camera-based scanner registers On Duty and Night Slip entries in seconds." },
      { title: "Roles and tasks", description: "Assign responsibilities, track ownership, see who's handling what at a glance." },
      { title: "Learning resources", description: "Workshop material and reading lists pulled straight into the app for new inductees." },
    ],
    techStack: [
      {
        category: "Mobile",
        slugs: ["react-native", "expo", "typescript", "firebase"],
      },
      {
        category: "Backend",
        slugs: ["python", "postgresql", "cockroachdb", "docker"],
      },
      {
        category: "Infrastructure",
        slugs: ["gcp"],
      },
      {
        category: "Tooling",
        slugs: ["git", "github", "postman"],
      },
    ],
    developers: [
      { github: "tanushgolwala", role: "Lead developer" },
      { github: "theg1239", role: "Developer" },
      { github: "Balaji-3009", role: "Developer" },
      { github: "TejasGhatte", role: "Developer" },
      { github: "DibyashaktiMoharana", role: "Developer" },
      { github: "ShreyasM09", role: "Developer" },
      { github: "harshitaak07", role: "Developer" },
      { github: "TaniyaRajesh", role: "Developer" },
      { github: "Pratishtha36", role: "Developer" },
      { github: "JothishKamal", role: "Developer" },
      { github: "yashsinha1224", role: "Developer" },
      { github: "Van5sh", role: "Developer" },
      { github: "Kashishsingh4", role: "Developer" },
      { github: "Mkrishbl4z3", role: "Developer" },
      { github: "RealAradhyaGupta", role: "Developer" },
      { github: "nishthaaggarwal24", role: "Developer" },
    ],
    links: [
      { label: "Website", href: "https://acmone.acmvit.in", kind: "website" },
      { label: "App repo", href: "https://github.com/ACM-VIT/ACMOne-app", kind: "github" },
      { label: "Backend repo", href: "https://github.com/ACM-VIT/ACMOne-backend", kind: "github" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.acmvit.acmone&hl=en_IN", kind: "play" },
    ],
    commitGraphSeed: 42,
  },

  unipool: {
    slug: "unipool",
    title: "UniPool",
    tagline: "Carpooling, redesigned for campus.",
    eyebrow: "ACM-VIT · Mobile · Carpool",
    themeColor: "#B5D750",
    themeColorSecondary: "#263B33",
    shortDescription:
      "Carpooling app for university students. Find people headed your way, split fares, chat in-app, and track rides on a live map.",
    longDescription: [
      "UniPool is a student-first carpooling app built by ACM-VIT to make daily commute and weekend travel easier for university students. Riders post or join trips, match on routes, coordinate in chat, and meet at a pickup pin on the map.",
      "The current release (UniPool 2) is a ground-up redesign of the original 2024 app. It's available on both Android and iOS, ships an in-app chat, native maps with live pickup, and a notification pipeline that actually keeps both sides of the ride in sync.",
      "Under the hood it's the same idea as before - students helping students travel cheaper and safer - but with a cleaner flow, fewer taps, and a UI built for the way people actually plan trips on a campus.",
    ],
    status: "online",
    statusNote: "Actively maintained",
    heroImage: "/projects/unipool/unipool-main-logo.svg",
    gallery: [
      { src: "/projects/unipool/shot-home.png", alt: "UniPool home feed" },
      { src: "/projects/unipool/shot-search.png", alt: "UniPool ride search" },
      { src: "/projects/unipool/shot-pay.png", alt: "UniPool fare split" },
    ],
    stats: [
      { value: "iOS + Android", label: "Platforms" },
      { value: "v2.0", label: "Current release" },
      { value: "2024", label: "First shipped" },
      { value: "Campus-first", label: "Audience" },
    ],
    features: [
      { title: "In-app chat", description: "1-on-1 and ride group chats so co-riders can coordinate pickup without leaking phone numbers." },
      { title: "Live map", description: "Native map with pickup pins, route preview, and trip status." },
      { title: "Smart notifications", description: "Ride requests, accepts, reminders, and status changes pushed across both platforms." },
      { title: "Redesigned UX", description: "Rebuilt from scratch over UniPool 1 - fewer taps to post or join a ride." },
      { title: "Cross-platform", description: "Built once for iOS and Android via React Native / Expo." },
      { title: "Auth that just works", description: "Firebase + Google sign-in, no separate password to forget." },
    ],
    techStack: [
      {
        category: "Mobile",
        slugs: ["react-native", "expo", "typescript", "react"],
      },
      {
        category: "Backend",
        slugs: ["go", "postgresql", "gcp", "firebase"],
      },
      {
        category: "Tooling",
        slugs: ["git", "github", "postman"],
      },
    ],
    developers: [
      { github: "theg1239", role: "UniPool 2 - Lead developer" },
    ],
    designers: [
      { name: "JuxtaRYCT", linkedin: "https://www.linkedin.com/in/juxtaryct/", role: "UniPool 2 - Design" },
    ],
    links: [
      { label: "Website", href: "https://unipool.acmvit.in/", kind: "website" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.carpoolitapp&hl=en", kind: "play" },
      { label: "App Store", href: "https://apps.apple.com/in/app/unipool/id6756426249", kind: "appstore" },
    ],
    versions: [
      {
        label: "UniPool 2",
        year: "2025",
        blurb:
          "Total redesign. Chat, native maps, push notifications, smoother onboarding, and an iOS release alongside Android.",
        techSlugs: ["react-native", "expo", "typescript", "go", "postgresql", "firebase", "gcp"],
        themeColor: "#B5D750",
        developers: [{ github: "theg1239", role: "Lead developer" }],
        designers: [
          { name: "JuxtaRYCT", linkedin: "https://www.linkedin.com/in/juxtaryct/", role: "Design" },
        ],
        links: [{ label: "Website", href: "https://unipool.acmvit.in/", kind: "website" }],
      },
      {
        label: "UniPool 1",
        year: "2024",
        blurb:
          "First release. Android-only via Play Store. Picked up decent traction across the campus carpool crowd.",
        techSlugs: ["react-native", "expo", "typescript", "go", "postgresql", "firebase", "gcp"],
        themeColor: "#7C3AED",
        developers: [
          { github: "tanushgolwala" },
          { github: "mananssh" },
          { github: "harshitaak07" },
          { github: "eshita241" },
          { github: "aastikn" },
          { github: "JuxtaRYCT" },
        ],
        designers: [
          { name: "Srija Puvvada", linkedin: "https://www.linkedin.com/in/srija-puvvada-5764962b5/" },
          { name: "Karn", linkedin: "https://www.linkedin.com/in/karnx/" },
        ],
      },
    ],
    commitGraphSeed: 71,
  },

  examcooker: {
    slug: "examcooker",
    title: "ExamCooker",
    tagline: "Cramming, made easy.",
    eyebrow: "ACM-VIT · Web + Mobile · EdTech",
    themeColor: "#27BAEC",
    themeColorSecondary: "#253EE0",
    shortDescription:
      "One-stop platform for exam resources. Past papers, notes, syllabi, forums, and a resource repo - built by students, for the 2 AM crammer.",
    longDescription: [
      "ExamCooker started as a summer project idea from a senior who wanted a single place for past year papers and notes. Four maintainers from ACM-VIT shaped it into a full-stack platform that now serves 15,000+ students across VIT Vellore.",
      "Students upload and access past papers, contribute notes, check syllabi, and discuss on forums. The platform verifies VIT email addresses via Google OAuth, generates PDF thumbnails on the fly, and caches aggressively with Redis so it doesn't fall over during exam week traffic spikes.",
      "The app ships on web, Android, and iOS. Under the hood it runs Next.js 14 with server-side rendering on Vercel, a FastAPI microservice for PDF processing, CockroachDB for distributed storage, and Google Cloud Storage for file hosting.",
    ],
    status: "online",
    statusNote: "Actively maintained",
    heroImage: "/projects/examcooker/examcooker-logo.png",
    gallery: [
      { src: "/projects/examcooker/shot-1.webp", alt: "ExamCooker papers view" },
      { src: "/projects/examcooker/shot-2.webp", alt: "ExamCooker syllabus repository" },
      { src: "/projects/examcooker/shot-3.webp", alt: "ExamCooker home screen" },
    ],
    stats: [
      { value: "15,000+", label: "Active users" },
      { value: "Web + iOS + Android", label: "Platforms" },
      { value: "100+", label: "Courses covered" },
      { value: "2024", label: "First shipped" },
    ],
    features: [
      { title: "Past papers", description: "Searchable repository of previous exam papers across 100+ courses, tagged by semester and subject." },
      { title: "Student notes", description: "Community-contributed notes. Upload your own or study from someone else's." },
      { title: "Syllabus tracker", description: "Know exactly what's in scope before you start cramming." },
      { title: "Forums", description: "Discussion boards for peer-to-peer Q&A and exam strategy." },
      { title: "Resource repo", description: "Curated links to articles, videos, and external learning material." },
      { title: "PDF preview", description: "Instant thumbnail previews of uploaded PDFs. No more downloading to check if it's the right paper." },
    ],
    techStack: [
      {
        category: "Frontend",
        slugs: ["nextjs", "react", "typescript", "tailwindcss"],
      },
      {
        category: "Backend",
        slugs: ["python", "cockroachdb", "prisma", "redis"],
      },
      {
        category: "Infrastructure",
        slugs: ["vercel", "gcp"],
      },
      {
        category: "Tooling",
        slugs: ["git", "github"],
      },
    ],
    developers: [
      { github: "theg1239", role: "Lead developer" },
      { github: "Supratim69", role: "Maintainer" },
      { github: "Alan-J-Bibins", role: "Developer" },
      { github: "RohitPhaniramSakamuri", role: "Developer" },
      { github: "kairavsheth", role: "Maintainer" },
      { github: "nitine", role: "Developer" },
      { github: "AnishaDhoot", role: "Developer" },
      { github: "ojask99", role: "Developer" },
      { github: "Nitesh-04", role: "Maintainer" },
      { github: "thinkter", role: "Developer" },
      { github: "Kaustubh-sandy", role: "Developer" },
      { github: "mahendra785", role: "Developer" },
      { github: "tanushgolwala", role: "Developer" },
      { github: "adii2ma", role: "Developer" },
      { github: "drashtishukla", role: "Developer" },
      { github: "SarupaVL", role: "Developer" },
      { github: "bhatiyavansh", role: "Developer" },
      { github: "vianmangal", role: "Developer" },
      { github: "eshita241", role: "Maintainer" },
      { github: "pj4real", role: "Developer" },
      { github: "Passive-Coder", role: "Developer" },
      { github: "ant1v3n0m", role: "Developer" },
    ],
    designers: [
      { name: "Alan J Bibins", linkedin: "https://www.linkedin.com/in/alanjbibins/", role: "Design" },
      { name: "Krishika Sureka", linkedin: "https://www.linkedin.com/in/krishikasureka/", role: "Design" },
    ],
    links: [
      { label: "Website", href: "https://examcooker.acmvit.in/", kind: "website" },
      { label: "GitHub", href: "https://github.com/ACM-VIT/ExamCooker", kind: "github" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=in.acmvit.examcooker", kind: "play" },
      { label: "App Store", href: "https://apps.apple.com/ng/app/examcooker/id6765768416", kind: "appstore" },
      { label: "Blog", href: "https://blog.acmvit.in/the-chefs-secrets-the-story-behind-examcooker", kind: "external" },
    ],
    versions: [
      {
        label: "ExamCooker App",
        year: "2025",
        blurb:
          "Native mobile app on iOS and Android, bringing past papers and notes to phones. Growth to 15,000+ users.",
        techSlugs: ["react-native", "expo", "typescript"],
        developers: [
          { github: "theg1239", role: "Lead developer" },
        ],
        designers: [
          { name: "Alan J Bibins", linkedin: "https://www.linkedin.com/in/alanjbibins/", role: "Design" },
          { name: "Krishika Sureka", linkedin: "https://www.linkedin.com/in/krishikasureka/", role: "Design" },
        ],
      },
      {
        label: "ExamCooker Website",
        year: "2024",
        blurb:
          "Full-stack web platform. Built during ACM summer project cycle. Hit 1,500 users during the first exam season.",
        techSlugs: ["nextjs", "react", "typescript", "tailwindcss", "python", "cockroachdb", "prisma", "redis", "vercel", "gcp"],
        developers: [
          { github: "theg1239", role: "Lead developer" },
          { github: "Supratim69", role: "Maintainer" },
          { github: "Alan-J-Bibins", role: "Developer" },
          { github: "RohitPhaniramSakamuri", role: "Developer" },
          { github: "kairavsheth", role: "Maintainer" },
          { github: "nitine", role: "Developer" },
          { github: "AnishaDhoot", role: "Developer" },
          { github: "ojask99", role: "Developer" },
          { github: "Nitesh-04", role: "Maintainer" },
          { github: "thinkter", role: "Developer" },
          { github: "Kaustubh-sandy", role: "Developer" },
          { github: "mahendra785", role: "Developer" },
          { github: "tanushgolwala", role: "Developer" },
          { github: "adii2ma", role: "Developer" },
          { github: "drashtishukla", role: "Developer" },
          { github: "SarupaVL", role: "Developer" },
          { github: "bhatiyavansh", role: "Developer" },
          { github: "vianmangal", role: "Developer" },
          { github: "eshita241", role: "Maintainer" },
          { github: "pj4real", role: "Developer" },
          { github: "Passive-Coder", role: "Developer" },
          { github: "ant1v3n0m", role: "Developer" },
        ],
      },
    ],
    commitGraphSeed: 137,
  },

  "cli-rpg": {
    slug: "cli-rpg",
    title: "CLI-RPG",
    tagline: "Mystery of the Forgotten.",
    eyebrow: "ACM-VIT · Game · Terminal",
    themeColor: "#16A34A",
    themeColorSecondary: "#0F3D1E",
    shortDescription:
      "A text-based adventure game in your terminal. Explore a mysterious world, solve puzzles, manage your inventory, and uncover secrets - all through the command line.",
    longDescription: [
      "Mystery of the Forgotten is a CLI role-playing game built during the ACM-VIT project cycle. Players navigate a mysterious world filled with branching storylines, diverse characters, and challenging puzzles - entirely through text commands.",
      "The game features an inventory management system, ASCII art for every location and encounter, and an integrated music player with a live audio visualizer - all running inside a terminal. Multiple endings mean each playthrough can go differently depending on your choices.",
      "Built in Rust using Ratatui for the terminal UI and Supabase on the backend, CLI-RPG is a showcase of what's possible when you push the command line beyond its usual limits.",
    ],
    status: "online",
    statusNote: "Playable now",
    heroImage: "/projects/CLI-RPG.svg",
    gallery: [
      { src: "/projects/cli-rpg/shot-login.png", alt: "CLI-RPG login screen" },
      { src: "/projects/cli-rpg/shot-house.png", alt: "CLI-RPG haunted house ASCII art" },
      { src: "/projects/cli-rpg/shot-map.png", alt: "CLI-RPG floor plan exploration" },
      { src: "/projects/cli-rpg/shot-puzzle.png", alt: "CLI-RPG DNA sequence puzzle" },
    ],
    galleryLayout: "landscape",
    stats: [
      { value: "Rust", label: "Built in" },
      { value: "Multiple", label: "Endings" },
      { value: "Terminal", label: "Platform" },
      { value: "2024", label: "First shipped" },
    ],
    features: [
      { title: "Branching storyline", description: "Multiple endings based on your choices. Every playthrough reveals something different." },
      { title: "ASCII art", description: "Hand-crafted ASCII art for locations, characters, and encounters." },
      { title: "Music player", description: "Integrated music player with an interactive audio visualizer, all in the terminal." },
      { title: "Inventory system", description: "Collect, use, and manage items as you explore the world." },
      { title: "Puzzles and minigames", description: "Various puzzles and games woven into the narrative." },
      { title: "Terminal-native", description: "No GUI, no browser. Pure command-line experience built with Ratatui." },
    ],
    techStack: [
      {
        category: "Core",
        slugs: ["rust"],
      },
      {
        category: "Backend",
        slugs: ["supabase"],
      },
      {
        category: "Tooling",
        slugs: ["git", "github"],
      },
    ],
    developers: [
      { github: "aastikn", role: "Maintainer" },
      { github: "shambhavipaygude", role: "Maintainer" },
      { github: "JuxtaRYCT", role: "Maintainer" },
      { github: "D-Vspec", role: "Developer" },
      { github: "AV295", role: "Developer" },
      { github: "bharatwalejain", role: "Developer" },
      { github: "Zxcivic", role: "Developer" },
      { github: "AJ1312", role: "Developer" },
      { github: "GHAUTHAM2509", role: "Developer" },
      { github: "btcry", role: "Developer" },
      { github: "theforce1579", role: "Developer" },
      { github: "NAINCY1710", role: "Developer" },
      { github: "parthgoyal974", role: "Developer" },
      { github: "SINGHPARTH2003", role: "Developer" },
      { github: "prateekpurohit13", role: "Developer" },
      { github: "ShauryaGarg17", role: "Developer" },
      { github: "SonitBahl", role: "Developer" },
      { github: "0VISH", role: "Developer" },
    ],
    designers: [],
    links: [
      { label: "Website", href: "https://cli-rpg.acmvit.in/", kind: "website" },
    ],
    commitGraphSeed: 203,
  },
};

import { forktoberProjectDetails } from "./forktoberProjectsData";

Object.assign(projectDetails, forktoberProjectDetails);

export const projectSlugs = Object.keys(projectDetails);
