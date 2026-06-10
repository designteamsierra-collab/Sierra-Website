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
  title: "SAP Retail Industry Solutions & Digital Transformation",
  description: "Transform your retail business with Sierra Digital's SAP retail solutions. Enhance customer experiences, optimize supply chains, and drive growth with SAP S/4HANA, GenAI, and analytics.",
  alternates: { canonical: "https://sierradigitalinc.com/retail/" },
};

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />{d2 && <path d={d2} />}
    </svg>
  );
}

const CHALLENGES = [
  { icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", title: "Inefficient Supply Chain Management", body: "Managing complex supply chains and ensuring product availability are significant challenges for retailers." },
  { icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", title: "Lack of Personalized Customer Experiences", body: "Retailers struggle to create personalized experiences across multiple channels." },
  { icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01", title: "Manual Processes and Inefficiencies", body: "Time-consuming manual processes hinder operational efficiency and increase costs." },
  { icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z", title: "Data-Driven Decision Making", body: "Retailers often lack the tools to analyze data and gain actionable insights." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Security and Compliance", body: "Protecting customer data and complying with regulations is increasingly complex." },
];

const FEATURES = [
  { icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", title: "GenAI and SAP BDC Integration", body: "Leverage GenAI and SAP Business Data Cloud (BDC) to generate insights, create reports, and query data using natural language. Empower retail teams with real-time visibility into inventory, sales, and customer behavior." },
  { icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z", title: "Predictive/Prescriptive Analytics", body: "Use advanced analytics to forecast demand, identify sales trends, and optimize inventory management. Make data-driven decisions to enhance customer satisfaction and maximize profitability." },
  { icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2", title: "Automated Business Partner Onboarding", body: "Streamline vendor and supplier onboarding with AI-driven data extraction and form automation. Reduce processing times, minimize errors, and build stronger supplier relationships." },
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Dynamic Pricing with Advanced Event Mesh", body: "Implement dynamic pricing strategies using SAP's Advanced Event Mesh to respond quickly to market conditions, competitor pricing, and customer demand. Optimize revenue while maintaining customer satisfaction." },
  { icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", title: "Sustainable Decision-Making Protocols", body: "Integrate sustainability into your retail operations by tracking and reducing carbon footprints, optimizing energy consumption, and fostering responsible sourcing." },
];

const BENEFITS = [
  { icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", title: "Enhanced Customer Experiences", body: "Personalize interactions across all channels to build lasting customer loyalty." },
  { icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", title: "Optimized Supply Chains", body: "Improve inventory management, reduce waste, and ensure product availability." },
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Increased Efficiency", body: "Automate manual tasks and streamline operations for better productivity." },
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Cost Savings", body: "Reduce operational costs through improved processes and resource allocation." },
  { icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6", title: "Scalability", body: "Adapt and grow your retail operations to meet evolving market demands." },
];

const WHY_SIERRA = [
  { icon: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12", title: "Proven Track Record", body: "We have a history of delivering successful outcomes for global retailers across diverse markets." },
  { icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z", title: "Industry Expertise", body: "Our team understands the unique challenges and opportunities in the retail sector." },
  { icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18", title: "Investment in Innovation", body: "We are committed to leveraging the latest technologies to keep our clients ahead of the curve." },
  { icon: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4", title: "Quality and Security Track Record", body: "We prioritize security and compliance, protecting customer data and ensuring regulatory adherence." },
  { icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3", title: "Flexibility", body: "Our solutions adapt to the evolving needs of retailers, supporting growth and change." },
];

const CLIENTS = ["Information Services", "Enterprise Services", "United Nation", "Port of San Diego", "Tenneco"];

export default function RetailPage() {
  return (
    <>
      <header className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40" style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}>
        <Decoration className="inset-0 opacity-[0.07]"><TopoLines className="h-full w-full" tone="white" /></Decoration>
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25"><OrbCluster className="h-full w-full" variant="sky-emerald" /></Decoration>
        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="hero-reveal hero-d0"><Eyebrow tone="dark">Retail · SAP Digital Transformation</Eyebrow></div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">SAP Retail Industry <em className="font-serif italic font-extralight opacity-90">Solutions.</em></h1>
            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2" style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}>Sierra Digital empowers retailers with innovative technologies to enhance customer experiences, optimize supply chains, and drive sustainable growth in a dynamic marketplace.</p>
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
          <Stat value="GenAI" label="Natural language retail analytics" data-delay="0" />
          <Stat value="Dynamic" label="Pricing with event mesh scenarios" data-delay="100" />
          <Stat value="Omnichannel" label="AI-powered customer experiences" data-delay="200" />
          <Stat value="Scalable" label="Future-ready retail enterprise" data-delay="300" />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading index="01" eyebrow="Key Challenges" eyebrowTone="primary" title="Addressing Key Retail Challenges" subtitle="Retail is a rapidly-changing industry, and like many retailers, you may be facing challenges such as:" align="center" size="xl" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map((c, i) => (
            <div key={c.title} className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200" data-delay={String(Math.min(i * 70, 400))} style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)", boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)" }}>
              <div className="flex items-center gap-3"><span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" /><span className="text-primary-700"><Icon d={c.icon} /></span></div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{c.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHeading index="02" eyebrow="Featured Solutions" eyebrowTone="primary" title="Featured Solutions for Retailers" subtitle="Sierra Digital offers a suite of cutting-edge solutions to address these challenges:" align="center" size="xl" />
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
        <SectionHeading index="03" eyebrow="Benefits" eyebrowTone="accent" title="Benefits of Partnering with Sierra Digital" subtitle="By choosing Sierra Digital, retailers can achieve:" align="center" size="xl" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className="will-reveal rounded-2xl border border-accent-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200" data-delay={String(Math.min(i * 70, 400))} style={{ background: "linear-gradient(145deg, #fff5ed 0%, #ffe7d4 55%, #ffcaa8 100%)", boxShadow: "0 4px 20px rgba(244,78,18,0.10), 0 1px 4px rgba(244,78,18,0.06)" }}>
              <div className="flex items-center gap-3"><span className="h-8 w-0.75 rounded-full bg-accent-500 shrink-0" /><span className="text-accent-600"><Icon d={b.icon} /></span></div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{b.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono mb-2">Valued Clients</p>
          <p className="text-ink-2 text-sm mb-8">Trusted by leading organizations across the retail ecosystem</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {CLIENTS.map((name) => (
              <span key={name} className="rounded-xl border border-primary-200 bg-white px-6 py-3 text-sm font-semibold text-ink-2 shadow-sm">{name}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHeading index="04" eyebrow="Why Choose Sierra Digital?" eyebrowTone="primary" title="Why Choose Sierra Digital?" align="center" size="xl" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_SIERRA.map((w, i) => (
            <div key={w.title} className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200" data-delay={String(Math.min(i * 80, 400))} style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)", boxShadow: "0 4px 16px rgba(33,138,163,0.12), 0 1px 4px rgba(33,138,163,0.07)" }}>
              <div className="flex items-center gap-3"><span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" /><span className="text-primary-700"><Icon d={w.icon} /></span></div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{w.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <HandsCTA eyebrow="Transform your retail organization" title={<>Ready to Transform your <em className="font-serif italic">Retail Organization?</em></>} subtitle="Contact us today to learn how Sierra Digital can help you achieve your goals." primaryLabel="Ask Our Expert" primaryHref="/contact/" secondaryLabel="Explore Solutions" secondaryHref="/contact/" />
    </>
  );
}
