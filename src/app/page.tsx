import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ScenariosSection } from "@/components/sections/scenarios-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { WhySection } from "@/components/sections/why-section";
import { HowSection } from "@/components/sections/how-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { WebdesignSection } from "@/components/sections/webdesign-section";
import { ContactSection } from "@/components/sections/contact-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Thorsten Lienau | Interim Manager Marketing & Transformation",
  description:
    "Interim Manager für Marketing, Segment Strategy und Transformation. Über 15 Jahre Führungserfahrung. Verfügbar ab sofort, deutschlandweit und international.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Interim Manager",
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.linkedIn],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gaildorf",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ScenariosSection />
      <ExperienceSection />
      <WhySection />
      <HowSection />
      <CaseStudiesSection />
      <WebdesignSection />
      <ContactSection />
    </>
  );
}
