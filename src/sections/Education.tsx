import { Reveal } from "@/components/Reveal";
import { ResumeItem } from "@/components/ResumeItem";
import { Section } from "@/components/Section";
import { education } from "@/data/cv";

export function Education() {
  return (
    <Section id="education" eyebrow="02 — Studies" title="Education.">
      {education.map((e, i) => (
        <Reveal key={e.school} delay={i * 60}>
          <ResumeItem title={e.school} subheading={e.degree} period={e.period}>
            {e.field && <p>{e.field}</p>}
            {e.gpa && <p className="text-muted-foreground">GPA: {e.gpa}</p>}
          </ResumeItem>
        </Reveal>
      ))}
    </Section>
  );
}
