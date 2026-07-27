import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-navy py-10">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="font-display text-[1.1rem] font-bold text-cream">
            Thorsten <span className="text-gold">Lienau</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Leistungen", href: "#services" },
              { label: "Erfahrung", href: "#experience" },
              { label: "Kontakt", href: "#contact" },
              { label: "LinkedIn", href: siteConfig.linkedIn, external: true },
              { label: "lienau-webdesign.de", href: "https://lienau-webdesign.de", external: true },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="text-[0.82rem] text-cream/45 hover:text-cream transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-5 pt-5 border-t border-cream/[0.06] justify-between items-center">
          <p className="text-[0.8rem] text-cream/30">
            &copy; {new Date().getFullYear()} Thorsten Lienau &middot; Alle Rechte vorbehalten
          </p>
          <div className="flex gap-5">
            <a href="/impressum" className="text-[0.8rem] text-cream/30 hover:text-cream/70 transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-[0.8rem] text-cream/30 hover:text-cream/70 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
