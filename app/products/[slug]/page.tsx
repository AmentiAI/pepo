import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Star, Check, ExternalLink, ArrowLeft, ShieldCheck, FlaskConical, Zap, TrendingUp, Leaf, Sparkles, Pill } from 'lucide-react'
import { products } from '@/lib/products'
import { weeklyTimelines } from '@/lib/weeklyTimelines'
import ProductCard from '@/components/ProductCard'
import RelatedReading from '@/components/RelatedReading'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: 'Product Not Found' }
  const canonical = `https://www.peptidesclav.com/products/${product.slug}`
  const ogImage = product.image.startsWith('http')
    ? [{ url: product.image, width: 800, height: 800, alt: product.name }]
    : [{ url: '/og-image.png', width: 1200, height: 630, alt: product.name }]
  return {
    title: { absolute: product.seoTitle },
    description: product.shortDescription,
    keywords: `${product.name}, ${product.category}, peptide protocol, ${product.tags.slice(0, 4).join(', ')}`,
    alternates: { canonical },
    openGraph: {
      title: product.seoTitle,
      description: product.shortDescription,
      images: ogImage,
      type: 'website',
      url: canonical,
      siteName: 'PeptidesClav',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seoTitle,
      description: product.shortDescription.slice(0, 155),
    },
  }
}

// ── Per-category theme ──────────────────────────────────────────
type CategoryTheme = {
  glow: string
  badge: string
  badgeText: string
  badgeBorder: string
  accent: string
  accentLight: string
  icon: React.ElementType
  label: string
  heroLayout: 'default' | 'centered-weight-loss' | 'longevity'
  benefitsHeading: string
  protocolHeading: string
  heroStats: { value: string; label: string }[]
}

const categoryThemes: Record<string, CategoryTheme> = {
  'Healing & Recovery': {
    glow: 'rgba(124,58,237,0.18)',
    badge: 'rgba(124,58,237,0.12)',
    badgeText: '#c4b5fd',
    badgeBorder: 'rgba(124,58,237,0.3)',
    accent: '#7c3aed',
    accentLight: '#a78bfa',
    icon: ShieldCheck,
    label: 'Healing & Recovery',
    heroLayout: 'default',
    benefitsHeading: 'Healing & Repair Benefits',
    protocolHeading: 'Dosing & Protocol Guide',
    heroStats: [
      { value: '2×', label: 'Faster tissue repair' },
      { value: '6–10wk', label: 'Standard protocol' },
      { value: '5★', label: 'Evidence rating' },
    ],
  },
  'Growth Hormone': {
    glow: 'rgba(6,182,212,0.18)',
    badge: 'rgba(6,182,212,0.1)',
    badgeText: '#67e8f9',
    badgeBorder: 'rgba(6,182,212,0.3)',
    accent: '#0891b2',
    accentLight: '#22d3ee',
    icon: TrendingUp,
    label: 'Growth Hormone Optimizer',
    heroLayout: 'default',
    benefitsHeading: 'GH Optimization Benefits',
    protocolHeading: 'Dosing & Cycle Guide',
    heroStats: [
      { value: '3–5×', label: 'Natural GH pulse' },
      { value: '12–24wk', label: 'Optimal cycle' },
      { value: '0', label: 'Receptor desensitization' },
    ],
  },
  'Anti-Aging & Longevity': {
    glow: 'rgba(245,158,11,0.18)',
    badge: 'rgba(245,158,11,0.1)',
    badgeText: '#fcd34d',
    badgeBorder: 'rgba(245,158,11,0.3)',
    accent: '#d97706',
    accentLight: '#fbbf24',
    icon: Leaf,
    label: 'Longevity & Cellular Health',
    heroLayout: 'longevity',
    benefitsHeading: 'Longevity & Anti-Aging Benefits',
    protocolHeading: 'Anti-Aging Protocol Guide',
    heroStats: [
      { value: '27–36%', label: 'Mortality reduction*' },
      { value: '33%', label: 'Telomere lengthening' },
      { value: '15yr', label: 'Human follow-up data' },
    ],
  },
  'Anti-Aging & Skin': {
    glow: 'rgba(236,72,153,0.18)',
    badge: 'rgba(236,72,153,0.1)',
    badgeText: '#f9a8d4',
    badgeBorder: 'rgba(236,72,153,0.3)',
    accent: '#db2777',
    accentLight: '#f472b6',
    icon: Sparkles,
    label: 'Anti-Aging & Skin Rejuvenation',
    heroLayout: 'default',
    benefitsHeading: 'Skin & Anti-Aging Benefits',
    protocolHeading: 'Topical & Injection Protocol',
    heroStats: [
      { value: '30%', label: 'Gene reset in fibroblasts' },
      { value: '8wk', label: 'Visible skin improvement' },
      { value: 'Collagen', label: 'Synthesis restored' },
    ],
  },
  'Body Composition': {
    glow: 'rgba(16,185,129,0.18)',
    badge: 'rgba(16,185,129,0.1)',
    badgeText: '#6ee7b7',
    badgeBorder: 'rgba(16,185,129,0.3)',
    accent: '#059669',
    accentLight: '#34d399',
    icon: Zap,
    label: 'Metabolic & Weight Loss',
    heroLayout: 'centered-weight-loss',
    benefitsHeading: 'Metabolic & Weight Loss Results',
    protocolHeading: 'Weight Loss Protocol Guide',
    heroStats: [
      { value: '14.9%', label: 'Avg body weight reduction' },
      { value: '68wk', label: 'STEP-1 trial duration' },
      { value: 'FDA', label: 'Reviewed mechanism' },
    ],
  },
  Supplies: {
    glow: 'rgba(100,116,139,0.18)',
    badge: 'rgba(100,116,139,0.1)',
    badgeText: '#94a3b8',
    badgeBorder: 'rgba(100,116,139,0.3)',
    accent: '#64748b',
    accentLight: '#94a3b8',
    icon: FlaskConical,
    label: 'Protocol Supply',
    heroLayout: 'default',
    benefitsHeading: 'Key Features',
    protocolHeading: 'Usage Instructions',
    heroStats: [
      { value: '10ml', label: 'Standard vial size' },
      { value: 'Sterile', label: 'Bacteriostatic grade' },
      { value: '2yr', label: 'Shelf life sealed' },
    ],
  },
}

const defaultTheme: CategoryTheme = {
  glow: 'rgba(124,58,237,0.18)',
  badge: 'rgba(124,58,237,0.12)',
  badgeText: '#c4b5fd',
  badgeBorder: 'rgba(124,58,237,0.3)',
  accent: '#7c3aed',
  accentLight: '#a78bfa',
  icon: Pill,
  label: 'Peptide Protocol',
  heroLayout: 'default',
  benefitsHeading: 'Evidence-Backed Benefits',
  protocolHeading: 'Dosing & Protocol Guide',
  heroStats: [
    { value: 'High', label: 'Purity verified' },
    { value: 'COA', label: 'Batch certified' },
    { value: 'US', label: 'US supplier' },
  ],
}

// ── Markdown-ish renderer ───────────────────────────────────────
function renderDescription(text: string, accentColor: string) {
  return text.split('\n\n').map((block, idx) => {
    // Section heading  **Title**
    if (/^\*\*[^*\n]+\*\*$/.test(block.trim())) {
      return (
        <h3
          key={idx}
          className="text-base font-bold mt-8 mb-3"
          style={{ color: accentColor }}
        >
          {block.replace(/\*\*/g, '')}
        </h3>
      )
    }
    // Bullet list
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter((l) => l.startsWith('- '))
      return (
        <ul key={idx} className="mb-4 space-y-1.5 pl-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1b5' }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accentColor }} />
              {item.replace(/^- /, '')}
            </li>
          ))}
        </ul>
      )
    }
    // Paragraph with inline bold
    const parts = block.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={idx} className="text-sm leading-relaxed mb-4" style={{ color: '#a1a1b5' }}>
        {parts.map((part, i) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={i} style={{ color: '#e4e4f0', fontWeight: 600 }}>
              {part.replace(/\*\*/g, '')}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    )
  })
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const theme = categoryThemes[product.category] ?? defaultTheme
  const CategoryIcon = theme.icon

  const relatedProducts = product.synergies
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, 3) as typeof products

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: product.image.startsWith('http') ? product.image : undefined,
    brand: { '@type': 'Brand', name: 'PeptidesClav' },
    offers: {
      '@type': 'Offer',
      price: product.price.toFixed(2),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://www.peptidesclav.com/products/${product.slug}`,
      seller: { '@type': 'Organization', name: 'PeptidesClav' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.researchRating,
      bestRating: 5,
      ratingCount: 1,
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.peptidesclav.com' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.peptidesclav.com/products' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://www.peptidesclav.com/products/${product.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen" style={{ background: '#08080f' }}>

        {/* Breadcrumb */}
        <div className="border-b" style={{ borderColor: '#1e1e35' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <nav className="flex items-center gap-2 text-sm" style={{ color: '#71717a' }}>
              <Link href="/" className="hover:text-violet-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-violet-400 transition-colors">Products</Link>
              <span>/</span>
              <span style={{ color: '#a1a1b5' }}>{product.name}</span>
            </nav>
          </div>
        </div>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${theme.glow} 0%, transparent 70%)`,
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14">
            <Link href="/products" className="btn-secondary mb-8 inline-flex text-xs py-2 px-3">
              <ArrowLeft size={14} /> Back to Products
            </Link>

            {theme.heroLayout === 'centered-weight-loss' ? (
              /* ── Centered weight-loss layout ── */
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: theme.badge, color: theme.badgeText, border: `1px solid ${theme.badgeBorder}` }}
                  >
                    <CategoryIcon size={12} />
                    {theme.label}
                  </span>
                  {product.researchRating === 5 && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold"
                      style={{ background: 'rgba(250,204,21,0.08)', color: '#fbbf24', border: '1px solid rgba(250,204,21,0.2)' }}>
                      ★ Clinical Trial Validated
                    </span>
                  )}
                </div>

                {product.image.startsWith('http') && (
                  <div className="mx-auto mb-6 rounded-2xl overflow-hidden flex items-center justify-center"
                    style={{ width: 200, height: 260, background: '#0a0a14', border: `1px solid ${theme.badgeBorder}`, boxShadow: `0 0 60px ${theme.glow}`, margin: '0 auto 1.5rem' }}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4" />
                  </div>
                )}

                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight">{product.name}</h1>
                <p className="text-xl font-semibold mb-6" style={{ color: theme.accentLight }}>{product.tagline}</p>

                {/* Clinical stats bar */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-2xl border"
                  style={{ background: 'rgba(16,185,129,0.05)', borderColor: theme.badgeBorder }}>
                  {theme.heroStats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-2xl font-black" style={{ color: theme.accentLight }}>{s.value}</p>
                      <p className="text-xs" style={{ color: '#71717a' }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: '#a1a1b5' }}>{product.shortDescription}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {product.tags.map((tag) => <span key={tag} className="tag-chip">{tag}</span>)}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href={`/go/${product.slug}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})`, boxShadow: `0 4px 20px ${theme.glow}` }}>
                    <ExternalLink size={15} /> Get {product.name} — ${product.price.toFixed(2)}
                  </a>
                </div>
              </div>
            ) : theme.heroLayout === 'longevity' ? (
              /* ── Longevity layout — left text + right image/stats ── */
              <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: theme.badge, color: theme.badgeText, border: `1px solid ${theme.badgeBorder}` }}>
                      <CategoryIcon size={12} />
                      {theme.label}
                    </span>
                    {product.researchRating === 5 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold"
                        style={{ background: 'rgba(250,204,21,0.08)', color: '#fbbf24', border: '1px solid rgba(250,204,21,0.2)' }}>
                        ★ 15-Year Human Data
                      </span>
                    )}
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight">{product.name}</h2>
                  <p className="text-lg font-medium mb-5" style={{ color: theme.accentLight }}>{product.tagline}</p>
                  <div className="flex items-center gap-2 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} style={i < product.researchRating ? { color: theme.accentLight, fill: theme.accentLight } : { color: '#3f3f46' }} />
                    ))}
                    <span className="text-sm font-semibold" style={{ color: theme.accentLight }}>{product.researchRating}/5</span>
                    <span className="text-xs" style={{ color: '#71717a' }}>Evidence Rating</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-6 max-w-lg" style={{ color: '#a1a1b5' }}>{product.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">{product.tags.map((tag) => <span key={tag} className="tag-chip">{tag}</span>)}</div>
                </div>

                <div className="space-y-4">
                  {product.image.startsWith('http') && (
                    <div className="rounded-2xl overflow-hidden flex items-center justify-center"
                      style={{ background: '#0a0a14', border: `1px solid ${theme.badgeBorder}`, minHeight: '240px', boxShadow: `0 0 40px ${theme.glow}` }}>
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain p-6" style={{ maxHeight: '240px' }} />
                    </div>
                  )}
                  {/* Longevity key stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {theme.heroStats.map((s) => (
                      <div key={s.label} className="rounded-xl p-3 text-center border"
                        style={{ background: theme.badge, borderColor: theme.badgeBorder }}>
                        <p className="text-lg font-black leading-none mb-1" style={{ color: theme.accentLight }}>{s.value}</p>
                        <p className="text-[10px] leading-tight" style={{ color: '#71717a' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <a href={`/go/${product.slug}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})` }}>
                    <ExternalLink size={14} /> Get {product.name} — ${product.price.toFixed(2)}
                  </a>
                </div>
              </div>
            ) : (
              /* ── Default layout (healing, GH, skin, supplies) ── */
              <div className="grid lg:grid-cols-[1fr_280px_300px] gap-8 items-start">
                {/* Col 1: identity */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: theme.badge, color: theme.badgeText, border: `1px solid ${theme.badgeBorder}` }}>
                      <CategoryIcon size={12} />
                      {theme.label}
                    </span>
                    {product.researchRating === 5 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold"
                        style={{ background: 'rgba(250,204,21,0.08)', color: '#fbbf24', border: '1px solid rgba(250,204,21,0.2)' }}>
                        ★ Top Evidence Rating
                      </span>
                    )}
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight">{product.name}</h2>
                  <p className="text-lg font-medium mb-4" style={{ color: theme.accentLight }}>{product.tagline}</p>

                  {/* Category-specific stats */}
                  <div className="flex gap-6 mb-5">
                    {theme.heroStats.map((s) => (
                      <div key={s.label}>
                        <p className="text-xl font-black" style={{ color: theme.accentLight }}>{s.value}</p>
                        <p className="text-xs" style={{ color: '#71717a' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} style={i < product.researchRating ? { color: theme.accentLight, fill: theme.accentLight } : { color: '#3f3f46' }} />
                    ))}
                    <span className="text-sm font-semibold" style={{ color: theme.accentLight }}>{product.researchRating}/5</span>
                    <span className="text-xs" style={{ color: '#71717a' }}>Evidence Rating</span>
                  </div>

                  <p className="text-sm leading-relaxed mb-6 max-w-lg" style={{ color: '#a1a1b5' }}>{product.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">{product.tags.map((tag) => <span key={tag} className="tag-chip">{tag}</span>)}</div>
                </div>

                {/* Col 2: product image */}
                <div className="rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ background: '#0a0a14', border: `1px solid ${theme.badgeBorder}`, minHeight: '260px', boxShadow: `0 0 40px ${theme.glow}` }}>
                  {product.image.startsWith('http') ? (
                    <img src={product.image} alt={product.name}
                      className="w-full h-full object-contain p-6" style={{ maxHeight: '260px' }} />
                  ) : (
                    <div className="flex flex-col items-center gap-3 p-8 opacity-50">
                      <FlaskConical size={48} style={{ color: theme.accentLight }} />
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: theme.accentLight }}>{product.name}</p>
                    </div>
                  )}
                </div>

                {/* Col 3: price & CTA */}
                <div className="rounded-2xl p-6 flex-shrink-0"
                  style={{ background: '#0f0f1a', border: `1px solid ${theme.badgeBorder}`, boxShadow: `0 8px 40px ${theme.glow}` }}>
                  <p className="text-xs mb-1" style={{ color: '#71717a' }}>Research Grade · HPLC Tested</p>
                  <p className="text-4xl font-extrabold text-white mb-1">${product.price.toFixed(2)}</p>
                  <p className="text-xs mb-4" style={{ color: '#52525b' }}>HPLC tested · COA included</p>
                  <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)` }} />
                  <a href={`/go/${product.slug}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-sm text-white mb-3 transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})`, boxShadow: `0 4px 20px ${theme.glow}` }}>
                    <ExternalLink size={14} /> Order Now
                  </a>
                  <div className="mt-4 space-y-2">
                    {['3rd-party HPLC tested', 'Certificate of Analysis', 'US-based supplier'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs" style={{ color: '#71717a' }}>
                        <Check size={11} style={{ color: theme.accentLight }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── HIGHLIGHTS BAR ─────────────────────────────────── */}
        <div style={{ background: '#0d0d1a', borderTop: '1px solid #1e1e35', borderBottom: '1px solid #1e1e35' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
            <div className="grid sm:grid-cols-3 gap-6">
              {product.highlights.map((h, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-sm font-black"
                    style={{ background: theme.badge, color: theme.accentLight, border: `1px solid ${theme.badgeBorder}` }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: theme.accentLight }}>
                      {h.title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: '#71717a' }}>
                      {h.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BODY CONTENT ───────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">

            {/* ── Main column ── */}
            <div className="space-y-14">

              {/* Deep-dive writeup */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-1 h-8 rounded-full"
                    style={{ background: `linear-gradient(to bottom, ${theme.accent}, ${theme.accentLight})` }}
                  />
                  <h2 className="text-2xl font-bold text-white">{product.deepDiveTitle}</h2>
                </div>
                <p className="text-xs uppercase tracking-widest mb-6 ml-4" style={{ color: theme.accentLight }}>
                  Mechanism · Evidence · Application
                </p>

                <div
                  className="rounded-2xl border p-6 sm:p-8"
                  style={{ background: '#0d0d1a', borderColor: '#1e1e35' }}
                >
                  {renderDescription(product.fullDescription, theme.accentLight)}
                </div>
              </section>

              {/* Benefits */}
              <section>
                <h2 className="text-xl font-bold text-white mb-6">
                  {theme.benefitsHeading}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl p-4 border transition-colors"
                      style={{ background: '#0d0d1a', borderColor: '#1e1e35' }}
                    >
                      <div
                        className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: theme.badge }}
                      >
                        <Check size={11} style={{ color: theme.accentLight }} />
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#a1a1b5' }}>{b}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Protocol */}
              <section>
                <h2 className="text-xl font-bold text-white mb-6">
                  {theme.protocolHeading}
                </h2>
                <div
                  className="rounded-2xl border overflow-hidden"
                  style={{ borderColor: theme.badgeBorder }}
                >
                  <div
                    className="px-5 py-3 flex items-center gap-2 border-b"
                    style={{
                      background: theme.badge,
                      borderColor: theme.badgeBorder,
                    }}
                  >
                    <CategoryIcon size={14} style={{ color: theme.accentLight }} />
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.accentLight }}>
                      {product.name} Protocol Guide
                    </p>
                  </div>
                  <div className="p-6" style={{ background: '#0d0d1a' }}>
                    {product.protocol.split('\n').map((line, i) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return (
                          <p key={i} className="text-sm font-bold mt-4 mb-1 first:mt-0" style={{ color: theme.accentLight }}>
                            {line.replace(/\*\*/g, '')}
                          </p>
                        )
                      }
                      if (line.startsWith('- ')) {
                        return (
                          <p key={i} className="text-sm pl-4 mb-1" style={{ color: '#a1a1b5' }}>
                            <span style={{ color: theme.accentLight }}>·</span> {line.replace(/^- /, '')}
                          </p>
                        )
                      }
                      if (line.trim() === '') return <div key={i} className="h-2" />
                      return (
                        <p key={i} className="text-sm mb-1 font-mono" style={{ color: '#a1a1b5' }}>
                          {line.replace(/\*\*/g, '')}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* Week-by-Week Results Timeline */}
              {weeklyTimelines[product.slug] && (
                <section>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-1 h-8 rounded-full"
                      style={{ background: `linear-gradient(to bottom, ${theme.accent}, ${theme.accentLight})` }}
                    />
                    <h2 className="text-2xl font-bold text-white">Week-by-Week Results Timeline</h2>
                  </div>
                  <p className="text-xs uppercase tracking-widest mb-6 ml-4" style={{ color: theme.accentLight }}>
                    What to expect · Phase by phase
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {weeklyTimelines[product.slug].map((entry, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border p-5 flex flex-col gap-3"
                        style={{ background: '#0d0d1a', borderColor: '#1e1e35' }}
                      >
                        <span
                          className="inline-block self-start px-2.5 py-1 rounded-full text-[11px] font-bold"
                          style={{ background: theme.badge, color: theme.accentLight, border: `1px solid ${theme.badgeBorder}` }}
                        >
                          {entry.period}
                        </span>
                        <p className="text-sm font-bold text-white leading-snug">{entry.title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: '#a1a1aa' }}>{entry.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">

              {/* Sticky CTA repeat */}
              <div
                className="rounded-2xl p-5 border"
                style={{ background: '#0d0d1a', borderColor: theme.badgeBorder }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {product.image.startsWith('http') && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded-xl"
                      style={{ background: '#0a0a14', padding: '4px' }}
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="text-sm font-bold text-white">{product.name}</p>
                    <p className="text-xs" style={{ color: '#71717a' }}>HPLC Tested · COA Verified</p>
                  </div>
                </div>
                <p className="text-2xl font-extrabold text-white mb-3">${product.price.toFixed(2)}</p>
                <a
                  href={`/go/${product.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-bold text-sm text-white mb-2 transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})` }}
                >
                  <ExternalLink size={13} /> Order Now
                </a>
                <p className="text-center text-[10px]" style={{ color: '#52525b' }}>HPLC tested · COA verified</p>
              </div>

              {/* Category info box */}
              <div
                className="rounded-2xl p-5 border"
                style={{ background: '#0d0d1a', borderColor: '#1e1e35' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <CategoryIcon size={14} style={{ color: theme.accentLight }} />
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.accentLight }}>
                    {product.category}
                  </p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#71717a' }}>
                  {product.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.tags.slice(0, 4).map((t) => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
              </div>

              {/* Purity & Safety */}
              <div
                className="rounded-2xl p-5 border"
                style={{ background: '#0d0d1a', borderColor: '#1e1e35' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Quality Assurance
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'HPLC Testing', note: 'Purity verified per batch' },
                    { label: 'Mass Spectrometry', note: 'Molecular identity confirmed' },
                    { label: 'Certificate of Analysis', note: 'Publicly available' },
                    { label: 'US-Based Supplier', note: 'HPLC + Mass Spec Verified' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <Check size={11} className="text-emerald-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-white">{item.label}</p>
                        <p className="text-[10px]" style={{ color: '#52525b' }}>{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* ── RELATED PRODUCTS ──────────────────────────────── */}
        {relatedProducts.length > 0 && (
          <div style={{ background: '#0a0a14', borderTop: '1px solid #1e1e35' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: theme.accentLight }}>
                    Synergistic Combinations
                  </p>
                  <h2 className="text-2xl font-bold text-white">
                    Stack {product.name} With
                  </h2>
                </div>
                <Link href="/products" className="btn-secondary text-sm py-2 px-4 hidden sm:inline-flex">
                  All Products →
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedProducts.map((rp) => (
                  <ProductCard key={rp.slug} product={rp} showAffiliateButton />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── BOTTOM CTA ────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div
            className="rounded-2xl border p-8 sm:p-12 relative overflow-hidden"
            style={{
              background: '#0d0d1a',
              borderColor: theme.badgeBorder,
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 80% 80% at 50% 100%, ${theme.glow} 0%, transparent 70%)`,
              }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col sm:flex-row items-center gap-8">
              {product.image.startsWith('http') && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 object-contain shrink-0"
                  style={{ filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))' }}
                  loading="lazy"
                />
              )}
              <div className="text-center sm:text-left flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: theme.accentLight }}>
                  Ready to Start?
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Begin your {product.name} protocol
                </h2>
                <p className="text-sm max-w-md mb-6" style={{ color: '#a1a1b5' }}>
                  HPLC-tested and mass-spectrometry verified, with a Certificate of Analysis for every batch.
                </p>
                <a
                  href={`/go/${product.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})`,
                    boxShadow: `0 6px 30px ${theme.glow}`,
                  }}
                >
                  <ExternalLink size={16} />
                  Get {product.name}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey={`/products/${product.slug}`} />
    </>
  )
}
