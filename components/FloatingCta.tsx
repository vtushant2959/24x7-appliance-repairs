import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
export function FloatingCta() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a
        aria-label="Call"
        className="focus-ring rounded-full bg-brand-blue p-4 text-white shadow-soft"
        href={site.phoneHref}
      >
        <Phone />
      </a>
      <a
        aria-label="WhatsApp"
        className="focus-ring rounded-full bg-green-600 p-4 text-white shadow-soft"
        href={site.whatsappHref}
      >
        <MessageCircle />
      </a>
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
