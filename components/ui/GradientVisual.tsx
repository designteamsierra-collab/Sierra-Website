import { clsx } from "@/lib/clsx";

type GradientAccent = "default" | "teal-pink" | "violet-blue";

interface GradientVisualProps {
  children?: React.ReactNode;
  className?: string;
  accent?: GradientAccent;
  grain?: boolean;
  as?: React.ElementType;
}

const ACCENT: Record<GradientAccent, string> = {
  default: "",
  "teal-pink": "gradient-visual-teal-pink",
  "violet-blue": "gradient-visual-violet-blue",
};

export function GradientVisual({
  children,
  className,
  accent = "default",
  grain = false,
  as: Tag = "div",
}: GradientVisualProps) {
  return (
    <Tag
      className={clsx(
        "gradient-visual",
        ACCENT[accent],
        grain && "gradient-visual-grain",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
