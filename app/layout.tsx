import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
  metadataBase: new URL('https://www.peptidesclav.com'),
  title: {
    default: '#1 Peptide Protocols for Healing, Fat Loss & Anti-Aging | PeptidesClav',
    template: '%s | PeptidesClav',
  },
  description:
    'Expert peptide protocols for BPC-157, TB-500, Semaglutide & more. Science-backed guides for healing, fat loss, anti-aging, and muscle growth.',
  keywords: [
    'peptidesclav', 'peptide protocols 2026', 'BPC-157 protocol', 'peptide healing stack',
    'semaglutide peptide guide', 'GHK-Cu anti-aging', 'CJC-1295 ipamorelin', 'TB-500 recovery',
    'looksmaxxing peptides', 'retatrutide protocol',
  ],
  openGraph: {
    title: '#1 Peptide Protocols for Healing, Fat Loss & Anti-Aging',
    description:
      'Expert peptide protocols for BPC-157, Semaglutide, Tirzepatide, GHK-Cu & more. Science-backed guides for healing, fat loss, muscle growth, and anti-aging.',
    type: 'website',
    url: 'https://www.peptidesclav.com',
    siteName: 'PeptidesClav',
    images: [
      {
        url: 'https://www.peptidesclav.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PeptidesClav — Expert Peptide Protocols',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Peptide Protocols for Healing, Fat Loss & Anti-Aging',
    description: 'Science-backed peptide guides and protocols for peak performance — healing, body composition, and longevity.',
    images: ['https://www.peptidesclav.com/og-image.png'],
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
  themeColor: '#08080f',
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
              name: 'PeptidesClav',
              url: 'https://www.peptidesclav.com',
              logo: 'https://www.peptidesclav.com/logo.png',
              description:
                'Science-backed peptide protocols for healing, performance, and longevity.',
              sameAs: ['https://www.peptidesclav.com'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'PeptidesClav',
              url: 'https://www.peptidesclav.com',
              description: 'Evidence-based peptide protocols for looksmaxxing, healing, fat loss, and anti-aging.',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.peptidesclav.com/products?search={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZHH30DE344"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZHH30DE344');
          `}
        </Script>
        <Navbar />
        <main className="flex-1 pt-20 sm:pt-24">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
