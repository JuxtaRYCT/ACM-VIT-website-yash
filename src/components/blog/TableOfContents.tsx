import { useState, useEffect, useRef } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  headings: Heading[];
}

export default function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingElements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    if (headingElements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    headingElements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const minLevel = Math.min(...headings.map((h) => h.level));

  return (
    <nav
      className={`toc ${isHovered ? "toc--expanded" : ""}`}
      aria-label="Table of contents"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="toc__title">ON THIS PAGE</p>
      <ul className="toc__list">
        {headings.map((heading) => {
          const indent = heading.level - minLevel;
          const isActive = activeId === heading.id;
          const lineWidth = Math.min(
            Math.max(heading.text.length * 2.5, 24),
            100,
          );

          return (
            <li key={heading.id} className="toc__item">
              <a
                href={`#${heading.id}`}
                className={`toc__link ${isActive ? "toc__link--active" : ""}`}
                style={{ paddingLeft: `${indent * 12}px` }}
                onClick={(event) => {
                  event.preventDefault();
                  const target = document.getElementById(heading.id);
                  if (!target) return;

                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.replaceState(null, "", `#${heading.id}`);
                  setActiveId(heading.id);
                }}
              >
                <span
                  className="toc__line"
                  style={{ width: `${lineWidth}px` }}
                />
                <span className="toc__label">{heading.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
