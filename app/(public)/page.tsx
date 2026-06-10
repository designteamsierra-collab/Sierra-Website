import type { Metadata } from "next";
import Image from "next/image";
import { getContentBySegments } from "@/lib/content";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { GradientVisual } from "@/components/ui/GradientVisual";
import { Stat } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Testimonials } from "@/components/ui/Testimonials";
import { TESTIMONIALS } from "@/lib/testimonials";
import {
  Decoration,
  OrbCluster,
  AltitudeScale,
  PeakSilhouette,
} from "@/components/ui/Illustrations";
import { LogoTicker } from "@/components/ui/ClientLogos";

export async function generateMetadata(): Promise<Metadata> {
  const entry = await getContentBySegments([]);
  if (!entry) return {};
  const { frontmatter } = entry;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: frontmatter.canonical },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: frontmatter.canonical,
      images: frontmatter.ogImage ? [frontmatter.ogImage] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.ogImage ? [frontmatter.ogImage] : undefined,
    },
  };
}

// ── Icon helpers ──────────────────────────────────────────────────────────────

function IconRise() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function IconAI() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4Z" /><path d="M9 21v-3M15 21v-3" />
    </svg>
  );
}

function IconClean() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

function IconIntegration() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}

function IconData() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

// ── Use-case cards data ────────────────────────────────────────────────────────

const USE_CASES = [
  {
    image: "/visuals/usecase-qa-visual.png",
    eyebrow: "Ask",
    title: "Natural-language answers on your entire SAP estate",
    body: "Query your landscape in plain English — readiness scores, custom-object inventory, integration dependencies. Sierra's AI grounds every answer in your real system data.",
    href: "/ai-suite/",
  },
  {
    image: "/visuals/usecase-demo-visual.png",
    eyebrow: "Assess",
    title: "Live migration readiness, scored in real time",
    body: "Watch the cockpit grade ECC tables, flag clean-core blockers, and project your RISE timeline — turning a months-long assessment into minutes.",
    href: "/clean-core-assessment/",
  },
  {
    image: "/visuals/usecase-onboarding-visual.png",
    eyebrow: "Act",
    title: "Guided clean-core remediation, step by step",
    body: "From flagged Z-objects to a sequenced remediation plan with owners and effort estimates — the cockpit walks your team through every move.",
    href: "/clean-core/",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const entry = await getContentBySegments([]);

  return (
    <>
      {entry?.frontmatter.jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry.frontmatter.jsonLd) }}
        />
      ) : null}

      {/* Hero — handhold particle ribbon, centered serif headline */}
      <Hero
        ribbon
        eyebrow="SAP Silver Partner · BTP & AI Innovation Station"
        eyebrowTone="primary"
        title={
          <>
            Transform your enterprise <em className="font-serif italic">with SAP &amp; AI.</em>
          </>
        }
        subtitle="End-to-end SAP digital transformation — from RISE migrations and clean-core modernisation to AI-powered automation and real-time analytics."
        actions={
          <>
            <Button href="/sap-rise/" size="lg">Explore SAP RISE</Button>
            <Button href="/rise-cockpit/request-access/" variant="secondary" size="lg">
              Try the AI Cockpit →
            </Button>
          </>
        }
        trust={
          <div className="flex w-full flex-col items-center gap-6">
            <p className="text-muted text-[11px] font-semibold uppercase tracking-[0.18em]">
              Trusted across energy, healthcare, retail &amp; the public sector
            </p>
            <LogoTicker />
          </div>
        }
      />

      {/* Stats strip */}
      <Section tone="canvas" density="compact" className="relative">
        <Decoration className="-left-4 top-1/2 hidden h-48 -translate-y-1/2 lg:block">
          <AltitudeScale className="h-full w-auto" tone="muted" />
        </Decoration>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
          <Stat value="200+" label="Enterprise clients" data-delay="0" />
          <Stat value="15+" label="Years on SAP" data-delay="100" />
          <Stat value="30+" label="Industry verticals" data-delay="200" />
          <Stat value="98%" label="On-time delivery" data-delay="300" />
        </div>
      </Section>

      {/* Use-case visual cards — handhold's grainy color-coded panels */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="The AI RISE Cockpit"
          eyebrowTone="primary"
          title="One co-pilot for the whole transformation."
          subtitle="Ask, assess, act — Sierra's AI cockpit guides SAP teams from first question to clean-core go-live."
          align="center"
          size="xl"
        />
        <div className="flex flex-col gap-16 sm:gap-24">
          {USE_CASES.map((uc, i) => (
            <div
              key={uc.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`will-reveal ${i % 2 === 1 ? "lg:order-2" : ""}`}
                data-delay="100"
              >
                {/* aspect-square crop + slight scale clips the PNG's dark
                    corner ring so only the grainy card shows */}
                <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-sm">
                  <Image
                    src={uc.image}
                    alt={uc.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="scale-[1.08] object-cover"
                  />
                </div>
              </div>
              <div className={`flex flex-col gap-4 will-reveal ${i % 2 === 1 ? "lg:order-1" : ""}`} data-delay="150">
                <span className="text-muted font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
                  {uc.eyebrow}
                </span>
                <h3 className="font-display text-ink text-3xl font-light leading-tight tracking-tight text-balance sm:text-4xl">
                  {uc.title}
                </h3>
                <p className="text-ink-2 text-lg leading-relaxed">{uc.body}</p>
                <div className="mt-2">
                  <Button href={uc.href} variant="secondary" size="md">
                    Learn more →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Solutions feature grid */}
      <Section tone="alt" className="relative overflow-hidden">
        <Decoration className="top-20 -right-40 h-[440px] w-[440px] opacity-50">
          <OrbCluster className="h-full w-full" variant="violet-blue" />
        </Decoration>
        <SectionHeading
          index="02"
          eyebrow="Our solutions"
          eyebrowTone="primary"
          title="Everything you need to modernise on SAP."
          subtitle="From cloud migration to AI-driven insights — Sierra covers the full transformation lifecycle."
          align="center"
          size="xl"
        />
        <FeatureGrid
          columns={3}
          size="feature"
          items={[
            { icon: <IconRise />, title: "SAP RISE & GROW", body: "Move to SAP S/4HANA Cloud with a proven, low-risk migration path. We handle every phase from assessment to go-live.", href: "/sap-rise/", hrefLabel: "Explore RISE" },
            { icon: <IconAI />, title: "AI Enhancement", body: "Layer generative AI and intelligent automation on top of your SAP landscape — from Joule to custom LLM integrations.", href: "/ai-enhancement/", hrefLabel: "See AI capabilities" },
            { icon: <IconClean />, title: "Clean Core", body: "Eliminate technical debt, reduce upgrade risk, and unlock cloud-first extensibility with our clean-core methodology.", href: "/clean-core/", hrefLabel: "Learn about Clean Core" },
            { icon: <IconIntegration />, title: "Integration", body: "Connect SAP to your broader ecosystem using SAP Integration Suite, API management, and event-driven architecture.", href: "/integration/", hrefLabel: "Integration services" },
            { icon: <IconData />, title: "Data & Analytics", body: "Unlock actionable insights with SAP Analytics Cloud, Datasphere, and Databricks — all in a unified data fabric.", href: "/sap-analytics-cloud/", hrefLabel: "Data solutions" },
            { icon: <IconCloud />, title: "Azure Cloud Migration", body: "Accelerate your move to Azure with BlueSky — Sierra's structured cloud migration framework for SAP workloads.", href: "/azure-cloud-migration-bluesky/", hrefLabel: "Cloud migration" },
          ]}
        />
      </Section>

      {/* Get started — dashboard mockup */}
      <Section tone="canvas">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col">
            <SectionHeading
              index="03"
              eyebrow="Get started in weeks, not years"
              eyebrowTone="accent"
              title={<>From assessment to action in a single <em className="font-serif italic">workspace.</em></>}
              subtitle="Connect your SAP sources, let the cockpit map your landscape, and hand your team a sequenced plan — no spreadsheets, no guesswork."
              align="left"
              size="lg"
              bottomGap="tight"
            />
            <div className="mt-8 flex flex-wrap gap-3 will-reveal" data-delay="300">
              <Button href="/rise-cockpit/request-access/" size="lg">Request access</Button>
            </div>
          </div>
          <div className="will-reveal animate-float-slow" data-delay="200">
            <GradientVisual accent="teal-pink" grain className="p-6 sm:p-8">
              {/* Connected sources */}
              <div className="mb-4 rounded-2xl border border-white/[0.09] bg-white/[0.06] p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">
                    Connected SAP sources
                  </span>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                    Synced
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "ECC Production · ABAP", pct: "100%" },
                    { label: "S/4HANA Sandbox", pct: "100%" },
                    { label: "SAP BTP · Integration Suite", pct: "82%" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between text-xs">
                      <span className="text-white/75">{s.label}</span>
                      <span className="font-semibold text-cyan-400">{s.pct}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Readiness + plan */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[0.09] bg-white/[0.06] p-4">
                  <div className="font-display text-3xl font-light text-white">74%</div>
                  <div className="mt-1 text-xs text-white/45">RISE readiness</div>
                </div>
                <div className="rounded-2xl border border-white/[0.09] bg-white/[0.06] p-4">
                  <div className="font-display text-3xl font-light text-white">38</div>
                  <div className="mt-1 text-xs text-white/45">Clean-core actions</div>
                </div>
              </div>

              {/* Sequenced plan row */}
              <div className="mt-3 rounded-2xl border border-white/[0.09] bg-white/[0.06] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 animate-glow-pulse rounded-full bg-violet-400" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">
                    Sequenced plan
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/75">
                  Phase 1 · Remediate 12 custom Z-reports → SAC. Owner: BI team · Est. 3 weeks.
                </p>
              </div>
            </GradientVisual>
          </div>
        </div>
      </Section>

      {/* The Sierra story — mountain motif */}
      <Section tone="warm" className="relative overflow-hidden">
        <Decoration className="-top-20 -left-20 h-96 w-96 opacity-40">
          <OrbCluster className="h-full w-full" variant="amber-pink" />
        </Decoration>
        <div className="relative grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="relative h-72 sm:h-96">
            <PeakSilhouette className="absolute inset-0 h-full w-full" tone="ink" />
          </div>
          <SectionHeading
            index="04"
            eyebrow="Our story"
            eyebrowTone="muted"
            title={<>Altitude is an <em className="font-serif italic">attitude.</em></>}
            subtitle="Founded in 2002, Sierra Digital draws its name and ethos from the mountain ranges that inspired our founder Senthil Kumar. We help enterprises reach higher — turning legacy SAP investments into the platform for what's next."
            align="left"
            size="lg"
            bottomGap="tight"
          >
            <Button href="/about-us/" variant="secondary" size="md">
              Read our story →
            </Button>
          </SectionHeading>
        </div>
      </Section>

      {/* Testimonials with avatars */}
      <Section tone="canvas">
        <SectionHeading
          index="05"
          eyebrow="What clients say"
          eyebrowTone="primary"
          title="Trusted by enterprise SAP teams worldwide."
          align="center"
          size="lg"
        />
        <Testimonials items={TESTIMONIALS.slice(0, 3)} />
      </Section>

      {/* Industries pill cloud */}
      <Section tone="alt" density="compact" className="relative">
        <SectionHeading
          index="06"
          eyebrow="Industries we serve"
          eyebrowTone="muted"
          title="Deep vertical expertise across 30+ industries."
          align="center"
          size="md"
          bottomGap="tight"
        />
        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            "Energy & Natural Resources", "Oil & Gas / Midstream", "Healthcare", "Aerospace & Defense",
            "Consumer Packaged Goods", "Chemicals", "Public Sector", "High Tech", "Retail",
            "Professional Services", "Agriculture", "Utilities", "Wholesale Distribution",
          ].map((industry, i) => (
            <span
              key={industry}
              className="border-line bg-canvas text-ink-2 rounded-full border px-4 py-2 text-sm font-medium will-reveal fade-only transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:text-ink"
              data-delay={String(Math.min(i * 30, 360))}
            >
              {industry}
            </span>
          ))}
        </div>
      </Section>

      {/* Reaching-hands CTA */}
      <HandsCTA
        eyebrow="Let's talk"
        title={<>Ready to start your SAP <em className="font-serif italic">transformation?</em></>}
        subtitle="Book a free discovery call with one of our SAP architects — no obligation, no slide decks."
        primaryLabel="Book a discovery call"
        primaryHref="/contact/"
        secondaryLabel="Try RISE Cockpit"
        secondaryHref="/rise-cockpit/request-access/"
      />
    </>
  );
}
