import { Section } from "@/components/Section";
import { interests } from "@/data/cv";

export function Interests() {
  return (
    <Section id="interests" title="Interests">
      <ul className="space-y-3">
        {interests.map((i) => (
          <li key={i.title} className="text-lg">
            {i.link ? (
              <a
                href={i.link}
                target="_blank"
                rel="noreferrer noopener"
                className="text-brand underline-offset-4 hover:underline"
              >
                {i.title}
              </a>
            ) : (
              <span>{i.title}</span>
            )}
            {i.description && (
              <p className="text-sm text-muted-foreground">{i.description}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
