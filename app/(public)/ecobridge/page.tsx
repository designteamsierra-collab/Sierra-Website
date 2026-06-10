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
  title: "EcoBridge RFS Compliance Automation Solutions | Sierra Digital",
  description:
    "Automate renewable fuel compliance with EcoBridge. SAP-powered solution for RFS compliance, credit management, sustainability compliance automation, and regulatory reporting.",
  alternates: { canonical: "https://sierradigitalinc.com/ecobridge/" },
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

// ── Key Features (8 teal cards) ───────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Clean Core Integration",
    body: "Clean Core application built upon SAP BTP with integration to S/4HANA.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Unified Business Platform",
    body: "A single platform to support various businesses for renewable fuel producers, refineries, blenders and exporters.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    title: "Role-Based Access Control",
    body: "Role based access for analysts to support various functions from credit & deficit monitoring and processing, reconciliation and reporting.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Sustainability & Regulatory Compliance",
    body: "Digital platforms to monitor and report impacts, helping businesses meet regulatory requirements and improve sustainability.",
  },
  {
    icon: "M9 11V6l-2 2m2-2 2 2M15 13v5l2-2m-2 2-2-2M3 3h18M3 21h18",
    title: "Strategic Risk & Obligation Management",
    body: "Tools for obligation estimation and risk management help in planning and hedging strategies.",
  },
  {
    icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3",
    title: "Automated Credit & Reconciliation Processes",
    body: "Supports functions like credit capture, reconciliation with PTD, and retirement.",
  },
  {
    icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    title: "Comprehensive Regulatory Support",
    body: "Support RFS2, LCFS, Cap & Trade regulations and Sulfur & Benzene regulations.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Efficient Data Automation",
    body: "Automated data reconciliation and data transfer minimizes manual errors and increases efficiency.",
  },
];

// ── Business Benefits (8 terracotta cards) ────────────────────────────────────

const BENEFITS = [
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Seamless SAP Integration",
    body: "Leverages standard SAP functionalities with upstream/downstream systems like Deal Capture and Risk Reporting. Integrated with SAP Oil & Gas and SAP Commodity Management. Seamlessly connects with S/4HANA for credit inventory actualization (priced and unpriced).",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2",
    title: "Unified Regulatory Compliance Platform",
    body: "A single solution to monitor and track credits and obligations across various regulations. Single source of truth for generating multi-regulation compliance reports.",
  },
  {
    icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
    title: "Credit Forecasting & Inventory Management",
    body: "Forecasts credits to streamline demand and supply planning. Supports credit inventory valuation using standard S/4HANA processes.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Facility-Level Reporting & Visibility",
    body: "Pre-configured reports for credits and obligations at the facility level. Offers granular visibility and compliance tracking.",
  },
  {
    icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z",
    title: "Flexible, Rule-Based Processing",
    body: "Rule-based design for credit and deficit processing. Easily adapts to changing regulatory mandates.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Automated Reconciliation Workflows",
    body: "AI-driven reconciliation for detecting mismatches and settling invoices. Fully automated transaction matching with customizable rules.",
  },
  {
    icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 1 0-13.4 2.1A4 4 0 0 0 3 15z",
    title: "EMTS Integration & Manual Entries",
    body: "Out-of-the-box integration with EMTS for trade completion. Supports manual entry of obligations and credits for flexibility.",
  },
  {
    icon: "M5 12h14M12 5l7 7-7 7",
    title: "Rapid Deployment & Pre-Built Packages",
    body: "Feature-rich implementation packages. Out-of-the-box integration with standard SAP S/4HANA and Commodity Management processes.",
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
    body: "Design, build, and deploy secure, scalable applications tailored to renewable regulation as well as capital projects, payouts, volumetrics, and partner collaboration.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "EcoBridge Platform Mastery",
    body: "Leverage EcoBridge's pre-built apps, advanced analytics, and AI integrations for rapid deployment and maximum ROI.",
  },
  {
    icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    title: "Integration & Data Services",
    body: "Ensure seamless, real-time connectivity between SAP Commodity Management, Procure-to-Pay, Production, and Order-to-Cash business process and third-party EPA Moderated Transaction System offering integrated solution with built in analytics.",
  },
  {
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Continuous Innovation Support",
    body: "Stay agile with ongoing support for optimization, new feature enablement, and evolving process requirements as your operations grow.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EcoBridgePage() {
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
              <Eyebrow tone="dark">EcoBridge · RFS Compliance Automation</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              EcoBridge{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Compliance Platform.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              A robust digital platform to monitor renewable fuel compliance, seamlessly integrating
              with SAP S/4HANA business processes and regulatory reporting systems — powered by
              generative AI capabilities.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Ask Our Experts
              </Button>
              <Button href="/contact" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore EcoBridge →
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
          <Stat value="SAP BTP"   label="Clean Core integration to S/4HANA"          data-delay="0" />
          <Stat value="AI-Driven" label="Generative AI compliance automation"          data-delay="100" />
          <Stat value="RFS2+LCFS" label="Multi-regulation support out of the box"      data-delay="200" />
          <Stat value="Unified"   label="Single platform for all energy compliance"    data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          ECOBRIDGE SPOTLIGHT — alt
          Heading outside · spotlight card with Lead + intro text
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Key Features"
          eyebrowTone="primary"
          title="EcoBridge — Renewable Fuel Compliance Platform"
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
              SAP BTP-Powered Energy Compliance
            </p>
            <p className="text-ink-2 leading-relaxed">
              Businesses struggle with navigating complex renewable fuel regulations, tracking
              credits/deficits, and ensuring compliance. EcoBridge enhances the daily workflows of
              Energy Organizations by extending core SAP functionalities with ready-to-deploy,
              high-impact modules.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          KEY FEATURES 01 — canvas (white)  ·  8 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Key Features"
          eyebrowTone="primary"
          title="Key Features"
          subtitle="EcoBridge enhances the daily workflows of Energy Organizations by extending core SAP functionalities with ready-to-deploy, high-impact modules."
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
          BUSINESS BENEFITS 02 — alt  ·  8 terracotta cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Business Benefits"
          eyebrowTone="accent"
          title="Business Benefits"
          subtitle="EcoBridge is an energy compliance solution built on SAP BTP platform that serve as a single platform for compliance with current and future renewables regulations for organizations that automatically track credits and obligations from business transactions and leveraging smart reconciliation features powered by AI."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="will-reveal rounded-2xl border border-accent-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 70, 400))}
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
          WHY CHOOSE SIERRA DIGITAL 03 — canvas (white)
          5 diff cards + "How We Help" spotlight with YouTube link
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
          eyebrow="Why Choose Sierra Digital?"
          eyebrowTone="primary"
          title="Why Choose Sierra Digital?"
          subtitle="Sierra Digital stands as a trusted transformation partner for the Oil & Gas sector. With decades of upstream experience and deep SAP BTP expertise, we're uniquely positioned to help you harness the full potential of EcoBridge."
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

        {/* How We Help spotlight with YouTube link */}
        <div className="mt-6 mx-auto max-w-4xl">
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
              leverage it.&rdquo; EcoBridge bridges that gap. Our pre-built, best-practice apps are
              designed with SAP and industry leaders to deliver real, measurable outcomes across
              your enterprise. With EcoBridge, your existing SAP BTP investment transforms into a
              launchpad for innovation—cutting costs, accelerating processes, and boosting value
              from day one.
            </p>
            <a
              href="https://youtu.be/FxaGK0MBjoc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 underline break-all text-sm hover:text-primary-800 transition-colors"
            >
              https://youtu.be/FxaGK0MBjoc
            </a>
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
            <em className="font-serif italic">with EcoBridge?</em>
          </>
        }
        subtitle="Contact Sierra Digital to see how EcoBridge can simplify compliance, modernize processes, and boost growth."
        primaryLabel="Ask Our Experts"
        primaryHref="/contact"
        secondaryLabel="Explore EcoBridge"
        secondaryHref="/contact"
      />
    </>
  );
}
