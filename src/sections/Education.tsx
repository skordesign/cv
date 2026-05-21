import { Section } from "@/components/Section";
import { ResumeItem } from "@/components/ResumeItem";
import { education } from "@/data/cv";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-10">
        {education.map((e) => (
          <ResumeItem
            key={e.school}
            title={e.school}
            subheading={e.degree}
            period={e.period}
          >
            {e.field && <p className="text-muted-foreground">{e.field}</p>}
            {e.gpa && <p className="text-muted-foreground">GPA: {e.gpa}</p>}
          </ResumeItem>
        ))}
      </div>
    </Section>
  );
}
