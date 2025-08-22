"use client";

// React Query butuh "ditempatkan" di level tertinggi aplikasi.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {

  // lazy initialization (hanya dijalankan 1 kali dan tidak butuh setter)
  // fungsinya new QueryClient tidak buat ulang setiap kali komponen di render
  const [queryClient] = useState(() => new QueryClient()); 
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}