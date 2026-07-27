import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-config";

export function ProjectsSection() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Referenzprojekte"
          title="Ausgew&auml;hlte Mandate und Projekte"
          description="Konkrete Ergebnisse aus realen Eins&auml;tzen: von Strategie bis Umsetzung, von Start-up bis Konzern."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.label}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {project.client}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{project.label}</h3>
              </div>
              <p className="flex-1 leading-relaxed text-slate-600 text-sm">{project.description}</p>
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
  );
}
