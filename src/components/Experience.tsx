import { Award, Briefcase, ListChecks } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <article className="surface-card p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Briefcase className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl font-semibold">{experience.role}</h3>
              <p className="text-sm text-muted-foreground">
                {experience.company} · {experience.location}
              </p>
            </div>
          </div>
          <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
            {experience.period}
          </span>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold">
              <ListChecks className="h-4 w-4 text-primary" /> Responsibilities
            </h4>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {experience.responsibilities.map((item) => (
                <li key={item} className="border-l-2 border-border pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold">
              <Award className="h-4 w-4 text-primary" /> Key achievements
            </h4>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {experience.achievements.map((item) => (
                <li key={item} className="border-l-2 border-border pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
          {experience.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}
