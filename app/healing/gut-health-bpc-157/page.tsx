import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  HelpCircle,
  Shield,
  Syringe,
  Zap,
  FlaskConical,
  Droplets,
  Brain,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'BPC-157 for Gut Health: SIBO, Leaky Gut & IBD Protocol',
  description:
    'BPC-157 repairs gut lining, treats leaky gut, SIBO, and IBD — orally or by injection. Mechanism, dosing protocols, oral vs injectable comparison, and FAQs.',
  keywords:
    'bpc-157 gut health, bpc-157 leaky gut, bpc-157 SIBO, bpc-157 IBD, oral bpc-157 vs injectable, bpc-157 intestinal healing, bpc-157 IBS protocol',
  alternates: { canonical: 'https://www.peptidesclav.com/healing/gut-health-bpc-157' },
  openGraph: {
    title: 'BPC-157 for Gut Health: SIBO, Leaky Gut & IBD Protocol',
    description:
      'BPC-157 repairs gut lining, treats leaky gut, SIBO, and IBD — orally or by injection. Mechanism, dosing protocols, oral vs injectable comparison, and FAQs.',
    type: 'website',
    url: 'https://www.peptidesclav.com/healing/gut-health-bpc-157',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BPC-157 for Gut Health Protocol' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'BPC-157 for Gut Health: SIBO, Leaky Gut & IBD Protocol',
  description:
    'BPC-157 repairs gut lining, treats leaky gut, SIBO, and IBD — orally or by injection. Mechanism, dosing protocols, oral vs injectable comparison, and FAQs.',
  url: 'https://www.peptidesclav.com/healing/gut-health-bpc-157',
  publisher: {
    '@type': 'Organization',
    name: 'PeptidesClav',
    url: 'https://www.peptidesclav.com',
  },
  mainEntity: {
    '@type': 'MedicalWebPage',
    about: {
      '@type': 'Drug',
      name: 'BPC-157',
      description:
        'Body Protection Compound-157, a pentadecapeptide fragment derived from a protein found in human gastric juice, used for gut healing and intestinal repair.',
    },
  },
};

const conditions = [
  {
    name: 'Leaky Gut (Intestinal Permeability)',
    icon: <Shield size={18} className="text-violet-400" />,
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    accent: 'text-violet-400',
    mechanism: 'Tight junction repair',
    detail:
      'BPC-157 repairs tight junctions between enterocytes — the cells lining your intestinal wall. It directly upregulates occludin and ZO-1 proteins, the structural proteins responsible for sealing the intestinal barrier. In leaky gut, these junctions degrade, allowing undigested proteins and bacterial fragments to enter the bloodstream. BPC-157 reverses this at the molecular level.',
  },
  {
    name: 'SIBO (Small Intestinal Bacterial Overgrowth)',
    icon: <FlaskConical size={18} className="text-cyan-400" />,
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    accent: 'text-cyan-400',
    mechanism: 'Motility restoration',
    detail:
      'SIBO is driven by impaired gut motility — bacteria colonize the small intestine when the migrating motor complex (MMC) fails to sweep them into the colon. BPC-157 restores gut motility by modulating enteric nervous system signaling, which normalizes the MMC cycle. By restoring motility and reducing mucosal inflammation, it rebuilds the environment that prevents bacterial overgrowth.',
  },
  {
    name: 'IBS (Irritable Bowel Syndrome)',
    icon: <Zap size={18} className="text-violet-400" />,
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    accent: 'text-violet-400',
    mechanism: 'Mucosal inflammation + motility',
    detail:
      'BPC-157 addresses all IBS subtypes — IBS-C, IBS-D, and IBS-M — through dual action: reducing mucosal inflammation that drives pain and discomfort, and normalizing gut motility that governs whether stool moves too fast or too slowly. Unlike antispasmodics or laxatives, BPC-157 works upstream at the tissue level, not just the symptom level.',
  },
  {
    name: 'IBD / Crohn\'s / Ulcerative Colitis',
    icon: <CheckCircle2 size={18} className="text-cyan-400" />,
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    accent: 'text-cyan-400',
    mechanism: 'Mucosal healing + TNF-α suppression',
    detail:
      'In IBD, the intestinal mucosa develops ulcerations and chronic inflammation driven by TNF-α and other inflammatory cytokines. BPC-157 heals mucosal ulcerations by stimulating fibroblast activity and angiogenesis in the intestinal wall, while simultaneously suppressing TNF-α-driven inflammation. This combination addresses both the structural damage and the inflammatory driver.',
  },
  {
    name: 'GERD (Acid Reflux)',
    icon: <Droplets size={18} className="text-violet-400" />,
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    accent: 'text-violet-400',
    mechanism: 'Lower esophageal sphincter + mucosa',
    detail:
      'BPC-157 strengthens the lower esophageal sphincter (LES) — the valve that prevents stomach acid from refluxing into the esophagus. It also repairs acid-damaged esophageal mucosa directly. This dual action makes it uniquely suited to GERD: most treatments only suppress acid, while BPC-157 also repairs the structural failure that allows reflux to occur.',
  },
  {
    name: 'Gut-Brain Axis Dysregulation',
    icon: <Brain size={18} className="text-cyan-400" />,
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    accent: 'text-cyan-400',
    mechanism: 'Vagus nerve signaling',
    detail:
      'The gut-brain axis connects intestinal health to mood, cognition, and mental clarity via the vagus nerve. Gut dysbiosis and mucosal inflammation disrupt vagus nerve signaling, contributing to anxiety, brain fog, and depression. BPC-157 restores gut mucosal integrity and enteric nervous system function, which secondarily restores vagus nerve tone and improves gut-brain communication.',
  },
];

const timeline = [
  {
    period: 'Days 1–7',
    title: 'Early Inflammation Relief',
    description:
      'Most users report reduced bloating and initial relief from gut pain and discomfort within the first week. BPC-157 begins modulating the acute inflammatory response in the intestinal wall almost immediately upon administration, with oral dosing delivering therapeutic concentrations directly to the mucosal surface.',
    color: 'text-zinc-400',
    border: 'border-zinc-600/30',
  },
  {
    period: 'Weeks 2–4',
    title: 'Measurable Symptom Improvement',
    description:
      'IBS and GERD symptoms show measurable improvement. Acid reflux frequency and severity typically decrease as LES tone improves and esophageal mucosa heals. Bowel regularity begins normalizing as gut motility restoration takes effect. Food sensitivities may start to diminish as tight junction integrity improves.',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
  },
  {
    period: 'Weeks 4–8',
    title: 'Mucosal Healing & Motility Normalization',
    description:
      'The structural phase of healing. Mucosal ulcerations heal, tight junction protein expression (occludin, ZO-1) reaches therapeutic levels, and gut motility normalizes. In IBD and Crohn\'s, this is when inflammation markers typically show the most significant reduction. SIBO patients often see the greatest improvement during this window as the gut environment normalizes.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
  },
  {
    period: 'Weeks 8+',
    title: 'Gut-Brain Axis Restoration',
    description:
      'With a structurally healed gut, the gut-brain axis benefits become apparent — improved mood, reduced anxiety, better cognitive clarity. Vagus nerve signaling normalizes as the enteric nervous system environment improves. For SIBO and leaky gut patients, this phase often brings the resolution of systemic symptoms that seemed unrelated to gut health.',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
  },
];

const faqs = [
  {
    q: 'Which is better for gut health, oral or injectable BPC-157?',
    a: 'Oral is preferred for gut-specific conditions — it delivers BPC-157 directly to the intestinal wall in therapeutic concentration as it travels through the stomach and small intestine. The peptide makes direct contact with the tissue it needs to heal. Injectable BPC-157 provides systemic absorption, which is better for systemic gut inflammation or conditions where the peptide cannot reach by oral route. Many practitioners use both simultaneously for maximum gut coverage — oral for direct mucosal contact and subcutaneous for systemic effects.',
  },
  {
    q: 'Can BPC-157 heal Crohn\'s disease?',
    a: 'Research shows BPC-157 addresses many core mechanisms of Crohn\'s disease — mucosal healing, TNF-α-driven inflammation reduction, intestinal permeability restoration, and motility normalization. It is not a cure and should not replace established Crohn\'s therapies, but it can significantly reduce symptom burden and potentially reduce the severity of flares alongside standard care. The oral administration route is particularly relevant for Crohn\'s as it delivers the peptide directly to affected intestinal tissue.',
  },
  {
    q: 'How do I take BPC-157 orally?',
    a: 'Dissolve 250–500mcg of BPC-157 powder in a small amount of room temperature water (2–4 oz). Do not use hot water, as heat degrades the peptide. Take on an empty stomach at least 30 minutes before eating — this maximizes the time the peptide spends in direct contact with your intestinal wall without food competing for mucosal surface access. Many practitioners recommend taking it first thing in the morning and again mid-afternoon, both on an empty stomach.',
  },
  {
    q: 'Does BPC-157 affect the gut microbiome?',
    a: 'BPC-157 affects the microbiome indirectly but significantly. By restoring mucosal integrity and tight junction function, it creates an intestinal environment with the proper pH, immune activity, and physical barrier that favors beneficial bacterial colonization. By restoring gut motility, it reduces the conditions that allow bacterial overgrowth (SIBO) to take hold. The result is a shift toward a more balanced microbiome — not through antibiotic action, but by fixing the environmental conditions that allowed dysbiosis to occur.',
  },
  {
    q: 'Is BPC-157 safe for long-term gut use?',
    a: 'BPC-157 is derived from a protein naturally present in human gastric juice — it is literally a fragment of a compound the body already produces to protect the GI tract. This gives it an exceptional safety profile for gastrointestinal applications. No significant toxicity has been observed at therapeutic doses in research spanning over 30 years of gastric studies. Standard cycling (8 weeks on, 4 weeks off) is recommended as a precautionary measure, though the safety basis for long-term use appears favorable compared to most pharmaceutical alternatives for gut conditions.',
  },
];

export default function GutHealthBPC157Page() {
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
            <Link href="/healing" className="badge hover:text-white transition-colors">Healing</Link>
            <ChevronRight size={14} className="text-zinc-600" />
            <span className="badge badge-cyan">Gut Health</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">BPC-157</span>
              <span className="text-white"> for Gut Health</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              BPC-157 is the only peptide derived from a protein naturally found in human gastric juice —
              evolved specifically to protect the GI tract. It heals leaky gut, SIBO, IBD, and GERD
              through direct mucosal repair and enteric nervous system restoration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products/bpc-157" className="btn-primary">
                BPC-157 Product Page
                <ArrowRight size={16} />
              </Link>
              <Link href="/stacks/ultimate-healing" className="btn-secondary">
                Ultimate Healing Stack
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Clock size={18} className="text-violet-400" />, value: '24–48h', label: 'Ulcer healing onset' },
              { icon: <Droplets size={18} className="text-cyan-400" />, value: 'Oral + Injectable', label: 'Dual administration routes' },
              { icon: <Syringe size={18} className="text-violet-400" />, value: '250mcg', label: 'Standard therapeutic dose' },
              { icon: <Shield size={18} className="text-cyan-400" />, value: '30+ yrs', label: 'Gastric research history' },
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

      {/* Why BPC-157 for Gut */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Origin</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Why BPC-157 Is Uniquely Suited to Gut Healing
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          Unlike peptides repurposed from other physiological contexts, BPC-157 evolved for exactly this purpose.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card p-6 border" style={{ borderColor: 'var(--border-bright)', background: 'var(--bg-card)' }}>
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
              <FlaskConical size={20} className="text-violet-400" />
            </div>
            <h3 className="font-bold text-white text-lg mb-3">The Body Protection Compound</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              BPC-157 (Body Protection Compound-157) is a pentadecapeptide — a 15 amino acid chain — isolated
              as a fragment from a larger protein found in human gastric juice. The parent protein exists in the
              stomach specifically to protect the GI tract from acid damage and ulceration.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              This is why BPC-157 has the most extensive gut healing research of any peptide: it is being
              studied for exactly what it evolved to do. Over 30 years of gastric research have demonstrated
              its ability to heal ulcers, restore intestinal integrity, and modulate the enteric nervous system.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Direct Mucosal Action',
                desc: 'Upregulates growth hormone receptors on intestinal cells, stimulating local tissue repair without requiring systemic growth hormone elevation.',
                accent: 'text-violet-400',
                bg: 'bg-violet-500/10',
              },
              {
                title: 'Enteric Nervous System Modulation',
                desc: 'Directly modulates the enteric nervous system — the "second brain" governing gut motility, secretion, and inflammation — independent of the central nervous system.',
                accent: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
              },
              {
                title: 'Angiogenesis in the Gut Wall',
                desc: 'Stimulates formation of new blood vessels in the intestinal wall — critical for healing ulcerations and restoring nutrient delivery to damaged tissue.',
                accent: 'text-violet-400',
                bg: 'bg-violet-500/10',
              },
              {
                title: 'Stability Under Oral Administration',
                desc: 'Unusually stable in the GI environment — resists degradation by stomach acid and digestive enzymes, allowing oral administration to deliver therapeutic concentrations directly to gut tissue.',
                accent: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
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

      {/* Conditions */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Conditions</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Gut Conditions BPC-157 Addresses
          </h2>
          <p className="text-zinc-400 mb-10 max-w-2xl">
            BPC-157 targets multiple gut conditions through distinct mechanisms, not a single general
            anti-inflammatory effect.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {conditions.map((cond) => (
              <div
                key={cond.name}
                className={`card p-5 border ${cond.border}`}
                style={{ background: 'var(--bg)' }}
              >
                <div className={`w-9 h-9 rounded-lg ${cond.bg} flex items-center justify-center mb-3`}>
                  {cond.icon}
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{cond.name}</h3>
                <span className={`text-xs font-semibold ${cond.accent} mb-3 inline-block`}>
                  {cond.mechanism}
                </span>
                <p className="text-xs text-zinc-500 leading-relaxed">{cond.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Oral vs Injectable */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Administration</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Oral vs Injectable — The Key Distinction
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          For gut conditions, this is the most important decision in BPC-157 protocol design.
          Route of administration determines where in the body the peptide achieves its highest concentration.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {/* Oral */}
          <div className="card p-6 border border-violet-500/30" style={{ background: 'var(--bg-card)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Droplets size={18} className="text-violet-400" />
              <h3 className="font-bold text-white">Oral Administration</h3>
            </div>
            <div className="space-y-3 mb-5">
              <div>
                <p className="text-xs text-zinc-500 mb-1">Route</p>
                <p className="text-sm text-white font-medium">Dissolved in water, taken on empty stomach</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-1">Concentration Zone</p>
                <p className="text-sm text-white font-medium">Stomach + entire small intestine</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-1">Best For</p>
                <p className="text-sm text-white font-medium">Leaky gut, SIBO, IBS, GERD, IBD</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-1">Mechanism Advantage</p>
                <p className="text-sm text-white font-medium">Direct mucosal contact during transit</p>
              </div>
            </div>
            <div className="rounded-md bg-violet-500/10 border border-violet-500/20 p-3">
              <p className="text-xs text-violet-300 leading-relaxed">
                BPC-157 stays concentrated in the GI tract as it travels through the stomach and intestines,
                making direct contact with the tissue it needs to heal.
              </p>
            </div>
          </div>

          {/* Injectable */}
          <div className="card p-6 border border-cyan-500/30" style={{ background: 'var(--bg-card)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Syringe size={18} className="text-cyan-400" />
              <h3 className="font-bold text-white">Subcutaneous Injection</h3>
            </div>
            <div className="space-y-3 mb-5">
              <div>
                <p className="text-xs text-zinc-500 mb-1">Route</p>
                <p className="text-sm text-white font-medium">Injected near abdomen subcutaneously</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-1">Concentration Zone</p>
                <p className="text-sm text-white font-medium">Systemic bloodstream distribution</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-1">Best For</p>
                <p className="text-sm text-white font-medium">Systemic gut inflammation, IBD flares</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-1">Mechanism Advantage</p>
                <p className="text-sm text-white font-medium">Reaches tissue via bloodstream</p>
              </div>
            </div>
            <div className="rounded-md bg-cyan-500/10 border border-cyan-500/20 p-3">
              <p className="text-xs text-cyan-300 leading-relaxed">
                Better for conditions beyond the direct oral contact reach, and for systemic inflammatory
                states that originate beyond the intestinal lumen.
              </p>
            </div>
          </div>

          {/* Combination */}
          <div className="card p-6 border border-violet-400/20" style={{ background: 'var(--bg-card)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={18} className="text-violet-400" />
              <h3 className="font-bold text-white">Combination Protocol</h3>
            </div>
            <div className="space-y-3 mb-5">
              <div>
                <p className="text-xs text-zinc-500 mb-1">Route</p>
                <p className="text-sm text-white font-medium">Oral AM + Subcutaneous PM</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-1">Concentration Zone</p>
                <p className="text-sm text-white font-medium">Local mucosal + systemic</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-1">Best For</p>
                <p className="text-sm text-white font-medium">Severe IBD, Crohn's, chronic leaky gut</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-1">Mechanism Advantage</p>
                <p className="text-sm text-white font-medium">Maximum gut coverage</p>
              </div>
            </div>
            <div className="rounded-md bg-violet-500/10 border border-violet-500/20 p-3">
              <p className="text-xs text-violet-300 leading-relaxed">
                Many practitioners use both simultaneously — oral for direct GI tract contact, subcutaneous for
                systemic effects — achieving maximum gut coverage from both directions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dosing Protocols */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Protocols</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Dosing Protocols for Gut Conditions
          </h2>
          <p className="text-zinc-400 mb-10 max-w-2xl">
            Gut-specific dosing optimizes BPC-157 delivery to intestinal tissue and accounts for the unique
            pharmacokinetics of oral versus injectable administration.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="card p-6 border border-violet-500/30" style={{ background: 'var(--bg)' }}>
              <span className="badge mb-3 inline-block">Oral Protocol</span>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Dose</span>
                  <span className="text-white font-semibold">250–500 mcg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Frequency</span>
                  <span className="text-white font-semibold">Twice daily</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Timing</span>
                  <span className="text-white font-semibold">30 min before meals</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Medium</span>
                  <span className="text-white font-semibold">2–4 oz room temp water</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Cycle</span>
                  <span className="text-white font-semibold">8 weeks on, 4 weeks off</span>
                </div>
              </div>
            </div>

            <div className="card p-6 border border-cyan-500/30" style={{ background: 'var(--bg)' }}>
              <span className="badge badge-cyan mb-3 inline-block">Subcutaneous Protocol</span>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Dose</span>
                  <span className="text-white font-semibold">250–500 mcg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Frequency</span>
                  <span className="text-white font-semibold">Twice daily</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Injection Site</span>
                  <span className="text-white font-semibold">Abdomen (close to gut)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Needle</span>
                  <span className="text-white font-semibold">29–31 gauge insulin syringe</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Cycle</span>
                  <span className="text-white font-semibold">8 weeks on, 4 weeks off</span>
                </div>
              </div>
            </div>

            <div className="card p-6 border" style={{ borderColor: 'var(--border-bright)', background: 'var(--bg)' }}>
              <span className="badge mb-3 inline-block">Combination Protocol</span>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Morning</span>
                  <span className="text-white font-semibold">250–500 mcg oral</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Evening</span>
                  <span className="text-white font-semibold">250–500 mcg subQ</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Total daily</span>
                  <span className="text-white font-semibold">500 mcg – 1 mg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Best for</span>
                  <span className="text-white font-semibold">IBD, Crohn's, severe leaky gut</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Cycle</span>
                  <span className="text-white font-semibold">8 weeks on, 4 weeks off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Timeline */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Expected Results</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Timeline of Expected Results
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          Gut healing with BPC-157 follows a predictable progression from acute inflammation relief
          to deep structural repair and gut-brain axis restoration.
        </p>
        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ backgroundColor: 'var(--border)' }}
          />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 z-10"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <span className="text-xs font-bold text-zinc-400">{i + 1}</span>
                </div>
                <div
                  className={`card flex-1 p-5 border ${item.border}`}
                  style={{ background: 'var(--bg-card)' }}
                >
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className={`text-xs font-bold uppercase tracking-wider ${item.color}`}>
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAD+ Stacking */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Stack</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Stacking BPC-157 with NAD+ for Gut Cell Energy
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl">
            BPC-157 repairs gut structure. NAD+ powers the cellular machinery doing the repairing.
            Together, they form a complementary gut restoration stack.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 border border-violet-500/30" style={{ background: 'var(--bg)' }}>
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-violet-500/20 flex items-center justify-center text-xs text-violet-400 font-bold">B</span>
                BPC-157 Role in the Stack
              </h3>
              <ul className="space-y-2">
                {[
                  'Upregulates occludin and ZO-1 for tight junction repair',
                  'Stimulates fibroblast activity and angiogenesis in intestinal wall',
                  'Modulates enteric nervous system and gut motility',
                  'Reduces mucosal inflammation via TNF-α suppression',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-zinc-400">
                    <CheckCircle2 size={14} className="text-violet-400 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 border border-cyan-500/30" style={{ background: 'var(--bg)' }}>
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-400 font-bold">N</span>
                NAD+ Role in the Stack
              </h3>
              <ul className="space-y-2">
                {[
                  'Restores mitochondrial function in intestinal epithelial cells',
                  'Supports tight junction protein expression through sirtuin activation',
                  'Powers cellular repair processes that BPC-157 initiates',
                  'Reduces oxidative stress in inflamed gut tissue',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-zinc-400">
                    <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 card p-5 border" style={{ borderColor: 'var(--border-bright)', background: 'var(--bg)' }}>
            <p className="text-sm text-zinc-400 leading-relaxed">
              <span className="text-white font-semibold">Why they work together: </span>
              BPC-157 signals intestinal cells to initiate repair — but cellular repair requires ATP, which
              depends on mitochondrial NAD+ levels. In chronically inflamed gut tissue, NAD+ is depleted by
              PARP enzymes responding to DNA damage. Supplementing NAD+ restores the fuel supply for the
              repair processes BPC-157 activates, creating a synergistic effect neither achieves alone.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/products/nad-plus" className="btn-primary">
              NAD+ Product Page
              <ArrowRight size={16} />
            </Link>
            <Link href="/products/bpc-157" className="btn-secondary">
              BPC-157 Product Page
            </Link>
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
              Start Your Gut Healing Protocol
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              BPC-157 is available individually or as part of the Ultimate Healing Stack, which includes
              complete gut protocol guidance for oral and injectable administration.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products/bpc-157" className="btn-primary">
              BPC-157 Product Page
              <ArrowRight size={16} />
            </Link>
            <Link href="/stacks/ultimate-healing" className="btn-secondary">
              Ultimate Healing Stack
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/healing" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
              ← Back to All Healing Protocols
            </Link>
          </div>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/healing/gut-health-bpc-157" />
    </div>
  );
}
