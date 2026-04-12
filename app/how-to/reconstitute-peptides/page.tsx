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
  AlertTriangle,
  Thermometer,
  Package,
  FlaskConical,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';
import ReconstitutionCalculator from '@/components/ReconstitutionCalculator';

export const metadata: Metadata = {
  title: 'How to Reconstitute Peptides: Step-by-Step Guide',
  description:
    'Step-by-step peptide reconstitution guide — how much bacteriostatic water to add, dosing math made simple, and storage instructions after mixing.',
  keywords:
    'how to reconstitute peptides, peptide reconstitution, bacteriostatic water peptides, how much bac water for peptides, peptide mixing guide, reconstitute bpc-157',
  alternates: { canonical: 'https://www.peptidesclav.com/how-to/reconstitute-peptides' },
  openGraph: {
    title: 'How to Reconstitute Peptides: Step-by-Step Guide',
    description:
      'Step-by-step peptide reconstitution guide — how much bacteriostatic water to add, dosing math made simple, and storage instructions after mixing.',
    url: 'https://www.peptidesclav.com/how-to/reconstitute-peptides',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'How to Reconstitute Peptides Guide' }],
  },
};

const supplies = [
  {
    item: 'Lyophilized peptide vial',
    detail: 'Freeze-dried powder — handle gently, keep away from heat',
    icon: <FlaskConical size={18} className="text-yellow-600" />,
    bg: 'bg-yellow-50',
  },
  {
    item: 'Bacteriostatic water (BAC water)',
    detail: 'NOT sterile water — BAC water contains benzyl alcohol preservative',
    icon: <Package size={18} className="text-yellow-600" />,
    bg: 'bg-cyan-500/10',
  },
  {
    item: '1mL or 3mL syringe with needle',
    detail: '29–31 gauge insulin syringes recommended for injection',
    icon: <Syringe size={18} className="text-yellow-600" />,
    bg: 'bg-yellow-50',
  },
  {
    item: 'Alcohol swabs',
    detail: 'For sterilizing vial tops before every insertion',
    icon: <Shield size={18} className="text-yellow-600" />,
    bg: 'bg-cyan-500/10',
  },
  {
    item: 'Clean surface',
    detail: 'Work on a clean flat surface — paper towel or clean cloth',
    icon: <CheckCircle2 size={18} className="text-yellow-600" />,
    bg: 'bg-yellow-50',
  },
];

const steps = [
  {
    number: 1,
    title: 'Wash hands and swab vial tops',
    detail:
      'Wash hands thoroughly with soap. Use a fresh alcohol swab to wipe the rubber stopper on both the peptide vial and the BAC water vial. Let the alcohol dry for 10–15 seconds before inserting any needle. This is the single most important contamination-prevention step.',
    color: 'text-yellow-600',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-50',
  },
  {
    number: 2,
    title: 'Draw BAC water into syringe',
    detail:
      'Pull back the syringe plunger to draw air equal to your target BAC water volume (standard: 1–2 mL for a 5mg peptide vial). Insert needle into BAC water vial, push air in, then draw out your target volume. Most users start with 2 mL for 5mg vials — this gives 250 mcg per 0.1 mL, which is the most convenient concentration for standard dosing.',
    color: 'text-yellow-600',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
  },
  {
    number: 3,
    title: 'Inject BAC water slowly into peptide vial',
    detail:
      'Insert the needle through the rubber stopper of the peptide vial. Aim the stream of water at the glass wall of the vial — NOT directly onto the powder. Injecting onto the powder can create air pockets and mechanical stress that denatures (damages) the peptide structure. Release slowly over 5–10 seconds.',
    color: 'text-yellow-600',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-50',
  },
  {
    number: 4,
    title: 'Gently swirl — never shake',
    detail:
      'Remove the syringe. Hold the vial between your fingers and gently swirl in a circular motion. The powder should dissolve into a clear solution within 30–60 seconds for most peptides. Never shake — vigorous agitation creates air bubbles and can break peptide bonds, degrading the product. If the solution appears cloudy after 2 minutes of gentle swirling, see the FAQ section below.',
    color: 'text-yellow-600',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
  },
  {
    number: 5,
    title: 'Label the vial with reconstitution date',
    detail:
      'Write the date on the vial immediately. Reconstituted peptides stored at 2–8°C are stable for 28 days — you need the date to know when to discard. Use a piece of tape and a permanent marker if the vial label has no space. Never guess the date.',
    color: 'text-yellow-600',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-50',
  },
  {
    number: 6,
    title: 'Refrigerate immediately at 2–8°C',
    detail:
      'Place the reconstituted vial in your refrigerator. Keep away from the freezer compartment edge where temperature fluctuates. Do not store at room temperature. For long-term storage (beyond 28 days), freeze at −20°C but minimize freeze-thaw cycles — each cycle degrades potency slightly.',
    color: 'text-yellow-600',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
  },
];

const commonMistakes = [
  {
    mistake: 'Shaking the vial',
    consequence: 'Denatures the peptide — mechanical agitation breaks fragile peptide bonds',
    fix: 'Always swirl gently in a circular motion',
    color: 'text-red-400',
  },
  {
    mistake: 'Using regular tap or sterile water',
    consequence: 'No preservative — single-use only, degrades rapidly within 24 hours',
    fix: 'Always use bacteriostatic water (BAC water) for multi-dose vials',
    color: 'text-red-400',
  },
  {
    mistake: 'Skipping alcohol swabs',
    consequence: 'Bacterial contamination of vial — risk of infection at injection site',
    fix: 'Swab every vial top every time before needle insertion',
    color: 'text-red-400',
  },
  {
    mistake: 'Injecting BAC water directly onto the powder',
    consequence: 'Foaming and partial denaturation — reduces potency',
    fix: 'Aim water stream at the glass wall of the vial, let it run down',
    color: 'text-red-400',
  },
  {
    mistake: 'Storing at room temperature',
    consequence: 'Reconstituted peptides degrade rapidly above 8°C — days not weeks',
    fix: 'Refrigerate immediately at 2–8°C after reconstitution',
    color: 'text-red-400',
  },
];

const storageGuide = [
  {
    condition: 'Lyophilized (unreconstituted)',
    temp: 'Room temperature',
    duration: '12–24 months (sealed)',
    note: 'Keep sealed and away from light and moisture',
    icon: <Package size={18} className="text-gray-500" />,
    bg: 'bg-zinc-500/10',
    border: 'border-zinc-600/30',
  },
  {
    condition: 'Reconstituted — Refrigerator',
    temp: '2–8°C',
    duration: '28 days',
    note: 'Standard use storage — label with date',
    icon: <Thermometer size={18} className="text-yellow-600" />,
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
  },
  {
    condition: 'Reconstituted — Freezer',
    temp: '−20°C',
    duration: 'Up to 3 months',
    note: 'Minimize freeze-thaw cycles — each cycle reduces potency',
    icon: <Thermometer size={18} className="text-yellow-600" />,
    bg: 'bg-yellow-50',
    border: 'border-yellow-400/40',
  },
];

const faqs = [
  {
    q: 'Can I use sterile water instead of bacteriostatic water?',
    a: 'For single immediate use only — if you plan to draw and inject the entire vial in one session. Sterile water has no preservative, so bacterial growth can begin within hours. BAC water (bacteriostatic water) contains 0.9% benzyl alcohol which prevents bacterial growth for 28 days, making it essential for multi-dose vials. If you only have sterile water available, reconstitute and use the entire vial within 24 hours and refrigerate between uses.',
  },
  {
    q: 'How do I know how much BAC water to add?',
    a: "It depends on your desired dose concentration. 2 mL is the most common choice for 5mg vials because it gives 250 mcg per 0.1 mL — the most convenient concentration for 250–500 mcg dose ranges. Use the dosing table above to find your exact concentration. If you're dosing 500 mcg twice daily, you'll use 0.2 mL per day, meaning a 5mg vial (reconstituted in 2 mL) gives you 10 days of supply.",
  },
  {
    q: "What if the powder doesn't fully dissolve?",
    a: "Gently swirl (never shake) for 1–2 minutes longer. Some peptides, particularly larger ones like TB-500 (5mg vials), can take several minutes. If slight cloudiness persists even after 2–3 minutes of swirling, it's usually fine — this can occur from slight temperature differences. If the solution is significantly cloudy, milky, or has visible particulates after 5 minutes, the peptide may be damaged or contaminated — contact your supplier. A properly reconstituted peptide solution should be clear or very slightly opalescent.",
  },
  {
    q: 'Can I reconstitute multiple peptides in the same vial?',
    a: "No — always keep peptides in separate vials. Mixing can cause molecular interactions that affect potency, create precipitates, or make dosing calculations impossible. If you're running a stack (e.g., BPC-157 and TB-500 together), reconstitute each peptide in its own vial and draw from each separately for each injection session. The few seconds of extra work prevents compounding errors and maintains the integrity of both peptides.",
  },
];

export default function ReconstitutePeptidesPage() {
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
            <ChevronRight size={14} className="text-gray-400" />
            <span className="badge badge-cyan">How-To</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="badge">Reconstitute Peptides</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">How to </span>
              <span className="gradient-text">Reconstitute Peptides</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Peptides arrive as lyophilized (freeze-dried) powder and must be reconstituted with
              bacteriostatic water before use. Done correctly, it takes under 2 minutes. Done
              wrong, you waste the vial. This guide covers every step with dosing math included.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products/bacteriostatic-water" className="btn-primary">
                Get Bacteriostatic Water
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
              { icon: <FlaskConical size={18} className="text-yellow-600" />, value: '2 mL', label: 'Standard BAC water volume' },
              { icon: <Syringe size={18} className="text-yellow-600" />, value: '0.1 mL', label: 'Standard draw per dose' },
              { icon: <Clock size={18} className="text-yellow-600" />, value: '28 days', label: 'Reconstituted stability' },
              { icon: <Thermometer size={18} className="text-yellow-600" />, value: '−20°C', label: 'Long-term storage' },
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

      {/* What You Need */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Supplies</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          What You Need
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          Gather everything before you start. Working with all supplies at hand prevents
          contamination from unnecessary movement during the process.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supplies.map((s) => (
            <div
              key={s.item}
              className="card p-5 border flex items-start gap-4"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
            >
              <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center shrink-0`}>
                {s.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{s.item}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Step-by-Step</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Reconstitution Process
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Follow these steps in order. Do not skip the swabbing step — it is the most commonly
            skipped and the most critical for preventing contamination.
          </p>
          <div className="relative">
            <div
              className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
              style={{ backgroundColor: 'var(--border)' }}
            />
            <div className="space-y-5">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 z-10"
                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border-bright)' }}
                  >
                    <span className="text-xs font-bold text-gray-900">{step.number}</span>
                  </div>
                  <div
                    className={`card flex-1 p-5 border ${step.border}`}
                    style={{ background: 'var(--bg)' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${step.bg}`} />
                      <h3 className={`font-bold text-sm ${step.color}`}>{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Dosing Calculator */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Dosing Calculator</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Reconstitution Calculator
        </h2>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Enter your vial size, BAC water volume, and desired dose to get exact draw amounts for
          your insulin syringe — no math required.
        </p>
        <ReconstitutionCalculator />
      </section>

      {/* Why BAC Water */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Critical Difference</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Why BAC Water — Not Sterile Water
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="card p-6 border border-cyan-500/30"
              style={{ background: 'var(--bg)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Bacteriostatic Water</p>
                  <p className="text-xs text-yellow-600">Recommended</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-yellow-600 mt-0.5 shrink-0" />
                  Contains 0.9% benzyl alcohol — prevents bacterial growth
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-yellow-600 mt-0.5 shrink-0" />
                  Safe for multi-dose vials over 28 days
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-yellow-600 mt-0.5 shrink-0" />
                  Standard in clinical and research settings for peptide reconstitution
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-yellow-600 mt-0.5 shrink-0" />
                  Benzyl alcohol is inert at these concentrations and does not affect peptide integrity
                </li>
              </ul>
            </div>
            <div
              className="card p-6 border border-red-500/20"
              style={{ background: 'var(--bg)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle size={20} className="text-red-400" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sterile Water</p>
                  <p className="text-xs text-red-400">Single-use only</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <AlertTriangle size={14} className="text-red-400 mt-0.5 shrink-0" />
                  No preservative — bacterial growth can begin within hours
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle size={14} className="text-red-400 mt-0.5 shrink-0" />
                  Safe only for single immediate use — entire vial must be used at once
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle size={14} className="text-red-400 mt-0.5 shrink-0" />
                  Reconstituted solution degrades rapidly — use within 24 hours maximum
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle size={14} className="text-red-400 mt-0.5 shrink-0" />
                  Wastes expensive peptide vials if you cannot use the full amount in one session
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Common Mistakes */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Avoid These</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Common Reconstitution Mistakes
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          These are the mistakes that waste expensive peptide vials or create safety risks. Review
          them before your first reconstitution.
        </p>
        <div className="space-y-4">
          {commonMistakes.map((m, i) => (
            <div
              key={i}
              className="card p-5 border border-red-500/10 grid sm:grid-cols-3 gap-4 items-start"
              style={{ background: 'var(--bg-card)' }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle size={14} className="text-red-400 shrink-0" />
                  <p className="font-bold text-gray-900 text-sm">{m.mistake}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 leading-relaxed">{m.consequence}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="text-yellow-600 font-semibold">Fix: </span>{m.fix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Storage Guide */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Storage</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Storage Guide After Reconstitution
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {storageGuide.map((s) => (
              <div
                key={s.condition}
                className={`card p-6 border ${s.border}`}
                style={{ background: 'var(--bg)' }}
              >
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                  {s.icon}
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{s.condition}</p>
                <p className="text-2xl font-extrabold text-gray-900 mb-1">{s.duration}</p>
                <p className="text-sm text-gray-500 mb-3">{s.temp}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
          <div
            className="card p-5 border border-violet-500/20 flex items-start gap-3"
            style={{ background: 'var(--bg)' }}
          >
            <Shield size={18} className="text-yellow-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900 text-sm mb-1">Freeze-thaw cycles</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                If freezing reconstituted peptides, avoid repeated freeze-thaw cycles. Each cycle of
                freezing and thawing can cause minor peptide bond stress. Best practice: divide your
                reconstituted vial into smaller aliquots (using sterile vials) before freezing, then
                thaw only one aliquot at a time for use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Syringe Guide */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Syringes</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Syringe and Needle Guide
        </h2>
        <p className="text-gray-500 mb-8 max-w-2xl">
          The right syringe makes reconstitution and injection accurate and comfortable. Using the
          wrong gauge increases pain and imprecision.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              label: 'Reconstitution syringe',
              value: '3 mL syringe',
              detail: 'Use for drawing BAC water — easier to control slow injection into peptide vial',
              color: 'text-yellow-600',
              bg: 'bg-yellow-50',
            },
            {
              label: 'Injection syringe',
              value: '29–31 gauge, 1 mL',
              detail: 'Insulin syringes — 29G for slightly faster draws, 31G for minimum injection pain',
              color: 'text-yellow-600',
              bg: 'bg-cyan-500/10',
            },
            {
              label: 'Recommended length',
              value: '0.5 inch (12.7 mm)',
              detail: 'Standard subcutaneous depth — sufficient for all common peptide injection sites',
              color: 'text-yellow-600',
              bg: 'bg-yellow-50',
            },
            {
              label: 'Syringe scale markings',
              value: 'IU markings (100 per mL)',
              detail: '10 IU = 0.1 mL — use this to measure doses in the dosing table above',
              color: 'text-yellow-600',
              bg: 'bg-cyan-500/10',
            },
            {
              label: 'Single-use rule',
              value: 'One syringe per injection',
              detail: 'Never reuse syringes — needles dull after first use, increasing pain and infection risk',
              color: 'text-yellow-600',
              bg: 'bg-yellow-50',
            },
            {
              label: 'Where to source',
              value: 'Same supplier as peptides',
              detail: 'Purchase from the same supplier for guaranteed compatibility and sterility standards',
              color: 'text-yellow-600',
              bg: 'bg-cyan-500/10',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="card p-5 border"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
            >
              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center mb-3`}>
                <Syringe size={15} className={item.color} />
              </div>
              <p className="text-xs text-gray-500 mb-1">{item.label}</p>
              <p className={`font-bold text-sm mb-2 ${item.color}`}>{item.value}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
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
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Mix Your Peptides?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Get pharmaceutical-grade bacteriostatic water for safe, reliable reconstitution — or
            read the injection guide for the next step after mixing.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/products/bacteriostatic-water" className="btn-primary">
            Get Bacteriostatic Water
            <ArrowRight size={16} />
          </Link>
          <Link href="/how-to/subcutaneous-injection-guide" className="btn-secondary">
            Subcutaneous Injection Guide
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/how-to/reconstitute-peptides" />
    </div>
  );
}
