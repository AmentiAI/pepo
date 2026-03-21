import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Star,
  TrendingDown,
  Zap,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Best Peptide for Weight Loss 2026 | Semaglutide, Tirzepatide, Retatrutide',
  description:
    'Compare the best peptides for weight loss — Semaglutide (14.9%), Tirzepatide (22.5%), and Retatrutide (24.2%). Clinical data, dosing, and which is right for you.',
  keywords:
    'best peptide for weight loss, semaglutide weight loss, tirzepatide weight loss, best GLP-1 for weight loss, peptides for fat loss, weight loss peptide 2026',
  alternates: { canonical: 'https://peptidesclav.com/best-peptide-for-weight-loss' },
  openGraph: {
    title: 'Best Peptide for Weight Loss 2026 | Semaglutide, Tirzepatide, Retatrutide',
    description:
      'Compare the best peptides for weight loss — Semaglutide (14.9%), Tirzepatide (22.5%), and Retatrutide (24.2%). Clinical data, dosing, and which is right for you.',
    type: 'website',
    url: 'https://peptidesclav.com/best-peptide-for-weight-loss',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Best Peptide for Weight Loss 2026' }],
  },
};

const peptides = [
  {
    name: 'Semaglutide',
    badge: 'Entry-Level',
    badgeClass: 'badge',
    weightLoss: '14.9%',
    mechanism: 'GLP-1 receptor agonist',
    dosing: '0.5–2.4mg/week (subcutaneous)',
    trial: 'STEP 1 (N=1961)',
    pros: ['Proven Phase 3 data', 'Weekly injection', 'Most clinical experience', 'Lowest side effect profile'],
    cons: ['Lowest weight loss ceiling', 'Single mechanism', 'Requires slow titration'],
    best: 'GLP-1 newcomers, tolerability concerns',
    color: 'text-zinc-400',
    border: 'border-zinc-600/40',
    glow: '',
  },
  {
    name: 'Tirzepatide',
    badge: 'Best Overall',
    badgeClass: 'badge badge-cyan',
    weightLoss: '22.5%',
    mechanism: 'GLP-1 + GIP dual agonist',
    dosing: '5–15mg/week (subcutaneous)',
    trial: 'SURMOUNT-1 (N=2539)',
    pros: ['Dual GLP-1 + GIP mechanism', '22.5% average weight loss', 'Phase 3 proven', 'Superior to semaglutide head-to-head'],
    cons: ['Higher cost', 'More GI side effects at high doses', 'Newer long-term data'],
    best: 'Most people seeking proven, maximum-value weight loss',
    color: 'text-cyan-400',
    border: 'border-cyan-500/40',
    glow: 'ring-1 ring-cyan-500/20',
  },
  {
    name: 'Retatrutide',
    badge: 'Maximum Efficacy',
    badgeClass: 'badge',
    weightLoss: '24.2%',
    mechanism: 'GLP-1 + GIP + Glucagon triple agonist',
    dosing: '4–12mg/week (subcutaneous)',
    trial: 'Phase 2 (N=338)',
    pros: ['Highest recorded weight loss', 'Triple receptor mechanism', 'Added metabolic benefits'],
    cons: ['Phase 2 data only (smaller trial)', 'Less long-term safety data', 'Harder to source'],
    best: 'Maximum results, comfortable with cutting-edge compounds',
    color: 'text-violet-400',
    border: 'border-violet-500/40',
    glow: '',
  },
  {
    name: 'Cagrilintide + Semaglutide',
    badge: 'Appetite + Amylin',
    badgeClass: 'badge',
    weightLoss: '~25%',
    mechanism: 'GLP-1 + Amylin dual (CagriSema)',
    dosing: '2.4mg Sema + 2.4mg Cagri weekly',
    trial: 'REDEFINE 1 (Phase 3, ongoing)',
    pros: ['Amylin pathway (novel mechanism)', 'Additive to GLP-1', 'Strong appetite suppression'],
    cons: ['Phase 3 still completing', 'Complex sourcing', 'Requires two peptides'],
    best: 'Plateau breakers and those who want next-generation approach',
    color: 'text-zinc-400',
    border: 'border-zinc-600/40',
    glow: '',
  },
];

const faqs = [
  {
    q: 'How much weight can I lose with GLP-1 peptides?',
    a: 'Clinical trial averages: Semaglutide 14.9% body weight, Tirzepatide 22.5%, Retatrutide 24.2%. Individual results range widely. A 200 lb person on Tirzepatide can expect to lose 35–50 lbs over 72 weeks with diet modification. Results plateau without caloric deficit — these peptides work by suppressing appetite, not burning fat directly.',
  },
  {
    q: "What's the difference between Semaglutide and Tirzepatide?",
    a: "Semaglutide is a GLP-1 receptor agonist — it mimics the gut hormone GLP-1 to suppress appetite and slow gastric emptying. Tirzepatide adds GIP (glucose-dependent insulinotropic polypeptide) receptor agonism, giving it a dual mechanism that produces superior weight loss. Head-to-head trials (SURMOUNT-5) confirm Tirzepatide outperforms Semaglutide at comparable doses. The tradeoff is typically higher GI side effects with Tirzepatide, especially during titration.",
  },
  {
    q: 'Do I need to exercise with weight loss peptides?',
    a: 'Exercise is not required for weight loss on GLP-1 peptides, but it is strongly recommended. The primary concern is lean mass preservation — GLP-1 peptides cause significant muscle loss alongside fat loss (approximately 30–40% of lost weight can be lean mass without resistance training). Adding strength training to a GLP-1 protocol preserves muscle, improves metabolic rate, and produces superior long-term body composition outcomes.',
  },
  {
    q: 'How long do I take GLP-1 peptides?',
    a: 'GLP-1 peptides are not a finite course — they are chronic medications. Weight regain after discontinuation is well-documented (average 2/3 of lost weight regained within 12 months). Most people use them for 12–24 months minimum, then consider maintenance dosing or cycling. Some individuals choose indefinite use. The decision should be based on reaching goal weight, metabolic health markers, and long-term sustainability.',
  },
];

export default function BestPeptideWeightLossPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="badge hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-zinc-600" />
            <span className="badge badge-cyan">Best Peptide for Weight Loss</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">2026 Guide</span>
              <span className="badge badge-cyan">Updated March 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Best Peptide for </span>
              <span className="gradient-text">Weight Loss</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              GLP-1 class peptides have redefined what weight loss medicine can achieve. We compare
              the top four options — from the proven Semaglutide to the triple-agonist Retatrutide
              — with clinical data, dosing protocols, and a decision guide to find your best fit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/glp1-comparison" className="btn-primary">
                Deep Dive: GLP-1 Comparison
                <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn-secondary">
                Browse Products
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <TrendingDown size={18} className="text-cyan-400" />, value: '24.2%', label: 'Max clinical weight loss' },
              { icon: <Zap size={18} className="text-violet-400" />, value: '4', label: 'Compounds compared' },
              { icon: <Star size={18} className="text-cyan-400" />, value: 'Tirze.', label: 'Best overall pick' },
              { icon: <CheckCircle2 size={18} className="text-violet-400" />, value: 'Phase 3', label: 'Gold standard data' },
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
          Our Pick: Tirzepatide
        </h2>
        <div
          className="card p-6 sm:p-8 border border-cyan-500/30 ring-1 ring-cyan-500/10"
          style={{ background: 'var(--bg-card)' }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">Tirzepatide</h3>
                <span className="badge badge-cyan">Best Overall</span>
              </div>
              <p className="text-zinc-400 text-sm max-w-xl">
                The only dual GLP-1 + GIP agonist with Phase 3 data showing 22.5% average weight
                loss — superior to Semaglutide in head-to-head trials. The best balance of efficacy,
                evidence quality, and tolerability.
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-extrabold text-cyan-400">22.5%</p>
              <p className="text-xs text-zinc-500 mt-1">avg. body weight lost (SURMOUNT-1)</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Mechanism', value: 'GLP-1 + GIP dual agonist' },
              { label: 'Dose Range', value: '5–15mg/week SQ' },
              { label: 'Key Trial', value: 'SURMOUNT-1 (N=2,539)' },
            ].map((item) => (
              <div
                key={item.label}
                className="px-4 py-3 rounded-xl border"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-semibold text-white mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Full Comparison</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            All Weight Loss Peptides Compared
          </h2>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {peptides.map((p) => (
              <div
                key={p.name}
                className={`card p-5 border flex flex-col ${p.border} ${p.glow}`}
                style={{ background: 'var(--bg)' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white">{p.name}</h3>
                  <span className={p.badgeClass}>{p.badge}</span>
                </div>
                <p className={`text-3xl font-extrabold ${p.color} mb-1`}>{p.weightLoss}</p>
                <p className="text-xs text-zinc-500 mb-4">avg. weight loss ({p.trial})</p>

                <div className="space-y-2 text-xs mb-4">
                  <div>
                    <span className="text-zinc-500">Mechanism: </span>
                    <span className="text-zinc-300">{p.mechanism}</span>
                  </div>
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
          Which Weight Loss Peptide Is Right for You?
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              condition: 'Choose Semaglutide if...',
              points: [
                'You want the most clinical long-term data',
                "You're sensitive to GI side effects",
                'You prefer a single, lower-cost compound',
                'You are new to GLP-1 therapy',
              ],
              color: 'text-zinc-300',
              border: 'border-zinc-600/40',
            },
            {
              condition: 'Choose Tirzepatide if...',
              points: [
                'You want the best-proven weight loss outcome',
                "You've tried Semaglutide without enough response",
                'You want dual-mechanism superiority',
                'You want Phase 3-backed results',
              ],
              color: 'text-cyan-300',
              border: 'border-cyan-500/30',
            },
            {
              condition: 'Choose Retatrutide if...',
              points: [
                'You want maximum possible weight loss',
                "You've plateaued on dual-agonist therapy",
                'You are comfortable with Phase 2 (early) data',
                'Metabolic co-benefits (glucose, lipids) are a priority',
              ],
              color: 'text-violet-300',
              border: 'border-violet-500/30',
            },
          ].map((item) => (
            <div
              key={item.condition}
              className={`card p-6 border ${item.border}`}
              style={{ background: 'var(--bg-card)' }}
            >
              <h3 className={`font-bold text-sm mb-4 ${item.color}`}>{item.condition}</h3>
              <ul className="space-y-2.5">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <ArrowRight size={13} className="text-violet-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-zinc-400">{pt}</p>
                  </li>
                ))}
              </ul>
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
          Ready to Start Your Protocol?
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          Browse our full GLP-1 comparison for deep-dive dosing protocols, side effect management,
          and compound sourcing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/glp1-comparison" className="btn-primary">
            Full GLP-1 Comparison
            <ArrowRight size={16} />
          </Link>
          <Link href="/products" className="btn-secondary">
            Browse All Products
          </Link>
        </div>
      </section>

      <RelatedReading pageKey="/best-peptide-for-weight-loss" />
    </div>
  );
}
