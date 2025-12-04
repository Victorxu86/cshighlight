import { DM_Sans, Cinzel } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroller from '@/components/SmoothScroller';
import CustomCursor from '@/components/CustomCursor';

// Modern Sans-Serif for UI
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'] 
});

// Elegant Serif/Display for Headings (giving that "Exhibition" feel)
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '700', '900']
});

export const metadata = {
  title: 'SONIC REMAINS | CS Esports Exhibition',
  description: 'A digital exhibition exploring the sonic afterlife of Counter-Strike.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cinzel.variable}`}>
      <body className="bg-[#050505] text-white antialiased selection:bg-cyan-500 selection:text-white overflow-x-hidden">
        <SmoothScroller>
          <CustomCursor />
          <Navbar />
          <main className="relative min-h-screen w-full overflow-hidden">
             {/* Global Mesh Background - subtle underlay */}
             <div className="fixed inset-0 z-[-1] opacity-30">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
             </div>
            {children}
          </main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
