import { Reveal } from "@/components/ui/reveal";

const reasons = [
  { title: "Sofort einsatzbereit", text: "Keine monatelange Einarbeitungszeit. Ich identifiziere schnell die wesentlichen Hebel, gewinne das Vertrauen der Teams und setze Prioritäten mit sofortiger Wirkung." },
  { title: "Strategie & Umsetzung in einem", text: "Ich entwickle Strategien nicht nur im Slide-Deck, sondern begleite die Umsetzung, verankere Strukturen und stelle sicher, dass Ergebnisse messbar werden." },
  { title: "C-Level-erfahren", text: "Enge Zusammenarbeit mit CFO, CEO und Geschäftsführung ist mir vertraut. Ich kommuniziere klar auf Entscheiderebene und bringe operative Tiefe mit." },
  { title: "International & interkulturell", text: "Ich bin in multikulturellen Teams, Matrixstrukturen und internationalen Projekten zuhause. Fließend auf Deutsch und Englisch auf Verhandlungsniveau (C2)." },
  { title: "Modern & zukunftsorientiert", text: "Als zertifizierter KI-Manager bringe ich fundiertes Know-how, um Marketing- und Unternehmensprozesse mit modernen Technologien wirkungsvoll zu gestalten." },
  { title: "Nachhaltige Übergabe", text: "Mein Ziel ist es, nach meinem Mandat eine stärkere Organisation zu hinterlassen als ich sie vorgefunden habe: mit klaren Prozessen, entwickelten Teams und dokumentierten Ergebnissen." },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="white" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function WhySection() {
  return (
    <section id="why" className="py-24 bg-cream">
      <div className="mx-auto max-w-[1160px] px-6">
        <Reveal className="mb-14">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-3.5">
            Warum Thorsten Lienau
          </p>
          <div className="w-14 h-[3px] rounded mb-5" style={{ background: "linear-gradient(90deg, #b8976a, #1b6b78)" }} />
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] text-navy mb-4">
            Führung, die liefert. Ohne lange Anlaufzeit.
          </h2>
          <p className="text-text-light text-base leading-[1.8] max-w-[620px]">
            Ich bin kein externer Berater, der Empfehlungen abgibt und wieder geht. Ich übernehme Verantwortung, führe Teams, treffe Entscheidungen und verlasse das Unternehmen mit einer stärkeren Organisation, als ich es vorgefunden habe.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="p-7 rounded-lg transition-colors duration-300 hover:bg-[#f8f9fb]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-[18px]"
                  style={{ background: "linear-gradient(135deg, #1b6b78, #24909f)" }}
                >
                  <CheckIcon />
                </div>
                <h3 className="font-display text-[1.05rem] text-navy mb-2">{r.title}</h3>
                <p className="text-text-light text-[0.88rem] leading-[1.75]">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
