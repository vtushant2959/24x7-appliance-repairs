import { FAQList } from "@/components/FAQList";
import { JsonLd, Section } from "@/components/ui";
import { faqs } from "@/lib/data";
import { faqSchema, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Appliance Repair FAQs", description: "100 frequently asked questions about refrigerator, washing machine, AC, microwave, dishwasher and dryer repair." });
export default function FAQPage() { return <main><JsonLd data={faqSchema(faqs)} /><Section eyebrow="FAQ" title="100 appliance repair questions answered"><FAQList items={faqs} /></Section></main>; }