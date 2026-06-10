import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "SAP Analytics Cloud Solutions, Implementation & Consulting",
  description:
    "Sierra Digital delivers SAP Analytics Cloud solutions including implementation, consulting, migration, and planning. Unlock real-time business intelligence with SAP Analytics Cloud and SAP S/4HANA integration.",
  alternates: { canonical: "https://sierradigitalinc.com/sac-dashboards/" },
};

// ── Shared icon ───────────────────────────────────────────────────────────────

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
      {d2 && <path d={d2} />}
    </svg>
  );
}

// ── Benefits (5 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M3 3v18h18M18 9l-5 5-4-4-3 3",
    title: "Real-Time Data Visualization",
    body: "Access interactive dashboards that offer up-to-the-minute insights, allowing you to make timely and informed business decisions.",
  },
  {
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z",
    title: "Integrated Planning & Forecasting",
    body: "Enhance decision-making with predictive analytics, scenario modeling, and collaborative planning tools.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Seamless SAP Integration",
    body: "Easily connect to SAP ERP, SAP S/4HANA, and other enterprise applications to gain a comprehensive view of your business operations.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI-Driven Insights",
    body: "Leverage machine learning and AI to uncover trends, anomalies, and opportunities within your data.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Enhanced Collaboration",
    body: "Share insights across teams with role-based access and intuitive reporting features, ensuring alignment across the organization.",
  },
];

// ── Our Approach (4 items) ────────────────────────────────────────────────────

const APPROACH = [
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Customized Dashboard Development",
    body: "Our team works closely with stakeholders to design dashboards that provide meaningful, actionable insights aligned with business goals.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Data Integration & Migration",
    body: "We ensure smooth connectivity between SAP Analytics Cloud and your existing data sources, enabling real-time analytics.",
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "User Training & Adoption",
    body: "Our experts provide hands-on training and support to ensure your teams can leverage SAC to its full potential.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Performance Optimization",
    body: "We continuously refine your analytics environment, enhancing speed, accuracy, and usability.",
  },
];

// ── Why Choose Sierra Digital (4 items → 2×2 differentiators) ────────────────

const DIFFERENTIATORS = [
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Proven Expertise",
    body: "With extensive experience in SAP implementations, we deliver high-quality solutions tailored to your industry.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "End-to-End Support",
    body: "From initial assessment to post-implementation optimization, we provide comprehensive services to ensure long-term success.",
  },
  {
    icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    d2: "M9 22V12h6v10",
    title: "Industry-Specific Solutions",
    body: "Whether you operate in manufacturing, retail, oil & gas, or energy, our solutions are designed to meet your sector's unique analytical needs.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Commitment to Innovation",
    body: "We leverage the latest advancements in SAP technologies to keep your business ahead of the curve.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SACDashboardsPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          HERO — Sierra teal-primary gradient
          ───────────────────────────────────────────────────────────────────── */}
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
              <Eyebrow tone="dark">SAP Analytics Cloud · Dashboards &amp; Consulting</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              SAP Analytics Cloud —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                custom dashboards that drive strategic success.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              In today&apos;s data-driven business landscape, organizations need real-time insights
              to make informed decisions. SAP Analytics Cloud (SAC) empowers businesses with
              advanced analytics and intuitive dashboards that provide a unified view of their data.
              As a trusted implementation partner, Sierra Digital ensures that your organization
              maximizes the value of SAP Analytics Cloud, delivering custom dashboards that drive
              strategic success.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore SAC Dashboards →
              </Button>
            </div>
          </div>
        </Container>

        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* ─────────────────────────────────────────────────────────────────────
          STATS — canvas (white)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas" density="compact">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
          <Stat value="200+"    label="SAP clients served"              data-delay="0" />
          <Stat value="20+"     label="Years of SAP expertise"          data-delay="100" />
          <Stat value="Custom"  label="Industry-specific dashboards"    data-delay="200" />
          <Stat value="Real-Time" label="Data visualization &amp; insights" data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY SAP ANALYTICS CLOUD — alt  ·  heading outside, spotlight card below
          Block eyebrow="Why SAP Analytics Cloud?"
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Why SAP Analytics Cloud?"
          eyebrowTone="primary"
          title="Why SAP Analytics Cloud?"
          align="center"
          size="xl"
        />
        <div className="mx-auto max-w-4xl">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              All-in-One Analytics Platform
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              SAP Analytics Cloud is an all-in-one analytics solution that seamlessly integrates
              with SAP and non-SAP systems, providing businesses with the tools to visualize,
              analyze, and act on their data with confidence.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          BENEFITS — canvas (white)  ·  5 terracotta gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Real-time intelligence that empowers every decision."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="will-reveal rounded-2xl border border-accent-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #fff5ed 0%, #ffe7d4 55%, #ffcaa8 100%)",
                boxShadow: "0 4px 20px rgba(244,78,18,0.10), 0 1px 4px rgba(244,78,18,0.06)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-accent-500 shrink-0" />
                <span className="text-accent-600">
                  <Icon d={b.icon} d2={"d2" in b ? (b as { d2?: string }).d2 : undefined} />
                </span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {b.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          OUR APPROACH — alt  ·  4 teal gradient cards in 2-col grid
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Our approach"
          eyebrowTone="primary"
          title="Our approach to SAP Analytics Cloud implementation."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {APPROACH.map((a, i) => (
            <div
              key={a.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 100)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700">
                  <Icon d={a.icon} />
                </span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {a.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY SIERRA — canvas (white)
          Split: heading + subtitle left, 2×2 differentiator cards right
          CardGrid "Why Choose Sierra Digital?" maps to this section
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="Why choose Sierra Digital?"
            eyebrowTone="primary"
            title={<>Your trusted SAP Analytics Cloud <em className="font-serif italic">implementation partner.</em></>}
            subtitle="Sierra Digital combines deep SAP expertise with a commitment to innovation — delivering end-to-end SAP Analytics Cloud implementations that are tailored to your industry, backed by comprehensive support, and built to maximize long-term value."
            align="left"
            size="lg"
            bottomGap="tight"
          >
            <Button href="/about-us/" variant="secondary" size="md">
              Read our story →
            </Button>
          </SectionHeading>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <div
                key={d.title}
                className="will-reveal rounded-2xl border border-primary-100 p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-200"
                data-delay={String(i * 80)}
                style={{
                  background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)",
                  boxShadow: "0 4px 20px rgba(33,138,163,0.12), 0 1px 4px rgba(33,138,163,0.07)",
                }}
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-700 text-white">
                  <Icon d={d.icon} d2={"d2" in d ? (d as { d2?: string }).d2 : undefined} />
                </div>
                <h3 className="font-display text-ink text-lg font-light leading-snug tracking-tight">
                  {d.title}
                </h3>
                <p className="text-ink-2 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          Block "Drive Business Growth with SAP Analytics Cloud & Sierra Digital"
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Drive Business Growth with SAP Analytics Cloud &amp; <em className="font-serif italic">Sierra Digital.</em></>}
        subtitle="Ready to Elevate Your Analytics? Contact Sierra Digital today to discover how SAP Analytics Cloud can transform your business decisions."
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Explore SAC Dashboards"
        secondaryHref="/contact/"
      />
    </>
  );
}
