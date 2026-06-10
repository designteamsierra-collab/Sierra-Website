import { clsx } from "@/lib/clsx";

export interface Step {
  title: React.ReactNode;
  body: React.ReactNode;
}

interface StepStripProps {
  steps: Step[];
  className?: string;
}

export function StepStrip({ steps, className }: StepStripProps) {
  return (
    <ol
      className={clsx("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8", className)}
    >
      {steps.map((step, i) => (
        <li
          key={i}
          className="relative will-reveal"
          data-delay={Math.min(i * 150, 450)}
        >
          <div className="bg-primary-700 text-canvas font-display absolute -top-3 left-0 grid h-9 w-9 place-items-center rounded-full text-sm font-semibold tabular-nums transition-transform duration-300 hover:scale-110">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="border-line bg-canvas border-l-2 pt-12 pl-6">
            <h3 className="font-display text-ink mb-2 text-xl font-semibold tracking-tight">
              {step.title}
            </h3>
            <p className="text-ink-2 leading-relaxed">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
