"use client";
import { MessageCircle, Phone } from "lucide-react";
import { trackPhoneClick, trackWhatsappClick } from "@/lib/analytics";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Renders Call + WhatsApp links for BOTH business numbers, consistently,
 * wherever contact CTAs appear on the site.
 */
export function ContactLinks({
  variant = "buttons",
  source,
  className,
}: {
  variant?: "buttons" | "bar" | "icons";
  source: string;
  className?: string;
}) {
  if (variant === "bar") {
    return (
      <div className={cn("flex flex-wrap gap-4", className)}>
        {site.contactNumbers.map((contact) => (
          <span key={contact.display} className="flex gap-3">
            <a href={contact.phoneHref} onClick={() => trackPhoneClick(source)}>
              Call {contact.display}
            </a>
            <a href={contact.whatsappHref} onClick={() => trackWhatsappClick(source)}>
              WhatsApp {contact.display}
            </a>
          </span>
        ))}
      </div>
    );
  }

  if (variant === "icons") {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        {site.contactNumbers.map((contact) => (
          <div key={contact.display} className="flex flex-col gap-2">
            <a
              aria-label={`Call ${contact.display}`}
              className="focus-ring rounded-full bg-brand-blue p-4 text-white shadow-soft"
              href={contact.phoneHref}
              onClick={() => trackPhoneClick(source)}
            >
              <Phone />
            </a>
            <a
              aria-label={`WhatsApp ${contact.display}`}
              className="focus-ring rounded-full bg-green-600 p-4 text-white shadow-soft"
              href={contact.whatsappHref}
              onClick={() => trackWhatsappClick(source)}
            >
              <MessageCircle />
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {site.contactNumbers.map((contact) => (
        <div key={contact.display} className="flex flex-wrap gap-3">
          <a
            href={contact.phoneHref}
            onClick={() => trackPhoneClick(source)}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-orange px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-orange-600"
          >
            <Phone size={16} /> Call {contact.display}
          </a>
          <a
            href={contact.whatsappHref}
            onClick={() => trackWhatsappClick(source)}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-green-600 px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-green-700"
          >
            <MessageCircle size={16} /> WhatsApp {contact.display}
          </a>
        </div>
      ))}
    </div>
  );
}
