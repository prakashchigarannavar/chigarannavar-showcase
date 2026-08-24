import { FileDown, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Resume() {
  return (
    <section id="resume" className="section-pad bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="surface-card flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-bold">My Resume</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                A one-page summary of my skills, projects, internship and education — ready for your
                hiring workflow.
              </p>
            </div>
          </div>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <FileDown className="h-4 w-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
