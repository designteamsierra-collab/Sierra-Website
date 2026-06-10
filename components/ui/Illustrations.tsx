import { clsx } from "@/lib/clsx";

/**
 * Sierra Illustration System
 * ─────────────────────────────────────────────────────────────────────────────
 * Two motifs braided together:
 *   1. PEAKS — mountain/summit/topographic forms, callback to Sierra's
 *      founding story (Senthil Kumar's mountain inspiration, "altitude is
 *      attitude"). Distinctive, brand-owned.
 *   2. ORBS — handhold.io-style soft gradient blobs and decorative dots.
 *      Used for warmth and modern depth.
 *
 * All illustrations are inline SVG — no image assets, easy to recolor with
 * CSS `currentColor` or explicit fills. Sized via Tailwind on the wrapper.
 */

// ── PEAK MOTIF ───────────────────────────────────────────────────────────────

interface PeakProps {
  className?: string;
  /** Darker overlay style for use on cream backgrounds */
  tone?: "ink" | "muted" | "primary" | "white";
}

const TONE_STROKE: Record<NonNullable<PeakProps["tone"]>, string> = {
  ink: "#0a0a0b",
  muted: "#a1a1aa",
  primary: "#0e5b7e",
  white: "rgba(255,255,255,0.85)",
};

/**
 * Sierra signature: abstract layered mountain peaks. Use as a section divider
 * or hero backdrop element. Aspect 4:1 — works well as a banner.
 */
export function PeakSilhouette({ className, tone = "muted" }: PeakProps) {
  const stroke = TONE_STROKE[tone];
  return (
    <svg
      viewBox="0 0 800 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Back peaks — faint */}
      <path
        d="M0 165 L120 65 L210 130 L340 35 L470 110 L580 50 L700 130 L800 80 L800 200 L0 200 Z"
        fill={stroke}
        opacity="0.10"
      />
      {/* Mid peaks */}
      <path
        d="M0 175 L90 110 L180 155 L290 70 L400 140 L520 95 L640 160 L760 105 L800 145 L800 200 L0 200 Z"
        fill={stroke}
        opacity="0.18"
      />
      {/* Front peaks — boldest */}
      <path
        d="M0 200 L80 145 L165 185 L250 125 L340 175 L440 130 L540 180 L660 140 L760 175 L800 165 L800 200 Z"
        fill={stroke}
        opacity="0.32"
      />
      {/* Summit accent marks */}
      <circle cx="250" cy="125" r="2.5" fill={stroke} opacity="0.9" />
      <circle cx="440" cy="130" r="2.5" fill={stroke} opacity="0.9" />
      <circle cx="660" cy="140" r="2.5" fill={stroke} opacity="0.9" />
    </svg>
  );
}

/**
 * Tight close-up of a single peak with topographic detail. Use as a
 * pictogram-style icon next to feature titles.
 */
export function PeakIcon({ className, tone = "ink" }: PeakProps) {
  const stroke = TONE_STROKE[tone];
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Outer peak */}
      <path
        d="M4 40 L18 18 L24 26 L32 12 L44 40 Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Inner topo line */}
      <path
        d="M14 32 L18 25 L22 31 L26 23 L30 30 L34 24"
        stroke={stroke}
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.5"
      />
      {/* Summit flag */}
      <circle cx="32" cy="12" r="1.5" fill={stroke} />
    </svg>
  );
}

/**
 * Topographic contour lines — abstract elevation map. Use as a background
 * pattern on dark/light sections. Tiles seamlessly horizontally.
 */
export function TopoLines({ className, tone = "muted" }: PeakProps) {
  const stroke = TONE_STROKE[tone];
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke={stroke} strokeWidth="0.8" fill="none" opacity="0.35">
        <path d="M-50 200 Q150 130 300 200 T650 200" />
        <path d="M-50 220 Q150 155 300 220 T650 220" />
        <path d="M-50 240 Q150 180 300 240 T650 240" />
        <path d="M-50 260 Q150 205 300 260 T650 260" />
        <path d="M-50 180 Q150 105 300 180 T650 180" />
        <path d="M-50 160 Q150 80 300 160 T650 160" />
        <path d="M-50 140 Q150 55 300 140 T650 140" />
        <path d="M-50 280 Q150 230 300 280 T650 280" />
        <path d="M-50 300 Q150 255 300 300 T650 300" />
      </g>
    </svg>
  );
}

/**
 * Tiny summit marker — used as bullet point in feature lists.
 * Triangle + horizontal base line.
 */
export function SummitMarker({ className, tone = "ink" }: PeakProps) {
  const stroke = TONE_STROKE[tone];
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 11 L7 3 L12 11 Z" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />
      <line x1="0.5" y1="13" x2="13.5" y2="13" stroke={stroke} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

// ── ORB MOTIF ────────────────────────────────────────────────────────────────

interface OrbProps {
  className?: string;
  variant?: "teal-violet" | "amber-pink" | "sky-emerald" | "violet-blue";
}

const ORB_PALETTES: Record<NonNullable<OrbProps["variant"]>, [string, string, string]> = {
  "teal-violet": ["#22D3EE", "#8B5CF6", "#A855F7"],
  "amber-pink": ["#F59E0B", "#F0ABFC", "#EC4899"],
  "sky-emerald": ["#38BDF8", "#10B981", "#22D3EE"],
  "violet-blue": ["#8B5CF6", "#3B82F6", "#22D3EE"],
};

/**
 * Cluster of overlapping soft blurred orbs — handhold.io's signature
 * decorative element. Use as a corner decoration or behind text blocks.
 */
export function OrbCluster({ className, variant = "teal-violet" }: OrbProps) {
  const [a, b, c] = ORB_PALETTES[variant];
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id={`orb-a-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={a} stopOpacity="0.6" />
          <stop offset="100%" stopColor={a} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`orb-b-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={b} stopOpacity="0.55" />
          <stop offset="100%" stopColor={b} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`orb-c-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={c} stopOpacity="0.45" />
          <stop offset="100%" stopColor={c} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="130" r="100" fill={`url(#orb-a-${variant})`} />
      <circle cx="195" cy="105" r="85" fill={`url(#orb-b-${variant})`} />
      <circle cx="155" cy="200" r="95" fill={`url(#orb-c-${variant})`} />
    </svg>
  );
}

/**
 * Single soft orb with optional blur — useful as a corner accent.
 */
export function SingleOrb({
  className,
  color = "#22D3EE",
  opacity = 0.5,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id={`single-orb-${color.replace("#", "")}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity={opacity} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill={`url(#single-orb-${color.replace("#", "")})`} />
    </svg>
  );
}

// ── UTILITY PATTERNS ────────────────────────────────────────────────────────

/**
 * Dot grid — subtle texture for section backgrounds.
 */
export function GridDots({ className, tone = "muted" }: PeakProps) {
  const stroke = TONE_STROKE[tone];
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <pattern id="grid-dots-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="12" cy="12" r="1.2" fill={stroke} opacity="0.4" />
      </pattern>
      <rect width="200" height="200" fill="url(#grid-dots-pattern)" />
    </svg>
  );
}

/**
 * 4-point sparkle. Used as a decorative emphasis next to small text.
 */
export function Sparkle({ className, tone = "ink" }: PeakProps) {
  const stroke = TONE_STROKE[tone];
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 1 L8.8 7.2 L15 8 L8.8 8.8 L8 15 L7.2 8.8 L1 8 L7.2 7.2 Z"
        fill={stroke}
      />
    </svg>
  );
}

/**
 * Abstract connection nodes — three dots linked by curved paths. Evokes
 * data flow / integration without being literal.
 */
export function ConnectionNodes({ className, tone = "ink" }: PeakProps) {
  const stroke = TONE_STROKE[tone];
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 60 Q60 20 100 60 T180 60" stroke={stroke} strokeWidth="1.2" opacity="0.45" />
      <path d="M20 60 Q60 100 100 60 T180 60" stroke={stroke} strokeWidth="1.2" opacity="0.45" />
      <circle cx="20" cy="60" r="6" fill={stroke} />
      <circle cx="100" cy="60" r="6" fill={stroke} />
      <circle cx="180" cy="60" r="6" fill={stroke} />
      <circle cx="100" cy="60" r="11" stroke={stroke} strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

/**
 * Vertical altitude scale — tick marks ascending. Used as a side decoration.
 */
export function AltitudeScale({ className, tone = "muted" }: PeakProps) {
  const stroke = TONE_STROKE[tone];
  return (
    <svg
      viewBox="0 0 40 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <line x1="20" y1="10" x2="20" y2="230" stroke={stroke} strokeWidth="1" opacity="0.6" />
      {[10, 40, 70, 100, 130, 160, 190, 220].map((y, i) => (
        <line
          key={y}
          x1={i % 2 === 0 ? 12 : 16}
          x2="20"
          y1={y}
          y2={y}
          stroke={stroke}
          strokeWidth="1"
          opacity={i % 2 === 0 ? 0.9 : 0.5}
        />
      ))}
      <text x="2" y="14" fontSize="7" fill={stroke} opacity="0.8" fontFamily="monospace">
        4K
      </text>
      <text x="2" y="74" fontSize="7" fill={stroke} opacity="0.8" fontFamily="monospace">
        3K
      </text>
      <text x="2" y="134" fontSize="7" fill={stroke} opacity="0.8" fontFamily="monospace">
        2K
      </text>
      <text x="2" y="194" fontSize="7" fill={stroke} opacity="0.8" fontFamily="monospace">
        1K
      </text>
    </svg>
  );
}

/**
 * Wave lines — abstract flowing horizontal lines for section dividers.
 */
export function WaveLines({ className, tone = "muted" }: PeakProps) {
  const stroke = TONE_STROKE[tone];
  return (
    <svg
      viewBox="0 0 400 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <path d="M0 20 Q100 5 200 20 T400 20" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <path d="M0 25 Q100 10 200 25 T400 25" stroke={stroke} strokeWidth="1" opacity="0.3" />
      <path d="M0 30 Q100 15 200 30 T400 30" stroke={stroke} strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

// ── HELPER WRAPPER ──────────────────────────────────────────────────────────

/**
 * Position-helper wrapper for placing illustrations as decorative corner
 * elements. Pointer-events disabled, aria-hidden via the SVG itself.
 */
export function Decoration({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx("pointer-events-none absolute select-none", className)}
    >
      {children}
    </div>
  );
}
