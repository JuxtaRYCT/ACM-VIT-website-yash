# Graph Report - src  (2026-06-25)

## Corpus Check
- 87 files · ~67,796 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 278 nodes · 530 edges · 20 communities (13 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Blog Content Pipeline|Blog Content Pipeline]]
- [[_COMMUNITY_Site Layout & Sections|Site Layout & Sections]]
- [[_COMMUNITY_Animations & Core Pages|Animations & Core Pages]]
- [[_COMMUNITY_Events System|Events System]]
- [[_COMMUNITY_Blog UI Components|Blog UI Components]]
- [[_COMMUNITY_Event Calendar|Event Calendar]]
- [[_COMMUNITY_Dome Gallery|Dome Gallery]]
- [[_COMMUNITY_Blog Carousel|Blog Carousel]]
- [[_COMMUNITY_Contact Form|Contact Form]]
- [[_COMMUNITY_Astro Branding|Astro Branding]]
- [[_COMMUNITY_Board Members Data|Board Members Data]]
- [[_COMMUNITY_Events Data|Events Data]]
- [[_COMMUNITY_Partners Data|Partners Data]]
- [[_COMMUNITY_Blog Data|Blog Data]]
- [[_COMMUNITY_Domains Data|Domains Data]]
- [[_COMMUNITY_Projects Data|Projects Data]]
- [[_COMMUNITY_Speaker Data|Speaker Data]]

## God Nodes (most connected - your core abstractions)
1. `getAssetUrl()` - 23 edges
2. `../layouts/Layout.astro` - 16 edges
3. `parseRss()` - 11 edges
4. `../styles/globals.css` - 11 edges
5. `../components/ui/LegendPins.astro` - 9 edges
6. `../layouts/Footer.astro` - 9 edges
7. `../components/ui/AnimatedButton.astro` - 8 edges
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
- `getHashnodeContent()` --calls--> `parseRss()`  [EXTRACTED]
  lib/blog/hashnode.ts → lib/blog/rssParser.ts

## Import Cycles
- None detected.

## Communities (20 total, 7 thin omitted)

### Community 0 - "Blog Content Pipeline"
Cohesion: 0.08
Nodes (38): GET(), enhanceImages(), extractHeadings(), injectHeadingIds(), processContent(), slugify(), cleanContentHtml(), extractSlug() (+30 more)

### Community 1 - "Site Layout & Sections"
Cohesion: 0.11
Nodes (25): ../layouts/Footer.astro, ../layouts/Layout.astro, lottie-web/build/player/lottie_light, ../components/overlays/ProofGallery.astro, pdfUrl, projects, members, marqueeRows (+17 more)

### Community 2 - "Animations & Core Pages"
Cohesion: 0.10
Nodes (18): gsap/Flip, ./Header.astro, projectsData, rawEndpoint, gsap/ScrambleTextPlugin, gsap/ScrollTrigger, acmwBoardMembers, facultyCoordinator (+10 more)

### Community 3 - "Events System"
Cohesion: 0.06
Nodes (30): EventDetail, eventDetails, EventFaq, EventHighlight, EventPrize, EventScheduleItem, eventSlugs, EventStat (+22 more)

### Community 4 - "Blog UI Components"
Cohesion: 0.08
Nodes (18): ../../components/blog/BentoGrid.astro, leftPosts, rightPosts, formattedDate, LISTENING_SPEED_OPTIONS, Props, ../../components/blog/BlogList.astro, ../../../components/blog/ReadingProgress.astro (+10 more)

### Community 5 - "Event Calendar"
Cohesion: 0.17
Nodes (8): DAYS, EventDetailCard(), formatTime(), MONTHS, CalendarEvent, DOMAIN_COLORS, EventDomain, SAMPLE_EVENTS

### Community 6 - "Dome Gallery"
Cohesion: 0.15
Nodes (5): DEFAULT_IMAGES, DEFAULTS, DomeGalleryProps, ImageItem, ItemDef

### Community 7 - "Blog Carousel"
Cohesion: 0.22
Nodes (11): cards, dotsContainer, handlePointerDown(), handlePointerUp(), isMobileView(), nextBtn, prevBtn, track (+3 more)

### Community 8 - "Contact Form"
Cohesion: 0.33
Nodes (10): clampFrame(), form, initSequence(), loadFrame(), queueFrames(), render(), resizeCanvas(), schedulePreloadAll() (+2 more)

### Community 9 - "Astro Branding"
Cohesion: 0.40
Nodes (5): Red-to-Purple Gradient (#D83333 to #F041FF), Astro Framework Logo SVG, Astro Rocket/Flame Icon, Astro Wordmark Text, Astro Web Framework

## Knowledge Gaps
- **79 isolated node(s):** `leftPosts`, `rightPosts`, `formattedDate`, `Props`, `LISTENING_SPEED_OPTIONS` (+74 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getAssetUrl()` connect `Site Layout & Sections` to `Animations & Core Pages`, `Events System`, `Blog UI Components`, `Blog Carousel`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Why does `../layouts/Layout.astro` connect `Site Layout & Sections` to `Animations & Core Pages`, `Events System`, `Blog UI Components`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `../styles/globals.css` connect `Site Layout & Sections` to `Animations & Core Pages`, `Events System`, `Blog UI Components`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **What connects `leftPosts`, `rightPosts`, `formattedDate` to the rest of the system?**
  _79 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Blog Content Pipeline` be split into smaller, more focused modules?**
  _Cohesion score 0.08489795918367347 - nodes in this community are weakly interconnected._
- **Should `Site Layout & Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.10606060606060606 - nodes in this community are weakly interconnected._
- **Should `Animations & Core Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.09581646423751687 - nodes in this community are weakly interconnected._