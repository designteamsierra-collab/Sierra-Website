# /components/cockpit — Track B (gated demo)

The component primitives for the gated cockpit page at `/rise-cockpit`. Faithful port of `reference/sierra_rise_ai_prototype.html`. Visual identity is intentionally distinct from Track A:

- Deep navy + AI gradient palette (blue → cyan → purple)
- Animated brain orb, live dot, pipeline steps, console log feed
- Sales demo, not marketing — different audience, different design system

## Components to port (Phase 4)

From the prototype:

- `GradientText` — text with the AI gradient applied
- `LiveDot` — pulsing green status indicator
- `BrainOrb` — animated radial-gradient orb with rotating dashed rings
- `PipelineStep` — numbered step in the migration pipeline
- `PhaseTab` — selectable lifecycle phase pill
- `Console` — terminal-style log feed
- `Stat` (cockpit variant) — gradient-styled big-number display, distinct from Track A's `Stat`
- `SimToolbar` — mac-style window chrome with run/reset buttons

## Why empty in Phase 3

Phase 3 establishes the marketing design system (Track A). The cockpit components share **none** of Track A's visual language by design — they belong to the cockpit page and are easier to port alongside the page itself.

Phase 4 will populate this folder by lifting CSS + JS from the prototype and reorganizing into discrete React components with hooks for the simulator state.
