import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Buy PT-141 (Bremelanotide)',
  description: 'Buy PT-141 (Bremelanotide) — peptide for libido and sexual health.',
  alternates: { canonical: 'https://www.peptidesclav.com/peptides/pt-141' },
  openGraph: {
    title: 'Buy PT-141 (Bremelanotide)',
    description: 'Buy PT-141 (Bremelanotide) — peptide for libido and sexual health.',
    type: 'website',
    url: 'https://www.peptidesclav.com/peptides/pt-141',
    siteName: 'PeptidesClav',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy PT-141' }],
  },
};

export default function Pt141Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
          Buy PT-141 (Bremelanotide)
        </h1>
        <Link href="/products" className="btn-primary">
          Browse All Peptides
        </Link>
      </section>
    </div>
  );
}
