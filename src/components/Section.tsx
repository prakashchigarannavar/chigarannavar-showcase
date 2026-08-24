import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  muted?: boolean;
};

/** Shared section shell: consistent heading rhythm and container width. */
export function Section({ id, eyebrow, title, description, children, muted }: SectionProps) {
  return (
    <section id={id} className={`section-pad ${muted ? "bg-surface" : ""}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
