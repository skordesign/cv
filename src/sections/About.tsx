import { Github, Facebook, Mail, Phone } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile, type SocialLink } from "@/data/cv";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  const className = "h-4 w-4";
  switch (icon) {
    case "github":
      return <Github className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "mail":
      return <Mail className={className} />;
    case "stack-overflow":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="m17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56zM6.77 14.32l8.79 1.83.37-1.76-8.79-1.83-.37 1.76zm1.16-4.17 8.14 3.79.76-1.62-8.14-3.79-.76 1.62zm2.26-3.99 6.9 5.74 1.15-1.38-6.9-5.74-1.15 1.38zm4.44-4.16-1.45 1.07 5.35 7.21 1.45-1.07L14.63 2zM6.59 18.41h8.97v-1.8H6.59v1.8z" />
        </svg>
      );
    case "flickr":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <circle cx="6.5" cy="12" r="4.5" />
          <circle cx="17.5" cy="12" r="4.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-8H5.67v8h2.67zM7 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11.34 9.34V13.8c0-2.4-1.28-3.51-2.99-3.51-1.37 0-1.99.75-2.34 1.28v-1.1H10.34c.04.76 0 8 0 8h2.67v-4.46c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.72 1.34 1.78v4.3h2.67z" />
        </svg>
      );
  }
}

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen scroll-mt-28 flex-col justify-center px-6 py-24 sm:px-10 lg:px-24"
    >
      <div className="absolute right-6 top-6 z-10 flex items-center gap-1 sm:right-10 lg:right-12">
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={s.label}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <SocialIcon icon={s.icon} />
          </a>
        ))}
        <ThemeToggle />
      </div>

      <div className="mx-auto w-full max-w-4xl">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-brand">
            {profile.location} · Available
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            {profile.firstName}
            <br />
            <span className="italic text-brand">{profile.lastName}.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 lg:text-xl">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              {profile.phone}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-3.5 w-3.5" />
              {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-16 grid gap-3 border-t border-border/40 pt-8 sm:grid-cols-2">
            {profile.summary.map((line) => {
              const [label, ...rest] = line.split(":");
              const body = rest.join(":").trim();
              return (
                <div key={line} className="text-sm">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>
                  <p className="mt-1 text-foreground/90">{body || line}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <a
            href={profile.nuget}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-brand underline-offset-4 hover:underline"
          >
            View published NuGet packages
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>

      <Reveal delay={600}>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          <span>Scroll</span>
          <span className="h-8 w-px animate-pulse bg-border" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
