import { GraduationCap, Languages, Briefcase, Target } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

const facts = [
  { icon: GraduationCap, label: "Education", value: "B.E. CSE · 2026 · CGPA 7.5" },
  { icon: Briefcase, label: "Experience", value: "Fresher · KodNest Internship" },
  { icon: Languages, label: "Languages", value: profile.languages.join(", ") },
  { icon: Target, label: "Focus", value: "Java · Spring Boot · React" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A developer who likes clean, working software" muted>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a final-year Computer Science Engineering student at Karavali Institute of
            Technology and an aspiring Full Stack Developer. My interest sits in building scalable,
            maintainable applications — solid Java backends, well-designed databases and interfaces
            that feel simple to use.
          </p>
          <p>
            During my Java Full Stack internship at KodNest I worked across the stack: designing REST
            APIs with Spring Boot, modelling data in MySQL, and building React front-ends. Alongside
            projects I practise data structures and algorithms regularly, because clear thinking makes
            better code.
          </p>
          <p>
            I&apos;m now looking for a software developer role where I can contribute to real products,
            learn from experienced engineers and grow into a dependable full stack developer.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {facts.map((fact) => (
            <li key={fact.label} className="surface-card flex items-start gap-3 p-5">
              <fact.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-medium">{fact.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
