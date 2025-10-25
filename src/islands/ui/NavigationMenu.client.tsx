import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type NavigationItem = { label: string; href?: string };
type NavigationGroup = { label: string; items: NavigationItem[] };

type Props = {
  groups: NavigationGroup[];
};

export default function NavigationMenuIsland({ groups }: Props) {
  return (
    <NavigationMenuPrimitive.Root className="relative z-10 flex max-w-max flex-1 items-center justify-center">
      <NavigationMenuPrimitive.List className="group flex flex-1 list-none items-center justify-center space-x-1">
        {groups.map((group, index) => (
          <NavigationMenuPrimitive.Item key={index}>
            <NavigationMenuPrimitive.Trigger
              className={cn(
                "group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-white/10 focus:bg-white/10"
              )}
            >
              {group.label}
              <ChevronDown className="ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" />
            </NavigationMenuPrimitive.Trigger>
            <NavigationMenuPrimitive.Content className="md:absolute md:w-auto left-0 top-0 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out">
              <div className="ui-popover rounded-md border p-2">
                {group.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.href ?? "#"}
                    className="block rounded px-3 py-2 hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </NavigationMenuPrimitive.Content>
          </NavigationMenuPrimitive.Item>
        ))}
      </NavigationMenuPrimitive.List>
      <NavigationMenuPrimitive.Viewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-black/90 text-white shadow md:w-[var(--radix-navigation-menu-viewport-width)]" />
    </NavigationMenuPrimitive.Root>
  );
}
