import { Mail, MapPin } from "lucide-react";
import { ContactLinks } from "@/components/ContactLinks";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/ui";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${site.name} for doorstep appliance repair by call, WhatsApp, email or booking form.`,
});

export default function ContactPage() {
  return (
    <main>
      <Section eyebrow="Contact" title="Book appliance repair">
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            <div className="rounded-lg border border-slate-200 p-5 dark:border-slate-800">
              <p className="mb-3 font-semibold">Call or WhatsApp us</p>
              <ContactLinks source="contact_page" />
            </div>
            <a
              className="rounded-lg border border-slate-200 p-5 dark:border-slate-800"
              href={`mailto:${site.email}`}
            >
              <Mail /> <strong>{site.email}</strong>
            </a>
            <div className="rounded-lg border border-slate-200 p-5 dark:border-slate-800">
              <MapPin /> <p className="mt-2">{site.address}</p>
              <p className="mt-2 font-semibold">{site.hours}</p>
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>
      <iframe
        className="h-96 w-full border-0"
        loading="lazy"
        src="https://www.google.com/maps?q=Faridabad%20appliance%20repair&output=embed"
        title={`Google map for ${site.name}`}
      />
    </main>
  );
}
