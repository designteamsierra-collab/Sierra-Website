import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { Decoration, OrbCluster, TopoLines, AltitudeScale, SummitMarker } from "@/components/ui/Illustrations";
import { AccessForm } from "./AccessForm";

export const metadata: Metadata = {
  title: "Request access to the AI Cockpit — Sierra Digital",
  description:
    "Walk through Sierra's AI-powered SAP RISE migration cockpit. Live simulators, real numbers. Available to qualified enterprise SAP teams.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/rise-cockpit/request-access/" },
};

const VALUE_POINTS = [
  "Run a 60-second AI migration simulator across 24 ABAP objects",
  "Watch the data migration pipeline grade ECC tables in real time",
  "See AI-generated test coverage replace months of regression work",
  "Inspect Sierra's clean-core and Phase-by-Phase methodology",
];

export default function RequestAccessPage() {
  return (
    <>
      <Nav />
      <main>
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
                <Eyebrow tone="dark">Gated demo · invite only</Eyebrow>
              </div>
              <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
                Get hands-on with the Sierra AI{" "}
                <em className="font-serif italic font-extralight opacity-90">RISE Cockpit.</em>
              </h1>
              <p
                className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
                style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
              >
                A live walkthrough of how Sierra compresses 12–24 month ECC → S/4HANA
                conversions into dramatically accelerated timelines.
              </p>
            </div>
          </Container>
          <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
            <AltitudeScale className="h-full w-auto" tone="white" />
          </Decoration>
        </header>

        {/* Value prop + Form */}
        <Section tone="canvas">
          <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            {/* Left: value prop */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3 will-reveal">
                <span className="block h-1 w-10 rounded-full bg-primary-500" />
                <h2 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
                  What you&apos;ll see inside.
                </h2>
              </div>

              <ul className="flex flex-col gap-5 will-reveal" data-delay="100">
                {VALUE_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-4 border-t border-primary-100 pt-5 first:border-t-0 first:pt-0"
                  >
                    <SummitMarker className="mt-1.5 h-3.5 w-3.5 flex-shrink-0 text-primary-500" tone="ink" />
                    <span className="text-ink-2 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Who's this for */}
              <div
                className="will-reveal rounded-2xl border-2 border-primary-200 p-7 flex flex-col gap-3"
                data-delay="200"
                style={{
                  background: "linear-gradient(145deg, #eff8fb 0%, #aedce8 50%, #7cc4d7 100%)",
                  boxShadow: "0 6px 28px rgba(33,138,163,0.18), 0 1px 6px rgba(33,138,163,0.10)",
                }}
              >
                <span className="block h-1 w-10 rounded-full bg-primary-500" />
                <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
                  Who&apos;s this for?
                </p>
                <p className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                  SAP leaders evaluating S/4HANA.
                </p>
                <p className="text-ink-2 text-sm leading-relaxed">
                  Program leaders, enterprise architects, and CIOs evaluating an
                  ECC-to-S/4HANA migration. Access is qualified — please use your
                  work email.
                </p>
              </div>
            </div>

            {/* Right: form panel */}
            <div
              className="will-reveal rounded-2xl border border-primary-100 p-7 sm:p-10 flex flex-col gap-6 bg-white"
              data-delay="150"
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
            >
              <div className="flex flex-col gap-2 border-b border-primary-100 pb-6">
                <span className="block h-1 w-10 rounded-full bg-primary-500" />
                <h2 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
                  Tell us about your team
                </h2>
                <p className="text-ink-2 text-sm leading-relaxed">
                  Takes about 60 seconds. We&apos;ll send a sign-in link to your company email.
                </p>
              </div>
              <AccessForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
