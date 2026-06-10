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
  title: "Smart Budgeting & Forecasting | AI-Driven Budget Management",
  description:
    "Smart Budgeting & Forecasting (SBF) delivers AI-driven financial forecasting, SAP-integrated planning, cloud-based budgeting, predictive analytics, and automated workflow approvals for enterprise FP&A teams.",
  alternates: { canonical: "https://sierradigitalinc.com/smart-budgeting-and-forecasting/" },
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

// ── Features (4 items — MDX verbatim) ────────────────────────────────────────

const FEATURES = [
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Quickly build dynamic forms with GenAI",
    body: "Solution is seamlessly integrated with an SAP HANA Vector Engine which enables GenAI capabilities. AI helps users simply and quickly create custom, dynamic budget request form layouts. Attachments to budget requests can be queried in natural language to improve efficiency of the approval process.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Enhance Budget Request processing with GenAI and SAP HANA Engine",
    body: "Quickens the approval process for budget request forms and speeds turn-around times for your team. SAP HANA Vectoring allows for natural language querying of any attachments made to your budget requests, enhancing the approval process with GenAI for maximum efficiency.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Build and tailor customized workflows and budget approval processes",
    body: "Solution helps users build, tailor, and manage customized workflows and budget approval processes. Featuring embedded, secure role-based permission capability, the app supports multi-level, multi-user approval sequences, assuring transparent accountability.",
  },
  {
    icon: "M3 3v18h18M18 9l-5 5-4-4-3 3",
    title: "Enjoy predictive analytics integrated with SAP Analytics Cloud for Planning",
    body: "Embedded with SAP Analytics Cloud for Planning, solution affords users industry-best predictive analytics. Leveraging these advanced capabilities, users are able to discern metrics that can improve outcomes, build multiple scenarios to select from, and save the models for future use.",
  },
];

// ── Benefits (5 items — MDX verbatim) ────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Connect reliably and sustainably with your existing SAP ERP System",
    body: "Solution provides secure, confident connection to SAP and third-party sources through SAP-managed APIs. This assures that core code is protected, and that the solution will sustain interoperability with the latest SAP releases over time.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Gain seamless integration with GenAI and SAP Analytics Cloud",
    body: "Create forms, ask questions on budget attachments, query personnel expenses data, all using natural language modeling in union with SAP GenAI Hub, Just Ask and SAP HANA Vectoring.",
  },
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Unify sources, apps, siloes, and processes into a single user-friendly tool",
    body: "Isolated and detached budgeting and finance systems can cause gross inefficiencies, including the waste of precious time and money. Solution provides a single, central, virtual budget monitoring, evaluation &amp; automated reporting repository to assure results-driven management.",
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Streamline budget request management",
    body: "The solution provides a refined and organized approach to handling and assessing budget proposals, incorporating advanced tools designed to aid in prioritizing projects and making informed budgetary decisions. It simplifies the complex process of financial planning, ensuring that all requests are evaluated fairly and resources are allocated efficiently to align with strategic objectives.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Optimize top investments like Personnel",
    body: "Monitor personnel allocations and analytics in real-time to gain at-a-glance insights. KPI drill-downs allow you to make adjustments in a few simple clicks.",
  },
];

// ── Why Sierra differentiators (2×2) ─────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "SAP-Certified Solution",
    body: "Smart Budgeting &amp; Forecasting is certified by SAP, ensuring reliable, standards-compliant integration with your existing SAP ecosystem.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "AI-First Financial Planning",
    body: "Leveraging SAP GenAI Hub and HANA Vectoring, Sierra brings natural language intelligence directly to your budgeting and forecasting workflows.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "End-to-End Budget Control",
    body: "From form creation to multi-level approvals, reporting, and personnel analytics — Sierra delivers a complete, governed budget management solution.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Designed for Finance Leaders",
    body: "Built for Finance, Line of Business, and IT executives — SBF puts intelligent budget management in the hands of the decision-makers who need it most.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SmartBudgetingForecastingPage() {
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
              <Eyebrow tone="dark">Smart Budgeting &amp; Forecasting · Sierra Digital</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Smart Budgeting &amp; Forecasting —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                AI-driven financial planning, smarter decisions.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              Maximize your business investments with Generative AI and integration to SAP Analytics
              Cloud. Designed for Finance, Line of Business, and IT executives, this tool empowers
              you to create, forecast, and recommend optimized budgets and financial plans. The app
              also streamlines the handling of various budget requests from multiple users, and it
              facilitates the creation of budget reports.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore SBF →
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
          <Stat value="AI-Driven"   label="GenAI-powered budgeting"          data-delay="0" />
          <Stat value="SAP-Native"  label="Integration with SAP Analytics Cloud" data-delay="100" />
          <Stat value="Multi-Level" label="Automated approval workflows"     data-delay="200" />
          <Stat value="Real-Time"   label="Budget visibility &amp; reporting"    data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY SMART BUDGETING & FORECASTING — alt
          Heading outside, spotlight card below
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Why Smart Budgeting &amp; Forecasting?"
          eyebrowTone="primary"
          title="Why Smart Budgeting &amp; Forecasting?"
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
              AI-Driven Financial Intelligence
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              Maximize your business investments with Generative AI and integration to SAP Analytics
              Cloud. Designed for Finance, Line of Business, and IT executives, this tool empowers
              you to create, forecast, and recommend optimized budgets and financial plans. The app
              also streamlines the handling of various budget requests from multiple users, and it
              facilitates the creation of budget reports.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          BENEFITS — canvas (white)  ·  5 terracotta gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Real-time intelligence that empowers every financial decision."
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
          FEATURES — alt  ·  4 teal gradient cards in 2-col grid
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Powerful features built for enterprise financial planning."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 100)}
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
          WHY SIERRA — canvas (white)
          Split: heading + subtitle left, 2×2 differentiator cards right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="Why choose Sierra Digital?"
            eyebrowTone="primary"
            title={<>Your trusted Smart Budgeting &amp; Forecasting <em className="font-serif italic">implementation partner.</em></>}
            subtitle="Sierra Digital combines deep SAP expertise with cutting-edge AI to deliver Smart Budgeting &amp; Forecasting solutions that are certified by SAP, tailored to your organization, and built to maximize long-term financial performance."
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
                <h3 className="font-display text-ink text-lg font-light leading-snug tracking-tight"
                  dangerouslySetInnerHTML={{ __html: d.title }}
                />
                <p className="text-ink-2 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: d.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Connect Businesses with Cutting-Edge <em className="font-serif italic">Technologies for Innovation.</em></>}
        subtitle="Don't wait – future-proof your business now!"
        primaryLabel="Ask Our Experts"
        primaryHref="/contact/"
        secondaryLabel="Explore SBF"
        secondaryHref="/contact/"
      />
    </>
  );
}
