import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { siteConfig } from "@/lib/site-config";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Interim Manager Marketing & Transformation`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: `${siteConfig.name} | Interim Manager`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} – Interim Manager Marketing & Transformation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Interim Manager`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        {/* Plausible Analytics – cookiefrei, DSGVO-konform */}
        <script
          defer
          data-domain={siteConfig.url.replace("https://", "").replace("http://", "")}
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="min-h-screen bg-cream font-sans text-text antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <CookieBanner gaMeasurementId={siteConfig.gaMeasurementId} />
      </body>
    </html>
  );
}
