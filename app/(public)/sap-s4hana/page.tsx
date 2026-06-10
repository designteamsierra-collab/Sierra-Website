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
  title: "SAP S4HANA - Sierra Digital",
  alternates: { canonical: "https://sierradigitalinc.com/sap-s4hana/" },
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

// ── Why SAP S/4HANA — 6 enterprise offering cards ────────────────────────────

const OFFERINGS = [
  {
    icon: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
    title: "Real-Time Insights & Decision-Making",
    body: "Leverage SAP S/4HANA's in-memory computing to process and analyze vast amounts of data instantly, enabling informed decision-making with real-time insights.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2",
    title: "Streamlined Business Processes",
    body: "Optimize core business functions—including finance, procurement, manufacturing, and supply chain—through automation and predictive analytics.",
  },
  {
    icon: "M4 8h16M4 16h16M2 12h20",
    title: "Scalability & Flexibility",
    body: "Available in cloud, on-premise, and hybrid deployment models, SAP S/4HANA provides the flexibility to scale according to your business needs.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    title: "Enhanced User Experience",
    body: "With SAP Fiori, the system offers an intuitive, role-based interface that simplifies user interactions and boosts productivity across all business functions.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Embedded AI & Automation",
    body: "Leverage AI-driven automation and machine learning to eliminate repetitive tasks, enhance efficiency, and drive smarter business outcomes.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Compliance & Security",
    body: "Ensure regulatory compliance and robust security with built-in governance features designed to meet industry standards and global business requirements.",
  },
];

// ── Business Benefits — first 5 items of second CardGrid (terracotta) ─────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Increased Efficiency & Productivity",
    body: "Automate routine tasks and optimize workflows to enable faster and more efficient business operations.",
  },
  {
    icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
    title: "Improved Decision-Making",
    body: "Access real-time analytics and AI-driven insights to make data-backed business decisions quickly and accurately.",
  },
  {
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Cost Savings",
    body: "Reduce operational costs by eliminating redundant processes and leveraging cloud-based deployment options for enhanced resource efficiency.",
  },
  {
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    title: "Enhanced Customer Experience",
    body: "Improve service delivery and responsiveness with seamless data integration and intelligent process automation.",
  },
  {
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Future-Proof Technology",
    body: "Stay ahead of industry trends with a flexible, scalable ERP system that evolves with emerging innovations and business needs.",
  },
];

// ── Why Choose Sierra Digital — items 7–11 of second CardGrid (diff cards) ───

const WHY_SIERRA = [
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Proven Implementation Expertise",
    body: "Our experienced SAP consultants work closely with your team to assess business needs, develop a strategic roadmap, and ensure a smooth SAP S/4HANA implementation with minimal disruption.",
  },
  {
    icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    title: "Structured Methodology & Best Practices",
    body: "We leverage a structured approach to deployment, ensuring a risk-free transition while maintaining system integrity and operational continuity.",
  },
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "End-to-End Services",
    body: "From initial assessment and system migration to post-go-live support, Sierra Digital provides comprehensive SAP S/4HANA solutions tailored to your business goals.",
  },
  {
    icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z",
    title: "Industry-Specific Solutions",
    body: "We understand that every industry has unique challenges. Our customized solutions cater to sectors such as manufacturing, energy, finance, and logistics, ensuring alignment with industry demands.",
  },
  {
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
    title: "Continuous Innovation & Optimization",
    body: "Beyond implementation, we help clients continuously optimize SAP S/4HANA with the latest advancements, ensuring long-term efficiency and digital transformation success.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SAPS4HanaPage() {
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
              <Eyebrow tone="dark">SAP S/4HANA · Next-Generation ERP</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              SAP{" "}
              <em className="font-serif italic font-extralight opacity-90">
                S/4HANA.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              SAP S/4HANA is the next-generation ERP suite designed to streamline operations,
              enhance decision-making, and unlock real-time business insights. With its cloud-native
              capabilities, AI-driven automation, and advanced analytics, SAP S/4HANA empowers
              organizations to stay competitive in an increasingly digital world.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Contact us
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore SAP S/4HANA →
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
          <Stat value="Next-Gen"   label="Intelligent ERP for digital transformation"  data-delay="0" />
          <Stat value="Real-Time"  label="In-memory data processing &amp; analytics"   data-delay="100" />
          <Stat value="AI-Driven"  label="Embedded automation &amp; machine learning"   data-delay="200" />
          <Stat value="Any Cloud"  label="Cloud, on-premise, or hybrid deployment"      data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY SAP S/4HANA SPOTLIGHT — alt
          Heading outside · spotlight card with intro text
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Why SAP S/4HANA?"
          eyebrowTone="primary"
          title="Why does SAP S/4HANA offer to the enterprise?"
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
              Integrated Intelligent Platform
            </p>
            <p className="text-ink-2 leading-relaxed">
              In today&apos;s fast-evolving business landscape, enterprises require a modern,
              intelligent, and highly efficient ERP system to drive digital transformation. SAP
              S/4HANA offers an integrated, intelligent platform that revolutionizes enterprise
              operations. With real-time data processing, simplified system architecture, and
              built-in AI and machine learning, businesses can accelerate innovation and efficiency.
              Key benefits include:
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          ENTERPRISE OFFERINGS 01 — canvas (white)  ·  6 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Enterprise Capabilities"
          eyebrowTone="primary"
          title="What SAP S/4HANA Offers the Enterprise"
          subtitle="SAP S/4HANA offers an integrated, intelligent platform that revolutionizes enterprise operations. With real-time data processing, simplified system architecture, and built-in AI and machine learning, businesses can accelerate innovation and efficiency."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((o, i) => (
            <div
              key={o.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={o.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {o.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{o.body}</p>
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
          title="Business Benefits of SAP S/4HANA"
          subtitle="SAP S/4HANA delivers real-time insights, streamlined operations, and intelligent automation, enabling businesses to drive efficiency, innovation, and sustainable growth in a rapidly evolving digital landscape."
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
          subtitle="At Sierra Digital, we specialize in guiding enterprises through seamless SAP S/4HANA transformations. Our deep expertise, industry-focused solutions, and commitment to innovation ensure that businesses maximize the full potential of SAP S/4HANA. Partnering with Sierra Digital offers:"
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
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
        secondaryLabel="Explore SAP S/4HANA"
        secondaryHref="/contact/"
      />
    </>
  );
}
