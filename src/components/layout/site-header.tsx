"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Leistungen", href: "#services" },
  { label: "Szenarien", href: "#scenarios" },
  { label: "Erfahrung", href: "#experience" },
  { label: "Über mich", href: "#why" },
  { label: "Arbeitsweise", href: "#how" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-navy/97 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.2)] py-3"
            : "py-5"
        }`}
      >
        <div className="mx-auto max-w-[1160px] px-6 flex items-center justify-between">
          <a href="#hero" className="font-display text-xl font-bold text-cream tracking-wide">
            Thorsten <span className="text-gold">Lienau</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream/75 text-sm font-medium tracking-wide hover:text-cream transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 bg-gold text-navy text-sm font-semibold rounded hover:bg-gold-light transition-colors"
            >
              Kontakt
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1.5 cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
          >
            <span className="block w-6 h-0.5 bg-cream rounded" />
            <span className="block w-6 h-0.5 bg-cream rounded" />
            <span className="block w-6 h-0.5 bg-cream rounded" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-navy/98 flex flex-col items-center justify-center gap-7 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-cream/50 text-3xl leading-none hover:text-cream transition-colors"
          onClick={closeMobile}
          aria-label="Menü schließen"
        >
          ✕
        </button>
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMobile}
            className="font-display text-3xl text-cream hover:text-gold transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMobile}
          className="font-display text-3xl text-cream hover:text-gold transition-colors"
        >
          Kontakt
        </a>
      </div>
    </>
  );
}
