import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy BPC-157 for Gut Health',
  description: 'Buy BPC-157 for gut health and GI repair.',
  alternates: { canonical: 'https://www.peptidesclav.com/healing/gut-health-bpc-157' },
  openGraph: {
    title: 'Buy BPC-157 for Gut Health',
    description: 'Buy BPC-157 for gut health and GI repair.',
    type: 'website',
    url: 'https://www.peptidesclav.com/healing/gut-health-bpc-157',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy BPC-157 for Gut Health' }],
  },
};

export default function GutHealthBpcPage() {
  const related = products.filter((p) => p.slug.startsWith('bpc-157'));
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy BPC-157 for Gut Health
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  );
}
