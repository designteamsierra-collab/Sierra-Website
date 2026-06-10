import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "Blog – Recent Insights from Sierra Digital",
  description: "Explore Sierra Digital's blog for expert insights on SAP, AI, and digital transformation—practical strategies, trends, and enterprise tech ideas to drive growth.",
  alternates: { canonical: "https://sierradigitalinc.com/blog/" },
};

const POSTS = [
  {
    title: "SAP Business Data Cloud – The Sensible Path to Unlocking Enterprise Potential",
    href: "/sap-business-data-cloud-the-sensible-path-to-unlocking-enterprise-potential/",
    image: "/wp-content/uploads/2026/02/thump-1-1024x576.avif",
    excerpt: "Data is the lifeblood of modern business. Yet, for most enterprises, the path from raw data to real insight is blocked by",
  },
  {
    title: "Introducing EcoBridge: Revolutionizing Energy Compliance",
    href: "/introducing-ecobridge-revolutionizing-energy-compliance/",
    image: "/wp-content/uploads/2025/10/Ecobridge-header-img-1024x576.webp",
    excerpt: "EcoBridge from Sierra Digital Inc. simplifies regulatory compliance for energy companies using SAP BTP. It connects SAP systems seamlessly with EPA requirements",
  },
  {
    title: "Building Enterprise AI that Actually Works: An Integrated Approach",
    href: "/building-enterprise-ai-that-actually-works-an-integrated-approach/",
    image: "/wp-content/uploads/2026/02/Enterprise-AI-1024x576.webp",
    excerpt: "Artificial Intelligence (AI) promises to reshape how enterprises operate, but the gap between ambition and execution remains wide. Organizations investing in AI",
  },
  {
    title: "Take a Walk with Sierra Digital to Enable your Digital Adoption Journey",
    href: "/take-a-walk-with-sierra-digital-to-enable-your-digital-adoption-journey/",
    image: "/wp-content/uploads/2025/10/Digital-Adoption-Journey-img-1024x576.webp",
    excerpt: "Sierra Digital continues to innovate across our diverse array of products and services, always striving to deliver cutting-edge, AI-powered solutions to our",
  },
  {
    title: "YOUR AI JOURNEY BEGINS WITH EMBEDDED AI – VALUE FOCUSED",
    href: "/your-ai-journey-begins-with-embedded-ai-value-focused/",
    image: "/wp-content/uploads/2025/09/AI-JOURNEY-bg-1024x576.avif",
    excerpt: "Get Started Activate Your AI Journey with Embedded AI Experience real business transformation from Day One with Embedded AI. Drive immediate value",
  },
  {
    title: "Sierra AppHaus Houston Grand Opening – an Innovation Hub for the development of cases in Business AI & SAP BTP",
    href: "/sierra-apphaus-houston-grand-opening-an-innovation-hub-for-the-development-of-cases-in-business-ai-sap-btp/",
    image: "/wp-content/uploads/2025/07/Apphaus-Blog-image-1024x576.avif",
    excerpt: "Sierra AppHaus Houston Grand Opening – an Innovation Hub Get Started Sierra was joined by our customers, partners, and friends to celebrate",
  },
];

export default function BlogPage() {
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
              <Eyebrow tone="dark">Blog · Insights</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Recent Insights from{" "}
              <em className="font-serif italic font-extralight opacity-90">Sierra Digital.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Trends, thoughtful articles, and expert perspectives for growth from the Sierra Digital team.
            </p>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      <Section tone="alt">
        <SectionHeading
          eyebrow="Insights"
          eyebrowTone="primary"
          title="Latest from the Blog"
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
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
                  Read More →
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
