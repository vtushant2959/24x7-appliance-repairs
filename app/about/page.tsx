import { Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: `About ${site.name}`,
  description: `${site.name} is a Delhi NCR focused home appliance repair and maintenance company built around fast booking, clear diagnosis, trained technicians and respectful doorstep service.`,
});

export default function Page() {
  return (
    <main>
      <Section eyebrow="Company" title={`About ${site.name}`}>
        <div className="prose-site max-w-3xl">
          <p>
            {site.name} is a Delhi NCR focused home appliance repair and
            maintenance company built around fast booking, clear diagnosis,
            trained technicians and respectful doorstep service.
          </p>
          <p>
            We repair refrigerators, washing machines, microwaves,
            dishwashers and dryers across Samsung, LG, IFB, Bosch, Whirlpool,
            Haier and Hitachi appliances, with a growing Problem Library and
            Error Code Knowledge Base so customers can understand their
            appliance fault before booking a technician.
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
