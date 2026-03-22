import React from "react"
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider'


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tia Pao y Hans | Sabor Casero",
  description:
    "Restaurante de comida casera chilena. Empanadas, completos, cazuela y mucho mas. Haz tu pedido online y recibe en tu hogar.",
};

export const viewport: Viewport = {
  themeColor: "#b52640",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html
  lang="es"
  suppressHydrationWarning
  className={`${playfair.variable} ${inter.variable}`}
>
     <body className="font-sans antialiased">
  <ThemeProvider>
    {children}
    <Toaster richColors position="top-center" />
  </ThemeProvider>
</body>

    </html>
  );
}
