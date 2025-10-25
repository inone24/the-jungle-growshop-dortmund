import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type Item = { value: string; title: string; content: string };

export default function AccordionIsland({ items = [] as Item[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.value}
          value={item.value}
          className="border-b border-white/10"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              className={cn(
                "flex flex-1 items-center justify-between py-4 text-left text-white hover:text-white/90",
                "[&[data-state=open]>svg]:rotate-180"
              )}
            >
              {item.title}
              <ChevronDown
                className="h-4 w-4 shrink-0 text-white/60 transition-transform duration-200"
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden text-white/80 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="pb-4">{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
