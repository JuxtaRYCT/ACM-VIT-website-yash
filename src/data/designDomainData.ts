export const DESIGN_THEME_COLOR = "#FF0054";

export interface DesignTool {
  name: string;
  slug: string;
  svgFile: string;
  colorHex: string;
  isDark?: boolean;
}

export interface DesignWork {
  title?: string;
  href: string;
  platform: "youtube" | "instagram";
  thumb: string;
}

export interface DesignAOI {
  key: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  cassetteSrc: string;
  tools: string[];
  works?: DesignWork[];
}

export const designTools: DesignTool[] = [
  { name: "Figma", slug: "figma", svgFile: "/domains/design/tools/design-tool-figma.svg", colorHex: "#F24E1E" },
  { name: "Photoshop", slug: "photoshop", svgFile: "/domains/design/tools/design-tool-photoshop.svg", colorHex: "#31A8FF" },
  { name: "Illustrator", slug: "illustrator", svgFile: "/domains/design/tools/design-tool-illustrator.svg", colorHex: "#FF9A00" },
  { name: "After Effects", slug: "after-effects", svgFile: "/domains/design/tools/design-tool-after-effects.svg", colorHex: "#9999FF" },
  { name: "Premiere Pro", slug: "premiere-pro", svgFile: "/domains/design/tools/design-tool-premiere-pro.svg", colorHex: "#9999FF" },
  { name: "Blender", slug: "blender", svgFile: "/domains/design/tools/design-tool-blender.svg", colorHex: "#E87D0D" },
  { name: "Unity", slug: "unity", svgFile: "/domains/design/tools/design-tool-unity.svg", colorHex: "#FFFFFF", isDark: true },
  { name: "Unreal Engine", slug: "unreal-engine", svgFile: "/domains/design/tools/design-tool-unreal-engine.svg", colorHex: "#0E1128", isDark: true },
  { name: "Framer", slug: "framer", svgFile: "/domains/design/tools/design-tool-framer.svg", colorHex: "#0055FF", isDark: true },
  { name: "Sketch", slug: "sketch", svgFile: "/domains/design/tools/design-tool-sketch.svg", colorHex: "#F7B500" },
  { name: "Canva", slug: "canva", svgFile: "/domains/design/tools/design-tool-canva.svg", colorHex: "#00C4CC" },
  { name: "DaVinci Resolve", slug: "davinci-resolve", svgFile: "/domains/design/tools/design-tool-davinci-resolve.svg", colorHex: "#E12D39" },
  { name: "Krita", slug: "krita", svgFile: "/domains/design/tools/design-tool-krita.svg", colorHex: "#3BABFF" },
  { name: "CorelDRAW", slug: "coreldraw", svgFile: "/domains/design/tools/design-tool-coreldraw.svg", colorHex: "#6DB33F" },
  { name: "Lightroom", slug: "lightroom", svgFile: "/domains/design/tools/design-tool-lightroom.svg", colorHex: "#31A8FF" },
  { name: "InDesign", slug: "indesign", svgFile: "/domains/design/tools/design-tool-indesign.svg", colorHex: "#FF3366" },
  { name: "Affinity Designer", slug: "affinity-designer", svgFile: "/domains/design/tools/design-tool-affinity-designer.svg", colorHex: "#1B72BE" },
  { name: "Affinity Photo", slug: "affinity-photo", svgFile: "/domains/design/tools/design-tool-affinity-photo.svg", colorHex: "#7E4DD2" },
  { name: "Affinity Publisher", slug: "affinity-publisher", svgFile: "/domains/design/tools/design-tool-affinity-publisher.svg", colorHex: "#C9514D" },
  { name: "Houdini", slug: "houdini", svgFile: "/domains/design/tools/design-tool-houdini.svg", colorHex: "#FF4713" },
  { name: "Rive", slug: "rive", svgFile: "/domains/design/tools/design-tool-rive.svg", colorHex: "#1D1D1D", isDark: true },
  { name: "Spline", slug: "spline", svgFile: "/domains/design/tools/design-tool-spline.svg", colorHex: "#7B61FF" },
  { name: "GSAP", slug: "gsap", svgFile: "/domains/design/tools/design-tool-gsap.svg", colorHex: "#88CE02" },
  { name: "Final Cut Pro", slug: "final-cut-pro", svgFile: "/domains/design/tools/design-tool-final-cut-pro.svg", colorHex: "#9B8CFF" },
  { name: "GIMP", slug: "gimp", svgFile: "/domains/design/tools/design-tool-gimp.svg", colorHex: "#5C5543" },
  { name: "shadcn/ui", slug: "shadcn", svgFile: "/domains/design/tools/design-tool-shadcn.svg", colorHex: "#FFFFFF", isDark: true },
  { name: "Higgsfield", slug: "higgsfield", svgFile: "/domains/design/tools/design-tool-higgsfield.svg", colorHex: "#E94560" },
];

export const designAOIs: DesignAOI[] = [
  {
    key: "uiux",
    title: "UI/UX Design",
    shortDescription: "Crafting interfaces that balance beauty with usability, turning user research into seamless digital experiences.",
    longDescription: [
      "UI/UX design at ACM-VIT is about building interfaces that feel intuitive from the first tap. We research user behavior, wireframe flows, prototype interactions, and test with real people before a single line of code is written.",
      "From event registration portals to our own website, every surface a user touches is shaped by this AOI. We work closely with the Tech domain to ensure our designs translate faithfully into production.",
    ],
    cassetteSrc: "/aois/design/cassettes/aois-design-cassettes-uiux.webp",
    tools: ["figma", "framer", "sketch", "canva", "shadcn"],
  },
  {
    key: "illustrations",
    title: "Illustrations",
    shortDescription: "Hand-crafted visual storytelling that gives ACM-VIT its distinctive voice across every touchpoint.",
    longDescription: [
      "Illustrations are the signature element of ACM-VIT's visual identity. From social media posts and event posters to merchandise and website assets, our illustrators create original artwork that sets us apart.",
      "We work across digital and traditional media, blending vector art, raster painting, and mixed-media techniques to tell stories that resonate with our audience.",
    ],
    cassetteSrc: "/aois/design/cassettes/aois-design-cassettes-illustrations.webp",
    tools: ["illustrator", "krita", "photoshop", "affinity-designer"],
  },
  {
    key: "motion-graphics",
    title: "Motion Graphics",
    shortDescription: "Bringing static designs to life through animation, making every frame count.",
    longDescription: [
      "Motion graphics bridge the gap between static design and full video production. We create animated logos, event teasers, social media reels, and UI micro-interactions that capture attention and communicate quickly.",
      "Our motion designers work with After Effects, Rive, and GSAP to build everything from short promotional loops to complex interactive animations on the web.",
    ],
    cassetteSrc: "/aois/design/cassettes/aois-design-cassettes-motiongraphics.webp",
    tools: ["after-effects", "rive", "gsap", "premiere-pro"],
    works: [
      { href: "https://www.instagram.com/reel/DFAx7IySwDk/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DFAx7IySwDk.webp" },
      { href: "https://www.instagram.com/reel/DOIsnc3Elfz/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DOIsnc3Elfz.webp" },
      { title: "Opening Ceremony | Cryptic Hunt 4.0 | graVITas 2025", href: "https://www.youtube.com/watch?v=tHOMKNF29u4&t=784s", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-tHOMKNF29u4.webp" },
      { href: "https://www.instagram.com/reel/DZztruly_0a/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DZztruly_0a.webp" },
      { title: "Cryptic Hunt 2024 App Reveal", href: "https://www.youtube.com/watch?v=Rdrg_lSXtgE", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-Rdrg_lSXtgE.webp" },
      { title: "Code2Create Spring 2018 Promo Video", href: "https://www.youtube.com/watch?v=uv73-uuGcsk", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-uv73-uuGcsk.webp" },
      { title: "Core Committee Selections `22 | ACMVIT", href: "https://www.youtube.com/shorts/nRVoQCC4EGA", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-nRVoQCC4EGA.webp" },
      { title: "Core Committee Selections `22 | ACMVIT", href: "https://www.youtube.com/shorts/fZd-Kz_U5MI", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-fZd-Kz_U5MI.webp" },
      { href: "https://www.instagram.com/reel/CjDeKtBA8HM/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-CjDeKtBA8HM.webp" },
      { href: "https://www.instagram.com/reel/CpVZT5ugvDa/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-CpVZT5ugvDa.webp" },
      { href: "https://www.instagram.com/reel/C0HCzlJvmMj/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C0HCzlJvmMj.webp" },
      { href: "https://www.instagram.com/reel/C1Z-v7MPdkN/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C1Z-v7MPdkN.webp" },
      { href: "https://www.instagram.com/reel/C89eXbHvHOC/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C89eXbHvHOC.webp" },
      { href: "https://www.instagram.com/reel/C-P5bWNp-BO/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C-P5bWNp-BO.webp" },
      { href: "https://www.instagram.com/reel/C-fW66VvmO3/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C-fW66VvmO3.webp" },
      { href: "https://www.instagram.com/reel/C_2_GxdPTFH/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C_2_GxdPTFH.webp" },
      { href: "https://www.instagram.com/reel/DAJH_k4vt5u/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DAJH_k4vt5u.webp" },
      { href: "https://www.instagram.com/reel/DB_td3MpjLy/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DB_td3MpjLy.webp" },
      { href: "https://www.instagram.com/reel/DEiI0DnSX4x/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DEiI0DnSX4x.webp" },
      { href: "https://www.instagram.com/reel/DOJu3HzkoWd/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DOJu3HzkoWd.webp" },
      { href: "https://www.instagram.com/reel/DPEFiockvDl/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DPEFiockvDl.webp" },
      { href: "https://www.instagram.com/reel/DUfhCWQEkyX/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DUfhCWQEkyX.webp" },
    ],
  },
  {
    key: "3d",
    title: "3D Design",
    shortDescription: "Sculpting digital worlds and objects that push the boundaries of visual storytelling.",
    longDescription: [
      "3D design at ACM-VIT spans product visualization, environment modeling, and real-time 3D experiences. We use Blender, Spline, and game engines to create assets for events, the website, and experimental projects.",
      "From stylized low-poly scenes to photorealistic renders, 3D work adds a layer of depth and immersion that flat design simply cannot match.",
    ],
    cassetteSrc: "/aois/design/cassettes/aois-design-cassettes-3d.webp",
    tools: ["blender", "spline", "unity", "unreal-engine", "houdini"],
    works: [
      { title: "Cryptic Hunt 2024 App Reveal", href: "https://www.youtube.com/watch?v=Rdrg_lSXtgE", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-Rdrg_lSXtgE.webp" },
      { title: "Cryptic Hunt - The Experience", href: "https://www.youtube.com/watch?v=yROgeFeoOAo", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-yROgeFeoOAo.webp" },
      { href: "https://www.instagram.com/reel/CikTCbdgJVL/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-CikTCbdgJVL.webp" },
      { href: "https://www.instagram.com/reel/DOATYouErEk/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DOATYouErEk.webp" },
      { href: "https://www.instagram.com/reel/DPCbtT1EzaO/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DPCbtT1EzaO.webp" },
      { href: "https://www.instagram.com/reel/DUWDekTkgRE/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DUWDekTkgRE.webp" },
      { href: "https://www.instagram.com/reel/DUZ6CD0Acf3/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DUZ6CD0Acf3.webp" },
    ],
  },
  {
    key: "video-editing",
    title: "Video Editing",
    shortDescription: "Cutting, grading, and shipping videos that document and amplify everything ACM-VIT does.",
    longDescription: [
      "Video editing is the final mile of our visual pipeline. Event recaps, promotional trailers, speaker highlight reels, and documentary-style content all pass through our editors before reaching an audience.",
      "We focus on pacing, color grading, sound design, and platform-specific formatting to ensure every video lands with maximum impact.",
    ],
    cassetteSrc: "/aois/design/cassettes/aois-design-cassettes-video-editing.webp",
    tools: ["premiere-pro", "davinci-resolve", "after-effects", "lightroom"],
    works: [
      { title: "ACM-VIT Rewind 2025", href: "https://www.youtube.com/watch?v=qf84GjdWBSY", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-qf84GjdWBSY.webp" },
      { href: "https://www.instagram.com/reel/DOIsnc3Elfz/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DOIsnc3Elfz.webp" },
      { title: "ACMW-VIT Rewind 2025", href: "https://www.youtube.com/watch?v=Br65LiZmOA4", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-Br65LiZmOA4.webp" },
      { title: "Organising Committee Selections 2025-26 | ACM-VIT", href: "https://www.youtube.com/watch?v=moRwDA0pHSk", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-moRwDA0pHSk.webp" },
      { title: "Reverse Coding 2026 - Aftermovie", href: "https://www.youtube.com/watch?v=aL5iNSCdJlQ", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-aL5iNSCdJlQ.webp" },
      { title: "Code2Create 6.0 | Official Aftermovie | ACM-VIT", href: "https://www.youtube.com/watch?v=1evjuued5Ao", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-1evjuued5Ao.webp" },
      { title: "Opening Ceremony | Cryptic Hunt 4.0 | graVITas 2025", href: "https://www.youtube.com/watch?v=tHOMKNF29u4&t=784s", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-tHOMKNF29u4.webp" },
      { title: "Cryptic Hunt 2024 - The Aftermovie", href: "https://www.youtube.com/watch?v=FF5XqPccatk", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-FF5XqPccatk.webp" },
      { title: "Cryptic Hunt - The Experience", href: "https://www.youtube.com/watch?v=yROgeFeoOAo", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-yROgeFeoOAo.webp" },
      { title: "Somethings can't be reversed", href: "https://www.youtube.com/shorts/9YyPB4jK1lQ", platform: "youtube", thumb: "/aois/design/works/aois-design-works-yt-9YyPB4jK1lQ.webp" },
      { href: "https://www.instagram.com/reel/CyDjOzsJWgu/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-CyDjOzsJWgu.webp" },
      { href: "https://www.instagram.com/reel/C1Z-v7MPdkN/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C1Z-v7MPdkN.webp" },
      { href: "https://www.instagram.com/reel/C4YPlHhvnGC/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C4YPlHhvnGC.webp" },
      { href: "https://www.instagram.com/reel/C6ioT8EvPK1/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C6ioT8EvPK1.webp" },
      { href: "https://www.instagram.com/reel/C9FT3tuPZEh/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C9FT3tuPZEh.webp" },
      { href: "https://www.instagram.com/reel/C92L7EOJBxX/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C92L7EOJBxX.webp" },
      { href: "https://www.instagram.com/reel/C_kIncKPwP9/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-C_kIncKPwP9.webp" },
      { href: "https://www.instagram.com/reel/DEP_b1-yaco/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DEP_b1-yaco.webp" },
      { href: "https://www.instagram.com/reel/DEiI0DnSX4x/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DEiI0DnSX4x.webp" },
      { href: "https://www.instagram.com/reel/DFP_GoRpv3W/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DFP_GoRpv3W.webp" },
      { href: "https://www.instagram.com/reel/DG0dCpiSk58/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DG0dCpiSk58.webp" },
      { href: "https://www.instagram.com/reel/DOJu3HzkoWd/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DOJu3HzkoWd.webp" },
      { href: "https://www.instagram.com/reel/DOO4J2njBuP/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DOO4J2njBuP.webp" },
      { href: "https://www.instagram.com/reel/DP5dgCvkrWo/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DP5dgCvkrWo.webp" },
      { href: "https://www.instagram.com/reel/DQoOvq5EmWJ/", platform: "instagram", thumb: "/aois/design/works/aois-design-works-ig-DQoOvq5EmWJ.webp" },
    ],
  },
];

export const designHero = "The visual voice of ACM-VIT, shaping how the chapter looks, moves and communicates across every surface.";

export const designDescription = [
  "We craft visual experiences that bring our ideas and events to life, from UI/UX design and motion graphics to social media posts and video edits. With a focus on aesthetics, usability, and storytelling, we shape how the world sees ACM-VIT.",
  "Led by the Design Lead, with the Creative Lead and ACM-W Design Lead working alongside, our team blends art with purpose to create meaningful designs. Whether it is building brand identity or designing user-first interfaces, every pixel, frame, and layout is intentional. Great design is not just seen, it is felt.",
];

export const designStats = [
  { value: "5", label: "AOIs" },
];

export const designFooterMessage = "Every pixel placed with purpose. Now go make something beautiful.";
