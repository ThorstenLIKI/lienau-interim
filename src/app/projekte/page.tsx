import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { projects } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Referenzprojekte",
  description:
    "Ausgewaehlte Mandate und Projekte von Thorsten Lienau: Go-to-Market, KI-Loesungen, Marketing-Transformation und internationale Segmentorganisationen.",
  alternates: { canonical: "/projekte" },
};

export default function ProjectsPage() {
  return (
    <div>
      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Referenzprojekte"
            title="Ausgewaehlte Mandate und Projekte"
            description="Konkrete Ergebnisse aus realen Einsaetzen: von der Go-to-Market-Strategie bis zur KI-gestuetzten Digitalloesung, vom Start-up bis zum internationalen Konzernumfeld."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.label}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    {project.client}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-900">{project.label}</h2>
                </div>
                <p className="flex-1 leading-relaxed text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <ContactCtaSection />
    </div>
  );
}
