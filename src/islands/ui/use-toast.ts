import * as React from "react";

type ToastVariant = "default" | "destructive";

type ToastActionElement = React.ReactNode;

export type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: ToastVariant;
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (open: boolean) => void;
};

export type ToastProps = Omit<ToasterToast, "id" | "open" | "onOpenChange">;

type ToastState = {
  toasts: ToasterToast[];
};

type ToastAction =
  | { type: "ADD_TOAST"; toast: ToasterToast }
  | { type: "UPDATE_TOAST"; toast: Partial<ToasterToast> & { id: string } }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string };

const TOAST_LIMIT = 20;
const TOAST_REMOVE_DELAY = 10000;

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
// eslint-disable-next-line no-unused-vars
const listeners = new Set<(state: ToastState) => void>();

let memoryState: ToastState = { toasts: [] };
let count = 0;

function dispatch(action: ToastAction) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

function reducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.toast.id ? { ...toast, ...action.toast } : toast
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      const shouldRemoveAll = toastId === undefined;

      if (shouldRemoveAll) {
        state.toasts.forEach((toast) => addToRemoveQueue(toast.id));
      } else {
        addToRemoveQueue(toastId);
      }

      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === toastId || shouldRemoveAll ? { ...toast, open: false } : toast
        )
      };
    }
    case "REMOVE_TOAST": {
      if (action.toastId) {
        const timeout = toastTimeouts.get(action.toastId);
        if (timeout) {
          clearTimeout(timeout);
          toastTimeouts.delete(action.toastId);
        }
        return {
          ...state,
          toasts: state.toasts.filter((toast) => toast.id !== action.toastId)
        };
      }

      toastTimeouts.forEach((timeout) => clearTimeout(timeout));
      toastTimeouts.clear();
      return {
        ...state,
        toasts: []
      };
    }
    default:
      return state;
  }
}

function genId() {
  count = count + 1;
  return count.toString();
}

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    dispatch({ type: "REMOVE_TOAST", toastId });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
}

export function toast(props: ToastProps) {
  const id = genId();

  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  const update = (newProps: Partial<ToastProps>) =>
    dispatch({ type: "UPDATE_TOAST", toast: { ...newProps, id } });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) {
          dismiss();
        }
      }
    }
  });

  return { id, dismiss, update };
}

export function dismissToast(toastId?: string) {
  dispatch({ type: "DISMISS_TOAST", toastId });
}

export function useToast() {
  const [state, setState] = React.useState<ToastState>(memoryState);

  React.useEffect(() => {
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: dismissToast
  };
}
