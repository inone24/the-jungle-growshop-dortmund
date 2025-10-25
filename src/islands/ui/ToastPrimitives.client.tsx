import * as React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg",
  {
    variants: {
      variant: {
        default: "border-white/20 bg-black/85 text-white",
        destructive: "border-red-600/60 bg-red-600 text-white"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export type ToastProps = React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof toastVariants>;

export const ToastProvider: React.FC<React.ComponentPropsWithoutRef<"div">> = ({ children, ...props }) => (
  <div
    role="region"
    aria-live="polite"
    className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-3 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
    {...props}
  >
    {children}
  </div>
);

export const ToastViewport: React.FC = () => null;

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
));

Toast.displayName = "Toast";

export const ToastTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm font-semibold text-white", className)} {...props} />
  )
);

ToastTitle.displayName = "ToastTitle";

export const ToastDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-white/80", className)} {...props} />
  )
);

ToastDescription.displayName = "ToastDescription";

export const ToastClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn("absolute right-2 top-2 rounded-md p-1 text-white/70 transition hover:text-white", className)}
      aria-label="Benachrichtigung schließen"
      {...props}
    >
      <X className="h-4 w-4" />
    </button>
  )
);

ToastClose.displayName = "ToastClose";
