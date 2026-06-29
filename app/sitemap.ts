import type { MetadataRoute } from "next";
import { areas, articles, brands, services } from "@/lib/data";
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
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/sitemap",
  ];
  const dynamicRoutes = [
    ...services.map((s) => `/services/${s.slug}`),
    ...areas.map((a) => `/service-areas/${a.slug}`),
    ...brands.map((b) => `/brands/${b.slug}`),
    ...articles.map((a) => `/blog/${a.slug}`),
  ];
  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.75,
  }));
}
