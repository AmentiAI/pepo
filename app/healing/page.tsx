import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ShieldCheck, Clock, ArrowRight, CheckCircle2, HelpCircle, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Healing & Recovery Peptides | BPC-157, TB-500 Protocols',
  description:
    'Science-backed peptides for accelerated injury recovery. BPC-157 and TB-500 protocols for tendons, ligaments, muscle, and gut healing. Evidence-based dosing guides.',
  keywords: 'BPC-157, TB-500, healing peptides, injury recovery, tendon repair, peptide protocols',
  openGraph: {
    title: 'Healing & Recovery Peptides',
    description:
      'BPC-157 and TB-500 — the gold-standard peptide combination for musculoskeletal injury recovery.',
    type: 'website',
  },
};

const healingFaqs = [
  {
    q: 'How long until I feel BPC-157 working?',
    a: 'Most users notice reduced pain and inflammation within 3–7 days of starting BPC-157 at 250–500mcg twice daily. Structural tissue repair continues over 4–12 weeks, with full resolution of most soft tissue injuries by weeks 8–12.',
  },
  {
    q: 'Should I inject near the injury site or subcutaneously elsewhere?',
    a: 'For local injuries (tendons, ligaments, joints), injecting subcutaneously near the injury site concentrates the peptide locally and produces faster results. For gut or systemic conditions, anywhere subcutaneous works equally well. TB-500 should always be injected systemically (abdomen or thigh) as it works through the bloodstream.',
  },
  {
    q: 'Can I stack BPC-157 with TB-500 from day one?',
    a: 'Yes — this is actually the recommended approach for most injuries. BPC-157 and TB-500 work through entirely different mechanisms and have no negative interactions. Running them together from the start produces synergistic results that far exceed either compound alone.',
  },
  {
    q: 'Is BPC-157 safe for long-term use?',
    a: "BPC-157 is derived from a protein naturally found in human gastric juice. No significant toxicity has been observed at therapeutic doses in research models, and many users run it continuously for chronic conditions. The standard cycle is 8–12 weeks on with a 4-week break, though this is conservative — not a safety requirement.",
  },
  {
    q: 'Will these peptides work for chronic injuries, not just acute ones?',
    a: 'Yes, and arguably this is where they shine. Chronic injuries often involve poor blood supply and incomplete healing cycles. BPC-157 actively stimulates angiogenesis (new blood vessel formation) which is the primary bottleneck in healing chronic tendinopathies, and TB-500 breaks down accumulated fibrosis (scar tissue) to restore proper tissue architecture.',
  },
  {
    q: 'What dose should a beginner start with?',
    a: 'Start with BPC-157 at 250mcg twice daily (morning and evening). If well-tolerated after a week, you can increase to 500mcg per injection. For TB-500, begin with 2.5mg twice per week (5mg/week total) during a maintenance phase, or 5mg twice per week (10mg/week) during a loading phase for acute injuries.',
  },
];

export default function HealingPage() {
  const healingProducts = products.filter((p) => p.category === 'Healing & Recovery');
  const healingStack = getStackById('ultimate-healing');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Category</span>
              <ChevronRight size={14} className="text-zinc-600" />
              <span className="badge badge-cyan">Healing & Recovery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Healing &amp; </span>
              <span className="gradient-text">Recovery</span>
              <span className="text-white"> Peptides</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              BPC-157 and TB-500 are the most validated peptides for musculoskeletal injury recovery.
              Together they cover every mechanism of the healing cascade — from local tissue repair and
              angiogenesis to systemic inflammation reduction and flexibility restoration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/ultimate-healing" className="btn-primary">
                View Healing Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn-secondary">
                All Products
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Zap size={18} className="text-violet-400" />, value: '2×', label: 'Faster healing vs. untreated' },
              { icon: <ShieldCheck size={18} className="text-cyan-400" />, value: '30+', label: 'Years of research' },
              { icon: <Clock size={18} className="text-violet-400" />, value: '3–7', label: 'Days to first effects' },
              { icon: <CheckCircle2 size={18} className="text-cyan-400" />, value: '100%', label: 'Naturally-derived basis' },
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

      {/* Products grid */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Healing &amp; Recovery Products
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Every peptide in this category has been selected for its evidence base in tissue repair,
            inflammation reduction, and recovery acceleration.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {healingProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>

      {/* Featured stack */}
      {healingStack && (
        <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge">Featured Stack</span>
              <span className="badge badge-cyan">Most Popular</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {healingStack.name}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {healingStack.shortDescription}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { label: 'Duration', value: healingStack.duration },
                    { label: 'Cost', value: healingStack.cost },
                    { label: 'Difficulty', value: healingStack.difficulty },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="px-4 py-2.5 rounded-xl border"
                      style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                    >
                      <p className="text-[11px] text-zinc-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-white mt-0.5">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Link href="/stacks/ultimate-healing" className="btn-primary">
                  Full Stack Protocol
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                  Expected Results
                </h3>
                {healingStack.expectedResults.map((result, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                  >
                    <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-zinc-300">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How healing peptides work */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How These Peptides Accelerate Healing</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            BPC-157 and TB-500 target distinct but complementary aspects of the healing cascade,
            making their combination greater than the sum of its parts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: 'BPC-157',
              subtitle: 'Local Repair Engine',
              color: 'violet',
              points: [
                'Upregulates growth hormone receptors at injury site',
                'Stimulates VEGF for new blood vessel formation (angiogenesis)',
                'Promotes collagen synthesis and tendon-to-bone attachment',
                'Inhibits inflammatory cytokines without immune suppression',
                'Heals gut lining — uniquely effective for IBD and leaky gut',
              ],
            },
            {
              name: 'TB-500',
              subtitle: 'Systemic Healing Signal',
              color: 'cyan',
              points: [
                'Binds to actin — drives cell migration and proliferation throughout the body',
                'Reduces fibrosis and scar tissue formation after injury',
                'Anti-inflammatory at the systemic level, not just locally',
                'Promotes myogenesis (muscle fiber formation)',
                'Restores flexibility and range of motion in damaged fascia',
              ],
            },
          ].map((item) => (
            <div key={item.name} className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    item.color === 'violet'
                      ? 'bg-violet-600/15 border border-violet-600/25'
                      : 'bg-cyan-500/15 border border-cyan-500/25'
                  }`}
                >
                  <Zap
                    size={18}
                    className={item.color === 'violet' ? 'text-violet-400' : 'text-cyan-400'}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.name}</h3>
                  <p className="text-xs text-zinc-500">{item.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <CheckCircle2
                      size={14}
                      className={`mt-0.5 shrink-0 ${
                        item.color === 'violet' ? 'text-violet-400' : 'text-cyan-400'
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
            <HelpCircle size={22} className="text-violet-400" />
            <h2 className="text-2xl font-bold text-white">Healing Peptide FAQ</h2>
          </div>
          <div className="space-y-4">
            {healingFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border p-5"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <p className="font-semibold text-white mb-2">{faq.q}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Recovery?</h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Browse the complete healing protocol, or explore other peptide categories for your goals.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/stacks/ultimate-healing" className="btn-primary">
            View Ultimate Healing Stack
            <ArrowRight size={16} />
          </Link>
          <Link href="/stacks" className="btn-secondary">
            All Stacks
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/healing" />
    </div>
  );
}
