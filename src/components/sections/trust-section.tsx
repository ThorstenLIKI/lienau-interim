const items = [
  {
    label: "Branchen",
    text: "Industrie, Elektrotechnik, Holzbau, Handelsorganisationen, B2B-Mittelstand",
  },
  {
    label: "Regionen",
    text: "Europa, Americas & Asien, internationale Strukturen und Matrixorganisationen",
  },
  {
    label: "Sprachen",
    text: "Deutsch (Muttersprache) & Englisch (C2), souverän auf C-Level in beiden Sprachen",
  },
  {
    label: "Zertifiziert",
    text: "Zertifizierter KI-Manager, Fokus auf KI-Anwendung, Datenanalyse & Prozessautomatisierung",
  },
];

export function TrustSection() {
  return (
    <section
      id="trust"
      className="bg-navy-mid py-14 border-t border-cream/[0.06] border-b border-b-cream/[0.06]"
    >
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`${
                i > 0
                  ? "lg:pl-5 lg:border-l lg:border-l-gold/30"
                  : ""
              } sm:border-b sm:border-b-gold/15 sm:pb-6 lg:border-b-0 lg:pb-0`}
            >
              <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-gold mb-2">
                {item.label}
              </p>
              <p className="text-cream/75 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
