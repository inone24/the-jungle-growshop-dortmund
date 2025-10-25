import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/cn";

type SliderIslandProps = {
  name: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  className?: string;
};

export default function SliderIsland({
  name,
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  className,
}: SliderIslandProps) {
  const [value, setValue] = React.useState<number>(defaultValue);
  const hiddenInputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    setValue(defaultValue);
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = String(defaultValue);
    }
  }, [defaultValue]);

  const handleValueChange = React.useCallback(
    (vals: number[]) => {
      const next = vals[0] ?? min;
      setValue(next);
      if (hiddenInputRef.current) {
        hiddenInputRef.current.value = String(next);
      }
    },
    [min],
  );

  return (
    <>
      <SliderPrimitive.Root
        className={cn("relative flex w-full touch-none select-none items-center", className)}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={handleValueChange}
      >
        <SliderPrimitive.Track className="slider-track">
          <SliderPrimitive.Range className="slider-range" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="slider-thumb" aria-label={name} />
      </SliderPrimitive.Root>
      <input ref={hiddenInputRef} type="hidden" name={name} value={value} />
    </>
  );
}
