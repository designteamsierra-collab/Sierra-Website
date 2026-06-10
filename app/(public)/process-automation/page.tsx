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
  title: "SAP BTP Business Process Automation | Sierra Digital",
  description:
    "Enhance efficiency with SAP BTP Process Automation. Sierra Digital delivers low-code/no-code automation, custom BTP apps, and enterprise-grade workflow optimization.",
  alternates: { canonical: "https://sierradigitalinc.com/process-automation/" },
};

// ── Shared icon ───────────────────────────────────────────────────────────────

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
      {d2 && <path d={d2} />}
    </svg>
  );
}

// ── Features (5 teal cards) ───────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2m-6 9l2 2 4-4",
    title: "Automate Business Partner onboarding",
    body: "Using SAP Document Information Extraction, our BTP apps can collect data from PDFs and automatically populate Business Partner forms.",
  },
  {
    icon: "M1 4h22v16H1zM1 10h22",
    title: "Automate Accounts Receivable and Payable Processes",
    body: "Utilizing the latest AI technology, our BTP apps can automate accounts payable and receivable processes, saving time, strengthening cashflow, and improving accuracy.",
  },
  {
    icon: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Automate Capital Project Set-Up",
    body: "Slash manhours and eliminate repetitive manual processes by automating the set-up of capital projects in SAP EPPM.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    title: "Automate Owner Relations Management",
    body: "Centralize royalty owner data into a self-service portal, eliminating the need for back-and-forth calls and manual updates to owner data.",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Automate Data Job Monitoring",
    body: "With automatic notifications, BTP apps from Sierra Digital can monitor data flow and bring increased security to mergers and acquisitions, migrations, and other data flow jobs.",
  },
];

// ── Benefits (5 terracotta cards — first 5 items of Benefits CardGrid) ────────

const BENEFITS = [
  {
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Cost Savings through Operational Efficiency",
    body: "Automation reduces manual workloads, minimizing labor costs and freeing up employees to focus on high-value tasks. This leads to significant cost savings and more efficient resource utilization.",
  },
  {
    icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3",
    title: "Improved Process Accuracy and Consistency",
    body: "By eliminating human errors, automated processes ensure accurate data entry, consistent workflows, and standardized outputs. This improves the reliability of business operations and decision-making.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Faster Time-to-Market",
    body: "Automated workflows accelerate task completion and decision-making, reducing delays and enabling faster delivery of products or services to customers. This enhances competitiveness and customer satisfaction.",
  },
  {
    icon: "M4 8h16M4 16h16M2 12h20",
    title: "Scalability and Flexibility",
    body: "Automation supports seamless scaling of operations, allowing businesses to handle increased workloads and adapt to new opportunities without a proportional increase in resources.",
  },
  {
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    title: "Enhanced Customer and Employee Experiences",
    body: "With repetitive tasks automated, employees can focus on meaningful work, improving job satisfaction and productivity. For customers, quicker and error-free processes result in improved service quality and experience.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ProcessAutomationPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          HERO — Sierra teal-primary gradient
          ───────────────────────────────────────────────────────────────────── */}
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
              <Eyebrow tone="dark">SAP BTP · Business Process Automation</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Process{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Automation.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Sierra Digital is committed to delivering reliable business value with bottom-dollar
              results, and process automation on the SAP Business Technology Platform allows our
              customers to save time and money while eliminating the human errors native to manual
              processes.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Contact us
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Process Automation →
              </Button>
            </div>
          </div>
        </Container>

        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* ─────────────────────────────────────────────────────────────────────
          STATS — canvas (white)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas" density="compact">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
          <Stat value="6 Weeks"   label="From kickoff to live BTP automation"       data-delay="0" />
          <Stat value="SAP BTP"   label="Low-code / no-code automation platform"    data-delay="100" />
          <Stat value="AI-Driven" label="Document extraction &amp; process AI"      data-delay="200" />
          <Stat value="Zero"      label="Human errors in automated workflows"        data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES SPOTLIGHT — alt
          Heading outside · spotlight card with intro text
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Features"
          eyebrowTone="primary"
          title="BTP Automation Features"
          align="center"
          size="xl"
        />
        <div className="mx-auto max-w-4xl">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Bespoke SAP BTP Development
            </p>
            <p className="text-ink-2 leading-relaxed">
              With bespoke development on SAP BTP, these and more features can be available to SAP
              users at your enterprise in as little as six weeks:
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES 01 — canvas (white)  ·  5 teal cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Automation Features"
          eyebrowTone="primary"
          title="What We Can Automate for Your Enterprise"
          subtitle="With bespoke development on SAP BTP, these and more features can be available to SAP users at your enterprise in as little as six weeks:"
          align="center"
          size="xl"
        />

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
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={f.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {f.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          BENEFITS 02 — alt  ·  5 terracotta cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Benefits"
          subtitle="Centering real business value at the heart of everything we do, Sierra is committed to delivering benefits that make your life easier:"
          align="center"
          size="xl"
        />

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
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-accent-500 shrink-0" />
                <span className="text-accent-600"><Icon d={b.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {b.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          HOW WE HELP 03 — canvas (white)
          Client success story + closing block
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
          eyebrow="How We Help"
          eyebrowTone="primary"
          title="How We Help"
          subtitle="The SAP Business Technology Platform is the future of customization:"
          align="center"
          size="xl"
        />

        <div className="mx-auto max-w-4xl flex flex-col gap-6">
          {/* Client success story */}
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              This Client Automated Revenue Processing and Reconciled Data From Disparate Sources
            </p>
            <p className="text-ink-2 leading-relaxed">
              This client has grown to be one of the world&apos;s leading social forums and an
              important streaming service. With global reach and the devoted attention of its eager
              fans, this client sees more than 30 million users each day. They field more than 9
              million content creators and provide content in more than 30 languages.
            </p>
          </div>

          {/* Closing block */}
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.12), 0 1px 6px rgba(33,138,163,0.07)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Boost Efficiency, Reduce Costs, and Scale your Business
            </p>
            <p className="text-ink-2 leading-relaxed">
              Discover how process automation can transform your enterprise.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
        secondaryLabel="Explore Process Automation"
        secondaryHref="/contact/"
      />
    </>
  );
}
