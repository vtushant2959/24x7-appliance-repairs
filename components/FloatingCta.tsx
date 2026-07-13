"use client";
import { ArrowUp } from "lucide-react";
import { ContactLinks } from "@/components/ContactLinks";

export function FloatingCta() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <ContactLinks variant="icons" source="floating_cta" />
      <a
        aria-label="Back to top"
        className="focus-ring rounded-full bg-brand-orange p-4 text-white shadow-soft"
        href="#top"
      >
        <ArrowUp />
      </a>
    </div>
  );
}
