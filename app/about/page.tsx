import { Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "About The Home Appliance Services",
  description:
    "The Home Appliance Services is a Delhi NCR focused home appliance repair and maintenance company built around fast booking, clear diagnosis, trained technicians and respectful doorstep service.",
});
export default function Page() {
  return (
    <main>
      <Section eyebrow="Company" title="About The Home Appliance Services">
        <div className="prose-site max-w-3xl">
          <p>
            The Home Appliance Services is a Delhi NCR focused home appliance
            repair and maintenance company built around fast booking, clear
            diagnosis, trained technicians and respectful doorstep service.
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
