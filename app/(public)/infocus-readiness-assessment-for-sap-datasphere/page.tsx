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
  title: "InFocus Readiness Assessment for SAP Datasphere | Sierra Digital",
  description:
    "Accelerate your SAP BW to SAP Datasphere migration with Sierra Digital's InFocus Readiness Assessment. Get insights, estimations, and a clear modernization roadmap.",
  alternates: { canonical: "https://sierradigitalinc.com/infocus-readiness-assessment-for-sap-datasphere/" },
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
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    d2: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    title: "Gain a full overview of SAP Business Warehouse system artifacts at a glance",
    body: "The assessment tool automates the process of identifying and documenting SAP Business Warehouse artifacts.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Monitor key usage stats and retire unused SAP Business Warehouse objects",
    body: "Decision-makers gain insight on SAP Business Warehouse object management, enhancement prioritization, and overall data strategy alignment.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Understand migration complexity with detailed reporting",
    body: "The assessment examines data volume, data model complexity, calculation logic, and dependencies in order to guide decision-making.",
  },
  {
    icon: "M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    title: "Understand SAP HANA artifacts comprising system structure and components",
    body: "The solution helps users better understand the SAP HANA environment and optimize data modeling and development efforts.",
  },
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Plan for migration with rough cost & time estimators",
    body: "The assessment results in a preliminary estimate of the effort, time, and costs required for SAP Datasphere migration.",
  },
];

// ── Benefits (5 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Relief from the technical debt associated with ageing legacy systems",
    body: "Legacy technologies are inefficient and high-risk, exposing your organization to lengthy delays, costly repairs, and potential system failures.",
  },
  {
    icon: "M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6",
    title: "Recommendations for the retirement of unused objects",
    body: "You'll get insights on which system components can be safely retired, driving efficiency and simplifying the maintenance of your new system.",
  },
  {
    icon: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
    title: "Understand migration complexity with detailed reporting — Insights you need for accurate budgeting, planning, and resource allocation",
    body: "Rough effort estimations provided by the Assessment help your leaders plan more accurately for migration, making it easier to stay within budget and hit your goals on time.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Confidence in the safe handling of your mission-critical data",
    body: "Sierra's wholistic approach to digital transformation prioritizes the functional processes that keep your company running, centering real business value at the heart of your migration.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Sierra's world-renowned expertise in new and legacy data warehousing solutions from SAP",
    body: "Our teams are experts in both new and legacy systems from SAP, making us the perfect SAP partner to guide your enterprise through a successful migration.",
  },
];

// ── Why Sierra differentiators (2×2) ─────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Rapid Comprehensive Assessment",
    body: "A rapid but comprehensive analysis of your BW system — covering artifacts, HANA structures, and usage patterns — to create a clear migration roadmap.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Avoid Technical Debt Risks",
    body: "Sierra helps your organization avoid the risks of technical debt and SAP BW's fast-approaching sunset through guided, efficient modernization.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI-Ready Datasphere Environment",
    body: "On SAP Datasphere, you'll enjoy the semantic-rich, contextualized data your organization needs to fuel Business AI and other cloud technologies.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "World-Renowned SAP Data Warehousing Expertise",
    body: "Our teams are experts in both new and legacy systems from SAP, making Sierra the perfect partner to guide your enterprise through a successful migration.",
  },
];

// ── Success Stories (2 items) ─────────────────────────────────────────────────

const STORIES = [
  {
    tag: "Retail",
    title: "See Sierra's Work for This Major Mexican Retailer",
    body: "This client is a Mexican chain of department stores now part of the El Puerto de Liverpool group and founded in 1970 in Mexico City. Its main activity consists of the sale of clothing, appliances, electronics and cell phones aimed at the middle and lower economic classes.",
  },
  {
    tag: "Energy",
    title: "Learn How This Tech Company Is Planning for the Future",
    body: "This client is owned by the Government of Western Australia, represented by the Minister for Energy.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SAPDatspherePage() {
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
              <Eyebrow tone="dark">SAP Datasphere · Sierra Digital</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              InFocus Readiness Assessment for{" "}
              <em className="font-serif italic font-extralight opacity-90">
                SAP Datasphere.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              Sierra Digital&apos;s InFocus Readiness Assessment for SAP Datasphere aids and
              accelerates the modernization of legacy SAP BW systems. This tool analyzes standard
              and custom SAP Business Warehouse objects, SAP Business Warehouse bridge limitations,
              SAP HANA artifacts, and usage across your enterprise to provide a rapid but
              comprehensive roadmap for SAP Business Warehouse to SAP Datasphere migration.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore SAP Datasphere →
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
          <Stat value="200+"  label="SAP clients served"                data-delay="0" />
          <Stat value="20+"   label="Years of SAP expertise"            data-delay="100" />
          <Stat value="Rapid" label="Comprehensive BW assessment"       data-delay="200" />
          <Stat value="Clear" label="Migration roadmap, every time"     data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — alt  ·  intro spotlight + 5 teal gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Everything you need to plan an efficient, cost-effective migration."
          subtitle="Sierra Digital's InFocus Readiness Assessment for SAP Datasphere provides all the insight you need to plan for an efficient, cost-effective migration."
          align="center"
          size="xl"
        />

        <div className="mx-auto max-w-4xl mb-10">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Insight-Driven Migration Planning
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              The InFocus Readiness Assessment for SAP Datasphere provides all the insight you need
              to plan for an efficient, cost-effective migration. With this tool, you&apos;ll:
            </p>
          </div>
        </div>

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
          BENEFITS — alt  ·  5 terracotta gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Relevant value delivered to your migration project."
          subtitle="Sierra Digital's Readiness Assessment for SAP Datasphere delivers relevant value to your migration project. You'll enjoy:"
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
          Split: How We Help block text as subtitle + 2×2 differentiator cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="How We Help"
            eyebrowTone="primary"
            title={<>Modernize your data warehouse with <em className="font-serif italic">confidence.</em></>}
            subtitle="By guiding the efficient modernization of a legacy data warehousing solution, Sierra Digital helps your organization avoid the risks of technical debt and of SAP BW's fast-approaching sunset. And on SAP Datasphere, you'll enjoy the semantic-rich, contextualized data that your organization needs to fuel Business AI and other cloud technologies."
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
          FLYER PROMO — alt compact
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas" density="compact">
        <div className="mx-auto max-w-2xl">
          <div
            className="will-reveal rounded-2xl border border-primary-100 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
              boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
            }}
          >
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
                Flyer
              </p>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                Achieve Rapid Data Readiness
              </h3>
            </div>
            <Button href="/contact/" variant="secondary" size="md" className="shrink-0">
              Download
            </Button>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          SUCCESS STORIES — warm  ·  2 story cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="warm">
        <SectionHeading
          index="04"
          eyebrow="Success Stories"
          eyebrowTone="primary"
          title="Trusted by enterprises worldwide."
          align="center"
          size="lg"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {STORIES.map((s, i) => (
            <div
              key={s.title}
              className="will-reveal rounded-3xl border-2 border-primary-200 p-8 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 120)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
                boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
              }}
            >
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <span className="self-start rounded-full bg-primary-100 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-primary-700">
                {s.tag}
              </span>
              <h3 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{s.body}</p>
              <Button href="/success-stories/" variant="secondary" size="sm" className="self-start mt-auto">
                Read More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Connect Businesses with Cutting-Edge <em className="font-serif italic">Technologies for Innovation.</em></>}
        subtitle="Don't wait – future-proof your business now!"
        primaryLabel="Ask Our Experts"
        primaryHref="/contact/"
        secondaryLabel="Explore SAP Datasphere"
        secondaryHref="/contact/"
      />
    </>
  );
}
