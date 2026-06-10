/**
 * CRM contract for lead capture. Identical surface for the JSONL stub used
 * during Phase 4 development and the HubSpot client that will land in Phase 6.
 */

export interface LeadCapturePayload {
  /** Lowercased, trimmed business email — used as the unique key. */
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  website?: string;
  phone?: string;
  /** Free-form "why are you interested" textarea content. */
  useCase: string;
  /** Tag the source so HubSpot can segment. */
  source: "rise_cockpit_request" | "contact_form" | "demo_request" | "chatbot_lead";
  /** Last-touch URL the visitor was on when they submitted. */
  pageUrl?: string;
  /** UTM query params at submit time. Each undefined unless present. */
  utm?: Partial<Record<"source" | "medium" | "campaign" | "content" | "term", string>>;
  /** Visitor consented to be contacted. Required = true to call upsert. */
  consent: true;
}

export interface CrmUpsertResult {
  /** Whether a NEW contact was created (vs. an existing one being updated). */
  created: boolean;
  /** CRM-internal contact ID, if known. */
  contactId?: string | number;
}

export interface CrmClient {
  /**
   * Idempotent upsert keyed by email.
   * Throws on hard failures (network, auth, schema). Validates payload first.
   */
  upsertLead(payload: LeadCapturePayload): Promise<CrmUpsertResult>;
}
