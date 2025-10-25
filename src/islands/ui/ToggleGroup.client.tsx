import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { toggleVariants } from "./Toggle.client";

type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
  size?: VariantProps<typeof toggleVariants>["size"];
};

const ToggleGroupContext = React.createContext<{
  size: VariantProps<typeof toggleVariants>["size"];
}>({ size: "default" });

export const ToggleGroup = React.forwardRef<
  HTMLDivElement,
  ToggleGroupProps
>(({ className, size = "default", children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center gap-1", className)} {...props}>
    <ToggleGroupContext.Provider value={{ size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

type ToggleGroupItemProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>;

export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ className, ...props }, ref) => {
    const { size } = React.useContext(ToggleGroupContext);
    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(toggleVariants({ size }), className)}
        {...props}
      />
    );
  }
);

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
