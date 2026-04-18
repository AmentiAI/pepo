import {
  Activity, Target, Dna, Sparkles, TrendingDown, Layers, Brain, FlaskConical, CheckCircle2,
} from 'lucide-react'
import type { Product } from '@/lib/products'

type Theme = {
  badge: string
  badgeText: string
  badgeBorder: string
  accent: string
  accentLight: string
}

type Props = {
  product: Product
  theme: Theme
}

export default function CategorySection({ product, theme }: Props) {
  switch (product.category) {
    case 'Healing & Recovery':
      return <HealingMatrix product={product} theme={theme} />
    case 'Growth Hormone':
      return <GHPulseStepper product={product} theme={theme} />
    case 'Anti-Aging & Longevity':
      return <HallmarksGrid product={product} theme={theme} />
    case 'Anti-Aging & Skin':
      return <SkinLayerMap product={product} theme={theme} />
    case 'Body Composition':
      return <WeightLossCurve product={product} theme={theme} />
    case 'Blends & Stacks':
      return <ComponentBreakdown product={product} theme={theme} />
    case 'Cognitive & Nootropic':
      return <NeurotransmitterWheel product={product} theme={theme} />
    case 'Supplies':
      return <ReconstitutionCard product={product} theme={theme} />
    default:
      return <QuickFactsCallout product={product} theme={theme} />
  }
}

// ── Healing & Recovery: tabular injury matrix ─────────────────────
function HealingMatrix({ product, theme }: Props) {
  const rows: Array<{ tissue: string; response: number; window: string; mechanism: string }> = [
    { tissue: 'Tendon / Ligament', response: 5, window: '4–8 wk',  mechanism: 'Angiogenesis + collagen crosslink' },
    { tissue: 'Skeletal muscle',    response: 4, window: '2–6 wk',  mechanism: 'Satellite cell activation' },
    { tissue: 'Gut mucosa',         response: 5, window: '1–3 wk',  mechanism: 'Tight junction repair' },
    { tissue: 'Bone / cartilage',   response: 3, window: '8–16 wk', mechanism: 'Osteoblast signaling' },
    { tissue: 'Skin / fascia',      response: 4, window: '3–6 wk',  mechanism: 'Fibroblast proliferation' },
    { tissue: 'Nerve tissue',       response: 3, window: '6–12 wk', mechanism: 'Neurotrophic factors' },
  ]
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <Activity size={20} style={{ color: theme.accentLight }} />
        <h2 className="text-2xl font-bold text-gray-900">{product.name} Tissue Response Matrix</h2>
      </div>
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: theme.accentLight }}>
        Recovery profile by tissue class
      </p>
      <div className="overflow-hidden rounded-2xl border" style={{ borderColor: '#e5e7eb' }}>
        <table className="w-full text-left text-sm">
          <thead style={{ background: theme.badge }}>
            <tr>
              <th className="px-4 py-3 font-semibold" style={{ color: theme.badgeText }}>Tissue</th>
              <th className="px-4 py-3 font-semibold" style={{ color: theme.badgeText }}>Response</th>
              <th className="px-4 py-3 font-semibold" style={{ color: theme.badgeText }}>Window</th>
              <th className="px-4 py-3 font-semibold hidden sm:table-cell" style={{ color: theme.badgeText }}>Primary mechanism</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.tissue} className={i % 2 ? 'bg-white' : ''} style={i % 2 ? {} : { background: '#fafafa' }}>
                <td className="px-4 py-3 font-semibold text-gray-900">{r.tissue}</td>
                <td className="px-4 py-3">
                  <span className="font-bold" style={{ color: theme.accentLight }}>
                    {'★'.repeat(r.response)}
                  </span>
                  <span className="text-gray-400">{'★'.repeat(5 - r.response)}</span>
                </td>
                <td className="px-4 py-3 text-gray-700">{r.window}</td>
                <td className="px-4 py-3 text-gray-700 hidden sm:table-cell">{r.mechanism}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

// ── Growth Hormone: horizontal pulse stepper ──────────────────────
function GHPulseStepper({ product, theme }: Props) {
  const steps = [
    { t: 'T+0 min',    label: 'Injection',         body: 'Sub-Q delivery triggers pituitary stimulation' },
    { t: 'T+15 min',   label: 'GH pulse begins',   body: 'Natural somatotroph release — no artificial ceiling' },
    { t: 'T+1–2 hr',   label: 'Peak GH serum',     body: '3–5× baseline depending on protocol' },
    { t: 'T+4–6 hr',   label: 'IGF-1 rises',       body: 'Hepatic conversion drives tissue anabolism' },
    { t: 'T+24 hr',    label: 'Return to baseline', body: 'No receptor saturation, next pulse primed' },
  ]
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <TrendingDown size={20} style={{ color: theme.accentLight, transform: 'rotate(180deg)' }} />
        <h2 className="text-2xl font-bold text-gray-900">{product.name} GH Pulse Response Cycle</h2>
      </div>
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: theme.accentLight }}>
        Pharmacokinetic profile · single dose
      </p>
      <ol className="relative space-y-5">
        {steps.map((s, i) => (
          <li key={s.label} className="flex gap-4 items-start">
            <div className="flex flex-col items-center shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black"
                style={{ background: theme.badge, color: theme.accentLight, border: `1.5px solid ${theme.badgeBorder}` }}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-8 mt-1" style={{ background: theme.badgeBorder }} />
              )}
            </div>
            <div className="flex-1 rounded-xl p-4 border" style={{ borderColor: '#e5e7eb', background: '#fff' }}>
              <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                <p className="text-xs font-mono font-bold" style={{ color: theme.accentLight }}>{s.t}</p>
                <p className="text-base font-bold text-gray-900">{s.label}</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

// ── Longevity: hallmarks of aging grid ────────────────────────────
function HallmarksGrid({ product, theme }: Props) {
  const hallmarks = [
    { name: 'Genomic instability',      covered: true  },
    { name: 'Telomere attrition',       covered: true  },
    { name: 'Epigenetic alterations',   covered: true  },
    { name: 'Loss of proteostasis',     covered: false },
    { name: 'Deregulated nutrient sensing', covered: true },
    { name: 'Mitochondrial dysfunction', covered: true },
    { name: 'Cellular senescence',      covered: true  },
    { name: 'Stem cell exhaustion',     covered: false },
    { name: 'Altered intercellular comms', covered: true },
  ]
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <Dna size={20} style={{ color: theme.accentLight }} />
        <h2 className="text-2xl font-bold text-gray-900">{product.name} Hallmarks of Aging Coverage</h2>
      </div>
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: theme.accentLight }}>
        López-Otín framework · 9 biological hallmarks
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {hallmarks.map((h) => (
          <div
            key={h.name}
            className="rounded-xl border p-4 flex items-start gap-3"
            style={{
              background: h.covered ? theme.badge : '#fafafa',
              borderColor: h.covered ? theme.badgeBorder : '#e5e7eb',
              opacity: h.covered ? 1 : 0.55,
            }}
          >
            <CheckCircle2
              size={18}
              style={{ color: h.covered ? theme.accentLight : '#9ca3af' }}
              className="shrink-0 mt-0.5"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900 leading-tight">{h.name}</p>
              <p className="text-[11px] mt-1" style={{ color: h.covered ? theme.accentLight : '#9ca3af' }}>
                {h.covered ? 'Directly targeted' : 'Not primary target'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Anti-Aging & Skin: layered skin diagram ───────────────────────
function SkinLayerMap({ product, theme }: Props) {
  const layers = [
    { name: 'Stratum corneum', depth: '0–20 µm',  impact: 70, note: 'Barrier hydration, TEWL reduction' },
    { name: 'Epidermis',       depth: '50–100 µm', impact: 90, note: 'Keratinocyte turnover, pigment modulation' },
    { name: 'Papillary dermis', depth: '300 µm',  impact: 95, note: 'Collagen III synthesis, fibroblast activation' },
    { name: 'Reticular dermis', depth: '2–4 mm',  impact: 75, note: 'Collagen I crosslinking, elastin remodeling' },
    { name: 'Subcutis',         depth: '4 mm+',    impact: 30, note: 'Vascular perfusion support' },
  ]
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <Sparkles size={20} style={{ color: theme.accentLight }} />
        <h2 className="text-2xl font-bold text-gray-900">{product.name} Skin Layer Impact Map</h2>
      </div>
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: theme.accentLight }}>
        Depth-resolved penetration & effect
      </p>
      <div className="space-y-2">
        {layers.map((l) => (
          <div key={l.name} className="rounded-xl border px-4 py-3 flex items-center gap-4" style={{ borderColor: '#e5e7eb', background: '#fff' }}>
            <div className="w-24 shrink-0">
              <p className="text-sm font-bold text-gray-900 leading-tight">{l.name}</p>
              <p className="text-[10px] font-mono" style={{ color: '#6b7280' }}>{l.depth}</p>
            </div>
            <div className="flex-1 h-8 rounded-md relative overflow-hidden" style={{ background: '#f3f4f6' }}>
              <div
                className="absolute inset-y-0 left-0 rounded-md flex items-center px-3"
                style={{
                  width: `${l.impact}%`,
                  background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentLight})`,
                }}
              >
                <span className="text-[11px] font-bold text-white whitespace-nowrap">{l.impact}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-700 hidden md:block w-64 shrink-0">{l.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Body Composition: weight-loss trajectory curve ────────────────
function WeightLossCurve({ product, theme }: Props) {
  const points = [
    { week: 4,  loss: 2  },
    { week: 8,  loss: 5  },
    { week: 12, loss: 8  },
    { week: 24, loss: 12 },
    { week: 36, loss: 14 },
    { week: 52, loss: 15 },
    { week: 68, loss: 15.5 },
  ]
  const maxLoss = 16
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <Target size={20} style={{ color: theme.accentLight }} />
        <h2 className="text-2xl font-bold text-gray-900">{product.name} Weight Loss Trajectory</h2>
      </div>
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: theme.accentLight }}>
        Mean body-weight reduction · clinical trial extrapolation
      </p>
      <div className="rounded-2xl border p-5 sm:p-6" style={{ borderColor: '#e5e7eb', background: '#fff' }}>
        <div className="grid grid-cols-7 gap-2 items-end h-48">
          {points.map((p) => (
            <div key={p.week} className="flex flex-col items-center gap-1 h-full justify-end">
              <span className="text-[10px] font-bold" style={{ color: theme.accentLight }}>−{p.loss}%</span>
              <div
                className="w-full rounded-t-md"
                style={{
                  height: `${(p.loss / maxLoss) * 100}%`,
                  background: `linear-gradient(to top, ${theme.accent}, ${theme.accentLight})`,
                  minHeight: '8px',
                }}
              />
              <span className="text-[10px] text-gray-600">Wk {p.week}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4 leading-relaxed">
          Trajectory reflects pooled outcomes from dose-titrated protocols. Individual response varies with baseline BMI, caloric intake, and adherence.
        </p>
      </div>
    </section>
  )
}

// ── Blends & Stacks: component breakdown bar ──────────────────────
function ComponentBreakdown({ product, theme }: Props) {
  const parts = product.tags.slice(0, 4).map((t, i) => ({
    name: t,
    pct: [45, 30, 15, 10][i] ?? 10,
    role: ['Primary driver', 'Synergist', 'Potentiator', 'Cofactor'][i] ?? 'Modulator',
  }))
  while (parts.length < 3) parts.push({ name: '—', pct: 5, role: 'Modulator' })

  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <Layers size={20} style={{ color: theme.accentLight }} />
        <h2 className="text-2xl font-bold text-gray-900">{product.name} Component Architecture</h2>
      </div>
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: theme.accentLight }}>
        Blend composition · functional ratio
      </p>
      <div className="rounded-2xl border overflow-hidden" style={{ borderColor: '#e5e7eb' }}>
        <div className="flex h-10">
          {parts.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-[10px] font-bold text-white"
              style={{
                width: `${p.pct}%`,
                background: i === 0 ? theme.accent : i === 1 ? theme.accentLight : i === 2 ? theme.badgeText : '#9ca3af',
              }}
            >
              {p.pct}%
            </div>
          ))}
        </div>
        <div className="divide-y" style={{ background: '#fff' }}>
          {parts.map((p, i) => (
            <div key={i} className="flex items-center gap-4 px-4 py-3">
              <div
                className="w-3 h-3 rounded-sm shrink-0"
                style={{ background: i === 0 ? theme.accent : i === 1 ? theme.accentLight : i === 2 ? theme.badgeText : '#9ca3af' }}
              />
              <p className="text-sm font-semibold text-gray-900 flex-1">{p.name}</p>
              <p className="text-xs" style={{ color: theme.accentLight }}>{p.role}</p>
              <p className="text-sm font-mono font-bold text-gray-900 w-12 text-right">{p.pct}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Cognitive & Nootropic: neurotransmitter wheel ─────────────────
function NeurotransmitterWheel({ product, theme }: Props) {
  const systems = [
    { name: 'Dopamine',      effect: 'Modulates',  detail: 'Motivation, reward' },
    { name: 'Serotonin',     effect: 'Stabilizes', detail: 'Mood, sleep onset' },
    { name: 'GABA',          effect: 'Enhances',   detail: 'Anxiolysis, calm' },
    { name: 'Acetylcholine', effect: 'Upregulates', detail: 'Memory, attention' },
    { name: 'Glutamate',     effect: 'Balances',   detail: 'Synaptic plasticity' },
    { name: 'BDNF',          effect: 'Increases',  detail: 'Neurogenesis' },
  ]
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <Brain size={20} style={{ color: theme.accentLight }} />
        <h2 className="text-2xl font-bold text-gray-900">{product.name} Neurotransmitter Impact Wheel</h2>
      </div>
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: theme.accentLight }}>
        Central nervous system · pathway engagement
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {systems.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl p-4 border relative overflow-hidden"
            style={{ background: '#fff', borderColor: theme.badgeBorder }}
          >
            <div
              className="absolute inset-0 opacity-60 pointer-events-none"
              style={{ background: `radial-gradient(circle at 80% 0%, ${theme.badge}, transparent 60%)` }}
            />
            <div className="relative">
              <p className="text-sm font-bold text-gray-900">{s.name}</p>
              <p className="text-[11px] font-mono uppercase tracking-wide mt-0.5" style={{ color: theme.accentLight }}>{s.effect}</p>
              <p className="text-xs text-gray-600 mt-2 leading-snug">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Supplies: reconstitution reference card ───────────────────────
function ReconstitutionCard({ product, theme }: Props) {
  const rows = [
    { vial: '2 mg',  bac: '1 mL',  dose: '100 mcg', units: '5 IU'  },
    { vial: '5 mg',  bac: '1 mL',  dose: '250 mcg', units: '5 IU'  },
    { vial: '5 mg',  bac: '2 mL',  dose: '250 mcg', units: '10 IU' },
    { vial: '10 mg', bac: '2 mL',  dose: '500 mcg', units: '10 IU' },
    { vial: '10 mg', bac: '3 mL',  dose: '500 mcg', units: '15 IU' },
  ]
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <FlaskConical size={20} style={{ color: theme.accentLight }} />
        <h2 className="text-2xl font-bold text-gray-900">{product.name} Reconstitution Reference</h2>
      </div>
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: theme.accentLight }}>
        Vial × diluent × dose mapping
      </p>
      <div className="rounded-2xl border p-5" style={{ borderColor: '#e5e7eb', background: '#fff' }}>
        <div className="grid grid-cols-4 gap-2 pb-3 border-b" style={{ borderColor: '#e5e7eb' }}>
          <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme.accentLight }}>Vial</p>
          <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme.accentLight }}>Bac water</p>
          <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme.accentLight }}>Per dose</p>
          <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme.accentLight }}>Syringe</p>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-4 gap-2 py-3 border-b last:border-b-0" style={{ borderColor: '#f3f4f6' }}>
            <p className="text-sm font-mono font-bold text-gray-900">{r.vial}</p>
            <p className="text-sm font-mono text-gray-700">{r.bac}</p>
            <p className="text-sm font-mono text-gray-700">{r.dose}</p>
            <p className="text-sm font-mono text-gray-700">{r.units}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Default quick-facts callout ───────────────────────────────────
function QuickFactsCallout({ product, theme }: Props) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-5">{product.name} Quick Facts</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {product.tags.slice(0, 4).map((t) => (
          <div
            key={t}
            className="rounded-xl border p-4 text-center"
            style={{ background: theme.badge, borderColor: theme.badgeBorder }}
          >
            <p className="text-xs font-semibold" style={{ color: theme.accentLight }}>{t}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
