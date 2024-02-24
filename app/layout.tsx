import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.css';
import { ThemeProvider } from "@/components/providers/theme-providers";
import TopLoader from "@/components/providers/top-loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TailwindIndicator } from "@/components/providers/tailwind-indicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healthcare AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopLoader />
          <Navbar />
          {children}
          <Footer />
          <TailwindIndicator />
        </ThemeProvider>

      </body>
    </html>
  );
}
