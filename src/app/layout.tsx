import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import SimpleBgToggle from '@/components/SimpleBgToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EcoMetrics - Sustainable Solutions',
  description: 'Track and reduce your carbon footprint with our innovative eco-friendly solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        <SimpleBgToggle>
          <Providers>
            <div className="fade-in">
              <Navbar />
              {children}
              <Footer />
            </div>
          </Providers>
        </SimpleBgToggle>
      </body>
    </html>
  );
}
