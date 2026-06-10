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
  title: "Business Partner Automation for SAP S/4HANA | Sierra Digital",
  description:
    "Streamline master data with SAP Business Partner Automation. Centralize, govern, and automate customer and vendor data in SAP S/4HANA to improve data quality, compliance, and operational efficiency.",
  alternates: { canonical: "https://sierradigitalinc.com/business-partner-automation/" },
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

// ── Features (8 items) ────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Centralized Master Data Management",
    body: "One Centralized application for Create, maintain, and govern master data (e.g., customer, vendor data) centrally across the enterprise.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Data Governance and Workflow",
    body: "Built-in rule-based workflows and approval processes ensure data quality and compliance with internal policies.",
  },
  {
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
    title: "Accurate Address Verification with USPS Integration",
    body: "Integrating USPS validation with BPA ensures accurate, standardized, and deliverable addresses, improving data quality and reducing delivery errors and return mail.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Data Quality Management",
    body: "Features for data validation, standardization, duplicate detection, and enrichment to maintain high-quality data.",
  },
  {
    icon: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM8 12h8M12 8v8",
    title: "SAP Fiori User Experience",
    body: "Modern, role-based, and intuitive interface powered by SAP Fiori for streamlined user interaction.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Analytics and Reporting",
    body: "Monitor data quality and governance processes using embedded analytics and dashboards.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Machine Learning & AI Capabilities",
    body: "Intelligent features for auto-suggestions, duplicate detection, and anomaly handling to increase efficiency.",
  },
  {
    icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 0 0-13.4-2 4 4 0 0 0-1.4 7.7",
    title: "Cloud and On-Premise Deployment",
    body: "Available as part of SAP S/4HANA (on-premise or cloud) or Cloud edition for flexible deployment.",
  },
];

// ── Benefits (7 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Improved Data Quality",
    body: "Ensures accurate, consistent, and reliable master data across systems, reducing errors and rework.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Faster Time-to-Value",
    body: "Speeds up master data creation and updates with guided processes and automation.",
  },
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Reduced Operational Costs",
    body: "Lowers manual efforts and process inefficiencies with centralized governance and automation.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2",
    title: "Enhanced Compliance and Risk Management",
    body: "Enforces data standards, audit trails, and approvals to ensure regulatory compliance and data integrity.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Better Decision-Making",
    body: "High-quality, consistent data enables more accurate analytics and reporting for strategic business decisions.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Scalability and Flexibility",
    body: "Supports business growth and evolving requirements with customizable data models and workflows.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Integration with SAP Landscape",
    body: "Seamlessly fits into SAP S/4HANA and other SAP solutions, ensuring end-to-end process consistency. https://youtu.be/2q-sRXExp7k",
  },
];

// ── Why Sierra differentiators (2×2) ─────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "SAP S/4HANA Native Integration",
    body: "BPA seamlessly fits into the full SAP S/4HANA landscape, ensuring end-to-end process consistency across all systems and workflows.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI & ML-Powered Governance",
    body: "Auto-suggestions, duplicate detection, and anomaly handling reduce governance overhead and drive continuous data quality improvements.",
  },
  {
    icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 0 0-13.4-2 4 4 0 0 0-1.4 7.7",
    title: "Flexible Cloud or On-Premise Deployment",
    body: "Available as part of SAP S/4HANA on-premise or as a Cloud edition — meeting your business exactly where it is and where it's going.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Built-In Compliance & Audit Trails",
    body: "Rule-based workflows, audit trails, and approval processes enforce regulatory compliance and data integrity across every master data change.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BusinessPartnerAutomationPage() {
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
              <Eyebrow tone="dark">SAP S/4HANA · Master Data Governance</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Business Partner Automation —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                master data, mastered.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              Business Partner Automation is an one-stop solution designed to centrally create,
              manage, and govern master data across the organization. Integrated seamlessly with SAP
              S/4HANA ensures consistency, accuracy, and compliance of critical business data—such
              as customer, vendor information—across systems and processes. With built-in workflows,
              business rules, and data validation capabilities, BPA enables organizations to
              maintain high-quality data, reduce duplication, and support data-driven
              decision-making. Whether deployed on-premise or in the cloud, BPA helps streamline
              master data processes and drive operational efficiency and compliance at scale.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore BPA →
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
          <Stat value="200+"    label="SAP clients served"               data-delay="0" />
          <Stat value="20+"     label="Years of SAP expertise"           data-delay="100" />
          <Stat value="1-Stop"  label="Master data solution"             data-delay="200" />
          <Stat value="AI/ML"   label="Powered duplicate detection"      data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — alt  ·  8 teal gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Everything you need to centralize and govern master data."
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
                  <Icon d={f.icon} />
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
          BENEFITS — canvas (white)  ·  7 terracotta gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Measurable value across data quality, compliance, and efficiency."
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
          WHY SIERRA — alt
          Split: heading + subtitle + 2×2 differentiator cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="Why Sierra Digital"
            eyebrowTone="primary"
            title={<>Govern your master data with <em className="font-serif italic">confidence.</em></>}
            subtitle="Sierra Digital brings deep SAP S/4HANA expertise and a purpose-built Business Partner Automation solution that centralizes governance, enforces compliance, and leverages AI/ML — all within your existing SAP landscape. Whether on-premise or cloud, we ensure your master data foundation is accurate, scalable, and future-ready."
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
          CLOSING CTA
          Block "Connect Businesses with Cutting-Edge Technologies for Innovation"
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Connect Businesses with Cutting-Edge <em className="font-serif italic">Technologies for Innovation.</em></>}
        subtitle="Don't wait – future-proof your business now!"
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Explore BPA"
        secondaryHref="/contact/"
      />
    </>
  );
}
