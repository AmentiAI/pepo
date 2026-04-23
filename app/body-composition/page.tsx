import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy Body Composition Peptides | GH, Fat Loss & Muscle',
  description: 'Buy body composition peptides — GH peptides, GLP-1s and muscle-building compounds.',
  alternates: { canonical: 'https://www.peptidesclav.com/body-composition' },
  openGraph: {
    title: 'Buy Body Composition Peptides | GH, Fat Loss & Muscle',
    description: 'Buy body composition peptides — GH peptides, GLP-1s and muscle-building compounds.',
    type: 'website',
    url: 'https://www.peptidesclav.com/body-composition',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy Body Composition Peptides' }],
  },
};

export default function BodyCompositionPage() {
  const bodyProducts = products.filter((p) =>
    p.category === 'Body Composition' || p.category === 'Growth Hormone'
  );
  const seen = new Set<string>();
  const uniqueProducts = bodyProducts.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy Body Composition Peptides
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  );
}
