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
    <div
      className={cn(
        "flex flex-col gap-2 md:flex-row md:items-start md:justify-between",
        className,
      )}
    >
      <div className="flex-1 space-y-1">
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        {subheading && (
          <p className="text-sm font-medium text-muted-foreground">{subheading}</p>
        )}
        {children && <div className="pt-1 text-sm leading-relaxed">{children}</div>}
      </div>
      <div className="md:w-44 md:text-right">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-medium text-brand",
            current && "after:inline-block after:h-2 after:w-2 after:rounded-full after:bg-emerald-500 after:content-['']",
          )}
        >
          {period}
        </span>
      </div>
    </div>
  );
}
