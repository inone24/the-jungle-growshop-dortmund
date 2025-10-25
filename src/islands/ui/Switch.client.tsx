import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/cn";

type SwitchIslandProps = {
  name: string;
  defaultChecked?: boolean;
  className?: string;
};

export default function SwitchIsland({ name, defaultChecked = false, className }: SwitchIslandProps) {
  const [checked, setChecked] = React.useState(defaultChecked);
  const hiddenInputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    setChecked(defaultChecked);
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = defaultChecked ? "on" : "";
    }
  }, [defaultChecked]);

  const handleCheckedChange = React.useCallback(
    (next: boolean) => {
      setChecked(next);
      if (hiddenInputRef.current) {
        hiddenInputRef.current.value = next ? "on" : "";
      }
    },
    [],
  );

  return (
    <>
      <SwitchPrimitive.Root
        className={cn(
          "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm data-[state=checked]:bg-white data-[state=unchecked]:bg-white/20",
          className,
        )}
        checked={checked}
        onCheckedChange={handleCheckedChange}
      >
        <SwitchPrimitive.Thumb className="pointer-events-none block h-4 w-4 rounded-full bg-black shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" />
      </SwitchPrimitive.Root>
      <input ref={hiddenInputRef} type="hidden" name={name} value={checked ? "on" : ""} />
    </>
  );
}
