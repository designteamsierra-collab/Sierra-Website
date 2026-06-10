import Image from "next/image";
import { clsx } from "@/lib/clsx";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

interface TestimonialsProps {
  items: Testimonial[];
  className?: string;
}

/**
 * Handhold-style testimonial grid — warm off-white quote cards with circular
 * avatar portraits. Restrained typography, generous spacing.
 */
export function Testimonials({ items, className }: TestimonialsProps) {
  return (
    <div className={clsx("grid grid-cols-1 gap-5 md:grid-cols-3", className)}>
      {items.map((t, i) => (
        <figure
          key={i}
          className="border-line bg-canvas-cool flex flex-col gap-6 rounded-[24px] border p-7 will-reveal sm:p-8"
          data-delay={String(Math.min(i * 100, 300))}
        >
          <blockquote className="text-ink text-lg leading-relaxed font-light">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-auto flex items-center gap-3">
            {t.avatar ? (
              <Image
                src={t.avatar}
                alt={t.author}
                width={44}
                height={44}
                className="border-line h-11 w-11 rounded-full border object-cover"
              />
            ) : (
              <span className="bg-canvas-2 grid h-11 w-11 place-items-center rounded-full text-sm font-semibold text-muted">
                {t.author.charAt(0)}
              </span>
            )}
            <div className="flex flex-col">
              <span className="text-ink text-sm font-semibold">{t.author}</span>
              <span className="text-muted text-xs">{t.role}</span>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
