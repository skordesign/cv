import { Reveal } from "@/components/Reveal";
import { ResumeItem } from "@/components/ResumeItem";
import { Section } from "@/components/Section";
import { experience } from "@/data/cv";

export function Experience() {
  return (
    <Section id="experience" eyebrow="01 — Career" title="Experience.">
      {experience.map((job, i) => (
        <Reveal key={`${job.company}-${job.period}`} delay={i * 60}>
          <ResumeItem
            title={job.title}
            subheading={job.company}
            period={job.period}
            current={job.current}
          >
            <p>{job.description}</p>
          </ResumeItem>
        </Reveal>
      ))}
    </Section>
  );
}
