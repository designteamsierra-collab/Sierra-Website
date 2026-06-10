import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "Webinars | Sierra Digital",
  description: "Explore Sierra Digital webinars on SAP BTP, AI-driven digital adoption, and data transformation. Join expert sessions and learn how to modernize your enterprise.",
  alternates: { canonical: "https://sierradigitalinc.com/webinars/" },
};

const UPCOMING_WEBINARS = [
  {
    title: "Built to Believe – BTP in a Day",
    href: "/webinar/built-to-believe-btp-in-a-day/",
    image: "/wp-content/uploads/2026/03/BTP-in-a-day-featured-img-300x169.png",
    excerpt: "Built to Believe – BTP in a Day SAP Business Technology Platform is where the next generation of enterprise capability is being built – and",
  },
];

const PAST_WEBINARS = [
  {
    title: "Sierra Digital & WalkMe: Supercharge Change Management with AI-Driven Digital Adoption",
    href: "/webinar/sierra-digital-walkme-supercharge-change-management-with-ai-driven-digital-adoption/",
    image: "/wp-content/uploads/2026/03/Untitled-11-300x169.png",
    excerpt: "Supercharge Change Management with AI-Driven Digital Adoption The AI tech train is moving fast. Is your organization's digital adoption keeping up? Join Sierra Digital and",
  },
  {
    title: "The ROI of Data Transformation: Beyond Technical Migration",
    href: "/webinar/the-roi-of-data-transformation-beyond-technical-migration/",
    image: "/wp-content/uploads/2025/07/webinar-bg-300x169.avif",
    excerpt: "Register Now LIVE THOUGHT LEADERSHIP ROUNDTABLE: Date: July 10th, 2025 Time: 11:30am Central Time Duration: 60 minutes + Q&A Cost: Complimentary for qualified professionals Leading",
  },
  {
    title: "Sierra Digital Develops SAP S/4HANA Extensions using AI services on SAP BTP",
    href: "/webinar/sierra-digital-develops-sap-s-4hana-extensions-using-ai-services-on-sap-btp/",
    image: "/wp-content/uploads/2025/07/techvirtual-300x157.jpg",
    excerpt: "Register Now Join Sierra Digital at SAP TechEd Virtual and witness how we're revolutionizing SAP S/4HANA with cutting-edge AI services on SAP BTP! Innovative Extensions:",
  },
];

export default function WebinarsPage() {
  return (
    <>
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
              <Eyebrow tone="dark">Webinars · SAP &amp; Enterprise AI</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Webinars from{" "}
              <em className="font-serif italic font-extralight opacity-90">Sierra Digital.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              On-demand and upcoming sessions on SAP, BTP, and enterprise AI.
            </p>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      <Section tone="canvas">
        <SectionHeading
          eyebrow="Upcoming Webinars"
          eyebrowTone="primary"
          title="Upcoming Webinars"
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {UPCOMING_WEBINARS.map((post, i) => (
            <a
              key={post.href}
              href={post.href}
              className="will-reveal group flex flex-col rounded-2xl border border-primary-100 overflow-hidden hover:-translate-y-1 transition-all duration-200 bg-white"
              data-delay={String(Math.min(i * 80, 400))}
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
            >
              <div
                className="h-48 w-full overflow-hidden"
                style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <span className="block h-0.5 w-8 rounded-full bg-primary-500" />
                <h2 className="font-display text-ink text-lg font-light leading-snug tracking-tight group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-ink-2 text-sm leading-relaxed flex-1">{post.excerpt}…</p>
                <span className="mt-2 text-primary-600 text-sm font-semibold group-hover:text-primary-700">
                  Register Now →
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow="Past Webinars"
          eyebrowTone="primary"
          title="Past Webinars"
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PAST_WEBINARS.map((post, i) => (
            <a
              key={post.href}
              href={post.href}
              className="will-reveal group flex flex-col rounded-2xl border border-primary-100 overflow-hidden hover:-translate-y-1 transition-all duration-200 bg-white"
              data-delay={String(Math.min(i * 80, 400))}
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
            >
              <div
                className="h-48 w-full overflow-hidden"
                style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <span className="block h-0.5 w-8 rounded-full bg-primary-500" />
                <h2 className="font-display text-ink text-lg font-light leading-snug tracking-tight group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-ink-2 text-sm leading-relaxed flex-1">{post.excerpt}…</p>
                <span className="mt-2 text-primary-600 text-sm font-semibold group-hover:text-primary-700">
                  Watch Now →
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <HandsCTA
        eyebrow="Talk to our team"
        title={
          <>
            Have a question for{" "}
            <em className="font-serif italic">our team?</em>
          </>
        }
        subtitle="Talk to Sierra's SAP experts about your transformation."
        primaryLabel="Get in touch"
        primaryHref="/contact/"
      />
    </>
  );
}
