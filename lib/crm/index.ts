/**
 * Single-entry CRM client resolver. Returns the HubSpot impl when credentials
 * are present in env, otherwise the JSONL stub. Callers don't care which —
 * the `CrmClient` interface is identical.
 */
import { HubSpotCrmClient } from "./hubspot";
import { JsonlCrmClient } from "./jsonl";
import type { CrmClient } from "./types";

let cached: CrmClient | null = null;

export function getCrmClient(): CrmClient {
  if (cached) return cached;
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (portalId && token) {
    cached = new HubSpotCrmClient(portalId, token);
  } else {
    cached = new JsonlCrmClient();
  }
  return cached;
}

export type { CrmClient, CrmUpsertResult, LeadCapturePayload } from "./types";
