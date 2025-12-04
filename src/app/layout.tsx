import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CS Highlights as Sonic Remains',
  description: 'A digital exhibition exploring Counter-Strike commentary and graffiti as sonic remains.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#050509] text-slate-200 antialiased`}>
        <Navbar />
        <main className="pt-16 min-h-[calc(100vh-100px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
