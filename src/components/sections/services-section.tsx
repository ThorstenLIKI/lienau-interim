import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    title: "Interim Marketing Leadership",
    description:
      "Übernahme von Marketingverantwortung auf Zeit – von der Strategieentwicklung bis zur operativen Führung. Ich stabilisiere, entwickle weiter und übergebe strukturiert.",
    tags: ["Teamführung", "Budgetsteuerung", "Stakeholder Management"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Go-to-Market & Segmentstrategie",
    description:
      "Entwicklung differenzierter Marktzugangsstrategien und segmentspezifischer Ansätze – von der Kundensegmentierung bis zur Kanalstrategie und Positionierung.",
    tags: ["Marktanalyse", "Positionierung", "Pricing"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Transformation & Integration",
    description:
      "Steuerung von Transformationsvorhaben, Post-Merger-Integrationen und Reorganisationen – mit klaren Strukturen, Meilensteinen und nachhaltiger Verankerung.",
    tags: ["Change Management", "PMI", "Prozessdesign"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "KI-gestützte Marketingprozesse",
    description:
      "Identifikation und Implementierung von KI-Anwendungen im Marketing – von Content-Automatisierung über Datenanalyse bis hin zu effizienten Workflows und Tools.",
    tags: ["KI-Strategie", "Automatisierung", "Datenanalyse"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Sales Enablement & Performance",
    description:
      "Entwicklung von Enablement-Strukturen, Steuerungssystemen und datengetriebenen Ansätzen, die Vertrieb und Marketing konsequent verbinden und Wachstum messbar machen.",
    tags: ["Funnel-Steuerung", "KPIs", "Trainings"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="mx-auto max-w-[1160px] px-6">
        <Reveal className="mb-14">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-3.5">
            Leistungen
          </p>
          <div className="w-14 h-[3px] rounded mb-5" style={{ background: "linear-gradient(90deg, #b8976a, #1b6b78)" }} />
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] text-navy mb-4">
            Was ich für Sie leiste
          </h2>
          <p className="text-text-light text-base leading-[1.8] max-w-[620px]">
            Ich bringe strategische Klarheit und operative Konsequenz – in den Bereichen, die für B2B-Wachstum und nachhaltige Transformation wirklich zählen.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60} className="h-full">
              <article className="h-full flex flex-col bg-white border border-gray-light rounded-lg p-9 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(13,31,53,0.12)] hover:border-transparent">
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, #1b6b78, #24909f)" }} />
                <div className="w-12 h-12 bg-petrol/[0.08] rounded-lg flex items-center justify-center text-petrol mb-5">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl text-navy mb-3">{s.title}</h3>
                <p className="flex-1 text-text-light text-sm leading-[1.75]">{s.description}</p>
                <div className="mt-4">
                  {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
