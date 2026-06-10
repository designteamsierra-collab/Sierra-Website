import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { streamChat, type ChatMessage } from "@/lib/ai-core";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `You are Sierra, an AI assistant for Sierra Digital — an SAP digital transformation firm specializing in AI-powered SAP RISE migrations (ECC → S/4HANA).

You help enterprise buyers (SAP program leads, IT architects, CIOs) understand:
- Sierra's AI-accelerated ECC-to-S/4HANA brownfield conversion methodology
- The RISE with SAP subscription model and how Sierra accelerates it
- Sierra's AI-powered toolchain: ML-driven ABAP code remediation, generative test engineering, AI-led user adoption
- Typical timeline compression (12–24 month programs significantly accelerated) and risk reduction
- Sierra's clean-core and Phase-by-Phase methodology
- How to access the Sierra AI RISE Cockpit (live interactive demo environment)

Tone: confident SAP consultant — precise, no fluff, no filler words. Keep responses to 2–4 sentences unless the user explicitly asks for detail. Use plain text (no markdown bullets or headers) since you're in a chat widget.

When a visitor seems ready to engage or wants a demo, guide them to request access to the AI Cockpit at /rise-cockpit/request-access, or to book a discovery call.

Never discuss competitor pricing, make guarantees about specific ROI figures, or reveal internal Sierra pricing. If a question falls outside your knowledge, acknowledge it briefly and offer to connect them with a Sierra advisor.`;

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      }),
    )
    .min(1)
    .max(20),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  const messages: ChatMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...parsed.data.messages,
  ];

  let upstream: ReadableStream<Uint8Array>;
  try {
    upstream = await streamChat(messages);
  } catch (err) {
    console.error("[chat] AI Core error:", err);
    return NextResponse.json({ error: "AI service unavailable. Please try again shortly." }, {
      status: 502,
    });
  }

  return new NextResponse(upstream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
