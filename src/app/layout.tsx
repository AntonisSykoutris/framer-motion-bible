import { ReactNode } from 'react';
import NextUIProvider from '@/context/NextUIProvider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

// import Header from '../components/Header';
// import Footer from '../components/Footer';

import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Antonis | Personal Portfolio',
  description: 'Antonis is a full-stack developer with 2 years of experience.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='!scroll-smooth overflow-x-hidden' suppressHydrationWarning>
      <meta name='viewport' content='user-scalable=no, width=device-width, initial-scale=1.0' />;
      <body className={`${inter.className}`}>
        <NextUIProvider>
          {/* <Header /> */}
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
