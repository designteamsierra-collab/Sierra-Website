import type { Metadata } from "next";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Sign in — Sierra Digital",
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-canvas">
          <Container size="md" className="py-20 sm:py-24">
            <div className="mx-auto flex max-w-md flex-col items-center gap-6">
              <div className="text-center">
                <h1 className="display-md text-ink">Sign in to the AI Cockpit</h1>
                <p className="text-ink-2 mt-3 text-base">
                  We&apos;ll email you a one-time sign-in link.
                </p>
              </div>
              <SignIn
                routing="path"
                path="/sign-in"
                signUpUrl="/rise-cockpit/request-access"
                fallbackRedirectUrl="/rise-cockpit"
              />
              <p className="text-muted text-center text-xs">
                Haven&apos;t requested access yet?{" "}
                <Link
                  href="/rise-cockpit/request-access/"
                  className="text-primary-700 hover:text-accent-700 underline underline-offset-4"
                >
                  Start here
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
