import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

interface Props {
  slug: string;
  title: string;
}

const LISTENING_SPEED_OPTIONS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

const btnBase =
  "dock-control w-9 h-9 flex items-center justify-center rounded-full border-none bg-transparent cursor-pointer transition-all duration-200 active:scale-[0.92]";

function formatSpeed(speed: number): string {
  return `${speed.toFixed(speed === 1 ? 0 : 2).replace(/0+$/,"").replace(/\.$/, "")}x`;
}

function nearestSpeedIndex(speed: number): number {
  const exact = LISTENING_SPEED_OPTIONS.indexOf(speed);
  if (exact !== -1) return exact;

  return LISTENING_SPEED_OPTIONS.reduce((nearest, option, index) => (
    Math.abs(option - speed) < Math.abs(LISTENING_SPEED_OPTIONS[nearest] - speed)
      ? index
      : nearest
  ), 0);
}

function ElasticSpeedSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragPosition, setDragPosition] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const maxIndex = LISTENING_SPEED_OPTIONS.length - 1;
  const selectedIndex = nearestSpeedIndex(value);
  const visualPosition = dragPosition ?? selectedIndex;
  const boundedVisualPosition = Math.min(maxIndex, Math.max(0, visualPosition));
  const visualPercent = (visualPosition / maxIndex) * 100;
  const boundedVisualPercent = (boundedVisualPosition / maxIndex) * 100;
  const activeIndex = isDragging ? Math.round(boundedVisualPosition) : selectedIndex;
  const elasticPull = isDragging
    ? Math.min(1, Math.abs(visualPosition - boundedVisualPosition))
    : 0;
  const trackStyle = {
    "--elastic-pull": elasticPull.toFixed(3),
    "--elastic-origin": visualPosition < 0 ? "right" : "left",
  } as CSSProperties;

  const updateFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * maxIndex;
    const bounded = Math.min(maxIndex, Math.max(0, raw));
    const overflow =
      raw < 0 ? raw : raw > maxIndex ? raw - maxIndex : 0;

    setDragPosition(bounded + overflow * 0.22);
  }, [maxIndex]);

  const commitDrag = useCallback(() => {
    const position = Math.min(maxIndex, Math.max(0, dragPosition ?? selectedIndex));
    const nextIndex = Math.round(position);
    onChange(LISTENING_SPEED_OPTIONS[nextIndex]);
    setDragPosition(null);
    setIsDragging(false);
  }, [dragPosition, maxIndex, onChange, selectedIndex]);

  const handlePointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updateFromClientX(event.clientX);
  }, [updateFromClientX]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = Math.min(maxIndex, Math.max(0, selectedIndex + delta));
    onChange(LISTENING_SPEED_OPTIONS[nextIndex]);
  }, [maxIndex, onChange, selectedIndex]);

  return (
    <div
      className={`dock-control elastic-speed-slider ${isDragging ? "is-dragging" : ""}`}
      role="slider"
      aria-label="Listening speed"
      aria-valuemin={LISTENING_SPEED_OPTIONS[0]}
      aria-valuemax={LISTENING_SPEED_OPTIONS[maxIndex]}
      aria-valuenow={value}
      aria-valuetext={formatSpeed(value)}
      tabIndex={0}
      title={`Speed: ${formatSpeed(value)}`}
      onPointerDown={handlePointerDown}
      onPointerMove={(event) => {
        if (isDragging) updateFromClientX(event.clientX);
      }}
      onPointerUp={commitDrag}
      onPointerCancel={commitDrag}
      onKeyDown={handleKeyDown}
    >
      <span className="elastic-speed-value">{formatSpeed(value)}</span>
      <div className="elastic-speed-track" ref={trackRef} style={trackStyle}>
        <div
          className="elastic-speed-fill"
          style={{ width: `${boundedVisualPercent}%` }}
        />
        {LISTENING_SPEED_OPTIONS.map((speed, index) => (
          <span
            key={speed}
            className={`elastic-speed-stop ${index <= activeIndex ? "is-active" : ""}`}
            style={{ left: `${(index / maxIndex) * 100}%` }}
          />
        ))}
        <span
          className="elastic-speed-thumb"
          style={{ left: `${visualPercent}%` }}
        />
      </div>
    </div>
  );
}

export default function BlogDock({ slug, title }: Props) {
  const [isListening, setIsListening]   = useState(false);
  const [showSpeedControl, setShowSpeedControl] = useState(false);
  const [showNotes, setShowNotes]       = useState(false);
  const [notes, setNotes]               = useState("");
  const [copied, setCopied]             = useState(false);
  const [isDark, setIsDark]             = useState(true);
  const [voices, setVoices]             = useState<SpeechSynthesisVoice[]>([]);
  const [listeningSpeed, setListeningSpeed] = useState(1);
  const speakingRef = useRef(false);
  const dockRef     = useRef<HTMLDivElement>(null);
  const speedControlRef = useRef<HTMLDivElement>(null);
  const speedVisibleRef = useRef(false);
  const storageKey  = `acm-blog-${slug}`;

  // Register GSAP Flip plugin on client only — module-level registration crashes SSR
  useEffect(() => { gsap.registerPlugin(Flip); }, []);

  // ── Load saved state + voices ──────────────────────────
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      if (saved.notes) setNotes(saved.notes);
      if (typeof saved.listeningSpeed === "number") {
        setListeningSpeed(LISTENING_SPEED_OPTIONS[nearestSpeedIndex(saved.listeningSpeed)]);
      }
    } catch {}

    setIsDark(document.documentElement.getAttribute("data-theme") !== "light");

    const loadVoices = () => {
      const v = speechSynthesis.getVoices();
      if (v.length > 0) setVoices(v);
    };
    loadVoices();
    speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, [storageKey]);

  // ── Observe theme changes ──────────────────────────────
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") !== "light");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // ── AnimatedButton-style entrance on the INNER div only ─
  // The outer div holds `left-1/2 -translate-x-1/2` for centering.
  // GSAP only animates the inner div/pill so it never overwrites the
  // centering transform on the outer div.
  useEffect(() => {
    if (!dockRef.current) return;
    const pill     = dockRef.current.querySelector<HTMLElement>(".dock-pill");
    const controls = dockRef.current.querySelectorAll<HTMLElement>(".dock-control");
    const dividers = dockRef.current.querySelectorAll<HTMLElement>(".dock-divider");
    if (!pill) return;

    const ctx = gsap.context(() => {
      const naturalRect = pill.getBoundingClientRect();
      const naturalWidth = naturalRect.width;
      const naturalHeight = naturalRect.height;

      gsap.set(dockRef.current, { opacity: 1 });
      gsap.set(pill, {
        opacity: 0,
        y: 24,
        scale: 0.7,
        width: naturalHeight,
        height: naturalHeight,
        overflow: "hidden",
      });
      gsap.set([controls, dividers], { opacity: 0 });

      const tl = gsap.timeline();
      tl.to(pill, {
        opacity: 1,
        y: -6,
        scale: 1.05,
        duration: 0.35,
        ease: "power2.out",
      })
        .to(pill, {
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
        })
        .add(() => {
          const state = Flip.getState(pill);
          pill.style.width = `${naturalWidth}px`;

          Flip.from(state, {
            duration: 0.5,
            ease: "power3.out",
            onComplete: () => {
              pill.style.width = "";
              pill.style.height = "";
              pill.style.overflow = "";
              gsap.to([controls, dividers], {
                opacity: 1,
                duration: 0.3,
                stagger: 0.025,
                ease: "power2.out",
              });
            },
          });
        }, "-=0.08");
    }, dockRef);
    return () => ctx.revert();
  }, []);

  // ── Cleanup TTS ────────────────────────────────────────
  useEffect(() => {
    return () => { if (speakingRef.current) speechSynthesis.cancel(); };
  }, []);

  useEffect(() => {
    const speedControl = speedControlRef.current;

    if (isListening) {
      if (!showSpeedControl) {
        setShowSpeedControl(true);
        return;
      }
      if (!speedControl || speedVisibleRef.current) return;

      speedVisibleRef.current = true;
      gsap.killTweensOf(speedControl);
      gsap.fromTo(
        speedControl,
        {
          width: 0,
          opacity: 0,
          x: -10,
          scaleX: 0.88,
        },
        {
          width: "auto",
          opacity: 1,
          x: 0,
          scaleX: 1,
          duration: 0.42,
          ease: "power3.out",
          clearProps: "width,x,scaleX",
        },
      );
      return;
    }

    if (!showSpeedControl || !speedControl) return;

    speedVisibleRef.current = false;
    gsap.killTweensOf(speedControl);
    gsap.to(speedControl, {
      width: 0,
      opacity: 0,
      x: -8,
      scaleX: 0.92,
      duration: 0.24,
      ease: "power2.inOut",
      onComplete: () => {
        setShowSpeedControl(false);
      },
    });
  }, [isListening, showSpeedControl]);

  // ── Helpers ────────────────────────────────────────────
  const saveNotes = useCallback((text: string) => {
    setNotes(text);
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      saved.notes = text;
      saved.listeningSpeed = listeningSpeed;
      saved.lastRead = Date.now();
      localStorage.setItem(storageKey, JSON.stringify(saved));
    } catch {}
  }, [listeningSpeed, storageKey]);

  const saveListeningSpeed = useCallback((next: number) => {
    setListeningSpeed(next);
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      saved.listeningSpeed = next;
      localStorage.setItem(storageKey, JSON.stringify(saved));
    } catch {}
  }, [storageKey]);

  const toggleListen = useCallback(() => {
    if (isListening) {
      speechSynthesis.cancel();
      speakingRef.current = false;
      setIsListening(false);
      return;
    }
    const content = document.querySelector(".blog-content");
    if (!content) return;
    const text = content.textContent || "";
    if (!text.trim()) return;

    const sentences = text.match(/[^.!?]+[.!?]+\s*/g) || [text];
    const chunks: string[] = [];
    let current = "";
    for (const s of sentences) {
      if ((current + s).length > 500) { if (current) chunks.push(current); current = s; }
      else current += s;
    }
    if (current) chunks.push(current);

    const preferredVoice =
      voices.find((v) => ["Samantha","Karen","Daniel"].some(n => v.name.includes(n)) || v.name.includes("Google UK English")) ||
      voices.find((v) => v.lang.startsWith("en")) ||
      voices[0];

    let index = 0;
    speakingRef.current = true;

    function speakNext() {
      if (index >= chunks.length || !speakingRef.current) {
        speakingRef.current = false; setIsListening(false); return;
      }
      const utt = new SpeechSynthesisUtterance(chunks[index]);
      if (preferredVoice) utt.voice = preferredVoice;
      utt.rate  = listeningSpeed;
      utt.pitch = 1;
      utt.onend   = () => { index++; speakNext(); };
      utt.onerror = () => { speakingRef.current = false; setIsListening(false); };
      speechSynthesis.speak(utt);
    }
    speakNext();
    setIsListening(true);
  }, [isListening, listeningSpeed, voices]);

  const toggleTheme = useCallback(() => {
    const html = document.documentElement;
    const isLight = html.getAttribute("data-theme") === "light";
    if (isLight) { html.removeAttribute("data-theme"); localStorage.setItem("acm-theme","dark"); }
    else         { html.setAttribute("data-theme","light"); localStorage.setItem("acm-theme","light"); }
  }, []);

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    if (navigator.share) { try { await navigator.share({ title, url }); } catch {} }
    else { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  }, [title]);

  // ── Theme-driven class sets ─────────────────────────────
  const pill = isDark
    ? "bg-[rgba(30,30,30,0.9)] border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    : "bg-[rgba(22,22,22,0.96)] border-[#F95F4A]/35 shadow-[0_12px_36px_rgba(45,20,12,0.28)]";

  const btn = isDark
    ? "text-white/60 hover:text-[#FEFCD9] hover:bg-white/[0.08]"
    : "text-[#F7EEC1]/75 hover:text-[#F95F4A] hover:bg-[#F95F4A]/18";

  const divider = isDark ? "bg-white/[0.08]" : "bg-[#F95F4A]/25";

  const scratchpad = isDark
    ? "bg-[rgba(30,30,30,0.95)] border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    : "bg-[rgba(255,250,238,0.98)] border-[#C7442E]/25 shadow-[0_12px_36px_rgba(45,20,12,0.2)]";

  const scratchHeader = isDark
    ? "border-white/[0.06] text-white/50"
    : "border-[#C7442E]/15 text-[#8A2F21]";

  const scratchClose = isDark
    ? "text-white/40 hover:text-white/80 hover:bg-white/[0.06]"
    : "text-[#8A2F21]/60 hover:text-[#C7442E] hover:bg-[#F95F4A]/12";

  const scratchInput = isDark
    ? "border-white/[0.06] text-white/80 placeholder:text-white/20"
    : "border-[#C7442E]/15 text-[#1a1a1a] placeholder:text-[#7A4A3D]/60";

  // ── Render ─────────────────────────────────────────────
  //
  // TWO-DIV STRUCTURE:
  //   outer — fixed positioning + centering (never animated by GSAP)
  //   inner — ref for GSAP entrance animation (y/opacity/scale only)
  //
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9000] pointer-events-none">
      <div
        ref={dockRef}
        className="flex flex-col items-center gap-2 pointer-events-auto"
      >

        {/* ── Scratchpad panel ────────────────────────── */}
        {showNotes && (
          <div
            className={`w-80 max-h-[340px] backdrop-blur-2xl rounded-2xl border overflow-hidden flex flex-col ${scratchpad}`}
            style={{ animation: "scratchpad-in 0.3s cubic-bezier(0.33, 1, 0.68, 1)" }}
          >
            <div className={`flex items-center justify-between px-3.5 py-2.5 border-b font-mono text-[11px] tracking-[0.1em] uppercase ${scratchHeader}`}>
              <span>Scratchpad</span>
              <button
                onClick={() => setShowNotes(false)}
                className={`p-0.5 flex items-center justify-center rounded bg-transparent border-none cursor-pointer transition-all duration-200 ${scratchClose}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col flex-1 overflow-hidden">
              <textarea
                value={notes}
                onChange={(e) => saveNotes(e.target.value)}
                placeholder="Write a quick note..."
                className={`w-full h-[180px] px-3.5 py-3 bg-transparent border-0 font-mono text-[12px] leading-relaxed resize-none outline-none box-border ${scratchInput}`}
              />
            </div>
          </div>
        )}

        {/* ── Dock pill ───────────────────────────────── */}
        <div className={`dock-pill flex min-h-[52px] items-center gap-1 px-4 py-2 backdrop-blur-2xl rounded-full border ${pill}`}>

          {/* Listen */}
          <button
            className={`dock-btn ${btnBase} ${isListening ? "text-[#F95F4A] hover:text-[#F95F4A] hover:bg-[#F95F4A]/15" : btn}`}
            onClick={toggleListen}
            title={isListening ? "Stop listening" : "Listen to article"}
          >
            {isListening ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 010 7.07" />
                <path d="M19.07 4.93a10 10 0 010 14.14" />
              </svg>
            )}
          </button>

          {showSpeedControl && (
            <div
              ref={speedControlRef}
              className="playback-speed-group flex items-center gap-1 overflow-hidden origin-left"
            >
              <div className={`dock-divider w-px h-5 mx-0.5 shrink-0 ${divider}`} />
              <ElasticSpeedSlider value={listeningSpeed} onChange={saveListeningSpeed} />
              <div className={`dock-divider w-px h-5 mx-0.5 shrink-0 ${divider}`} />
            </div>
          )}

          {/* Notes */}
          <button
            className={`dock-btn ${btnBase} ${showNotes ? "text-[#F95F4A] hover:text-[#F95F4A] hover:bg-[#F95F4A]/15" : btn}`}
            onClick={() => setShowNotes(!showNotes)}
            title="Scratchpad"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </button>

          <div className={`dock-divider w-px h-5 mx-0.5 ${divider}`} />

          {/* Theme */}
          <button className={`dock-btn ${btnBase} ${btn}`} onClick={toggleTheme} title="Toggle theme">
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <div className={`dock-divider w-px h-5 mx-0.5 ${divider}`} />

          {/* Share */}
          <button className={`dock-btn ${btnBase} ${btn}`} onClick={handleShare} title={copied ? "Copied!" : "Share"}>
            {copied ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            )}
          </button>

        </div>
        {/* ── end dock pill ────────────────────────────── */}

      </div>
      {/* ── end inner animated div ───────────────────────── */}

    </div>
    // ── end outer centering div ─────────────────────────
  );
}
