import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface ContentEntry {
  /** URL path, no leading or trailing slash. Empty string for the home page. */
  slug: string;
  /** Slug split into segments — what the `[...slug]` route expects. */
  segments: string[];
  /** Absolute path to the .mdx file on disk. */
  filePath: string;
  /** Parsed frontmatter. */
  frontmatter: ContentFrontmatter;
  /** Raw MDX body (frontmatter stripped). */
  source: string;
}

export interface ContentFrontmatter {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  datePublished?: string;
  dateModified?: string;
  postType?: string;
  /** Yoast-style JSON-LD @graph payload, mirrored verbatim. */
  jsonLd?: unknown;
}

/** Recursively list every .mdx file under /content. Skips dotfiles and READMEs. */
async function listMdxFiles(dir: string, basePath = ""): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out: string[] = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    if (entry.name === "README.md") continue;
    const full = path.join(dir, entry.name);
    const rel = basePath ? `${basePath}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      out.push(...(await listMdxFiles(full, rel)));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      out.push(rel);
    }
  }
  return out;
}

/** Convert a relative MDX path (e.g. "leadership-team/sandy-udupa.mdx") to a route slug array. */
function pathToSegments(rel: string): string[] {
  const noExt = rel.replace(/\.mdx$/i, "");
  // index.mdx → home
  if (noExt === "index" || noExt.endsWith("/index")) {
    const stripped = noExt.replace(/\/?index$/, "");
    return stripped ? stripped.split("/") : [];
  }
  return noExt.split("/");
}

let _cache: ContentEntry[] | null = null;

export async function getAllContent(): Promise<ContentEntry[]> {
  if (_cache) return _cache;

  let files: string[];
  try {
    files = await listMdxFiles(CONTENT_DIR);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return (_cache = []);
    throw err;
  }

  const entries: ContentEntry[] = [];
  for (const rel of files) {
    const filePath = path.join(CONTENT_DIR, rel);
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = matter(raw);
    const segments = pathToSegments(rel);
    entries.push({
      slug: segments.join("/"),
      segments,
      filePath,
      frontmatter: parsed.data as ContentFrontmatter,
      source: parsed.content,
    });
  }

  _cache = entries;
  return entries;
}

export async function getContentBySegments(segments: string[]): Promise<ContentEntry | null> {
  const all = await getAllContent();
  const target = segments.join("/");
  return all.find((e) => e.slug === target) ?? null;
}
