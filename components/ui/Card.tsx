import { clsx } from "@/lib/clsx";

type CardTone = "surface" | "alt" | "warm" | "outline";

const TONES: Record<CardTone, string> = {
  surface: "bg-canvas-cool border border-line",
  alt: "bg-canvas-2 border border-line",
  warm: "bg-canvas-warm border border-line",
  outline: "bg-transparent border border-line-strong",
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: CardTone;
  hoverable?: boolean;
  /** Bigger 28-32px radius for feature cards (handhold style) */
  size?: "default" | "feature";
}

const RADIUS: Record<NonNullable<CardProps["size"]>, string> = {
  default: "rounded-2xl p-6 sm:p-7",
  feature: "rounded-[28px] p-7 sm:p-8 lg:p-10",
};

export function Card({
  tone = "surface",
  hoverable = false,
  size = "default",
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={clsx(
        RADIUS[size],
        "transition-all duration-300 ease-out",
        TONES[tone],
        hoverable &&
          "hover:border-line-strong hover:shadow-lg hover:-translate-y-1 hover:scale-[1.015] shimmer-wrap",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
