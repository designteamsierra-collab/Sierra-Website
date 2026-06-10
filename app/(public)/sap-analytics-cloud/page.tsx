import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { StepStrip } from "@/components/ui/StepStrip";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "SAP Analytics Cloud Consulting & Implementation | Sierra Digital",
  description:
    "Unlock insights with SAP Analytics Cloud consulting and implementation. Sierra Digital delivers planning, predictive analytics, and SAC solutions.",
  alternates: { canonical: "https://sierradigitalinc.com/sap-analytics-cloud/" },
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

// ── Features (6 items) ────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Business Intelligence",
    body: "Interactive dashboards, self-service reporting, and real-time data access empower users at all levels.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Augmented Analytics",
    body: "AI-driven insights, smart predictions, and automated data discovery accelerate decision-making.",
  },
  {
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z",
    title: "Enterprise Planning",
    body: "Seamlessly integrate financial and operational planning into a unified platform.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Data Connectivity",
    body: "Connect multiple data sources, including SAP and non-SAP systems, for a holistic view of your business.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Collaborative Analytics",
    body: "Enable teams to work together with shared insights, scenario modeling, and real-time updates.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Security & Compliance",
    body: "Enterprise-grade data security ensures governance and compliance with industry standards.",
  },
];

// ── Benefits (5 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M3 3v18h18M18 9l-5 5-4-4-3 3",
    title: "Real-Time Data Insights",
    body: "Gain up-to-the-minute visibility into your business performance for faster decision-making.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "AI-Driven Predictive Analytics",
    body: "Use machine learning to identify trends, anticipate risks, and optimize business strategies.",
  },
  {
    icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
    title: "Seamless Data Integration",
    body: "Connect effortlessly with SAP and non-SAP data sources for a comprehensive business overview.",
  },
  {
    icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    title: "Enhanced Collaboration",
    body: "Enable teams to make data-driven decisions with shared insights, interactive dashboards, and real-time scenario modeling.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Enterprise-Grade Security",
    body: "Ensure data privacy, compliance, and governance with robust security features.",
  },
];

// ── Why Sierra differentiators (2×2) ─────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Proprietary SAP Analytics Assessments",
    body: "We've developed proprietary assessments that accelerate the modernization of your analytics landscape, giving you a clear roadmap for SAC adoption.",
  },
  {
    icon: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 8v4l3 3",
    title: "Customized SAC Implementations",
    body: "As a leading SAP partner, Sierra Digital delivers customized SAP Analytics Cloud implementations that align with your organization's unique needs.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Efficiency & Scalability Focus",
    body: "Our approach focuses on efficiency, scalability, and long-term success — ensuring your SAC deployment grows with your business.",
  },
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Maximum SAC Investment Value",
    body: "We ensure you maximize your investment in SAC for intelligent analytics and smarter business outcomes — measurable ROI from day one.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SAPAnalyticsCloudPage() {
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
              <Eyebrow tone="dark">SAP Analytics Cloud · Sierra Digital</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              SAP Analytics Cloud —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                intelligent analytics, smarter decisions.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              SAP Analytics Cloud (SAC) is an all-in-one cloud solution that seamlessly integrates
              business intelligence, planning, and predictive analytics. With SAC, organizations
              gain real-time insights, data-driven decision-making capabilities, and powerful
              visualization tools to stay ahead in an increasingly competitive landscape. Sierra
              Digital, a trusted SAP implementation partner, ensures that your transition to SAP
              Analytics Cloud is smooth, strategic, and optimized for maximum value. Our expertise
              helps businesses unlock the full potential of SAC for intelligent analytics and
              smarter business outcomes.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore SAP Analytics Cloud →
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
          <Stat value="200+"  label="SAP clients served"           data-delay="0" />
          <Stat value="20+"   label="Years of SAP expertise"       data-delay="100" />
          <Stat value="All-in-1" label="BI, Planning & Predictive analytics" data-delay="200" />
          <Stat value="5-Step" label="Proven implementation process" data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — canvas-2 (alt)  ·  6 teal gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="Features of SAC"
          eyebrowTone="primary"
          title="SAP Analytics Cloud is loaded with powerful features."
          subtitle="SAP Analytics Cloud is loaded with powerful features like:"
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700">
                  <Icon d={f.icon} d2={"d2" in f ? (f as { d2?: string }).d2 : undefined} />
                </span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {f.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          BENEFITS — canvas (white)  ·  5 terracotta gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="Benefits of SAC"
          eyebrowTone="accent"
          title="SAP Analytics Cloud benefits the future-ready organization."
          subtitle="SAP Analytics Cloud benefits the future-ready organization with:"
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
                  <Icon d={b.icon} />
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
          WHY SIERRA — canvas-2 (alt)
          Block "Why implement SAP Analytics Cloud with Sierra Digital?" as subtitle
          2×2 differentiator cards on the right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="Why Sierra Digital"
            eyebrowTone="primary"
            title={<>Implement SAP Analytics Cloud with <em className="font-serif italic">confidence.</em></>}
            subtitle="As a leading SAP partner, Sierra Digital specializes in delivering customized SAP Analytics Cloud implementations that align with your organization's unique needs. We've developed proprietary assessments that accelerate the modernization of your analytics landscape, and our approach focuses on efficiency, scalability, and long-term success, ensuring you maximize your investment in SAC."
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
                  <Icon d={d.icon} />
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
          PROCESS — canvas (white)  ·  5 steps from <Steps> in MDX
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="04"
          eyebrow="Our process"
          eyebrowTone="primary"
          title="From strategy to live analytics — a structured path to SAC success."
          subtitle="Sierra Digital's proven five-step methodology guides you from initial assessment through to ongoing optimization, ensuring your SAC deployment delivers lasting value."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            {
              title: "Assessment & Strategy Development",
              body: "Evaluate your current analytics landscape with assessments for SAP BOBJ and SAP BPC to create a roadmap for SAC adoption.",
            },
            {
              title: "End-to-End Implementation",
              body: "Deploy SAP Analytics Cloud awith a tailored approach that minimizes disruptions.",
            },
            {
              title: "System Integration & Data Migration",
              body: "Connect SAC to your existing data sources and new data offerings from SAP, like SAP Business Data Cloud, to ensure seamless data flow.",
            },
            {
              title: "Custom Dashboard & Reporting Solutions",
              body: "Develop intuitive, industry-specific dashboards and reporting tools.",
            },
            {
              title: "User Training & Ongoing Support",
              body: "Equip your teams with the skills to leverage SAC effectively and ensure continuous optimization.",
            },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          Block "Transform Your Business with SAP Analytics Cloud" as subtitle
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Ready to elevate your analytics strategy? Contact Sierra Digital today to explore how SAP Analytics Cloud can transform your business."
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Explore SAP Analytics Cloud"
        secondaryHref="/contact/"
      />
    </>
  );
}
