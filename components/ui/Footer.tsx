import Link from "next/link";
import { Container } from "./Container";
import { SierraLogo } from "./SierraLogo";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "AI Suite", href: "/ai-suite/" },
      { label: "Clean Core", href: "/clean-core/" },
      { label: "SAP RISE", href: "/sap-rise/" },
      { label: "Data Analytics", href: "/data-analytics/" },
      { label: "Integration", href: "/integration/" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Energy & Natural Resources", href: "/energy-and-natural-resources/" },
      { label: "Healthcare", href: "/healthcare/" },
      { label: "High-Tech", href: "/high-tech/" },
      { label: "Public Sector", href: "/public-sector/" },
      { label: "Retail", href: "/retail/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about-us/" },
      { label: "Leadership", href: "/leadership-teams/" },
      { label: "Careers", href: "/careers/" },
      { label: "Partners & Alliances", href: "/partners-and-alliances/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "AI Cockpit demo", href: "/rise-cockpit/request-access/" },
      { label: "Blog", href: "/blog/" },
      { label: "Webinars", href: "/webinars/" },
      { label: "Events", href: "/events/" },
      { label: "Success Stories", href: "/success-stories/" },
      { label: "Testimonials", href: "/testimonials/" },
    ],
  },
];

interface FooterProps {
  columns?: FooterColumn[];
}

export function Footer({ columns = DEFAULT_COLUMNS }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-night text-canvas">
      <Container size="xl" className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,1fr)] lg:gap-12">
          <div className="flex flex-col gap-4 will-reveal">
            <Link href="/" aria-label="Sierra Digital — home">
              <SierraLogo onDark className="h-7 w-auto" />
            </Link>
            <p className="text-canvas/70 max-w-xs text-sm leading-relaxed">
              SAP Silver Partner. BTP &amp; AI Innovation Station. Helping enterprises modernize,
              innovate, and drive smarter business outcomes.
            </p>
          </div>
          {columns.map((col, colIdx) => (
            <div
              key={col.title}
              className="flex flex-col gap-3 will-reveal"
              data-delay={String((colIdx + 1) * 75)}
            >
              <h3 className="text-canvas/60 font-mono text-xs font-semibold tracking-[0.14em] uppercase">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-canvas/85 hover:text-canvas underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-canvas/10 mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center">
          <p className="text-canvas/60">© {year} Sierra Digital. All rights reserved.</p>
          <ul className="text-canvas/70 flex flex-wrap items-center gap-x-5 gap-y-1">
            <li>
              <Link href="/privacy-policy/" className="hover:text-canvas">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service/" className="hover:text-canvas">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy/" className="hover:text-canvas">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
