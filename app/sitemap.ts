import type { MetadataRoute } from "next";
import { CANONICAL_URLS } from "@/lib/site-urls";

const PRIORITY: Record<string, number> = {
  pages: 0.8,
  posts: 0.6,
  events: 0.5,
  news: 0.6,
  webinar: 0.5,
  "leadership-team": 0.4,
};

const FREQUENCY: Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
  pages: "monthly",
  posts: "yearly",
  events: "weekly",
  news: "yearly",
  webinar: "yearly",
  "leadership-team": "yearly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return CANONICAL_URLS.map((entry) => ({
    url: entry.url,
    lastModified: new Date(entry.dateModified),
    changeFrequency: FREQUENCY[entry.postType] ?? "monthly",
    priority:
      entry.url === "https://sierradigitalinc.com/"
        ? 1.0
        : (PRIORITY[entry.postType] ?? 0.7),
  }));
}
