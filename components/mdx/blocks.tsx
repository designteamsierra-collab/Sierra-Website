import type { ReactNode } from "react";
import Image from "next/image";
import { clsx } from "@/lib/clsx";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Decoration,
  OrbCluster,
  SingleOrb,
  SummitMarker,
  TopoLines,
} from "@/components/ui/Illustrations";

/**
 * Handhold-style MDX section blocks
 * ────────────────────────────────────────────────────────────────────────────
 * Reusable, content-driven sections for Sierra's nav-linked pages. Designed to
 * be authored directly in .mdx and generated programmatically from the
 * WordPress export. Every block opts out of `.sierra-prose` via `not-prose`
 * and manages its own spacing, so pages read as composed sections rather than
 * a wall of text.
 */

// ── Lead paragraph — large intro under the page header ──────────────────────

export function Lead({ children }: { children: ReactNode }) {
  // Render a <div>, not a <p>: MDX wraps the text children in their own <p>
  // (via the MdxP override), and <p> inside <p> is invalid HTML / hydration
  // error. The [&>p]:m-0 strips the inner paragraph's default margin; text
  // styles (size/weight/leading/color) inherit down to it.
  return (
    <div className="not-prose text-ink my-8 max-w-3xl text-xl font-light leading-relaxed sm:text-2xl [&>p]:m-0">
      {children}
    </div>
  );
}

// ── Section heading used between blocks within prose ────────────────────────

export function Block({
  eyebrow,
  title,
  children,
  tone = "canvas",
}: {
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  tone?: "canvas" | "alt" | "warm";
}) {
  const bg =
    tone === "alt" ? "bg-canvas-2" : tone === "warm" ? "bg-canvas-warm" : "bg-canvas";
  return (
    <section className={clsx("not-prose relative my-16 overflow-hidden rounded-[28px] px-6 py-12 sm:px-10 sm:py-16", bg)}>
      {(eyebrow || title) && (
        <div className="mb-10 flex flex-col gap-3">
          {eyebrow && (
            <span className="text-muted font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
              {eyebrow}
            </span>
          )}
          {title && <h2 className="display-md text-ink max-w-2xl text-balance">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}

// ── Card grid — challenges, benefits, why-choose, capabilities ──────────────

interface GridItem {
  title: ReactNode;
  body?: ReactNode;
}

export function CardGrid({
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
}: {
  eyebrow?: string;
  heading?: ReactNode;
  intro?: ReactNode;
  items: GridItem[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const orbColors = ["#22D3EE", "#8B5CF6", "#F0ABFC", "#38BDF8", "#A855F7", "#10B981"];

  return (
    <section className="not-prose my-16">
      {(eyebrow || heading || intro) && (
        <div className="mb-10 flex flex-col gap-3">
          {eyebrow && (
            <span className="text-muted font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
              {eyebrow}
            </span>
          )}
          {heading && <h2 className="display-md text-ink max-w-2xl text-balance">{heading}</h2>}
          {intro && <p className="text-ink-2 max-w-2xl text-lg leading-relaxed">{intro}</p>}
        </div>
      )}
      <div className={clsx("grid grid-cols-1 gap-5", cols)}>
        {items.map((item, i) => (
          <Card
            key={i}
            tone="surface"
            hoverable
            size="default"
            className="relative flex flex-col gap-3 overflow-hidden"
          >
            <SingleOrb
              className="absolute -top-10 -right-10 h-32 w-32 opacity-40"
              color={orbColors[i % orbColors.length]}
              opacity={0.3}
            />
            <SummitMarker className="relative h-4 w-4" tone="ink" />
            <h3 className="font-display text-ink relative text-xl leading-snug font-light tracking-tight">
              {item.title}
            </h3>
            {item.body && <p className="text-ink-2 relative leading-relaxed">{item.body}</p>}
          </Card>
        ))}
      </div>
    </section>
  );
}

// ── Feature row — alternating image + text (handhold's core pattern) ────────

export function FeatureRow({
  image,
  alt,
  title,
  reverse = false,
  children,
}: {
  image?: string;
  alt?: string;
  title: ReactNode;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="not-prose my-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={clsx("flex flex-col gap-4", reverse && "lg:order-2")}>
        <h3 className="font-display text-ink text-2xl font-light leading-tight tracking-tight sm:text-3xl text-balance">
          {title}
        </h3>
        <div className="text-ink-2 text-lg leading-relaxed">{children}</div>
      </div>
      <div className={clsx("relative", reverse && "lg:order-1")}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={alt ?? ""}
            loading="lazy"
            decoding="async"
            className="border-line w-full rounded-[24px] border bg-canvas-2 object-cover shadow-sm"
          />
        ) : (
          <div className="border-line aspect-[4/3] w-full rounded-[24px] border bg-canvas-2" />
        )}
      </div>
    </section>
  );
}

// ── Quote / testimonial ─────────────────────────────────────────────────────

export function Quote({
  children,
  author,
  role,
}: {
  children: ReactNode;
  author?: string;
  role?: string;
}) {
  return (
    <figure className="not-prose relative my-16 overflow-hidden rounded-[28px] bg-night px-8 py-12 sm:px-14 sm:py-16">
      <Decoration className="-top-16 -right-16 h-72 w-72 opacity-50">
        <OrbCluster className="h-full w-full" variant="teal-violet" />
      </Decoration>
      {/* MDX wraps children in <p>; [&>p]:m-0 strips the inner paragraph's
          default margin so the large serif italic quote sits cleanly. */}
      <blockquote className="relative max-w-3xl font-display text-2xl font-extralight italic leading-snug text-white sm:text-3xl [&>p]:m-0">
        {children}
      </blockquote>
      {(author || role) && (
        <figcaption className="relative mt-6 text-sm">
          {author && <span className="font-semibold text-white">{author}</span>}
          {author && role && <span className="text-white/40"> · </span>}
          {role && <span className="text-white/55">{role}</span>}
        </figcaption>
      )}
    </figure>
  );
}

// ── Client strip — names or logos of valued clients ─────────────────────────

export function ClientStrip({
  heading = "Valued clients",
  intro,
  clients,
  logos,
}: {
  heading?: string;
  intro?: ReactNode;
  /** Plain text client names */
  clients?: string[];
  /** Logo images: { src, alt } */
  logos?: { src: string; alt?: string }[];
}) {
  return (
    <section className="not-prose my-16">
      <p className="text-muted mb-3 text-center font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
        {heading}
      </p>
      {intro && (
        <p className="text-ink-2 mx-auto mb-8 max-w-2xl text-center leading-relaxed">{intro}</p>
      )}
      {logos && logos.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt ?? ""}
              loading="lazy"
              className="h-10 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-12"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients?.map((c) => (
            <span key={c} className="text-ink-2 text-base font-semibold">
              {c}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

// ── Stats row ───────────────────────────────────────────────────────────────

export function Stats({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <section className="not-prose my-16 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
      {items.map((s) => (
        <div key={s.label} className="border-line flex flex-col gap-2 border-t pt-5">
          <span className="font-display text-ink text-4xl font-extralight leading-none tracking-tight sm:text-5xl">
            {s.value}
          </span>
          <span className="text-muted text-xs font-medium uppercase tracking-[0.14em]">
            {s.label}
          </span>
        </div>
      ))}
    </section>
  );
}

// ── Steps — numbered process sequence ───────────────────────────────────────

export function Steps({
  eyebrow,
  heading,
  items,
}: {
  eyebrow?: string;
  heading?: ReactNode;
  items: { title: ReactNode; body?: ReactNode }[];
}) {
  return (
    <section className="not-prose my-16">
      {(eyebrow || heading) && (
        <div className="mb-10 flex flex-col gap-3">
          {eyebrow && (
            <span className="text-muted font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
              {eyebrow}
            </span>
          )}
          {heading && <h2 className="display-md text-ink max-w-2xl text-balance">{heading}</h2>}
        </div>
      )}
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <li key={i} className="border-line flex flex-col gap-3 border-t pt-5">
            <span className="bg-ink text-canvas grid h-9 w-9 place-items-center rounded-full font-display text-base font-light tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
              {s.title}
            </h3>
            {s.body && <p className="text-ink-2 leading-relaxed">{s.body}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}

// ── Team grid — leadership / people ──────────────────────────────────────────

export function TeamGrid({
  members,
}: {
  members: { name: string; role: string; image?: string; href?: string; linkedin?: string }[];
}) {
  return (
    <section className="not-prose my-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {members.map((m, i) => {
        const Card = (
          <div className="group flex flex-col gap-3">
            <div className="border-line bg-canvas-2 aspect-square w-full overflow-hidden rounded-2xl border">
              {m.image ? (
                <Image
                  src={m.image}
                  alt={m.name}
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              ) : null}
            </div>
            <div>
              <div className="text-ink text-sm font-semibold">{m.name}</div>
              <div className="text-muted text-xs">{m.role}</div>
            </div>
          </div>
        );
        return m.href ? (
          <a key={i} href={m.href} className="block">
            {Card}
          </a>
        ) : (
          <div key={i}>{Card}</div>
        );
      })}
    </section>
  );
}

// ── Timeline — company history / milestones ─────────────────────────────────

export function Timeline({
  eyebrow,
  heading,
  items,
}: {
  eyebrow?: string;
  heading?: ReactNode;
  items: { year: string; title: ReactNode; body?: ReactNode }[];
}) {
  return (
    <section className="not-prose my-16">
      {(eyebrow || heading) && (
        <div className="mb-10 flex flex-col gap-3">
          {eyebrow && (
            <span className="text-muted font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
              {eyebrow}
            </span>
          )}
          {heading && <h2 className="display-md text-ink max-w-2xl text-balance">{heading}</h2>}
        </div>
      )}
      <ol className="border-line relative flex flex-col gap-10 border-l pl-8">
        {items.map((m, i) => (
          <li key={i} className="relative">
            <span className="bg-ink absolute -left-[2.55rem] top-1 grid h-6 w-6 place-items-center rounded-full">
              <span className="bg-canvas h-2 w-2 rounded-full" />
            </span>
            <div className="font-display text-ink text-2xl font-extralight tracking-tight">
              {m.year}
            </div>
            <div className="text-ink mt-1 font-semibold">{m.title}</div>
            {m.body && <p className="text-ink-2 mt-2 max-w-2xl leading-relaxed">{m.body}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}

// ── Inline CTA band ─────────────────────────────────────────────────────────

export function CTA({
  title,
  body,
  button = "Get started",
  href = "/contact/",
}: {
  title: ReactNode;
  body?: ReactNode;
  button?: string;
  href?: string;
}) {
  return (
    <section className="not-prose relative my-16 overflow-hidden rounded-[28px] bg-night px-8 py-14 text-center sm:px-14 sm:py-20">
      <Decoration className="inset-0 opacity-30">
        <TopoLines className="h-full w-full" tone="white" />
      </Decoration>
      <Decoration className="-bottom-20 -left-20 h-72 w-72 opacity-50">
        <OrbCluster className="h-full w-full" variant="amber-pink" />
      </Decoration>
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
        <h2 className="display-md text-white text-balance">{title}</h2>
        {body && <p className="text-lg leading-relaxed text-white/65">{body}</p>}
        <div className="mt-2">
          <Button href={href} size="lg" className="bg-canvas text-ink hover:bg-canvas-2 border-0">
            {button} →
          </Button>
        </div>
      </div>
    </section>
  );
}

// ── Post feed — card grid for Resources listing pages ───────────────────────

interface PostCardItem {
  title: string;
  href: string;
  excerpt?: string;
  image?: string;
  category?: string;
  date?: string;
}

export function PostFeed({
  eyebrow,
  heading,
  posts,
}: {
  eyebrow?: string;
  heading?: ReactNode;
  posts: PostCardItem[];
}) {
  if (!posts || posts.length === 0) return null;
  return (
    <section className="not-prose my-14">
      {(eyebrow || heading) && (
        <div className="mb-8 flex flex-col gap-3">
          {eyebrow && (
            <span className="text-muted font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
              {eyebrow}
            </span>
          )}
          {heading && <h2 className="display-md text-ink max-w-2xl text-balance">{heading}</h2>}
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className="group border-line bg-canvas-cool flex flex-col overflow-hidden rounded-[24px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="bg-canvas-2 relative aspect-[16/9] w-full overflow-hidden">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              ) : null}
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              {p.category && (
                <span className="text-muted text-[11px] font-semibold uppercase tracking-[0.14em]">
                  {p.category}
                </span>
              )}
              <h3 className="font-display text-ink text-lg font-light leading-snug tracking-tight">
                {p.title}
              </h3>
              {p.excerpt && (
                <p className="text-ink-2 line-clamp-3 text-sm leading-relaxed">{p.excerpt}</p>
              )}
              <span className="text-ink mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium">
                Read more
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ── Partner list — logo + description rows ──────────────────────────────────

export function PartnerList({
  partners,
}: {
  partners: { logo?: string; name?: string; body: ReactNode }[];
}) {
  return (
    <section className="not-prose my-14 flex flex-col gap-4">
      {partners.map((p, i) => (
        <div
          key={i}
          className="border-line bg-canvas-cool grid items-center gap-6 rounded-[24px] border p-7 sm:grid-cols-[200px_1fr] sm:gap-10 sm:p-9"
        >
          <div className="flex items-center justify-center">
            {p.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.logo}
                alt={p.name ?? "Partner"}
                loading="lazy"
                className="max-h-16 w-auto object-contain"
              />
            ) : (
              <span className="font-display text-ink text-2xl font-light">{p.name}</span>
            )}
          </div>
          <p className="text-ink-2 leading-relaxed">{p.body}</p>
        </div>
      ))}
    </section>
  );
}

// ── Split intro — hero-like section with image beside lead copy ─────────────

export function SplitIntro({
  image,
  alt,
  children,
  reverse = false,
}: {
  image?: string;
  alt?: string;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="not-prose my-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={clsx("flex flex-col gap-5", reverse && "lg:order-2")}>{children}</div>
      <div className={clsx("relative", reverse && "lg:order-1")}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={alt ?? ""}
            loading="lazy"
            className="border-line w-full rounded-[24px] border bg-canvas-2 object-cover shadow-sm"
          />
        ) : (
          <div className="border-line aspect-[4/3] w-full rounded-[24px] border bg-canvas-2" />
        )}
      </div>
    </section>
  );
}
