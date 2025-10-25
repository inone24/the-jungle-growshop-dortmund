import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

function clamp(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

export default function ProgressIsland({ value = 0 }: { value?: number }) {
  const safeValue = clamp(value);
  const offset = 100 - safeValue;

  return (
    <ProgressPrimitive.Root className="progress-root" value={safeValue} max={100}>
      <ProgressPrimitive.Indicator
        className="progress-indicator"
        style={{ transform: `translateX(-${offset}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
