import { clsx } from "@/lib/clsx";

interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  unit?: string;
}

/**
 * Handhold-style stat: very large extralight serif number, tight label
 * underneath separated by a hairline. Left-aligned for grid use.
 */
export function Stat({ value, unit, label, className, ...rest }: StatProps) {
  return (
    <div
      className={clsx(
        "border-line flex flex-col gap-3 border-t pt-5 will-reveal scale-in",
        className,
      )}
      {...rest}
    >
      <div className="font-display text-ink flex items-baseline gap-1 text-5xl leading-none font-extralight tracking-tight sm:text-6xl">
        <span>{value}</span>
        {unit ? <span className="text-3xl font-light sm:text-4xl">{unit}</span> : null}
      </div>
      <div className="text-muted text-xs font-medium uppercase tracking-[0.14em]">
        {label}
      </div>
    </div>
  );
}
