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
  title: "SAP BTP Integration Assessment Services | Sierra Digital",
  description:
    "Assess your integration landscape on SAP BTP to reduce complexity, improve performance, and build a scalable, API-driven enterprise architecture.",
  alternates: { canonical: "https://sierradigitalinc.com/integration-assessment/" },
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

// ── Features (5 items) ────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Best-Practice Migration Recommendations",
    body: "Our team of experts focuses on minimizing risks and streamlining the process for maximum efficiency, keeping your digital hygiene at the highest standards. Our team delivers tailored, best-practice-based recommendations to ensure a smooth and efficient migration to SAP Integration Suite.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Comprehensive Migration Reporting",
    body: "Gain clear, detailed insights into your SAP PI/PO system's migration complexity, challenges, and opportunities. The InFocus Readiness Assessment provides comprehensive reporting that can be easily analyzed in SAP Analytics Cloud, helping you visualize and manipulate the data for a better understanding of your migration requirements.",
  },
  {
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
    title: "Effort Estimations",
    body: "Get rough time estimates for the migration process. This feature enables you to plan effectively, allocate resources, and set realistic expectations, ensuring that your migration stays within scope, budget, and timeline.",
  },
  {
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    d2: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    title: "Understanding of Your Current Landscape",
    body: "Our Assessment tool offers a comprehensive view of your existing SAP PI/PO system. This enables you to make informed decisions about your migration strategy, assess the complexity of the migration task, and understand which elements of your legacy system need special attention.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Preservation of Critical Legacy Functionality",
    body: "We recognize the importance of preserving your legacy system's key functionalities. Our Readiness Assessment identifies and supports the business-critical processes that must remain intact throughout your migration to SAP Integration Suite, ensuring minimal disruption to your operations.",
  },
];

// ── Benefits (7 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Reducing Technical Debt",
    body: "Legacy SAP systems like PI/PO can become inefficient and costly to maintain over time, exposing your organization to risks such as system failures and costly repairs. The InFocus Readiness Assessment helps you identify modernization opportunities, reducing technical debt and mitigating risks associated with outdated systems.",
  },
  {
    icon: "M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6",
    title: "Identify Unused or Obsolete Components",
    body: "The tool highlights system components that are no longer in use and can be safely retired. By eliminating unnecessary complexity, you can streamline your system and optimize maintenance efforts, making the migration process more efficient.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Accurate Planning and Resource Allocation",
    body: "With rough effort and cost estimations provided by the Assessment, you can allocate resources more effectively, plan your budget, and ensure that project expectations are realistic. This helps you avoid delays and manage your migration within the desired timelines.",
  },
  {
    icon: "M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    title: "Business-Focused Migration",
    body: "Our approach prioritizes the preservation of the business-critical processes that drive value for your organization. We ensure that your migration supports not just technical needs but also the functional processes that are essential for your business continuity.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Confidence in Mission-Critical Functionality Preservation",
    body: "Sierra Digital's holistic approach to digital transformation focuses on the processes that keep your company running. We prioritize real business value in every step of your migration, ensuring that the functionality that drives your operations is preserved.",
  },
  {
    icon: "M3 3v18h18M18 9l-5 5-4-4-3 3",
    title: "Quicker Results and Less Downtime",
    body: "Sierra's expertise and automation-driven insights reduce migration timelines, enabling quick adaptation of SAP Integration Suite while minimizing downtime and business interruptions. The assessment identifies potential risks and provides strategies to ensure a smooth migration with minimal disruptions.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Expertise in New and Legacy SAP Integration Tools",
    body: "With extensive expertise in both legacy SAP PI/PO and the modern SAP Integration Suite technologies, Sierra Digital is the ideal partner to guide your organization through the migration process. We have proven experience to ensure a seamless transition to SAP's most advanced integration platform.",
  },
];

// ── Why Sierra differentiators (3 items) ─────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Expertise in SAP Integrations",
    body: "Sierra Digital has a deep understanding of both legacy SAP tools (PI/PO) and modern SAP Integration Suite technologies. Our team ensures a smooth transition, reducing risks and ensuring the continued success of your integration landscape.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Seamless Legacy System Transition",
    body: "Migrating from legacy systems like SAP PI/PO to SAP Integration Suite can be complex. We simplify the process by providing deep insights and ensuring minimal downtime, all while maintaining business continuity throughout the migration.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Innovation and Efficiency",
    body: "Sierra Digital stays at the forefront of SAP integration technology, ensuring your migration is optimized for the future. We leverage the latest advancements in integration practices to improve the efficiency and scalability of your SAP landscape.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function IntegrationAssessmentPage() {
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
              <Eyebrow tone="dark">InFocus · Integration Assessment</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Integration Assessment —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                modernize SAP PI/PO with clarity and confidence.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              Sierra Digital&apos;s InFocus Readiness Assessment for SAP Datasphere is a tool
              designed to help you modernize your legacy SAP PI/PO systems. This powerful tool
              provides automatic insights into your current SAP Process Integration (PI) 7.31 /
              Process Orchestration (PO) 7.4 &amp; 7.5 landscapes, helping you understand migration
              complexity, estimate effort and costs, and identify potential roadblocks along with
              possible workarounds. By leveraging these insights, you can plan a more efficient,
              cost-effective transition to SAP Integration Suite (SAP IS), ensuring a smoother
              modernization process.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Integration Assessment →
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
          <Stat value="Free"     label="Expert-built readiness assessment"      data-delay="0" />
          <Stat value="SAP PI/PO" label="Legacy system coverage"                data-delay="100" />
          <Stat value="Rapid"    label="Automated landscape analysis"           data-delay="200" />
          <Stat value="Clear"    label="Cost &amp; effort estimations"          data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          SPOTLIGHT — alt
          "Why Integration Assessment?" heading outside, card below
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Why Integration Assessment?"
          eyebrowTone="primary"
          title="Why Integration Assessment?"
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
              SAP PI/PO Modernization Intelligence
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              Sierra Digital&apos;s InFocus Readiness Assessment for SAP Datasphere is a tool
              designed to help you modernize your legacy SAP PI/PO systems. This powerful tool
              provides automatic insights into your current SAP Process Integration (PI) 7.31 /
              Process Orchestration (PO) 7.4 &amp; 7.5 landscapes, helping you understand migration
              complexity, estimate effort and costs, and identify potential roadblocks along with
              possible workarounds. By leveraging these insights, you can plan a more efficient,
              cost-effective transition to SAP Integration Suite (SAP IS), ensuring a smoother
              modernization process.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — canvas (white)  ·  5 teal gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="All the insight you need for an efficient, cost-effective migration."
          subtitle="The InFocus Readiness Assessment for SAP Integration Suite provides all the insight you need to plan for an efficient, cost-effective migration. With this tool, you'll:"
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
          BENEFITS — alt  ·  7 terracotta gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Relevant value delivered to your migration project."
          subtitle="Sierra Digital's Readiness Assessment for SAP Integration Suite delivers relevant value to your migration project. You'll enjoy:"
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
          WHY SIERRA — canvas (white)
          Split: heading + subtitle left, 2-col differentiator cards right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="Why choose Sierra Digital?"
            eyebrowTone="primary"
            title={<>Your trusted SAP Integration <em className="font-serif italic">migration partner.</em></>}
            subtitle="Sierra Digital combines deep expertise in both legacy SAP PI/PO and modern SAP Integration Suite technologies. We don't just analyze your system—we guide you through a smooth, low-risk transition, ensuring business continuity and long-term integration success."
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
          Block "Connect Businesses with Cutting-Edge Technologies for Innovation"
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Connect Businesses with Cutting-Edge <em className="font-serif italic">Technologies for Innovation.</em></>}
        subtitle="To start your journey toward transformative innovation! Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
        secondaryLabel="Explore Integration Assessment"
        secondaryHref="/contact/"
      />
    </>
  );
}
