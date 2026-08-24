import { BadgeCheck } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Achievements & certifications"
      description="Add new entries anytime in src/data/portfolio.ts — the cards update automatically."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <article key={cert.title} className="surface-card p-6">
            <BadgeCheck className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-semibold">{cert.title}</h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {cert.issuer} · {cert.year}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cert.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
