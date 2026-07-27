import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Thorsten Lienau, Interim Manager Marketing & Transformation.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-[760px] px-6">

        <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-3">
          Rechtliche Informationen
        </p>
        <h1 className="font-display text-4xl font-bold text-navy mb-12">Impressum</h1>

        <div className="space-y-10 text-text leading-[1.8]">

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Thorsten Lienau<br />
              Interim Manager | Marketing &amp; Transformation<br />
              Bürkigweg 7<br />
              74405 Gaildorf<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Kontakt</h2>
            <p>
              Telefon:{" "}
              <a href="tel:+491716561123" className="text-petrol hover:underline">
                0171 656 1123
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:thorstenlienau@gmail.com" className="text-petrol hover:underline">
                thorstenlienau@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Thorsten Lienau<br />
              Bürkigweg 7<br />
              74405 Gaildorf
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">Haftungsausschluss</h2>

            <h3 className="font-semibold text-navy mb-2 mt-5">Haftung für Inhalte</h3>
            <p className="text-sm text-text-light">
              Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte übernehme ich jedoch keine Gewähr. Als
              Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>

            <h3 className="font-semibold text-navy mb-2 mt-5">Haftung für Links</h3>
            <p className="text-sm text-text-light">
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
              Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
              auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>

            <h3 className="font-semibold text-navy mb-2 mt-5">Urheberrecht</h3>
            <p className="text-sm text-text-light">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">
              EU-Streitschlichtung
            </h2>
            <p className="text-sm text-text-light mb-3">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-petrol hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-sm text-text-light">
              Meine E-Mail-Adresse finden Sie oben im Impressum. Ich bin nicht bereit oder
              verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">
              Streitbeilegung
            </h2>
            <p className="text-sm text-text-light">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit.
              Als Dienstleister bin ich nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="border-t border-gray-light pt-8">
            <p className="text-xs text-text-light">
              Stand: Juli 2026
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
