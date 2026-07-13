import { ErrorCodeFilterBar } from "@/components/ErrorCodeFilterBar";
import { Section } from "@/components/ui";
import { brands, errorCodes } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Appliance Error Code Lookup",
  description:
    "Look up Samsung, LG, IFB, Bosch, Whirlpool, Haier and Hitachi appliance error codes - what they mean, likely causes and whether it's safe to check yourself.",
});

export default function ErrorCodesPage() {
  return (
    <main>
      <Section eyebrow="Error Code Knowledge Base" title="Look up your appliance error code">
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Filter by brand to find your exact error code, what it means, and
          whether it&rsquo;s safe to check yourself or needs a technician.
        </p>
        <ErrorCodeFilterBar brands={brands} errorCodes={errorCodes} />
      </Section>
    </main>
  );
}
