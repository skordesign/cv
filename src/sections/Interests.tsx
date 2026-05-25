import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { interests } from "@/data/cv";

export function Interests() {
  return (
    <Section id="interests" eyebrow="05 — Outside work" title="Interests.">
      <ul className="space-y-4">
        {interests.map((i, idx) => (
          <Reveal as="li" key={i.title} delay={idx * 60}>
            {i.link ? (
              <a
                href={i.link}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-baseline gap-2 font-serif text-2xl font-light italic underline-offset-8 hover:underline lg:text-3xl"
              >
                {i.title}
                <span
                  className="text-xs not-italic text-brand transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ) : (
              <span className="font-serif text-2xl font-light italic lg:text-3xl">
                {i.title}
              </span>
            )}
            {i.description && (
              <p className="mt-1 text-sm text-muted-foreground">{i.description}</p>
            )}
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
