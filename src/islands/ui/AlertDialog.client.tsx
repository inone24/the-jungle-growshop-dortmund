import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/cn";

export function AlertDialogRoot(props: any) {
  return <AlertDialogPrimitive.Root {...props} />;
}

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export function AlertDialogOverlay(props: any) {
  return <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80" {...props} />;
}

export const AlertDialogContent = React.forwardRef<HTMLDivElement, any>(
  ({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Portal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 ui-popover p-6 sm:rounded-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPrimitive.Portal>
  )
);
AlertDialogContent.displayName = "AlertDialogContent";

export function AlertDialogHeader(props: any) {
  return <div className="flex flex-col space-y-2 text-center sm:text-left" {...props} />;
}

export function AlertDialogFooter(props: any) {
  return <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" {...props} />;
}

export const AlertDialogTitle = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className="text-lg font-semibold" {...props} />
));
AlertDialogTitle.displayName = "AlertDialogTitle";

export const AlertDialogDescription = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className="text-sm text-white/70" {...props} />
));
AlertDialogDescription.displayName = "AlertDialogDescription";

export const AlertDialogAction = React.forwardRef<HTMLButtonElement, any>((props, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className="rounded-md bg-white px-3 py-2 text-black"
    {...props}
  />
));
AlertDialogAction.displayName = "AlertDialogAction";

export const AlertDialogCancel = React.forwardRef<HTMLButtonElement, any>((props, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className="rounded-md border border-white/20 px-3 py-2 text-white hover:bg-white/10"
    {...props}
  />
));
AlertDialogCancel.displayName = "AlertDialogCancel";
