"use client";

import { useState, useEffect } from "react";

interface CookieBannerProps {
  gaMeasurementId: string;
}

export function CookieBanner({ gaMeasurementId }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      loadGA(gaMeasurementId);
    }
  }, [gaMeasurementId]);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    loadGA(gaMeasurementId);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="mx-auto max-w-[900px] bg-navy rounded-xl shadow-[0_8px_40px_rgba(13,31,53,0.35)] border border-cream/[0.08] p-6 md:flex md:items-center md:gap-8">

        <div className="flex-1 mb-5 md:mb-0">
          <p className="text-[0.72rem] font-semibold tracking-[0.15em] uppercase text-gold mb-2">
            Datenschutz
          </p>
          <p className="text-cream/80 text-sm leading-[1.75]">
            Diese Website verwendet Cookies für Google Analytics, um das Nutzerverhalten anonymisiert auszuwerten und das Angebot zu verbessern.
            Weitere Informationen in unserer{" "}
            <a href="/datenschutz" className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors">
              Datenschutzerklärung
            </a>.
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 border border-cream/20 text-cream/60 text-sm font-medium rounded hover:border-cream/40 hover:text-cream/80 transition-all"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 bg-gold text-navy text-sm font-semibold rounded hover:bg-gold-light transition-all"
          >
            Akzeptieren
          </button>
        </div>

      </div>
    </div>
  );
}

function loadGA(measurementId: string) {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga-script")) return;

  const script1 = document.createElement("script");
  script1.id = "ga-script";
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', { anonymize_ip: true });
  `;
  document.head.appendChild(script2);
}
