import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Shield,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Best Peptide for Anti-Aging 2026 | Epithalon, GHK-Cu, NAD+ Compared',
  description:
    'Compare the best anti-aging peptides — Epithalon for telomere extension, GHK-Cu for skin rejuvenation, and NAD+ for mitochondrial health. Complete dosing guide.',
  keywords:
    'best peptide for anti-aging, Epithalon anti-aging, GHK-Cu anti-aging, anti-aging peptides 2026, longevity peptides, best peptide for longevity',
  alternates: { canonical: 'https://peptidesclav.com/best-peptide-for-anti-aging' },
  openGraph: {
    title: 'Best Peptide for Anti-Aging 2026 | Epithalon, GHK-Cu, NAD+ Compared',
    description:
      'Compare the best anti-aging peptides — Epithalon for telomere extension, GHK-Cu for skin rejuvenation, and NAD+ for mitochondrial health. Complete dosing guide.',
    type: 'website',
    url: 'https://peptidesclav.com/best-peptide-for-anti-aging',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Best Peptide for Anti-Aging 2026' }],
  },
};

const peptides = [
  {
    name: 'Epithalon',
    badge: 'Telomere Extension',
    badgeClass: 'badge badge-cyan',
    headline: 'Cellular Longevity',
    mechanism: 'Telomerase activation, pineal gland regulation',
    dosing: '5–10mg/day for 10–20 day cycles, 1–2× per year',
    evidence: '15-year human data (Khavinson studies)',
    pros: [
      '27–36% reduction in all-cause mortality (15-year data)',
      'Only compound proven to activate telomerase in humans',
      'Retinal tissue protection and vision preservation',
      'Normalizes melatonin production and circadian rhythm',
      'Unique mechanism — no overlap with other compounds',
    ],
    cons: [
      'Short cycle-based use (not daily)',
      'Benefits accumulate over multiple years',
      'Requires infrequent but precise dosing windows',
    ],
    best: 'Cellular longevity and lifespan extension as the primary goal',
    color: 'text-cyan-400',
    border: 'border-cyan-500/40',
    glow: 'ring-1 ring-cyan-500/20',
  },
  {
    name: 'GHK-Cu',
    badge: 'Skin & Regeneration',
    badgeClass: 'badge',
    headline: 'Gene Expression Reset',
    mechanism: 'Copper peptide — gene expression, collagen, stem cells',
    dosing: '1–2mg/day SQ or topical (face/scalp)',
    evidence: 'Extensive in vitro + clinical topical data',
    pros: [
      'Resets 31% of age-related gene expression changes',
      'Stimulates collagen, elastin, and glycosaminoglycan synthesis',
      'Activates stem cell migration to tissue repair sites',
      'Hair follicle regeneration and anti-hair-loss effects',
      'Anti-inflammatory: reduces TNF-alpha, IL-6',
    ],
    cons: [
      'Primary systemic benefit from injectable (topical = skin only)',
      'Less dramatic longevity data vs Epithalon',
      'Copper accumulation risk at very high doses (rare)',
    ],
    best: 'Visible aesthetic results: skin, hair, and collagen regeneration',
    color: 'text-violet-400',
    border: 'border-violet-500/40',
    glow: '',
  },
  {
    name: 'NAD+',
    badge: 'Mitochondrial',
    badgeClass: 'badge',
    headline: 'Metabolic Restoration',
    mechanism: 'NAD+ precursor — sirtuin activation, DNA repair, mitochondrial biogenesis',
    dosing: '250–500mg NMN or NR daily; or NAD+ IV 500mg/week',
    evidence: 'Robust preclinical; growing human clinical data',
    pros: [
      'Restores NAD+ levels that decline 50%+ by age 50',
      'Activates sirtuins (longevity proteins)',
      'Mitochondrial biogenesis — new energy-producing mitochondria',
      'DNA repair enzyme activation (PARP)',
      'Measurable energy improvement within 2–4 weeks',
    ],
    cons: [
      'Oral bioavailability varies (IV is gold standard but requires clinic)',
      'Best as supplement to peptide protocol — not standalone',
      'Human aging trial data still maturing',
    ],
    best: 'Energy, metabolic health, and mitochondrial function restoration',
    color: 'text-zinc-300',
    border: 'border-zinc-600/40',
    glow: '',
  },
  {
    name: 'CJC-1295 + Ipamorelin',
    badge: 'GH Restoration',
    badgeClass: 'badge',
    headline: 'Growth Hormone Anti-Aging',
    mechanism: 'GHRH + ghrelin receptor — GH pulse restoration',
    dosing: '100–300mcg each, before bed nightly',
    evidence: 'Extensive clinical peptide data; well-established',
    pros: [
      'Restores GH secretion patterns of 20–30 year olds',
      'Body composition: reduced visceral fat, increased lean mass',
      'Deep sleep quality improvement',
      'Skin, hair, and connective tissue quality improvement',
      'Pairs well with all other anti-aging compounds',
    ],
    cons: [
      'Indirect mechanism through GH axis — slower results',
      'Daily injection requirement',
      'Not the most targeted anti-aging approach alone',
    ],
    best: 'Body composition, sleep, and vitality as part of anti-aging protocol',
    color: 'text-zinc-400',
    border: 'border-zinc-600/40',
    glow: '',
  },
];

const faqs = [
  {
    q: 'Which anti-aging peptide has the most evidence?',
    a: "Epithalon has the most long-term human evidence for actual longevity outcomes — the Khavinson Institute published 15-year follow-up data showing 27–36% reductions in all-cause mortality. GHK-Cu has the most robust mechanistic data, with over 4,000 studies documenting its gene expression effects. NAD+ (via NMN/NR) has the strongest understanding of mechanism and the most rapidly growing human trial database. For pure evidence-of-longevity, Epithalon's human mortality data is unique in the peptide world.",
  },
  {
    q: 'Can I take all three together?',
    a: 'Yes — and this is the recommended approach for comprehensive anti-aging. The Longevity Elite Stack combines Epithalon, GHK-Cu, NAD+, and CJC-1295/Ipamorelin because they operate through entirely different pathways with no negative interactions. Epithalon handles telomere biology, GHK-Cu resets gene expression and tissue regeneration, NAD+ restores mitochondrial function, and the GH stack optimizes hormonal anti-aging. They are additive at minimum, potentially synergistic.',
  },
  {
    q: 'How often do I run Epithalon?',
    a: 'Epithalon is run in short cycles rather than continuously. The standard protocol is 5–10mg per day for 10–20 consecutive days, repeated 1–2 times per year. The Khavinson research used 5mg/day for 10 days, twice yearly. Unlike most peptides, Epithalon\'s telomere effects persist long after the cycle ends — you are triggering telomerase expression, not relying on a constant blood level. Many users do a spring and autumn cycle annually.',
  },
  {
    q: "What's the difference between anti-aging and longevity?",
    a: "Anti-aging typically refers to visible and functional markers: skin quality, body composition, energy, cognitive sharpness, and joint health — things that are measurable in months. Longevity refers to extending lifespan and healthspan at the cellular level — telomere preservation, mitochondrial function, sirtuin activation, and reduced all-cause mortality. The best approach addresses both: GHK-Cu and GH peptides drive anti-aging aesthetics and function, while Epithalon and NAD+ target the fundamental longevity biology. The Longevity Elite Stack covers both layers.",
  },
];

export default function BestPeptideAntiAgingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="badge hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-zinc-600" />
            <span className="badge badge-cyan">Best Peptide for Anti-Aging</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">2026 Guide</span>
              <span className="badge badge-cyan">Updated March 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Best Peptide for </span>
              <span className="gradient-text">Anti-Aging</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              Anti-aging peptides target aging at the source — telomere shortening, mitochondrial
              decline, gene expression drift, and GH axis attenuation. This guide compares the top
              four compounds with clinical evidence, dosing, and a decision framework.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/longevity-elite" className="btn-primary">
                Longevity Elite Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/products/epithalon" className="btn-secondary">
                Epithalon
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Sparkles size={18} className="text-cyan-400" />, value: '36%', label: 'Mortality reduction (Epithalon)' },
              { icon: <Zap size={18} className="text-violet-400" />, value: '4', label: 'Pathways targeted' },
              { icon: <Star size={18} className="text-cyan-400" />, value: '15yr', label: "Epithalon's human data span" },
              { icon: <Shield size={18} className="text-violet-400" />, value: '4,000+', label: 'GHK-Cu studies' },
            ].map((stat) => (
              <div key={stat.label} className="card p-4 flex items-start gap-3">
                <div className="mt-0.5">{stat.icon}</div>
                <div>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Quick Answer — Winner Card */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Quick Answer</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Gold Standard: Longevity Elite Stack
        </h2>
        <div
          className="card p-6 sm:p-8 border border-cyan-500/30 ring-1 ring-cyan-500/10 mb-6"
          style={{ background: 'var(--bg-card)' }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">Longevity Elite Stack</h3>
                <span className="badge badge-cyan">Comprehensive</span>
              </div>
              <p className="text-zinc-400 text-sm max-w-xl">
                The combination of all three core anti-aging peptides (Epithalon + GHK-Cu + NAD+)
                with GH axis support is the gold standard. Each compound targets a distinct aging
                pathway — together they offer the most comprehensive longevity protocol available.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-cyan-400 mb-1">4 Mechanisms</p>
              <p className="text-xs text-zinc-500">Telomere + Gene + Mitochondria + GH</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-4 gap-3">
            {[
              { label: 'Epithalon', value: 'Telomere extension' },
              { label: 'GHK-Cu', value: 'Gene reset + collagen' },
              { label: 'NAD+', value: 'Mitochondrial function' },
              { label: 'CJC/Ipa', value: 'GH axis restoration' },
            ].map((item) => (
              <div
                key={item.label}
                className="px-4 py-3 rounded-xl border"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-xs font-semibold text-white mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Single compound highlight */}
        <div
          className="card p-5 border border-cyan-500/20"
          style={{ background: 'var(--bg-card)' }}
        >
          <p className="text-xs text-zinc-500 mb-1">For a single compound, our pick is:</p>
          <div className="flex items-center gap-3">
            <Star size={16} className="text-cyan-400 shrink-0" />
            <p className="text-sm text-zinc-300">
              <span className="text-white font-bold">Epithalon</span> — the most unique mechanism
              in anti-aging medicine. No other compound activates telomerase in humans with 15 years
              of follow-up mortality data.
            </p>
          </div>
        </div>
      </section>

      {/* Full Comparison */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Full Comparison</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Anti-Aging Peptides Compared
          </h2>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {peptides.map((p) => (
              <div
                key={p.name}
                className={`card p-5 border flex flex-col ${p.border} ${p.glow}`}
                style={{ background: 'var(--bg)' }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white">{p.name}</h3>
                  <span className={`${p.badgeClass} shrink-0`}>{p.badge}</span>
                </div>
                <p className={`text-sm font-semibold ${p.color} mb-1`}>{p.headline}</p>
                <p className="text-xs text-zinc-500 mb-1">{p.mechanism}</p>
                <p className="text-[10px] text-violet-400 mb-4">{p.evidence}</p>

                <div className="space-y-1 text-xs mb-4">
                  <div>
                    <span className="text-zinc-500">Dosing: </span>
                    <span className="text-zinc-300">{p.dosing}</span>
                  </div>
                </div>

                <div className="space-y-1.5 mb-4">
                  {p.pros.map((pro) => (
                    <div key={pro} className="flex items-start gap-1.5">
                      <CheckCircle2 size={12} className="text-cyan-400 mt-0.5 shrink-0" />
                      <p className="text-xs text-zinc-400">{pro}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Best for</p>
                  <p className="text-xs text-zinc-300">{p.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Decision Guide */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Decision Guide</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Which Anti-Aging Peptide Is Right for You?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              condition: 'I prioritize cellular longevity',
              recommendation: 'Epithalon',
              href: '/products/epithalon',
              points: [
                'Telomere extension and telomerase activation',
                '10–20 day cycles twice yearly',
                'Most unique mechanism in anti-aging',
                'Proven human mortality reduction data',
              ],
              color: 'text-cyan-300',
              border: 'border-cyan-500/30',
            },
            {
              condition: 'I want visible skin & aesthetic results',
              recommendation: 'GHK-Cu',
              href: '/products/ghk-cu',
              points: [
                'Collagen and elastin synthesis',
                'Hair follicle regeneration',
                'Gene expression reset (4,000+ studies)',
                'Results visible within 4–8 weeks',
              ],
              color: 'text-violet-300',
              border: 'border-violet-500/30',
            },
            {
              condition: 'I want energy & metabolic restoration',
              recommendation: 'NAD+',
              href: '/products/nad-plus',
              points: [
                'Mitochondrial biogenesis',
                'Sirtuin and PARP activation',
                'Energy improvement within 2–4 weeks',
                'Pairs with all other compounds',
              ],
              color: 'text-zinc-300',
              border: 'border-zinc-600/40',
            },
            {
              condition: 'I want comprehensive anti-aging',
              recommendation: 'Longevity Elite Stack',
              href: '/stacks/longevity-elite',
              points: [
                'All four mechanisms covered simultaneously',
                'Best long-term outcomes',
                'Epithalon + GHK-Cu + NAD+ + GH stack',
                'Gold standard anti-aging protocol',
              ],
              color: 'text-cyan-300',
              border: 'border-cyan-500/30',
            },
          ].map((item) => (
            <div
              key={item.condition}
              className={`card p-6 border ${item.border} flex flex-col`}
              style={{ background: 'var(--bg-card)' }}
            >
              <p className="text-xs text-zinc-500 mb-2">{item.condition}</p>
              <h3 className={`font-bold text-sm mb-4 ${item.color}`}>{item.recommendation}</h3>
              <ul className="space-y-2 flex-1">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <ArrowRight size={12} className="text-violet-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-zinc-400">{pt}</p>
                  </li>
                ))}
              </ul>
              <Link
                href={item.href}
                className="mt-5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
              >
                Learn More <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={20} className="text-violet-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card p-6 border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Start Your Longevity Protocol
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          The Longevity Elite Stack combines all four anti-aging mechanisms — the most complete
          protocol available for cellular health and longevity.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/stacks/longevity-elite" className="btn-primary">
            Longevity Elite Stack
            <ArrowRight size={16} />
          </Link>
          <Link href="/products/epithalon" className="btn-secondary">
            Epithalon
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/products/ghk-cu" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            GHK-Cu
          </Link>
          <Link href="/products/nad-plus" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            NAD+
          </Link>
          <Link href="/products/epithalon" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            Epithalon
          </Link>
        </div>
      </section>

      <RelatedReading pageKey="/best-peptide-for-anti-aging" />
    </div>
  );
}
