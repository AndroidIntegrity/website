import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "variable", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Android Integriy Alliance",
  description: "Google's rules shouldn't affect your apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
