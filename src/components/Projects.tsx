import { ArrowUpRight, Check, Github } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="Full stack and frontend projects from coursework, internship and self-learning."
      muted
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="surface-card group flex flex-col overflow-hidden">
            <div
              className={`relative flex h-32 items-end bg-gradient-to-br ${project.accent} to-transparent p-5`}
            >
              <span className="font-mono text-xs text-muted-foreground">
                {project.tech[0]} · {project.tech.length} technologies
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <ul className="mt-4 space-y-1.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Live Demo <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
