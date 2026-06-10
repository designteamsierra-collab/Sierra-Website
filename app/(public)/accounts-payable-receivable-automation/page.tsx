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
  title: "SAP AP AR Automation for SAP S/4HANA | Sierra Digital",
  description:
    "Automate SAP S/4HANA AP & AR with AI-powered matching, clearing, and reconciliation. APRA delivers faster invoice processing, improved accuracy, and multi-company automation.",
  alternates: { canonical: "https://sierradigitalinc.com/accounts-payable-receivable-automation/" },
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

// ── Features (7 items) ────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Automated Clearing of Open Items",
    body: "APRA Application automates the matching and clearing of bank payment files with SAP data by identifying open items using key fields like amount, currency, and assignment—streamlining reconciliation, reducing manual effort, and ensuring accuracy through end-user confirmation before final posting.",
  },
  {
    icon: "M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
    title: "Custom Rule Creation",
    body: "The tool allows users to define custom selection criteria and rules, enabling flexible filtering and matching of open item documents with the bank file. This feature enhances the user's ability to handle various scenarios and business rules more efficiently.",
  },
  {
    icon: "M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z",
    title: "Adaptive Receivables Matching",
    body: "Enable automatic posting and clearing by scheduling receivables processing as a one-time or recurring job, with the flexibility to match open items and customer accounts—streamlining operations and enhancing efficiency.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Smart Payment Advice Extraction",
    body: "Intelligently classify document regions, extract key information, and automate payment-to-invoice matching for faster, more accurate receivables processing.",
  },
  {
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z",
    title: "Centralized Reporting",
    body: "The tool provides a report showing both matched and unmatched records, giving the user a clear overview of the status of the clearing process. This enhances transparency and helps track the progress of the clearing process in real time.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "AI-Powered Automation",
    body: "Leverage AI service to continuously learn from accountant behavior, automating and enhancing the accuracy of repetitive clearing processes while empowering accountants to focus on complex cases that require manual attention.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Enhanced Flexibility Across Companies",
    body: "The tool is designed to handle clearing across multiple company codes, allowing businesses to clear invoices from different companies without manual intervention, addressing one of the key pain points of the current process.",
  },
];

// ── Benefits (8 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Increased Efficiency",
    body: "Automating the matching and clearing process saves time and reduces the manual effort required to clear open items across multiple company codes and GL accounts, accelerating the accounts receivable process.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Improved Accuracy",
    body: "The custom tool eliminates the need for manual data entry, reducing human error and ensuring accurate matching of bank payment records to open item documents in SAP.",
  },
  {
    icon: "M12 8v4l3 3M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z",
    title: "Faster Invoice Clearing",
    body: "By automating the matching and clearing process, the tool speeds up the clearing of open items, ensuring that payments are processed and reconciled faster, improving cash flow management.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Scalability",
    body: "The tool allows businesses to handle a larger volume of open items with ease, even when dealing with multiple company codes or customers, without the need for additional manual resources.",
  },
  {
    icon: "M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
    title: "Customizable and Flexible",
    body: "The ability to create custom rules and filters provides businesses with the flexibility to adapt the tool to their specific needs and business logic, ensuring that the process can be tailored to meet various scenarios.",
  },
  {
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    d2: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    title: "User Control and Transparency",
    body: "The end-user confirmation step before posting to SAP ensures that users can validate the matched items, adding an extra layer of control and reducing the risk of errors. The centralized reporting feature provides real-time visibility into the status of the clearing process.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    title: "Reduced Manual Effort",
    body: "By automating key aspects of the process, the tool significantly reduces the manual effort required for invoice clearing, freeing up staff to focus on more value-added tasks and reducing overall operational costs.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Improved Auditability",
    body: "The tool's centralized report allows for better tracking and auditing of cleared items, providing a transparent and easily accessible log of all actions taken, which is beneficial for compliance and internal audits.",
  },
];

// ── Why Sierra differentiators (2×2) ─────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI-Powered Matching Engine",
    body: "Continuously learns from accountant behavior to automate and enhance the accuracy of repetitive clearing processes — freeing teams for high-value work.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "SAP S/4HANA Native Integration",
    body: "Seamlessly connects with SAP S/4HANA on SAP Business Technology Platform for reliable, end-to-end AP and AR automation without disruptive workarounds.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Multi-Company Support",
    body: "Handles clearing across multiple company codes, removing one of the key pain points of cross-company reconciliation — at scale, without manual intervention.",
  },
  {
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    d2: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    title: "Real-Time Visibility & Control",
    body: "End-user confirmation and centralized reporting provide full transparency and auditability of every cleared item — giving compliance and audit teams what they need.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function APRAPage() {
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
              <Eyebrow tone="dark">SAP S/4HANA · Accounts Payable &amp; Receivable</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Accounts Payable &amp; Receivable Automation —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                intelligent, effortless clearing.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              Streamline the accounts receivable and payable with intelligent automation. APRA
              Application seamlessly connects SAP S/4HANA with a powerful matching engine on SAP
              Business Technology Platform, automatically clearing payments and recommending matches
              to accelerate cash flow and reduce manual effort.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore APRA →
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
          <Stat value="200+"  label="SAP clients served"                  data-delay="0" />
          <Stat value="20+"   label="Years of SAP expertise"              data-delay="100" />
          <Stat value="AI"    label="Powered matching engine"             data-delay="200" />
          <Stat value="Multi" label="Company code clearing support"       data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — alt  ·  7 teal gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Powerful features that automate your AP and AR end-to-end."
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
          BENEFITS — canvas (white)  ·  8 terracotta gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Measurable value delivered to your finance operations."
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
          Split: differentiators + success story spotlight
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="Why Sierra Digital"
            eyebrowTone="primary"
            title={<>Automate AP &amp; AR with <em className="font-serif italic">proven expertise.</em></>}
            subtitle="Sierra Digital brings deep SAP S/4HANA expertise and a purpose-built matching engine that integrates natively on SAP BTP — delivering intelligent AP and AR automation that accelerates cash flow, reduces manual effort, and scales with your business."
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
          SUCCESS STORY — canvas (white)  ·  heading outside, spotlight card below
          Block eyebrow="Success Stories"
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          eyebrow="Success Stories"
          eyebrowTone="primary"
          title="Success Stories"
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
              Media &amp; Streaming
            </p>
            <h2 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
              This Client Automated Revenue Processing and Reconciled Data From Disparate Sources
            </h2>
            <p className="text-ink-2 leading-relaxed">
              This client has grown to be one of the world&apos;s leading social forums and an
              important streaming service. With global reach and the devoted attention of its eager
              fans, this client sees more than 30 million users each day. They field more than 9
              million content creators and provide content in more than 30 languages.
            </p>
            <Button href="/success-stories/" variant="secondary" size="md" className="self-start">
              Read More
            </Button>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation. Don't wait – future-proof your business now!"
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Explore APRA"
        secondaryHref="/contact/"
      />
    </>
  );
}
