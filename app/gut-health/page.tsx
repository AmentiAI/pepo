import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ShieldCheck, Clock, ArrowRight, CheckCircle2, HelpCircle, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'BPC-157 for Gut Health | Leaky Gut, IBS & GERD',
  description:
    'BPC-157 protocols for gut healing — leaky gut, IBS, GERD, ulcers, and gut-brain axis restoration. Evidence-based dosing guides and stacking protocols.',
  keywords: 'peptides for gut health, BPC-157 gut healing, leaky gut peptides, IBS peptides, BPC-157 GERD, gut healing peptides, BPC-157 intestinal',
  alternates: { canonical: 'https://www.peptidesclav.com/gut-health' },
  openGraph: {
    title: 'BPC-157 for Gut Health | Leaky Gut, IBS & GERD',
    description:
      'BPC-157 protocols for gut healing — leaky gut, IBS, GERD, ulcers, and gut-brain axis restoration.',
    type: 'website',
    url: 'https://www.peptidesclav.com/gut-health',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Gut Health Peptides — BPC-157 for Leaky Gut and IBS' }],
  },
};

const gutFaqs = [
  {
    q: 'How does BPC-157 heal leaky gut?',
    a: 'BPC-157 upregulates growth hormone receptors along the intestinal wall, promoting tight junction repair between enterocytes — the cellular gaps responsible for leaky gut. It also stimulates VEGF-driven angiogenesis (new blood vessel formation) which restores nutrient delivery to damaged gut tissue, and inhibits pro-inflammatory cytokines like TNF-α and IL-6 that perpetuate intestinal permeability.',
  },
  {
    q: 'Can I use BPC-157 for IBS?',
    a: 'Yes — BPC-157 addresses multiple IBS mechanisms simultaneously: reducing mucosal inflammation, healing ulcerations, normalizing gut motility, and restoring the gut-brain axis via vagus nerve signaling. Most users report significant symptom reduction within 2-4 weeks at 250-500mcg twice daily subcutaneously or orally.',
  },
  {
    q: "What's the best way to take BPC-157 for gut conditions?",
    a: 'For gut-specific conditions, oral administration (dissolved in water, taken on empty stomach) concentrates BPC-157 along the gastrointestinal tract. Subcutaneous injection works for systemic gut inflammation and conditions beyond direct contact reach. Many practitioners use both simultaneously for maximum effect.',
  },
  {
    q: 'How long does BPC-157 take to heal gut issues?',
    a: 'Pain and inflammation reduction typically begins within 3-7 days. Measurable mucosal healing occurs over 4-8 weeks. Chronic conditions like IBD or long-standing leaky gut may require 10-12 week protocols. Most users run 8 weeks on, 4 weeks off.',
  },
  {
    q: 'Is BPC-157 safe for long-term gut use?',
    a: 'BPC-157 is a peptide fragment derived from a protein naturally found in human gastric juice, which is why it has an exceptional safety profile for gut applications. No significant toxicity has been observed at therapeutic doses in extensive research. It is not habit-forming and does not suppress natural gut function.',
  },
];

export default function GutHealthPage() {
  const gutProducts = products.filter(
    (p) =>
      p.tags?.includes('Gut Health') ||
      p.slug === 'bpc-157' ||
      p.slug === 'nad-plus',
  );
  const gutStack = getStackById('ultimate-healing');

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
              <span className="badge badge-cyan">Gut Health</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Gut Health </span>
              <span className="gradient-text">Peptides</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              BPC-157 is the most validated peptide for gastrointestinal healing. From leaky gut
              and IBS to GERD and ulcers, it addresses every layer of gut dysfunction — repairing
              the mucosal lining, restoring the gut-brain axis, and reducing chronic intestinal
              inflammation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/ultimate-healing" className="btn-primary">
                View Healing Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/products/bpc-157" className="btn-secondary">
                Shop BPC-157
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Zap size={18} className="text-violet-400" />, value: '24–48h', label: 'Ulcer healing onset (BPC-157)' },
              { icon: <ShieldCheck size={18} className="text-cyan-400" />, value: '30+', label: 'Years of gastric research' },
              { icon: <Clock size={18} className="text-violet-400" />, value: '5+', label: 'Gut conditions addressed' },
              { icon: <CheckCircle2 size={18} className="text-cyan-400" />, value: '250mcg', label: 'Standard therapeutic dose' },
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
            Gut Health Products
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Every peptide in this category has been selected for its evidence base in gut repair,
            mucosal healing, and gastrointestinal inflammation reduction.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gutProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>

      {/* Featured stack */}
      {gutStack && (
        <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge">Featured Stack</span>
              <span className="badge badge-cyan">Most Popular</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {gutStack.name}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {gutStack.shortDescription}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { label: 'Duration', value: gutStack.duration },
                    { label: 'Cost', value: gutStack.cost },
                    { label: 'Difficulty', value: gutStack.difficulty },
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
                {gutStack.expectedResults.map((result, i) => (
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

      {/* How gut health peptides work */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How These Peptides Restore Gut Health</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            BPC-157 and NAD+ target distinct but complementary aspects of gut dysfunction,
            addressing both structural repair and cellular energy restoration.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: 'BPC-157',
              subtitle: 'Gut Lining Repair Engine',
              color: 'violet',
              points: [
                'Upregulates growth hormone receptors in gut mucosa',
                'Promotes angiogenesis in intestinal walls',
                'Inhibits inflammatory cytokines without immune suppression',
                'Heals ulcers and perforations',
                'Restores gut-brain axis signaling via vagus nerve',
              ],
            },
            {
              name: 'NAD+',
              subtitle: 'Cellular Energy for Gut Cells',
              color: 'cyan',
              points: [
                'Restores mitochondrial function in intestinal epithelium',
                'Activates sirtuins that regulate gut inflammation',
                'Supports tight junction protein expression (critical for leaky gut)',
                'Improves gut microbiome diversity',
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
            <h2 className="text-2xl font-bold text-white">Gut Health Peptide FAQ</h2>
          </div>
          <div className="space-y-4">
            {gutFaqs.map((faq, i) => (
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
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Heal Your Gut?</h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Browse the complete healing protocol, or go directly to BPC-157 — the cornerstone of
          evidence-based gut restoration.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/stacks/ultimate-healing" className="btn-primary">
            View Healing Stack
            <ArrowRight size={16} />
          </Link>
          <Link href="/products/bpc-157" className="btn-secondary">
            Shop BPC-157
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/gut-health" />
    </div>
  );
}
