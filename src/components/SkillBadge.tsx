import { Badge } from "@/components/ui/badge";

export function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge variant="secondary" className="text-xs">
      {children}
    </Badge>
  );
}
