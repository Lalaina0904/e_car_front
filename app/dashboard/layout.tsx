"use client";

import AdminApp from "@/components/AdminApp";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    
      <AdminApp />
       <Toaster />
    </>
  );
}
