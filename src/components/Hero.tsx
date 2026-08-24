import { ArrowRight, FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import photo from "@/assets/prakash.jpg.asset.json";

export function Hero() {
  return (
    <section id="home" className="hero-glow relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Open to opportunities · 2026
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name}
            <span className="block text-primary">Java Full Stack Developer</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Computer Science Engineering final-year student building scalable backends with Java and
            Spring Boot, and clean, user-friendly interfaces with React. I enjoy turning real problems
            into reliable, well-structured software.
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <FileDown className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
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
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/15 blur-2xl" aria-hidden />
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-soft)]">
            <img
              src={photo.url}
              alt="Portrait of Prakash Chigarannavar"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="flex items-center justify-between border-t border-border px-5 py-4">
              <div>
                <p className="font-display text-sm font-semibold">{profile.fullName}</p>
                <p className="font-mono text-xs text-muted-foreground">B.E. CSE · 7.5 CGPA</p>
              </div>
              <span className="rounded-full bg-accent/20 px-3 py-1 font-mono text-[11px] text-accent-foreground dark:text-accent">
                Fresher
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
