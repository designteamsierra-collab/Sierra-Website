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
  title: "SAP Midstream Solutions for Oil & Gas | Sierra Digital",
  description:
    "Discover SAP Midstream Solutions by Sierra Digital to optimize midstream oil & gas operations using SAP S/4HANA, SAP BTP, and AI-driven automation for compliant, efficient asset operations.",
  alternates: { canonical: "https://sierradigitalinc.com/midstream-solutions/" },
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
    icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    title: "Get answers to natural language queries",
    body: "Access important business data with natural language queries through AI-powered chatbots.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Ensure compliance with regulatory standards",
    body: "Get clearer insight on regulatory guidelines and helpful insights on how to maintain compliance.",
  },
  {
    icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    title: "Schedule smarter with a single source of truth",
    body: "Reconcile data from disparate sources into SAP Master Data to streamline scheduling and promote efficiency.",
  },
  {
    icon: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
    title: "Automate purchasing to save time and reduce waste",
    body: "Utilize AI-enhanced procurement assistants to streamline order forms and compare your needed materials to existing inventory.",
  },
  {
    icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
    title: "Budget more accurately for shutdowns and turnarounds",
    body: "Unify planning data from disparate sources to streamline planning, minimize variance, and drive operational efficiency.",
  },
];

// ── Benefits (5 terracotta cards) ─────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    title: "Connect reliably and sustainably with your existing SAP ERP System",
    body: "Solution provides secure, confident connection to SAP and third-party sources through SAP-managed APIs.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Gain seamless integration with GenAI and SAP Analytics Cloud",
    body: "Create forms, ask questions on attachments, query data — all using natural language modeling in union with SAP GenAI Hub, Just Ask and SAP HANA Vectoring.",
  },
  {
    icon: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v6H3z",
    title: "Unify sources, apps, siloes, and processes into a single user-friendly tool",
    body: "Solutions provide a single, central, virtual monitoring, evaluation & automated reporting repository to assure results-driven management.",
  },
  {
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    title: "Best practice-based processes and workflows, easily and rapidly tailored to your unique requirements",
    body: "The technical and functional experts at Sierra Digital bring world-class expertise to solution design, ensuring proven value and best-practice-based methods.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Secure and permissionable access, affording role-based visibility to key stakeholders",
    body: "With the highest standards for security, trust Sierra Digital's pre-built content on SAP BTP to provide reliable, responsible business advantage.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MidstreamSolutionsPage() {
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
              <Eyebrow tone="dark">Midstream Solutions · SAP BTP for Plants &amp; Refineries</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              SAP Midstream{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Solutions.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Sierra Digital supplies application extensions built on SAP BTP and enhanced with AI
              to drive value in plants and refineries — among the first SAP partners to develop AI
              use cases for Oil &amp; Gas.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Contact us
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Solutions →
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
          <Stat value="SAP BTP"    label="Pre-built industry solutions available in six weeks"  data-delay="0" />
          <Stat value="AI-Enhanced" label="Natural language queries and automation"              data-delay="100" />
          <Stat value="Gen AI"     label="SAP HANA vectoring and SAC integration"               data-delay="200" />
          <Stat value="Secure"     label="Role-based access and permissionable visibility"      data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          OVERVIEW SPOTLIGHT — alt
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Midstream Solutions on SAP BTP"
          eyebrowTone="primary"
          title="AI-Powered Solutions for Plants &amp; Refineries"
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
              SAP BTP-Powered Midstream Operations
            </p>
            <p className="text-ink-2 leading-relaxed">
              Sierra Digital supplies application extensions built on SAP BTP and enhanced with AI
              to drive value in plants and refineries. Among the first SAP partners to develop AI
              use cases, Sierra is supplying the latest in cloud technology to SAP customers in Oil
              &amp; Gas, Chemicals, Agriculture, Manufacturing, and beyond. Our industry solutions
              for plants &amp; refineries help make the most of maintenance. As one of the largest
              expenses in a plant environment, maintenance is an ideal target for process
              optimization, and using AI to relieve man hours, maintain compliance, lower purchasing
              costs, and drive efficiency, Sierra slashes the cost associated with plant and
              refinery maintenance, improving your bottom dollar.
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
          eyebrow="Features"
          eyebrowTone="primary"
          title="Features"
          subtitle="With pre-built industry solutions on SAP BTP, these and more features can be available to SAP users at your enterprise in as little as six weeks:"
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 70, 400))}
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
          BENEFITS 02 — alt  ·  5 terracotta cards + How We Help spotlight
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
              data-delay={String(Math.min(i * 70, 400))}
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

        {/* How We Help spotlight with YouTube link */}
        <div className="mt-6 mx-auto max-w-4xl">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              How We Help
            </p>
            <p className="text-ink-2 leading-relaxed">
              We often hear from customers: &ldquo;We have BTP, but we don&apos;t know what to do
              with it.&rdquo; With pre-built content on SAP BTP, Sierra Digital enables customers
              to make use of a service they — often — already have. Our best-practice-based apps
              are designed in consortium with functional experts to bring proven value to lines of
              business across the enterprise. Utilize pre-built content on SAP BTP to provide
              efficient, economical aid to the SAP users at your enterprise. With SAP BTP,
              you&apos;ll simplify and enhance processes while extending the value of your current
              SAP investment.
            </p>
            <a
              href="https://youtu.be/iQarIDJ7VIc?si=8GvzJnkYkrLbyJbs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 underline break-all text-sm hover:text-primary-800 transition-colors"
            >
              https://youtu.be/iQarIDJ7VIc?si=8GvzJnkYkrLbyJbs
            </a>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          SUCCESS STORIES 03 — canvas (white)  ·  2 Block spotlights
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="03"
          eyebrow="Success Stories"
          eyebrowTone="primary"
          title="Success Stories"
          align="center"
          size="xl"
        />

        <div className="flex flex-col gap-6 mx-auto max-w-4xl">
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Smart Compliance: How an Energy Giant Uses AI to Optimize Operations
            </p>
            <p className="text-ink-2 leading-relaxed">
              This client is one of the largest and most diversified midstream energy companies in
              North America. With approximately 90,000 miles of pipelines and associated energy
              infrastructure across 38 states and Canada, this client transports the oil and gas
              products that energize millions of lives. Success has led this client to embrace
              digital transformation in recent years as for distinctive business advantage.
            </p>
          </div>

          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            data-delay="100"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Connect Businesses with Cutting-Edge Technologies for Innovation
            </p>
            <p className="text-ink-2 leading-relaxed">
              Don&apos;t wait – future-proof your business now!
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Get started today"
        title={
          <>
            Ready to get started?{" "}
            <em className="font-serif italic">Talk to our experts.</em>
          </>
        }
        subtitle="Talk to our SAP experts about your transformation."
        primaryLabel="Contact us"
        primaryHref="/contact/"
        secondaryLabel="Explore Solutions"
        secondaryHref="/contact/"
      />
    </>
  );
}
