import Link from "next/link";
import { clsx } from "@/lib/clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  // Handhold-style: near-black primary, white text
  primary:
    "bg-ink text-canvas hover:bg-ink-2 active:bg-ink shadow-sm hover:shadow-md",
  secondary:
    "bg-canvas text-ink border border-line-strong hover:border-ink hover:text-ink",
  ghost: "text-ink hover:bg-canvas-2",
  link: "text-ink underline-offset-4 hover:underline hover:text-accent-700 px-0",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "text-sm px-3.5 py-1.5",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-150 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap active:scale-[0.97]";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps =
  | (CommonProps &
      Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
        href?: undefined;
      })
  | (CommonProps & {
      href: string;
      external?: boolean;
      "aria-label"?: string;
    });

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const cls = clsx(BASE, VARIANTS[variant], variant !== "link" && SIZES[size], className);

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external || /^https?:\/\//i.test(href)) {
      return (
        <a
          {...rest}
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          {...{ variant: undefined, size: undefined, children: undefined }}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={rest["aria-label"]}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...buttonRest } = props;
  void _v;
  void _s;
  void _c;
  void _ch;
  return (
    <button {...buttonRest} className={cls}>
      {children}
    </button>
  );
}
