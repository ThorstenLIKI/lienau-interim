"use client";

import { useEffect } from "react";

type CalendlyEmbedProps = {
  url: string;
};

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full overflow-hidden rounded-2xl border border-slate-200"
      data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0f172a`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
