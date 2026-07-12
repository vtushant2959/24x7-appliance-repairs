"use client";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const AI_ASSISTANT_OPEN_EVENT = "24x7-open-ai-assistant";

export function AiAssistantOpenButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(AI_ASSISTANT_OPEN_EVENT))}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-orange px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-orange-600",
        className,
      )}
    >
      <Sparkles size={18} />
      Open AI Assistant
    </button>
  );
}
