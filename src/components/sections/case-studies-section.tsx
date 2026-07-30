import { Reveal } from "@/components/ui/reveal";

// ─── Content ──────────────────────────────────────────────────────────────────

const contributions = [
  "Entwicklung der Segmentierungs- und Segmentstrategie",
  "Strukturierung und Bewertung relevanter Anwendungsfelder",
  "Herausarbeitung der Nutzenargumentation je Zielgruppe",
  "Konzeption der Website- und Informationsarchitektur",
  "Gestaltung des digitalen Auftritts",
  "Erstellung und Überarbeitung wesentlicher Website-Inhalte",
];

const tags = ["Segmentstrategie", "Go-to-Market", "Digitaler Marktauftritt"];

/**
 * DRAFT TESTIMONIAL – noch nicht offiziell freigegeben.
 * TODO: Schriftliche Freigabe von Felix Gräßer / Eco Nature Products GmbH
 *       einholen, bevor dieser Block veröffentlicht wird.
 *       Zum Ausblenden: showTestimonial auf false setzen.
 */
const showTestimonial = true;
const testimonial = {
  quote:
    "Thorsten hat uns dabei unterstützt, aus unseren Produkten eine klare Markt- und Segmentstrategie zu entwickeln. Besonders wertvoll war die Verbindung aus strategischem Marketingverständnis und konkreter Umsetzung. Von der Strukturierung unserer Zielgruppen und Anwendungsfelder bis hin zur Konzeption und inhaltlichen Gestaltung unserer neuen Website kam alles aus einem Guss.",
  name: "Felix Gräßer",
  role: "Geschäftsführer, Eco Nature Products GmbH",
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 flex-shrink-0 mt-0.5"
      fill="none"
      stroke="#1b6b78"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function CaseStudiesSection() {
  return (
    <section id="projekte" className="py-24 bg-cream">
      <div className="mx-auto max-w-[1160px] px-6">

        {/* Section header */}
        <Reveal className="mb-14">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-3.5">
            Ausgewählte Projekte
          </p>
          <div
            className="w-14 h-[3px] rounded mb-5"
            style={{ background: "linear-gradient(90deg, #b8976a, #1b6b78)" }}
          />
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] text-navy mb-4">
            Strategie trifft Umsetzung.
          </h2>
          <p className="text-text-light text-base leading-[1.8] max-w-[620px]">
            Konkrete Beispiele, wie strategisches Marketing und digitale
            Kompetenz zusammenwirken: von der Positionierung bis zum fertigen
            Marktauftritt.
          </p>
        </Reveal>

        {/* Case study card */}
        <Reveal>
          <article className="bg-white rounded-xl shadow-[0_4px_32px_rgba(13,31,53,0.08)] overflow-hidden border border-gray-light">

            {/* ── Project identifier bar ── */}
            <div
              className="flex items-center justify-between gap-4 flex-wrap px-8 py-4"
              style={{ background: "linear-gradient(90deg, #0d1f35, #162d4a)" }}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-gold border border-gold/40 rounded-full px-3 py-1">
                  Case Study
                </span>
                <span className="text-cream/60 text-[0.8rem]">
                  Eco Nature Products GmbH
                </span>
              </div>
              <a
                href="https://www.kunstrasengranulat.de"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-petrol-bright text-[0.78rem] hover:text-gold transition-colors font-mono"
              >
                kunstrasengranulat.de
                <ExternalLinkIcon />
              </a>
            </div>

            {/* ── Main content ── */}
            <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14">

              {/* Left: Headline + description + contributions */}
              <div className="space-y-7">

                {/* Headline */}
                <div className="space-y-1.5">
                  <h3 className="font-display text-[clamp(1.5rem,2.5vw,1.9rem)] leading-[1.25] text-navy">
                    Von der Produktidee zur klaren Marktpositionierung
                  </h3>
                  <p className="text-[0.83rem] text-text-light font-medium">
                    Segmentstrategie & digitaler Marktauftritt
                  </p>
                </div>

                {/* Description */}
                <p className="text-text-light text-[0.93rem] leading-[1.85]">
                  Für Eco Nature Products habe ich die strategische Positionierung
                  biobasierter Füllmaterialien für Kunstrasensysteme mitentwickelt
                  und in einen klar strukturierten Marktauftritt übersetzt.
                  Ausgehend vom Produktportfolio wurden relevante Kundensegmente
                  und Anwendungsfelder strukturiert und daraus eine
                  zielgruppenspezifische Ansprache entwickelt.
                </p>

                {/* Contributions */}
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gold mb-4">
                    Mein Beitrag
                  </p>
                  <ul className="space-y-2.5">
                    {contributions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-[0.88rem] text-text-light leading-[1.6]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Result + tags + CTA */}
              <div className="space-y-7 lg:pt-1">

                {/* Result */}
                <div className="rounded-lg bg-cream p-6 border border-gray-light">
                  <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gold mb-3">
                    Ergebnis
                  </p>
                  <p className="text-text text-[0.9rem] leading-[1.8]">
                    Ein Marktauftritt, der nicht vom Produkt, sondern von den
                    Anforderungen der Kunden ausgeht: Kommunen, Sportvereine und
                    Schulen werden gezielt angesprochen und zu den jeweils
                    passenden Lösungen geführt.
                  </p>
                </div>

                {/* Competence tags */}
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-text-light/50 mb-3">
                    Kompetenzen
                  </p>
                  <div className="flex flex-wrap gap-0">
                    {tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="https://www.kunstrasengranulat.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-cream text-sm font-semibold rounded hover:bg-navy-mid hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(13,31,53,0.18)] transition-all"
                >
                  Projekt ansehen
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>

            {/* ── Testimonial ──
                DRAFT – noch nicht offiziell freigegeben.
                Vor Veröffentlichung schriftliche Freigabe von
                Felix Gräßer / Eco Nature Products GmbH einholen.
                Ausblenden: showTestimonial oben auf false setzen.
            ── */}
            {showTestimonial && (
              <div className="border-t border-gray-light bg-[#fafbfc] px-8 lg:px-12 py-8">
                <div className="flex gap-4 items-start max-w-[820px]">
                  {/* Quote mark */}
                  <svg
                    viewBox="0 0 32 32"
                    className="w-7 h-7 flex-shrink-0 mt-1"
                    fill="#b8976a"
                    opacity={0.4}
                    aria-hidden="true"
                  >
                    <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H5.9C6.4 13.4 8 12 10 12V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4.1c.5-2.6 2.1-4 4.1-4V8z" />
                  </svg>
                  <div>
                    <blockquote className="text-text text-[0.92rem] leading-[1.9] italic mb-4">
                      &bdquo;{testimonial.quote}&ldquo;
                    </blockquote>
                    <cite className="not-italic flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-navy text-[0.88rem]">
                        {testimonial.name}
                      </span>
                      <span className="text-text-light/60 text-[0.82rem]">
                        {testimonial.role}
                      </span>
                    </cite>
                  </div>
                </div>
              </div>
            )}
          </article>
        </Reveal>
      </div>
    </section>
  );
}
