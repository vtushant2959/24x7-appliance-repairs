import { Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description: `${site.name} is an independent appliance repair provider. Brand names are used only to describe compatibility and service experience. We are not an official service center unless specifically stated.`,
});

export default function Page() {
  return (
    <main>
      <Section eyebrow="Company" title="Disclaimer">
        <div className="prose-site max-w-3xl">
          <p>
            {site.name} is an independent appliance repair provider. Brand
            names such as Samsung, LG, IFB, Bosch, Whirlpool, Haier and
            Hitachi are used only to describe compatibility and service
            experience. We are not an official service center unless
            specifically stated.
          </p>
          <p>
            Content on this website, including the Problem Library, Error
            Code Knowledge Base and AI repair assistant, is provided for
            general guidance only. It does not replace an in-person
            inspection, and safety-critical faults should always be checked
            by a trained technician.
          </p>
          <p>
            Our content and service pages are designed to help customers make
            confident repair decisions and to keep the website useful for
            Google Search, AI search engines and answer engines.
          </p>
        </div>
      </Section>
    </main>
  );
}
