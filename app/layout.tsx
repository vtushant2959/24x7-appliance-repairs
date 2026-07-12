import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { JsonLd } from "@/components/ui";
import { localBusinessSchema } from "@/lib/seo";
import { site } from "@/lib/site";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { metadataBase: new URL(site.url), title: `${site.name} | Doorstep Appliance Repair`, description: "Same day doorstep refrigerator, washing machine, AC, microwave, dryer and dishwasher repair across Delhi NCR.", applicationName: site.name, manifest: "/manifest.json", icons: { icon: "/favicon.svg" } };
export default function RootLayout({ children }: { children: React.ReactNode }) { const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url, potentialAction: { "@type": "SearchAction", target: `${site.url}/sitemap?search={search_term_string}`, "query-input": "required name=search_term_string" } }; const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, telephone: site.phonePrimary, email: site.email }; return <html lang="en-IN" className={inter.variable}><body id="top" className="font-sans"><Header />{children}<Footer /><FloatingCta /><JsonLd data={localBusinessSchema()} /><JsonLd data={websiteSchema} /><JsonLd data={organizationSchema} /></body></html>; }