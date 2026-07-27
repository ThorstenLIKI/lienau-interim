import { Reveal } from "@/components/ui/reveal";

export function WebdesignSection() {
  return (
    <section className="py-24 bg-navy-mid">
      <div className="mx-auto max-w-[1160px] px-6">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3 max-w-2xl">
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold">
                Zweites Standbein
              </p>
              <div className="w-14 h-[3px] rounded" style={{ background: "linear-gradient(90deg, #b8976a, #1b6b78)" }} />
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] text-cream">
                Webdesign mit Marketing-Verstand
              </h2>
              <p className="text-cream/70 text-base leading-[1.8]">
                Unter{" "}
                <a
                  href="https://lienau-webdesign.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors font-medium"
                >
                  lienau-webdesign.de
                </a>{" "}
                baue ich kleinen Unternehmen, Handwerkern und Selbstständigen professionelle Homepages – kein Baukastensystem, keine Templates, echter Code.
              </p>
            </div>
            <a
              href="https://lienau-webdesign.de"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-block px-6 py-3 border border-gold/40 text-gold text-sm font-semibold rounded hover:bg-gold/10 hover:border-gold transition-all"
            >
              lienau-webdesign.de →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
