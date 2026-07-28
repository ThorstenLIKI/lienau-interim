import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Über mich"
          title="Marketing-Stratege mit Umsetzungsfokus"
          description="Ich verbinde C-Level-Erfahrung aus internationalem Konzernumfeld mit dem Pragmatismus eines Unternehmers – und bringe beides gezielt in Interim-Mandate ein."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Hintergrund</p>
            <p className="mt-3 leading-relaxed text-slate-600">
              Über 15 Jahre Führungserfahrung in B2B-Umgebungen – zuletzt als Head of Segment Management bei der <strong className="text-slate-800">Berner Group</strong>, wo ich Go-to-Market-Strategien für internationale Märkte verantwortete und Teams in Central & Northern Europe aufgebaut und geführt habe.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Was mich unterscheidet</p>
            <p className="mt-3 leading-relaxed text-slate-600">
              Ich denke nicht nur in Strategie, sondern in Zielgruppen, Positionierung und messbaren Ergebnissen. Als zertifizierter KI-Manager und Entwickler digitaler Lösungen bringe ich echten Technologieverstand in Transformations-Mandate – kein Buzzword-Consulting.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Mein Anspruch</p>
            <p className="mt-3 leading-relaxed text-slate-600">
              Kein Consulting auf Distanz. Ich übernehme echte Verantwortung in der Linie, arbeite partnerschaftlich mit Teams auf allen Ebenen und liefere belastbare Ergebnisse – in Strukturen, die nach meinem Mandat Bestand haben.
            </p>
          </article>
        </div>
        <div className="flex gap-4">
          <Link
            href="/ueber-uns"
            className="text-sm font-semibold text-sky-700 hover:text-sky-800 transition"
          >
            Vollständiges Profil ansehen →
          </Link>
        </div>
      </Container>
    </section>
  );
}
