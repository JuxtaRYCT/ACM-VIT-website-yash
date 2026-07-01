export const MANAGEMENT_THEME_COLOR = "#008080";

export interface MgmtTool {
  name: string;
  slug: string;
  svgFile: string;
  colorHex: string;
  isDark?: boolean;
  monochrome?: boolean;
}

export interface MgmtEvent {
  title: string;
  desc: string;
  cassette: string;
  slug?: string;
  external?: boolean;
  href?: string;
}

const t = (name: string, slug: string, colorHex: string, opts: { isDark?: boolean; monochrome?: boolean } = {}): MgmtTool => ({
  name,
  slug,
  svgFile: `/domains/management/tools/management-tool-${slug}.svg`,
  colorHex,
  isDark: opts.isDark,
  monochrome: opts.monochrome,
});

export const mgmtTools: MgmtTool[] = [
  t("Notion", "notion", "#FFFDD0", { monochrome: true }),
  t("Slack", "slack", "#4A154B"),
  t("Discord", "discord", "#5865F2", { monochrome: true }),
  t("Gmail", "gmail", "#EA4335", { monochrome: true }),
  t("Google Workspace", "googleworkspace", "#4285F4", { monochrome: true }),
  t("Google Sheets", "googlesheets", "#34A853", { monochrome: true }),
  t("Google Drive", "googledrive", "#1FA463", { monochrome: true }),
  t("Google Meet", "googlemeet", "#00897B", { monochrome: true }),
  t("Microsoft Word", "microsoftword", "#2B579A", { monochrome: true }),
  t("Microsoft Excel", "microsoftexcel", "#217346", { monochrome: true }),
  t("Microsoft PowerPoint", "microsoftpowerpoint", "#B7472A", { monochrome: true }),
  t("Microsoft Teams", "microsoftteams", "#6264A7", { monochrome: true }),
  t("Trello", "trello", "#0079BF"),
  t("Asana", "asana", "#F06A6A", { monochrome: true }),
  t("Linear", "linear", "#5E6AD2", { monochrome: true }),
  t("Canva", "canva", "#00C4CC"),
  t("Figma", "figma", "#F24E1E"),
  t("LinkedIn", "linkedin", "#0A66C2"),
  t("Instagram", "instagram", "#E4405F", { monochrome: true }),
  t("X / Twitter", "twitter", "#FFFDD0", { monochrome: true }),
  t("Mailchimp", "mailchimp", "#FFE01B", { monochrome: true }),
  t("HubSpot", "hubspot", "#FF7A59", { monochrome: true }),
  t("Calendly", "calendly", "#006BFF", { monochrome: true }),
  t("Zoom", "zoom", "#0B5CFF", { monochrome: true }),
];

export const mgmtDescription = [
  "Nothing comes together on its own, and we are the ones making sure every part is in place. Management handles sponsorships, logistics, outreach and content with precision and intent.",
  "Some days it is drafting timelines and emails, other days it is finding the perfect hook for a campaign or navigating a last-minute surprise on event day. We work across teams, juggle priorities, and keep the chaos in check so every event runs smoothly from start to finish.",
  "Beyond the operational backbone, this is the team that writes the copy on websites and social posts, plans the chapter's social media cycle, produces LifeAtACM content, and goes out and lands the sponsors that make our flagship events possible.",
];

export const mgmtStats: { value: string; label: string }[] = [];

export const mgmtEvents: MgmtEvent[] = [
  {
    title: "Every ACM-VIT Event",
    cassette: "/cassettes/cassettes-cassette-management.svg",
    desc: "From Code2Create and Cryptic Hunt to InspiHer and Reverse Coding, Management runs marketing, sponsorship outreach, content and on-ground coordination for every flagship the chapter ships.",
  },
  {
    title: "Code2Create",
    cassette: "/events/events-c2c-cassette.webp",
    desc: "Sponsorships, brand partnerships, social media campaigns and on-site coordination for ACM-VIT's flagship hackathon.",
    slug: "code2create",
  },
  {
    title: "Cryptic Hunt",
    cassette: "/events/events-cryptic-hunt-cassette.svg",
    desc: "Marketing campaigns and sponsor onboarding for one of India's largest scavenger hunts.",
    slug: "cryptic-hunt",
  },
  {
    title: "Reverse Coding",
    cassette: "/events/events-reverse-coding-cassette.svg",
    desc: "Outreach, partner deals and social rollout for ACM-VIT's signature competitive programming event.",
    slug: "reverse-coding",
  },
];

export const mgmtFooterMessage = "Behind every shipped event, a quiet army that made it possible.";
