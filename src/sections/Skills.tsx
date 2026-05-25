import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SkillBadge } from "@/components/SkillBadge";
import { skills, workedOn } from "@/data/cv";

export function Skills() {
  return (
    <Section id="skills" eyebrow="03 — Toolkit" title="Skills.">
      <div className="space-y-10">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="grid gap-3 border-t border-border/40 pt-6 first:border-t-0 first:pt-0 md:grid-cols-[10rem_1fr] md:gap-8">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground md:pt-1.5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item}>{item}</SkillBadge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="grid gap-3 border-t border-border/40 pt-6 md:grid-cols-[10rem_1fr] md:gap-8">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground md:pt-1.5">
              Worked on
            </h3>
            <ul className="space-y-2.5">
              {workedOn.map((line) => (
                <li
                  key={line}
                  className="border-l border-brand/40 pl-4 text-sm leading-relaxed text-foreground/85"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
