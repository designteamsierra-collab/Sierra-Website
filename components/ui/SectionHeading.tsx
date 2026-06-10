import { clsx } from "@/lib/clsx";
import { Eyebrow } from "./Eyebrow";

type Align = "left" | "center";
type Size = "md" | "lg" | "xl";

const SIZE: Record<Size, string> = {
  md: "display-md",
  lg: "display-lg",
  xl: "display-xl",
};

interface SectionHeadingProps {
  /** Optional running index like "01", "02" — handhold-style section orientation */
  index?: string;
  eyebrow?: string;
  eyebrowTone?: "primary" | "accent" | "muted" | "dark";
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: Align;
  /** Display heading size — lg by default */
  size?: Size;
  /** Wrap the heading block in extra bottom margin */
  bottomGap?: "default" | "tight" | "loose";
  className?: string;
  /** Render children below the subtitle (e.g., a CTA row) */
  children?: React.ReactNode;
}

const BOTTOM_GAP = {
  default: "mb-14 sm:mb-16",
  tight: "mb-10 sm:mb-12",
  loose: "mb-16 sm:mb-20",
};

/**
 * Standard section heading pattern used across every page section.
 * Handhold.io-inspired: optional numbered index, subtle eyebrow pill, large
 * extralight serif title, generous gap to subtitle, max-width caps for
 * readability.
 */
export function SectionHeading({
  index,
  eyebrow,
  eyebrowTone = "primary",
  title,
  subtitle,
  align = "left",
  size = "lg",
  bottomGap = "default",
  className,
  children,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={clsx(
        "relative flex flex-col gap-5",
        isCenter ? "items-center text-center" : "items-start",
        BOTTOM_GAP[bottomGap],
        className,
      )}
    >
      {(index || eyebrow) && (
        <div
          className={clsx(
            "will-reveal fade-only flex items-center gap-3",
            isCenter && "justify-center",
          )}
        >
          {index && (
            <span className="text-muted font-mono text-[11px] font-semibold tracking-[0.18em]">
              / {index}
            </span>
          )}
          {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
        </div>
      )}

      <h2
        className={clsx(
          SIZE[size],
          "text-ink text-balance leading-[1.05] will-reveal",
          isCenter ? "max-w-3xl" : "max-w-2xl",
        )}
        data-delay="100"
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            "text-ink-2 text-lg leading-relaxed sm:text-xl will-reveal",
            isCenter ? "max-w-2xl" : "max-w-xl",
          )}
          data-delay="200"
        >
          {subtitle}
        </p>
      )}

      {children && (
        <div className={clsx("mt-3 will-reveal", isCenter && "flex justify-center")} data-delay="300">
          {children}
        </div>
      )}
    </div>
  );
}
