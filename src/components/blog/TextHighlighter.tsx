import { useState, useEffect, useCallback, useRef } from 'react';

interface Props {
  slug: string;
}

interface HighlightEntry {
  text: string;
}

/** Highlight each text node in a range individually (safe for multi-node selections). */
function highlightRange(range: Range): void {
  const container = range.commonAncestorContainer;
  const root = container.nodeType === Node.TEXT_NODE ? container.parentElement! : container;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let node: Node | null;

  while ((node = walker.nextNode())) {
    if (range.intersectsNode(node)) textNodes.push(node as Text);
  }

  for (const textNode of textNodes) {
    const nodeRange = document.createRange();

    if (textNode === range.startContainer) {
      nodeRange.setStart(textNode, range.startOffset);
      nodeRange.setEnd(textNode, textNode.length);
    } else if (textNode === range.endContainer) {
      nodeRange.setStart(textNode, 0);
      nodeRange.setEnd(textNode, range.endOffset);
    } else {
      nodeRange.selectNodeContents(textNode);
    }

    const selected = nodeRange.toString();
    if (!selected.trim()) continue;

    try {
      const mark = document.createElement('mark');
      mark.className = 'blog-highlight'; // styled in blog.css (JS-applied, cannot be Tailwind)
      nodeRange.surroundContents(mark);
    } catch {}
  }
}

export default function TextHighlighter({ slug }: Props) {
  const [popup, setPopup] = useState<{ x: number; y: number } | null>(null);
  const rangeRef  = useRef<Range | null>(null);
  const popupRef  = useRef<HTMLDivElement>(null);
  const storageKey = `acm-blog-${slug}`;

  // Restore saved highlights on mount
  useEffect(() => {
    const restore = () => {
      try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
        const highlights: HighlightEntry[] = saved.highlights || [];
        if (highlights.length === 0) return;

        const content = document.querySelector('.blog-content');
        if (!content) return;

        const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
        const textNodes: Text[] = [];
        let node: Node | null;
        while ((node = walker.nextNode())) textNodes.push(node as Text);

        for (const h of highlights) {
          for (const textNode of textNodes) {
            const idx = textNode.textContent?.indexOf(h.text) ?? -1;
            if (idx === -1) continue;
            if (textNode.parentElement?.closest('.blog-highlight')) continue;

            try {
              const range = document.createRange();
              range.setStart(textNode, idx);
              range.setEnd(textNode, idx + h.text.length);
              const mark = document.createElement('mark');
              mark.className = 'blog-highlight';
              range.surroundContents(mark);
            } catch {}
            break;
          }
        }
      } catch {}
    };

    requestAnimationFrame(restore);
  }, [storageKey]);

  // Listen for text selection in blog content
  useEffect(() => {
    const content = document.querySelector('.blog-content');
    if (!content) return;

    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || !selection.toString().trim()) return;

      const range = selection.getRangeAt(0);
      if (!content.contains(range.commonAncestorContainer)) return;

      rangeRef.current = range.cloneRange();
      const rect = range.getBoundingClientRect();
      setPopup({ x: rect.left + rect.width / 2, y: rect.top - 8 });
    };

    content.addEventListener('mouseup', handleMouseUp);
    return () => content.removeEventListener('mouseup', handleMouseUp);
  }, []);

  // Dismiss popup on outside click
  useEffect(() => {
    const handleDown = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPopup(null);
        rangeRef.current = null;
      }
    };
    document.addEventListener('mousedown', handleDown);
    return () => document.removeEventListener('mousedown', handleDown);
  }, []);

  const handleHighlight = useCallback(() => {
    const range = rangeRef.current;
    if (!range) return;

    const text = range.toString().trim();
    if (!text) return;

    if (range.startContainer === range.endContainer && range.startContainer.nodeType === Node.TEXT_NODE) {
      try {
        const mark = document.createElement('mark');
        mark.className = 'blog-highlight';
        range.surroundContents(mark);
      } catch {
        highlightRange(range);
      }
    } else {
      highlightRange(range);
    }

    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      const highlights: HighlightEntry[] = saved.highlights || [];
      highlights.push({ text });
      saved.highlights = highlights;
      localStorage.setItem(storageKey, JSON.stringify(saved));
    } catch {}

    window.getSelection()?.removeAllRanges();
    rangeRef.current = null;
    setPopup(null);
  }, [storageKey]);

  if (!popup) return null;

  return (
    <div
      ref={popupRef}
      style={{
        position: 'fixed',
        left: popup.x,
        top: popup.y,
        transform: 'translate(-50%, -100%)',
        zIndex: 9100,
        animation: 'highlight-popup-in 0.15s ease-out',
      }}
    >
      <button
        onClick={handleHighlight}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(30,30,30,0.95)] backdrop-blur-lg border border-white/10 rounded-lg text-white/70 font-mono text-[11px] cursor-pointer transition-all duration-150 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#F95F4A]/15 hover:text-[#F95F4A] hover:border-[#F95F4A]/30"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
        Highlight
      </button>
    </div>
  );
}
