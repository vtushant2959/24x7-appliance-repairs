import { Accordion } from "@/components/ui/Accordion";

export function FAQList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return <Accordion items={items} />;
}
