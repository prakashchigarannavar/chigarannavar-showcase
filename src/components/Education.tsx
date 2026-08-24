import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background" muted>
      <ol className="relative space-y-5 border-l border-border pl-6">
        {education.map((item) => (
          <li key={item.degree} className="relative">
            <span className="absolute -left-[31px] top-5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
            <div className="surface-card p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">{item.degree}</h3>
                    <p className="text-sm text-muted-foreground">{item.institute}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
                  <p className="mt-1 text-sm font-medium text-primary">{item.score}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
