import { Check } from "lucide-react";

import { Section } from "@/components/Section";
import { SkillBadge } from "@/components/SkillBadge";
import { skills, workedOn } from "@/data/cv";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillBadge key={item}>{item}</SkillBadge>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Worked on
          </h3>
          <ul className="space-y-2">
            {workedOn.map((line) => (
              <li key={line} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
