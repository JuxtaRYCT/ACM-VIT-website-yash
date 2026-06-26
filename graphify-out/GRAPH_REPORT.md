# Graph Report - src  (2026-06-26)

## Corpus Check
- 95 files · ~73,668 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 300 nodes · 584 edges · 22 communities (15 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Blog Content Pipeline|Blog Content Pipeline]]
- [[_COMMUNITY_Core Layout & Pages|Core Layout & Pages]]
- [[_COMMUNITY_Animations & Home|Animations & Home]]
- [[_COMMUNITY_Event Details Data|Event Details Data]]
- [[_COMMUNITY_Blog UI Components|Blog UI Components]]
- [[_COMMUNITY_Event Calendar|Event Calendar]]
- [[_COMMUNITY_Dome Gallery|Dome Gallery]]
- [[_COMMUNITY_Blog Carousel|Blog Carousel]]
- [[_COMMUNITY_Blog Dock & Header|Blog Dock & Header]]
- [[_COMMUNITY_Contact Us Section|Contact Us Section]]
- [[_COMMUNITY_Text Highlighter|Text Highlighter]]
- [[_COMMUNITY_Astro Assets|Astro Assets]]
- [[_COMMUNITY_Board Members Data|Board Members Data]]
- [[_COMMUNITY_Events Data|Events Data]]
- [[_COMMUNITY_Partners Data|Partners Data]]
- [[_COMMUNITY_Blog Data|Blog Data]]
- [[_COMMUNITY_Domains Data|Domains Data]]
- [[_COMMUNITY_Projects Data|Projects Data]]
- [[_COMMUNITY_Speaker Data|Speaker Data]]

## God Nodes (most connected - your core abstractions)
1. `getAssetUrl()` - 25 edges
2. `../layouts/Layout.astro` - 20 edges
3. `../styles/globals.css` - 18 edges
4. `../layouts/Footer.astro` - 13 edges
5. `../components/ui/AnimatedButton.astro` - 11 edges
6. `parseRss()` - 11 edges
7. `../components/ui/LegendPins.astro` - 9 edges
8. `reader` - 8 edges
9. `../components/ui/ScrollVideo.astro` - 7 edges
10. `getAllPosts()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `GET()` --calls--> `getBlogDates()`  [EXTRACTED]
  pages/api/blog-dates.ts → lib/blog/index.ts
- `getPost()` --calls--> `processContent()`  [EXTRACTED]
  lib/blog/index.ts → lib/blog/content.ts
- `fetchFromRss()` --calls--> `parseRss()`  [EXTRACTED]
  lib/blog/hashnode.ts → lib/blog/rssParser.ts
- `getAllPosts()` --calls--> `getHashnodePosts()`  [EXTRACTED]
  lib/blog/index.ts → lib/blog/hashnode.ts
- `getPost()` --calls--> `getHashnodeContent()`  [EXTRACTED]
  lib/blog/index.ts → lib/blog/hashnode.ts

## Import Cycles
- None detected.

## Communities (22 total, 7 thin omitted)

### Community 0 - "Blog Content Pipeline"
Cohesion: 0.08
Nodes (44): GET(), enhanceImages(), extractHeadings(), injectHeadingIds(), processContent(), slugify(), balanceHtmlFragment(), cleanContentHtml() (+36 more)

### Community 1 - "Core Layout & Pages"
Cohesion: 0.10
Nodes (22): ../layouts/Footer.astro, ../layouts/Layout.astro, lottie-web/build/player/lottie_light, ../components/overlays/ProofGallery.astro, pdfUrl, projects, members, ../components/ui/AnimatedButton.astro (+14 more)

### Community 2 - "Animations & Home"
Cohesion: 0.11
Nodes (19): projectsData, rawEndpoint, gsap/ScrambleTextPlugin, gsap/ScrollTrigger, acmwBoardMembers, facultyCoordinator, mainBoardMembers, any (+11 more)

### Community 3 - "Event Details Data"
Cohesion: 0.06
Nodes (30): EventDetail, eventDetails, EventFaq, EventHighlight, EventPrize, EventScheduleItem, eventSlugs, EventStat (+22 more)

### Community 4 - "Blog UI Components"
Cohesion: 0.12
Nodes (15): ../../components/blog/BentoGrid.astro, leftPosts, rightPosts, formattedDate, ../../components/blog/BlogList.astro, ../../../components/blog/ReadingProgress.astro, Heading, Props (+7 more)

### Community 5 - "Event Calendar"
Cohesion: 0.17
Nodes (8): DAYS, EventDetailCard(), formatTime(), MONTHS, CalendarEvent, DOMAIN_COLORS, EventDomain, SAMPLE_EVENTS

### Community 6 - "Dome Gallery"
Cohesion: 0.15
Nodes (5): DEFAULT_IMAGES, DEFAULTS, DomeGalleryProps, ImageItem, ItemDef

### Community 7 - "Blog Carousel"
Cohesion: 0.22
Nodes (11): cards, dotsContainer, handlePointerDown(), handlePointerUp(), isMobileView(), nextBtn, prevBtn, track (+3 more)

### Community 8 - "Blog Dock & Header"
Cohesion: 0.20
Nodes (7): ElasticSpeedSlider(), formatSpeed(), LISTENING_SPEED_OPTIONS, nearestSpeedIndex(), Props, gsap/Flip, ./Header.astro

### Community 9 - "Contact Us Section"
Cohesion: 0.33
Nodes (10): clampFrame(), form, initSequence(), loadFrame(), queueFrames(), render(), resizeCanvas(), schedulePreloadAll() (+2 more)

### Community 10 - "Text Highlighter"
Cohesion: 0.25
Nodes (5): applyHighlightStyle(), HIGHLIGHT_COLORS, HighlightEntry, highlightRange(), Props

### Community 11 - "Astro Assets"
Cohesion: 0.40
Nodes (5): Red-to-Purple Gradient (#D83333 to #F041FF), Astro Framework Logo SVG, Astro Rocket/Flame Icon, Astro Wordmark Text, Astro Web Framework

## Knowledge Gaps
- **81 isolated node(s):** `leftPosts`, `rightPosts`, `formattedDate`, `Props`, `LISTENING_SPEED_OPTIONS` (+76 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getAssetUrl()` connect `Core Layout & Pages` to `Animations & Home`, `Event Details Data`, `Blog UI Components`, `Blog Carousel`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `../layouts/Layout.astro` connect `Core Layout & Pages` to `Blog Dock & Header`, `Animations & Home`, `Event Details Data`, `Blog UI Components`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Why does `../styles/globals.css` connect `Core Layout & Pages` to `Animations & Home`, `Event Details Data`, `Blog UI Components`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `leftPosts`, `rightPosts`, `formattedDate` to the rest of the system?**
  _81 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Blog Content Pipeline` be split into smaller, more focused modules?**
  _Cohesion score 0.07532467532467532 - nodes in this community are weakly interconnected._
- **Should `Core Layout & Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.10195035460992907 - nodes in this community are weakly interconnected._
- **Should `Animations & Home` be split into smaller, more focused modules?**
  _Cohesion score 0.10668563300142248 - nodes in this community are weakly interconnected._