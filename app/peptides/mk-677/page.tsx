import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Buy MK-677 (Ibutamoren)',
  description: 'Buy MK-677 (Ibutamoren) — growth hormone secretagogue.',
  alternates: { canonical: 'https://www.peptidesclav.com/peptides/mk-677' },
  openGraph: {
    title: 'Buy MK-677 (Ibutamoren)',
    description: 'Buy MK-677 (Ibutamoren) — growth hormone secretagogue.',
    type: 'website',
    url: 'https://www.peptidesclav.com/peptides/mk-677',
    siteName: 'PeptidesClav',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy MK-677' }],
  },
};

export default function Mk677Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
          Buy MK-677 (Ibutamoren)
        </h1>
        <Link href="/growth-hormone" className="btn-primary">
          Browse Growth Hormone Peptides
        </Link>
      </section>
    </div>
  );
}
