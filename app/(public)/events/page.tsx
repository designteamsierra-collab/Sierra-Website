import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "Events | Sierra Digital",
  description: "Explore upcoming Sierra Digital events and industry engagements that showcase innovation, insights, and opportunities to connect with experts.",
  alternates: { canonical: "https://sierradigitalinc.com/events/" },
};

const PAST_EVENTS = [
  {
    title: "GTMKOM 2026",
    href: "/events/gtmkom-2026/",
    image: "/wp-content/uploads/2026/02/gtmkom-new-300x169.jpg",
    excerpt: "🎰 Las Vegas. SAP GTMKOM 2026. A different kind of advantage. No buzzwords. No oversized decks. No theory that never makes it to the field.",
  },
  {
    title: "Join Sierra Digital at ASUG Best Practices 2025: Unlock AI Value for Energy",
    href: "/events/join-sierra-digital-at-asug-best-practices-2025-unlock-ai-value-for-energy/",
    image: "/wp-content/uploads/2025/09/Asug-2025-bg-img-300x169.avif",
    excerpt: "3-Year Vision. 3-Month Outcomes A Powerful, Pragmatic Approach to AI in Energy Sierra Digital is proud to be a Gold Sponsor at ASUG Best Practices: SAP",
  },
  {
    title: "Join Sierra Digital at the SAP for Energy and Utilities Conference",
    href: "/events/join-sierra-digital-at-the-sap-for-energy-and-utilities-conference/",
    image: "/wp-content/uploads/2025/07/TAC-bg-300x169.webp",
    excerpt: "April 8 – 10th, 2025Location: Rotterdam, The Netherlands Get Started The countdown is on! Sierra Digital is excited to announce our sponsorship of the upcoming",
  },
  {
    title: "Sierra was at San Diego for SAP Go-to-Market Kick-off-Meeting!!",
    href: "/events/sierra-was-at-san-diego-for-sap-go-to-market-kick-off-meeting/",
    image: "/wp-content/uploads/2025/07/gtm-300x169.webp",
    excerpt: "6th – 9th, Jan 2025 Get Started Key discussions Innovating with GenAI: Introduction of nearly 30 GenAI-enhanced applications on the Business Technology Platform (BTP). Customer",
  },
  {
    title: "Sierra Digital at the EDA Summit: Pioneering the Future of Digital Transformation",
    href: "/events/sierra-digital-at-the-eda-summit-pioneering-the-future-of-digital-transformation/",
    image: "/wp-content/uploads/2025/07/digital-transformation-1-300x169.webp",
    excerpt: "Sierra Digital is excited to announce our participation as a silver sponsor of the EDA Summit, organized by Solace, an event bringing together industry leaders,",
  },
  {
    title: "Sierra Digital Hosts Free Workshop on SAP BW Modernization",
    href: "/events/sierra-digital-hosts-free-workshop-on-sap-bw-modernization/",
    image: "/wp-content/uploads/2025/07/free-workshop-on-sap-300x169.webp",
    excerpt: "July 25th, 2024 | 12:00 pm – 2:00 pm CST Get Started Across our 20-year relationship with SAP, Sierra Digital has accumulated world-leading expertise in",
  },
];

export default function EventsPage() {
  return (
    <>
      <header
        className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40"
        style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}
      >
        <Decoration className="inset-0 opacity-[0.07]">
          <TopoLines className="h-full w-full" tone="white" />
        </Decoration>
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25">
          <OrbCluster className="h-full w-full" variant="sky-emerald" />
        </Decoration>
        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="hero-reveal hero-d0">
              <Eyebrow tone="dark">Events · Conferences &amp; Summits</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Events at{" "}
              <em className="font-serif italic font-extralight opacity-90">Sierra Digital.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Where to meet Sierra Digital — conferences, summits, and gatherings.
            </p>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      <Section tone="canvas">
        <SectionHeading
          eyebrow="Upcoming Events"
          eyebrowTone="primary"
          title="Upcoming Events"
          align="center"
          size="xl"
        />
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="rounded-2xl border border-primary-100 p-10"
            style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)", boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500 mx-auto mb-4" />
            <p className="text-ink-2 leading-relaxed">Nothing scheduled right now — check back soon.</p>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow="Past Events"
          eyebrowTone="primary"
          title="Past Events"
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PAST_EVENTS.map((post, i) => (
            <a
              key={post.href}
              href={post.href}
              className="will-reveal group flex flex-col rounded-2xl border border-primary-100 overflow-hidden hover:-translate-y-1 transition-all duration-200 bg-white"
              data-delay={String(Math.min(i * 80, 400))}
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
            >
              <div
                className="h-48 w-full overflow-hidden"
                style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <span className="block h-0.5 w-8 rounded-full bg-primary-500" />
                <h2 className="font-display text-ink text-lg font-light leading-snug tracking-tight group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-ink-2 text-sm leading-relaxed flex-1">{post.excerpt}…</p>
                <span className="mt-2 text-primary-600 text-sm font-semibold group-hover:text-primary-700">
                  Read More →
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <HandsCTA
        eyebrow="Talk to our team"
        title={
          <>
            Have a question for{" "}
            <em className="font-serif italic">our team?</em>
          </>
        }
        subtitle="Talk to Sierra's SAP experts about your transformation."
        primaryLabel="Get in touch"
        primaryHref="/contact/"
      />
    </>
  );
}
