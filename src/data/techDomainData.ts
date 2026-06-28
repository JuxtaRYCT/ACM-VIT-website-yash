export const TECH_THEME_COLOR = "#9B51E0";

export interface TechTool {
  name: string;
  slug: string;
  svgFile: string;
  colorHex: string;
  isDark?: boolean;
  monochrome?: boolean;
}

export interface TechProject {
  title: string;
  desc: string;
  cassette?: string;
  href?: string;
}

export interface TechEvent {
  title: string;
  desc: string;
  cassette: string;
  slug?: string;
  external?: boolean;
  href?: string;
}

export interface TechAOI {
  key: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  cassetteSrc: string;
  tools: string[];
  projects?: TechProject[];
  events?: TechEvent[];
}

const t = (name: string, slug: string, colorHex: string, opts: { isDark?: boolean; monochrome?: boolean } = {}): TechTool => ({
  name,
  slug,
  svgFile: `/domains/tech/tools/${slug}.svg`,
  colorHex,
  isDark: opts.isDark,
  monochrome: opts.monochrome,
});

export const techTools: TechTool[] = [
  // Web
  t("Next.js", "nextjs", "#000000", { monochrome: true }),
  t("React", "react", "#61DAFB"),
  t("Node.js", "nodejs", "#5FA04E"),
  t("Go", "go", "#00ADD8"),
  t("TypeScript", "typescript", "#3178C6"),
  t("JavaScript", "javascript", "#F7DF1E"),
  t("Tailwind CSS", "tailwindcss", "#06B6D4"),
  t("shadcn/ui", "shadcn", "#FFFDD0", { monochrome: true }),
  t("Prisma", "prisma", "#2D3748", { monochrome: true }),
  t("tRPC", "trpc", "#2596BE"),
  t("GraphQL", "graphql", "#E10098"),
  t("Apollo GraphQL", "apollographql", "#311C87", { monochrome: true }),
  t("Express.js", "express", "#000000", { monochrome: true }),
  t("Fastify", "fastify", "#000000", { monochrome: true }),
  t("NestJS", "nestjs", "#E0234E"),
  t("Hono", "hono", "#E36002", { monochrome: true }),
  t("PostgreSQL", "postgresql", "#4169E1"),
  t("MySQL", "mysql", "#4479A1"),
  t("MongoDB", "mongodb", "#47A248"),
  t("Redis", "redis", "#FF4438"),
  t("CockroachDB", "cockroachdb", "#6933FF", { monochrome: true }),
  t("Supabase", "supabase", "#3FCF8E"),
  t("Firebase", "firebase", "#DD2C00"),
  t("Docker", "docker", "#2496ED"),
  t("Kubernetes", "kubernetes", "#326CE5"),
  t("NGINX", "nginx", "#009639"),
  t("Vercel", "vercel", "#FFFDD0", { monochrome: true }),
  t("Cloudflare", "cloudflare", "#F38020"),
  t("Git", "git", "#F05032"),
  t("GitHub", "github", "#181717", { monochrome: true }),
  t("Postman", "postman", "#FF6C37"),
  // App
  t("Flutter", "flutter", "#02569B"),
  t("React Native", "react-native", "#61DAFB"),
  t("Expo", "expo", "#000020", { monochrome: true }),
  t("Swift", "swift", "#F05138"),
  t("SwiftUI", "swiftui", "#F05138"),
  t("Kotlin", "kotlin", "#7F52FF"),
  t("Jetpack Compose", "jetpack-compose", "#4285F4"),
  t("Android Studio", "android-studio", "#3DDC84"),
  t("Xcode", "xcode", "#147EFB"),
  t("Realm", "realm", "#39477F", { monochrome: true }),
  t("SQLite", "sqlite", "#003B57"),
  t("Appwrite", "appwrite", "#FD366E"),
  t("Fastlane", "fastlane", "#00F200", { monochrome: true }),
  // DevOps
  t("Terraform", "terraform", "#844FBA"),
  t("Ansible", "ansible", "#EE0000"),
  t("Helm", "helm", "#0F1689", { monochrome: true }),
  t("Jenkins", "jenkins", "#D24939"),
  t("GitHub Actions", "github-actions", "#2088FF", { monochrome: true }),
  t("GitLab CI", "gitlab-ci", "#FC6D26"),
  t("CircleCI", "circleci", "#343434"),
  t("Argo CD", "argo-cd", "#EF7B4D", { monochrome: true }),
  t("Prometheus", "prometheus", "#E6522C"),
  t("Grafana", "grafana", "#F46800"),
  t("Traefik", "traefik", "#24A1C1"),
  t("AWS", "aws", "#FF9900", { monochrome: true }),
  t("Azure", "azure", "#0078D4"),
  t("Google Cloud", "gcp", "#4285F4"),
  t("OpenTelemetry", "opentelemetry", "#FF9E2C", { monochrome: true }),
  t("Vault", "vault", "#FFEC6E"),
  t("Consul", "consul", "#CA2171"),
  t("Linux", "linux", "#FCC624"),
  // FOSS
  t("GitLab", "gitlab", "#FC6D26"),
  t("Ubuntu", "ubuntu", "#E95420"),
  t("Arch Linux", "arch-linux", "#1793D1", { monochrome: true }),
  t("Debian", "debian", "#A81D33"),
  t("Fedora", "fedora", "#51A2DA"),
  t("GNU", "gnu", "#A42E2B", { monochrome: true }),
  t("GCC", "gcc", "#A42E2B", { monochrome: true }),
  t("CMake", "cmake", "#064F8C"),
  t("Bazel", "bazel", "#43A047"),
  t("Meson", "meson", "#3F75B5", { isDark: false }),
  t("Nix", "nix", "#5277C3", { monochrome: true }),
  t("Homebrew", "homebrew", "#FBB040", { monochrome: true }),
  t("Podman", "podman", "#892CA0"),
  t("OpenAPI", "openapi", "#6BA539", { monochrome: true }),
  t("Apache", "apache", "#D22128"),
  t("Neovim", "neovim", "#57A143"),
  t("Vim", "vim", "#019733"),
  t("Blender", "blender", "#E87D0D"),
  t("Krita", "krita", "#3BABFF", { monochrome: true }),
  t("GIMP", "gimp", "#5C5543"),
  t("LibreOffice", "libreoffice", "#18A303", { monochrome: true }),
  // Game
  t("Unity", "unity", "#000000"),
  t("Unreal Engine", "unreal-engine", "#0E1128", { monochrome: true }),
  t("Godot", "godot", "#478CBF"),
  t("Houdini", "houdini", "#FF4713", { monochrome: true }),
  t("Aseprite", "aseprite", "#7D929E", { monochrome: true }),
  t("Spine", "spine", "#F47B30", { isDark: false }),
  t("Rive", "rive", "#1D1D1D", { monochrome: true }),
  t("C#", "csharp", "#239120"),
  t("C++", "cplusplus", "#00599C"),
  t("OpenGL", "opengl", "#5586A4"),
  t("Vulkan", "vulkan", "#AC162C"),
  t("SDL", "sdl", "#1A1A1A", { isDark: false }),
];

export const techAOIs: TechAOI[] = [
  {
    key: "appdev",
    title: "App Development",
    shortDescription: "Native and cross-platform apps shipped to real users on the Play Store and App Store, built across React Native, Flutter, Kotlin and Swift.",
    longDescription: [
      "App Development is one of the oldest and strongest teams at VIT. We build apps both for ACM events and during our project cycles, then push them live so people actually use them.",
      "We work across the entire mobile stack, React Native, Flutter, Kotlin, SwiftUI, picking whichever fits the project. Members rotate through every layer so the team grows engineers, not framework specialists.",
    ],
    cassetteSrc: "/aois/tech/cassettes/appdev.png",
    tools: ["flutter", "react-native", "expo", "swift", "swiftui", "kotlin", "jetpack-compose", "android-studio", "xcode", "realm", "sqlite", "appwrite", "fastlane", "typescript", "git"],
    projects: [
      { title: "UniPool", desc: "Carpooling app for university students, matching riders and drivers across campus routes." },
      { title: "ExamCooker", desc: "Past papers, notes and syllabi for VIT students in a single place." },
      { title: "Cryptic Hunt", desc: "Flagship app for ACM-VIT's signature scavenger hunt, with live puzzles, map navigation and team play." },
      { title: "Conclave", desc: "Powerful meeting app built for organised, low-friction discussions." },
      { title: "ACMOne", desc: "ACM's internal management tool, work, meetings, events, attendance and messaging in one app." },
      { title: "Code2Create", desc: "Companion app for ACM-VIT's flagship hackathon Code2Create." },
    ],
    events: [
      { title: "Code2Create", cassette: "/events/c2c-cassette.webp", desc: "Companion app for ACM-VIT's hackathon, shipped each edition.", slug: "code2create" },
      { title: "Cryptic Hunt", cassette: "/events/cryptic-hunt-cassette.svg", desc: "Mobile app powering one of India's largest scavenger hunts.", slug: "cryptic-hunt" },
    ],
  },
  {
    key: "webdev",
    title: "Web Development",
    shortDescription: "Websites, dashboards and backends for every ACM event and project, plus the enrollments portal that gets a fresh theme every year.",
    longDescription: [
      "Web Development covers everything from event websites and project frontends to the backends powering apps and portals. We also build the enrollments website every year, each edition gets a brand new theme, fresh features and a few hidden easter eggs.",
      "We write the backends for Cryptic Hunt, Code2Create and Reverse Coding among others. Several events draw huge participation, so keeping these systems fast and resilient under load is part of the job.",
    ],
    cassetteSrc: "/aois/tech/cassettes/webdev.png",
    tools: ["nextjs", "react", "nodejs", "go", "typescript", "javascript", "tailwindcss", "shadcn", "prisma", "trpc", "graphql", "apollographql", "express", "fastify", "nestjs", "hono", "postgresql", "mysql", "mongodb", "redis", "cockroachdb", "supabase", "firebase", "docker", "kubernetes", "nginx", "vercel", "cloudflare", "git", "github", "postman"],
    projects: [
      { title: "ExamCooker", desc: "Web counterpart to the ExamCooker app, indexed and searchable VIT academic resources." },
      { title: "Localhost", desc: "ACM-VIT's hub for student-built tools and internal services." },
      { title: "OCS", desc: "On-Campus Services platform connecting students with campus utilities." },
      { title: "UniPool", desc: "Web companion for the UniPool carpooling app." },
      { title: "CLI-RPG", desc: "Web frontends and infra around the CLI-RPG game project." },
      { title: "ACMOne", desc: "Web dashboard for ACM's internal management tool." },
    ],
    events: [
      { title: "Code2Create", cassette: "/events/c2c-cassette.webp", desc: "Event website + backend for ACM-VIT's flagship hackathon.", slug: "code2create" },
      { title: "Cryptic Hunt", cassette: "/events/cryptic-hunt-cassette.svg", desc: "Backend systems powering the Cryptic Hunt app and live event.", slug: "cryptic-hunt" },
      { title: "Neural Hack Portal", cassette: "/events/neural-hack-cassette.svg", desc: "Submission and judging portal for Neural Hack.", external: true, href: "https://nh.acmvit.in/" },
      { title: "Reverse Coding", cassette: "/events/reverse-coding-cassette.svg", desc: "Contest portal and backend infra for Reverse Coding.", slug: "reverse-coding" },
    ],
  },
  {
    key: "foss",
    title: "FOSS",
    shortDescription: "Pushing the chapter to adopt, contribute to and maintain free and open source software, with members landing GSoC, GSoD and MLH fellowships.",
    longDescription: [
      "The FOSS AOI promotes adoption, usage and maintenance of free and open source software across the whole chapter, not just our own members. Over the years, several members have landed GSoC, GSoD and MLH Fellowships off contributions made here.",
      "Recently, ACM-VIT members have contributed to the sglang repository, with others making meaningful contributions to repos from LLVM, OpenAI and more.",
      "Every Hacktoberfest, FOSS runs Forktober, our open source festival, packed with curated repositories, sessions and workshops to help students land their first open source contribution.",
    ],
    cassetteSrc: "/aois/tech/cassettes/foss.png",
    tools: ["gitlab", "github", "git", "ubuntu", "arch-linux", "debian", "fedora", "gnu", "gcc", "cmake", "bazel", "meson", "nix", "homebrew", "podman", "openapi", "apache", "neovim", "vim", "blender", "krita", "gimp", "libreoffice", "linux"],
    events: [
      { title: "Forktober", cassette: "/cassettes/forktober-cassette.svg", desc: "ACM-VIT's open source festival run every Hacktoberfest. Curated repositories, sessions and workshops to land first contributions.", slug: "forktober" },
    ],
  },
  {
    key: "gamestudios",
    title: "Game Studios",
    shortDescription: "Building games for ACM's events and original titles, from CLI RPGs in Rust to map-based games set in VIT.",
    longDescription: [
      "Game Studios is the newest AOI but has already shipped a few titles. CLI-RPG is a command-line role playing game written in Rust. Tagred is set in VIT itself, using the campus map as its world with original characters and storylines.",
      "The Cryptic Hunt game uses the VIT map to deliver puzzle questions during the event's night leg, guiding participants as they navigate the campus. The team also builds game elements for hackathon and coding portals across ACM's other events.",
    ],
    cassetteSrc: "/aois/tech/cassettes/gamestudios.png",
    tools: ["unity", "unreal-engine", "godot", "houdini", "aseprite", "spine", "rive", "csharp", "cplusplus", "opengl", "vulkan", "sdl", "git"],
    projects: [
      { title: "CLI-RPG", desc: "Command-line role playing game written in Rust." },
      { title: "Tagred", desc: "Game set in VIT using the campus map as its world, with original characters and story." },
      { title: "Cryptic Hunt Game", desc: "Map-based puzzle game guiding Cryptic Hunt participants through campus at night." },
    ],
    events: [
      { title: "Cryptic Hunt", cassette: "/events/cryptic-hunt-cassette.svg", desc: "Game systems and map-based puzzles powering Cryptic Hunt nights.", slug: "cryptic-hunt" },
    ],
  },
  {
    key: "devops",
    title: "DevOps",
    shortDescription: "Provisioning, key management, deployment and the load-handling that keeps every ACM project standing under traffic.",
    longDescription: [
      "DevOps provisions resources for every project, manages and rotates keys, handles deployment pipelines, and keeps servers standing when traffic spikes during event windows.",
      "When Cryptic Hunt opens or a hackathon portal goes live, DevOps is the team watching the dashboards, scaling capacity, debugging incidents and making sure none of the work the rest of the chapter shipped goes dark.",
      "Beyond reactive ops, DevOps owns the long game, monitoring, observability, secrets handling, infrastructure-as-code and the boring discipline that makes the exciting parts of every other AOI possible.",
    ],
    cassetteSrc: "/aois/tech/cassettes/devops.png",
    tools: ["terraform", "ansible", "helm", "jenkins", "github-actions", "gitlab-ci", "circleci", "argo-cd", "prometheus", "grafana", "traefik", "aws", "azure", "gcp", "opentelemetry", "vault", "consul", "docker", "kubernetes", "nginx", "linux"],
    projects: [
      { title: "All ACM-VIT Infra", cassette: "/cassettes/Cassette_Tech.svg", desc: "DevOps quietly runs every deployed ACM-VIT project, from the websites and apps you see to the keys, queues and dashboards you do not." },
    ],
  },
];

export const techDescription = [
  "Tech is the engine room of ACM-VIT. We build every app, website, portal, backend and game that powers our projects and events, from flagship hackathons to internal tools nobody outside the chapter ever sees.",
  "Students here work across app development, web development, FOSS, game studios and DevOps. Pick any ACM-VIT event you have heard of, the portal, the contest backend, the live app, the dashboards holding it all together, and somebody in this domain wrote it.",
];

export const techStats = [
  { value: "5", label: "AOIs" },
];

export const techFooterMessage = "Ship the thing. Then ship the thing that ships the thing.";
