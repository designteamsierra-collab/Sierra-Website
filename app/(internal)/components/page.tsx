// Dev-only design system review page. Hidden in production builds.
import { notFound } from "next/navigation";
import {
  Button,
  Card,
  Container,
  CTABand,
  Eyebrow,
  FeatureGrid,
  GradientVisual,
  Hero,
  Section,
  Stat,
  StepStrip,
  TestimonialCard,
} from "@/components/ui";

export const metadata = {
  title: "Design system review",
  robots: { index: false, follow: false },
};

export default function ComponentsReviewPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <>
      <Hero
        eyebrow="Design system / internal"
        title={
          <>
            Sierra UI primitives, side by side <span className="text-primary-700">for review</span>
          </>
        }
        subtitle="Every Track-A marketing component in one place. Hidden from production builds. Use it to spot inconsistencies before they ship."
        actions={
          <>
            <Button href="/" variant="primary">
              View live home
            </Button>
            <Button href="/sap-rise/" variant="secondary">
              View a service page
            </Button>
          </>
        }
        align="centered"
      />

      <Section tone="canvas" containerSize="xl">
        <SectionHeader eyebrow="Buttons" title="Buttons & CTAs" />
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="primary" size="lg">
            Primary lg
          </Button>
          <Button variant="primary" size="sm">
            Primary sm
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link variant</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </Section>

      <Section tone="alt" containerSize="xl">
        <SectionHeader eyebrow="Eyebrow + display type" title="Typography" />
        <div className="flex flex-col gap-4">
          <Eyebrow>Primary eyebrow</Eyebrow>
          <Eyebrow tone="accent">Accent eyebrow</Eyebrow>
          <Eyebrow tone="muted">Muted eyebrow</Eyebrow>
          <h1 className="display-2xl text-ink mt-4">Display 2xl headline</h1>
          <h2 className="display-xl text-ink">Display xl headline</h2>
          <h3 className="display-lg text-ink">Display lg headline</h3>
          <h4 className="display-md text-ink">Display md headline</h4>
          <p className="text-ink-2 max-w-2xl text-lg leading-relaxed">
            Body copy at 17px / 1.65 line height. Sierra paragraph default for marketing. Geist Sans
            handles the body, Fraunces handles every display heading and serif moment.
          </p>
        </div>
      </Section>

      <Section tone="canvas" containerSize="xl">
        <SectionHeader eyebrow="Stats" title="Stats — big-number callouts" />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          <Stat value="50" unit="%" label="Time & budget cut" />
          <Stat value="90" unit="%" label="Code auto-remediated" />
          <Stat value="11K" unit="+" label="Tables profiled" />
          <Stat value="40" unit="%" label="Faster test cycles" />
        </div>
      </Section>

      <Section tone="alt" containerSize="xl">
        <SectionHeader eyebrow="Cards" title="Card surfaces" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <h3 className="font-display text-lg font-semibold tracking-tight">Surface card</h3>
            <p className="text-ink-2 mt-2 text-sm">Default white surface, slate hairline border.</p>
          </Card>
          <Card tone="alt">
            <h3 className="font-display text-lg font-semibold tracking-tight">Alt-tone card</h3>
            <p className="text-ink-2 mt-2 text-sm">For nesting on canvas-2 backgrounds.</p>
          </Card>
          <Card tone="outline" hoverable>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              Outline (hoverable)
            </h3>
            <p className="text-ink-2 mt-2 text-sm">Lifts shadow on hover for clickable cards.</p>
          </Card>
        </div>
      </Section>

      <Section tone="canvas" containerSize="xl">
        <SectionHeader
          eyebrow="Feature grid"
          title="3-up feature grid (replaces handhold's 3-card use-case row)"
        />
        <FeatureGrid
          items={[
            {
              icon: <span className="font-display text-lg font-bold">1</span>,
              title: "Clean Core Assessment",
              body: "Audit every custom ABAP object before the migration starts. AI-classifies usage, flags dead code, outputs a remediation plan.",
              href: "/clean-core-assessment/",
              hrefLabel: "Read more",
            },
            {
              icon: <span className="font-display text-lg font-bold">2</span>,
              title: "Data Migration AI",
              body: "11K+ tables profiled, mapped to S/4 simplified model, anomaly-detected before cutover. Zero surprises at go-live.",
              href: "/data-management/",
              hrefLabel: "Read more",
            },
            {
              icon: <span className="font-display text-lg font-bold">3</span>,
              title: "AI-Powered Adoption",
              body: "WalkMe-driven copilot guides users through every workflow. Faster onboarding, fewer support tickets.",
              href: "/walkme/",
              hrefLabel: "Read more",
            },
          ]}
        />
      </Section>

      <Section tone="alt" containerSize="xl">
        <SectionHeader eyebrow="Step strip" title="3-step how-it-works" />
        <StepStrip
          steps={[
            {
              title: "Assess",
              body: "Sierra's AI scans your ECC environment, classifies custom code, scores data quality, and surfaces every dependency in days.",
            },
            {
              title: "Migrate",
              body: "ML-driven remediation handles 90% of code automatically. Data lands clean in S/4HANA with continuous quality scoring.",
            },
            {
              title: "Run",
              body: "AMS plus AI-led adoption keep velocity high. Sierra stays embedded for ongoing optimization.",
            },
          ]}
        />
      </Section>

      <Section tone="warm" containerSize="lg">
        <SectionHeader eyebrow="Testimonial" title="Quote / testimonial — light + dark" />
        <div className="grid gap-6 lg:grid-cols-2">
          <TestimonialCard
            quote="Sierra cut our SAP migration timeline in half. Their Clean Core engine flagged 70% of our custom code as dead before we wrote a line of remediation."
            attribution="Maria González"
            attributionRole="VP, Enterprise Applications"
            attributionCompany="ACME Energy"
          />
          <TestimonialCard
            dark
            quote="The AI Cockpit gave our architects visibility we never had in 20 years of SAP ownership. We closed our assessment in three days, not three weeks."
            attribution="David Chen"
            attributionRole="Chief Enterprise Architect"
            attributionCompany="Meridian Group"
          />
        </div>
      </Section>

      <Section tone="night" containerSize="xl">
        <SectionHeader eyebrow="Gradient Visual" title="GradientVisual — all accents" />
        <div className="grid gap-6 lg:grid-cols-3">
          <GradientVisual accent="default" grain className="p-8">
            <Eyebrow tone="dark" className="mb-3">Default</Eyebrow>
            <p className="text-white/70 text-sm leading-relaxed">
              Deep navy with cyan + violet blobs. Use for hero visuals and primary feature panels.
            </p>
          </GradientVisual>
          <GradientVisual accent="teal-pink" grain className="p-8">
            <Eyebrow tone="dark" className="mb-3">Teal-Pink</Eyebrow>
            <p className="text-white/70 text-sm leading-relaxed">
              Teal + soft pink. Use for AI product spotlights and chat/cockpit panels.
            </p>
          </GradientVisual>
          <GradientVisual accent="violet-blue" grain className="p-8">
            <Eyebrow tone="dark" className="mb-3">Violet-Blue</Eyebrow>
            <p className="text-white/70 text-sm leading-relaxed">
              Violet + sky blue. Use for secure/technical sections and news/press content.
            </p>
          </GradientVisual>
        </div>
      </Section>

      <CTABand
        eyebrow="Ready to start"
        title={<>Book your AI-powered SAP RISE assessment.</>}
        subtitle="60-minute scoping call with a Sierra principal. Walk away with a clean-core inventory and a transformation cost estimate."
        actions={
          <>
            <Button href="/contact/" variant="primary" size="lg">
              Book an assessment
            </Button>
            <Button href="/sap-rise/" variant="secondary" size="lg">
              Read about RISE
            </Button>
          </>
        }
      />
    </>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Container size="md" className="mb-10 px-0 sm:px-0">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="display-lg text-ink mt-3">{title}</h2>
    </Container>
  );
}
