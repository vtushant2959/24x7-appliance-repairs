import { AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function CalloutBox({
  children,
  tone = "warn",
}: {
  children: React.ReactNode;
  tone?: "warn" | "info";
}) {
  const Icon = tone === "warn" ? AlertTriangle : Info;
  return (
    <div
      className={cn(
        "not-prose mt-6 flex gap-3 rounded-lg border p-5 text-sm leading-6",
        tone === "warn"
          ? "border-brand-orange/30 bg-orange-50 text-orange-900 dark:border-brand-orange/40 dark:bg-orange-950/30 dark:text-orange-200"
          : "border-brand-blue/30 bg-brand-mist text-brand-navy dark:border-brand-blue/40 dark:bg-slate-900 dark:text-slate-200",
      )}
    >
      <Icon size={20} className="mt-0.5 shrink-0" />
      <div>{children}</div>
    </div>
  );
}
