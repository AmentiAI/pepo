import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sharktides.com'),
  title: {
    default: '#1 Peptide Protocols for Healing, Fat Loss & Anti-Aging | Shark Tides',
    template: '%s | Shark Tides',
  },
  description:
    'Expert peptide protocols for BPC-157, TB-500, Semaglutide & more. Science-backed guides for healing, fat loss, anti-aging, and muscle growth.',
  keywords: [
    'sharktides', 'peptide protocols 2026', 'BPC-157 protocol', 'peptide healing stack',
    'semaglutide peptide guide', 'GHK-Cu anti-aging', 'CJC-1295 ipamorelin', 'TB-500 recovery',
    'looksmaxxing peptides', 'retatrutide protocol',
  ],
  openGraph: {
    title: '#1 Peptide Protocols for Healing, Fat Loss & Anti-Aging',
    description:
      'Expert peptide protocols for BPC-157, Semaglutide, Tirzepatide, GHK-Cu & more. Science-backed guides for healing, fat loss, muscle growth, and anti-aging.',
    type: 'website',
    url: 'https://sharktides.com',
    siteName: 'Shark Tides',
    images: [
      {
        url: 'https://sharktides.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shark Tides — Expert Peptide Protocols',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Peptide Protocols for Healing, Fat Loss & Anti-Aging',
    description: 'Science-backed peptide guides and protocols for peak performance — healing, body composition, and longevity.',
    images: ['https://sharktides.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#04111f',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Shark Tides',
              url: 'https://sharktides.com',
              logo: 'https://sharktides.com/logo.png',
              description:
                'Science-backed peptide protocols for healing, performance, and longevity.',
              sameAs: ['https://sharktides.com'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Shark Tides',
              url: 'https://sharktides.com',
              description: 'Evidence-based peptide protocols for looksmaxxing, healing, fat loss, and anti-aging.',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://sharktides.com/products?search={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20 sm:pt-24">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
