import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Sierra Digital",
  description: "Reach out to Sierra Digital to learn how we help organizations assess, migrate, and modernize their SAP investments with AI, analytics, and cloud solutions.",
  alternates: { canonical: "https://sierradigitalinc.com/contact/" },
};

const LOCATIONS = [
  {
    city: "Houston",
    type: "Global Headquarters",
    name: "Sierra Digital Inc",
    address: "6001 Savoy Drive Suite 210, Houston, TX 77036",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.1132153694894!2d-95.50950611874248!3d29.716479610862642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c24c11374c41%3A0x5536431137beece7!2sSierra%20Digital%20Inc!5e0!3m2!1sen!2sin!4v1765574064876!5m2!1sen!2sin",
    mapHref: "https://maps.google.com/?q=Sierra+Digital+Inc+6001+Savoy+Drive+Suite+210+Houston+TX+77036",
  },
  {
    city: "Coimbatore",
    type: "Development Centre",
    name: "Sierra Support Centre Pvt Ltd",
    address: "Shri Parvathy Tech Park, No: 4 & 5, Brook Bond Colony, Krishnaswamy Road, R.S. Puram, Coimbatore – 641002",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.374537714966!2d76.95594887480847!3d11.010500189152847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859060c05b343%3A0xde280724cd97c4be!2zU2llcnJhIFN1cHBvcnQgQ2VudGVyIFByaXZhdGUgTGltaXRlZA!5e0!3m2!1sen!2sin!4v1765572457168!5m2!1sen!2sin",
    mapHref: "https://maps.google.com/?q=Sierra+Support+Centre+Coimbatore",
  },
  {
    city: "Salem",
    type: "Support Centre",
    name: "Sierra Support Centre Pvt Ltd",
    address: "Namma Office, 3rd Floor, Ramakrishna Rd, Seerangapalayam, Salem 636007",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.342271568608!2d78.14867257481892!3d11.670137588538262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c5d982cc01%3A0x2dd265e96ce7ed2!2zU2llcnJhIFN1cHBvcnQgQ2VudGVyIFByaXZhdGUgTGltaXRlZA!5e0!3m2!1sen!2sin!4v1765572560022!5m2!1sen!2sin",
    mapHref: "https://maps.google.com/?q=Sierra+Support+Centre+Salem",
  },
];

export default function ContactPage() {
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
              <Eyebrow tone="dark">Contact Us · Sierra Digital</Eyebrow>
            </div>
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              Let&apos;s Get The{" "}
              <em className="font-serif italic font-extralight opacity-90">Conversation Started.</em>
            </h1>
            <p
              className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
              style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
            >
              Contact us today to learn how we can help you simplify, extend, and enhance the value of your SAP
              investments for optimum business advantage.
            </p>
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* Work together + Book a Meeting + Form */}
      <Section tone="canvas">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Intro + Book a Meeting */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <h2 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
                Let&apos;s work together to achieve <strong className="font-semibold">your goals.</strong>
              </h2>
              <p className="text-ink-2 text-sm leading-relaxed">
                Contact us today to learn how we can help you Assess, Migrate, and Modernize the value of your SAP
                investments for optimum business advantage.
              </p>
            </div>

            <div
              className="rounded-2xl border border-primary-100 p-7 flex flex-col gap-4"
              style={{
                background: "linear-gradient(145deg, #eff8fb 0%, #d6edf3 50%, #aedce8 100%)",
                boxShadow: "0 4px 20px rgba(33,138,163,0.13), 0 1px 4px rgba(33,138,163,0.07)",
              }}
            >
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <h3 className="font-display text-ink text-xl font-light leading-snug tracking-tight">
                Book a Meeting <br />with <strong className="font-semibold">Our Experts</strong>
              </h3>
              <div className="flex items-center justify-center rounded-xl overflow-hidden bg-white border border-primary-100 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sierradigitalinc.com/wp-content/uploads/2025/07/book-a-call-with-our-BTP-Experts.png"
                  alt="Book a call with our BTP Experts"
                  width={500}
                  height={500}
                  className="max-h-40 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-ink-2 text-sm text-center font-semibold">( or )</p>
              <a
                href="https://outlook.office365.com/book/BookacallwithourBTPExperts@sierradigitalinc.com/?ismsaljsauthenabled=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-600 transition-colors"
              >
                Book a Meet
              </a>
              <ul className="text-ink-2 text-sm leading-relaxed list-disc pl-5 flex flex-col gap-1">
                <li>Scan QR Code in Your Mobile Device or Click Book a Meet button</li>
                <li>Schedule your meeting at your convenient time.</li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="block h-1 w-10 rounded-full bg-primary-500" />
              <h2 className="font-display text-ink text-2xl font-light leading-snug tracking-tight">
                Join <strong className="font-semibold">Us?</strong> Fill the Form Below
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Locations */}
      <Section tone="alt">
        <h2 className="font-display text-ink text-2xl font-light leading-snug tracking-tight text-center mb-10">
          Our <em className="font-serif italic">Locations</em>
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <div
              key={loc.city}
              className="will-reveal flex flex-col rounded-2xl border border-primary-100 overflow-hidden bg-white"
              data-delay={String(i * 80)}
              style={{ boxShadow: "0 4px 20px rgba(33,138,163,0.10), 0 1px 4px rgba(33,138,163,0.06)" }}
            >
              <iframe
                src={loc.mapSrc}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`Map – ${loc.city}`}
              />
              <div className="flex flex-col gap-2 p-5">
                <span className="block h-0.5 w-8 rounded-full bg-primary-500" />
                <p className="text-primary-800 text-[11px] font-semibold tracking-widest uppercase font-mono">
                  {loc.city}
                </p>
                <h3 className="font-display text-ink text-lg font-light leading-snug tracking-tight">
                  {loc.type}
                </h3>
                <p className="text-ink-2 text-sm leading-relaxed">
                  {loc.name}<br />{loc.address}
                </p>
                <a
                  href={loc.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-primary-600 text-sm font-semibold hover:text-primary-700"
                >
                  ↗ See on Google Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
