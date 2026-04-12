import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  ShieldCheck,
  Syringe,
  Trash2,
  XCircle,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: "How to Inject Peptides Subcutaneously: Beginner's Step-by-Step Guide",
  description:
    'Subcutaneous peptide injection guide — syringe selection, injection sites, angle, technique, and post-injection care. For beginners and first-time users.',
  keywords:
    'how to inject peptides, subcutaneous injection guide, peptide injection technique, insulin syringe for peptides, peptide injection sites, subq injection peptides',
  alternates: { canonical: 'https://www.peptidesclav.com/how-to/subcutaneous-injection-guide' },
  openGraph: {
    title: "How to Inject Peptides Subcutaneously: Beginner's Step-by-Step Guide",
    description:
      'Subcutaneous peptide injection guide — syringe selection, injection sites, angle, technique, and post-injection care. For beginners and first-time users.',
    type: 'website',
    url: 'https://www.peptidesclav.com/how-to/subcutaneous-injection-guide',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Subcutaneous Peptide Injection Guide' }],
  },
};

const steps = [
  {
    step: 1,
    title: 'Wash your hands',
    body: 'Wash hands thoroughly with soap and warm water for at least 20 seconds. Dry with a clean towel. This is the single most important contamination-prevention step.',
  },
  {
    step: 2,
    title: 'Swab vial and injection site',
    body: 'Wipe the rubber stopper of your peptide vial with a fresh alcohol swab. Swab the injection site on your skin with a second alcohol swab. Allow both to air-dry for 10–15 seconds — wet alcohol slightly increases sting.',
  },
  {
    step: 3,
    title: 'Draw your dose and purge air bubbles',
    body: 'Draw back the plunger to your target volume. Invert the vial, insert the needle through the stopper, and push the air out of the syringe first. Then slowly withdraw your dose. Tap the syringe and gently depress the plunger to move any remaining bubbles to the tip, then expel them.',
  },
  {
    step: 4,
    title: 'Confirm dose volume',
    body: 'With the needle pointing up, verify the dose line on the barrel matches your target. Double-check before proceeding — it takes two seconds and is worth doing every time.',
  },
  {
    step: 5,
    title: 'Pinch the skin',
    body: 'Using your non-dominant hand, pinch 1–2 inches of skin and subcutaneous fat firmly between your thumb and forefinger at the injection site. Lifting the fat away from the underlying muscle is what makes subcutaneous injection reliably subcutaneous.',
  },
  {
    step: 6,
    title: 'Insert needle at 45°',
    body: 'In one smooth, confident motion, insert the needle at a 45° angle. For individuals with more body fat, a 90° angle also works well. Hesitant, slow insertions are more uncomfortable — a single decisive motion is better.',
  },
  {
    step: 7,
    title: 'Release pinch and depress plunger slowly',
    body: 'Release the skin pinch after needle insertion. Slowly depress the plunger over 3–5 seconds. Rapid injection is the most common cause of burning or discomfort — slow and steady every time.',
  },
  {
    step: 8,
    title: 'Withdraw and apply gentle pressure',
    body: 'Withdraw the needle smoothly at the same angle it entered. Immediately apply gentle pressure to the injection site with a clean swab or finger for 10–15 seconds. Do not rub — rubbing can cause bruising and distribute the peptide unevenly.',
  },
  {
    step: 9,
    title: 'Dispose of the needle immediately',
    body: 'Cap the needle (using the one-hand scoop technique) and place it directly into your sharps container. Never recap with two hands — this is how accidental needle-sticks occur. Never leave used needles uncontained.',
  },
];

const injectionSites = [
  {
    name: 'Abdomen',
    tag: 'Preferred',
    tagColor: 'badge-cyan',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-violet-500/20',
    details: [
      '2 inches away from the navel in any direction',
      'Largest accessible fat depot on most people',
      'Easy to visualise and access',
      'Pinch well away from the belly button',
      'Avoid the midline (linea alba)',
    ],
  },
  {
    name: 'Outer Thigh',
    tag: 'Alternative',
    tagColor: '',
    color: 'text-yellow-600',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    details: [
      'Lateral (outer) quadriceps area',
      'Good alternative for those with low abdominal fat',
      'Avoid the inner thigh — too vascular',
      'Easier to access with one hand than the abdomen for some',
    ],
  },
  {
    name: 'Love Handles / Flanks',
    tag: 'Lean Individuals',
    tagColor: '',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-violet-500/20',
    details: [
      'Posterior-lateral waist area',
      'Useful for lean individuals with limited abdominal fat',
      'Can be slightly harder to access without assistance',
      'Good rotation option when abdomen sites are overused',
    ],
  },
  {
    name: 'Site Rotation',
    tag: 'Always Required',
    tagColor: '',
    color: 'text-yellow-600',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    details: [
      'Never inject the same spot twice in a row',
      'Rotate systematically across all available sites',
      'Prevents lipodystrophy (localised fat loss or hardening)',
      'Keeps absorption consistent across your protocol',
    ],
  },
];

const mistakes = [
  {
    mistake: 'Injecting too fast',
    fix: 'Depress the plunger over 3–5 seconds minimum. Rapid injection forces fluid into tissue under pressure — this causes the burning sensation most beginners associate with injections.',
  },
  {
    mistake: 'Reusing needles',
    fix: 'Insulin syringes are single-use. The tip microscopically deforms on first use. Reused needles are duller, cause more tissue trauma, and carry contamination risk.',
  },
  {
    mistake: 'Skipping the alcohol swab',
    fix: 'Swab both the vial stopper and injection site every time. Subcutaneous fat is poorly vascularised — infections here are slow to resolve. Prevention is simple.',
  },
  {
    mistake: 'Injecting into muscle',
    fix: 'Pinch the skin firmly before inserting — this separates subcutaneous fat from muscle. Without pinching, a 45° angle may still reach muscle in lean individuals. Feel for resistance; muscle is firmer than fat.',
  },
  {
    mistake: 'Not rotating sites',
    fix: 'Repeated injections at the same site cause lipodystrophy — localised fat atrophy or nodule formation that affects absorption and appearance. Rotate systematically.',
  },
  {
    mistake: 'Leaving air bubbles in syringe',
    fix: 'Small air bubbles in subcutaneous injection are not dangerous (unlike IV), but they displace dose volume. Tap and expel bubbles before every injection for dosing accuracy.',
  },
];

const doseTable = [
  { units: '5 units', ml: '0.05 mL', example: 'Common for SNAP-8, Epithalon low dose' },
  { units: '10 units', ml: '0.1 mL', example: 'BPC-157 250 mcg (typical reconstitution)' },
  { units: '20 units', ml: '0.2 mL', example: 'BPC-157 500 mcg or GHK-Cu 1 mg' },
  { units: '50 units', ml: '0.5 mL', example: 'TB-500 2.5 mg (typical reconstitution)' },
];

const faqs = [
  {
    q: 'Does subcutaneous injection hurt?',
    a: 'With a 31g needle and correct technique, most users describe it as nearly painless — comparable to a light pinch lasting less than a second. The needle is shorter and finer than any standard medical needle. The most common cause of discomfort is injecting too quickly (fix: slow plunger depression over 3–5 seconds) or not allowing the alcohol to dry fully before injecting.',
  },
  {
    q: 'What happens if I accidentally inject into muscle?',
    a: 'Not dangerous — muscle is well perfused and the peptide will absorb, just more rapidly than intended. For most peptides, subcutaneous is still preferred because the slower absorption from fat produces more sustained plasma levels. If you regularly find yourself in muscle, increase your pinch before inserting to ensure you are lifting enough fat.',
  },
  {
    q: 'How do I get rid of air bubbles?',
    a: 'After drawing your dose, hold the syringe vertically with the needle pointing up. Tap the barrel firmly with your finger — bubbles will migrate to the top. Gently press the plunger until the bubbles exit through the needle tip. A tiny drop of liquid confirms the tip is clear. Small air bubbles in subcutaneous injection are not medically dangerous (unlike intravenous administration), but removing them ensures dose accuracy.',
  },
  {
    q: 'Can I inject through clothing?',
    a: 'No. Proper injection requires alcohol-swabbed, exposed skin for sterility. Injecting through fabric introduces fibres into the injection site and prevents proper site preparation. Always expose the injection site, swab, and allow to dry before proceeding.',
  },
];

export default function SubcutaneousInjectionGuidePage() {
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
            <Link href="/how-to/reconstitute-peptides" className="badge hover:text-gray-900 transition-colors">How-To</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="badge badge-cyan">Injection Guide</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">How to </span>
              <span className="gradient-text">Inject Peptides</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Subcutaneous peptide injection sounds intimidating — it is not. With a 31-gauge
              insulin syringe and the correct technique, most users describe the experience as
              barely noticeable. This guide covers everything: site selection, drawing your dose,
              injection angle, and disposal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/how-to/reconstitute-peptides" className="btn-primary">
                Reconstitution Guide First
                <ArrowRight size={16} />
              </Link>
              <Link href="/products/bacteriostatic-water" className="btn-secondary">
                Bacteriostatic Water
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Syringe size={18} className="text-yellow-600" />, value: '29–31g', label: 'Recommended needle gauge' },
              { icon: <ShieldCheck size={18} className="text-yellow-600" />, value: '45°', label: 'Optimal injection angle' },
              { icon: <CheckCircle2 size={18} className="text-yellow-600" />, value: '<30 sec', label: 'Time per injection' },
              { icon: <ShieldCheck size={18} className="text-yellow-600" />, value: 'Essentially painless', label: 'With correct technique' },
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

      {/* Why subcutaneous */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-cyan mb-4 inline-block">Why SubQ?</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Subcutaneous, Not Intramuscular?
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Peptides are biologically active at very small doses, and their therapeutic effect
                depends on sustained plasma levels rather than a sharp spike. Subcutaneous
                injection delivers the peptide into fat tissue, from which it absorbs slowly and
                steadily into the bloodstream — producing the stable plasma concentrations that
                most peptide protocols are designed around.
              </p>
              <p>
                Intramuscular injection (into muscle tissue) is much more vascular — the peptide
                absorbs too quickly, producing a brief spike followed by rapid clearance. This
                misses the sustained signalling window that drives most of the therapeutic
                benefits.
              </p>
              <p>
                There is one notable exception: BPC-157 is sometimes injected intramuscularly at
                a site adjacent to the injury when treating musculoskeletal injuries. The local
                tissue concentration benefit in this context outweighs the systemic absorption
                profile consideration.
              </p>
            </div>
          </div>

          {/* Supply checklist */}
          <div>
            <span className="badge mb-4 inline-block">What You Need</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Supply Checklist
            </h2>
            <div className="space-y-3">
              {[
                {
                  item: 'Reconstituted peptide vial',
                  note: 'Stored in fridge, not yet frozen',
                  required: true,
                },
                {
                  item: '29–31g insulin syringe (1 mL)',
                  note: 'One per injection — single use only',
                  required: true,
                },
                {
                  item: 'Alcohol swabs',
                  note: 'Two per injection: one for vial, one for skin',
                  required: true,
                },
                {
                  item: 'Clean, flat surface',
                  note: 'Prepare your syringe without rushing',
                  required: true,
                },
                {
                  item: 'Sharps container',
                  note: 'For safe needle disposal — required',
                  required: true,
                },
              ].map((s) => (
                <div
                  key={s.item}
                  className="flex items-start gap-3 p-4 rounded-xl border"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <CheckCircle2 size={16} className="text-yellow-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{s.item}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mt-4 p-4 rounded-xl border text-sm text-gray-500"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <strong className="text-gray-900">Not yet reconstituted?</strong> You need to add
              bacteriostatic water to your lyophilised (powder) peptide before injecting.{' '}
              <Link href="/how-to/reconstitute-peptides" className="text-yellow-600 hover:text-yellow-500 transition-colors">
                Read the reconstitution guide first →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Injection sites */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Site Selection</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Injection Sites
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Choose sites with adequate subcutaneous fat. Rotate systematically — never inject the
            same spot twice consecutively.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {injectionSites.map((site) => (
              <div
                key={site.name}
                className="card p-5 border flex flex-col"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <div className={`w-10 h-10 rounded-xl ${site.bg} border ${site.border} flex items-center justify-center mb-3`}>
                  <Syringe size={18} className={site.color} />
                </div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <h3 className="font-bold text-gray-900 text-sm">{site.name}</h3>
                  {site.tagColor ? (
                    <span className={`badge ${site.tagColor} text-[10px]`}>{site.tag}</span>
                  ) : (
                    <span className="badge text-[10px]">{site.tag}</span>
                  )}
                </div>
                <ul className="space-y-2 flex-1">
                  {site.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={12} className={`${site.color} mt-0.5 shrink-0`} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Step-by-step */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Step-by-Step</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Injection Technique — Step by Step
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          Follow these steps in order every time. It takes under 30 seconds once you have done it
          a few times.
        </p>
        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ backgroundColor: 'var(--border)' }}
          />
          <div className="space-y-5">
            {steps.map((s, i) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 z-10 font-bold text-sm"
                  style={{
                    background: 'var(--bg)',
                    borderColor: i % 2 === 0 ? 'rgb(124 58 237 / 0.4)' : 'rgb(6 182 212 / 0.4)',
                    color: i % 2 === 0 ? 'rgb(167 139 250)' : 'rgb(34 211 238)',
                  }}
                >
                  {s.step}
                </div>
                <div
                  className="card flex-1 p-5 border"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: i % 2 === 0 ? 'rgb(124 58 237 / 0.2)' : 'rgb(6 182 212 / 0.2)',
                  }}
                >
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Troubleshooting</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Common Beginner Mistakes
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Every issue beginners encounter has a straightforward fix. These six cover 95% of
            problems.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {mistakes.map((m) => (
              <div
                key={m.mistake}
                className="card p-5 border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                  <h3 className="font-bold text-gray-900 text-sm">{m.mistake}</h3>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-yellow-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-500 leading-relaxed">{m.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* What to expect + Dose table */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* What to expect */}
          <div>
            <span className="badge badge-cyan mb-4 inline-block">Normal vs. Concerning</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              What to Expect After Injection
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Normal — no action needed
                </p>
                <div className="space-y-2">
                  {[
                    'Minimal to zero pain — comparable to a light pinch',
                    'Small lump or bleb at site — absorbs within 20–30 minutes',
                    'Mild redness at the site — resolves within an hour',
                    'Tiny drop of blood — apply gentle pressure',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                      <CheckCircle2 size={14} className="text-yellow-600 mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="p-4 rounded-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'rgb(239 68 68 / 0.2)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle size={16} className="text-red-400" />
                  <p className="text-sm font-semibold text-red-400">Seek medical advice if:</p>
                </div>
                <div className="space-y-1.5">
                  {[
                    'Fever or chills following injection',
                    'Significant swelling, warmth, or hardness at site',
                    'Pus or discharge from injection site',
                    'Red streaks radiating from the injection site',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                      <XCircle size={13} className="text-red-400 mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dose drawing table */}
          <div>
            <span className="badge mb-4 inline-block">Quick Reference</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Dose Drawing Reference
            </h2>
            <p className="text-gray-500 mb-5 text-sm leading-relaxed">
              Insulin syringes are labelled in units (U). Use this table to convert your dose
              volume (mL) to the unit marking on the barrel. Assumes a standard 1 mL syringe
              marked to 100 units.
            </p>
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: 'var(--border)' }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-card)' }}>
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wider">
                      Syringe Units
                    </th>
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wider">
                      Volume (mL)
                    </th>
                    <th className="text-left px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">
                      Example Use
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {doseTable.map((row, i) => (
                    <tr
                      key={row.units}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'var(--bg)' : 'var(--bg-card)',
                        borderTop: '1px solid var(--border)',
                      }}
                    >
                      <td className="px-4 py-3 font-bold text-gray-900">{row.units}</td>
                      <td className="px-4 py-3 text-yellow-600 font-semibold">{row.ml}</td>
                      <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Actual dose in mcg/mg depends on reconstitution volume. See each product page or the
              reconstitution guide for peptide-specific dosing.
            </p>
          </div>
        </div>
      </section>

      {/* Needle disposal */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                <Trash2 size={18} className="text-yellow-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Needle Disposal</h2>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Used needles must go into a designated sharps container — never into regular household
              trash or recycling. A punctured bin liner can cause accidental needle-stick injuries to
              waste handlers. This is a legal requirement in most jurisdictions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Use a sharps container',
                  body: 'Hard plastic, puncture-resistant containers designed for this purpose. Available at most pharmacies for a few dollars. Fill to the marked fill line — never overfill.',
                },
                {
                  title: 'Pharmacy disposal programmes',
                  body: 'Many pharmacies accept full sharps containers for safe disposal at no cost. Check your local pharmacy — this is the easiest disposal route for most users.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card p-5 border"
                  style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
                >
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* FAQ */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={22} className="text-yellow-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card p-6 border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
              >
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Protocol?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Before your first injection, make sure your peptide is properly reconstituted. Read the
            prerequisite guide, or go directly to the bacteriostatic water product page for
            everything you need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/how-to/reconstitute-peptides" className="btn-primary">
              Reconstitution Guide
              <ArrowRight size={16} />
            </Link>
            <Link href="/products/bacteriostatic-water" className="btn-secondary">
              Bacteriostatic Water
            </Link>
          </div>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/how-to/subcutaneous-injection-guide" />
    </div>
  );
}
