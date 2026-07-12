import Link from "next/link";
import { Section } from "@/components/ui";
import { areas, brands, services, problems, errorCodes, combos } from "@/lib/content";
import { articles } from "@/lib/content/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "HTML Sitemap",
  description: "Browse all important pages on the 24x7 Appliance Repairs website.",
});

export default function SitemapPage() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Problem Library", href: "/problems" },
    { label: "Error Code Knowledge Base", href: "/error-codes" },
    { label: "Popular Repairs", href: "/repair" },
    ...services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
    ...areas.map((a) => ({ label: a.name, href: `/service-areas/${a.slug}` })),
    ...brands.map((b) => ({ label: b.name, href: `/brands/${b.slug}` })),
    ...problems.map((p) => ({ label: p.name, href: `/problems/${p.slug}` })),
    ...errorCodes.map((e) => ({
      label: `${e.brandSlug.toUpperCase()} ${e.code}`,
      href: `/error-codes/${e.slug}`,
    })),
    ...combos.map((c) => ({
      label: `${c.brandSlug} ${c.serviceSlug} ${c.areaSlug}`,
      href: `/repair/${c.brandSlug}/${c.serviceSlug}/${c.areaSlug}`,
    })),
    ...articles.map((a) => ({ label: a.title, href: `/blog/${a.slug}` })),
  ];
  return (
    <main>
      <Section eyebrow="Sitemap" title="Website sitemap">
        <div className="mt-8 grid gap-2 md:grid-cols-3">
          {links.map((link) => (
            <Link
              className="rounded-md border border-slate-200 p-3 hover:border-brand-blue dark:border-slate-800"
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
