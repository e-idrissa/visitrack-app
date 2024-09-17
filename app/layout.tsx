import type { Metadata } from "next";
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs'
import { poppins } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "VisiTrack",
  description: "A user-friendly web app for efficient visitor tracking and management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} bg-white`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
