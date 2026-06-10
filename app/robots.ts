import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/rise-cockpit", "/sign-in", "/sign-up", "/dashboard"],
      },
    ],
    sitemap: "https://sierradigitalinc.com/sitemap.xml",
    host: "https://sierradigitalinc.com",
  };
}
