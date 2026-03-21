import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Dna, Sparkles, Clock, HelpCircle, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Anti-Aging Peptides | Epithalon, GHK-Cu, Longevity Protocols',
  description:
    'Evidence-based anti-aging peptides including Epithalon for telomere extension, GHK-Cu for skin regeneration, and GH peptides for hormonal restoration. Comprehensive longevity protocols.',
  keywords: 'anti-aging peptides, Epithalon, GHK-Cu, longevity peptides, telomere extension, skin peptides',
  openGraph: {
    title: 'Anti-Aging Peptides',
    description:
      'Epithalon, GHK-Cu, and longevity peptide protocols backed by decades of research.',
    type: 'website',
  },
};

const antiFaqs = [
  {
    q: 'How does Epithalon extend telomere length?',
    a: "Epithalon activates the enzyme telomerase in somatic cells. Telomerase is responsible for rebuilding the telomere caps on chromosomes that shorten with each cell division. In human fibroblast studies, Epithalon produced a 33% increase in telomere length — the only peptide with this level of direct telomere biology data.",
  },
  {
    q: 'How quickly does GHK-Cu improve skin appearance?',
    a: 'Most users see noticeable improvements in skin firmness and hydration within 2–4 weeks of daily use (subcutaneous or topical). Reduction in fine lines and improved elasticity typically become visible by weeks 4–8. The underlying mechanism — gene expression reset — continues improving skin quality over months of consistent use.',
  },
  {
    q: 'How often should I run an Epithalon cycle?',
    a: "The clinical protocol from Dr. Khavinson's research is 10–20 days of daily injections (5–10mg/day), run 1–2 times per year. This burst approach mirrors the original study designs that showed 27–36% mortality reduction in long-term human follow-up data. Running it more frequently offers no known additional benefit.",
  },
  {
    q: 'Is GHK-Cu safe for topical and systemic use simultaneously?',
    a: 'Yes. Many users apply GHK-Cu topically to the face and scalp for local skin and hair benefits while also injecting subcutaneously for systemic effects. The two routes are complementary and there are no known negative interactions. The topical concentration typically used is 0.1–1%.',
  },
  {
    q: 'Can anti-aging peptides be stacked with GH peptides like Sermorelin?',
    a: "Absolutely — this is exactly what the Longevity Elite stack does. GH decline is one of the primary drivers of biological aging, and addressing it with Sermorelin or Ipamorelin/CJC while running GHK-Cu and Epithalon covers the three most important anti-aging mechanisms simultaneously: telomere biology, cellular gene expression, and hormonal restoration.",
  },
];

export default function AntiAgingPage() {
  const antiAgingProducts = products.filter(
    (p) => p.category === 'Anti-Aging & Skin' || p.category === 'Anti-Aging & Longevity'
  );
  const longevityStack = getStackById('longevity-elite');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Category</span>
              <ChevronRight size={14} className="text-zinc-600" />
              <span className="badge badge-cyan">Anti-Aging &amp; Longevity</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Anti-Aging </span>
              <span className="gradient-text">Peptides</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              The most rigorously studied longevity compounds in peptide science. From Epithalon's
              telomere extension to GHK-Cu's cellular gene reset — these peptides address the
              root mechanisms of biological aging rather than masking its symptoms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/longevity-elite" className="btn-primary">
                Longevity Elite Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/guide" className="btn-secondary">
                Beginner's Guide
              </Link>
            </div>
          </div>

          {/* Mechanisms */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Dna size={20} className="text-violet-400" />,
                title: 'Telomere Biology',
                desc: 'Epithalon activates telomerase — extending chromosomal lifespan at the cellular level.',
              },
              {
                icon: <Sparkles size={20} className="text-cyan-400" />,
                title: 'Skin & Gene Reset',
                desc: 'GHK-Cu reverses 30% of age-related gene dysregulation in skin fibroblasts.',
              },
              {
                icon: <Clock size={20} className="text-violet-400" />,
                title: 'Hormonal Restoration',
                desc: 'GH peptides address the 14% per decade GH decline that drives aging.',
              },
            ].map((m) => (
              <div key={m.title} className="card p-5 flex gap-4 items-start">
                <div className="mt-0.5">{m.icon}</div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{m.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Products */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Anti-Aging &amp; Longevity Products
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Rigorously selected for their evidence base in biological aging mechanisms — from
            telomere length and gene expression to skin quality and hormonal restoration.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {antiAgingProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>

      {/* GHK-Cu info section */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-cyan mb-4 inline-block">Deep Dive</span>
              <h2 className="text-3xl font-bold text-white mb-4">
                GHK-Cu: The Skin Regeneration Peptide
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                GHK-Cu (copper peptide GHK) was first isolated in 1973 and has since accumulated
                over 3,000 published studies. What makes it truly exceptional is its ability to
                reset gene expression in aging skin cells — not just stimulate collagen, but
                fundamentally reprogram cellular behavior toward a younger state.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Research by Dr. Loren Pickart found that GHK-Cu reverses approximately 30% of
                age-related gene dysregulation in human skin fibroblasts. It stimulates synthesis
                of collagen I, III, and IV, elastin, fibronectin, and glycosaminoglycans — the
                complete structural matrix of youthful skin.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Comparable to minoxidil for hair growth in follicle studies',
                  'Reduces fine lines and improves elasticity within 4–8 weeks',
                  'Dual route: subcutaneous for systemic + topical for local skin/hair',
                  'One of the most studied regenerative peptides (3,000+ papers)',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {[
                { label: '3,000+', desc: 'Published studies on GHK-Cu' },
                { label: '30%', desc: 'Age-related gene dysregulation reversed in fibroblasts' },
                { label: '4–8 wks', desc: 'Typical timeline for visible skin improvements' },
                { label: 'Dual use', desc: 'Topical AND subcutaneous protocols available' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-5 p-4 rounded-xl border"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                >
                  <p className="text-2xl font-extrabold gradient-text shrink-0 w-24">{stat.label}</p>
                  <p className="text-sm text-zinc-400">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Epithalon info section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4">
            {[
              {
                title: 'Telomere Extension',
                body: '33% increase in telomere length demonstrated in human fetal fibroblast studies — the only peptide with this direct telomere extension data.',
                color: 'violet',
              },
              {
                title: 'Mortality Reduction',
                body: "27–36% reduction in all-cause mortality in 15-year human follow-up studies by Dr. Khavinson's team — among the most remarkable longevity data for any compound.",
                color: 'cyan',
              },
              {
                title: 'Pineal Gland Restoration',
                body: 'Normalizes the age-related dysfunction of the pineal gland, restoring melatonin rhythmicity and dramatically improving sleep quality.',
                color: 'violet',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <h4
                  className={`font-bold text-sm mb-2 ${
                    item.color === 'violet' ? 'text-violet-400' : 'text-cyan-400'
                  }`}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <span className="badge mb-4 inline-block">40+ Years of Research</span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Epithalon: The Telomere Peptide
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Epithalon (Ala-Glu-Asp-Gly) is a synthetic tetrapeptide developed by Dr. Vladimir
              Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology. With over
              40 years of research and the most remarkable human longevity data of any peptide
              compound, Epithalon stands in a category of its own.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Its primary mechanism is activation of telomerase in somatic cells — the enzyme that
              rebuilds telomere caps on chromosomes. This directly addresses one of the fundamental
              molecular clocks of aging. Beyond telomere biology, Epithalon normalizes pineal gland
              function and restores circadian melatonin rhythmicity that deteriorates with age.
            </p>
            <Link href="/products/epithalon" className="btn-secondary">
              Epithalon Protocol Guide
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured stack */}
      {longevityStack && (
        <section className="py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge">Featured Stack</span>
              <span className="badge badge-cyan">Intermediate</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{longevityStack.name}</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl">{longevityStack.shortDescription}</p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {longevityStack.products.map((sp) => {
                const product = products.find((p) => p.slug === sp.slug);
                return product ? (
                  <div
                    key={sp.slug}
                    className="p-4 rounded-xl border"
                    style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                  >
                    <p className="font-bold text-white text-sm mb-1">{product.name}</p>
                    <p className="text-xs text-violet-400 mb-1">{sp.dose}</p>
                    <p className="text-xs text-zinc-500">{sp.timing}</p>
                    {sp.notes && (
                      <p className="text-xs text-zinc-600 mt-2 italic">{sp.notes}</p>
                    )}
                  </div>
                ) : null;
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/longevity-elite" className="btn-primary">
                Full Stack Protocol
                <ArrowRight size={16} />
              </Link>
              <Link href="/stacks" className="btn-secondary">
                Browse All Stacks
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle size={22} className="text-violet-400" />
            <h2 className="text-2xl font-bold text-white">Anti-Aging Peptide FAQ</h2>
          </div>
          <div className="space-y-4">
            {antiFaqs.map((faq, i) => (
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

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: 'var(--bg-card)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Begin Your Longevity Protocol
          </h2>
          <p className="text-zinc-400 mb-8">
            The Longevity Elite stack covers the three primary mechanisms of biological aging
            in a single comprehensive protocol.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/stacks/longevity-elite" className="btn-primary">
              View Longevity Elite Stack
              <ArrowRight size={16} />
            </Link>
            <Link href="/guide" className="btn-secondary">
              Read the Guide
            </Link>
          </div>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/anti-aging" />
    </div>
  );
}
