import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RolesSection } from "@/components/sections/roles-section";
import { competencies, services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Go-to-Market, Marketing-Transformation, Fuehrung auf Zeit und KI-gestuetzte Digitalloesungen. Die Leistungen von Thorsten Lienau als Interim Manager.",
  alternates: { canonical: "/leistungen" },
};

export default function ServicesPage() {
  return (
    <div>
      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Leistungen"
            title="Interim Management mit Verantwortung in der Linie"
            description="Ich uebernehme Aufgaben dort, wo schnelle Entscheidungen und belastbare Umsetzung entscheidend sind, von der Strategie bis zur taeglich greifbaren Wirkung."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container className="space-y-6">
          <SectionHeading
            eyebrow="Kompetenzschwerpunkte"
            title="Was ich konkret mitbringe"
            description=""
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {competencies.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <RolesSection />
    </div>
  );
}
