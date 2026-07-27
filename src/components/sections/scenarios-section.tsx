import { Reveal } from "@/components/ui/reveal";

const scenarios = [
  { num: "01", title: "Vakanz überbrücken", text: "Marketingleitung ausgefallen oder nicht besetzt? Ich übernehme nahtlos die Führungsverantwortung, ohne Verlust von Momentum und Teamstabilität." },
  { num: "02", title: "Neue Märkte erschließen", text: "Sie wollen international expandieren oder ein neues Segment adressieren? Ich entwickle fundierte Go-to-Market-Strategien mit Umsetzungsplan." },
  { num: "03", title: "Integration nach Akquisition", text: "Post-Merger-Phasen brauchen strukturierte Führung. Ich bringe Erfahrung aus der Integration komplexer Vertriebs- und Marketingstrukturen mit." },
  { num: "04", title: "Marketingstruktur neu aufbauen", text: "Vom fragmentierten Marketing zur leistungsfähigen Einheit: Ich schaffe Strukturen, Prozesse und Teams, die skalieren und messbar wirken." },
  { num: "05", title: "KI-Transformation gestalten", text: "Wettbewerbsvorteile durch KI im Marketing? Ich identifiziere die relevanten Use Cases und begleite Ihre Teams bei der praktischen Umsetzung." },
  { num: "06", title: "Strategieprojekt beschleunigen", text: "Strategieentscheidungen stehen an, aber die interne Kapazität fehlt? Ich bringe Methode, externe Perspektive und Umsetzungsstärke in einem." },
];

export function ScenariosSection() {
  return (
    <section id="scenarios" className="py-24 bg-[#f2f4f7]">
      <div className="mx-auto max-w-[1160px] px-6">
        <Reveal className="mb-14">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-3.5">
            Typische Einsatzszenarien
          </p>
          <div className="w-14 h-[3px] rounded mb-5" style={{ background: "linear-gradient(90deg, #b8976a, #1b6b78)" }} />
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] text-navy mb-4">
            Wann ich der richtige Partner bin
          </h2>
          <p className="text-text-light text-base leading-[1.8] max-w-[620px]">
            Interim Management entfaltet seinen größten Wert in Situationen, die schnelles Handeln, klare Führung und externe Perspektive erfordern.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {scenarios.map((s, i) => (
            <Reveal key={s.num} delay={i * 60}>
              <div className="bg-white rounded-lg p-7 border-l-[3px] border-gold shadow-[0_2px_16px_rgba(13,31,53,0.06)] transition-all duration-300 hover:translate-x-1 hover:shadow-[0_8px_40px_rgba(13,31,53,0.12)]">
                <div className="font-display text-[2rem] font-bold text-gray-light leading-none mb-3">
                  {s.num}
                </div>
                <h3 className="font-display text-[1.05rem] text-navy mb-2">{s.title}</h3>
                <p className="text-text-light text-[0.87rem] leading-[1.7]">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
