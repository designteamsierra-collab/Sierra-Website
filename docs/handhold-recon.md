# handhold.io recon — design system inputs

**Crawled:** 2026-05-06 · **Source:** handhold.io
**Method:** raw HTML + linked Next.js Tailwind v4 stylesheet harvest (`_next/static/chunks/*.css`, ~128 KB combined)
**Scope:** homepage + sitemap probe (handhold's public marketing site is essentially the homepage; the rest of their property is gated behind `/demo/`, `/agents/`, `/backoffice/`, etc. and disallowed in `robots.txt`)

This file captures **what we can borrow** (rhythm, scale, hierarchy, motion language, layout patterns) and **what we must NOT clone** (specific colors, custom typography, illustrations, copy). Per the brief, handhold is inspiration only.

---

## 1. Stack underneath

handhold runs on the same general stack we're using: **Next.js + Tailwind CSS v4** with native CSS custom properties for the design tokens (`--text-*`, `--spacing`, `--radius-*`, `--container-*`, `--leading-*`). That's good news — we can match their _level of polish_ without copying their tokens because we're operating in the same primitives.

## 2. Typography

| Role             | Family                                        | Provenance                                           |
| ---------------- | --------------------------------------------- | ---------------------------------------------------- |
| Body / UI        | **Inter**                                     | Loaded as a Next.js variable font (Google Fonts)     |
| Display / accent | **ABC Bureau Serif** (STK Bureau Serif)       | Premium licensed serif from Sharp Type / STK foundry |
| Mono             | system stack (`ui-monospace, SFMono-Regular`) | unmodified default                                   |

**Type scale** (Tailwind v4 defaults, lightly customized):

| Token             | Size                                                       | Line height ratio |
| ----------------- | ---------------------------------------------------------- | ----------------- |
| xs                | 0.75rem                                                    | 1.333             |
| sm                | 0.875rem                                                   | 1.428             |
| base              | 1rem                                                       | 1.5               |
| lg                | 1.125rem                                                   | 1.555             |
| xl                | 1.25rem                                                    | 1.4               |
| ...               | ...                                                        | ...               |
| display overrides | 28px / 40px / 44px / 72px (specific hero/h1/h2 hand-tuned) |

So: standard Tailwind v4 type scale + a handful of larger display sizes for the hero. No exotic typography rules.

**For Sierra:** the same scale shape works — we don't need to invent a new ratio. The font _pairing_ is what makes handhold visually distinctive (Inter is ubiquitous; the Bureau Serif is the differentiator). We need a Sierra-original pairing — see proposal below.

## 3. Color palette (frequency-ranked from CSS)

Top hexes mined from the harvested CSS, with my interpretation:

| Hex       | Count | Tailwind / role                              |
| --------- | ----: | -------------------------------------------- |
| `#fff`    |    23 | white                                        |
| `#000`    |    16 | black                                        |
| `#27272a` |    11 | zinc-800                                     |
| `#d4d4d8` |    11 | zinc-300                                     |
| `#09090b` |    10 | zinc-950 — primary dark surface              |
| `#e4e4e7` |     8 | zinc-200                                     |
| `#71717a` |     8 | zinc-500                                     |
| `#a1a1aa` |     8 | zinc-400                                     |
| `#f2f1ed` |     7 | **warm cream — accent surface for sections** |
| `#101828` |     6 | slate-950-ish — deep blue-black              |
| `#18181b` |     5 | zinc-900                                     |
| `#3f3f46` |     5 | zinc-700                                     |
| `#155dfc` |     4 | **brand primary blue** (saturated)           |
| `#78c091` |     3 | accent green (light)                         |
| `#3a8f5d` |     3 | accent green (dark)                          |
| `#94c0cc` |     3 | accent teal (light)                          |
| `#f87171` |     2 | red-400 (warning)                            |
| `#f59e0b` |     2 | amber-500 (highlight)                        |

**Read:** handhold's identity is **cool zinc neutrals + saturated electric blue + warm green accent + cream warm-band**. Modern SaaS, slightly clinical, with one warm break (the cream sections).

## 4. Spacing & radii

- **Spacing base unit:** `--spacing: 0.25rem` (4px) — the Tailwind v4 default. Multiples derived via `calc(var(--spacing) * N)`.
- **Border radius scale:** Tailwind's `--radius-sm` through `--radius-3xl`, plus a couple of hand-tuned `28px` corners for hero cards. They lean **rounded but not pill** — large radii on big cards, modest radii on buttons.
- **Container max-widths:**
  - `65ch` for prose blocks (line-length capped at ~65 characters — the print-typography sweet spot)
  - `80rem` (1280px) for full-width hero
  - `var(--container-5xl)` (1024px) for inner content bands

## 5. Motion language

The CSS contains essentially **one transition rule** — `background-color .2s`. handhold is dramatically _understated_ in motion: no parallax, no big easing functions, no animated illustrations on scroll. Hover states are brief color shifts. Page transitions are instant.

**Borrow:** the discipline. Sierra should match — fast, professional, no flash.

## 6. Layout patterns observed on the homepage

H1 + H2 sample mined from the page HTML:

1. **Hero** — H1 "A dedicated guide for every buyer" + sub-copy + asymmetric image/video panel
2. **Demo embed** — H2 "See Handhold in action"
3. **Use-case grid (3 columns)** — H2 "Deploy agents across your customer journey" with 3 card sub-headings: "Help leads validate with AI chat", "Give 1:1 demos at scale with an AI expert", "Provide tailored onboarding with an AI guide"
4. **3-step how-it-works strip** — H2 "Get started in minutes" + numbered "1 / 2 / 3"
5. **CTA band** — H2 "Scale personalised sales without growing your team"
6. **Footer** — minimal, links + legal

Total page composition: hero → demo → 3-card use-case grid → 3-step instructions → CTA band → footer. **Six discrete sections** with strong vertical rhythm. Each section is centered, max-width capped, generous vertical padding.

**This is a template Sierra can adapt** for any service-specific landing (e.g. `/clean-core-assessment/`, `/sap-rise/`, `/ai-suite/`). The component primitives we'll need cover this exactly:

- `Hero` (asymmetric image + copy)
- `FeatureGrid` (3 or 4 columns of icon + headline + body cards)
- `StepStrip` (numbered horizontal list)
- `CTABand` (centered headline + button)
- `Section` (the wrapper that handles vertical rhythm + max-width)

---

## 7. Sierra-original token proposal — pending sign-off

The brief says: same temperature family, **at least 2 distinguishing hues**, different font pairing, original layout treatment.

### 7.1 Color proposal

Sierra is an established SAP enterprise consulting firm (Silver Partner). The marketing site should feel **calm, confident, expert** — not playful, not flashy. Distinct from handhold's slightly-clinical bright-blue + accent-green vibe.

| Role                | Sierra (proposed)                                                               | vs. handhold                         | Why                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Neutrals            | Tailwind **slate** scale                                                        | handhold uses zinc                   | Slate has a faint cool-blue tint — connects subtly to the gated cockpit's deep navy and feels more "data infrastructure" than zinc's pure gray |
| Background          | `slate-50` `#f8fafc` for warm pages, `slate-950` `#020617` for the cockpit only | handhold: white + cream              | Sierra marketing keeps it crisp; cream warmth lives only inside specific testimonial/quote modules                                             |
| **Brand primary**   | `#0E5B7E` (deep teal-cyan, between teal-700 and sky-800)                        | handhold: `#155dfc` (saturated blue) | Different hue (teal-cyan vs sky-blue) — signals depth/expertise vs handhold's energetic startup-blue. Distinguishing hue #1.                   |
| Brand primary hover | `#0A4761`                                                                       |                                      | -8% lightness for clear hover state                                                                                                            |
| **Brand accent**    | `#C2410C` (terracotta / orange-700)                                             | handhold: `#3a8f5d` (green)          | Warm earth tone. Sierra = mountains. Distinguishing hue #2. Used sparingly: CTAs, highlights, eyebrows.                                        |
| Success             | `#15803d` (green-700) — used for actual success states only                     |                                      | not a brand accent — semantic only                                                                                                             |
| Warning             | `#b45309` (amber-700)                                                           |                                      | semantic                                                                                                                                       |
| Error               | `#b91c1c` (red-700)                                                             |                                      | semantic                                                                                                                                       |

Two distinguishing hues vs. handhold: **teal-cyan replaces saturated sky blue**, **terracotta replaces green**. Same temperature family overall (cool neutrals + cool brand primary + one warm accent for breaks), distinctly Sierra.

### 7.2 Font pairing proposal

Brief says: different pairing, same spirit.

**Recommendation — Option A (preferred):** **Geist Sans + Fraunces**

- **Geist Sans** (body / UI): Vercel's open-source variable font, designed for technical/enterprise interfaces. Wider apertures than Inter, more architectural, free via Google Fonts. Loads as a single variable font file.
- **Fraunces** (display / accent): A modern variable serif with strong character and dramatic optical sizing. Free via Google Fonts. Opposite of Bureau Serif's traditional warmth — Fraunces is contemporary and confident. Use for hero H1, eyebrows, big stat numbers.

**Option B (more conservative):** **Inter Tight + Source Serif 4**

- **Inter Tight**: tighter relative of Inter — recognizably similar industry-standard but distinct enough to not read as a clone of handhold's choice.
- **Source Serif 4**: a workhorse Adobe-released serif via Google Fonts. Less expressive than Fraunces, more "trusted" — closer to traditional consulting-firm typography.

Both options are 100% free, served via `next/font` (zero CLS, self-hosted, no Google Fonts CDN dependency).

**Mono:** stay with system stack (`ui-monospace, SFMono-Regular, Menlo, Consolas`) — same as handhold, no benefit to picking a custom one.

### 7.3 Spacing, radii, motion (matched to handhold's discipline)

These are largely choices about ratio/density, not branding, so we'll **match handhold's defaults** rather than diverge:

- **Spacing base:** 0.25rem (Tailwind v4 default) — same as handhold
- **Radii:** Tailwind defaults — `sm` (0.25rem) through `3xl` (1.5rem), plus `full` for pill buttons
- **Section vertical rhythm:** generous, ~96px desktop / 64px mobile per section break
- **Motion:** transitions ≤200ms, easing `ease-out`, no parallax. Hover = color shift only.

---

## 8. What I need from you before writing component code

1. **Approve the color proposal** (or redirect — e.g. "no, keep teal but use a different warm accent")
2. **Pick a font pairing:** Option A (Geist + Fraunces) or Option B (Inter Tight + Source Serif 4) — or "show me a third option"
3. **Confirm the cool/warm temperature read** — Sierra-cool-with-one-warm-accent matches the brief's "same temperature family as handhold" instruction. Push back if you read Sierra's brand differently.

Once you sign off (one-line responses are fine), I'll:

- Write `/styles/tokens.css` (CSS custom properties)
- Configure Tailwind v4 to consume them
- Build the marketing component primitives
- Build a dev-gated `/components` review page so you can see them in browser
- Apply them to the migrated content

I will **not** start coding components before the token proposal is approved.
