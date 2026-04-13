import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { articles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Peptide Blog: Research, Protocols & Looksmaxxing Guides 2026',
  description: 'Evidence-based peptide articles — retatrutide Phase 3 data, BPC-157 research, looksmaxxing stacks, and beginner protocols. Updated March 2026.',
  keywords: 'peptide blog, peptide articles, looksmaxxing guide 2026, BPC-157 research 2026, retatrutide phase 3, peptide protocols blog',
  alternates: { canonical: 'https://www.peptidesclav.com/blog' },
  openGraph: {
    title: 'Peptide Blog: Research, Protocols & Looksmaxxing Guides 2026',
    description: 'Evidence-based peptide articles — retatrutide Phase 3 data, BPC-157 research, looksmaxxing stacks, and beginner protocols.',
    type: 'website',
    url: 'https://www.peptidesclav.com/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PeptidesClav Blog' }],
  },
};

const categoryColors: Record<string, string> = {
  'Weight Loss': 'bg-gray-900/15 border-yellow-600/25 text-yellow-600',
  'Research': 'bg-cyan-500/15 border-cyan-500/25 text-yellow-600',
  'Protocols': 'bg-fuchsia-600/15 border-fuchsia-600/25 text-yellow-600',
  'Skinmaxxing': 'bg-pink-600/15 border-pink-600/25 text-pink-400',
  'Looksmaxxing': 'bg-amber-600/15 border-amber-600/25 text-yellow-600',
  'Safety': 'bg-emerald-600/15 border-emerald-600/25 text-emerald-400',
  'Beginners': 'bg-blue-600/15 border-blue-600/25 text-blue-400',
};

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-5 inline-block">Research & Protocols</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-gray-900">Peptide </span>
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Evidence-based articles on peptide research, looksmaxxing protocols, clinical trial data, and beginner guides. Updated as new science drops.
          </p>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Featured article */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-yellow-600 uppercase mb-6">Latest Article</p>
        <Link href={`/blog/${featured.slug}`} className="group block">
          <div className="card p-8 border border-yellow-600/20 relative overflow-hidden hover:border-yellow-500/40 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-900/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold border ${categoryColors[featured.category] ?? 'bg-zinc-800 border-zinc-700 text-gray-500'}`}>
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock size={12} /> {featured.readTime}
                </span>
                <span className="text-xs text-gray-400">{featured.date}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-gray-500 mb-6 max-w-3xl leading-relaxed">{featured.description}</p>
              <div className="flex items-center gap-2 text-yellow-600 font-medium">
                Read article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Article grid */}
      <section className="pb-10 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">All Articles</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group card p-6 flex flex-col hover:border-yellow-400/40 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold border ${categoryColors[article.category] ?? 'bg-zinc-800 border-zinc-700 text-gray-500'}`}>
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock size={11} /> {article.readTime}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-yellow-500 transition-colors flex-1">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-2">{article.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag-chip text-xs">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <span className="text-xs text-gray-400">{article.date}</span>
                <span className="flex items-center gap-1 text-yellow-600 text-xs font-medium group-hover:gap-2 transition-all">
                  Read <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
