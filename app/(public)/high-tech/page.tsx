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
  title: "High Tech Industry SAP Solutions & Digital Transformation",
  description: "Empower your High Tech business with Sierra Digital's SAP solutions. Drive AI-powered automation, clean core transformation, and scalable innovation with SAP S/4HANA and GenAI.",
  alternates: { canonical: "https://sierradigitalinc.com/high-tech/" },
};

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />{d2 && <path d={d2} />}
    </svg>
  );
}

const CAPABILITIES = [
  { icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18", title: "Retire Technical Debt", body: "Modernize your ERP landscape by migrating from legacy systems to SAP S/4HANA. Leverage Sierra Digital's proven migration methodology to eliminate outdated processes and reduce total cost of ownership." },
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Harness the Power of AI", body: "Embed Generative AI and machine learning into your core business processes. From revenue automation to predictive analytics, Sierra Digital helps high-tech companies unlock new efficiencies and accelerate decision-making." },
  { icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", title: "Implement Clean Core Practices", body: "Adopt a clean core approach to SAP S/4HANA that keeps your system lean, extensible, and upgrade-ready. Sierra Digital ensures your architecture supports continuous innovation without customization debt." },
];

const FEATURES = [
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Automated Revenue Reconciliation", body: "Streamline complex revenue streams with AI-driven reconciliation using SAP Revenue Accounting and Reporting (RAR). Ensure ASC 606/IFRS 15 compliance while reducing manual effort." },
  { icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", title: "AI-Powered Communication", body: "Automate emails, reports, and stakeholder updates using GenAI integrated with SAP BDC. Pre-populate forms and communications with data-driven content for faster workflows." },
  { icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z", title: "Predictive and Prescriptive Analytics", body: "Leverage SAP Business Data Cloud to build outcome models, track KPIs, and make forward-looking decisions. Turn raw data into competitive advantage." },
  { icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2", title: "Automated Contract Review", body: "Use AI to extract, analyze, and validate contract terms at scale. Reduce legal review cycles, flag risks automatically, and ensure vendor compliance." },
  { icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", title: "Transparent Decision-Making Protocols", body: "Implement approval workflows and audit trails that route decisions to the right stakeholders. Build accountability and compliance into every process." },
];

const BENEFITS = [
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Increased Efficiency", body: "AI and automation eliminate manual processes, freeing teams to focus on strategic initiatives." },
  { icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z", title: "Improved Decision-Making", body: "Real-time analytics provide actionable insights to optimize performance and drive growth." },
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Reduced Costs", body: "Streamlined operations, reduced technical debt, and optimized resource utilization lower total cost." },
  { icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3", title: "Enhanced Scalability", body: "Cloud-native SAP architecture supports rapid growth and global expansion." },
  { icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6", title: "Accelerated Innovation", body: "Clean core practices and extensible architecture enable faster adoption of new capabilities." },
];

const WHY_SIERRA = [
  { icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z", title: "Deep Industry Expertise", body: "Our teams bring firsthand experience in high-tech sectors including semiconductors, software, SaaS, and hardware manufacturing." },
  { icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z", title: "Tailored Solutions", body: "We customize SAP solutions to fit the unique complexity of high-tech business models, pricing structures, and revenue streams." },
  { icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18", title: "Cutting-Edge Technology", body: "We stay at the forefront of SAP innovation, integrating GenAI, BDC, and automation tools as they become available." },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", title: "Collaborative Partnership", body: "We embed with your teams, transferring knowledge and building internal capabilities for long-term success." },
  { icon: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12", title: "Proven Results", body: "Sierra Digital has delivered transformational outcomes for global high-tech companies including streaming platforms, semiconductor firms, and enterprise software leaders." },
];

export default function HighTechPage() {
  return (
    <>
      <header className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40" style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}>
        <Decoration className="inset-0 opacity-[0.07]"><TopoLines className="h-full w-full" tone="white" /></Decoration>
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25"><OrbCluster className="h-full w-full" variant="sky-emerald" /></Decoration>
        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="hero-reveal hero-d0"><Eyebrow tone="dark">High Tech · SAP Solutions</Eyebrow></div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">SAP Solutions for the <em className="font-serif italic font-extralight opacity-90">High Tech Industry.</em></h1>
            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2" style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}>Sierra Digital empowers high-tech companies to modernize operations, harness AI, and build scalable platforms that drive continuous innovation and competitive advantage.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg" className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">Ask Our Expert</Button>
              <Button href="/contact/" size="lg" className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">Explore Solutions →</Button>
            </div>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20"><AltitudeScale className="h-full w-auto" tone="white" /></Decoration>
      </header>

      <Section tone="canvas" density="compact">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
          <Stat value="AI" label="Revenue reconciliation automation" data-delay="0" />
          <Stat value="Clean Core" label="Technical debt retirement" data-delay="100" />
          <Stat value="Analytics" label="Predictive and prescriptive insights" data-delay="200" />
          <Stat value="Scalable" label="Flexible infrastructure for growth" data-delay="300" />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading index="01" eyebrow="Empowering High Tech Giants" eyebrowTone="primary" title="Empowering High Tech Giants" subtitle="The High Tech industry operates in a fast-paced environment where innovation, scalability, and agility are paramount. Sierra Digital helps high-tech companies tackle their most pressing challenges:" align="center" size="xl" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <div key={c.title} className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200" data-delay={String(Math.min(i * 70, 400))} style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)", boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)" }}>
              <div className="flex items-center gap-3"><span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" /><span className="text-primary-700"><Icon d={c.icon} /></span></div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{c.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHeading index="02" eyebrow="Features" eyebrowTone="primary" title="Features" subtitle="Sierra Digital delivers purpose-built SAP capabilities for the high-tech sector:" align="center" size="xl" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200" data-delay={String(Math.min(i * 70, 400))} style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)", boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)" }}>
              <div className="flex items-center gap-3"><span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" /><span className="text-primary-700"><Icon d={f.icon} /></span></div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{f.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading index="03" eyebrow="Benefits" eyebrowTone="accent" title="Benefits of Partnering with Sierra Digital" subtitle="High-tech companies that partner with Sierra Digital achieve:" align="center" size="xl" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className="will-reveal rounded-2xl border border-accent-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200" data-delay={String(Math.min(i * 70, 400))} style={{ background: "linear-gradient(145deg, #fff5ed 0%, #ffe7d4 55%, #ffcaa8 100%)", boxShadow: "0 4px 20px rgba(244,78,18,0.10), 0 1px 4px rgba(244,78,18,0.06)" }}>
              <div className="flex items-center gap-3"><span className="h-8 w-0.75 rounded-full bg-accent-500 shrink-0" /><span className="text-accent-600"><Icon d={b.icon} /></span></div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{b.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHeading index="04" eyebrow="Why Choose Sierra Digital?" eyebrowTone="primary" title="Why Choose Sierra Digital?" align="center" size="xl" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {WHY_SIERRA.map((w, i) => (
            <div key={w.title} className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200" data-delay={String(Math.min(i * 80, 400))} style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)", boxShadow: "0 4px 16px rgba(33,138,163,0.12), 0 1px 4px rgba(33,138,163,0.07)" }}>
              <div className="flex items-center gap-3"><span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" /><span className="text-primary-700"><Icon d={w.icon} /></span></div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{w.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
        <div className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 mx-auto max-w-4xl hover:-translate-y-1 transition-all duration-200" data-delay="400" style={{ background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)", boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)" }}>
          <span className="block h-1 w-10 rounded-full bg-primary-500" />
          <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">Streaming Giant Automates Revenue Processing with GenAI</p>
          <p className="text-ink-2 leading-relaxed">This client is a leading online platform for video content, with over 30 million daily users, over 9 million content creators, and content available in 30+ languages. The platform serves as a hub for diverse content, including live streams, video-on-demand, and interactive experiences.</p>
        </div>
      </Section>

      <HandsCTA eyebrow="Transform your high tech business" title={<>Ready to Transform your <em className="font-serif italic">High Tech Business?</em></>} subtitle="Contact us today to learn how Sierra Digital can help you achieve your goals." primaryLabel="Ask Our Expert" primaryHref="/contact/" secondaryLabel="Explore Solutions" secondaryHref="/contact/" />
    </>
  );
}
