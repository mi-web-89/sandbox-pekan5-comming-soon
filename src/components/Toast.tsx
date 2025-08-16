"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type ToastType = "success" | "error" | "info" | "warning";

const typeStyles: Record<ToastType, string> = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-blue-600",
  warning: "bg-yellow-500 text-black",
};

interface ToastData {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastPorvider");
  return ctx;
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToast] = useState<ToastData[]>([]);

  const showToast = (message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToast((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToast((prev) => prev.filter((t) => t.id != id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 space-y-2">
        {toasts.map((toast) => (
          <div key={toast.id} className={`px-4 py-2 rounded shadow-lg text-white ${typeStyles[toast.type]}`}>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
