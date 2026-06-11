import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HandsCTA } from "@/components/ui/HandsCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";

export const metadata: Metadata = {
  title: "Success Stories | Case Studies | Sierra Digital",
  description:
    "Explore Sierra Digital success stories and case studies showcasing real customer outcomes, innovation impact, and transformative business results.",
  alternates: { canonical: "https://sierradigitalinc.com/success-stories/" },
};

const STORIES = [
  {
    title: "Case Study: Simplifying Business Warehousing for a Leading Utility Provider",
    body: "The View From Above: Transforming Synergy's Business Warehousing with Sierra Digital.",
    href: "/simplifying-business-warehousing-for-a-leading-utility-provider/",
  },
  {
    title: "Transforming Synergy's Business Warehousing with Sierra Digital",
    body: "This client is a leading utility provider facing complex Business Warehousing challenges turned to Sierra Digital for clarity. Using an SAP-endorsed assessment, Sierra delivered a strategic roadmap with visual insights, risk mitigation, and clear business alignment. This empowered the client to move confidently toward SAP Datasphere with minimal disruption and maximum impact.",
    href: null,
  },
  {
    title: "Automating Capital Project Set up via pre-built BTP App",
    body: "This client sought ways to eliminate cumbersome manual processes, and for its relevance in automation, the client turned to SAP Business Technology Platform. Experts in SAP BTP, Sierra Digital rapidly implemented a pre-built BTP app to help this client automate the set-up of capital projects, saving countless man hours.",
    href: null,
  },
  {
    title: "Optimizing Plant Maintenance using Gen AI Chatbots",
    body: "This client works in a heavily regulated industry, and many of their work orders require specific certifications. By providing managers with AI-enhanced natural language insights on these requirements and the certifications held by members of their team, Sierra Digital streamlined plant maintenance.",
    href: null,
  },
  {
    title: "Streamlining Owner Relations Portal with a Self-Service Portal",
    body: "Client is a leading shale oil and gas producer, with more than 19,000 Royalty Owners. And with the Owner Relations Portal, a BTP-based solution from Sierra, those Owners can now manage their information from the comfort of a user-friendly portal.",
    href: null,
  },
  {
    title: "See Sierra's Work for This Major Mexican Retailer",
    body: "A leading Mexican department store chain offering clothing, appliances, electronics, and cell phones, utilizes SAP BW for data management. They require assessments and optimizations to enhance their BW Datasphere utilization. Given the client's diverse product offerings and customer base, strategic data management solutions are needed to leverage SAP BW effectively.",
    href: null,
  },
  {
    title: "Learn How This Tech Company Is Planning for the Future",
    body: "This client currently operates SAP BW 7.50 with a system size of 3-5TB. They do not currently utilize SAP Datasphere. Their ERP system is SAP ERP 6.0, and they maintain one live SAP BW system. In addition to SAP BW, the client employs BW on HANA and Azure for data warehousing. They also utilize native HANA modeling and a HANA sidecar approach alongside SAP BW.",
    href: null,
  },
  {
    title: "Healthcare Transformation with SAP S/4HANA Cloud",
    body: "A leading healthcare organization, founded in 1945, sought to modernize its operations to improve efficiency and decision-making. By partnering with Sierra, they successfully migrated to SAP S/4HANA Cloud, adopting a Clean Core approach to streamline processes and integrate disparate systems. This transformation enabled real-time insights, reduced costs, and fostered better collaboration among management teams.",
    href: null,
  },
  {
    title: "Accelerating Healthcare Transformation with SAP S/4HANA",
    body: "A healthcare nonprofit, founded in 1982, modernized its operations by migrating to SAP S/4HANA on Cloud. Partnering with Sierra, they conducted a comprehensive assessment to identify complexities and streamline the migration process. The successful transition has empowered the organization to leverage SAP BTP for enhanced digital capabilities base, strategic data management solutions are needed to leverage SAP BW effectively.",
    href: null,
  },
  {
    title: "Streaming Giant Uses AI to Automate Revenue Processing",
    body: "This client has grown to be one of the world's leading social forums and an important streaming service. With global reach and the devoted attention of its eager fans, this client sees more than 30 million users each day. They field more than 9 million content creators and provide content in more than 30 languages.",
    href: null,
  },
  {
    title: "Energy Company Uses AI for Maintenance Insights",
    body: "This client is one of the largest and most diversified midstream energy companies in North America. With approximately 90,000 miles of pipelines and associated energy infrastructure across 38 states and Canada, this client transports the oil and gas products that energize millions of lives. Success has led this client to embrace digital transformation in recent years as for distinctive business advantage.",
    href: null,
  },
  {
    title: "City Government Optimizes Budgets with Solution Built on SAP BTP",
    body: "It's the largest city in the United States by land area; 4th largest by population. It's the Oil and Gas Capital of the World. Space Capital, too. But ask residents what makes the city so distinct, and you'll find a common theme: Diversity.",
    href: null,
  },
  {
    title: "The BTP-Based Owner Relations Portal",
    body: "This client is a leading shale oil and gas producer, one of the largest in the deepwater Gulf of Mexico and a key natural gas producer and supplier to Peninsular Malaysia and Thailand. The company is also engaged in exploration and appraisal activities offshore Guyana, participating in one of the industry's largest oil discoveries in the past decade.",
    href: null,
  },
  {
    title: "Solution Is Scalable and Clean Core Compliant",
    body: "This client is committed to the efficient and effective exploration and production of oil and natural gas. Producing oil and natural gas and getting them to market takes ingenuity, technology and investment. Their innovative, collaborative efforts yield products that improve quality of life globally while producing economic benefits with far-reaching influence.",
    href: null,
  },
  {
    title: "Streamlined Lease Management for a Global Industry Leader",
    body: "This client strives to deliver best-in-class customer experiences and differentiated products in the industries of nylon solutions, chemical intermediates, and plant nutrients. Its products, manufactured at 3 U.S.-based facilities, are integral in building and construction, packaging, paints and coatings, electronics, and more.",
    href: null,
  },
  {
    title: "Empowering Agricultural Finance: SAP CLM Transformation Success",
    body: "This client is a global agribusiness owned by farmers, ranchers and cooperatives across the United States. Diversified in energy, agronomy, grains, and foods, this client is committed to creating connections to empower agriculture, helping our owners and customers grow their businesses.",
    href: null,
  },
  {
    title: "Sierra Automates Business Partner Onboarding",
    body: "This client is a New York State public-benefit corporation created in 1960 to build and preserve affordable multifamily rental housing throughout New York State. The client sells bonds and uses the proceeds to make mortgages to affordable housing developers.",
    href: null,
  },
  {
    title: "Sierra Solves Problems for Leading American City",
    body: "With its warm, year-round climate, 50 miles of sun-soaked coastline and world famous attractions, this client is a top tourist destination. But this metropolis with a laid-back vibe is also home to cutting-edge businesses in life sciences, genomics, biotechnology, telecommunications, Smart City technology, software, electronics, and other major innovative industries.",
    href: null,
  },
  {
    title: "Sugarcane Giant Seeks to Modernize Data",
    body: "This client, founded in 1960, is the world's top-producing refiner of sugarcane, managing more than 50 facilities worldwide. As an institution of such considerable size, and as a long-time SAP customer, this client has a mature, complex digital landscape.",
    href: null,
  },
  {
    title: "Global Agribusiness Chooses Sierra",
    body: "This client is a global agribusiness owned by farmers, ranchers and cooperatives across the United States. Diversified in energy, agronomy, grains, and foods, this client is committed to creating connections to empower agriculture, helping our owners and customers grow their businesses.",
    href: null,
  },
  {
    title: "Major Medical Organization Pursues a Clean Core",
    body: "This company was founded in 1945 as a small drugstore on Sto. Cristo Street in Binondo, Manila. Over time, they grew to be a leading healthcare organization.",
    href: null,
  },
  {
    title: "Pharmaceutical Customer Trusts Sierra with Major Implementation",
    body: "This client is a pharmaceutical company which produces medicines and vaccines for pets and livestock. Until 2019, the company was a subsidiary of a pharmaceutical major, before being divested. It is the second-largest animal health company in the world.",
    href: null,
  },
];

export default function SuccessStoriesPage() {
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
              <Eyebrow tone="dark">Success Stories · Sierra Digital</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Success{" "}
              <em className="font-serif italic font-extralight opacity-90">Stories.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Sierra Digital empowers businesses with innovative solutions, delivering measurable
              success and driving digital transformation across industries.
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

      {/* Case Studies Grid */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Case Studies"
          eyebrowTone="primary"
          title="Real Results. Real Transformation."
          align="center"
          size="xl"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <div
              key={i}
              className="will-reveal rounded-2xl border border-primary-100 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-200 bg-white"
              data-delay={String(Math.min(i * 60, 400))}
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
            >
              <span className="block h-1 w-8 rounded-full bg-primary-500" />
              <h3 className="font-display text-ink text-lg font-light leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed flex-1">{s.body}</p>
              {s.href ? (
                <a
                  href={s.href}
                  className="mt-auto text-primary-600 text-sm font-semibold hover:text-primary-700 transition-colors"
                >
                  Read More →
                </a>
              ) : (
                <span className="mt-auto text-ink-3 text-sm font-semibold">Read More</span>
              )}
            </div>
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
        eyebrow="Work with Sierra"
        title={<>Ready to write your own <em className="font-serif italic">success story?</em></>}
        subtitle="Talk to Sierra Digital about how we can help you assess, migrate, and modernize your SAP investments for measurable business outcomes."
        primaryLabel="Get in touch"
        primaryHref="/contact/"
      />
    </>
  );
}
