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
  title: "SAP Integration Services on SAP BTP | Enterprise Integration | Sierra Digital",
  description:
    "Enhance enterprise connectivity with Sierra Digital's SAP Integration Services on SAP BTP. Enable real-time, scalable integration across SAP and non-SAP systems using SAP Integration Suite and cloud-native business application integration.",
  alternates: { canonical: "https://sierradigitalinc.com/integration/" },
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
    title: "Pre-built Integrations and Adapters",
    body: "SAP BTP provides a wide range of pre-configured integration packages and adapters via the SAP Integration Suite. These include connectors for SAP and non-SAP systems, enabling faster and more reliable integration development.",
  },
  {
    icon: "M4 6h16M4 10h16M4 14h10",
    title: "Support for Multiple Integration Pattern",
    body: "The platform supports various integration patterns, such as application-to-application (A2A), business-to-business (B2B), and business-to-government (B2G). This versatility ensures seamless connectivity across diverse ecosystems.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Event-Driven Architecture",
    body: "With event-driven integration capabilities, SAP BTP allows real-time data synchronization and processing using tools like SAP Event Mesh, improving responsiveness and agility in business processes.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Open Standards and Interoperability",
    body: "SAP BTP supports open integration standards like OData, REST, SOAP, and GraphQL, ensuring interoperability with third-party systems and custom applications.",
  },
  {
    icon: "M2 3h20v14H2zM8 21h8M12 17v4",
    title: "Centralized Monitoring and Management",
    body: "The platform provides centralized tools for monitoring and managing integrations through the Integration Cockpit. Users can track message flows, resolve errors, and ensure operational continuity with ease.",
  },
];

// ── Benefits ──────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M12 8v4l3 3M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z",
    title: "Accelerated Time-to-Value",
    body: "With pre-built integration packages, connectors, and adapters for SAP and third-party applications, businesses can reduce development time and deploy integrations faster. This allows organizations to quickly unlock the value of connected systems.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Enhanced Business Agility",
    body: "SAP BTP enables dynamic, event-driven integrations and supports hybrid environments, allowing businesses to adapt swiftly to changing market demands and regulatory requirements.",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z",
    title: "Improved Data Consistency and Accuracy",
    body: "Seamless integrations ensure real-time data synchronization across applications, reducing data silos and errors. This leads to more reliable insights for decision-making and streamlined operations.",
  },
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Cost Efficiency",
    body: "By leveraging reusable integration content, open standards, and cloud-native tools, organizations can minimize development costs, optimize resource utilization, and reduce the need for extensive custom coding.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Scalability and Future-Readiness",
    body: "Built on a flexible cloud architecture, SAP BTP supports scalable integrations and provides the foundation to integrate emerging technologies, such as IoT, AI, and machine learning, ensuring long-term adaptability.",
  },
];

// ── Why Sierra differentiators ────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
    title: "SAP Integration Suite Experts",
    body: "Certified expertise in SAP BTP integration services and the full SAP Integration Suite — from Cloud Integration and API Management to Event Mesh and Open Connectors.",
  },
  {
    icon: "M18 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    d2: "m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98",
    title: "Pre-built Integration Accelerators",
    body: "Leverage SAP's extensive library of pre-configured integration packages and Sierra's own reusable connectors to accelerate delivery and reduce custom development effort.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Clean Core Compliant",
    body: "All integrations are built on SAP BTP as side-by-side extensions — never modifying the SAP core, ensuring system stability and continuous upgrade readiness.",
  },
  {
    icon: "M2 3h20v14H2zM8 21h8M12 17v4",
    title: "360° Monitoring & Support",
    body: "Centralized Integration Cockpit management, proactive error resolution, and end-to-end hypercare support keep your integrations running reliably long after go-live.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function IntegrationPage() {
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
              <Eyebrow tone="dark">SAP BTP · SAP Integration Suite</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Enterprise integration —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                built on SAP BTP.
              </em>
            </h1>

            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "40rem" }}>
              In the era of AI and cloud technology, integration is everything. To eliminate silos,
              reduce manual processes, drive efficiency, and provide your enterprise with the
              contextualized data that it needs to fuel new initiatives in AI, Sierra Digital
              provides integration through applications built on the SAP Business Technology Platform.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Request a Consultation
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
          <Stat value="200+" label="SAP clients served"           data-delay="0" />
          <Stat value="20+"  label="Years of SAP expertise"       data-delay="100" />
          <Stat value="500+" label="Integrations delivered"       data-delay="200" />
          <Stat value="300M" label="Users served via BTP apps"    data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — canvas-2 (alt)
          Teal gradient cards — platform capabilities
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Enterprise connectivity, rapidly built on SAP BTP."
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
          BENEFITS — canvas (white)
          Terracotta gradient cards — real business outcomes
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Real business value from connected systems."
          subtitle="Through apps built on SAP BTP, Sierra Digital promotes integration and drives real business value with benefits like:"
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
          SUCCESS STORY — canvas-warm
          Single featured client story card
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="warm">
        <SectionHeading
          index="03"
          eyebrow="Success Stories"
          eyebrowTone="primary"
          title="Integration at enterprise scale."
          subtitle="The SAP Business Technology Platform is the future of customization. With app extensions on SAP BTP, the enterprise can still support their unique business processes while maintaining accepted best practices of digital hygiene."
          align="center"
          size="lg"
        />

        <div className="mx-auto max-w-3xl">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />

            <span className="self-start rounded-full bg-primary-200 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-primary-800">
              Media &amp; Streaming
            </span>

            <h3 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
              Learn How This Customer Services More Than 300 Million Users per Year With Integrations Built by Sierra Digital on SAP BTP
            </h3>

            <p className="text-ink-2 leading-relaxed">
              This client has grown to be one of the world&apos;s leading social forums and an
              important streaming service. With global reach and the devoted attention of its eager
              fans, this client sees more than 30 million users each day. They field more than
              9 million content creators and provide content in more than 30 languages.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY SIERRA — canvas-2 (alt)
          Split: heading left, 2×2 differentiator cards right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="04"
            eyebrow="How We Help"
            eyebrowTone="primary"
            title={<>Break down silos — <em className="font-serif italic">connect everything.</em></>}
            subtitle="In a world of cloud technology, to maximize efficiency and avoid system disruptions, Clean Core methodologies are an important business practice. Many enterprises are looking to retire customizations — but with app extensions on SAP BTP, they can still support unique business processes while maintaining digital hygiene."
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
          PROCESS STEPS — canvas (white)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="05"
          eyebrow="Our process"
          eyebrowTone="primary"
          title="From connectivity gaps to seamless data flow."
          subtitle="Sierra Digital's structured integration methodology eliminates complexity and keeps every project on time, on budget, and fully aligned with SAP best practices."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            { title: "Integration Assessment", body: "Evaluate your existing SAP landscape, third-party systems, and manual data flows. Identify connectivity gaps, redundant processes, and high-priority integration opportunities." },
            { title: "Solution Architecture", body: "Design the optimal integration architecture using SAP Integration Suite patterns — selecting the right mix of Cloud Integration, API Management, Event Mesh, and Open Connectors for your use case." },
            { title: "Development & Configuration", body: "Build integrations using SAP's pre-built adapters and iFlow templates alongside custom logic where needed. All development follows open standards (OData, REST, SOAP, GraphQL) for long-term maintainability." },
            { title: "Testing & Validation", body: "Validate end-to-end data flows, error handling, and performance across all integration touchpoints through rigorous functional and load testing before go-live." },
            { title: "Deployment & Monitoring", body: "Go live with full Integration Cockpit monitoring in place. Track message flows, resolve errors proactively, and continuously optimize integrations as your business evolves." },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to Break Down Silos and <em className="font-serif italic">Drive Efficiency?</em></>}
        subtitle="To Explore Our SAP BTP Integration Services — speak with a Sierra Digital integration expert today."
        primaryLabel="Request a Consultation"
        primaryHref="/contact/"
        secondaryLabel="Explore Integration Suite"
        secondaryHref="/contact/"
      />
    </>
  );
}
