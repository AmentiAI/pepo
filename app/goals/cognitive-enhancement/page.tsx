import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  HelpCircle,
  Shield,
  Zap,
  Brain,
  FlaskConical,
  Activity,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Peptides for Cognitive Enhancement: Semax, Selank & Nootropic Guide',
  description:
    'Semax, Selank, and nootropic peptides for focus, memory, anxiety reduction, and neuroprotection. Mechanisms, dosing protocols, and comparison guide.',
  keywords:
    'peptides for cognitive enhancement, semax peptide, selank anxiety, nootropic peptides, semax vs selank, peptides for focus, peptides for memory, selank dosage',
  alternates: { canonical: 'https://www.peptidesclav.com/goals/cognitive-enhancement' },
  openGraph: {
    title: 'Peptides for Cognitive Enhancement: Semax, Selank & Nootropic Guide',
    description:
      'Semax, Selank, and nootropic peptides for focus, memory, anxiety reduction, and neuroprotection. Mechanisms, dosing protocols, and comparison guide.',
    type: 'website',
    url: 'https://www.peptidesclav.com/goals/cognitive-enhancement',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Peptides for Cognitive Enhancement Guide' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Peptides for Cognitive Enhancement: Semax, Selank & Nootropic Guide',
  description:
    'Semax, Selank, and nootropic peptides for focus, memory, anxiety reduction, and neuroprotection. Mechanisms, dosing protocols, and comparison guide.',
  url: 'https://www.peptidesclav.com/goals/cognitive-enhancement',
  publisher: {
    '@type': 'Organization',
    name: 'PeptidesClav',
    url: 'https://www.peptidesclav.com',
  },
  mainEntity: {
    '@type': 'MedicalWebPage',
    about: [
      {
        '@type': 'Drug',
        name: 'Semax',
        description:
          'Semax is a synthetic peptide analogue of ACTH 4-10 with BDNF upregulation, dopamine and serotonin modulation, and neuroprotective properties.',
      },
      {
        '@type': 'Drug',
        name: 'Selank',
        description:
          'Selank is a synthetic anxiolytic peptide modulating GABA-A receptors and enkephalins, developed as a pharmaceutical in Russia.',
      },
    ],
  },
};

const peptideProfiles = [
  {
    name: 'Semax',
    subtitle: 'ACTH 4-7 Pro8-Gly9-Pro10',
    tagline: 'Focus, memory, and neuroprotection',
    badge: 'Stimulating / Cognitive',
    badgeColor: 'badge-cyan',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    icon: <Brain size={20} className="text-cyan-400" />,
    mechanism:
      'Semax is an analogue of ACTH 4-10, a fragment of adrenocorticotropic hormone. Its primary cognitive mechanism is upregulation of BDNF (Brain-Derived Neurotrophic Factor) — the key neurotrophin governing neuronal growth, survival, and synaptic plasticity. Semax also modulates dopamine and serotonin neurotransmission, increasing dopamine receptor sensitivity in prefrontal pathways critical for working memory and executive function.',
    effects: [
      'Sharpened focus and working memory within 15–30 minutes of administration',
      'Improved executive function — planning, task-switching, sustained attention',
      'Neuroprotection after stroke, TBI, or ischemic events',
      'BDNF-driven synaptic plasticity that builds over 2 weeks of use',
      'Dopamine system modulation improving motivation and drive',
    ],
    administration: 'Intranasal (300–600 mcg per nostril) or subcutaneous injection',
    bestFor: 'Focus, cognitive performance, executive function, post-TBI recovery',
    onset: '15–30 minutes intranasal',
    note: null,
  },
  {
    name: 'Selank',
    subtitle: 'Thr-Lys-Pro-Arg-Pro-Gly-Pro + Gly-Pro',
    tagline: 'Anxiety reduction and clarity under pressure',
    badge: 'Anxiolytic / Calming',
    badgeColor: '',
    accentText: 'text-violet-400',
    accentBg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    icon: <Shield size={20} className="text-violet-400" />,
    mechanism:
      'Selank modulates GABA-A receptor activity to produce anxiolytic effects without the sedation or tolerance of benzodiazepines. It increases enkephalin levels (endogenous opioid-like peptides with mood-stabilizing properties) and acts on serotonin 5-HT1A receptors to reduce anxiety. Unlike GABA receptor agonists, Selank produces anxiolysis through modulatory rather than direct agonist activity — explaining its absence of sedation and withdrawal.',
    effects: [
      'Anxiety and stress reduction without sedation or cognitive impairment',
      'Mild focus improvement through reduced anxiety interference',
      'Mood stabilization and emotional regulation',
      'Reduced cortisol-driven cognitive impairment under stress',
      'Anti-burnout effects with chronic use',
    ],
    administration: 'Intranasal (250–500 mcg per dose)',
    bestFor: 'Anxiety reduction, stress management, cognitive performance under pressure, anti-burnout',
    onset: '20–40 minutes intranasal',
    note: 'Russian pharmaceutical development — approved as an anxiolytic medication in Russia and some Eastern European countries. Extensive clinical data available.',
  },
  {
    name: 'BPC-157 for Brain',
    subtitle: 'Gut-Brain Axis & Neuroinflammation',
    tagline: 'Mood, neuroprotection, and gut-brain restoration',
    badge: 'Neuroprotective / Restorative',
    badgeColor: '',
    accentText: 'text-violet-400',
    accentBg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    icon: <Activity size={20} className="text-violet-400" />,
    mechanism:
      'BPC-157\'s cognitive and mood effects operate through multiple pathways: dopamine system normalization (both D1 and D2 receptor modulation), serotonin pathway modulation, GABA-B receptor interaction, and neuroinflammation reduction via COX-2 and TNF-α suppression. Critically, BPC-157 restores the gut-brain axis by repairing the intestinal mucosal environment that produces ~90% of the body\'s serotonin and governs vagus nerve signaling to the brain.',
    effects: [
      'Mood improvement through dopamine and serotonin system normalization',
      'Reduction of anxiety and depression driven by gut-brain axis dysfunction',
      'Neuroprotection from oxidative and inflammatory damage',
      'Gut-brain axis restoration through mucosal repair and vagus nerve support',
      'Cognitive recovery from chronic stress and burnout',
    ],
    administration: 'Subcutaneous injection or intranasal',
    bestFor: 'Cognitive recovery from stress, mood stabilization, gut-brain axis restoration',
    onset: '2–4 weeks for cognitive/mood effects',
    note: null,
  },
];

const comparisonRows = [
  { aspect: 'Primary Effect', semax: 'Cognitive enhancement, focus', selank: 'Anxiety reduction, clarity' },
  { aspect: 'Stimulation Profile', semax: 'Energizing, activating', selank: 'Calming, non-sedating' },
  { aspect: 'Key Mechanism', semax: 'BDNF upregulation, dopamine', selank: 'GABA-A modulation, enkephalins' },
  { aspect: 'Best Time to Use', semax: 'Morning / before cognitive work', selank: 'As needed for anxiety / stress' },
  { aspect: 'Onset', semax: '15–30 minutes', selank: '20–40 minutes' },
  { aspect: 'Build-up Effect', semax: 'BDNF builds over 2 weeks', selank: 'Accumulates with regular use' },
  { aspect: 'Stimulant-like Feel', semax: 'Yes — mild but noticeable', selank: 'No — clarity without stimulation' },
  { aspect: 'Can Combine', semax: 'Yes — Semax AM + Selank PRN', selank: 'Yes — with Semax for synergy' },
];

const protocols = [
  {
    title: 'Focus & Performance',
    badge: 'Productivity',
    border: 'border-cyan-500/30',
    steps: [
      { label: 'Primary', value: 'Semax 300–600 mcg intranasal AM' },
      { label: 'Cycle', value: '2 weeks on / 2 weeks off' },
      { label: 'Optional Add', value: 'NAD+ for mitochondrial support' },
      { label: 'Best For', value: 'Demanding cognitive work, performance' },
    ],
  },
  {
    title: 'Anxiety Reduction',
    badge: 'Stress & Clarity',
    border: 'border-violet-500/30',
    steps: [
      { label: 'Primary', value: 'Selank 250–500 mcg intranasal' },
      { label: 'Frequency', value: 'As needed or twice daily' },
      { label: 'Cycle', value: '4–6 weeks, then reassess' },
      { label: 'Best For', value: 'Anxiety, stress, anti-burnout' },
    ],
  },
  {
    title: 'Comprehensive Cognitive',
    badge: 'Full Stack',
    border: 'border-violet-400/20',
    steps: [
      { label: 'AM', value: 'Semax 300 mcg intranasal' },
      { label: 'As Needed', value: 'Selank 250 mcg intranasal' },
      { label: 'SubQ', value: 'BPC-157 for gut-brain axis' },
      { label: 'Best For', value: 'Holistic cognitive optimization' },
    ],
  },
];

const safetyData = [
  {
    peptide: 'Semax',
    profile: 'Generally well-tolerated with no significant adverse effects in research',
    sideEffects: [
      'Mild nasal irritation with intranasal administration',
      'Possible mild headache at higher doses',
    ],
    noWithdrawal: true,
    note: 'No addiction potential. No withdrawal. No tolerance buildup at standard doses.',
  },
  {
    peptide: 'Selank',
    profile: 'Favorable safety profile — no significant side effects in extensive Russian clinical trials',
    sideEffects: [
      'No significant adverse effects reported at therapeutic doses',
      'No sedation, tolerance, or withdrawal',
    ],
    noWithdrawal: true,
    note: 'Approved pharmaceutical in Russia with documented safety data from clinical use.',
  },
];

const faqs = [
  {
    q: 'Are cognitive peptides like Semax legal?',
    a: 'Semax and Selank are not FDA-approved drugs in the United States but are legal to purchase as research compounds. They are not controlled substances and are not scheduled by the DEA. They are approved pharmaceuticals in Russia and some Eastern European countries, where they have been used clinically for decades. Purchasing and possessing them in the US is legal; prescribing them as pharmaceuticals is not. Always verify current regulations in your jurisdiction before purchasing.',
  },
  {
    q: 'Can I use Semax with other nootropics?',
    a: 'Semax stacks well with several compounds. Racetams (aniracetam, piracetam) create synergy through complementary mechanisms — Semax upregulates BDNF while racetams enhance acetylcholine receptor sensitivity. NAD+ provides mitochondrial support for the increased neuronal activity Semax drives. BPC-157 restores the gut-brain axis, complementing Semax\'s direct brain effects. Avoid combining Semax with strong stimulants (amphetamines, high-dose caffeine) as the additive activation may cause anxiety or overstimulation.',
  },
  {
    q: 'How is Semax administered?',
    a: 'Semax is primarily administered intranasally. The nasal mucosa is highly vascularized and allows rapid direct absorption into the bloodstream and, via the olfactory pathway, into brain tissue. Standard administration is 1–2 drops (100–300 mcg per drop depending on concentration) per nostril. Subcutaneous injection is an alternative administration route with similar efficacy. Oral administration is not effective for Semax — it is degraded in the GI tract.',
  },
  {
    q: 'Does Selank cause drowsiness?',
    a: 'No — this is a key distinction from benzodiazepines and other GABA-targeting drugs. Benzodiazepines produce sedation by directly agonizing GABA-A receptors, causing widespread neuronal inhibition. Selank modulates GABAergic tone rather than directly activating the receptor — it shifts the receptor\'s response threshold without the broad CNS depression. The result is anxiety relief and mood stabilization with preserved alertness, cognitive function, and reaction time. No tolerance develops, and there is no withdrawal syndrome on discontinuation.',
  },
];

export default function CognitiveEnhancementPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="badge hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-zinc-600" />
            <Link href="/goals" className="badge hover:text-white transition-colors">Goals</Link>
            <ChevronRight size={14} className="text-zinc-600" />
            <span className="badge badge-cyan">Cognitive Enhancement</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">Cognitive Enhancement</span>
              <span className="text-white"> Peptides</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              Semax, Selank, and BPC-157 represent a new class of cognitive compounds — neuropeptides
              that enhance BDNF, modulate neurotransmitter systems, and reduce neuroinflammation through
              receptors the brain already has. More targeted than synthetic nootropics. Better tolerated
              than pharmaceuticals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products/nad-plus" className="btn-primary">
                NAD+ for Cognitive Support
                <ArrowRight size={16} />
              </Link>
              <Link href="/guide" className="btn-secondary">
                Peptide Guide
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <FlaskConical size={18} className="text-violet-400" />, value: '3 Core Peptides', label: 'Semax, Selank, BPC-157' },
              { icon: <Brain size={18} className="text-cyan-400" />, value: 'BDNF', label: 'Key neurotrophin target' },
              { icon: <Zap size={18} className="text-violet-400" />, value: 'Nasal + Subcut', label: 'Administration routes' },
              { icon: <Clock size={18} className="text-cyan-400" />, value: 'Rapid onset', label: 'Effects within 15–30 min' },
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

      {/* Why Peptides for Cognition */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Why Peptides</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Why Peptides for Cognitive Enhancement
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          Most nootropics work by forcing neurotransmitter changes. Neuropeptides work by activating
          the brain's own growth and optimization pathways.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-start mb-10">
          <div className="card p-6 border border-violet-500/30" style={{ background: 'var(--bg-card)' }}>
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
              <Brain size={20} className="text-violet-400" />
            </div>
            <h3 className="font-bold text-white text-lg mb-3">BDNF: The Central Target</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Brain-Derived Neurotrophic Factor (BDNF) is the primary target of cognitive peptides.
              BDNF governs neuronal survival, synaptic plasticity, long-term potentiation (the biological
              basis of memory formation), and the growth of new neurons in the hippocampus.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Most synthetic nootropics — racetams, modafinil — work downstream of BDNF by modulating
              neurotransmitter levels. Cognitive peptides like Semax work upstream by directly upregulating
              BDNF expression, which then improves the entire system rather than a single pathway.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Receptor-Mediated — Not Forced',
                desc: 'Neuropeptides act through receptors the brain already has for this class of signaling molecules. They enhance natural processes rather than overriding them, which explains the favorable side effect profiles.',
                accent: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
              },
              {
                title: 'Neuroprotective — Not Just Stimulating',
                desc: 'Unlike stimulants that extract cognitive capacity, peptides like Semax provide neuroprotection alongside enhancement. BDNF upregulation supports long-term brain health while improving short-term performance.',
                accent: 'text-violet-400',
                bg: 'bg-violet-500/10',
              },
              {
                title: 'Multiple Mechanisms Simultaneously',
                desc: 'A single peptide can modulate BDNF, dopamine, serotonin, and neuroinflammation simultaneously — producing comprehensive cognitive benefits that single-target compounds cannot match.',
                accent: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
              },
              {
                title: 'No Tolerance or Withdrawal',
                desc: 'Cognitive peptides do not produce receptor desensitization or neuroadaptation in the way stimulants or benzodiazepines do. Benefits can persist after a cycle ends due to lasting BDNF and receptor changes.',
                accent: 'text-violet-400',
                bg: 'bg-violet-500/10',
              },
            ].map((item) => (
              <div key={item.title} className="card p-4 flex gap-4" style={{ background: 'var(--bg-card)' }}>
                <div className={`w-7 h-7 rounded-md ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <CheckCircle2 size={14} className={item.accent} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peptide Profiles */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Peptide Profiles</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            The Three Cognitive Peptides
          </h2>
          <p className="text-zinc-400 mb-10 max-w-2xl">
            Semax, Selank, and BPC-157 each target different cognitive bottlenecks — and work synergistically
            when combined.
          </p>

          <div className="space-y-8">
            {peptideProfiles.map((peptide) => (
              <div
                key={peptide.name}
                className={`card p-6 sm:p-8 border ${peptide.border}`}
                style={{ background: 'var(--bg)' }}
              >
                <div className="flex items-start gap-4 mb-6 flex-wrap">
                  <div className={`w-12 h-12 rounded-xl ${peptide.accentBg} flex items-center justify-center shrink-0`}>
                    {peptide.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-xl font-bold text-white">{peptide.name}</h3>
                      <span className={`badge ${peptide.badgeColor}`}>{peptide.badge}</span>
                    </div>
                    <p className="text-xs text-zinc-600 font-mono mb-1">{peptide.subtitle}</p>
                    <p className={`text-sm font-semibold ${peptide.accentText}`}>{peptide.tagline}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Mechanism</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-5">{peptide.mechanism}</p>

                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Effects</h4>
                    <ul className="space-y-2">
                      {peptide.effects.map((effect) => (
                        <li key={effect} className="flex items-start gap-2 text-sm text-zinc-400">
                          <CheckCircle2 size={13} className={`${peptide.accentText} mt-0.5 shrink-0`} />
                          {effect}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="card p-4" style={{ background: 'var(--bg-card)' }}>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm gap-2">
                          <span className="text-zinc-500 shrink-0">Administration</span>
                          <span className="text-white font-medium text-right">{peptide.administration}</span>
                        </div>
                        <div className="flex justify-between text-sm gap-2">
                          <span className="text-zinc-500 shrink-0">Best For</span>
                          <span className="text-white font-medium text-right">{peptide.bestFor}</span>
                        </div>
                        <div className="flex justify-between text-sm gap-2">
                          <span className="text-zinc-500 shrink-0">Onset</span>
                          <span className={`${peptide.accentText} font-semibold text-right`}>{peptide.onset}</span>
                        </div>
                      </div>
                    </div>
                    {peptide.note && (
                      <div className={`rounded-md ${peptide.accentBg} border ${peptide.border} p-3`}>
                        <p className={`text-xs ${peptide.accentText} leading-relaxed`}>{peptide.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Semax vs Selank Comparison */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Comparison</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Semax vs Selank: Which to Choose
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          Semax and Selank are complementary, not competing. They target different aspects of cognitive
          performance and can be combined for comprehensive coverage.
        </p>

        <div className="card overflow-hidden" style={{ background: 'var(--bg-card)' }}>
          {/* Header */}
          <div className="grid grid-cols-3 border-b" style={{ borderColor: 'var(--border)' }}>
            <div className="p-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Aspect</div>
            <div className="p-4 border-l border-cyan-500/30">
              <div className="flex items-center gap-2">
                <Brain size={14} className="text-cyan-400" />
                <span className="text-sm font-bold text-cyan-400">Semax</span>
              </div>
            </div>
            <div className="p-4 border-l" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-violet-400" />
                <span className="text-sm font-bold text-violet-400">Selank</span>
              </div>
            </div>
          </div>

          {comparisonRows.map((row, i) => (
            <div
              key={row.aspect}
              className="grid grid-cols-3 border-b last:border-b-0"
              style={{ borderColor: 'var(--border)', backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}
            >
              <div className="p-4 text-xs text-zinc-500">{row.aspect}</div>
              <div className="p-4 border-l border-cyan-500/20">
                <p className="text-sm text-white">{row.semax}</p>
              </div>
              <div className="p-4 border-l" style={{ borderColor: 'var(--border)' }}>
                <p className="text-sm text-white">{row.selank}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="card p-5 border border-cyan-500/30" style={{ background: 'var(--bg-card)' }}>
            <h4 className="font-bold text-cyan-400 mb-2">Choose Semax when:</h4>
            <ul className="space-y-1">
              {[
                'You need to perform demanding cognitive work',
                'You want focus and working memory enhancement',
                'You are recovering from TBI, stroke, or cognitive decline',
                'Motivation and drive are the bottleneck',
              ].map((point) => (
                <li key={point} className="text-xs text-zinc-400 flex items-start gap-2">
                  <ArrowRight size={11} className="text-cyan-400 mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5 border border-violet-500/30" style={{ background: 'var(--bg-card)' }}>
            <h4 className="font-bold text-violet-400 mb-2">Choose Selank when:</h4>
            <ul className="space-y-1">
              {[
                'Anxiety or stress is impairing cognitive performance',
                'You need clarity without stimulation',
                'You are experiencing burnout or chronic stress',
                'Social anxiety is limiting performance',
              ].map((point) => (
                <li key={point} className="text-xs text-zinc-400 flex items-start gap-2">
                  <ArrowRight size={11} className="text-violet-400 mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Protocols</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Cognitive Peptide Protocols
          </h2>
          <p className="text-zinc-400 mb-10 max-w-2xl">
            Protocol selection depends on your primary bottleneck — focus, anxiety, or comprehensive
            cognitive optimization.
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {protocols.map((protocol) => (
              <div
                key={protocol.title}
                className={`card p-6 border ${protocol.border}`}
                style={{ background: 'var(--bg)' }}
              >
                <span className="badge mb-3 inline-block">{protocol.badge}</span>
                <h3 className="font-bold text-white text-base mb-5">{protocol.title}</h3>
                <div className="space-y-4">
                  {protocol.steps.map((step) => (
                    <div key={step.label} className="flex justify-between text-sm gap-2">
                      <span className="text-zinc-500 shrink-0">{step.label}</span>
                      <span className="text-white font-medium text-right">{step.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* What to Expect */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Expectations</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          What to Realistically Expect
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          Cognitive peptides produce real, measurable effects — but on different timelines for each compound.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              peptide: 'Semax',
              border: 'border-cyan-500/30',
              accent: 'text-cyan-400',
              immediate: 'Noticeable focus improvement same day — 15–30 min after intranasal dosing. Users typically report sharper attention, faster processing speed, and improved task engagement.',
              buildup: 'BDNF upregulation builds over 1–2 weeks of consistent use. Memory consolidation, executive function, and neuroprotective effects accumulate and persist beyond the dosing cycle.',
              note: 'Effects are more pronounced for users with pre-existing cognitive deficits or high cognitive demand.',
            },
            {
              peptide: 'Selank',
              border: 'border-violet-500/30',
              accent: 'text-violet-400',
              immediate: 'Anxiety reduction within 20–40 minutes. No sedation — the relief is characterized as clarity rather than dampening. Stress response to external triggers measurably reduced.',
              buildup: 'With regular use, basal anxiety levels decrease and stress resilience improves. Anti-burnout effects become apparent after 2–4 weeks of consistent dosing.',
              note: 'Cognitive improvements under pressure (presentations, exams, social situations) are often dramatic because anxiety was the primary bottleneck.',
            },
            {
              peptide: 'BPC-157 for Cognition',
              border: 'border-violet-500/30',
              accent: 'text-violet-400',
              immediate: 'No acute cognitive effect — BPC-157\'s cognitive benefits are structural and develop over time through gut-brain axis restoration and neuroinflammation reduction.',
              buildup: '2–4 weeks before mood and cognitive improvements become noticeable. Most pronounced in users with gut dysfunction, chronic stress, or mood dysregulation.',
              note: 'Often best used as the foundation of a cognitive stack rather than an acute nootropic.',
            },
          ].map((item) => (
            <div
              key={item.peptide}
              className={`card p-5 border ${item.border}`}
              style={{ background: 'var(--bg-card)' }}
            >
              <h3 className={`font-bold ${item.accent} text-base mb-4`}>{item.peptide}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Immediate</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.immediate}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Build-up</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.buildup}</p>
                </div>
                <div className={`rounded-md ${item.accent.replace('text-', 'bg-').replace('400', '500/10')} p-3`}>
                  <p className={`text-xs ${item.accent} leading-relaxed`}>{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Safety</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Safety and Side Effects
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl">
            Cognitive peptides have favorable safety profiles — but understanding what is and is not known
            is important for informed use.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {safetyData.map((item) => (
              <div
                key={item.peptide}
                className="card p-6 border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <h3 className="font-bold text-white text-base mb-2">{item.peptide}</h3>
                <p className="text-sm text-zinc-400 mb-4">{item.profile}</p>
                <ul className="space-y-2 mb-4">
                  {item.sideEffects.map((se) => (
                    <li key={se} className="flex items-start gap-2 text-sm text-zinc-400">
                      <CheckCircle2 size={13} className="text-violet-400 mt-0.5 shrink-0" />
                      {se}
                    </li>
                  ))}
                </ul>
                <div className="rounded-md bg-violet-500/10 border border-violet-500/20 p-3">
                  <p className="text-xs text-violet-300 leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-5 border border-zinc-600/30" style={{ background: 'var(--bg)' }}>
            <div className="flex items-start gap-3">
              <Shield size={16} className="text-zinc-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-zinc-400 text-sm mb-2">Important Disclaimer</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Semax and Selank are not FDA-approved compounds. They are research peptides with
                  significant safety data from Russian clinical use and preclinical research, but formal
                  long-term human safety trials under FDA standards are not available. Use at your own
                  discretion. This information is educational and not medical advice. Consult a qualified
                  physician before beginning any peptide protocol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* FAQ */}
      <section className="py-10 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle size={20} className="text-violet-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card p-6 border"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
            >
              <h3 className="font-bold text-white mb-3">{faq.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Start Your Cognitive Enhancement Protocol
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              NAD+ provides mitochondrial support that complements every cognitive peptide protocol.
              Explore the complete guide for a full overview of peptide applications.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products/nad-plus" className="btn-primary">
              NAD+ Product Page
              <ArrowRight size={16} />
            </Link>
            <Link href="/guide" className="btn-secondary">
              Complete Peptide Guide
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/goals" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
              ← Back to All Goals
            </Link>
          </div>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/goals/cognitive-enhancement" />
    </div>
  );
}
