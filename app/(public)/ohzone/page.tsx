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
  title: "OhZone – Enterprise App Platform & LoB Enhancements",
  description:
    "OhZone by Sierra Digital is a powerful enterprise platform for building, extending and integrating business apps with low-code tools, intelligent automation and seamless integrations.",
  alternates: { canonical: "https://sierradigitalinc.com/ohzone/" },
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

// ── Features (6 items) ────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "Modular App Extensions",
    body: "Extend ERP systems like SAP or other legacy platforms without altering the core, thanks to OhZone's side-by-side extensibility model.",
  },
  {
    icon: "M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    title: "Pre-Built Business Components",
    body: "Accelerate your journey with plug-and-play modules for tasks like invoice processing, leave approvals, or vendor onboarding.",
  },
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Low-Code/No-Code Development",
    body: "Enable cross-functional collaboration with OhZone's intuitive LCNC tools, allowing both business users and developers to co-create solutions.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Unified Integration Framework",
    body: "Ensure seamless data flow between internal systems and third-party apps using powerful APIs and event-driven workflows.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI & Intelligent Automation",
    body: "Incorporate machine learning, smart recommendations, and RPA to automate repetitive processes and make smarter decisions.",
  },
  {
    icon: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
    title: "Cloud-Native Architecture",
    body: "Deploy enhancements across hybrid or multi-cloud environments for agility, scalability, and enterprise-grade security.",
  },
];

// ── Benefits (5 items) ────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Faster Time-to-Impact",
    body: "Quickly roll out targeted apps that resolve operational challenges—without complex core system updates.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Operational Flexibility",
    body: "Easily adapt to market changes, compliance needs, and evolving customer expectations.",
  },
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Optimized Costs",
    body: "Maximize ROI by extending existing systems instead of investing in costly replacements or custom developments.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Enhanced User Engagement",
    body: "Deliver modern, mobile-friendly experiences that boost employee satisfaction and adoption.",
  },
  {
    icon: "M3 3v18h18M18 9l-5 5-4-4-3 3",
    title: "Scalable Innovation",
    body: "Future-proof your technology landscape with extensible solutions that grow with your organization.",
  },
];

// ── Why Sierra differentiators (5 items) ─────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Innovation Strategy & Road Mapping",
    body: "Assess your current digital maturity and identify high-impact enhancement opportunities.",
  },
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Custom App Development",
    body: "Build and deploy secure, scalable OhZone applications that cater to specific business functions.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "OhZone Platform Mastery",
    body: "Leverage OhZone's full suite of low-code tools, automation engines, and AI capabilities for rapid development.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Integration & Data Services",
    body: "Ensure seamless connectivity with your ERP, CRM, and external platforms through secure APIs and integration flows.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Continuous Innovation Support",
    body: "Stay future-ready with ongoing monitoring, optimization, and evolution of your OhZone enhancements.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function OhZonePage() {
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
              <Eyebrow tone="dark">OhZone · Enterprise App Platform &amp; LoB Enhancements</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              OhZone —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                build, extend, and integrate enterprise apps with speed and intelligence.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              OhZone offers a powerful platform for building, extending, and integrating enterprise
              applications with speed and intelligence. Designed to enhance key business
              functions—finance, HR, procurement, operations, and more—OhZone delivers Line of
              Business (LoB) Enhancements that unlock real-time innovation without disrupting your
              existing systems.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore OhZone →
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
          <Stat value="Low-Code"   label="App development tools"              data-delay="0" />
          <Stat value="6+"         label="LoB enhancement modules"            data-delay="100" />
          <Stat value="AI-Powered" label="Intelligent automation"             data-delay="200" />
          <Stat value="Cloud-Native" label="Multi-cloud architecture"         data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY OHZONE — alt
          Heading outside, spotlight card below
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Why OhZone?"
          eyebrowTone="primary"
          title="Why OhZone?"
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
              Enterprise App Innovation
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              OhZone offers a powerful platform for building, extending, and integrating enterprise
              applications with speed and intelligence. Designed to enhance key business
              functions—finance, HR, procurement, operations, and more—OhZone delivers Line of
              Business (LoB) Enhancements that unlock real-time innovation without disrupting your
              existing systems.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — canvas (white)  ·  6 teal gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Key Features"
          eyebrowTone="primary"
          title="Key Features of LoB Enhancements on OhZone."
          subtitle="OhZone equips your teams with the tools to rapidly build scalable, customized enhancements that align perfectly with your business needs."
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
          LCNC SPOTLIGHT — alt
          Block "Business Benefits of OhZone LoB Enhancements"
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Business Benefits of OhZone LoB Enhancements"
          eyebrowTone="primary"
          title="Business Benefits of OhZone LoB Enhancements"
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
              LCNC Acceleration
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              Low Code/No Code App Frameworks, easily tailored to your unique business processes,
              accelerate implementation.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          BENEFITS — canvas (white)  ·  5 terracotta gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="Business Benefits"
          eyebrowTone="accent"
          title="Measurable business value at every stage of transformation."
          subtitle="With OhZone, organizations can transform their digital core through strategic enhancements that deliver measurable business value."
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
          WHY SIERRA — alt
          Split: heading + subtitle left, 2-col differentiator cards right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="Why choose Sierra Digital?"
            eyebrowTone="primary"
            title={<>Your trusted OhZone <em className="font-serif italic">implementation partner.</em></>}
            subtitle="Sierra Digital brings deep expertise in digital transformation and enterprise application enhancement. As an OhZone implementation specialist, we help clients unlock the full potential of their platforms through a proven, strategic approach."
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
          TRANSFORM SPOTLIGHT — canvas (white)
          Block "Transform Business Processes with OhZone"
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          eyebrow="Transform Business Processes with OhZone"
          eyebrowTone="primary"
          title="Transform Business Processes with OhZone"
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
              Innovation at Scale
            </p>
            <p className="text-ink-2 leading-relaxed">
              With OhZone Line of Business Enhancements, your enterprise gains the speed,
              intelligence, and flexibility needed to compete and grow in today&apos;s dynamic
              market. From simplifying workflows to launching new digital experiences, OhZone helps
              you scale transformation across departments—securely and cost-effectively.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a
                href="https://youtu.be/xRrG-oWnb-I?si=xFHW2cwi-6tA0jqG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline break-all hover:text-primary-800 transition-colors"
              >
                https://youtu.be/xRrG-oWnb-I?si=xFHW2cwi-6tA0jqG
              </a>
              <a
                href="https://youtu.be/2q-sRXExp7k?si=4FYbiBvoUPYQFVht"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline break-all hover:text-primary-800 transition-colors"
              >
                https://youtu.be/2q-sRXExp7k?si=4FYbiBvoUPYQFVht
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          Block "Connect Businesses with Cutting-Edge Technologies for Innovation"
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Connect Businesses with Cutting-Edge <em className="font-serif italic">Technologies for Innovation.</em></>}
        subtitle="Don't wait – future-proof your business now!"
        primaryLabel="Ask Our Experts"
        primaryHref="/contact/"
        secondaryLabel="Explore OhZone"
        secondaryHref="/contact/"
      />
    </>
  );
}
