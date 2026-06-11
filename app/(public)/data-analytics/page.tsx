import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "SAP Business Data Cloud & Analytics Solutions | Sierra Digital",
  description:
    "Unlock enterprise intelligence with SAP Business Data Cloud, SAP Databricks, SAP Datasphere, and SAP Analytics Cloud. Sierra Digital delivers scalable data, analytics, and AI-ready solutions for smarter business decisions.",
  alternates: { canonical: "https://sierradigitalinc.com/data-analytics/" },
};

const SOLUTIONS = [
  {
    title: "SAP Business Data Cloud",
    image: "https://sierradigitalinc.com/wp-content/uploads/2025/10/Business-Data-Cloud.webp",
    body: "If AI is a rocket ship, SAP's Business Data Cloud (BDC), is the future-ready launchpad. A modern, scalable solution for breaking down data silos, integrating and managing enterprise data across diverse sources.",
    href: "/sap-business-data-cloud/",
  },
  {
    title: "SAP Databricks",
    image: "https://sierradigitalinc.com/wp-content/uploads/2025/10/SAP-Databricks.webp",
    body: "One of the most strategic AI partnerships for SAP, Databricks is the de facto integration that allows for powerful AI workloads on a single, scalable architecture. Sierra Digital ensures organizations maximize the capabilities of Databricks.",
    href: "/databricks/",
  },
  {
    title: "SAP Datasphere",
    image: "https://sierradigitalinc.com/wp-content/uploads/2025/10/SAP-Datasphere.webp",
    body: "As the foundation of SAP Business Data Cloud, SAP Datasphere is an open, scalable, and AI-powered data fabric to unify enterprise data landscapes. Sierra delivers cost effective infrastructure and measurable value with SAP Datasphere.",
    href: "/infocus-readiness-assessment-for-sap-datasphere/",
  },
  {
    title: "SAP Analytics Cloud",
    image: "https://sierradigitalinc.com/wp-content/uploads/2025/10/Analytics-Cloud.webp",
    body: "SAP Analytics Cloud (SAC) is an all-in-one cloud solution that seamlessly integrates business intelligence, planning, and predictive analytics. Sierra's deep expertise helps you get the most out of this powerful solution.",
    href: "/sap-analytics-cloud/",
  },
];

export default function DataAnalyticsPage() {
  return (
    <>
      {/* Hero */}
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
              <Eyebrow tone="dark">Data &amp; Analytics · Sierra Digital</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Data for Every{" "}
              <em className="font-serif italic font-extralight opacity-90">Decision.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Your organization is a treasure trove of intelligence and insight, the fuel for all
              future innovations. Sierra&apos;s Data and Analytics suite can help you unlock that potential.
            </p>
            <div className="mt-2 hero-reveal hero-d3">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink shadow-md hover:bg-canvas-2 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* Decades of Data Expertise */}
      <Section tone="alt">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 will-reveal">
          <span className="block h-1 w-10 rounded-full bg-primary-500 mx-auto" />
          <h2 className="font-display text-ink text-3xl font-light leading-snug tracking-tight">
            Decades of Data Expertise
          </h2>
          <p className="text-ink-2 text-lg leading-relaxed">
            We assess, migrate, and transform data to power your business and AI aspirations.
          </p>
        </div>
      </Section>

      {/* Solutions */}
      <Section tone="canvas">
        <SectionHeading
          eyebrow="Our Solutions"
          eyebrowTone="primary"
          title="The Full Data & Analytics Stack"
          align="center"
          size="xl"
        />
        <div className="flex flex-col gap-8">
          {SOLUTIONS.map((s, i) => (
            <div
              key={s.title}
              className={`will-reveal rounded-2xl border border-primary-100 overflow-hidden flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""} hover:-translate-y-0.5 transition-all duration-200 bg-white`}
              data-delay={String(i * 80)}
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
            >
              <div className="lg:w-2/5 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-56 w-full object-cover lg:h-full"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-4 p-8 lg:w-3/5 justify-center">
                <span className="block h-1 w-8 rounded-full bg-primary-500" />
                <h3 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
                  {s.title}
                </h3>
                <p className="text-ink-2 text-sm leading-relaxed">{s.body}</p>
                <a
                  href={s.href}
                  className="mt-2 inline-flex items-center text-primary-600 text-sm font-semibold hover:text-primary-700 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing spotlight */}
      <Section tone="alt">
        <div
          className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 mx-auto max-w-3xl text-center"
          style={{
            background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
            boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
          }}
        >
          <span className="block h-1 w-10 rounded-full bg-primary-500 mx-auto" />
          <h2 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
            Connect Businesses with Cutting-Edge<br />Technologies for Innovation
          </h2>
          <div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-700 transition-colors"
            >
              Contact us now
            </a>
          </div>
        </div>
      </Section>

      <HandsCTA
        eyebrow="Unlock your data"
        title={<>Ready to turn your data into <em className="font-serif italic">intelligence?</em></>}
        subtitle="Talk to Sierra about SAP Business Data Cloud, Databricks, Datasphere, and Analytics Cloud — and how we help you get measurable value fast."
        primaryLabel="Get in touch"
        primaryHref="/contact/"
      />
    </>
  );
}
