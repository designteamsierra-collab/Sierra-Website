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
  title: "SAP-Powered AI Suite for Digital Transformation | Sierra Digital",
  description:
    "Accelerate enterprise innovation with Sierra's AI suite for SAP BTP—ready-to-deploy AI solutions, AI-powered digital adoption, and enterprise-grade AI security for scalable SAP transformation.",
  alternates: { canonical: "https://sierradigitalinc.com/ai-suite/" },
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

// ── AI Suite pillars (from FeatureRow content) ─────────────────────────────────

const PILLARS = [
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Data Foundation",
    body: "Data is the bedrock of any AI implementation. Sierra brings deep expertise in master data governance, data migration and transformation, as well as decades long experience with deployment and optimization. Furthermore, if AI is a rocket ship, SAP's BDC is a powerful launchpad, and Sierra can get your data there. All this means that you can finally leverage your enterprise data, wherever it might be, to power your AI aspirations. 'Data for every decision'.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Ready-to-Deploy AI Solutions",
    body: "With AI-optimized data, Sierra can unlock a growing, extensible suite of ready to deploy AI solutions across a range of enterprise functions. From industry specific use cases like AFE Automation and Upstream Payout Automation, to the entire gamut of Source-to-Contract and Procure-to Pay, we have them all.",
  },
  {
    icon: "M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4zM9 21v-3M15 21v-3",
    title: "AI-Powered Digital Adoption",
    body: "With SAP WalkMe, Sierra brings users a powerful copilot – the world's leading digital adoption platform. It makes users the stewards of data and IP. It shows users the next best action across any web app and any workflow, so teams and departments of all shapes and sizes can unlock the full capability of their solutions to boost productivity.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Robust Enterprise AI Security",
    body: "Across IT and OT, Sierra ensures that an undercurrent of enterprise security runs through all organizational workflows. An AI security agent orchestrates a range of modules across user and asset security, data security, and sensitive OT security. Modules include single sign on, role based access, asset management, security awareness training, detection, remediation, data loss prevention, exception handling, and much more.",
  },
];

// ── Challenges in Enterprise AI ───────────────────────────────────────────────

const CHALLENGES = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "AI is a Moving Target",
    body: "CIOs are under constant pressure to track the accelerating capabilities of AI. The catch is, what AI is capable of today, might be rendered obsolete in six months. And what AI promises today, might never come to pass.",
  },
  {
    icon: "M4 6h16M4 10h16M4 14h10",
    title: "Problem of Plenty",
    body: "There are supposedly specialist AI companies for every little part of every work flow. This has made it a nightmare to lock down an AI strategy. Over 65% of sales conversations end in 'no decision'.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Data, the Elephant in the Room",
    body: "Intuitively and empirically, enterprises realize that the vast trove of organizational data is nowhere near ready for meaningful AI deployment. This important pre-requisite is often smoothed over by companies pitching shiny AI tools.",
  },
  {
    icon: "M18 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    d2: "m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98",
    title: "No One-Stop AI Shop",
    body: "There are few unified platform that can help enterprises realize their AI aspirations end-to-end. This makes for a fragmented AI approach that skews implementation cycles, ROI, and crucially, security.",
  },
  {
    icon: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01",
    title: "Vulnerability Backlog",
    body: "In the absence of a security framework that also accounts for AI infusions, the backlog of threats and vulnerabilities multiplies, potentially paralyzing operations and enterprise innovation.",
  },
];

// ── Why Sierra differentiators ────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M12 8v4l3 3M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z",
    title: "20-Year SAP Partnership",
    body: "Deep SAP expertise combined with exclusive early access to SAP's AI ecosystem — so your transformation is backed by both proven experience and cutting-edge innovation.",
  },
  {
    icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
    title: "End-to-End AI Coverage",
    body: "From data foundation and ready-to-deploy solutions through digital adoption and enterprise security — one integrated AI suite across every layer of your SAP landscape.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Ready-to-Deploy Speed",
    body: "Sierra's growing library of pre-built AI use cases gets value into your hands in weeks — no lengthy build cycles, no fragmented vendor management.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Enterprise-Grade Security",
    body: "AI security runs as an undercurrent through every implementation. Sierra's security framework covers IT, OT, data loss prevention, access control, and threat remediation from day one.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiSuitePage() {
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
              <Eyebrow tone="dark">SAP BTP · End-to-End Enterprise AI</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Sierra&apos;s AI Suite —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                supercharged.
              </em>
            </h1>

            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}>
              Sierra&apos;s 20-year SAP partnership just got supercharged with AI. With exclusive
              early access to the formidable ecosystem of AI capabilities, Sierra has put together
              an End-to-End Enterprise AI suite across data, road-ready AI use cases, accelerated
              digital adoption, and robust security.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore the AI Suite →
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
          <Stat value="20+"  label="Years of SAP partnership"       data-delay="0" />
          <Stat value="200+" label="Enterprise clients served"       data-delay="100" />
          <Stat value="4"    label="AI suite pillars"                data-delay="200" />
          <Stat value="∞"    label="Extensible use cases"            data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          AI SUITE PILLARS — canvas-2 (alt)
          Four teal gradient cards — Sierra's end-to-end AI capability
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="Sierra's AI Suite"
          eyebrowTone="primary"
          title="Here's why Sierra is the ideal partner for your AI aspirations."
          subtitle="Sierra has assembled an End-to-End Enterprise AI suite built on SAP's ecosystem — covering every layer from data foundations to security."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="will-reveal rounded-2xl border border-primary-100 p-8 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 80)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700">
                  <Icon d={p.icon} />
                </span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CHALLENGES — canvas (white)
          Terracotta gradient cards — real enterprise AI problems
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="Enterprise AI challenges"
          eyebrowTone="accent"
          title="Challenges in Enterprise AI."
          subtitle="In the context of these challenges with enterprise AI, a cohesive ecosystem of formidable tools and strategic integrations is the only path forward."
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
          SAP AI VISION — canvas-warm
          Heading outside card, relevant eyebrow inside (SAC Dashboards pattern)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="warm">
        <SectionHeading
          eyebrow="Manifesting SAP's AI Vision"
          eyebrowTone="primary"
          title="A cohesive ecosystem of formidable tools for ambitious AI goals."
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
              Enterprise AI Roadmap
            </p>
            <p className="text-ink-2 leading-relaxed">
              In the context of the challenges with enterprise AI, SAP&apos;s AI vision is a cohesive
              ecosystem of formidable tools and strategic integrations that allow organizations to
              embark on ambitious AI goals along a scalable, secure, and centralized roadmap.
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
            index="03"
            eyebrow="Why Sierra Digital"
            eyebrowTone="primary"
            title={<>Don&apos;t wait — <em className="font-serif italic">future-proof now.</em></>}
            subtitle="Connect your business with cutting-edge AI technologies for innovation. Sierra's 20-year SAP partnership, exclusive AI ecosystem access, and end-to-end suite make us the one partner you need for your entire AI journey."
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
          index="04"
          eyebrow="Our process"
          eyebrowTone="primary"
          title="From data to decisions — four AI journey phases."
          subtitle="Sierra's structured AI Suite methodology follows SAP's scalable, secure, and centralized roadmap — so your AI ambitions become reality without the fragmentation."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            { title: "AI Readiness Assessment", body: "Evaluate your data foundations, existing SAP landscape, and organizational readiness. Identify AI opportunities and map them to Sierra's ready-to-deploy use case library." },
            { title: "Data Foundation", body: "Establish master data governance, execute data migration and transformation using SAP BDC as your launchpad. Ensure your enterprise data is wherever it needs to be to power AI — 'Data for every decision'." },
            { title: "AI Solution Deployment", body: "Deploy pre-built AI solutions from Sierra's extensible library — industry-specific use cases like AFE Automation, Upstream Payout, Source-to-Contract, and Procure-to-Pay, live in weeks." },
            { title: "Digital Adoption with WalkMe", body: "Drive adoption with SAP WalkMe — the world's leading digital adoption platform. Guide users through next-best actions across every workflow so teams unlock the full capability of their AI solutions." },
            { title: "Security & Continuous Optimization", body: "Apply Sierra's AI security framework across IT and OT — covering SSO, RBAC, asset management, data loss prevention, and threat remediation. Continuously monitor and optimize as AI capabilities evolve." },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation. Connect your business with cutting-edge AI technologies for innovation — don't wait, future-proof your business now!"
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Explore the AI Suite"
        secondaryHref="/contact/"
      />
    </>
  );
}
