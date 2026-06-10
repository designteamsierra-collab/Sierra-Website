import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { StepStrip } from "@/components/ui/StepStrip";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "SAP Low-Code/No-Code Development Services | Sierra Digital",
  description:
    "Accelerate SAP innovation with Low-Code/No-Code solutions on SAP BTP. Sierra Digital delivers rapid application development, workflow automation, and AI-driven enhancements.",
  alternates: { canonical: "https://sierradigitalinc.com/low-code-no-code/" },
};

// ── Shared icon set ───────────────────────────────────────────────────────────

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
      {d2 && <path d={d2} />}
    </svg>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "M3 3v18h18",
    d2: "m19 9-5 5-4-4-3 3",
    title: "Leverage Predictive Analytics",
    body: "Embedded with advanced analytics, our solutions provide users with the insights they need to fuel data-driven decision-making.",
  },
  {
    icon: "M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
    title: "Easily Create Dynamic Forms with GenAI",
    body: "AI-driven tools enable users to design and customize budget request form layouts quickly and efficiently.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "Streamline Business Partner Onboarding",
    body: "Using SAP Document Information Extraction, our BTP apps automatically extract data from PDFs and populate Business Partner forms with accuracy.",
  },
  {
    icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    title: "Access Instant Insights with Natural Language Queries",
    body: "With AI-powered chatbots leveraging SAP services, users can retrieve crucial organizational data effortlessly through simple queries.",
  },
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Optimize Accounts Receivable and Payable Processes",
    body: "Harnessing the latest AI advancements, our BTP applications automate accounts payable and receivable workflows, improving accuracy, enhancing cash flow, and saving valuable time.",
  },
];

// ── Benefits ──────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    title: "Cost Savings through Development Efficiency",
    body: "By reducing the need for complex coding and lengthy development cycles, low-code/no-code applications lower development costs and accelerate time-to-value.",
  },
  {
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Increased Business Agility",
    body: "Sierra Digital's low-code/no-code solutions enable organizations to respond swiftly to market changes, regulatory requirements, and new business opportunities without extensive IT involvement.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Empowered Workforce and Innovation",
    body: "By putting process improvements in the hands of business users, organizations foster a culture of innovation and efficiency across all levels.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
    title: "Scalability and Flexibility",
    body: "Low-code/no-code applications developed by Sierra Digital can scale seamlessly as business needs evolve, ensuring long-term adaptability and sustainability.",
  },
  {
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    title: "Improved Customer and Employee Experiences",
    body: "With faster process enhancements and more efficient digital experiences, organizations can enhance both customer engagement and employee productivity.",
  },
];

// ── Success stories (3 cards — from Block content) ────────────────────────────

const STORIES = [
  {
    tag: "Public Sector",
    tagClass: "bg-primary-200 text-primary-800",
    borderClass: "border-primary-200 hover:border-primary-400",
    accentBar: "bg-primary-500",
    gradient: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
    shadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
    icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    d2: "M9 22V12h6v10",
    title: "City Government Optimizes Budgets with Solution Built on SAP BTP",
    body: "It's the largest city in the United States by land area; 4th largest by population. It's the Oil and Gas Capital of the World. Space Capital, too. But ask residents what makes the city so distinct, and you'll find a common theme: Diversity.",
  },
  {
    tag: "Energy & Oil",
    tagClass: "bg-accent-200 text-accent-800",
    borderClass: "border-accent-200 hover:border-accent-400",
    accentBar: "bg-accent-500",
    gradient: "linear-gradient(145deg, #fff5ed 0%, #ffcaa8 50%, #ffa470 100%)",
    shadow: "0 6px 28px rgba(244,78,18,0.16), 0 1px 6px rgba(244,78,18,0.09)",
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    title: "Major Oil Customer Automates Capital Project Set-Up",
    body: "This client is committed to the efficient and effective exploration and production of oil and natural gas. Producing oil and natural gas and getting them to market takes ingenuity, technology and investment. Their innovative, collaborative efforts yield products that improve quality of life globally while producing economic benefits with far-reaching influence.",
  },
  {
    tag: "Media & Streaming",
    tagClass: "bg-canvas-2 text-ink-2",
    borderClass: "border-line-strong hover:border-ink",
    accentBar: "bg-ink",
    gradient: "linear-gradient(145deg, #f2f1ed 0%, #ece9e1 50%, #d6d3ca 100%)",
    shadow: "0 6px 28px rgba(15,23,42,0.09), 0 1px 6px rgba(15,23,42,0.05)",
    icon: "M15 10l4.553-2.277A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z",
    title: "Streaming Giant Automates Revenue Processing with BTP",
    body: "This client has grown to be one of the world's leading social forums and an important streaming service. With global reach and the devoted attention of its eager fans, this client sees more than 30 million users each day. They field more than 9 million content creators and provide content in more than 30 languages.",
  },
];

// ── Why Sierra differentiators ────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
    title: "SAP BTP Native Development",
    body: "Every low-code/no-code application is purpose-built on SAP Business Technology Platform — seamlessly integrated with your SAP ERP and aligned with SAP's innovation roadmap.",
  },
  {
    icon: "M12 8v4l3 3M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z",
    title: "Six-Week Deployment",
    body: "With bespoke development on SAP BTP, features can be available to SAP users at your enterprise in as little as six weeks — fast time-to-value without long implementation cycles.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    title: "Clean Core Friendly",
    body: "All low-code/no-code applications are built as side-by-side BTP extensions — a Clean Core-friendly approach that supports rapid process improvements without modifying your SAP core.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    title: "End-to-End Partnership",
    body: "From use case workshop and solution design through go-live and iteration — Sierra Digital is your single accountable partner across the full low-code/no-code journey.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LowCodeNoCodePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          HERO — Sierra teal-primary gradient, Fraunces display type
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
              <Eyebrow tone="dark">SAP BTP · Low-Code / No-Code</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Rapid SAP innovation —{" "}
              <em className="font-serif italic font-extralight opacity-90">
                without the code.
              </em>
            </h1>

            <p className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "40rem" }}>
              Sierra Digital is committed to delivering reliable business value with bottom-dollar
              results, and our low-code/no-code applications on the SAP Business Technology Platform
              enable rapid, cost-effective process enhancements for SAP users across Lines of
              Business (LoB).
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Book a Discovery Call
              </Button>
              <Button href="/contact/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Low-Code on BTP →
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
          <Stat value="200+" label="SAP clients served"          data-delay="0" />
          <Stat value="20+"  label="Years of SAP expertise"      data-delay="100" />
          <Stat value="6wk"  label="Average deployment timeline" data-delay="200" />
          <Stat value="50+"  label="BTP apps delivered"          data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          UNLOCK YOUR POTENTIAL — canvas-2 (alt)
          Featured intro card from Block content
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt" density="compact">
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
              Unlock Your Business Potential
            </p>
            <p className="text-ink-2 text-lg leading-relaxed">
              By leveraging low-code/no-code solutions, Sierra Digital accelerates digital
              transformation, enhances agility, and empowers organizations to optimize workflows
              without the need for extensive custom development. Our solutions allow businesses to
              streamline operations, reduce IT backlogs, and quickly implement process improvements.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          FEATURES — canvas (white)
          Teal gradient cards — platform capabilities
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Features"
          eyebrowTone="primary"
          title="Powerful features live in as little as six weeks."
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
                <span className="text-primary-700">
                  <Icon d={f.icon} d2={"d2" in f ? (f as { d2?: string }).d2 : undefined} />
                </span>
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
          BENEFITS — canvas-2 (alt)
          Terracotta gradient cards — business outcomes
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="Benefits"
          eyebrowTone="accent"
          title="Business value at the heart of everything we do."
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
                <span className="text-accent-600">
                  <Icon d={b.icon} />
                </span>
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
          SUCCESS STORIES — canvas-warm
          Three differentiated client story cards
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="warm">
        <SectionHeading
          index="03"
          eyebrow="Success Stories"
          eyebrowTone="primary"
          title="Low-code impact across industries."
          subtitle="The SAP Business Technology Platform is the future of enterprise application enhancement. Low-code/no-code applications on SAP BTP provide a modern, Clean Core-friendly approach that supports rapid process improvements while adhering to best practices in digital transformation."
          align="center"
          size="xl"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {STORIES.map((s, i) => (
            <div
              key={s.tag}
              className={`will-reveal rounded-3xl border-2 p-8 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 ${s.borderClass}`}
              data-delay={String(i * 100)}
              style={{ background: s.gradient, boxShadow: s.shadow }}
            >
              <span className={`block h-1 w-10 rounded-full ${s.accentBar}`} />

              <span className={`self-start rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest uppercase ${s.tagClass}`}>
                {s.tag}
              </span>

              <span className={s.accentBar.replace("bg-", "text-").replace("-500", "-600").replace("bg-ink", "text-ink")}>
                <Icon d={s.icon} d2={"d2" in s ? (s as { d2?: string }).d2 : undefined} />
              </span>

              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY SIERRA — canvas-2 (alt)
          Split: heading left with How We Help text, 2×2 cards right
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            index="04"
            eyebrow="How We Help"
            eyebrowTone="primary"
            title={<>Don&apos;t wait — <em className="font-serif italic">future-proof now.</em></>}
            subtitle="Many enterprises seek to reduce reliance on extensive custom coding, which can become a burden when updating or maintaining their systems. Sierra Digital helps organizations move fast while maintaining system integrity through Clean Core-friendly low-code/no-code solutions."
            align="left"
            size="lg"
            bottomGap="tight"
          >
            <Button href="/about-us/" variant="secondary" size="md">
              Read our story →
            </Button>
          </SectionHeading>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <div
                key={d.title}
                className="will-reveal rounded-2xl border border-primary-100 p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-200"
                data-delay={String(i * 80)}
                style={{
                  background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 60%, #aedce8 100%)",
                  boxShadow: "0 4px 20px rgba(33,138,163,0.12), 0 1px 4px rgba(33,138,163,0.07)",
                }}
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-700 text-white">
                  <Icon d={d.icon} />
                </div>
                <h3 className="font-display text-ink text-lg font-light leading-snug tracking-tight">
                  {d.title}
                </h3>
                <p className="text-ink-2 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          PROCESS STEPS — canvas (white)
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="05"
          eyebrow="Our process"
          eyebrowTone="primary"
          title="From use case to live app — five focused phases."
          subtitle="Sierra Digital's structured low-code/no-code methodology delivers rapid, reliable results with every phase designed to maximise value and minimise risk."
          align="center"
          size="lg"
        />
        <StepStrip
          steps={[
            { title: "Use Case Workshop", body: "Identify and prioritize the highest-impact process improvement opportunities across your Lines of Business — ranked by business value, complexity, and data readiness." },
            { title: "Solution Design", body: "Architect the low-code/no-code solution on SAP BTP, selecting the right combination of SAP Build Apps, SAP Build Process Automation, AI services, and BTP integration components." },
            { title: "Rapid Development", body: "Build the application using SAP's low-code/no-code toolset and Sierra's reusable accelerators. AI-driven form design, document extraction, and chatbot components reduce build time significantly." },
            { title: "Testing & Validation", body: "Conduct user acceptance testing with business stakeholders. Validate accuracy, usability, and integration behaviour — iterating rapidly until the solution meets real-world requirements." },
            { title: "Go-Live & Iteration", body: "Deploy in as little as six weeks, then continuously improve. Sierra monitors adoption, resolves issues, and helps you scale the solution across additional Lines of Business as your needs grow." },
          ]}
        />
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Start your journey"
        title={<>Ready to get <em className="font-serif italic">started?</em></>}
        subtitle="Talk to our SAP experts about your transformation. Connect your business with cutting-edge technologies for innovation — don't wait, future-proof your business now!"
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="Explore Low-Code on BTP"
        secondaryHref="/contact/"
      />
    </>
  );
}
