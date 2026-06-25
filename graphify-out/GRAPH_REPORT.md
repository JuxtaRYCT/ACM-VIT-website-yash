# Graph Report - .  (2026-06-25)

## Corpus Check
- Large corpus: 857 files · ~10,259,821 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 396 nodes · 664 edges · 32 communities (23 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.86)
- Token cost: 56,501 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Site Layout & Navigation|Site Layout & Navigation]]
- [[_COMMUNITY_Blog Content Pipeline|Blog Content Pipeline]]
- [[_COMMUNITY_Event Details Data|Event Details Data]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_GREP Newsletter Content|GREP Newsletter Content]]
- [[_COMMUNITY_Medium Blog Integration|Medium Blog Integration]]
- [[_COMMUNITY_Event Calendar UI|Event Calendar UI]]
- [[_COMMUNITY_CDN & S3 Upload|CDN & S3 Upload]]
- [[_COMMUNITY_Blog Carousel Section|Blog Carousel Section]]
- [[_COMMUNITY_Dome Gallery Component|Dome Gallery Component]]
- [[_COMMUNITY_Contact Form & Animation|Contact Form & Animation]]
- [[_COMMUNITY_Blog Dock Controls|Blog Dock Controls]]
- [[_COMMUNITY_Text Highlighter|Text Highlighter]]
- [[_COMMUNITY_R2 Upload Script|R2 Upload Script]]
- [[_COMMUNITY_Blog Grid Layout|Blog Grid Layout]]
- [[_COMMUNITY_Newsletter Tech Finds|Newsletter Tech Finds]]
- [[_COMMUNITY_Image Conversion Script|Image Conversion Script]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Scroll Video Player|Scroll Video Player]]
- [[_COMMUNITY_Board Members Data|Board Members Data]]
- [[_COMMUNITY_Events Cassette Data|Events Cassette Data]]
- [[_COMMUNITY_Partners Data|Partners Data]]
- [[_COMMUNITY_Astro Config|Astro Config]]
- [[_COMMUNITY_Blog Data Config|Blog Data Config]]
- [[_COMMUNITY_Domains Data Config|Domains Data Config]]
- [[_COMMUNITY_Projects Data Config|Projects Data Config]]
- [[_COMMUNITY_Speakers Data Config|Speakers Data Config]]
- [[_COMMUNITY_ACM-W Section|ACM-W Section]]

## God Nodes (most connected - your core abstractions)
1. `getAssetUrl()` - 23 edges
2. `ACM-VIT Student Chapter` - 23 edges
3. `../layouts/Layout.astro` - 16 edges
4. `parseRss()` - 11 edges
5. `../styles/globals.css` - 11 edges
6. `../components/ui/LegendPins.astro` - 9 edges
7. `../layouts/Footer.astro` - 9 edges
8. `../components/ui/AnimatedButton.astro` - 8 edges
9. `reader` - 8 edges
10. `scripts` - 7 edges

## Surprising Connections (you probably didn't know these)
- `ACM-VIT Student Chapter` --semantically_similar_to--> `ACM-VIT Student Chapter`  [INFERRED] [semantically similar]
  README.md → public/docs/grep-v0.pdf
- `Manan Shah` --semantically_similar_to--> `Manan Shah`  [INFERRED] [semantically similar]
  README.md → public/docs/grep-v0.pdf
- `ACM VIT Website` --conceptually_related_to--> `GREP v0 Newsletter`  [INFERRED]
  README.md → public/docs/grep-v0.pdf
- `fetchFromRss()` --calls--> `parseRss()`  [EXTRACTED]
  src/lib/blog/hashnode.ts → src/lib/blog/rssParser.ts
- `fetchContentFromRss()` --calls--> `parseRss()`  [EXTRACTED]
  src/lib/blog/hashnode.ts → src/lib/blog/rssParser.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **ACM-VIT Flagship Events Portfolio** — docs_grep_v0_code2create, docs_grep_v0_reverse_coding, docs_grep_v0_cryptic_hunt, docs_grep_v0_codart, docs_grep_v0_code_plus_plus, docs_grep_v0_apptitude, docs_grep_v0_forktober [EXTRACTED 1.00]
- **ACM-VIT Project Cycle Products** — docs_grep_v0_examcooker, docs_grep_v0_cli_rpg, docs_grep_v0_unipool, docs_grep_v0_acmone, docs_grep_v0_os_portal, docs_grep_v0_localhost_portal [EXTRACTED 1.00]
- **LocalHost Finds Curated Tech Discoveries** — docs_grep_v0_localhost_finds, docs_grep_v0_seal, docs_grep_v0_wilson_lin_search_engine, docs_grep_v0_vercel_cloudinary [EXTRACTED 1.00]

## Communities (32 total, 9 thin omitted)

### Community 0 - "Site Layout & Navigation"
Cohesion: 0.07
Nodes (38): featuredPosts, ../layouts/Footer.astro, ./Header.astro, ../layouts/Layout.astro, lottie-web/build/player/lottie_light, ../components/overlays/ProofGallery.astro, pdfUrl, projectsData (+30 more)

### Community 1 - "Blog Content Pipeline"
Cohesion: 0.08
Nodes (34): GET(), enhanceImages(), extractHeadings(), injectHeadingIds(), processContent(), slugify(), balanceHtmlFragment(), cleanContentHtml() (+26 more)

### Community 2 - "Event Details Data"
Cohesion: 0.06
Nodes (30): EventDetail, eventDetails, EventFaq, EventHighlight, EventPrize, EventScheduleItem, eventSlugs, EventStat (+22 more)

### Community 3 - "Package Dependencies"
Cohesion: 0.06
Nodes (35): dependencies, astro, astro-liquid-glass, @astrojs/cloudflare, @astrojs/react, gsap, @keystatic/astro, @keystatic/core (+27 more)

### Community 4 - "GREP Newsletter Content"
Cohesion: 0.07
Nodes (34): Association for Computing Machinery (ACM), ACM-VIT Student Chapter, ACM-W (ACM Women), ACMOne, Apptitude, CLI-RPG, Codart, Code2Create Hackathon (+26 more)

### Community 5 - "Medium Blog Integration"
Cohesion: 0.16
Nodes (18): applyMarkups(), ARCHIVE_POSTS, cleanMediumHtml(), escapeHtml(), fetchContentFromJson(), fetchFromRss(), fetchFromStreamApi(), getMediumContent() (+10 more)

### Community 6 - "Event Calendar UI"
Cohesion: 0.17
Nodes (8): DAYS, EventDetailCard(), formatTime(), MONTHS, CalendarEvent, DOMAIN_COLORS, EventDomain, SAMPLE_EVENTS

### Community 7 - "CDN & S3 Upload"
Cohesion: 0.14
Nodes (9): AWS_CONFIG, cloudfrontClient, errors, getMimeType(), limit, NO_CACHE_EXTENSIONS, normalizeS3Key(), s3Client (+1 more)

### Community 8 - "Blog Carousel Section"
Cohesion: 0.22
Nodes (11): cards, dotsContainer, handlePointerDown(), handlePointerUp(), isMobileView(), nextBtn, prevBtn, track (+3 more)

### Community 9 - "Dome Gallery Component"
Cohesion: 0.15
Nodes (5): DEFAULT_IMAGES, DEFAULTS, DomeGalleryProps, ImageItem, ItemDef

### Community 10 - "Contact Form & Animation"
Cohesion: 0.33
Nodes (10): clampFrame(), form, initSequence(), loadFrame(), queueFrames(), render(), resizeCanvas(), schedulePreloadAll() (+2 more)

### Community 11 - "Blog Dock Controls"
Cohesion: 0.24
Nodes (6): ElasticSpeedSlider(), formatSpeed(), LISTENING_SPEED_OPTIONS, nearestSpeedIndex(), Props, gsap/Flip

### Community 12 - "Text Highlighter"
Cohesion: 0.25
Nodes (5): applyHighlightStyle(), HIGHLIGHT_COLORS, HighlightEntry, highlightRange(), Props

### Community 13 - "R2 Upload Script"
Cohesion: 0.29
Nodes (6): __dirname, DIST_DIR, __filename, getFiles(), main(), s3Client

### Community 14 - "Blog Grid Layout"
Cohesion: 0.33
Nodes (6): ../../components/blog/BentoGrid.astro, leftPosts, rightPosts, formattedDate, ../../components/blog/BlogList.astro, ../../../lib/blog/types

### Community 15 - "Newsletter Tech Finds"
Cohesion: 0.50
Nodes (4): LocalHost Finds, Self-Adapting Language Models (SEAL), Vercel Cloudinary DNS Legacy, Wilson Lin Search Engine

### Community 16 - "Image Conversion Script"
Cohesion: 0.83
Nodes (3): convert_with_ffmpeg(), convert_with_im(), image-update.sh script

### Community 17 - "TypeScript Config"
Cohesion: 0.50
Nodes (3): exclude, extends, include

### Community 18 - "Scroll Video Player"
Cohesion: 0.83
Nodes (4): ../components/ui/ScrollVideo.astro, createPlaybackScrubber(), createVideoScrubber(), initScrollVideo()

## Knowledge Gaps
- **143 isolated node(s):** `cdnUrl`, `name`, `type`, `packageManager`, `version` (+138 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `gsap` connect `Package Dependencies` to `Site Layout & Navigation`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Why does `getAssetUrl()` connect `Site Layout & Navigation` to `Blog Carousel Section`, `Blog Content Pipeline`, `Event Details Data`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **What connects `cdnUrl`, `name`, `type` to the rest of the system?**
  _143 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Site Layout & Navigation` be split into smaller, more focused modules?**
  _Cohesion score 0.0745945945945946 - nodes in this community are weakly interconnected._
- **Should `Blog Content Pipeline` be split into smaller, more focused modules?**
  _Cohesion score 0.08350951374207188 - nodes in this community are weakly interconnected._
- **Should `Event Details Data` be split into smaller, more focused modules?**
  _Cohesion score 0.06349206349206349 - nodes in this community are weakly interconnected._
- **Should `Package Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._