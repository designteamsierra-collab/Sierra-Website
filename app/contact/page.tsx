import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientVisual } from "@/components/ui/GradientVisual";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { Decoration, OrbCluster, PeakSilhouette } from "@/components/ui/Illustrations";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Sierra Digital",
  description:
    "Reach out to Sierra Digital to learn how we help organizations assess, migrate, and modernize their SAP investments with AI, analytics, and cloud solutions.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Us | Sierra Digital",
    description:
      "Reach out to Sierra Digital to learn how we help organizations assess, migrate, and modernize their SAP investments with AI, analytics, and cloud solutions.",
    url: "https://sierradigitalinc.com/contact/",
    type: "website",
  },
};

const CONTACT_POINTS = [
  {
    label: "General enquiries",
    value: "info@sierradigitalinc.com",
    href: "mailto:info@sierradigitalinc.com",
  },
  {
    label: "Sales & partnerships",
    value: "sales@sierradigitalinc.com",
    href: "mailto:sales@sierradigitalinc.com",
  },
  {
    label: "Headquarters",
    value: "Houston, TX — with offices across North America",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Page header — dark band with peak silhouette divider */}
        <div className="relative overflow-hidden bg-night">
          <Decoration className="-top-20 -right-20 h-[420px] w-[420px] opacity-50 animate-blob-a">
            <OrbCluster className="h-full w-full" variant="teal-violet" />
          </Decoration>
          <Container size="lg" className="relative pb-0 pt-16 sm:pt-20 lg:pt-24">
            <GradientVisual
              accent="teal-pink"
              grain
              className="px-8 py-14 sm:px-14 sm:py-16 lg:px-20 lg:py-20 hero-reveal-visual hero-d0"
            >
              <div className="hero-reveal hero-d1">
                <Eyebrow tone="dark">Get in touch</Eyebrow>
              </div>
              <h1 className="display-xl text-white mt-6 max-w-3xl leading-[1.05] text-balance hero-reveal hero-d2">
                Let&apos;s talk about your <em className="font-serif italic">SAP journey.</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65 hero-reveal hero-d3">
                Whether you&apos;re planning an ECC-to-S/4HANA migration, exploring AI
                capabilities on SAP BTP, or looking for a managed-services partner — start
                the conversation here.
              </p>
            </GradientVisual>
          </Container>
          <div className="pointer-events-none mt-12 h-20 select-none sm:h-24">
            <PeakSilhouette className="h-full w-full" tone="white" />
          </div>
        </div>

        {/* Form + context grid */}
        <section className="bg-canvas">
          <Container size="lg" className="py-20 sm:py-24 lg:py-32">
            <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              {/* Left: contact points + secondary CTA — text-aligned column */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2 will-reveal">
                  <p className="text-muted font-mono text-[11px] font-semibold tracking-[0.18em]">
                    / 01
                  </p>
                  <h2 className="display-md text-ink text-balance">
                    Reach us directly.
                  </h2>
                </div>

                <ul className="flex flex-col gap-6 will-reveal" data-delay="100">
                  {CONTACT_POINTS.map(({ label, value, href }) => (
                    <li
                      key={label}
                      className="border-line flex flex-col gap-1.5 border-t pt-6 first:border-t-0 first:pt-0"
                    >
                      <span className="text-muted text-[11px] font-semibold uppercase tracking-[0.14em]">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="text-ink hover:text-accent-700 text-base font-medium underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent-700"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-ink-2 text-base">{value}</span>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Demo CTA — gradient panel */}
                <GradientVisual accent="default" grain className="p-7 will-reveal" data-delay="200">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
                    Or try first
                  </p>
                  <p className="mt-3 font-display text-xl font-light text-white">
                    Explore the AI RISE Cockpit yourself.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    Request access to our live interactive demo — no sales call required.
                  </p>
                  <Link
                    href="/rise-cockpit/request-access/"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 underline-offset-4 hover:underline"
                  >
                    Request demo access →
                  </Link>
                </GradientVisual>
              </div>

              {/* Right: form panel — bigger, breathing room */}
              <div className="border-line bg-canvas-cool rounded-[28px] border p-7 shadow-sm sm:p-10 will-reveal" data-delay="150">
                <div className="border-line mb-8 flex items-end justify-between gap-4 border-b pb-6">
                  <div>
                    <p className="text-muted font-mono text-[11px] font-semibold tracking-[0.18em]">
                      / 02
                    </p>
                    <h2 className="display-md text-ink mt-2">Send a message</h2>
                  </div>
                  <p className="text-muted text-xs sm:text-sm">
                    * required
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
