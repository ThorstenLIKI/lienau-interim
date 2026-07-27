import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site-config";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" stroke="#1b6b78" strokeWidth="1.8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" stroke="#1b6b78" strokeWidth="1.8">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.49 2 2 0 0 1 3.57 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.19 6.19l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.9 16.92z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" stroke="#1b6b78" strokeWidth="1.8">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#f2f4f7]">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <Reveal>
            <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-3.5">
              Kontakt
            </p>
            <div className="w-14 h-[3px] rounded mb-5" style={{ background: "linear-gradient(90deg, #b8976a, #1b6b78)" }} />
            <h2 className="font-display text-[2.2rem] text-navy mb-4">Lassen Sie uns sprechen.</h2>
            <p className="text-text-light text-base leading-[1.8] mb-9">
              Sie stehen vor einer Herausforderung, die schnelle und erfahrene Führung erfordert? Ich freue mich auf ein unverbindliches Erstgespräch – unkompliziert und auf Augenhöhe.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { href: `mailto:${siteConfig.email}`, icon: <MailIcon />, label: siteConfig.email },
                { href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, icon: <PhoneIcon />, label: siteConfig.phone },
                { href: siteConfig.linkedIn, icon: <LinkedInIcon />, label: "LinkedIn-Profil aufrufen", external: true },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3.5 px-5 py-4 bg-white rounded-md border border-gray-light text-navy font-medium text-[0.95rem] transition-all duration-300 hover:border-petrol hover:translate-x-1 hover:shadow-[0_4px_16px_rgba(27,107,120,0.1)]"
                >
                  {l.icon}
                  {l.label}
                </a>
              ))}
            </div>

            {/* Portrait + persönliches Zitat */}
            <div className="mt-10 flex items-center gap-5">
              <div className="relative w-[72px] h-[72px] flex-shrink-0 rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_4px_16px_rgba(13,31,53,0.12)]">
                <Image
                  src="/portrait-contact.jpg"
                  alt="Thorsten Lienau"
                  fill
                  className="object-cover object-top"
                  sizes="72px"
                />
              </div>
              <blockquote className="border-l-2 border-gold/50 pl-4">
                <p className="text-text-light text-[0.88rem] leading-[1.7] italic">
                  „Ich freue mich auf Ihre Nachricht. Ich antworte persönlich — in der Regel innerhalb von 24 Stunden."
                </p>
                <cite className="text-[0.78rem] font-semibold text-navy not-italic mt-1.5 block">
                  Thorsten Lienau
                </cite>
              </blockquote>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <div className="bg-white rounded-xl p-10 shadow-[0_8px_40px_rgba(13,31,53,0.12)]">
              <h3 className="font-display text-[1.3rem] text-navy mb-6">Direkte Nachricht senden</h3>
              <ContactForm />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
