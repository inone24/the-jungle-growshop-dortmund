import * as React from "react";
import * as HC from "@radix-ui/react-hover-card";
import { cn } from "@/lib/cn";

export default function HoverCardIsland({ trigger, content }: { trigger: string; content: string }) {
  return (
    <HC.Root>
      <HC.Trigger className="underline decoration-dotted">{trigger}</HC.Trigger>
      <HC.Content align="center" sideOffset={4} className={cn("z-50 w-64 rounded-md border bg-black/85 text-white p-4 shadow-md outline-none")}>
        {content}
      </HC.Content>
    </HC.Root>
  );
}
