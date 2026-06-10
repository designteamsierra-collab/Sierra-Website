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
  title: "SAP Agriculture Industry Solutions & Digital Transformation",
  description: "Sierra Digital transforms agricultural operations with SAP S/4HANA, AI-driven analytics, and intelligent supply chain solutions to boost productivity, ensure compliance, and drive sustainable growth.",
  alternates: { canonical: "https://sierradigitalinc.com/agriculture/" },
};

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />{d2 && <path d={d2} />}
    </svg>
  );
}

const FEATURES = [
  { icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", title: "AI-Powered Agricultural Insights with SAP Business Data Cloud", body: "Seamlessly integrate Generative AI with SAP Business Data Cloud to enhance decision-making in agricultural operations. Generate reports, analyze crop performance, and query field data using natural language processing." },
  { icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z", title: "Predictive & Prescriptive Analytics for Farm Management", body: "Harness advanced analytics to identify key performance metrics that improve crop yields, optimize resource allocation, and forecast seasonal demands. Build multiple agricultural scenarios and save models for continuous improvement in farm and operational decision-making." },
  { icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2", title: "Automated Supplier & Vendor Onboarding", body: "Reduce administrative burden with AI-powered data extraction from documents and PDFs. Automate supplier and vendor onboarding by populating digital forms with extracted data, ensuring accuracy and compliance across the agricultural supply chain." },
  { icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", title: "Intelligent Inventory & Supply Chain Optimization", body: "AI-driven automation streamlines inventory management and supply chain coordination, reducing waste and improving resource efficiency. Enhance traceability, minimize supply disruptions, and build stronger relationships with vendors and distributors." },
  { icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", title: "Scalable & Seamless Integration for Agricultural Operations", body: "Easily integrate with existing farm management systems, financial platforms, and third-party agri-tech applications. Scale effortlessly to meet growing operational volumes and the evolving complexities of modern agricultural enterprises." },
];

const BENEFITS = [
  { icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6", title: "Enhanced Productivity", body: "AI-driven insights and automation streamline farm operations and increase output efficiency." },
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Improved Efficiency", body: "Automated workflows reduce manual processes, freeing teams to focus on strategic growth." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Regulatory Compliance", body: "Stay ahead of agricultural regulations with automated tracking, reporting, and audit-ready processes." },
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Cost Optimization", body: "Improved resource planning and supply chain automation translate to significant cost savings." },
  { icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3", title: "Scalability", body: "Our solutions grow with your agricultural enterprise, supporting expansion and evolving needs." },
];

const WHY_SIERRA = [
  { icon: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12", title: "Proven Success", body: "We have a history of delivering successful SAP outcomes for leading agribusinesses and agricultural enterprises." },
  { icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z", title: "Industry Expertise", body: "Our team possesses in-depth knowledge of the agriculture industry's unique challenges and opportunities." },
  { icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18", title: "Commitment to Innovation", body: "We continuously invest in GenAI, advanced analytics, and agri-tech integrations to provide cutting-edge solutions." },
  { icon: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4", title: "Commitment to Security", body: "We prioritize the security and privacy of sensitive agricultural data, ensuring compliance with industry regulations." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Security & Compliance", body: "Our solutions include robust security frameworks that protect your data and help you navigate complex regulatory environments." },
  { icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6", title: "Scalable & Future-Ready Solutions", body: "Our technology-driven approach ensures your agricultural business is equipped for sustainable growth and market adaptability." },
];

export default function AgriculturePage() {
  return (
    <>
      <header className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40" style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}>
        <Decoration className="inset-0 opacity-[0.07]"><TopoLines className="h-full w-full" tone="white" /></Decoration>
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25"><OrbCluster className="h-full w-full" variant="sky-emerald" /></Decoration>
        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="hero-reveal hero-d0"><Eyebrow tone="dark">Agriculture · SAP Solutions</Eyebrow></div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">SAP Solutions for the <em className="font-serif italic font-extralight opacity-90">Agriculture Industry.</em></h1>
            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2" style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}>Sierra Digital empowers agricultural organizations with innovative technologies to optimize operations, strengthen compliance, and drive sustainable productivity across the entire agri-value chain.</p>
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
          <Stat value="AI-Driven" label="Farm management and crop analytics" data-delay="0" />
          <Stat value="SAP S/4HANA" label="Agribusiness ERP platform" data-delay="100" />
          <Stat value="Predictive" label="Supply chain and demand forecasting" data-delay="200" />
          <Stat value="Sustainable" label="Future-ready solutions for agriculture" data-delay="300" />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading index="01" eyebrow="Features" eyebrowTone="primary" title="Features" subtitle="The Agriculture industry is rapidly evolving, requiring innovative solutions to enhance productivity, ensure compliance, and drive sustainable growth. Sierra Digital leverages SAP technologies to empower agricultural organizations with intelligent automation, advanced analytics, and seamless integrations." align="center" size="xl" />
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
        <SectionHeading index="02" eyebrow="Benefits" eyebrowTone="accent" title="Benefits of Partnering with Sierra Digital" subtitle="By partnering with Sierra Digital, agricultural organizations can achieve:" align="center" size="xl" />
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
            { label: "Sugarcane Giant Seeks to Modernize Data", body: "This client is the world's top sugarcane refiner, dedicated to produce sugar and biofuels from sugarcane. The company has over 50 production and processing facilities in five countries across three continents." },
            { label: "Global Agribusiness Chooses Sierra", body: "This client is a farmer-owned agricultural co-op and the largest US co-op, with thousands of producers and operations across North America. The company needed to modernize its SAP landscape to support rapid growth and evolving supply chain complexity." },
          ].map((s, i) => (
            <div key={s.label} className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200" data-delay={String(i * 100)} style={{ background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)", boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)" }}>
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">{s.label}</p>
              <p className="text-ink-2 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <HandsCTA eyebrow="Drive agriculture innovation" title={<>Partner with Sierra Digital to Harness the Power of SAP Solutions and <em className="font-serif italic">Drive Innovation in Agriculture.</em></>} primaryLabel="Ask Our Expert" primaryHref="/contact/" secondaryLabel="Explore Solutions" secondaryHref="/contact/" />
    </>
  );
}
