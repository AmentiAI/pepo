import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Buy Peptides Online | BPC-157, Semaglutide & More',
  description: 'Buy peptides online — BPC-157, Semaglutide, Tirzepatide, Epithalon, GHK-Cu and more.',
  alternates: { canonical: 'https://www.peptidesclav.com/products' },
  openGraph: {
    title: 'Buy Peptides Online | BPC-157, Semaglutide & More',
    description: 'Buy peptides online — BPC-157, Semaglutide, Tirzepatide, Epithalon, GHK-Cu and more.',
    type: 'website',
    url: 'https://www.peptidesclav.com/products',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy Peptides Online' }],
  },
};

const categories = [
  { label: 'All Products', value: null },
  { label: 'Healing & Recovery', value: 'Healing & Recovery' },
  { label: 'Growth Hormone', value: 'Growth Hormone' },
  { label: 'Anti-Aging & Longevity', value: 'Anti-Aging & Longevity' },
  { label: 'Anti-Aging & Skin', value: 'Anti-Aging & Skin' },
  { label: 'Body Composition', value: 'Body Composition' },
  { label: 'Supplies', value: 'Supplies' },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const filtered = category ? products.filter((p) => p.category === category) : products;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
          Buy Peptides Online
        </h1>

        <div className="flex items-center gap-2 overflow-x-auto mb-8" style={{ scrollbarWidth: 'none' }}>
          {categories.map((cat) => {
            const isActive = cat.value === null ? !category : category === cat.value;
            const href = cat.value === null ? '/products' : `/products?category=${encodeURIComponent(cat.value)}`;
            return (
              <Link
                key={cat.label}
                href={href}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border shrink-0"
                style={
                  isActive
                    ? { background: '#eab308', color: '#0a0a0a', borderColor: 'transparent' }
                    : { background: 'transparent', color: '#374151', borderColor: 'var(--border-bright)' }
                }
              >
                {cat.label}
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  );
}
