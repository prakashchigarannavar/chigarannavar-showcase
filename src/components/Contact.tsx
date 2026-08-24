import { Github, Linkedin, Mail, Send, MapPin, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

type Errors = { name?: string; email?: string; message?: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    else if (values.name.trim().length > 100) next.name = "Name must be under 100 characters.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!emailPattern.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Please write a short message.";
    else if (values.message.trim().length > 1000) next.message = "Message must be under 1000 characters.";
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // No backend yet: hand off to the visitor's mail client.
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setValues({ name: "", email: "", message: "" });
  };

  const field =
    "mt-2 w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      description="Open to full stack developer roles, internships and freelance collaboration."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <form onSubmit={handleSubmit} noValidate className="surface-card p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              maxLength={100}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              aria-invalid={Boolean(errors.name)}
              className={field}
              placeholder="Your name"
            />
            {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name}</p> : null}
          </div>

          <div className="mt-5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              maxLength={255}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              aria-invalid={Boolean(errors.email)}
              className={field}
              placeholder="you@company.com"
            />
            {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email}</p> : null}
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              maxLength={1000}
              onChange={(e) => setValues({ ...values, message: e.target.value })}
              aria-invalid={Boolean(errors.message)}
              className={`${field} resize-y`}
              placeholder="Tell me about the role or project…"
            />
            {errors.message ? <p className="mt-1.5 text-xs text-destructive">{errors.message}</p> : null}
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>

          {sent ? (
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
              <CheckCircle2 className="h-4 w-4" /> Thanks! Your mail app should now be open.
            </p>
          ) : null}
        </form>

        <ul className="space-y-4">
          <li>
            <a href={`mailto:${profile.email}`} className="surface-card flex items-center gap-4 p-5">
              <Mail className="h-5 w-5 text-primary" />
              <span>
                <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <span className="text-sm font-medium break-all">{profile.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="surface-card flex items-center gap-4 p-5"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span>
                <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  LinkedIn
                </span>
                <span className="text-sm font-medium">prakash-chigarannavar</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="surface-card flex items-center gap-4 p-5"
            >
              <Github className="h-5 w-5 text-primary" />
              <span>
                <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  GitHub
                </span>
                <span className="text-sm font-medium">prakashchigarannavar</span>
              </span>
            </a>
          </li>
          <li className="surface-card flex items-center gap-4 p-5">
            <MapPin className="h-5 w-5 text-primary" />
            <span>
              <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Location
              </span>
              <span className="text-sm font-medium">{profile.location}</span>
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
