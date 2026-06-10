import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";

interface HandsCTAProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Handhold-style closing CTA: pearlescent reaching-hands imagery framing a
 * centered call to action on a warm surface. The two hands reach inward from
 * either side toward the headline — the "hand-hold" metaphor.
 */
export function HandsCTA({
  eyebrow = "Let's talk",
  title,
  subtitle,
  primaryLabel = "Book a discovery call",
  primaryHref = "/contact/",
  secondaryLabel,
  secondaryHref,
}: HandsCTAProps) {
  return (
    <section className="bg-canvas relative overflow-hidden">
      {/* Reaching hands — large, reaching inward toward the headline. On a white
          surface the image's white background is seamless; mix-blend-multiply
          guards against any off-white fringing. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 select-none sm:block"
      >
        <div className="relative mx-auto h-[440px] max-w-7xl lg:h-[520px]">
          <Image
            src="/visuals/footer-hands-cta.png"
            alt=""
            fill
            sizes="100vw"
            className="animate-float-slow object-contain mix-blend-multiply"
          />
        </div>
      </div>

      <Container size="lg" className="relative py-28 sm:py-36 lg:py-44">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          {eyebrow ? (
            <span className="text-muted will-reveal fade-only font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="display-lg text-ink text-balance will-reveal" data-delay="100">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-ink-2 max-w-xl text-lg leading-relaxed will-reveal" data-delay="200">
              {subtitle}
            </p>
          ) : null}
          <div className="mt-3 flex flex-wrap justify-center gap-3 will-reveal" data-delay="300">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
