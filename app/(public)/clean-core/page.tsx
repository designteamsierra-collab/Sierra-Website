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
  title: "Clean Core SAP Strategy & S/4HANA Transformation | Sierra Digital",
  description:
    "Implement Clean Core SAP with S/4HANA and SAP BTP. Sierra Digital delivers Clean Core Assessment, analysis, and transformation services.",
  alternates: { canonical: "https://sierradigitalinc.com/clean-core/" },
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

// ── What is Clean Core — pillars (from FeatureRow content) ────────────────────

const PILLARS = [
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Ensure System Stability",
    body: "Avoid the risks associated with overly customized systems that can become difficult to manage and upgrade. Clean Core keeps the system stable, up-to-date, and ready for future enhancements.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Achieve Flexibility and Scalability",
    body: "By using standard SAP solutions and leveraging the latest SAP innovations, businesses can easily scale their systems to meet changing demands and business growth.",
  },
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Reduce Total Cost of Ownership (TCO)",
    body: "Clean Core helps businesses minimize ongoing maintenance costs, improve system performance, and reduce reliance on legacy custom code, ensuring better long-term ROI.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Increase Agility",
    body: "With a Clean Core, businesses can more quickly implement new SAP solutions, upgrades, and innovations, enabling them to stay ahead of industry trends and technological advancements.",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z",
    title: "Streamline Compliance and Security",
    body: "Clean Core ensures that SAP's security and compliance features are fully leveraged, reducing risks related to outdated customizations and ensuring your system remains compliant with global regulations.",
  },
];

// ── Sierra partner capabilities (first CardGrid) ──────────────────────────────

const CAPABILITIES = [
  {
    icon: "M22 10v6M2 10l10-5 10 5-10 5z",
    d2: "M6 12v5c3 3 9 3 12 0v-5",
    title: "Deep SAP Expertise",
    body: "With years of experience in SAP implementation and optimization, our team is equipped to guide you through the entire Clean Core transformation process. We work closely with your organization to ensure that your Clean Core strategy aligns with your business objectives and long-term vision.",
  },
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 1 2 2",
    d2: "M9 12l2 2 4-4",
    title: "Comprehensive Planning and Execution",
    body: "Sierra Digital takes a structured approach to Clean Core implementation. From initial assessment and design to deployment and optimization, we ensure that your SAP system is optimized for simplicity, efficiency, and future growth. We help you identify opportunities to eliminate unnecessary customizations and optimize your existing SAP landscape.",
  },
  {
    icon: "M5 12h14M12 5l7 7-7 7",
    title: "Seamless Migration to SAP S/4HANA",
    body: "Transitioning to SAP S/4HANA is a key component of a Clean Core strategy. Sierra Digital has extensive experience in migrating businesses from legacy systems to SAP S/4HANA, ensuring a smooth and efficient migration process with minimal disruption to your operations.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Best Practices for Innovation",
    body: "Clean Core doesn't mean eliminating customization entirely — it's about using the right tools for innovation. Our team helps you implement best-in-class solutions, whether it's SAP Fiori for modern user interfaces, SAP Cloud Platform for cloud integrations, or other advanced SAP technologies. We ensure your SAP environment remains adaptable to new innovations while maintaining a clean and stable core.",
  },
  {
    icon: "M18.364 5.636 5.636 18.364M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z",
    d2: "M12 8v4M12 16h.01",
    title: "Post-Implementation Support",
    body: "Clean Core is an ongoing process. After the initial implementation, we continue to monitor your SAP system, providing regular updates, optimizations, and ensuring that your enterprise stays agile and competitive in the market. Our team is always available to help with any challenges that arise during your Clean Core journey.",
  },
];

// ── Why Sierra Digital differentiators (second CardGrid — 4 items) ─────────────

const DIFFERENTIATORS = [
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Proven Expertise in Clean Core and SAP S/4HANA",
    body: "Sierra Digital has successfully helped numerous organizations transition to SAP S/4HANA and implement Clean Core strategies to improve system performance and reduce complexity.",
  },
  {
    icon: "M4 6h16M4 12h8m-8 6h16",
    d2: "M18 10l2 2-2 2",
    title: "Tailored Solutions",
    body: "We understand that every organization has unique needs. Our Clean Core strategy is custom-tailored to fit your enterprise, ensuring that your systems are optimized for your specific goals and challenges.",
  },
  {
    icon: "M3 3v18h18",
    d2: "m19 9-5 5-4-4-3 3",
    title: "Efficiency and Cost Reduction",
    body: "We focus on simplifying your SAP landscape, eliminating unnecessary customizations, and improving your system's efficiency to help reduce operational costs and increase ROI.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Ongoing Innovation",
    body: "As a trusted SAP partner, Sierra Digital ensures that your business is always at the forefront of innovation. We help you leverage SAP's latest technologies while keeping your core system clean and efficient.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CleanCorePage() {
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
              <Eyebrow tone="dark">SAP Silver Partner · Clean Core</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              SAP Clean Core — simplified,{" "}
              <em className="font-serif italic font-extralight opacity-90">
                built to last.
              </em>
            </h1>

            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "40rem" }}>
              In the ever-evolving world of enterprise technology, businesses are striving to remain
              agile, innovative, and efficient. Clean Core is a transformative approach to SAP that
              helps companies streamline their SAP environments, ensuring maximum performance,
              flexibility, and long-term success.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/clean-core-assessment/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Take the Assessment →
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
          <Stat value="200+" label="SAP clients served"            data-delay="0" />
          <Stat value="20+"  label="Years of SAP expertise"        data-delay="100" />
          <Stat value="100+" label="Clean Core assessments done"   data-delay="200" />
          <Stat value="97%"  label="Client satisfaction rate"      data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHAT IS CLEAN CORE — canvas-2 (alt)
          Five pillars — teal gradient cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="01"
          eyebrow="What is Clean Core?"
          eyebrowTone="primary"
          title="Five pillars of a future-ready SAP core."
          subtitle="By embracing Clean Core, businesses can simplify their systems, reduce complexity, and position themselves for future growth."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
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
          SIERRA AS PARTNER — canvas (white)
          Five partner capabilities — terracotta accent cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="02"
          eyebrow="Sierra as your partner"
          eyebrowTone="accent"
          title="Why Choose Sierra Digital as Your Clean Core Implementation Partner?"
          subtitle="At Sierra Digital, we specialize in helping enterprises implement Clean Core principles to transform their SAP environments. Our team of SAP-certified experts understands the complexities of maintaining a simplified, modernized SAP core."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
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
          WHY SIERRA DIGITAL — canvas-2 (alt)
          Split: heading left, 2×2 differentiator cards right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="03"
            eyebrow="Why Sierra Digital"
            eyebrowTone="primary"
            title={<>Unlock the power of <em className="font-serif italic">Clean Core.</em></>}
            subtitle="Transform your SAP environment with a Clean Core strategy and enable your enterprise to become more agile, efficient, and ready for the future. Sierra Digital is your trusted partner for Clean Core implementation."
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
                  <Icon d={d.icon} d2={"d2" in d ? (d as { d2?: string }).d2 : undefined} />
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
          PROCESS — canvas (white)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="04"
          eyebrow="Our process"
          eyebrowTone="primary"
          title="From assessment to a clean, future-ready core."
          subtitle="Sierra Digital's structured Clean Core methodology eliminates guesswork and keeps your transformation on time, on budget, and fully aligned with SAP best practices."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            { title: "Clean Core Assessment", body: "Analyse your existing SAP landscape using Sierra's proprietary assessment tooling to identify customizations, integrations, and technical debt that need to be addressed." },
            { title: "Strategy & Roadmap", body: "Define which customizations to retire, refactor as BTP extensions, or retain. Build a prioritized Clean Core roadmap aligned to your business goals and upgrade timeline." },
            { title: "Remediation & Extension Design", body: "Eliminate unnecessary custom code from the core. Architect clean, side-by-side extensions on SAP BTP — keeping the core standard and continuously upgradeable." },
            { title: "S/4HANA Migration", body: "Execute the migration to SAP S/4HANA with clean core methodology applied throughout — ensuring a stable, compliant, and optimized landing zone from day one." },
            { title: "Optimization & Hypercare", body: "Go live with confidence and continue refining. Sierra provides hypercare support, post-migration analytics, and ongoing optimization to keep your core clean over time." },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation. Contact us today to implement a Clean Core strategy tailored to your business for long-term success."
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Take the Assessment"
        secondaryHref="/clean-core-assessment/"
      />
    </>
  );
}
