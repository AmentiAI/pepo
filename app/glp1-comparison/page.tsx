import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Flame,
  HelpCircle,
  Scale,
  TrendingUp,
  Zap,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Semaglutide vs Tirzepatide vs Retatrutide 2026',
  description:
    'Compare Semaglutide, Tirzepatide, and Retatrutide for weight loss — clinical data, mechanisms, dosing protocols, and which GLP-1 peptide is right for your goals.',
  keywords:
    'semaglutide vs tirzepatide, tirzepatide vs retatrutide, best GLP-1 peptide, GLP-1 comparison, semaglutide vs tirzepatide weight loss, retatrutide vs semaglutide',
  alternates: { canonical: 'https://www.peptidesclav.com/glp1-comparison' },
  openGraph: {
    title: 'Semaglutide vs Tirzepatide vs Retatrutide 2026',
    description:
      'Compare Semaglutide, Tirzepatide, and Retatrutide for weight loss — clinical data, mechanisms, dosing protocols, and which GLP-1 peptide is right for your goals.',
    type: 'website',
    url: 'https://www.peptidesclav.com/glp1-comparison',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GLP-1 Peptide Comparison — Semaglutide vs Tirzepatide vs Retatrutide' }],
  },
};

const compounds = [
  {
    name: 'Semaglutide',
    color: 'yellow',
    mechanism: 'GLP-1 Agonist',
    weightLoss: '14.9%',
    trial: 'STEP-1 (68 wks)',
    receptors: 'GLP-1',
    doseRange: '0.25–2.4mg/week',
    bestFor: 'First-time GLP-1 users, T2D, proven safety profile',
    productLink: '/products/semaglutide-10mg',
    productLabel: 'Semaglutide 10mg',
    price: '$79–159/vial',
    highlights: [
      'Proven GLP-1 receptor agonist — gold standard baseline',
      'Approved for T2D (Ozempic) and obesity (Wegovy)',
      'Well-understood titration and side effect profile',
      'Best entry point for GLP-1 naïve patients',
      'Easiest to source and most clinically documented',
    ],
  },
  {
    name: 'Tirzepatide',
    color: 'cyan',
    mechanism: 'Dual GIP+GLP-1',
    weightLoss: '22.5%',
    trial: 'SURMOUNT-1 (72 wks)',
    receptors: 'GLP-1 + GIP',
    doseRange: '2.5–15mg/week',
    bestFor: 'Maximum efficacy with Phase 3 validation, best overall value',
    productLink: '/products/tirzepatide-15mg',
    productLabel: 'Tirzepatide 15mg',
    price: '$99–179/vial',
    highlights: [
      'Dual agonist — GIP adds direct fat cell receptor action',
      'SURMOUNT-1: 22.5% mean body weight loss at 72 weeks',
      'Most clinically validated non-semaglutide option available',
      'GIP action works independently of appetite suppression',
      'Best overall efficacy-to-cost ratio in the GLP-1 class',
    ],
  },
  {
    name: 'Retatrutide',
    color: 'fuchsia',
    mechanism: 'Triple GLP-1+GIP+GCG',
    weightLoss: '24.2%',
    trial: 'Phase 2 (48 wks)',
    receptors: 'GLP-1 + GIP + Glucagon',
    doseRange: '2–12mg/week',
    bestFor: 'Maximum efficacy, NASH, experienced GLP-1 users',
    productLink: '/products/retatrutide-10mg',
    productLabel: 'Retatrutide 10mg',
    price: '$129–199/vial',
    highlights: [
      'Triple agonist — adds glucagon receptor activation',
      'Highest weight loss in any clinical trial: 24.2%',
      'Glucagon drives fat oxidation and thermogenesis directly',
      'Addresses NASH and liver fat beyond other GLP-1 agents',
      'Lowest body weight floor achieved in all peptide trials to date',
    ],
  },
];

const colorMap = {
  violet: {
    badge: 'bg-gray-900/15 border border-yellow-600/25 text-yellow-600',
    glow: 'bg-gray-900/8',
    border: 'border-yellow-600/20',
    icon: 'text-yellow-600',
    check: 'text-yellow-600',
    bar: 'bg-yellow-500',
    dot: 'bg-yellow-500',
    tag: 'text-yellow-500',
  },
  yellow: {
    badge: 'bg-gray-900/15 border border-yellow-600/25 text-yellow-600',
    glow: 'bg-gray-900/8',
    border: 'border-yellow-600/20',
    icon: 'text-yellow-600',
    check: 'text-yellow-600',
    bar: 'bg-yellow-500',
    dot: 'bg-yellow-500',
    tag: 'text-yellow-500',
  },
  cyan: {
    badge: 'bg-cyan-500/15 border border-cyan-500/25 text-yellow-600',
    glow: 'bg-cyan-500/8',
    border: 'border-cyan-500/20',
    icon: 'text-yellow-600',
    check: 'text-yellow-600',
    bar: 'bg-cyan-500',
    dot: 'bg-cyan-500',
    tag: 'text-cyan-300',
  },
  fuchsia: {
    badge: 'bg-fuchsia-600/15 border border-fuchsia-600/25 text-yellow-600',
    glow: 'bg-fuchsia-600/8',
    border: 'border-fuchsia-600/20',
    icon: 'text-yellow-600',
    check: 'text-yellow-600',
    bar: 'bg-fuchsia-500',
    dot: 'bg-fuchsia-500',
    tag: 'text-fuchsia-300',
  },
} as const;

const summaryCards = [
  {
    label: 'Best First GLP-1',
    compound: 'Semaglutide',
    reason: 'Proven, well-tolerated, easiest titration',
    color: 'yellow' as const,
    icon: <CheckCircle2 size={20} />,
  },
  {
    label: 'Best Overall',
    compound: 'Tirzepatide',
    reason: 'Phase 3 validated, superior dual-action efficacy',
    color: 'cyan' as const,
    icon: <Scale size={20} />,
  },
  {
    label: 'Best Efficacy',
    compound: 'Retatrutide',
    reason: 'Highest weight loss ever recorded in a clinical trial',
    color: 'fuchsia' as const,
    icon: <TrendingUp size={20} />,
  },
];

const decisionGuide = [
  {
    condition: 'New to GLP-1 peptides',
    recommendation: 'Semaglutide',
    detail: 'Proven, well-understood, easiest titration. The logical starting point.',
    color: 'yellow' as const,
  },
  {
    condition: 'Want maximum weight loss with Phase 3 data',
    recommendation: 'Tirzepatide',
    detail: 'SURMOUNT-1 is the largest and most rigorous GLP-1 trial available.',
    color: 'cyan' as const,
  },
  {
    condition: 'Want absolute maximum efficacy',
    recommendation: 'Retatrutide',
    detail: 'Highest recorded weight loss. Suitable for experienced users comfortable with newer compounds.',
    color: 'fuchsia' as const,
  },
  {
    condition: 'Primarily struggling with appetite control',
    recommendation: 'Semaglutide or Tirzepatide',
    detail: 'Both have robust appetite-suppression data. Tirzepatide adds GIP for extra fat-cell action.',
    color: 'cyan' as const,
  },
  {
    condition: 'Want metabolic/liver (NASH) benefits alongside fat loss',
    recommendation: 'Retatrutide',
    detail: 'Glucagon receptor activation provides liver fat reduction beyond other GLP-1 agents.',
    color: 'fuchsia' as const,
  },
];

export default function GLP1ComparisonPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-fuchsia-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">GLP-1 Peptides</span>
              <ChevronRight size={14} className="text-gray-800" />
              <span className="badge badge-cyan">Clinical Comparison</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">Semaglutide</span>
              <span className="text-gray-900"> vs </span>
              <span className="gradient-text">Tirzepatide</span>
              <span className="text-gray-900"> vs </span>
              <span className="gradient-text">Retatrutide</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
              A head-to-head comparison based on clinical trial data — weight loss percentages, receptor
              mechanisms, dosing protocols, and which compound is the right fit for your goals in 2026.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/glp1-fat-loss" className="btn-primary">
                GLP-1 Fat Loss Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn-secondary">
                Browse All Products
              </Link>
            </div>
          </div>

          {/* Quick stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Zap size={18} className="text-yellow-600" />, value: '14.9%', label: 'Semaglutide (STEP-1)' },
              { icon: <TrendingUp size={18} className="text-yellow-600" />, value: '22.5%', label: 'Tirzepatide (SURMOUNT-1)' },
              { icon: <Flame size={18} className="text-yellow-600" />, value: '24.2%', label: 'Retatrutide (Phase 2)' },
              { icon: <Scale size={18} className="text-gray-700" />, value: '3', label: 'Compounds compared' },
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

      {/* Quick Summary Cards */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Quick Summary</h2>
          <p className="text-gray-700 max-w-2xl">
            Not sure which compound to choose? Here's the short answer based on your primary goal.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {summaryCards.map((card) => {
            const c = colorMap[card.color];
            return (
              <div
                key={card.compound}
                className={`card p-6 border ${c.border} relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${c.glow} rounded-full blur-2xl`} />
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${c.badge}`}>
                  <span className={c.icon}>{card.icon}</span>
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-700 mb-1">
                  {card.label}
                </p>
                <p className={`text-2xl font-bold mb-2 ${c.tag}`}>{card.compound}</p>
                <p className="text-sm text-gray-700">{card.reason}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Side-by-Side Comparison
            </h2>
            <p className="text-gray-700 max-w-2xl">
              Clinical data, receptor targets, dosing ranges, and product links for each compound.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {compounds.map((c) => {
              const colors = colorMap[c.color as keyof typeof colorMap];
              return (
                <div
                  key={c.name}
                  className={`card p-6 border ${colors.border} relative overflow-hidden flex flex-col`}
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 ${colors.glow} rounded-full blur-3xl`} />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{c.name}</h3>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${colors.badge}`}>
                        {c.mechanism}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className={`text-3xl font-extrabold ${colors.tag}`}>{c.weightLoss}</p>
                      <p className="text-xs text-gray-700">weight loss</p>
                    </div>
                  </div>

                  {/* Data rows */}
                  <div className="space-y-3 mb-6 flex-1">
                    {[
                      { label: 'Trial', value: c.trial },
                      { label: 'Receptors', value: c.receptors },
                      { label: 'Weekly dose', value: c.doseRange },
                      { label: 'Price range', value: c.price },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between py-2 border-b"
                        style={{ borderColor: 'var(--border)' }}
                      >
                        <span className="text-xs text-gray-700 uppercase tracking-wider">{row.label}</span>
                        <span className="text-sm font-medium text-gray-700">{row.value}</span>
                      </div>
                    ))}
                    <div className="pt-1">
                      <p className="text-xs text-gray-700 uppercase tracking-wider mb-1.5">Best for</p>
                      <p className="text-sm text-gray-700">{c.bestFor}</p>
                    </div>
                  </div>

                  <Link
                    href={c.productLink}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors border ${colors.border} ${colors.icon} hover:bg-white/5`}
                  >
                    View {c.productLabel}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Deep-dive: Semaglutide */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">Deep Dive</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-900/15 border border-yellow-600/25 text-yellow-600">
                GLP-1 Agonist
              </span>
            </div>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Semaglutide</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Semaglutide is the proven entry point into GLP-1 therapy. Targeting the GLP-1 receptor
              exclusively, it powerfully reduces appetite and delays gastric emptying. With 68 weeks of
              STEP-1 data behind it and FDA approval for both T2D (Ozempic) and obesity (Wegovy), it
              remains the most clinically documented option in the class.
            </p>
            <ul className="space-y-3 mb-8">
              {compounds[0].highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-yellow-600" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/products/semaglutide-10mg" className="btn-primary">
                View Semaglutide 10mg
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="card p-6 border border-yellow-600/20">
            <h3 className="font-semibold text-gray-900 mb-4">STEP-1 Trial Results</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between items-center">
                <span>Trial name</span><span className="text-gray-900 font-medium">STEP-1</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Duration</span><span className="text-gray-900 font-medium">68 weeks</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Mean weight loss</span><span className="text-yellow-600 font-bold text-lg">14.9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Dose</span><span className="text-gray-900 font-medium">2.4mg/week</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Price range</span><span className="text-gray-900 font-medium">$79–159/vial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-dive: Tirzepatide */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="card p-6 border border-cyan-500/20 order-2 lg:order-1">
              <h3 className="font-semibold text-gray-900 mb-4">SURMOUNT-1 Trial Results</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex justify-between items-center">
                  <span>Trial name</span><span className="text-gray-900 font-medium">SURMOUNT-1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Duration</span><span className="text-gray-900 font-medium">72 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Mean weight loss</span><span className="text-yellow-600 font-bold text-lg">22.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Max dose</span><span className="text-gray-900 font-medium">15mg/week</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Price range</span><span className="text-gray-900 font-medium">$99–179/vial</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="badge">Deep Dive</span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/15 border border-cyan-500/25 text-yellow-600">
                  Dual GIP+GLP-1
                </span>
              </div>
              <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tirzepatide</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Tirzepatide's dual GIP+GLP-1 mechanism is what separates it from semaglutide. The GIP
                receptor co-agonism acts directly on fat cells and increases insulin sensitivity
                independently of appetite — explaining the 7-percentage-point superiority over semaglutide
                in head-to-head comparisons. With 72 weeks of Phase 3 data from SURMOUNT-1, it's the most
                validated non-semaglutide compound available.
              </p>
              <ul className="space-y-3 mb-8">
                {compounds[1].highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-yellow-600" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link href="/products/tirzepatide-15mg" className="btn-primary">
                View Tirzepatide 15mg
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-dive: Retatrutide */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">Deep Dive</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-fuchsia-600/15 border border-fuchsia-600/25 text-yellow-600">
                Triple GLP-1+GIP+GCG
              </span>
            </div>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Retatrutide</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Retatrutide adds a third receptor — glucagon — to the GLP-1+GIP dual mechanism of
              tirzepatide. Glucagon receptor activation drives direct fat oxidation, thermogenesis, and
              liver fat burning, adding a metabolic layer absent in the other two compounds. At 24.2% mean
              body weight loss in Phase 2 trials, it produced the lowest body weight floor ever recorded in
              a peptide clinical trial.
            </p>
            <ul className="space-y-3 mb-8">
              {compounds[2].highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-yellow-600" />
                  {h}
                </li>
              ))}
            </ul>
            <Link href="/products/retatrutide-10mg" className="btn-primary">
              View Retatrutide 10mg
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="card p-6 border border-fuchsia-600/20">
            <h3 className="font-semibold text-gray-900 mb-4">Phase 2 Trial Results</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between items-center">
                <span>Phase</span><span className="text-gray-900 font-medium">Phase 2 (Eli Lilly)</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Duration</span><span className="text-gray-900 font-medium">48 weeks</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Mean weight loss</span><span className="text-yellow-600 font-bold text-lg">24.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Max dose</span><span className="text-gray-900 font-medium">12mg/week</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Price range</span><span className="text-gray-900 font-medium">$129–199/vial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* How to Choose */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How to Choose</h2>
            <p className="text-gray-700 max-w-2xl">
              Match your situation to the right compound. These recommendations are based on clinical trial
              data, compound maturity, and user goals.
            </p>
          </div>
          <div className="space-y-4">
            {decisionGuide.map((item, i) => {
              const c = colorMap[item.color];
              return (
                <div
                  key={i}
                  className="rounded-xl border p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                >
                  <div className="sm:w-1/2">
                    <p className="text-xs text-gray-700 uppercase tracking-wider mb-1">If you…</p>
                    <p className="font-semibold text-gray-900">{item.condition}</p>
                  </div>
                  <div className="sm:w-1/2 flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${c.dot}`} />
                    <div>
                      <span className={`text-sm font-bold ${c.tag}`}>{item.recommendation}</span>
                      <p className="text-xs text-gray-700 mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stacking with GH Peptides */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">Stacking Guide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Combining GLP-1 with GH Peptides
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              One of the most common protocols for experienced users is pairing any GLP-1 compound with
              Ipamorelin/CJC-1295. The reason is straightforward: aggressive fat loss from GLP-1 agents
              creates a significant caloric deficit, and without anabolic support, lean muscle mass is
              lost alongside fat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ipamorelin stimulates growth hormone release in a pulsatile, ghrelin-independent manner,
              preserving lean tissue during aggressive cuts. CJC-1295 extends GH half-life, making the
              combination significantly more effective than either alone. Together they act as an
              anabolic anchor during GLP-1 fat loss cycles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/glp1-fat-loss" className="btn-primary">
                View GLP-1 Fat Loss Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/products/ipamorelin-cjc" className="btn-secondary">
                Ipamorelin/CJC-1295
              </Link>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 mb-5">Why Add GH Peptides?</h3>
            <div className="space-y-4">
              {[
                { title: 'Muscle preservation', desc: 'GLP-1 creates a caloric deficit; Ipamorelin/CJC preserves lean mass during aggressive fat loss.', color: 'yellow' as const },
                { title: 'GH pulse optimization', desc: 'Ipamorelin triggers natural GH pulses — no blunting of the natural axis, no cortisol spike.', color: 'cyan' as const },
                { title: 'Body composition', desc: 'Users report improved fat-to-muscle ratio vs GLP-1 alone, even at identical weight loss.', color: 'fuchsia' as const },
                { title: 'Recovery support', desc: 'CJC-1295 keeps GH elevated between pulses, supporting connective tissue and sleep quality.', color: 'yellow' as const },
              ].map((item) => {
                const c = colorMap[item.color];
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${c.dot}`} />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-700 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
          <p className="text-gray-700 mb-10 max-w-xl mx-auto">
            Browse individual compounds or go straight to the GLP-1 fat loss stack that combines the
            best peptides for maximum results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/stacks/glp1-fat-loss" className="btn-primary">
              GLP-1 Fat Loss Stack
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { href: '/products/semaglutide-10mg', label: 'Semaglutide 10mg', color: 'yellow' as const },
              { href: '/products/tirzepatide-15mg', label: 'Tirzepatide 15mg', color: 'cyan' as const },
              { href: '/products/retatrutide-10mg', label: 'Retatrutide 10mg', color: 'fuchsia' as const },
            ].map((item) => {
              const c = colorMap[item.color];
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-colors hover:bg-white/5 ${c.border} ${c.icon}`}
                >
                  {item.label}
                  <ArrowRight size={14} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <RelatedReading pageKey="/glp1-comparison" />
    </div>
  );
}
