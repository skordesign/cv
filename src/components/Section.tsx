import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 border-t border-border/40 px-6 py-20 first:border-t-0 sm:px-10 lg:px-24 lg:py-32",
        className,
      )}
    >
      <div className="mx-auto max-w-4xl">
        {(eyebrow || title) && (
          <Reveal className="mb-12 lg:mb-16">
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-4xl font-light leading-tight tracking-tight lg:text-5xl">
                {title}
              </h2>
            )}
          </Reveal>
        )}
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
}
