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
  title: "Digital Solutions for Energy, Oil & Gas Industry | Sierra Digital",
  description:
    "Accelerate digital transformation in the energy and oil & gas industry with Sierra Digital. Optimize operations, ensure compliance, and unlock data-driven insights.",
  alternates: { canonical: "https://sierradigitalinc.com/energy-and-natural-resources/" },
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

// ── Energy Solutions (5 teal cards — from FeatureRows) ────────────────────────

const SOLUTIONS = [
  {
    icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
    title: "Leverage Predictive Analytics",
    body: "Integrate SAP Analytics Cloud for Planning to access industry-leading predictive analytics, enhancing decision-making capabilities.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    title: "Provide Self-Service Access",
    body: "Offer a portal for self-service access to well-owner data, including contact information, checking details, 1099s, and other vital data, reducing lengthy support processes.",
  },
  {
    icon: "M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z",
    title: "Streamline PRA Interfaces",
    body: "Manage and analyze key PRA data through functions like Venture Distribution Analysis, Combined Run Analysis, and Ownership Transfer Analysis, supported by dashboards for Escheat Analytics and Collection Revenue.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Utilize Volumetric Analytics",
    body: "Manage exceptions in volume data across Well Completions (WCs) and Meter Points (MPs) using analytics tools from SAP Analytics Cloud.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Ensure Regulatory Compliance",
    body: "Perform federal and state reporting analysis, multi-period reporting, variance analysis, and more to meet regulatory requirements.",
  },
];

// ── Benefits (5 terracotta cards) ─────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Enhanced Operational Efficiency",
    body: "Streamline processes and optimize resource allocation to improve overall efficiency.",
  },
  {
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Cost Reduction",
    body: "Implement predictive maintenance and automation to reduce operational costs and enhance profitability.",
  },
  {
    icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
    title: "Improved Decision-Making",
    body: "Leverage advanced analytics and data-driven insights to inform strategic decisions and drive business growth.",
  },
  {
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    title: "Increased Customer Satisfaction",
    body: "Provide personalized experiences through digital platforms, enhancing customer engagement and loyalty.",
  },
  {
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    title: "Regulatory Compliance",
    body: "Ensure adherence to regulatory requirements through streamlined reporting and analysis tools.",
  },
];

// ── Why Choose Sierra Digital (5 diff cards) ─────────────────────────────────

const WHY_SIERRA = [
  {
    icon: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12",
    title: "Deep Industry Expertise",
    body: "Extensive experience in serving the Oil & Gas sector.",
  },
  {
    icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z",
    title: "Tailored Solutions",
    body: "Customized approaches that align with unique industry needs.",
  },
  {
    icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
    title: "Cutting-Edge Technology",
    body: "Expertise in AI, automation, and cloud technologies.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Collaborative Partnership",
    body: "Working closely with clients to achieve their goals.",
  },
  {
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Proven Results",
    body: "Demonstrated success in delivering tangible value to energy companies.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EnergyAndNaturalResourcesPage() {
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
              <Eyebrow tone="dark">Energy &amp; Natural Resources · Oil &amp; Gas Digital Solutions</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Energy &amp; Natural Resources{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Digital Transformation.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              The future of Oil &amp; Gas is bright. Driven by intelligence, it&apos;s smarter,
              safer, and packed with innovation opportunity enabled by Digital Transformation.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Ask Our Expert
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Solutions →
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
          <Stat value="Clean Core"  label="SAP-sponsored readiness assessment for migration"  data-delay="0" />
          <Stat value="AI-Driven"   label="Predictive analytics for Oil & Gas operations"     data-delay="100" />
          <Stat value="5 Sectors"   label="Energy, Oil & Gas, Chemicals, Agriculture & more"  data-delay="200" />
          <Stat value="Digital"     label="End-to-end transformation of energy operations"    data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          ENERGY SOLUTIONS 01 — alt  ·  5 teal cards (from FeatureRows)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="Energy, Oil &amp; Gas Solutions"
          eyebrowTone="primary"
          title="Energy, Oil &amp; Gas Solutions"
          subtitle="Sierra Digital makes Clean Core easy with the InFocus Readiness Assessment for Clean Core, an SAP-sponsored, gold-standard tool that aids and accelerates migration planning."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <div
              key={s.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 70, 400))}
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
          BENEFITS 02 — canvas (white)  ·  5 terracotta cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Benefits for Energy, Oil &amp; Gas Industries"
          subtitle="Our solutions deliver significant benefits to energy, oil, and gas companies, including:"
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="will-reveal rounded-2xl border border-accent-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 70, 400))}
              style={{
                background: "linear-gradient(145deg, #fff5ed 0%, #ffe7d4 55%, #ffcaa8 100%)",
                boxShadow: "0 4px 20px rgba(244,78,18,0.10), 0 1px 4px rgba(244,78,18,0.06)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-accent-500 shrink-0" />
                <span className="text-accent-600"><Icon d={b.icon} /></span>
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
          VALUED CLIENTS — alt
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt" density="compact">
        <div className="text-center mb-8">
          <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono mb-2">
            Valued Clients In Oil &amp; Gas
          </p>
          <p className="text-ink-2 text-sm">
            Sierra Digital serves Oil &amp; Gas enterprises all over the world. Here are just a few
            of the clients we&apos;ve served recently.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["Continental", "Andeavor", "ExxonMobil", "Par Pacific", "HollyFrontier"].map((name) => (
            <span
              key={name}
              className="rounded-xl border border-primary-200 bg-white px-6 py-3 text-sm font-semibold text-ink-2 shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY CHOOSE SIERRA DIGITAL 03 — canvas (white)  ·  5 diff cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
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
          SUCCESS STORIES 04 — alt  ·  3 Block spotlights
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Success Stories"
          eyebrowTone="primary"
          title="Success Stories"
          align="center"
          size="xl"
        />

        <div className="flex flex-col gap-6 mx-auto max-w-4xl">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              The BTP-Based Owner Relations Portal
            </p>
            <p className="text-ink-2 leading-relaxed">
              This client is a leading shale oil and gas producer, one of the largest in the
              deepwater Gulf of Mexico and a key natural gas producer and supplier to Peninsular
              Malaysia and Thailand. The company is also engaged in exploration and appraisal
              activities offshore Guyana, participating in one of the industry&apos;s largest oil
              discoveries in the past decade.
            </p>
          </div>

          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            data-delay="100"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Streamlining Owner Relations Portal with a Self-Service Portal
            </p>
            <p className="text-ink-2 leading-relaxed">
              This client is one of the largest and most diversified midstream energy companies in
              North America. With approximately 90,000 miles of pipelines and associated energy
              infrastructure across 38 states and Canada, this client transports the oil and gas
              products that energize millions of lives. Success has led this client to embrace
              digital transformation in recent years as for distinctive business advantage.
            </p>
          </div>

          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            data-delay="200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Solution Is Scalable and Clean Core Compliant
            </p>
            <p className="text-ink-2 leading-relaxed">
              This client is committed to the efficient and effective exploration and production of
              oil and natural gas. Producing oil and natural gas and getting them to market takes
              ingenuity, technology and investment. Their innovative, collaborative efforts yield
              products that improve quality of life globally while producing economic benefits with
              far-reaching influence.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Transform your energy operations"
        title={
          <>
            Ready to Transform your{" "}
            <em className="font-serif italic">Energy Operations?</em>
          </>
        }
        subtitle="Contact us today to learn how Sierra Digital can help you achieve your goals."
        primaryLabel="Ask Our Expert"
        primaryHref="/contact/"
        secondaryLabel="Explore Solutions"
        secondaryHref="/contact/"
      />
    </>
  );
}
