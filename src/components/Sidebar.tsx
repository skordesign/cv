import { useEffect, useState } from "react";
import { Github, Facebook, Mail, Menu, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { profile, type SocialLink } from "@/data/cv";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "highlights", label: "Highlights" },
  { id: "projects", label: "Projects" },
  { id: "interests", label: "Interests" },
] as const;

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
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className={className}
        >
          <path d="m17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56zM6.77 14.32l8.79 1.83.37-1.76-8.79-1.83-.37 1.76zm1.16-4.17 8.14 3.79.76-1.62-8.14-3.79-.76 1.62zm2.26-3.99 6.9 5.74 1.15-1.38-6.9-5.74-1.15 1.38zm4.44-4.16-1.45 1.07 5.35 7.21 1.45-1.07L14.63 2zM6.59 18.41h8.97v-1.8H6.59v1.8z" />
        </svg>
      );
    case "flickr":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className={className}
        >
          <circle cx="6.5" cy="12" r="4.5" />
          <circle cx="17.5" cy="12" r="4.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className={className}
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-8H5.67v8h2.67zM7 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11.34 9.34V13.8c0-2.4-1.28-3.51-2.99-3.51-1.37 0-1.99.75-2.34 1.28v-1.1H10.34c.04.76 0 8 0 8h2.67v-4.46c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.72 1.34 1.78v4.3h2.67z" />
        </svg>
      );
  }
}

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b bg-background/80 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={profile.avatar} alt={`${profile.firstName} ${profile.lastName}`} />
            <AvatarFallback>{profile.initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold">
            {profile.firstName} {profile.lastName}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle navigation"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Sidebar — desktop fixed, mobile collapsible */}
      <aside
        className={cn(
          "lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-72 lg:flex-col lg:border-r lg:bg-card",
          "z-30 w-full border-b bg-card lg:border-b-0",
          open ? "block" : "hidden lg:flex",
        )}
      >
        <div className="flex flex-1 flex-col gap-6 px-6 py-8">
          <div className="hidden flex-col items-center gap-3 lg:flex">
            <Avatar className="h-32 w-32 ring-2 ring-brand/60">
              <AvatarImage src={profile.avatar} alt={`${profile.firstName} ${profile.lastName}`} />
              <AvatarFallback className="text-3xl">{profile.initials}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h1 className="text-xl font-bold leading-tight">
                {profile.firstName} <span className="text-brand">{profile.lastName}</span>
              </h1>
              <p className="text-sm text-muted-foreground">{profile.title}</p>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  active === item.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    <SocialIcon icon={s.icon} />
                  </a>
                ))}
              </div>
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Last updated {profile.lastUpdated}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
