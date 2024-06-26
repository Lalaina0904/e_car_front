import type { Metadata } from "next";
import "./globals.scss";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "shop'coozy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
