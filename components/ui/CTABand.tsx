import { Container } from "./Container";

interface CTABandProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  tone?: "night" | "primary";
}

export function CTABand({ eyebrow, title, subtitle, actions, tone = "night" }: CTABandProps) {
  const isDark = tone === "night";
  const bg = isDark ? "bg-night text-canvas" : "bg-primary-700 text-white";
  const eyebrowCls = isDark
    ? "bg-primary-900/60 text-primary-300 border border-primary-700/50"
    : "bg-white/15 text-white border border-white/20";
  const subtitleCls = isDark ? "text-canvas/70" : "text-white/80";

  return (
    <section className={`${bg} relative overflow-hidden`}>
      {/* Animated gradient blobs */}
      <div
        aria-hidden="true"
        className="animate-blob-a pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 75% -5%, rgba(34,211,238,0.18) 0%, transparent 65%), " +
            "radial-gradient(ellipse 50% 60% at 5% 105%, rgba(168,85,247,0.22) 0%, transparent 60%), " +
            "radial-gradient(ellipse 40% 50% at 45% 50%, rgba(139,92,246,0.10) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-blob-b pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{ background: "rgba(56,189,248,0.08)" }}
      />

      <Container size="lg" className="relative py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-start gap-5 sm:items-center sm:text-center">
          {eyebrow ? (
            <span
              className={`${eyebrowCls} will-reveal fade-only inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase`}
            >
              {eyebrow}
            </span>
          ) : null}
          <h2 className="display-lg max-w-3xl will-reveal" data-delay="100">{title}</h2>
          {subtitle ? (
            <p
              className={`${subtitleCls} max-w-2xl text-lg leading-relaxed sm:text-xl will-reveal`}
              data-delay="200"
            >
              {subtitle}
            </p>
          ) : null}
          {actions ? (
            <div className="mt-2 flex flex-wrap gap-3 will-reveal" data-delay="300">
              {actions}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
