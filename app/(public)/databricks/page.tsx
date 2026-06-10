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
  title: "SAP Databricks for SAP Business Data Cloud | Sierra Digital",
  description:
    "Leverage SAP Databricks integration with SAP Business Data Cloud for advanced analytics, AI/ML, and unified data processing with Sierra Digital.",
  alternates: { canonical: "https://sierradigitalinc.com/databricks/" },
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

// ── Features (6 items) ────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M4 6h16M4 10h16M4 14h10",
    title: "Unified Data Access",
    body: "One of the biggest challenges in modern enterprises is dealing with data silos. SAP Business Data Cloud connects and harmonizes data from various systems, enabling a 360-degree view of the business.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Lakehouse Architecture for Unified Data Management",
    body: "Leverage Databricks' lakehouse architecture to consolidate structured, semi-structured, and unstructured data, enabling seamless analytics and governance across the enterprise.",
  },
  {
    icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
    title: "Delta Lake for Reliable Data Pipelines",
    body: "Improve data reliability and performance with Delta Lake, enabling ACID transactions, scalable metadata handling, and optimized storage for SAP Business Data Cloud.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Collaborative Data Science and Artificial Intelligence",
    body: "Empower data scientists and analysts with a collaborative workspace to build, test, and deploy machine learning models using Databricks' integrated AI and ML capabilities.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Auto-Scaling Compute for High-Performance Processing",
    body: "Optimize workloads with auto-scaling clusters that dynamically allocate resources based on demand, ensuring efficient and cost-effective data processing.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Seamless Integration with SAP and External Data Sources",
    body: "Enable smooth data ingestion from SAP applications, third-party databases, and cloud storage, ensuring a holistic and real-time view of enterprise data.",
  },
];

// ── Benefits (5 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Accelerated Data Transformation",
    body: "Simplify complex ETL processes with Databricks' high-performance data processing, enabling real-time transformation and analysis of large datasets.",
  },
  {
    icon: "M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4zM9 21v-3M15 21v-3",
    title: "Advanced AI and Machine Learning Deployment",
    body: "Leverage built-in MLflow capabilities to streamline model lifecycle management, from experimentation to production, driving AI-driven business insights.",
  },
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Optimized Cost Efficiency",
    body: "Reduce infrastructure and processing costs with intelligent workload management, auto-scaling compute, and optimized data storage strategies.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Improved Data Governance and Compliance",
    body: "Ensure enterprise-wide data governance with fine-grained access controls, lineage tracking, and automated policy enforcement within SAP Business Data Cloud.",
  },
  {
    icon: "M3 3v18h18",
    d2: "m19 9-5 5-4-4-3 3",
    title: "Real-Time Streaming for Actionable Insights",
    body: "Support real-time decision-making with Databricks' streaming capabilities, enabling continuous data ingestion and analysis for operational intelligence.",
  },
];

// ── Why Sierra differentiators ────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Black-Belt SAP Partner",
    body: "Elite SAP partnership status gives Sierra privileged access, early enablement, and the credentials to implement Databricks within SAP Business Data Cloud at enterprise scale.",
  },
  {
    icon: "M12 8v4l3 3M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z",
    title: "Rapid Implementation",
    body: "Sierra specializes in rapid implementation, enabling businesses to integrate Databricks seamlessly within SAP Business Data Cloud within weeks — not months.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Unified Data Expertise",
    body: "Deep experience with lakehouse architecture, Delta Lake, and SAP data harmonization — ensuring your enterprise data is structured, governed, and AI-ready from day one.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI/ML Acceleration",
    body: "Built-in MLflow, collaborative data science tools, and end-to-end model lifecycle support — Sierra gets your AI and machine learning workloads into production faster.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DatabricksPage() {
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
              <Eyebrow tone="dark">SAP Business Data Cloud · Databricks</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Databricks on SAP BDC —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                data intelligence, unleashed.
              </em>
            </h1>

            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}>
              Sierra Digital empowers enterprises to fully leverage Databricks integrated within
              SAP Business Data Cloud, enabling seamless unification, orchestration, and analysis
              of data. Harness intelligent data products, AI-driven insights, and advanced
              analytics to drive smarter decisions and fuel innovation across your business.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Databricks on SAP BDC →
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
          <Stat value="Weeks" label="Typical deployment timeline"  data-delay="200" />
          <Stat value="360°" label="Unified view of your data"     data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          INTRO SPOTLIGHT — canvas-2 (alt)
          Block: "Unlocking AI & Analytics Power"
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Databricks Integration"
          eyebrowTone="primary"
          title="Databricks Integration with SAP Business Data Cloud"
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
              Unlocking AI &amp; Analytics Power
            </p>
            <p className="text-ink-2 leading-relaxed">
              Databricks is a leading data and AI platform that enables organizations to unify
              their data, analytics, and AI workloads on a single, scalable architecture. Within
              SAP Business Data Cloud, Databricks plays a crucial role by providing an open,
              high-performance environment to process, transform, and analyze vast amounts of
              structured and unstructured data. By integrating Databricks with SAP Business Data
              Cloud, businesses gain real-time access to data across SAP and non-SAP sources,
              enabling predictive analytics, ML capabilities, AI automation, and large-scale
              data processing.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — canvas (white)
          6 teal gradient cards — key capabilities
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Unlock the full potential of Databricks within SAP BDC."
          subtitle="With Sierra's expertise, your organization can unlock the full potential of Databricks within SAP Business Data Cloud with these key capabilities:"
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
          5 terracotta gradient cards — measurable business value
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Measurable value delivered with Databricks on SAP BDC."
          subtitle="Sierra Digital delivers measurable value with Databricks within SAP Business Data Cloud:"
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
          Split: heading uses "How We Help" text, 2×2 differentiator cards right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="How We Help"
            eyebrowTone="primary"
            title={<>Start your journey toward <em className="font-serif italic">transformative innovation.</em></>}
            subtitle="In today's AI-driven world, enterprises need agile, intelligent, and secure data solutions to stay ahead. Databricks within SAP Business Data Cloud revolutionizes data management, and Sierra Digital ensures you maximize its potential. As a Black-Belt SAP partner, we specialize in rapid implementation, enabling businesses to integrate Databricks seamlessly within weeks."
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
          PROCESS STEPS — canvas-2 (alt)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="04"
          eyebrow="Our process"
          eyebrowTone="primary"
          title="From data silos to unified intelligence — in weeks."
          subtitle="Sierra Digital's structured Databricks methodology takes you from assessment to live AI workloads fast — with expert guidance at every phase."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            { title: "Data Landscape Assessment", body: "Evaluate your existing SAP data landscape, non-SAP sources, and analytics requirements. Identify integration touchpoints and define the scope for Databricks within SAP Business Data Cloud." },
            { title: "Lakehouse Architecture Design", body: "Design the lakehouse architecture integrating Databricks with SAP BDC. Define the Delta Lake structure, data ingestion patterns, and governance policies for unified data management." },
            { title: "Data Pipeline & Delta Lake Setup", body: "Configure high-performance data pipelines with Delta Lake for ACID transactions, scalable metadata handling, and real-time streaming ingestion from SAP and external sources." },
            { title: "AI/ML Workspace Enablement", body: "Set up the collaborative data science environment, configure MLflow for model lifecycle management, and deploy AI/ML models from experimentation through to production." },
            { title: "Governance, Scaling & Optimisation", body: "Apply fine-grained access controls, lineage tracking, and automated policy enforcement. Tune auto-scaling clusters and continuously optimise workloads for performance and cost efficiency." },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation. Connect your business with cutting-edge Databricks and SAP Business Data Cloud capabilities — to start your journey toward transformative innovation!"
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Explore Databricks on SAP BDC"
        secondaryHref="/contact/"
      />
    </>
  );
}
