import { Section } from "@/components/Section";
import { ResumeItem } from "@/components/ResumeItem";
import { experience } from "@/data/cv";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((job) => (
          <ResumeItem
            key={`${job.company}-${job.period}`}
            title={job.title}
            subheading={job.company}
            period={job.period}
            current={job.current}
          >
            <p className="text-muted-foreground">{job.description}</p>
          </ResumeItem>
        ))}
      </div>
    </Section>
  );
}
