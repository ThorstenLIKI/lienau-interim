"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";
import type { ContactFormState } from "./types";

const isEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);

export async function submitContactForm(
  _: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name    = String(formData.get("name")    ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email   = String(formData.get("email")   ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();

  // Honeypot: Bots füllen dieses Feld aus
  if (website) {
    return { status: "success", message: "Vielen Dank. Ihre Anfrage wurde übermittelt." };
  }

  if (name.length < 2) {
    return { status: "error", message: "Bitte geben Sie einen gültigen Namen ein." };
  }
  if (!isEmail(email)) {
    return { status: "error", message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." };
  }
  if (message.length < 20) {
    return { status: "error", message: "Bitte beschreiben Sie Ihr Anliegen mit mindestens 20 Zeichen." };
  }

  const gmailUser     = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    console.error("E-Mail-Konfiguration fehlt. Bitte GMAIL_USER und GMAIL_APP_PASSWORD in .env.local setzen.");
    return { status: "error", message: "E-Mail-Versand nicht konfiguriert. Bitte den Administrator kontaktieren." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  const companyLine = company
    ? `<tr><td style="color:#9aa5b4;font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;padding:12px 0 4px;border-bottom:1px solid #e8eaed;">Unternehmen</td><td style="padding:12px 0 4px;border-bottom:1px solid #e8eaed;font-weight:600;color:#0d1f35;">${company}</td></tr>`
    : "";

  const htmlBody = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Neue Kontaktanfrage</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
</head>
<body style="margin:0;padding:0;background:#f7f8fa;font-family:'DM Sans',system-ui,sans-serif;color:#2c3e50;-webkit-font-smoothing:antialiased;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0d1f35 0%,#162d4a 60%,#1e3a5f 100%);border-radius:12px 12px 0 0;padding:40px 40px 32px;">
            <div style="width:48px;height:3px;background:#b8976a;margin-bottom:24px;border-radius:2px;"></div>
            <p style="font-family:'DM Sans',sans-serif;font-size:0.72rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#b8976a;margin:0 0 10px;">Neue Anfrage · lienau-interim.de</p>
            <h1 style="font-family:'Playfair Display',Georgia,serif;font-size:1.6rem;font-weight:600;color:#f7f8fa;margin:0;line-height:1.25;">Neue Kontaktanfrage</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:40px;">

            <!-- Kontaktdaten-Tabelle -->
            <p style="font-family:'DM Sans',sans-serif;font-size:0.72rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#b8976a;margin:0 0 16px;">Absender</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:0.9rem;margin:0 0 32px;border-top:1px solid #e8eaed;">
              <tr>
                <td style="color:#9aa5b4;font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;padding:12px 0 4px;border-bottom:1px solid #e8eaed;width:130px;">Name</td>
                <td style="padding:12px 0 4px;border-bottom:1px solid #e8eaed;font-weight:600;color:#0d1f35;">${name}</td>
              </tr>
              ${companyLine}
              <tr>
                <td style="color:#9aa5b4;font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;padding:12px 0 4px;border-bottom:1px solid #e8eaed;">E-Mail</td>
                <td style="padding:12px 0 4px;border-bottom:1px solid #e8eaed;">
                  <a href="mailto:${email}" style="color:#1b6b78;text-decoration:none;font-weight:500;">${email}</a>
                </td>
              </tr>
            </table>

            <!-- Nachricht -->
            <p style="font-family:'DM Sans',sans-serif;font-size:0.72rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#b8976a;margin:0 0 12px;">Nachricht</p>
            <div style="background:#f7f8fa;border-left:3px solid #b8976a;border-radius:0 8px 8px 0;padding:20px 24px;margin:0 0 32px;">
              <p style="color:#2c3e50;line-height:1.8;margin:0;white-space:pre-wrap;font-size:0.95rem;">${message}</p>
            </div>

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#0d1f35;border-radius:6px;padding:14px 28px;">
                  <a href="mailto:${email}?subject=Re%3A%20Ihre%20Anfrage%20auf%20lienau-interim.de"
                     style="font-family:'DM Sans',sans-serif;font-size:0.88rem;font-weight:600;color:#b8976a;text-decoration:none;letter-spacing:0.03em;">
                    Direkt antworten &rarr;
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#162d4a;border-radius:0 0 12px 12px;padding:20px 40px;">
            <p style="font-size:0.75rem;color:rgba(247,248,250,0.4);margin:0;line-height:1.6;">
              Automatisch versandt von lienau-interim.de &mdash; ${new Date().toLocaleDateString("de-DE", { day:"2-digit", month:"long", year:"numeric" })}
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`;

  const confirmationHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Ihre Anfrage bei Thorsten Lienau</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
</head>
<body style="margin:0;padding:0;background:#f7f8fa;font-family:'DM Sans',system-ui,sans-serif;color:#2c3e50;-webkit-font-smoothing:antialiased;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- ── Header: Navy mit Gold-Akzent ── -->
        <tr>
          <td style="background:linear-gradient(135deg,#0d1f35 0%,#162d4a 60%,#1e3a5f 100%);border-radius:12px 12px 0 0;padding:40px 40px 32px;">
            <!-- Gold-Strich oben -->
            <div style="width:48px;height:3px;background:#b8976a;margin-bottom:24px;border-radius:2px;"></div>
            <!-- Eyebrow -->
            <p style="font-family:'DM Sans',sans-serif;font-size:0.72rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#b8976a;margin:0 0 10px;">Bestätigung Ihrer Anfrage</p>
            <!-- Headline -->
            <h1 style="font-family:'Playfair Display',Georgia,serif;font-size:1.6rem;font-weight:600;color:#f7f8fa;margin:0 0 8px;line-height:1.25;">Ihre Nachricht<br/>ist angekommen.</h1>
            <p style="font-family:'DM Sans',sans-serif;font-size:0.9rem;color:rgba(247,248,250,0.6);margin:0;">lienau-interim.de</p>
          </td>
        </tr>

        <!-- ── Body: Weiße Karte ── -->
        <tr>
          <td style="background:#ffffff;padding:40px;">

            <p style="font-size:1rem;line-height:1.75;margin:0 0 16px;">Hallo <strong>${name}</strong>,</p>
            <p style="font-size:0.95rem;line-height:1.8;color:#2c3e50;margin:0 0 24px;">
              vielen Dank für Ihre Nachricht. Ich habe Ihre Anfrage erhalten und werde mich
              <strong style="color:#0d1f35;">innerhalb von 1–2 Werktagen</strong> persönlich bei Ihnen melden.
            </p>

            <!-- Trennlinie mit Gold-Akzent -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
              <tr>
                <td style="height:1px;background:linear-gradient(90deg,#b8976a,#e8eaed);"></td>
              </tr>
            </table>

            <!-- Kontaktkacheln -->
            <p style="font-family:'DM Sans',sans-serif;font-size:0.72rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#b8976a;margin:0 0 14px;">Direkter Kontakt</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
              <tr>
                <td width="48%" style="background:#f7f8fa;border-radius:8px;padding:16px 18px;vertical-align:top;">
                  <p style="font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#9aa5b4;margin:0 0 4px;">E-Mail</p>
                  <a href="mailto:thorstenlienau@gmail.com" style="color:#1b6b78;font-size:0.88rem;font-weight:500;text-decoration:none;">thorstenlienau@gmail.com</a>
                </td>
                <td width="4%"></td>
                <td width="48%" style="background:#f7f8fa;border-radius:8px;padding:16px 18px;vertical-align:top;">
                  <p style="font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#9aa5b4;margin:0 0 4px;">Telefon</p>
                  <a href="tel:+491716561123" style="color:#1b6b78;font-size:0.88rem;font-weight:500;text-decoration:none;">0171 656 1123</a>
                </td>
              </tr>
            </table>


            <!-- Trennlinie -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
              <tr><td style="height:1px;background:#e8eaed;"></td></tr>
            </table>

            <!-- Signatur -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="font-family:'Playfair Display',Georgia,serif;font-size:1.05rem;font-weight:600;color:#0d1f35;margin:0 0 2px;">Thorsten Lienau</p>
                  <p style="font-size:0.82rem;color:#5a6a7a;margin:0 0 8px;">Interim Manager | Marketing &amp; Transformation</p>
                  <p style="font-size:0.8rem;margin:0;">
                    <a href="https://www.lienau-interim.de" style="color:#1b6b78;text-decoration:none;">lienau-interim.de</a>
                    <span style="color:#e8eaed;margin:0 8px;">|</span>
                    <a href="https://lienau-webdesign.de" style="color:#1b6b78;text-decoration:none;">lienau-webdesign.de</a>
                  </p>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- ── Footer ── -->
        <tr>
          <td style="background:#162d4a;border-radius:0 0 12px 12px;padding:20px 40px;">
            <p style="font-size:0.75rem;color:rgba(247,248,250,0.4);margin:0;line-height:1.6;">
              Diese E-Mail wurde automatisch als Bestätigung Ihrer Kontaktanfrage versandt.<br/>
              &copy; ${new Date().getFullYear()} Thorsten Lienau &mdash; Interim Manager Marketing &amp; Transformation
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`;

  let sent = false;

  try {
    await Promise.all([
      // E-Mail an Thorsten
      transporter.sendMail({
        from:    `"Thorsten Lienau Website" <${gmailUser}>`,
        to:      gmailUser,
        replyTo: email,
        subject: `Neue Anfrage von ${name}${company ? ` (${company})` : ""}`,
        html:    htmlBody,
        text:    `Name: ${name}\n${company ? `Unternehmen: ${company}\n` : ""}E-Mail: ${email}\n\nNachricht:\n${message}`,
      }),
      // Bestätigung an den Absender
      transporter.sendMail({
        from:    `"Thorsten Lienau" <${gmailUser}>`,
        to:      email,
        subject: `Ihre Anfrage bei Thorsten Lienau – Bestätigung`,
        html:    confirmationHtml,
        text:    `Hallo ${name},\n\nvielen Dank für Ihre Nachricht. Ich habe Ihre Anfrage erhalten und werde mich innerhalb von 1–2 Werktagen bei Ihnen melden.\n\nMit freundlichen Grüßen\nThorsten Lienau\nInterim Manager | Marketing & Transformation`,
      }),
    ]);

    sent = true;
  } catch (error) {
    console.error("Fehler beim E-Mail-Versand:", error);
    return {
      status: "error",
      message: "Leider ist ein Fehler aufgetreten. Bitte schreiben Sie direkt an thorstenlienau@gmail.com.",
    };
  }

  if (sent) redirect("/danke");

  return { status: "error", message: "Unbekannter Fehler." };
}
