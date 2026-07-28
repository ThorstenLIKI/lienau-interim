import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-navy flex items-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(27,107,120,0.18) 0%, transparent 65%), radial-gradient(ellipse 50% 80% at 90% 80%, rgba(184,151,106,0.08) 0%, transparent 55%), linear-gradient(145deg, #0d1f35 0%, #162d4a 50%, #0d1f35 100%)",
        }}
      />
      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="relative z-10 mx-auto w-full max-w-[1160px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Content */}
          <div className="pt-32 pb-20">

            {/* Mobile portrait — only visible on small screens */}
            <div className="flex md:hidden justify-center mb-8 animate-fade-up-1">
              <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_8px_30px_rgba(13,31,53,0.4)]">
                <Image
                  src="/portrait.jpg"
                  alt="Thorsten Lienau"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="120px"
                />
              </div>
            </div>

            {/* Badge */}
            <div className="animate-fade-up-1 inline-flex items-center gap-2 px-4 py-1.5 bg-petrol/20 border border-petrol/40 rounded-full text-xs font-medium text-petrol-bright uppercase tracking-[0.05em] mb-7">
              <span
                className="w-1.5 h-1.5 rounded-full bg-petrol-bright"
                style={{ animation: "pulse-dot 2s infinite" }}
              />
              Verfügbar für neue Mandate
            </div>

            {/* Title */}
            <h1
              className="animate-fade-up-2 font-display text-[clamp(2.6rem,5vw,4rem)] font-bold text-cream leading-[1.15] mb-5"
            >
              Erfahrene Führung.<br />
              Klare Strategie.<br />
              <span className="text-gold">Messbare Wirkung.</span>
            </h1>

            {/* Sub */}
            <p className="animate-fade-up-3 text-cream/70 text-lg leading-[1.8] mb-10 max-w-[520px] font-light">
              Als Interim Manager für Marketing &amp; Transformation übernehme ich schnell Verantwortung: in kritischen Phasen, bei Neuausrichtungen und überall dort, wo externe Expertise den Unterschied macht.
            </p>

            {/* Actions */}
            <div className="animate-fade-up-4 flex flex-wrap gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy text-sm font-semibold rounded hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(184,151,106,0.35)] transition-all"
              >
                Gespräch vereinbaren
              </a>
              <a
                href="#why"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-cream/40 text-cream text-sm font-semibold rounded hover:bg-cream/10 hover:border-cream transition-all"
              >
                Profil ansehen
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-up-5 flex gap-10 mt-14 pt-9 border-t border-cream/10">
              {[
                { num: "15+", label: "Jahre B2B-Erfahrung" },
                { num: "5", label: "Märkte & Regionen" },
                { num: "2 Mio. €", label: "Budgetverantwortung" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[1.7rem] font-bold text-gold leading-none">
                    {s.num}
                  </div>
                  <div className="text-[0.73rem] text-cream/45 mt-1.5 tracking-[0.05em] whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait — top aligned with h1 (pt-32 nav + ~72px badge height) */}
          <div className="hidden md:flex justify-end items-start pt-[200px] animate-fade-up-3">
            <div
              className="w-[380px] h-[500px] rounded-t-[6px] relative overflow-hidden shadow-[0_20px_60px_rgba(13,31,53,0.25)] border border-cream/[0.06]"
            >
              <Image
                src="/portrait.jpg"
                alt="Thorsten Lienau – Interim Manager"
                fill
                className="object-cover object-top"
                priority
                sizes="380px"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, #b8976a, #24909f)" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
