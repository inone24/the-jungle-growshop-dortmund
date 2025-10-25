import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

type AspectRatioProps = {
  ratio?: number;
  children: React.ReactNode;
};

export default function AspectRatioIsland({ ratio = 16 / 9, children }: AspectRatioProps) {
  return <AspectRatioPrimitive.Root ratio={ratio}>{children}</AspectRatioPrimitive.Root>;
}
