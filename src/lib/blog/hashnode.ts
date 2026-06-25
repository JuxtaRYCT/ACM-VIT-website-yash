import { parseRss } from './rssParser';
import type { BlogPost } from './types';

const RSS_URL = 'https://blog.acmvit.in/rss.xml';
const SITEMAP_URL = 'https://blog.acmvit.in/sitemap.xml';
const BASE_URL = 'https://blog.acmvit.in';

/** Estimate reading time from HTML content. */
function estimateReadTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, '').trim();
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Extract slug from a Hashnode blog URL. */
function extractSlug(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    return pathname.replace(/^\/|\/$/g, '');
  } catch {
    return url.replace(/^\/|\/$/g, '');
  }
}

/** Fetch blog posts from Hashnode RSS feed. */
async function fetchFromRss(): Promise<BlogPost[]> {
  const res = await fetch(RSS_URL, {
    headers: { 'User-Agent': 'ACM-VIT-Website/1.0' },
  });
  if (!res.ok) return [];

  const xml = await res.text();
  const items = parseRss(xml);

  return items.map((item) => ({
    title: item.title,
    slug: extractSlug(item.link),
    source: 'hashnode' as const,
    url: item.link,
    publishedAt: new Date(item.pubDate).toISOString(),
    author: item.author || 'ACM-VIT',
    coverImage: item.coverImage,
    brief: item.description.replace(/<[^>]+>/g, '').slice(0, 300),
    readingTime: item.contentHtml
      ? estimateReadTime(item.contentHtml)
      : estimateReadTime(item.description),
    tags: item.categories,
  }));
}

/** Parse sitemap XML for blog post URLs with dates. */
async function fetchSitemapUrls(): Promise<{ url: string; date: string }[]> {
  const res = await fetch(SITEMAP_URL, {
    headers: { 'User-Agent': 'ACM-VIT-Website/1.0' },
  });
  if (!res.ok) return [];

  const xml = await res.text();
  const entries: { url: string; date: string }[] = [];
  const urlRegex = /<url>([\s\S]*?)<\/url>/gi;
  let match;

  while ((match = urlRegex.exec(xml)) !== null) {
    const block = match[1];
    const locMatch = block.match(/<loc>(.*?)<\/loc>/i);
    const dateMatch = block.match(/<lastmod>(.*?)<\/lastmod>/i);

    if (locMatch) {
      const url = locMatch[1].trim();
      // Skip non-blog URLs (homepage, tag pages, utility pages, etc.)
      const slug = extractSlug(url);
      const excludedSlugs = new Set([
        'sitemap.xml', 'archive', 'recommendations', 'newsletter',
        'about', 'badge', 'series', 'tags',
      ]);
      if (slug && !slug.includes('/') && !excludedSlugs.has(slug)) {
        entries.push({
          url,
          date: dateMatch ? dateMatch[1].trim() : '',
        });
      }
    }
  }

  return entries;
}

/** Fetch og: meta tags from a blog page for posts not in RSS. */
async function fetchPageMeta(url: string): Promise<Partial<BlogPost> | null> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'ACM-VIT-Website/1.0' },
    });
    if (!res.ok) return null;

    const html = await res.text();

    const ogTitle = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/)
      || html.match(/<title>([^<]*)<\/title>/);
    const ogDesc = html.match(/<meta\s+property="og:description"\s+content="([^"]*)"/);
    const ogImage = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/);
    const author = html.match(/<meta\s+name="author"\s+content="([^"]*)"/);
    const pubDate = html.match(/<meta\s+property="article:published_time"\s+content="([^"]*)"/);

    return {
      title: ogTitle?.[1] || '',
      brief: ogDesc?.[1] || '',
      coverImage: ogImage?.[1] || '',
      author: author?.[1] || 'ACM-VIT',
      publishedAt: pubDate?.[1] || '',
    };
  } catch {
    return null;
  }
}

/** Get all Hashnode blog posts, merging RSS + sitemap data. */
export async function getHashnodePosts(): Promise<BlogPost[]> {
  const [rssPosts, sitemapEntries] = await Promise.all([
    fetchFromRss(),
    fetchSitemapUrls(),
  ]);

  // Index RSS posts by slug for quick lookup
  const rssMap = new Map(rssPosts.map((p) => [p.slug, p]));
  const allPosts = [...rssPosts];

  // Find sitemap entries not covered by RSS
  const missingEntries = sitemapEntries.filter(
    (e) => !rssMap.has(extractSlug(e.url))
  );

  // Fetch metadata for missing posts (in batches to avoid rate limits)
  const batchSize = 5;
  for (let i = 0; i < missingEntries.length; i += batchSize) {
    const batch = missingEntries.slice(i, i + batchSize);
    const results = await Promise.all(
      batch.map(async (entry) => {
        const meta = await fetchPageMeta(entry.url);
        if (!meta?.title) return null;

        const slug = extractSlug(entry.url);
        return {
          title: meta.title,
          slug,
          source: 'hashnode' as const,
          url: entry.url,
          publishedAt: meta.publishedAt || entry.date || new Date().toISOString(),
          author: meta.author || 'ACM-VIT',
          coverImage: meta.coverImage || '',
          brief: meta.brief || '',
          readingTime: 5,
          tags: [] as string[],
        } satisfies BlogPost;
      })
    );
    allPosts.push(...results.filter((p): p is BlogPost => p !== null));
  }

  return allPosts;
}

/** Fetch full blog content HTML from a Hashnode page. */
export async function getHashnodeContent(slug: string): Promise<string> {
  const url = `${BASE_URL}/${slug}`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'ACM-VIT-Website/1.0' },
  });
  if (!res.ok) return '';

  const html = await res.text();

  // Hashnode wraps article content — try multiple selectors
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (articleMatch) return cleanContentHtml(articleMatch[1]);

  // Fallback: look for prose content div
  const proseMatch = html.match(/<div[^>]*class="[^"]*prose[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i);
  if (proseMatch) return cleanContentHtml(proseMatch[1]);

  // Last resort: try content from RSS
  const rssRes = await fetch(RSS_URL);
  if (rssRes.ok) {
    const rssXml = await rssRes.text();
    const items = parseRss(rssXml);
    const item = items.find((i) => extractSlug(i.link) === slug);
    if (item?.contentHtml) return cleanContentHtml(item.contentHtml);
  }

  return '';
}

/** Clean up extracted HTML content. */
function cleanContentHtml(html: string): string {
  let cleaned = html
    // Remove non-content structural elements
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<aside[\s\S]*?<\/aside>/gi, '')
    .replace(/<button[\s\S]*?<\/button>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    // Remove class/data attributes (we style with our own CSS)
    .replace(/\s+class="[^"]*"/gi, '')
    .replace(/\s+data-[a-z-]+="[^"]*"/gi, '')
    // Clean up extra whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  // Strip leading metadata (date, reading time, author card, cover image)
  // that Hashnode includes in <article> before actual content
  cleaned = stripLeadingMetadata(cleaned);

  return cleaned;
}

/** Strip metadata elements that appear before the first heading in scraped content. */
function stripLeadingMetadata(html: string): string {
  const headingMatch = html.match(/<h[1-6]\b/i);
  if (headingMatch?.index && headingMatch.index > 20 && headingMatch.index < 3000) {
    return html.substring(headingMatch.index);
  }
  return html;
}
