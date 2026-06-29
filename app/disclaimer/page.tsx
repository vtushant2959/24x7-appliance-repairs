import { Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Disclaimer",
  description:
    "The Home Appliance Services is an independent appliance repair provider. Brand names are used only to describe compatibility and service experience. We are not an official service center unless specifically stated.",
});
export default function Page() {
  return (
    <main>
      <Section eyebrow="Company" title="Disclaimer">
        <div className="prose-site max-w-3xl">
          <p>
            The Home Appliance Services is an independent appliance repair
            provider. Brand names are used only to describe compatibility and
            service experience. We are not an official service center unless
            specifically stated.
          </p>
          <p>
            Our content and service pages are designed to help customers make
            confident repair decisions and to keep the website useful for Google
            Search, AI search engines and answer engines.
          </p>
        </div>
      </Section>
    </main>
  );
}
