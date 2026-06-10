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
  title: "Public Sector Digital Transformation & SAP Solutions",
  description: "Empower public sector organizations with advanced SAP, AI, analytics & secure digital solutions to boost efficiency, compliance, and decision-making. Learn more.",
  alternates: { canonical: "https://sierradigitalinc.com/public-sector/" },
};

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />{d2 && <path d={d2} />}
    </svg>
  );
}

const SOLUTIONS = [
  { icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", title: "Seamless Integration with GenAI and SAP Business Data Cloud", body: "Utilize natural language modeling in conjunction with SAP GenAI Hub, Just Ask, and HANA Vectoring to create forms, query budget attachments, and analyze personnel expenses data." },
  { icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z", title: "Full-Featured Predictive/Prescriptive Analytics", body: "Leverage advanced analytics to discern key metrics, build multiple outcome scenarios, and save models for future use, enhancing decision-making capabilities." },
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "AI-Powered Communication", body: "Automate the creation of emails and forms by pre-populating them with AI-generated content from existing system files, eliminating time-intensive processes." },
  { icon: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4", title: "Enhanced Security for Sensitive Information", body: "Protect sensitive customer data, including addresses, tax information, and bank account details, by exchanging data via SAP-managed secure APIs." },
  { icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", title: "Transparent Decision-Making Protocols", body: "Streamline decision-making by establishing workflows that route tasks to stakeholders for review and approval, ensuring a trackable history and sustainable compliance." },
];

const BENEFITS = [
  { icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", title: "Increased Efficiency", body: "Automate manual tasks and streamline workflows, reducing administrative burdens and enhancing productivity." },
  { icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", title: "Cost Savings", body: "Optimize resource allocation and minimize errors, leading to reduced operational costs." },
  { icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z", title: "Data-Driven Decision-Making", body: "Leverage advanced analytics to inform strategic decisions, enhancing service delivery and policy effectiveness." },
  { icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", title: "Simplified Compliance", body: "Streamline regulatory reporting and analysis, ensuring adherence to complex compliance requirements." },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", title: "Enhanced Collaboration", body: "Facilitate seamless communication and data sharing across departments and agencies, promoting a more cohesive Public Sector." },
];

const WHY_SIERRA = [
  { icon: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12", title: "Proven Expertise", body: "Extensive experience in serving state, local, and educational districts." },
  { icon: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z", title: "Tailored Solutions", body: "Customized approaches that align with unique Public Sector needs." },
  { icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18", title: "Cutting-Edge Technology", body: "Expertise in AI, automation, and cloud technologies." },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", title: "Collaborative Partnership", body: "Working closely with clients to achieve their goals." },
  { icon: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6", title: "Proven Results", body: "Demonstrated success in delivering tangible value to Public Sector organizations." },
];

export default function PublicSectorPage() {
  return (
    <>
      <header className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40" style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}>
        <Decoration className="inset-0 opacity-[0.07]"><TopoLines className="h-full w-full" tone="white" /></Decoration>
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25"><OrbCluster className="h-full w-full" variant="sky-emerald" /></Decoration>
        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="hero-reveal hero-d0"><Eyebrow tone="dark">Public Sector · SAP Digital Transformation</Eyebrow></div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">Public Sector Digital <em className="font-serif italic font-extralight opacity-90">Transformation.</em></h1>
            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2" style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}>The Public Sector requires specialized solutions to deliver reliable services to hundreds of millions of Americans, and Sierra meets this need with expert resources and world-class industry insight.</p>
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
          <Stat value="GenAI" label="Natural language queries for government" data-delay="0" />
          <Stat value="Secure" label="SAP-managed APIs for sensitive data" data-delay="100" />
          <Stat value="Analytics" label="Predictive decision support" data-delay="200" />
          <Stat value="Efficient" label="Automated workflows and compliance" data-delay="300" />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading index="01" eyebrow="Public Sector Solutions" eyebrowTone="primary" title="Public Sector Solutions" align="center" size="xl" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <div key={s.title} className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200" data-delay={String(Math.min(i * 70, 400))} style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)", boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)" }}>
              <div className="flex items-center gap-3"><span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" /><span className="text-primary-700"><Icon d={s.icon} /></span></div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{s.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="canvas">
        <SectionHeading index="02" eyebrow="Benefits" eyebrowTone="accent" title="Benefits for Public Sector Organizations" subtitle="Our solutions deliver significant benefits to Public Sector entities, including:" align="center" size="xl" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className="will-reveal rounded-2xl border border-accent-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200" data-delay={String(Math.min(i * 70, 400))} style={{ background: "linear-gradient(145deg, #fff5ed 0%, #ffe7d4 55%, #ffcaa8 100%)", boxShadow: "0 4px 20px rgba(244,78,18,0.10), 0 1px 4px rgba(244,78,18,0.06)" }}>
              <div className="flex items-center gap-3"><span className="h-8 w-0.75 rounded-full bg-accent-500 shrink-0" /><span className="text-accent-600"><Icon d={b.icon} /></span></div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{b.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-ink-2 text-sm">Sierra Digital serves Public Sector all over the world. Here are just a few of the clients we&apos;ve served recently.</p>
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
            { label: "Sierra Helps City Government Optimize Payroll", body: "It's the largest city in the United States by land area; 4th largest by population. It's the Oil and Gas Capital of the World. Space Capital, too. But ask residents what makes the city so distinct, and you'll find a common theme: Diversity." },
            { label: "Sierra Automates Business Partner Onboarding", body: "This client is a New York State public-benefit corporation created in 1960 to build and preserve affordable multifamily rental housing throughout New York State. The client sells bonds and uses the proceeds to make mortgages to affordable housing developers." },
            { label: "Sierra Solves Problems for Leading American City", body: "With its warm, year-round climate, 50 miles of sun-soaked coastline and world famous attractions, this client is a top tourist destination. But this metropolis with a laid-back vibe is also home to cutting-edge businesses in life sciences, genomics, biotechnology, telecommunications, Smart City technology, software, electronics, and other major innovative industries." },
          ].map((s, i) => (
            <div key={s.label} className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200" data-delay={String(i * 100)} style={{ background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)", boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)" }}>
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">{s.label}</p>
              <p className="text-ink-2 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <HandsCTA eyebrow="Enhance public operations" title={<>Ready to Enhance your <em className="font-serif italic">Public Sector Operations?</em></>} subtitle="Contact us today to learn how Sierra Digital can help you achieve your goals." primaryLabel="Ask Our Expert" primaryHref="/contact/" secondaryLabel="Explore Solutions" secondaryHref="/contact/" />
    </>
  );
}
