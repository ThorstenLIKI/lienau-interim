import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";

const details = [
  { label: "Verfuegbarkeit", value: siteConfig.availability },
  { label: "Einsatzmodell", value: siteConfig.einsatzmodell },
  { label: "Einsatzgebiet", value: siteConfig.einsatzgebiet },
  {
    label: "Tagessatz",
    value: `${siteConfig.rateDay} zzgl. Reise- und Uebernachtungskosten`,
  },
  {
    label: "Stundensatz",
    value: `${siteConfig.rateHour} zzgl. Reise- und Uebernachtungskosten`,
  },
];

export function RatesSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                Rahmendaten
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Einsatz & Konditionen
              </h2>
              <p className="leading-relaxed text-slate-600">
                Transparenz von Anfang an: klare Konditionen, kein Preisdschungel, kein
                versteckter Aufwand. Im Erstgespraech klaeren wir gemeinsam Umfang, Timing und Passung.
              </p>
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Erstgespraech buchen →
              </a>
            </div>
            <dl className="space-y-4">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="font-medium text-slate-800">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
