import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CalendlyEmbed } from "@/components/sections/calendly-embed";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Buchen Sie ein unverbindliches Erstgespraech oder schreiben Sie uns zu Ihrem Interim-Management-Vorhaben.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <Container className="space-y-16">

        {/* Calendly — primärer CTA */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Direkter Einstieg
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
              Termin direkt buchen
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
              Waehlen Sie einfach einen freien Slot. Das Erstgespraech dauert 30 Minuten und ist
              unverbindlich.
            </p>
          </div>
          <CalendlyEmbed url={siteConfig.calendlyUrl} />
        </div>

        {/* Trennlinie */}
        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-slate-200" />
          <p className="text-sm text-slate-400">Oder schreiben Sie uns</p>
          <div className="flex-1 border-t border-slate-200" />
        </div>

        {/* Formular + Direktkontakt — sekundär */}
        <div className="grid gap-6 md:grid-cols-2">
          <ContactForm />
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Direkter Kontakt
            </p>
            <p className="text-slate-700">
              E-Mail:{" "}
              <a className="text-sky-700 hover:text-sky-800" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <p className="text-slate-700">Telefon: {siteConfig.phone}</p>
            <p className="text-slate-700">Standort: {siteConfig.location}</p>
          </div>
        </div>

      </Container>
    </div>
  );
}
