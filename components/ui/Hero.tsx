import Image from "next/image";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { Decoration, OrbCluster, PeakSilhouette, TopoLines } from "./Illustrations";

interface HeroProps {
  eyebrow?: string;
  eyebrowTone?: "primary" | "accent" | "muted" | "dark";
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  visual?: React.ReactNode;
  align?: "asymmetric" | "centered";
  /** Handhold-style: particle ribbon backdrop, centered, white surface */
  ribbon?: boolean;
  /** Logos / trust row rendered beneath the ribbon */
  trust?: React.ReactNode;
}

export function Hero({
  eyebrow,
  eyebrowTone = "primary",
  title,
  subtitle,
  actions,
  visual,
  align = "asymmetric",
  ribbon = false,
  trust,
}: HeroProps) {
  // ── Ribbon variant — handhold.io signature hero ────────────────────────────
  if (ribbon) {
    return (
      <header className="relative overflow-hidden bg-canvas pt-24 pb-20 sm:pt-28 lg:pt-32">
        {/* Soft radial glow behind the headline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 18%, rgba(47,141,255,0.10) 0%, transparent 60%), " +
              "radial-gradient(ellipse 50% 45% at 50% 22%, rgba(243,198,91,0.10) 0%, transparent 55%)",
          }}
        />
        {/* Decorative orb clusters — faint, top corners */}
        <Decoration className="-top-24 -left-28 h-[440px] w-[440px] animate-blob-a opacity-40">
          <OrbCluster className="h-full w-full" variant="sky-emerald" />
        </Decoration>
        <Decoration className="-top-20 -right-28 h-[400px] w-[400px] animate-blob-b opacity-35">
          <OrbCluster className="h-full w-full" variant="amber-pink" />
        </Decoration>
        {/* Subtle dot grid, masked toward the top */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-line-strong) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 15%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 15%, transparent 75%)",
            opacity: 0.5,
          }}
        />

        <Container size="xl">
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            {eyebrow ? (
              <div className="hero-reveal hero-d0">
                <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
              </div>
            ) : null}
            <h1 className="display-2xl text-ink hero-reveal hero-d1 text-balance">{title}</h1>
            {subtitle ? (
              <p className="text-ink-2 max-w-2xl text-lg leading-relaxed sm:text-xl hero-reveal hero-d2">
                {subtitle}
              </p>
            ) : null}
            {actions ? (
              <div className="mt-3 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
                {actions}
              </div>
            ) : null}
          </div>
        </Container>

        {/* Particle ribbon — flows full-width beneath the headline */}
        <div className="relative mt-2 h-44 w-full sm:mt-6 sm:h-60 lg:h-72">
          <Image
            src="/visuals/hero-ribbon-background.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="animate-float-slow object-cover object-center"
          />
        </div>

        {/* Optional product visual beneath the ribbon */}
        {visual ? (
          <Container size="lg" className="relative mt-6">
            <div className="hero-reveal-visual hero-d2 mx-auto max-w-3xl">{visual}</div>
          </Container>
        ) : null}

        {/* Trust / customer logo row */}
        {trust ? (
          <Container size="xl" className="relative mt-14 sm:mt-20">
            {trust}
          </Container>
        ) : null}
      </header>
    );
  }

  // ── Default variant — peaks + orbs (used elsewhere) ─────────────────────────
  const isCentered = align === "centered" || !visual;

  return (
    <header className="relative overflow-hidden bg-canvas pt-24 pb-28 sm:pt-32 lg:pt-40 lg:pb-36">
      <Decoration className="inset-0 opacity-40">
        <TopoLines className="h-full w-full" tone="muted" />
      </Decoration>
      <Decoration className="-top-32 -left-32 h-[520px] w-[520px] animate-blob-a opacity-60">
        <OrbCluster className="h-full w-full" variant="teal-violet" />
      </Decoration>
      <Decoration className="-bottom-40 -right-32 h-[420px] w-[420px] animate-blob-b opacity-50">
        <OrbCluster className="h-full w-full" variant="amber-pink" />
      </Decoration>

      <Container size={isCentered ? "lg" : "xl"}>
        {isCentered ? (
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            {eyebrow ? (
              <div className="hero-reveal hero-d0">
                <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
              </div>
            ) : null}
            <h1 className="display-2xl text-ink hero-reveal hero-d1 text-balance">{title}</h1>
            {subtitle ? (
              <p className="text-ink-2 max-w-2xl text-lg leading-relaxed sm:text-xl hero-reveal hero-d2">
                {subtitle}
              </p>
            ) : null}
            {actions ? (
              <div className="mt-4 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
                {actions}
              </div>
            ) : null}
          </div>
        ) : (
          <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="flex flex-col items-start gap-6">
              {eyebrow ? (
                <div className="hero-reveal hero-d0">
                  <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
                </div>
              ) : null}
              <h1 className="display-2xl text-ink hero-reveal hero-d1 text-balance">{title}</h1>
              {subtitle ? (
                <p className="text-ink-2 max-w-xl text-lg leading-relaxed sm:text-xl hero-reveal hero-d2">
                  {subtitle}
                </p>
              ) : null}
              {actions ? (
                <div className="mt-4 flex flex-wrap gap-3 hero-reveal hero-d3">{actions}</div>
              ) : null}
            </div>
            <div className="relative hero-reveal-visual hero-d2 animate-float-slow">{visual}</div>
          </div>
        )}
      </Container>

      <div className="absolute right-0 bottom-0 left-0 h-32 sm:h-40 pointer-events-none select-none">
        <PeakSilhouette className="h-full w-full" tone="muted" />
      </div>
    </header>
  );
}
