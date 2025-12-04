import './globals.css';

export const metadata = {
  title: 'CS Highlights',
  description: 'Sonic Remains',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

