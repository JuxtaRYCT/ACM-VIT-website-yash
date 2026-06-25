import { parseRss } from './rssParser';
import type { BlogPost } from './types';

const RSS_URL = 'https://medium.com/feed/acmvit';

/** Estimate reading time from HTML content. */
function estimateReadTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, '').trim();
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Extract slug from a Medium URL. */
function extractSlug(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    // Medium URLs: /acmvit/title-hash or /p/hash
    const segments = pathname.split('/').filter(Boolean);
    return segments[segments.length - 1] || '';
  } catch {
    return '';
  }
}

/** Extract first meaningful image from HTML content. */
function extractFirstImage(html: string): string {
  // Skip Medium tracking pixels and small icons
  const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    if (src.includes('medium.com') && !src.includes('stat?') && !src.includes('1*')) {
      return src;
    }
    if (src.includes('cdn-images')) return src;
  }
  return '';
}

/** Fetch blog posts from Medium RSS feed. */
export async function getMediumPosts(): Promise<BlogPost[]> {
  const res = await fetch(RSS_URL, {
    headers: { 'User-Agent': 'ACM-VIT-Website/1.0' },
  });
  if (!res.ok) return [];

  const xml = await res.text();
  const items = parseRss(xml);

  return items.map((item) => {
    const coverImage = item.coverImage || extractFirstImage(item.contentHtml || item.description);

    return {
      title: item.title,
      slug: extractSlug(item.link),
      source: 'medium' as const,
      url: item.link,
      publishedAt: new Date(item.pubDate).toISOString(),
      author: item.author || 'ACM-VIT',
      coverImage,
      brief: item.description.replace(/<[^>]+>/g, '').slice(0, 300),
      readingTime: item.contentHtml
        ? estimateReadTime(item.contentHtml)
        : 5,
      tags: item.categories,
    };
  });
}

/** Fetch full blog content from Medium (via RSS content:encoded). */
export async function getMediumContent(slug: string): Promise<string> {
  const res = await fetch(RSS_URL, {
    headers: { 'User-Agent': 'ACM-VIT-Website/1.0' },
  });
  if (!res.ok) return '';

  const xml = await res.text();
  const items = parseRss(xml);
  const item = items.find((i) => extractSlug(i.link) === slug);

  if (item?.contentHtml) {
    return cleanMediumHtml(item.contentHtml);
  }

  return '';
}

/** Clean up Medium HTML content. */
function cleanMediumHtml(html: string): string {
  return html
    // Remove Medium tracking images
    .replace(/<img[^>]*src="https:\/\/medium\.com\/_\/stat[^>]*>/gi, '')
    // Remove class attributes
    .replace(/\s+class="[^"]*"/gi, '')
    // Remove data attributes
    .replace(/\s+data-[a-z-]+="[^"]*"/gi, '')
    // Clean up extra whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
