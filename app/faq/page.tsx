import { FAQList } from "@/components/FAQList";
import { JsonLd, Section } from "@/components/ui";
import { faqs } from "@/lib/content";
import { faqSchema, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Appliance Repair FAQs", description: "Frequently asked questions about refrigerator, washing machine, microwave, dishwasher and dryer repair, pricing, warranty and booking." });
export default function FAQPage() { return <main><JsonLd data={faqSchema(faqs)} /><Section eyebrow="FAQ" title="Appliance repair questions answered"><FAQList items={faqs} /></Section></main>; }