import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Activity,
  Flame,
  Clock,
  TrendingUp,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: { absolute: 'TB-500 (Thymosin Beta-4): Complete Systemic Healing Peptide Guide 2026' },
  description:
    'TB-500 (Thymosin Beta-4 fragment) — complete guide covering mechanism, dosing, loading vs maintenance protocols, and how to stack with BPC-157 for maximum healing.',
  keywords:
    'tb-500, thymosin beta-4, tb-500 dosage, tb-500 peptide, tb-500 vs bpc-157, tb-500 healing, tb-500 protocol, tb-500 loading phase, tb500 tendon',
  alternates: { canonical: 'https://www.peptidesclav.com/peptides/tb-500' },
  openGraph: {
    title: 'TB-500 (Thymosin Beta-4): Complete Systemic Healing Peptide Guide 2026',
    description:
      'TB-500 is the gold-standard systemic healing peptide. Full guide: mechanism, loading protocol, stacking with BPC-157, and injury-specific dosing.',
    type: 'website',
    url: 'https://www.peptidesclav.com/peptides/tb-500',
    siteName: 'PeptidesClav',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TB-500 Thymosin Beta-4 Healing Peptide Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TB-500 (Thymosin Beta-4): Complete Systemic Healing Peptide Guide 2026',
    description: 'TB-500 is the gold-standard systemic healing peptide. Loading protocol, stacking with BPC-157, and injury-specific dosing.',
  },
};

const tb500Faqs = [
  {
    q: 'What is the difference between TB-500 and Thymosin Beta-4?',
    a: 'TB-500 is a synthetic peptide fragment derived from the full Thymosin Beta-4 (Tβ4) protein. The fragment contains the actin-binding domain of Tβ4 — the region responsible for its cell migration and repair signaling — making it highly bioactive at much lower doses than the full protein. Full Thymosin Beta-4 is expensive to produce; TB-500 delivers the core therapeutic action at a fraction of the cost.',
  },
  {
    q: 'What is the TB-500 loading phase and do I need it?',
    a: 'The loading phase (weeks 1–2 at 7.5–10mg/week) saturates the body\'s actin-binding reservoirs and establishes baseline systemic levels quickly. It is most valuable for acute injuries where you want rapid onset — for chronic conditions or preventive use, jumping straight to the 5mg/week maintenance dose is reasonable. For serious acute tears or post-surgical recovery, the loading phase consistently produces faster results.',
  },
  {
    q: 'Where should I inject TB-500?',
    a: 'Unlike BPC-157, which is often injected near the injury site, TB-500 works systemically through the bloodstream and should always be injected subcutaneously — abdomen, thigh, or upper arm. Proximity to the injury does not matter for TB-500. The peptide distributes throughout the body regardless of injection site.',
  },
  {
    q: 'Can I run TB-500 and BPC-157 simultaneously?',
    a: 'Yes — this is the recommended approach for most musculoskeletal injuries. The two peptides work through entirely different mechanisms with no known interactions. BPC-157 handles local tissue repair, NO pathway signaling, and gut healing. TB-500 manages systemic inflammation, actin-mediated cell migration, and fibrosis reduction. Running them simultaneously covers every axis of the healing cascade at once.',
  },
  {
    q: 'How quickly does TB-500 work?',
    a: 'Most users notice reduced systemic inflammation and improved range of motion within 1–2 weeks of starting. Pain reduction in soft tissue injuries typically begins at 2–3 weeks. Structural tissue repair and measurable improvements in flexibility continue through the 8–12 week protocol duration. Anti-fibrotic effects (scar tissue reduction) may take the full 12 weeks to manifest.',
  },
  {
    q: 'Is TB-500 suitable for chronic injuries?',
    a: 'TB-500 is particularly well-suited for chronic overuse injuries where poor vascularity and accumulated fibrosis have stalled natural healing. Its pro-angiogenic (new blood vessel) and anti-fibrotic properties directly address the two main barriers to chronic injury resolution. Many users with years-old tendinopathies or ligament issues report significant improvement during a 12-week TB-500 protocol.',
  },
];

export default function TB500Page() {
  const tb500Product = products.find((p) => p.slug === 'tb-500');
  const bpc157Product = products.find((p) => p.slug === 'bpc-157');
  const healingStack = getStackById('ultimate-healing');
  const wolverineStack = getStackById('wolverine-healing');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'TB-500 (Thymosin Beta-4): Complete Systemic Healing Peptide Guide 2026',
    description:
      'TB-500 complete guide — mechanism, loading protocol, BPC-157 combination, and injury-specific dosing.',
    url: 'https://www.peptidesclav.com/peptides/tb-500',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tb500Faqs.map((f) => ({
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
            <Link href="/healing" className="hover:text-yellow-600 transition-colors">Healing</Link>
            <span>/</span>
            <span style={{ color: '#1f2937' }}>TB-500</span>
          </nav>
        </div>
      </div>

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
              <ChevronRight size={14} className="text-gray-800" />
              <span className="badge badge-yellow">Healing & Recovery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">TB-500</span>
              <span className="text-gray-900"> (Thymosin Beta-4)</span>
            </h1>
            <p className="text-gray-700 text-sm font-medium mb-3">Chemical name: Thymosin Beta-4 fragment (Tβ4)</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
              TB-500 is the most potent systemic healing peptide available. Unlike localized compounds,
              it travels through the bloodstream and initiates repair cascades in every tissue simultaneously —
              reducing fibrosis, restoring flexibility, and accelerating recovery from chronic and acute injuries alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/ultimate-healing" className="btn-primary">
                View Healing Stack <ArrowRight size={16} />
              </Link>
              <Link href="/products/tb-500" className="btn-secondary">
                Shop TB-500
              </Link>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Activity size={18} className="text-yellow-600" />, value: 'Systemic', label: 'Full-body distribution' },
              { icon: <Clock size={18} className="text-yellow-600" />, value: '8–12 wks', label: 'Standard protocol' },
              { icon: <ShieldCheck size={18} className="text-yellow-600" />, value: '5mg/wk', label: 'Maintenance dose' },
              { icon: <CheckCircle2 size={18} className="text-yellow-600" />, value: 'Anti-fibrotic', label: 'Scar tissue reduction' },
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

      {/* What is TB-500 */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-yellow mb-4 inline-block">Mechanism of Action</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">What Is TB-500?</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              TB-500 is a synthetic 17-amino-acid peptide fragment derived from Thymosin Beta-4 — a naturally
              occurring 43-amino-acid protein present in virtually every human cell at baseline. It is one of
              the most abundant intracellular peptides in mammals, playing a central role in actin cytoskeleton
              regulation, cell motility, and tissue homeostasis.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              The TB-500 fragment contains the actin-binding domain of the full Tβ4 protein — specifically
              the LKKTETQ sequence responsible for G-actin sequestration. This is the region that drives
              cell migration, proliferation, and the upstream signaling that triggers systemic healing cascades.
              By isolating this domain, TB-500 delivers the core therapeutic mechanism at significantly
              lower effective doses than the full parent protein.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              Unlike most healing peptides that exert primarily local effects at the injection site, TB-500
              distributes systemically through the bloodstream. This is its defining clinical advantage:
              a single subcutaneous injection initiates repair signaling throughout every tissue in the body
              simultaneously — tendons, muscles, ligaments, fascia, and cardiac tissue all respond concurrently.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card p-5 border-l-2" style={{ borderLeftColor: '#d97706' }}>
              <div className="flex items-center gap-2 mb-2">
                <Activity size={16} className="text-yellow-600" />
                <h3 className="text-gray-900 font-semibold">Actin Sequestration</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                TB-500 binds G-actin with high affinity, increasing the pool of unpolymerized actin available
                for cell migration. This directly accelerates the movement of repair cells (fibroblasts,
                myoblasts) to damaged tissue — the rate-limiting step in tissue repair.
              </p>
            </div>
            <div className="card p-5 border-l-2" style={{ borderLeftColor: '#0891b2' }}>
              <div className="flex items-center gap-2 mb-2">
                <Flame size={16} className="text-yellow-600" />
                <h3 className="text-gray-900 font-semibold">Anti-Inflammatory Cytokine Modulation</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                TB-500 downregulates pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) while upregulating
                anti-inflammatory mediators. This creates an environment conducive to tissue repair rather
                than chronic inflammation — the state many overuse injuries are stuck in.
              </p>
            </div>
            <div className="card p-5 border-l-2" style={{ borderLeftColor: '#d97706' }}>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-yellow-600" />
                <h3 className="text-gray-900 font-semibold">Angiogenesis & Myogenesis</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                TB-500 promotes the formation of new blood vessels (angiogenesis) to restore vascularity
                in damaged tissue, and stimulates myogenesis (new muscle fiber formation) — addressing
                both the structural and vascular components of injury recovery.
              </p>
            </div>
            <div className="card p-5 border-l-2" style={{ borderLeftColor: '#0891b2' }}>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={16} className="text-yellow-600" />
                <h3 className="text-gray-900 font-semibold">Anti-Fibrotic Action</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                TB-500 reduces the deposition of fibrous scar tissue during healing — one of its most
                clinically significant effects. Fibrosis restricts range of motion and creates weak
                tissue architecture. TB-500 promotes organized collagen deposition over disorganized scar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Research Findings */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="badge badge-cyan mb-4 inline-block">Research Evidence</span>
          <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What the Research Shows</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            TB-500 / Thymosin Beta-4 is one of the most researched healing peptides in the literature,
            with peer-reviewed studies spanning cardiac repair, musculoskeletal recovery, corneal healing,
            neuroprotection, and hair follicle biology. Key findings include:
          </p>

          <div className="space-y-4 mb-10">
            {[
              {
                title: 'Accelerated wound closure and tissue remodeling',
                body: 'Multiple studies demonstrate significantly faster wound healing and improved tissue architecture compared to controls, attributed to TB-500\'s pro-migratory effects on epithelial and endothelial cells.',
              },
              {
                title: 'Cardiac tissue protection after ischemia',
                body: 'In myocardial infarction animal models, TB-500 reduced cardiac scar formation, promoted cardiomyocyte survival, and significantly improved post-infarction cardiac function — one of the most striking findings in Tβ4 research.',
              },
              {
                title: 'Fibrosis reduction in soft tissue injuries',
                body: 'TB-500 consistently reduces fibrous scar deposition in tendon, ligament, and muscle injury models — a critical advantage for athletes who need full range of motion restored, not just structural repair.',
              },
              {
                title: 'Hair follicle stem cell activation',
                body: 'Thymosin Beta-4 promotes hair follicle stem cell activation and has demonstrated follicle recovery and hair regrowth stimulation in multiple rodent models and human pilot data.',
              },
              {
                title: 'Neuroprotection and neural repair',
                body: 'TB-500 demonstrates neuroprotective effects in spinal cord injury models, promoting axonal sprouting and reducing inflammation-mediated neuronal death — making it relevant beyond musculoskeletal applications.',
              },
              {
                title: 'Range of motion restoration',
                body: 'Anecdotally and in pilot data, athletes using TB-500 consistently report significant improvements in joint and tendon flexibility within 2–4 weeks, attributed to the combination of anti-fibrotic action and improved tissue hydration.',
              },
            ].map((item) => (
              <div key={item.title} className="card p-5 flex gap-4">
                <CheckCircle2 size={20} className="text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-semibold mb-1">{item.title}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Protocol Section */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="badge badge-yellow mb-4 inline-block">Dosing Protocol</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">TB-500 Protocol Guide</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              TB-500 is almost universally run as a two-phase protocol: a loading phase to rapidly
              saturate systemic receptors, followed by a lower maintenance dose through the healing period.
              The loading phase is optional but consistently produces faster early results for acute injuries.
            </p>

            <div className="space-y-4 mb-8">
              <div className="rounded-xl p-5" style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)' }}>
                <h3 className="text-yellow-500 font-bold mb-3">Loading Phase (Weeks 1–2)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Dose:</span> 7.5–10mg total per week</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Split:</span> 2–3 injections per week</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Route:</span> Subcutaneous (abdomen or thigh)</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Purpose:</span> Saturate actin-binding reservoirs, rapid systemic distribution</li>
                </ul>
              </div>

              <div className="rounded-xl p-5" style={{ background: 'rgba(8,145,178,0.08)', border: '1px solid rgba(8,145,178,0.2)' }}>
                <h3 className="text-yellow-500 font-bold mb-3">Maintenance Phase (Weeks 3–12)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Dose:</span> 5–7.5mg total per week</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Split:</span> 2× per week (e.g., Monday/Thursday)</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Duration:</span> Continue for full healing period</li>
                  <li className="flex gap-2"><span className="text-yellow-600 font-bold">Cycle:</span> 12 weeks on / 4 weeks off</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              <strong className="text-gray-900">Injection location:</strong> Always subcutaneous — abdomen, thigh, or upper arm.
              TB-500 works systemically, so proximity to the injury site is irrelevant. Rotate sites to avoid
              subcutaneous tissue irritation.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong className="text-gray-900">Reconstitution:</strong> Mix with{' '}
              <Link href="/products/bacteriostatic-water" className="text-yellow-600 hover:underline">bacteriostatic water</Link>
              {' '}for multi-use stability. Each vial is lyophilized (freeze-dried) for maximum shelf life before reconstitution.
            </p>
          </div>

          {/* Injury guide */}
          <div>
            <span className="badge badge-cyan mb-4 inline-block">Injury-Specific Guide</span>
            <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">When to Use TB-500</h2>
            <div className="space-y-3">
              {[
                {
                  injury: 'Muscle tears (Grade I–II)',
                  recommendation: 'TB-500 primary — systemic muscle repair',
                  detail: 'TB-500\'s myogenic properties make it ideal for partial muscle tears. Load at 10mg/wk for 2 weeks, then maintain.',
                  color: 'text-yellow-600',
                  bg: 'rgba(234,179,8,0.08)',
                  border: 'rgba(234,179,8,0.2)',
                },
                {
                  injury: 'Chronic tendinopathy',
                  recommendation: 'TB-500 + BPC-157 stack',
                  detail: 'Chronic tendons need both local vascularization (BPC-157) and systemic fibrosis clearance (TB-500).',
                  color: 'text-yellow-600',
                  bg: 'rgba(8,145,178,0.08)',
                  border: 'rgba(8,145,178,0.2)',
                },
                {
                  injury: 'Post-surgical recovery',
                  recommendation: 'TB-500 + BPC-157 combined',
                  detail: 'Surgery creates systemic inflammation alongside local damage. Use both peptides from day 1 post-op.',
                  color: 'text-yellow-600',
                  bg: 'rgba(234,179,8,0.08)',
                  border: 'rgba(234,179,8,0.2)',
                },
                {
                  injury: 'Overuse / repetitive strain',
                  recommendation: 'TB-500 primary — maintenance dose',
                  detail: 'Anti-fibrotic and anti-inflammatory properties address the accumulated damage of chronic overuse patterns.',
                  color: 'text-yellow-600',
                  bg: 'rgba(8,145,178,0.08)',
                  border: 'rgba(8,145,178,0.2)',
                },
                {
                  injury: 'Systemic inflammation / general recovery',
                  recommendation: 'TB-500 at 5mg/wk preventive dose',
                  detail: 'Athletes with high training loads use TB-500 in ongoing 8-week cycles to maintain systemic recovery capacity.',
                  color: 'text-yellow-600',
                  bg: 'rgba(234,179,8,0.08)',
                  border: 'rgba(234,179,8,0.2)',
                },
              ].map((item) => (
                <div key={item.injury} className="rounded-xl p-4" style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-gray-900 font-semibold text-sm">{item.injury}</p>
                    <span className={`text-xs font-bold ${item.color}`}>{item.recommendation}</span>
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* BPC-157 Synergy */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="badge badge-yellow mb-4 inline-block">The Gold Standard Stack</span>
          <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">TB-500 + BPC-157: Why This Stack Dominates</h2>
          <p className="text-gray-700 leading-relaxed">
            TB-500 and <Link href="/products/bpc-157" className="text-yellow-600 hover:underline">BPC-157</Link> are
            the two most studied healing peptides, and they complement each other through entirely non-overlapping
            mechanisms. Running them together produces synergistic results that exceed either compound alone.
          </p>
        </div>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid #2a2a3e' }}>
                <th className="text-left py-3 px-4 text-gray-700 font-medium">Property</th>
                <th className="text-left py-3 px-4 text-yellow-600 font-semibold">TB-500</th>
                <th className="text-left py-3 px-4 text-yellow-600 font-semibold">BPC-157</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Action type', 'Systemic — full body', 'Local — concentrated at injection site'],
                ['Primary mechanism', 'G-actin binding, cell migration', 'NO pathway, GH receptor upregulation'],
                ['Anti-fibrotic', 'Strong ✓', 'Moderate'],
                ['Gut healing', 'Minimal', 'Primary indication ✓'],
                ['Nerve repair', 'Moderate', 'Strong ✓'],
                ['Flexibility restoration', 'Strong ✓', 'Moderate'],
                ['Typical dose', '5–10mg/week', '250–500mcg twice daily'],
                ['Injection frequency', '2–3× per week', 'Twice daily'],
              ].map(([label, tb, bpc]) => (
                <tr key={label} style={{ borderBottom: '1px solid #1e1e35' }}>
                  <td className="py-3 px-4 text-gray-700 font-medium">{label}</td>
                  <td className="py-3 px-4 text-gray-700">{tb}</td>
                  <td className="py-3 px-4 text-gray-700">{bpc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <Link href="/comparisons/bpc-157-vs-tb-500" className="card p-5 hover:border-yellow-500/40 transition-colors block">
            <p className="text-yellow-600 font-semibold mb-2">Full Comparison Guide</p>
            <p className="text-gray-700 text-sm">BPC-157 vs TB-500 head-to-head — which injury types need which peptide, and when to combine.</p>
            <div className="flex items-center gap-1 mt-3 text-yellow-600 text-xs font-medium">
              Read guide <ArrowRight size={12} />
            </div>
          </Link>
          <Link href="/healing" className="card p-5 hover:border-cyan-500/40 transition-colors block">
            <p className="text-yellow-600 font-semibold mb-2">Healing & Recovery Hub</p>
            <p className="text-gray-700 text-sm">Full healing peptide protocols for tendons, ligaments, muscle, and gut — with dosing tables.</p>
            <div className="flex items-center gap-1 mt-3 text-yellow-600 text-xs font-medium">
              View protocols <ArrowRight size={12} />
            </div>
          </Link>
          <Link href="/stacks/ultimate-healing" className="card p-5 hover:border-yellow-500/40 transition-colors block">
            <p className="text-yellow-600 font-semibold mb-2">Ultimate Healing Stack</p>
            <p className="text-gray-700 text-sm">Pre-built BPC-157 + TB-500 protocol with week-by-week dosing guide and injury timelines.</p>
            <div className="flex items-center gap-1 mt-3 text-yellow-600 text-xs font-medium">
              View stack <ArrowRight size={12} />
            </div>
          </Link>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Products */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shop TB-500 & Healing Stack</h2>
        <p className="text-gray-700 text-sm mb-8">HPLC-verified, COA available per batch.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[tb500Product, bpc157Product].filter(Boolean).map((p) => (
            <ProductCard key={p!.slug} product={p!} showAffiliateButton />
          ))}
          {wolverineStack && (
            <Link href={`/stacks/wolverine-healing`} className="card p-6 hover:border-yellow-400/40 transition-colors flex flex-col">
              <div className="badge badge-yellow mb-3 self-start">Healing Stack</div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{wolverineStack.name}</h3>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">{wolverineStack.shortDescription}</p>
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
        <span className="badge badge-yellow mb-4 inline-block">FAQ</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">TB-500 Questions Answered</h2>
        <div className="space-y-4">
          {tb500Faqs.map((faq) => (
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
      <RelatedReading pageKey="/peptides/tb-500" />
    </div>
  );
}
