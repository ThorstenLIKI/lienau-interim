import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Thorsten Lienau gemäß DSGVO.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-[760px] px-6">

        <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-3">
          Rechtliche Informationen
        </p>
        <h1 className="font-display text-4xl font-bold text-navy mb-4">Datenschutzerklärung</h1>
        <p className="text-text-light text-sm mb-12">Zuletzt aktualisiert: Juli 2026</p>

        <div className="space-y-10 text-text leading-[1.8]">

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">1. Verantwortlicher</h2>
            <p>
              Thorsten Lienau<br />
              Bürkigweg 7, 74405 Gaildorf<br />
              E-Mail:{" "}
              <a href="mailto:thorstenlienau@gmail.com" className="text-petrol hover:underline">
                thorstenlienau@gmail.com
              </a><br />
              Telefon: 0171 656 1123
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="text-sm text-text-light mb-4">
              Beim Besuch dieser Website werden automatisch Informationen durch den Browser übermittelt.
              Diese umfassen Datum und Uhrzeit des Abrufs, Browsertyp und -version sowie die zuvor
              besuchte Seite. Diese Daten werden ausschließlich zur Sicherstellung eines
              störungsfreien Betriebs der Website gespeichert und nicht mit anderen Daten
              zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">3. Kontaktformular</h2>
            <p className="text-sm text-text-light mb-3">
              Bei der Nutzung des Kontaktformulars werden folgende Daten erhoben:
            </p>
            <ul className="list-disc list-inside text-sm text-text-light space-y-1 mb-4">
              <li>Name</li>
              <li>Unternehmen (optional)</li>
              <li>E-Mail-Adresse</li>
              <li>Nachrichteninhalt</li>
            </ul>
            <p className="text-sm text-text-light mb-3">
              Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an
              Dritte weitergegeben. Die Übertragung erfolgt verschlüsselt via SMTP (Gmail). Die
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Beantwortung von Anfragen).
            </p>
            <p className="text-sm text-text-light">
              Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und kein
              berechtigtes Interesse an der weiteren Speicherung besteht.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">
              4. Webanalyse mit Google Analytics
            </h2>
            <p className="text-sm text-text-light mb-3">
              Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics verwendet
              Cookies, um eine Analyse der Benutzung der Website zu ermöglichen.
            </p>
            <p className="text-sm text-text-light mb-3">
              Google Analytics wird auf dieser Website nur nach Ihrer ausdrücklichen Einwilligung
              (Cookie-Banner) geladen. Die IP-Anonymisierung ist aktiviert, sodass Ihre IP-Adresse
              vor der Speicherung gekürzt wird. Die durch das Cookie erzeugten Informationen über
              Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den
              USA übertragen und dort gespeichert.
            </p>
            <p className="text-sm text-text-light mb-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können Ihre
              Einwilligung jederzeit widerrufen, indem Sie die gespeicherten Cookies in Ihrem
              Browser löschen oder die Einwilligung über den Cookie-Banner erneut ablehnen.
            </p>
            <p className="text-sm text-text-light">
              Weitere Informationen zur Datenverarbeitung durch Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-petrol hover:underline"
              >
                policies.google.com/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">
              5. Externe Dienste
            </h2>

            <h3 className="font-semibold text-navy mb-2 mt-5">Google Fonts</h3>
            <p className="text-sm text-text-light mb-4">
              Diese Website lädt Schriftarten über Google Fonts (Google LLC, 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA). Die Schriften werden lokal eingebunden über
              den Next.js Font-Mechanismus, sodass keine Verbindung zu Google-Servern beim
              Seitenbesuch hergestellt wird.
            </p>

            <h3 className="font-semibold text-navy mb-2">LinkedIn</h3>
            <p className="text-sm text-text-light">
              Links zu LinkedIn (LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2,
              Irland) öffnen eine externe Seite. Es werden beim Klick keine Daten von dieser
              Website an LinkedIn übermittelt. Es gelten die Datenschutzbestimmungen von LinkedIn.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-navy mb-3">
              6. Ihre Rechte
            </h2>
            <p className="text-sm text-text-light mb-3">
              Sie haben gemäß DSGVO jederzeit das Recht auf:
            </p>
            <ul className="list-disc list-inside text-sm text-text-light space-y-1 mb-4">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p className="text-sm text-text-light">
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
              <a href="mailto:thorstenlienau@gmail.com" className="text-petrol hover:underline">
                thorstenlienau@gmail.com
              </a>
              <br />
              Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu beschweren, z. B. beim
              Landesbeauftragten für den Datenschutz und die Informationsfreiheit
              Baden-Württemberg.
            </p>
          </section>

          <section className="border-t border-gray-light pt-8">
            <p className="text-xs text-text-light">
              Diese Datenschutzerklärung wurde zuletzt im Juli 2026 aktualisiert.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
