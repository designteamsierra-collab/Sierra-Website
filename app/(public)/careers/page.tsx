import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "Join Sierra Digital | Careers & Opportunities",
  description: "Start your career with Sierra Digital and work on cutting-edge SAP and digital transformation solutions while enjoying strong benefits and growth opportunities.",
  alternates: { canonical: "https://sierradigitalinc.com/careers/" },
};

const REASONS = [
  {
    title: "We're Innovating",
    body: "At our Houston-Based Innovation Lab, Sierra Digital pioneered the first real-time X+O Integration ever in North America. That's just one example of ways we're driving innovation in Digital Transformation. Join us, and you'll be an integral part of innovation at the forefront of technology.",
  },
  {
    title: "We're Strong On Partnerships",
    body: "Sierra Digital invests heavily in the success of partners like SAP, AWS Marketplace, and Microsoft by helping our employees to become certified in their technologies. This strengthens our offerings to clients, it builds confidence of our people, and it forges better alliances. In sum, it builds value all around.",
  },
  {
    title: "We Believe In Community",
    body: "From our home base in Houston, and everywhere around the globe, Sierra Digital is making our commitment in community known. Take our new Veterans Training Program partnership with SAP as an example. To those who have given the most for our nation, Sierra Digital is offering opportunities to become involved in life-changing career advancement workshops and internships. We're a company you can take pride in representing and working to build.",
  },
  {
    title: "We Offer Great Benefits",
    body: "For a company our size, Sierra Digital offers outstanding benefits, including Major Medical, Vision, Dental, Holidays, Paid Vacation Time & more. We believe that healthy, happy employees are best equipped to best contribute to the success of our clients. Therefore, everyone wins.",
  },
];

const JOB_BLOCKS = [
  {
    eyebrow: "Duties:",
    body: "Lead consultants to plan, architect, design SAP environments on various platforms based on client requirements; utilize SAP BPC/SAC, BW IP, HANA SQL, ABAP, Scripting Logics, SAP Analytics Cloud, Web Dynpro, FOX, VBA, COGNOS, ETL, etc.; Design, develop & maintain SAP BW solutions on HANA & BW/4HANA platforms; Build & optimize BW queries; Design & develop SAP BPC sols; manage data extraction, transformation & loading (ETL) processes; Work with stakeholders to understand business requirements for planning, budgeting, forecasting & financial consolidation. train team and users.",
  },
  {
    eyebrow: "Requirements:",
    body: "MS or foreign equivalent in Computer Science or Engineering (any) or Information Systems or Finance or Management or Related and 3 years' experience in SAP BPC, SAP BW & S/4 HANA (OR) BS or foreign equivalent in Computer Science or Engineering (any) or Information Systems or Finance or Management or Related and 5 years of relevant progressive experience including at least 3 years' experience in SAP BPC, SAP BW & S/4 HANA",
  },
  {
    eyebrow: "Location: Houston TX",
    body: "Full Time. Travel involved to client locations within the US.",
  },
];

export default function CareersPage() {
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
              <Eyebrow tone="dark">Careers · Join Sierra Digital</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Join <em className="font-serif italic font-extralight opacity-90">Sierra Digital.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Pick a peak anywhere around the globe. Typically, you&apos;ll find many paths to approach the
              summit, but only one, single, solitary point at which the mountain itself reachest its highest point.
            </p>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* Intro blocks */}
      <Section tone="alt">
        <div className="flex flex-col gap-6 mx-auto max-w-3xl">
          {[
            {
              eyebrow: "What Can You Offer Sierra Digital?",
              body: "As a consumer, you offer a powerful perspective. You bring experiences from the marketplace that our clients very much value. Remember, the prize of tomorrow is to make every customer and employee experience shine. Thus, every Sierra associate is always asked to see the world as a customer does, now and in the future.",
            },
            {
              eyebrow: "Respect & Support Talents",
              body: "At Sierra Digital, we recognize and respect that there are many, diverse ways of addressing the needs of our clients. The beauty of our agency is that we are inclusive in welcoming racial and cultural diversity, global in our perspective. We celebrate unique views, in fact. Because we know that divergent ideas often lead to new, quicker, safer, and better paths up the mountainside.",
            },
          ].map((b, i) => (
            <div
              key={b.eyebrow}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4"
              data-delay={String(i * 80)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{b.eyebrow}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4 Reasons */}
      <Section tone="canvas">
        <SectionHeading
          eyebrow="Why Join Us"
          eyebrowTone="primary"
          title="4 Great Reasons To Join Sierra Digital"
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200"
              data-delay={String(i * 80)}
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">{r.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Job details */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Open Position"
          eyebrowTone="primary"
          title="Current Opening"
          align="center"
          size="xl"
        />
        <div className="flex flex-col gap-5 mx-auto max-w-3xl">
          {JOB_BLOCKS.map((b, i) => (
            <div
              key={b.eyebrow}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-3 bg-white"
              data-delay={String(i * 80)}
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.08), 0 1px 4px rgba(33,138,163,0.05)" }}
            >
              <p className="text-primary-700 text-[11px] font-semibold tracking-widest uppercase font-mono">
                {b.eyebrow}
              </p>
              <p className="text-ink-2 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <HandsCTA
        eyebrow="Discover life at Sierra"
        title={<>Discover <em className="font-serif italic">Life at Sierra.</em></>}
        subtitle="Experience innovation, collaboration, and growth—discover what makes life at Sierra truly exceptional"
        primaryLabel="Click Here"
        primaryHref="/contact/"
      />
    </>
  );
}
