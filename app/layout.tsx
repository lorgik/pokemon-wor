import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Metadata } from 'next';
import { Jost } from 'next/font/google';

import './globals.scss';

const jost = Jost({ preload: false });

export const metadata: Metadata = {
  title: 'Pokemon World',
  description: 'Pokemon App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div className="wrapper">
          <div className="content">
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
