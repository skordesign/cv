export function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-brand/60 hover:text-brand">
      {children}
    </span>
  );
}
