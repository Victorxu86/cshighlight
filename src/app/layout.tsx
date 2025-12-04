import { Inter, Oswald, Rajdhani } from 'next/font/google';
import './globals.css';

// Primary UI Font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Heavy Impact Font for "Counter Strike"
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

// Tech/Futuristic Font for UI Elements
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-tech',
  display: 'swap',
});

export const metadata = {
  title: 'SONIC REMAINS | CS Archive',
  description: 'An acoustic archaeology of Counter-Strike.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${rajdhani.variable}`}>
      <body className="bg-[#050507] text-white selection:bg-[#de9b35] selection:text-black">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
