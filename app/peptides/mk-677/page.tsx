import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Zap,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Moon,
  Dumbbell,
  Flame,
  Sparkles,
  Bone,
  AlertTriangle,
  Scale,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'MK-677 (Ibutamoren): Growth Hormone Secretagogue Guide 2026',
  description:
    'MK-677 (Ibutamoren) stimulates GH release orally — no injections required. Dosing, benefits, side effects, and how it compares to injectable GH peptides.',
  keywords:
    'mk-677, ibutamoren, mk-677 peptide, ibutamoren dosage, mk-677 benefits, mk-677 vs ipamorelin, mk-677 side effects, growth hormone secretagogue',
  alternates: { canonical: 'https://www.peptidesclav.com/peptides/mk-677' },
  openGraph: {
    title: 'MK-677 (Ibutamoren): Growth Hormone Secretagogue Guide 2026',
    description:
      'MK-677 (Ibutamoren) stimulates GH release orally — no injections required. Dosing, benefits, side effects, and how it compares to injectable GH peptides.',
    type: 'website',
    url: 'https://www.peptidesclav.com/peptides/mk-677',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MK-677 Ibutamoren Growth Hormone Secretagogue Guide',
      },
    ],
  },
};

const mk677Faqs = [
  {
    q: 'Is MK-677 a peptide?',
    a: "MK-677 (Ibutamoren) is technically not a peptide — it's a small molecule ghrelin mimetic that binds the growth hormone secretagogue receptor (GHSR). However, it is universally grouped alongside GH-releasing peptides like Ipamorelin and CJC-1295 because it achieves the same downstream goal: stimulating the pituitary to release growth hormone. It simply does so orally rather than via injection.",
  },
  {
    q: 'How long until I notice results from MK-677?',
    a: 'Most users report improved sleep depth and dream vividness within the first 5–7 days. This is often the earliest sign that GH output is increasing during slow-wave sleep. Lean mass and body composition changes require a longer timeline — expect meaningful changes at 8+ weeks with consistent training and diet. IGF-1 levels typically rise measurably within 2–4 weeks.',
  },
  {
    q: 'Can I stack MK-677 with peptides?',
    a: 'Yes — MK-677 + Ipamorelin/CJC-1295 is a well-known stack, but it warrants careful thought. Both compounds raise GH output through the same receptor pathway, so there is diminishing returns at play. Some advanced users use MK-677 during the day (oral, convenient) and Ipamorelin at night to get both pulsatile and sustained GH elevation. However, for most users, one or the other is sufficient.',
  },
  {
    q: 'Does MK-677 cause water retention?',
    a: 'Yes — water retention is common, particularly in the first 2–4 weeks. This occurs because elevated GH and IGF-1 increase sodium and water reabsorption in the kidneys. Reducing dietary sodium, staying well-hydrated, and giving the body time to adapt typically resolves this. For most users it significantly decreases after the first month.',
  },
  {
    q: 'Is MK-677 legal?',
    a: 'MK-677 is not FDA-approved as a pharmaceutical drug and is classified as a research compound in the United States. It is legal to purchase and possess for research purposes. It is banned by WADA and most sports organizations. It is not approved for human therapeutic use, so it cannot be prescribed by a physician. Always verify local regulations before purchasing.',
  },
];

export default function MK677Page() {
  const ghProduct = products.find((p) => p.slug === 'ipamorelin-cjc');
  const ghStack = getStackById('gh-optimization');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'MK-677 (Ibutamoren): Growth Hormone Secretagogue Guide 2026',
    description:
      'MK-677 (Ibutamoren) stimulates GH release orally — no injections required. Dosing, benefits, side effects, and how it compares to injectable GH peptides.',
    url: 'https://www.peptidesclav.com/peptides/mk-677',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Peptides</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="badge badge-cyan">GH Secretagogue</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">MK-677</span>
              <span className="text-gray-900"> (Ibutamoren)</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              MK-677 is a ghrelin receptor agonist that stimulates the pituitary gland to release
              growth hormone — orally, with a 24-hour half-life, and no injections required.
              It&apos;s the only GH secretagogue that works as a daily capsule, making it the
              most accessible entry point into GH optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/gh-optimization" className="btn-primary">
                View GH Stack
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
              {
                icon: <Zap size={18} className="text-yellow-600" />,
                value: '7–10%',
                label: 'IGF-1 increase (typical)',
              },
              {
                icon: <Clock size={18} className="text-yellow-600" />,
                value: '24h',
                label: 'GH elevation duration',
              },
              {
                icon: <ShieldCheck size={18} className="text-yellow-600" />,
                value: 'Oral',
                label: 'No injections required',
              },
              {
                icon: <CheckCircle2 size={18} className="text-yellow-600" />,
                value: '6–12 wks',
                label: 'Typical cycle length',
              },
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

      {/* What is MK-677 */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-cyan mb-4 inline-block">Mechanism of Action</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              What Is MK-677?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              MK-677 (also known as Ibutamoren or Nutrobal) is a non-peptide ghrelin receptor
              agonist. It binds to the growth hormone secretagogue receptor (GHSR-1a) — the same
              receptor activated by the hunger hormone ghrelin — and signals the pituitary gland
              to release growth hormone in large, sustained pulses.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              Unlike synthetic GH injections, MK-677 works through your body&apos;s own feedback
              systems, meaning it stimulates endogenous GH production rather than replacing it.
              This preserves the natural pulsatile rhythm of GH secretion and avoids many of the
              risks associated with exogenous GH.
            </p>
            <p className="text-gray-500 leading-relaxed">
              <strong className="text-gray-800">Important distinction:</strong> MK-677 is
              technically a small molecule, not a peptide. However, it is grouped alongside
              peptides like Ipamorelin and CJC-1295 because it accomplishes the same physiological
              goal — GH elevation — and is used interchangeably in GH optimization protocols.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Ghrelin Receptor Agonism',
                desc: 'Binds GHSR-1a in the hypothalamus and pituitary, mimicking ghrelin to trigger GH release without the peptide injection requirement.',
                color: 'violet',
              },
              {
                title: 'Sustained GH Elevation',
                desc: 'With a half-life of 24 hours, MK-677 produces continuous GH elevation rather than the sharp, short pulses of injectable peptides.',
                color: 'cyan',
              },
              {
                title: 'IGF-1 Amplification',
                desc: 'Elevated GH drives the liver to produce more IGF-1, the primary anabolic and regenerative downstream effector responsible for most of the body composition benefits.',
                color: 'violet',
              },
              {
                title: 'No Pituitary Suppression',
                desc: 'Because it stimulates rather than replaces GH, the pituitary retains its function. Natural GH secretion typically remains intact post-cycle.',
                color: 'cyan',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                    item.color === 'violet' ? 'bg-violet-400' : 'bg-cyan-400'
                  }`}
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge mb-4 inline-block">Head-to-Head</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              MK-677 vs Injectable GH Peptides
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Choosing between MK-677 and injectable peptides like Ipamorelin/CJC-1295 depends
              on your goals, lifestyle, and experience level.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium w-1/3">Factor</th>
                  <th className="text-left py-3 px-4 text-yellow-600 font-semibold">
                    MK-677 (Ibutamoren)
                  </th>
                  <th className="text-left py-3 px-4 text-yellow-600 font-semibold">
                    Ipamorelin / CJC-1295
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'var(--border)' }}>
                {[
                  {
                    factor: 'Administration',
                    mk: 'Oral capsule / liquid',
                    inj: 'Subcutaneous injection',
                  },
                  {
                    factor: 'Duration of Action',
                    mk: '24 hours',
                    inj: '2–4 hours',
                  },
                  {
                    factor: 'GH Release Pattern',
                    mk: 'Continuous elevation',
                    inj: 'Pulsatile (more natural)',
                  },
                  {
                    factor: 'Hunger Stimulation',
                    mk: 'Significant (ghrelin agonist)',
                    inj: 'Minimal',
                  },
                  {
                    factor: 'Ease of Use',
                    mk: 'Very easy — no needles',
                    inj: 'Requires injection technique',
                  },
                  {
                    factor: 'Sleep Quality',
                    mk: 'Strong improvement',
                    inj: 'Good improvement',
                  },
                  {
                    factor: 'Body Composition',
                    mk: 'Moderate (appetite may hinder)',
                    inj: 'Strong (especially Ipamorelin)',
                  },
                  {
                    factor: 'Best For',
                    mk: 'Sleep, recovery, beginners',
                    inj: 'Body composition, advanced users',
                  },
                ].map((row) => (
                  <tr key={row.factor} className="hover:bg-white/2 transition-colors">
                    <td className="py-3 px-4 text-gray-500 font-medium">{row.factor}</td>
                    <td className="py-3 px-4 text-gray-700">{row.mk}</td>
                    <td className="py-3 px-4 text-gray-700">{row.inj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="badge badge-cyan mb-4 inline-block">Evidence-Backed Benefits</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What MK-677 Does for Your Body</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            By elevating GH and IGF-1, MK-677 triggers a cascade of regenerative and anabolic
            effects across multiple body systems.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <Moon size={20} className="text-yellow-600" />,
              iconBg: 'bg-gray-900/15 border-violet-600/25',
              title: 'Deep Sleep & Recovery',
              desc: 'GH is predominantly released during slow-wave sleep. MK-677 amplifies this nocturnal surge, increasing time in deep sleep stages. Users consistently report more vivid dreams, faster recovery between training sessions, and waking feeling significantly more rested.',
            },
            {
              icon: <Dumbbell size={20} className="text-yellow-600" />,
              iconBg: 'bg-cyan-500/15 border-cyan-500/25',
              title: 'Lean Muscle Support',
              desc: 'Elevated IGF-1 drives nitrogen retention and muscle protein synthesis. Clinical studies show meaningful increases in lean mass over 8–12 week cycles, particularly when combined with resistance training. Gains are generally lean rather than fluid-driven.',
            },
            {
              icon: <Flame size={20} className="text-yellow-600" />,
              iconBg: 'bg-gray-900/15 border-violet-600/25',
              title: 'Modest Fat Loss',
              desc: 'Elevated GH increases lipolysis (fat breakdown) and shifts the body toward using fat as a fuel source. However, the significant increase in appetite from ghrelin receptor activation can offset this benefit if caloric intake is not managed carefully.',
            },
            {
              icon: <Sparkles size={20} className="text-yellow-600" />,
              iconBg: 'bg-cyan-500/15 border-cyan-500/25',
              title: 'Skin & Hair Quality',
              desc: 'GH and IGF-1 stimulate collagen synthesis, improve skin elasticity, and support hair follicle activity. Many users notice improvements in skin texture and thickness within 6–8 weeks, which is among the earliest visible benefits.',
            },
            {
              icon: <Bone size={20} className="text-yellow-600" />,
              iconBg: 'bg-gray-900/15 border-violet-600/25',
              title: 'Bone Density',
              desc: 'IGF-1 promotes osteoblast activity and bone mineralization. Research in elderly populations shows MK-677 can increase bone mineral density over 12+ months, making it particularly relevant for those concerned with age-related bone loss.',
            },
            {
              icon: <Zap size={20} className="text-yellow-600" />,
              iconBg: 'bg-cyan-500/15 border-cyan-500/25',
              title: 'Injury Repair',
              desc: 'GH and IGF-1 accelerate collagen turnover in tendons and ligaments. Users recovering from soft-tissue injuries often stack MK-677 with BPC-157 for a comprehensive repair protocol that addresses both structural healing and GH-driven regeneration.',
            },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-4 ${item.iconBg}`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dosing Protocol */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="badge mb-4 inline-block">Dosing Protocol</span>
              <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
                How to Use MK-677
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                MK-677 is one of the simplest GH compounds to use — one oral dose per day, no
                needles, no reconstitution. The key variables are dose, timing, and cycle length.
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: 'Starting Dose',
                    value: '10 mg/day',
                    note: 'Assess tolerance — sleep effects and appetite changes occur within days',
                    color: 'violet',
                  },
                  {
                    label: 'Standard Dose',
                    value: '20–25 mg/day',
                    note: 'Most users find the optimal range for body composition and recovery',
                    color: 'cyan',
                  },
                  {
                    label: 'Timing',
                    value: 'Before bed',
                    note: 'Maximizes the nocturnal GH pulse and minimizes daytime hunger spikes',
                    color: 'violet',
                  },
                  {
                    label: 'Cycle Length',
                    value: '12 weeks on / 4 weeks off',
                    note: 'Prevents receptor desensitization; some users run longer with monitoring',
                    color: 'cyan',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl border"
                    style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                  >
                    <div
                      className={`px-3 py-1 rounded-lg text-xs font-semibold shrink-0 ${
                        item.color === 'violet'
                          ? 'bg-gray-900/20 text-yellow-500'
                          : 'bg-cyan-500/20 text-cyan-300'
                      }`}
                    >
                      {item.label}
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">{item.value}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                className="rounded-xl border p-6 mb-5"
                style={{ background: 'var(--bg)', borderColor: 'var(--border-bright)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={16} className="text-yellow-600" />
                  <p className="text-sm font-semibold text-yellow-600">Hunger Warning</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  MK-677 activates ghrelin receptors — the same receptors that drive hunger. Expect
                  a significant increase in appetite, particularly in the first 2–4 weeks. This is
                  expected and normal. To manage: dose at bedtime so hunger peaks overnight, eat
                  high-protein meals, and plan your caloric strategy in advance.
                </p>
              </div>
              <div
                className="rounded-xl border p-6"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <h3 className="font-semibold text-gray-900 mb-4">What to Monitor</h3>
                <ul className="space-y-3">
                  {[
                    'Fasting blood glucose — MK-677 can transiently raise insulin resistance',
                    'IGF-1 blood levels — aim for upper quartile of normal range',
                    'Water retention — especially in weeks 1–4',
                    'Sleep quality — this is often your best feedback signal',
                    'Body weight trend (lean vs fluid gains)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
                      <CheckCircle2 size={14} className="text-yellow-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side Effects */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="badge mb-4 inline-block">Side Effects & Risks</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Known Side Effects of MK-677
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            MK-677 has a well-characterized side effect profile. Most are manageable and
            dose-dependent — lower doses significantly reduce their frequency and severity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Water Retention',
              severity: 'Common',
              severityColor: 'amber',
              desc: 'Occurs in most users, especially weeks 1–4. Caused by GH-driven sodium retention. Reduce salt intake; typically self-resolves as the body adapts.',
            },
            {
              title: 'Increased Appetite',
              severity: 'Very Common',
              severityColor: 'red',
              desc: 'Direct consequence of ghrelin receptor activation. Nearly universal. Dose at bedtime to minimize daytime hunger. Caloric discipline is essential.',
            },
            {
              title: 'Lethargy / Drowsiness',
              severity: 'Moderate',
              severityColor: 'amber',
              desc: 'More common at doses above 25mg/day. Taking the dose at night minimizes daytime lethargy. Usually improves after the first 2 weeks.',
            },
            {
              title: 'Insulin Resistance',
              severity: 'Dose-Dependent',
              severityColor: 'red',
              desc: 'GH elevation transiently reduces insulin sensitivity. Not recommended for diabetics or pre-diabetics. Monitor fasting glucose. Lower doses (10mg) minimize this risk.',
            },
          ].map((item) => (
            <div key={item.title} className="card p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    item.severityColor === 'red'
                      ? 'bg-red-500/15 text-red-400'
                      : 'bg-amber-500/15 text-yellow-600'
                  }`}
                >
                  {item.severity}
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Should Use MK-677 vs Injectables */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Scale size={28} className="text-yellow-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              MK-677 vs Injectables: Which Is Right for You?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Both paths raise GH. Your lifestyle, goals, and risk tolerance determine which fits better.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Choose MK-677 if you…',
                color: 'violet',
                points: [
                  "Are new to GH optimization and want a lower barrier to entry",
                  'Prefer oral dosing over subcutaneous injections',
                  'Prioritize sleep quality and recovery as primary goals',
                  'Want a simple once-daily protocol without refrigeration',
                  'Are running a longer-term protocol (GH elevation for months)',
                ],
              },
              {
                title: 'Choose injectable peptides if you…',
                color: 'cyan',
                points: [
                  'Want pulsatile, more physiologically natural GH release',
                  'Are focused primarily on body composition and lean mass',
                  'Need to manage insulin sensitivity carefully',
                  'Want to minimize hunger/appetite side effects',
                  'Have experience with subcutaneous injection protocols',
                ],
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <h3
                  className={`font-bold mb-5 ${
                    item.color === 'violet' ? 'text-yellow-500' : 'text-cyan-300'
                  }`}
                >
                  {item.title}
                </h3>
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
        </div>
      </section>

      {/* Product / Stack CTA */}
      {(ghProduct || ghStack) && (
        <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="badge">Related Products</span>
            <span className="badge badge-cyan">Top Picks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Injectable GH Peptides & Stacks
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {ghProduct && <ProductCard product={ghProduct} showAffiliateButton />}
          </div>
          {ghStack && (
            <div
              className="rounded-2xl border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Featured Stack</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ghStack.name}</h3>
                <p className="text-sm text-gray-500 max-w-lg">{ghStack.shortDescription}</p>
              </div>
              <Link href="/stacks/gh-optimization" className="btn-primary shrink-0">
                View Full Protocol
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </section>
      )}

      {/* FAQ */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle size={22} className="text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">MK-677 FAQ</h2>
          </div>
          <div className="space-y-4">
            {mk677Faqs.map((faq, i) => (
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

      {/* Final CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your GH Optimization Protocol?
        </h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Whether you choose MK-677 or injectable peptides, the GH Optimization Stack gives you
          the full protocol — dosing schedules, timing guidance, and the right compounds for
          your goals.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/stacks/gh-optimization" className="btn-primary">
            View GH Stack
            <ArrowRight size={16} />
          </Link>
          <Link href="/products/ipamorelin-cjc" className="btn-secondary">
            Shop Ipamorelin/CJC
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/peptides/mk-677" />
    </div>
  );
}
