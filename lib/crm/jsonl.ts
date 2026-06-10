/**
 * JSON-Lines append-only CRM stub for Phase 4 development.
 * Drop-in replacement for the HubSpot client (same `CrmClient` interface).
 * One JSON object per line at `data/leads.jsonl`. Gitignored.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import type { CrmClient, CrmUpsertResult, LeadCapturePayload } from "./types";

const FILE = path.join(process.cwd(), "data", "leads.jsonl");

export class JsonlCrmClient implements CrmClient {
  async upsertLead(payload: LeadCapturePayload): Promise<CrmUpsertResult> {
    if (!payload.consent) {
      throw new Error("Cannot upsert lead without consent.");
    }
    await fs.mkdir(path.dirname(FILE), { recursive: true });

    // Read existing and check whether this email exists
    const existing = await readAll();
    const idx = existing.findIndex((r) => r.email === payload.email);
    const record: StoredLead = {
      ...payload,
      capturedAt: new Date().toISOString(),
    };
    const created = idx === -1;
    if (created) {
      await fs.appendFile(FILE, JSON.stringify(record) + "\n", "utf8");
    } else {
      // Update in place: rewrite file
      existing[idx] = { ...existing[idx], ...record };
      await fs.writeFile(FILE, existing.map((r) => JSON.stringify(r)).join("\n") + "\n", "utf8");
    }
    return { created, contactId: payload.email };
  }
}

interface StoredLead extends LeadCapturePayload {
  capturedAt: string;
}

async function readAll(): Promise<StoredLead[]> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    return raw
      .split(/\r?\n/)
      .filter((s) => s.trim().length > 0)
      .map((s) => JSON.parse(s) as StoredLead);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}
