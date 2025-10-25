import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  type?: "item" | "checkbox" | "radio";
  checked?: boolean;
  submenu?: { label: string; href?: string }[];
};

type Menu = {
  label: string;
  items: MenuItem[];
};

type Props = {
  menus: Menu[];
};

export default function MenubarIsland({ menus }: Props) {
  return (
    <MenubarPrimitive.Root className="flex h-9 items-center space-x-1 rounded-md border bg-black/30 p-1 text-white shadow-sm">
      {menus.map((menu, menuIndex) => (
        <MenubarPrimitive.Menu key={menuIndex}>
          <MenubarPrimitive.Trigger className="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none hover:bg-white/10">
            {menu.label}
          </MenubarPrimitive.Trigger>
          <MenubarPrimitive.Portal>
            <MenubarPrimitive.Content align="start" className="z-50 min-w-[12rem] overflow-hidden rounded-md border ui-popover p-1 shadow-md">
              {menu.items.map((item, itemIndex) => {
                if (item.submenu?.length) {
                  return (
                    <MenubarPrimitive.Sub key={itemIndex}>
                      <MenubarPrimitive.SubTrigger className="flex items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-white/10">
                        {item.label}
                        <ChevronRight className="ml-auto h-4 w-4" />
                      </MenubarPrimitive.SubTrigger>
                      <MenubarPrimitive.SubContent className="z-50 min-w-[10rem] overflow-hidden rounded-md border ui-popover p-1 shadow-lg">
                        {item.submenu.map((sub, subIndex) => (
                          <MenubarPrimitive.Item key={subIndex} className="rounded px-2 py-1.5 hover:bg-white/10">
                            {sub.href ? <a href={sub.href}>{sub.label}</a> : sub.label}
                          </MenubarPrimitive.Item>
                        ))}
                      </MenubarPrimitive.SubContent>
                    </MenubarPrimitive.Sub>
                  );
                }

                if (item.type === "checkbox") {
                  return (
                    <MenubarPrimitive.CheckboxItem
                      key={itemIndex}
                      checked={!!item.checked}
                      className="relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-white/10"
                    >
                      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                        <MenubarPrimitive.ItemIndicator>
                          <Check className="h-4 w-4" />
                        </MenubarPrimitive.ItemIndicator>
                      </span>
                      {item.label}
                    </MenubarPrimitive.CheckboxItem>
                  );
                }

                if (item.type === "radio") {
                  return (
                    <MenubarPrimitive.RadioItem
                      key={itemIndex}
                      value={item.label}
                      className="relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-white/10"
                    >
                      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                        <MenubarPrimitive.ItemIndicator>
                          <Circle className="h-4 w-4 fill-current" />
                        </MenubarPrimitive.ItemIndicator>
                      </span>
                      {item.label}
                    </MenubarPrimitive.RadioItem>
                  );
                }

                return (
                  <MenubarPrimitive.Item key={itemIndex} className="rounded px-2 py-1.5 hover:bg-white/10">
                    {item.href ? <a href={item.href}>{item.label}</a> : item.label}
                  </MenubarPrimitive.Item>
                );
              })}
              <MenubarPrimitive.Arrow />
            </MenubarPrimitive.Content>
          </MenubarPrimitive.Portal>
        </MenubarPrimitive.Menu>
      ))}
    </MenubarPrimitive.Root>
  );
}
