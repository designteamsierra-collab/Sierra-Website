import type { NextConfig } from "next";
import { LEGACY_REDIRECTS } from "./lib/redirects";

const nextConfig: NextConfig = {
  // Strict trailing slashes on every public URL — matches live WP behavior.
  trailingSlash: true,

  // Compress responses.
  compress: true,

  // Images: serve from the live origin during dev/staging; switch to local
  // paths after the WP→Vercel assets migration is complete (Phase 9).
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "sierradigitalinc.com", pathname: "/wp-content/uploads/**" },
    ],
  },

  // Redirect legacy WP URLs to their canonical Next.js equivalents.
  async redirects() {
    return LEGACY_REDIRECTS.map(({ from, to, permanent }) => ({
      source: from,
      destination: to,
      permanent,
    }));
  },

  // Enforce HTTPS and add security headers at the Next.js layer too
  // (vercel.json handles CDN-layer headers; these fire for edge/self-hosted).
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
