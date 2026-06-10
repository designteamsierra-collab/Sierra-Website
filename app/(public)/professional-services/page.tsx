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
  title: "SAP Professional Services Industry Solutions",
  description: "Optimize professional services operations with Sierra Digital's SAP solutions. Streamline project management, automate revenue recognition, and enhance financial performance with SAP S/4HANA.",
  alternates: { canonical: "https://sierradigitalinc.com/professional-services/" },
};

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />{d2 && <path d={d2} />}
    </svg>
  );
}

const CHALLENGES = [
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", title: "Inefficient Resource Allocation", body: "Managing consultant workloads and skill matching is time-consuming and error-prone." },
  { icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01", title: "Manual Project Management Processes", body: "Fragmented tools and manual workflows slow down project execution and reporting." },
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Delayed Billing and Revenue Recognition", body: "Complex billing structures and manual invoicing cause cash flow bottlenecks." },
  { icon: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v6H3z", title: "Fragmented Data Insights", body: "Siloed systems prevent a unified view of project performance and financial health." },
  { icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3", title: "Scalability Constraints", body: "Outdated systems fail to support growing project volumes and global delivery models." },
];

const FEATURES = [
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", title: "AI-Driven Project Management & Resource Optimization", body: "Leverage AI to match skills with project requirements, forecast resource needs, and optimize team allocation in real time with SAP S/4HANA Professional Services." },
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Automated Financial & Revenue Recognition", body: "Streamline billing cycles, automate milestone-based invoicing, and ensure ASC 606/IFRS 15 compliant revenue recognition with SAP Revenue Accounting and Reporting." },
  { icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z", title: "Real-Time Analytics with SAP Business Data Cloud", body: "Access live dashboards for project profitability, utilization rates, and pipeline visibility. Combine operational and financial KPIs in a single source of truth for smarter decisions." },
  { icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", title: "Seamless Integration with SAP S/4HANA", body: "Connect project management, HR, procurement, and finance in a unified platform for end-to-end visibility and control across your service delivery operations." },
  { icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2", title: "Intelligent Contract & Vendor Management", body: "Automate contract creation, track deliverables, and manage subcontractor relationships with AI-driven insights to reduce risk and improve compliance." },
  { icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 1 0-13.4 2.1A4 4 0 0 0 3 15z", title: "RISE and GROW with SAP", body: "Accelerate your cloud ERP journey and adopt subscription-based SAP solutions that scale with your firm's growth, ensuring continuous innovation and competitive differentiation." },
];

const BENEFITS = [
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Enhanced Operational Efficiency", body: "Eliminate manual bottlenecks and streamline workflows across the project lifecycle." },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", title: "Optimized Resource Utilization", body: "Deploy the right talent at the right time to maximize billability and project success." },
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Faster Revenue Cycles", body: "Automate billing and recognition to accelerate cash flow and reduce DSO." },
  { icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3", title: "Greater Business Agility", body: "Scale operations, enter new markets, and respond to client demands with confidence." },
  { icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z", title: "Improved Decision-Making", body: "Real-time analytics and AI insights empower leaders with actionable intelligence." },
];

const WHY_SIERRA = [
  { icon: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12", title: "Proven SAP Expertise", body: "Deep implementation experience across SAP S/4HANA, PSO, and Revenue Accounting for professional services firms." },
  { icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z", title: "Industry-Focused Solutions", body: "Tailored accelerators and pre-built templates designed for consulting, IT services, and managed services firms." },
  { icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18", title: "Innovation-Driven Approach", body: "Continuous investment in AI, automation, and next-gen SAP capabilities to future-proof your firm." },
  { icon: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4", title: "Commitment to Security & Compliance", body: "Robust data governance and audit-ready processes to protect your firm and your clients." },
  { icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6", title: "Scalable & Future-Ready Solutions", body: "Flexible architectures that adapt as your business evolves and client needs change." },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <header className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40" style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}>
        <Decoration className="inset-0 opacity-[0.07]"><TopoLines className="h-full w-full" tone="white" /></Decoration>
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25"><OrbCluster className="h-full w-full" variant="sky-emerald" /></Decoration>
        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="hero-reveal hero-d0"><Eyebrow tone="dark">Professional Services · SAP Solutions</Eyebrow></div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">SAP Professional Services <em className="font-serif italic font-extralight opacity-90">Solutions.</em></h1>
            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2" style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}>Sierra Digital empowers professional services firms to streamline operations, maximize project profitability, and accelerate growth through intelligent SAP-powered solutions.</p>
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
          <Stat value="AI-Driven" label="Project management and resource optimization" data-delay="0" />
          <Stat value="SAP S/4HANA" label="Financial and ERP integration" data-delay="100" />
          <Stat value="Automated" label="Revenue and billing processes" data-delay="200" />
          <Stat value="RISE" label="Cloud ERP modernization pathway" data-delay="300" />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading index="01" eyebrow="Key Challenges" eyebrowTone="primary" title="Key Challenges in Professional Services" subtitle="The Professional Services industry faces increasing pressure to deliver more value with fewer resources. Common challenges include:" align="center" size="xl" />
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
        <SectionHeading index="02" eyebrow="Features" eyebrowTone="primary" title="Features" subtitle="Sierra Digital delivers end-to-end SAP solutions purpose-built for professional services organizations:" align="center" size="xl" />
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
        <SectionHeading index="03" eyebrow="Benefits" eyebrowTone="accent" title="Benefits of Partnering with Sierra Digital" subtitle="Organizations that implement Sierra Digital's professional services solutions achieve:" align="center" size="xl" />
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

      <HandsCTA eyebrow="Transform professional services" title={<>Ready to Transform your Professional Services Operations <em className="font-serif italic">with SAP-Powered Solutions?</em></>} primaryLabel="Ask Our Expert" primaryHref="/contact/" secondaryLabel="Explore Solutions" secondaryHref="/contact/" />
    </>
  );
}
