import type { Metadata } from 'next'
import Link from 'next/link'
import { stacks } from '@/lib/stacks'
import { products } from '@/lib/products'
import { ArrowRight, Clock, DollarSign, Target, Zap } from 'lucide-react'
import RelatedReading from '@/components/RelatedReading'

export const metadata: Metadata = {
  title: 'Best Peptide Stacks & Protocols for Healing, Fat Loss & Anti-Aging',
  description:
    'Curated peptide stack protocols for healing, body composition, anti-aging, cognitive enhancement, and male performance. Science-backed combinations with dosing schedules.',
  openGraph: {
    title: 'Peptide Stacks & Protocols',
    description:
      'Curated peptide stack protocols for healing, body composition, anti-aging, and cognitive enhancement.',
    type: 'website',
  },
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

export default function StacksPage() {
  return (
    <div className="min-h-screen" style={{ background: '#08080f' }}>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(124,58,237,0.14) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-14 text-center">
          <div className="inline-flex items-center gap-2 badge mb-6">
            <Zap size={11} />
            <span>6 Expert-Curated Protocols</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Peptide Stacks &{' '}
            <span className="gradient-text">Protocols</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#a1a1b5' }}>
            Evidence-backed combinations engineered for specific goals. Each stack
            pairs complementary peptides with precise dosing schedules for
            synergistic results.
          </p>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Stacks grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack) => {
            // Look up product images for this stack
            const stackProductImages = stack.products
              .map((sp) => products.find((p) => p.slug === sp.slug))
              .filter((p): p is NonNullable<typeof p> => !!p && p.image.startsWith('http'))
              .slice(0, 3)

            return (
              <div key={stack.id} className="card flex flex-col group overflow-hidden">
                {/* Product image collage */}
                <Link
                  href={`/stacks/${stack.id}`}
                  className="block relative overflow-hidden"
                  style={{ height: '180px', background: '#0a0a14' }}
                >
                  {/* Gradient bg */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.1) 100%)',
                    }}
                  />

                  {stackProductImages.length > 0 ? (
                    /* Overlapping product images */
                    <div className="absolute inset-0 flex items-center justify-center gap-0">
                      {stackProductImages.map((p, i) => (
                        <div
                          key={p.slug}
                          className="relative group-hover:scale-105 transition-transform duration-300"
                          style={{
                            width: 100,
                            height: 140,
                            marginLeft: i > 0 ? -24 : 0,
                            zIndex: i,
                            filter: i > 0 ? 'brightness(0.85)' : 'brightness(1)',
                          }}
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Fallback if no images */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)' }}
                      >
                        <Zap size={28} className="text-violet-400" />
                      </div>
                    </div>
                  )}

                  {/* Accent bar at top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity" />

                  {/* Difficulty badge overlay */}
                  <div className="absolute bottom-3 left-3">
                    <DifficultyBadge difficulty={stack.difficulty} />
                  </div>
                  <div className="absolute bottom-3 right-3 text-xs font-medium" style={{ color: '#52525b' }}>
                    {stack.products.length} peptide{stack.products.length !== 1 ? 's' : ''}
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  {/* Name & tagline */}
                  <h2 className="text-lg font-bold text-white mb-2 leading-snug">
                    {stack.name}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#71717a' }}>
                    {stack.tagline}
                  </p>

                  {/* Meta info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#a1a1b5' }}>
                      <Target size={13} className="text-violet-400 flex-shrink-0" />
                      <span>{stack.goal}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#a1a1b5' }}>
                      <Clock size={13} className="text-cyan-400 flex-shrink-0" />
                      <span>{stack.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#a1a1b5' }}>
                      <DollarSign size={13} className="text-violet-400 flex-shrink-0" />
                      <span>{stack.cost}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {stack.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="tag-chip">{tag}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/stacks/${stack.id}`}
                    className="btn-primary justify-center"
                  >
                    View Protocol
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div
          className="rounded-2xl border p-8 sm:p-12 text-center relative overflow-hidden"
          style={{ background: '#0f0f1a', borderColor: '#2d2d50' }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(6,182,212,0.08) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
              Shop the Protocols
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to stack?
            </h2>
            <p className="text-sm max-w-md mx-auto mb-8" style={{ color: '#a1a1b5' }}>
              Source all peptides in these stacks from Apollo Peptides Sciences — verified
              purity, consistent dosing, trusted worldwide.
            </p>
            <a
              href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-primary text-base px-8 py-3"
            >
              Shop Apollo Peptides
            </a>
          </div>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/stacks" />
    </div>
  )
}
