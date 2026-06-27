import { useState, useRef, useEffect } from "react";

// ── SVG path constants (all centered at origin unless noted) ──

const STAR_PATH =
  "M0.783 -5.742C0.61 -6.596 -0.611 -6.596 -0.784 -5.742L-1.517 -2.141C-1.581 -1.826 -1.826 -1.581 -2.141 -1.517L-5.742 -0.784C-6.596 -0.611 -6.596 0.609 -5.742 0.783L-2.141 1.515C-1.826 1.579 -1.581 1.825 -1.517 2.139L-0.784 5.741C-0.611 6.595 0.61 6.595 0.783 5.741L1.516 2.139C1.58 1.825 1.825 1.579 2.14 1.515L5.741 0.783C6.595 0.609 6.595 -0.611 5.741 -0.784L2.14 -1.517C1.825 -1.581 1.58 -1.826 1.516 -2.141L0.783 -5.742Z";

const COVER_PATH =
  "M480.844 0.8H31.387C26.877 0.8 22.55 2.586 19.354 5.768L5.823 19.239C2.607 22.439 0.8 26.79 0.8 31.327V210.809C0.8 220.229 8.436 227.866 17.856 227.866H494.375C503.795 227.866 511.432 220.229 511.432 210.809V31.327C511.432 26.79 509.624 22.439 506.409 19.239L492.878 5.768C489.681 2.586 485.354 0.8 480.844 0.8Z";

// Pencil Thingy gear — natural center at (33, 33) in 67×67 space
const REEL_GEAR =
  "M32.865 9.595C36.091 9.595 39.165 10.246 41.963 11.424L39.137 16.32L44.222 19.256L47.044 14.366C51.943 18.09 55.333 23.696 56.135 30.107H50.48V35.98H56.136C55.335 42.398 51.941 48.009 47.036 51.734L44.213 46.844L39.128 49.779L41.954 54.673C39.159 55.849 36.088 56.5 32.865 56.5C29.638 56.5 26.563 55.847 23.765 54.668L26.596 49.767L21.511 46.831L18.684 51.727C13.784 48.001 10.396 42.393 9.596 35.98H15.251V30.107H9.597C10.399 23.693 13.791 18.083 18.694 14.359L21.519 19.252L26.604 16.316L23.777 11.42C26.572 10.244 29.643 9.595 32.865 9.595Z";

const BUMP_PATH =
  "M129.727 273.173H450.188C457.619 273.173 464.103 278.21 465.94 285.409L482.951 352.06H93.297L114.198 284.617C116.307 277.812 122.602 273.173 129.727 273.173Z";

// ── Variant 2: Arc stripe bands (concentric arcs creating curved horizontal stripes) ──
const ARC_STRIPES_PATH =
  "M451.275 259.559C432.85 267.461 412.554 271.84 391.236 271.84C369.917 271.84 349.622 267.461 331.197 259.559H451.275ZM522.067 197.681C519.51 201.945 516.75 206.074 513.801 210.055H268.67C265.721 206.074 262.962 201.945 260.405 197.681H522.067ZM540.338 151.273C539.447 155.464 538.383 159.591 537.155 163.646H245.317C244.089 159.591 243.025 155.464 242.133 151.273H540.338ZM543.453 111.053C543.602 113.815 543.679 116.597 543.679 119.396C543.679 121.785 543.622 124.161 543.513 126.522H238.958C238.85 124.161 238.792 121.785 238.792 119.396C238.792 116.597 238.87 113.815 239.019 111.053H543.453ZM537.708 77.0176C539.168 82.072 540.376 87.2337 541.312 92.4893H241.16C242.096 87.2337 243.303 82.072 244.763 77.0176H537.708ZM524.916 46.0713C528.191 52.0301 531.079 58.2313 533.547 64.6416H248.924C251.392 58.2311 254.282 52.0302 257.557 46.0713H524.916ZM502.448 15.1357C508.714 21.817 514.385 29.0626 519.376 36.7891H263.096C268.087 29.0627 273.758 21.8169 280.024 15.1357H502.448ZM461.725 -15.8037C474.404 -9.17963 486.036 -0.82562 496.306 8.94727H286.166C296.436 -0.825622 308.067 -9.17962 320.747 -15.8037H461.725ZM391.236 -33.0469C414.181 -33.0469 435.941 -27.977 455.459 -18.8975H327.012C346.53 -27.977 368.291 -33.0469 391.236 -33.0469Z";

// ── Variant 2: Geometric decorative pattern for label block ──
const V2_GEO_PATTERN =
  "M32.293 30.404C32.418 30.404 32.518 30.506 32.52 30.631C32.639 38.005 38.557 43.945 45.84 43.945C53.122 43.945 59.04 38.005 59.159 30.631C59.161 30.506 59.262 30.404 59.387 30.404C59.511 30.404 59.612 30.506 59.611 30.631C59.56 33.857 58.436 36.819 56.585 39.162C55.325 40.759 55.325 47.591 56.585 49.188C58.436 51.531 59.56 54.492 59.611 57.719C59.612 57.844 59.511 57.945 59.387 57.945C59.262 57.945 59.161 57.843 59.159 57.719C59.04 50.345 53.122 44.404 45.84 44.404C38.557 44.404 32.64 50.345 32.52 57.719C32.518 57.843 32.418 57.945 32.293 57.945C32.168 57.945 32.067 57.844 32.069 57.719C32.12 54.492 33.244 51.531 35.095 49.187C36.356 47.591 36.355 40.759 35.095 39.163C33.244 36.819 32.119 33.858 32.069 30.631C32.067 30.506 32.168 30.404 32.293 30.404ZM45.84 48.536C50.878 48.536 54.976 52.627 55.094 57.719C55.097 57.844 54.996 57.945 54.871 57.945C54.746 57.945 54.646 57.844 54.643 57.719C54.524 52.88 50.628 48.995 45.84 48.995C41.051 48.995 37.155 52.88 37.037 57.719C37.034 57.844 36.933 57.945 36.809 57.945C36.684 57.945 36.583 57.844 36.586 57.719C36.704 52.627 40.802 48.536 45.84 48.536ZM45.84 53.126C48.384 53.126 50.46 55.163 50.576 57.72C50.582 57.844 50.48 57.945 50.355 57.945C50.231 57.945 50.13 57.844 50.124 57.72C50.009 55.417 48.134 53.585 45.84 53.585C43.545 53.585 41.671 55.417 41.555 57.72C41.549 57.844 41.449 57.945 41.324 57.945C41.2 57.945 41.098 57.844 41.104 57.72C41.22 55.163 43.296 53.126 45.84 53.126ZM36.809 30.404C36.933 30.404 37.034 30.506 37.037 30.631C37.155 35.469 41.051 39.355 45.84 39.355C50.628 39.355 54.525 35.469 54.643 30.631C54.646 30.506 54.746 30.404 54.871 30.404C54.996 30.404 55.097 30.506 55.094 30.631C54.976 35.723 50.878 39.814 45.84 39.814C40.802 39.814 36.704 35.723 36.586 30.631C36.583 30.506 36.684 30.404 36.809 30.404ZM41.324 30.404C41.449 30.404 41.549 30.505 41.555 30.63C41.671 32.933 43.545 34.765 45.84 34.765C48.135 34.765 50.009 32.933 50.124 30.63C50.13 30.505 50.231 30.404 50.355 30.404C50.48 30.404 50.582 30.506 50.576 30.63C50.46 33.187 48.384 35.224 45.84 35.224C43.296 35.224 41.22 33.187 41.104 30.63C41.098 30.506 41.2 30.404 41.324 30.404Z";

// ── Presets ──

const PRESETS = [
  {
    name: "Classic",
    body: "#FCE6D2",
    cover: "#202020",
    label: "#FCE6D2",
    stripes: ["#EDA35F", "#F0EE75", "#259F6C", "#86ACE7"],
  },
  {
    name: "Midnight",
    body: "#1a1a2e",
    cover: "#0f0f23",
    label: "#e0d6ff",
    stripes: ["#e94560", "#a855f7", "#6366f1", "#312e81"],
  },
  {
    name: "Sunset",
    body: "#fcd4a0",
    cover: "#2d2d2d",
    label: "#fff4de",
    stripes: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff"],
  },
  {
    name: "Ocean",
    body: "#a8dadc",
    cover: "#1d3557",
    label: "#f1faee",
    stripes: ["#e63946", "#f1faee", "#a8dadc", "#457b9d"],
  },
  {
    name: "Lavender",
    body: "#e8d5f5",
    cover: "#2d1b4e",
    label: "#f0e6ff",
    stripes: ["#9b59b6", "#c39bd3", "#a29bfe", "#6c5ce7"],
  },
  {
    name: "Cherry",
    body: "#ffccd5",
    cover: "#590d22",
    label: "#fff0f3",
    stripes: ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1"],
  },
  {
    name: "Mint",
    body: "#b8f0d8",
    cover: "#1a3a2a",
    label: "#e8fff0",
    stripes: ["#00b894", "#55efc4", "#ffeaa7", "#fab1a0"],
  },
  {
    name: "Neon",
    body: "#0d0d0d",
    cover: "#1a1a1a",
    label: "#0d0d0d",
    stripes: ["#39ff14", "#ff073a", "#00f0ff", "#f5ff00"],
  },
];

// ── Helpers ──

function contrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.5 ? "#202020" : "#f0f0f0";
}

function labelFontSize(text: string): number {
  return Math.max(10, Math.min(24, 290 / Math.max(1, text.length * 0.72)));
}

// ── Component ──

export default function CassetteBuilder() {
  const svgRef = useRef<SVGSVGElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State
  const [bodyColor, setBodyColor] = useState("#FCE6D2");
  const [coverColor, setCoverColor] = useState("#202020");
  const [labelColor, setLabelColor] = useState("#FCE6D2");
  const [stripes, setStripes] = useState(["#EDA35F", "#F0EE75", "#259F6C", "#86ACE7"]);
  const [labelText, setLabelText] = useState("Awesome Mix Vol. 1");
  const [side, setSide] = useState("A");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imagePlacement, setImagePlacement] = useState<"cover" | "label">("cover");
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [spotifyCodeImg, setSpotifyCodeImg] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [variant, setVariant] = useState<1 | 2 | 3 | 4>(1);
  const [isDark, setIsDark] = useState(true);

  // Theme detection
  useEffect(() => {
    const check = () => setIsDark(document.documentElement.dataset.theme !== "light");
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  // Spotify code
  useEffect(() => {
    const match = spotifyUrl.match(/(?:track|album)\/([a-zA-Z0-9]+)/);
    if (!match) {
      setSpotifyCodeImg(null);
      return;
    }
    const type = spotifyUrl.includes("/album/") ? "album" : "track";
    const uri = `spotify:${type}:${match[1]}`;
    const bg = bodyColor.replace("#", "");
    const url = `https://scannables.scdn.co/uri/plain/png/${bg}/000000/640/${uri}`;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // Convert to data URL for SVG embedding
      const c = document.createElement("canvas");
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      c.getContext("2d")!.drawImage(img, 0, 0);
      try {
        setSpotifyCodeImg(c.toDataURL("image/png"));
      } catch {
        setSpotifyCodeImg(url); // fallback to direct URL
      }
    };
    img.onerror = () => setSpotifyCodeImg(null);
    img.src = url;
  }, [spotifyUrl, bodyColor]);

  // Handlers
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setUploadedImage(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const applyPreset = (p: (typeof PRESETS)[0]) => {
    setBodyColor(p.body);
    setCoverColor(p.cover);
    setLabelColor(p.label);
    setStripes([...p.stripes]);
  };

  const updateStripe = (i: number, color: string) => {
    setStripes((prev) => prev.map((s, idx) => (idx === i ? color : s)));
  };

  const downloadSVG = () => {
    if (!svgRef.current) return;
    const data = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cassette-${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPNG = async () => {
    if (!svgRef.current || downloading) return;
    setDownloading(true);
    try {
      const svg = svgRef.current;
      const data = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      canvas.width = 2304;
      canvas.height = 1412;
      const ctx = canvas.getContext("2d")!;
      const img = new Image();
      const blob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      await new Promise<void>((resolve, reject) => {
        img.onload = () => {
          ctx.drawImage(img, 0, 0, 2304, 1412);
          URL.revokeObjectURL(url);
          try {
            const a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = `cassette-${Date.now()}.png`;
            a.click();
          } catch {
            // Canvas tainted — fallback to SVG
            downloadSVG();
          }
          resolve();
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          downloadSVG();
          reject();
        };
        img.src = url;
      });
    } catch {
      // ignore
    } finally {
      setDownloading(false);
    }
  };

  const handleShare = async () => {
    if (!svgRef.current) return;
    try {
      const data = new XMLSerializer().serializeToString(svgRef.current);
      const blob = new Blob([data], { type: "image/svg+xml" });
      const file = new File([blob], "my-cassette.svg", { type: "image/svg+xml" });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "My Custom Cassette",
          text: "Built with ACM-VIT Cassette Builder",
          files: [file],
        });
        return;
      }
    } catch {
      // ignore
    }
    downloadSVG();
  };

  const textColor = contrastColor(labelColor);
  const fontSize = labelFontSize(labelText);
  const s = getStyles(isDark);

  // ── Render ──

  return (
    <div style={{ maxWidth: 960, margin: "0 auto" }}>
      {/* ── Cassette Preview ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          padding: "0 1rem",
        }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 576 353"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", maxWidth: 580, height: "auto" }}
        >
          <defs>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');`}</style>
            {/* Cover clip */}
            <clipPath id="cb-cover-clip">
              <path d={COVER_PATH} />
            </clipPath>
            {/* Label clip */}
            <clipPath id="cb-label-clip">
              <rect width="338" height="95" rx="47.5" />
            </clipPath>
          </defs>

          {/* ── 1. Body background ── */}
          <rect
            x="0.8"
            y="0.8"
            width="574.06"
            height="351.26"
            rx="24.25"
            fill={bodyColor}
            stroke="#202020"
            strokeWidth="1.6"
          />

          {/* ── 2. Cover area ── */}
          <g transform="translate(32, 10)">
            {/* Cover fill */}
            <path d={COVER_PATH} fill={coverColor} />

            {/* Stripes / patterns (clipped to cover) */}
            <g clipPath="url(#cb-cover-clip)">
              {variant === 1 ? (
                <>
                  <rect x="0" y="128" width="512" height="13" fill={stripes[0]} />
                  <rect x="0" y="141" width="512" height="13" fill={stripes[1]} />
                  <rect x="0" y="154" width="512" height="13" fill={stripes[2]} />
                  <rect x="0" y="167" width="512" height="13" fill={stripes[3]} />
                </>
              ) : variant === 2 ? (
                <path d={ARC_STRIPES_PATH} fill={stripes[0]} />
              ) : variant === 3 ? (
                <>
                  {/* V3: Concentric ring / vinyl pattern */}
                  {[180, 150, 120, 90, 60, 40].map((r, i) => (
                    <circle key={i} cx="125" cy="114" r={r} fill="none" stroke={stripes[i % stripes.length]} strokeWidth={i < 2 ? 12 : 8} opacity={0.7} />
                  ))}
                  {/* Small right reel rings */}
                  {[50, 35, 20].map((r, i) => (
                    <circle key={`r${i}`} cx="357" cy="114" r={r} fill="none" stroke={stripes[(i + 1) % stripes.length]} strokeWidth={6} opacity={0.5} />
                  ))}
                </>
              ) : (
                <>
                  {/* V4: Dual circular windows */}
                  <circle cx="140" cy="114" r="80" fill={bodyColor} stroke={stripes[0]} strokeWidth="3" />
                  <circle cx="140" cy="114" r="55" fill="none" stroke={stripes[1]} strokeWidth="2" opacity="0.6" />
                  <circle cx="140" cy="114" r="30" fill="none" stroke={stripes[2]} strokeWidth="1.5" opacity="0.4" />
                  <circle cx="372" cy="114" r="80" fill={bodyColor} stroke={stripes[0]} strokeWidth="3" />
                  <circle cx="372" cy="114" r="55" fill="none" stroke={stripes[3]} strokeWidth="2" opacity="0.6" />
                  <circle cx="372" cy="114" r="30" fill="none" stroke={stripes[2]} strokeWidth="1.5" opacity="0.4" />
                  {/* Guide lines connecting windows */}
                  <line x1="220" y1="114" x2="292" y2="114" stroke={stripes[0]} strokeWidth="1" opacity="0.3" />
                </>
              )}
            </g>

            {/* User image on cover */}
            {uploadedImage && imagePlacement === "cover" && (
              <g clipPath="url(#cb-cover-clip)">
                <image
                  href={uploadedImage}
                  x="0"
                  y="0"
                  width="512"
                  height="228"
                  preserveAspectRatio="xMidYMid slice"
                  opacity="0.7"
                />
              </g>
            )}

            {/* Cover outline */}
            <path d={COVER_PATH} fill="none" stroke="#202020" strokeWidth="1.6" />

            {/* ── Variant-specific cover decorations ── */}
            {variant === 1 && (
              <>
                {/* V1: Side indicator */}
                <text x="18" y="30" fill={bodyColor} fontSize="15" fontFamily="'PolySans Trial', sans-serif" fontWeight="500">{side}</text>
                <text x="18" y="44" fill={bodyColor} fontSize="7" fontFamily="'PolySans Mono', monospace" letterSpacing="0.1em" opacity="0.7">side</text>
                {/* Star burst top-right */}
                <g transform="translate(480, 20) scale(1.6)"><path d={STAR_PATH} fill={bodyColor} /></g>
                <text x="480" y="13" fill={bodyColor} fontSize="6" fontFamily="'PolySans Mono', monospace" textAnchor="middle">1</text>
                {/* Label pill */}
                <g transform="translate(87, 8)">
                  <rect width="338" height="95" rx="47.5" fill={labelColor} stroke="#202020" strokeWidth="1.6" />
                  {uploadedImage && imagePlacement === "label" && (
                    <g clipPath="url(#cb-label-clip)">
                      <image href={uploadedImage} x="0" y="0" width="338" height="95" preserveAspectRatio="xMidYMid slice" opacity="0.6" />
                    </g>
                  )}
                  <text x="169" y="52" textAnchor="middle" dominantBaseline="middle" fontFamily="'Rock Salt', cursive" fontSize={fontSize}
                    fill={uploadedImage && imagePlacement === "label" ? "#fff" : textColor}
                    style={{ paintOrder: "stroke", stroke: uploadedImage && imagePlacement === "label" ? "rgba(0,0,0,0.5)" : "none", strokeWidth: uploadedImage && imagePlacement === "label" ? 2 : 0 }}>
                    {labelText}
                  </text>
                </g>
              </>
            )}
            {variant === 2 && (
              <>
                {/* V2: Rectangular label block with geometric pattern */}
                <g transform="translate(27, 25)">
                  <rect width="169" height="38" fill="#202020" />
                  <rect x="3.6" y="3.6" width="31" height="31" fill={stripes[0]} />
                  <g transform="translate(-13.5, -14.2) scale(0.82)"><path d={V2_GEO_PATTERN} fill="#fafafa" /></g>
                  <text x="108" y="22" textAnchor="middle" dominantBaseline="middle" fontFamily="'Rock Salt', cursive"
                    fontSize={Math.max(7, Math.min(13, 120 / Math.max(1, labelText.length * 0.7)))} fill="#fff">
                    {labelText}
                  </text>
                </g>
                <text x="30" y="112" fill="#f3f3f3" fontSize="8" fontFamily="'PolySans Trial', sans-serif" fontWeight="400" letterSpacing="0.05em">{side}</text>
                <text x="30" y="140" fill="#f3f3f3" fontSize="5.5" fontFamily="'PolySans Mono', monospace" letterSpacing="0.08em" opacity="0.8">SIDE</text>
              </>
            )}
            {variant === 3 && (
              <>
                {/* V3: Minimal — bottom label bar + side indicator */}
                <rect x="20" y="195" width="200" height="24" rx="4" fill={labelColor} stroke="#202020" strokeWidth="0.8" />
                <text x="120" y="210" textAnchor="middle" dominantBaseline="middle" fontFamily="'Rock Salt', cursive"
                  fontSize={Math.max(7, Math.min(12, 160 / Math.max(1, labelText.length * 0.7)))} fill={textColor}>
                  {labelText}
                </text>
                {/* STEREO label */}
                <text x="460" y="210" fill={bodyColor} fontSize="7" fontFamily="'PolySans Mono', monospace" letterSpacing="0.18em" opacity="0.6">STEREO</text>
                {/* Side */}
                <text x="450" y="25" fill={bodyColor} fontSize="12" fontFamily="'PolySans Trial', sans-serif" fontWeight="500">{side}</text>
                <text x="450" y="38" fill={bodyColor} fontSize="6" fontFamily="'PolySans Mono', monospace" letterSpacing="0.1em" opacity="0.6">SIDE</text>
              </>
            )}
            {variant === 4 && (
              <>
                {/* V4: Center label between windows */}
                <rect x="195" y="30" width="122" height="168" rx="8" fill={labelColor} stroke="#202020" strokeWidth="1.2" />
                {uploadedImage && imagePlacement === "label" && (
                  <g>
                    <clipPath id="cb-v4-label-clip"><rect x="195" y="30" width="122" height="168" rx="8" /></clipPath>
                    <image href={uploadedImage} x="195" y="30" width="122" height="168" preserveAspectRatio="xMidYMid slice" opacity="0.6" clipPath="url(#cb-v4-label-clip)" />
                  </g>
                )}
                <text x="256" y="100" textAnchor="middle" dominantBaseline="middle" fontFamily="'Rock Salt', cursive"
                  fontSize={Math.max(8, Math.min(14, 100 / Math.max(1, labelText.length * 0.7)))}
                  fill={uploadedImage && imagePlacement === "label" ? "#fff" : textColor}
                  style={{ paintOrder: "stroke", stroke: uploadedImage && imagePlacement === "label" ? "rgba(0,0,0,0.4)" : "none", strokeWidth: uploadedImage && imagePlacement === "label" ? 1.5 : 0 }}>
                  {labelText}
                </text>
                <text x="256" y="125" textAnchor="middle" fill={textColor} fontSize="6" fontFamily="'PolySans Mono', monospace" letterSpacing="0.15em" opacity="0.5">
                  SIDE {side}
                </text>
                {/* Corner stars */}
                <g transform="translate(210, 40) scale(0.8)"><path d={STAR_PATH} fill={textColor} opacity="0.3" /></g>
                <g transform="translate(302, 40) scale(0.8)"><path d={STAR_PATH} fill={textColor} opacity="0.3" /></g>
                <g transform="translate(210, 186) scale(0.8)"><path d={STAR_PATH} fill={textColor} opacity="0.3" /></g>
                <g transform="translate(302, 186) scale(0.8)"><path d={STAR_PATH} fill={textColor} opacity="0.3" /></g>
              </>
            )}

            {/* ── Reel housing ── */}
            <g transform="translate(87, 110)">
              <rect
                width="338"
                height="88"
                rx="44"
                fill={bodyColor}
                stroke="#202020"
                strokeWidth="1.6"
              />

              {/* Left reel */}
              <g transform="translate(62, 44)">
                <circle
                  r="30.65"
                  fill="none"
                  stroke="#202020"
                  strokeWidth="1.6"
                />
                <g transform="translate(-33, -33)">
                  <path d={REEL_GEAR} fill="#202020" />
                </g>
              </g>

              {/* Window */}
              <rect
                x="126"
                y="24"
                width="86"
                height="38"
                rx="3"
                fill="none"
                stroke="#202020"
                strokeWidth="1.6"
              />
              <path
                d={`M126 27C126 25.343 127.343 24 129 24H169C169 24 169 62 169 62H129C127.343 62 126 60.657 126 59V27Z`}
                fill="#202020"
              />

              {/* Right reel */}
              <g transform="translate(276, 44)">
                <circle
                  r="30.65"
                  fill="none"
                  stroke="#202020"
                  strokeWidth="1.6"
                />
                <g transform="translate(-33, -33)">
                  <path d={REEL_GEAR} fill="#202020" />
                </g>
              </g>
            </g>

            {/* ── Bottom decorations ── */}
            {/* Concentric ovals */}
            <g transform="translate(50, 200)" opacity="0.5">
              <ellipse
                rx="16"
                ry="9"
                fill="none"
                stroke={bodyColor}
                strokeWidth="0.6"
              />
              <ellipse
                rx="13"
                ry="7"
                fill="none"
                stroke={bodyColor}
                strokeWidth="0.6"
              />
              <ellipse
                rx="10"
                ry="5"
                fill="none"
                stroke={bodyColor}
                strokeWidth="0.6"
              />
              <ellipse
                rx="7"
                ry="3"
                fill="none"
                stroke={bodyColor}
                strokeWidth="0.5"
              />
            </g>

            {/* Tape length indicator */}
            <g transform="translate(256, 208)">
              <rect
                x="-6"
                y="-8"
                width="12"
                height="16"
                rx="1.5"
                fill="none"
                stroke={bodyColor}
                strokeWidth="0.8"
                opacity="0.6"
              />
              <text
                x="0"
                y="14"
                textAnchor="middle"
                fill={bodyColor}
                fontSize="7"
                fontFamily="'PolySans Mono', monospace"
                opacity="0.6"
              >
                90
              </text>
            </g>

            {/* STEREO */}
            <text
              x="432"
              y="215"
              fill={bodyColor}
              fontSize="7.5"
              fontFamily="'PolySans Mono', monospace"
              letterSpacing="0.18em"
              opacity="0.7"
            >
              STEREO
            </text>

            {/* Spotify code */}
            {spotifyCodeImg && (
              <image
                href={spotifyCodeImg}
                x="340"
                y="190"
                width="130"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                opacity="0.85"
              />
            )}

            {/* Signature swirl */}
            <g transform="translate(470, 210)" opacity="0.5">
              <path
                d="M0 0C3-2 6-1 8 1S6 6 3 5S1 1 4 0"
                fill="none"
                stroke={bodyColor}
                strokeWidth="0.8"
              />
            </g>
          </g>

          {/* ── 3. Bump section (body coords) ── */}
          <path d={BUMP_PATH} fill="none" stroke="#202020" strokeWidth="1.6" />

          {/* Bump circles */}
          <circle cx="151.911" cy="327.807" r="14.925" fill="#202020" />
          <circle cx="424.283" cy="327.807" r="14.925" fill="#202020" />

          {/* Bump squares */}
          <rect
            x="197.484"
            y="313.682"
            width="18.66"
            height="18.66"
            rx="3.2"
            fill="#202020"
          />
          <rect
            x="360.054"
            y="313.682"
            width="18.66"
            height="18.66"
            rx="3.2"
            fill="#202020"
          />

          {/* Center tab */}
          <rect
            x="278"
            y="330"
            width="20.3"
            height="12.8"
            rx="3.2"
            fill={bodyColor}
            stroke="#202020"
            strokeWidth="1.6"
          />

          {/* Bump star icon */}
          <g transform="translate(288, 289)">
            <path d={STAR_PATH} fill="#202020" />
          </g>

          {/* ── 4. Bottom rings ── */}
          <circle
            cx="62.363"
            cy="325.675"
            r="17.06"
            fill={bodyColor}
            stroke="#202020"
            strokeWidth="1.6"
          />
          <circle
            cx="62.363"
            cy="325.675"
            r="7.18"
            fill="none"
            stroke="#202020"
            strokeWidth="1.6"
          />
          <circle
            cx="513.297"
            cy="325.675"
            r="17.06"
            fill={bodyColor}
            stroke="#202020"
            strokeWidth="1.6"
          />
          <circle
            cx="513.297"
            cy="325.675"
            r="7.18"
            fill="none"
            stroke="#202020"
            strokeWidth="1.6"
          />

          {/* ── 5. Corner screws ── */}
          <g transform="translate(24, 24)">
            <path d={STAR_PATH} fill="#202020" />
          </g>
          <g transform="translate(552, 24)">
            <path d={STAR_PATH} fill="#202020" />
          </g>
          <g transform="translate(24, 329)">
            <path d={STAR_PATH} fill="#202020" />
          </g>
          <g transform="translate(552, 329)">
            <path d={STAR_PATH} fill="#202020" />
          </g>
        </svg>
      </div>

      {/* ── Controls ── */}
      <div style={{ padding: "0 1rem" }}>
        {/* Variants */}
        <div style={s.card}>
          <div style={s.section}>VARIANTS</div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {([1, 2, 3, 4] as const).map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                style={{
                  ...s.pill,
                  background: variant === v ? "rgba(249,95,74,0.25)" : s.bgSubtle,
                  borderColor: variant === v ? "rgba(249,95,74,0.5)" : s.border,
                }}
              >
                {v === 1 ? "Classic Bars" : v === 2 ? "Arc Stripes" : v === 3 ? "Retro Minimal" : "Dual Window"}
              </button>
            ))}
          </div>
        </div>

        {/* Presets */}
        <div style={{ ...s.card, marginTop: "1rem" }}>
          <div style={s.section}>PRESETS</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            {PRESETS.map((p) => (
              <button
                key={p.name}
                onClick={() => applyPreset(p)}
                style={{
                  padding: "0.4rem 0.8rem",
                  borderRadius: "100px",
                  border: `1px solid ${s.border}`,
                  background:
                    bodyColor === p.body && coverColor === p.cover
                      ? "rgba(249,95,74,0.25)"
                      : s.bgSubtle,
                  color: s.text,
                  fontFamily: "'PolySans Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    gap: "3px",
                    marginRight: "6px",
                    verticalAlign: "middle",
                  }}
                >
                  {p.stripes.map((c, i) => (
                    <span
                      key={i}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: c,
                        display: "inline-block",
                      }}
                    />
                  ))}
                </span>
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Controls grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {/* Colors */}
          <div style={s.card}>
            <div style={s.section}>COLORS</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <ColorRow label="Body" value={bodyColor} onChange={setBodyColor} isDark={isDark} />
              <ColorRow label="Cover" value={coverColor} onChange={setCoverColor} isDark={isDark} />
              <ColorRow label="Label" value={labelColor} onChange={setLabelColor} isDark={isDark} />
              <div>
                <span style={s.field}>Stripes</span>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.35rem" }}>
                  {stripes.map((c, i) => (
                    <ColorSwatch
                      key={i}
                      value={c}
                      onChange={(v) => updateStripe(i, v)}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div style={s.card}>
            <div style={s.section}>TEXT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div>
                <span style={s.field}>Title</span>
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  placeholder="Your mix title..."
                  maxLength={40}
                  style={s.input}
                />
              </div>
              <div>
                <span style={s.field}>Side</span>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.35rem" }}>
                  {["A", "B"].map((sd) => (
                    <button
                      key={sd}
                      onClick={() => setSide(sd)}
                      style={{
                        ...s.pill,
                        background:
                          side === sd
                            ? "rgba(249,95,74,0.3)"
                            : s.bgSubtle,
                        borderColor:
                          side === sd
                            ? "rgba(249,95,74,0.5)"
                            : s.border,
                      }}
                    >
                      Side {sd}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Media */}
          <div style={s.card}>
            <div style={s.section}>MEDIA</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div>
                <span style={s.field}>Image</span>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "0.35rem",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      ...s.pill,
                      background: "rgba(249,95,74,0.15)",
                      borderColor: "rgba(249,95,74,0.3)",
                      flex: 1,
                    }}
                  >
                    {uploadedImage ? "Change" : "Upload"}
                  </button>
                  {uploadedImage && (
                    <button
                      onClick={() => {
                        setUploadedImage(null);
                        if (fileInputRef.current) fileInputRef.current.value = "";
                      }}
                      style={{
                        ...s.pill,
                        background: "rgba(255,60,60,0.1)",
                        borderColor: "rgba(255,60,60,0.3)",
                        color: "#ff6b6b",
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                {uploadedImage && (
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {(["cover", "label"] as const).map((p) => (
                      <button
                        key={p}
                        onClick={() => setImagePlacement(p)}
                        style={{
                          ...s.pill,
                          fontSize: "0.6rem",
                          padding: "0.25rem 0.6rem",
                          background:
                            imagePlacement === p
                              ? "rgba(249,95,74,0.25)"
                              : s.bgSubtle,
                          borderColor:
                            imagePlacement === p
                              ? "rgba(249,95,74,0.4)"
                              : s.border,
                        }}
                      >
                        On {p}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <span style={s.field}>Spotify Song URL</span>
                <input
                  type="text"
                  value={spotifyUrl}
                  onChange={(e) => setSpotifyUrl(e.target.value)}
                  placeholder="https://open.spotify.com/track/..."
                  style={s.input}
                />
                {spotifyUrl && !spotifyCodeImg && (
                  <span
                    style={{
                      fontSize: "0.6rem",
                      color: s.hintText,
                      fontFamily: "'PolySans Mono', monospace",
                      marginTop: "0.25rem",
                      display: "block",
                    }}
                  >
                    Paste a valid Spotify track or album URL
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Export buttons */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button onClick={downloadPNG} disabled={downloading} style={s.action}>
            <DownloadIcon /> Download PNG
          </button>
          <button onClick={downloadSVG} style={{ ...s.action, ...s.secondary }}>
            <DownloadIcon /> Download SVG
          </button>
          <button
            onClick={handleShare}
            style={{ ...s.action, ...s.secondary }}
          >
            <ShareIcon /> Share
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ──

function ColorRow({
  label,
  value,
  onChange,
  isDark = true,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  isDark?: boolean;
}) {
  const st = getStyles(isDark);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={st.field}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span
          style={{
            fontSize: "0.65rem",
            color: st.hintText,
            fontFamily: "'PolySans Mono', monospace",
            textTransform: "uppercase" as const,
          }}
        >
          {value}
        </span>
        <ColorSwatch value={value} onChange={onChange} isDark={isDark} />
      </div>
    </div>
  );
}

function ColorSwatch({
  value,
  onChange,
  isDark = true,
}: {
  value: string;
  onChange: (v: string) => void;
  isDark?: boolean;
}) {
  const [hover, setHover] = useState(false);
  return (
    <label
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 40,
        height: 40,
        borderRadius: "12px",
        background: value,
        border: `2px solid ${hover ? "#F95F4A" : isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.15)"}`,
        boxShadow: hover
          ? "0 0 0 3px rgba(249,95,74,0.25), inset 0 1px 2px rgba(255,255,255,0.2)"
          : `inset 0 1px 2px ${isDark ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.3)"}`,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        display: "block",
        flexShrink: 0,
        transition: "all 0.2s ease",
        transform: hover ? "scale(1.12)" : "scale(1)",
      }}
    >
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      />
    </label>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

// ── Shared styles (theme-aware) ──

function getStyles(dark: boolean) {
  const text = dark ? "#FFFDD0" : "#1a1a1a";
  const border = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";
  const borderSubtle = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const bgSubtle = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const labelText = dark ? "rgba(255,253,208,0.6)" : "rgba(0,0,0,0.55)";
  const hintText = dark ? "rgba(255,253,208,0.4)" : "rgba(0,0,0,0.35)";

  const card: React.CSSProperties = {
    border: `1px solid ${borderSubtle}`,
    borderRadius: 16,
    padding: "1.25rem",
    background: dark ? "rgba(255,95,74,0.04)" : "rgba(249,95,74,0.05)",
  };

  const section: React.CSSProperties = {
    fontFamily: "'PolySans Mono', monospace",
    fontSize: "0.65rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#F95F4A",
    marginBottom: "0.75rem",
    display: "block",
  };

  const field: React.CSSProperties = {
    fontFamily: "'PolySans Mono', monospace",
    fontSize: "0.7rem",
    color: labelText,
    letterSpacing: "0.05em",
    display: "block",
    marginBottom: "0.1rem",
  };

  const input: React.CSSProperties = {
    width: "100%",
    padding: "0.5rem 0.75rem",
    borderRadius: 10,
    border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)"}`,
    background: dark ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.05)",
    color: text,
    fontFamily: "'PolySans Trial', sans-serif",
    fontSize: "0.85rem",
    outline: "none",
    marginTop: "0.35rem",
    boxSizing: "border-box" as const,
  };

  const pill: React.CSSProperties = {
    padding: "0.4rem 0.75rem",
    borderRadius: 100,
    border: `1px solid ${border}`,
    background: bgSubtle,
    color: text,
    fontFamily: "'PolySans Mono', monospace",
    fontSize: "0.7rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    transition: "all 0.2s",
  };

  const action: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.65rem 1.5rem",
    borderRadius: 100,
    border: "1px solid rgba(249,95,74,0.5)",
    background: "rgba(249,95,74,0.2)",
    color: "#F95F4A",
    fontFamily: "'PolySans Trial', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 500,
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    transition: "all 0.25s",
  };

  const secondary: React.CSSProperties = {
    background: bgSubtle,
    borderColor: border,
    color: text,
  };

  return { card, section, field, input, pill, action, secondary, text, border, borderSubtle, bgSubtle, hintText };
}
