import { Container } from "@/components/layout/container";
import { competencies, typicalRoles } from "@/lib/site-config";

export function RolesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">

          {/* Typische Einsatzfelder */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Typische Einsatzfelder
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              In welchen Rollen ich eingesetzt werde
            </h2>
            <ul className="space-y-3">
              {typicalRoles.map((role) => (
                <li key={role} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Kompetenzschwerpunkte */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Kompetenzschwerpunkte
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Was ich konkret mitbringe
            </h2>
            <ul className="space-y-3">
              {competencies.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
