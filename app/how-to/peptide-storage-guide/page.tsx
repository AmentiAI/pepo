import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Shield,
  Thermometer,
  Zap,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Peptide Storage Guide: Refrigerate, Freeze & Preserve',
  description:
    'Complete peptide storage guide — temperature requirements, shelf life for lyophilized vs reconstituted peptides, freeze-thaw rules, and signs of degradation.',
  keywords:
    'how to store peptides, peptide storage, peptide refrigeration, lyophilized peptide shelf life, reconstituted peptide stability, peptide freeze thaw, peptide degradation',
  alternates: { canonical: 'https://www.peptidesclav.com/how-to/peptide-storage-guide' },
  openGraph: {
    title: 'Peptide Storage Guide: Refrigerate, Freeze & Preserve',
    description:
      'Complete peptide storage guide — temperature requirements, shelf life for lyophilized vs reconstituted peptides, freeze-thaw rules, and signs of degradation.',
    type: 'website',
    url: 'https://www.peptidesclav.com/how-to/peptide-storage-guide',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Peptide Storage Guide' }],
  },
};

const reconstitutedTable = [
  { peptide: 'BPC-157', stability: '14–21 days', temp: '2–8°C', notes: 'Store away from door; sensitive to temperature fluctuations' },
  { peptide: 'TB-500', stability: '7–14 days', temp: '2–8°C', notes: 'Shorter stability than most peptides once reconstituted' },
  { peptide: 'Ipamorelin / CJC-1295', stability: '21–28 days', temp: '2–8°C', notes: 'More stable class; keep in original vial with tight septum' },
  { peptide: 'GHK-Cu', stability: '14–21 days', temp: '2–8°C', notes: 'Copper complex is relatively stable; avoid light exposure' },
  { peptide: 'GLP-1 (Semaglutide / Tirzepatide)', stability: '28 days', temp: '2–8°C', notes: 'Most stable class of reconstituted peptides; mirrors pharma product guidance' },
  { peptide: 'All others (general rule)', stability: '≤28 days', temp: '2–8°C', notes: 'Err on the side of 14 days if uncertain — freshness maximizes potency' },
];

const degradationSigns = [
  {
    sign: 'Cloudiness in previously clear solution',
    detail: 'Not to be confused with undissolved powder during initial reconstitution. If a previously clear solution turns cloudy, this indicates protein aggregation or bacterial contamination.',
    severity: 'Discard',
    color: 'text-red-400',
    border: 'border-red-500/30',
    bg: 'bg-red-500/10',
  },
  {
    sign: 'Unusual color change',
    detail: 'Yellow or brown coloration in peptides that should be clear or white indicates oxidation or contamination. Some peptides (GHK-Cu) have a natural slight blue-green tint from the copper complex — this is normal.',
    severity: 'Discard',
    color: 'text-red-400',
    border: 'border-red-500/30',
    bg: 'bg-red-500/10',
  },
  {
    sign: 'Visible particles',
    detail: 'Floating particles in a reconstituted solution indicate either incomplete dissolution (immediately after mixing — let it sit) or contamination if appearing days after reconstitution.',
    severity: 'Assess',
    color: 'text-yellow-600',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
  },
  {
    sign: 'Strong unusual odor',
    detail: 'Most peptides in BAC water are nearly odorless. A strong, unusual smell — particularly sour or putrid — indicates bacterial contamination. Discard immediately.',
    severity: 'Discard',
    color: 'text-red-400',
    border: 'border-red-500/30',
    bg: 'bg-red-500/10',
  },
];

const faqs = [
  {
    q: 'Can I leave reconstituted peptides at room temperature?',
    a: "Not recommended for more than a few hours. Reconstituted peptides require refrigeration at 2–8°C. Even a few hours at room temperature can begin degrading the preservative effectiveness of bacteriostatic water, increasing bacterial contamination risk. If you're preparing a dose, drawing and injecting within 30 minutes at room temp is fine — leaving vials out for hours is not.",
  },
  {
    q: 'How long does a lyophilized peptide last in the fridge?',
    a: "6–12 months refrigerated at 2–8°C, and 2+ years frozen at -20°C. For maximum shelf life: store away from the fridge door (temperature fluctuates with opening), in an opaque container or wrapped in foil to block light, with a silica gel packet to control moisture. Never store near strong-smelling foods — refrigerator odors can permeate through stoppers over extended periods.",
  },
  {
    q: 'Is it OK to freeze reconstituted peptides?',
    a: "Yes, but only when necessary and in small aliquots. Freeze in individual dose-sized aliquots (using amber glass vials or insulin syringes) to minimize the number of freeze-thaw cycles on any single aliquot. Limit to 3 freeze-thaw cycles maximum per aliquot. Always thaw in the refrigerator, not at room temperature — slow thawing preserves peptide integrity better than rapid ambient-temperature thawing.",
  },
  {
    q: 'What if my peptide arrived warm?',
    a: "First, check whether it arrived lyophilized (powder) or reconstituted (liquid). If lyophilized: it almost certainly is still fine — lyophilized peptides are stable at room temperature for 30–90 days, which is why shipping is not a concern. If reconstituted: assess the solution for cloudiness, color change, or odor. A reconstituted peptide that was warm for 24+ hours has an elevated contamination risk and reduced potency. When in doubt with reconstituted peptides, contact the supplier.",
  },
];

export default function PeptideStorageGuidePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="badge hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-800" />
            <Link href="/guide" className="badge hover:text-gray-900 transition-colors">How-To Guides</Link>
            <ChevronRight size={14} className="text-gray-800" />
            <span className="badge badge-cyan">Peptide Storage Guide</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">Complete Guide</span>
              <span className="badge badge-cyan">Updated March 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">Peptide </span>
              <span className="gradient-text">Storage Guide</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Improper storage is one of the most common causes of reduced peptide potency. This
              guide covers temperature requirements, shelf life for both lyophilized and reconstituted
              peptides, freeze-thaw rules, and how to identify degradation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/how-to/reconstitute-peptides" className="btn-primary">
                Reconstitution Guide
                <ArrowRight size={16} />
              </Link>
              <Link href="/how-to/subcutaneous-injection-guide" className="btn-secondary">
                Injection Guide
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Thermometer size={18} className="text-yellow-600" />, value: '2–8°C', label: 'Reconstituted peptide fridge temp' },
              { icon: <Zap size={18} className="text-yellow-600" />, value: '-20°C', label: 'Lyophilized long-term storage' },
              { icon: <Shield size={18} className="text-yellow-600" />, value: '28 days', label: 'Reconstituted stability in fridge' },
              { icon: <CheckCircle2 size={18} className="text-yellow-600" />, value: '3 cycles', label: 'Recommended freeze-thaw limit' },
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

      {/* Two States */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Two States</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Lyophilized vs Reconstituted: Different Storage Rules
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          The state of your peptide — powder or liquid — determines its storage requirements,
          shelf life, and vulnerability to degradation.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Lyophilized */}
          <div
            className="card p-6 border border-yellow-500/30"
            style={{ background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="badge badge-cyan">Lyophilized</span>
              <span className="text-xs text-gray-700">Powder Form</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Far More Stable</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Lyophilized (freeze-dried) peptides have had water removed, dramatically reducing
              degradation. They tolerate room temperature during shipping (30–90 days) and have
              multi-year shelf lives when properly stored.
            </p>
            <div className="space-y-2">
              {[
                { label: 'Room Temperature', value: '30–90 days (transit only)' },
                { label: 'Refrigerator (2–8°C)', value: '6–12 months' },
                { label: 'Freezer (−20°C)', value: '2+ years' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-sm border-b pb-2" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-gray-700">{row.label}</span>
                  <span className="text-yellow-600 font-semibold text-xs">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reconstituted */}
          <div
            className="card p-6 border border-yellow-400/40"
            style={{ background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">Reconstituted</span>
              <span className="text-xs text-gray-700">Liquid Form</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Much Less Stable</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Once mixed with bacteriostatic water, peptides are in solution and become vulnerable
              to heat, light, bacterial growth, and freeze-thaw damage. Immediate refrigeration is
              required, and shelf life is measured in days to weeks — not months.
            </p>
            <div className="space-y-2">
              {[
                { label: 'Room Temperature', value: 'Hours only (dose and inject)' },
                { label: 'Refrigerator (2–8°C)', value: '14–28 days (peptide-dependent)' },
                { label: 'Freezer (−20°C)', value: 'Possible — aliquots only, ≤3 cycles' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-sm border-b pb-2" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-gray-700">{row.label}</span>
                  <span className="text-yellow-600 font-semibold text-xs">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reconstituted Table */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Stability Reference</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Reconstituted Peptide Stability by Type
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Once reconstituted, each peptide class has different stability windows. Always use
            freshest possible solution for maximum potency.
          </p>
          <div className="card border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-700 uppercase tracking-wider">Peptide</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-yellow-600 uppercase tracking-wider">Fridge Stability</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-700 uppercase tracking-wider">Temperature</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-700 uppercase tracking-wider hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {reconstitutedTable.map((row, i) => (
                    <tr
                      key={row.peptide}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg)',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <td className="px-5 py-3 font-semibold text-gray-900 text-xs">{row.peptide}</td>
                      <td className="px-5 py-3 text-yellow-600 font-semibold text-xs">{row.stability}</td>
                      <td className="px-5 py-3 text-gray-700 text-xs">{row.temp}</td>
                      <td className="px-5 py-3 text-gray-700 text-xs hidden sm:table-cell">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Freeze-Thaw Rules */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Freeze-Thaw</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Freeze-Thaw Rules for Reconstituted Peptides
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl">
          Freezing reconstituted peptides is possible but requires careful aliquoting to preserve
          potency across thaw cycles.
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              step: '1',
              title: 'Maximum 3 Freeze-Thaw Cycles',
              desc: 'Each freeze-thaw cycle causes ice crystal formation that can damage peptide structure. The generally accepted limit is 3 cycles per aliquot. After the third thaw, use the entire aliquot — do not refreeze.',
              color: 'text-yellow-600',
              border: 'border-yellow-400/40',
            },
            {
              step: '2',
              title: 'Aliquot Before Freezing',
              desc: 'Divide a large reconstituted vial into individual dose-sized aliquots (using amber glass vials or pre-drawn syringes) before freezing. This way each aliquot is only thawed once, not the entire supply.',
              color: 'text-yellow-600',
              border: 'border-yellow-500/30',
            },
            {
              step: '3',
              title: 'Thaw in the Refrigerator',
              desc: 'Always thaw frozen peptide aliquots in the refrigerator (2–8°C), not at room temperature. Slow thawing preserves peptide integrity. Plan ahead — allow 4–8 hours for refrigerator thawing.',
              color: 'text-yellow-600',
              border: 'border-yellow-400/40',
            },
          ].map((item) => (
            <div
              key={item.step}
              className={`card p-6 border ${item.border} flex flex-col`}
              style={{ background: 'var(--bg-card)' }}
            >
              <div
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-4 shrink-0"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <span className={`text-sm font-bold ${item.color}`}>{item.step}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Degrades Peptides */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Degradation Factors</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            What Degrades Peptides
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Understanding the enemies of peptide stability helps you build a storage routine that
            protects potency.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { factor: 'Heat (>25°C)', desc: 'The primary cause of potency loss. Heat accelerates peptide bond hydrolysis and protein denaturation. Even brief exposure to warm temperatures significantly reduces reconstituted peptide stability.', accent: 'text-red-400', bg: 'bg-red-500/10' },
              { factor: 'UV Light Exposure', desc: 'Ultraviolet light breaks down peptide bonds and causes photo-oxidation. Store in amber vials or opaque containers. Never leave vials on a countertop near a window.', accent: 'text-yellow-600', bg: 'bg-amber-500/10' },
              { factor: 'Repeated Freeze-Thaw', desc: 'Each freeze-thaw cycle causes mechanical damage from ice crystal formation. Limit to 3 cycles maximum and use aliquots to minimize how often any given portion is cycled.', accent: 'text-yellow-600', bg: 'bg-yellow-50' },
              { factor: 'Bacterial Contamination', desc: 'The primary reason to use bacteriostatic water (not sterile water). BAC water contains 0.9% benzyl alcohol which inhibits microbial growth. Always use a fresh, sealed BAC water vial for reconstitution.', accent: 'text-red-400', bg: 'bg-red-500/10' },
              { factor: 'Improper pH', desc: 'Most peptides are stable in a specific pH range. Bacteriostatic water maintains appropriate pH. Using tap water, distilled water, or other solvents disrupts pH and accelerates degradation.', accent: 'text-yellow-600', bg: 'bg-amber-500/10' },
              { factor: 'Oxygen Exposure', desc: 'Drawing air into vials during reconstitution or dosing introduces oxygen that can oxidize sensitive amino acid residues. Minimize headspace in vials and avoid vigorous shaking.', accent: 'text-yellow-600', bg: 'bg-cyan-500/10' },
            ].map((item) => (
              <div
                key={item.factor}
                className="card p-5 border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center mb-3`}>
                  <AlertTriangle size={16} className={item.accent} />
                </div>
                <h3 className={`font-bold text-sm mb-2 ${item.accent}`}>{item.factor}</h3>
                <p className="text-xs text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Signs of Degradation */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Quality Check</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Signs of Peptide Degradation
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl">
          Inspect your peptide solution before every dose. When in doubt, discard.
        </p>
        <div className="space-y-4">
          {degradationSigns.map((item) => (
            <div
              key={item.sign}
              className={`card p-5 border ${item.border} flex items-start gap-4`}
              style={{ background: 'var(--bg-card)' }}
            >
              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                <AlertTriangle size={16} className={item.color} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="font-bold text-gray-900 text-sm">{item.sign}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.bg} ${item.color}`}>
                    {item.severity}
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Storage */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Travel Storage</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Traveling with Peptides
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="card p-6 border border-cyan-500/20"
              style={{ background: 'var(--bg)' }}
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-yellow-600" />
                Lyophilized (Powder)
              </h3>
              <ul className="space-y-2">
                {[
                  'Stable for 24–48 hours at room temperature — no cooler needed for short trips',
                  'For longer trips, pack in an insulated bag away from heat sources',
                  'Ideal form for travel — reconstitute on arrival',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <ArrowRight size={12} className="text-yellow-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-gray-700 leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="card p-6 border border-yellow-500/20"
              style={{ background: 'var(--bg)' }}
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Thermometer size={16} className="text-yellow-600" />
                Reconstituted (Liquid)
              </h3>
              <ul className="space-y-2">
                {[
                  'Use an insulated cooler with ice packs to maintain 2–8°C',
                  'For air travel: pack in carry-on, not checked luggage (temperature in cargo holds is uncontrolled)',
                  'Declare nothing — peptides are legal research compounds with no controlled substance status',
                  'Keep in original labeled vials with intact septa',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <ArrowRight size={12} className="text-yellow-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-gray-700 leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Equipment Recommendations */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Equipment</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Storage Equipment Recommendations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Dedicated Mini Fridge',
              desc: 'A dedicated mini fridge (not the kitchen fridge) keeps temperature consistent and eliminates contamination from food odors. Models with a temperature display are ideal.',
              color: 'text-yellow-600',
              border: 'border-yellow-400/40',
            },
            {
              title: 'Amber Glass Vials',
              desc: 'Use amber (brown) glass vials for aliquoting — they block UV light. Pre-cleaned 2mL vials with rubber stoppers are ideal for freeze-thaw aliquots.',
              color: 'text-yellow-600',
              border: 'border-yellow-500/30',
            },
            {
              title: 'Silica Gel Packets',
              desc: 'Place silica gel desiccant packets in your storage container (not touching vials) to control moisture. Replace every 3–6 months or when the color-indicator changes.',
              color: 'text-yellow-600',
              border: 'border-yellow-400/40',
            },
            {
              title: 'Dark Storage Location',
              desc: 'Store your fridge away from windows or use an opaque box inside the fridge. Light exposure — even from the fridge door opening — accumulates over time.',
              color: 'text-yellow-600',
              border: 'border-yellow-500/30',
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`card p-5 border ${item.border} flex flex-col`}
              style={{ background: 'var(--bg-card)' }}
            >
              <h3 className={`font-bold text-sm mb-2 ${item.color}`}>{item.title}</h3>
              <p className="text-xs text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
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
                <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Next Steps: Reconstitution &amp; Injection
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Now that you understand storage, learn how to properly reconstitute peptides with
          bacteriostatic water and how to inject subcutaneously.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/how-to/reconstitute-peptides" className="btn-primary">
            Reconstitution Guide
            <ArrowRight size={16} />
          </Link>
          <Link href="/how-to/subcutaneous-injection-guide" className="btn-secondary">
            Injection Guide
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/how-to/peptide-storage-guide" />
    </div>
  );
}
