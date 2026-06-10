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
  title: "Advancing Aerospace & Defense with SAP Solutions",
  description: "Transform aerospace and defense operations with SAP S/4HANA, SAP Cloud ERP, and industry-specific SAP Aerospace & Defense solutions. Sierra Digital delivers secure, compliant, and scalable aerospace digital transformation.",
  alternates: { canonical: "https://sierradigitalinc.com/aerospace-defense/" },
};

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />{d2 && <path d={d2} />}
    </svg>
  );
}

const FEATURES = [
  { icon: "M22 12h-4l-3 9L9 3l-3 9H2", title: "AI-Driven Predictive Maintenance", body: "Utilize AI and IoT integration to anticipate and prevent equipment failures, ensuring mission readiness." },
  { icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", title: "End-to-End Supply Chain Optimization", body: "Gain real-time visibility and automation across procurement, logistics, and inventory management." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Advanced Compliance & Security Frameworks", body: "Automate compliance tracking and reporting to meet ITAR, DFARS, and other industry regulations." },
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Integrated Financial & Budget Management", body: "Improve cost tracking, contract management, and financial forecasting with SAP S/4HANA." },
  { icon: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v6H3z", title: "Real-Time Operational Insights with SAP Business Data Cloud", body: "Access live dashboards for asset performance, logistics tracking, and workforce efficiency." },
  { icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 1 0-13.4 2.1A4 4 0 0 0 3 15z", title: "RISE with SAP", body: "Leverage Sierra Digital's RISE offering to transition to cloud-based ERP systems for enhanced agility and cost-effectiveness." },
];

const BENEFITS = [
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Enhanced Operational Readiness", body: "Ensure assets, fleets, and infrastructure are mission-ready at all times." },
  { icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", title: "Improved Supply Chain Resilience", body: "Strengthen supplier coordination, reduce delays, and optimize inventory levels." },
  { icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", title: "Regulatory Compliance Assurance", body: "Automate and simplify compliance tracking to avoid costly violations." },
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Increased Cost Efficiency", body: "Reduce waste, improve procurement strategies, and maximize budget utilization." },
  { icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6", title: "Scalable & Secure Digital Transformation", body: "Future-proof operations with cloud-based, AI-driven solutions designed for high-security environments." },
];

const WHY_SIERRA = [
  { icon: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12", title: "Proven Expertise", body: "Extensive experience in delivering SAP solutions tailored for Aerospace & Defense." },
  { icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z", title: "Industry-Specific Solutions", body: "Designed to meet the unique challenges of highly regulated and mission-critical environments." },
  { icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18", title: "Innovation-Driven Approach", body: "Leveraging AI, automation, and predictive analytics to drive operational excellence." },
  { icon: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4", title: "Compliance & Security First", body: "Ensuring cybersecurity, ITAR compliance, and data integrity across all solutions." },
  { icon: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3", title: "Scalable, Future-Ready Technology", body: "Enabling organizations to adapt and thrive in an evolving landscape." },
];

export default function AerospaceDefensePage() {
  return (
    <>
      <header className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40" style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}>
        <Decoration className="inset-0 opacity-[0.07]"><TopoLines className="h-full w-full" tone="white" /></Decoration>
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25"><OrbCluster className="h-full w-full" variant="sky-emerald" /></Decoration>
        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="hero-reveal hero-d0"><Eyebrow tone="dark">Aerospace &amp; Defense · SAP Solutions</Eyebrow></div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">Advancing Aerospace &amp; Defense <em className="font-serif italic font-extralight opacity-90">with SAP.</em></h1>
            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2" style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}>Sierra Digital delivers cutting-edge SAP solutions that streamline operations, improve financial oversight, and enable real-time decision-making to support mission-critical initiatives.</p>
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
          <Stat value="ITAR" label="Compliance automation for A&D operations" data-delay="0" />
          <Stat value="AI + IoT" label="Predictive maintenance for mission readiness" data-delay="100" />
          <Stat value="RISE" label="Cloud ERP transition pathway" data-delay="200" />
          <Stat value="Real-Time" label="Dashboards for operations and logistics" data-delay="300" />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading index="01" eyebrow="Features" eyebrowTone="primary" title="Features" subtitle="The Aerospace & Defense industries operate in highly complex and regulated environments, requiring secure, efficient, and data-driven solutions. Organizations must optimize supply chains, enhance asset management, and ensure compliance with stringent regulatory standards." align="center" size="xl" />
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
        <SectionHeading index="02" eyebrow="Benefits" eyebrowTone="accent" title="Benefits of Partnering with Sierra Digital" subtitle="By implementing SAP solutions tailored for Aerospace & Defense, organizations can achieve:" align="center" size="xl" />
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
            { label: "The BTP-based owner relations portal", body: "This client is a leading shale oil and gas producer, one of the largest in the deepwater Gulf of Mexico and a key natural gas producer and supplier to Peninsular Malaysia and Thailand. The company is also engaged in exploration and appraisal activities offshore Guyana, participating in one of the industry's largest oil discoveries in the past decade." },
            { label: "Streamline owner relations with a self-service portal", body: "This client is one of the largest and most diversified midstream energy companies in North America. With approximately 90,000 miles of pipelines and associated energy infrastructure across 38 states and Canada, this client transports the oil and gas products that energize millions of lives. Success has led this client to embrace digital transformation in recent years as for distinctive business advantage." },
            { label: "Solution is scalable and Clean Core Compliant", body: "This client is committed to the efficient and effective exploration and production of oil and natural gas. Producing oil and natural gas and getting them to market takes ingenuity, technology and investment. Their innovative, collaborative efforts yield products that improve quality of life globally while producing economic benefits with far-reaching influence." },
          ].map((s, i) => (
            <div key={s.label} className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200" data-delay={String(i * 100)} style={{ background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)", boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)" }}>
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">{s.label}</p>
              <p className="text-ink-2 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <HandsCTA eyebrow="Elevate your operations" title={<>Ready to Elevate Your Aerospace &amp; Defense <em className="font-serif italic">Operations?</em></>} subtitle="Contact us today to schedule a consultation and take the first step toward secure, data-driven digital transformation." primaryLabel="Ask Our Expert" primaryHref="/contact/" secondaryLabel="Explore Solutions" secondaryHref="/contact/" />
    </>
  );
}
