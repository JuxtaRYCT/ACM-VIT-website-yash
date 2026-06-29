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
    cassetteSvg: "/projects/items/3/cassetteSrc.webp",
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
};

export const projectSlugs = Object.keys(projectDetails);
