import { ExternalLink } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { projects, type Project } from "@/data/cv";

function groupBy<T, K extends string>(arr: T[], key: (t: T) => K): Record<K, T[]> {
  return arr.reduce(
    (acc, item) => {
      const k = key(item);
      (acc[k] ||= []).push(item);
      return acc;
    },
    {} as Record<K, T[]>,
  );
}

function ProjectItem({ p }: { p: Project }) {
  return (
    <article className="grid gap-3 border-t border-border/40 pt-6 first:border-t-0 first:pt-0 md:grid-cols-[10rem_1fr] md:gap-8">
      <div className="md:pt-1">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {p.period}
        </span>
      </div>
      <div className="space-y-2.5">
        <div className="flex flex-wrap items-baseline gap-3">
          <h4 className="text-lg font-medium leading-snug">{p.name}</h4>
          {p.failed && (
            <span className="rounded-full border border-destructive/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-destructive">
              Failed
            </span>
          )}
        </div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {p.meta} · {p.role}
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">{p.task}</p>
        <p className="text-xs text-muted-foreground">
          <span className="text-foreground/70">Stack: </span>
          {p.tech}
        </p>
        {p.link && (
          <div className="flex flex-wrap items-center gap-4 pt-1">
            {p.link.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-brand underline-offset-4 hover:underline"
              >
                {l.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const grouped = groupBy(projects, (p) => p.org);
  const orgs = Object.keys(grouped);

  return (
    <Section id="projects" eyebrow="04 — Selected work" title="Projects.">
      <div className="space-y-16">
        {orgs.map((org) => (
          <Reveal key={org}>
            <div>
              <h3 className="mb-6 font-serif text-2xl font-light italic text-brand">
                {org}
              </h3>
              <div className="space-y-6">
                {grouped[org].map((p) => (
                  <ProjectItem key={p.name} p={p} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
