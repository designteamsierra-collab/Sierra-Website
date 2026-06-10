import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contactFormSchema } from "@/lib/contact-form-schema";
import { getCrmClient } from "@/lib/crm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const apiSchema = contactFormSchema.extend({
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
        details: parsed.error.issues.map((i) => ({ path: i.path.join("."), message: i.message })),
      },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const email = data.email.trim().toLowerCase();

  const crm = getCrmClient();
  try {
    await crm.upsertLead({
      email,
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      company: data.company.trim(),
      jobTitle: data.jobTitle.trim(),
      phone: data.phone?.trim() || undefined,
      useCase: data.message.trim(),
      consent: true,
      source: "contact_form",
      pageUrl: data.pageUrl,
      utm: data.utm,
    });
  } catch (err) {
    console.error("CRM upsert failed (contact form)", err);
    return NextResponse.json(
      { ok: false, error: "crm", message: "Couldn't save your details. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
