export const CC_THEME_COLOR = "#B4E35B";

export interface CcTool {
  name: string;
  slug: string;
  svgFile: string;
  colorHex: string;
  isDark?: boolean;
  monochrome?: boolean;
}

export interface CcEvent {
  title: string;
  desc: string;
  cassette: string;
  slug?: string;
  external?: boolean;
  href?: string;
}

const t = (name: string, slug: string, colorHex: string, opts: { isDark?: boolean; monochrome?: boolean } = {}): CcTool => ({
  name,
  slug,
  svgFile: `/domains/cc/tools/${slug}.svg`,
  colorHex,
  isDark: opts.isDark,
  monochrome: opts.monochrome,
});

export const ccTools: CcTool[] = [
  t("LeetCode", "leetcode", "#FFA116", { monochrome: true }),
  t("Codeforces", "codeforces", "#1F8ACB", { monochrome: true }),
  t("HackerRank", "hackerrank", "#00EA64", { monochrome: true }),
  t("CodeChef", "codechef", "#5B4638", { monochrome: true }),
  t("AtCoder", "atcoder", "#222222", { isDark: false }),
  t("HackerEarth", "hackerearth", "#2C3454", { monochrome: true }),
  t("GeeksforGeeks", "geeksforgeeks", "#2F8D46", { monochrome: true }),
  t("TopCoder", "topcoder", "#F69322", { monochrome: true }),
  t("C++", "cplusplus", "#00599C"),
  t("Python", "python", "#3776AB"),
  t("Java", "java", "#ED8B00"),
  t("GCC", "gcc", "#A42E2B", { monochrome: true }),
  t("VS Code", "vscode", "#007ACC"),
  t("Vim", "vim", "#019733"),
  t("GitHub", "github", "#FFFDD0", { monochrome: true }),
  t("Git", "git", "#F05032"),
  t("Linux", "linux", "#FCC624"),
];

export const ccDescription = [
  "Competitive Coding is where ACM-VIT members sharpen their algorithms muscle the hard way, by showing up to contests on a regular basis across LeetCode, Codeforces, CodeChef, AtCoder and more.",
  "Beyond personal practice, the domain owns ACM-VIT's flagship competitive programming events. Reverse Coding is VIT's largest CP event, and Code++ is a focused four-hour sprint that pushes participants to ship clean code under the clock.",
  "Members train together, share editorials, run mock contests and mentor newer participants through the ladder, all the way from beginner sets to ICPC-style problem solving.",
];

export const ccStats: { value: string; label: string }[] = [];

export const ccEvents: CcEvent[] = [
  {
    title: "Reverse Coding",
    cassette: "/events/reverse-coding-cassette.svg",
    desc: "VIT's largest competitive coding event. Months of preparation, multi-round contest format, and questions that push every skill bracket from beginner to expert.",
    slug: "reverse-coding",
  },
  {
    title: "Code++",
    cassette: "/cassettes/code-plusplus-cassette.svg",
    desc: "A focused four-hour competitive coding sprint, curated problem set and live leaderboard, run by the Competitive Coding domain.",
    slug: "code-plusplus",
  },
];

export const ccFooterMessage = "Show up. Solve. Ship. Then do it again next weekend.";
