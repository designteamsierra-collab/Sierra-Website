import type { ImgHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SummitMarker } from "@/components/ui/Illustrations";
import { clsx } from "@/lib/clsx";
import {
  Lead,
  Block,
  CardGrid,
  FeatureRow,
  Quote,
  ClientStrip,
  Stats,
  Steps,
  Timeline,
  TeamGrid,
  PostFeed,
  PartnerList,
  CTA,
  SplitIntro,
} from "./blocks";

/**
 * MDX components mapping for nav-linked content pages.
 * ────────────────────────────────────────────────────────────────────────────
 * Sierra's migrated WordPress content has consistent patterns that don't
 * compose well as raw prose:
 *
 *   1. Every page repeats its <h1> inside the body (the gradient header
 *      already renders the title from frontmatter).
 *   2. CTAs are bare <a href="/contact/">Get Started</a> — should be buttons.
 *   3. Step indicators appear as <h2>1</h2> <h2>2</h2> — should be badges.
 *   4. Feature lists are flat sequences of <h3> + <p> — need visual grouping.
 *   5. Images use absolute wp-content paths at print resolution.
 *
 * These component overrides catch each pattern and render it well.
 */

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Extract a plain-text string from React children (handles nested fragments) */
function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (typeof node === "object" && "props" in node) {
    return textOf((node as { props: { children: ReactNode } }).props.children);
  }
  return "";
}

const CTA_LABELS = new Set([
  "get started",
  "ask our experts",
  "ask our expert",
  "contact us",
  "contact",
  "learn more",
  "read more",
  "request access",
  "request a demo",
  "request demo",
  "book a call",
  "talk to us",
  "schedule a call",
]);

function isCtaLabel(text: string): boolean {
  return CTA_LABELS.has(text.trim().toLowerCase());
}

function isInternalHref(href?: string): boolean {
  if (!href) return false;
  return href.startsWith("/") || href.startsWith("#");
}

// ── Heading components ──────────────────────────────────────────────────────

/** H1 in MDX body is always a duplicate of the frontmatter title — suppress */
function MdxH1() {
  return null;
}

/**
 * H2 with purely-numeric content (1, 2, 3 ...) becomes a step badge.
 * Otherwise renders as a normal section h2 with a peak marker prefix.
 */
function MdxH2({ children }: { children?: ReactNode }) {
  const text = textOf(children).trim();
  const isStep = /^\d+$/.test(text);

  if (isStep) {
    return (
      <div className="text-muted not-prose font-mono mt-12 mb-3 flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase">
        <span className="bg-ink text-canvas grid h-9 w-9 place-items-center rounded-full font-display text-base font-light tabular-nums">
          {text.padStart(2, "0")}
        </span>
        <span>Step {text}</span>
      </div>
    );
  }

  return (
    <h2 className="flex items-center gap-3">
      <SummitMarker className="h-4 w-4 flex-shrink-0 translate-y-0.5" tone="ink" />
      <span>{children}</span>
    </h2>
  );
}

/** H3 gets a subtle hairline above it to group feature blocks visually */
function MdxH3({ children }: { children?: ReactNode }) {
  return (
    <h3 className="border-line border-t pt-7 mt-9">
      {children}
    </h3>
  );
}

// ── Anchor → Button when it looks like a CTA ────────────────────────────────

function MdxA({
  href,
  children,
  ...rest
}: {
  href?: string;
  children?: ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">) {
  const text = textOf(children).trim();
  const isCta = isCtaLabel(text);
  const isExternal = href ? /^https?:\/\//i.test(href) : false;

  // CTAs become proper buttons. The not-prose break keeps Tailwind from
  // applying prose underline styles to the button text.
  if (isCta && href) {
    return (
      <span className="not-prose my-6 inline-flex">
        <Button href={href} size="md" variant="primary">
          {children} →
        </Button>
      </span>
    );
  }

  // Internal Next.js links — use <Link> for client-side nav
  if (isInternalHref(href) && href) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  // External — keep as raw anchor with target/rel
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}

// ── Image rewriting ─────────────────────────────────────────────────────────

/**
 * Constrain images: cap width, round corners, soft border. Auto-detect
 * wp-content paths and serve them through the existing /wp-content prefix
 * (no rewrite needed in dev; production should map this to a CDN).
 */
function MdxImg({
  src,
  alt,
  width: _w,
  height: _h,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      loading="lazy"
      decoding="async"
      className={clsx(
        "border-line my-6 w-full rounded-2xl border bg-canvas-2 object-cover",
        rest.className,
      )}
    />
  );
}

// ── Figure with image + caption ─────────────────────────────────────────────

function MdxFigure({ children }: { children?: ReactNode }) {
  return <figure className="not-prose my-8">{children}</figure>;
}

function MdxFigcaption({ children }: { children?: ReactNode }) {
  return (
    <figcaption className="text-muted mt-3 text-center text-sm">
      {children}
    </figcaption>
  );
}

// ── List with peak-marker bullets (replaces default disc) ───────────────────

function MdxUl({ children, ...rest }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="not-prose my-6 flex flex-col gap-3 pl-0 list-none"
      {...rest}
    >
      {children}
    </ul>
  );
}

function MdxLi({ children, ...rest }: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className="flex items-start gap-3 text-base leading-relaxed text-ink-2" {...rest}>
      <SummitMarker className="mt-1.5 h-3 w-3 flex-shrink-0" tone="ink" />
      <span>{children}</span>
    </li>
  );
}

// ── Paragraph — lift first paragraph as lead text ───────────────────────────

function MdxP({ children, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...rest}>
      {children}
    </p>
  );
}

// ── Export the mapping ──────────────────────────────────────────────────────

export const mdxComponents = {
  // HTML element overrides
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  a: MdxA,
  img: MdxImg,
  figure: MdxFigure,
  figcaption: MdxFigcaption,
  ul: MdxUl,
  li: MdxLi,
  p: MdxP,
  // Handhold-style section blocks — usable as JSX in any .mdx file
  Lead,
  Block,
  CardGrid,
  FeatureRow,
  Quote,
  ClientStrip,
  Stats,
  Steps,
  Timeline,
  TeamGrid,
  PostFeed,
  PartnerList,
  CTA,
  SplitIntro,
};
