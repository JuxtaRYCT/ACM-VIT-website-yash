import { gsap } from "gsap";
import { useState, useEffect, useCallback, useRef } from "react";

interface Props {
  slug: string;
  title: string;
}

const LISTENING_SPEED_OPTIONS = [0.75, 1, 1.25, 1.5];

export default function BlogDock({ slug, title }: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [listeningSpeed, setListeningSpeed] = useState(1);
  const speakingRef = useRef(false);
  const dockRef = useRef<HTMLDivElement>(null);
  const storageKey = `acm-blog-${slug}`;

  // Load saved state + voices
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      if (saved.notes) setNotes(saved.notes);
      if (typeof saved.listeningSpeed === "number")
        setListeningSpeed(saved.listeningSpeed);
    } catch {}

    setIsDark(document.documentElement.getAttribute("data-theme") !== "light");

    // Load TTS voices
    const loadVoices = () => {
      const v = speechSynthesis.getVoices();
      if (v.length > 0) setVoices(v);
    };
    loadVoices();
    speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () =>
      speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, [storageKey]);

  // Observe theme changes from external toggle
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(
        document.documentElement.getAttribute("data-theme") !== "light",
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // Show dock after mount (brief entrance delay)
  useEffect(() => {
    setIsVisible(true);

    if (!dockRef.current) return;

    const pill = dockRef.current.querySelector<HTMLElement>(".blog-dock__pill");
    const controls =
      dockRef.current.querySelectorAll<HTMLElement>(".blog-dock__btn");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        dockRef.current,
        { opacity: 0, y: 28, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        },
      );

      if (pill) {
        gsap.fromTo(
          pill,
          { y: 10 },
          { y: 0, duration: 0.55, ease: "power3.out", delay: 0.08 },
        );
      }

      if (controls.length > 0) {
        gsap.fromTo(
          controls,
          { opacity: 0, y: 8, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            stagger: 0.04,
            ease: "power2.out",
            delay: 0.18,
          },
        );
      }
    }, dockRef);

    return () => ctx.revert();
  }, []);

  // Cleanup TTS on unmount
  useEffect(() => {
    return () => {
      if (speakingRef.current) speechSynthesis.cancel();
    };
  }, []);

  // Save notes (debounced via direct call)
  const saveNotes = useCallback(
    (text: string) => {
      setNotes(text);
      try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
        saved.notes = text;
        saved.listeningSpeed = listeningSpeed;
        saved.lastRead = Date.now();
        localStorage.setItem(storageKey, JSON.stringify(saved));
      } catch {}
    },
    [listeningSpeed, storageKey],
  );

  const cycleListeningSpeed = useCallback(() => {
    setListeningSpeed((current) => {
      const currentIndex = LISTENING_SPEED_OPTIONS.indexOf(current);
      const nextSpeed =
        LISTENING_SPEED_OPTIONS[
          (currentIndex + 1) % LISTENING_SPEED_OPTIONS.length
        ];

      try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
        saved.listeningSpeed = nextSpeed;
        localStorage.setItem(storageKey, JSON.stringify(saved));
      } catch {}

      return nextSpeed;
    });
  }, [storageKey]);

  // TTS toggle
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

    // Chunk at sentence boundaries to avoid Chrome cutoff bug
    const sentences = text.match(/[^.!?]+[.!?]+\s*/g) || [text];
    const chunks: string[] = [];
    let current = "";
    for (const s of sentences) {
      if ((current + s).length > 500) {
        if (current) chunks.push(current);
        current = s;
      } else {
        current += s;
      }
    }
    if (current) chunks.push(current);

    const preferredVoice =
      voices.find(
        (v) =>
          v.name.includes("Samantha") ||
          v.name.includes("Karen") ||
          v.name.includes("Daniel") ||
          v.name.includes("Google UK English"),
      ) ||
      voices.find((v) => v.lang.startsWith("en")) ||
      voices[0];

    let index = 0;
    speakingRef.current = true;

    function speakNext() {
      if (index >= chunks.length || !speakingRef.current) {
        speakingRef.current = false;
        setIsListening(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(chunks[index]);
      if (preferredVoice) utterance.voice = preferredVoice;
      utterance.rate = listeningSpeed;
      utterance.pitch = 1;
      utterance.onend = () => {
        index++;
        speakNext();
      };
      utterance.onerror = () => {
        speakingRef.current = false;
        setIsListening(false);
      };
      speechSynthesis.speak(utterance);
    }

    speakNext();
    setIsListening(true);
  }, [isListening, listeningSpeed, voices]);

  // Theme toggle
  const toggleTheme = useCallback(() => {
    const html = document.documentElement;
    const isLight = html.getAttribute("data-theme") === "light";
    if (isLight) {
      html.removeAttribute("data-theme");
      localStorage.setItem("acm-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("acm-theme", "light");
    }
  }, []);

  // Share
  const handleShare = useCallback(async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [title]);

  // Simple markdown → HTML
  const renderMarkdown = (text: string): string => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/^### (.*$)/gm, "<h4>$1</h4>")
      .replace(/^## (.*$)/gm, "<h3>$1</h3>")
      .replace(/^# (.*$)/gm, "<h2>$1</h2>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(/^- (.*$)/gm, "&bull; $1<br>")
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n/g, "<br>");
  };

  return (
    <div
      ref={dockRef}
      className={`blog-dock ${isVisible ? "blog-dock--visible" : "blog-dock--hidden"}`}
    >
      {/* Scratchpad panel */}
      {showNotes && (
        <div className="blog-dock__scratchpad">
          <div className="blog-dock__scratchpad-header">
            <span>Scratchpad</span>
            <button
              onClick={() => setShowNotes(false)}
              className="blog-dock__scratchpad-close"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="blog-dock__scratchpad-body">
            <textarea
              value={notes}
              onChange={(e) => saveNotes(e.target.value)}
              placeholder="Write notes in Markdown..."
              className="blog-dock__scratchpad-input"
            />
            {notes && (
              <div
                className="blog-dock__scratchpad-preview"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(notes) }}
              />
            )}
          </div>
        </div>
      )}

      {/* Dock pill */}
      <div className="blog-dock__pill">
        {/* Listen */}
        <button
          className={`blog-dock__btn ${isListening ? "blog-dock__btn--active" : ""}`}
          onClick={toggleListen}
          title={isListening ? "Stop listening" : "Listen to article"}
        >
          {isListening ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 010 7.07" />
              <path d="M19.07 4.93a10 10 0 010 14.14" />
            </svg>
          )}
        </button>

        <div className="blog-dock__divider" />

        {/* Speed */}
        <button
          className="blog-dock__btn blog-dock__speed-btn"
          onClick={cycleListeningSpeed}
          title={`Listening speed: ${listeningSpeed}x`}
        >
          <span className="blog-dock__speed-label">
            {listeningSpeed
              .toFixed(listeningSpeed === 1 ? 0 : 2)
              .replace(/0+$/, "")
              .replace(/\.$/, "")}
            x
          </span>
        </button>

        <div className="blog-dock__divider" />

        {/* Notes */}
        <button
          className={`blog-dock__btn ${showNotes ? "blog-dock__btn--active" : ""}`}
          onClick={() => setShowNotes(!showNotes)}
          title="Scratchpad"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </button>

        <div className="blog-dock__divider" />

        {/* Theme */}
        <button
          className="blog-dock__btn"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {isDark ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>

        <div className="blog-dock__divider" />

        {/* Share */}
        <button
          className="blog-dock__btn"
          onClick={handleShare}
          title={copied ? "Copied!" : "Share"}
        >
          {copied ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
