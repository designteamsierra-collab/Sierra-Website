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
  title: "SAP Integration Suite Services | SAP BTP Cloud Integration Experts",
  description:
    "SAP Integration Suite services to connect SAP & non-SAP systems. Experts in SAP Cloud Integration, CPI, API Management, and BTP integrations.",
  alternates: { canonical: "https://sierradigitalinc.com/sap-integration-suite/" },
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

// ── Why SAP Integration Suite (5 teal cards) ─────────────────────────────────

const WHY_SUITE = [
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Connect SAP and Non-SAP Systems",
    body: "Easily integrate your SAP solutions with third-party applications, legacy systems, and cloud platforms, ensuring smooth data flow and communication between disparate systems.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Drive Operational Efficiency",
    body: "Automate and optimize key business processes by ensuring accurate and real-time data exchange across all systems.",
  },
  {
    icon: "M4 8h16M4 16h16M2 12h20",
    title: "Scalable Integration Solutions",
    body: "SAP Integration Suite's cloud-native architecture ensures flexibility, scalability, and agility to meet your growing business demands.",
  },
  {
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
    title: "Improve Time-to-Value",
    body: "Achieve faster project timelines and quicker ROI with pre-built integration content and connectors designed for industry-specific requirements.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Ensure Security and Compliance",
    body: "With enterprise-grade security features, SAP Integration Suite ensures that your data and transactions are safe, and compliant with regulations across the globe.",
  },
];

// ── Sierra Capabilities (7 teal cards) ───────────────────────────────────────

const CAPABILITIES = [
  {
    icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 1 0-13.4 2.1A4 4 0 0 0 3 15z",
    title: "Cloud Integration",
    body: "Connects cloud, on-premise, and hybrid systems with prebuilt integrations for fast, reliable data and process flows.",
  },
  {
    icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
    title: "API Management",
    body: "Manages the full API lifecycle-design, secure, publish, and monitor-to ensure governance and drive innovation.",
  },
  {
    icon: "M9 11V6l-2 2m2-2 2 2M15 13v5l2-2m-2 2-2-2M3 3h18M3 21h18",
    title: "Integration Assessment",
    body: "Applies SAP's advisory methodology to optimize integration strategies, automate processes, and streamline delivery.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Event Mesh",
    body: "Implements event-driven architectures for real-time, asynchronous communication across distributed systems.",
  },
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Open Connectors",
    body: "Simplifies connectivity with 170+ third-party cloud apps via standardized APIs, reducing complexity and speeding development.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Trading Partner Management",
    body: "Automates partner onboarding and data exchange for secure, scalable B2B collaboration.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Integration Advisor",
    body: "Uses AI-powered tools to accelerate message mapping and interface design, cutting manual effort and onboarding time. Together, these capabilities enable Sierra to deliver robust, efficient integration solutions that connect SAP and non-SAP systems, automate workflows, and support real-time business insights.",
  },
];

// ── Why Choose Sierra Digital (4 diff cards) ─────────────────────────────────

const WHY_SIERRA = [
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Proven Track Record",
    body: "We have successfully implemented SAP Integration Suite for numerous clients, helping them streamline operations, reduce costs, and gain real-time insights into their business.",
  },
  {
    icon: "M22 10v6M2 10l10-5 10 5-10 5z",
    title: "Certified Experts",
    body: "Our team is composed of SAP-certified consultants and developers who bring extensive experience in SAP integration projects.",
  },
  {
    icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z",
    title: "Tailored Solutions",
    body: "We understand that every business is unique. We design and implement custom integration solutions that meet the specific needs of your organization.",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z",
    title: "Commitment to Excellence",
    body: "Sierra Digital is committed to delivering high-quality solutions that create tangible business value. We ensure your systems are integrated seamlessly, securely, and efficiently.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SAPIntegrationSuitePage() {
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
              <Eyebrow tone="dark">SAP Integration Suite · BTP Cloud Integration</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              SAP{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Integration Suite.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              SAP Integration Suite offers a powerful, flexible, and scalable solution to integrate
              your entire landscape — both on-premises and in the cloud — in a seamless and secure
              manner.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Integration Suite →
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
          <Stat value="Unified"    label="Single platform for all integrations"         data-delay="0" />
          <Stat value="170+"       label="Third-party cloud connectors available"        data-delay="100" />
          <Stat value="SAP &amp; Non-SAP" label="Connect any system in your landscape"  data-delay="200" />
          <Stat value="End-to-End" label="API, event, B2B, and cloud integration"        data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY SAP INTEGRATION SUITE SPOTLIGHT — alt
          Heading outside · spotlight card with intro text
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Why SAP Integration Suite?"
          eyebrowTone="primary"
          title="Why SAP Integration Suite?"
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
              Unified Integration Platform
            </p>
            <p className="text-ink-2 leading-relaxed">
              In today&apos;s fast-paced business environment, enterprises need to connect their
              systems, applications, and data to ensure efficient operations. SAP Integration Suite
              provides a unified platform that allows you to connect a wide array of applications,
              systems, and business processes, both within and outside the SAP ecosystem. Its
              advanced capabilities help businesses streamline workflows, reduce operational costs,
              and enhance collaboration across departments and external partners. With SAP
              Integration Suite, you can:
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY SAP INTEGRATION SUITE 01 — canvas (white)  ·  5 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Key Capabilities"
          eyebrowTone="primary"
          title="What SAP Integration Suite Delivers"
          subtitle="SAP Integration Suite provides a unified platform that allows you to connect a wide array of applications, systems, and business processes, both within and outside the SAP ecosystem."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_SUITE.map((item, i) => (
            <div
              key={item.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={item.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          SIERRA CAPABILITIES 02 — alt  ·  7 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Sierra's Expertise"
          eyebrowTone="primary"
          title="Sierra's Expertise in SAP Integration Suite Capabilities"
          subtitle="Sierra offers strong expertise across all key SAP Integration Suite capabilities, enabling seamless and scalable enterprise integration:"
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={cap.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {cap.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{cap.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY CHOOSE SIERRA DIGITAL 03 — canvas (white)
          4 diff cards + closing spotlight card
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {WHY_SIERRA.map((w, i) => (
            <div
              key={w.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 80)}
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

        {/* Closing spotlight — Block "Explore How SAP Integration Suite can Elevate your Business" */}
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
              Explore How SAP Integration Suite can Elevate your Business
            </p>
            <p className="text-ink-2 leading-relaxed">
              Let Sierra Digital be your trusted partner in your digital transformation journey.
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
        secondaryLabel="Explore SAP Integration Suite"
        secondaryHref="/contact/"
      />
    </>
  );
}
