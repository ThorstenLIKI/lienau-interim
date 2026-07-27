"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/kontakt/actions";
import { initialContactFormState, type ContactFormState } from "@/app/kontakt/types";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex justify-center items-center py-3.5 px-6 bg-navy text-cream text-sm font-semibold rounded hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(13,31,53,0.2)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
    >
      {pending ? "Wird gesendet…" : "Nachricht senden"}
    </button>
  );
}

function Feedback({ state }: { state: ContactFormState }) {
  if (state.status === "idle" || !state.message) return null;
  const tone =
    state.status === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-rose-200 bg-rose-50 text-rose-700";
  return <p className={`rounded-md border px-4 py-3 text-sm ${tone}`}>{state.message}</p>;
}

const fieldBase =
  "w-full px-4 py-3 border border-gray-light rounded text-sm text-text bg-cream outline-none transition-[border-color,box-shadow] focus:border-petrol focus:shadow-[0_0_0_3px_rgba(27,107,120,0.08)]";
const labelBase = "block text-[0.82rem] font-semibold text-text mb-1.5 tracking-wide";

export function ContactForm() {
  const [state, action] = useActionState(submitContactForm, initialContactFormState);

  return (
    <form action={action} className="space-y-5">
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />

      <div>
        <label htmlFor="cf-name" className={labelBase}>Ihr Name</label>
        <input id="cf-name" name="name" type="text" required minLength={2} placeholder="Max Mustermann" autoComplete="name" className={fieldBase} />
      </div>

      <div>
        <label htmlFor="cf-company" className={labelBase}>Unternehmen</label>
        <input id="cf-company" name="company" type="text" placeholder="Mustermann GmbH" autoComplete="organization" className={fieldBase} />
      </div>

      <div>
        <label htmlFor="cf-email" className={labelBase}>E-Mail-Adresse</label>
        <input id="cf-email" name="email" type="email" required placeholder="max@mustermann.de" autoComplete="email" className={fieldBase} />
      </div>

      <div>
        <label htmlFor="cf-message" className={labelBase}>Ihr Anliegen</label>
        <textarea id="cf-message" name="message" required minLength={20} rows={4} placeholder="Kurze Beschreibung Ihrer Situation und wie ich helfen kann…" className={`${fieldBase} resize-y min-h-[120px]`} />
      </div>

      <Feedback state={state} />
      <SubmitButton />
      <p className="text-[0.78rem] text-text-light mt-3">
        Keine Weitergabe Ihrer Daten. Ich melde mich innerhalb von 24 Stunden.
      </p>
    </form>
  );
}
