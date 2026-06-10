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
  title: "ORBit – Data Migration & Data Management Platform",
  description:
    "ORBit is an enterprise cloud data migration and management platform for SAP S/4HANA and SAP BTP. Automate SAP data migration, workflow automation, and enterprise data pipelines with Sierra Digital.",
  alternates: { canonical: "https://sierradigitalinc.com/orbit/" },
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

// ── Features (5 teal cards) ───────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM7 8h10M7 12h10M7 16h6",
    title: "Pre-Built Connectors & Pipeline Accelerators",
    body: "Save time on setup with pre-built tools that allow users to focus on critical data management objectives.",
  },
  {
    icon: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
    title: "Advanced Filtering, Validation & Typecasting",
    body: "Save time on setup with pre-built tools that allow users to focus on critical data management objectives.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Real-Time Job Monitoring & Alerts",
    body: "Gain visibility into ongoing jobs with real-time monitoring and email alerts to keep teams aligned and on track.",
  },
  {
    icon: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v6H3z",
    title: "Unified Dashboards",
    body: "Centralized dashboards provide a clear view of data transformation processes, task management, and team workflows to enhance operational efficiency.",
  },
  {
    icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
    title: "Scalable & Flexible Architecture",
    body: "Handle diverse demands—from one-time data loads to real-time replication and custom transformations—quickly and securely.",
  },
];

// ── Benefits (5 terracotta cards) ─────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Simplifies Data Management",
    body: "Reduces complexity in daily operations with an intuitive cloud-based platform.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Enhances Integration",
    body: "Effortlessly connects systems, databases, and applications using pre-built connectors.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Optimizes Efficiency",
    body: "Automates workflows with pipeline accelerators to streamline data transformation processes.",
  },
  {
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    icon2: "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
    title: "Boosts Confidence",
    body: "Offers metadata visibility and data previews for better planning and decision-making.",
  },
  {
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Scales with Growth",
    body: "Adapts to evolving business needs with a secure, scalable infrastructure.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function OrbitPage() {
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
              <Eyebrow tone="dark">ORBit · Data Migration &amp; Management Platform</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              ORBit{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Enterprise Data Platform.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Inconsistent and fragmented data can drain resources from even the most complex
              enterprises. Why let it?
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Contact us
              </Button>
              <Button href="/contact/" size="lg"
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
          <Stat value="Cloud"      label="Versatile cloud-based data management platform"  data-delay="0" />
          <Stat value="Real-Time"  label="Job monitoring and alerts for full visibility"    data-delay="100" />
          <Stat value="Pre-Built"  label="Connectors and pipeline accelerators"             data-delay="200" />
          <Stat value="Scalable"   label="Handles one-time loads to real-time replication"  data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          ORBIT OVERVIEW SPOTLIGHT — alt
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="ORBit Data Migration and Management"
          eyebrowTone="primary"
          title="A Cloud-Based Solution for Simplified Enterprise Data Management"
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
              Enterprise Data Management on SAP BTP
            </p>
            <p className="text-ink-2 leading-relaxed">
              ORBit is a versatile, cloud-based platform designed to streamline enterprise data
              management. It supports a variety of use cases, including data integration across
              systems, data transformation, and large-scale migration tasks. With its user-friendly
              interface, ORBit makes complex data management processes seamless and efficient.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES 01 — canvas (white)  ·  5 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Features"
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 70, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={f.icon} /></span>
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
          BENEFITS 02 — alt  ·  5 terracotta cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Benefits"
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
                <span className="text-accent-600"><Icon d={b.icon} d2={b.icon2} /></span>
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
          WHY SIERRA & HOW WE HELP 03 — canvas (white)  ·  3 spotlights
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
          eyebrow="Why Choose Sierra for ORBit?"
          eyebrowTone="primary"
          title="Why Choose Sierra for ORBit Data Migration &amp; Management?"
          align="center"
          size="xl"
        />

        <div className="flex flex-col gap-6 mx-auto max-w-4xl">
          {/* Block 1 — Why Choose Sierra */}
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Why Choose Sierra for ORBit Data Migration &amp; Management?
            </p>
            <p className="text-ink-2 leading-relaxed">
              Sierra brings unmatched expertise in enterprise data management, offering a proven
              platform—ORBit—that transforms how organizations handle integration, migration, and
              transformation tasks. Our approach emphasizes speed, accuracy, and scalability to
              ensure your data drives real business outcomes.
            </p>
          </div>

          {/* Block 2 — How We Help */}
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            data-delay="100"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              How We Help
            </p>
            <p className="text-ink-2 leading-relaxed">
              Sierra empowers enterprises to take control of their data with ORBit Data Migration
              and Management. By simplifying integration and transformation processes, ORBit
              minimizes operational inefficiencies, reduces costly errors, and accelerates
              time-to-insight. Its scalable infrastructure adapts to growing business demands—whether
              for real-time replication, large-scale migrations, or custom transformations—while
              ensuring seamless connectivity across systems.
            </p>
          </div>

          {/* Block 3 — Connect Businesses */}
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            data-delay="200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Connect Businesses with Cutting-Edge Technologies for Innovation
            </p>
            <p className="text-ink-2 leading-relaxed">
              Don&apos;t wait – future-proof your business now!
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Get started today"
        title={
          <>
            Ready to get started?{" "}
            <em className="font-serif italic">Talk to our experts.</em>
          </>
        }
        subtitle="Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
        secondaryLabel="Explore ORBit"
        secondaryHref="/contact/"
      />
    </>
  );
}
