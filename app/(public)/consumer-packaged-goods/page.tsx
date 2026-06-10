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
  title: "Transforming the CPG Industry with SAP Solutions",
  description:
    "Transform your CPG business with SAP S/4HANA, SAP Cloud ERP, and AI-powered Consumer Products Industry Software. Sierra Digital delivers end-to-end CPG supply chain transformation, digitalization, and consumer products IT solutions.",
  alternates: { canonical: "https://sierradigitalinc.com/consumer-packaged-goods/" },
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

// ── Features (5 teal cards — from FeatureRows) ────────────────────────────────

const FEATURES = [
  {
    icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
    title: "Intelligent Demand Planning & Inventory Control",
    body: "Use AI-driven insights to forecast demand accurately, optimize stock levels, and reduce waste.",
  },
  {
    icon: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8z",
    icon2: "M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    title: "Automated Supply Chain Coordination",
    body: "Streamline procurement, logistics, and vendor management with smart automation to improve efficiency and transparency.",
  },
  {
    icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
    title: "Smart Manufacturing & Quality Assurance",
    body: "Integrate IoT and predictive maintenance tools to enhance production reliability and ensure high product standards.",
  },
  {
    icon: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
    title: "Omnichannel Customer Experience Optimization",
    body: "Implement SAP solutions to create seamless interactions across retail, e-commerce, and distribution channels.",
  },
  {
    icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 1 0-13.4 2.1A4 4 0 0 0 3 15z",
    title: "Future-Ready ERP & Digital Innovation",
    body: "Transition legacy systems to modern, cloud-based SAP platforms for enhanced agility, scalability, and real-time operational control.",
  },
];

// ── Benefits (5 terracotta cards) ─────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    title: "Stronger Customer Engagement",
    body: "Leverage data insights to personalize marketing and improve consumer satisfaction.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Resilient Supply Chains",
    body: "Minimize disruptions and optimize logistics with predictive supply chain analytics.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Operational Excellence",
    body: "Boost efficiency, reduce costs, and improve productivity through AI-powered automation.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Sustainability & Compliance",
    body: "Ensure adherence to industry regulations while adopting eco-conscious business practices.",
  },
  {
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Scalability & Digital Readiness",
    body: "Implement flexible SAP solutions that grow with your business and future-proof operations.",
  },
];

// ── Why Choose Sierra Digital (5 diff cards) ─────────────────────────────────

const WHY_SIERRA = [
  {
    icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z",
    title: "Industry Knowledge",
    body: "Extensive expertise in the unique challenges of CPG brands and manufacturers.",
  },
  {
    icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
    title: "Cutting-Edge Technology",
    body: "Leveraging SAP's AI, automation, and analytics tools for process optimization.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    icon2: "M9 12l2 2 4-4",
    title: "Commitment to Compliance & Sustainability",
    body: "Helping businesses meet regulatory and environmental standards.",
  },
  {
    icon: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12",
    title: "Proven Impact",
    body: "A strong track record of delivering SAP-powered success to leading CPG companies.",
  },
  {
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Future-Forward Approach",
    body: "Scalable and adaptable solutions designed to support long-term business growth.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ConsumerPackagedGoodsPage() {
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
              <Eyebrow tone="dark">Consumer Packaged Goods · SAP-Powered CPG Transformation</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Transforming the CPG Industry{" "}
              <em className="font-serif italic font-extralight opacity-90">
                with SAP Solutions.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Sierra Digital helps CPG brands navigate constant shifts in consumer preferences,
              supply chain complexities, and operational inefficiencies — leveraging SAP
              technologies to create resilient, AI-powered supply chains.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Ask Our Expert
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Solutions →
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
          <Stat value="AI-Driven"    label="Automation and predictive analytics for CPG"         data-delay="0" />
          <Stat value="S/4HANA"      label="Cloud ERP for resilient CPG operations"              data-delay="100" />
          <Stat value="Omnichannel"  label="Seamless retail, e-commerce and distribution"        data-delay="200" />
          <Stat value="Scalable"     label="Future-ready SAP solutions that grow with you"       data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES 01 — alt  ·  5 teal cards (from FeatureRows)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Features"
          subtitle="Consumer Packaged Goods (CPG) companies face constant shifts in consumer preferences, supply chain complexities, and operational inefficiencies. Sierra Digital helps CPG brands navigate these challenges by leveraging SAP technologies to enhance efficiency, improve data-driven insights, and create resilient supply chains. Our AI-powered automation, predictive analytics, and seamless integrations drive business success in a competitive marketplace."
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
                <span className="text-primary-700"><Icon d={f.icon} d2={f.icon2} /></span>
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
          BENEFITS 02 — canvas (white)  ·  5 terracotta cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Benefits of Partnering with Sierra Digital"
          subtitle="By choosing Sierra Digital, CPG companies gain:"
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
          VALUED CLIENTS — alt
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt" density="compact">
        <div className="text-center mb-8">
          <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono mb-2">
            Valued Clients In Oil &amp; Gas
          </p>
          <p className="text-ink-2 text-sm">
            Sierra Digital serves Oil &amp; Gas enterprises all over the world. Here are just a few
            of the clients we&apos;ve served recently.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["Continental", "Andeavor", "ExxonMobil", "Par Pacific", "HollyFrontier"].map((name) => (
            <span
              key={name}
              className="rounded-xl border border-primary-200 bg-white px-6 py-3 text-sm font-semibold text-ink-2 shadow-sm"
            >
              {name}
            </span>
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
                <span className="text-primary-700"><Icon d={w.icon} d2={w.icon2} /></span>
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
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Lead the market shift"
        title={
          <>
            Elevate your CPG business with Sierra Digital&apos;s SAP Solutions —{" "}
            <em className="font-serif italic">Lead the Market Shift.</em>
          </>
        }
        subtitle="Contact us today to learn more about how Sierra Digital can help you achieve your goals."
        primaryLabel="Ask Our Expert"
        primaryHref="/contact/"
        secondaryLabel="Explore Solutions"
        secondaryHref="/contact/"
      />
    </>
  );
}
