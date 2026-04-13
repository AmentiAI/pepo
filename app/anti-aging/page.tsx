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
    'Epithalon for telomere extension, GHK-Cu for skin regeneration, NAD+ for mitochondrial health. Evidence-based longevity peptide protocols and stacking guides.',
  keywords: 'anti-aging peptides, Epithalon, GHK-Cu, longevity peptides, telomere extension, skin peptides, NAD+, Epithalon dosing',
  alternates: { canonical: 'https://www.peptidesclav.com/anti-aging' },
  openGraph: {
    title: 'Anti-Aging Peptides | Epithalon, GHK-Cu, Longevity Protocols',
    description:
      'Epithalon, GHK-Cu, and longevity peptide protocols backed by decades of research.',
    type: 'website',
    url: 'https://www.peptidesclav.com/anti-aging',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Anti-Aging Peptides — Epithalon, GHK-Cu, Longevity' }],
  },
};

const antiFaqs = [
  {
    q: 'What is the difference between GHK-Cu subcutaneous injection and topical application?',
    a: 'Subcutaneous injection delivers GHK-Cu systemically — it circulates in the bloodstream, reaching every tissue and triggering the full gene expression reset across the body. This is the best route for systemic anti-aging effects. Topical application delivers GHK-Cu locally to skin and scalp — concentrations penetrate the dermis and produce local collagen, elastin, and hair follicle effects. Most practitioners use both simultaneously: daily subcutaneous injection for systemic benefits and topical serum for targeted skin and scalp improvements.',
  },
  {
    q: 'How does NAD+ work differently from Epithalon and GHK-Cu?',
    a: 'Epithalon works at the chromosomal level (telomere biology), GHK-Cu works at the gene expression level (transcriptomics), and NAD+ works at the metabolic/energetic level (mitochondrial function, sirtuin activation, DNA repair). They are mechanistically complementary — addressing aging from entirely different molecular angles. The Longevity Elite Stack combines all three because no single compound covers the full aging picture. NAD+ in particular becomes more critical after age 40 as levels drop below 50% of youthful concentrations.',
  },
  {
    q: 'Can I use anti-aging peptides alongside testosterone replacement therapy (TRT)?',
    a: 'Yes — this is a common combination in longevity-focused medicine. GHK-Cu and Epithalon have no known interactions with TRT. NAD+ may actually enhance testosterone sensitivity and mitochondrial steroidogenesis. GH peptides are also compatible and complementary with TRT, as GH and testosterone address different aspects of the hormonal aging picture. Many users run Epithalon cycles independently of their TRT protocol without any scheduling conflicts.',
  },
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
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gray-900/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Category</span>
              <ChevronRight size={14} className="text-gray-800" />
              <span className="badge badge-cyan">Anti-Aging &amp; Longevity</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">Anti-Aging </span>
              <span className="gradient-text">Peptides</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
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
                icon: <Dna size={20} className="text-yellow-600" />,
                title: 'Telomere Biology',
                desc: 'Epithalon activates telomerase — extending chromosomal lifespan at the cellular level.',
              },
              {
                icon: <Sparkles size={20} className="text-yellow-600" />,
                title: 'Skin & Gene Reset',
                desc: 'GHK-Cu reverses 30% of age-related gene dysregulation in skin fibroblasts.',
              },
              {
                icon: <Clock size={20} className="text-yellow-600" />,
                title: 'Hormonal Restoration',
                desc: 'GH peptides address the 14% per decade GH decline that drives aging.',
              },
            ].map((m) => (
              <div key={m.title} className="card p-5 flex gap-4 items-start">
                <div className="mt-0.5">{m.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{m.title}</h3>
                  <p className="text-xs text-gray-700 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Products */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Anti-Aging &amp; Longevity Products
          </h2>
          <p className="text-gray-700 max-w-2xl">
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
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-cyan mb-4 inline-block">Deep Dive</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                GHK-Cu: The Skin Regeneration Peptide
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GHK-Cu (copper peptide GHK) was first isolated in 1973 and has since accumulated
                over 3,000 published studies. What makes it truly exceptional is its ability to
                reset gene expression in aging skin cells — not just stimulate collagen, but
                fundamentally reprogram cellular behavior toward a younger state.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
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
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={14} className="text-yellow-600 mt-0.5 shrink-0" />
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
                  <p className="text-sm text-gray-700">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Epithalon info section */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4">
            {[
              {
                title: 'Telomere Extension',
                body: '33% increase in telomere length demonstrated in human fetal fibroblast studies — the only peptide with this direct telomere extension data.',
                color: 'yellow',
              },
              {
                title: 'Mortality Reduction',
                body: "27–36% reduction in all-cause mortality in 15-year human follow-up studies by Dr. Khavinson's team — among the most remarkable longevity data for any compound.",
                color: 'cyan',
              },
              {
                title: 'Pineal Gland Restoration',
                body: 'Normalizes the age-related dysfunction of the pineal gland, restoring melatonin rhythmicity and dramatically improving sleep quality.',
                color: 'yellow',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <h4
                  className={`font-bold text-sm mb-2 ${
                    item.color === 'violet' ? 'text-yellow-600' : 'text-yellow-600'
                  }`}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <span className="badge mb-4 inline-block">40+ Years of Research</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Epithalon: The Telomere Peptide
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Epithalon (Ala-Glu-Asp-Gly) is a synthetic tetrapeptide developed by Dr. Vladimir
              Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology. With over
              40 years of research and the most remarkable human longevity data of any peptide
              compound, Epithalon stands in a category of its own.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
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
        <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge">Featured Stack</span>
              <span className="badge badge-cyan">Intermediate</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{longevityStack.name}</h2>
            <p className="text-gray-700 mb-8 max-w-2xl">{longevityStack.shortDescription}</p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {longevityStack.products.map((sp) => {
                const product = products.find((p) => p.slug === sp.slug);
                return product ? (
                  <div
                    key={sp.slug}
                    className="p-4 rounded-xl border"
                    style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                  >
                    <p className="font-bold text-gray-900 text-sm mb-1">{product.name}</p>
                    <p className="text-xs text-yellow-600 mb-1">{sp.dose}</p>
                    <p className="text-xs text-gray-700">{sp.timing}</p>
                    {sp.notes && (
                      <p className="text-xs text-gray-800 mt-2 italic">{sp.notes}</p>
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

      {/* ── HALLMARKS OF AGING ──────────────────────────── */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-yellow-600 uppercase mb-3">The Science</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hallmarks of Aging — Addressed by Peptides</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            The hallmarks of aging framework (López-Otín et al., Cell 2013) identifies 9 primary causes of biological aging.
            Anti-aging peptides address multiple hallmarks simultaneously — no supplement category comes close in breadth of mechanism.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              hallmark: 'Telomere Shortening',
              peptide: 'Epithalon',
              mechanism: 'Activates telomerase enzyme, extending telomere caps by ~33% in human cell studies. Directly addresses the chromosomal clock of aging.',
              color: 'text-yellow-600',
            },
            {
              hallmark: 'Epigenetic Alterations',
              peptide: 'GHK-Cu',
              mechanism: 'Resets age-related gene dysregulation in over 4,000 genes, reversing epigenetic changes that accumulate with age in skin fibroblasts.',
              color: 'text-yellow-600',
            },
            {
              hallmark: 'Mitochondrial Dysfunction',
              peptide: 'NAD+',
              mechanism: 'Restores NAD+ to youthful levels, reactivating sirtuin enzymes and PARP DNA repair. Directly improves mitochondrial electron transport and ATP production.',
              color: 'text-yellow-600',
            },
            {
              hallmark: 'Cellular Senescence',
              peptide: 'Epithalon + NAD+',
              mechanism: 'Telomere extension delays replicative senescence. NAD+ activates SIRT1 which regulates senescent cell clearance. Together they reduce the senescent cell burden.',
              color: 'text-yellow-600',
            },
            {
              hallmark: 'Stem Cell Exhaustion',
              peptide: 'GHK-Cu + TB-500',
              mechanism: 'GHK-Cu activates stem cell gene expression programs. TB-500 stimulates hair follicle stem cells and satellite cells in muscle tissue. Both counter age-related stem cell pool depletion.',
              color: 'text-yellow-600',
            },
            {
              hallmark: 'Altered Intercellular Communication',
              peptide: 'GHK-Cu + Epithalon',
              mechanism: 'GHK-Cu normalizes inflammatory signaling by downregulating genes associated with chronic inflammation. Epithalon restores pineal gland signaling and normalizes neuroendocrine communication.',
              color: 'text-yellow-600',
            },
          ].map((item) => (
            <div key={item.hallmark} className="card p-5">
              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${item.color}`}>{item.peptide}</p>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{item.hallmark}</h3>
              <p className="text-xs text-gray-700 leading-relaxed">{item.mechanism}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── YEAR-ROUND PROTOCOL DESIGN ──────────────────── */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-semibold tracking-widest text-yellow-600 uppercase mb-3">Protocol Design</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Building a Year-Round Anti-Aging Protocol</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most effective longevity protocols use multiple peptides on different schedules — combining continuous use
                compounds with periodic burst cycles. This approach covers more aging mechanisms, avoids receptor desensitization,
                and provides the sustained biological signal needed for meaningful cellular rejuvenation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                GHK-Cu and NAD+ are well-suited to continuous daily use — no receptor downregulation has been documented, and their
                benefits are cumulative over months of consistent use. Epithalon, by contrast, is used in 10–20 day burst protocols
                1–2 times per year — mirroring the original Khavinson research protocols that produced the 27–36% mortality reduction data.
              </p>
              <div className="space-y-3">
                {[
                  { timing: 'Daily', compound: 'GHK-Cu', note: '1–2mg subcutaneous + topical serum for skin/scalp' },
                  { timing: 'Daily', compound: 'NAD+ 500mg', note: '100–500mg subcutaneous, 2–3× per week or daily' },
                  { timing: 'Pre-sleep', compound: 'CJC-1295 / Ipamorelin', note: '200mcg each, 5 days on / 2 days off' },
                  { timing: '1–2× per year', compound: 'Epithalon', note: '10–20 consecutive days at 5–10mg/day' },
                ].map((row) => (
                  <div key={row.compound} className="card p-4 flex gap-4 items-center">
                    <div
                      className="shrink-0 text-[10px] font-bold px-2 py-1 rounded text-center w-20"
                      style={{ background: 'rgba(234,179,8,0.15)', color: '#d97706', border: '1px solid rgba(234,179,8,0.2)' }}
                    >
                      {row.timing}
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">{row.compound}</p>
                      <p className="text-gray-700 text-xs mt-0.5">{row.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-yellow-600 uppercase mb-3">Expected Timeline</p>
              <h3 className="text-xl font-bold text-gray-900 mb-6">When Will You See Results?</h3>
              <div className="space-y-4">
                {[
                  {
                    period: 'Weeks 1–4',
                    outcomes: ['Improved sleep quality (GHK-Cu + NAD+ effect on melatonin and cellular energy)', 'Subtle improvements in skin hydration and texture', 'Increased energy levels and mental clarity from NAD+ restoration'],
                    color: '#d97706',
                  },
                  {
                    period: 'Weeks 4–12',
                    outcomes: ['Measurable reduction in fine lines and improved elasticity (GHK-Cu collagen effect)', 'Improved hair thickness and follicle density', 'Reduced chronic inflammation markers', 'Better sleep architecture and overnight recovery'],
                    color: '#06b6d4',
                  },
                  {
                    period: 'Months 3–6',
                    outcomes: ['Sustained skin quality improvements accumulating', 'If running Epithalon: telomerase activation and immune function improvement', 'Measurable mitochondrial function improvement with NAD+', 'Progressive cellular rejuvenation at the gene expression level'],
                    color: '#d97706',
                  },
                  {
                    period: '6+ Months',
                    outcomes: ['Long-term structural collagen rebuilding complete', 'Epigenetic benefits of sustained GHK-Cu use becoming measurable', 'Second Epithalon cycle reinforces telomere biology gains', 'Comprehensive anti-aging protocol providing systemic biological age reduction'],
                    color: '#06b6d4',
                  },
                ].map((phase) => (
                  <div key={phase.period} className="card p-4">
                    <p
                      className="text-xs font-bold mb-2"
                      style={{ color: phase.color }}
                    >
                      {phase.period}
                    </p>
                    <ul className="space-y-1">
                      {phase.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 size={10} className="shrink-0 mt-0.5" style={{ color: phase.color }} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle size={22} className="text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Anti-Aging Peptide FAQ</h2>
          </div>
          <div className="space-y-4">
            {antiFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border p-5"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-10 sm:py-20 text-center"
        style={{ backgroundColor: 'var(--bg-card)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Begin Your Longevity Protocol
          </h2>
          <p className="text-gray-700 mb-8">
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
