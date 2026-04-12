import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Dna,
  Leaf,
  Zap,
  Clock,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: { absolute: 'GHK-Cu (Copper Peptide): Anti-Aging, Skin & Gene Reset Guide 2026' },
  description:
    'GHK-Cu complete guide — how the copper peptide resets 4,000+ genes, boosts collagen synthesis by 70%, restores hair follicles, and reverses skin aging. Full protocol inside.',
  keywords:
    'ghk-cu, copper peptide, ghk-cu benefits, ghk-cu collagen, ghk-cu skin, ghk-cu hair growth, ghk-cu gene expression, copper peptide anti-aging, ghk-cu dosage, ghk-cu topical vs injection',
  alternates: { canonical: 'https://www.peptidesclav.com/peptides/ghk-cu' },
  openGraph: {
    title: 'GHK-Cu (Copper Peptide): Anti-Aging, Skin & Gene Reset Guide 2026',
    description:
      'GHK-Cu resets ~30% of age-related gene dysregulation, increases collagen by 70%, and is the most evidence-backed peptide for skin rejuvenation. Full protocol guide.',
    type: 'website',
    url: 'https://www.peptidesclav.com/peptides/ghk-cu',
    siteName: 'PeptidesClav',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GHK-Cu Copper Peptide Anti-Aging Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GHK-Cu (Copper Peptide): Anti-Aging, Skin & Gene Reset Guide 2026',
    description: 'GHK-Cu resets ~30% of age-related gene dysregulation, increases collagen by 70%, and restores hair follicles. Full protocol.',
  },
};

const ghkFaqs = [
  {
    q: 'Is GHK-Cu better injected or applied topically?',
    a: 'Both routes are effective but for different applications. Subcutaneous injection delivers GHK-Cu systemically for whole-body gene expression modulation, cellular rejuvenation, and internal organ benefits. Topical application concentrates GHK-Cu in the skin and scalp for local collagen stimulation, wound healing, and hair follicle activation. For maximum anti-aging effect, combining daily subcutaneous injections with topical application to the face and scalp is the preferred protocol.',
  },
  {
    q: 'How long does it take to see results from GHK-Cu?',
    a: 'Topical skin improvements are typically visible within 4–6 weeks — improved texture, reduced fine line depth, and increased firmness. Hair regrowth, when it occurs, typically requires 8–12 weeks to become visible. The systemic gene expression effects are measurable in lab markers (collagen synthesis markers, oxidative stress parameters) within 4–8 weeks but may not manifest as obviously visible changes until 8–12 weeks of consistent use.',
  },
  {
    q: 'Can I mix GHK-Cu with other skincare products?',
    a: 'Yes — GHK-Cu is compatible with most serums and moisturizers. The critical rule is to avoid mixing it in the same application as vitamin C (ascorbic acid) or retinol, as these can oxidize the copper component and reduce peptide stability. Apply GHK-Cu serum first to clean skin, wait 5–10 minutes, then layer other actives over it. In injection form, it is compatible with any other subcutaneous peptides.',
  },
  {
    q: 'Does GHK-Cu work for hair loss?',
    a: 'Yes — GHK-Cu is one of the most studied peptides for hair loss. It stimulates hair follicle stem cells, enlarges follicle size, and has shown regrowth comparable to minoxidil in peer-reviewed studies. Applied topically to the scalp at 0.1–0.5% concentration once or twice daily, it activates dormant follicles and supports existing hair retention. Subcutaneous injection adds a systemic component that addresses hormonal and inflammatory hair loss drivers.',
  },
  {
    q: 'What concentration should I use for topical GHK-Cu?',
    a: 'For facial application: 0.1–0.5% GHK-Cu in a serum or saline base. Higher concentrations (up to 1%) may be used on the scalp. Reconstitute lyophilized GHK-Cu powder in bacteriostatic water or a compatible serum base. For a 0.5% solution in 10ml: dissolve 50mg GHK-Cu in 10ml base. The distinctive blue color of the copper complex is normal and verifies proper reconstitution.',
  },
  {
    q: 'Should GHK-Cu be cycled or used year-round?',
    a: 'GHK-Cu does not require cycling — it can be used year-round without receptor desensitization or diminishing returns. Plasma GHK-Cu levels naturally decline with age and replenishment through supplementation appears safe for continuous use based on available toxicology data. Unlike Epithalon (which uses burst protocols), GHK-Cu is typically used as a daily maintenance compound.',
  },
];

export default function GHKCuPage() {
  const ghkProduct = products.find((p) => p.slug === 'ghk-cu');
  const epithalonProduct = products.find((p) => p.slug === 'epithalon');
  const nadProduct = products.find((p) => p.slug === 'nad-plus');
  const skinStack = getStackById('anti-aging-skin');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'GHK-Cu (Copper Peptide): Anti-Aging, Skin & Gene Reset Guide 2026',
    description: 'GHK-Cu complete guide — gene expression reset, collagen synthesis, hair restoration, and full protocol.',
    url: 'https://www.peptidesclav.com/peptides/ghk-cu',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ghkFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <div className="border-b" style={{ borderColor: '#1e1e35' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm" style={{ color: '#71717a' }}>
            <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/anti-aging" className="hover:text-yellow-600 transition-colors">Anti-Aging</Link>
            <span>/</span>
            <span style={{ color: '#a1a1b5' }}>GHK-Cu</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Peptides</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="badge" style={{ background: 'rgba(236,72,153,0.1)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.3)' }}>Anti-Aging & Skin</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span style={{ background: 'linear-gradient(135deg, #f9a8d4, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GHK-Cu</span>
              <span className="text-gray-900"> (Copper Peptide)</span>
            </h1>
            <p className="text-gray-500 text-sm font-medium mb-3">Chemical name: Glycyl-L-Histidyl-L-Lysine : Copper(II)</p>
            <p className="text-gray-500 text-sm font-medium mb-4" style={{ color: '#94a3b8' }}>CAS: 49557-75-7</p>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              GHK-Cu is the most scientifically validated anti-aging peptide for skin, collagen, and gene
              expression. A naturally occurring copper-binding tripeptide that declines with age, it has been
              shown to reset approximately 30% of age-related gene dysregulation — reversing aging at the
              molecular level, not just masking it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/anti-aging-skin" className="btn-primary">
                View Anti-Aging Stack <ArrowRight size={16} />
              </Link>
              <Link href="/products/ghk-cu" className="btn-secondary">
                Shop GHK-Cu
              </Link>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Dna size={18} style={{ color: '#f472b6' }} />, value: '4,000+', label: 'Genes modulated' },
              { icon: <Sparkles size={18} className="text-yellow-600" />, value: '70%', label: 'Collagen increase (fibroblast)' },
              { icon: <Leaf size={18} style={{ color: '#f472b6' }} />, value: '~30%', label: 'Age-gene reset rate' },
              { icon: <Clock size={18} className="text-yellow-600" />, value: 'Year-round', label: 'No cycling needed' },
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

      {/* Mechanism */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge mb-4 inline-block" style={{ background: 'rgba(236,72,153,0.1)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.3)' }}>Mechanism of Action</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">The Most Powerful Anti-Aging Peptide?</h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              GHK-Cu (Glycyl-L-Histidyl-L-Lysine copper complex) is a tripeptide naturally present in
              human plasma, saliva, and urine. At age 20, plasma concentrations average approximately
              200 ng/mL. By age 60, this drops to roughly 80 ng/mL — a 60% decline that correlates
              strongly with the visible and cellular manifestations of aging.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              The copper component is not incidental — GHK's biological activity depends on copper coordination.
              The GHK-Cu complex activates copper-dependent enzymes involved in collagen cross-linking, antioxidant
              defense, and tissue remodeling. It is the copper that gives reconstituted GHK-Cu its characteristic
              blue color and that drives many of its most potent effects.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              Unlike most anti-aging compounds that address single pathways, GHK-Cu works at the genetic
              level. Research by Dr. Loren Pickart demonstrated that GHK-Cu can access cell nuclei and
              modulate the activity of over 4,000 human genes — including genes governing collagen synthesis,
              antioxidant enzymes, stem cell activation, DNA repair, and inflammation regulation.
              This makes it uniquely comprehensive: a single compound addressing aging across dozens of
              biological pathways simultaneously.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <Dna size={16} style={{ color: '#f472b6' }} />,
                title: 'Gene Expression Reset',
                body: 'GHK-Cu reverses approximately 30% of age-associated gene expression changes in human fibroblasts — downregulating cancer-promoting and inflammatory genes while upregulating repair, collagen, and antioxidant genes. This is epigenetic rejuvenation at scale.',
                color: 'rgba(236,72,153,0.3)',
              },
              {
                icon: <Sparkles size={16} className="text-yellow-600" />,
                title: 'Collagen Synthesis (+70%)',
                body: 'GHK-Cu stimulates collagen production in human fibroblast studies by up to 70%. It activates collagen types I, III, and IV — structural proteins that determine skin firmness, density, and elasticity. This is the mechanism behind its well-documented skin improvement effects.',
                color: 'rgba(245,158,11,0.3)',
              },
              {
                icon: <Leaf size={16} style={{ color: '#f472b6' }} />,
                title: 'Stem Cell Activation',
                body: 'GHK-Cu activates tissue stem cells — including hair follicle stem cells, skin progenitor cells, and neural stem cells. This drives genuine tissue regeneration rather than cosmetic surface-level improvement.',
                color: 'rgba(236,72,153,0.3)',
              },
              {
                icon: <Zap size={16} className="text-yellow-600" />,
                title: 'Antioxidant Defense Upregulation',
                body: 'GHK-Cu upregulates genes encoding superoxide dismutase (SOD), catalase, and glutathione peroxidase — the three primary antioxidant enzymes. Declining antioxidant capacity is a core driver of cellular aging and tissue damage.',
                color: 'rgba(245,158,11,0.3)',
              },
              {
                icon: <Dna size={16} style={{ color: '#f472b6' }} />,
                title: 'Anti-Inflammatory Gene Modulation',
                body: 'GHK-Cu downregulates pro-inflammatory gene signatures (NF-κB pathway, inflammatory cytokines) while upregulating anti-inflammatory mediators. This reduces the chronic low-grade inflammation ("inflammaging") that accelerates aging in every tissue.',
                color: 'rgba(236,72,153,0.3)',
              },
            ].map((item) => (
              <div key={item.title} className="card p-5 border-l-2" style={{ borderLeftColor: item.color }}>
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h3 className="text-gray-900 font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Skin Section */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="badge mb-4 inline-block" style={{ background: 'rgba(236,72,153,0.1)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.3)' }}>Skin Rejuvenation</span>
          <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">GHK-Cu for Skin: What to Expect</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            GHK-Cu is the most evidence-backed peptide available for skin rejuvenation. In human and in vitro studies,
            topical and systemic GHK-Cu demonstrates effects that go far beyond what conventional skincare actives achieve.
            Here is what the research documents and what users consistently report:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { stat: '+70%', label: 'Collagen synthesis increase', detail: 'In human fibroblast studies — the structural protein determining skin firmness.' },
              { stat: '+50%', label: 'Elastin production', detail: 'Maintains skin flexibility and resilience — counteracts the sagging associated with elastin loss.' },
              { stat: '4–6 wks', label: 'Visible skin improvement', detail: 'Most users report measurable texture improvement and reduced fine line depth within 4–6 weeks.' },
              { stat: '+35%', label: 'Proteoglycan synthesis', detail: 'Proteoglycans maintain skin hydration and volume — their decline causes the flat, dull appearance of aged skin.' },
            ].map((item) => (
              <div key={item.stat} className="card p-5 text-center">
                <p className="text-3xl font-extrabold mb-1" style={{ color: '#f472b6' }}>{item.stat}</p>
                <p className="text-gray-900 font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 leading-relaxed mb-5">
            GHK-Cu also activates matrix metalloproteinases (MMPs) — enzymes that break down damaged,
            disorganized collagen and make way for newly synthesized collagen fibers. This remodeling
            cycle is what produces the long-term structural improvements visible at 8–12 weeks.
            It explains why GHK-Cu users often see continued improvement months after starting —
            the collagen remodeling cycle takes time to complete.
          </p>
          <p className="text-gray-500 leading-relaxed mb-5">
            For the <Link href="/looksmaxxing" className="text-yellow-600 hover:underline">looksmaxxing protocol</Link>,
            GHK-Cu is a cornerstone compound. Applied topically to the face, neck, and under-eye area twice daily,
            it addresses the four main visual aging markers: collagen loss, elastin degradation, inflammatory
            redness, and loss of skin density. No other topical peptide has the same depth of evidence
            for comprehensive facial rejuvenation.
          </p>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Hair Restoration */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge mb-4 inline-block" style={{ background: 'rgba(245,158,11,0.1)', color: '#fcd34d', border: '1px solid rgba(245,158,11,0.3)' }}>Hair Restoration</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">GHK-Cu for Hair Loss</h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              GHK-Cu is one of the most studied peptides for hair restoration, with peer-reviewed data
              supporting follicle stem cell activation, enlarged follicle size, and hair regrowth
              comparable to minoxidil. The mechanism works through two complementary pathways:
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              <strong className="text-gray-900">Follicle stem cell activation:</strong> GHK-Cu activates
              resting hair follicle stem cells and promotes their entry into the anagen (growth) phase.
              Many thinning hair conditions involve dormant — not dead — follicles that can be reactivated
              with appropriate signaling.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              <strong className="text-gray-900">Anti-inflammatory scalp environment:</strong> Scalp inflammation
              is a primary driver of follicle miniaturization and hair loss. GHK-Cu's anti-inflammatory
              gene modulation creates a less hostile environment for follicle function.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              <strong className="text-gray-900">Follicle enlargement:</strong> Studies show GHK-Cu
              enlarges follicle diameter — not just preserving existing follicles but improving the
              caliber of hair produced. This translates to visibly thicker, denser hair over time.
            </p>
            <p className="text-gray-500 leading-relaxed">
              For best results, apply GHK-Cu topically to the scalp at 0.1–0.5% concentration daily.
              Many users combine scalp application with subcutaneous injection for both systemic and local
              coverage. See our <Link href="/hair-growth" className="text-yellow-600 hover:underline">hair growth peptide guide</Link> for
              a complete protocol.
            </p>
          </div>

          <div>
            <span className="badge mb-4 inline-block" style={{ background: 'rgba(236,72,153,0.1)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.3)' }}>Full Protocol</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">GHK-Cu Protocol Guide</h2>

            <div className="space-y-4">
              <div className="rounded-xl p-5" style={{ background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.2)' }}>
                <h3 className="font-bold mb-3" style={{ color: '#f9a8d4' }}>Systemic Anti-Aging (Subcutaneous)</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex gap-2"><span className="font-bold" style={{ color: '#f472b6' }}>Dose:</span> 1–2mg per day</li>
                  <li className="flex gap-2"><span className="font-bold" style={{ color: '#f472b6' }}>Timing:</span> Morning injection preferred</li>
                  <li className="flex gap-2"><span className="font-bold" style={{ color: '#f472b6' }}>Cycling:</span> Year-round — no cycling required</li>
                  <li className="flex gap-2"><span className="font-bold" style={{ color: '#f472b6' }}>Stack with:</span> Epithalon (burst cycles) + NAD+</li>
                </ul>
              </div>

              <div className="rounded-xl p-5" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <h3 className="font-bold mb-3 text-amber-300">Topical Skin Application</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex gap-2"><span className="font-bold text-yellow-600">Concentration:</span> 0.1–0.5% in serum or saline base</li>
                  <li className="flex gap-2"><span className="font-bold text-yellow-600">Frequency:</span> 1–2× daily (morning and evening)</li>
                  <li className="flex gap-2"><span className="font-bold text-yellow-600">Area:</span> Face, neck, décolletage</li>
                  <li className="flex gap-2"><span className="font-bold text-yellow-600">Note:</span> Do not mix with vitamin C in the same application</li>
                </ul>
              </div>

              <div className="rounded-xl p-5" style={{ background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.2)' }}>
                <h3 className="font-bold mb-3" style={{ color: '#f9a8d4' }}>Scalp Application (Hair Restoration)</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex gap-2"><span className="font-bold" style={{ color: '#f472b6' }}>Concentration:</span> 0.1–1% in saline or carrier</li>
                  <li className="flex gap-2"><span className="font-bold" style={{ color: '#f472b6' }}>Frequency:</span> Once daily to scalp</li>
                  <li className="flex gap-2"><span className="font-bold" style={{ color: '#f472b6' }}>Method:</span> Apply, massage for 2 minutes, do not rinse</li>
                  <li className="flex gap-2"><span className="font-bold" style={{ color: '#f472b6' }}>Timeline:</span> 8–12 weeks for visible regrowth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Stack Comparison */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="badge mb-4 inline-block" style={{ background: 'rgba(236,72,153,0.1)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.3)' }}>Anti-Aging Protocol</span>
          <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">GHK-Cu Within the Longevity Stack</h2>
          <p className="text-gray-500 leading-relaxed">
            GHK-Cu is the foundation of any comprehensive anti-aging protocol, but its effects compound when
            combined with complementary longevity peptides. Here is how it fits into the full protocol.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="card p-6">
            <div className="badge mb-3 inline-block" style={{ background: 'rgba(236,72,153,0.1)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.3)' }}>Daily Base</div>
            <h3 className="text-gray-900 font-bold mb-2">GHK-Cu</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Daily subcutaneous + topical. Provides continuous gene expression modulation, collagen synthesis,
              and antioxidant defense. The always-on foundation of the anti-aging protocol.
            </p>
            <Link href="/products/ghk-cu" className="text-pink-400 text-xs font-medium hover:underline flex items-center gap-1">
              Shop GHK-Cu <ArrowRight size={11} />
            </Link>
          </div>
          <div className="card p-6">
            <div className="badge mb-3 inline-block" style={{ background: 'rgba(245,158,11,0.1)', color: '#fcd34d', border: '1px solid rgba(245,158,11,0.3)' }}>Burst Cycles</div>
            <h3 className="text-gray-900 font-bold mb-2">
              <Link href="/products/epithalon" className="hover:text-yellow-600 transition-colors">Epithalon</Link>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              10–20 day burst cycles, 1–2× per year. Activates telomerase for telomere extension —
              addressing the deepest level of cellular aging that GHK-Cu cannot reach alone.
            </p>
            <Link href="/products/epithalon" className="text-yellow-600 text-xs font-medium hover:underline flex items-center gap-1">
              Shop Epithalon <ArrowRight size={11} />
            </Link>
          </div>
          <div className="card p-6">
            <div className="badge badge-cyan mb-3 inline-block">Continuous</div>
            <h3 className="text-gray-900 font-bold mb-2">
              <Link href="/products/nad-plus" className="hover:text-yellow-600 transition-colors">NAD+ 500mg</Link>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              2–3× per week ongoing. Restores mitochondrial energy production and activates sirtuin
              longevity enzymes — addressing cellular aging from the energy and DNA repair angles.
            </p>
            <Link href="/products/nad-plus" className="text-yellow-600 text-xs font-medium hover:underline flex items-center gap-1">
              Shop NAD+ <ArrowRight size={11} />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/anti-aging" className="card p-5 hover:border-pink-500/40 transition-colors block">
            <p className="font-semibold mb-2" style={{ color: '#f472b6' }}>Anti-Aging Peptide Hub</p>
            <p className="text-gray-500 text-sm">Full anti-aging protocol guide with Epithalon, GHK-Cu, NAD+, and SNAP-8 — including evidence summaries and stack protocols.</p>
            <div className="flex items-center gap-1 mt-3 text-xs font-medium" style={{ color: '#f472b6' }}>View guide <ArrowRight size={12} /></div>
          </Link>
          <Link href="/best-peptide-for-anti-aging" className="card p-5 hover:border-amber-500/40 transition-colors block">
            <p className="text-yellow-600 font-semibold mb-2">Best Peptides for Anti-Aging 2026</p>
            <p className="text-gray-500 text-sm">Ranked comparison of every anti-aging peptide with evidence grades, mechanisms, and protocol recommendations.</p>
            <div className="flex items-center gap-1 mt-3 text-yellow-600 text-xs font-medium">Read ranking <ArrowRight size={12} /></div>
          </Link>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Products */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shop Anti-Aging Peptides</h2>
        <p className="text-gray-500 text-sm mb-8">HPLC-verified purity, COA available per batch.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ghkProduct, epithalonProduct, nadProduct].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} showAffiliateButton />
          ))}
        </div>
      </section>

      <div className="glow-divider" />

      {/* FAQ */}
      <section className="py-10 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <span className="badge mb-4 inline-block" style={{ background: 'rgba(236,72,153,0.1)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.3)' }}>FAQ</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">GHK-Cu Questions Answered</h2>
        <div className="space-y-4">
          {ghkFaqs.map((faq) => (
            <div key={faq.q} className="card p-5">
              <div className="flex items-start gap-3">
                <HelpCircle size={18} style={{ color: '#f472b6' }} className="shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/peptides/ghk-cu" />
    </div>
  );
}
