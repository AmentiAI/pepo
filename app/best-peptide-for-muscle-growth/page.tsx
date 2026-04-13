import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Shield,
  Star,
  TrendingUp,
  Zap,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Best Peptide for Muscle Growth 2026 | IGF-1 vs Ipamorelin',
  description:
    'Compare the best peptides for muscle growth — IGF-1 LR3, CJC-1295/Ipamorelin, and BPC-157 for recovery. Clinical data, dosing, and which is right for your goals.',
  keywords:
    'best peptide for muscle growth, IGF-1 LR3 muscle, CJC-1295 muscle growth, peptides for hypertrophy, muscle building peptides, best anabolic peptide',
  alternates: { canonical: 'https://www.peptidesclav.com/best-peptide-for-muscle-growth' },
  openGraph: {
    title: 'Best Peptide for Muscle Growth 2026 | IGF-1 vs Ipamorelin',
    description:
      'Compare the best peptides for muscle growth — IGF-1 LR3, CJC-1295/Ipamorelin, and BPC-157 for recovery. Clinical data, dosing, and which is right for your goals.',
    type: 'website',
    url: 'https://www.peptidesclav.com/best-peptide-for-muscle-growth',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Best Peptide for Muscle Growth 2026' }],
  },
};

const peptides = [
  {
    name: 'IGF-1 LR3',
    badge: 'Direct Anabolic',
    badgeClass: 'badge badge-cyan',
    headline: 'Hyperplasia + Hypertrophy',
    mechanism: 'Direct IGF-1 receptor activation',
    dosing: '20–100mcg/day (post-workout IM or SQ)',
    cycle: '4–6 weeks on, 4 weeks off',
    pros: [
      'Only peptide proven to drive muscle hyperplasia (new fibers)',
      'Direct anabolic effect — bypasses GH axis',
      'Rapid onset: effects within first 2 weeks',
      'Powerful synergy with resistance training',
    ],
    cons: [
      'Requires careful cycling (receptor downregulation)',
      'Hypoglycemia risk at higher doses',
      'Shorter acting than GHRH peptides',
    ],
    best: 'Maximum direct muscle growth and hyperplasia',
    color: 'text-yellow-600',
    border: 'border-cyan-500/40',
    glow: 'ring-1 ring-cyan-500/20',
  },
  {
    name: 'CJC-1295 / Ipamorelin',
    badge: 'GH Stack',
    badgeClass: 'badge',
    headline: 'Systemic Recomposition',
    mechanism: 'GHRH + Ghrelin receptor (GH pulse stimulation)',
    dosing: '100–300mcg each, 2–3× daily pre-sleep/pre-workout',
    cycle: '3–6 months (sustained GH optimization)',
    pros: [
      'Stimulates natural GH pulses — mimics youthful GH release',
      'Sleep quality improvement (GH secretion peaks at night)',
      'Body recomposition: fat loss + lean mass gain',
      'Excellent long-term safety profile',
    ],
    cons: [
      'Slower to onset than IGF-1 LR3 (weeks to months)',
      'Works through GH axis — limited hyperplasia effect',
      'Requires 2–3 injections daily for optimal effect',
    ],
    best: 'Whole-body recomposition, sleep improvement, long-term GH optimization',
    color: 'text-yellow-600',
    border: 'border-yellow-500/40',
    glow: '',
  },
  {
    name: 'BPC-157',
    badge: 'Recovery',
    badgeClass: 'badge',
    headline: 'Injury Prevention + Recovery',
    mechanism: 'Tendon/muscle repair, angiogenesis, GH receptor upregulation',
    dosing: '250–500mcg 2× daily (near injury or systemic)',
    cycle: '8–12 weeks',
    pros: [
      'Heals connective tissue to sustain heavy training',
      'Reduces muscle inflammation post-training',
      'Enables higher training frequency by accelerating recovery',
      'Indirect anabolic effect via training volume support',
    ],
    cons: [
      'Not directly anabolic — works indirectly through recovery',
      'Best combined with IGF-1 LR3 or GH stack for growth goals',
    ],
    best: 'Athletes who keep getting injured and cannot maintain training consistency',
    color: 'text-gray-700',
    border: 'border-zinc-600/40',
    glow: '',
  },
  {
    name: 'Performance Elite Stack',
    badge: 'Full Stack',
    badgeClass: 'badge badge-cyan',
    headline: 'All Three Combined',
    mechanism: 'IGF-1 LR3 + CJC-1295/Ipamorelin + BPC-157',
    dosing: 'Per individual compound protocols (see stack page)',
    cycle: 'IGF-1 cycled 4–6wks within ongoing GH stack',
    pros: [
      'Covers every muscle growth mechanism simultaneously',
      'Hyperplasia (IGF-1) + GH optimization (CJC/Ipa) + recovery (BPC-157)',
      'Best outcomes for competitive athletes and advanced users',
      'Synergistic — each compound amplifies the others',
    ],
    cons: [
      'Higher cost and injection frequency',
      'Requires experience managing multiple compounds',
      'Not needed for beginners',
    ],
    best: 'Advanced athletes wanting maximum performance and physique results',
    color: 'text-yellow-600',
    border: 'border-yellow-500/30',
    glow: '',
  },
];

const faqs = [
  {
    q: 'What peptide builds muscle fastest?',
    a: 'IGF-1 LR3 produces the fastest onset of anabolic effects — most users notice increased training recovery and muscle fullness within 1–2 weeks. It directly activates IGF-1 receptors on muscle cells without needing to stimulate the GH axis first. However, it requires cycling to avoid receptor desensitization. For sustained long-term muscle building, the CJC-1295/Ipamorelin combination produces superior cumulative results over 3–6 months by continuously optimizing the GH axis.',
  },
  {
    q: 'Is IGF-1 LR3 safe?',
    a: 'IGF-1 LR3 is generally well-tolerated at research doses (20–100mcg/day). The primary risk is hypoglycemia — IGF-1 has insulin-like activity and can cause blood glucose to drop, especially taken fasted or with high-carb meals. Always inject post-workout when insulin sensitivity is elevated. The oncological concern often raised (IGF-1 and cancer) is theoretical at peptide doses and has not been demonstrated at typical usage levels. Cycling 4–6 weeks on / 4 weeks off prevents receptor downregulation.',
  },
  {
    q: 'Do I need to cycle off muscle peptides?',
    a: 'It depends on the compound. IGF-1 LR3 absolutely requires cycling (4–6 weeks on, 4 weeks off) due to receptor desensitization. CJC-1295/Ipamorelin can be run for longer periods (3–6 months) before a rest period, as it works by stimulating natural GH release rather than directly saturating a receptor. BPC-157 can be run continuously for chronic injury management, though most users cycle 8–12 weeks on / 4 weeks off as a precaution.',
  },
  {
    q: 'How do I combine peptides for muscle growth?',
    a: 'The optimal approach depends on your goal. For recomposition: CJC-1295 (300mcg) + Ipamorelin (300mcg) before bed, every night. For maximum hypertrophy cycles: add IGF-1 LR3 (50–100mcg post-workout) for 4–6 week blocks within your ongoing GH stack. For injury-free high-volume training: add BPC-157 (500mcg 2× daily) year-round or during injury-prone training phases. Start with the GH stack, add IGF-1 LR3 once comfortable, then layer in BPC-157 if recovery is the limiting factor.',
  },
];

export default function BestPeptideMuscleGrowthPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="badge hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-800" />
            <span className="badge badge-cyan">Best Peptide for Muscle Growth</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">2026 Guide</span>
              <span className="badge badge-cyan">Updated March 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">Best Peptide for </span>
              <span className="gradient-text">Muscle Growth</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Peptides for muscle growth work through distinct pathways — from direct IGF-1 receptor
              activation to GH axis optimization and recovery support. The right choice depends on
              your training stage, goals, and recovery capacity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/performance-elite" className="btn-primary">
                Performance Elite Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/products/igf-1-lr3" className="btn-secondary">
                IGF-1 LR3 Product
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <TrendingUp size={18} className="text-yellow-600" />, value: '3+', label: 'Distinct anabolic pathways' },
              { icon: <Zap size={18} className="text-yellow-600" />, value: '1–2wk', label: 'IGF-1 LR3 onset' },
              { icon: <Star size={18} className="text-yellow-600" />, value: 'IGF-1', label: 'Fastest muscle builder' },
              { icon: <Shield size={18} className="text-yellow-600" />, value: 'BPC-157', label: 'Recovery foundation' },
            ].map((stat) => (
              <div key={stat.label} className="card p-4 flex items-start gap-3">
                <div className="mt-0.5">{stat.icon}</div>
                <div>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-700 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Quick Answer */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Quick Answer</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          It Depends on Your Goal
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div
            className="card p-6 border border-yellow-500/30 ring-1 ring-cyan-500/10"
            style={{ background: 'var(--bg-card)' }}
          >
            <span className="badge badge-cyan mb-3 inline-block">Direct Muscle Growth</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">IGF-1 LR3</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              For maximum direct anabolic effect, IGF-1 LR3 is unmatched. It activates IGF-1
              receptors directly on muscle cells, driving both hypertrophy (cell growth) and
              hyperplasia (new fiber formation) — the only peptide proven to do both.
            </p>
          </div>
          <div
            className="card p-6 border border-yellow-400/40 ring-1 ring-yellow-500/10"
            style={{ background: 'var(--bg-card)' }}
          >
            <span className="badge mb-3 inline-block">Whole-Body Recomposition</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">CJC-1295 + Ipamorelin</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              For sustainable recomposition — gaining lean mass while reducing body fat, improving
              sleep, and supporting long-term recovery — the GH stack (CJC-1295 + Ipamorelin)
              optimizes the entire GH axis with an excellent safety profile.
            </p>
          </div>
        </div>
      </section>

      {/* Full Comparison */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Full Comparison</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Muscle Growth Peptides Compared
          </h2>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {peptides.map((p) => (
              <div
                key={p.name}
                className={`card p-5 border flex flex-col ${p.border} ${p.glow}`}
                style={{ background: 'var(--bg)' }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{p.name}</h3>
                  <span className={`${p.badgeClass} shrink-0`}>{p.badge}</span>
                </div>
                <p className={`text-sm font-semibold ${p.color} mb-1`}>{p.headline}</p>
                <p className="text-xs text-gray-700 mb-4">{p.mechanism}</p>

                <div className="space-y-1.5 text-xs mb-4">
                  <div>
                    <span className="text-gray-700">Dosing: </span>
                    <span className="text-gray-700">{p.dosing}</span>
                  </div>
                  <div>
                    <span className="text-gray-700">Cycle: </span>
                    <span className="text-gray-700">{p.cycle}</span>
                  </div>
                </div>

                <div className="space-y-1.5 mb-4">
                  {p.pros.map((pro) => (
                    <div key={pro} className="flex items-start gap-1.5">
                      <CheckCircle2 size={12} className="text-yellow-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-700">{pro}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                  <p className="text-[10px] text-gray-700 uppercase tracking-wider mb-1">Best for</p>
                  <p className="text-xs text-gray-700">{p.best}</p>
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
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Which Muscle Peptide Is Right for You?
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              condition: 'I want maximum direct muscle growth',
              recommendation: 'IGF-1 LR3',
              href: '/products/igf-1-lr3',
              points: [
                'Direct IGF-1 receptor activation',
                'Hyperplasia — new fiber formation',
                'Run 4–6 week cycles, 20–100mcg post-workout',
                'Best for advanced trainees with solid training base',
              ],
              color: 'text-yellow-500',
              border: 'border-yellow-500/30',
            },
            {
              condition: 'I want whole-body recomposition',
              recommendation: 'CJC-1295 + Ipamorelin',
              href: '/stacks/gh-optimization',
              points: [
                'Optimizes natural GH pulsation',
                'Recomposition: fat loss + lean gain simultaneously',
                'Improved sleep and recovery quality',
                'Best for sustained 3–6 month protocols',
              ],
              color: 'text-yellow-500',
              border: 'border-yellow-400/40',
            },
            {
              condition: 'I train hard but keep getting injured',
              recommendation: 'BPC-157 First',
              href: '/products/bpc-157',
              points: [
                'Heal connective tissue before stacking anabolics',
                'Enable higher training volume without breakdown',
                'Run 8–12 weeks then layer in GH stack',
                'Your recovery capacity is the limiting factor',
              ],
              color: 'text-gray-700',
              border: 'border-zinc-600/40',
            },
          ].map((item) => (
            <div
              key={item.condition}
              className={`card p-6 border ${item.border} flex flex-col`}
              style={{ background: 'var(--bg-card)' }}
            >
              <p className="text-xs text-gray-700 mb-2">{item.condition}</p>
              <h3 className={`font-bold text-lg mb-4 ${item.color}`}>{item.recommendation}</h3>
              <ul className="space-y-2.5 flex-1">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <ArrowRight size={13} className="text-yellow-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-gray-700">{pt}</p>
                  </li>
                ))}
              </ul>
              <Link
                href={item.href}
                className="mt-5 text-xs font-semibold text-yellow-600 hover:text-yellow-500 transition-colors flex items-center gap-1"
              >
                View Product <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={20} className="text-yellow-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card p-6 border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Ready to Build Your Protocol?
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Explore the Performance Elite Stack for the complete muscle growth system, or start
          with individual compounds.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/stacks/performance-elite" className="btn-primary">
            Performance Elite Stack
            <ArrowRight size={16} />
          </Link>
          <Link href="/stacks/gh-optimization" className="btn-secondary">
            GH Optimization Stack
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/products/igf-1-lr3" className="text-gray-700 hover:text-gray-700 transition-colors">
            IGF-1 LR3
          </Link>
          <Link href="/products/ipamorelin-cjc" className="text-gray-700 hover:text-gray-700 transition-colors">
            Ipamorelin / CJC-1295
          </Link>
          <Link href="/products/bpc-157" className="text-gray-700 hover:text-gray-700 transition-colors">
            BPC-157
          </Link>
        </div>
      </section>

      <RelatedReading pageKey="/best-peptide-for-muscle-growth" />
    </div>
  );
}
