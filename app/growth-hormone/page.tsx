import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy Growth Hormone Peptides | CJC-1295, Ipamorelin, IGF-1 LR3',
  description: 'Buy GH peptides — CJC-1295, Ipamorelin, IGF-1 LR3, MK-677 and more.',
  alternates: { canonical: 'https://www.peptidesclav.com/growth-hormone' },
  openGraph: {
    title: 'Buy Growth Hormone Peptides | CJC-1295, Ipamorelin, IGF-1 LR3',
    description: 'Buy GH peptides — CJC-1295, Ipamorelin, IGF-1 LR3, MK-677 and more.',
    type: 'website',
    url: 'https://www.peptidesclav.com/growth-hormone',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy Growth Hormone Peptides' }],
  },
};

export default function GrowthHormonePage() {
  const ghProducts = products.filter((p) => p.category === 'Growth Hormone');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy Growth Hormone Peptides
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ghProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  );
}
