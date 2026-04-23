import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Buy Peptides for Cognitive Enhancement',
  description: 'Buy peptides for cognitive enhancement.',
  alternates: { canonical: 'https://www.peptidesclav.com/goals/cognitive-enhancement' },
  openGraph: {
    title: 'Buy Peptides for Cognitive Enhancement',
    description: 'Buy peptides for cognitive enhancement.',
    type: 'website',
    url: 'https://www.peptidesclav.com/goals/cognitive-enhancement',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy Peptides for Cognitive Enhancement' }],
  },
};

export default function CognitiveEnhancementPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
          Buy Peptides for Cognitive Enhancement
        </h1>
        <Link href="/products" className="btn-primary">
          Browse All Peptides
        </Link>
      </section>
    </div>
  );
}
