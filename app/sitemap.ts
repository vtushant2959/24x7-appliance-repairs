import type { MetadataRoute } from "next";
import { areas, brands, services, problems, errorCodes, combos } from "@/lib/content";
import { articles } from "@/lib/content/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/service-areas",
    "/brands",
    "/blog",
    "/faq",
    "/contact",
    "/problems",
    "/error-codes",
    "/repair",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/sitemap",
  ];
  const coreRoutes = [
    ...services.map((s) => `/services/${s.slug}`),
    ...areas.map((a) => `/service-areas/${a.slug}`),
    ...brands.map((b) => `/brands/${b.slug}`),
    ...problems.map((p) => `/problems/${p.slug}`),
    ...errorCodes.map((e) => `/error-codes/${e.slug}`),
    ...articles.map((a) => `/blog/${a.slug}`),
  ];
  const comboRoutes = combos.map(
    (c) => `/repair/${c.brandSlug}/${c.serviceSlug}/${c.areaSlug}`,
  );
  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
      priority: route === "" ? 1 : 0.9,
    })),
    ...coreRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...comboRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
