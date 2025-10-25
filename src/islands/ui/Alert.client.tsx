import * as React from "react";
import { cn } from "@/lib/cn";

type AlertProps = {
  variant?: "default" | "destructive";
  className?: string;
  title?: string;
  children?: React.ReactNode;
};

export function Alert({ variant = "default", className = "", title, children }: AlertProps) {
  const variants =
    variant === "destructive"
      ? "border-red-500/50 text-red-400"
      : "border-white/20 text-white";

  return (
    <div role="alert" className={cn("ui-glass border px-4 py-3 text-sm", variants, className)}>
      {title && (
        <h5 className="mb-1 font-medium leading-none tracking-tight text-white">{title}</h5>
      )}
      <div className="text-white/80">{children}</div>
    </div>
  );
}
