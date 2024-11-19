import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Toaster } from "sonner";
import Provider from "@/components/provider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bonewire",
  description: "An ecommerce application that products made off of kente . We sell ghana made fabrics, bags , accessories, foot wear, purse , wristbands and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      <main>
        <Toaster 
        richColors
        position="top-center"
        className="text-lg capitalize"
        />
        
          {children}
        
      </main>   
      </body>
    </html>
  );
}
