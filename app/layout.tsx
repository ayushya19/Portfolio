import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ayushya Rao | Sr. Product Engineer',
  description: 'Portfolio showcasing immersive technology, VR safety training, AI media systems, 3D reconstruction, and quantum computing education projects.',
  keywords: ['Portfolio', 'VR', 'Immersive Technology', 'Product Engineer', 'AI/ML', 'Quantum Computing'],
  authors: [{ name: 'Ayushya Rao' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Ayushya Rao | Sr. Product Engineer',
    description: 'Immersive technology, AI media systems, simulation, and human-centered product engineering.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <div className="noise" />
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
