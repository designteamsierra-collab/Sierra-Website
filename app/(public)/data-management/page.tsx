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
  title: "Data Management Services | Master Data Management Solutions | Sierra Digital",
  description:
    "Simplify enterprise data management with ORBit. Explore scalable data integration, master data management (MDM), governance services, and lifecycle solutions for optimized workflows.",
  alternates: { canonical: "https://sierradigitalinc.com/data-management/" },
};

// ── Shared icon set ───────────────────────────────────────────────────────────

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
      {d2 && <path d={d2} />}
    </svg>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M18 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    d2: "m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98",
    title: "Pre-Built Connectors & Data Transformation Pipeline Accelerators",
    body: "Help users repurpose time traditionally spent on set-up to focus on all-important data management objectives.",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z",
    title: "Robust Filtering, Data Validation, and Data Type-Casting",
    body: "Take advantage of a wide variety of time-saving, auto-enhanced features and functions to simplify data migration and management.",
  },
  {
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9",
    title: "Data Job Monitor & Alerts",
    body: "Afford users visibility into status of jobs in progress, with convenient email alerts to keep teams on track.",
  },
  {
    icon: "M2 3h20v14H2zM8 21h8M12 17v4",
    title: "Unified Dashboards",
    body: "Help train user attention on functional operations of data transformation, including management of tasks and pipeline required to accomplish data objectives.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Flexible/Scalable",
    body: "Meet a wide array of task demands quickly and securely, including one-time loads, real-time replication, and custom transformations between systems.",
  },
];

// ── Benefits ──────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M4 6h16M4 10h16M4 14h10",
    title: "Simplifies Enterprise Data Management",
    body: "Reduces complexity in handling daily data operations with an intuitive, cloud-based platform.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Enhances Data Integration",
    body: "Seamlessly connects different systems, databases, and applications through pre-built connectors.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Optimizes Workflow Efficiency",
    body: "Streamlines data transformation processes through automated pipeline accelerators.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Empowers Confident Decision-Making",
    body: "Offers visibility into metadata and data previews for better implementation planning.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Scales with Business Needs",
    body: "Adapts to growing data demands with a secure, scalable infrastructure.",
  },
];

// ── Why Sierra differentiators ────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
    title: "ORBit Platform Expertise",
    body: "Deep hands-on experience implementing and configuring ORBit for enterprise data migration, integration, and management across complex SAP landscapes.",
  },
  {
    icon: "M18 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    d2: "m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98",
    title: "Rapid Integration Delivery",
    body: "Pre-built connectors and pipeline accelerators mean faster deployment, less custom development, and quicker time-to-insight for your data teams.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Scalable Cloud Architecture",
    body: "ORBit's cloud-native infrastructure adapts to your data volumes and transformation demands — whether for one-time loads or continuous real-time replication.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "End-to-End Data Partnership",
    body: "From data landscape assessment and pipeline design through go-live monitoring and ongoing optimization — Sierra is with you at every step of the data journey.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DataManagementPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          HERO — Sierra teal-primary gradient, Fraunces display type
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
              <Eyebrow tone="dark">ORBit · Data Migration &amp; Management</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Data management —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                simplified, scalable.
              </em>
            </h1>

            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "40rem" }}>
              Inconsistent, disparate data can drain resources from any and every complex enterprise.
              Why let it?
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/orbit/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore ORBit →
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
          <Stat value="200+" label="SAP clients served"            data-delay="0" />
          <Stat value="20+"  label="Years of SAP expertise"        data-delay="100" />
          <Stat value="1000+" label="Data migrations completed"    data-delay="200" />
          <Stat value="99%"  label="Data accuracy guarantee"       data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          ORBIT INTRO — canvas-2 (alt)
          Single featured product card before features
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="ORBit Data Migration and Management"
          eyebrowTone="primary"
          title="A cloud-based alternative that significantly simplifies day-to-day enterprise data management."
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
              Unified Data Integration &amp; Migration
            </p>
            <p className="text-ink-2 leading-relaxed">
              ORBit supports a wide range of data management use cases. You can integrate data between
              different systems, perform a range of data transformations, and even handle large data
              migration job loads. ORBit&apos;s intuitive design simplifies data management processes
              overall, in seamless fashion.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — canvas (white)
          Teal gradient cards — platform capabilities
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Everything you need to manage enterprise data."
          subtitle="With integrations rapidly built on SAP BTP, your enterprise can enjoy features like:"
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
          BENEFITS — canvas-2 (alt)
          Terracotta gradient cards — business outcomes
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Tangible outcomes from smarter data management."
          subtitle="The ORBit platform benefits your organization with:"
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
          Split: heading left with How We Help text, 2×2 cards right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="How We Help"
            eyebrowTone="primary"
            title={<>Future-proof your business — <em className="font-serif italic">don&apos;t wait.</em></>}
            subtitle="Sierra delivers tangible business value by enabling enterprises to take control of their data with ORBit Data Migration and Management. By streamlining data integration and transformation, ORBit reduces operational inefficiencies, minimizes costly errors, and accelerates time-to-insight."
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
          PROCESS STEPS — canvas-2 (alt)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="04"
          eyebrow="Our process"
          eyebrowTone="primary"
          title="From data chaos to clean, connected pipelines."
          subtitle="Sierra Digital's structured data management methodology delivers reliable, scalable results — every phase validated before the next begins."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            { title: "Data Assessment", body: "Audit your existing data landscape — source systems, formats, quality, and integration points. Identify migration scope, transformation requirements, and priority data domains." },
            { title: "Pipeline Design", body: "Configure ORBit pipelines, pre-built connectors, and data transformation logic tailored to your systems. Define validation rules, data type-casting, and filtering criteria up front." },
            { title: "Data Validation & Quality", body: "Apply robust filtering, type-casting, and validation functions across all data sets. Preview data and resolve quality issues before any migration or integration job runs." },
            { title: "Migration & Integration", body: "Execute data loads, real-time replication, and cross-system integrations using ORBit's scalable infrastructure. Monitor job status live and respond to alerts in real time." },
            { title: "Monitoring & Optimization", body: "Track ongoing jobs via unified ORBit dashboards, resolve pipeline alerts proactively, and continuously optimize transformation logic as business data requirements evolve." },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation. Connect your business with cutting-edge data management technologies for innovation — don't wait, future-proof your business now."
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Explore ORBit"
        secondaryHref="/orbit/"
      />
    </>
  );
}
