import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy the Best Peptide for Muscle Growth',
  description: 'Buy the best peptides for muscle growth — IGF-1 LR3, Ipamorelin, CJC-1295 and more.',
  alternates: { canonical: 'https://www.peptidesclav.com/best-peptide-for-muscle-growth' },
  openGraph: {
    title: 'Buy the Best Peptide for Muscle Growth',
    description: 'Buy the best peptides for muscle growth — IGF-1 LR3, Ipamorelin, CJC-1295 and more.',
    type: 'website',
    url: 'https://www.peptidesclav.com/best-peptide-for-muscle-growth',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy the Best Peptide for Muscle Growth' }],
  },
};

export default function BestPeptideMusclePage() {
  const muscleProducts = products.filter((p) => p.category === 'Growth Hormone');
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy the Best Peptide for Muscle Growth
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {muscleProducts.map((p) => (
            <ProductCard key={p.slug} product={p} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  );
}
