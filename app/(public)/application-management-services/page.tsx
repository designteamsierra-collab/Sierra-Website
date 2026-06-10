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
  title: "Application Managed Services (AMS) - Sierra Digital",
  description:
    "Reliable Application Managed Services to optimize performance, reduce IT costs, and support business application management at scale.",
  alternates: { canonical: "https://sierradigitalinc.com/application-management-services/" },
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

// ── Our Managed Services Offerings (3 FeatureRow items → teal cards) ──────────

const OFFERINGS = [
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Technical Maintenance & Optimization",
    body: "Our proactive monitoring and support ensure high system availability, rapid issue resolution, and ongoing performance tuning to keep your SAP applications running at peak efficiency.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Functional Support & Enhancements",
    body: "We align functionalities with evolving business needs, assisting with system configurations, process optimizations, and enhancements for improved operational agility.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Basis Administration",
    body: "Our team manages system upgrades, patching, security protocols, and user administration to ensure your environment remains robust, compliant, and well-integrated.",
  },
];

// ── Key Benefits (4 terracotta cards) ────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Cost Efficiency",
    body: "Our Managed Services solutions reduce the burden on internal IT teams, optimizing resources and minimizing costs with flexible pricing models tailored to your needs.",
  },
  {
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
    title: "24/7 Global Support",
    body: "With a worldwide network of support centers, our experts provide round-the-clock assistance, ensuring uninterrupted business operations.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Certified Expertise",
    body: "As an certified partner, we deliver high-quality support, leveraging industry best practices and the latest innovations.",
  },
  {
    icon: "M4 8h16M4 16h16M2 12h20",
    title: "Scalability & Innovation",
    body: "Whether you need assistance for routine support or large-scale digital transformation projects, we provide scalable solutions that integrate emerging technologies like AI, cloud computing, and analytics.",
  },
];

// ── Support Models (4 teal cards) ────────────────────────────────────────────

const SUPPORT_MODELS = [
  {
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    title: "End-to-End Managed Support",
    body: "End-to-end support where we oversee system health, maintenance, and continuous improvements to enhance business performance.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "On-Demand Assistance",
    body: "Flexible engagement for organizations needing specialized SAP support on a project or as-needed basis.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Staff Augmentation",
    body: "Access to highly skilled consultants who seamlessly integrate with your existing team to provide additional expertise and support.",
  },
  {
    icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
    title: "Optimized User Experience",
    body: "Our custom self-service portals have empowered businesses to enhance customer and vendor interactions through seamless digital experiences.",
  },
];

// ── Our Approach — Process Steps (4 diff cards) ───────────────────────────────

const PROCESS_STEPS = [
  {
    step: "01",
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2",
    title: "Assessment & Planning",
    body: "We analyze your existing environment and define a strategic roadmap tailored to your objectives.",
  },
  {
    step: "02",
    icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3",
    title: "Seamless Implementation",
    body: "Our team integrates Managed Services without disrupting your business operations, ensuring smooth adoption.",
  },
  {
    step: "03",
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Ongoing Optimization",
    body: "We continuously enhance system performance, implementing new capabilities and process improvements.",
  },
  {
    step: "04",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Innovation & Growth",
    body: "Through emerging technologies and automation, we future-proof your investments for sustained success.",
  },
];

// ── Why Choose Sierra Digital (5 diff cards) ─────────────────────────────────

const WHY_SIERRA = [
  {
    icon: "M22 10v6M2 10l10-5 10 5-10 5z",
    title: "Proven Expertise",
    body: "With extensive experience across diverse applications, we bring in-depth knowledge and technical excellence to every engagement.",
  },
  {
    icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z",
    title: "Industry-Specific Solutions",
    body: "Our Managed Services are tailored to meet the unique demands of various sectors, including manufacturing, energy, logistics, and finance.",
  },
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Strategic Partnership",
    body: "As a trusted partner, we stay ahead of evolving technologies, ensuring that our clients benefit from the latest innovations.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Commitment to Security & Compliance",
    body: "We adhere to global security standards and best practices, ensuring data integrity and regulatory compliance.",
  },
  {
    icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
    title: "Flexible Engagement Models",
    body: "Whether you require full-scale Managed Services or occasional application, functional, IT expertise, we offer customized solutions that align with your business goals.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ApplicationManagementServicesPage() {
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
              <Eyebrow tone="dark">Application Managed Services · AMS</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Application Management{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Services.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Sierra Digital offers Managed Services tailored to ensure seamless operations,
              enhanced efficiency, and long-term business success for your SAP application
              landscape.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Get Started
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Managed Services →
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
          <Stat value="24/7"       label="Global support centers worldwide"          data-delay="0" />
          <Stat value="AMS"        label="Application managed services at scale"     data-delay="100" />
          <Stat value="Certified"  label="SAP-certified partner &amp; consultants"   data-delay="200" />
          <Stat value="End-to-End" label="From assessment to ongoing optimization"   data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          OUR MANAGED SERVICES OFFERINGS — alt
          Heading outside · spotlight card with Lead · 3 offering teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Our Managed Services Offerings"
          eyebrowTone="primary"
          title="Our Managed Services Offerings"
          subtitle="In an evolving digital landscape, SAP applications serve as the backbone of many enterprises. Managing these complex systems effectively requires continuous monitoring, optimization, and strategic enhancements."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {OFFERINGS.map((o, i) => (
            <div
              key={o.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 100)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={o.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {o.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          KEY BENEFITS 01 — canvas (white)  ·  4 terracotta cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Key Benefits"
          eyebrowTone="accent"
          title="Key Benefits of Choosing Sierra Digital"
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="will-reveal rounded-2xl border border-accent-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 80)}
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
          SUPPORT MODELS 02 — alt  ·  4 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Support Models"
          eyebrowTone="primary"
          title="Our Managed Services Support Models"
          subtitle="SAP BTP enables the rapid development of custom applications, extensions, and services to meet specific business needs."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SUPPORT_MODELS.map((s, i) => (
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
          OUR APPROACH 03 — canvas (white)  ·  4 numbered process diff cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
          eyebrow="Our Approach"
          eyebrowTone="primary"
          title="Our Approach to Managed Services Delivery"
          subtitle="Our custom self-service portals have empowered businesses to enhance customer and vendor interactions through seamless digital experiences."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 80)}
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
          WHY CHOOSE SIERRA DIGITAL 04 — alt
          5 diff cards + closing spotlight
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

        {/* Closing spotlight — Block "Let Sierra Digital help you Simplify and Optimize" */}
        <div className="mt-6 mx-auto max-w-4xl">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Let Sierra Digital help you Simplify and Optimize your Environment
            </p>
            <p className="text-ink-2 leading-relaxed">
              Partner with us to drive efficiency and success through expert solutions and
              innovation.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
        secondaryLabel="Explore Managed Services"
        secondaryHref="/contact/"
      />
    </>
  );
}
