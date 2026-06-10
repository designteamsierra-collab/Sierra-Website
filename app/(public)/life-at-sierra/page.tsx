import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "Life at Sierra Digital | Culture, Careers & Innovation",
  description: "Discover Life at Sierra Digital—an inclusive workplace focused on collaboration, innovation, and career growth for professionals in SAP, AI, and digital transformation.",
  alternates: { canonical: "https://sierradigitalinc.com/life-at-sierra/" },
};

const CULTURE_BLOCKS = [
  {
    eyebrow: "A Culture of Collaboration",
    body: "At Sierra Digital, we foster an environment of technological collaboration, open communication, and digital transformation. We believe that exceptional people create outstanding products. Take a bold step in your career alongside our technology experts and seasoned professionals in a dynamic, cross-functional ecosystem. We continually push boundaries and seek innovative approaches to drive exponential business growth, passionately transforming how people live and work through diverse, disruptive, and user-centric digital solutions.",
  },
  {
    eyebrow: "Driven by People's Centric Values",
    body: "We take pride in cultivating a robust culture that prioritizes work-life balance.",
  },
  {
    eyebrow: "Delivering Comprehensive Value for Our Employees",
    body: "We take pride in creating an environment where employees feel supported, valued, and empowered to grow.",
  },
];

const VALUES = [
  { title: "Open Culture", body: "Collaborate with industry leaders and experts across various technologies in a top-tier talent environment." },
  { title: "Health and Wellness", body: "Benefit from medical insurance, regular health check-ups, and engaging wellness programs to ensure employee well-being." },
  { title: "Rewards & Recognition", body: "We celebrate and reward employee's achievements." },
  { title: "Diversity & Inclusion", body: "Benefit from medical insurance, regular health check-ups, and engaging wellness programs to ensure employee well-being." },
  { title: "Work-life Balance", body: "Enjoy uplifting employee morale through parties, outdoor activities, family events, and flexible work arrangements." },
];

export default function LifeAtSierraPage() {
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
              <Eyebrow tone="dark">Life at Sierra · Culture &amp; Careers</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Life at <em className="font-serif italic font-extralight opacity-90">Sierra Digital.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Elevate your potential—acquire new skills, advance in your career, and overcome challenges by
              unlocking opportunities for growth at Sierra Digital. We offer exciting opportunities for growth.
              Join us in making a significant impact.
            </p>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* Culture blocks */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Our Culture"
          eyebrowTone="primary"
          title="A Culture of Collaboration"
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CULTURE_BLOCKS.map((b, i) => (
            <div
              key={b.eyebrow}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
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

      {/* Employee values */}
      <Section tone="canvas">
        <SectionHeading
          eyebrow="Employee Benefits"
          eyebrowTone="accent"
          title="Delivering Comprhensive Values for Your Employees"
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="will-reveal rounded-2xl border border-accent-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{
                background: "linear-gradient(145deg, #fff5ed 0%, #ffe7d4 55%, #ffcaa8 100%)",
                boxShadow: "0 4px 20px rgba(244,78,18,0.10), 0 1px 4px rgba(244,78,18,0.06)",
              }}
            >
              <span className="block h-1 w-10 rounded-full bg-accent-500" />
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{v.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing block */}
      <Section tone="alt">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono mb-3">
            Connect Businesses with Cutting-Edge Technologies for Innovation
          </p>
          <p className="text-ink-2 leading-relaxed">Don&apos;t wait – future-proof your business now!</p>
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
