import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-bold">
            {profile.name}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Building scalable, user-friendly software — one commit at a time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
      </div>
    </footer>
  );
}
