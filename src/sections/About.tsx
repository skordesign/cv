import { Mail, Phone } from "lucide-react";

import { Section } from "@/components/Section";
import { profile } from "@/data/cv";

export function About() {
  return (
    <Section id="about" className="min-h-screen flex items-center">
      <div>
        <h1 className="mb-2 text-5xl font-extrabold uppercase tracking-tight lg:text-7xl">
          {profile.firstName}{" "}
          <span className="text-brand">{profile.lastName}</span>
        </h1>
        <h2 className="mb-6 text-xl font-medium text-muted-foreground lg:text-2xl">
          {profile.title}
        </h2>
        <p className="mb-8 max-w-2xl text-base text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 hover:text-brand"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 hover:text-brand"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <ul className="space-y-1.5 text-base">
          {profile.summary.map((line) => (
            <li key={line} className="text-foreground/90">
              {line}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm">
          <a
            href={profile.nuget}
            target="_blank"
            rel="noreferrer noopener"
            className="text-brand underline-offset-4 hover:underline"
          >
            Follow this link to see my published NuGet packages →
          </a>
        </p>
      </div>
    </Section>
  );
}
