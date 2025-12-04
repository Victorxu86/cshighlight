import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroller from '@/components/SmoothScroller';
import CustomCursor from '@/components/CustomCursor';

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
      <body className={`${inter.className} min-h-screen bg-[#030304] text-slate-200 antialiased selection:bg-cyan-500/30`}>
        <SmoothScroller>
          <div className="bg-noise" />
          <CustomCursor />
          <Navbar />
          <main className="pt-16 min-h-[calc(100vh-100px)] relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
