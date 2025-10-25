import * as React from "react";
import * as DM from "@radix-ui/react-dropdown-menu";
import { ChevronRight, Check, Circle } from "lucide-react";
import { cn } from "@/lib/cn";

export type Item = { label: string; href?: string; onClick?: () => void; children?: Item[]; role?: "item"|"checkbox"|"radio"; checked?: boolean; value?: string };

export default function DropdownMenuIsland({ items, label }: { items: Item[]; label: string }) {
  return (
    <DM.Root>
      <DM.Trigger className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white">
        {label}<ChevronRight className="w-4 h-4" />
      </DM.Trigger>
      <DM.Portal>
        <DM.Content sideOffset={4} className={cn(
          "z-50 min-w-[10rem] overflow-hidden rounded-md border bg-black/80 p-1 text-white shadow-md",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
        )}>
          {items.map((it, i) => {
            if (it.children?.length) {
              return (
                <DM.Sub key={i}>
                  <DM.SubTrigger className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/10">
                    {it.label}<ChevronRight className="ml-auto w-4 h-4" />
                  </DM.SubTrigger>
                  <DM.SubContent className="min-w-[10rem] rounded-md border bg-black/80 p-1 text-white shadow-lg">
                    {it.children.map((c, j) => (
                      <DM.Item key={j} className="px-2 py-1.5 rounded hover:bg-white/10">
                        {c.href ? <a href={c.href}>{c.label}</a> : c.label}
                      </DM.Item>
                    ))}
                  </DM.SubContent>
                </DM.Sub>
              );
            }
            if (it.role === "checkbox") {
              return (
                <DM.CheckboxItem key={i} checked={!!it.checked} className="relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-white/10">
                  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    <DM.ItemIndicator><Check className="h-4 w-4"/></DM.ItemIndicator>
                  </span>
                  {it.label}
                </DM.CheckboxItem>
              );
            }
            if (it.role === "radio") {
              return (
                <DM.RadioItem key={i} value={it.value ?? it.label} className="relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-white/10">
                  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    <DM.ItemIndicator><Circle className="h-2 w-2 fill-current" /></DM.ItemIndicator>
                  </span>
                  {it.label}
                </DM.RadioItem>
              );
            }
            return (
              <DM.Item key={i} className="px-2 py-1.5 rounded hover:bg-white/10">
                {it.href ? <a href={it.href}>{it.label}</a> : it.label}
              </DM.Item>
            );
          })}
        </DM.Content>
      </DM.Portal>
    </DM.Root>
  );
}
