import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: { absolute: 'Buy Ipamorelin + CJC-1295' },
  description: 'Buy Ipamorelin and CJC-1295 — HPLC tested, COA verified.',
  alternates: { canonical: 'https://www.peptidesclav.com/peptides/ipamorelin-cjc' },
  openGraph: {
    title: 'Buy Ipamorelin + CJC-1295',
    description: 'Buy Ipamorelin and CJC-1295 — HPLC tested, COA verified.',
    type: 'website',
    url: 'https://www.peptidesclav.com/peptides/ipamorelin-cjc',
    siteName: 'PeptidesClav',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy Ipamorelin + CJC-1295' }],
  },
};

export default function IpamorelinCjcPage() {
  const relatedProducts = products.filter(
    (p) => p.slug.includes('ipamorelin') || p.slug.includes('cjc-1295'),
  );
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy Ipamorelin + CJC-1295
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
