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
  title: "Enerbridge | Upstream Solutions for Oil & Gas Payout, PRA & Planning",
  description:
    "Enerbridge is an SAP BTP solution for upstream oil & gas delivering SAP Payout Management, PRA automation, SAC financial planning, capital project builder, volumetric analytics, and secure business partner portals.",
  alternates: { canonical: "https://sierradigitalinc.com/enerbridge/" },
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

// ── Key Features (6 teal cards) ───────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    title: "Business Partner Portal",
    body: "Empower owners with a self-service portal to update contact, banking, and payment preferences. Access revenue and JIB details with Excel download support and integrated ticketing, document management, and DocuSign features.",
  },
  {
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Payout Management",
    body: "Handle complex payout scenarios using real-time ownership, revenue, and expense data. Built with SAP-standard APIs, the solution delivers accurate calculations, owner statements, and forecast models.",
  },
  {
    icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    title: "Capital Projects & AFE",
    body: "Streamline budget planning, WBS templates, workflow approvals, and analytics. Integrates seamlessly with SAP EPPM and PS, while offering complete AFE budgeting, owner balloting, and cash call management.",
  },
  {
    icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
    title: "Budget, Forecast & Planning with SAP Analytics Cloud (SAC)",
    body: "Leverage powerful SAC tools and data actions to model scenarios based on production, inflation, and pricing. Create data-driven stories for asset acquisition, divestiture, or development—across a customizable hierarchy and multi-currency support.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Revenue Data & Process Analytics",
    body: "Visualize key revenue data with tools for analyzing venture distributions, combined runs, title transfers, and escheat activity in one unified interface.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Volumetric Data Analytics",
    body: "Resolve volume allocation anomalies and manage shut-in/downtime analytics with ease. Enhance oil, gas, and water production tracking for smarter reporting and forecasting.",
  },
];

// ── Business Benefits (5 terracotta cards) ────────────────────────────────────

const BENEFITS = [
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Seamless SAP ERP Integration",
    body: "Built exclusively on SAP Standard APIs and CDS Views, EnerBridge connects with your core ERP securely and efficiently.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Next-Level AI & SAC Integration",
    body: "Use Gen AI and SAP HANA vectoring for natural language queries, auto-generated forms, and smart data insights—all within your existing SAP environment.",
  },
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Unified Process Management",
    body: "Consolidate systems, data, and tasks into a centralized, user-friendly control center for process monitoring, analytics, and reporting.",
  },
  {
    icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z",
    title: "Customizable Best Practices",
    body: "Every enhancement is built on proven industry methods and tailored to fit your unique business needs with rapid deployment.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Enterprise-Grade Security & Role-Based Access",
    body: "Trust EnerBridge's permission-controlled environments to deliver secure, compliant, and transparent stakeholder access at all levels.",
  },
];

// ── Why Choose Sierra Digital (5 diff cards) ─────────────────────────────────

const WHY_SIERRA = [
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2",
    title: "Innovation Strategy & Road Mapping",
    body: "Assess your current SAP architecture and identify high-impact use cases for SAP BTP enhancements specific to upstream operations.",
  },
  {
    icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
    title: "Custom App Development",
    body: "Design, build, and deploy secure, scalable EnerBridge applications tailored to capital projects, payouts, volumetrics, and partner collaboration.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "EnerBridge Platform Mastery",
    body: "Leverage EnerBridge's pre-built apps, advanced analytics, and AI integrations for rapid deployment and maximum ROI.",
  },
  {
    icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    title: "Integration & Data Services",
    body: "Ensure seamless, real-time connectivity between SAP JVA, PRA, UOM, and third-party tools using standard SAP APIs and CDS views.",
  },
  {
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Continuous Innovation Support",
    body: "Stay agile with ongoing support for optimization, new feature enablement, and evolving process requirements as your operations grow.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EnerbridgePage() {
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
              <Eyebrow tone="dark">EnerBridge · Upstream Oil &amp; Gas Solutions</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              EnerBridge{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Upstream Platform.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              A purpose-built platform designed to elevate operational excellence in the Upstream
              Oil &amp; Gas industry. Powered by intelligent automation and deep sector expertise,
              EnerBridge delivers gold-standard enhancements for JVA, PRA, and Upstream Operations
              Management.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Ask Our Experts
              </Button>
              <Button href="/contact" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore EnerBridge →
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
          <Stat value="JVA + PRA"  label="Upstream accounting modules supported"        data-delay="0" />
          <Stat value="SAP BTP"    label="Built on SAP Standard APIs and CDS Views"     data-delay="100" />
          <Stat value="Gen AI"     label="Natural language queries and smart insights"  data-delay="200" />
          <Stat value="Unified"    label="Single control center for upstream processes" data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          ENERBRIDGE SPOTLIGHT — alt
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Key Features"
          eyebrowTone="primary"
          title="EnerBridge — Upstream Oil &amp; Gas Platform"
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
              SAP BTP-Powered Upstream Operations
            </p>
            <p className="text-ink-2 leading-relaxed">
              EnerBridge enhances the daily workflows of upstream organizations by extending core
              SAP functionalities with ready-to-deploy, high-impact modules.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          KEY FEATURES 01 — canvas (white)  ·  6 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Key Features"
          eyebrowTone="primary"
          title="Key Features of EnerBridge"
          subtitle="EnerBridge enhances the daily workflows of upstream organizations by extending core SAP functionalities with ready-to-deploy, high-impact modules."
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
          BUSINESS BENEFITS 02 — alt  ·  5 terracotta cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Business Benefits"
          eyebrowTone="accent"
          title="Business Benefits of EnerBridge"
          subtitle="EnerBridge drives measurable value by optimizing operations, simplifying data access, and accelerating digital transformation in upstream energy businesses."
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
                <span className="text-accent-600"><Icon d={b.icon} /></span>
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
          WHY CHOOSE SIERRA DIGITAL 03 — canvas (white)  ·  5 diff cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
          eyebrow="Why Choose Sierra Digital?"
          eyebrowTone="primary"
          title="Why Choose Sierra Digital?"
          subtitle="Sierra Digital stands as a trusted transformation partner for the Oil & Gas sector. With decades of upstream experience and deep SAP BTP expertise, we're uniquely positioned to help you harness the full potential of EnerBridge."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_SIERRA.map((w, i) => (
            <div
              key={w.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)",
                boxShadow: "0 4px 16px rgba(33,138,163,0.12), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={w.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {w.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          HOW WE HELP 04 — alt  ·  3 Block spotlights
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How We Help"
          eyebrowTone="primary"
          title="How We Help"
          align="center"
          size="xl"
        />

        <div className="flex flex-col gap-6 mx-auto max-w-4xl">
          {/* Block 1 — How We Help */}
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
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
              Many of our clients tell us, &ldquo;We have BTP, but we don&apos;t know how to
              leverage it.&rdquo; EnerBridge bridges that gap. Our pre-built, best-practice apps
              are designed with SAP and industry leaders to deliver real, measurable outcomes across
              your enterprise.
            </p>
          </div>

          {/* Block 2 — Use Case Study */}
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
              Use Case Study: Energy Transfer Revolutionizes Capital Projects &amp; Accounting
              Leveraging BTP
            </p>
            <p className="text-ink-2 leading-relaxed">
              One Day 1 of its launch, thousands of Well Owners rushed to enjoy self-serve
              conveniences on Hess&apos; new Owner Relations Portal. But CX improvement&apos;s only
              half the story. Self-serve is simultaneously freeing up CSMs to engage in high-worth
              tasks. Contact{" "}
              <a href="mailto:sales@sierradigitalinc.com"
                className="text-primary-600 underline hover:text-primary-800 transition-colors">
                sales@sierradigitalinc.com
              </a>{" "}
              for a full walk-through of the Hess success store.
            </p>
          </div>

          {/* Block 3 — Streamlining Owner Relations Portal */}
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
              Streamlining Owner Relations Portal with a Self-Service Portal
            </p>
            <p className="text-ink-2 leading-relaxed">
              This client is a leading shale oil and gas producer, one of the largest in the deep
              water Gulf of Mexico and a key natural gas producer and supplier to Peninsular
              Malaysia and Thailand. The company is also engaged in exploration and appraisal
              activities offshore Guyana, participating in one of the industry&apos;s largest oil
              discoveries in the past decade.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Power the future of upstream"
        title={
          <>
            Ready to Power the Future of Upstream{" "}
            <em className="font-serif italic">with EnerBridge?</em>
          </>
        }
        subtitle="Contact Sierra Digital today to explore how EnerBridge can streamline your operations, modernize legacy processes, and drive tangible business growth."
        primaryLabel="Ask Our Experts"
        primaryHref="/contact"
        secondaryLabel="Explore EnerBridge"
        secondaryHref="/contact"
      />
    </>
  );
}
