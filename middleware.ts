import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { type NextFetchEvent, NextRequest, NextResponse } from "next/server";

// Protected = anything under /rise-cockpit EXCEPT the qualification gates.
const PROTECTED = createRouteMatcher(["/rise-cockpit", "/rise-cockpit/preview(.*)"]);

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const clerkActive =
  (clerkKey.startsWith("pk_test_") || clerkKey.startsWith("pk_live_")) &&
  !clerkKey.includes("REPLACE_ME") &&
  clerkKey.length > 30;

// Only build the Clerk handler when keys are actually configured — instantiating
// clerkMiddleware() with a placeholder key throws at request time.
const clerkHandler = clerkActive
  ? clerkMiddleware(async (auth, req) => {
      if (PROTECTED(req)) {
        const session = await auth();
        if (!session.userId) {
          const url = new URL("/rise-cockpit/request-access", req.url);
          return NextResponse.redirect(url);
        }
      }
    })
  : null;

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  if (!clerkHandler) return NextResponse.next();
  return clerkHandler(req, event);
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
