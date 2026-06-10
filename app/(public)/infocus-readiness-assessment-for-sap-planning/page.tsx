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
  title: "InFocus Readiness Assessment for SAP Planning",
  description:
    "Modernize SAP BPC with Sierra Digital's InFocus Readiness Assessment. Get SAP Planning readiness insights, SAC migration strategy, cost estimates, and expert guidance.",
  alternates: { canonical: "https://sierradigitalinc.com/infocus-readiness-assessment-for-sap-planning/" },
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
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Facilitates comprehension of the existing SAP BPC System, including its data models and utilization patterns",
    body: "Understanding the current state of your existing SAP BPC makes it easier to plan accurately for a migration to SAP Analytics Cloud Planning.",
  },
  {
    icon: "M10 3a7 7 0 1 0 0 14A7 7 0 0 0 10 3zm11 11-4.35-4.35",
    title: "Detects gaps and inconsistencies within the SAP BPC System that must be resolved prior to migration to SAC",
    body: "Migrate to SAP Analytics with confidence that Sierra's best-practice-based methods will prevent inaccuracies, inconsistencies, and system errors.",
  },
  {
    icon: "M5 12h14M12 5l7 7-7 7",
    title: "Produces a phased low risk migration strategy that details the necessary steps for a successful transition from SAP BPC System to SAC",
    body: "Get clear guidelines on how to stage your system for a successful transition to SAP Analytics Cloud.",
  },
  {
    icon: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    title: "Plan for migration with rough cost & time estimators",
    body: "The assessment results in a preliminary estimate of the effort, time, and costs required for migration to SAP Analytics Cloud.",
  },
  {
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Monitor key usage stats and retire unused objects",
    body: "Decision-makers gain insight on object management, enhancement prioritization, and overall migration strategy alignment.",
  },
];

// ── Benefits (5 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Relief from the technical debt associated with ageing legacy systems",
    body: "Legacy technologies are inefficient and high-risk, exposing your organization to lengthy delays, costly repairs, and potential system failures.",
  },
  {
    icon: "M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6",
    title: "Recommendations for the retirement of unused objects",
    body: "You'll get insights on which system components can be safely retired, driving efficiency and simplifying the maintenance of your new system.",
  },
  {
    icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
    title: "Insights you need for accurate budgeting, planning, and resource allocation",
    body: "Rough effort estimations provided by the Assessment help your leaders plan more accurately for migration, making it easier to stay within budget and hit your goals on time.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Confidence in the safe handling of your mission-critical data",
    body: "Sierra's wholistic approach to digital transformation prioritizes the functional processes that keep your company running, centering real business value at the heart of your migration.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Sierra's world-renowned expertise in new and legacy data warehousing solutions from SAP",
    body: "Our teams are experts in both new and legacy systems from SAP, making us the perfect SAP partner to guide your enterprise through a successful migration.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function InFocusSAPPlanningPage() {
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
              <Eyebrow tone="dark">InFocus · SAP Planning Readiness Assessment</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              InFocus Readiness Assessment for{" "}
              <em className="font-serif italic font-extralight opacity-90">
                SAP Planning.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              Modernize legacy SAP BPC systems with Sierra Digital&apos;s InFocus Readiness
              Assessment—unifying analytics and planning on SAP Analytics Cloud.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore SAP Planning Assessment →
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
          <Stat value="Free"       label="Expert-built readiness assessment"      data-delay="0" />
          <Stat value="SAP BPC"    label="Legacy planning system coverage"         data-delay="100" />
          <Stat value="Phased"     label="Low-risk migration strategy"             data-delay="200" />
          <Stat value="Clear"      label="Cost &amp; time estimates for SAC move"  data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          SPOTLIGHT — alt  ·  Lead text in spotlight card
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="InFocus Readiness Assessment for SAP Planning"
          eyebrowTone="primary"
          title="Modernize Legacy SAP BPC with Confidence"
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
              SAP BPC to SAC Planning
            </p>
            <p className="text-ink-2 leading-relaxed">
              Sierra Digital&apos;s InFocus Readiness Assessment for Planning aids and accelerates
              the modernization of legacy SAP BPC systems. Replacing SAP BPC and SAP BOBJ, SAP
              Analytics Cloud reconciles both analytics and planning into one convenient tool,
              providing BI and EPM capabilities that help users optimize their work and drive value
              in lines of business across the enterprise. Choose SAC to enjoy AI features new from
              SAP, along with the gold-standard insight your business needs to drive growth and get
              ahead of unforeseen challenges.
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
          title="All the insight you need to plan an efficient, cost-effective migration."
          subtitle="The InFocus Readiness Assessment for SAP Planning provides all the insight you need to plan for an efficient, cost-effective migration. With this tool, you'll:"
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
          title="Relevant value to your SAP Planning migration project."
          subtitle="Sierra Digital's Readiness Assessment for SAP Planning delivers relevant value to your migration project. You'll enjoy:"
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
          HOW WE HELP — canvas (white)
          Block "How We Help" — heading outside, spotlight card below
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
          eyebrow="How We Help"
          eyebrowTone="primary"
          title="How We Help"
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
              Legacy to Cloud Planning
            </p>
            <p className="text-ink-2 leading-relaxed">
              By guiding the efficient modernization of a legacy analytics solution, Sierra Digital
              helps your organization avoid the risks of technical debt and of SAP BPC&apos;s
              approaching sunset. And on SAP Analytics Cloud, you&apos;ll enjoy the powerful
              planning capabilities that your organization needs to implement a data-driven vision
              of success.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
        secondaryLabel="Explore SAP Planning Assessment"
        secondaryHref="/contact/"
      />
    </>
  );
}
