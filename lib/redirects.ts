// Hand-curated from live-site 301 chain probes (2026-05-05).
// Each entry is `from` → final destination per the current WP site's behavior.
// These match what the WordPress site does today, exactly. SEO equity preserved 1:1.
//
// Three of these go to /page-not-found/ on the live site today. We've flagged
// these to the user for review (they may want a real redirect target instead);
// for now we mirror current behavior.

export interface SiteRedirect {
  /** Path on the legacy URL — no trailing slash, no host. */
  from: string;
  /** Path on the new site — no trailing slash, no host. */
  to: string;
  /** 301 (default) for permanent moves. */
  permanent: boolean;
  /** Optional human-readable note. */
  note?: string;
}

export const LEGACY_REDIRECTS: readonly SiteRedirect[] = [
  // Leadership-team URLs that 301 to their canonical CPT URL on live WP today.
  { from: "/maya-bava", to: "/leadership-team/maya-bava", permanent: true },
  { from: "/sudhakar-virupakshi", to: "/leadership-team/sudhakar-virupakshi", permanent: true },
  { from: "/karl-schmidt", to: "/leadership-team/karl-schmidt", permanent: true },
  { from: "/m-s-mohanraj", to: "/leadership-team/m-s-mohanraj", permanent: true },
  { from: "/tc-venkatesan", to: "/leadership-team/tc-venkatesan", permanent: true },
  { from: "/sameel-baker", to: "/leadership-team/sameel-baker", permanent: true },
  { from: "/scott-gabelhart", to: "/leadership-team/scott-gabelhart", permanent: true },
  { from: "/rajan-marathe", to: "/leadership-team/rajan-marathe", permanent: true },
  { from: "/kaviarasan-thangarasu", to: "/leadership-team/kaviarasan-thangarasu", permanent: true },
  {
    from: "/venkata-rama-vikas-chinta",
    to: "/leadership-team/venkata-rama-vikas-chinta",
    permanent: true,
  },
  { from: "/robert-jones", to: "/leadership-team/robert-jones", permanent: true },
  { from: "/sandy-udupa", to: "/leadership-team/sandy-udupa", permanent: true },
  {
    from: "/suchindra-guru-pradeep-prabhakaran",
    to: "/leadership-team/suchindra-guru-pradeep-prabhakaran",
    permanent: true,
  },
  {
    from: "/narasimman-l-madhavarao",
    to: "/leadership-team/narasimman-l-madhavarao",
    permanent: true,
  },

  // SEO-UPGRADE redirects (user-approved 2026-05-05). Live WP currently 301s
  // these three to /page-not-found/. We're improving:
  //   - senthil-kumar-ceo → the renamed CPT bio (same person, slug changed)
  //   - jayakanth, sooriya → /leadership-team/ listing (preserves more equity
  //     than a 404 page; user has left the company)
  {
    from: "/senthil-kumar-ceo",
    to: "/leadership-team/senthil-kumar",
    permanent: true,
    note: "SEO-UPGRADE: live WP 404s; same person renamed in CPT.",
  },
  {
    from: "/jayakanth-loganathan",
    to: "/leadership-team",
    permanent: true,
    note: "SEO-UPGRADE: live WP 404s; person no longer at company, redirect to listing.",
  },
  {
    from: "/sooriya-sudhakar",
    to: "/leadership-team",
    permanent: true,
    note: "SEO-UPGRADE: live WP 404s; person no longer at company, redirect to listing.",
  },
] as const;
