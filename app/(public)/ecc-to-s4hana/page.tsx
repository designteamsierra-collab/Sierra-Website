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
  title: "ECC to S/4HANA Migration Services | S/4HANA Transformation Experts",
  description:
    "Expert ECC to S/4HANA migration and SAP ECC to S/4HANA conversion services. Modernize, upgrade, and transform with Clean Core and AI-driven tools.",
  alternates: { canonical: "https://sierradigitalinc.com/ecc-to-s4hana/" },
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

// ── Why Migrate — 6 challenges + Frequent Downtime ───────────────────────────

const WHY_MIGRATE = [
  { label: "High Maintenance Costs",    body: "Legacy systems often require expensive support and custom patches." },
  { label: "Limited Scalability",       body: "Rigid infrastructures hinder business growth." },
  { label: "Data Silos",               body: "Disconnected processes lead to poor visibility." },
  { label: "Manual Inefficiencies",     body: "Outdated systems rely heavily on manual workflows." },
  { label: "Security Vulnerabilities",  body: "Older platforms may have compliance gaps." },
  { label: "Integration Issues",        body: "Difficulty incorporating modern technologies." },
  { label: "Frequent Downtime",         body: "Unreliable performance disrupts operations." },
];

// ── S/4HANA Solutions (4 teal cards) ────────────────────────────────────────

const SOLUTIONS = [
  {
    icon: "M4 8h16M4 16h16M2 12h20",
    title: "Enhanced Scalability",
    body: "Modular design supports business expansion.",
  },
  {
    icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    title: "Unified Data",
    body: "Real-time insights improve decision-making.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Seamless Integration",
    body: "Compatibility with AI, IoT, and other innovations.",
  },
  {
    icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3",
    title: "Reliable Performance",
    body: "Minimized disruptions with stable operations.",
  },
];

// ── Brownfield Approach (3 teal cards) ───────────────────────────────────────

const BROWNFIELD = [
  {
    icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
    title: "Panaya Change Intelligence Impact Analysis for S/4HANA",
    body: "See the implications of S/4HANA upfront with in-depth S/4HANA conversion analysis spreading across custom and standard objects, covering dozens of correction categories, and over 70 correction types and 11K deleted transactions, including all correction activities, cloned programs, and impact on test catalog.",
  },
  {
    icon: "M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0zM16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z",
    title: "Optimal Scope & Timelines Assessment",
    body: "Build your business case, project plan, and timeline based on detailed effort estimation already broken down into multiple categories and types. Optimize your project scope by knowing each task's and test's priority, focusing on the right corrections and tests to ensure you eliminate your risk as you minimize your scope.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Quantified Data-Driven Effort Estimation",
    body: "Make an informed decision on your resource allocation by understanding the appropriate effort, time, and skill set required in each team. Decide what to allocate to external SI or each of your internal teams by knowing the optimal effort estimation in person-hours for each workstream.",
  },
];

// ── Brownfield Key Benefits (5 title-only) ────────────────────────────────────

const BROWNFIELD_BENEFITS = [
  "Eliminate Migration Risk. Foresee what will break, what to fix, and what to test.",
  "Cut Down Project Time & Budget by Half.",
  "Reduce code remediation efforts by 90%.",
  "Get it Right the First Time. Futureproof each step upfront based on real-time S/4HANA insight.",
  "Gain Visibility & Control. Control your progress with real-time insights into each step.",
];

// ── Greenfield Key Benefits (4 title-only) ────────────────────────────────────

const GREENFIELD_BENEFITS = [
  "Deep, proactive insights into allowing you to know which business processes will fail in S/4HANA and which to lift and shift before building new ones.",
  "Unparalleled testing efficiency makes it easy for your global teams to collaborate as if they were across the hall.",
  "Real-time visibility, allowing you to monitor test and defect management progress to take immediate corrective actions.",
  "40% faster test cycles with effective business user collaborations, eliminating your idle time and avoiding bottlenecks.",
];

// ── Why Choose Sierra Digital? (5 diff cards) ────────────────────────────────

const WHY_SIERRA = [
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Proven Expertise in Clean Core Methodology",
    body: "We help businesses eliminate unnecessary customizations, ensuring a lean, adaptable ERP system that is optimized for future upgrades and innovation.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Comprehensive Clean Core Readiness Assessment",
    body: "Our evaluation framework identifies legacy code and modifications that need to be streamlined or replaced with SAP standard capabilities.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI-Enhanced Pre-Built Content Library",
    body: "Accelerate your migration with our extensive repository of industry-specific workflows, automation scripts, and templates designed to reduce implementation time and improve efficiency.",
  },
  {
    icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z",
    title: "Customized Solutions",
    body: "We tailor migration plans to meet your specific business needs and goals.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Comprehensive Support",
    body: "From initial assessment to post-migration optimization, we provide end-to-end services ensuring a smooth transition.",
  },
];

// ── Migration Process Steps (6 diff cards) ───────────────────────────────────

const PROCESS_STEPS = [
  {
    step: "01",
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2",
    title: "Assessment",
    body: "Evaluate current systems and define migration objectives, with a focus on Clean Core Readiness.",
  },
  {
    step: "02",
    icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    title: "Planning",
    body: "Develop a detailed roadmap, including timelines and resource allocation.",
  },
  {
    step: "03",
    icon: "M8 7h12m0 0-4-4m4 4-4 4M16 17H4m0 0 4 4m-4-4 4-4",
    title: "Data Migration",
    body: "Extract, transform, and load data into the new SAP S/4HANA system, ensuring accuracy and integrity.",
  },
  {
    step: "04",
    icon: "M9 11V6l-2 2m2-2 2 2M15 13v5l2-2m-2 2-2-2M3 3h18M3 21h18",
    title: "Testing",
    body: "Conduct rigorous testing to validate system performance and data consistency.",
  },
  {
    step: "05",
    icon: "M5 12h14M12 5l7 7-7 7",
    title: "Deployment",
    body: "Execute the migration plan, transitioning to the new environment with minimal disruption.",
  },
  {
    step: "06",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    title: "Support",
    body: "Provide ongoing assistance to optimize system performance and address any post-migration challenges.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ECCToS4HanaPage() {
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
              <Eyebrow tone="dark">ECC to S/4HANA · SAP Migration Services</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              ECC to S/4HANA{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Migration Services.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              As a leading SAP partner, Sierra Digital specializes in seamless migrations from SAP
              ECC to SAP S/4HANA. Leveraging GROW or RISE with SAP, we empower businesses to
              harness the full potential of SAP S/4HANA, driving innovation and operational
              efficiency.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Migration Services →
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
          <Stat value="SAP Gold"   label="Certified SAP migration partner"           data-delay="0" />
          <Stat value="Clean Core" label="AI-enhanced methodology &amp; accelerators" data-delay="100" />
          <Stat value="2 Paths"    label="Brownfield or Greenfield approach"          data-delay="200" />
          <Stat value="End-to-End" label="Assessment to post-go-live support"         data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY MIGRATE SPOTLIGHT — alt
          Heading outside · spotlight card with 7 challenge items
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Why Migrate to SAP S/4HANA"
          eyebrowTone="primary"
          title="Why Migrate to SAP S/4HANA"
          subtitle="Transitioning to SAP S/4HANA addresses common challenges associated with legacy ERP systems:"
          align="center"
          size="xl"
        />
        <div className="mx-auto max-w-4xl">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Legacy ERP Challenges
            </p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_MIGRATE.map((item) => (
                <li key={item.label} className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-semibold text-ink text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                    {item.label}
                  </span>
                  <span className="pl-4 text-ink-2 text-sm leading-relaxed">{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          S/4HANA SOLUTIONS 01 — canvas (white)  ·  4 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="SAP S/4HANA Solutions"
          eyebrowTone="primary"
          title="Migrating to SAP S/4HANA offers solutions to these issues."
          subtitle="Migrating to SAP S/4HANA offers solutions to these issues:"
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SOLUTIONS.map((s, i) => (
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
          BROWNFIELD APPROACH 02 — alt
          3 teal conversion cards + 5 key benefit diff cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="System Conversion (Brownfield)"
          eyebrowTone="primary"
          title="SAP S/4HANA System Conversion (Brownfield Approach)"
          subtitle="The safest solution for SAP S/4HANA system conversion. With a tailor-made conversion plan that optimizes your project scope based on your customization and usage. And with automated code remediations and test plan, all in one easy-to-use SaaS solution."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {BROWNFIELD.map((b, i) => (
            <div
              key={b.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 80)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={b.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {b.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

        {/* Brownfield key benefits */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BROWNFIELD_BENEFITS.map((benefit, i) => (
            <div
              key={benefit}
              className="will-reveal rounded-xl border border-primary-100 p-5 flex flex-col gap-3 hover:-translate-y-0.5 transition-all duration-200"
              data-delay={String(Math.min(i * 70, 350))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)",
                boxShadow: "0 4px 16px rgba(33,138,163,0.12), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <span className="h-6 w-0.75 rounded-full bg-primary-500 shrink-0" />
              <p className="text-ink-2 text-sm leading-relaxed font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          GREENFIELD IMPLEMENTATION 03 — canvas (white)
          Spotlight card + 4 key benefit diff cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
          eyebrow="Greenfield Implementation"
          eyebrowTone="primary"
          title="SAP S/4HANA Greenfield Implementation"
          align="center"
          size="xl"
        />

        <div className="mx-auto max-w-4xl mb-8">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Fresh Start on S/4HANA
            </p>
            <p className="text-ink-2 leading-relaxed">
              The safest solution for SAP S/4HANA system conversion. With a tailor-made conversion
              plan that optimizes your project scope based on your customization and usage. And with
              automated code remediations and test plan, all in one easy-to-use SaaS solution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {GREENFIELD_BENEFITS.map((benefit, i) => (
            <div
              key={benefit}
              className="will-reveal rounded-xl border border-primary-100 p-5 flex flex-col gap-3 hover:-translate-y-0.5 transition-all duration-200"
              data-delay={String(i * 80)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)",
                boxShadow: "0 4px 16px rgba(33,138,163,0.12), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <span className="h-6 w-0.75 rounded-full bg-primary-500 shrink-0" />
              <p className="text-ink-2 text-sm leading-relaxed font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY CHOOSE SIERRA DIGITAL 04 — alt  ·  5 diff cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="04"
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
          MIGRATION PROCESS 05 — canvas (white)  ·  6 numbered process cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="05"
          eyebrow="Our Migration Process"
          eyebrowTone="primary"
          title="Our Migration Process"
          subtitle="We follow a structured approach to ensure successful migration:"
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)",
                boxShadow: "0 4px 16px rgba(33,138,163,0.12), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-600 font-mono text-xs font-semibold tracking-widest">
                  {s.step}
                </span>
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
          CLOSING CTA
          Partner with Sierra + standard CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Partner with Sierra Digital"
        title={
          <>
            Partner with Sierra for Seamless{" "}
            <em className="font-serif italic">SAP S/4HANA Migration!</em>
          </>
        }
        subtitle="Contact us today to discuss how our Clean Core expertise and AI-enhanced content can facilitate your seamless migration to SAP S/4HANA. Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
        secondaryLabel="Explore ECC to S/4HANA Migration"
        secondaryHref="/contact/"
      />
    </>
  );
}
