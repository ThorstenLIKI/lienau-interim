import { Reveal } from "@/components/ui/reveal";

const steps = [
  { num: "01", title: "Analyse & Orientierung", text: "Schnelles Einarbeiten in Ihr Unternehmen, Ihre Strukturen und Herausforderungen. Erstbewertung der Ausgangslage und Prioritäten." },
  { num: "02", title: "Strategie & Planung", text: "Entwicklung eines klaren Handlungsrahmens: Ziele, Maßnahmen, Meilensteine und Ressourcenbedarf – abgestimmt mit der Geschäftsführung." },
  { num: "03", title: "Umsetzung & Führung", text: "Operative Übernahme der Verantwortung. Ich führe Teams, treffe Entscheidungen und halte alle Beteiligten auf Kurs." },
  { num: "04", title: "Übergabe & Skalierung", text: "Strukturierte Übergabe mit Dokumentation, Training der Nachfolgekraft und Sicherstellung von Kontinuität und nachhaltiger Wirkung." },
];

export function HowSection() {
  return (
    <section id="how" className="py-24 bg-navy-mid">
      <div className="mx-auto max-w-[1160px] px-6">
        <Reveal className="mb-14 text-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-3.5">
            Meine Arbeitsweise
          </p>
          <div className="w-14 h-[3px] rounded mx-auto mb-5" style={{ background: "linear-gradient(90deg, #b8976a, #1b6b78)" }} />
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] text-cream mb-4">
            Strukturiert. Transparent. Wirkungsorientiert.
          </h2>
          <p className="text-cream/60 text-base leading-[1.8] max-w-[620px] mx-auto">
            Jedes Mandat beginnt mit schnellem Verstehen und endet mit nachhaltiger Wirkung. Dazwischen liegt strukturiertes Arbeiten in enger Abstimmung mit Ihnen.
          </p>
        </Reveal>

        <div className="how-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 80}>
              <div className="text-center px-6 pb-9">
                <div
                  className="w-[72px] h-[72px] mx-auto mb-5 rounded-full border border-gold/25 flex items-center justify-center font-display text-[1.4rem] font-bold text-gold relative z-10"
                  style={{ background: "#162d4a" }}
                >
                  {s.num}
                </div>
                <h3 className="text-cream text-base mb-2">{s.title}</h3>
                <p className="text-cream/50 text-[0.85rem] leading-[1.7]">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
