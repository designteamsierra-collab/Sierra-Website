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
  title: "Azure Cloud Migration Bluesky - Sierra Digital",
  alternates: { canonical: "https://sierradigitalinc.com/azure-cloud-migration-bluesky/" },
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

// ── Confidence In The Now Moment (4 title-only items) ─────────────────────────

const CONFIDENCE_ITEMS = [
  "Lower cost",
  "Increased productivity",
  "Global scale",
  "Increased security",
];

// ── SAP on Azure Architecture (2 cards) ──────────────────────────────────────

const ARCHITECTURE_CARDS = [
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "SAP on Azure Architecture - Designing for Security",
    body: "This is the first in a four-part blog series on designing a great SAP on Azure Architecture, and will focus on designing for security. The blog is authored by Ravi Alwani, Senior Program Manager at Azure.",
  },
  {
    icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7 7 7 0 1 0-13.4 2.1A4 4 0 0 0 3 15z",
    title: "Disaster recovery for SAP HANA Systems on Azure",
    body: "This blog covers the design, technology, and recommendations for setting up disaster recovery (DR) for an enterprise customer to achieve best in class recovery point objective (RPO) and recovery time objective (RTO) with an SAP S/4 HANA landscape. The blog was authored by Rajeev Menon, Cloud Solution Architect at Azure.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AzureCloudMigrationBlueSkyPage() {
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
              <Eyebrow tone="dark">Azure Cloud Migration · BlueSky Solution</Eyebrow>
            </div>

            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Azure Cloud Migration{" "}
              <em className="font-serif italic font-extralight opacity-90">
                BlueSky.
              </em>
            </h1>

            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "42rem" }}
            >
              At Sierra Digital, we partner with Microsoft and SAP to help companies migrate to the
              Azure Cloud. Microsoft and SAP each trust their own operations to S/4 HANA on Azure.
              This means you can do the same with confidence.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3 hero-reveal hero-d3">
              <Button href="/contact-us/" size="lg"
                className="border-0 bg-white text-ink hover:bg-canvas-2 shadow-md">
                Ask Our Expert
              </Button>
              <Button href="/contact-us/" size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50">
                Explore Azure Migration →
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
          <Stat value="Azure"    label="Microsoft-certified cloud migration partner"  data-delay="0" />
          <Stat value="BlueSky"  label="Rapid instance spin-up solution"              data-delay="100" />
          <Stat value="50%"      label="Operational cost reduction for Daimler"       data-delay="200" />
          <Stat value="30 min"   label="Time to spin up resources on-demand"          data-delay="300" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CONFIDENCE IN THE NOW MOMENT — alt
          Heading outside · spotlight card with intro + 4 items · quote below
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="SAP S/4 HANA on Azure"
          eyebrowTone="primary"
          title="Confidence In The Now Moment"
          subtitle="The trusted path to enterprise-ready innovation in the cloud—bringing the intelligence, security, and reliability of Azure to your SAP applications."
          align="center"
          size="xl"
        />

        <div className="mx-auto max-w-4xl flex flex-col gap-6">
          {/* Spotlight card */}
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Built On Decades of Experience
            </p>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {CONFIDENCE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex flex-col items-center gap-2 rounded-xl border border-primary-200/60 bg-white/50 p-4 text-center"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span className="text-ink font-semibold text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Christian Klein quote */}
          <blockquote
            className="will-reveal relative rounded-2xl border border-primary-100 bg-white/70 p-8 flex flex-col gap-3"
            style={{ boxShadow: "0 2px 12px rgba(33,138,163,0.08)" }}
          >
            <span
              className="absolute -top-4 left-6 text-7xl leading-none text-primary-200 font-serif select-none"
              aria-hidden="true"
            >&ldquo;</span>
            <p className="text-ink italic text-lg leading-relaxed pl-4">
              SAP continues to deliver even amidst the current crisis, showing that the Intelligent
              Enterprise is more relevant than ever.
            </p>
            <footer className="pl-4 text-sm text-ink-2 not-italic">
              — <strong className="text-ink">Christian Klein</strong>, CEO, SAP
            </footer>
          </blockquote>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          WHY PARTNER WITH SIERRA DIGITAL 01 — canvas (white)
          BlueSky spotlight card + Jennifer Morgan quote
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="canvas">
        <SectionHeading
          index="01"
          eyebrow="Key Benefits of SAP on Azure"
          eyebrowTone="primary"
          title="Why Partner With Sierra Digital for Azure Migration?"
          align="center"
          size="xl"
        />

        <div className="mx-auto max-w-4xl flex flex-col gap-6">
          {/* BlueSky spotlight card */}
          <div
            className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
            style={{
              background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
              boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
            }}
          >
            <span className="block h-1 w-10 rounded-full bg-primary-500" />
            <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
              Sierra Digital BlueSky Solution
            </p>
            <p className="text-ink-2 leading-relaxed">
              Sierra Digital&apos;s BlueSky solution offers an increased ability for organizations
              to rapidly spin up instances, delivering capabilities to business faster, with the
              agility and flex of Microsoft&apos;s secure infrastructure and business software.
            </p>
          </div>

          {/* Jennifer Morgan quote */}
          <blockquote
            className="will-reveal relative rounded-2xl border border-primary-100 bg-white/70 p-8 flex flex-col gap-3"
            style={{ boxShadow: "0 2px 12px rgba(33,138,163,0.08)" }}
          >
            <span
              className="absolute -top-4 left-6 text-7xl leading-none text-primary-200 font-serif select-none"
              aria-hidden="true"
            >&ldquo;</span>
            <p className="text-ink italic text-lg leading-relaxed pl-4">
              This partnership is all about reducing complexity and minimizing costs for customers
              as they move to SAP S/4HANA in the cloud. Bringing together the power of SAP and
              Microsoft provides customers with the assurance of working with two industry leaders
              so they can confidently and efficiently transition into intelligent enterprises.
            </p>
            <footer className="pl-4 text-sm text-ink-2 not-italic">
              — <strong className="text-ink">Jennifer Morgan</strong>, Co-CEO, SAP
            </footer>
          </blockquote>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          SAP ON AZURE ARCHITECTURE 02 — alt
          2 teal cards + Daimler success story + More Use Cases note
          ───────────────────────────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeading
          index="02"
          eyebrow="SAP on Azure Architecture"
          eyebrowTone="primary"
          title="SAP on Azure–Designing for Efficiency and Operations"
          subtitle="Robust SAP on Azure Architectures are built on the pillars of Security, Performance and Scalability, Availability and Recoverability, and Efficiency and Operations. Within this blog, Philip Tan, Senior Program Manager from Microsoft's SAP on Azure CAT team, covers a range of Azure services and a new GitHub repository which can support operational efficiencies for your SAP applications running on Azure."
          align="center"
          size="xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ARCHITECTURE_CARDS.map((c, i) => (
            <div
              key={c.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 100)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-0.75 rounded-full bg-primary-500 shrink-0" />
                <span className="text-primary-700"><Icon d={c.icon} /></span>
              </div>
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                {c.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Daimler success story */}
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
              Daimler Entrusts Global Procurement System to Azure
            </p>
            <p className="text-ink-2 leading-relaxed">
              Daimler AG reduced operational costs by 50 percent and increased agility by spinning
              up resources on-demand in 30 minutes with SAP S/4HANA and Azure, empowering 400,000
              global suppliers.
            </p>
          </div>
        </div>

        {/* More Azure Use Cases */}
        <p className="mt-6 text-center text-ink-2 text-sm leading-relaxed">
          <strong className="text-ink">More Azure Use Cases:</strong> Microsoft has published a
          variety of Use Cases based on successful migrations. Access them here.
        </p>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────────
          CLOSING CTA
          ───────────────────────────────────────────────────────────────────── */}
      <HandsCTA
        eyebrow="Get started today"
        title={
          <>
            Connect Businesses with Cutting-Edge{" "}
            <em className="font-serif italic">Technologies for Innovation</em>
          </>
        }
        primaryLabel="Ask Our Expert"
        primaryHref="/contact-us/"
        secondaryLabel="Explore Azure Migration"
        secondaryHref="/contact-us/"
      />
    </>
  );
}
