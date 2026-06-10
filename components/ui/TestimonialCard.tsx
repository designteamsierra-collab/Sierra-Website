import { clsx } from "@/lib/clsx";

interface TestimonialCardProps {
  quote: React.ReactNode;
  attribution: string;
  attributionRole?: string;
  attributionCompany?: string;
  dark?: boolean;
  className?: string;
}

export function TestimonialCard({
  quote,
  attribution,
  attributionRole,
  attributionCompany,
  dark = false,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={clsx(
        "flex flex-col gap-6 rounded-[28px] p-7 sm:p-9 will-reveal",
        dark
          ? "gradient-visual gradient-visual-violet-blue"
          : "bg-canvas-warm border-line border",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 26"
        className={clsx("h-7 w-9", dark ? "text-primary-300/60" : "text-primary-300")}
        fill="currentColor"
      >
        <path d="M0 26V14.4C0 10.13 1.18 6.7 3.55 4.13 5.91 1.55 9.06 0 13 0v5.5c-1.97 0-3.66.66-5.05 1.97A6.62 6.62 0 0 0 6 12h7v14H0Zm19 0V14.4c0-4.27 1.18-7.7 3.55-10.27C24.91 1.55 28.06 0 32 0v5.5c-1.97 0-3.66.66-5.05 1.97A6.62 6.62 0 0 0 25 12h7v14H19Z" />
      </svg>
      <blockquote
        className={clsx(
          "text-lg leading-relaxed sm:text-xl",
          dark ? "text-white/85" : "text-ink",
        )}
      >
        {quote}
      </blockquote>
      <figcaption
        className={clsx("border-t pt-4 text-sm", dark ? "border-white/10" : "border-line")}
      >
        <div className={clsx("font-semibold", dark ? "text-white/90" : "text-ink")}>
          {attribution}
        </div>
        {(attributionRole || attributionCompany) && (
          <div className={dark ? "text-white/45" : "text-muted"}>
            {attributionRole}
            {attributionRole && attributionCompany ? " · " : null}
            {attributionCompany}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
