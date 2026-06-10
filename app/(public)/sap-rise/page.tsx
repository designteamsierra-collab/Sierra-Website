import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getContentBySegments } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StepStrip } from "@/components/ui/StepStrip";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";
import { mdxComponents } from "@/components/mdx/mdxComponents";

export const metadata: Metadata = {
  title: "RISE with SAP Services | ECC to S/4HANA Cloud Migration Experts",
  description:
    "Accelerate your RISE with SAP transformation journey. Migrate from ECC to SAP S/4HANA Cloud with Private or Public Cloud options by Sierra Digital.",
  alternates: { canonical: "https://sierradigitalinc.com/sap-rise/" },
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

// ── Challenge cards (problems with legacy ECC) ────────────────────────────────

const CHALLENGES = [
  { icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "High TCO", body: "On-premise systems demand high maintenance, redundant hardware, and expensive upgrade cycles." },
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Limited Agility", body: "Legacy ERP lacks flexibility for modern, AI-powered and data-driven business models." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Compliance Risks", body: "Older platforms may not meet evolving regulatory, security, and data-residency standards." },
  { icon: "M3 3v18h18", d2: "m19 9-5 5-4-4-3 3", title: "Performance Bottlenecks", body: "Outdated architecture limits scalability, real-time analytics, and AI integration." },
  { icon: "M18 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", d2: "m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98", title: "Integration Challenges", body: "Difficulty connecting to AI, IoT, BTP extensions and cloud partner ecosystems." },
  { icon: "M2 3h20v14H2zM8 21h8M12 17v4", title: "Poor User Experience", body: "Complex, dated interfaces reduce adoption, slow onboarding and hurt productivity." },
];

// ── Benefit cards (gains from RISE) ───────────────────────────────────────────

const BENEFITS = [
  { icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Cost Efficiency", body: "Cloud ERP eliminates infrastructure overhead, reduces IT ops cost and hardware refresh cycles." },
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Business Agility", body: "Elastic private and public cloud options let you scale fast and innovate continuously." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4", title: "Regulatory Compliance", body: "Built-in security, access controls and compliance tools meet global industry requirements." },
  { icon: "M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4zM9 21v-3M15 21v-3", title: "Intelligent Automation", body: "Embedded AI, Joule and SAP Analytics Cloud surface insights and automate processes." },
  { icon: "M18 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", d2: "m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98", title: "Seamless Integration", body: "BTP-native architecture opens connectivity to your entire partner and technology ecosystem." },
  { icon: "M2 3h20v14H2zM8 21h8M12 17v4", title: "Better User Experience", body: "Modern Fiori interfaces and AI assistance drive adoption and cut training time." },
];

// ── Migration path cards ───────────────────────────────────────────────────────

const PATHS = [
  {
    tag: "Greenfield",
    tagClass: "bg-primary-200 text-primary-800",
    borderClass: "border-primary-200 hover:border-primary-400",
    accentBar: "bg-primary-500",
    gradient: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
    shadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
    title: "New Implementation",
    body: "Reimagine processes with a fresh S/4HANA Cloud deployment. Ideal for organisations ready to standardise on SAP best practices without legacy constraints.",
  },
  {
    tag: "Brownfield",
    tagClass: "bg-accent-200 text-accent-800",
    borderClass: "border-accent-200 hover:border-accent-400",
    accentBar: "bg-accent-500",
    gradient: "linear-gradient(145deg, #fff5ed 0%, #ffcaa8 50%, #ffa470 100%)",
    shadow: "0 6px 28px rgba(244,78,18,0.16), 0 1px 6px rgba(244,78,18,0.09)",
    title: "System Conversion",
    body: "Retain existing configurations and data while converting to S/4HANA Cloud. Maximum continuity, minimum disruption — the most common RISE path.",
  },
  {
    tag: "Hybrid",
    tagClass: "bg-canvas-2 text-ink-2",
    borderClass: "border-line-strong hover:border-ink",
    accentBar: "bg-ink",
    gradient: "linear-gradient(145deg, #f2f1ed 0%, #ece9e1 50%, #d6d3ca 100%)",
    shadow: "0 6px 28px rgba(15,23,42,0.09), 0 1px 6px rgba(15,23,42,0.05)",
    title: "Selective Data Transition",
    body: "Combine greenfield redesign with brownfield migration, selectively moving critical processes and data. Best for complex, multi-system landscapes.",
  },
];

// ── Why Sierra differentiators ────────────────────────────────────────────────

const DIFFERENTIATORS = [
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Proven Clean Core", body: "We eliminate redundant customisations so your S/4HANA is future-ready and upgrade-safe on day one." },
  { icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8", title: "RISE Readiness Assessment", body: "Our AI Cockpit maps your ECC landscape, flags blockers, and scores readiness before migration begins." },
  { icon: "M12 22V12M12 12 7 7M12 12l5-5", title: "AI-Powered Accelerators", body: "Pre-built automation scripts, industry workflows and content libraries compress timelines significantly." },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", title: "End-to-End Support", body: "From strategy through deployment and post-migration optimisation — one partner, full accountability." },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function SapRisePage() {
  const entry = await getContentBySegments(["sap-rise"]);

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          HERO — Sierra teal-primary gradient (not black), Fraunces display type
          ───────────────────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40"
        style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}
      >
        {/* Subtle topo lines for texture — not heavy */}
        <Decoration className="inset-0 opacity-[0.07]">
          <TopoLines className="h-full w-full" tone="white" />
        </Decoration>
        {/* Soft orb glow — top right only, understated */}
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25">
          <OrbCluster className="h-full w-full" variant="sky-emerald" />
        </Decoration>

        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            {/* Eyebrow */}
            <div className="hero-reveal hero-d0">
              <Eyebrow tone="dark">SAP Silver Partner · RISE with SAP</Eyebrow>
            </div>

            {/* display-2xl — matches homepage h1 scale */}
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              ECC to S/4HANA Cloud —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                done right.
              </em>
            </h1>

            {/* Subtitle */}
            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "38rem" }}>
              Accelerate your RISE with SAP journey. Migrate from ECC to S/4HANA Cloud with
              private or public cloud options, backed by Sierra Digital&apos;s AI-powered
              tooling and clean-core methodology.
            </p>

            {/* CTAs */}
            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/rise-cockpit/request-access/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Try the AI Cockpit →
              </Button>
            </div>
          </div>
        </Container>

        {/* Bottom altitude scale — subtle left decoration */}
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* ─────────────────────────────────────────────────────────────────────
          STATS — canvas (white), generous breathing room
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas" density="compact">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
          <Stat value="200+" label="SAP clients served"      data-delay="0" />
          <Stat value="20+"  label="Years of SAP expertise"  data-delay="100" />
          <Stat value="50+"  label="RISE projects delivered" data-delay="200" />
          <Stat value="98%"  label="On-time go-live rate"    data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CHALLENGES — canvas-2 (warm off-white)
          Cards: left accent bar in accent (terracotta) = signals "problem"
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="The challenge"
          eyebrowTone="accent"
          title="Why staying on legacy SAP compounds risk."
          subtitle="For SAP Business Suite customers, remaining on ECC past end-of-mainstream maintenance means rising costs, compliance gaps, and falling behind competitors already on the cloud."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map((c, i) => (
            <div
              key={c.title}
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
                  <Icon d={c.icon} d2={"d2" in c ? (c as { d2?: string }).d2 : undefined} />
                </span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {c.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          BENEFITS — canvas (white)
          Cards: left accent bar in primary (teal) = signals "positive gain"
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="The RISE advantage"
          eyebrowTone="primary"
          title="What you gain moving to S/4HANA Cloud."
          subtitle="RISE with SAP delivers a cloud-native ERP foundation with embedded AI, continuous innovation, and reduced total cost of ownership."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
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
          MIGRATION PATHS — canvas-warm (warmest surface)
          3 cards each visually differentiated by tone
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="warm">
        <SectionHeading
          index="03"
          eyebrow="Our approach"
          eyebrowTone="primary"
          title="Three paths to S/4HANA — we find yours."
          subtitle="Sierra tailors the migration strategy to your system complexity, timeline, and business goals. No one-size-fits-all templates."
          align="center"
          size="xl"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {PATHS.map((p, i) => (
            <div
              key={p.tag}
              className={`will-reveal rounded-3xl border-2 p-8 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 ${p.borderClass}`}
              data-delay={String(i * 100)}
              style={{ background: p.gradient, boxShadow: p.shadow }}
            >
              {/* Coloured accent top bar */}
              <span className={`block h-1 w-10 rounded-full ${p.accentBar}`} />

              {/* Tag pill */}
              <span className={`self-start rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest uppercase ${p.tagClass}`}>
                {p.tag}
              </span>

              {/* Heading — display-md scale */}
              <h3 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY SIERRA — canvas-2 (alt)
          Split: heading left, 2×2 cards right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="04"
            eyebrow="Why Sierra Digital"
            eyebrowTone="primary"
            title={<>Altitude is an <em className="font-serif italic">attitude.</em></>}
            subtitle="Since 2002 Sierra Digital has guided enterprises up the SAP mountain. We combine deep technical expertise with AI-powered tooling so your RISE is faster, cleaner, and lower risk."
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
                {/* Icon badge */}
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
          title="From assessment to go-live — five proven phases."
          subtitle="Sierra's structured methodology eliminates guesswork and keeps your transformation on time, on budget, and fully supported at every step."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            { title: "Assessment", body: "Analyse your SAP landscape, define goals, and score RISE readiness using our AI Cockpit before a line of code changes." },
            { title: "Strategy & Roadmap", body: "Build a customised migration plan — greenfield, brownfield, or hybrid — aligned with your timeline and business objectives." },
            { title: "Data Transformation", body: "Cleanse, map, and migrate data for cloud deployment. AI-assisted tooling accelerates selective transition and validation." },
            { title: "Testing & Validation", body: "Ensure stability, compliance, and performance through rigorous UAT, integration testing, and cut-over rehearsals." },
            { title: "Deployment & Optimisation", body: "Go live on S/4HANA Cloud, then continuously improve operations with hypercare support and post-migration analytics." },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA — Sierra primary teal (not black)
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to begin your SAP <em className="font-serif italic">RISE?</em></>}
        subtitle="Book a free discovery call with one of our SAP architects. We'll map your landscape, score your readiness, and show you exactly what the path looks like."
        primaryLabel="Book a Discovery Call"
        primaryHref="/contact/"
        secondaryLabel="Try the AI Cockpit"
        secondaryHref="/rise-cockpit/request-access/"
      />
    </>
  );
}
