import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/cn";

export const Separator = React.forwardRef<any, any>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        orientation === "horizontal"
          ? "h-px w-full bg-white/20"
          : "h-full w-px bg-white/20",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = "Separator";
