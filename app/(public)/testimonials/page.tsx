import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "Testimonials | Sierra Digital",
  description:
    "Read client testimonials and feedback showcasing how Sierra Digital delivers value, trust, and impactful results through real customer experiences.",
  alternates: { canonical: "https://sierradigitalinc.com/testimonials/" },
};

const TESTIMONIALS = [
  {
    quote:
      "The can-do mentality comes through in Sierra's culture. There are not that many parties which have the capability to serve a project like ours across the globe.",
    author: "Dr Ernest",
    role: "Founder – Nestoil",
  },
  {
    quote:
      "Sierra has strong expertise in all of the SAP modules. They have strong project leadership skills and they bring a very good long-term commitment to the efforts within SAP.",
    author: "Mohan Dasappan",
    role: "Run Support Manager, Andeavor / Marathon",
  },
  {
    quote:
      "I believe Sierra is a differentiated system integration firm from the standpoint that the resources, capabilities, delivery and flexibility are excellent. Sierra Digital is always there to help us, whatever our needs are.",
    author: "Arun Shanmugam",
    role: "Architect, Schlumberger",
  },
  {
    quote:
      "With the help of Sierra Digital, all our SAP systems can have a direct connection with SAP Analytics Cloud. This really streamlines the business process of data retrieval and display when compared to other non-native BI tools.",
    author: "IT Director",
    role: "Houston Based Oil & Gas IT Director",
  },
  {
    quote: "Sierra cloud readiness apps help you know before you go, and help you know how to grow.",
    author: "Ron Chermin",
    role: "Senior Director, SAP Labs",
  },
  {
    quote: "Cross-industry BTP apps pioneered by Sierra are game-changers.",
    author: "Dave Maloney",
    role: "VP – BTP Everywhere, SAP",
  },
];

export default function TestimonialsPage() {
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
              <Eyebrow tone="dark">Testimonials · Sierra Digital</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Great People with Passion,{" "}
              <em className="font-serif italic font-extralight opacity-90">
                Create Something Extraordinary.
              </em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Doing exceptional work is rewarding on its own, but it&apos;s even more fulfilling
              when our clients share our enthusiasm. Listen to what they have to say.
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

      {/* Testimonials grid */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What Our Clients Say"
          eyebrowTone="primary"
          title="Trusted by Enterprise SAP Teams Worldwide."
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="will-reveal rounded-2xl border border-primary-100 bg-white p-8 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(Math.min(i * 80, 400))}
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
            >
              <span className="block h-1 w-8 rounded-full bg-primary-500" />
              <blockquote className="text-ink text-base leading-relaxed font-light flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-primary-100">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(145deg, #0e5b7e 0%, #218aa3 100%)" }}
                >
                  {t.author.charAt(0)}
                </span>
                <div className="flex flex-col">
                  <span className="text-ink text-sm font-semibold">{t.author}</span>
                  <span className="text-ink-2 text-xs">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Closing spotlight */}
      <Section tone="canvas">
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
              href="/contact/"
              className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-700 transition-colors"
            >
              ASK OUR EXPERT
            </a>
          </div>
        </div>
      </Section>

      <HandsCTA
        eyebrow="Join our clients"
        title={<>Ready to start your own <em className="font-serif italic">success story?</em></>}
        subtitle="Talk to Sierra Digital about how we can help you assess, migrate, and modernize your SAP investments for measurable business outcomes."
        primaryLabel="Get in touch"
        primaryHref="/contact/"
      />
    </>
  );
}
