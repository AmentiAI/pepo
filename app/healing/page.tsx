import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy Healing & Recovery Peptides | BPC-157, TB-500',
  description: 'Buy healing and recovery peptides — BPC-157, TB-500 and related repair compounds.',
  alternates: { canonical: 'https://www.peptidesclav.com/healing' },
  openGraph: {
    title: 'Buy Healing & Recovery Peptides | BPC-157, TB-500',
    description: 'Buy healing and recovery peptides — BPC-157, TB-500 and related repair compounds.',
    type: 'website',
    url: 'https://www.peptidesclav.com/healing',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy Healing & Recovery Peptides' }],
  },
};

export default function HealingPage() {
  const healingProducts = products.filter((p) => p.category === 'Healing & Recovery');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy Healing & Recovery Peptides
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {healingProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  );
}
