import type { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingUp,
  Moon,
  Dumbbell,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Zap,
  Clock,
  Activity,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: { absolute: 'Ipamorelin + CJC-1295: Complete GH Peptide Stack Guide 2026' },
  description:
    'Ipamorelin and CJC-1295 combined — the gold-standard GH secretagogue stack. Mechanism, dosing, sleep optimization, body recomposition results, and how it compares to MK-677.',
  keywords:
    'ipamorelin cjc-1295, ipamorelin dosage, cjc-1295 ipamorelin stack, ipamorelin cjc protocol, growth hormone peptide, ipamorelin before sleep, cjc-1295 benefits, ipamorelin vs mk-677',
  alternates: { canonical: 'https://www.peptidesclav.com/peptides/ipamorelin-cjc' },
  openGraph: {
    title: 'Ipamorelin + CJC-1295: Complete GH Peptide Stack Guide 2026',
    description:
      'The gold-standard injectable GH stack — Ipamorelin triggers GH pulses, CJC-1295 amplifies and extends them. 3–5× baseline GH elevation. Full protocol guide.',
    type: 'website',
    url: 'https://www.peptidesclav.com/peptides/ipamorelin-cjc',
    siteName: 'PeptidesClav',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ipamorelin CJC-1295 GH Peptide Stack Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ipamorelin + CJC-1295: Complete GH Peptide Stack Guide 2026',
    description: 'The gold-standard injectable GH stack — 3–5× baseline GH elevation. Protocol, timing, and body recomposition results.',
  },
};

const ipaFaqs = [
  {
    q: 'Why combine Ipamorelin AND CJC-1295 — can I just use one?',
    a: 'You can use either alone, but the combination is significantly more effective. Ipamorelin is a GHRP (Growth Hormone Releasing Peptide) — it triggers the pituitary to release GH in a pulse. CJC-1295 is a GHRH analog — it amplifies the amplitude and extends the duration of that pulse. Ipamorelin alone produces a pulse of modest amplitude. CJC-1295 alone produces modest GH release without the pulse trigger. Combined, they create a synergistic GH release that is 3–5× greater than either alone — mirroring the natural pulsatile pattern of a healthy 25-year-old pituitary.',
  },
  {
    q: 'When is the best time to inject Ipamorelin + CJC-1295?',
    a: 'The most effective timing is immediately before sleep, in a fasted state (2+ hours after last meal, 30 minutes before eating). The largest natural GH pulse occurs during the first 1–2 hours of deep sleep. Injecting before sleep synchronizes the peptide-induced GH pulse with this natural window, producing an additive effect rather than displacing the natural pulse. For body composition goals, a second injection pre-workout (fasted) is commonly added to take advantage of exercise-induced GH amplification.',
  },
  {
    q: 'Why must I inject fasted?',
    a: 'Elevated blood glucose and insulin inhibit GH release. After a carbohydrate-containing meal, circulating insulin remains elevated for 1–2 hours, significantly blunting the GH response to secretagogue peptides. Injecting in a fasted state removes this inhibition, allowing full pituitary GH output. Even a small insulin spike from a light snack can reduce GH response by 30–50%. This is the most commonly made protocol error.',
  },
  {
    q: 'How quickly will I notice results?',
    a: 'Sleep quality improvements are typically the earliest signal — most users report deeper sleep, more vivid dreams, and better morning recovery within the first 1–2 weeks. This is an indirect sign of increased nocturnal GH output. Measurable body composition changes (lean mass + fat loss) become visible at 8–12 weeks with consistent training and diet. IGF-1 blood levels typically rise by 20–40% within 4 weeks of starting the protocol.',
  },
  {
    q: 'How does Ipamorelin/CJC-1295 compare to MK-677?',
    a: 'Both achieve GH elevation, but through different mechanisms with different tradeoff profiles. MK-677 is oral and raises GH continuously (24h elevation) — convenient but may contribute to mild insulin resistance and water retention due to continuous (not pulsatile) GH elevation. Ipamorelin/CJC-1295 produces pulsatile GH release that more closely mirrors natural physiology, with lower insulin resistance risk. The injectable stack generally produces cleaner body recomposition results. See our full comparison in the MK-677 peptide guide.',
  },
  {
    q: 'Is there a risk of suppressing natural GH production?',
    a: 'No — unlike exogenous growth hormone injections, secretagogue peptides work by stimulating your own pituitary to produce GH. They do not suppress the hypothalamic-pituitary-GH axis. Your natural GH production continues — the peptides simply amplify it. This is the fundamental advantage of secretagogues over synthetic GH: they maintain feedback loop integrity and avoid the suppression that comes with direct GH administration.',
  },
];

export default function IpamorelinCJCPage() {
  const ipaCjcProduct = products.find((p) => p.slug === 'ipamorelin-cjc');
  const igf1Product = products.find((p) => p.slug === 'igf-1-lr3');
  const ghStack = getStackById('gh-optimization');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Ipamorelin + CJC-1295: Complete GH Peptide Stack Guide 2026',
    description: 'Complete guide to the Ipamorelin + CJC-1295 GH stack — mechanism, protocol, body recomposition timeline, and comparison with MK-677.',
    url: 'https://www.peptidesclav.com/peptides/ipamorelin-cjc',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ipaFaqs.map((f) => ({
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
          <nav className="flex items-center gap-2 text-sm" style={{ color: '#1f2937' }}>
            <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/body-composition" className="hover:text-yellow-600 transition-colors">Body Composition</Link>
            <span>/</span>
            <span style={{ color: '#1f2937' }}>Ipamorelin / CJC-1295</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Peptides</span>
              <ChevronRight size={14} className="text-gray-800" />
              <span className="badge badge-cyan">Growth Hormone</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">Ipamorelin</span>
              <span className="text-gray-900"> + CJC-1295</span>
            </h1>
            <p className="text-gray-700 text-sm font-medium mb-4">
              CJC-1295 (GHRH analog) + Ipamorelin (selective GHRP) — the gold-standard injectable GH stack
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
              The Ipamorelin + CJC-1295 combination is the most widely used injectable growth hormone protocol.
              CJC-1295 amplifies the pituitary's GH output while Ipamorelin provides the precise pulse trigger —
              producing 3–5× baseline GH elevation that mirrors the natural pulsatile pattern of a healthy
              young adult pituitary.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/gh-optimization" className="btn-primary">
                View GH Stack <ArrowRight size={16} />
              </Link>
              <Link href="/products/ipamorelin-cjc" className="btn-secondary">
                Shop Ipamorelin/CJC
              </Link>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <TrendingUp size={18} className="text-yellow-600" />, value: '3–5×', label: 'Baseline GH elevation' },
              { icon: <Moon size={18} className="text-yellow-600" />, value: '1–2 wks', label: 'Sleep improvement onset' },
              { icon: <Dumbbell size={18} className="text-yellow-600" />, value: '12–24 wks', label: 'Recomp protocol' },
              { icon: <Activity size={18} className="text-yellow-600" />, value: 'Pulsatile', label: 'Mimics natural GH rhythm' },
            ].map((stat) => (
              <div key={stat.label} className="card p-4 flex items-start gap-3">
                <div className="mt-0.5">{stat.icon}</div>
                <div>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-700 mt-0.5">{stat.label}</p>
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
            <span className="badge badge-cyan mb-4 inline-block">Mechanism of Action</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">How the Combination Works</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Growth hormone regulation involves two complementary hypothalamic signals: GHRH (Growth
              Hormone Releasing Hormone), which amplifies GH output, and GHRP (Growth Hormone Releasing
              Peptide), which provides the pulse trigger. Natural GH secretion requires both signals to
              fire simultaneously — which is exactly what the Ipamorelin + CJC-1295 combination replicates.
            </p>

            <div className="space-y-4 mb-6">
              <div className="card p-5 border-l-2 border-cyan-500/40">
                <h3 className="text-yellow-500 font-bold mb-2">CJC-1295 (GHRH Analog)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  CJC-1295 is a synthetic GHRH analog with a DAC (Drug Affinity Complex) modification that
                  extends its half-life from minutes to 6–8 days. It binds GHRH receptors in the pituitary,
                  priming the somatotroph cells for enhanced GH release and amplifying the amplitude of each
                  pulse by 2–4×. Without a GHRP partner, it produces modest tonic GH elevation.
                </p>
              </div>
              <div className="card p-5 border-l-2 border-yellow-500/40">
                <h3 className="text-yellow-500 font-bold mb-2">Ipamorelin (Selective GHRP)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ipamorelin is a pentapeptide GHRP that binds the ghrelin receptor (GHSR-1a) in the
                  pituitary, triggering a discrete GH pulse approximately 20–30 minutes post-injection.
                  Critically, Ipamorelin is highly selective — it does not significantly raise cortisol
                  or prolactin, unlike older GHRPs (GHRP-2, GHRP-6). This clean profile makes it
                  ideal for long-term use without the hormonal disruption of less selective compounds.
                </p>
              </div>
              <div className="card p-5 border-l-2 border-cyan-500/40">
                <h3 className="text-yellow-500 font-bold mb-2">Combined Effect</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  When injected together, CJC-1295 has pre-sensitized the pituitary's GHRH receptors,
                  making each somatotroph cell ready for maximum output. Ipamorelin then fires the
                  trigger signal. The result is a GH pulse 3–5× greater than either compound alone —
                  a supraphysiologic but pulsatile release that maintains the feedback loop integrity
                  that continuous GH administration destroys.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="badge badge-yellow mb-4 inline-block">Evidence-Backed Benefits</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What the Research Documents</h2>
            <div className="space-y-3">
              {[
                {
                  title: 'Body Recomposition',
                  body: 'GH directly stimulates lipolysis (fat breakdown) and promotes lean muscle protein synthesis. 12–24 week protocols consistently produce measurable fat loss and lean mass increase — visible changes by weeks 8–10 with consistent training.',
                  icon: <Dumbbell size={16} className="text-yellow-600" />,
                },
                {
                  title: 'Deep Sleep Architecture Improvement',
                  body: 'Growth hormone is primarily secreted during slow-wave (deep) sleep. Elevating GH improves the quality and depth of deep sleep cycles — creating a positive feedback loop where better sleep → more GH → better sleep.',
                  icon: <Moon size={16} className="text-yellow-600" />,
                },
                {
                  title: 'Injury Recovery Acceleration',
                  body: 'GH and its downstream mediator IGF-1 are primary drivers of tissue repair. Athletes running this stack consistently report 20–30% faster recovery from training and significant improvement in soft tissue injury resolution.',
                  icon: <Activity size={16} className="text-yellow-600" />,
                },
                {
                  title: 'Skin & Connective Tissue Quality',
                  body: 'Elevated GH and IGF-1 stimulate collagen synthesis throughout the body, improving skin elasticity, joint cushioning, and tendon tensile strength. These effects emerge gradually over 8–16 weeks of sustained GH elevation.',
                  icon: <Zap size={16} className="text-yellow-600" />,
                },
                {
                  title: 'Metabolic Rate Improvement',
                  body: 'GH stimulates lipolysis and increases basal metabolic rate through multiple pathways. Users on long protocols (16–24 weeks) report measurable improvements in metabolic flexibility and body fat setpoint reduction.',
                  icon: <TrendingUp size={16} className="text-yellow-600" />,
                },
                {
                  title: 'Cognitive Function & Mood',
                  body: 'GH receptors are expressed in the brain, and GH deficiency is associated with cognitive decline and mood disorders. Restoring youthful GH pulsatility improves mental clarity, motivation, and emotional resilience in many users.',
                  icon: <Activity size={16} className="text-yellow-600" />,
                },
              ].map((item) => (
                <div key={item.title} className="card p-4 flex gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-gray-700 text-xs leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Protocol */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="badge badge-cyan mb-4 inline-block">Dosing Protocol</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">Complete Protocol Guide</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Ipamorelin/CJC-1295 protocol is one of the most refined in peptide research. The timing
              and fasting requirements matter more for this peptide than most — follow them closely to
              achieve the full 3–5× GH pulse the combination is capable of.
            </p>

            <div className="space-y-4 mb-8">
              <div className="rounded-xl p-5" style={{ background: 'rgba(8,145,178,0.08)', border: '1px solid rgba(8,145,178,0.2)' }}>
                <h3 className="text-yellow-500 font-bold mb-3">Standard Protocol (Once Daily)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Dose:</span> 200mcg Ipamorelin + 200mcg CJC-1295</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Timing:</span> 30–60 min before sleep (fasted — 2h+ since last meal)</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Method:</span> Both peptides in same syringe, subcutaneous</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Duration:</span> 12–24 weeks continuous</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Cycling:</span> 5 days on / 2 days off for receptor sensitivity</li>
                </ul>
              </div>

              <div className="rounded-xl p-5" style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)' }}>
                <h3 className="text-yellow-500 font-bold mb-3">Advanced Protocol (Twice Daily)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Injection 1:</span> Pre-workout (fasted) — 200mcg each</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Injection 2:</span> Before sleep (fasted) — 200mcg each</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">For:</span> Advanced body recomposition or injury recovery</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Note:</span> Pre-workout injection amplifies exercise-induced GH surge</li>
                </ul>
              </div>

              <div className="rounded-xl p-5" style={{ background: 'rgba(8,145,178,0.08)', border: '1px solid rgba(8,145,178,0.2)' }}>
                <h3 className="text-yellow-500 font-bold mb-3">Critical Rules</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Always fasted:</span> No food for 2+ hours before injection, no carbs for 30 min after</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">No mixing with food:</span> Even a small snack reduces GH response 30–50%</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Reconstitute properly:</span> Use <Link href="/products/bacteriostatic-water" className="text-yellow-600 hover:underline">bacteriostatic water</Link>, refrigerate after</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <span className="badge badge-yellow mb-4 inline-block">Results Timeline</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What to Expect Week by Week</h2>
            <div className="space-y-3">
              {[
                { weeks: 'Week 1–2', title: 'Sleep & Recovery Improvement', body: 'Most users notice deeper sleep and more vivid dreams within the first week. Morning recovery feels noticeably improved. This is the earliest sign of increasing nocturnal GH output.', color: 'text-yellow-600', border: 'rgba(8,145,178,0.3)' },
                { weeks: 'Week 3–4', title: 'Measurable IGF-1 Increase', body: 'Blood IGF-1 levels typically rise 20–40% above baseline by week 4. Energy levels, workout performance, and inter-session recovery time all improve. Some users notice early skin quality improvements.', color: 'text-yellow-600', border: 'rgba(234,179,8,0.3)' },
                { weeks: 'Week 6–8', title: 'Body Composition Changes', body: 'Visible body recomposition begins — reduced subcutaneous fat in key areas (abdomen, lower back) and improved muscle fullness and definition. Results vary significantly with diet and training quality.', color: 'text-yellow-600', border: 'rgba(8,145,178,0.3)' },
                { weeks: 'Week 10–16', title: 'Peak Recomposition Phase', body: 'The most significant body composition changes accumulate in this window. Collagen and connective tissue improvements become tangible — improved joint comfort, skin firmness, and tendon resilience.', color: 'text-yellow-600', border: 'rgba(234,179,8,0.3)' },
                { weeks: 'Week 20–24', title: 'Full Protocol Maturity', body: 'At full protocol duration, users running with optimized diet and training typically report the best results: significant fat loss, measurable lean mass gain, and lasting improvements in sleep architecture and recovery capacity.', color: 'text-yellow-600', border: 'rgba(8,145,178,0.3)' },
              ].map((item) => (
                <div key={item.weeks} className="card p-4" style={{ borderLeft: `2px solid ${item.border}` }}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-xs font-bold ${item.color} bg-zinc-800 px-2 py-0.5 rounded`}>{item.weeks}</span>
                    <p className="text-gray-900 font-semibold text-sm">{item.title}</p>
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* MK-677 Comparison */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="badge badge-cyan mb-4 inline-block">Comparison</span>
          <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ipamorelin/CJC-1295 vs MK-677</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            The most common question for anyone starting a GH protocol: inject (Ipamorelin/CJC) or take
            a capsule (<Link href="/peptides/mk-677" className="text-yellow-600 hover:underline">MK-677</Link>)?
            Both are legitimate routes to GH elevation, but they have meaningfully different tradeoff profiles.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid #2a2a3e' }}>
                  <th className="text-left py-3 px-4 text-gray-700 font-medium">Property</th>
                  <th className="text-left py-3 px-4 text-yellow-600 font-semibold">Ipamorelin/CJC</th>
                  <th className="text-left py-3 px-4 text-yellow-600 font-semibold">MK-677</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Administration', 'Subcutaneous injection', 'Oral capsule/liquid'],
                  ['GH release pattern', 'Pulsatile — mimics natural rhythm', 'Continuous — 24h sustained elevation'],
                  ['GH elevation', '3–5× baseline per pulse', '1.5–2× sustained elevation'],
                  ['Cortisol elevation', 'None (Ipamorelin is selective)', 'Minimal'],
                  ['Water retention', 'Minimal', 'Common, especially first 4 weeks'],
                  ['Insulin sensitivity', 'Maintained', 'Mild decrease possible'],
                  ['Frequency', 'Once or twice daily injection', 'Once daily oral'],
                  ['Cost per month', 'Higher upfront', 'Lower ongoing cost'],
                  ['Best for', 'Body recomposition, injury recovery', 'Convenience, sleep optimization, first protocol'],
                ].map(([label, ipa, mk]) => (
                  <tr key={label} style={{ borderBottom: '1px solid #1e1e35' }}>
                    <td className="py-3 px-4 text-gray-700 font-medium">{label}</td>
                    <td className="py-3 px-4 text-gray-700">{ipa}</td>
                    <td className="py-3 px-4 text-gray-700">{mk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-5" style={{ borderColor: 'rgba(8,145,178,0.3)' }}>
              <p className="text-yellow-600 font-semibold mb-2">Choose Ipamorelin/CJC if:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" /> You want maximum body recomposition results</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" /> You are comfortable with subcutaneous injections</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" /> You have insulin sensitivity concerns</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" /> You want clean, pulsatile GH release</li>
              </ul>
            </div>
            <div className="card p-5" style={{ borderColor: 'rgba(234,179,8,0.3)' }}>
              <p className="text-yellow-600 font-semibold mb-2">Choose MK-677 if:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" /> You want zero-injection convenience</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" /> Sleep and deep sleep quality is the primary goal</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" /> You prefer a lower-maintenance protocol</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" /> Starting out with GH optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Products */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shop GH Optimization Peptides</h2>
        <p className="text-gray-700 text-sm mb-8">HPLC-verified purity, COA available per batch.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ipaCjcProduct, igf1Product].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} showAffiliateButton />
          ))}
          {ghStack && (
            <Link href="/stacks/gh-optimization" className="card p-6 hover:border-yellow-500/30 transition-colors flex flex-col">
              <div className="badge badge-cyan mb-3 self-start">GH Stack</div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{ghStack.name}</h3>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">{ghStack.shortDescription}</p>
              <div className="flex items-center gap-1 mt-4 text-yellow-600 text-sm font-medium">
                View stack <ArrowRight size={14} />
              </div>
            </Link>
          )}
        </div>
      </section>

      <div className="glow-divider" />

      {/* FAQ */}
      <section className="py-10 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">FAQ</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Ipamorelin / CJC-1295 Questions Answered</h2>
        <div className="space-y-4">
          {ipaFaqs.map((faq) => (
            <div key={faq.q} className="card p-5">
              <div className="flex items-start gap-3">
                <HelpCircle size={18} className="text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/peptides/ipamorelin-cjc" />
    </div>
  );
}
