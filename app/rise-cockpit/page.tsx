import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SierraLogo } from "@/components/ui/SierraLogo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AI RISE Cockpit — Sierra Digital",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: "/rise-cockpit/" },
};

// Mirror the same guard used in middleware.ts — only call Clerk APIs when
// real keys are present; otherwise treat the cockpit as publicly accessible
// (dev mode / pre-launch).
const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const clerkActive =
  (clerkKey.startsWith("pk_test_") || clerkKey.startsWith("pk_live_")) &&
  !clerkKey.includes("REPLACE_ME") &&
  clerkKey.length > 30;

export default async function CockpitPage() {
  let greeting = "there";
  let company: string | null = null;

  if (!clerkActive) {
    // No Clerk configured — enforce the qualification form via a cookie set by
    // the /api/lead/cockpit route after successful form submission.
    const jar = await cookies();
    if (!jar.get("cockpit_access")?.value) {
      redirect("/rise-cockpit/request-access/");
    }
  }

  if (clerkActive) {
    // Dynamic import so the module is never evaluated when Clerk is inactive
    const { auth, currentUser } = await import("@clerk/nextjs/server");
    const session = await auth();
    if (!session.userId) redirect("/rise-cockpit/request-access");
    const user = await currentUser();
    greeting = user?.firstName ?? "there";
    company = (user?.publicMetadata?.company as string | undefined) ?? null;
  }

  return (
    <div className="bg-night text-canvas flex min-h-screen flex-col">
      <header className="border-canvas/10 bg-night sticky top-0 z-50 flex items-center gap-4 border-b px-6 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Sierra Digital — home">
          <SierraLogo onDark className="h-[22px] w-auto" />
          <span className="text-canvas/40 hidden text-sm sm:block">/ AI RISE Cockpit</span>
        </Link>
        <div className="ml-auto flex items-center gap-4 text-sm">
          <div className="text-right">
            <div className="text-canvas/90 font-medium">Hi, {greeting}</div>
            {company ? <div className="text-canvas/50 text-xs">{company}</div> : null}
          </div>
          {clerkActive && (
            // Dynamic so SignOutButton is never imported without valid Clerk keys
            <ClerkSignOut />
          )}
        </div>
      </header>

      <iframe
        src="/rise-cockpit/preview"
        title="Sierra AI RISE Cockpit"
        className="block w-full flex-1 border-0"
      />
    </div>
  );
}

// Separate async component so the import is isolated
async function ClerkSignOut() {
  const { SignOutButton } = await import("@clerk/nextjs");
  return (
    <SignOutButton>
      <button className="bg-canvas/10 text-canvas/90 hover:bg-canvas/20 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors">
        Sign out
      </button>
    </SignOutButton>
  );
}
