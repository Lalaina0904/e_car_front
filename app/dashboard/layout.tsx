"use client";

import AdminApp from "@/components/AdminApp";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminApp />
    </>
  );
}
