import type { CrmClient, CrmUpsertResult, LeadCapturePayload } from "./types";

const BASE = "https://api.hubapi.com/crm/v3/objects/contacts";

interface HsContact {
  id: string;
}

interface HsSearchResponse {
  results: HsContact[];
}

interface HsErrorResponse {
  message?: string;
  status?: string;
}

export class HubSpotCrmClient implements CrmClient {
  private readonly headers: Record<string, string>;

  constructor(
    private readonly portalId: string,
    private readonly token: string,
  ) {
    void this.portalId;
    this.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }

  async upsertLead(payload: LeadCapturePayload): Promise<CrmUpsertResult> {
    const properties = this.toHsProperties(payload);

    // Search for existing contact by email.
    const existing = await this.findByEmail(payload.email);
    if (existing) {
      await this.updateContact(existing.id, properties);
      return { created: false, contactId: existing.id };
    }

    const created = await this.createContact({ ...properties, email: payload.email });
    return { created: true, contactId: created.id };
  }

  private async findByEmail(email: string): Promise<HsContact | null> {
    const res = await fetch(`${BASE}/search`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        filterGroups: [
          { filters: [{ propertyName: "email", operator: "EQ", value: email }] },
        ],
        properties: ["email"],
        limit: 1,
      }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as HsSearchResponse;
    return json.results[0] ?? null;
  }

  private async createContact(properties: Record<string, string>): Promise<HsContact> {
    const res = await fetch(BASE, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ properties }),
    });
    if (!res.ok) {
      const err = (await res.json().catch(() => ({}))) as HsErrorResponse;
      throw new Error(`HubSpot createContact failed ${res.status}: ${err.message ?? "unknown"}`);
    }
    return (await res.json()) as HsContact;
  }

  private async updateContact(id: string, properties: Record<string, string>): Promise<void> {
    const res = await fetch(`${BASE}/${id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ properties }),
    });
    if (!res.ok) {
      const err = (await res.json().catch(() => ({}))) as HsErrorResponse;
      throw new Error(`HubSpot updateContact failed ${res.status}: ${err.message ?? "unknown"}`);
    }
  }

  private toHsProperties(p: LeadCapturePayload): Record<string, string> {
    const props: Record<string, string> = {
      firstname: p.firstName,
      lastname: p.lastName,
      company: p.company,
      jobtitle: p.jobTitle,
      sierra_lead_source: p.source,
      sierra_consent: "true",
    };
    if (p.website) props.website = p.website;
    if (p.phone) props.phone = p.phone;
    if (p.useCase) props.sierra_use_case = p.useCase;
    if (p.pageUrl) props.sierra_page_url = p.pageUrl;
    if (p.utm?.source) props.hs_analytics_source = p.utm.source;
    if (p.utm?.medium) props.sierra_utm_medium = p.utm.medium;
    if (p.utm?.campaign) props.hs_analytics_last_touch_converting_campaign = p.utm.campaign;
    return props;
  }
}
