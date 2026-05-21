import { Sparkles } from "lucide-react";

import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { highlights } from "@/data/cv";

export function Highlights() {
  return (
    <Section id="highlights" title="Highlights">
      <p className="mb-6 text-sm text-muted-foreground">
        Recent shipped work and notable side-projects.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {highlights.map((h) => (
          <Card key={h.title} className="border-brand/30 bg-brand/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Sparkles className="h-4 w-4 text-brand" />
                {h.title}
              </CardTitle>
              <CardDescription>{h.description}</CardDescription>
            </CardHeader>
            {(h.tags?.length || h.link) && (
              <CardContent className="flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {h.tags?.map((t) => (
                    <Badge key={t} variant="brand" className="text-[10px]">
                      {t}
                    </Badge>
                  ))}
                </div>
                {h.link && (
                  <a
                    href={h.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs text-brand hover:underline"
                  >
                    Open →
                  </a>
                )}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
