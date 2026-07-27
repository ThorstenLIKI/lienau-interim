import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vielen Dank",
  description: "Ihre Nachricht wurde erfolgreich übermittelt.",
  robots: { index: false, follow: false },
};

export default function DankePage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-[560px] w-full text-center">

        {/* Icon */}
        <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-white border border-gray-light shadow-[0_8px_40px_rgba(13,31,53,0.08)] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none" stroke="#1b6b78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        {/* Gold-Akzentlinie */}
        <div className="mx-auto w-14 h-[3px] rounded mb-6" style={{ background: "linear-gradient(90deg, #b8976a, #1b6b78)" }} />

        {/* Eyebrow */}
        <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-3">
          Nachricht erhalten
        </p>

        {/* Headline */}
        <h1 className="font-display text-[2.2rem] font-bold text-navy mb-4 leading-[1.2]">
          Vielen Dank für<br />Ihre Anfrage!
        </h1>

        {/* Body */}
        <p className="text-text-light text-base leading-[1.8] mb-10">
          Ich habe Ihre Nachricht erhalten und werde mich{" "}
          <strong className="text-navy">innerhalb von 1–2 Werktagen</strong> persönlich bei Ihnen melden.
          Sie erhalten in Kürze eine Bestätigung per E-Mail.
        </p>

        {/* Kontakt-Kacheln */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
          <a
            href="mailto:thorstenlienau@gmail.com"
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white border border-gray-light rounded-md text-navy text-sm font-medium transition-all hover:border-petrol hover:shadow-[0_4px_16px_rgba(27,107,120,0.1)]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="#1b6b78" strokeWidth="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            thorstenlienau@gmail.com
          </a>
          <a
            href="tel:+491716561123"
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white border border-gray-light rounded-md text-navy text-sm font-medium transition-all hover:border-petrol hover:shadow-[0_4px_16px_rgba(27,107,120,0.1)]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="#1b6b78" strokeWidth="1.8">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.49 2 2 0 0 1 3.57 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.19 6.19l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.9 16.92z" />
            </svg>
            0171 656 1123
          </a>
        </div>

        {/* Zurück-Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-petrol hover:text-petrol-bright transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Zurück zur Startseite
        </Link>

      </div>
    </div>
  );
}
