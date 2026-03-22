import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  HelpCircle,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'GHK-Cu for Skin: Wound Healing, Wrinkles & Collagen Repair',
  description:
    'GHK-Cu (copper peptide) heals wounds, reverses wrinkles, and restores collagen — topically and via injection. Clinical evidence, dosing, and protocols.',
  keywords:
    'ghk-cu skin, copper peptide skin healing, ghk-cu for wrinkles, ghk-cu wound healing, ghk-cu topical vs injectable, copper peptide anti-aging, ghk-cu collagen',
  alternates: { canonical: 'https://www.peptidesclav.com/goals/skin-healing-ghk-cu' },
  openGraph: {
    title: 'GHK-Cu for Skin: Wound Healing, Wrinkles & Collagen Repair',
    description:
      'GHK-Cu (copper peptide) heals wounds, reverses wrinkles, and restores collagen — topically and via injection. Clinical evidence, dosing, and protocols.',
    type: 'website',
    url: 'https://www.peptidesclav.com/goals/skin-healing-ghk-cu',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GHK-Cu for Skin — Wound Healing, Wrinkles & Collagen Repair' }],
  },
};

const mechanismCards = [
  {
    icon: <Layers size={18} className="text-violet-400" />,
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    title: 'Collagen & Elastin Synthesis',
    body:
      'GHK-Cu directly upregulates genes encoding collagen type I, type III, and elastin. This is not surface-level moisturisation — it is gene-level signalling that drives the structural proteins responsible for skin firmness and elasticity.',
  },
  {
    icon: <Sparkles size={18} className="text-cyan-400" />,
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    title: 'Gene Expression Reset',
    body:
      'One of GHK-Cu\'s most remarkable properties: it modulates the expression of over 4,000 human genes, shifting the profile toward that of younger tissue. Genes associated with inflammation and cancer progression are down-regulated; those involved in repair are up-regulated.',
  },
  {
    icon: <Zap size={18} className="text-violet-400" />,
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    title: 'Wound Healing & Angiogenesis',
    body:
      'GHK-Cu promotes keratinocyte proliferation, fibroblast migration, and new blood vessel formation (angiogenesis). These are the core steps in every wound healing cascade — making it effective for post-surgical recovery, burns, and chronic wounds.',
  },
  {
    icon: <FlaskConical size={18} className="text-cyan-400" />,
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    title: 'Antioxidant Activation',
    body:
      'The copper ion in GHK-Cu activates superoxide dismutase enzymes (SOD1 and SOD3) — the body\'s primary defence against reactive oxygen species. This reduces oxidative damage to skin cells and mitochondria.',
  },
  {
    icon: <CheckCircle2 size={18} className="text-violet-400" />,
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    title: 'Anti-Inflammatory',
    body:
      'GHK-Cu blocks TNF-α and other pro-inflammatory cytokines. This makes it valuable for inflammatory skin conditions such as eczema and psoriasis, and explains why it heals without the irritation associated with retinol.',
  },
];

const conditions = [
  'Fine lines and wrinkles',
  'Photo-aging and UV damage',
  'Post-surgical and burn wound healing',
  'Stretch marks and scar remodelling',
  'Hair loss — promotes follicle regeneration and extends the anagen phase',
  'Eczema and psoriasis — anti-inflammatory mechanism reduces flare severity',
];

const faqs = [
  {
    q: 'Is GHK-Cu safe for daily topical use?',
    a: 'Yes — GHK-Cu has an excellent safety profile with no known toxicity at cosmetic concentrations. Unlike retinol or AHAs, it does not cause photosensitivity, peeling, or inflammation. Research-grade injectable GHK-Cu has similar tolerability in subcutaneous use, with no significant adverse events reported in studies.',
  },
  {
    q: 'How long does GHK-Cu take to show results on skin?',
    a: 'Topical use produces measurable texture and hydration improvements in 4–8 weeks. For injectable protocols, collagen density changes are measurable via skin ultrasound in 8–12 weeks. Interestingly, the underlying gene expression changes begin within days of exposure — visible changes follow as the new protein is synthesised and laid down.',
  },
  {
    q: 'Can GHK-Cu help with hair loss?',
    a: 'Yes. GHK-Cu promotes hair follicle stem cell activity and extends the anagen (active growth) phase of the hair cycle. It also increases follicle size — one study showed a 48% increase in follicle size with topical application. It is one component of some hair loss protocols, often combined with BPC-157 for enhanced scalp blood flow.',
  },
  {
    q: 'Is the copper in GHK-Cu safe?',
    a: 'Yes. The copper in GHK-Cu is tightly bound to the glycine-histidine-lysine tripeptide, which dramatically reduces the risks associated with free ionic copper. This is in fact the naturally occurring form found in human plasma — your body already uses this exact molecule for wound repair. It is not ionic copper supplementation.',
  },
  {
    q: 'Can I combine GHK-Cu with retinol?',
    a: 'Yes — they work through entirely different pathways and complement each other well. GHK-Cu stimulates collagen production and modulates gene expression without irritation. Retinol accelerates cell turnover but can cause dryness and irritation. Many users alternate nights, or use GHK-Cu in the morning and retinol at night. GHK-Cu can also help mitigate retinol-induced irritation.',
  },
];

export default function SkinHealingGhkCuPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
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
            <Link href="/anti-aging" className="badge hover:text-white transition-colors">Anti-Aging</Link>
            <ChevronRight size={14} className="text-zinc-600" />
            <span className="badge badge-cyan">GHK-Cu for Skin</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">GHK-Cu</span>
              <span className="text-white"> for Skin</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              GHK-Cu (copper peptide) is the most comprehensively studied skin repair molecule in
              existence — with over 4,000 published studies. It does not mask ageing. It reverses the
              gene expression patterns that cause it, restoring collagen, healing wounds, and
              resetting skin biology toward a younger baseline.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products/ghk-cu" className="btn-primary">
                View GHK-Cu Product
                <ArrowRight size={16} />
              </Link>
              <Link href="/stacks/anti-aging-skin" className="btn-secondary">
                Anti-Aging Skin Stack
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <FlaskConical size={18} className="text-violet-400" />, value: '4,000+', label: 'Published studies on GHK-Cu' },
              { icon: <Zap size={18} className="text-cyan-400" />, value: '70%', label: 'Upregulation of collagen synthesis' },
              { icon: <Layers size={18} className="text-violet-400" />, value: 'Topical + Injectable', label: 'Two delivery routes' },
              { icon: <Sparkles size={18} className="text-cyan-400" />, value: '1970s', label: 'Discovery by Loren Pickart, PhD' },
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

      {/* What is GHK-Cu */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-cyan mb-4 inline-block">The Science</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What is GHK-Cu?</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                GHK-Cu is a naturally occurring tripeptide — glycine-histidine-lysine — bound to a
                copper ion. It was first isolated from human plasma in the 1970s by biochemist Loren
                Pickart, PhD, who noticed that older human serum dramatically impaired liver function
                in culture, while younger serum (with higher GHK concentrations) protected and
                repaired it.
              </p>
              <p>
                In young adults (around age 20), plasma GHK-Cu concentrations average approximately
                200 ng/mL. By age 60, this declines to roughly 80 ng/mL — a 60% reduction. This
                decline closely correlates with the loss of skin elasticity, wound healing capacity,
                and collagen density that define visible ageing.
              </p>
              <p>
                The copper ion is not decorative. It is functionally essential — it activates
                antioxidant enzymes, participates in collagen cross-linking, and enables GHK-Cu to
                modulate gene expression. Peptide-bound copper is dramatically safer than ionic
                copper supplementation because the peptide controls its delivery and prevents
                free-radical generation.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div
              className="card p-6 border"
              style={{ borderColor: 'var(--border-bright)', background: 'var(--bg-card)' }}
            >
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                GHK-Cu Plasma Levels by Age
              </h3>
              <div className="space-y-3">
                {[
                  { age: 'Age 20', level: '~200 ng/mL', pct: 100, color: 'bg-violet-500' },
                  { age: 'Age 40', level: '~140 ng/mL', pct: 70, color: 'bg-violet-400' },
                  { age: 'Age 60', level: '~80 ng/mL', pct: 40, color: 'bg-cyan-500' },
                ].map((row) => (
                  <div key={row.age}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-400">{row.age}</span>
                      <span className="text-white font-semibold">{row.level}</span>
                    </div>
                    <div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: 'var(--border)' }}
                    >
                      <div
                        className={`h-2 rounded-full ${row.color}`}
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="card p-5 border"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
            >
              <p className="text-sm text-zinc-400 leading-relaxed">
                <span className="text-white font-semibold">Structure:</span> Gly-His-Lys bound to
                Cu²⁺. The tripeptide is small enough to penetrate skin barriers topically, and is
                rapidly bioavailable subcutaneously. It is not a synthetic molecule — it is identical
                to the form naturally produced by the human body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanism cards */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Mechanisms</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            What GHK-Cu Does to Your Skin
          </h2>
          <p className="text-zinc-400 mb-10 max-w-2xl">
            GHK-Cu acts on five distinct mechanisms simultaneously — each one contributing to skin
            repair, rejuvenation, and resilience.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mechanismCards.map((card) => (
              <div
                key={card.title}
                className="card p-5 border"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <div className={`w-10 h-10 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{card.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Topical vs Injectable */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Delivery Methods</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Topical vs. Injectable GHK-Cu
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          GHK-Cu is effective via both routes — and they can be used simultaneously for maximum
          effect. The choice depends on your goals and experience level.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {/* Topical */}
          <div className="card p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                <Sparkles size={16} className="text-violet-400" />
              </div>
              <h3 className="font-bold text-white">Topical</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                'Convenient — no injection required',
                'Effective for surface wrinkles and texture',
                'Good for targeted facial application',
                'Used daily (morning and/or night)',
                'Lower systemic bioavailability',
                'Available at consumer scale (0.1–2% serums)',
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm text-zinc-400">
                  <CheckCircle2 size={13} className="text-violet-400 mt-0.5 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Injectable */}
          <div className="card p-6 border" style={{ borderColor: 'var(--border-bright)', background: 'var(--bg-card)' }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center">
                <Zap size={16} className="text-cyan-400" />
              </div>
              <h3 className="font-bold text-white">Injectable (SubQ)</h3>
              <span className="badge badge-cyan text-[10px]">More Potent</span>
            </div>
            <ul className="space-y-2.5">
              {[
                'Higher systemic bioavailability',
                'Deeper dermal remodelling',
                'Whole-body gene expression effects',
                'Used in cycles (8 weeks on / 4 off)',
                'Research-grade concentrations',
                'Requires reconstitution and syringe',
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm text-zinc-400">
                  <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Both */}
          <div className="card p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Layers size={16} className="text-violet-400" />
              </div>
              <h3 className="font-bold text-white">Combined</h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Topical and injectable GHK-Cu can be used simultaneously. The topical addresses surface
              and local skin quality; the injectable drives systemic gene expression and deeper dermal
              remodelling. There are no known negative interactions between the two routes.
            </p>
            <p className="text-sm text-zinc-500">
              Many users run injectable cycles (8 weeks on) while maintaining daily topical use
              year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Protocols</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">GHK-Cu Dosing Protocols</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Topical protocol */}
            <div className="card p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center">
                  <Sparkles size={20} className="text-violet-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Topical Protocol</p>
                  <p className="text-xs text-zinc-500">Serum or cream, daily</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Concentration', value: '0.1–2% GHK-Cu' },
                  { label: 'Frequency', value: 'Once or twice daily' },
                  { label: 'Application', value: 'Clean, dry skin' },
                  { label: 'Timing', value: 'Morning and/or night' },
                  { label: 'Duration', value: 'Year-round' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-zinc-500">{row.label}</span>
                    <span className="text-white font-semibold">{row.value}</span>
                  </div>
                ))}
              </div>
              <div
                className="mt-5 p-4 rounded-xl text-sm text-zinc-400 leading-relaxed"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                Consumer-grade copper peptide serums (The Ordinary, NIOD) use concentrations around
                0.1–1%. Research-grade topicals are significantly more concentrated. Apply after
                cleansing and before moisturiser.
              </div>
            </div>

            {/* Injectable protocol */}
            <div className="card p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <Zap size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Injectable Protocol</p>
                  <p className="text-xs text-zinc-500">Subcutaneous, cycled</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Dose', value: '1–2 mg per injection' },
                  { label: 'Frequency', value: '2–3× per week' },
                  { label: 'Route', value: 'Subcutaneous (abdomen)' },
                  { label: 'Cycle length', value: '8 weeks on' },
                  { label: 'Off period', value: '4 weeks off' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-zinc-500">{row.label}</span>
                    <span className="text-white font-semibold">{row.value}</span>
                  </div>
                ))}
              </div>
              <div
                className="mt-5 p-4 rounded-xl text-sm text-zinc-400 leading-relaxed"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                Reconstitute with bacteriostatic water. Use a 29–31g insulin syringe. Rotate
                injection sites. Most users begin at 1mg and titrate up based on response.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Conditions */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-cyan mb-4 inline-block">Applications</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Skin Conditions GHK-Cu Addresses
            </h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              GHK-Cu's multi-mechanism action means it benefits a wide range of skin conditions —
              from cosmetic concerns to clinically significant wound repair.
            </p>
            <ul className="space-y-3">
              {conditions.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GHK-Cu vs Retinol */}
          <div>
            <span className="badge mb-4 inline-block">Comparison</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              GHK-Cu vs. Retinol
            </h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Retinol is the most popular anti-aging ingredient on the market. GHK-Cu works
              differently — and the two can complement each other.
            </p>
            <div className="space-y-3">
              {[
                {
                  label: 'Primary mechanism',
                  ghk: 'Gene expression modulation, collagen upregulation',
                  retinol: 'Increases cell turnover rate',
                },
                {
                  label: 'Irritation',
                  ghk: 'None — anti-inflammatory',
                  retinol: 'Common: dryness, peeling, redness',
                },
                {
                  label: 'Collagen production',
                  ghk: 'Direct upregulation',
                  retinol: 'Indirect (via cell turnover)',
                },
                {
                  label: 'Can combine?',
                  ghk: 'Yes — alternate nights',
                  retinol: 'Yes — GHK-Cu may offset irritation',
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="card p-4 border text-sm"
                  style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
                >
                  <p className="text-zinc-500 text-xs mb-2 font-medium uppercase tracking-wider">{row.label}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-violet-400 text-xs font-semibold block mb-0.5">GHK-Cu</span>
                      <span className="text-zinc-300">{row.ghk}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400 text-xs font-semibold block mb-0.5">Retinol</span>
                      <span className="text-zinc-300">{row.retinol}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Stacking</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">GHK-Cu Stacking Protocols</h2>
          <p className="text-zinc-400 mb-10 max-w-2xl">
            GHK-Cu pairs well with several other peptides depending on your primary goal.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                stack: 'GHK-Cu + Epithalon',
                goal: 'Telomere & Longevity',
                description:
                  'The definitive longevity stack. GHK-Cu resets gene expression toward younger tissue biology; Epithalon activates telomerase to rebuild telomere length. Together they address the two deepest levers of biological aging at the cellular level.',
                color: 'text-violet-400',
                bg: 'bg-violet-500/10',
                href: '/stacks/longevity-elite',
              },
              {
                stack: 'GHK-Cu + BPC-157',
                goal: 'Accelerated Wound Healing',
                description:
                  'BPC-157 drives angiogenesis and growth factor signalling at wound sites; GHK-Cu provides the collagen synthesis and gene expression reset to complete structural repair. For post-surgical recovery, burns, or chronic skin damage, this combination is best in class.',
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
                href: '/stacks/ultimate-healing',
              },
              {
                stack: 'GHK-Cu + Ipamorelin/CJC',
                goal: 'Skin + GH Anti-Aging',
                description:
                  'GH decline is a primary driver of skin thinning and collagen loss with age. Ipamorelin/CJC restores youthful GH pulses; GHK-Cu provides direct skin-level collagen and elastin upregulation. This is the anti-aging skin stack for those wanting the most comprehensive approach.',
                color: 'text-violet-400',
                bg: 'bg-violet-500/10',
                href: '/stacks/anti-aging-skin',
              },
            ].map((s) => (
              <div
                key={s.stack}
                className="card p-6 border flex flex-col"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                  <Layers size={16} className={s.color} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${s.color} mb-1`}>{s.goal}</span>
                <h3 className="font-bold text-white mb-3 text-sm">{s.stack}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed flex-1">{s.description}</p>
                <Link href={s.href} className="mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1">
                  View Stack <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* FAQ */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={22} className="text-violet-400" />
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start Your GHK-Cu Protocol?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Browse the GHK-Cu product page for reconstitution and dosing specifics, or explore the
            complete Anti-Aging Skin Stack for a comprehensive multi-peptide protocol.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products/ghk-cu" className="btn-primary">
              GHK-Cu Product Page
              <ArrowRight size={16} />
            </Link>
            <Link href="/stacks/anti-aging-skin" className="btn-secondary">
              Anti-Aging Skin Stack
            </Link>
          </div>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/goals/skin-healing-ghk-cu" />
    </div>
  );
}
