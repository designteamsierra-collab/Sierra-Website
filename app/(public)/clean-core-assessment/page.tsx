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
  title: "Clean Core Assessment - Sierra Digital",
  description:
    "Sierra Digital's InFocus Readiness Assessment for Clean Core helps minimize technical debt, plan SAP migrations, and unlock Clean Core-compatible customizations on SAP BTP.",
  alternates: { canonical: "https://sierradigitalinc.com/clean-core-assessment/" },
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

// ── Features (4 items) ────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    d2: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    title: "See a comprehensive display and analysis of custom objects",
    body: "Gain an understanding of custom object counts, segregation, and detailed classification using widgets arranged in the assessment's dashboards.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Identify possibilities for use case-specific enhancements",
    body: "Use the product availability matrix to access Sierra's SAP BTP application library, including apps with GenAI capabilities.",
  },
  {
    icon: "M3 3v18h18M18 9l-5 5-4-4-3 3",
    title: "Score and analyze conversion effort",
    body: "Determine the level of effort required to migrate each object to a Clean Core and which extension is the best fit for the custom object. Analyze custom objects and understand individual object cost and the aggregate cost of migration.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Get recommendations for object migration",
    body: "We recommend transitioning from the current state (As-Is) to the desired state (To-Be) at the object level when redesigning the object in the new S/4HANA system. Additionally, we advise on the most suitable extension for this object and offer code remediation solutions to support Clean Core development, along with recommendations for released objects.",
  },
];

// ── Benefits (5 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Actionable steps to minimize technical debt",
    body: "Get insights into which unused objects can be retired from your system, relieving technical debt and minimizing the effort required for Clean Core conversion.",
  },
  {
    icon: "M18 20V10M12 20V4M6 20v-6",
    title: "Insights you need for accurate budgeting and resource allocation",
    body: "With rough cost and effort estimators, you'll have a clear insight into the resources required for your Clean Core conversion project.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Migration recommendations for vital custom objects",
    body: "Get tailored recommendations and migration strategies for the vital custom objects that your business depends on to keep running smoothly.",
  },
  {
    icon: "M12 2a10 10 0 1 0 0-20 10 10 0 0 1 0 20z",
    title: "Globalized, ever-improving business process templates",
    body: "Enjoy globalized business process templates architected by the experts at SAP for proven success and reliable business value.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Sanctioned, Clean Core compatible customizations on SAP BTP",
    body: "With app extensions built on SAP BTP, you can support unique business processes with customized software, without disturbing your Clean Core. Our Clean Core application has a scoring mechanism, which will give us the list of objects that can possibly be a good candidate for BTP development.",
  },
];

// ── How Sierra Helps (6 items — title-only cards) ─────────────────────────────

const HOW_WE_HELP = [
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Package-wise analysis is displayed by Sierra, to make it simple and easy for understanding the assessment report analysis. We can do analysis by selecting only a specific package of objects as per our requirement.",
  },
  {
    icon: "M3 3v18h18M18 9l-5 5-4-4-3 3",
    title: "The report displays the count of WRICEF Object and its classifications in a single dashboard, giving the user the details of custom objects present in the system.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Drill down flow of Sierra Assessment Report: System -> Package -> object type (Count) -> object -> Object usages (With quick fixes) and released objects.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Scoring is displayed in the report as per Sierra formula, which will decide which objects shall be a good fit for on-stack development, side-by-side extension and remediation.",
  },
  {
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    d2: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    title: "The Sierra assessment report gets the usage of data from a standard assessment report and provides usage analysis of the object type wise and object wise.",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    title: "Sierra Assessment report provides the released object suggestion for the standard objects used inside the custom object, like table, BAPI, FM and class.",
  },
];

// ── Success Stories (2 items) ─────────────────────────────────────────────────

const STORIES = [
  {
    tag: "Healthcare",
    title: "Healthcare Transformation with SAP S/4HANA Cloud",
    body: "This company was founded in 1945 as a small drugstore on Sto. Cristo Street in Binondo, Manila. Over time, they grew to be a leading healthcare organization.",
  },
  {
    tag: "Healthcare",
    title: "Accelerating Healthcare Transformation with SAP S/4HANA",
    body: "This client was established in September 1982 as an important healthcare nonprofit. It is a non-profit organization that supports the research, development, manufacture, and control of pharmaceutical and healthcare products.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CleanCoreAssessmentPage() {
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
              <Eyebrow tone="dark">InFocus · Clean Core Assessment</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Clean Core Assessment —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                simplify, standardize, and future-proof your SAP system.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              SAP Clean Core is an approach that promotes minimizing customizations and relying more
              on standard SAP functionality to maintain a simplified and standardized system.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Clean Core Assessment →
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
          <Stat value="Free"     label="Expert-built readiness assessment"   data-delay="0" />
          <Stat value="4"        label="Feature-rich insight modules"         data-delay="100" />
          <Stat value="Rapid"    label="Non-invasive system analysis"         data-delay="200" />
          <Stat value="Clear"    label="Migration roadmap &amp; cost estimates" data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          SPOTLIGHT — alt
          "Why Clean Core Assessment?" heading outside, card below
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Why Clean Core Assessment?"
          eyebrowTone="primary"
          title="Why Clean Core Assessment?"
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
              Simplified &amp; Standardized SAP Core
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              SAP Clean Core is an approach that promotes minimizing customizations and relying more
              on standard SAP functionality to maintain a simplified and standardized system.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — canvas (white)  ·  4 teal gradient cards in 2-col grid
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Loaded with all the insights you need for effective, cost-efficient migration planning."
          subtitle="The InFocus Readiness Assessment for Clean Core is loaded with all the insights you need for effective, cost-efficient migration planning, enabling you to:"
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
          BENEFITS — alt  ·  5 terracotta gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Real value delivered to your Clean Core conversion project."
          subtitle="The InFocus Readiness Assessment for Clean Core benefits your organization with:"
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
          HOW WE HELP — canvas (white)
          Split: heading + subtitle left, 2-col analysis cards right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="How can Sierra help?"
            eyebrowTone="primary"
            title={<>How can Sierra&apos;s Readiness Assessment help <em className="font-serif italic">Clients?</em></>}
            subtitle="The InFocus Readiness Assessment for Clean Core helps minimize the expense associated with ageing customizations and inevitable system failures, while enabling growth and consistent improvement with guaranteed compatibility to updates from SAP. This tool prepares the organization to implement best-practice-based system architecture, and with our attention to the business processes that your organization relies on, you can trust Sierra to deliver practical business value."
            align="left"
            size="lg"
            bottomGap="tight"
          >
            <Button href="/about-us/" variant="secondary" size="md">
              Read our story →
            </Button>
          </SectionHeading>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {HOW_WE_HELP.map((h, i) => (
              <div
                key={i}
                className="will-reveal rounded-2xl border border-primary-100 p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-200"
                data-delay={String(i * 80)}
                style={{
                  background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)",
                  boxShadow: "0 4px 20px rgba(33,138,163,0.12), 0 1px 4px rgba(33,138,163,0.07)",
                }}
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-700 text-white">
                  <Icon d={h.icon} d2={"d2" in h ? (h as { d2?: string }).d2 : undefined} />
                </div>
                <p className="text-ink-2 text-sm leading-relaxed">{h.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FLYER PROMO — alt compact
          CTA "Flyer" with Download button
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt" density="compact">
        <div className="mx-auto max-w-2xl">
          <div
            className="will-reveal rounded-2xl border border-primary-100 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
              boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
            }}
          >
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
                Flyer
              </p>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                Clean Core Assessment Overview
              </h3>
            </div>
            <Button href="/contact/" variant="secondary" size="md" className="shrink-0">
              Download
            </Button>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          SUCCESS STORIES — warm  ·  2 story cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="warm">
        <SectionHeading
          index="04"
          eyebrow="Success Stories"
          eyebrowTone="primary"
          title="Trusted by healthcare enterprises worldwide."
          align="center"
          size="lg"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {STORIES.map((s, i) => (
            <div
              key={s.title}
              className="will-reveal rounded-3xl border-2 border-primary-200 p-8 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 120)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
                boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
              }}
            >
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <span className="self-start rounded-full bg-primary-100 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-primary-700">
                {s.tag}
              </span>
              <h3 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{s.body}</p>
              <Button href="/success-stories/" variant="secondary" size="sm" className="self-start mt-auto">
                Read More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          Block "Schedule your Assessment..."
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Schedule your Assessment and Start your journey toward a more Agile, Scalable, and <em className="font-serif italic">Secure SAP System.</em></>}
        subtitle="Don't wait—future-proof your business now!"
        primaryLabel="Ask Our Experts"
        primaryHref="/contact/"
        secondaryLabel="Explore Clean Core Assessment"
        secondaryHref="/contact/"
      />
    </>
  );
}
