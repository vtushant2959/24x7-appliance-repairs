"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  className,
}: {
  items: { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className={cn("mt-8 grid gap-3", className)}
    >
      {items.map((item, index) => (
        <AccordionPrimitive.Item
          key={`${index}-${item.question}`}
          value={`item-${index}`}
          className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="focus-ring group flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-brand-navy dark:text-white">
              {item.question}
              <ChevronDown
                size={18}
                className="shrink-0 text-brand-blue transition-transform duration-200 group-data-[state=open]:rotate-180"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden px-5 text-slate-600 data-[state=open]:pb-5 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up dark:text-slate-300">
            <p className="leading-7">{item.answer}</p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
