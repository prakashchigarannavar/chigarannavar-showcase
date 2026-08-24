import { Code2, Database, GitBranch, Layout, Server, Sparkles, type LucideIcon } from "lucide-react";
import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  GitBranch,
  Sparkles,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I build with"
      description="A full stack toolkit centred on Java and React, backed by solid fundamentals."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon] ?? Code2;
          return (
            <article key={group.title} className="surface-card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
