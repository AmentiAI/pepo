import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Star,
  TrendingDown,
  Zap,
  ExternalLink,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Best Peptide for Weight Loss 2026 | GLP-1 Comparison',
  description:
    'Compare the best peptides for weight loss — Semaglutide (14.9%), Tirzepatide (22.5%), and Retatrutide (24.2%). Clinical data, dosing, and which is right for you.',
  keywords:
    'best peptide for weight loss, semaglutide weight loss, tirzepatide weight loss, best GLP-1 for weight loss, peptides for fat loss, weight loss peptide 2026',
  alternates: { canonical: 'https://www.peptidesclav.com/best-peptide-for-weight-loss' },
  openGraph: {
    title: 'Best Peptide for Weight Loss 2026 | GLP-1 Comparison',
    description:
      'Compare the best peptides for weight loss — Semaglutide (14.9%), Tirzepatide (22.5%), and Retatrutide (24.2%). Clinical data, dosing, and which is right for you.',
    type: 'website',
    url: 'https://www.peptidesclav.com/best-peptide-for-weight-loss',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Best Peptide for Weight Loss 2026' }],
  },
};

const peptides = [
  {
    name: 'Semaglutide',
    badge: 'Entry-Level',
    badgeClass: 'badge',
    weightLoss: '14.9%',
    mechanism: 'GLP-1 receptor agonist',
    dosing: '0.5–2.4mg/week (subcutaneous)',
    trial: 'STEP 1 (N=1961)',
    pros: ['Proven Phase 3 data', 'Weekly injection', 'Most clinical experience', 'Lowest side effect profile'],
    cons: ['Lowest weight loss ceiling', 'Single mechanism', 'Requires slow titration'],
    best: 'GLP-1 newcomers, tolerability concerns',
    color: 'text-gray-500',
    border: 'border-zinc-600/40',
    glow: '',
  },
  {
    name: 'Tirzepatide',
    badge: 'Best Overall',
    badgeClass: 'badge badge-cyan',
    weightLoss: '22.5%',
    mechanism: 'GLP-1 + GIP dual agonist',
    dosing: '5–15mg/week (subcutaneous)',
    trial: 'SURMOUNT-1 (N=2539)',
    pros: ['Dual GLP-1 + GIP mechanism', '22.5% average weight loss', 'Phase 3 proven', 'Superior to semaglutide head-to-head'],
    cons: ['Higher cost', 'More GI side effects at high doses', 'Newer long-term data'],
    best: 'Most people seeking proven, maximum-value weight loss',
    color: 'text-yellow-600',
    border: 'border-cyan-500/40',
    glow: 'ring-1 ring-cyan-500/20',
  },
  {
    name: 'Retatrutide',
    badge: 'Maximum Efficacy',
    badgeClass: 'badge',
    weightLoss: '24.2%',
    mechanism: 'GLP-1 + GIP + Glucagon triple agonist',
    dosing: '4–12mg/week (subcutaneous)',
    trial: 'Phase 2 (N=338)',
    pros: ['Highest recorded weight loss', 'Triple receptor mechanism', 'Added metabolic benefits'],
    cons: ['Phase 2 data only (smaller trial)', 'Less long-term safety data', 'Harder to source'],
    best: 'Maximum results, comfortable with cutting-edge compounds',
    color: 'text-yellow-600',
    border: 'border-violet-500/40',
    glow: '',
  },
  {
    name: 'Cagrilintide + Semaglutide',
    badge: 'Appetite + Amylin',
    badgeClass: 'badge',
    weightLoss: '~25%',
    mechanism: 'GLP-1 + Amylin dual (CagriSema)',
    dosing: '2.4mg Sema + 2.4mg Cagri weekly',
    trial: 'REDEFINE 1 (Phase 3, ongoing)',
    pros: ['Amylin pathway (novel mechanism)', 'Additive to GLP-1', 'Strong appetite suppression'],
    cons: ['Phase 3 still completing', 'Complex sourcing', 'Requires two peptides'],
    best: 'Plateau breakers and those who want next-generation approach',
    color: 'text-gray-500',
    border: 'border-zinc-600/40',
    glow: '',
  },
];

const faqs = [
  {
    q: 'What is the best way to manage nausea from GLP-1 peptides?',
    a: 'GLP-1-induced nausea is dose-dependent and almost always manageable with proper titration. The most effective strategy is to increase doses very slowly — staying at each dose level for 4–6 weeks before advancing, even if you feel fine. Avoid greasy or high-fat meals, eat smaller portions, and stay well hydrated. Ginger tea and small protein-first meals significantly reduce GI side effects. The vast majority of users find nausea resolves within 2–4 weeks of any new dose level as the body adapts.',
  },
  {
    q: 'How do I prevent muscle loss while on GLP-1 peptides?',
    a: 'Muscle preservation is critical on GLP-1 protocols — studies show that without intervention, 25–40% of weight lost can be lean mass. The mitigation strategy is threefold: (1) Maintain resistance training 3–4× per week throughout the protocol, (2) Consume 1.6–2.2g of protein per kg of bodyweight daily — this requires conscious effort given the appetite suppression from GLP-1s, and (3) Consider adding Ipamorelin/CJC-1295 to preserve and enhance GH-driven muscle protein synthesis. This is exactly the rationale behind the GLP-1 Accelerated Fat Loss stack.',
  },
  {
    q: 'Will I regain weight after stopping GLP-1 peptides?',
    a: 'Weight regain after discontinuation is well-documented — most studies show recovery of approximately 50–70% of lost weight within 12 months of stopping. This is not a peptide failure; it reflects that GLP-1 receptors regulate a set point that reverts without continuous agonism. The practical response is to plan for a long-term (12–24 month minimum) protocol, use the appetite reset period to entrench better eating habits, and if stopping, transition to a very gradual dose reduction rather than abrupt discontinuation. Maintaining strength training and dietary discipline post-protocol is critical for sustaining results.',
  },
  {
    q: 'Can I combine Tirzepatide with a GH peptide protocol?',
    a: 'Yes — combining Tirzepatide with CJC-1295/Ipamorelin is the most powerful evidence-based body recomposition protocol available. The GLP-1+GIP mechanism drives aggressive fat loss and appetite suppression, while GH peptides preserve and build lean muscle during the caloric deficit. BPC-157 is often added to mitigate GI side effects from Tirzepatide. This is the basis of the GLP-1 Accelerated Fat Loss stack, which is specifically designed for this combination.',
  },
  {
    q: 'How much weight can I lose with GLP-1 peptides?',
    a: 'Clinical trial averages: Semaglutide 14.9% body weight, Tirzepatide 22.5%, Retatrutide 24.2%. Individual results range widely. A 200 lb person on Tirzepatide can expect to lose 35–50 lbs over 72 weeks with diet modification. Results plateau without caloric deficit — these peptides work by suppressing appetite, not burning fat directly.',
  },
  {
    q: "What's the difference between Semaglutide and Tirzepatide?",
    a: "Semaglutide is a GLP-1 receptor agonist — it mimics the gut hormone GLP-1 to suppress appetite and slow gastric emptying. Tirzepatide adds GIP (glucose-dependent insulinotropic polypeptide) receptor agonism, giving it a dual mechanism that produces superior weight loss. Head-to-head trials (SURMOUNT-5) confirm Tirzepatide outperforms Semaglutide at comparable doses. The tradeoff is typically higher GI side effects with Tirzepatide, especially during titration.",
  },
  {
    q: 'Do I need to exercise with weight loss peptides?',
    a: 'Exercise is not required for weight loss on GLP-1 peptides, but it is strongly recommended. The primary concern is lean mass preservation — GLP-1 peptides cause significant muscle loss alongside fat loss (approximately 30–40% of lost weight can be lean mass without resistance training). Adding strength training to a GLP-1 protocol preserves muscle, improves metabolic rate, and produces superior long-term body composition outcomes.',
  },
  {
    q: 'How long do I take GLP-1 peptides?',
    a: 'GLP-1 peptides are not a finite course — they are chronic medications. Weight regain after discontinuation is well-documented (average 2/3 of lost weight regained within 12 months). Most people use them for 12–24 months minimum, then consider maintenance dosing or cycling. Some individuals choose indefinite use. The decision should be based on reaching goal weight, metabolic health markers, and long-term sustainability.',
  },
];

export default function BestPeptideWeightLossPage() {
  const weightLossProducts = products.filter((p) =>
    p.category === 'Body Composition' || p.tags.includes('Weight Loss') || p.tags.includes('GLP-1')
  );
  const seen = new Set<string>();
  const uniqueWeightLossProducts = weightLossProducts.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="badge hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="badge badge-cyan">Best Peptide for Weight Loss</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">2026 Guide</span>
              <span className="badge badge-cyan">Updated March 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">Best Peptide for </span>
              <span className="gradient-text">Weight Loss</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              GLP-1 class peptides have redefined what weight loss medicine can achieve. We compare
              the top four options — from the proven Semaglutide to the triple-agonist Retatrutide
              — with clinical data, dosing protocols, and a decision guide to find your best fit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/glp1-comparison" className="btn-primary">
                Deep Dive: GLP-1 Comparison
                <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn-secondary">
                Browse Products
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <TrendingDown size={18} className="text-yellow-600" />, value: '24.2%', label: 'Max clinical weight loss' },
              { icon: <Zap size={18} className="text-yellow-600" />, value: '4', label: 'Compounds compared' },
              { icon: <Star size={18} className="text-yellow-600" />, value: 'Tirze.', label: 'Best overall pick' },
              { icon: <CheckCircle2 size={18} className="text-yellow-600" />, value: 'Phase 3', label: 'Gold standard data' },
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

      {/* Quick Answer — Winner Card */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Quick Answer</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Our Pick: Tirzepatide
        </h2>
        <div
          className="card p-6 sm:p-8 border border-cyan-500/30 ring-1 ring-cyan-500/10"
          style={{ background: 'var(--bg-card)' }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Tirzepatide</h3>
                <span className="badge badge-cyan">Best Overall</span>
              </div>
              <p className="text-gray-500 text-sm max-w-xl">
                The only dual GLP-1 + GIP agonist with Phase 3 data showing 22.5% average weight
                loss — superior to Semaglutide in head-to-head trials. The best balance of efficacy,
                evidence quality, and tolerability.
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-extrabold text-yellow-600">22.5%</p>
              <p className="text-xs text-gray-500 mt-1">avg. body weight lost (SURMOUNT-1)</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Mechanism', value: 'GLP-1 + GIP dual agonist' },
              { label: 'Dose Range', value: '5–15mg/week SQ' },
              { label: 'Key Trial', value: 'SURMOUNT-1 (N=2,539)' },
            ].map((item) => (
              <div
                key={item.label}
                className="px-4 py-3 rounded-xl border"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <p className="text-[11px] text-gray-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Full Comparison</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            All Weight Loss Peptides Compared
          </h2>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {peptides.map((p) => (
              <div
                key={p.name}
                className={`card p-5 border flex flex-col ${p.border} ${p.glow}`}
                style={{ background: 'var(--bg)' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{p.name}</h3>
                  <span className={p.badgeClass}>{p.badge}</span>
                </div>
                <p className={`text-3xl font-extrabold ${p.color} mb-1`}>{p.weightLoss}</p>
                <p className="text-xs text-gray-500 mb-4">avg. weight loss ({p.trial})</p>

                <div className="space-y-2 text-xs mb-4">
                  <div>
                    <span className="text-gray-500">Mechanism: </span>
                    <span className="text-gray-700">{p.mechanism}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Dosing: </span>
                    <span className="text-gray-700">{p.dosing}</span>
                  </div>
                </div>

                <div className="space-y-1.5 mb-4">
                  {p.pros.map((pro) => (
                    <div key={pro} className="flex items-start gap-1.5">
                      <CheckCircle2 size={12} className="text-yellow-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-500">{pro}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Best for</p>
                  <p className="text-xs text-gray-700">{p.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Decision Guide */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Decision Guide</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Which Weight Loss Peptide Is Right for You?
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              condition: 'Choose Semaglutide if...',
              points: [
                'You want the most clinical long-term data',
                "You're sensitive to GI side effects",
                'You prefer a single, lower-cost compound',
                'You are new to GLP-1 therapy',
              ],
              color: 'text-gray-700',
              border: 'border-zinc-600/40',
            },
            {
              condition: 'Choose Tirzepatide if...',
              points: [
                'You want the best-proven weight loss outcome',
                "You've tried Semaglutide without enough response",
                'You want dual-mechanism superiority',
                'You want Phase 3-backed results',
              ],
              color: 'text-cyan-300',
              border: 'border-cyan-500/30',
            },
            {
              condition: 'Choose Retatrutide if...',
              points: [
                'You want maximum possible weight loss',
                "You've plateaued on dual-agonist therapy",
                'You are comfortable with Phase 2 (early) data',
                'Metabolic co-benefits (glucose, lipids) are a priority',
              ],
              color: 'text-yellow-500',
              border: 'border-yellow-400/40',
            },
          ].map((item) => (
            <div
              key={item.condition}
              className={`card p-6 border ${item.border}`}
              style={{ background: 'var(--bg-card)' }}
            >
              <h3 className={`font-bold text-sm mb-4 ${item.color}`}>{item.condition}</h3>
              <ul className="space-y-2.5">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <ArrowRight size={13} className="text-violet-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-gray-500">{pt}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS GRID ───────────────────────────────── */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest text-yellow-600 uppercase mb-3">Shop Weight Loss Peptides</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">All GLP-1 & Fat Loss Peptides</h2>
            <p className="text-gray-500 mt-2 max-w-lg">
              HPLC-verified compounds with certificates of analysis per batch. The full GLP-1 range — Semaglutide, Tirzepatide, Retatrutide, and Cagrilintide combinations.
            </p>
          </div>
          <a
            href="/out/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2.5 px-5 text-sm hidden sm:inline-flex"
          >
            Shop All <ExternalLink size={14} />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueWeightLossProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton={true} />
          ))}
        </div>
      </section>

      {/* ── HOW GLP-1 PEPTIDES WORK ─────────────────────── */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-yellow-600 uppercase mb-3">Mechanism of Action</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How GLP-1 Peptides Produce Weight Loss</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              GLP-1 receptor agonists work through multiple simultaneous mechanisms — not just appetite suppression. Understanding these pathways explains both the efficacy and the side effect profile.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              {
                title: 'Hypothalamic Appetite Suppression',
                desc: 'GLP-1 receptors in the arcuate nucleus of the hypothalamus are the primary appetite regulation center. GLP-1 agonism here reduces neuropeptide Y (NPY) and agouti-related peptide (AgRP) — the hunger-promoting hormones — while increasing POMC and CART signals. The result is a profound, sustained reduction in subjective hunger that enables caloric deficits that would be psychologically unsustainable on willpower alone.',
                color: 'text-yellow-600',
              },
              {
                title: 'Gastric Emptying Delay',
                desc: 'GLP-1 receptors in the gut slow the rate at which food moves from the stomach to the small intestine. This extends the physical sensation of fullness after eating — a single meal feels satisfying for 3–5 hours rather than 1–2 hours. This mechanism contributes to the dramatic reduction in meal size and frequency that drives the caloric deficit on GLP-1 protocols.',
                color: 'text-yellow-600',
              },
              {
                title: 'Glucose-Dependent Insulin Stimulation',
                desc: 'GLP-1 receptors on pancreatic beta cells stimulate insulin secretion — but only when blood glucose is elevated. This glucose-dependency makes GLP-1 agonists metabolically safe: they do not cause hypoglycemia at normal blood sugar levels. This insulin stimulation also reduces post-meal blood sugar spikes and improves insulin sensitivity over time.',
                color: 'text-yellow-600',
              },
              {
                title: 'Adipose Tissue Lipolysis',
                desc: 'GLP-1 receptors expressed in adipose tissue directly stimulate fat breakdown (lipolysis). Tirzepatide\'s added GIP mechanism provides additional adipocyte signaling, explaining its superior fat loss compared to GLP-1-only compounds. Visceral adipose tissue (abdominal fat) appears to be particularly responsive — multiple trials have documented preferential reduction in visceral fat.',
                color: 'text-yellow-600',
              },
              {
                title: 'Central Reward Pathway Modulation',
                desc: 'GLP-1 receptors in the brain\'s reward centers (nucleus accumbens, ventral tegmental area) reduce the hedonic value of food — food tastes and feels less compulsive and rewarding. Many users report that food "noise" — the constant preoccupation with food that affects many people — essentially disappears on GLP-1 therapy. This is distinct from simply feeling less hungry; it\'s a neurological reduction in food-seeking behavior.',
                color: 'text-yellow-600',
              },
              {
                title: 'Cardiovascular & Metabolic Benefits',
                desc: 'Beyond weight loss, GLP-1 agonists demonstrate direct cardioprotective effects. The LEADER trial (Semaglutide) showed significant reduction in MACE (major adverse cardiovascular events). Tirzepatide trials demonstrate improvements in blood pressure, lipid profiles, and liver fat. Weight loss peptides in this class are increasingly being recognized as cardiovascular drugs — not just weight loss aids.',
                color: 'text-yellow-600',
              },
            ].map((item) => (
              <div key={item.title} className="card p-5">
                <h3 className={`font-bold text-sm mb-2 ${item.color}`}>{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Side effect management */}
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Managing GLP-1 Side Effects</h3>
              <p className="text-gray-500 leading-relaxed mb-5">
                The primary side effects of GLP-1 peptides are gastrointestinal — nausea, vomiting, and diarrhea — and are
                directly related to the gastric emptying delay mechanism. They are dose-dependent and almost universally manageable
                with appropriate titration. Most users find side effects resolve within 2–4 weeks at any given dose.
              </p>
              <ul className="space-y-3">
                {[
                  'Titrate slowly: stay at each dose for 4–6 weeks before advancing, even if well-tolerated',
                  'Eat smaller, more frequent meals — large high-fat meals significantly worsen nausea',
                  'Protein first: start each meal with protein to improve satiety and reduce GI burden',
                  'Hydration: GLP-1-induced reduced intake can lead to dehydration — actively track fluid intake',
                  'BPC-157: adding BPC-157 to the protocol provides direct gut lining protection and mucosal repair',
                  'Timing: inject the evening or morning — experiment to find which timing reduces peak nausea for you',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-gray-500">
                    <CheckCircle2 size={15} className="text-yellow-600 mt-0.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lean Mass Preservation Protocol</h3>
              <p className="text-gray-500 leading-relaxed mb-5">
                The single biggest risk of GLP-1 protocols is significant lean muscle loss alongside fat loss. Studies show
                25–40% of weight lost can be lean tissue without deliberate countermeasures. This compromises metabolic rate,
                reduces long-term weight maintenance, and produces suboptimal body composition outcomes.
              </p>
              <div className="space-y-3">
                {[
                  { step: '1', title: 'Resistance Training', desc: 'Lift weights 3–4× per week. Mechanical load is the primary signal for muscle protein synthesis and prevents atrophy during caloric deficit.' },
                  { step: '2', title: 'Protein Target', desc: '1.6–2.2g protein per kg bodyweight daily. With GLP-1-suppressed appetite, this requires active planning — protein shakes help reach target.' },
                  { step: '3', title: 'Add GH Peptides', desc: 'CJC-1295 + Ipamorelin before sleep preserves lean mass via GH-mediated IGF-1 elevation. This is the core of the GLP-1 Accelerated Fat Loss stack.' },
                  { step: '4', title: 'Creatine Monohydrate', desc: '3–5g daily. Evidence-backed for lean mass preservation during caloric restriction. Low cost and zero side effects.' },
                ].map((item) => (
                  <div key={item.step} className="card p-4 flex gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                      style={{ background: 'rgba(234,179,8,0.15)', color: '#a78bfa', border: '1px solid rgba(234,179,8,0.25)' }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={20} className="text-yellow-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card p-6 border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your Protocol?
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Browse our full GLP-1 comparison for deep-dive dosing protocols, side effect management,
          and compound sourcing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/glp1-comparison" className="btn-primary">
            Full GLP-1 Comparison
            <ArrowRight size={16} />
          </Link>
          <Link href="/products" className="btn-secondary">
            Browse All Products
          </Link>
        </div>
      </section>

      <RelatedReading pageKey="/best-peptide-for-weight-loss" />
    </div>
  );
}
