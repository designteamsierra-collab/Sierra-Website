// SAP AI Core – OAuth2 client-credentials token management + OpenAI-compat
// streaming chat completions.

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface TokenCache {
  token: string;
  expiresAt: number; // ms epoch
}

let _tokenCache: TokenCache | null = null;

async function getToken(): Promise<string> {
  const now = Date.now();
  // Reuse cached token if it won't expire within the next 90 s.
  if (_tokenCache && _tokenCache.expiresAt > now + 90_000) {
    return _tokenCache.token;
  }

  const url = process.env.AICORE_AUTH_URL;
  const clientId = process.env.AICORE_CLIENT_ID;
  const clientSecret = process.env.AICORE_CLIENT_SECRET;

  if (!url || !clientId || !clientSecret) {
    throw new Error("Missing SAP AI Core auth env vars (AICORE_AUTH_URL / CLIENT_ID / SECRET)");
  }

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`AI Core auth failed: ${res.status} – ${text}`);
  }

  const json = (await res.json()) as { access_token: string; expires_in: number };
  _tokenCache = {
    token: json.access_token,
    expiresAt: now + json.expires_in * 1000,
  };
  return _tokenCache.token;
}

export async function streamChat(messages: ChatMessage[]): Promise<ReadableStream<Uint8Array>> {
  const token = await getToken();

  const baseUrl = process.env.AICORE_BASE_URL;
  const deploymentId = process.env.AICORE_DEPLOYMENT_ID;
  const resourceGroup = process.env.AICORE_RESOURCE_GROUP ?? "default";

  if (!baseUrl || !deploymentId) {
    throw new Error(
      "Missing SAP AI Core inference env vars (AICORE_BASE_URL / AICORE_DEPLOYMENT_ID)",
    );
  }

  const url = `${baseUrl}/inference/deployments/${deploymentId}/chat/completions`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "AI-Resource-Group": resourceGroup,
    },
    body: JSON.stringify({
      messages,
      max_tokens: 1024,
      temperature: 0.5,
      stream: true,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`AI Core inference failed: ${res.status} – ${text}`);
  }

  if (!res.body) {
    throw new Error("AI Core returned an empty response body");
  }

  return res.body;
}
