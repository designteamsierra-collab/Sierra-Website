/**
 * Clerk webhook receiver.
 * For Phase 4 we only listen for `user.created` and append to the audit trail.
 * Phase 6 will pivot the receiver to push fresh signups into HubSpot.
 *
 * Configure in Clerk dashboard:
 *   Endpoint:  https://sierradigitalinc.com/api/webhooks/clerk
 *   Events:    user.created (and user.updated optional)
 *   Signing secret env var: CLERK_WEBHOOK_SECRET (Svix-compatible)
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { Webhook } from "svix";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ClerkUserCreated {
  type: "user.created";
  data: {
    id: string;
    email_addresses: Array<{ email_address: string; verification?: { status: string } }>;
    first_name?: string;
    last_name?: string;
    public_metadata?: Record<string, unknown>;
    created_at: number;
  };
}

type ClerkEvent = ClerkUserCreated | { type: string; data: unknown };

export async function POST(req: NextRequest) {
  const secret = process.env.CLERK_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "CLERK_WEBHOOK_SECRET not configured" },
      { status: 503 },
    );
  }

  const payload = await req.text();
  const headers = {
    "svix-id": req.headers.get("svix-id") ?? "",
    "svix-timestamp": req.headers.get("svix-timestamp") ?? "",
    "svix-signature": req.headers.get("svix-signature") ?? "",
  };

  let evt: ClerkEvent;
  try {
    const wh = new Webhook(secret);
    evt = wh.verify(payload, headers) as ClerkEvent;
  } catch (err) {
    console.error("Clerk webhook verification failed", err);
    return NextResponse.json({ ok: false, error: "signature" }, { status: 400 });
  }

  if (evt.type === "user.created") {
    const e = evt as ClerkUserCreated;
    const auditPath = path.join(process.cwd(), "data", "clerk-events.jsonl");
    await fs.mkdir(path.dirname(auditPath), { recursive: true });
    await fs.appendFile(
      auditPath,
      JSON.stringify({
        receivedAt: new Date().toISOString(),
        eventType: e.type,
        userId: e.data.id,
        email: e.data.email_addresses[0]?.email_address,
        firstName: e.data.first_name,
        lastName: e.data.last_name,
        publicMetadata: e.data.public_metadata,
        createdAt: e.data.created_at,
      }) + "\n",
      "utf8",
    );
  }

  return NextResponse.json({ ok: true });
}
