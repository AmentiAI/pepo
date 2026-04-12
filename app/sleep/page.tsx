import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ShieldCheck, Clock, ArrowRight, CheckCircle2, HelpCircle, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Peptides for Sleep | Ipamorelin & CJC-1295 Protocol',
  description:
    'Ipamorelin and CJC-1295 dramatically improve deep sleep quality by enhancing GH pulsatility during sleep. Evidence-based dosing for sleep optimization and recovery.',
  keywords: 'peptides for sleep, Ipamorelin sleep, CJC-1295 sleep benefits, deep sleep peptides, sleep quality peptides, GH peptides sleep, recovery peptides',
  alternates: { canonical: 'https://www.peptidesclav.com/sleep' },
  openGraph: {
    title: 'Peptides for Sleep | Ipamorelin & CJC-1295 Protocol',
    description:
      'Ipamorelin and CJC-1295 dramatically improve deep sleep quality by enhancing GH pulsatility during sleep.',
    type: 'website',
    url: 'https://www.peptidesclav.com/sleep',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Peptides for Sleep — Ipamorelin and CJC-1295 Deep Sleep Protocol' }],
  },
};

const sleepFaqs = [
  {
    q: 'Why does Ipamorelin improve sleep?',
    a: 'The pituitary releases 70-80% of daily growth hormone during deep sleep. Ipamorelin mimics ghrelin\'s action at the GH secretagogue receptor, triggering clean GH pulses without cortisol or prolactin elevation. This amplifies the natural nocturnal GH surge, which directly deepens slow-wave sleep architecture and produces significantly more restorative sleep cycles.',
  },
  {
    q: 'When should I inject for maximum sleep benefit?',
    a: 'Inject Ipamorelin/CJC-1295 30-45 minutes before sleep, in a fully fasted state (minimum 2 hours after last meal). Insulin suppresses GH release, so food timing is critical. This aligns the peptide\'s peak action with the first deep sleep phase, typically occurring 60-90 minutes after sleep onset.',
  },
  {
    q: 'How quickly will I notice sleep improvements?',
    a: 'Most users report noticeably deeper sleep and more vivid dreams within 1-2 weeks. By weeks 3-4, measurable improvements in sleep efficiency and morning recovery markers (reduced soreness, better focus) become apparent. Full sleep architecture normalization typically occurs by weeks 6-8.',
  },
  {
    q: 'Can peptides help with sleep if I have insomnia?',
    a: 'GH peptides address sleep quality rather than sleep initiation per se. For those who can fall asleep but don\'t feel rested, the improvement is dramatic. For those with difficulty falling asleep, Epithalon (pineal gland support) and NAD+ (circadian rhythm normalization) are better primary compounds, often combined with Ipamorelin for comprehensive sleep optimization.',
  },
  {
    q: 'Do I need a full GH peptide stack for sleep benefits, or just Ipamorelin?',
    a: 'Ipamorelin alone provides significant sleep benefits. Adding CJC-1295 extends the GH pulse duration from ~2 hours to 6+ hours, producing more continuous deep sleep enhancement throughout the night. The combination is more effective but either compound alone produces measurable sleep quality improvements.',
  },
];

export default function SleepPage() {
  const sleepProducts = products.filter(
    (p) =>
      p.tags?.includes('GH Peptide') ||
      p.slug === 'ipamorelin-cjc' ||
      p.slug === 'nad-plus' ||
      p.slug === 'epithalon',
  );
  const sleepStack = getStackById('gh-optimization');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Category</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="badge badge-cyan">Sleep</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">Peptides for </span>
              <span className="gradient-text">Sleep</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Ipamorelin and CJC-1295 are the most effective peptides for deep sleep enhancement.
              By amplifying the natural nocturnal growth hormone surge, they dramatically improve
              Stage 3 slow-wave sleep — the phase responsible for true physical and cognitive
              restoration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/gh-optimization" className="btn-primary">
                View GH Optimization Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/products/ipamorelin-cjc" className="btn-secondary">
                Shop Ipamorelin/CJC
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Clock size={18} className="text-yellow-600" />, value: '1–2 wks', label: 'Time to improved sleep quality' },
              { icon: <Zap size={18} className="text-yellow-600" />, value: '3–5×', label: 'GH pulse increase during sleep' },
              { icon: <ShieldCheck size={18} className="text-yellow-600" />, value: '85%', label: 'Users report better recovery' },
              { icon: <CheckCircle2 size={18} className="text-yellow-600" />, value: 'Stage 3', label: 'Deep sleep phase enhanced most' },
            ].map((stat) => (
              <div key={stat.label} className="card p-4 flex items-start gap-3">
                <div className="mt-0.5">{stat.icon}</div>
                <div>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Products grid */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Sleep Optimization Products
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Every peptide in this category has been selected for its evidence base in sleep quality
            enhancement, GH pulsatility, and circadian rhythm restoration.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sleepProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>

      {/* Featured stack */}
      {sleepStack && (
        <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge">Featured Stack</span>
              <span className="badge badge-cyan">Most Popular</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {sleepStack.name}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {sleepStack.shortDescription}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { label: 'Duration', value: sleepStack.duration },
                    { label: 'Cost', value: sleepStack.cost },
                    { label: 'Difficulty', value: sleepStack.difficulty },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="px-4 py-2.5 rounded-xl border"
                      style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                    >
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-900 mt-0.5">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Link href="/stacks/gh-optimization" className="btn-primary">
                  Full Stack Protocol
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Expected Results
                </h3>
                {sleepStack.expectedResults.map((result, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                  >
                    <CheckCircle2 size={16} className="text-yellow-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How sleep peptides work */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How These Peptides Enhance Sleep</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ipamorelin/CJC-1295 and NAD+ target distinct but complementary aspects of sleep
            architecture — GH pulsatility and circadian rhythm restoration.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: 'Ipamorelin/CJC-1295',
              subtitle: 'GH Pulse Amplifier',
              color: 'violet',
              points: [
                'Stimulates pituitary GH release timed to natural sleep pulses',
                'Dramatically enhances Stage 3 (deep/slow-wave) sleep architecture',
                'Reduces cortisol interference with sleep cycles',
                'Increases IGF-1 which drives muscle repair overnight',
                'Pre-sleep injection timing maximizes the natural nocturnal GH surge',
              ],
            },
            {
              name: 'NAD+',
              subtitle: 'Circadian Reset',
              color: 'cyan',
              points: [
                'Restores NAD+/NADH ratio in hypothalamic clock neurons',
                'Activates SIRT1 which regulates circadian gene expression',
                'Reduces wakefulness-promoting oxidative stress',
                'Improves sleep-wake transition signaling',
              ],
            },
          ].map((item) => (
            <div key={item.name} className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    item.color === 'violet'
                      ? 'bg-gray-900/15 border border-violet-600/25'
                      : 'bg-cyan-500/15 border border-cyan-500/25'
                  }`}
                >
                  <Zap
                    size={18}
                    className={item.color === 'violet' ? 'text-yellow-600' : 'text-yellow-600'}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
                    <CheckCircle2
                      size={14}
                      className={`mt-0.5 shrink-0 ${
                        item.color === 'violet' ? 'text-yellow-600' : 'text-yellow-600'
                      }`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle size={22} className="text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Sleep Peptide FAQ</h2>
          </div>
          <div className="space-y-4">
            {sleepFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border p-5"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Sleep?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Browse the complete GH optimization protocol, or go directly to Ipamorelin/CJC-1295
          — the gold standard for deep sleep enhancement.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/stacks/gh-optimization" className="btn-primary">
            View GH Optimization Stack
            <ArrowRight size={16} />
          </Link>
          <Link href="/products/ipamorelin-cjc" className="btn-secondary">
            Shop Ipamorelin/CJC
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/sleep" />
    </div>
  );
}
