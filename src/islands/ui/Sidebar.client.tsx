import * as React from "react";
import { PanelLeft } from "lucide-react";
import { cn } from "@/lib/cn";
import { Sheet, SheetContent } from "./Sheet.client";

type SidebarContextValue = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openMobile: boolean;
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export function useSidebar() {
  const ctx = React.useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return ctx;
}

export interface SidebarProviderProps {
  defaultOpen?: boolean;
  children?: React.ReactNode;
}

export function SidebarProvider({ defaultOpen = true, children }: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [openMobile, setOpenMobile] = React.useState(false);

  const value = React.useMemo(
    () => ({ open, setOpen, openMobile, setOpenMobile }),
    [open, openMobile],
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { setOpen, openMobile, setOpenMobile } = useSidebar();

    const handleClick = React.useCallback(() => {
      if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
        setOpenMobile(!openMobile);
      } else {
        setOpen((v) => !v);
      }
    }, [openMobile, setOpen, setOpenMobile]);

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        <PanelLeft className="h-4 w-4" />
        <span className="sr-only">Sidebar ein-/ausblenden</span>
      </button>
    );
  },
);
SidebarTrigger.displayName = "SidebarTrigger";

export interface SidebarProps {
  side?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}

export function Sidebar({ side = "left", className, children }: SidebarProps) {
  const { open } = useSidebar();

  return (
    <aside
      data-side={side}
      className={cn(
        "hidden md:block fixed inset-y-0 z-20 w-64 border-white/10 bg-black/50 backdrop-blur transition-transform",
        side === "right" ? "right-0 left-auto border-l" : "left-0 border-r",
        !open && side === "left" && "md:-translate-x-64",
        !open && side === "right" && "md:translate-x-64",
        className,
      )}
    >
      <div className="h-full overflow-auto">{children}</div>
    </aside>
  );
}

export interface SidebarMobileProps {
  side?: "left" | "right";
  children?: React.ReactNode;
}

export function SidebarMobile({ side = "left", children }: SidebarMobileProps) {
  const { openMobile, setOpenMobile } = useSidebar();

  return (
    <Sheet open={openMobile} onOpenChange={setOpenMobile}>
      <SheetContent
        side={side}
        className={cn(
          "w-64 border-white/10 bg-black/90 p-0",
          side === "right" ? "border-l" : "border-r",
        )}
      >
        <div className="h-full overflow-auto p-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
}
