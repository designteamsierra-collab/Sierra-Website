import { clsx } from "@/lib/clsx";
import { Container } from "./Container";

type SectionTone = "canvas" | "alt" | "warm" | "night";
type SectionDensity = "default" | "compact" | "tight";

const TONES: Record<SectionTone, string> = {
  canvas: "bg-canvas text-ink",
  alt: "bg-canvas-2 text-ink",
  warm: "bg-canvas-warm text-ink",
  night: "bg-night text-canvas",
};

const DENSITY: Record<SectionDensity, string> = {
  // Generous vertical rhythm — handhold-style breathing room
  default: "py-24 sm:py-28 lg:py-36",
  compact: "py-16 sm:py-20 lg:py-24",
  tight: "py-12",
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  density?: SectionDensity;
  containerSize?: "prose" | "md" | "lg" | "xl";
  as?: "section" | "header" | "footer" | "aside";
}

export function Section({
  tone = "canvas",
  density = "default",
  containerSize = "xl",
  as: Tag = "section",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag className={clsx("relative", TONES[tone], DENSITY[density], className)} {...rest}>
      <Container size={containerSize}>{children}</Container>
    </Tag>
  );
}
