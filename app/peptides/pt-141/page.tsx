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
  Brain,
  Users,
  AlertTriangle,
  Scale,
  Heart,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'PT-141 (Bremelanotide): Peptide for Libido and Sexual Health',
  description:
    'PT-141 (Bremelanotide) restores libido in men and women via melanocortin receptors — not hormones. Dosing, mechanism, side effects, and male vs female protocols.',
  keywords:
    'pt-141, bremelanotide, pt-141 peptide, pt-141 dosage, pt-141 for women, pt-141 side effects, peptide for libido, sexual health peptide',
  alternates: { canonical: 'https://www.peptidesclav.com/peptides/pt-141' },
  openGraph: {
    title: 'PT-141 (Bremelanotide): Peptide for Libido and Sexual Health',
    description:
      'PT-141 (Bremelanotide) restores libido in men and women via melanocortin receptors — not hormones. Dosing, mechanism, side effects, and male vs female protocols.',
    type: 'website',
    url: 'https://www.peptidesclav.com/peptides/pt-141',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PT-141 Bremelanotide Peptide for Libido and Sexual Health',
      },
    ],
  },
};

const pt141Faqs = [
  {
    q: 'Does PT-141 work for both men and women?',
    a: "Yes — PT-141 is one of the very few compounds with clinical trial evidence for both sexes. It was FDA approved specifically for premenopausal women with hypoactive sexual desire disorder (HSDD) under the name Vyleesi in 2019. Clinical trials also demonstrated meaningful improvements in male sexual desire and erectile function, particularly in cases where psychological or central factors were involved.",
  },
  {
    q: 'Why is PT-141 different from Viagra?',
    a: "Viagra (sildenafil) and Cialis (tadalafil) work by inhibiting PDE5, an enzyme that regulates blood flow. They enhance erection quality by improving vascular response — but only if desire and arousal are already present. PT-141 works entirely differently: it activates melanocortin-4 receptors (MC4R) in the brain's hypothalamus, directly stimulating the neural circuits responsible for desire. It creates the motivation to engage, not just the physical capacity.",
  },
  {
    q: 'How do I reduce PT-141 nausea?',
    a: "Nausea is the most common PT-141 side effect (~40% of users). To minimize it: take on an empty stomach at least 2 hours before dosing, consider 0.5mg ondansetron (Zofran, an anti-nausea medication) 30 minutes prior, and start with a lower test dose (0.5–1mg) to assess individual sensitivity before using the standard 1.75mg dose. Nausea typically peaks 30–60 minutes post-injection and resolves within 2–3 hours.",
  },
  {
    q: 'How often can I use PT-141?',
    a: 'No more than once per 72 hours (every 3 days). The FDA-approved Vyleesi label specifies this minimum interval, and research confirms that more frequent use increases both side effect burden and the risk of receptor desensitization, which reduces effectiveness over time. Treat PT-141 as an occasional therapeutic tool, not a daily supplement.',
  },
];

export default function PT141Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'PT-141 (Bremelanotide): Peptide for Libido and Sexual Health',
    description:
      'PT-141 (Bremelanotide) restores libido in men and women via melanocortin receptors — not hormones. Dosing, mechanism, side effects, and male vs female protocols.',
    url: 'https://www.peptidesclav.com/peptides/pt-141',
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
              <span className="badge badge-cyan">Sexual Health</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">PT-141</span>
              <span className="text-gray-900"> Bremelanotide</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              PT-141 (Bremelanotide) is the only peptide that addresses libido and sexual desire
              at the neurological level — activating melanocortin receptors in the brain rather
              than manipulating hormones or blood flow. It works for both men and women, and is
              FDA approved for women with hypoactive sexual desire disorder.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/healing" className="btn-primary">
                Explore Peptide Protocols
                <ArrowRight size={16} />
              </Link>
              <Link href="/guide" className="btn-secondary">
                Peptide Beginner Guide
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: <ShieldCheck size={18} className="text-yellow-600" />,
                value: 'FDA Approved',
                label: 'Vyleesi (2019) for women with HSDD',
              },
              {
                icon: <Brain size={18} className="text-yellow-600" />,
                value: 'CNS-Mediated',
                label: 'Acts on brain, not hormones',
              },
              {
                icon: <Zap size={18} className="text-yellow-600" />,
                value: '1.75mg',
                label: 'Standard subcutaneous dose',
              },
              {
                icon: <Clock size={18} className="text-yellow-600" />,
                value: '45–60 min',
                label: 'Onset time post-injection',
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

      {/* What is PT-141 */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-cyan mb-4 inline-block">Mechanism of Action</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              What Is PT-141?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              PT-141 (Bremelanotide) is a synthetic cyclic heptapeptide derived from Melanotan-II,
              a research compound originally developed for skin tanning. During clinical trials,
              researchers noticed unexpected — and significant — effects on sexual arousal and
              desire, leading to PT-141&apos;s development as a dedicated sexual health peptide.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              The compound acts as a melanocortin-4 receptor (MC4R) agonist in the central
              nervous system. The MC4R pathway, located in the hypothalamus, directly regulates
              sexual function, appetite, and energy expenditure. By activating these receptors,
              PT-141 stimulates neural circuits responsible for desire and arousal — without
              touching hormones like testosterone or estrogen.
            </p>
            <p className="text-gray-500 leading-relaxed">
              This mechanism is fundamentally different from every other libido treatment on the
              market. Rather than correcting a deficiency or enhancing blood flow, it directly
              activates the brain&apos;s natural desire pathway.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'MC4R Agonism',
                desc: 'Binds melanocortin-4 receptors in the hypothalamus, activating the central neural circuits that initiate sexual desire and arousal responses.',
                color: 'violet',
              },
              {
                title: 'Hormone-Independent',
                desc: 'Does not alter testosterone, estrogen, or other sex hormones. Works even in the presence of normal hormone levels — addressing desire that exists independently of hormonal deficiency.',
                color: 'cyan',
              },
              {
                title: 'Derived from Melanotan-II',
                desc: 'A cyclic peptide analog of alpha-MSH (melanocyte-stimulating hormone), structurally refined from Melanotan-II to eliminate tanning effects while preserving sexual function benefits.',
                color: 'violet',
              },
              {
                title: 'Central vs Peripheral Action',
                desc: 'Unlike PDE5 inhibitors (Viagra/Cialis) that act on peripheral blood vessels, PT-141 acts centrally in the brain — making it effective for psychogenic and desire-related dysfunction.',
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

      {/* PT-141 vs Traditional Treatments */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge mb-4 inline-block">Comparison</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              PT-141 vs Viagra / Cialis
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              PT-141 and PDE5 inhibitors address completely different aspects of sexual health.
              Understanding the distinction helps determine which is appropriate for your situation.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium w-1/3">Factor</th>
                  <th className="text-left py-3 px-4 text-yellow-600 font-semibold">
                    PT-141 (Bremelanotide)
                  </th>
                  <th className="text-left py-3 px-4 text-yellow-600 font-semibold">
                    Viagra / Cialis (PDE5i)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'var(--border)' }}>
                {[
                  {
                    factor: 'Primary Mechanism',
                    pt: 'Central nervous system (MC4R agonism)',
                    pde: 'Vascular (PDE5 inhibition)',
                  },
                  {
                    factor: 'Works for',
                    pt: 'Both men and women',
                    pde: 'Primarily men',
                  },
                  {
                    factor: 'Addresses Desire',
                    pt: 'Yes — creates desire directly',
                    pde: 'No — requires existing arousal',
                  },
                  {
                    factor: 'Addresses Performance',
                    pt: 'Indirectly (via arousal)',
                    pde: 'Yes — improves erection quality',
                  },
                  {
                    factor: 'FDA Approval',
                    pt: 'Yes — Vyleesi for women (HSDD)',
                    pde: 'Yes — erectile dysfunction',
                  },
                  {
                    factor: 'Duration of Effect',
                    pt: '6–12 hours',
                    pde: '4–6h (Viagra) / 36h (Cialis)',
                  },
                  {
                    factor: 'Administration',
                    pt: 'Subcutaneous injection',
                    pde: 'Oral tablet',
                  },
                  {
                    factor: 'Best For',
                    pt: 'Low desire, HSDD, psychological dysfunction',
                    pde: 'Erectile dysfunction, vascular causes',
                  },
                ].map((row) => (
                  <tr key={row.factor} className="hover:bg-white/2 transition-colors">
                    <td className="py-3 px-4 text-gray-500 font-medium">{row.factor}</td>
                    <td className="py-3 px-4 text-gray-700">{row.pt}</td>
                    <td className="py-3 px-4 text-gray-700">{row.pde}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Male Protocol */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Male */}
          <div className="card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-900/15 border border-violet-600/25 flex items-center justify-center">
                <Users size={18} className="text-yellow-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Male Protocol</h2>
                <p className="text-xs text-gray-500">Dosing for men</p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              {[
                {
                  label: 'Dose',
                  value: '1.0 – 1.75 mg',
                  note: 'Start at 1mg to assess tolerance; most men use 1.75mg',
                },
                {
                  label: 'Route',
                  value: 'Subcutaneous injection',
                  note: 'Abdomen or thigh — pinch the skin, inject at 45°',
                },
                {
                  label: 'Timing',
                  value: '45–60 minutes before',
                  note: 'Allow adequate time for CNS activation to occur',
                },
                {
                  label: 'Frequency',
                  value: 'Max 1x per 72 hours',
                  note: 'Minimum 3-day interval between doses',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl border"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                >
                  <div className="px-3 py-1 rounded-lg text-xs font-semibold shrink-0 bg-gray-900/20 text-yellow-500">
                    {item.label}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{item.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Men with erectile dysfunction may benefit from combining PT-141 with a low-dose PDE5
              inhibitor — PT-141 addresses desire, while the PDE5i addresses vascular response.
              Consult a healthcare provider before combining compounds.
            </p>
          </div>

          {/* Female */}
          <div className="card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center">
                <Heart size={18} className="text-yellow-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Female Protocol</h2>
                <p className="text-xs text-gray-500">Dosing for women (including FDA-approved Vyleesi)</p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              {[
                {
                  label: 'Dose',
                  value: '1.25 mg (FDA-approved)',
                  note: 'The Vyleesi-approved dose; some women use 1.75mg off-label',
                },
                {
                  label: 'Route',
                  value: 'Subcutaneous injection',
                  note: 'Abdomen or thigh — same technique as male protocol',
                },
                {
                  label: 'Timing',
                  value: '45 minutes before',
                  note: 'At least 45 minutes prior to anticipated sexual activity',
                },
                {
                  label: 'Indication',
                  value: 'HSDD — premenopausal women',
                  note: 'Hypoactive sexual desire disorder; effective in perimenopause as well',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl border"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                >
                  <div className="px-3 py-1 rounded-lg text-xs font-semibold shrink-0 bg-cyan-500/20 text-cyan-300">
                    {item.label}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{item.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              PT-141 is clinically validated for premenopausal women with HSDD and has shown
              effectiveness in perimenopausal and postmenopausal contexts as well. Unlike
              testosterone therapy or flibanserin (Addyi), onset is rapid and on-demand.
            </p>
          </div>
        </div>
      </section>

      {/* Side Effects */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge mb-4 inline-block">Safety Profile</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              PT-141 Side Effects
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              PT-141 has a well-studied side effect profile from both research trials and
              post-marketing data from its FDA approval as Vyleesi. Most effects are transient
              and manageable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: 'Nausea',
                severity: 'Most Common (~40%)',
                severityColor: 'red',
                desc: 'Peaks 30–60 minutes post-injection, resolves within 2–3 hours. Take on an empty stomach and consider 0.5mg ondansetron (anti-nausea) 30 min prior to significantly reduce incidence.',
              },
              {
                title: 'Flushing',
                severity: 'Common',
                severityColor: 'amber',
                desc: 'Skin warmth and redness, typically in face and neck. Transient — usually resolves within 1–2 hours. Not dangerous but can be uncomfortable. More common at higher doses.',
              },
              {
                title: 'Hyperpigmentation',
                severity: 'Less Common',
                severityColor: 'blue',
                desc: 'Transient darkening of skin at the injection site, or in areas exposed to sun. Usually temporary. Avoid excessive sun exposure during PT-141 use. Resolves after discontinuation.',
              },
              {
                title: 'Mild Headache',
                severity: 'Occasional',
                severityColor: 'blue',
                desc: 'Typically mild and self-limiting, occurring 1–3 hours post-dose. Staying well-hydrated before dosing reduces incidence. Does not require medication management in most cases.',
              },
            ].map((item) => (
              <div key={item.title} className="card p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.severityColor === 'red'
                        ? 'bg-red-500/15 text-red-400'
                        : item.severityColor === 'amber'
                        ? 'bg-amber-500/15 text-yellow-600'
                        : 'bg-blue-500/15 text-blue-400'
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl border p-6"
            style={{ background: 'var(--bg)', borderColor: 'var(--border-bright)' }}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-yellow-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-yellow-600 mb-2">Nausea Management Protocol</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To significantly reduce PT-141 nausea: (1) Eat nothing for at least 2 hours before
                  dosing — food in the stomach increases nausea frequency. (2) Take 0.5–1mg ondansetron
                  (OTC anti-nausea) 30 minutes before injection. (3) Start with a lower test dose
                  (0.5–1mg) on your first use to characterize your individual response before
                  progressing to the standard 1.75mg dose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Helps */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Scale size={28} className="text-yellow-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Who Benefits Most from PT-141?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            PT-141 is uniquely positioned for conditions where desire and motivation are the
            primary concern — not physical performance or hormonal imbalance.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <Brain size={20} className="text-yellow-600" />,
              iconBg: 'bg-gray-900/15 border-violet-600/25',
              title: 'Low Libido (Both Sexes)',
              desc: 'For men and women experiencing reduced sexual desire without a clear hormonal cause, PT-141 directly activates the brain pathways responsible for desire. Often effective when standard interventions have failed.',
            },
            {
              icon: <Heart size={20} className="text-yellow-600" />,
              iconBg: 'bg-cyan-500/15 border-cyan-500/25',
              title: 'HSDD in Women',
              desc: 'Hypoactive sexual desire disorder affects an estimated 10% of premenopausal women. PT-141 is the only FDA-approved on-demand treatment for HSDD, with clinical trials showing significant improvements in desire and distress scores.',
            },
            {
              icon: <Zap size={20} className="text-yellow-600" />,
              iconBg: 'bg-gray-900/15 border-violet-600/25',
              title: 'Antidepressant-Induced Dysfunction',
              desc: 'SSRIs and SNRIs commonly cause sexual side effects by suppressing dopamine and other neurotransmitters. PT-141 operates through a separate pathway (melanocortin system), making it effective even in the presence of antidepressant use.',
            },
            {
              icon: <ShieldCheck size={20} className="text-yellow-600" />,
              iconBg: 'bg-cyan-500/15 border-cyan-500/25',
              title: 'Stress-Related Desire Loss',
              desc: 'Chronic stress suppresses libido through cortisol pathways that down-regulate hypothalamic sexual circuits. PT-141 bypasses these suppressive signals by directly activating MC4R, restoring desire independent of stress hormone levels.',
            },
            {
              icon: <Users size={20} className="text-yellow-600" />,
              iconBg: 'bg-gray-900/15 border-violet-600/25',
              title: 'Hormonal Transitions',
              desc: 'Perimenopause, post-partum, and post-surgical hormonal changes often involve libido loss that is only partially addressed by hormone replacement. PT-141 provides a complementary, non-hormonal option that works alongside HRT.',
            },
            {
              icon: <CheckCircle2 size={20} className="text-yellow-600" />,
              iconBg: 'bg-cyan-500/15 border-cyan-500/25',
              title: 'Psychogenic Erectile Dysfunction',
              desc: 'For men whose erectile dysfunction has a psychological or central nervous system component (performance anxiety, desire deficit) rather than purely vascular causes, PT-141 addresses the upstream driver that PDE5 inhibitors miss.',
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

      {/* CTA */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-2xl border p-8 flex flex-col"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
            >
              <span className="badge mb-4 inline-block w-fit">Peptide Education</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Explore All Peptide Protocols
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                PT-141 is one piece of the broader peptide landscape. Explore our comprehensive
                healing and optimization protocols to understand how peptides work synergistically
                for full-body health.
              </p>
              <Link href="/healing" className="btn-primary w-fit">
                Explore Healing Protocols
                <ArrowRight size={16} />
              </Link>
            </div>
            <div
              className="rounded-2xl border p-8 flex flex-col"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
            >
              <span className="badge badge-cyan mb-4 inline-block w-fit">Start Here</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                New to Peptides?
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                Our beginner&apos;s guide covers everything — reconstitution, injection technique,
                sourcing, cycling, and which peptides to start with based on your goals. No
                prior experience required.
              </p>
              <Link href="/guide" className="btn-secondary w-fit">
                Read the Beginner Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle size={22} className="text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">PT-141 FAQ</h2>
          </div>
          <div className="space-y-4">
            {pt141Faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border p-5"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-10 sm:py-20 text-center"
        style={{ backgroundColor: 'var(--bg-card)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Learn More About Peptide Therapy?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            From sexual health to healing, sleep, and body composition — explore our complete
            peptide education library and find the right protocol for your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/healing" className="btn-primary">
              Explore Peptide Protocols
              <ArrowRight size={16} />
            </Link>
            <Link href="/guide" className="btn-secondary">
              Beginner Guide
            </Link>
          </div>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/peptides/pt-141" />
    </div>
  );
}
