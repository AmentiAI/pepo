import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, Flame, Activity, HelpCircle, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Body Composition Peptides | GH, Fat Loss & Muscle Protocols',
  description:
    'GH peptides, fat loss fragments & muscle protocols for body recomposition. Ipamorelin, Tesamorelin, AOD-9604 & Semaglutide dosing guides with stacking protocols.',
  keywords:
    'body composition peptides, fat loss peptides, muscle peptides, GH peptides, Tesamorelin, AOD-9604, Ipamorelin, IGF-1, Semaglutide',
  alternates: { canonical: 'https://www.peptidesclav.com/body-composition' },
  openGraph: {
    title: 'Body Composition Peptides | GH, Fat Loss & Muscle Protocols',
    description:
      'GH optimization, fat loss, and muscle peptide protocols for complete body recomposition.',
    type: 'website',
    url: 'https://www.peptidesclav.com/body-composition',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Body Composition Peptides — GH, Fat Loss & Muscle' }],
  },
};

const bodyFaqs = [
  {
    q: 'What is the best peptide for losing belly fat specifically?',
    a: 'For visceral (abdominal) fat specifically, Tesamorelin has the strongest clinical evidence — it demonstrated 15–20% reduction in visceral adipose tissue in FDA-approved trials for HIV-associated lipodystrophy, and the mechanism applies equally to metabolic syndrome patients. Semaglutide and Tirzepatide also show preferential visceral fat reduction due to their metabolic mechanism. For subcutaneous fat, AOD-9604 (a fragment of HGH) targets adipocyte lipolysis directly. A combination of GH peptides + GLP-1s covers both compartments simultaneously.',
  },
  {
    q: 'How do I stack GH peptides with GLP-1s for maximum results?',
    a: 'The GLP-1 Accelerated Fat Loss stack is the gold standard for this combination. GLP-1s (Semaglutide or Tirzepatide) suppress appetite and drive caloric deficit. GH peptides (Ipamorelin/CJC-1295) preserve and build lean muscle during the caloric deficit — counteracting the muscle wasting that occurs with GLP-1-only protocols. Run CJC-1295/Ipamorelin before sleep nightly while using your weekly GLP-1 injection. BPC-157 is added to the stack to protect against gut side effects from GLP-1s.',
  },
  {
    q: 'Can women use body composition peptides safely?',
    a: 'Yes — the Venus Protocol stack is specifically designed for women. Ipamorelin/CJC-1295 at standard doses is safe and equally effective in women as in men. GLP-1 peptides show comparable weight loss data in female-majority trials. GHK-Cu adds skin quality benefits particularly relevant for women during fat loss phases. The key consideration for women is that GH peptides may interact with hormonal contraceptives in ways that are not yet fully characterized — consult with a healthcare provider before beginning a protocol.',
  },
  {
    q: 'How do GH peptides help with fat loss?',
    a: 'GH has a direct lipolytic effect on adipocytes — it breaks down stored fat, particularly visceral fat. GH secretagogues like Ipamorelin/CJC-1295 and Tesamorelin stimulate the pituitary to release your own GH in a pulsatile, natural pattern. This elevates IGF-1, accelerates fat oxidation, and preserves lean muscle mass simultaneously.',
  },
  {
    q: 'What is the difference between AOD-9604 and Tesamorelin for fat loss?',
    a: "AOD-9604 is a fragment of HGH (amino acids 176–191) that specifically targets fat cell receptors for lipolysis without affecting IGF-1 or insulin. It's best for subcutaneous fat. Tesamorelin is an FDA-approved GHRH analog proven to reduce visceral (abdominal) fat by 15–20% in Phase III trials. They target different fat compartments and work synergistically together.",
  },
  {
    q: 'Should I inject GH peptides fasted?',
    a: 'Yes — always inject GH peptides in a fasted state, at least 2 hours after your last meal. Insulin blunts GH release, so eating beforehand significantly reduces the efficacy of your injection. Pre-sleep timing (with an early dinner) is ideal for maximizing the natural GH pulse that already occurs during deep sleep.',
  },
  {
    q: 'Can I use body composition peptides without exercising?',
    a: "You'll see some results without training, but peptides are dramatically more effective when combined with a structured resistance training program. GH and IGF-1 signal is amplified in muscle tissue that has been stressed by training. For fat loss specifically, intermittent fasting (16:8 minimum) combined with these peptides produces results that far exceed either approach alone.",
  },
  {
    q: 'How long until I see visible body composition changes?',
    a: 'Most users notice improved sleep quality and slightly faster recovery within the first 1–2 weeks. Visible body composition changes (reduced waist measurement, improved muscle definition) typically appear by weeks 6–10. Meaningful DEXA scan improvements in fat mass and lean mass are seen at weeks 12–16. The full body recomposition effect develops over 16–24 weeks of consistent use.',
  },
];

export default function BodyCompositionPage() {
  const bodyCompTags = ['Fat Loss', 'Muscle', 'Body Composition', 'GH', 'GH Peptide', 'Anabolic', 'Weight Loss', 'GLP-1', 'GIP', 'Semaglutide', 'Tirzepatide'];
  const bodyProducts = products.filter((p) =>
    p.tags.some((t) => bodyCompTags.includes(t)) ||
    p.category === 'Body Composition' ||
    p.category === 'Growth Hormone'
  );

  // Deduplicate and limit to most relevant
  const seen = new Set<string>();
  const uniqueProducts = bodyProducts.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });

  const ghStack = getStackById('gh-optimization');
  const fatLossStack = getStackById('glp1-fat-loss');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Category</span>
              <ChevronRight size={14} className="text-zinc-600" />
              <span className="badge badge-cyan">Body Composition</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Body </span>
              <span className="gradient-text">Composition</span>
              <span className="text-white"> Peptides</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              GH secretagogues, targeted fat loss fragments, and anabolic peptides — individually
              powerful, devastating in combination. These protocols are designed for simultaneous
              fat loss and muscle preservation, not one at the expense of the other.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/gh-optimization" className="btn-primary">
                GH Optimization Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/stacks/glp1-fat-loss" className="btn-secondary">
                Fat Loss Stack
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <TrendingUp size={18} className="text-violet-400" />, value: '3–5×', label: 'GH pulse increase vs. baseline' },
              { icon: <Flame size={18} className="text-cyan-400" />, value: '15–20%', label: 'Visceral fat reduction (Tesamorelin)' },
              { icon: <Activity size={18} className="text-violet-400" />, value: '8–12 wks', label: 'Visible body recomposition timeline' },
              { icon: <CheckCircle2 size={18} className="text-cyan-400" />, value: 'FDA', label: 'Approved compounds available' },
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

      {/* Products */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Body Composition Peptides
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Covering every angle of body recomposition — from GH axis optimization and visceral
            fat targeting to direct anabolic muscle signaling.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>

      {/* How GH peptides work for body comp */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How GH Peptides Transform Body Composition
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Growth hormone is the master regulator of body composition. GH peptides restore the
              youthful GH pulses that drive simultaneous fat loss and muscle maintenance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Flame size={22} className="text-violet-400" />,
                title: 'Lipolysis Activation',
                body: 'GH directly activates lipolysis in adipocytes — it literally breaks down fat cells, especially visceral fat which is particularly GH-sensitive. This is why GH-deficient individuals consistently accumulate abdominal fat that diet and exercise cannot adequately address.',
                points: ['Visceral fat reduced 15–20% with Tesamorelin', 'Subcutaneous fat targeted by AOD-9604', 'Enhanced fat oxidation throughout the day'],
              },
              {
                icon: <TrendingUp size={22} className="text-cyan-400" />,
                title: 'IGF-1 Elevation',
                body: 'GH stimulates the liver to produce IGF-1 — the primary anabolic growth factor. IGF-1 drives muscle protein synthesis, satellite cell activation, and nitrogen retention. Elevated IGF-1 is why GH optimization produces simultaneous fat loss and lean mass gains.',
                points: ['Increases IGF-1 within 2–4 weeks of GH peptide use', 'Drives muscle protein synthesis independently of exercise', 'Satellite cell activation for long-term muscle fiber changes'],
              },
              {
                icon: <Activity size={22} className="text-violet-400" />,
                title: 'Sleep & Recovery',
                body: 'The largest natural GH pulse occurs during deep sleep. GH peptides enhance deep sleep architecture, producing more GH per night and dramatically improving recovery. Better recovery means more productive training, which compounds body composition improvements.',
                points: ['Deeper sleep within 1–2 weeks', 'Reduced DOMS and faster recovery', 'More productive training — compounds results'],
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="w-11 h-11 rounded-xl bg-violet-600/10 border border-violet-600/20 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">{item.body}</p>
                <ul className="space-y-2">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-500">
                      <CheckCircle2 size={12} className="text-violet-400 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured stacks */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Featured Body Composition Stacks</h2>
          <p className="text-zinc-400">
            Two purpose-built protocols covering different primary goals — one optimized for
            GH restoration and recomposition, one targeting maximal fat loss.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[ghStack, fatLossStack].map((stack) =>
            stack ? (
              <div key={stack.id} className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge">{stack.difficulty}</span>
                  <span className="badge badge-cyan">{stack.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{stack.name}</h3>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{stack.shortDescription}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {stack.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500">{stack.cost}/month</span>
                  <Link href={`/stacks/${stack.id}`} className="btn-primary py-2 px-4 text-sm">
                    View Protocol
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      {/* ── GH DECLINE DEEP DIVE ────────────────────────── */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Root Cause</p>
            <h2 className="text-3xl font-bold text-white mb-5">The GH Decline Problem</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              After age 30, growth hormone declines at approximately 14–15% per decade. By age 60, most adults have GH levels
              that are 60–70% lower than their peak. This progressive GH deficiency is not merely a cosmetic concern — it is
              a central driver of the body composition changes that people associate with "normal aging": accumulating visceral fat,
              losing lean muscle mass, declining bone density, and deteriorating skin quality.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The conventional medical response — synthetic growth hormone injections — is expensive, suppresses the body's own
              GH axis through negative feedback, and carries risks of insulin resistance and acromegaly with chronic use.
              GH secretagogues (peptides that stimulate the pituitary to produce more of its own GH) solve these problems by
              working with, not against, the body's endocrine architecture.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Unlike exogenous HGH, CJC-1295 and Ipamorelin amplify natural pulsatile GH secretion without suppressing the
              hypothalamic-pituitary-GH axis. The body continues regulating its own GH production — the peptides simply
              amplify the magnitude of natural pulses. This means no post-cycle therapy is required, no axis suppression,
              and no risk of downregulation with responsible cycling.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">GH Decline by Decade</h3>
            {[
              { age: 'Age 20s', level: '100%', desc: 'Peak GH levels. Body composition is naturally maintained with minimal effort.', pct: 100 },
              { age: 'Age 30s', level: '~85%', desc: 'First signs of body composition change. Muscle maintenance requires more effort.', pct: 85 },
              { age: 'Age 40s', level: '~70%', desc: 'Significant decline. Visceral fat begins accumulating despite unchanged diet.', pct: 70 },
              { age: 'Age 50s', level: '~55%', desc: 'Pronounced GH deficiency. Body recomposition requires intervention.', pct: 55 },
              { age: 'Age 60+', level: '~35%', desc: 'Severely reduced GH pulse amplitude. Metabolic syndrome risk increases substantially.', pct: 35 },
            ].map((row) => (
              <div key={row.age} className="card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold text-sm">{row.age}</span>
                  <span className="gradient-text font-black">{row.level}</span>
                </div>
                <div className="h-1.5 rounded-full mb-2" style={{ background: 'var(--border)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${row.pct}%`, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
                  />
                </div>
                <p className="text-xs text-zinc-500">{row.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PEPTIDES VS TRADITIONAL APPROACHES ─────────── */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">Comparison</p>
            <h2 className="text-3xl font-bold text-white mb-4">Peptides vs. Traditional Body Composition Approaches</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Understanding how peptides compare to other interventions helps set realistic expectations and protocol design.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                  <th className="text-left py-3 pr-6 text-zinc-500 font-medium">Approach</th>
                  <th className="text-left py-3 pr-6 text-zinc-500 font-medium">Fat Loss</th>
                  <th className="text-left py-3 pr-6 text-zinc-500 font-medium">Lean Mass</th>
                  <th className="text-left py-3 pr-6 text-zinc-500 font-medium">Side Effects</th>
                  <th className="text-left py-3 text-zinc-500 font-medium">Axis Suppression</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'var(--border)' }}>
                {[
                  { name: 'GH Peptides (Ipamorelin/CJC)', fat: 'Moderate–High', lean: 'Moderate', effects: 'Minimal', axis: 'None' },
                  { name: 'Exogenous HGH', fat: 'High', lean: 'High', effects: 'Insulin resistance, edema', axis: 'Yes — significant' },
                  { name: 'Anabolic Steroids', fat: 'Low', lean: 'Very High', effects: 'Cardiovascular, hormonal', axis: 'Severe' },
                  { name: 'GLP-1 Peptides (Sema/Tirze)', fat: 'Very High', lean: 'Negative (muscle loss)', effects: 'GI nausea, vomiting', axis: 'None' },
                  { name: 'Diet + Training (Baseline)', fat: 'Moderate', lean: 'Moderate', effects: 'None', axis: 'None' },
                  { name: 'GH Peptides + GLP-1s', fat: 'Very High', lean: 'Preserved/Gained', effects: 'Minimal', axis: 'None' },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="py-3 pr-6 text-zinc-200 font-medium">{row.name}</td>
                    <td className="py-3 pr-6 text-zinc-400">{row.fat}</td>
                    <td className="py-3 pr-6 text-zinc-400">{row.lean}</td>
                    <td className="py-3 pr-6 text-zinc-400">{row.effects}</td>
                    <td className="py-3 text-zinc-400">{row.axis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-600 mt-4">*Based on available clinical and preclinical data. Individual results vary.</p>
        </div>
      </section>

      {/* ── LIFESTYLE OPTIMIZATION ──────────────────────── */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Maximize Results</p>
          <h2 className="text-3xl font-bold text-white mb-4">How to Stack Your Protocol for Maximum Results</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Peptides amplify the results of good lifestyle habits. These strategies significantly compound peptide efficacy.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: 'Fasted Injections',
              desc: 'Inject GH peptides 2+ hours after your last meal. Elevated insulin blunts GH release by up to 70%. Late-evening injection before sleep in a fasted state maximizes the GH pulse amplitude and synchronizes with natural overnight GH secretion.',
              color: 'from-violet-700 to-violet-500',
            },
            {
              title: 'Resistance Training',
              desc: 'Weight training creates the muscle-specific stimulus that IGF-1 acts on. Studies show resistance training and GH peptides produce synergistic effects on lean mass — far exceeding either intervention alone. Train 3–5× weekly while using GH peptides for optimal body recomposition.',
              color: 'from-cyan-700 to-cyan-500',
            },
            {
              title: 'Protein Intake',
              desc: 'GH peptides drive muscle protein synthesis. Without adequate amino acid supply (1.6–2.2g/kg bodyweight daily), the anabolic signal has no substrate to work with. Prioritize leucine-rich proteins (whey, red meat, eggs) to maximize the peptide-driven anabolic window.',
              color: 'from-violet-700 to-violet-500',
            },
            {
              title: 'Sleep Quality',
              desc: 'The largest natural GH pulse occurs during slow-wave (deep) sleep. GH peptides already improve sleep architecture, but optimizing sleep hygiene (cool room, consistent bedtime, no screens before bed, magnesium) dramatically amplifies this effect. Target 8+ hours of quality sleep while on protocol.',
              color: 'from-cyan-700 to-cyan-500',
            },
          ].map((tip) => (
            <div key={tip.title} className="card p-5">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tip.color} flex items-center justify-center mb-4`}>
                <TrendingUp size={16} className="text-white" />
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{tip.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle size={22} className="text-violet-400" />
            <h2 className="text-2xl font-bold text-white">Body Composition FAQ</h2>
          </div>
          <div className="space-y-4">
            {bodyFaqs.map((faq, i) => (
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
      <section className="py-10 sm:py-20 text-center max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white mb-4">
          Start Your Body Recomposition Protocol
        </h2>
        <p className="text-zinc-400 mb-8">
          Whether your primary goal is fat loss, muscle gain, or true body recomposition —
          there's a peptide stack designed for your objective.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/stacks" className="btn-primary">
            Browse All Stacks
            <ArrowRight size={16} />
          </Link>
          <Link href="/products" className="btn-secondary">
            All Products
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/body-composition" />
    </div>
  );
}
