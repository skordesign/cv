import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "interests", label: "Interests" },
] as const;

export function TopNav() {
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        "fixed left-1/2 top-4 z-40 -translate-x-1/2 transition-all duration-500 ease-out",
        "motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none",
      )}
    >
      <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2 py-1.5 shadow-sm backdrop-blur-md">
        <ul className="hidden items-center gap-0.5 sm:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors",
                  active === item.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center sm:hidden">
          <span className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {navItems.find((n) => n.id === active)?.label ?? "About"}
          </span>
        </div>
        <div className="mx-1 h-5 w-px bg-border/60" aria-hidden="true" />
        <ThemeToggle />
      </div>
    </nav>
  );
}
