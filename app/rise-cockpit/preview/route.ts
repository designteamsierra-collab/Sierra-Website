/**
 * Auth-gated server route that streams the prototype HTML for embedding in an
 * iframe. The middleware already gates /rise-cockpit/preview, but we re-check
 * here for defense in depth.
 *
 * Phase 4.B will replace this with a fully-React port of the prototype's
 * interactive simulators. For now the iframe gives qualified leads a 100%
 * faithful, fully-interactive cockpit experience without blocking Phase 4.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if (!session.userId) {
    return NextResponse.redirect(
      new URL("/rise-cockpit/request-access", "https://sierradigitalinc.com"),
    );
  }
  const file = path.join(process.cwd(), "reference", "sierra_rise_ai_prototype.html");
  const html = await fs.readFile(file, "utf8");
  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
      // Tighten frame ancestors to our own origin so this page can ONLY be
      // embedded by the cockpit page on this site.
      "Content-Security-Policy": "frame-ancestors 'self'",
    },
  });
}
