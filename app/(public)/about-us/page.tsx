import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "About Sierra Digital – SAP Digital Transformation Partner",
  description: "Discover Sierra Digital's mission, vision, and expertise in SAP modernization, AI innovation, and enterprise digital transformation solutions.",
  alternates: { canonical: "https://sierradigitalinc.com/about-us/" },
};

const TIMELINE = [
  { year: "2002", title: "Founded", body: "Sierra Digital is established with a vision to simplify and enhance SAP technology." },
  { year: "2004", title: "Expansion of services", body: "The company expands its offerings, focusing on cloud-based applications and enterprise solutions that leverage SAP technologies." },
  { year: "2010", title: "Global delivery centers", body: "Operational footprint grows with delivery centers in the U.S. and India, enhancing capacity to serve a global client base." },
  { year: "2020", title: "New solutions on SAP BTP", body: "Sierra introduces several application solutions built on SAP BTP to simplify business processes and extend the value of customers' SAP investments." },
  { year: "2021", title: "Stonebridge acquisition", body: "We acquire Stonebridge, a boutique consultancy with deep Oil & Gas IP — strengthening our position as a top-tier partner to the energy sector." },
  { year: "2023", title: "InFocus readiness assessments", body: "Sierra releases the InFocus suite of readiness assessments, simplifying and accelerating the modernization of legacy SAP systems." },
  { year: "2024", title: "20+ GenAI use cases", body: "Sierra develops over 20 Gen-AI use cases across industries — energy, consumer, public services and more — driving tangible client benefits." },
  { year: "2025", title: "New acquisition & global reach", body: "Sierra acquires an SAP consultancy specializing in Manufacturing, Utilities and Pharma — expanding to 800+ consultants across North America, Europe, Australia and Asia." },
  { year: "2025", title: "Sierra AppHaus Houston", body: "A space designed to foster innovation and digital transformation, where the SAP community drives business-AI and SAP BTP innovation to new heights." },
];

const PURPOSE_CARDS = [
  { title: "Our purpose", body: "To deliver peak performance to the customers we serve. We succeed when we help people embrace imminent, transformational change driven by technology." },
  { title: "Our mission", body: "To be a global leader that helps customers transform the traditional business model into a state-of-the-art digital enterprise for ultimate competitive advantage." },
  { title: "Our vision", body: "To become a beloved technology company, accelerating our customers' transition to the digital economy with a focus on integrity and sustainability." },
];

export default function AboutUsPage() {
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
              <Eyebrow tone="dark">About Us · Sierra Digital</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              About{" "}
              <em className="font-serif italic font-extralight opacity-90">Sierra Digital.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Since our founding in 2002, the Sierra companies have always pointed in the direction of
              innovation — and the good it can do. The same evolutionary changes that swept consumer technology
              are now transforming the enterprise: from on-prem to cloud, from custom code to no-code, from
              monolithic platforms to use-case-specific apps.
            </p>
            <blockquote
              className="will-reveal mt-2 rounded-2xl border border-white/20 px-8 py-6 text-center"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <p className="text-base leading-relaxed italic" style={{ color: "rgba(200,230,240,0.85)" }}>
                &ldquo;At Sierra, our goal is to simplify, extend, and enhance SAP technology as a means of optimizing
                its value.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-semibold" style={{ color: "rgba(200,230,240,0.60)" }}>
                — Senthil Kumar, Chairman &amp; CEO, Sierra Digital
              </footer>
            </blockquote>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* Stats */}
      <Section tone="canvas">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "2002", label: "Founded" },
            { value: "800+", label: "Consultants worldwide" },
            { value: "200+", label: "Enterprise clients" },
            { value: "30+", label: "Industry verticals" },
          ].map((s, i) => (
            <Stat key={s.label} value={s.value} label={s.label} data-delay={String(i * 80)} />
          ))}
        </div>
      </Section>

      {/* Origin story */}
      <Section tone="alt">
        <div className="mx-auto max-w-3xl flex flex-col gap-6">
          <SectionHeading
            eyebrow="Where altitude is an attitude"
            eyebrowTone="primary"
            title="Our origin story"
            align="center"
            size="xl"
          />
          <div
            className="will-reveal rounded-2xl border border-primary-100 p-8 flex flex-col gap-4"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
              boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-ink-2 text-sm leading-relaxed">
              Decades back, the mountains surrounding a small Indian town were the source of inspiration for a
              young boy named Senthil Kumar. He often wondered how, someday, many might enjoy the view from the
              top of these peaks — rather than a select few.
            </p>
            <p className="text-ink-2 text-sm leading-relaxed">
              Senthil applied that boyhood inspiration to found the Sierra companies: a place where the masses
              could reap the rewards of the most advanced technology. We aspire higher — and value the
              opportunity to help you do the same.
            </p>
          </div>
        </div>
      </Section>

      {/* Purpose, Mission, Vision */}
      <Section tone="canvas">
        <SectionHeading
          eyebrow="What drives us"
          eyebrowTone="primary"
          title="Purpose, mission & vision"
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PURPOSE_CARDS.map((c, i) => (
            <div
              key={c.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 80)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{c.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Our journey"
          eyebrowTone="primary"
          title="The Sierra timeline"
          align="center"
          size="xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary-200" aria-hidden="true" />
          <div className="flex flex-col gap-8">
            {TIMELINE.map((item, i) => (
              <div
                key={`${item.year}-${item.title}`}
                className="will-reveal relative flex gap-6 pl-16"
                data-delay={String(Math.min(i * 60, 400))}
              >
                <div
                  className="absolute left-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(145deg, #218aa3, #0e5b7e)" }}
                >
                  {item.year}
                </div>
                <div className="flex flex-col gap-1 pt-2">
                  <h4 className="font-display text-ink text-base font-semibold leading-snug">{item.title}</h4>
                  <p className="text-ink-2 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Dr. Ernest spotlight quote */}
      <Section tone="canvas">
        <div
          className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 mx-auto max-w-3xl"
          style={{
            background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
            boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
          }}
        >
          <span className="block h-1 w-10 rounded-full bg-primary-500" />
          <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
            Dr. Ernest · Founder, Nestoil
          </p>
          <p className="text-ink-2 text-lg leading-relaxed italic">
            &ldquo;The can-do mentality comes through in Sierra&rsquo;s culture. There are not many parties with the
            capability to serve a project like ours across the globe.&rdquo;
          </p>
        </div>
      </Section>

      <HandsCTA
        eyebrow="Get to know Sierra"
        title={
          <>
            Get to know Sierra —{" "}
            <em className="font-serif italic">SAP&rsquo;s App Innovation Station.</em>
          </>
        }
        subtitle="Discover all that innovation can deliver to your doorstep. Let's talk about your transformation."
        primaryLabel="Get started"
        primaryHref="/contact/"
      />
    </>
  );
}
