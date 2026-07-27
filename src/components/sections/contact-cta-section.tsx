import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";

export function ContactCtaSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-slate-900 px-8 py-14 text-white sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Schnell ins Handeln kommen
          </h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            In einem unverbindlichen 30-Minuten-Gespraech klaeren wir, wie wir Ihr Vorhaben in den
            ersten 90 Tagen wirksam voranbringen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Termin direkt buchen →
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-semibold text-slate-400 hover:text-white transition"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
