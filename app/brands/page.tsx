import Link from "next/link";
import { Section } from "@/components/ui";
import { brands } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Brands We Repair",
  description:
    "Samsung, LG, IFB, Bosch, Whirlpool, Voltas, Panasonic, Haier, Toshiba and Hitachi appliance repair support.",
});
export default function BrandsPage() {
  return (
    <main>
      <Section eyebrow="Brands" title="Major appliance brands we repair">
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {brands.map((brand) => (
            <Link
              className="rounded-lg border border-slate-200 p-6 text-center font-bold hover:border-brand-blue dark:border-slate-800"
              href={`/brands/${brand.slug}`}
              key={brand.slug}
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
