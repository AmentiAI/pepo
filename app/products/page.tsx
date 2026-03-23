import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Buy Peptides Online | BPC-157, Semaglutide & More',
  description:
    'Browse 20+ peptides with full protocol guides — BPC-157, Semaglutide, Tirzepatide, Epithalon, GHK-Cu & more. Evidence-based dosing. Sourced from Apollo Peptides.',
  keywords:
    'buy peptides, BPC-157, Semaglutide, Tirzepatide, Epithalon, GHK-Cu, Ipamorelin, peptide catalog, Apollo Peptides, peptide protocols 2026',
  alternates: { canonical: 'https://www.peptidesclav.com/products' },
  openGraph: {
    title: 'Buy Peptides Online | BPC-157, Semaglutide & More',
    description:
      'Browse 20+ peptides with full protocol guides — healing, fat loss, anti-aging, and body composition. Sourced from Apollo Peptides.',
    type: 'website',
    url: 'https://www.peptidesclav.com/products',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Peptide Catalog — BPC-157, Semaglutide, Tirzepatide & More' }],
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

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <>
      {/* ── Hero header ──────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg pt-12 pb-10 sm:pt-20 sm:pb-16 border-b" style={{ borderColor: 'var(--border)' }}>
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-[-20%] left-[30%] w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
            Complete Peptide Catalog
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5">
            All <span className="gradient-text">Peptides</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Full protocol guides for every major peptide — dosing, timing,
            synergies, and expected results. Sourced from Apollo Peptides Sciences.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-600">
            <Link href="/" className="hover:text-violet-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-zinc-400">Products</span>
            {category && (
              <>
                <span>/</span>
                <span className="text-zinc-400">{category}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Category filter bar ───────────────────────────────── */}
      <section
        className="sticky top-0 z-20 border-b py-4"
        style={{
          background: 'rgba(8,8,15,0.95)',
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-zinc-600 font-medium mr-1 shrink-0">Filter:</span>
            {categories.map((cat) => {
              const isActive = cat.value === null ? !category : category === cat.value;
              const href =
                cat.value === null
                  ? '/products'
                  : `/products?category=${encodeURIComponent(cat.value)}`;

              return (
                <Link
                  key={cat.label}
                  href={href}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 border"
                  style={
                    isActive
                      ? {
                          background:
                            'linear-gradient(135deg, #7c3aed, #0891b2)',
                          color: '#fff',
                          borderColor: 'transparent',
                          boxShadow: '0 2px 12px rgba(124,58,237,0.35)',
                        }
                      : {
                          background: 'transparent',
                          color: '#a1a1b5',
                          borderColor: 'var(--border-bright)',
                        }
                  }
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Product grid ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Result count + active filter indicator */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-zinc-300 font-semibold text-lg">
              {filtered.length}{' '}
              <span className="text-zinc-500 font-normal">
                {filtered.length === 1 ? 'peptide' : 'peptides'}
                {category ? ` in ${category}` : ' total'}
              </span>
            </p>
          </div>

          {category && (
            <Link
              href="/products"
              className="text-sm text-zinc-500 hover:text-violet-400 transition-colors flex items-center gap-1"
            >
              Clear filter ×
            </Link>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                showAffiliateButton={true}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-20">
            <div
              className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-bright)',
              }}
            >
              🔬
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">No peptides found</h2>
            <p className="text-zinc-500 mb-6 max-w-sm mx-auto">
              No peptides match the selected category. Try a different filter or browse
              the full catalog.
            </p>
            <Link href="/products" className="btn-secondary">
              View All Peptides
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* Bottom CTA */}
        {filtered.length > 0 && (
          <div
            className="mt-10 sm:mt-16 rounded-2xl p-6 sm:p-10 text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(6,182,212,0.07) 100%)',
              border: '1px solid rgba(124,58,237,0.2)',
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Not sure where to start?
            </h3>
            <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
              Our expert stacks combine multiple peptides for synergistic effects.
              Browse pre-built protocols for healing, body composition, longevity, and more.
            </p>
            <Link href="/stacks" className="btn-primary">
              Browse Peptide Stacks
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/products" />
    </>
  );
}
