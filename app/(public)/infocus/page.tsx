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
  title: "InFocus SAP Readiness Assessments | Modernize Legacy Systems",
  description:
    "Discover Sierra Digital's InFocus readiness assessments — free, expert-built tools that help SAP customers evaluate legacy systems, plan migrations, and accelerate modernization with clarity, confidence, and efficiency.",
  alternates: { canonical: "https://sierradigitalinc.com/infocus/" },
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

// ── Key Features (6 items — from FeatureRow blocks) ───────────────────────────

const FEATURES = [
  {
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    d2: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    title: "Gain System-Wide Visibility",
    body: "Automatically document your current SAP system—including custom and standard objects—so you can plan for change with complete transparency.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Evaluate Migration Complexity",
    body: "Score, prioritize, and estimate the effort needed for successful migration to SAP's modern platforms, including BTP, SAC, and Datasphere.",
  },
  {
    icon: "M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6",
    title: "Retire Technical Debt",
    body: "Identify unused, outdated, or redundant objects that can be safely retired, simplifying system maintenance and reducing future cost.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Ensure Business Continuity",
    body: "Get guidance on preserving and enhancing mission-critical business processes as part of your modernization strategy.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Explore Extension Opportunities on SAP BTP",
    body: "Use interactive tools to discover relevant SAP BTP applications—including GenAI-powered options—mapped to your specific business requirements.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Inform Budgeting and Planning",
    body: "With AI-supported insights and rough effort estimations, your leadership team can make informed decisions about timing, resourcing, and investment.",
  },
];

// ── Benefits (5 items — CardGrid items 1–5) ───────────────────────────────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Eliminate inefficiencies tied to legacy platforms",
    body: "Outdated systems can slow down innovation and increase risk. InFocus helps you replace these platforms with modern, efficient, and scalable solutions.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Reduce operational risk with smart, supported transitions",
    body: "Minimize disruption with data-driven migration planning, backed by Sierra's world-class SAP expertise and transformation methodologies.",
  },
  {
    icon: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
    title: "Align modernization strategy with SAP's Clean Core vision",
    body: "Stay compliant with SAP's long-term roadmap and architectural standards by identifying and removing harmful customizations and technical debt.",
  },
  {
    icon: "M3 3v18h18M18 9l-5 5-4-4-3 3",
    title: "Improve scalability, performance, and data integrity",
    body: "Get your systems ready for modern cloud platforms that scale with your needs and maintain high standards of data accuracy and accessibility.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Fuel next-gen capabilities like Business AI and real-time analytics",
    body: "Unlock the value of SAP's latest technologies by putting your data and infrastructure in position to take advantage of AI, ML, and intelligent automation.",
  },
];

// ── Why Sierra differentiators (6 items — CardGrid items 7–12) ────────────────

const DIFFERENTIATORS = [
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "SAP-Sponsored, Enterprise-Grade Tools",
    body: "Each assessment is backed by SAP and built to deliver insights that meet enterprise-level needs across industries and geographies.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Legacy and Modern SAP Expertise",
    body: "From SAP PI/PO and BPC to Datasphere and SAP BTP, our consultants bring decades of hands-on knowledge to every phase of your digital transformation.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Deep Focus on Business Value",
    body: "We help you prioritize functionality that supports your unique workflows, ensuring technology upgrades always serve your business goals.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Free, Fast, and Low-Risk",
    body: "Every InFocus assessment is free, non-invasive, and easy to deploy—giving you valuable insight without delay or disruption.",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    title: "Actionable Results, Not Just Reports",
    body: "Our deliverables don't just describe problems—they offer clear, practical recommendations you can act on to drive change immediately.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Accelerate with Assurance",
    body: "Each InFocus assessment is quick to deploy, easy to understand, and 100% free. By providing clear, actionable insights, Sierra empowers your enterprise to move forward with SAP modernization—faster, safer, and smarter.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function InFocusPage() {
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
              <Eyebrow tone="dark">InFocus · SAP Readiness Assessments</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              InFocus —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                modernize legacy SAP systems with clarity, confidence, and efficiency.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              Sierra Digital&apos;s InFocus line is a suite of free, expert-built readiness
              assessments designed to help SAP customers modernize aging systems with clarity,
              confidence, and efficiency. Whether you&apos;re migrating from SAP PI/PO, BOBJ, BPC,
              or BW—or implementing Clean Core principles—InFocus gives you the intelligence and
              insights needed to take the first step toward SAP&apos;s next-generation solutions,
              including SAP BTP, SAP Datasphere, SAP Analytics Cloud, and SAP Integration Suite.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore InFocus →
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
          <Stat value="Free"    label="Expert-built assessments"         data-delay="0" />
          <Stat value="4+"      label="SAP legacy systems covered"       data-delay="100" />
          <Stat value="Rapid"   label="Non-invasive deployment"          data-delay="200" />
          <Stat value="Clear"   label="Actionable modernization roadmap" data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          PURPOSE-BUILT SPOTLIGHT — alt
          Block "Purpose-Built to Power Your SAP Transformation"
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Purpose-Built to Power Your SAP Transformation"
          eyebrowTone="primary"
          title="Purpose-Built to Power Your SAP Transformation"
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
              SAP Modernization Intelligence
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              Each InFocus assessment is purpose-built to evaluate a legacy SAP environment and
              provide a practical, best-practice-based roadmap for modernization. You&apos;ll gain
              critical insights into system architecture, object usage, migration complexity, and
              opportunities for enhancement—allowing your team to plan ahead, reduce risk, and
              accelerate time-to-value with confidence.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          KEY FEATURES — canvas (white)  ·  6 teal gradient cards
          Block "Key Features Across the InFocus Suite"
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Key Features"
          eyebrowTone="primary"
          title="Key Features Across the InFocus Suite."
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
          BENEFITS — alt  ·  5 terracotta gradient cards
          CardGrid "Unified Benefits for SAP Customers" items 1–5
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Unified Benefits"
          eyebrowTone="accent"
          title="Unified Benefits for SAP Customers."
          subtitle="When you start with InFocus, you'll be equipped to:"
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
          WHY SIERRA — canvas (white)
          Split: heading + subtitle left, 2-col differentiator cards right
          CardGrid items 6 (subtitle) + 7–12 (cards)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="Why choose Sierra Digital?"
            eyebrowTone="primary"
            title={<>Your trusted InFocus <em className="font-serif italic">implementation partner.</em></>}
            subtitle="Sierra Digital is an SAP-certified partner with deep experience in both legacy and next-generation SAP technologies. We don't just analyze systems—we help you transform them. Our InFocus assessments are tailored to reflect real business value, with an emphasis on preserving what works, eliminating what doesn't, and unlocking new opportunities in the cloud."
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
          CLOSING CTA
          CTA "Ready to Begin?"
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to <em className="font-serif italic">Begin?</em></>}
        subtitle="Contact Sierra Digital today to get started with your InFocus Readiness Assessment."
        primaryLabel="Ask Our Experts"
        primaryHref="/contact/"
        secondaryLabel="Explore InFocus"
        secondaryHref="/contact/"
      />
    </>
  );
}
