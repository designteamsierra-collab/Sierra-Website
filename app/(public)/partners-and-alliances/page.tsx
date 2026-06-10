import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "Sierra Digital Partners & Alliances | SAP, AWS, Microsoft",
  description: "Discover Sierra Digital's global technology alliances with SAP, AWS, Microsoft, and Databricks to accelerate enterprise cloud, AI, and data innovation.",
  alternates: { canonical: "https://sierradigitalinc.com/partners-and-alliances/" },
};

const PARTNERS = [
  {
    logo: "/wp-content/uploads/2025/07/sap-logo.png",
    name: "SAP",
    body: "Since 2002, Sierra Digital has served as a pure-play staffing and implementation partner to SAP — amassing an unparalleled reservoir of knowledge led by certified on-staff experts. As an SAP Silver Partner, we continue to develop innovations that accelerate, automate, and extend the power of SAP technology to deliver transformational business outcomes.",
  },
  {
    logo: "/wp-content/uploads/2025/07/aws-logo.png",
    name: "AWS",
    body: "Sierra Digital is a proud partner to AWS, leveraging our combined resources to drive customer success with powerful cloud technologies. As the world's leading hyperscaler, AWS provides secure, reliable service to millions of customers — and with our domain expertise in SAP, Sierra delivers the focused insight that SAP customers on AWS need to enact meaningful change. Find our solutions on the AWS Marketplace.",
  },
  {
    logo: "/wp-content/uploads/2025/07/microsoft-logo.png",
    name: "Microsoft",
    body: "Microsoft offers the trusted path to enterprise-ready innovation in the cloud — bringing the intelligence, security, and reliability of Azure to your SAP applications. Sierra partners with Microsoft and SAP to help companies migrate to Azure. Our BlueSky solution rapidly spins up instances, delivering capabilities to the business faster with the agility and flex of Microsoft's secure infrastructure.",
  },
  {
    logo: "/wp-content/uploads/2025/12/Databricks_Logo-1024x538.png",
    name: "Databricks",
    body: "Sierra + Databricks: accelerating data & AI innovation. By combining Sierra's domain expertise with Databricks' unified analytics platform, we enable organizations to move faster and smarter with measurable impact — from joint industry events to Proof of Concepts like Capital Project Controls for a leading client.",
  },
];

export default function PartnersAndAlliancesPage() {
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
              <Eyebrow tone="dark">Partners &amp; Alliances · Sierra Digital</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Partners &amp;{" "}
              <em className="font-serif italic font-extralight opacity-90">Alliances.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              It&apos;s not uncommon for a mid-sized technology consulting firm to pair with platform
              partners. What is unusual is for a firm to partner as deeply and broadly as we do.
            </p>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* Partner list */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Our Partners"
          eyebrowTone="primary"
          title="Technology Alliances"
          align="center"
          size="xl"
        />
        <div className="flex flex-col gap-6 mx-auto max-w-4xl">
          {PARTNERS.map((p, i) => (
            <div
              key={p.name}
              className="will-reveal rounded-2xl border border-primary-100 p-8 flex flex-col sm:flex-row gap-6 hover:-translate-y-0.5 transition-all duration-200 bg-white"
              data-delay={String(i * 80)}
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
            >
              <div className="shrink-0 flex items-start justify-center sm:justify-start w-full sm:w-32">
                <div
                  className="h-16 w-32 flex items-center justify-center rounded-xl border border-primary-100 bg-white p-2"
                  style={{ boxShadow: "0 2px 8px rgba(33,138,163,0.08)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={p.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="block h-1 w-8 rounded-full bg-primary-500" />
                  <h2 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{p.name}</h2>
                </div>
                <p className="text-ink-2 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Dave Maloney spotlight quote */}
      <Section tone="canvas">
        <div
          className="will-reveal rounded-3xl border-2 border-primary-200 p-10 flex flex-col gap-5 mx-auto max-w-3xl"
          style={{
            background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
            boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
          }}
        >
          <span className="block h-1 w-10 rounded-full bg-primary-500" />
          <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
            Dave Maloney · VP, BTP Everywhere, SAP
          </p>
          <p className="text-ink-2 text-lg leading-relaxed italic">
            &ldquo;Cross-industry BTP apps pioneered by Sierra are game-changers.&rdquo;
          </p>
        </div>
      </Section>

      <HandsCTA
        eyebrow="Build on our alliances"
        title={<>Let&apos;s build on these <em className="font-serif italic">alliances together.</em></>}
        subtitle="Talk to Sierra about how our SAP, AWS, Microsoft, and Databricks partnerships accelerate your transformation."
        primaryLabel="Get in touch"
        primaryHref="/contact/"
      />
    </>
  );
}
