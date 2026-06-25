import { useState, useEffect, useCallback, useRef } from 'react';

interface Props {
  slug: string;
}

interface HighlightEntry {
  id?: string;
  text: string;
  color?: string;
}

const HIGHLIGHT_COLORS = [
  { name: 'Orange', value: '#F95F4A' },
  { name: 'Purple', value: '#9B51E0' },
  { name: 'Green', value: '#B4E35B' },
  { name: 'Pink', value: '#FF7777' },
  { name: 'Dark green', value: '#008080' },
  { name: 'Blue', value: '#9AF3FF' },
] as const;

const DEFAULT_HIGHLIGHT_COLOR = HIGHLIGHT_COLORS[0].value;

function createHighlightId(): string {
  return crypto.randomUUID?.() || `highlight-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function applyHighlightStyle(mark: HTMLElement, color = DEFAULT_HIGHLIGHT_COLOR, id?: string): void {
  mark.className = 'blog-highlight'; // styled in blog.css (JS-applied, cannot be Tailwind)
  mark.style.setProperty('--blog-highlight-color', color);
  if (id) mark.dataset.highlightId = id;
}

function unwrapHighlight(mark: HTMLElement): void {
  const parent = mark.parentNode;
  if (!parent) return;

  while (mark.firstChild) {
    parent.insertBefore(mark.firstChild, mark);
  }
  parent.removeChild(mark);
  parent.normalize();
}

/** Highlight each text node in a range individually (safe for multi-node selections). */
function highlightRange(range: Range, color = DEFAULT_HIGHLIGHT_COLOR, id?: string): void {
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
      applyHighlightStyle(mark, color, id);
      nodeRange.surroundContents(mark);
    } catch {}
  }
}

export default function TextHighlighter({ slug }: Props) {
  const [popup, setPopup] = useState<{ x: number; y: number } | null>(null);
  const [removePopup, setRemovePopup] = useState<{ x: number; y: number } | null>(null);
  const rangeRef  = useRef<Range | null>(null);
  const highlightRef = useRef<HTMLElement | null>(null);
  const popupRef  = useRef<HTMLDivElement>(null);
  const removePopupRef = useRef<HTMLDivElement>(null);
  const removeHideTimeoutRef = useRef<number | null>(null);
  const storageKey = `acm-blog-${slug}`;

  const clearRemoveHideTimeout = useCallback(() => {
    if (removeHideTimeoutRef.current === null) return;
    window.clearTimeout(removeHideTimeoutRef.current);
    removeHideTimeoutRef.current = null;
  }, []);

  const hideRemovePopup = useCallback(() => {
    clearRemoveHideTimeout();
    setRemovePopup(null);
    highlightRef.current = null;
  }, [clearRemoveHideTimeout]);

  const scheduleRemovePopupHide = useCallback(() => {
    if (removeHideTimeoutRef.current !== null) return;
    removeHideTimeoutRef.current = window.setTimeout(() => {
      removeHideTimeoutRef.current = null;
      setRemovePopup(null);
      highlightRef.current = null;
    }, 220);
  }, []);

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
              applyHighlightStyle(mark, h.color, h.id);
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

  // Show a small remove affordance when hovering an existing highlight.
  useEffect(() => {
    const content = document.querySelector('.blog-content');
    if (!content) return;

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const mark = target?.closest('mark.blog-highlight') as HTMLElement | null;
      if (!mark || !content.contains(mark)) return;

      const rect = mark.getBoundingClientRect();
      clearRemoveHideTimeout();
      highlightRef.current = mark;
      setRemovePopup({
        x: rect.left + rect.width / 2,
        y: rect.top - 4,
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (
        highlightRef.current?.contains(target) ||
        removePopupRef.current?.contains(target)
      ) {
        clearRemoveHideTimeout();
        return;
      }

      scheduleRemovePopupHide();
    };

    content.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointermove', handlePointerMove);

    return () => {
      content.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointermove', handlePointerMove);
      clearRemoveHideTimeout();
    };
  }, [clearRemoveHideTimeout, scheduleRemovePopupHide]);

  const handleHighlight = useCallback((color = DEFAULT_HIGHLIGHT_COLOR) => {
    const range = rangeRef.current;
    if (!range) return;

    const text = range.toString().trim();
    if (!text) return;
    const id = createHighlightId();

    if (range.startContainer === range.endContainer && range.startContainer.nodeType === Node.TEXT_NODE) {
      try {
        const mark = document.createElement('mark');
        applyHighlightStyle(mark, color, id);
        range.surroundContents(mark);
      } catch {
        highlightRange(range, color, id);
      }
    } else {
      highlightRange(range, color, id);
    }

    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      const highlights: HighlightEntry[] = saved.highlights || [];
      highlights.push({ id, text, color });
      saved.highlights = highlights;
      localStorage.setItem(storageKey, JSON.stringify(saved));
    } catch {}

    window.getSelection()?.removeAllRanges();
    rangeRef.current = null;
    setPopup(null);
  }, [storageKey]);

  const handleRemoveHighlight = useCallback(() => {
    const mark = highlightRef.current;
    if (!mark) return;

    const id = mark.dataset.highlightId;
    const text = mark.textContent?.trim() || '';
    const marks = id
      ? Array.from(document.querySelectorAll<HTMLElement>('mark.blog-highlight'))
          .filter((highlight) => highlight.dataset.highlightId === id)
      : [mark];

    marks.forEach(unwrapHighlight);

    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      const highlights: HighlightEntry[] = saved.highlights || [];
      let removed = false;
      saved.highlights = highlights.filter((highlight) => {
        if (id && highlight.id === id) return false;
        if (!id && !removed && highlight.text === text) {
          removed = true;
          return false;
        }
        return true;
      });
      localStorage.setItem(storageKey, JSON.stringify(saved));
    } catch {}

    hideRemovePopup();
  }, [hideRemovePopup, storageKey]);

  if (!popup && !removePopup) return null;

  return (
    <>
      {popup && (
        <div
          ref={popupRef}
          className="blog-highlight-popup"
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
            onClick={() => handleHighlight(DEFAULT_HIGHLIGHT_COLOR)}
            className="blog-highlight-action"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Highlight
          </button>
          <div className="blog-highlight-swatches" aria-label="Highlight color">
            {HIGHLIGHT_COLORS.map((color) => (
              <button
                key={color.value}
                type="button"
                className="blog-highlight-swatch"
                style={{ backgroundColor: color.value }}
                aria-label={`${color.name} highlight`}
                title={color.name}
                onClick={() => handleHighlight(color.value)}
              />
            ))}
          </div>
        </div>
      )}

      {removePopup && (
        <div
          ref={removePopupRef}
          className="blog-highlight-remove-popup"
          onPointerEnter={clearRemoveHideTimeout}
          onPointerLeave={scheduleRemovePopupHide}
          style={{
            position: 'fixed',
            left: removePopup.x,
            top: removePopup.y,
            transform: 'translate(-50%, -100%)',
            zIndex: 9100,
            animation: 'highlight-popup-in 0.12s ease-out',
          }}
        >
          <button
            type="button"
            className="blog-highlight-remove-action"
            onClick={handleRemoveHighlight}
          >
            Remove highlight
          </button>
        </div>
      )}
    </>
  );
}
