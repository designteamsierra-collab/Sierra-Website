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
  title: "AI Enhancement for SAP BTP | GenAI & Intelligent Automation | Sierra Digital",
  description:
    "Enhance SAP BTP with AI-powered automation, SAP Joule, and Generative AI. Sierra Digital delivers predictive insights and intelligent business outcomes.",
  alternates: { canonical: "https://sierradigitalinc.com/ai-enhancement/" },
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

// ── Features (capabilities) ───────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M3 3v18h18",
    d2: "m19 9-5 5-4-4-3 3",
    title: "Leverage Predictive Analytics",
    body: "Our AI-Enhancement solutions analyze historical and real-time data to provide actionable insights, allowing businesses to anticipate trends, optimize operations, and make informed decisions with confidence.",
  },
  {
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
    title: "Automate Invoice Processing",
    body: "Utilizing AI-Enhancement powered document processing, our applications extract and validate invoice data, reducing manual errors and accelerating accounts payable workflows.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Enhance Business Partner Onboarding",
    body: "AI-Enhancement enabled automation streamlines vendor and customer onboarding by extracting key data from documents and integrating it seamlessly into SAP Business Partner forms.",
  },
  {
    icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    title: "Access Instant Insights with Conversational AI-Enhancement",
    body: "SAP users can interact with AI-Enhancement powered chatbots to retrieve critical data, summarize and generate reports, and execute business processes through intuitive natural language queries.",
  },
  {
    icon: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8z",
    d2: "M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    title: "Optimize Supply Chain with AI-Enhancement Forecasting",
    body: "Our AI-Enhancement solutions analyze supply chain patterns to predict demand fluctuations, optimize inventory levels, and reduce operational bottlenecks.",
  },
];

// ── Benefits (business outcomes) ──────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4zM9 21v-3M15 21v-3",
    title: "Intelligent Automation and Cost Reduction",
    body: "By leveraging AI-Enhancement to handle repetitive tasks, businesses reduce operational costs, minimize errors, and free up human resources for higher-value activities.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Enhanced Decision-Making with Real-Time Insights",
    body: "AI-Enhancement driven analytics provide deeper insights into business performance, enabling organizations to make proactive, data-backed decisions.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Accelerated Innovation and Agility",
    body: "Sierra Digital's AI-enhanced applications empower enterprises to rapidly deploy new capabilities, adapt to market changes, and scale their AI-Enhancement initiatives seamlessly.",
  },
  {
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    title: "Improved Customer and Employee Experiences",
    body: "From AI-Enhancement powered self-service tools to intelligent workflow automation, businesses can enhance user experiences for both employees and customers, fostering engagement and satisfaction.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Future-Proofing with Scalable AI-Enhancement",
    body: "Our AI-Enhancement solutions are built to grow with your business, ensuring long-term adaptability and continuous process optimization.",
  },
];

// ── Success stories (from Block content) ──────────────────────────────────────

const STORIES = [
  {
    tag: "Media & Streaming",
    tagClass: "bg-primary-200 text-primary-800",
    borderClass: "border-primary-200 hover:border-primary-400",
    accentBar: "bg-primary-500",
    gradient: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
    shadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
    icon: "M15 10l4.553-2.277A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z",
    title: "Streaming Giant Uses AI to Automate Revenue Processing",
    body: "This client has grown to be one of the world's leading social forums and an important streaming service. With global reach and the devoted attention of its eager fans, this client sees more than 30 million users each day. They field more than 9 million content creators and provide content in more than 30 languages.",
  },
  {
    tag: "Energy & Midstream",
    tagClass: "bg-accent-200 text-accent-800",
    borderClass: "border-accent-200 hover:border-accent-400",
    accentBar: "bg-accent-500",
    gradient: "linear-gradient(145deg, #fff5ed 0%, #ffcaa8 50%, #ffa470 100%)",
    shadow: "0 6px 28px rgba(244,78,18,0.16), 0 1px 6px rgba(244,78,18,0.09)",
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Energy Company Uses AI for Maintenance Insights",
    body: "This client is one of the largest and most diversified midstream energy companies in North America. With approximately 90,000 miles of pipelines and associated energy infrastructure across 38 states and Canada, this client transports the oil and gas products that energize millions of lives. Success has led this client to embrace digital transformation in recent years as for distinctive business advantage.",
  },
];

// ── Why Sierra differentiators ────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
    title: "SAP BTP Native",
    body: "Every AI-Enhancement application is purpose-built on SAP Business Technology Platform — seamlessly integrated with your SAP ERP and fully aligned with SAP's roadmap.",
  },
  {
    icon: "M12 8v4l3 3M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z",
    title: "Six-Week Deployment",
    body: "Our tailored AI-Enhancement applications can be at your enterprise's disposal in as little as six weeks — delivering rapid time-to-value without long implementation cycles.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Clean Core Compliant",
    body: "All AI-enhanced applications are built as side-by-side extensions on SAP BTP — never touching your SAP core, preserving system stability and upgrade readiness.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "End-to-End AI Partnership",
    body: "From use case definition and solution design through go-live and continuous optimization — Sierra is your single accountable partner across the full AI journey.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiEnhancementPage() {
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
              <Eyebrow tone="dark">SAP BTP · GenAI &amp; Intelligent Automation</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              AI Enhancement for SAP —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                intelligent outcomes.
              </em>
            </h1>

            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "40rem" }}>
              Sierra Digital is committed to delivering intelligent, high-value business solutions,
              and our AI-enhancement applications on the SAP Business Technology Platform (BTP)
              empower organizations with automation, predictive insights, and next-generation
              efficiencies for SAP users across Lines of Business (LoB).
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore AI on BTP →
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
          <Stat value="200+" label="SAP clients served"          data-delay="0" />
          <Stat value="20+"  label="Years of SAP expertise"      data-delay="100" />
          <Stat value="6wk"  label="Average deployment timeline" data-delay="200" />
          <Stat value="30+"  label="AI use cases delivered"      data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — canvas-2 (alt)
          Teal gradient cards — what AI Enhancement can do
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="AI-powered capabilities ready in as little as six weeks."
          subtitle="With tailored AI-Enhancement powered applications on SAP BTP, these and more capabilities can be at your enterprise's disposal in as little as six weeks:"
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
          title="Real business outcomes from AI-Enhancement."
          subtitle="At Sierra Digital, we focus on real business outcomes, delivering AI-Enhancement solutions that enhance efficiency and drive strategic growth:"
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
          SUCCESS STORIES — canvas-warm (warmest surface)
          Two client story cards with differentiated gradients
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="warm">
        <SectionHeading
          index="03"
          eyebrow="Success Stories"
          eyebrowTone="primary"
          title="AI driving results across industries."
          subtitle="SAP Business Technology Platform provides a powerful foundation for AI-Enhancement driven digital transformation. Enterprises today require intelligent solutions that not only enhance process efficiency but also support strategic innovation."
          align="center"
          size="xl"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {STORIES.map((s, i) => (
            <div
              key={s.tag}
              className={`will-reveal rounded-3xl border-2 p-8 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 ${s.borderClass}`}
              data-delay={String(i * 100)}
              style={{ background: s.gradient, boxShadow: s.shadow }}
            >
              <span className={`block h-1 w-10 rounded-full ${s.accentBar}`} />

              <span className={`self-start rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest uppercase ${s.tagClass}`}>
                {s.tag}
              </span>

              <div className="flex items-center gap-3">
                <span className={s.accentBar.replace("bg-", "text-").replace("-500", "-600")}>
                  <Icon d={s.icon} />
                </span>
              </div>

              <h3 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
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
            title={<>Connect with <em className="font-serif italic">cutting-edge</em> AI technologies.</>}
            subtitle="AI-Enhancement enabled applications on SAP BTP allow businesses to modernize operations while maintaining system integrity and Clean Core principles. To start your journey toward transformative innovation."
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
          title="From use case to live AI — five focused phases."
          subtitle="Sierra Digital's structured AI-Enhancement methodology delivers measurable business value fast, with every phase designed to validate outcomes before the next begins."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            { title: "AI Readiness Assessment", body: "Evaluate your SAP BTP landscape and identify the highest-impact AI enhancement opportunities across your Lines of Business — ranked by feasibility and business value." },
            { title: "Use Case Prioritization", body: "Define and prioritize AI use cases with your stakeholders. Align on scope, data requirements, and success metrics before any development begins." },
            { title: "Solution Architecture & Design", body: "Design the AI-enhanced application on SAP BTP, selecting the right combination of GenAI, SAP Joule, predictive analytics, and automation components for your use case." },
            { title: "Development & Integration", body: "Build and integrate the AI-enhanced application with your SAP ERP system as a clean, side-by-side BTP extension — no core modifications, fully upgrade-safe." },
            { title: "Go-Live & Continuous Optimization", body: "Deploy in as little as six weeks, then iterate and scale AI capabilities across additional LoB processes with ongoing support and performance monitoring." },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation. Connect your business with cutting-edge AI technologies for innovation."
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Explore AI on BTP"
        secondaryHref="/contact/"
      />
    </>
  );
}
