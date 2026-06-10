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
  title: "Transforming the Chemicals Industry with SAP Solutions",
  description: "Sierra Digital delivers Chemical Industry Software and SAP chemical management solutions powered by SAP S/4HANA and ERP to improve compliance, production, and supply chain performance for chemical manufacturers.",
  alternates: { canonical: "https://sierradigitalinc.com/chemicals/" },
};

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />{d2 && <path d={d2} />}
    </svg>
  );
}

const FEATURES = [
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "AI-Driven Compliance and Risk Management", body: "Leverage SAP AI and automation to monitor regulatory requirements, track hazardous materials, and ensure safety compliance. Simplify audits and reporting with real-time analytics." },
  { icon: "M22 12h-4l-3 9L9 3l-3 9H2", title: "Predictive Maintenance & Asset Optimization", body: "Utilize predictive analytics to enhance equipment reliability, reduce downtime, and optimize maintenance schedules. Increase operational efficiency by proactively addressing production bottlenecks." },
  { icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", title: "Automated Supplier and Logistics Coordination", body: "Streamline procurement, vendor management, and logistics planning through AI-driven automation. Improve transparency across the supply chain and reduce procurement cycle times." },
  { icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z", title: "Intelligent Inventory and Demand Forecasting", body: "Utilize SAP solutions to optimize raw material inventory, enhance demand planning, and mitigate supply chain disruptions. Improve efficiency by integrating predictive analytics for better resource allocation." },
  { icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 1 0-13.4 2.1A4 4 0 0 0 3 15z", title: "Scalable ERP & Digital Transformation", body: "Transition from legacy systems to modern SAP solutions, enhancing flexibility, scalability, and real-time data visibility for Chemical operations." },
];

const BENEFITS = [
  { icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", title: "Enhanced Compliance", body: "Stay ahead of environmental and safety regulations with automated tracking and reporting." },
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Increased Operational Efficiency", body: "Streamlined processes and AI-driven automation reduce waste and improve production accuracy." },
  { icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", title: "Supply Chain Resilience", body: "Advanced analytics enhance supplier coordination, logistics management, and demand forecasting." },
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Cost Optimization", body: "Improved resource planning and process automation translate to significant cost savings." },
  { icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6", title: "Scalability and Innovation", body: "Future-proof your business with scalable SAP solutions that support digital transformation." },
];

const WHY_SIERRA = [
  { icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z", title: "Industry Expertise", body: "Our team possesses deep knowledge of the unique challenges faced by Chemical manufacturers and distributors." },
  { icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18", title: "Innovative Technology Integration", body: "We leverage SAP's latest AI, automation, and analytics tools to drive process efficiencies and innovation." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Commitment to Compliance & Safety", body: "Our solutions prioritize regulatory compliance, safety standards, and environmental sustainability." },
  { icon: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12", title: "Proven Success", body: "We have a track record of delivering impactful SAP solutions to leading Chemical enterprises." },
  { icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3", title: "Scalable & Future-Ready Solutions", body: "Our technology-driven approach ensures your business is equipped for sustainable growth and market adaptability." },
];

export default function ChemicalsPage() {
  return (
    <>
      <header className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40" style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}>
        <Decoration className="inset-0 opacity-[0.07]"><TopoLines className="h-full w-full" tone="white" /></Decoration>
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25"><OrbCluster className="h-full w-full" variant="sky-emerald" /></Decoration>
        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="hero-reveal hero-d0"><Eyebrow tone="dark">Chemicals · SAP Solutions for Chemical Manufacturers</Eyebrow></div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">Transforming the Chemicals Industry <em className="font-serif italic font-extralight opacity-90">with SAP.</em></h1>
            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2" style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}>Sierra Digital is a trusted partner, leveraging SAP technologies to streamline production, optimize supply chains, and improve regulatory adherence for chemical manufacturers.</p>
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
          <Stat value="AI-Driven" label="Compliance and risk management" data-delay="0" />
          <Stat value="SAP S/4HANA" label="Scalable ERP for chemical operations" data-delay="100" />
          <Stat value="Predictive" label="Maintenance and asset optimization" data-delay="200" />
          <Stat value="Compliant" label="Automated regulatory tracking" data-delay="300" />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading index="01" eyebrow="Features" eyebrowTone="primary" title="Features" subtitle="The Chemicals industry faces increasing complexity, requiring innovative solutions to enhance operational efficiency, ensure compliance, and drive sustainable growth. Sierra Digital leverages SAP technologies to empower Chemical manufacturers with intelligent automation, advanced analytics, and seamless integrations." align="center" size="xl" />
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

      <Section tone="canvas">
        <SectionHeading index="02" eyebrow="Benefits" eyebrowTone="accent" title="Benefits of Partnering with Sierra Digital" subtitle="By partnering with Sierra Digital, Chemical manufacturers can achieve:" align="center" size="xl" />
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

      <Section tone="alt">
        <SectionHeading index="03" eyebrow="Why Choose Sierra Digital?" eyebrowTone="primary" title="Why Choose Sierra Digital?" align="center" size="xl" />
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

      <Section tone="canvas">
        <SectionHeading eyebrow="Success Stories" eyebrowTone="primary" title="Success Stories" align="center" size="xl" />
        <div className="flex flex-col gap-6 mx-auto max-w-4xl">
          {[
            { label: "Streamlined Lease Management for a Global Industry Leader", body: "This client strives to deliver best-in-class customer experiences and differentiated products in the industries of nylon solutions, chemical intermediates, and plant nutrients. Its products, manufactured at 3 U.S.-based facilities, are integral in building and construction, packaging, paints and coatings, electronics, and more." },
            { label: "Empowering Agricultural Finance: SAP CLM Transformation Success", body: "This client is a global agribusiness owned by farmers, ranchers and cooperatives across the United States. Diversified in energy, agronomy, grains, and foods, this client is committed to creating connections to empower agriculture, helping our owners and customers grow their businesses." },
          ].map((s, i) => (
            <div key={s.label} className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200" data-delay={String(i * 100)} style={{ background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)", boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)" }}>
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">{s.label}</p>
              <p className="text-ink-2 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <HandsCTA eyebrow="Optimize chemical operations" title={<>Partner with Sierra Digital to Optimize your <em className="font-serif italic">Chemical Operations using SAP.</em></>} subtitle="Contact us today to learn more about how Sierra Digital can help you achieve your goals." primaryLabel="Ask Our Expert" primaryHref="/contact/" secondaryLabel="Explore Solutions" secondaryHref="/contact/" />
    </>
  );
}
