# /content

This folder mirrors the URL structure of sierradigitalinc.com.

A file at `content/services/sap-rise.mdx` renders at the URL `/services/sap-rise/`.
A file at `content/index.mdx` renders at `/`.
A file at `content/leadership-team/sandy-udupa.mdx` renders at `/leadership-team/sandy-udupa/`.

## Frontmatter (required on every MDX)

Every page MUST have frontmatter that mirrors the SEO metadata captured in Phase 0:

```mdx
---
title: "SAP-Powered AI Suite for Digital Transformation | Sierra Digital"
description: "Accelerate enterprise innovation with Sierra's AI suite for SAP BTP — ready-to-deploy AI solutions, AI-powered digital adoption, and enterprise-grade AI security..."
canonical: "https://sierradigitalinc.com/ai-suite/"
ogImage: "https://sierradigitalinc.com/wp-content/uploads/2025/10/Data-Foundation.webp"
datePublished: "2025-07-07T16:00:56"
dateModified: "2026-02-20T18:37:04"
postType: "pages"
jsonLd:
  # Full Yoast schema @graph block, ported verbatim from WP
  "@context": "https://schema.org"
  "@graph":
    - "@type": "WebPage"
      "@id": "https://sierradigitalinc.com/ai-suite/"
      ...
---

# Page H1 here

Page body content here, in MDX. Word-for-word identical to WordPress.
```

## Phase 2 will populate this folder

A migration script (Phase 2) will:

1. Walk every URL in `docs/recon-data/recon.json`
2. Pull body HTML from the live WP REST API (`/wp-json/wp/v2/<post-type>/<id>?_fields=content`)
3. Strip Elementor wrapper divs/inline styles, preserving semantic markup (headings, paragraphs, lists, links, images)
4. Convert the cleaned HTML to MDX
5. Emit one `.mdx` file per URL into the matching folder path
6. Mirror frontmatter from `yoast_head_json`

**Do not edit MDX files manually** until the migration script has been authored — that script should be the source of truth, with hand edits flagged in commit messages.

## Naming conventions

- Files use the WP slug as the basename: `/leadership-team/sandy-udupa/` → `content/leadership-team/sandy-udupa.mdx`
- Pages and posts both render at root (`/<slug>/`); WP enforces global slug uniqueness, so collisions can't occur
- The home page lives at `content/index.mdx`
