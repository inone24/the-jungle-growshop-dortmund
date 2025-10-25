import * as React from "react";
import * as Panels from "react-resizable-panels";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/cn";

export const ResizablePanelGroup = ({ className, ...props }: any) => (
  <Panels.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
);
export const ResizablePanel = Panels.Panel;
export const ResizableHandle = ({ withHandle, className, ...props }: any) => (
  <Panels.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-white/20 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
      className
    )}
    {...props}
  >
    {withHandle ? (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-white/30">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    ) : null}
  </Panels.PanelResizeHandle>
);
