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
  title: "SAP Business Data Cloud | Data Management & AI Analytics | Sierra Digital",
  description:
    "Unify and analyze enterprise data with SAP Business Data Cloud. Sierra Digital delivers secure SAP Data Management and Data Integration services.",
  alternates: { canonical: "https://sierradigitalinc.com/sap-business-data-cloud/" },
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
    icon: "M3 3v18h18",
    d2: "m19 9-5 5-4-4-3 3",
    title: "Optimized Data Processing Performance",
    body: "Harness scalable cloud infrastructure to process large datasets efficiently, supporting high-performance analytics and reporting.",
  },
  {
    icon: "M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4zM9 21v-3M15 21v-3",
    title: "AI-Powered Insights and Automation",
    body: "Leverage built-in AI and machine learning models to uncover predictive insights and automate data-driven decision-making.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Real-Time Data Access and Governance",
    body: "Enable secure, real-time data access with enterprise-grade governance, ensuring compliance and consistency across business units.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Intelligent Data Workflows",
    body: "Streamline data transformations and automate workflows, reducing manual effort and improving operational efficiency.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Unified Data Connectivity",
    body: "Seamlessly integrate data from SAP and non-SAP sources, ensuring a single source of truth across the enterprise.",
  },
];

// ── Benefits (5 items — "How We Help" handled separately as a spotlight) ───────

const BENEFITS = [
  {
    icon: "M12 8v4l3 3M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z",
    title: "Accelerated Time-to-Insight",
    body: "Empower users with real-time access to trusted data, reducing time spent on manual data preparation and reconciliation.",
  },
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Cost Optimization and Scalability",
    body: "Lower data management costs by eliminating redundant infrastructure and enabling seamless scalability in the cloud.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Enhanced Decision-Making",
    body: "Provide executives and teams with AI-powered insights that drive more accurate forecasting, planning, and strategic execution.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636 -.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Data-Driven Innovation",
    body: "Enable a Clean Core approach to SAP transformation by integrating best-in-class data solutions without excessive custom development.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Stronger Security and Compliance",
    body: "Ensure enterprise data meets regulatory requirements with robust governance, encryption, and role-based access controls.",
  },
];

// ── Service offering cards (from Block content) ───────────────────────────────

const OFFERINGS = [
  {
    tag: "Solutions Catalog",
    tagClass: "bg-primary-200 text-primary-800",
    borderClass: "border-primary-200 hover:border-primary-400",
    accentBar: "bg-primary-500",
    gradient: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
    shadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
    icon: "M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10",
    body: "Innovative solution that addresses some of the biggest challenges faced by SAP customers, delivered as a SAP Business Data Cloud custom data product.",
  },
  {
    tag: "Assessment Services",
    tagClass: "bg-accent-200 text-accent-800",
    borderClass: "border-accent-200 hover:border-accent-400",
    accentBar: "bg-accent-500",
    gradient: "linear-gradient(145deg, #fff5ed 0%, #ffcaa8 50%, #ffa470 100%)",
    shadow: "0 6px 28px rgba(244,78,18,0.16), 0 1px 6px rgba(244,78,18,0.09)",
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4",
    body: "Industry-first AI-based assessment services ensuring a successful transition to SAP Business Data Cloud. Output of the industry-leading assessment services gives a straightforward series of findings and next steps, regardless of the customer's starting point — whether SAP ECC, S/4HANA on premise/private cloud, or SAP BW. Sierra has enriched this assessment foundation with SAP Business Data Cloud-specific acceleration in the areas of Data Production Generation, Databricks Delta Sharing, and SAP BI.",
  },
];

// ── Why Sierra differentiators ────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
    title: "SAP BDC Deep Expertise",
    body: "Proven experience implementing and optimizing SAP Business Data Cloud across complex SAP landscapes — from ECC and BW through to modern S/4HANA environments.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 1 2 2",
    title: "Industry-First AI Assessment",
    body: "Sierra's AI-based SAP BDC assessment — enriched with Data Production Generation, Databricks Delta Sharing, and SAP BI acceleration — gives a clear, actionable roadmap from day one.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Deployment in Weeks",
    body: "Rapid implementation with custom enablement and targeted optimization. Sierra upskills your teams through dedicated training so value is realized fast.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "End-to-End Partnership",
    body: "From implementation through ongoing optimization, governance, and strategic guidance — Sierra ensures long-term value and helps your enterprise unlock smarter decisions, resilience, and innovation.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SapBusinessDataCloudPage() {
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
              <Eyebrow tone="dark">SAP Business Data Cloud · Data &amp; AI Analytics</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Unify, govern, and analyze —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                with SAP BDC.
              </em>
            </h1>

            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}>
              Sierra Digital empowers enterprises to maximize SAP Business Data Cloud — unifying,
              governing, and analyzing data with next-gen AI and intelligent applications. Unlock
              smarter decisions, greater agility, and innovation for your digital business.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore SAP BDC →
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
          <Stat value="200+" label="SAP clients served"            data-delay="0" />
          <Stat value="20+"  label="Years of SAP expertise"        data-delay="100" />
          <Stat value="100+" label="BDC projects delivered"        data-delay="200" />
          <Stat value="Weeks" label="Typical deployment timeline"  data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHAT IS SAP BDC — canvas-2 (alt)
          Featured intro spotlight card
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What is SAP BDC?"
          eyebrowTone="primary"
          title="What is SAP BDC?"
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
              Modern Data Integration Platform
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              SAP Business Data Cloud provides a modern, scalable solution for integrating and
              managing enterprise data across diverse sources. Sierra Digital ensures organizations
              can leverage this powerful platform to break down data silos, enhance analytics, and
              drive AI-powered insights. By implementing SAP Business Data Cloud, we empower
              businesses to make faster, more informed decisions while ensuring data integrity
              and security.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — canvas (white)
          Teal gradient cards — platform capabilities
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Powerful capabilities guided by Sierra's BDC expertise."
          subtitle="Guided by Sierra's expertise in SAP Business Data Cloud, your organization can gain these powerful capabilities:"
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
          BENEFITS — canvas-2 (alt)
          Terracotta gradient cards — measurable business value
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Measurable business value with SAP Business Data Cloud."
          subtitle="Sierra Digital is committed to driving measurable business value with SAP Business Data Cloud:"
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
          SERVICE OFFERINGS — canvas-warm
          Solutions Catalog + Assessment Services — two differentiated cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="warm">
        <SectionHeading
          index="03"
          eyebrow="Our offerings"
          eyebrowTone="primary"
          title="Solutions and services built for SAP BDC."
          subtitle="From custom data products to industry-first AI assessment services — Sierra delivers the full spectrum of SAP Business Data Cloud enablement."
          align="center"
          size="xl"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {OFFERINGS.map((o, i) => (
            <div
              key={o.tag}
              className={`will-reveal rounded-3xl border-2 p-8 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 ${o.borderClass}`}
              data-delay={String(i * 100)}
              style={{ background: o.gradient, boxShadow: o.shadow }}
            >
              <span className={`block h-1 w-10 rounded-full ${o.accentBar}`} />
              <span className={`self-start rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest uppercase ${o.tagClass}`}>
                {o.tag}
              </span>
              <span className={o.accentBar.replace("bg-", "text-").replace("-500", "-600")}>
                <Icon d={o.icon} />
              </span>
              <p className="text-ink-2 text-sm leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          HOW WE HELP — canvas (white)
          Full "How We Help" content from Benefits CardGrid item — spotlight card
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          eyebrow="How We Help"
          eyebrowTone="primary"
          title="How We Help"
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
              Rapid Deployment &amp; Enablement
            </p>
            <p className="text-ink-2 leading-relaxed">
              Sierra Digital accelerates your adoption of SAP Business Data Cloud with rapid
              implementation, custom enablement, and targeted optimization leveraging the latest
              platform innovations. We deliver deployment within weeks and upskill teams through
              dedicated training, ensuring your business quickly harnesses SAP Business Data
              Cloud&apos;s unified data, knowledge graph, and intelligent applications — including
              next-gen AI, real-time analytics, and hundreds of ready-to-use data products. Our
              tailored solutions enable seamless integration across SAP and third-party data,
              while our end-to-end support covers ongoing optimization, governance, and strategic
              guidance — ensuring long-term value and helping your enterprise unlock smarter
              decisions, resilience, and innovation.
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
            eyebrow="Why Sierra Digital"
            eyebrowTone="primary"
            title={<>Altitude is an <em className="font-serif italic">attitude.</em></>}
            subtitle="Since 2002 Sierra Digital has guided enterprises through complex SAP transformations. Our SAP BDC practice combines certified expertise, industry-first AI assessments, and end-to-end support to deliver measurable results — fast."
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
                  <Icon d={d.icon} />
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
          title="From data silos to unified intelligence."
          subtitle="Sierra Digital's structured SAP BDC methodology turns complex data landscapes into a single source of truth — fast, secure, and AI-ready."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            { title: "BDC Readiness Assessment", body: "Run Sierra's industry-first AI-based assessment across your ECC, S/4HANA, or SAP BW landscape. Receive a clear series of findings and prioritized next steps — regardless of your starting point." },
            { title: "Data Architecture Design", body: "Design a unified data model and connectivity map across SAP and non-SAP sources. Define governance policies, role-based access, and integration patterns aligned to your business requirements." },
            { title: "Implementation & Migration", body: "Deploy SAP Business Data Cloud with Sierra's pre-built acceleration for Data Production Generation, Databricks Delta Sharing, and SAP BI. Migrate data with integrity checks at every stage." },
            { title: "Knowledge Graph & AI Activation", body: "Configure intelligent applications, the SAP BDC knowledge graph, and AI analytics layers. Connect next-gen AI and real-time analytics to hundreds of ready-to-use data products." },
            { title: "Optimization & Governance", body: "Establish ongoing data governance, encryption, and access controls. Continuously optimize platform performance and upskill teams through dedicated training and strategic guidance." },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation. Unlock smarter decisions, greater agility, and innovation with SAP Business Data Cloud."
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Explore SAP BDC"
        secondaryHref="/contact/"
      />
    </>
  );
}
