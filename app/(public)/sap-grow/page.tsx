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
import { StepStrip } from "@/components/ui/StepStrip";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";
import { mdxComponents } from "@/components/mdx/mdxComponents";

export const metadata: Metadata = {
  title: "GROW with SAP Services | Cloud ERP for Growing Enterprises | Sierra Digital",
  description:
    "Accelerate your GROW with SAP journey. Implement a cloud-native ERP solution tailored for rapid business expansion with Sierra Digital's expert guidance.",
  alternates: { canonical: "https://sierradigitalinc.com/sap-grow/" },
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

// ── Challenge cards (pain points for growing enterprises) ─────────────────────

const CHALLENGES = [
  { icon: "M4 6h16M4 10h16M4 14h10", title: "Siloed Business Systems", body: "Disconnected tools across departments create data blind spots, manual rework, and fragmented decision-making." },
  { icon: "M3 3h18v18H3zM9 3v18M3 9h6M3 15h6", title: "Limited Scalability", body: "On-premise or legacy cloud solutions struggle to keep pace with rapid growth, seasonal spikes, and global expansion." },
  { icon: "M12 8v4l3 3M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z", title: "Slow Time-to-Value", body: "Traditional ERP deployments span years, delaying ROI and leaving fast-moving organisations behind competitors." },
  { icon: "M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7l-4-4zM14 3v4h4M9 12h6M9 16h4", title: "Heavy Customisation Debt", body: "Complex custom code slows upgrades, raises support costs, and locks organisations into outdated software." },
  { icon: "M18 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", d2: "m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98", title: "Poor Integration Ecosystem", body: "Legacy platforms lack the open APIs and cloud-native connectors modern partner networks and SaaS tools require." },
  { icon: "M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z", title: "No Embedded AI", body: "Without intelligent automation and AI insights, growing enterprises can't compete on speed and efficiency." },
];

// ── Feature/Benefit cards (what SAP GROW delivers) ────────────────────────────

const FEATURES = [
  { icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01", title: "Cloud-Native ERP", body: "Fully cloud-based solution offering rapid deployment, automatic updates, and seamless scalability as your business grows." },
  { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z", title: "Pre-Configured Best Practices", body: "Industry-specific templates and workflows accelerate time-to-value and reduce the need for costly customisation." },
  { icon: "M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z", title: "AI-Powered Insights", body: "Embedded AI and machine learning enhance decision-making, automate workflows, and surface real-time operational intelligence." },
  { icon: "M3 3v18h18", d2: "m19 9-5 5-4-4-3 3", title: "Real-Time Visibility", body: "Up-to-the-minute data on finances, supply chain, and business performance enables proactive, confident decision-making." },
  { icon: "M18 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", d2: "m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98", title: "SAP Ecosystem Integration", body: "Connect effortlessly with SAP S/4HANA, SAP BTP, and third-party applications for a unified business environment." },
  { icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8", title: "Tailored Industry Solutions", body: "Sierra's prebuilt BTP content library delivers industry and line-of-business customisations efficiently and economically." },
];

// ── Implementation approach cards ─────────────────────────────────────────────

const APPROACHES = [
  {
    tag: "Fit-to-Standard",
    tagClass: "bg-primary-200 text-primary-800",
    borderClass: "border-primary-200 hover:border-primary-400",
    accentBar: "bg-primary-500",
    gradient: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
    shadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
    title: "Adopt SAP Best Practices",
    body: "Deploy GROW with minimal customisation by adopting SAP's proven industry best practices. Fastest path to go-live, lowest cost, highest upgrade readiness.",
  },
  {
    tag: "BTP Extensions",
    tagClass: "bg-accent-200 text-accent-800",
    borderClass: "border-accent-200 hover:border-accent-400",
    accentBar: "bg-accent-500",
    gradient: "linear-gradient(145deg, #fff5ed 0%, #ffcaa8 50%, #ffa470 100%)",
    shadow: "0 6px 28px rgba(244,78,18,0.16), 0 1px 6px rgba(244,78,18,0.09)",
    title: "Extend with SAP BTP",
    body: "Leverage Sierra's prebuilt BTP content library to customise GROW for your specific industry and line-of-business requirements — without polluting the core.",
  },
  {
    tag: "Hybrid Roadmap",
    tagClass: "bg-canvas-2 text-ink-2",
    borderClass: "border-line-strong hover:border-ink",
    accentBar: "bg-ink",
    gradient: "linear-gradient(145deg, #f2f1ed 0%, #ece9e1 50%, #d6d3ca 100%)",
    shadow: "0 6px 28px rgba(15,23,42,0.09), 0 1px 6px rgba(15,23,42,0.05)",
    title: "Phased Transformation",
    body: "Start lean with core GROW capabilities and expand modularly — adding BTP extensions, integrations, and AI features as your business scales and matures.",
  },
];

// ── Why Sierra differentiators ────────────────────────────────────────────────

const DIFFERENTIATORS = [
  { icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01", title: "Public Cloud Practice", body: "Dedicated SAP GROW practice with certified consultants and a track record of successful public cloud deployments across multiple industries." },
  { icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8", title: "Prebuilt BTP Content Library", body: "Extensive library of reusable BTP content for industry and LoB customisations — faster, cheaper, and cleaner than building from scratch." },
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Rapid Deployment Accelerators", body: "Reusable templates, pre-configured workflows, and data migration tooling compress implementation timelines without compromising quality." },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", title: "End-to-End Partnership", body: "From business case and scoping through go-live and post-implementation optimisation — one accountable partner across the entire journey." },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function SapGrowPage() {
  const entry = await getContentBySegments(["sap-grow"]);

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          HERO — Sierra teal-primary gradient, Fraunces display type
          ───────────────────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40"
        style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}
      >
        {/* Subtle topo lines for texture */}
        <Decoration className="inset-0 opacity-[0.07]">
          <TopoLines className="h-full w-full" tone="white" />
        </Decoration>
        {/* Soft orb glow — top right, understated */}
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25">
          <OrbCluster className="h-full w-full" variant="sky-emerald" />
        </Decoration>

        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            {/* Eyebrow */}
            <div className="hero-reveal hero-d0">
              <Eyebrow tone="dark">SAP Silver Partner · GROW with SAP</Eyebrow>
            </div>

            {/* display-2xl — matches homepage h1 scale */}
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Cloud ERP for enterprises{" "}
              <em className="font-serif italic font-extralight opacity-90">
                built to grow.
              </em>
            </h1>

            {/* Subtitle */}
            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "38rem" }}>
              Sierra Digital helps growing enterprises implement SAP GROW seamlessly.
              Streamline operations, enhance scalability, and drive innovation with a
              cloud-native ERP tailored for rapid expansion.
            </p>

            {/* CTAs */}
            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore GROW →
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
          STATS — canvas (white)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas" density="compact">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
          <Stat value="200+" label="SAP clients served"       data-delay="0" />
          <Stat value="20+"  label="Years of SAP expertise"   data-delay="100" />
          <Stat value="40+"  label="GROW projects delivered"  data-delay="200" />
          <Stat value="95%"  label="On-time go-live rate"     data-delay="300" />
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
          title="Why growing enterprises outgrow legacy systems."
          subtitle="Fast-growing organisations hit a ceiling with traditional ERP — siloed data, slow deployments, and heavy customisation debt hold them back from their next stage of scale."
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
          FEATURES — canvas (white)
          Cards: left accent bar in primary (teal) = signals "positive gain"
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="GROW capabilities"
          eyebrowTone="primary"
          title="Everything a growing enterprise needs — built in."
          subtitle="SAP GROW delivers a comprehensive, cloud-native ERP foundation with embedded AI, pre-configured best practices, and the scalability to match your ambition."
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
          IMPLEMENTATION APPROACHES — canvas-warm (warmest surface)
          3 cards each visually differentiated by tone
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="warm">
        <SectionHeading
          index="03"
          eyebrow="Our approach"
          eyebrowTone="primary"
          title="Three paths to GROW — we find yours."
          subtitle="Sierra tailors every GROW implementation to your organisation's complexity, timeline, and growth objectives. Standardised where it matters, extended where it counts."
          align="center"
          size="xl"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {APPROACHES.map((a, i) => (
            <div
              key={a.tag}
              className={`will-reveal rounded-3xl border-2 p-8 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 ${a.borderClass}`}
              data-delay={String(i * 100)}
              style={{ background: a.gradient, boxShadow: a.shadow }}
            >
              {/* Coloured accent top bar */}
              <span className={`block h-1 w-10 rounded-full ${a.accentBar}`} />

              {/* Tag pill */}
              <span className={`self-start rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest uppercase ${a.tagClass}`}>
                {a.tag}
              </span>

              {/* Heading — display-md scale */}
              <h3 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
                {a.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{a.body}</p>
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
            title={<>Growth is a journey, <em className="font-serif italic">not a destination.</em></>}
            subtitle="Since 2002 Sierra Digital has guided enterprises through complex transformations. Our dedicated GROW practice combines certified expertise, prebuilt BTP content, and AI-powered accelerators to get you live faster."
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
          title="From scoping to scale — five proven phases."
          subtitle="Sierra's structured GROW methodology ensures rapid, high-quality delivery. Every phase is designed to reduce risk, accelerate value, and set you up for long-term growth."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            { title: "Discovery & Scoping", body: "Understand your business goals, current landscape, and growth targets. Define the GROW scope and confirm a fit-to-standard approach to maximise speed." },
            { title: "Design & Configuration", body: "Configure SAP GROW using pre-built best-practice templates. Define integration points and plan BTP extensions for any industry-specific requirements." },
            { title: "Integration & Extensions", body: "Connect GROW to your wider technology landscape. Build clean, side-by-side BTP extensions that keep the core standard and upgrade-safe." },
            { title: "Testing & Training", body: "Validate all processes through UAT, integration testing, and user acceptance. Ensure your teams are confident and capable before go-live." },
            { title: "Go-Live & Hypercare", body: "Deploy GROW with full hypercare support. Monitor performance, address adoption challenges, and continuously optimise with post-implementation analytics." },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA — Sierra primary teal
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to kickstart your SAP <em className="font-serif italic">GROW?</em></>}
        subtitle="Book a free discovery call with one of our SAP architects. We'll assess your landscape, define the right approach, and show you exactly what a successful GROW implementation looks like."
        primaryLabel="Book a Discovery Call"
        primaryHref="/contact/"
        secondaryLabel="Get in Touch"
        secondaryHref="/contact/"
      />
    </>
  );
}
