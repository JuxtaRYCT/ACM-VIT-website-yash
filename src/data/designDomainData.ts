export const DESIGN_THEME_COLOR = "#FF0054";

export interface DesignTool {
  name: string;
  slug: string;
  svgFile: string;
  colorHex: string;
}

export interface DesignAOI {
  key: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  cassetteSrc: string;
  tools: string[];
}

export const designTools: DesignTool[] = [
  { name: "Figma", slug: "figma", svgFile: "/domains/design/tools/figma.svg", colorHex: "#F24E1E" },
  { name: "Photoshop", slug: "photoshop", svgFile: "/domains/design/tools/photoshop.svg", colorHex: "#31A8FF" },
  { name: "Illustrator", slug: "illustrator", svgFile: "/domains/design/tools/illustrator.svg", colorHex: "#FF9A00" },
  { name: "After Effects", slug: "after-effects", svgFile: "/domains/design/tools/after-effects.svg", colorHex: "#9999FF" },
  { name: "Premiere Pro", slug: "premiere-pro", svgFile: "/domains/design/tools/premiere-pro.svg", colorHex: "#9999FF" },
  { name: "Blender", slug: "blender", svgFile: "/domains/design/tools/blender.svg", colorHex: "#E87D0D" },
  { name: "Unity", slug: "unity", svgFile: "/domains/design/tools/unity.svg", colorHex: "#FFFFFF" },
  { name: "Unreal Engine", slug: "unreal-engine", svgFile: "/domains/design/tools/unreal-engine.svg", colorHex: "#0E1128" },
  { name: "Framer", slug: "framer", svgFile: "/domains/design/tools/framer.svg", colorHex: "#0055FF" },
  { name: "Sketch", slug: "sketch", svgFile: "/domains/design/tools/sketch.svg", colorHex: "#F7B500" },
  { name: "Canva", slug: "canva", svgFile: "/domains/design/tools/canva.svg", colorHex: "#00C4CC" },
  { name: "DaVinci Resolve", slug: "davinci-resolve", svgFile: "/domains/design/tools/davinci-resolve.svg", colorHex: "#E12D39" },
  { name: "Krita", slug: "krita", svgFile: "/domains/design/tools/krita.svg", colorHex: "#3BABFF" },
  { name: "CorelDRAW", slug: "coreldraw", svgFile: "/domains/design/tools/coreldraw.svg", colorHex: "#6DB33F" },
  { name: "Adobe XD", slug: "adobe-xd", svgFile: "/domains/design/tools/adobe-xd.svg", colorHex: "#FF61F6" },
  { name: "Lightroom", slug: "lightroom", svgFile: "/domains/design/tools/lightroom.svg", colorHex: "#31A8FF" },
  { name: "InDesign", slug: "indesign", svgFile: "/domains/design/tools/indesign.svg", colorHex: "#FF3366" },
  { name: "Affinity Designer", slug: "affinity-designer", svgFile: "/domains/design/tools/affinity-designer.svg", colorHex: "#1B72BE" },
  { name: "Affinity Photo", slug: "affinity-photo", svgFile: "/domains/design/tools/affinity-photo.svg", colorHex: "#7E4DD2" },
  { name: "Affinity Publisher", slug: "affinity-publisher", svgFile: "/domains/design/tools/affinity-publisher.svg", colorHex: "#C9514D" },
  { name: "Houdini", slug: "houdini", svgFile: "/domains/design/tools/houdini.svg", colorHex: "#FF4713" },
  { name: "Rive", slug: "rive", svgFile: "/domains/design/tools/rive.svg", colorHex: "#1D1D1D" },
  { name: "Spline", slug: "spline", svgFile: "/domains/design/tools/spline.svg", colorHex: "#7B61FF" },
  { name: "GSAP", slug: "gsap", svgFile: "/domains/design/tools/gsap.svg", colorHex: "#88CE02" },
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
    cassetteSrc: "/aois/design/cassettes/uiux.png",
    tools: ["figma", "adobe-xd", "framer", "sketch", "canva"],
  },
  {
    key: "illustrations",
    title: "Illustrations",
    shortDescription: "Hand-crafted visual storytelling that gives ACM-VIT its distinctive voice across every touchpoint.",
    longDescription: [
      "Illustrations are the signature element of ACM-VIT's visual identity. From social media posts and event posters to merchandise and website assets, our illustrators create original artwork that sets us apart.",
      "We work across digital and traditional media, blending vector art, raster painting, and mixed-media techniques to tell stories that resonate with our audience.",
    ],
    cassetteSrc: "/aois/design/cassettes/illustrations.png",
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
    cassetteSrc: "/aois/design/cassettes/motiongraphics.png",
    tools: ["after-effects", "rive", "gsap", "premiere-pro"],
  },
  {
    key: "3d",
    title: "3D Design",
    shortDescription: "Sculpting digital worlds and objects that push the boundaries of visual storytelling.",
    longDescription: [
      "3D design at ACM-VIT spans product visualization, environment modeling, and real-time 3D experiences. We use Blender, Spline, and game engines to create assets for events, the website, and experimental projects.",
      "From stylized low-poly scenes to photorealistic renders, 3D work adds a layer of depth and immersion that flat design simply cannot match.",
    ],
    cassetteSrc: "/aois/design/cassettes/3d.png",
    tools: ["blender", "spline", "unity", "unreal-engine", "houdini"],
  },
  {
    key: "video-editing",
    title: "Video Editing",
    shortDescription: "Cutting, grading, and shipping videos that document and amplify everything ACM-VIT does.",
    longDescription: [
      "Video editing is the final mile of our visual pipeline. Event recaps, promotional trailers, speaker highlight reels, and documentary-style content all pass through our editors before reaching an audience.",
      "We focus on pacing, color grading, sound design, and platform-specific formatting to ensure every video lands with maximum impact.",
    ],
    cassetteSrc: "/aois/design/cassettes/video-editing.png",
    tools: ["premiere-pro", "davinci-resolve", "after-effects", "lightroom"],
  },
];

export const designDescription = [
  "We craft visual experiences that bring our ideas and events to life, from UI/UX design and motion graphics to social media posts and video edits. With a focus on aesthetics, usability, and storytelling, we shape how the world sees ACM-VIT.",
  "Led by the Design Lead, with the Creative Lead and ACM-W Design Lead working alongside, our team blends art with purpose to create meaningful designs. Whether it is building brand identity or designing user-first interfaces, every pixel, frame, and layout is intentional. Great design is not just seen, it is felt.",
];

export const designStats = [
  { value: "5", label: "AOIs" },
  { value: "24+", label: "Tools" },
  { value: "100+", label: "Designs Created" },
];

export const designFooterMessage = "Every pixel placed with purpose. Now go make something beautiful.";
