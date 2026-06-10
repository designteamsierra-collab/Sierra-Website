import { clsx } from "@/lib/clsx";

type EyebrowTone = "primary" | "accent" | "muted" | "dark";

/**
 * Handhold-style eyebrow: subtle neutral pill with a colored dot prefix
 * indicating the section's accent. Replaces the old saturated background pills.
 */
const TONES: Record<EyebrowTone, { wrap: string; dot: string }> = {
  primary: {
    wrap: "bg-canvas-2 text-ink-2 border border-line",
    dot: "bg-ink",
  },
  accent: {
    wrap: "bg-canvas-2 text-ink-2 border border-line",
    dot: "bg-accent-500",
  },
  muted: {
    wrap: "bg-canvas-2 text-muted border border-line",
    dot: "bg-muted-faint",
  },
  dark: {
    wrap: "bg-white/8 text-white/85 border border-white/15",
    dot: "bg-cyan-300",
  },
};

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: EyebrowTone;
}

export function Eyebrow({ tone = "primary", className, children, ...rest }: EyebrowProps) {
  const { wrap, dot } = TONES[tone];
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase",
        wrap,
        className,
      )}
      {...rest}
    >
      <span className={clsx("h-1.5 w-1.5 rounded-full", dot)} aria-hidden="true" />
      {children}
    </span>
  );
}
