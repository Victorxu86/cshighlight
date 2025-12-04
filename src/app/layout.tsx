import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "CS Highlights as Sonic Memory",
  description: "An archival exploration of Counter-Strike highlights as cultural memory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased overflow-x-hidden selection:bg-white/20`}>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center w-full">
            {children}
        </main>
      </body>
    </html>
  );
}

