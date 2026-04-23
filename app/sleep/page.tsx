import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy Peptides for Sleep | Ipamorelin & CJC-1295',
  description: 'Buy peptides for sleep — Ipamorelin, CJC-1295, Epithalon and NAD+.',
  alternates: { canonical: 'https://www.peptidesclav.com/sleep' },
  openGraph: {
    title: 'Buy Peptides for Sleep | Ipamorelin & CJC-1295',
    description: 'Buy peptides for sleep — Ipamorelin, CJC-1295, Epithalon and NAD+.',
    type: 'website',
    url: 'https://www.peptidesclav.com/sleep',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy Peptides for Sleep' }],
  },
};

export default function SleepPage() {
  const sleepProducts = products.filter(
    (p) =>
      p.tags?.includes('GH Peptide') ||
      p.slug === 'ipamorelin-cjc' ||
      p.slug === 'nad-plus' ||
      p.slug === 'epithalon',
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy Peptides for Sleep
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sleepProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  );
}
