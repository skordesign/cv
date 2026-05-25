import { cn } from "@/lib/utils";

type ResumeItemProps = {
  title: string;
  subheading?: string;
  period: string;
  current?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export function ResumeItem({
  title,
  subheading,
  period,
  current,
  children,
  className,
}: ResumeItemProps) {
  return (
    <article
      className={cn(
        "grid gap-3 border-t border-border/40 pt-6 first:border-t-0 first:pt-0 md:grid-cols-[10rem_1fr] md:gap-8",
        className,
      )}
    >
      <div className="md:pt-1">
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground",
            current &&
              "before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500 before:content-['']",
          )}
        >
          {period}
        </span>
      </div>
      <div className="space-y-1.5">
        <h3 className="text-lg font-medium leading-snug">{title}</h3>
        {subheading && (
          <p className="text-sm text-muted-foreground">{subheading}</p>
        )}
        {children && (
          <div className="pt-1 text-sm leading-relaxed text-foreground/80">
            {children}
          </div>
        )}
      </div>
    </article>
  );
}
