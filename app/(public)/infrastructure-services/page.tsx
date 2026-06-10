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
  title: "Infrastructure Services | Cloud, Managed & Enterprise IT Solutions",
  description:
    "Enterprise infrastructure services covering cloud infrastructure, managed IT services, infrastructure security, and SAP S/4HANA migration for global enterprises.",
  alternates: { canonical: "https://sierradigitalinc.com/infrastructure-services/" },
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

// ── Cloud Infrastructure Services (6 FeatureRows → teal cards) ───────────────

const CLOUD_SERVICES = [
  {
    icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 1 0-13.4 2.1A4 4 0 0 0 3 15z",
    title: "Cloud Consulting",
    body: "Sierra Digital specialists analyze your business requirements to design tailored infrastructure and workload plans that ensure cost-effective and high-performing cloud applications.",
  },
  {
    icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
    title: "Cloud Solution Development",
    body: "With extensive experience in delivering cloud solutions, Sierra Digital architects identify the desired outcomes for your system and apply their skills to design, build, and deploy customized solutions.",
  },
  {
    icon: "M8 7h12m0 0-4-4m4 4-4 4M16 17H4m0 0 4 4m-4-4 4-4",
    title: "Cloud Migration Services",
    body: "Sierra Digital facilitates seamless migration from legacy systems to modern cloud infrastructures. Their solutions enhance computing capabilities, networking speed, and storage space, allowing businesses to focus on strategic goals.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Cloud Integration Services",
    body: "Beyond creating robust cloud infrastructures, Sierra Digital ensures successful integration with proprietary solutions, other cloud services, or third-party providers as required.",
  },
  {
    icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
    title: "Cloud Infrastructure Management",
    body: "Sierra Digital develops balanced architectures for cloud solutions and offers DevOps services to optimize orchestration, maintenance, and application performance.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Cloud Monitoring and Maintenance",
    body: "Sierra Digital provides 24/7 monitoring and analytics to ensure smooth functionality. They address performance or functionality issues promptly to maintain reliable cloud operations.",
  },
];

// ── Infrastructure Security Services (4 teal cards) ───────────────────────────

const SECURITY = [
  {
    icon: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
    title: "Network Visibility",
    body: "Sierra Digital enhances network visibility during planning, deployment, configuration, and integration of interconnected infrastructures. This enables security teams to detect and respond to threats swiftly.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Host and Endpoint Security",
    body: "Their experts design and manage host/OS security controls while deploying file integrity monitoring solutions to safeguard applications and ensure smooth business operations.",
  },
  {
    icon: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01",
    title: "Malware Control and Prevention",
    body: "Sierra Digital provides advanced threat protection controls to defend against sophisticated malware targeting sensitive data.",
  },
  {
    icon: "M5 12h14M12 5l7 7-7 7",
    title: "MIGRATION TO SAP S/4HANA",
    body: "For clients using SAP ERP 6.0, which requires a lot of resources to maintain, Sierra digital offers its expertise in the migration to SAP S4/HANA. Our professionals in SAP will help you to gradually rebuild the infrastructure, connect your system with new solutions for efficient corporate tasks management and update business processes — all available in the convenience of a cloud. Unlock the advantage of increased system reliability and scalability with Sierra Digital and enjoy new business opportunities!",
  },
];

// ── Why Choose Sierra Digital (5 diff cards) ─────────────────────────────────

const WHY_SIERRA = [
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2",
    title: "Innovation Strategy & Infrastructure Road Mapping",
    body: "Assess your current environment and define a future-ready infrastructure strategy aligned with your business goals.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Custom Cloud Solution Development",
    body: "Design, build, and deploy robust cloud-native applications that maximize performance and reduce operational overhead.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "SAP S/4HANA Migration Expertise",
    body: "Modernize legacy SAP systems with minimal disruption—unlocking better scalability, improved efficiency, and simplified operations.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Secure Cloud & Network Architecture",
    body: "Implement enterprise-grade security from host to endpoint, backed by advanced threat prevention and real-time monitoring.",
  },
  {
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
    title: "24/7 Cloud Operations & Support",
    body: "Ensure high availability and system reliability with continuous infrastructure monitoring, and proactive maintenance.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function InfrastructureServicesPage() {
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
              <Eyebrow tone="dark">Infrastructure Services · Cloud &amp; Enterprise IT</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Infrastructure{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Services.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Sierra Digital brings together a team of experts to ensure the seamless development,
              management, and maintenance of your infrastructure — cloud services, security, and
              SAP S/4HANA migration included.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Ask Our Experts
              </Button>
              <Button href="/contact" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Infrastructure Services →
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
          <Stat value="24/7"      label="Cloud monitoring &amp; maintenance"         data-delay="0" />
          <Stat value="6 Pillars" label="End-to-end cloud infrastructure services"   data-delay="100" />
          <Stat value="Secure"    label="Host, network &amp; endpoint protection"    data-delay="200" />
          <Stat value="SAP Ready" label="S/4HANA migration &amp; cloud transition"   data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOUD INFRASTRUCTURE SERVICES — alt
          Heading outside · spotlight card with Lead · 6 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Cloud Infrastructure Services by Sierra Digital"
          eyebrowTone="primary"
          title="Cloud Infrastructure Services by Sierra Digital"
          subtitle="In today's digital era, infrastructure serves as the cornerstone of modern business success. Sierra Digital provides comprehensive support tailored to meet your needs — whether your focus is on cloud services, infrastructure security, or transitioning to SAP S/4HANA."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLOUD_SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={s.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          INFRASTRUCTURE SECURITY 01 — canvas (white)  ·  4 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Infrastructure Security Services"
          eyebrowTone="primary"
          title="Infrastructure Security Services"
          subtitle="Recognizing the vulnerabilities of open internet-connected infrastructures, Sierra Digital offers robust security measures to support digital transformation securely."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SECURITY.map((s, i) => (
            <div
              key={s.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 80)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={s.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY CHOOSE SIERRA DIGITAL 02 — alt  ·  5 diff cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
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
        eyebrow="Transform your infrastructure"
        title={
          <>
            Ready to Transform Your{" "}
            <em className="font-serif italic">Infrastructure?</em>
          </>
        }
        subtitle="Partner with Sierra Digital to future-proof your cloud environment, secure your operations, and accelerate your migration to SAP S/4HANA."
        primaryLabel="Ask Our Experts"
        primaryHref="/contact"
        secondaryLabel="Explore Infrastructure Services"
        secondaryHref="/contact"
      />
    </>
  );
}
