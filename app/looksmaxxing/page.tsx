import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy Peptides for Looksmaxxing',
  description: 'Buy looksmaxxing peptides — GHK-Cu, GLP-1s, GH peptides, BPC-157, Epithalon and more.',
  alternates: { canonical: 'https://www.peptidesclav.com/looksmaxxing' },
  openGraph: {
    title: 'Buy Peptides for Looksmaxxing',
    description: 'Buy looksmaxxing peptides — GHK-Cu, GLP-1s, GH peptides, BPC-157, Epithalon and more.',
    type: 'website',
    url: 'https://www.peptidesclav.com/looksmaxxing',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy Peptides for Looksmaxxing' }],
  },
};

const looksmaxxingSlugs = [
  'ghk-cu',
  'semaglutide-10mg',
  'ipamorelin-cjc',
  'bpc-157',
  'epithalon',
  'igf-1-lr3',
  'snap-8',
  'nad-plus',
  'tb-500',
];

export default function LooksmaxxingPage() {
  const looksmaxxingProducts = looksmaxxingSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy Peptides for Looksmaxxing
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {looksmaxxingProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  );
}
