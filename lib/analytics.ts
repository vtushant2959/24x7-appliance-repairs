export const hasGA4 = Boolean(process.env.NEXT_PUBLIC_GA4_ID);
export const hasGTM = Boolean(process.env.NEXT_PUBLIC_GTM_ID);
export const hasClarity = Boolean(process.env.NEXT_PUBLIC_CLARITY_ID);
export const hasMetaPixel = Boolean(process.env.NEXT_PUBLIC_META_PIXEL_ID);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (window.gtag) window.gtag("event", name, params);
  if (window.fbq) window.fbq("trackCustom", name, params);
}

export function trackPhoneClick(source: string) {
  trackEvent("phone_click", { source });
}

export function trackWhatsappClick(source: string) {
  trackEvent("whatsapp_click", { source });
}

export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", { form_name: formName });
}

export function trackCtaClick(label: string) {
  trackEvent("cta_click", { label });
}

export function trackAiAssistantOpen() {
  trackEvent("ai_assistant_open");
}
