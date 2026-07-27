import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RatesSection } from "@/components/sections/rates-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Ueber mich",
  description:
    "Thorsten Lienau, Interim Manager mit 15+ Jahren Fuehrungserfahrung in Marketing, Segmentstrategie und Transformation. Ehemals Berner Group, jetzt als Interim und Freelancer verfuegbar.",
  alternates: { canonical: "/ueber-uns" },
};

export default function AboutPage() {
  return (
    <div>
      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Ueber mich"
            title="Marketing-Stratege. Umsetzer. Interim Manager."
            description="Ich bin Thorsten Lienau aus Gaildorf. Was mich von anderen Interim Managern unterscheidet: Ich denke nicht nur in Strategie, sondern in Zielgruppen, Positionierung und Conversion. Und ich setze um."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Fuehrungserfahrung</p>
              <p className="leading-relaxed text-slate-600">
                Als Head of Segment Management bei der <strong className="text-slate-800">Berner Group</strong> verantwortete ich Go-to-Market-Strategien fuer internationale Maerkte und leitete Teams in Central &amp; Northern Europe. Ueber 15 Jahre Erfahrung auf Fuehrungsebene in Marketing, Produktmanagement und Transformation.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Digitale Kompetenz</p>
              <p className="leading-relaxed text-slate-600">
                Unter <a href="https://lienau-webdesign.de" target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-700 hover:text-sky-800">lienau-webdesign.de</a> entwickle ich individuell konzipierte Websites und KI-gestuetzte Webloesungen fuer KMU, ohne Baukastensystem, ohne Templates. Dieses technische Verstaendnis macht mich besonders in Digitalisierungs- und Transformations-Mandaten wirksam.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Wie ich arbeite</p>
              <p className="leading-relaxed text-slate-600">
                Ich starte mit einer klaren Standortbestimmung und liefere innerhalb weniger Wochen ein belastbares Umsetzungsprogramm. Kein Consulting auf Distanz. Ich uebernehme echte Verantwortung in der Linie und arbeite auf Augenhoehe mit Geschaeftsfuehrung, Vertrieb und Teams.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Was mich auszeichnet</p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex gap-2"><span className="text-sky-500 font-bold">·</span> Strategisches Know-how aus internationalem Konzernumfeld</li>
                <li className="flex gap-2"><span className="text-sky-500 font-bold">·</span> Operative Umsetzungsstaerke und hohe Umsetzungsdisziplin</li>
                <li className="flex gap-2"><span className="text-sky-500 font-bold">·</span> Technisches Verstaendnis fuer Digitalisierung und KI</li>
                <li className="flex gap-2"><span className="text-sky-500 font-bold">·</span> Partnerschaftlicher Stil, transparente Kommunikation</li>
                <li className="flex gap-2"><span className="text-sky-500 font-bold">·</span> Verfuegbar ab sofort, {siteConfig.einsatzgebiet}</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <RatesSection />
    </div>
  );
}
