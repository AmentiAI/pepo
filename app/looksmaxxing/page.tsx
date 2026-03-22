import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Zap,
  Shield,
  TrendingUp,
  Star,
  Brain,
  Flame,
  Activity,
  HelpCircle,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';
import CitationsSection from '@/components/CitationsSection';

export const metadata: Metadata = {
  title: 'Peptides for Looksmaxxing: Complete Tier-Ranked Guide 2026',
  description:
    'The definitive looksmaxxing peptide guide — GHK-Cu for skinmaxxing, Ipamorelin for bodymaxxing, BPC-157 for gut-skin axis, and GLP-1s for face leanness. Tier-ranked protocols.',
  keywords:
    'looksmaxxing peptides, peptides for looksmaxxing, skinmaxxing peptides, hairmaxxing peptides, bodymaxxing peptides, GHK-Cu looksmaxxing, looksmaxxing guide, best peptides for looksmaxxing, how to looksmaxx with peptides, looksmaxxing tier list, softmaxx peptides, hardmaxx protocol',
  alternates: { canonical: 'https://peptidesclav.com/looksmaxxing' },
  openGraph: {
    title: 'Peptides for Looksmaxxing: Complete Tier-Ranked Guide 2026',
    description:
      'The definitive looksmaxxing peptide guide — GHK-Cu for skinmaxxing, Ipamorelin for bodymaxxing, BPC-157 for gut-skin axis, and GLP-1s for face leanness.',
    type: 'website',
    url: 'https://peptidesclav.com/looksmaxxing',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Peptides for Looksmaxxing — Complete Tier-Ranked Guide',
      },
    ],
  },
};

const heroStats = [
  {
    icon: <Star size={18} className="text-violet-400" />,
    value: '9 Peptides',
    label: 'Ranked for visual impact',
  },
  {
    icon: <Zap size={18} className="text-cyan-400" />,
    value: 'S-Tier',
    label: 'GHK-Cu & GLP-1s',
  },
  {
    icon: <TrendingUp size={18} className="text-violet-400" />,
    value: '5 Goals',
    label: 'Skin, hair, body, sleep, gut',
  },
  {
    icon: <Shield size={18} className="text-cyan-400" />,
    value: 'Evidence-based',
    label: 'PubMed-cited protocols',
  },
];

const whyPeptidesCards = [
  {
    icon: <Zap size={22} className="text-violet-400" />,
    title: 'Cellular-Level Action',
    description:
      'Peptides operate at receptor and gene-expression level. GHK-Cu resets over 4,000 genes toward a younger expression profile — no topical can reach this depth.',
  },
  {
    icon: <Activity size={22} className="text-cyan-400" />,
    title: 'Every Appearance Vector',
    description:
      'Skin quality, hair density, body composition, sleep quality, and gut-driven inflammation are all addressable with specific peptides simultaneously.',
  },
  {
    icon: <Brain size={22} className="text-violet-400" />,
    title: 'No Suppression of Natural Systems',
    description:
      'Unlike exogenous hormones, GH-releasing peptides amplify your existing pulsatile GH without shutting down the axis. No post-cycle crash.',
  },
  {
    icon: <Shield size={22} className="text-cyan-400" />,
    title: 'Research-Backed',
    description:
      'These are not supplements. BPC-157 has 30+ years of gastric research. GHK-Cu has 4,000+ published studies. GLP-1 peptides have Phase 3 FDA-approved trial data.',
  },
];

const sTierPeptides = [
  { name: 'GHK-Cu', subtitle: 'Skinmaxxing + Hairmaxxing', slug: 'ghk-cu' },
  { name: 'Semaglutide / Tirzepatide', subtitle: 'Face leanness + Bodymaxxing', slug: 'semaglutide-10mg' },
];

const aTierPeptides = [
  { name: 'Ipamorelin / CJC-1295', subtitle: 'Sleepmaxxing + Bodymaxxing + Skinmaxxing', slug: 'ipamorelin-cjc' },
  { name: 'BPC-157', subtitle: 'Gut-skin axis + Hairmaxxing', slug: 'bpc-157' },
];

const bTierPeptides = [
  { name: 'Epithalon', subtitle: 'Anti-aging skinmaxxing', slug: 'epithalon' },
  { name: 'IGF-1 LR3', subtitle: 'Hardmaxx bodymaxxing', slug: 'igf-1-lr3' },
  { name: 'SNAP-8', subtitle: 'Softmaxx expression lines', slug: 'snap-8' },
  { name: 'NAD+', subtitle: 'Skin glow + cellular energy', slug: 'nad-plus' },
  { name: 'TB-500', subtitle: 'Hair follicle + systemic healing', slug: 'tb-500' },
];

const roiTableRows = [
  {
    peptide: 'GHK-Cu topical',
    route: 'Topical',
    difficulty: 'Softmaxx',
    timeline: '4–8 wks',
    impact: 'Skin texture, collagen',
    bestFor: 'Skinmaxxing beginners',
    difficultyColor: 'text-cyan-400',
  },
  {
    peptide: 'SNAP-8',
    route: 'Topical',
    difficulty: 'Softmaxx',
    timeline: '2–4 wks',
    impact: 'Expression lines',
    bestFor: 'Face softmaxxers',
    difficultyColor: 'text-cyan-400',
  },
  {
    peptide: 'Ipamorelin / CJC',
    route: 'Subcutaneous',
    difficulty: 'Medium',
    timeline: '8–12 wks',
    impact: 'Sleep, body comp, skin',
    bestFor: 'Full looksmaxx',
    difficultyColor: 'text-violet-400',
  },
  {
    peptide: 'GHK-Cu injectable',
    route: 'Subcutaneous',
    difficulty: 'Medium',
    timeline: '6–10 wks',
    impact: 'Deep collagen reset',
    bestFor: 'Skinmaxxing advanced',
    difficultyColor: 'text-violet-400',
  },
  {
    peptide: 'Semaglutide',
    route: 'Subcutaneous',
    difficulty: 'Medium',
    timeline: '12–24 wks',
    impact: 'Face leanness',
    bestFor: 'Overweight looksmaxxers',
    difficultyColor: 'text-violet-400',
  },
  {
    peptide: 'BPC-157 (oral)',
    route: 'Oral',
    difficulty: 'Softmaxx',
    timeline: '4–8 wks',
    impact: 'Gut-skin clarity',
    bestFor: 'Gutmaxxers',
    difficultyColor: 'text-cyan-400',
  },
  {
    peptide: 'Epithalon',
    route: 'Subcutaneous',
    difficulty: 'Hardmaxx',
    timeline: '1–2 cycles/yr',
    impact: 'Slows aging',
    bestFor: 'Long-term looksmaxxers',
    difficultyColor: 'text-orange-400',
  },
  {
    peptide: 'IGF-1 LR3',
    route: 'Subcutaneous',
    difficulty: 'Hardmaxx',
    timeline: '4–6 wks',
    impact: 'Lean muscle',
    bestFor: 'Bodymaxxing advanced',
    difficultyColor: 'text-orange-400',
  },
];

const faqs = [
  {
    q: 'What is the best peptide for looksmaxxing?',
    a: 'GHK-Cu is the highest-ROI single peptide for pure visual improvement — it addresses skin texture, collagen density, and hair quality simultaneously. For face leanness specifically, GLP-1 peptides (Semaglutide, Tirzepatide) produce the most dramatic visual changes per unit of effort. For a full-stack approach, Ipamorelin/CJC-1295 before bed combines bodymaxxing, sleepmaxxing, and skinmaxxing in one compound.',
  },
  {
    q: "What's the difference between softmaxxing and hardmaxxing with peptides?",
    a: 'Softmaxx peptides are topicals or oral compounds with low barrier to entry: GHK-Cu serum, SNAP-8 topical, oral BPC-157. Hardmaxx protocols involve subcutaneous injections with cycling: Ipamorelin/CJC-1295, Epithalon, IGF-1 LR3. Most users start with topical skinmaxxing compounds and graduate to injectables once comfortable with reconstitution and injection technique.',
  },
  {
    q: 'How long before I see results from looksmaxxing peptides?',
    a: 'Timeline depends on the compound: SNAP-8 topical shows expression line reduction in 2–4 weeks. GHK-Cu topical improves skin texture in 4–8 weeks. GHK-Cu injectable produces measurable collagen density changes in 6–10 weeks. Ipamorelin/CJC-1295 improves sleep quality within 1–2 weeks; body composition changes take 8–12 weeks. GLP-1 face leanness follows the weight loss timeline — most users see facial changes after 8–15% bodyweight reduction.',
  },
  {
    q: 'Can women use looksmaxxing peptides?',
    a: 'Yes — all the skinmaxxing and hairmaxxing peptides work identically in women. For GH peptides (Ipamorelin/CJC-1295), women use lower doses (100mcg vs 200mcg for men) due to higher GH sensitivity. GLP-1 peptides (Semaglutide, Tirzepatide) use identical doses in clinical trials. PT-141 is FDA-approved specifically for premenopausal women for sexual health applications.',
  },
  {
    q: 'Is GHK-Cu the same as collagen supplements?',
    a: 'No — they are completely different. Oral collagen supplements provide amino acid building blocks passively. GHK-Cu is a signaling peptide that actively upregulates your own collagen synthesis genes. It does not provide collagen — it instructs your cells to make more of it. This is mechanistically superior and is why GHK-Cu has 4,000+ published studies while oral collagen has limited evidence.',
  },
  {
    q: 'Do I need to inject peptides for looksmaxxing, or are there oral/topical options?',
    a: 'You can achieve significant skinmaxxing results without any injections: GHK-Cu serum, SNAP-8 topical, and oral BPC-157 (dissolved in water) all require no needles. Hairmaxxing can start with topical GHK-Cu to the scalp. For bodymaxxing and deeper systemic effects, subcutaneous injection is required — but this is a 30-second process with a 31-gauge insulin needle that most users describe as essentially painless.',
  },
];

const looksmaxxingCitations = [
  {
    number: 1,
    authors: 'Pickart L, Margolina A.',
    title: 'GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration',
    journal: 'BioMed Research International, 2018',
    year: 2018,
    url: 'https://pubmed.ncbi.nlm.nih.gov/29750133/',
  },
  {
    number: 2,
    authors: 'Jastreboff AM, et al.',
    title: 'Tirzepatide Once Weekly for the Treatment of Obesity',
    journal: 'New England Journal of Medicine, 387(3), 205–216',
    year: 2022,
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2206038',
  },
  {
    number: 3,
    authors: 'Wilding JPH, et al.',
    title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity',
    journal: 'New England Journal of Medicine, 384(11), 989–1002',
    year: 2021,
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2032183',
  },
  {
    number: 4,
    authors: 'Pickart L.',
    title: 'The Human Tri-Peptide GHK and Tissue Remodeling',
    journal: 'Journal of Biomaterials Science, Polymer Edition, 19(8), 969–988',
    year: 2008,
    url: 'https://pubmed.ncbi.nlm.nih.gov/18644279/',
  },
  {
    number: 5,
    authors: 'Khavinson VKh, et al.',
    title: 'Epithalon peptide induces telomerase activity and telomere elongation in human somatic cells',
    journal: 'Bulletin of Experimental Biology and Medicine, 135(6), 590–592',
    year: 2003,
    url: 'https://pubmed.ncbi.nlm.nih.gov/12937682/',
  },
  {
    number: 6,
    authors: 'Sikiric P, et al.',
    title: 'Stable Gastric Pentadecapeptide BPC 157: Novel Therapy in Gastrointestinal Tract',
    journal: 'Current Pharmaceutical Design, 17(16), 1612–1632',
    year: 2011,
    url: 'https://pubmed.ncbi.nlm.nih.gov/21548867/',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
    {
      '@type': 'Article',
      headline: 'Peptides for Looksmaxxing: Complete Tier-Ranked Guide 2026',
      description:
        'The definitive looksmaxxing peptide guide — GHK-Cu for skinmaxxing, Ipamorelin for bodymaxxing, BPC-157 for gut-skin axis, and GLP-1s for face leanness. Tier-ranked protocols.',
      url: 'https://peptidesclav.com/looksmaxxing',
      publisher: {
        '@type': 'Organization',
        name: 'PeptidesClav',
        url: 'https://peptidesclav.com',
      },
      datePublished: '2026-01-01',
      dateModified: '2026-03-21',
    },
  ],
};

const quickLinkProducts = [
  { label: 'GHK-Cu', slug: 'ghk-cu' },
  { label: 'Ipamorelin/CJC', slug: 'ipamorelin-cjc' },
  { label: 'BPC-157', slug: 'bpc-157' },
  { label: 'SNAP-8', slug: 'snap-8' },
  { label: 'Semaglutide', slug: 'semaglutide-10mg' },
];

export default function LooksmaxxingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── SECTION 1: Hero ─── */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Looksmaxxing</span>
              <ChevronRight size={14} className="text-zinc-600" />
              <span className="badge badge-cyan">Peptide Guide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">Peptides</span>
              <span className="text-white"> for Looksmaxxing</span>
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              The complete tier-ranked guide to using peptides for skinmaxxing, hairmaxxing,
              bodymaxxing, and sleepmaxxing — with exact protocols, doses, and clinical evidence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#tier-list" className="btn-primary">
                View Tier List
                <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn-secondary">
                Browse All Products
              </Link>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {heroStats.map((stat) => (
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

      {/* ─── SECTION 2: Why Peptides (light bg) ─── */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Peptides Are the Highest-ROI Looksmaxxing Intervention
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            Most looksmaxxing interventions work at the surface — topicals affect the stratum
            corneum, mewing affects bone positioning over years, diet affects fat distribution
            gradually. Peptides operate at the cellular and genetic level: upregulating collagen
            synthesis genes, amplifying the nocturnal GH pulse that drives skin repair, healing the
            gut-skin axis that determines baseline inflammation, and accelerating fat loss that
            reveals bone structure. No other single category of compounds addresses all five
            appearance vectors simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyPeptidesCards.map((card) => (
            <div key={card.title} className="card p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--bg)' }}>
                {card.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 3: Tier List (dark bg) ─── */}
      <section
        id="tier-list"
        className="py-10 sm:py-20"
        style={{ backgroundColor: 'var(--bg-card)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Looksmaxxing Peptide Tier List
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Ranked by visual ROI — how much appearance improvement per unit of effort and cost
              invested.
            </p>
          </div>

          <div className="space-y-4">
            {/* S Tier */}
            <div
              className="rounded-2xl border-l-4 border-violet-500 p-1"
              style={{ borderColor: 'rgb(139 92 246)', backgroundColor: 'rgba(139,92,246,0.06)' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5">
                <div className="shrink-0 w-28">
                  <p className="text-2xl font-black text-violet-400">S</p>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mt-0.5">
                    Game Changing
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {sTierPeptides.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="card px-4 py-3 flex flex-col gap-1 hover:border-violet-500/50 transition-colors min-w-[160px]"
                    >
                      <span className="text-sm font-bold text-white">{p.name}</span>
                      <span className="text-xs text-zinc-500">{p.subtitle}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* A Tier */}
            <div
              className="rounded-2xl border-l-4 p-1"
              style={{ borderColor: 'rgb(6 182 212)', backgroundColor: 'rgba(6,182,212,0.05)' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5">
                <div className="shrink-0 w-28">
                  <p className="text-2xl font-black text-cyan-400">A</p>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mt-0.5">
                    High Impact
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {aTierPeptides.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="card px-4 py-3 flex flex-col gap-1 hover:border-cyan-500/50 transition-colors min-w-[160px]"
                    >
                      <span className="text-sm font-bold text-white">{p.name}</span>
                      <span className="text-xs text-zinc-500">{p.subtitle}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* B Tier */}
            <div
              className="rounded-2xl border-l-4 p-1"
              style={{ borderColor: 'rgb(113 113 122)', backgroundColor: 'rgba(113,113,122,0.05)' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5">
                <div className="shrink-0 w-28">
                  <p className="text-2xl font-black text-zinc-400">B</p>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mt-0.5">
                    Strong Support
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {bTierPeptides.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="card px-4 py-3 flex flex-col gap-1 hover:border-zinc-500/50 transition-colors min-w-[140px]"
                    >
                      <span className="text-sm font-bold text-white">{p.name}</span>
                      <span className="text-xs text-zinc-500">{p.subtitle}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Softmaxx vs Hardmaxx Legend */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-cyan">Softmaxx</span>
                <span className="text-xs text-zinc-500">Low effort — topical or oral</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['GHK-Cu topical', 'SNAP-8 topical', 'NAD+'].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full font-medium text-cyan-300"
                    style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge">Hardmaxx</span>
                <span className="text-xs text-zinc-500">Injectable — cycle required</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Ipamorelin/CJC', 'IGF-1 LR3', 'Epithalon', 'BPC-157'].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full font-medium text-violet-300"
                    style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Skinmaxxing (light bg) ─── */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge badge-cyan">Skinmaxxing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skinmaxxing Peptides
          </h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            Skin quality — texture, collagen density, clarity, and luminosity — is the
            highest-leverage looksmaxxing variable. Unlike bone structure, skin quality is fully
            within your control and responds to peptides within weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* GHK-Cu */}
          <div className="card p-7 lg:col-span-2">
            <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">GHK-Cu (Copper Peptide)</h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-bold text-violet-300"
                    style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}
                  >
                    S Tier
                  </span>
                </div>
                <p className="text-sm text-zinc-500">Copper tripeptide — the flagship skinmaxxing compound</p>
              </div>
              <Link href="/products/ghk-cu" className="btn-primary text-sm">
                Shop GHK-Cu <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Mechanism</p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Glycine-histidine-lysine tripeptide bound to copper. Naturally found in human
                    plasma — declines from ~200ng/mL at age 20 to ~80ng/mL at 60.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    What it does for looks
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-violet-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-zinc-400">Upregulates collagen I, III, and elastin synthesis (70% increase in research)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-violet-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-zinc-400">Resets 4,000+ genes toward younger expression profile<sup className="text-violet-400 text-xs ml-0.5">[1]</sup></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-violet-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-zinc-400">Accelerates wound/scar healing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-violet-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-zinc-400">Reduces skin inflammation and redness</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-1">
                    Softmaxx Option
                  </p>
                  <p className="text-sm text-zinc-300">
                    Topical GHK-Cu serum (0.1–2% concentration) applied daily — no needles
                    required.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">
                    Hardmaxx Option
                  </p>
                  <p className="text-sm text-zinc-300">
                    Subcutaneous 1–2mg injected 2-3x/week for systemic collagen upregulation.
                  </p>
                </div>
                <div
                  className="rounded-xl p-4"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Protocol
                  </p>
                  <p className="text-sm text-zinc-300">
                    8 weeks on, 4 weeks off. Stack with Epithalon for full longevity skinmaxx.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SNAP-8 */}
          <div className="card p-7">
            <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">SNAP-8 (Argireline)</h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-bold text-zinc-300"
                    style={{ background: 'rgba(113,113,122,0.2)', border: '1px solid rgba(113,113,122,0.3)' }}
                  >
                    B Tier
                  </span>
                </div>
                <p className="text-sm text-zinc-500">Topical Botox alternative — zero needles</p>
              </div>
              <Link href="/products/snap-8" className="btn-secondary text-sm">
                Shop SNAP-8
              </Link>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Mechanism</p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Decapeptide that partially inhibits acetylcholine release at neuromuscular
                  junctions — the Botox mechanism, far milder and without any systemic effects.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                  What it does for looks
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Reduces depth of expression lines (forehead, crow's feet, nasolabial folds) by
                  30–35% in 4 weeks in clinical studies.
                </p>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <p className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-1">
                  Softmaxx Protocol
                </p>
                <p className="text-sm text-zinc-300">
                  Apply to expression-line areas 2x daily after cleansing. Zero downtime. The
                  closest thing to topical Botox without needles.
                </p>
              </div>
            </div>
          </div>

          {/* Epithalon */}
          <div className="card p-7">
            <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">Epithalon</h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-bold text-zinc-300"
                    style={{ background: 'rgba(113,113,122,0.2)', border: '1px solid rgba(113,113,122,0.3)' }}
                  >
                    B Tier
                  </span>
                </div>
                <p className="text-sm text-zinc-500">Telomerase activator — anti-aging at the chromosomal level</p>
              </div>
              <Link href="/products/epithalon" className="btn-secondary text-sm">
                Shop Epithalon
              </Link>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Mechanism</p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Tetrapeptide that activates telomerase — the enzyme that extends telomere length.
                  Slows the cellular aging clock at the genetic level.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                  What it does for looks
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Slows visible aging by addressing it at the chromosomal level. Not an acute skin
                  treatment — a long-game play for how you look at 40 vs 50.
                </p>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Protocol</p>
                <p className="text-sm text-zinc-300">
                  5–10mg subcutaneous for 10–20 consecutive days, 2x per year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: Hairmaxxing (dark bg) ─── */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge badge-cyan">Hairmaxxing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Hairmaxxing Peptides
            </h2>
            <p className="text-zinc-400 max-w-2xl leading-relaxed">
              Hair density, thickness, and regrowth are downstream of two variables: follicle stem
              cell activity and scalp blood flow. Peptides address both directly without the sexual
              side effects associated with finasteride.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* GHK-Cu hair */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-bold text-white">GHK-Cu</h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-bold text-violet-300"
                  style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}
                >
                  S Tier for Hair
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Hair Mechanism</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    GHK-Cu promotes follicle stem cell survival, extends the anagen (growth) phase,
                    and reverses follicle miniaturization. Applies to both topical scalp application
                    and subcutaneous.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Research</p>
                  <p className="text-sm text-zinc-400">
                    Promotes hair follicle growth in vitro and animal models. Synergistic with
                    minoxidil without systemic sides.
                  </p>
                </div>
                <div
                  className="rounded-xl p-3"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Protocol</p>
                  <p className="text-xs text-zinc-300">
                    Topical to scalp daily + 1mg subcutaneous 2x/week for maximum effect.
                  </p>
                </div>
                <Link href="/products/ghk-cu" className="btn-primary w-full justify-center text-sm">
                  Shop GHK-Cu <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* BPC-157 hair */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-bold text-white">BPC-157</h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-bold text-cyan-300"
                  style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)' }}
                >
                  A Tier for Hair
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Hair Mechanism</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Angiogenesis (new blood vessel formation) at the follicle level. Scalp blood
                    flow is the rate-limiting step for follicle recovery in miniaturization.
                    BPC-157 drives VEGF-mediated angiogenesis that feeds recovering follicles.
                  </p>
                </div>
                <div
                  className="rounded-xl p-3"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Protocol</p>
                  <p className="text-xs text-zinc-300">
                    250–500mcg subcutaneous near the scalp (temporal/crown area) or systemically,
                    twice daily.
                  </p>
                </div>
                <Link href="/products/bpc-157" className="btn-primary w-full justify-center text-sm">
                  Shop BPC-157 <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* TB-500 hair */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-bold text-white">TB-500</h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-bold text-zinc-300"
                  style={{ background: 'rgba(113,113,122,0.2)', border: '1px solid rgba(113,113,122,0.3)' }}
                >
                  B Tier for Hair
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Hair Mechanism</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Thymosin Beta-4 binds G-actin and promotes stem cell migration to follicles.
                    Research shows promotion of hair follicle cycling and potential anagen phase
                    extension.
                  </p>
                </div>
                <div
                  className="rounded-xl p-3"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Protocol</p>
                  <p className="text-xs text-zinc-300">
                    5mg subcutaneous twice weekly, 6-week loading phase.
                  </p>
                </div>
                <Link href="/products/tb-500" className="btn-primary w-full justify-center text-sm">
                  Shop TB-500 <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: Bodymaxxing (light bg) ─── */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge">Bodymaxxing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bodymaxxing Peptides
          </h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            Muscle:fat ratio is the single most controllable looksmaxxing variable. Face leanness,
            jawline definition, shoulder-to-waist ratio, and vascular aesthetics all improve
            directly with body recomposition.
          </p>
        </div>

        <div className="space-y-6">
          {/* Semaglutide / Tirzepatide */}
          <div className="card p-7">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">Semaglutide / Tirzepatide</h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-bold text-violet-300"
                    style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}
                  >
                    S Tier — Face Leanness
                  </span>
                </div>
                <p className="text-sm text-zinc-500">GLP-1 agonists — the most dramatic visual transformation available</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href="/products/semaglutide-10mg" className="btn-primary text-sm">
                  Shop Semaglutide <ArrowRight size={14} />
                </Link>
                <Link href="/products/tirzepatide-15mg" className="btn-secondary text-sm">
                  Shop Tirzepatide
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  The looksmaxxing community identified what the medical world calls "Ozempic face"
                  — that facial fat loss dramatically reveals underlying bone structure. For
                  individuals carrying facial fat, this is the highest-ROI intervention available.
                  Cheekbones, orbital bones, and jaw definition all emerge as facial fat melts.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                    <TrendingUp size={15} className="text-violet-400 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-zinc-300">Semaglutide (STEP-1)</p>
                      <p className="text-xs text-zinc-500">14.9% mean weight loss<sup className="text-violet-400 text-xs ml-0.5">[3]</sup></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                    <TrendingUp size={15} className="text-cyan-400 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-zinc-300">Tirzepatide (SURMOUNT-1)</p>
                      <p className="text-xs text-zinc-500">22.5% mean weight loss<sup className="text-violet-400 text-xs ml-0.5">[2]</sup></p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-start gap-2 mb-3">
                  <Shield size={15} className="text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    Important Note
                  </p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Pair with Ipamorelin/CJC-1295 to preserve muscle mass during fat loss. GLP-1s
                  without resistance training can lead to muscle loss alongside fat — counterproductive
                  for bodymaxxing goals.
                </p>
              </div>
            </div>
          </div>

          {/* Ipamorelin */}
          <div className="card p-7">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">Ipamorelin / CJC-1295</h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-bold text-cyan-300"
                    style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)' }}
                  >
                    A Tier
                  </span>
                </div>
                <p className="text-sm text-zinc-500">
                  Triple-threat: bodymaxxing + skinmaxxing + sleepmaxxing
                </p>
              </div>
              <Link href="/products/ipamorelin-cjc" className="btn-primary text-sm">
                Shop Ipamorelin/CJC <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Pulsatile GH release. Drives: lean muscle growth, lipolysis (especially
                  visceral/facial fat), dermal thickness, and sleep quality. No cortisol or
                  prolactin spike — the cleanest GH peptide available.
                </p>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Protocol</p>
                <div className="space-y-1">
                  <p className="text-xs text-zinc-300">Women: 100mcg before bed</p>
                  <p className="text-xs text-zinc-300">Men: 200mcg before bed</p>
                  <p className="text-xs text-zinc-300">Cycle: 12 weeks on, 4 weeks off</p>
                </div>
              </div>
            </div>
          </div>

          {/* IGF-1 LR3 */}
          <div className="card p-7">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">IGF-1 LR3</h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-bold text-zinc-300"
                    style={{ background: 'rgba(113,113,122,0.2)', border: '1px solid rgba(113,113,122,0.3)' }}
                  >
                    B Tier — Hardmaxx
                  </span>
                </div>
                <p className="text-sm text-zinc-500">Downstream GH mediator — advanced users only</p>
              </div>
              <Link href="/products/igf-1-lr3" className="btn-secondary text-sm">
                Shop IGF-1 LR3
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <p className="text-sm text-zinc-300 leading-relaxed">
                Downstream mediator of GH. Drives satellite cell activation and muscle fiber
                hypertrophy directly — the hardmaxx bodymaxxing compound. Advanced users only.
                Significant lean mass gains when combined with structured training.
              </p>
              <div
                className="rounded-xl p-4"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Protocol</p>
                <p className="text-xs text-zinc-300">20–50mcg daily for 4–6 weeks. Advanced users only.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: Sleepmaxxing + Gutmaxxing (dark bg) ─── */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Sleepmaxxing and Gutmaxxing: The Hidden Appearance Variables
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Two appearance levers that most looksmaxxers ignore — yet they determine your
              baseline inflammation, skin clarity, and the quality of every night's recovery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Sleepmaxxing */}
            <div className="card p-7">
              <div className="flex items-center gap-2 mb-5">
                <span className="badge">Sleepmaxxing</span>
                <span className="text-sm font-semibold text-white">with Ipamorelin</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                Sleep quality determines the magnitude of your nightly GH pulse — the primary
                driver of skin repair, muscle recovery, and fat metabolism during rest. The issue:
                as you age, pulsatile GH amplitude drops dramatically. Ipamorelin taken 30 minutes
                before sleep amplifies this pulse 3–5x without suppressing the natural axis.
              </p>
              <div className="mb-5">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Visual Effects</p>
                <div className="space-y-1.5">
                  {[
                    'Reduced undereye circles',
                    'Improved skin texture overnight',
                    'Accelerated muscle repair',
                    'Better body composition over time',
                  ].map((effect) => (
                    <div key={effect} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-violet-400 shrink-0" />
                      <span className="text-xs text-zinc-400">{effect}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Protocol</p>
                <p className="text-xs text-zinc-300">
                  100–200mcg subcutaneous 30 min before bed. Women use 100mcg, men 200mcg.
                </p>
              </div>
            </div>

            {/* Gutmaxxing */}
            <div className="card p-7">
              <div className="flex items-center gap-2 mb-5">
                <span className="badge badge-cyan">Gutmaxxing</span>
                <span className="text-sm font-semibold text-white">with BPC-157</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                The gut-skin axis is one of the most underappreciated appearance variables. Gut
                permeability (leaky gut) drives systemic inflammation that manifests as: redness,
                acne, puffiness, dull skin, and poor healing. No topical can fix
                inflammation-driven skin issues — the source is internal.
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                BPC-157 repairs tight junctions in the intestinal wall, downregulates TNF-α and
                IL-6, and restores the gut-brain axis. The looksmaxxing effect: reduced baseline
                inflammation = clearer skin, less facial puffiness, better nutrient absorption
                from skinmaxxing supplements.
              </p>
              <div
                className="rounded-xl p-4"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Protocol</p>
                <p className="text-xs text-zinc-300">
                  250mcg oral (dissolved in water, empty stomach) + 250mcg subcutaneous, twice
                  daily. Run 8 weeks on, 4 weeks off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: Stacks (light bg) ─── */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Looksmaxxing Peptide Stacks
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Individual peptides work. Stacks work synergistically. These three combinations
            represent the highest-ROI protocols for each looksmaxxing goal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Skinmaxx Stack */}
          <div className="card p-7 flex flex-col">
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <Flame size={18} className="text-cyan-400" />
                <span className="badge badge-cyan">Softmaxx Friendly</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-3 mb-1">The Skinmaxx Stack</h3>
              <p className="text-sm text-zinc-500">Pure skinmaxxing — no needles required</p>
            </div>

            <div className="space-y-2 mb-5 flex-1">
              {[
                'GHK-Cu topical serum — daily application',
                'SNAP-8 topical — expression areas 2x/day',
                'NAD+ — cellular glow and energy',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-zinc-300">{item}</span>
                </div>
              ))}
              <p className="text-xs text-zinc-500 mt-3 italic">
                Upgrade: Add GHK-Cu 1mg subcutaneous 2x/week for deeper collagen reset.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-5">
              {[
                { label: 'Cost', value: 'Low–Med' },
                { label: 'Difficulty', value: 'Easy' },
                { label: 'Timeline', value: '4–8 wks' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg p-2 text-center"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wide">{item.label}</p>
                  <p className="text-xs font-bold text-white mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>

            <Link href="/stacks/anti-aging-skin" className="btn-secondary text-sm w-full text-center">
              View Stack Details
            </Link>
          </div>

          {/* Full Looksmaxx Stack */}
          <div className="card p-7 flex flex-col" style={{ borderColor: 'rgba(139,92,246,0.4)' }}>
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <Star size={18} className="text-violet-400" />
                <span className="badge">Most Comprehensive</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-3 mb-1">The Full Looksmaxx Stack</h3>
              <p className="text-sm text-zinc-500">Hardmaxx — every appearance vector simultaneously</p>
            </div>

            <div className="space-y-2 mb-5 flex-1">
              {[
                'Ipamorelin/CJC-1295 — 100–200mcg before bed',
                'GHK-Cu — 1–2mg subcutaneous 2x/week',
                'BPC-157 — 250mcg twice daily (oral + subQ)',
                'NAD+ — cellular energy and skin glow',
                'Optional: Semaglutide 0.25–1mg/week for face leanness',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-violet-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 mb-5">
              {[
                { label: 'Cost', value: 'Med–High' },
                { label: 'Difficulty', value: 'Advanced' },
                { label: 'Timeline', value: '8–12 wks' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg p-2 text-center"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wide">{item.label}</p>
                  <p className="text-xs font-bold text-white mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>

            <Link href="/stacks/performance-elite" className="btn-primary text-sm w-full justify-center">
              View Full Stack <ArrowRight size={14} />
            </Link>
          </div>

          {/* Anti-Aging Looksmaxx Stack */}
          <div className="card p-7 flex flex-col">
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <Shield size={18} className="text-cyan-400" />
                <span className="badge badge-cyan">35+ Recommended</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-3 mb-1">The Anti-Aging Looksmaxx Stack</h3>
              <p className="text-sm text-zinc-500">Long-term appearance trajectory optimization</p>
            </div>

            <div className="space-y-2 mb-5 flex-1">
              {[
                'Epithalon — 10mg per cycle, 2x/year',
                'GHK-Cu — 1mg subcutaneous 2x/week',
                'Ipamorelin — 100mcg before bed nightly',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-zinc-300">{item}</span>
                </div>
              ))}
              <p className="text-xs text-zinc-500 mt-3 italic">
                Best for: Over 35s optimizing long-term appearance trajectory.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-5">
              {[
                { label: 'Cost', value: 'Medium' },
                { label: 'Difficulty', value: 'Medium' },
                { label: 'Timeline', value: 'Long-term' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg p-2 text-center"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wide">{item.label}</p>
                  <p className="text-xs font-bold text-white mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Link href="/stacks/anti-aging-skin" className="btn-secondary text-sm flex-1 text-center">
                Anti-Aging Stack
              </Link>
              <Link href="/stacks/longevity-elite" className="btn-secondary text-sm flex-1 text-center">
                Longevity Stack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: ROI Table (dark bg) ─── */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Softmaxx vs Hardmaxx: Peptide ROI Matrix
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Every looksmaxxing peptide ranked by route, difficulty, timeline, and visual impact.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Peptide
                  </th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden sm:table-cell">
                    Route
                  </th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden md:table-cell">
                    Timeline
                  </th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden lg:table-cell">
                    Visual Impact
                  </th>
                  <th className="text-left px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden xl:table-cell">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {roiTableRows.map((row, i) => (
                  <tr
                    key={row.peptide}
                    style={{
                      backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                      borderBottom: i < roiTableRows.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <td className="px-5 py-4 font-semibold text-white">{row.peptide}</td>
                    <td className="px-5 py-4 text-zinc-400 hidden sm:table-cell">{row.route}</td>
                    <td className={`px-5 py-4 font-semibold ${row.difficultyColor}`}>
                      {row.difficulty}
                    </td>
                    <td className="px-5 py-4 text-zinc-400 hidden md:table-cell">{row.timeline}</td>
                    <td className="px-5 py-4 text-zinc-400 hidden lg:table-cell">{row.impact}</td>
                    <td className="px-5 py-4 text-zinc-500 hidden xl:table-cell">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: FAQ (light bg) ─── */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle size={24} className="text-violet-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Looksmaxxing Peptide FAQ
            </h2>
          </div>
          <p className="text-zinc-400 max-w-2xl">
            The most common questions about using peptides for looksmaxxing — answered with
            evidence-based protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="card p-6">
              <p className="text-base font-bold text-white mb-3">{faq.q}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 11: Final CTA (dark bg) ─── */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Your Looksmaxxing Protocol
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10">
            Browse the complete product library or go straight to the highest-ROI compounds.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/products" className="btn-primary">
              Browse All Products
              <ArrowRight size={16} />
            </Link>
            <Link href="/stacks" className="btn-secondary">
              View Stacks
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {quickLinkProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CitationsSection citations={looksmaxxingCitations} />
      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/looksmaxxing" />
    </div>
  );
}
