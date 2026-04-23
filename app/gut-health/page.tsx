import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy BPC-157 for Gut Health | Leaky Gut, IBS & GERD',
  description: 'Buy BPC-157 and gut-health peptides — systemic healing and GI repair compounds.',
  alternates: { canonical: 'https://www.peptidesclav.com/gut-health' },
  openGraph: {
    title: 'Buy BPC-157 for Gut Health | Leaky Gut, IBS & GERD',
    description: 'Buy BPC-157 and gut-health peptides — systemic healing and GI repair compounds.',
    type: 'website',
    url: 'https://www.peptidesclav.com/gut-health',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy BPC-157 for Gut Health' }],
  },
};

export default function GutHealthPage() {
  const gutProducts = products.filter(
    (p) => p.tags?.includes('Gut Health') || p.slug === 'bpc-157' || p.slug === 'nad-plus',
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy Peptides for Gut Health
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gutProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  );
}
