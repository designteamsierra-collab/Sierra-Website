# Sierra Digital — sierradigitalinc.com (Next.js rebuild)

Next.js 16 rebuild of [sierradigitalinc.com](https://sierradigitalinc.com), preserving 1:1 SEO equity from the legacy WordPress site. Two distinct surfaces:

- **Marketing site** — every public URL except `/rise-cockpit`. Inspiration drawn from handhold.io's polish; visual identity is Sierra-original.
- **Gated AI cockpit** at `/rise-cockpit` — sales demo for SAP RISE migration. Authenticated via Clerk. Built faithfully from the prototype at `reference/sierra_rise_ai_prototype.html`.

## Stack

| Layer           | Choice                                                               |
| --------------- | -------------------------------------------------------------------- |
| Framework       | Next.js 16 (App Router, Turbopack, RSC)                              |
| Language        | TypeScript 5 (strict)                                                |
| Styling         | Tailwind CSS v4                                                      |
| Package manager | pnpm 10 (locked via `packageManager` in package.json)                |
| Linter          | ESLint 9 (flat config) + `eslint-config-next` + Prettier integration |
| Formatter       | Prettier 3 + `prettier-plugin-tailwindcss`                           |
| Content         | MDX in `/content`, rendered via `next-mdx-remote-client`             |
| Hosting         | Vercel (target)                                                      |

## Prerequisites

- **Node.js 20+** (Node 24 LTS recommended; install via `winget install OpenJS.NodeJS.LTS`)
- **pnpm 10+** — `npm install -g pnpm` is the simplest install path

## Getting started

```bash
pnpm install
pnpm dev              # starts http://localhost:3000 on Turbopack
pnpm build            # production build (must be clean before any phase ships)
pnpm lint             # ESLint
pnpm format:check     # Prettier check (CI-style)
pnpm format           # Prettier auto-fix
```

## Project layout

```
.
├── app/                       Next.js App Router
│   ├── page.tsx               Home (will render content/index.mdx in Phase 2)
│   ├── [...slug]/page.tsx     Generic MDX renderer for all migrated content
│   ├── sitemap.ts             Generates /sitemap.xml from lib/site-urls.ts
│   └── robots.ts              Generates /robots.txt
├── content/                   MDX content tree, mirrors URL structure
│   └── README.md              Migration conventions
├── lib/
│   ├── site-urls.ts           Auto-generated canonical URL list (source of truth for sitemap)
│   ├── redirects.ts           17 legacy → canonical 301 redirects (Phase 0 derived)
│   └── content.ts             MDX file system reader
├── next.config.ts             Trailing slashes ON; redirects from lib/redirects.ts
├── public/                    Static assets (Phase 2 will mirror /wp-content/uploads/)
├── docs/
│   ├── recon.md               Phase 0 reconnaissance report
│   ├── decisions.md           Append-only ADR log
│   ├── baseline-lighthouse/   Performance baselines (live WP, must be beaten)
│   └── recon-data/            Phase 0 bulk artifacts (mostly gitignored)
├── reference/
│   └── sierra_rise_ai_prototype.html   Phase 4 cockpit design source-of-truth
└── memory/                    (Out-of-tree) — Claude Code memory store
```

## SEO equity contract — read before changing anything

This rebuild's #1 constraint is preserving the legacy WP site's SEO equity 1:1.

- Every URL renders at the **same path** as on `sierradigitalinc.com` today (with the leadership-team caveat below). No slug changes, no case changes, no path restructuring without explicit approval.
- `trailingSlash: true` is set in `next.config.ts` so `/foo/` does NOT 308 to `/foo`. This matches WP behavior exactly.
- Every page emits the same `<title>`, `<meta description>`, canonical, OG, Twitter, and JSON-LD as the WP page it replaces. Frontmatter on each MDX file carries that metadata; `app/[...slug]/page.tsx` mirrors it via `generateMetadata()`.
- `app/sitemap.ts` generates from `lib/site-urls.ts` (the canonical 129-URL set captured during Phase 0). The legacy `xml-sitemaps.com` output had stale entries — those are now 301 redirects in `lib/redirects.ts` instead.

### Leadership-team URL caveat

The published WP sitemap listed leadership bios at `/<slug>/` but the canonical is `/leadership-team/<slug>/`. We render at the canonical path and 301-redirect 14 legacy slugs. **Three** legacy URLs (`/senthil-kumar-ceo/`, `/jayakanth-loganathan/`, `/sooriya-sudhakar/`) currently 301 to `/page-not-found/` on the live WP site and we mirror that — flagged in `lib/redirects.ts` for product owner review.

## Phase status

- [x] **Phase 0** — Reconnaissance ([docs/recon.md](docs/recon.md))
- [ ] **Phase 1** — Stack setup _(in progress)_
- [ ] **Phase 2** — Content migration (verbatim WP → MDX)
- [ ] **Phase 3** — Design system (handhold-inspired marketing UI + cockpit components)
- [ ] **Phase 4** — Gated cockpit (Clerk auth + prototype port)
- [ ] **Phase 5** — RAG-only chatbot (Claude Haiku, site content scope)
- [ ] **Phase 6** — HubSpot pipeline
- [ ] **Phase 7** — Analytics (GA4 + Clarity + Vercel Analytics)
- [ ] **Phase 8** — SEO + perf + visual originality verification
- [ ] **Phase 9** — Vercel deploy + DNS cutover

See [docs/decisions.md](docs/decisions.md) for the running ADR log.
