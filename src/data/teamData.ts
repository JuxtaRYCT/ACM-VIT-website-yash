// Placeholder team roster for the /team page.
// One shared face is used for every cassette for now; real faces get swapped
// in later by replacing PLACEHOLDER_FACE / wiring real per-member data.

export const PLACEHOLDER_FACE = "/community/community-peter-robinson.webp";

export const teamYears = [2026, 2025, 2024, 2023] as const;

export interface TeamDivisionDef {
  key: string;
  label: string;
  accent: string;
}

// The board sits above the division teams in each year.
export const boardDivision: TeamDivisionDef = {
  key: "board",
  label: "Board",
  accent: "#F95F4A",
};

// Accents mirror the domain colours used across the site.
export const teamDivisions: TeamDivisionDef[] = [
  { key: "developers", label: "Developers Team", accent: "#9B51E0" },
  { key: "designers", label: "Designers Team", accent: "#FF0054" },
  { key: "management", label: "Management Team", accent: "#008080" },
  { key: "research", label: "Research Team", accent: "#135DE2" },
  { key: "cc", label: "Competitive Coding Team", accent: "#42CD9D" },
];

export interface TeamMember {
  title: string;
  fullName: string;
  position: string;
  imageUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
  googleScholarUrl?: string;
  isW?: boolean;
}

// Generate `count` placeholder members for a division. Swap the body of this
// function for real data lookups once member info is available.
export function getDivisionMembers(
  year: number,
  division: TeamDivisionDef,
  count = 10,
): TeamMember[] {
  const role = division.label.replace(/\s*Team$/i, "");
  return Array.from({ length: count }, (_, i) => ({
    title: "",
    fullName: `Member ${String(i + 1).padStart(2, "0")}`,
    position: role,
    imageUrl: PLACEHOLDER_FACE,
  }));
}
