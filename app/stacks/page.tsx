import type { Metadata } from 'next'
import Link from 'next/link'
import { stacks } from '@/lib/stacks'

export const metadata: Metadata = {
  title: 'Buy Peptide Stacks | Healing, Fat Loss & Anti-Aging',
  description: 'Buy peptide stacks for healing, fat loss, anti-aging and body composition.',
  alternates: { canonical: 'https://www.peptidesclav.com/stacks' },
  openGraph: {
    title: 'Buy Peptide Stacks | Healing, Fat Loss & Anti-Aging',
    description: 'Buy peptide stacks for healing, fat loss, anti-aging and body composition.',
    type: 'website',
    url: 'https://www.peptidesclav.com/stacks',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buy Peptide Stacks' }],
  },
}

export default function StacksPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Buy Peptide Stacks
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stacks.map((stack) => (
            <Link
              key={stack.id}
              href={`/stacks/${stack.id}`}
              className="block rounded-xl border p-5 hover:border-yellow-500 transition-colors"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <h2 className="font-bold text-gray-900 text-lg mb-1">Buy {stack.name}</h2>
              <p className="text-sm text-gray-700">{stack.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
