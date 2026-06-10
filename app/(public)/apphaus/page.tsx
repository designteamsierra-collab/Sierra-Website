import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "SAP AppHaus Houston – SAP Design Thinking Workshops",
  description: "Participate in SAP AppHaus design thinking workshops at Sierra Digital Houston to accelerate SAP adoption, reduce transformation risk, & build AI-ready enterprise solutions using human-centered innovation.",
  alternates: { canonical: "https://sierradigitalinc.com/apphaus/" },
};

const FEATURES = [
  { title: "Plush lounge spaces", body: "We believe that comfort promotes productivity, and our comfortable interiors are sure to make your team feel right at home." },
  { title: "Artwork by local craftsmen", body: "Engaging art pieces by local craftmen and artisans reflect Houston's rich cultural heritage throughout Sierra AppHaus Houston." },
  { title: "Modular work rooms with flexible layouts", body: "Sierra AppHaus Houston is furnished with modern, modular pieces that allow your team to rearrange and customize spaces in ways that make sense for your group." },
  { title: "Innovative modern appointments", body: "With innovative light fixtures, modern stylings, and a creative new approach to design, Sierra AppHaus Houston engages our instincts to play and create." },
  { title: "Fully stocked kitchen", body: "No-one works well on an empty stomach, and Sierra AppHaus Houston features a fully-stocked kitchen to feed innovation." },
];

const BENEFITS = [
  { title: "Increased adoption and user satisfaction", body: "With more involvement in the process of solution design, your people are sure to adopt new technologies with heightened enthusiasm." },
  { title: "Quicker yield of tangible business value", body: "A natural consequence of increased adoption, solutions that involve users early in the design stage often yield value more quickly than their counterparts." },
  { title: "Accelerated development and implementation", body: "In the span of just a day, our workshops produce plans for a POC, accelerating the relief your organization needs." },
  { title: "Greater senses of innovation authority", body: "The Human-Centered Approach to Innovation places value on all the individuals who make your company special, and here, their needs and ambitions are reflected throughout solution design." },
  { title: "Heightened user experience", body: "By placing new value on the perspectives of SAP users, our design-thinking workshops produce solutions that make life easier for real people." },
];

const WHY_ENTERPRISES = [
  "De-risk large SAP transformation programs",
  "Identify high-value AI and automation opportunities",
  "Improve adoption of SAP platforms",
  "Align business and IT stakeholders",
  "Validate use cases before funding implementation",
];

const OUTCOMES = [
  "Faster SAP adoption through early user involvement",
  "Clear, prioritized transformation roadmaps",
  "Reduced project risk",
  "Stronger alignment across leadership teams",
  "Production-ready proof-of-concept plans",
];

const CLOSING_BLOCKS = [
  { eyebrow: "Why Sierra Digital AppHaus?", body: "Sierra Digital combines deep SAP platform expertise with AI accelerators and industry frameworks to help enterprises move from ideation to executable transformation plans." },
  { eyebrow: "About AppHaus Houston", body: "Located in Houston, Texas, Sierra Digital AppHaus is a purpose-built innovation environment designed to promote collaboration, creativity, and rapid problem-solving." },
  { eyebrow: "How AppHaus Reduces SAP Project Failure Risk", body: "Organizations that invest in structured discovery and design before implementation are significantly more likely to achieve adoption, stay within budget, and realize transformation value faster. AppHaus enables this by validating business needs early and aligning stakeholders before execution begins. If your organization is exploring new approaches to solution design, or if you're interested in visiting our beautiful new space, please contact" },
  { eyebrow: "Experience Innovation at Sierra AppHaus Houston!", body: "To start your journey toward transformative innovation!" },
];

export default function ApphausPage() {
  return (
    <>
      {/* Hero */}
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
              <Eyebrow tone="dark">AppHaus · Sierra Digital</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              SAP AppHaus{" "}
              <em className="font-serif italic font-extralight opacity-90">Houston.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Sierra Digital offers robust packages of customer success resources, which include assessments,
              enablement sessions, and design-thinking workshops hosted at Sierra AppHaus Houston, a
              newly-remodeled, creative space where our experts implement SAP&apos;s Human-Centered Approach to
              Innovation (HCAI).
            </p>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* Intro blocks */}
      <Section tone="alt">
        <div className="flex flex-col gap-6 mx-auto max-w-4xl">
          {[
            {
              eyebrow: "Sierra Digital AppHaus Houston - SAP Innovation Hub",
              body: "Sierra Digital AppHaus Houston is an official SAP AppHaus innovation space where enterprises run design thinking workshops to accelerate SAP transformation, improve user adoption, and validate AI and digital initiatives before full-scale implementation.",
            },
            {
              eyebrow: "What is Sierra Digital AppHaus?",
              body: "Sierra Digital AppHaus is an official member of the SAP AppHaus network — a global ecosystem of innovation spaces designed to help organizations solve complex business challenges using SAP's Human-Centered Approach to Innovation (HCAI).",
            },
          ].map((b, i) => (
            <div
              key={b.eyebrow}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4"
              data-delay={String(i * 80)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{b.eyebrow}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section tone="canvas">
        <SectionHeading eyebrow="The Space" eyebrowTone="primary" title="Features" align="center" size="xl" />
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
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <h3 className="font-display text-ink text-lg font-light leading-snug tracking-tight">{f.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="alt">
        <SectionHeading eyebrow="What You Gain" eyebrowTone="accent" title="Benefits" align="center" size="xl" />
        <p className="text-ink-2 text-center text-sm mb-8 -mt-2">
          Visitors to the SAP AppHaus network and participants of HCAI design-thinking workshops often report:
        </p>
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
              <span className="block h-1 w-10 rounded-full bg-accent-500" />
              <h3 className="font-display text-ink text-lg font-light leading-snug tracking-tight">{b.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Enterprises Use AppHaus */}
      <Section tone="canvas">
        <SectionHeading eyebrow="Use Cases" eyebrowTone="primary" title="Why Enterprises Use AppHaus Before SAP Transformation" align="center" size="xl" />
        <p className="text-ink-2 text-center text-sm mb-8 -mt-2">
          Organizations typically engage Sierra Digital AppHaus when they need to:
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-4xl">
          {WHY_ENTERPRISES.map((title, i) => (
            <div
              key={title}
              className="will-reveal rounded-2xl border border-primary-100 px-6 py-5 flex items-start gap-3 hover:-translate-y-0.5 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)",
              }}
            >
              <span className="mt-1 shrink-0 h-2 w-2 rounded-full bg-primary-500" />
              <p className="font-display text-ink text-sm font-light leading-snug tracking-tight">{title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Business Outcomes */}
      <Section tone="alt">
        <SectionHeading eyebrow="Results" eyebrowTone="primary" title="Business Outcomes of an AppHaus Workshop" align="center" size="xl" />
        <p className="text-ink-2 text-center text-sm mb-8 -mt-2">
          Enterprises that participate in AppHaus workshops commonly achieve:
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-4xl">
          {OUTCOMES.map((title, i) => (
            <div
              key={title}
              className="will-reveal rounded-2xl border border-primary-100 px-6 py-5 flex items-start gap-3 hover:-translate-y-0.5 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)",
              }}
            >
              <span className="mt-1 shrink-0 h-2 w-2 rounded-full bg-primary-500" />
              <p className="font-display text-ink text-sm font-light leading-snug tracking-tight">{title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing blocks */}
      <Section tone="canvas">
        <div className="flex flex-col gap-6 mx-auto max-w-4xl">
          {CLOSING_BLOCKS.map((b, i) => (
            <div
              key={b.eyebrow}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4"
              data-delay={String(i * 80)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.12), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{b.eyebrow}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <HandsCTA
        eyebrow="Ready to get started?"
        title={<>Ready to <em className="font-serif italic">get started?</em></>}
        subtitle="Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
      />
    </>
  );
}
