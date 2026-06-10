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
  title: "InFocus Readiness Assessment for SAP Analytics",
  description:
    "Modernize SAP BOBJ with Sierra Digital's InFocus Assessment. Get insights, effort estimates, and guidance for SAP Analytics Cloud (SAC) migration and BI modernization.",
  alternates: { canonical: "https://sierradigitalinc.com/infocus-readiness-assessment-for-sap-analytics/" },
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

// ── What is the In-Focus Assessment? (5 title-only items) ─────────────────────

const WHAT_IS = [
  "Which users are active on BOBJ—and who is not engaged",
  "Reports that are heavily used vs. those which remain idle",
  "The complexity of your existing reports",
  "Outdated or unsupported system content",
  "The overall architecture of your BOBJ system",
];

// ── Features (5 items) ────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "SAC Demo",
    body: "Gain a full-scale understanding of SAC features and benefits from certified experts.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Comprehensive BOBJ System Assessment",
    body: "Document current state with comprehensive detail, including sources, info/content, & Bex analysis.",
  },
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Understand SAC Artifacts",
    body: "Realize space, data-build, and business-build options and requirements.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Solutioning Approach and Guidance",
    body: "The Assessment will detail the necessary sources, modeling objects, reports, and plans required for the migration. Help you in plan for a phased migration based on Importance and complexity of the reports.",
  },
  {
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
    title: "Effort Estimation",
    body: "Get high level effort estimations for your migration project, making it easier to plan and budget accurately.",
  },
];

// ── Benefits (5 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Relief from the Technical Debt",
    body: "Legacy technologies are inefficient and high-risk, exposing your organization to lengthy delays, costly repairs, and potential system failures.",
  },
  {
    icon: "M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6",
    title: "Recommendations for unused objects",
    body: "Get insights on which system components can be safely retired, driving efficiency and simplifying the maintenance of the new system.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Actionable Insights for planning",
    body: "Rough Order of Magnitude (ROM) estimations provided by the Assessment help your leaders plan more accurately for migration, making it easier to stay within budget and hit your goals on time.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Secure handling of Critical Data",
    body: "Sierra's wholistic approach to digital transformation prioritizes the functional processes that keep your company running, centering real business value at the heart of your migration.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Expertise Across Legacy and Next-Gen SAP Solutions",
    body: "Benefit from Sierra's deep experience with both legacy BOBJ and modern SAP analytics to make your migration successful and sustainable.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function InFocusSAPAnalyticsPage() {
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
              <Eyebrow tone="dark">InFocus · SAP Analytics Readiness Assessment</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              InFocus Readiness Assessment for{" "}
              <em className="font-serif italic font-extralight opacity-90">
                SAP Analytics.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              Transition from your Legacy SAP BOBJ System to SAP Analytics Cloud – For Real-Time
              Reporting and Insights, Using Sierra&apos;s In-Focus Tools and Accelerators.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore SAP Analytics Assessment →
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
          <Stat value="Free"    label="Expert-built readiness assessment"   data-delay="0" />
          <Stat value="SAP BOBJ" label="Legacy BI system coverage"          data-delay="100" />
          <Stat value="Rapid"   label="Comprehensive system analysis"       data-delay="200" />
          <Stat value="Clear"   label="SAC migration roadmap &amp; estimates" data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHAT IS IN-FOCUS? — alt
          Heading outside, spotlight card with intro + 5 identification items
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What is the In-Focus Assessment?"
          eyebrowTone="primary"
          title="What is the In-Focus Assessment?"
          align="center"
          size="xl"
        />
        <div className="mx-auto max-w-4xl">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              BOBJ System Intelligence
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              The In-Focus Assessment is a comprehensive analysis of your existing BusinessObjects
              setup. It evaluates how your current reports, users, and overall system structure are
              being leveraged, so you can clearly identify:
            </p>
            <ul className="flex flex-col gap-3">
              {WHAT_IS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-2 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
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
          title="All the insights and guidance to plan an efficient, cost-effective migration."
          subtitle="The tool provides all the insights and guidance to plan for an efficient, cost-effective migration. With this tool, you'll:"
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
                  <Icon d={f.icon} />
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
          BENEFITS — alt  ·  5 terracotta gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Tangible value throughout your SAP Analytics Cloud journey."
          subtitle="Sierra Digital's Readiness Assessment provides tangible value throughout your SAP Analytics Cloud journey:"
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
          HOW WE CAN HELP — canvas (white)
          Block "How We Can Help" — heading outside, spotlight card below
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
          eyebrow="How We Can Help"
          eyebrowTone="primary"
          title="How We Can Help"
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
              Legacy to Cloud Analytics
            </p>
            <p className="text-ink-2 leading-relaxed">
              By guiding the efficient modernization of a legacy analytics solution, Sierra Digital
              helps your organization avoid the risks of technical debt and of SAP BOBJ&apos;s
              approaching sunset. On SAP Analytics Cloud, you&apos;ll unlock richer, more
              contextualized analytics—enabling your organization to realize its data-driven
              ambitions.
            </p>
            <a
              href="https://vimeo.com/1040139397/713f6d9592"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 underline break-all text-sm hover:text-primary-800 transition-colors"
            >
              https://vimeo.com/1040139397/713f6d9592
            </a>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          CTA "Ready to get started?"
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
        secondaryLabel="Explore SAP Analytics Assessment"
        secondaryHref="/contact/"
      />
    </>
  );
}
