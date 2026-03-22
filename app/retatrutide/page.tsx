import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Flame,
  HelpCircle,
  TrendingUp,
  Zap,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Retatrutide | Triple GLP-1/GIP/Glucagon Agonist — 24% Weight Loss',
  description:
    'Retatrutide is a triple GLP-1/GIP/Glucagon agonist achieving 24.2% weight loss in Phase 2 trials — the highest ever recorded. Complete dosing protocol and guide.',
  keywords:
    'retatrutide, retatrutide weight loss, retatrutide vs tirzepatide, triple agonist peptide, GLP-1 GIP glucagon agonist, retatrutide dosing, retatrutide protocol',
  alternates: { canonical: 'https://www.peptidesclav.com/retatrutide' },
  openGraph: {
    title: 'Retatrutide | Triple GLP-1/GIP/Glucagon Agonist — 24% Weight Loss',
    description:
      'Retatrutide is a triple GLP-1/GIP/Glucagon agonist achieving 24.2% weight loss in Phase 2 trials — the highest ever recorded. Complete dosing protocol and guide.',
    type: 'website',
    url: 'https://www.peptidesclav.com/retatrutide',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Retatrutide — Triple GLP-1/GIP/Glucagon Agonist Guide' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Retatrutide Guide',
  url: 'https://www.peptidesclav.com/retatrutide',
  about: {
    '@type': 'Drug',
    name: 'Retatrutide',
    description: 'Triple GLP-1/GIP/Glucagon receptor agonist for weight loss',
    activeIngredient: 'Retatrutide',
  },
};

const faqs = [
  {
    q: 'What is retatrutide?',
    a: 'Retatrutide is a triple receptor agonist developed by Eli Lilly that simultaneously activates GLP-1, GIP, and glucagon receptors. It is the most efficacious weight loss compound ever studied in clinical trials, achieving 24.2% mean body weight loss over 48 weeks in Phase 2 data. It is currently in Phase 3 development.',
  },
  {
    q: 'Retatrutide vs Tirzepatide — which is better?',
    a: 'Retatrutide produces greater weight loss (24.2% vs 22.5%) and adds glucagon receptor activation, which drives thermogenesis and liver fat oxidation beyond what tirzepatide achieves. However, tirzepatide has more mature Phase 3 data (SURMOUNT-1, 72 weeks) and a longer clinical track record. For pure efficacy, retatrutide leads. For validated long-term data, tirzepatide is currently ahead.',
  },
  {
    q: 'What are the retatrutide side effects?',
    a: 'The most common side effects in Phase 2 trials were nausea, vomiting, diarrhea, and constipation — consistent with the GLP-1 drug class. These were dose-dependent and most frequent during titration. Unlike some glucagon agonists used in isolation, retatrutide did not significantly raise blood glucose because the GLP-1 component offsets glucagon\'s hyperglycemic tendency.',
  },
  {
    q: 'Is retatrutide approved by the FDA?',
    a: 'No. As of 2026, retatrutide is in Phase 3 clinical trials and has not received FDA approval. It is available for research purposes. Phase 3 data is anticipated in 2026–2027, with a potential NDA submission to follow.',
  },
];

const titrationSteps = [
  { weeks: 'Weeks 1–4', dose: '2mg/week', note: 'Starting dose — tolerance establishment' },
  { weeks: 'Weeks 5–8', dose: '4mg/week', note: 'Most users reach therapeutic effect here' },
  { weeks: 'Weeks 9–12', dose: '8mg/week', note: 'Intermediate dose — excellent results' },
  { weeks: 'Week 13+', dose: '12mg/week', note: 'Maximum dose — Phase 2 peak efficacy' },
];

const trialData = [
  { label: 'Semaglutide', pct: 14.9, color: 'bg-violet-500', widthPct: '62' },
  { label: 'Tirzepatide', pct: 22.5, color: 'bg-cyan-500', widthPct: '93' },
  { label: 'Retatrutide', pct: 24.2, color: 'bg-fuchsia-500', widthPct: '100' },
];

const receptorAdvantages = [
  {
    receptor: 'GLP-1',
    color: 'violet' as const,
    title: 'Appetite reduction',
    desc: 'GLP-1 receptor activation suppresses hunger signals in the hypothalamus, slows gastric emptying, and reduces caloric intake — the mechanism shared by semaglutide and tirzepatide.',
  },
  {
    receptor: 'GIP',
    color: 'cyan' as const,
    title: 'Direct fat cell action + insulin sensitivity',
    desc: 'GIP receptors are expressed directly on adipocytes. GIP agonism reduces fat storage and increases insulin sensitivity independently of appetite suppression — the mechanism added by tirzepatide.',
  },
  {
    receptor: 'Glucagon',
    color: 'fuchsia' as const,
    title: 'Fat oxidation + thermogenesis + liver fat burning',
    desc: 'Glucagon receptor activation increases energy expenditure via thermogenesis, promotes hepatic fat oxidation (making it uniquely effective for NASH), and stimulates lipolysis directly. At GLP-1-balanced doses, muscle is preserved because the GLP-1 component offsets glucagon\'s catabolic and hyperglycemic tendency.',
  },
];

const colorMap = {
  violet: {
    badge: 'bg-violet-600/15 border border-violet-600/25 text-violet-400',
    border: 'border-violet-600/20',
    glow: 'bg-violet-600/8',
    check: 'text-violet-400',
    tag: 'text-violet-300',
    dot: 'bg-violet-500',
  },
  cyan: {
    badge: 'bg-cyan-500/15 border border-cyan-500/25 text-cyan-400',
    border: 'border-cyan-500/20',
    glow: 'bg-cyan-500/8',
    check: 'text-cyan-400',
    tag: 'text-cyan-300',
    dot: 'bg-cyan-500',
  },
  fuchsia: {
    badge: 'bg-fuchsia-600/15 border border-fuchsia-600/25 text-fuchsia-400',
    border: 'border-fuchsia-600/20',
    glow: 'bg-fuchsia-600/8',
    check: 'text-fuchsia-400',
    tag: 'text-fuchsia-300',
    dot: 'bg-fuchsia-500',
  },
} as const;

const whoShouldChoose = [
  'Experienced GLP-1 users looking for maximum efficacy beyond tirzepatide',
  'People with NASH or fatty liver disease needing hepatic fat reduction',
  'Those who have plateaued on tirzepatide and need a next step',
  'People prioritizing metabolic and cardiovascular outcomes alongside weight loss',
  'Users seeking the lowest achievable body weight floor based on clinical data',
];

export default function RetatrutidePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">GLP-1 Peptides</span>
              <ChevronRight size={14} className="text-zinc-600" />
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-fuchsia-600/15 border border-fuchsia-600/25 text-fuchsia-400">
                Triple Agonist
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-white">Retatrutide: </span>
              <span className="gradient-text">The Triple Agonist</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              The most effective weight loss peptide ever studied — 24.2% body weight reduction in Phase 2
              trials via simultaneous GLP-1, GIP, and glucagon receptor activation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products/retatrutide-10mg" className="btn-primary">
                View Retatrutide 10mg
                <ArrowRight size={16} />
              </Link>
              <Link href="/glp1-comparison" className="btn-secondary">
                Full GLP-1 Comparison
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <TrendingUp size={18} className="text-fuchsia-400" />, value: '24.2%', label: 'Weight loss — Phase 2' },
              { icon: <Zap size={18} className="text-violet-400" />, value: '3', label: 'Receptor targets' },
              { icon: <Flame size={18} className="text-fuchsia-400" />, value: '#1', label: 'Highest clinical trial result' },
              { icon: <CheckCircle2 size={18} className="text-cyan-400" />, value: 'GLP-1+GIP+GCG', label: 'Mechanism' },
            ].map((stat) => (
              <div key={stat.label} className="card p-4 flex items-start gap-3">
                <div className="mt-0.5">{stat.icon}</div>
                <div>
                  <p className="text-lg font-bold text-white leading-tight">{stat.value}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* What Makes Retatrutide Different */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            What Makes Retatrutide Different
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Every receptor adds a distinct, complementary mechanism. The three-receptor combination
            produces effects impossible with single or dual agonists.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {receptorAdvantages.map((item) => {
            const c = colorMap[item.color];
            return (
              <div key={item.receptor} className={`card p-6 border ${c.border} relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-28 h-28 ${c.glow} rounded-full blur-2xl`} />
                <div className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold mb-4 ${c.badge}`}>
                  {item.receptor} Receptor
                </div>
                <h3 className="font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Phase 2 Trial Data */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="badge">Clinical Data</span>
                <span className="badge badge-cyan">Eli Lilly TRIUMPH Trial</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Phase 2 Trial Results</h2>
              <div className="space-y-4 text-sm text-zinc-400 mb-6">
                {[
                  { label: 'Sponsor', value: 'Eli Lilly' },
                  { label: 'Participants', value: '338' },
                  { label: 'Duration', value: '48 weeks' },
                  { label: 'Doses tested', value: '2mg / 4mg / 8mg / 12mg' },
                  { label: '12mg group result', value: '24.2% mean body weight reduction' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-2.5 border-b"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <span className="text-zinc-500">{row.label}</span>
                    <span className="font-medium text-white">{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-500">
                Phase 3 (TRIUMPH-3) ongoing. Results anticipated 2026–2027.
              </p>
            </div>

            {/* Bar comparison */}
            <div className="card p-6">
              <h3 className="font-semibold text-white mb-6">
                Clinical Weight Loss Comparison
              </h3>
              <div className="space-y-5">
                {trialData.map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-zinc-300">{row.label}</span>
                      <span className="text-sm font-bold text-white">{row.pct}%</span>
                    </div>
                    <div
                      className="h-3 rounded-full overflow-hidden"
                      style={{ backgroundColor: 'var(--border)' }}
                    >
                      <div
                        className={`h-full rounded-full ${row.color}`}
                        style={{ width: `${row.widthPct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-600 mt-6">
                Sema: STEP-1 (68 wks) · Tirz: SURMOUNT-1 (72 wks) · Reta: Phase 2 (48 wks)
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Dosing Protocol */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">Protocol</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Dosing Protocol</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Retatrutide follows the same slow titration approach as other GLP-1 agents — starting low
              to minimize GI side effects before stepping up. Most users report excellent results at the
              4–8mg range without needing to reach the maximum 12mg dose.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { label: 'Injection route', value: 'Subcutaneous (SC)' },
                { label: 'Frequency', value: 'Once weekly, same day each week' },
                { label: 'Timing', value: 'Fasted preferred (morning)' },
                { label: 'Sites', value: 'Abdomen, thigh, or upper arm' },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-2.5 border-b"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <span className="text-sm text-zinc-500">{row.label}</span>
                  <span className="text-sm font-medium text-white">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Titration ladder */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
              Standard Titration Schedule
            </h3>
            {titrationSteps.map((step, i) => (
              <div
                key={i}
                className={`card p-5 border relative overflow-hidden ${
                  i === titrationSteps.length - 1
                    ? 'border-fuchsia-600/30'
                    : 'border-transparent'
                }`}
              >
                {i === titrationSteps.length - 1 && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-600/8 rounded-full blur-2xl" />
                )}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    {step.weeks}
                  </span>
                  <span
                    className={`text-lg font-bold ${
                      i === titrationSteps.length - 1 ? 'text-fuchsia-400' : 'text-white'
                    }`}
                  >
                    {step.dose}
                  </span>
                </div>
                <p className="text-xs text-zinc-500">{step.note}</p>
              </div>
            ))}
            <p className="text-xs text-zinc-600 pt-2">
              Most users find their sweet spot at 4–8mg. Escalate only if needed.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Choose Retatrutide */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Who Should Choose Retatrutide
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Retatrutide is not the default starting point — it's the escalation for those who need
              more than semaglutide or tirzepatide can deliver.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoShouldChoose.map((point, i) => (
              <div
                key={i}
                className="rounded-xl border p-5 flex items-start gap-3"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <CheckCircle2 size={16} className="text-fuchsia-400 mt-0.5 shrink-0" />
                <p className="text-sm text-zinc-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Retatrutide Products</h2>
          <p className="text-zinc-400">Choose the vial size that fits your protocol.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {[
            {
              href: '/products/retatrutide-10mg',
              label: 'Retatrutide 10mg',
              sub: '10mg vial — ideal for 2–8mg/week protocols',
              detail: 'Best value for most titration schedules. Covers 1–5 weeks at therapeutic doses.',
            },
            {
              href: '/products/retatrutide-15mg',
              label: 'Retatrutide 15mg',
              sub: '15mg vial — for 8–12mg/week max dose',
              detail: 'Larger vial for users at or approaching the 12mg maximum weekly dose.',
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card p-6 border border-fuchsia-600/20 hover:border-fuchsia-600/40 transition-colors group block"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-white group-hover:text-fuchsia-300 transition-colors">
                    {item.label}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">{item.sub}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-fuchsia-600 group-hover:text-fuchsia-400 transition-colors shrink-0 mt-1"
                />
              </div>
              <p className="text-sm text-zinc-400">{item.detail}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Compare vs others */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              How Retatrutide Compares
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              A quick snapshot of where retatrutide sits in the GLP-1 class.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                label: 'vs Semaglutide',
                delta: '+9.3%',
                detail: 'More weight loss. Adds GIP and glucagon receptor mechanisms.',
                color: 'violet' as const,
              },
              {
                label: 'vs Tirzepatide',
                delta: '+1.7%',
                detail: 'Modest additional weight loss, but adds glucagon-driven thermogenesis and liver benefits.',
                color: 'cyan' as const,
              },
              {
                label: 'vs Class Average',
                delta: 'Best in class',
                detail: 'No compound in any clinical trial has produced greater mean body weight reduction.',
                color: 'fuchsia' as const,
              },
            ].map((item) => {
              const c = colorMap[item.color];
              return (
                <div key={item.label} className={`card p-5 border ${c.border}`}>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">{item.label}</p>
                  <p className={`text-2xl font-bold mb-2 ${c.tag}`}>{item.delta}</p>
                  <p className="text-sm text-zinc-400">{item.detail}</p>
                </div>
              );
            })}
          </div>
          <Link
            href="/glp1-comparison"
            className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
          >
            Full GLP-1 comparison table
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle size={22} className="text-fuchsia-400" />
            <h2 className="text-2xl font-bold text-white">Retatrutide FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border p-5"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <p className="font-semibold text-white mb-2">{faq.q}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedReading pageKey="/retatrutide" />
    </div>
  );
}
