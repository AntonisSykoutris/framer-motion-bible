import { ReactNode } from 'react';
import NextUIProvider from '@/context/NextUIProvider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Antonis | Framer Motion Bible',
  description: 'This is the bible of framer motion.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className='!scroll-smooth overflow-x-hidden'
      suppressHydrationWarning
    >
      <meta
        name='viewport'
        content='user-scalable=no, width=device-width, initial-scale=1.0'
      />
      ;
      <body className={`${inter.className}`}>
        <NextUIProvider>
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
