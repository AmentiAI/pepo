import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ExternalLink, ArrowLeft, Clock, DollarSign, Target, ArrowRight } from 'lucide-react'
import { stacks } from '@/lib/stacks'
import { products } from '@/lib/products'
import RelatedReading from '@/components/RelatedReading'

export async function generateStaticParams() {
  return stacks.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const stack = stacks.find((s) => s.id === slug)
  if (!stack) return { title: 'Stack Not Found' }
  const canonical = `https://www.peptidesclav.com/stacks/${stack.id}`
  return {
    title: stack.seoTitle,
    description: stack.shortDescription,
    keywords: `${stack.name}, peptide stack, peptide protocol, ${stack.tags.slice(0, 4).join(', ')}, Apollo Peptides`,
    alternates: { canonical },
    openGraph: {
      title: stack.seoTitle,
      description: stack.shortDescription,
      type: 'website',
      url: canonical,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: stack.name }],
    },
  }
}

function DifficultyBadge({ difficulty }: { difficulty: 'Beginner' | 'Intermediate' | 'Advanced' }) {
  if (difficulty === 'Beginner') {
    return <span className="badge badge-green">{difficulty}</span>
  }
  if (difficulty === 'Intermediate') {
    return <span className="badge badge-orange">{difficulty}</span>
  }
  return (
    <span
      className="badge"
      style={{
        background: 'rgba(239,68,68,0.1)',
        borderColor: 'rgba(239,68,68,0.28)',
        color: '#fca5a5',
      }}
    >
      {difficulty}
    </span>
  )
}

export default async function StackPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const stack = stacks.find((s) => s.id === slug)
  if (!stack) notFound()

  // Resolve full product data for each stack product entry
  const stackProductsResolved = stack.products.map((sp) => ({
    stackProduct: sp,
    product: products.find((p) => p.slug === sp.slug) ?? null,
  }))

  const AFFILIATE_URL = '/go/shop'

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.peptidesclav.com' },
      { '@type': 'ListItem', position: 2, name: 'Stacks', item: 'https://www.peptidesclav.com/stacks' },
      { '@type': 'ListItem', position: 3, name: stack.name, item: `https://www.peptidesclav.com/stacks/${stack.id}` },
    ],
  }

  return (
    <div className="min-h-screen" style={{ background: '#08080f' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Breadcrumb */}
      <div className="border-b" style={{ borderColor: '#1e1e35' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm" style={{ color: '#71717a' }}>
            <Link href="/" className="hover:text-violet-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/stacks" className="hover:text-violet-400 transition-colors">Stacks</Link>
            <span>/</span>
            <span style={{ color: '#a1a1b5' }}>{stack.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(124,58,237,0.13) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-14">
          <Link
            href="/stacks"
            className="btn-secondary mb-8 inline-flex text-xs py-2 px-3"
          >
            <ArrowLeft size={14} />
            All Stacks
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start gap-10">
            {/* Left: hero copy */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <DifficultyBadge difficulty={stack.difficulty} />
                {stack.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight">
                {stack.name}
              </h1>
              <p className="text-lg mb-6" style={{ color: '#a1a1b5' }}>
                {stack.tagline}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm" style={{ color: '#a1a1b5' }}>
                  <Target size={14} className="text-violet-400" />
                  <span className="font-medium text-white">Goal:</span>
                  <span>{stack.goal}</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#a1a1b5' }}>
                  <Clock size={14} className="text-cyan-400" />
                  <span className="font-medium text-white">Duration:</span>
                  <span>{stack.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#a1a1b5' }}>
                  <DollarSign size={14} className="text-violet-400" />
                  <span className="font-medium text-white">Cost:</span>
                  <span>{stack.cost}</span>
                </div>
              </div>
            </div>

            {/* Right: CTA card */}
            <div
              className="lg:w-72 rounded-2xl p-6 border flex-shrink-0"
              style={{
                background: '#0f0f1a',
                borderColor: '#2d2d50',
                boxShadow: '0 8px 40px rgba(124,58,237,0.12)',
              }}
            >
              {/* Product image collage */}
              {stackProductsResolved.some(({ product }) => product?.image.startsWith('http')) && (
                <div className="flex items-center justify-center gap-0 mb-5">
                  {stackProductsResolved
                    .filter(({ product }) => product?.image.startsWith('http'))
                    .slice(0, 3)
                    .map(({ product }, i) => (
                      <div
                        key={product!.slug}
                        className="rounded-xl overflow-hidden flex items-center justify-center"
                        style={{
                          width: 80,
                          height: 100,
                          background: '#0a0a14',
                          border: '1px solid #1e1e35',
                          marginLeft: i > 0 ? -20 : 0,
                          zIndex: i,
                          position: 'relative',
                        }}
                      >
                        <img
                          src={product!.image}
                          alt={product!.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                </div>
              )}

              <p className="text-sm font-semibold text-white mb-1">
                {stack.products.length} peptide{stack.products.length !== 1 ? 's' : ''} in this stack
              </p>
              <p className="text-xs mb-4" style={{ color: '#71717a' }}>
                {stack.cost} / month
              </p>
              <div className="glow-divider mb-4" />
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <ExternalLink size={14} />
                Shop These Peptides
              </a>
              <p className="text-center text-xs mt-3" style={{ color: '#52525b' }}>
                Via Apollo Peptide Sciences (affiliate)
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 space-y-16">

        {/* Overview */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">Stack Overview</h2>
          <div
            className="rounded-2xl border p-6 sm:p-8"
            style={{ background: '#0f0f1a', borderColor: '#1e1e35' }}
          >
            {stack.overview.split('\n\n').map((para, idx) => (
              <p
                key={idx}
                className="text-sm leading-relaxed mb-4 last:mb-0"
                style={{ color: '#a1a1b5' }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Products in this stack */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">
            Peptides in This Stack
          </h2>
          <div className="space-y-4">
            {stackProductsResolved.map(({ stackProduct, product }) => (
              <div
                key={stackProduct.slug}
                className="rounded-2xl border overflow-hidden"
                style={{ background: '#0f0f1a', borderColor: '#1e1e35' }}
              >
                {/* Card top accent */}
                <div className="h-1 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-60" />

                <div className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">

                    {/* Product image */}
                    {product?.image.startsWith('http') && (
                      <Link
                        href={`/products/${product.slug}`}
                        className="shrink-0 rounded-xl overflow-hidden flex items-center justify-center"
                        style={{ width: 120, height: 150, background: '#0a0a14', border: '1px solid #1e1e35' }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    )}

                    {/* Name + details */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {product && (
                          <span className="badge text-[10px]">{product.category}</span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {product ? product.name : stackProduct.slug.toUpperCase()}
                      </h3>
                      {product && (
                        <p className="text-sm mb-4" style={{ color: '#71717a' }}>
                          {product.shortDescription}
                        </p>
                      )}

                      {/* Dose / timing / notes grid */}
                      <div className="grid sm:grid-cols-3 gap-3">
                        <div
                          className="rounded-xl p-3 border"
                          style={{ background: 'rgba(124,58,237,0.06)', borderColor: '#2d2d50' }}
                        >
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-400 mb-1">Dose</p>
                          <p className="text-sm font-semibold text-white">{stackProduct.dose}</p>
                        </div>
                        <div
                          className="rounded-xl p-3 border"
                          style={{ background: 'rgba(6,182,212,0.06)', borderColor: '#2d2d50' }}
                        >
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 mb-1">Timing</p>
                          <p className="text-sm font-semibold text-white">{stackProduct.timing}</p>
                        </div>
                        {stackProduct.notes && (
                          <div
                            className="rounded-xl p-3 border"
                            style={{ background: 'rgba(255,255,255,0.03)', borderColor: '#2d2d50' }}
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#71717a' }}>Notes</p>
                            <p className="text-sm" style={{ color: '#a1a1b5' }}>{stackProduct.notes}</p>
                          </div>
                        )}
                      </div>

                      {product && (
                        <div className="mt-4">
                          <Link
                            href={`/products/${product.slug}`}
                            className="btn-secondary text-xs py-2 px-3 whitespace-nowrap"
                          >
                            Full Protocol Guide
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">Daily Schedule</h2>
          <div
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: '#2d2d50' }}
          >
            <div
              className="px-6 py-3 border-b"
              style={{ background: 'rgba(124,58,237,0.08)', borderColor: '#2d2d50' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                Protocol Schedule
              </p>
            </div>
            <div className="p-6" style={{ background: '#0f0f1a' }}>
              <pre
                className="whitespace-pre-wrap text-sm leading-relaxed font-mono"
                style={{ color: '#a1a1b5' }}
              >
                {stack.schedule}
              </pre>
            </div>
          </div>
        </section>

        {/* Expected Results */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">Expected Results</h2>
          <div className="space-y-3">
            {stack.expectedResults.map((result, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl p-4 border"
                style={{ background: '#0f0f1a', borderColor: '#1e1e35' }}
              >
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa' }}
                >
                  {idx + 1}
                </div>
                <div className="flex-1 flex items-start gap-3">
                  <div
                    className="mt-0.5 flex-shrink-0 rounded-full p-1"
                    style={{ background: 'rgba(124,58,237,0.15)' }}
                  >
                    <Check size={11} className="text-violet-400" />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#a1a1b5' }}>
                    {result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section>
          <div
            className="rounded-2xl border p-8 sm:p-12 text-center relative overflow-hidden"
            style={{ background: '#0f0f1a', borderColor: '#2d2d50' }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
                Start Your Protocol
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Shop These Peptides
              </h2>
              <p className="text-sm max-w-md mx-auto mb-8" style={{ color: '#a1a1b5' }}>
                Source every peptide in the {stack.name} from Apollo Peptide Sciences —
                research-grade purity, consistent dosing, trusted worldwide.
              </p>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-3"
              >
                <ExternalLink size={16} />
                Shop at Apollo Peptides
              </a>
            </div>
          </div>
        </section>

        <div className="glow-divider mx-6" />
        <RelatedReading pageKey={`/stacks/${stack.id}`} />
      </div>
    </div>
  )
}
