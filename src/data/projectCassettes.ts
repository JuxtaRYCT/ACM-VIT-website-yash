// Single source of truth for project cassettes shown on the /projects page
// (and reused elsewhere, e.g. AOI pages) so the exact same cassette art is
// used everywhere instead of reconstructing one per surface.

export type GridProject =
  | {
      kind: "overlay";
      name: string;
      color: string;
      image: string;
      alt: string;
      url: string;
      sizePercent: number;
      sizeAxis: "width" | "height";
      offsetY: number;
    }
  | {
      kind: "svg";
      name: string;
      color: string;
      cassetteSvg: string;
      alt: string;
      url: string;
      comingSoon?: boolean;
    };

export const projectCassettes: GridProject[] = [
  {
    kind: "overlay",
    name: "ACMOne",
    color: "#F95F4A",
    image: "/projects/items/0/cassetteSrc.webp",
    alt: "ACMOne",
    url: "/projects/acmone",
    sizePercent: 85,
    sizeAxis: "width",
    offsetY: -5,
  },
  {
    kind: "overlay",
    name: "ExamCooker",
    color: "#2664e4",
    image: "/projects/items/1/cassetteSrc.webp",
    alt: "ExamCooker",
    url: "/projects/examcooker",
    sizePercent: 80,
    sizeAxis: "width",
    offsetY: -3,
  },
  {
    kind: "overlay",
    name: "CLI-RPG",
    color: "#16A34A",
    image: "/projects/items/2/cassetteSrc.webp",
    alt: "CLI RPG",
    url: "/projects/cli-rpg",
    sizePercent: 75,
    sizeAxis: "width",
    offsetY: -5,
  },
  {
    kind: "overlay",
    name: "UniPool",
    color: "#7100FF",
    image: "/projects/items/3/cassetteSrc.webp",
    alt: "UniPool",
    url: "/projects/unipool",
    sizePercent: 80,
    sizeAxis: "width",
    offsetY: -3,
  },
  { kind: "svg", name: "OCS 2022", color: "#8710DB", cassetteSvg: "/projects/cassettes/projects-cassettes-ocs-22.svg", alt: "OCS '22", url: "/projects/ocs-22" },
  { kind: "svg", name: "OCS 2023", color: "#9F40DB", cassetteSvg: "/projects/cassettes/projects-cassettes-ocs-23.svg", alt: "OCS '23", url: "/projects/ocs-23" },
  {
    kind: "overlay",
    name: "Localhost",
    color: "#eb5757",
    image: "/projects/items/4/cassetteSrc.webp",
    alt: "Localhost",
    url: "/projects/localhost",
    sizePercent: 85,
    sizeAxis: "width",
    offsetY: -5,
  },
  {
    kind: "overlay",
    name: "OCS",
    color: "#8710DB",
    image: "/projects/items/5/cassetteSrc.webp",
    alt: "OCS Website",
    url: "/projects/ocs-25",
    sizePercent: 100,
    sizeAxis: "width",
    offsetY: 0,
  },
  { kind: "svg", name: "OCS 2026", color: "#EFE28B", cassetteSvg: "/projects/cassettes/projects-cassettes-ocs-26.webp", alt: "OCS '26", url: "/projects/ocs-26" },
  { kind: "svg", name: "Conclave", color: "#FF6B35", cassetteSvg: "/projects/cassettes/projects-cassettes-conclave.svg", alt: "Conclave", url: "/projects/conclave" },
  { kind: "svg", name: "WENVY", color: "#F03104", cassetteSvg: "/projects/cassettes/projects-cassettes-wenvy.svg", alt: "WENVY", url: "/projects/wenvy" },
  { kind: "svg", name: "CLI-TOP", color: "#48BB78", cassetteSvg: "/projects/cassettes/projects-cassettes-cli-top.svg", alt: "CLI-TOP", url: "/projects/cli-top" },
  { kind: "svg", name: "TAGRED", color: "#E53E3E", cassetteSvg: "/projects/cassettes/projects-cassettes-tagred.svg", alt: "TAGRED", url: "#", comingSoon: true },
  { kind: "svg", name: "FORM", color: "#805AD5", cassetteSvg: "/projects/cassettes/projects-cassettes-form.svg", alt: "FORM", url: "#", comingSoon: true },
  { kind: "svg", name: "CODIGO", color: "#DD6B20", cassetteSvg: "/projects/cassettes/projects-cassettes-codigo.svg", alt: "CODIGO", url: "#", comingSoon: true },
];

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

const byName: Record<string, GridProject> = {};
for (const p of projectCassettes) {
  byName[normalize(p.name)] = p;
  byName[normalize(p.alt)] = p;
}

/** Find a project's cassette by display title (case/space/dash insensitive). */
export function getProjectCassetteByTitle(title: string): GridProject | null {
  return byName[normalize(title)] ?? null;
}
