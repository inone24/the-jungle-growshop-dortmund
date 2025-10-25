import * as React from "react";
import * as A from "@radix-ui/react-avatar";
import { cn } from "@/lib/cn";

export function Avatar({ className, children, ...props }: any) {
  return (
    <A.Root
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    >
      {children}
    </A.Root>
  );
}

export const AvatarImage = React.forwardRef<HTMLImageElement, any>(
  ({ className, ...props }, ref) => (
    <A.Image
      ref={ref}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  )
);
AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = React.forwardRef<HTMLSpanElement, any>(
  ({ className, ...props }, ref) => (
    <A.Fallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-white/10 text-white/90",
        className
      )}
      {...props}
    />
  )
);
AvatarFallback.displayName = "AvatarFallback";
