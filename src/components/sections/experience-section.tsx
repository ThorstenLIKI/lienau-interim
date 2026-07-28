import { Reveal } from "@/components/ui/reveal";

const timeline = [
  {
    date: "seit 01/2025",
    title: "Interim Manager Marketing & Transformation",
    company: "Selbstständig",
    desc: "Strategische Transformations- und Go-to-Market-Projekte für Mittelstand und Start-ups. Entwicklung von Frameworks für Strategieumsetzung, Sales Enablement und KI-gestützte Automatisierung.",
  },
  {
    date: "Berner Group",
    title: "Head of Segment Management",
    company: "Berner Group",
    desc: "Aufbau und Führung einer internationalen Segmentorganisation mit 18 Mitarbeitenden und 4 Team Leads. Integration von BTI und Berner. Verantwortung für Go-to-Market, Produktmanagement und Budgets bis 2 Mio. €.",
  },
  {
    date: "BTI Befestigungstechnik",
    title: "Team Lead Marketing",
    company: "BTI Befestigungstechnik",
    desc: "Marketingstrategie, Kampagnen-ROI, Transformation im Holzbau-Segment, datengetriebene Zielgruppenmodelle.",
  },
  {
    date: "C. & E. Fein",
    title: "Category Manager Power Tools",
    company: "C. & E. Fein GmbH",
    desc: "Internationale Produktstrategien, Lifecycle Management und Produktlaunches in mehreren europäischen Märkten.",
  },
  {
    date: "Albert Berner",
    title: "Market Manager",
    company: "Albert Berner Deutschland",
    desc: "Marketingstrategie, Portfolioentwicklung, Vertriebstrainings und Marktanalysen.",
  },
];

const highlights = [
  { num: "18", title: "Mitarbeitende geführt", desc: "Aufbau und Entwicklung einer internationalen Segmentorganisation mit 4 direkten Teamleitungen." },
  { num: "2 Mio. €", title: "Budgetverantwortung", desc: "Verantwortung für Marketing- und Messebudgets in internationalen Strukturen, direkt an CFO und CEO berichtend." },
  { num: "DACH+", title: "Internationale Märkte", desc: "Operative Erfahrung in DACH, Nordics und Zentraleuropa, in Mehrsprachenumgebungen und Matrixstrukturen." },
  { num: "KI", title: "Zertifizierter KI-Manager", desc: "Zertifizierte Qualifikation im Bereich KI, Datenanalyse und Automatisierung mit konkretem Unternehmensanwendungsbezug." },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-navy">
      <div className="mx-auto max-w-[1160px] px-6">
        <Reveal className="mb-14">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-3.5">
            Erfahrung & Wirkung
          </p>
          <div className="w-14 h-[3px] rounded mb-5" style={{ background: "linear-gradient(90deg, #b8976a, #1b6b78)" }} />
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] text-cream mb-4">
            Belastbares Fundament für Ihre Herausforderung
          </h2>
          <p className="text-cream/60 text-base leading-[1.8] max-w-[620px]">
            Über 15 Jahre in anspruchsvollen B2B-Umgebungen: von der Produktstrategie über Segmentmanagement bis zur Führung internationaler Teams in Matrixorganisationen.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Timeline */}
          <Reveal>
            <div className="timeline">
              {timeline.map((t) => (
                <div key={t.title} className="tl-item">
                  <p className="text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-petrol-bright mb-1">
                    {t.date}
                  </p>
                  <p className="font-display text-[1.05rem] text-cream mb-1">{t.title}</p>
                  <p className="text-gold text-[0.82rem] font-medium mb-2">{t.company}</p>
                  <p className="text-cream/60 text-[0.87rem] leading-[1.7]">{t.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Highlights */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-5">
              {highlights.map((h) => (
                <div
                  key={h.num}
                  className="bg-cream/[0.04] border border-cream/[0.08] rounded-lg p-6 transition-all duration-300 hover:bg-cream/[0.07] hover:border-gold/30"
                >
                  <div className="font-display text-[2rem] font-bold text-gold leading-none mb-1">
                    {h.num}
                  </div>
                  <h4 className="text-cream text-base mb-1.5">{h.title}</h4>
                  <p className="text-cream/55 text-[0.85rem] leading-[1.6]">{h.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
