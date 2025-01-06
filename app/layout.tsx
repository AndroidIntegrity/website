import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Transition from "@/app/template";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  weight: "variable", 
  variable: "--font-inter",
  subsets: ["latin"]
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <Transition>{children}</Transition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
