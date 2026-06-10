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
  title: "Line of Business Enhancements on SAP BTP",
  description:
    "Build upgrade-safe SAP BTP line of business enhancements for finance, HR, and operations. Clean Core extensions, AI automation, and custom apps.",
  alternates: { canonical: "https://sierradigitalinc.com/line-of-business-enhancements-on-sap-btp/" },
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

// ── Features (6 teal cards) ───────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Modular App Extensions",
    body: "Create tailored enhancements for SAP S/4HANA or SAP ECC without modifying the core, using side-by-side extensibility.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Pre-Built Business Services",
    body: "Accelerate innovation with pre-configured, reusable components for key processes like invoice approvals, expense tracking, or talent management.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Low-Code/No-Code Capabilities",
    body: "Empower business users and IT teams to collaborate and develop solutions faster using SAP Build and other LCNC tools.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Integration with SAP & Third-Party Systems",
    body: "Connect your entire ecosystem with robust APIs and event-driven architecture for seamless data flow and automation.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "AI & Automation Enablement",
    body: "Incorporate intelligent technologies like machine learning, predictive analytics, and RPA to boost process efficiency.",
  },
  {
    icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 1 0-13.4 2.1A4 4 0 0 0 3 15z",
    title: "Cloud-Native Deployment",
    body: "Deliver scalable, secure solutions on SAP BTP's multi-cloud infrastructure for enhanced flexibility and performance.",
  },
];

// ── Business Benefits (5 terracotta cards) ────────────────────────────────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Faster Time-to-Value",
    body: "Rapidly develop and deploy apps that solve specific business challenges without waiting for major upgrades.",
  },
  {
    icon: "M5 12h14M12 5l7 7-7 7",
    title: "Business Agility",
    body: "Adapt processes quickly to changing market needs, regulatory demands, or internal growth.",
  },
  {
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Cost Efficiency",
    body: "Extend existing SAP investments with scalable enhancements, reducing the need for expensive custom development in the core.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    title: "Improved User Experience",
    body: "Deliver intuitive, mobile-ready applications that improve employee engagement and productivity.",
  },
  {
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Sustainable Innovation",
    body: "Build future-proof solutions that grow with your organization and integrate seamlessly into SAP's evolving cloud ecosystem.",
  },
];

// ── Why Choose Sierra Digital (5 diff cards) ─────────────────────────────────

const WHY_SIERRA = [
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2",
    title: "Innovation Assessments & Road Mapping",
    body: "Evaluate current systems and identify key areas where BTP can unlock measurable value.",
  },
  {
    icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
    title: "End-to-End App Development",
    body: "Design, build, and deploy SAP BTP-based enhancements tailored to specific lines of business.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "SAP Extension Suite Expertise",
    body: "Utilize SAP Build Apps, Process Automation, and SAP Business Application Studio to accelerate delivery.",
  },
  {
    icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    title: "Integration Services",
    body: "Enable real-time connectivity between SAP and third-party systems using SAP Integration Suite and APIs.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Managed Innovation Support",
    body: "Provide continuous maintenance, optimization, and evolution of deployed enhancements as business needs evolve.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LoBEnhancementsPage() {
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
              <Eyebrow tone="dark">SAP BTP · Line of Business Enhancements</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Line of Business Enhancements{" "}
              <em className="font-serif italic font-extralight opacity-90">
                on SAP BTP.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Sierra Digital leverages SAP BTP to develop Line of Business (LoB)
              Enhancements—tailored solutions that elevate performance across finance, HR,
              procurement, operations, and more.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore BTP Enhancements →
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
          <Stat value="SAP BTP"     label="Flexible multi-cloud extension platform"     data-delay="0" />
          <Stat value="LCNC"        label="Low-code / no-code development tools"        data-delay="100" />
          <Stat value="Clean Core"  label="Side-by-side extensibility, no core mods"    data-delay="200" />
          <Stat value="Finance–Ops" label="Finance, HR, procurement &amp; operations"   data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          SPOTLIGHT — alt
          Heading outside · spotlight card with Lead + intro text
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Features"
          eyebrowTone="primary"
          title="SAP BTP Line of Business Enhancements"
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
              Intelligent Extensions on SAP BTP
            </p>
            <p className="text-ink-2 leading-relaxed">
              SAP Business Technology Platform (SAP BTP) provides a flexible foundation for
              building, extending, and integrating SAP applications with modern, intelligent
              capabilities. SAP BTP enables the rapid development of custom applications,
              extensions, and services to meet specific business needs.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES 01 — canvas (white)  ·  6 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Platform Features"
          eyebrowTone="primary"
          title="What SAP BTP Enables"
          subtitle="SAP BTP enables the rapid development of custom applications, extensions, and services to meet specific business needs."
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
          title="Business Benefits of SAP BTP Enhancements"
          subtitle="Unlock new value from your SAP landscape through strategic, business-aligned enhancements."
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
          WHY CHOOSE SIERRA DIGITAL 03 — canvas (white)
          5 diff cards + closing spotlight
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
          eyebrow="Why Choose Sierra Digital?"
          eyebrowTone="primary"
          title="Why Choose Sierra Digital for SAP BTP Enhancements?"
          subtitle="Sierra Digital is a leading SAP partner with deep expertise in BTP-driven transformation across industries. Our proven approach balances speed, precision, and scalability to help businesses achieve real outcomes."
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

        {/* Closing spotlight — Block "Transform Business Processes with SAP BTP" */}
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
              Transform Business Processes with SAP BTP
            </p>
            <p className="text-ink-2 leading-relaxed">
              With Sierra Digital&apos;s Line of Business Enhancements on SAP BTP, your
              organization gains the ability to innovate faster, operate smarter, and lead with
              confidence. Whether you&apos;re modernizing a process, automating a task, or
              launching an entirely new application, we&apos;re here to help you make it
              happen—securely, efficiently, and at scale.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Accelerate business innovation"
        title={
          <>
            Ready to Accelerate{" "}
            <em className="font-serif italic">Business Innovation?</em>
          </>
        }
        subtitle="Contact Sierra Digital today to discover how our SAP BTP solutions can transform your business."
        primaryLabel="Get started"
        primaryHref="/contact/"
        secondaryLabel="Explore BTP Enhancements"
        secondaryHref="/contact/"
      />
    </>
  );
}
