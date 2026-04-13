import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  HelpCircle,
  Shield,
  Syringe,
  Zap,
  AlertTriangle,
  GitMerge,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'BPC-157 vs TB-500: Which Healing Peptide Should You Use?',
  description:
    'BPC-157 vs TB-500 head-to-head — mechanisms, injury types, dosing protocols, and when to combine both. Based on research and clinical data.',
  keywords:
    'bpc-157 vs tb-500, tb-500 vs bpc-157, bpc-157 and tb-500 stack, healing peptides comparison, tb-500 vs bpc-157 for tendons, bpc-157 tendon repair',
  alternates: { canonical: 'https://www.peptidesclav.com/comparisons/bpc-157-vs-tb-500' },
  openGraph: {
    title: 'BPC-157 vs TB-500: Which Healing Peptide Should You Use?',
    description:
      'BPC-157 vs TB-500 head-to-head — mechanisms, injury types, dosing protocols, and when to combine both. Based on research and clinical data.',
    url: 'https://www.peptidesclav.com/comparisons/bpc-157-vs-tb-500',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BPC-157 vs TB-500 Comparison' }],
  },
};

const quickAnswerCards = [
  {
    label: 'Best for Localized Injuries',
    winner: 'BPC-157',
    reason: 'Gut, tendon, nerve, targeted tissue repair',
    accent: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-400/40',
  },
  {
    label: 'Best for Systemic Recovery',
    winner: 'TB-500',
    reason: 'Whole-body inflammation, flexibility, stamina',
    accent: 'text-yellow-600',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
  },
  {
    label: 'Best Overall',
    winner: 'Stack Both',
    reason: 'Synergistic — local + systemic healing simultaneously',
    accent: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-400/40',
  },
];

const comparisonRows = [
  { label: 'Origin', bpc: 'Gastric juice pentadecapeptide', tb: 'Thymosin Beta-4 fragment (Tβ4)' },
  { label: 'Mechanism', bpc: 'NO synthase pathway, GH receptor upregulation', tb: 'G-actin binding, cell migration signaling' },
  { label: 'Action type', bpc: 'Local — concentrated at injection site', tb: 'Systemic — distributes throughout body' },
  { label: 'Best injury types', bpc: 'Tendons, ligaments, gut, nerves, connective tissue', tb: 'Muscle tears, systemic inflammation, fibrosis' },
  { label: 'Standard dose', bpc: '250–500 mcg per injection', tb: '5 mg per injection' },
  { label: 'Frequency', bpc: 'Twice daily', tb: 'Twice per week' },
  { label: 'Injection type', bpc: 'Subcutaneous near injury site (or systemic)', tb: 'Subcutaneous — abdomen or thigh' },
  { label: 'Onset time', bpc: '1–2 weeks for initial pain relief', tb: '2–3 weeks for systemic effects' },
  { label: 'Cost per cycle', bpc: 'Lower — smaller per-dose amount', tb: 'Higher per vial — fewer injections needed' },
];

const injuryGuide = [
  {
    injury: 'Tendon injury',
    primary: 'BPC-157',
    support: 'TB-500 for systemic inflammation',
    recommendation: 'BPC-157 primary + TB-500',
    accentPrimary: 'text-yellow-600',
    accentSupport: 'text-yellow-600',
  },
  {
    injury: 'Gut / digestive issues',
    primary: 'BPC-157 only',
    support: 'Oral preferred — no TB-500 needed',
    recommendation: 'BPC-157 only',
    accentPrimary: 'text-yellow-600',
    accentSupport: 'text-gray-700',
  },
  {
    injury: 'Muscle tear',
    primary: 'TB-500',
    support: 'BPC-157 for nerve and connective tissue',
    recommendation: 'TB-500 primary + BPC-157',
    accentPrimary: 'text-yellow-600',
    accentSupport: 'text-yellow-600',
  },
  {
    injury: 'Nerve damage',
    primary: 'BPC-157 primary',
    support: 'Strongest nerve-specific evidence',
    recommendation: 'BPC-157 primary',
    accentPrimary: 'text-yellow-600',
    accentSupport: 'text-gray-700',
  },
  {
    injury: 'General inflammation / whole-body recovery',
    primary: 'TB-500 primary',
    support: 'Systemic action addresses whole-body burden',
    recommendation: 'TB-500 primary',
    accentPrimary: 'text-yellow-600',
    accentSupport: 'text-gray-700',
  },
  {
    injury: 'Post-surgery',
    primary: 'Stack both',
    support: 'Maximum healing signal from day 1',
    recommendation: 'Stack both',
    accentPrimary: 'text-yellow-600',
    accentSupport: 'text-yellow-600',
  },
  {
    injury: 'ACL / major joint',
    primary: 'Stack both',
    support: 'Prioritize BPC-157 injection at injury site',
    recommendation: 'Stack both — BPC-157 local',
    accentPrimary: 'text-yellow-600',
    accentSupport: 'text-yellow-600',
  },
];

const bpc157Mechanism = [
  'Stable gastric pentadecapeptide (15 amino acids)',
  'Upregulates GH receptors locally at injection site',
  'Promotes angiogenesis — new blood vessel formation at injury',
  'Heals tendons, ligaments, gut lining, and nerves',
  'Works via nitric oxide (NO) synthase pathway',
];

const tb500Mechanism = [
  'Synthetic fragment of Thymosin Beta-4 protein',
  'Binds to G-actin — regulates cell structure systemically',
  'Reduces whole-body inflammation and fibrosis',
  'Promotes cell migration and tissue regeneration',
  'Improves flexibility and reduces scar adhesion formation',
];

const sideEffects = [
  {
    peptide: 'BPC-157',
    profile: 'Excellent safety profile across 30+ years of research',
    effects: [
      'Mild injection site irritation in some users',
      'Very rare: transient nausea (especially oral form)',
      'No hormonal interference or suppression reported',
      'No known toxicity in research models at therapeutic doses',
    ],
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-400/40',
  },
  {
    peptide: 'TB-500',
    profile: 'Well-tolerated in clinical and research settings',
    effects: [
      'Mild injection site redness occasionally reported',
      'Transient fatigue in first 1–2 weeks of loading phase',
      'Theoretical concern: growth factor for latent tumors (not demonstrated at therapeutic doses)',
      'No significant hormonal or organ-level toxicity reported',
    ],
    color: 'text-yellow-600',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
  },
];

const faqs = [
  {
    q: 'Can I take BPC-157 and TB-500 at the same time?',
    a: 'Yes — they work via entirely different mechanisms and have no known negative interactions. BPC-157 operates through the NO synthase pathway locally, while TB-500 binds G-actin systemically. Running them simultaneously is the most popular healing stack in the peptide community for exactly this reason.',
  },
  {
    q: 'Which is better for tendons, BPC-157 or TB-500?',
    a: 'BPC-157 is superior for localized tendon and ligament repair. Its mechanism directly targets the root causes of tendon healing failure: poor vascularity, disordered collagen, and weak fibroblast signaling. TB-500 plays a valuable supporting role by reducing the systemic inflammatory load around the injury site, which otherwise slows BPC-157\'s local action.',
  },
  {
    q: 'How long does the BPC-157 and TB-500 stack take to work?',
    a: 'Most users report measurable pain reduction within 1–2 weeks of starting the stack. Structural tissue healing — collagen remodeling, scar tissue reduction, restored tensile strength — requires 6–12 weeks. The timeline depends on injury chronicity: acute injuries (under 3 months) respond faster than chronic tendinosis or post-surgical cases.',
  },
  {
    q: 'Is BPC-157 or TB-500 better for gut issues?',
    a: 'BPC-157 by a wide margin. It was originally isolated from gastric juice and has 30+ years of gut-specific research behind it, including models of Crohn\'s disease, IBD, leaky gut, and gastrointestinal ulcers. TB-500 has no meaningful gut-specific research. For digestive issues, use BPC-157 orally (capsule or dissolved in water) rather than injecting it — this concentrates the peptide in the GI tract.',
  },
  {
    q: 'Do I need to cycle BPC-157 and TB-500?',
    a: 'Standard cycling for BPC-157 is 8 weeks on, 4 weeks off — though some users run longer courses without apparent issues. TB-500 is typically used in acute loading phases of 6–8 weeks (often at a higher loading dose in the first 2 weeks) then discontinued until the next injury event or recovery phase. There is no established need for ongoing cycling of TB-500 between active recovery phases.',
  },
];

export default function BPC157vsTB500Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="badge hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-800" />
            <span className="badge badge-cyan">Comparisons</span>
            <ChevronRight size={14} className="text-gray-800" />
            <span className="badge">BPC-157 vs TB-500</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">BPC-157</span>
              <span className="text-gray-900"> vs </span>
              <span className="gradient-text">TB-500</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Both are gold-standard healing peptides — but they work through entirely different
              mechanisms. This guide breaks down exactly which to use for your injury type, how they
              compare head-to-head, and why stacking them produces synergistic results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/ultimate-healing" className="btn-primary">
                Ultimate Healing Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/products/bpc-157" className="btn-secondary">
                View BPC-157
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Zap size={18} className="text-yellow-600" />, value: 'Local vs Systemic', label: 'Key mechanism difference' },
              { icon: <GitMerge size={18} className="text-yellow-600" />, value: '2×', label: 'Speed advantage of stacking both' },
              { icon: <Syringe size={18} className="text-yellow-600" />, value: '250mcg', label: 'BPC-157 standard dose' },
              { icon: <Shield size={18} className="text-yellow-600" />, value: '5mg', label: 'TB-500 standard dose' },
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

      {/* Quick Answer Summary */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Quick Answer</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Which Should You Use?
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          The answer depends on your injury type and goals. Here is the short version before we
          go deep into the mechanisms.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {quickAnswerCards.map((card) => (
            <div
              key={card.label}
              className={`card p-6 border ${card.border}`}
              style={{ background: 'var(--bg-card)' }}
            >
              <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                <CheckCircle2 size={20} className={card.accent} />
              </div>
              <p className="text-xs text-gray-700 uppercase tracking-wider mb-1">{card.label}</p>
              <p className={`text-2xl font-extrabold mb-3 ${card.accent}`}>{card.winner}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{card.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mechanism Comparison */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Mechanisms</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            How Each Peptide Works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* BPC-157 */}
            <div
              className="card p-6 border border-yellow-400/40"
              style={{ background: 'var(--bg)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/15 flex items-center justify-center">
                  <Syringe size={20} className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">BPC-157</p>
                  <p className="text-xs text-gray-700">Body Protection Compound</p>
                </div>
              </div>
              <ul className="space-y-3">
                {bpc157Mechanism.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={14} className="text-yellow-600 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            {/* TB-500 */}
            <div
              className="card p-6 border border-cyan-500/30"
              style={{ background: 'var(--bg)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <Shield size={20} className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">TB-500</p>
                  <p className="text-xs text-gray-700">Thymosin Beta-4 Fragment</p>
                </div>
              </div>
              <ul className="space-y-3">
                {tb500Mechanism.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={14} className="text-yellow-600 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Head-to-Head Table */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Head-to-Head</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          BPC-157 vs TB-500 Comparison Table
        </h2>
        <div className="card overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                  <th className="text-left p-4 text-gray-700 font-semibold w-1/3">Category</th>
                  <th className="text-left p-4 text-yellow-600 font-semibold">BPC-157</th>
                  <th className="text-left p-4 text-yellow-600 font-semibold">TB-500</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    style={{
                      backgroundColor: i % 2 === 0 ? 'var(--bg)' : 'var(--bg-card)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <td className="p-4 text-gray-700 font-medium">{row.label}</td>
                    <td className="p-4 text-gray-700">{row.bpc}</td>
                    <td className="p-4 text-gray-700">{row.tb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Injury Decision Guide */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Decision Guide</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Which to Use for Your Injury
          </h2>
          <p className="text-gray-700 mb-10 max-w-2xl">
            Match your injury type to the right protocol. When in doubt, stacking both is always a
            valid choice — there are no known negative interactions.
          </p>
          <div className="space-y-3">
            {injuryGuide.map((item) => (
              <div
                key={item.injury}
                className="card p-5 border flex flex-col sm:flex-row sm:items-center gap-4"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <div className="sm:w-1/3">
                  <p className="font-semibold text-gray-900 text-sm">{item.injury}</p>
                </div>
                <div className="sm:w-1/3">
                  <span className={`text-sm font-bold ${item.accentPrimary}`}>{item.primary}</span>
                </div>
                <div className="sm:w-1/3">
                  <p className={`text-xs ${item.accentSupport}`}>{item.support}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Stacking Protocol */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Stack Protocol</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          BPC-157 + TB-500 Stack Protocol
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          Running both simultaneously produces synergistic results: BPC-157 handles the local tissue
          repair while TB-500 systemically reduces the inflammatory environment that slows healing.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div
            className="card p-6 border border-yellow-400/40"
            style={{ background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">BPC-157</span>
              <span className="text-xs text-gray-700">Local healing</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Dose</span>
                <span className="text-gray-900 font-semibold">250–500 mcg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Frequency</span>
                <span className="text-gray-900 font-semibold">Twice daily</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Injection</span>
                <span className="text-gray-900 font-semibold">Near injury site (subcutaneous)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Cycle</span>
                <span className="text-gray-900 font-semibold">8 weeks on, 4 weeks off</span>
              </div>
            </div>
          </div>
          <div
            className="card p-6 border border-cyan-500/30"
            style={{ background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="badge badge-cyan">TB-500</span>
              <span className="text-xs text-gray-700">Systemic support</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Dose</span>
                <span className="text-gray-900 font-semibold">5 mg per injection</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Frequency</span>
                <span className="text-gray-900 font-semibold">Twice per week</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Injection</span>
                <span className="text-gray-900 font-semibold">Abdomen or thigh (systemic)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Cycle</span>
                <span className="text-gray-900 font-semibold">6–8 week loading phases</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card p-6 border border-yellow-500/20"
          style={{ background: 'var(--bg-card)' }}
        >
          <div className="flex items-start gap-3">
            <GitMerge size={20} className="text-yellow-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 mb-2">Why They Are Synergistic</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                BPC-157 operates locally — it concentrates at the injection site, upregulating GH
                receptors and promoting angiogenesis precisely where the tissue is damaged. TB-500
                circulates systemically, suppressing the whole-body inflammatory signaling cascade
                that would otherwise flood the injury site and slow BPC-157&apos;s local repair work.
                The result is a more favorable local healing environment acting faster than either
                peptide could achieve alone. Think of BPC-157 as the construction crew and TB-500 as
                the crew clearing the road so the trucks can get through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Side Effects & Safety */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Safety Profile</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Side Effects &amp; Safety
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sideEffects.map((item) => (
              <div
                key={item.peptide}
                className={`card p-6 border ${item.border}`}
                style={{ background: 'var(--bg)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle size={18} className={item.color} />
                  <p className={`font-bold ${item.color}`}>{item.peptide}</p>
                </div>
                <p className="text-xs text-gray-700 mb-4">{item.profile}</p>
                <ul className="space-y-2">
                  {item.effects.map((effect) => (
                    <li key={effect} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${item.bg}`} />
                      {effect}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="mt-6 card p-4 border border-zinc-600/30 flex items-start gap-3"
            style={{ background: 'var(--bg)' }}
          >
            <Shield size={16} className="text-gray-700 shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700 leading-relaxed">
              <span className="text-gray-700 font-semibold">Research disclaimer: </span>
              Both peptides are for research purposes. Neither has completed Phase III clinical trials
              or received regulatory approval for human use. Consult a qualified healthcare provider
              before use.
            </p>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* FAQ */}
      <section className="py-10 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle size={20} className="text-yellow-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card p-6 border"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
            >
              <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start the Stack?
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-8">
            The Ultimate Healing Stack includes both BPC-157 and TB-500 with complete protocol
            guidance — the most powerful healing combination available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/stacks/ultimate-healing" className="btn-primary">
              Ultimate Healing Stack
              <ArrowRight size={16} />
            </Link>
            <Link href="/products/bpc-157" className="btn-secondary">
              BPC-157 Product Page
            </Link>
          </div>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/comparisons/bpc-157-vs-tb-500" />
    </div>
  );
}
