import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { ChatLauncherButton } from "@/components/ai/ChatLauncherButton";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/ui";
import { localBusinessSchema, organizationSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Doorstep Appliance Repair`,
  description:
    "Same day doorstep refrigerator, washing machine, microwave, dryer and dishwasher repair across Delhi NCR.",
  applicationName: site.name,
  manifest: "/manifest.json",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/sitemap?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18315353596"
          strategy="beforeInteractive"
        />
        <Script id="google-tag" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18315353596');`}
        </Script>
      </head>
      <body id="top" className="font-sans">
        <Analytics />
        <Header />
        {children}
        <Footer />
        <FloatingCta />
        <ChatLauncherButton />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
