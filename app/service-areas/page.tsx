import Link from "next/link";
import { Section } from "@/components/ui";
import { areas } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Service Areas", description: "Doorstep appliance repair in Faridabad, South Delhi, Noida, Greater Noida, Gurugram, Ghaziabad, Ballabhgarh and Palwal." });
export default function AreasPage() { return <main><Section eyebrow="Locations" title="Appliance repair service areas"><div className="mt-8 grid gap-5 md:grid-cols-4">{areas.map((area) => <Link className="rounded-lg border border-slate-200 p-6 font-bold hover:border-brand-blue dark:border-slate-800" href={`/service-areas/${area.slug}`} key={area.slug}>{area.name}</Link>)}</div></Section></main>; }