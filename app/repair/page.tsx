import Link from "next/link";
import { Section } from "@/components/ui";
import { areas, brands, combos, services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Popular Brand Repairs Near You",
  description:
    "Browse our most-booked brand, service and location repair combinations across Delhi NCR.",
});

export default function RepairIndexPage() {
  return (
    <main>
      <Section eyebrow="Popular Repairs" title="Brand repair, by location">
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Our most-booked brand and appliance combinations, by area.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {combos.map((combo) => {
            const brand = brands.find((b) => b.slug === combo.brandSlug);
            const service = services.find((s) => s.slug === combo.serviceSlug);
            const area = areas.find((a) => a.slug === combo.areaSlug);
            return (
              <Link
                key={`${combo.brandSlug}-${combo.serviceSlug}-${combo.areaSlug}`}
                href={`/repair/${combo.brandSlug}/${combo.serviceSlug}/${combo.areaSlug}`}
                className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
              >
                <p className="font-bold text-brand-navy dark:text-white">
                  {brand?.name} {service?.name}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">in {area?.name}</p>
              </Link>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
