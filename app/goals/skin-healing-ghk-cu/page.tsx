import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy GHK-Cu for Skin Healing',
  description: 'Buy GHK-Cu for skin healing and regeneration.',
  alternates: { canonical: 'https://www.peptidesclav.com/goals/skin-healing-ghk-cu' },
  openGraph: {
    title: 'Buy GHK-Cu for Skin Healing',
    description: 'Buy GHK-Cu for skin healing and regeneration.',
    type: 'website',
    url: 'https://www.peptidesclav.com/goals/skin-healing-ghk-cu',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy GHK-Cu for Skin Healing' }],
  },
};

export default function SkinHealingPage() {
  const related = products.filter((p) => p.slug.startsWith('ghk-cu'));
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy GHK-Cu for Skin Healing
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
