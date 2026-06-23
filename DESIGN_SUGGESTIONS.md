# ACM-VIT Website — Design Improvement Suggestions

Inspired by [juanmora.co](https://juanmora.co/) and analyzing current state.

---

## 1. Typography & Hierarchy

**Problem:** Text sizes are relatively uniform across sections. Headlines don't command enough visual weight. Body text in sections like About, Code of Conduct, and Distinguished Speaker feels dense and same-sized.

**Suggestions:**
- Use much larger, bolder section headings (think 80-120px on desktop). Juan Mora uses massive type that fills the viewport width — "16 years making users click and scroll" takes up most of the screen.
- Introduce more contrast between heading weights (PolySans Bulky Wide for headlines, PolySans Slim for body). Right now too many elements use similar weight.
- Let headlines breathe — single powerful statement per viewport, not paragraphs.
- Consider split-text (character-level) reveal animations on major headings using GSAP SplitText.

---

## 2. Whitespace & Breathing Room

**Problem:** Sections feel packed together. The About section jumps into Outreach, then immediately into Award, Code of Conduct, and Distinguished Speaker — all dense content with minimal separation.

**Suggestions:**
- Double or triple vertical padding between major sections. Juan Mora uses 200-400px of vertical space between content blocks.
- Let single statements/quotes stand alone in their own viewport-height section (like "Because Tech Matters" already does — do more of this).
- The Outreach/SDG/Award/Code of Conduct/Distinguished Speaker block could benefit from more spacing. Currently they read like a wall of content.
- Partners grid is very dense — consider showing fewer partners larger, or an auto-scrolling marquee instead of a massive grid.

---

## 3. Scroll-Driven Animations

**Problem:** Most content appears statically. Only a few sections (Events, Hero) have scroll-driven behavior. Other sections just sit there.

**Suggestions:**
- Add scroll-triggered fade-up + slight translateY animations on section entry (staggered per element). Juan Mora reveals every element on scroll — nothing is visible until you get there.
- Parallax layers on images — background images move at different rates than foreground text.
- Progress-based opacity/scale on key visuals (project cassettes could scale up as they enter viewport).
- Section headings could animate in character-by-character or word-by-word.
- Consider clip-path reveals — content "unmasking" as you scroll into it.

---

## 4. Custom Cursor

**Problem:** Default browser cursor throughout.

**Suggestions:**
- Add a custom cursor (small dot + larger ring that follows with lerp dampening). Juan Mora uses this to great effect — it makes the entire experience feel crafted.
- Cursor could change state on hover over interactive elements (expand on links, blend-mode on images).
- Relatively easy to implement with GSAP and a couple of divs.

---

## 5. Color Transitions Between Sections

**Problem:** The entire site is dark (#0d0e0d) with orange accents. Visually monotone despite good content variety.

**Suggestions:**
- Juan Mora switches between dark and warm peach backgrounds as you scroll. ACM-VIT could do similar: dark sections → orange/warm section (like the Events cassette area already hints at) → back to dark.
- The ACM-W section could transition to a pink-tinted background instead of just pink text.
- Use Intersection Observer to dynamically shift the navbar theme (border color, bg tint) based on which section is active — already partially done but could be more dramatic.

---

## 6. Project Showcase

**Problem:** Projects are shown in a horizontal cassette-tape layout with long text blocks beside them. The cassettes are cool but the text walls reduce impact.

**Suggestions:**
- Take a bento-grid approach for projects (like Juan Mora's work section): large image tiles with project name overlaid, minimal text. Click/hover reveals details.
- Show project screenshots/mockups larger and more prominently — let the visuals sell, not paragraphs.
- Consider full-width project cards that take up the viewport, one at a time, with scroll-snapping between them.
- Add device mockups (laptop/phone frames) around project screenshots for polish.

---

## 7. Image Treatment

**Problem:** Images (board photos, outreach, gallery) appear as-is without consistent treatment.

**Suggestions:**
- Apply consistent image treatment: slight desaturation at rest, full color on hover/scroll-into-view.
- Add subtle parallax to images within their containers.
- Use clip-path or mask animations to reveal images as they scroll in.
- Gallery section could use a masonry or staggered grid with hover-zoom instead of the current layout.

---

## 8. Section Transitions

**Problem:** Sections just stack. No visual transitions between them.

**Suggestions:**
- Add gradient fades between sections (dark → transparent → next section bg).
- Consider diagonal or curved section dividers using SVG/clip-path.
- Use scroll-triggered color transitions where the background smoothly morphs as you cross section boundaries.

---

## 9. Loading & Page Enter

**Problem:** Preloader exists but page enter could be more cinematic.

**Suggestions:**
- After preloader, stagger-animate the hero elements (logo, headline, subtitle, CTA) with intentional delays.
- Juan Mora's page enter makes every element feel choreographed — nothing appears simultaneously.
- The navbar bubble drop is good — extend that philosophy to the hero content.

---

## 10. Footer

**Problem:** Footer is functional but dense (multi-column links + large "acm" text + social icons + copyright). Feels like a data dump.

**Suggestions:**
- Simplify footer. Large CTA statement ("Let's build something" or "Join ACM-VIT") followed by minimal links.
- Juan Mora's footer is just "Let's talk" + an arrow + contact info. Clean and inviting.
- Move detailed sitemap links into a separate page or make them discoverable on hover.

---

## 11. Micro-Interactions

**Problem:** Limited hover states. Nav items and megamenu tiles have hover effects, but most other interactive elements (buttons, links, cards) are static.

**Suggestions:**
- Buttons: scale + subtle shadow shift on hover, magnetic pull effect (button moves slightly toward cursor).
- Links: underline animation (draw-in from left) instead of instant color change.
- Cards/tiles: 3D tilt (already on megamenu — extend to project cards, team cards, partner logos).
- Social icons: playful bounce or rotate on hover.

---

## 12. Partners Section

**Problem:** Massive grid of 30+ partner logos. Overwhelming and breaks the flow.

**Suggestions:**
- Replace with an infinite auto-scrolling marquee (2-3 rows moving at different speeds). Much cleaner, more dynamic, takes less vertical space.
- Or show top 6-8 partners large, with a "View all partners" expandable.

---

## Priority Ranking (Impact vs Effort)

| Priority | Change | Impact | Effort |
|----------|--------|--------|--------|
| 1 | Scroll-triggered reveal animations | Huge | Medium |
| 2 | More whitespace between sections | Huge | Low |
| 3 | Larger, bolder typography hierarchy | High | Low |
| 4 | Section background color transitions | High | Medium |
| 5 | Custom cursor | High | Low |
| 6 | Partners → marquee | Medium | Low |
| 7 | Staggered hero entrance | Medium | Medium |
| 8 | Image clip-path reveals | Medium | Medium |
| 9 | Project section redesign | High | High |
| 10 | Footer simplification | Medium | Low |
| 11 | Enhanced micro-interactions | Medium | Medium |
| 12 | Section dividers/transitions | Low | Low |

---

*Reference: [juanmora.co](https://juanmora.co/) — built with Webflow, GSAP, Lenis smooth scroll, SplitText, custom cursor with lerp dampening, Intersection Observer for theme switching.*
