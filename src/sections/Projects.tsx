import { ExternalLink } from "lucide-react";

import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
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
    <div className="flex flex-col gap-2 border-l-2 border-border pl-4 md:flex-row md:items-start md:justify-between">
      <div className="flex-1 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-base font-semibold">{p.name}</h4>
          {p.failed && <Badge variant="destructive">Failed</Badge>}
        </div>
        <p className="text-xs font-medium text-muted-foreground">{p.meta}</p>
        <dl className="grid gap-x-4 gap-y-1 text-sm md:grid-cols-[80px_1fr]">
          <dt className="text-muted-foreground">Role</dt>
          <dd>{p.role}</dd>
          <dt className="text-muted-foreground">Task</dt>
          <dd>{p.task}</dd>
          <dt className="text-muted-foreground">Stack</dt>
          <dd className="text-foreground/90">{p.tech}</dd>
        </dl>
        {p.link && (
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {p.link.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-xs text-brand hover:underline"
              >
                {l.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="shrink-0 md:w-44 md:text-right">
        <span className="text-xs font-medium text-brand">{p.period}</span>
      </div>
    </div>
  );
}

export function Projects() {
  const grouped = groupBy(projects, (p) => p.org);
  const orgs = Object.keys(grouped);

  return (
    <Section id="projects" title="Projects">
      <div className="space-y-10">
        {orgs.map((org) => (
          <div key={org}>
            <h3 className="mb-4 text-lg font-semibold uppercase tracking-wide text-brand">
              {org}
            </h3>
            <div className="space-y-6">
              {grouped[org].map((p) => (
                <ProjectItem key={p.name} p={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
