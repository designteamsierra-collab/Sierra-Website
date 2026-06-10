import { clsx } from "@/lib/clsx";
import { Card } from "./Card";
import { SingleOrb } from "./Illustrations";

export interface Feature {
  icon?: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  href?: string;
  hrefLabel?: string;
}

interface FeatureGridProps {
  items: Feature[];
  /** 2, 3, or 4 columns at desktop. Falls back to 1-col mobile, 2-col tablet. */
  columns?: 2 | 3 | 4;
  /** Bigger feature cards with more padding and a subtle decorative orb */
  size?: "default" | "feature";
  className?: string;
}

const COLS: Record<2 | 3 | 4, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

const DELAYS = [0, 100, 200, 300, 400, 500];

// Rotating accent palette for the decorative corner orb on feature cards
const ORB_COLORS = ["#22D3EE", "#8B5CF6", "#F0ABFC", "#38BDF8", "#A855F7", "#22D3EE"];

export function FeatureGrid({
  items,
  columns = 3,
  size = "feature",
  className,
}: FeatureGridProps) {
  return (
    <ul
      className={clsx(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6",
        COLS[columns],
        className,
      )}
    >
      {items.map((f, i) => (
        <li
          key={i}
          className="will-reveal"
          data-delay={DELAYS[Math.min(i, DELAYS.length - 1)]}
        >
          <Card
            hoverable
            size={size}
            className="relative flex h-full flex-col gap-4 overflow-hidden"
          >
            {/* Decorative corner orb — subtle */}
            {size === "feature" && (
              <SingleOrb
                className="absolute -top-12 -right-12 h-40 w-40 opacity-50"
                color={ORB_COLORS[i % ORB_COLORS.length]}
                opacity={0.35}
              />
            )}

            {f.icon ? (
              <div className="relative bg-ink text-canvas mb-1 grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                {f.icon}
              </div>
            ) : null}
            <h3 className="font-display text-ink relative text-2xl leading-snug font-light tracking-tight">
              {f.title}
            </h3>
            <p className="text-ink-2 relative leading-relaxed">{f.body}</p>
            {f.href ? (
              <a
                href={f.href}
                className="text-ink hover:text-accent-700 relative mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium underline-offset-4 hover:underline transition-colors"
              >
                {f.hrefLabel ?? "Learn more"}
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            ) : null}
          </Card>
        </li>
      ))}
    </ul>
  );
}
