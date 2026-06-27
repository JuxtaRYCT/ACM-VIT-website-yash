# Graph Report - .  (2026-06-27)

## Corpus Check
- Large corpus: 875 files · ~10,372,379 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 411 nodes · 698 edges · 31 communities (22 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 29,566 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Blog System|Blog System]]
- [[_COMMUNITY_Domain Pages & Landing|Domain Pages & Landing]]
- [[_COMMUNITY_Layouts & Page Shells|Layouts & Page Shells]]
- [[_COMMUNITY_Event Details Data Model|Event Details Data Model]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_Hashnode Blog Fetcher|Hashnode Blog Fetcher]]
- [[_COMMUNITY_Cassette Music Player|Cassette Music Player]]
- [[_COMMUNITY_Event Calendar|Event Calendar]]
- [[_COMMUNITY_CDN Update Script|CDN Update Script]]
- [[_COMMUNITY_Blogs Carousel Section|Blogs Carousel Section]]
- [[_COMMUNITY_Dome Gallery|Dome Gallery]]
- [[_COMMUNITY_Blog Dock Speed Slider|Blog Dock Speed Slider]]
- [[_COMMUNITY_Contact Form Animation|Contact Form Animation]]
- [[_COMMUNITY_Cassette Builder|Cassette Builder]]
- [[_COMMUNITY_Text Highlighter|Text Highlighter]]
- [[_COMMUNITY_R2 Upload Script|R2 Upload Script]]
- [[_COMMUNITY_README & Contributors|README & Contributors]]
- [[_COMMUNITY_Image Conversion Script|Image Conversion Script]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Board Members Data|Board Members Data]]
- [[_COMMUNITY_Events Data|Events Data]]
- [[_COMMUNITY_Partners Data|Partners Data]]
- [[_COMMUNITY_Astro Logo Asset|Astro Logo Asset]]
- [[_COMMUNITY_Astro Config CDN|Astro Config CDN]]
- [[_COMMUNITY_Blog Data|Blog Data]]
- [[_COMMUNITY_Domains Data|Domains Data]]
- [[_COMMUNITY_Projects Data|Projects Data]]
- [[_COMMUNITY_Speaker Data|Speaker Data]]

## God Nodes (most connected - your core abstractions)
1. `../components/ui/CassettePlayer.astro` - 24 edges
2. `getAssetUrl()` - 24 edges
3. `../layouts/Layout.astro` - 22 edges
4. `../styles/globals.css` - 19 edges
5. `../layouts/Footer.astro` - 14 edges
6. `../components/ui/AnimatedButton.astro` - 11 edges
7. `parseRss()` - 11 edges
8. `reader` - 8 edges
9. `scripts` - 7 edges
10. `../components/ui/LegendPins.astro` - 7 edges

## Surprising Connections (you probably didn't know these)
- `getAllPosts()` --calls--> `getHashnodePosts()`  [EXTRACTED]
  src/lib/blog/index.ts → src/lib/blog/hashnode.ts
- `getPost()` --calls--> `getHashnodeContent()`  [EXTRACTED]
  src/lib/blog/index.ts → src/lib/blog/hashnode.ts
- `fetchFromRss()` --calls--> `parseRss()`  [EXTRACTED]
  src/lib/blog/medium.ts → src/lib/blog/rssParser.ts
- `getMediumContent()` --calls--> `parseRss()`  [EXTRACTED]
  src/lib/blog/medium.ts → src/lib/blog/rssParser.ts
- `getPost()` --calls--> `processContent()`  [EXTRACTED]
  src/lib/blog/index.ts → src/lib/blog/content.ts

## Import Cycles
- None detected.

## Communities (31 total, 9 thin omitted)

### Community 0 - "Blog System"
Cohesion: 0.07
Nodes (39): GET(), ../../components/blog/BentoGrid.astro, leftPosts, rightPosts, formattedDate, ../../components/blog/BlogList.astro, enhanceImages(), extractHeadings() (+31 more)

### Community 1 - "Domain Pages & Landing"
Cohesion: 0.09
Nodes (23): projectsData, rawEndpoint, gsap/ScrambleTextPlugin, gsap/ScrollTrigger, acmwBoardMembers, facultyCoordinator, mainBoardMembers, any (+15 more)

### Community 2 - "Layouts & Page Shells"
Cohesion: 0.11
Nodes (20): ../layouts/Footer.astro, ../layouts/Layout.astro, ../components/overlays/ProofGallery.astro, pdfUrl, projects, members, marqueeRows, ../components/ui/BlogsCard.astro (+12 more)

### Community 3 - "Event Details Data Model"
Cohesion: 0.06
Nodes (30): EventDetail, eventDetails, EventFaq, EventHighlight, EventPrize, EventScheduleItem, eventSlugs, EventStat (+22 more)

### Community 4 - "Package Dependencies"
Cohesion: 0.06
Nodes (34): dependencies, astro, astro-liquid-glass, @astrojs/cloudflare, @astrojs/react, gsap, @keystatic/astro, @keystatic/core (+26 more)

### Community 5 - "Hashnode Blog Fetcher"
Cohesion: 0.15
Nodes (20): balanceHtmlFragment(), cleanContentHtml(), escapeAttr(), extractSlug(), fetchContentFromRss(), fetchFromRss(), fetchSitemapUrls(), getHashnodeContent() (+12 more)

### Community 6 - "Cassette Music Player"
Cohesion: 0.09
Nodes (22): ../components/ui/CassettePlayer.astro, cassette, decay(), eq, fmt(), icoPause, icoPlay, mini (+14 more)

### Community 7 - "Event Calendar"
Cohesion: 0.17
Nodes (8): DAYS, EventDetailCard(), formatTime(), MONTHS, CalendarEvent, DOMAIN_COLORS, EventDomain, SAMPLE_EVENTS

### Community 8 - "CDN Update Script"
Cohesion: 0.14
Nodes (9): AWS_CONFIG, cloudfrontClient, errors, getMimeType(), limit, NO_CACHE_EXTENSIONS, normalizeS3Key(), s3Client (+1 more)

### Community 9 - "Blogs Carousel Section"
Cohesion: 0.22
Nodes (11): cards, dotsContainer, handlePointerDown(), handlePointerUp(), isMobileView(), nextBtn, prevBtn, track (+3 more)

### Community 10 - "Dome Gallery"
Cohesion: 0.15
Nodes (5): DEFAULT_IMAGES, DEFAULTS, DomeGalleryProps, ImageItem, ItemDef

### Community 11 - "Blog Dock Speed Slider"
Cohesion: 0.20
Nodes (7): ElasticSpeedSlider(), formatSpeed(), LISTENING_SPEED_OPTIONS, nearestSpeedIndex(), Props, gsap/Flip, ./Header.astro

### Community 12 - "Contact Form Animation"
Cohesion: 0.33
Nodes (10): clampFrame(), form, initSequence(), loadFrame(), queueFrames(), render(), resizeCanvas(), schedulePreloadAll() (+2 more)

### Community 13 - "Cassette Builder"
Cohesion: 0.29
Nodes (6): CassetteBuilder(), ColorRow(), contrastColor(), getStyles(), labelFontSize(), PRESETS

### Community 14 - "Text Highlighter"
Cohesion: 0.25
Nodes (5): applyHighlightStyle(), HIGHLIGHT_COLORS, HighlightEntry, highlightRange(), Props

### Community 15 - "R2 Upload Script"
Cohesion: 0.29
Nodes (6): __dirname, DIST_DIR, __filename, getFiles(), main(), s3Client

### Community 16 - "README & Contributors"
Cohesion: 0.29
Nodes (7): ACM-VIT Student Chapter, ACM VIT Website, Aditya Singh, Astro Framework, Manan Shah, pnpm Package Manager, Rishit Shivam

### Community 17 - "Image Conversion Script"
Cohesion: 0.83
Nodes (3): convert_with_ffmpeg(), convert_with_im(), image-update.sh script

### Community 18 - "TypeScript Config"
Cohesion: 0.50
Nodes (3): exclude, extends, include

## Knowledge Gaps
- **150 isolated node(s):** `cdnUrl`, `name`, `type`, `packageManager`, `version` (+145 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `../layouts/Layout.astro` connect `Layouts & Page Shells` to `Blog System`, `Domain Pages & Landing`, `Event Details Data Model`, `Cassette Music Player`, `Blog Dock Speed Slider`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **Why does `gsap` connect `Package Dependencies` to `Domain Pages & Landing`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **What connects `cdnUrl`, `name`, `type` to the rest of the system?**
  _150 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Blog System` be split into smaller, more focused modules?**
  _Cohesion score 0.0693815987933635 - nodes in this community are weakly interconnected._
- **Should `Domain Pages & Landing` be split into smaller, more focused modules?**
  _Cohesion score 0.08585858585858586 - nodes in this community are weakly interconnected._
- **Should `Layouts & Page Shells` be split into smaller, more focused modules?**
  _Cohesion score 0.1101010101010101 - nodes in this community are weakly interconnected._
- **Should `Event Details Data Model` be split into smaller, more focused modules?**
  _Cohesion score 0.06349206349206349 - nodes in this community are weakly interconnected._