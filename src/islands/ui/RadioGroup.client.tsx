import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/lib/cn";

type RadioGroupRef = React.ElementRef<typeof RadioGroupPrimitive.Root>;
type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;

export const RadioGroup = React.forwardRef<RadioGroupRef, RadioGroupProps>(
  ({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Root ref={ref} className={cn("grid gap-2", className)} {...props} />
  )
);
RadioGroup.displayName = "RadioGroup";

type RadioGroupItemRef = React.ElementRef<typeof RadioGroupPrimitive.Item>;
type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

export const RadioGroupItem = React.forwardRef<RadioGroupItemRef, RadioGroupItemProps>(
  ({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-white text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3.5 w-3.5 fill-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
);
RadioGroupItem.displayName = "RadioGroupItem";
