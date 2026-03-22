import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ShieldCheck, Clock, ArrowRight, CheckCircle2, HelpCircle, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Peptides for Hair Growth | GHK-Cu & TB-500 Hair Loss Protocols',
  description:
    'GHK-Cu and TB-500 peptide protocols for hair growth — stimulates follicles, increases density, and reduces hair loss. Evidence-based dosing guides.',
  keywords: 'peptides for hair growth, GHK-Cu hair growth, TB-500 hair loss, copper peptide hair, hair loss peptides, hair follicle peptides, hair regrowth protocol',
  alternates: { canonical: 'https://www.peptidesclav.com/hair-growth' },
  openGraph: {
    title: 'Peptides for Hair Growth | GHK-Cu & TB-500 Hair Loss Protocols',
    description:
      'GHK-Cu and TB-500 peptide protocols for hair growth — stimulates follicles, increases density, and reduces hair loss.',
    type: 'website',
    url: 'https://www.peptidesclav.com/hair-growth',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Peptides for Hair Growth — GHK-Cu and TB-500 Protocols' }],
  },
};

const hairFaqs = [
  {
    q: 'How does GHK-Cu promote hair growth?',
    a: 'GHK-Cu stimulates hair follicle cells directly by upregulating growth factors including VEGF (vascular endothelial growth factor) and KGF (keratinocyte growth factor). Critically, it reverses follicle miniaturization — the process by which androgenic hair loss shrinks follicles over time. Research shows GHK-Cu can increase follicle size by up to 2× and activates the anagen (growth) phase of the hair cycle.',
  },
  {
    q: 'How should I apply GHK-Cu for hair growth?',
    a: 'GHK-Cu can be administered subcutaneously in the scalp (small, shallow injections across affected areas using 31-gauge insulin syringes) or applied topically in a solution/serum formulation. Subcutaneous injection produces faster and more pronounced results due to direct delivery to dermal papilla cells. Most protocols use 50-100mcg per injection site, 2-3 sites per session, 3-4 days per week.',
  },
  {
    q: 'Will peptides work for pattern baldness (androgenic alopecia)?',
    a: 'GHK-Cu and TB-500 address the follicle health and blood supply aspects of androgenic alopecia — but they do not block DHT (dihydrotestosterone), the primary androgen driving the condition. For pattern baldness, peptides work best as part of a comprehensive approach. They are particularly effective at reversing early-to-mid-stage miniaturization and restoring density in areas with dormant (not dead) follicles.',
  },
  {
    q: 'How long until I see results?',
    a: 'GHK-Cu produces subtle improvements in hair thickness and scalp condition within 3-4 weeks. Visible changes in hair density and reduced shedding typically appear by weeks 8-12. Maximum results develop over 16-24 weeks of consistent use. TB-500 improves scalp blood flow more rapidly (2-4 weeks) which supports and accelerates GHK-Cu\'s follicle-level effects.',
  },
  {
    q: 'Can women use hair growth peptides?',
    a: 'Yes — GHK-Cu and TB-500 are equally effective in women and are preferred for female-pattern hair loss because they have no hormonal mechanisms (unlike finasteride). GHK-Cu is particularly relevant for women experiencing postpartum hair loss, stress-related shedding (telogen effluvium), and age-related thinning, addressing the root cause (follicle health and scalp circulation) rather than hormone manipulation.',
  },
];

export default function HairGrowthPage() {
  const hairProducts = products.filter(
    (p) =>
      p.tags?.includes('Hair Growth') ||
      p.slug === 'ghk-cu' ||
      p.slug === 'tb-500',
  );
  const hairStack = getStackById('anti-aging-skin');

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
              <span className="badge badge-cyan">Hair Growth</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Peptides for </span>
              <span className="gradient-text">Hair Growth</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              GHK-Cu and TB-500 are the most validated peptides for hair follicle stimulation and
              scalp health. Together they address hair loss from two independent angles — direct
              follicle activation and scalp blood flow restoration — producing results that neither
              compound achieves alone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/anti-aging-skin" className="btn-primary">
                View Anti-Aging Skin Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/products/ghk-cu" className="btn-secondary">
                Shop GHK-Cu
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <ShieldCheck size={18} className="text-violet-400" />, value: '40%', label: 'Reported hair density increase' },
              { icon: <Clock size={18} className="text-cyan-400" />, value: '8–12 wks', label: 'Visible results timeline' },
              { icon: <Zap size={18} className="text-violet-400" />, value: '2×', label: 'Follicle enlargement (GHK-Cu)' },
              { icon: <CheckCircle2 size={18} className="text-cyan-400" />, value: '2 compounds', label: 'Targeting separate mechanisms' },
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
            Hair Growth Products
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Every peptide in this category has been selected for its evidence base in follicle
            stimulation, scalp angiogenesis, and hair loss reversal.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hairProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>

      {/* Featured stack */}
      {hairStack && (
        <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge">Featured Stack</span>
              <span className="badge badge-cyan">Most Popular</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {hairStack.name}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {hairStack.shortDescription}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { label: 'Duration', value: hairStack.duration },
                    { label: 'Cost', value: hairStack.cost },
                    { label: 'Difficulty', value: hairStack.difficulty },
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
                <Link href="/stacks/anti-aging-skin" className="btn-primary">
                  Full Stack Protocol
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                  Expected Results
                </h3>
                {hairStack.expectedResults.map((result, i) => (
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

      {/* How hair growth peptides work */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How These Peptides Restore Hair Growth</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            GHK-Cu and TB-500 target distinct but complementary aspects of hair loss — follicle
            activation at the cellular level and scalp blood flow restoration.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: 'GHK-Cu',
              subtitle: 'Follicle Activation Signal',
              color: 'violet',
              points: [
                'Directly stimulates hair follicle cells and increases follicle size',
                'Upregulates genes responsible for hair growth including VEGF and KGF',
                'Promotes angiogenesis in scalp dermis (critical for follicle nutrition)',
                'Reverses miniaturization of follicles (the mechanism of androgenic hair loss)',
                'Increases collagen and glycosaminoglycan synthesis around follicles',
              ],
            },
            {
              name: 'TB-500',
              subtitle: 'Scalp Blood Flow Restorer',
              color: 'cyan',
              points: [
                'Actin-binding promotes cell migration and proliferation in dermal papilla cells',
                'Stimulates angiogenesis throughout the scalp',
                'Reduces fibrosis around miniaturized follicles',
                'Systemically reduces the DHT-mediated inflammatory cascade that damages follicles',
                'Promotes healing of scalp tissue and improved nutrient delivery',
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
            <h2 className="text-2xl font-bold text-white">Hair Growth Peptide FAQ</h2>
          </div>
          <div className="space-y-4">
            {hairFaqs.map((faq, i) => (
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
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Restore Your Hair?</h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Browse the complete anti-aging skin protocol, or go directly to GHK-Cu — the
          gold standard for peptide-based hair follicle activation.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/stacks/anti-aging-skin" className="btn-primary">
            View Anti-Aging Skin Stack
            <ArrowRight size={16} />
          </Link>
          <Link href="/products/ghk-cu" className="btn-secondary">
            Shop GHK-Cu
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/hair-growth" />
    </div>
  );
}
