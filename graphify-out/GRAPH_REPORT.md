# Graph Report - .  (2026-07-01)

## Corpus Check
- Large corpus: 1785 files · ~13,865,606 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 683 nodes · 1278 edges · 39 communities (31 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Variant Host Page Templates|Variant Host Page Templates]]
- [[_COMMUNITY_TeamBoard Roster Data|Team/Board Roster Data]]
- [[_COMMUNITY_Event Details Data Model|Event Details Data Model]]
- [[_COMMUNITY_Gallery Scroll-Video Rendering|Gallery Scroll-Video Rendering]]
- [[_COMMUNITY_Project Dependencies (package.json)|Project Dependencies (package.json)]]
- [[_COMMUNITY_Research Domain Tools|Research Domain Tools]]
- [[_COMMUNITY_Forktober Projects Data|Forktober Projects Data]]
- [[_COMMUNITY_ACM-VIT ChapterEvents (Knowledge)|ACM-VIT Chapter/Events (Knowledge)]]
- [[_COMMUNITY_Calendar UI Components|Calendar UI Components]]
- [[_COMMUNITY_Achievements & z0d1ak Team|Achievements & z0d1ak Team]]
- [[_COMMUNITY_Mobile Navbar & Cassette UI|Mobile Navbar & Cassette UI]]
- [[_COMMUNITY_Design Domain Tools|Design Domain Tools]]
- [[_COMMUNITY_Blog Dock Audio Player|Blog Dock Audio Player]]
- [[_COMMUNITY_Blog Content Pipeline|Blog Content Pipeline]]
- [[_COMMUNITY_Blog Feed Components|Blog Feed Components]]
- [[_COMMUNITY_Cassette Audio Player|Cassette Audio Player]]
- [[_COMMUNITY_Hashnode Blog Import|Hashnode Blog Import]]
- [[_COMMUNITY_Medium Blog Import|Medium Blog Import]]
- [[_COMMUNITY_Dome Gallery Component|Dome Gallery Component]]
- [[_COMMUNITY_Competitive Coding Domain Data|Competitive Coding Domain Data]]
- [[_COMMUNITY_Management Domain Data|Management Domain Data]]
- [[_COMMUNITY_RSS Parser Utility|RSS Parser Utility]]
- [[_COMMUNITY_Cassette Builder Tool|Cassette Builder Tool]]
- [[_COMMUNITY_Blogs Marquee Scroller|Blogs Marquee Scroller]]
- [[_COMMUNITY_Calendar Events Data|Calendar Events Data]]
- [[_COMMUNITY_External Reference Links|External Reference Links]]
- [[_COMMUNITY_Image Conversion Script|Image Conversion Script]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Board Members Data|Board Members Data]]
- [[_COMMUNITY_Events Data & Cassettes|Events Data & Cassettes]]
- [[_COMMUNITY_Partners Data|Partners Data]]
- [[_COMMUNITY_Astro Config (CDN)|Astro Config (CDN)]]
- [[_COMMUNITY_Blog Data Aggregator|Blog Data Aggregator]]
- [[_COMMUNITY_Domains Config|Domains Config]]
- [[_COMMUNITY_Projects Data|Projects Data]]
- [[_COMMUNITY_Speaker Data|Speaker Data]]

## God Nodes (most connected - your core abstractions)
1. `../layouts/Layout.astro` - 47 edges
2. `../styles/globals.css` - 44 edges
3. `getAssetUrl()` - 44 edges
4. `../layouts/Footer.astro` - 39 edges
5. `../components/calendar/EventCalendar.astro` - 31 edges
6. `../components/ui/MobileNavbar.astro` - 28 edges
7. `../components/ui/ScrollVideo.astro` - 26 edges
8. `[]` - 26 edges
9. `[]` - 24 edges
10. `ACM-VIT Student Chapter` - 23 edges

## Surprising Connections (you probably didn't know these)
- `ACM-VIT Student Chapter` --semantically_similar_to--> `ACM-VIT Student Chapter`  [INFERRED] [semantically similar]
  README.md → public/docs/grep-v0.pdf
- `Manan Shah` --semantically_similar_to--> `Manan Shah`  [INFERRED] [semantically similar]
  README.md → public/docs/grep-v0.pdf
- `ACM VIT Website` --conceptually_related_to--> `GREP v0 Newsletter`  [INFERRED]
  README.md → public/docs/grep-v0.pdf
- `main()` --calls--> `Stat`  [INFERRED]
  scripts/upload-r2.mjs → src/data/achievementsData.ts
- `fetchFromRss()` --calls--> `parseRss()`  [EXTRACTED]
  src/lib/blog/hashnode.ts → src/lib/blog/rssParser.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **ACM-VIT Flagship Events Portfolio** — docs_grep_v0_code2create, docs_grep_v0_reverse_coding, docs_grep_v0_cryptic_hunt, docs_grep_v0_codart, docs_grep_v0_code_plus_plus, docs_grep_v0_apptitude, docs_grep_v0_forktober [EXTRACTED 1.00]
- **ACM-VIT Project Cycle Products** — docs_grep_v0_examcooker, docs_grep_v0_cli_rpg, docs_grep_v0_unipool, docs_grep_v0_acmone, docs_grep_v0_os_portal, docs_grep_v0_localhost_portal [EXTRACTED 1.00]
- **LocalHost Finds Curated Tech Discoveries** — docs_grep_v0_localhost_finds, docs_grep_v0_seal, docs_grep_v0_wilson_lin_search_engine, docs_grep_v0_vercel_cloudinary [EXTRACTED 1.00]

## Communities (39 total, 8 thin omitted)

### Community 0 - "Variant Host Page Templates"
Cohesion: 0.06
Nodes (36): items, gsap/Flip, ../layouts/Footer.astro, ./Header.astro, ../layouts/Layout.astro, projectsData, btn, cards (+28 more)

### Community 1 - "Team/Board Roster Data"
Cohesion: 0.07
Nodes (41): boardDivision, getDivisionMembers(), TeamDivisionDef, teamDivisions, TeamMember, TeamYear, teamYears, pdfUrl (+33 more)

### Community 2 - "Event Details Data Model"
Cohesion: 0.06
Nodes (33): EventCollectibleItem, EventCollectibleYear, EventDetail, eventDetails, EventEditionLink, EventFaq, EventHighlight, EventPastEdition (+25 more)

### Community 3 - "Gallery Scroll-Video Rendering"
Cohesion: 0.06
Nodes (23): ../components/ui/ScrollVideo.astro, darkCount, drawAt(), drawCover(), framesRoot, lightCount, normalizedLightWebmSrc, normalizedWebmSrc (+15 more)

### Community 4 - "Project Dependencies (package.json)"
Cohesion: 0.05
Nodes (37): dependencies, astro, astro-liquid-glass, @astrojs/cloudflare, @astrojs/react, gsap, @hookform/resolvers, @keystatic/astro (+29 more)

### Community 5 - "Research Domain Tools"
Cohesion: 0.08
Nodes (28): ../../components/ToolCard.astro, iconUrl, ResearchAOI, researchAOIs, researchDescription, researchStats, ResearchTool, researchTools (+20 more)

### Community 6 - "Forktober Projects Data"
Cohesion: 0.07
Nodes (30): forktoberByYear, ForktoberMeta, forktoberProjectDetails, forktoberSlugs, forktoberYears, byName, getProjectCassetteByTitle(), GridProject (+22 more)

### Community 7 - "ACM-VIT Chapter/Events (Knowledge)"
Cohesion: 0.07
Nodes (34): Association for Computing Machinery (ACM), ACM-VIT Student Chapter, ACM-W (ACM Women), ACMOne, Apptitude, CLI-RPG, Codart, Code2Create Hackathon (+26 more)

### Community 8 - "Calendar UI Components"
Cohesion: 0.09
Nodes (28): ../components/calendar/CalendarAgenda.astro, ../components/calendar/EventCalendar.astro, buildMonthGrid(), buildWeekGrid(), currentDate, DAYS, escapeHtml(), formatTime() (+20 more)

### Community 9 - "Achievements & z0d1ak Team"
Cohesion: 0.09
Nodes (25): ../data/achievementsData.ts, Achievement, achievements, Stat, stats, ../data/z0d1akData.ts, Achievement, achievementLines (+17 more)

### Community 10 - "Mobile Navbar & Cassette UI"
Cohesion: 0.08
Nodes (21): ../components/ui/MobileNavbar.astro, cpNext, cpPlayG, cpPrev, cpSvgArtist, cpSvgTitle, eqWrap, moonIcon (+13 more)

### Community 11 - "Design Domain Tools"
Cohesion: 0.11
Nodes (19): DesignAOI, designAOIs, designDescription, designStats, DesignTool, designTools, aoiData, aoiTools (+11 more)

### Community 12 - "Blog Dock Audio Player"
Cohesion: 0.14
Nodes (14): ../../../components/blog/BlogDock.astro, commitDrag(), ctx, formatSpeed(), hideSpeedGroup(), LISTENING_SPEED_OPTIONS, nearestSpeedIndex(), renderDragVisual() (+6 more)

### Community 13 - "Blog Content Pipeline"
Cohesion: 0.24
Nodes (13): GET(), enhanceImages(), extractHeadings(), injectHeadingIds(), processContent(), slugify(), getAllPosts(), getBlogDates() (+5 more)

### Community 14 - "Blog Feed Components"
Cohesion: 0.15
Nodes (12): ../../components/blog/BentoGrid.astro, leftPosts, rightPosts, formattedDate, ../../components/blog/BlogList.astro, ../../../components/blog/ReadingProgress.astro, ../../../components/blog/TableOfContents.astro, ../../../components/blog/TextHighlighter.astro (+4 more)

### Community 15 - "Cassette Audio Player"
Cohesion: 0.14
Nodes (14): ../components/ui/CassettePlayer.astro, decay(), fmt(), icoPause, loadTrack(), miniNote, progBg, progHitArea (+6 more)

### Community 16 - "Hashnode Blog Import"
Cohesion: 0.22
Nodes (13): balanceHtmlFragment(), cleanContentHtml(), escapeAttr(), extractSlug(), fetchContentFromRss(), fetchFromRss(), fetchSitemapUrls(), getHashnodeContent() (+5 more)

### Community 17 - "Medium Blog Import"
Cohesion: 0.23
Nodes (11): applyMarkups(), ARCHIVE_POSTS, cleanMediumHtml(), escapeHtml(), fetchContentFromJson(), fetchFromRss(), fetchFromStreamApi(), getMediumContent() (+3 more)

### Community 18 - "Dome Gallery Component"
Cohesion: 0.15
Nodes (5): DEFAULT_IMAGES, DEFAULTS, DomeGalleryProps, ImageItem, ItemDef

### Community 19 - "Competitive Coding Domain Data"
Cohesion: 0.29
Nodes (7): ccDescription, CcEvent, ccEvents, ccStats, CcTool, ccTools, ../../data/ccDomainData

### Community 20 - "Management Domain Data"
Cohesion: 0.29
Nodes (7): mgmtDescription, MgmtEvent, mgmtEvents, mgmtStats, MgmtTool, mgmtTools, ../../data/managementDomainData

### Community 21 - "RSS Parser Utility"
Cohesion: 0.43
Nodes (7): attrValue(), decodeEntities(), extractCategories(), extractCoverImage(), parseRss(), RssItem, tagContent()

### Community 22 - "Cassette Builder Tool"
Cohesion: 0.25
Nodes (3): ../components/ui/CassetteBuilder.astro, PRESETS, state

### Community 23 - "Blogs Marquee Scroller"
Cohesion: 0.33
Nodes (5): loopBottom, loopTop, mid, rowBottom, rowTop

### Community 24 - "Calendar Events Data"
Cohesion: 0.40
Nodes (4): CalendarEvent, DOMAIN_COLORS, EventDomain, SAMPLE_EVENTS

### Community 25 - "External Reference Links"
Cohesion: 0.50
Nodes (4): LocalHost Finds, Self-Adapting Language Models (SEAL), Vercel Cloudinary DNS Legacy, Wilson Lin Search Engine

### Community 26 - "Image Conversion Script"
Cohesion: 0.83
Nodes (3): convert_with_ffmpeg(), convert_with_im(), image-update.sh script

### Community 27 - "TypeScript Config"
Cohesion: 0.50
Nodes (3): exclude, extends, include

## Knowledge Gaps
- **266 isolated node(s):** `cdnUrl`, `name`, `type`, `packageManager`, `version` (+261 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `../layouts/Layout.astro` connect `Variant Host Page Templates` to `Team/Board Roster Data`, `Event Details Data Model`, `Gallery Scroll-Video Rendering`, `Research Domain Tools`, `Forktober Projects Data`, `Achievements & z0d1ak Team`, `Design Domain Tools`, `Blog Feed Components`, `Cassette Audio Player`, `Competitive Coding Domain Data`, `Management Domain Data`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Why does `gsap` connect `Project Dependencies (package.json)` to `Variant Host Page Templates`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **What connects `cdnUrl`, `name`, `type` to the rest of the system?**
  _266 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Variant Host Page Templates` be split into smaller, more focused modules?**
  _Cohesion score 0.056790123456790124 - nodes in this community are weakly interconnected._
- **Should `Team/Board Roster Data` be split into smaller, more focused modules?**
  _Cohesion score 0.06713286713286713 - nodes in this community are weakly interconnected._
- **Should `Event Details Data Model` be split into smaller, more focused modules?**
  _Cohesion score 0.06463414634146342 - nodes in this community are weakly interconnected._
- **Should `Gallery Scroll-Video Rendering` be split into smaller, more focused modules?**
  _Cohesion score 0.06282051282051282 - nodes in this community are weakly interconnected._