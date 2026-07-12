import Image from "next/image";
import Link from "next/link";
import { areas, brands, services } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={56}
              height={56}
              className="h-14 w-14"
            />
          </div>
          <p className="mt-4 text-sm font-bold text-brand-navy dark:text-white">
            {site.name}
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Premium doorstep repair and maintenance for refrigerators, washing
            machines, microwaves, dryers and dishwashers across Delhi NCR.
          </p>
          <p className="mt-4 text-sm font-semibold">{site.hours}</p>
        </div>
        <FooterCol
          title="Services"
          items={services.map((s) => [s.name, `/services/${s.slug}`])}
        />
        <FooterCol
          title="Brands"
          items={brands.map((b) => [b.name, `/brands/${b.slug}`])}
        />
        <FooterCol
          title="Locations"
          items={areas.map((a) => [a.name, `/service-areas/${a.slug}`])}
        />
        <FooterCol
          title="Company"
          items={[
            ["About", "/about"],
            ["Problem Library", "/problems"],
            ["Error Codes", "/error-codes"],
            ["FAQ", "/faq"],
            ["Contact", "/contact"],
            ["Privacy", "/privacy-policy"],
            ["Terms", "/terms"],
            ["Disclaimer", "/disclaimer"],
            ["Sitemap", "/sitemap"],
          ]}
        />
      </div>
      <div className="container-page flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 py-5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
        <span>© 2026 {site.name}. All rights reserved.</span>
        <span>{brands.length} major brands covered</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[][] }) {
  return (
    <div>
      <h3 className="font-bold text-brand-navy dark:text-white">{title}</h3>
      <div className="mt-4 grid gap-2">
        {items.map(([label, href]) => (
          <Link
            className="text-sm text-slate-600 hover:text-brand-blue dark:text-slate-300"
            key={href}
            href={href}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
