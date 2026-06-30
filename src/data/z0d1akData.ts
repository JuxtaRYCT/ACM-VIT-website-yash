// z0d1ak — ACM-VIT competitive CTF team.
// Source: https://ctftime.org/team/373452 (pulled 2026-06-30).
// Only verified CTFtime figures live here. Do not invent results.

export interface RatingYear {
  year: number;
  globalRank: number;
  countryRank: number; // India
  ratingPoints: number;
  events: number;
}

export const ratingHistory: RatingYear[] = [
  { year: 2026, globalRank: 8, countryRank: 1, ratingPoints: 607.192, events: 59 },
  { year: 2025, globalRank: 675, countryRank: 48, ratingPoints: 93.971, events: 20 },
];

export const current = ratingHistory[0];

export interface Achievement {
  event: string;
  place: number;          // finishing position
  ratingPoints?: number;  // CTFtime rating points earned
  ctfPoints?: number;     // in-competition score
  // star-map coordinates, percentage of the map viewport
  x: number;
  y: number;
  magnitude: number;      // 1 = brightest / most significant
}

// Achievements plotted as a star atlas - a single chart line traced through
// the season's results, left to right. magnitude 1 = podium finish.
export const achievements: Achievement[] = [
  { event: "Hackअस्त्र",        place: 1,  ratingPoints: 50.0,   ctfPoints: 9016,  x: 10, y: 30, magnitude: 1 },
  { event: "GPN CTF 2026",      place: 2,  ratingPoints: 97.334, ctfPoints: 4127,  x: 24, y: 22, magnitude: 1 },
  { event: "Incognito 7.0",     place: 3,  ratingPoints: 20.781, ctfPoints: 4700,  x: 38, y: 44, magnitude: 1 },
  { event: "KAALCHAKRA Finals", place: 4,                        ctfPoints: 6850,  x: 52, y: 34, magnitude: 2 },
  { event: "DalCTF 2026",       place: 29,                       ctfPoints: 5358,  x: 64, y: 58, magnitude: 3 },
  { event: "JerseyCTF VI",      place: 30,                       ctfPoints: 15586, x: 78, y: 40, magnitude: 3 },
  { event: "KubSTU CTF",        place: 41,                       ctfPoints: 21301, x: 90, y: 52, magnitude: 3 },
];

// A single sequential trail traced through the results, left to right.
export const achievementLines: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
];

// Active roster on CTFtime. Usernames only - no other personal data published.
export const members: string[] = [
  "ant1v3n0m",
  "theg1239",
  "ret2.libc",
  "neerajcodz",
  "ludicrouslytrue",
  "AncientDragon",
  "afishchan",
  "TitanCode",
  "P4kh1H3y4a",
  "Abhi404",
];

export interface TimelineEra {
  year: number;
  title: string;
  rank: string;
  rating: number;
  events: number;
  blurb: string;
}

export const timeline: TimelineEra[] = [
  {
    year: 2025,
    title: "First Light",
    rank: "World #675 · India #48",
    rating: 93.971,
    events: 20,
    blurb:
      "The team charts its opening season on CTFtime, playing 20 events and establishing a foothold on the global board.",
  },
  {
    year: 2026,
    title: "Supernova",
    rank: "World #8 · India #1",
    rating: 607.192,
    events: 59,
    blurb:
      "A 59-event campaign carries z0d1ak to 8th in the world and 1st in India, with podium finishes across international competitions.",
  },
];
