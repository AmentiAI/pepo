import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Scale,
  Zap,
  TrendingDown,
  Activity,
  AlertTriangle,
} from 'lucide-react';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: { absolute: 'Semaglutide vs Tirzepatide vs Retatrutide: Which GLP Wins in 2026?' },
  description:
    'Semaglutide vs Tirzepatide vs Retatrutide head-to-head — clinical trial data, weight loss percentages, side effect profiles, and which to choose for your goals.',
  keywords:
    'semaglutide vs tirzepatide, tirzepatide vs semaglutide weight loss, semaglutide tirzepatide retatrutide comparison, best glp-1 peptide, ozempic vs mounjaro, tirzepatide results, semaglutide results 2026',
  alternates: { canonical: 'https://www.peptidesclav.com/comparisons/semaglutide-vs-tirzepatide' },
  openGraph: {
    title: 'Semaglutide vs Tirzepatide vs Retatrutide: Which GLP Wins in 2026?',
    description:
      'Head-to-head comparison of the three major GLP-class peptides — clinical data, mechanisms, side effects, and decision framework for choosing the right one.',
    type: 'website',
    url: 'https://www.peptidesclav.com/comparisons/semaglutide-vs-tirzepatide',
    siteName: 'PeptidesClav',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Semaglutide vs Tirzepatide vs Retatrutide Comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semaglutide vs Tirzepatide vs Retatrutide: Which GLP Wins in 2026?',
    description: 'Head-to-head: 14.9% vs 20.9% vs 24.2% weight loss. Clinical data, mechanisms, side effects, and which to choose.',
  },
};

const glpFaqs = [
  {
    q: 'Is tirzepatide always better than semaglutide?',
    a: 'In clinical trials, tirzepatide produces greater average weight loss than semaglutide (20.9% vs 14.9%). However, "better" depends on your specific situation. Semaglutide has a longer safety track record, may have superior cardiovascular benefits per the SELECT trial, and is better tolerated by users sensitive to GI side effects. Tirzepatide\'s dual GIP/GLP-1 mechanism adds benefits around insulin sensitivity and metabolic flexibility that extend beyond pure weight loss. For pure weight reduction, tirzepatide wins. For overall cardiovascular and metabolic health, semaglutide\'s evidence base is more comprehensive.',
  },
  {
    q: 'What is retatrutide and how is it different?',
    a: 'Retatrutide (GLP-3 R) is a triple agonist — it activates GIP, GLP-1, AND glucagon receptors simultaneously. The glucagon component adds direct thermogenic and lipolytic effects that neither semaglutide nor tirzepatide can achieve. Phase 2 trials showed 24.2% average weight loss at 24 weeks — significantly exceeding both comparators at the same timepoint. Retatrutide is currently in Phase 3 trials and represents the next generation of metabolic peptides.',
  },
  {
    q: 'Which GLP causes the least nausea?',
    a: 'All three GLP-class peptides cause nausea — primarily during dose escalation — because GLP-1 receptor activation slows gastric emptying. Tirzepatide tends to cause less nausea than semaglutide at comparable weight loss efficacy, likely because GIP co-agonism partially counteracts GI motility effects. Retatrutide\'s nausea data from Phase 2 is comparable to tirzepatide. Regardless of choice, nausea is dose-dependent and virtually always improves after the first 4–8 weeks as the body adapts to slowed gastric emptying.',
  },
  {
    q: 'Can I stack GLP peptides with other peptides?',
    a: 'Yes — the most common and effective combination is a GLP-class peptide with Ipamorelin/CJC-1295. The GLP peptide drives fat loss while the GH stack preserves or builds lean muscle mass — counteracting the lean mass loss that can occur during aggressive weight loss protocols. This combination is used extensively in body recomposition protocols. BPC-157 is also commonly added to mitigate GI side effects in sensitive individuals.',
  },
  {
    q: 'How long do I need to stay on a GLP peptide?',
    a: 'GLP-class peptides produce results during active use. Weight regain after stopping is common — the SELECT and STEP extension trials both showed meaningful weight regain within 12 months of discontinuation. Most practitioners approach GLP peptides as long-term maintenance compounds rather than finite courses, similar to how blood pressure medications are used. Some users cycle on and off after reaching goal weight, with maintenance doses during off periods.',
  },
  {
    q: 'What is the starting dose protocol for each?',
    a: 'All three use slow escalation to minimize side effects: Semaglutide starts at 0.25mg/week for 4 weeks, escalating over 12–16 weeks to 2.4mg/week. Tirzepatide starts at 2.5mg/week for 4 weeks, escalating over 16 weeks to 15mg/week. Retatrutide (research only) starts at 1mg/week in trials, escalating more rapidly. Never jump to high doses — the GI side effects of doing so are severe and the escalation protocol exists for a reason.',
  },
];

export default function SemaglutideVsTirzepatidePage() {
  const semaProduct = products.find((p) => p.slug === 'semaglutide-10mg');
  const tirzeProduct = products.find((p) => p.slug === 'tirzepatide-15mg');
  const retatProduct = products.find((p) => p.slug === 'retatrutide-10mg');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Semaglutide vs Tirzepatide vs Retatrutide: Which GLP Wins in 2026?',
    description: 'Head-to-head clinical comparison of semaglutide, tirzepatide, and retatrutide — mechanisms, weight loss data, side effects, and decision framework.',
    url: 'https://www.peptidesclav.com/comparisons/semaglutide-vs-tirzepatide',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: glpFaqs.map((f) => ({
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
            <Link href="/body-composition" className="hover:text-yellow-600 transition-colors">Body Composition</Link>
            <span>/</span>
            <span style={{ color: '#a1a1b5' }}>Semaglutide vs Tirzepatide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Comparisons</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="badge" style={{ background: 'rgba(16,185,129,0.1)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.3)' }}>GLP-Class Peptides</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span style={{ background: 'linear-gradient(135deg, #34d399, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Semaglutide</span>
              <span className="text-gray-900"> vs </span>
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tirzepatide</span>
              <span className="text-gray-900"> vs </span>
              <span style={{ background: 'linear-gradient(135deg, #a78bfa, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Retatrutide</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Three generations of GLP-class peptides. One question: which achieves the results you need?
              Here is the full clinical data comparison, mechanism breakdown, and decision framework
              based on peer-reviewed Phase 2 and Phase 3 trial data.
            </p>
          </div>

          {/* Quick Answer Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                label: 'Most Clinical Data',
                winner: 'Semaglutide',
                reason: 'STEP + SUSTAIN + SELECT trials — broadest evidence base',
                accent: 'text-emerald-400',
                bg: 'rgba(16,185,129,0.08)',
                border: 'rgba(16,185,129,0.25)',
              },
              {
                label: 'Most Weight Loss',
                winner: 'Retatrutide',
                reason: '24.2% avg at 24 wks — triple agonist advantage',
                accent: 'text-yellow-600',
                bg: 'rgba(234,179,8,0.08)',
                border: 'rgba(234,179,8,0.25)',
              },
              {
                label: 'Best Balance',
                winner: 'Tirzepatide',
                reason: 'Superior to semaglutide, more studied than retatrutide',
                accent: 'text-blue-400',
                bg: 'rgba(96,165,250,0.08)',
                border: 'rgba(96,165,250,0.25)',
              },
            ].map((card) => (
              <div key={card.label} className="card p-5" style={{ background: card.bg, borderColor: card.border }}>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">{card.label}</p>
                <p className={`text-xl font-extrabold mb-1 ${card.accent}`}>{card.winner}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{card.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Mechanism Section */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="badge mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.1)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.3)' }}>Mechanism of Action</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">How Each Generation Works</h2>

          <div className="space-y-6 mb-10">
            <div className="card p-6" style={{ borderColor: 'rgba(16,185,129,0.3)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399' }}>GEN 1</span>
                <h3 className="text-gray-900 font-bold text-lg">Semaglutide — Single GLP-1 Agonist</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-3">
                Semaglutide is a GLP-1 receptor agonist with 94% structural homology to human GLP-1 and a
                7-day half-life. GLP-1 receptors are expressed in the hypothalamus (appetite control), gut
                (gastric emptying), pancreas (insulin secretion), and adipose tissue (fat oxidation).
                Semaglutide activates all of these simultaneously, producing comprehensive metabolic intervention
                from a single molecular target.
              </p>
              <p className="text-gray-500 leading-relaxed">
                The STEP 1 trial demonstrated 14.9% average body weight loss over 68 weeks. The more recent
                SELECT trial (17,604 participants) demonstrated significant cardiovascular risk reduction —
                making semaglutide one of the few weight loss agents with confirmed CV endpoint benefits.
                This is the gold-standard evidence base that neither tirzepatide nor retatrutide yet matches.
              </p>
            </div>

            <div className="card p-6" style={{ borderColor: 'rgba(96,165,250,0.3)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(96,165,250,0.15)', color: '#60a5fa' }}>GEN 2</span>
                <h3 className="text-gray-900 font-bold text-lg">Tirzepatide — Dual GIP + GLP-1 Agonist</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-3">
                Tirzepatide adds GIP (Glucose-Dependent Insulinotropic Polypeptide) receptor agonism to GLP-1
                activation. GIP was historically considered unimportant for weight loss — tirzepatide's
                development overturned this assumption. The dual mechanism appears to produce synergistic
                (not just additive) effects: GIP activation enhances insulin sensitivity and promotes adipose
                lipolysis via mechanisms distinct from GLP-1 signaling.
              </p>
              <p className="text-gray-500 leading-relaxed">
                SURMOUNT-1 Phase 3 data: 20.9% average weight loss at 72 weeks, with 56% of participants
                at 15mg losing 20%+ of body weight — a threshold previously associated only with bariatric
                surgery. Tirzepatide consistently outperforms semaglutide in head-to-head data (SURPASS-CVOT
                trial: tirzepatide showed 1.6× greater weight loss at similar timepoints).
              </p>
            </div>

            <div className="card p-6" style={{ borderColor: 'rgba(167,139,250,0.3)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>GEN 3</span>
                <h3 className="text-gray-900 font-bold text-lg">Retatrutide — Triple GIP + GLP-1 + Glucagon Agonist</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-3">
                Retatrutide adds glucagon receptor agonism to the dual GIP/GLP-1 profile. The glucagon
                component drives direct thermogenic effects — increasing energy expenditure through brown
                adipose tissue activation and hepatic fat oxidation. This thermogenic mechanism is absent from
                both semaglutide and tirzepatide, and it explains why retatrutide achieves weight loss at
                a faster rate than either predecessor.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Phase 2 TRIUMPH-1 data: 24.2% average weight loss at 24 weeks — exceeding both semaglutide
                (14.9% at 68 weeks) and tirzepatide (20.9% at 72 weeks) in a shorter timeframe. Phase 3 trials
                are ongoing. Currently available as a research peptide through quality vendors.
                See the <Link href="/retatrutide" className="text-yellow-600 hover:underline">full Retatrutide guide</Link> for protocol details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Data Comparison Table */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <span className="badge mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.1)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.3)' }}>Clinical Data</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Head-to-Head Clinical Comparison</h2>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid #2a2a3e' }}>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Metric</th>
                  <th className="text-left py-3 px-4 text-emerald-400 font-semibold">Semaglutide</th>
                  <th className="text-left py-3 px-4 text-blue-400 font-semibold">Tirzepatide</th>
                  <th className="text-left py-3 px-4 text-yellow-600 font-semibold">Retatrutide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mechanism', 'GLP-1', 'GIP + GLP-1', 'GIP + GLP-1 + Glucagon'],
                  ['Key trial', 'STEP-1', 'SURMOUNT-1', 'TRIUMPH-1 (Phase 2)'],
                  ['Trial duration', '68 weeks', '72 weeks', '24 weeks'],
                  ['Avg weight loss', '14.9%', '20.9%', '24.2%'],
                  ['Participants losing 20%+', '~33%', '56% (at 15mg)', 'Not yet reported'],
                  ['CV outcome data', 'Yes (SELECT trial)', 'Ongoing (SURPASS-CVOT)', 'Not yet'],
                  ['Starting dose', '0.25mg/wk', '2.5mg/wk', '1mg/wk (trials)'],
                  ['Max dose', '2.4mg/wk', '15mg/wk', '12mg/wk (Phase 2)'],
                  ['Half-life', '~7 days', '~5 days', '~6 days'],
                  ['Dosing frequency', 'Once weekly', 'Once weekly', 'Once weekly'],
                  ['GI side effects', 'Moderate', 'Mild–moderate', 'Mild–moderate'],
                  ['Phase 3 status', 'Approved (FDA)', 'Approved (FDA)', 'Ongoing'],
                ].map(([label, sema, tirze, reta]) => (
                  <tr key={label} style={{ borderBottom: '1px solid #1e1e35' }}>
                    <td className="py-3 px-4 text-gray-500 font-medium">{label}</td>
                    <td className="py-3 px-4 text-gray-700">{sema}</td>
                    <td className="py-3 px-4 text-gray-700">{tirze}</td>
                    <td className="py-3 px-4 text-gray-700">{reta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Weight Loss Visual */}
          <h3 className="text-gray-900 font-bold text-xl mb-4">Average Weight Loss Comparison</h3>
          <div className="space-y-3 mb-10">
            {[
              { name: 'Retatrutide (24 wk)', pct: 24.2, color: '#a78bfa', bg: 'rgba(167,139,250,0.15)' },
              { name: 'Tirzepatide (72 wk)', pct: 20.9, color: '#60a5fa', bg: 'rgba(96,165,250,0.15)' },
              { name: 'Semaglutide (68 wk)', pct: 14.9, color: '#34d399', bg: 'rgba(52,211,153,0.15)' },
              { name: 'Placebo', pct: 2.4, color: '#71717a', bg: 'rgba(113,113,122,0.1)' },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <span className="text-gray-500 text-sm w-44 shrink-0">{item.name}</span>
                <div className="flex-1 rounded-full h-8 overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div
                    className="h-full rounded-full flex items-center px-3"
                    style={{ width: `${(item.pct / 28) * 100}%`, background: item.bg, border: `1px solid ${item.color}` }}
                  >
                    <span className="text-xs font-bold" style={{ color: item.color }}>{item.pct}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Decision Framework */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="badge mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.1)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.3)' }}>Decision Guide</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Which Should You Choose?</h2>

          <div className="space-y-4 mb-10">
            <div className="card p-5" style={{ borderColor: 'rgba(16,185,129,0.3)' }}>
              <p className="text-emerald-400 font-bold mb-2">Choose Semaglutide if:</p>
              <ul className="space-y-1 text-sm text-gray-500">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />Cardiovascular disease history — SELECT trial data provides specific CV benefit evidence</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />Type 2 diabetes — strongest glucose management data in the SUSTAIN trial series</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />Conservative approach — most years of clinical data and post-market safety record</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />Budget considerations — generally lower cost per mg than tirzepatide</li>
              </ul>
            </div>

            <div className="card p-5" style={{ borderColor: 'rgba(96,165,250,0.3)' }}>
              <p className="text-blue-400 font-bold mb-2">Choose Tirzepatide if:</p>
              <ul className="space-y-1 text-sm text-gray-500">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />Maximum weight loss is the primary goal and you want proven Phase 3 data</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />Insulin resistance or metabolic syndrome — GIP co-agonism adds insulin sensitivity benefits</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />You tried semaglutide and want to step up to a more effective agent</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />GI side effects were problematic on semaglutide — tirzepatide is generally better tolerated</li>
              </ul>
            </div>

            <div className="card p-5" style={{ borderColor: 'rgba(167,139,250,0.3)' }}>
              <p className="text-yellow-600 font-bold mb-2">Choose Retatrutide if:</p>
              <ul className="space-y-1 text-sm text-gray-500">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" />Maximum fat loss rate is the goal and you are comfortable with Phase 2 data</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" />You want the thermogenic component that neither GLP-1 nor dual agonists provide</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" />You have significant visceral or hepatic fat — glucagon component specifically targets liver fat</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" />You have already run semaglutide and/or tirzepatide and are looking for the next step</li>
              </ul>
            </div>
          </div>

          {/* Side Effect Warning Box */}
          <div className="rounded-xl p-5 mb-8" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={18} className="text-yellow-600" />
              <p className="text-amber-300 font-semibold">Universal Side Effect Note</p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              All three compounds share the same class-related GI side effects: nausea, vomiting, constipation,
              and diarrhea — primarily during dose escalation. These are dose-dependent and typically
              resolve by weeks 4–8 as the body adapts. The slow escalation protocol is not optional —
              it exists to make the compound tolerable. Never skip escalation steps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/glp1-comparison" className="card p-5 hover:border-emerald-500/40 transition-colors block">
              <p className="text-emerald-400 font-semibold mb-2">GLP-1 Comparison Hub</p>
              <p className="text-gray-500 text-sm">Full GLP-class guide including Cagrilintide (CAGRI-SEMA) and extended protocol guides.</p>
              <div className="flex items-center gap-1 mt-3 text-emerald-400 text-xs font-medium">Read guide <ArrowRight size={12} /></div>
            </Link>
            <Link href="/best-peptide-for-weight-loss" className="card p-5 hover:border-blue-500/40 transition-colors block">
              <p className="text-blue-400 font-semibold mb-2">Best Peptides for Weight Loss 2026</p>
              <p className="text-gray-500 text-sm">Ranked guide covering all weight loss peptides — GLP-class, GH peptides, and metabolic supports.</p>
              <div className="flex items-center gap-1 mt-3 text-blue-400 text-xs font-medium">View ranking <ArrowRight size={12} /></div>
            </Link>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Stacking with GH */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="badge badge-cyan mb-4 inline-block">Advanced Protocol</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Stacking GLP Peptides with GH Support</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            One of the most effective advanced protocols combines a GLP-class peptide for fat loss with
            <Link href="/peptides/ipamorelin-cjc" className="text-yellow-600 hover:underline"> Ipamorelin + CJC-1295</Link> for
            growth hormone support. The rationale: GLP peptides drive significant caloric deficit and fat loss,
            but aggressive caloric restriction triggers muscle catabolism. GH peptides counteract this by
            maintaining anabolic signaling, preserving lean mass, and accelerating the lipolytic effects of GH.
          </p>
          <p className="text-gray-500 leading-relaxed mb-6">
            The combination is used extensively in body recomposition circles and produces substantially
            better body composition outcomes than either compound alone — more fat loss with significantly
            better lean mass preservation. The standard approach is to run the GLP peptide continuously
            at maintenance dose while cycling the GH stack (5 days on / 2 days off, before sleep, fasted).
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            <Link href="/products/bpc-157" className="text-yellow-600 hover:underline">BPC-157</Link> is
            also commonly added to GLP protocols, particularly for users experiencing GI side effects.
            BPC-157's gut-healing and anti-inflammatory properties in the GI tract can significantly
            reduce GLP-induced nausea and improve tolerability during the escalation phase.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/stacks/glp1-fat-loss" className="card p-5 hover:border-emerald-500/40 transition-colors block">
              <p className="text-emerald-400 font-semibold mb-2">GLP-1 Fat Loss Stack</p>
              <p className="text-gray-500 text-sm">Pre-built GLP + GH support protocol with week-by-week guidance.</p>
              <div className="flex items-center gap-1 mt-3 text-emerald-400 text-xs font-medium">View stack <ArrowRight size={12} /></div>
            </Link>
            <Link href="/body-composition" className="card p-5 hover:border-blue-500/40 transition-colors block">
              <p className="text-blue-400 font-semibold mb-2">Body Composition Hub</p>
              <p className="text-gray-500 text-sm">Complete guide to all body recomposition peptides and stacking strategies.</p>
              <div className="flex items-center gap-1 mt-3 text-blue-400 text-xs font-medium">Read guide <ArrowRight size={12} /></div>
            </Link>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Products */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shop GLP-Class Peptides</h2>
        <p className="text-gray-500 text-sm mb-8">HPLC-verified purity, COA available per batch.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[semaProduct, tirzeProduct, retatProduct].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} showAffiliateButton />
          ))}
        </div>
      </section>

      <div className="glow-divider" />

      {/* FAQ */}
      <section className="py-10 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <span className="badge mb-4 inline-block" style={{ background: 'rgba(16,185,129,0.1)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.3)' }}>FAQ</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">GLP Comparison Questions Answered</h2>
        <div className="space-y-4">
          {glpFaqs.map((faq) => (
            <div key={faq.q} className="card p-5">
              <div className="flex items-start gap-3">
                <HelpCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
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
      <RelatedReading pageKey="/comparisons/semaglutide-vs-tirzepatide" />
    </div>
  );
}
