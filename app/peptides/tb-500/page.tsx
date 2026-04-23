import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: { absolute: 'Buy TB-500 (Thymosin Beta-4)' },
  description: 'Buy TB-500 (Thymosin Beta-4) — HPLC tested, COA verified.',
  alternates: { canonical: 'https://www.peptidesclav.com/peptides/tb-500' },
  openGraph: {
    title: 'Buy TB-500 (Thymosin Beta-4)',
    description: 'Buy TB-500 (Thymosin Beta-4) — HPLC tested, COA verified.',
    type: 'website',
    url: 'https://www.peptidesclav.com/peptides/tb-500',
    siteName: 'PeptidesClav',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy TB-500' }],
  },
};

export default function Tb500Page() {
  const relatedProducts = products.filter((p) => p.slug.startsWith('tb-500'));
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy TB-500 (Thymosin Beta-4)
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatedProducts.map((p) => (
            <ProductCard key={p.slug} product={p} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  );
}
