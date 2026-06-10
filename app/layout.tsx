import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Fraunces } from "next/font/google";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { Analytics } from "@/components/ui/Analytics";
import { CookieBanner } from "@/components/ui/CookieBanner";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sierradigitalinc.com"),
  title: {
    default: "Sierra Digital",
    template: "%s",
  },
  description:
    "Sierra Digital delivers SAP digital transformation, AI-powered automation, data integration, and cloud solutions to help enterprises modernize, innovate, and drive smarter business outcomes.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Sierra Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/wp-content/uploads/2025/12/data.jpg",
        width: 547,
        height: 800,
        alt: "Sierra Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SierraDigitalInc",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#0e5b7e",
  },
};

// Only activate Clerk when a real key is present (skip during local dev without credentials).
const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const clerkActive =
  (clerkKey.startsWith("pk_test_") || clerkKey.startsWith("pk_live_")) &&
  !clerkKey.includes("REPLACE_ME") &&
  clerkKey.length > 30;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const inner = (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="bg-canvas text-ink min-h-full font-sans">
        {children}
        <ChatWidget />
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );

  return clerkActive ? <ClerkProvider>{inner}</ClerkProvider> : inner;
}
