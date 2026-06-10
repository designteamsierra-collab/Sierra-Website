import { promises as dns } from "node:dns";

/**
 * Personal email providers we reject for the gated cockpit.
 * Curated to maximize lead quality without false-positives. Domains are
 * lowercased and matched exactly.
 */
const PERSONAL_DOMAINS = new Set<string>([
  // Google
  "gmail.com",
  "googlemail.com",
  // Microsoft
  "outlook.com",
  "outlook.co.uk",
  "outlook.de",
  "outlook.fr",
  "outlook.es",
  "hotmail.com",
  "hotmail.co.uk",
  "hotmail.fr",
  "hotmail.de",
  "hotmail.es",
  "hotmail.it",
  "live.com",
  "live.co.uk",
  "live.fr",
  "msn.com",
  "passport.com",
  // Yahoo
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.co.in",
  "yahoo.fr",
  "yahoo.de",
  "yahoo.es",
  "yahoo.it",
  "yahoo.com.au",
  "yahoo.com.br",
  "yahoo.ca",
  "ymail.com",
  "rocketmail.com",
  // Apple
  "icloud.com",
  "me.com",
  "mac.com",
  // AOL
  "aol.com",
  "aim.com",
  // Proton
  "proton.me",
  "protonmail.com",
  "protonmail.ch",
  "pm.me",
  // Yandex / Mail.ru
  "yandex.com",
  "yandex.ru",
  "ya.ru",
  "mail.ru",
  "list.ru",
  "bk.ru",
  "inbox.ru",
  // GMX
  "gmx.com",
  "gmx.net",
  "gmx.us",
  "gmx.de",
  // Fastmail
  "fastmail.com",
  "fastmail.fm",
  // Tutanota / Tuta
  "tutanota.com",
  "tutanota.de",
  "tutamail.com",
  "tuta.io",
  // Other webmail
  "rediffmail.com",
  "qq.com",
  "163.com",
  "126.com",
  "naver.com",
  "daum.net",
  "hanmail.net",
  "seznam.cz",
  "wp.pl",
  "onet.pl",
  "interia.pl",
  "freenet.de",
  "web.de",
]);

/**
 * Disposable / throwaway / temporary email services. Curated list of
 * widely-used ones — not exhaustive. Production will add a periodic refresh
 * from disposable-email-domains lists.
 */
const DISPOSABLE_DOMAINS = new Set<string>([
  "mailinator.com",
  "mailinator.net",
  "10minutemail.com",
  "10minutemail.net",
  "guerrillamail.com",
  "guerrillamail.net",
  "guerrillamail.org",
  "sharklasers.com",
  "temp-mail.org",
  "tempmail.com",
  "tempmailo.com",
  "throwaway.email",
  "throwawaymail.com",
  "yopmail.com",
  "yopmail.net",
  "yopmail.fr",
  "trashmail.com",
  "getnada.com",
  "spamgourmet.com",
  "discard.email",
  "fakeinbox.com",
  "mintemail.com",
  "mohmal.com",
  "tempr.email",
  "dispostable.com",
  "tempinbox.com",
  "maildrop.cc",
  "moakt.com",
]);

export type EmailRejectReason = "syntax" | "personal-domain" | "disposable-domain" | "no-mx";

export interface EmailValidationResult {
  ok: boolean;
  domain: string | null;
  reason?: EmailRejectReason;
  message?: string;
}

const SIMPLE_EMAIL = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;

/** Sync-only checks: syntax + domain blocklists. */
export function classifyEmail(emailRaw: string): EmailValidationResult {
  const email = emailRaw.trim().toLowerCase();
  const m = email.match(SIMPLE_EMAIL);
  if (!m) {
    return { ok: false, domain: null, reason: "syntax", message: "Enter a valid email." };
  }
  const domain = m[1];
  if (PERSONAL_DOMAINS.has(domain)) {
    return {
      ok: false,
      domain,
      reason: "personal-domain",
      message: "Use your work / company email — personal mailboxes aren't accepted here.",
    };
  }
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      ok: false,
      domain,
      reason: "disposable-domain",
      message: "Disposable email services aren't accepted. Use your company email.",
    };
  }
  return { ok: true, domain };
}

/** Async: confirms the domain has at least one MX record. */
export async function hasMailExchange(domain: string): Promise<boolean> {
  try {
    const records = await dns.resolveMx(domain);
    return Array.isArray(records) && records.length > 0;
  } catch {
    return false;
  }
}

/** Full pipeline: syntax → blocklist → MX. Use server-side. */
export async function validateBusinessEmail(emailRaw: string): Promise<EmailValidationResult> {
  const sync = classifyEmail(emailRaw);
  if (!sync.ok || !sync.domain) return sync;
  const mxOk = await hasMailExchange(sync.domain);
  if (!mxOk) {
    return {
      ok: false,
      domain: sync.domain,
      reason: "no-mx",
      message: `${sync.domain} has no mail server — double-check the address.`,
    };
  }
  return { ok: true, domain: sync.domain };
}
