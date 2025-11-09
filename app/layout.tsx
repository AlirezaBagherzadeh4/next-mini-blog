import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from './shared/lib/react-query';
import { Header, Footer } from './views';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DogFactory',
  description:
    'A wonderland for dog lovers, where they can find articles and resources on various dog breeds, training tips, and health advice.',
  openGraph: {
    title: 'DogFactory',
    description:
      'A wonderland for dog lovers, where they can find articles and resources on various dog breeds, training tips, and health advice.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000',
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'DogFactory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DogFactory',
    description:
      'A wonderland for dog lovers, where they can find articles and resources on various dog breeds, training tips, and health advice.',
    images: ['/og-image.jpg'],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <Header />
          <main className="mt-[72px] flex h-fit w-full grow items-center justify-center">
            <div className="flex h-full w-full items-start justify-center">
              {children}
            </div>
          </main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
