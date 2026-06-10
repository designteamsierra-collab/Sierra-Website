import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { cockpitFormSchema } from "@/lib/cockpit-form-schema";
import { validateBusinessEmail } from "@/lib/email-validation";
import { getCrmClient } from "@/lib/crm";

export const runtime = "nodejs"; // dns requires node runtime
export const dynamic = "force-dynamic";

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const clerkActive =
  (clerkKey.startsWith("pk_test_") || clerkKey.startsWith("pk_live_")) &&
  !clerkKey.includes("REPLACE_ME") &&
  clerkKey.length > 30;

const apiSchema = cockpitFormSchema.extend({
  pageUrl: z.string().optional(),
  utm: z
    .object({
      source: z.string().optional(),
      medium: z.string().optional(),
      campaign: z.string().optional(),
      content: z.string().optional(),
      term: z.string().optional(),
    })
    .optional(),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = apiSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "validation",
        details: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const email = data.email.trim().toLowerCase();

  // Server-side email validation: domain blocklist + MX check.
  const emailCheck = await validateBusinessEmail(email);
  if (!emailCheck.ok) {
    return NextResponse.json(
      { ok: false, error: "email", reason: emailCheck.reason, message: emailCheck.message },
      { status: 422 },
    );
  }

  // CRM upsert before any auth side-effects.
  const crm = getCrmClient();
  let crmResult;
  try {
    crmResult = await crm.upsertLead({
      email,
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      company: data.company.trim(),
      jobTitle: data.jobTitle.trim(),
      website: data.website?.trim() || undefined,
      phone: data.phone?.trim() || undefined,
      useCase: data.useCase.trim(),
      consent: true,
      source: "rise_cockpit_request",
      pageUrl: data.pageUrl,
      utm: data.utm,
    });
  } catch (err) {
    console.error("CRM upsert failed", err);
    return NextResponse.json(
      { ok: false, error: "crm", message: "Couldn't reach CRM. Please try again." },
      { status: 502 },
    );
  }

  // When Clerk is active: create/find a Clerk user and send them to /sign-in
  // for magic-link verification. When inactive (dev / pre-launch): skip Clerk,
  // set a session cookie so the cockpit page can verify the form was completed,
  // and redirect straight to check-email.
  if (clerkActive) {
    const { clerkClient } = await import("@clerk/nextjs/server");
    let clerkUserId: string | undefined;
    try {
      const client = await clerkClient();
      const existing = await client.users
        .getUserList({ emailAddress: [email], limit: 1 })
        .catch(() => ({ data: [] }));
      if (existing.data.length > 0) {
        clerkUserId = existing.data[0].id;
      } else {
        const created = await client.users.createUser({
          emailAddress: [email],
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          publicMetadata: {
            company: data.company.trim(),
            jobTitle: data.jobTitle.trim(),
            source: "rise_cockpit_request",
          },
        });
        clerkUserId = created.id;
      }
    } catch (err) {
      console.error("Clerk createUser failed", err);
      return NextResponse.json(
        {
          ok: false,
          error: "auth",
          message: "Auth provider unavailable. We've recorded your details — please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      created: crmResult.created,
      contactId: crmResult.contactId,
      clerkUserId,
      next: `/sign-in?email=${encodeURIComponent(email)}&redirect_url=${encodeURIComponent("/rise-cockpit")}`,
    });
  }

  // Clerk inactive — grant a short-lived session cookie so the cockpit page
  // knows the visitor completed the qualification form.
  const res = NextResponse.json({
    ok: true,
    created: crmResult.created,
    next: "/rise-cockpit/check-email/",
  });

  res.cookies.set("cockpit_access", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    // 4-hour window — long enough for a demo session, short enough to
    // require re-qualification if they come back another day.
    maxAge: 60 * 60 * 4,
  });

  return res;
}
