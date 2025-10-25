import * as React from "react";
import { useToast } from "./use-toast";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose
} from "./ToastPrimitives.client";

export default function ToasterIsland() {
  const { toasts } = useToast();
  const activeToasts = React.useMemo(() => toasts.filter((toast) => toast.open), [toasts]);

  return (
    <ToastProvider>
      {activeToasts.map(({ id, title, description, action, variant, onOpenChange }) => (
        <Toast key={id} variant={variant} role="status">
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose onClick={() => onOpenChange(false)} />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
