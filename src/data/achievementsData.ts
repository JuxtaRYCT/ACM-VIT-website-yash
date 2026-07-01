// Achievements page data. Placeholder content - swap for real awards, ranks and
// milestones once details are in. Keep the shapes; the page renders off these.

export type Achievement = {
  /** Award / recognition title. */
  title: string;
  /** The body or program that granted it. */
  org: string;
  /** Year (or range) it was earned. */
  year: string;
  /** One-line context. */
  blurb: string;
  /** Optional placement tag, e.g. "1st", "Gold", "Winner". */
  place?: string;
  /** Optional visual asset (badge, photo, logo). Public path, e.g. "/ui/acm-celeb.png". */
  image?: string;
};

export type Stat = {
  num: string;
  label: string;
  sub?: string;
};

// Headline numbers for the stat band.
export const stats: Stat[] = [
  { num: "—", label: "Awards Won", sub: "All-time" },
  { num: "—", label: "Hackathons", sub: "Placed at" },
  { num: "—", label: "Members Recognized", sub: "And counting" },
  { num: "—", label: "Years Running", sub: "Since founding" },
];

// The reel of achievements, newest first.
export const achievements: Achievement[] = [
  {
    title: "Placeholder Achievement",
    org: "Granting Body",
    year: "2026",
    place: "Winner",
    blurb: "Replace with the real story once the details land.",
    // Drop a public asset path here to show a badge/photo on the card:
    // image: "/ui/acm-celeb.png",
  },
  {
    title: "Another Milestone",
    org: "Program / Event",
    year: "2025",
    place: "1st",
    blurb: "Short line describing what the team pulled off.",
  },
  {
    title: "Recognition",
    org: "Body",
    year: "2024",
    place: "Gold",
    blurb: "Context goes here.",
  },
];
