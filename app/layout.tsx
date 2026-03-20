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
  title: '#1 Peptide Protocols for Healing, Fat Loss & Anti-Aging',
  description:
    'Expert peptide protocols for BPC-157, TB-500, Semaglutide, Tirzepatide, GHK-Cu, Epithalon & more. Science-backed guides for healing, muscle growth, fat loss, and anti-aging. Sourced from Apollo Peptides.',
  keywords:
    'peptides, BPC-157, TB-500, Ipamorelin, CJC-1295, Semaglutide, Tirzepatide, healing peptides, anti-aging peptides, GH peptides, fat loss peptides, Apollo Peptides, peptide protocols 2026',
  openGraph: {
    title: '#1 Peptide Protocols for Healing, Fat Loss & Anti-Aging',
    description:
      'Expert peptide protocols for BPC-157, Semaglutide, Tirzepatide, GHK-Cu & more. Science-backed guides for healing, fat loss, muscle growth, and anti-aging.',
    type: 'website',
    url: 'https://peptidesclav.com',
    siteName: 'PeptidesClav',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Peptide Protocols for Healing, Fat Loss & Anti-Aging',
    description: 'Science-backed peptide guides and protocols for peak performance — healing, body composition, and longevity.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#08080f',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PeptidesClav',
              url: 'https://peptidesclav.com',
              description:
                'Science-backed peptide protocols for healing, performance, and longevity.',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
