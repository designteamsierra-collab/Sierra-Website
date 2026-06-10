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
  title: "HXM360 | Human Capital Management Software on SAP BTP",
  description:
    "SAP HXM 360 is a modern Human Capital Management Software built on SAP BTP. Extend SAP HR Software and SAP SuccessFactors with intelligent HXM BTP solutions for workforce planning, engagement, performance, and compensation.",
  alternates: { canonical: "https://sierradigitalinc.com/hxm360/" },
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

// ── Benefits of SAP HXM 360 & BTP (5 teal cards) ────────────────────────────

const BENEFITS = [
  {
    icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    title: "Expert Implementation & Customization",
    body: "Our SAP-certified experts tailor HXM solutions to align with organizational goals, ensuring a smooth and efficient implementation process.",
  },
  {
    icon: "M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16",
    title: "Innovative BTP App Development",
    body: "We design and deploy custom BTP applications to extend SAP HXM functionalities, enhancing HR operations and employee engagement.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    icon2: "M9 12l2 2 4-4",
    title: "Comprehensive Support & Optimization",
    body: "From initial deployment to continuous optimization, we provide end-to-end support, ensuring maximum value from SAP HXM 360.",
  },
  {
    icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    icon2: "M9 22V12h6v10",
    title: "Industry-Specific HR Solutions",
    body: "We understand industry-specific workforce challenges and develop customized solutions for sectors such as manufacturing, healthcare, and finance.",
  },
  {
    icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    title: "Continuous Innovation & Future-Readiness",
    body: "We help businesses stay ahead by integrating emerging technologies like AI, machine learning, and advanced analytics into their HR strategies.",
  },
];

// ── Why Choose Sierra Digital (4 diff cards) ──────────────────────────────────

const WHY_SIERRA = [
  {
    icon: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12",
    title: "Proven Track Record",
    body: "We have successfully implemented SAP HXM 360 and BTP solutions for organizations across various industries, enhancing workforce efficiency and employee satisfaction.",
  },
  {
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    title: "Certified SAP Expertise",
    body: "Our team consists of SAP-certified consultants with deep expertise in HXM, SuccessFactors, and BTP applications.",
  },
  {
    icon: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v6H3z",
    title: "Tailored Digital HR Solutions",
    body: "We design and implement custom solutions that align with each organization's unique workforce strategy and HR objectives.",
  },
  {
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Commitment to Excellence",
    body: "Sierra Digital is dedicated to delivering high-quality, innovative HR technology solutions that drive measurable business value.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HXM360Page() {
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
              <Eyebrow tone="dark">HXM360 · Human Capital Management on SAP BTP</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              HXM360{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Human Experience Platform.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              SAP HXM 360, powered by SAP Business Technology Platform (BTP), provides a holistic
              approach to human experience management — enhancing employee engagement, optimizing
              workforce operations, and driving business success.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Contact us
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore HXM360 →
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
          <Stat value="SAP BTP"   label="Powered human experience management"          data-delay="0" />
          <Stat value="HXM 360°"  label="Holistic approach to workforce management"    data-delay="100" />
          <Stat value="AI & ML"   label="Emerging technology integration built in"     data-delay="200" />
          <Stat value="Seamless"  label="End-to-end HXM deployment and support"        data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY SAP HXM 360 SPOTLIGHT — alt
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Why SAP HXM 360 with BTP Apps?"
          eyebrowTone="primary"
          title="Why SAP HXM 360 with BTP Apps?"
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
              SAP HXM 360 with BTP Extensions
            </p>
            <p className="text-ink-2 leading-relaxed">
              In today&apos;s fast-paced business environment, organizations need innovative
              solutions to attract, engage, and retain top talent. SAP HXM 360, tailored with
              custom BTP extensions, offers a seamless, intelligent platform to enhance workforce
              experiences, improve HR efficiency, and enable data-driven decision-making. With BTP
              apps, businesses can extend and customize their HXM capabilities to meet evolving
              workforce demands.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          BENEFITS 01 — canvas (white)  ·  5 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Benefits"
          eyebrowTone="primary"
          title="The Benefits of SAP HXM 360 &amp; BTP"
          subtitle="Sierra Digital specializes in transforming human experience management by leveraging SAP HXM 360 and BTP applications. Our expertise ensures seamless deployment, customization, and optimization of HXM solutions to meet unique business needs. Partnering with Sierra Digital provides:"
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 70, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700">
                  <Icon d={b.icon} d2={b.icon2} />
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
          WHY CHOOSE SIERRA DIGITAL 02 — alt  ·  4 diff cards (2-col)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Why Choose Sierra Digital?"
          eyebrowTone="primary"
          title="Why Choose Sierra Digital?"
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {WHY_SIERRA.map((w, i) => (
            <div
              key={w.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 80)}
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
          CLOSING SPOTLIGHT — canvas (white)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
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
              Revolutionize Your HR Strategy with SAP HXM 360 &amp; BTP
            </p>
            <p className="text-ink-2 leading-relaxed">
              Contact us today to explore how we can help transform your
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Get started today"
        title={
          <>
            Ready to get started?{" "}
            <em className="font-serif italic">Talk to our experts.</em>
          </>
        }
        subtitle="Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
        secondaryLabel="Explore HXM360"
        secondaryHref="/contact/"
      />
    </>
  );
}
