import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "Meet Our Leadership Team | Sierra Digital",
  description: "Get to know the experienced leaders at Sierra Digital guiding SAP innovation, cloud transformation, and data-driven enterprise solutions.",
  alternates: { canonical: "https://sierradigitalinc.com/leadership-teams/" },
};

const MEMBERS = [
  { name: "Senthil Kumar", role: "Chairman & CEO", image: "/wp-content/uploads/2025/07/Senthil-Kumar-ceo.webp", href: "/leadership-team/senthil-kumar/" },
  { name: "Sudhakar Virupakshi", role: "Senior Vice President", image: "/wp-content/uploads/2025/07/sudhakar.webp", href: "/leadership-team/sudhakar-virupakshi/" },
  { name: "Maya Bava", role: "Chief Operating Officer", image: "/wp-content/uploads/2025/07/Maya-Bava-COO.webp", href: "/leadership-team/maya-bava/" },
  { name: "Narasimman L. Madhavarao", role: "Chief Product & Transformation Officer", image: "/wp-content/uploads/2025/07/narasimman.webp", href: "/leadership-team/narasimman-l-madhavarao/" },
  { name: "Karl Schmidt", role: "Vice President – Oil & Gas Advisory", image: "/wp-content/uploads/2025/07/Karl-Schmidt-VP-Oil-Gas.webp", href: "/leadership-team/karl-schmidt/" },
  { name: "Sriman Narayanan Sundararaman", role: "Vice President – Sales", image: "/wp-content/uploads/2026/02/MicrosoftTeams-image-45-1.jpg", href: "/leadership-team/sriman-narayanan-sundararaman/" },
  { name: "TC Venkatesan", role: "Senior Director – Innovation Advisory", image: "/wp-content/uploads/2025/07/TC-Venkatesan.webp", href: "/leadership-team/tc-venkatesan/" },
  { name: "Scott Gabelhart", role: "Senior Director – Data Strategy & Innovation", image: "/wp-content/uploads/2025/07/Scott-Gabelhart.webp", href: "/leadership-team/scott-gabelhart/" },
  { name: "Sameel Baker", role: "Director & Global Head of Products – Energy & Commodity Management", image: "/wp-content/uploads/2025/07/sameel-baker.webp", href: "/leadership-team/sameel-baker/" },
  { name: "Rajan Marathe", role: "Director Business Intelligence", image: "/wp-content/uploads/2025/07/Rajan-Marathae.webp", href: "/leadership-team/rajan-marathe/" },
  { name: "Kaviarasan Thangarasu", role: "Director of SAP Data and Analytics", image: "/wp-content/uploads/2025/07/kaviarasan.webp", href: "/leadership-team/kaviarasan-thangarasu/" },
  { name: "M.S. Mohanraj", role: "Director of Sales", image: "/wp-content/uploads/2025/07/Mohanraj.webp", href: "/leadership-team/m-s-mohanraj/" },
  { name: "Venkata Rama Vikas Chinta", role: "Cloud Advisor", image: "/wp-content/uploads/2025/07/Vikas-Chinta.webp", href: "/leadership-team/venkata-rama-vikas-chinta/" },
  { name: "Robert Jones", role: "Delivery Director, Customer Success", image: "/wp-content/uploads/2025/07/Robert-Jones.webp", href: "/leadership-team/robert-jones/" },
  { name: "Suchindra Guru Pradeep Prabhakaran", role: "SAP Finance Advisory", image: "/wp-content/uploads/2025/07/Pradeep-Prabhakaran.webp", href: "/leadership-team/suchindra-guru-pradeep-prabhakaran/" },
  { name: "Sandy Udupa", role: "Director of Finance", image: "/wp-content/uploads/2025/07/Sandy-Udupa.webp", href: "/leadership-team/sandy-udupa/" },
];

export default function LeadershipTeamsPage() {
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
              <Eyebrow tone="dark">Leadership · Sierra Digital</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Meet Our <em className="font-serif italic font-extralight opacity-90">Leadership Team.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Meet the leaders guiding Sierra Digital&apos;s SAP innovation, cloud transformation, and data-driven
              enterprise solutions — a global team united by a single conviction: altitude is an attitude.
            </p>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* Team grid */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Leadership"
          eyebrowTone="primary"
          title="Our Leadership Team"
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {MEMBERS.map((m, i) => (
            <a
              key={m.href}
              href={m.href}
              className="will-reveal group flex flex-col rounded-2xl border border-primary-100 overflow-hidden hover:-translate-y-1 transition-all duration-200 bg-white"
              data-delay={String(Math.min(i * 50, 400))}
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
            >
              <div
                className="h-52 w-full overflow-hidden"
                style={{ background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1 p-4">
                <span className="block h-0.5 w-6 rounded-full bg-primary-500 mb-1" />
                <h3 className="font-display text-ink text-sm font-light leading-snug tracking-tight group-hover:text-primary-600 transition-colors">
                  {m.name}
                </h3>
                <p className="text-ink-2 text-xs leading-relaxed">{m.role}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <HandsCTA
        eyebrow="Work with our team"
        title={<>Want to work with <em className="font-serif italic">our team?</em></>}
        subtitle="Talk to Sierra's SAP leaders about your transformation — or explore a career with us."
        primaryLabel="Get in touch"
        primaryHref="/contact/"
      />
    </>
  );
}
