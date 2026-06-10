import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "News & Insights | Latest Updates from Sierra Digital",
  description: "Stay updated with the latest Sierra Digital news, insights, and thought leadership shaping digital transformation and enterprise tech trends.",
  alternates: { canonical: "https://sierradigitalinc.com/news/" },
};

const POSTS = [
  {
    title: "Sierra Digital and UiPath Celebrate Five Years of Partnership",
    href: "/news/sierra-digital-and-uipath-celebrate-five-years-of-partnership/",
    image: "/wp-content/uploads/2026/02/sierra-and-ui-path.avif",
    excerpt: "Sierra Digital and UiPath Celebrate Five Years of Partnership Sierra Digital and UiPath Celebrate Five Years of Partnership Delivering Business Outcome–Focused Automation Solutions to",
  },
  {
    title: "Sierra Digital Joins the SAP AppHaus Network with New Innovation Hub",
    href: "/news/sierra-digital-joins-the-sap-apphaus-network-with-new-innovation-hub/",
    image: "/wp-content/uploads/2025/07/sierra-apphaus-houston-opening.webp",
    excerpt: "Sierra Digital announces the inauguration of Sierra AppHaus Houston, a new innovation hub for the development of Business AI use cases. Get Started",
  },
  {
    title: "Sierra Digital acquires Stonebridge Consulting",
    href: "/news/sierra-digital-acquires-stonebridge-consulting/",
    image: "/wp-content/uploads/2025/07/sierra-stonebridge-featured-img.webp",
    excerpt: "Acquisition doubles corporation capacity to deliver best-in-class enterprise tech solutions in Energy and beyond. Get Started February 2, 2021 — Houston, TX Sierra Digital,",
  },
];

export default function NewsPage() {
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
              <Eyebrow tone="dark">News · Newsroom</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Latest Updates from{" "}
              <em className="font-serif italic font-extralight opacity-90">Sierra Digital.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              The latest announcements, milestones, and press from Sierra Digital.
            </p>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      <Section tone="alt">
        <SectionHeading
          eyebrow="Newsroom"
          eyebrowTone="primary"
          title="Latest from the Newsroom"
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
