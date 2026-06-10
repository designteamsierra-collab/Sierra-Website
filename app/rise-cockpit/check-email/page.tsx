import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GradientVisual } from "@/components/ui/GradientVisual";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Check your email — Sierra Digital",
  robots: { index: false, follow: false },
  alternates: { canonical: "/rise-cockpit/check-email/" },
};

export default function CheckEmailPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-night">
          <Container size="md" className="flex min-h-[60vh] items-center justify-center py-20 sm:py-28">
            <GradientVisual
              accent="teal-pink"
              grain
              className="mx-auto w-full max-w-xl px-8 py-12 text-center sm:px-12"
            >
              {/* Envelope icon */}
              <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-white/10 border border-white/10">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-300"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <h1 className="display-md text-white">Request received</h1>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
                Thanks for your interest in the AI RISE Cockpit. We&apos;ve saved your details and
                will follow up with your personalised demo access shortly.
              </p>
              <Link
                href="/rise-cockpit/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                View Cockpit Preview
              </Link>
              <p className="mt-6 text-xs text-white/35">
                Need to change your details?{" "}
                <Link
                  href="/rise-cockpit/request-access/"
                  className="text-cyan-300 underline-offset-4 hover:underline"
                >
                  Resubmit
                </Link>
                .
              </p>
            </GradientVisual>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
