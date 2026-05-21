import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-b px-6 py-12 last:border-b-0 lg:px-16 lg:py-20",
        className,
      )}
    >
      {title && (
        <h2 className="mb-8 text-3xl font-bold uppercase tracking-wide lg:text-4xl">
          {title}
        </h2>
      )}
      <div className="space-y-6">{children}</div>
    </section>
  );
}
