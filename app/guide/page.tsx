import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Syringe,
  FlaskConical,
  ShieldAlert,
  ListChecks,
  ChevronRight,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';
import CitationsSection from '@/components/CitationsSection';

export const metadata: Metadata = {
  title: "How to Use Peptides: Complete Beginner's Guide to Dosing & Injection",
  description:
    "Complete beginner's guide to peptides — what they are, how to inject subcutaneously, starting doses, protocols, and how to get results fast.",
  keywords:
    'how to use peptides, peptide guide, how to inject peptides, peptide protocols, subcutaneous injection guide, beginner peptide protocol',
  alternates: { canonical: 'https://www.peptidesclav.com/guide' },
  openGraph: {
    title: "How to Use Peptides: Complete Beginner's Guide",
    description:
      'Everything you need to know to start using peptides — from first principles to your first injection and the right protocol.',
    type: 'article',
    url: 'https://www.peptidesclav.com/guide',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: "Peptide Beginner's Guide — Dosing & Injection" }],
  },
};

const sections = [
  {
    id: 'what-are-peptides',
    icon: <FlaskConical size={20} className="text-yellow-600" />,
    title: 'What Are Peptides?',
    color: 'yellow',
  },
  {
    id: 'why-peptides',
    icon: <BookOpen size={20} className="text-yellow-600" />,
    title: 'Why Use Peptides?',
    color: 'cyan',
  },
  {
    id: 'how-to-inject',
    icon: <Syringe size={20} className="text-yellow-600" />,
    title: 'How to Inject (Subcutaneous)',
    color: 'yellow',
  },
  {
    id: 'common-mistakes',
    icon: <AlertTriangle size={20} className="text-yellow-600" />,
    title: 'Common Mistakes to Avoid',
    color: 'cyan',
  },
  {
    id: 'starting-protocols',
    icon: <ListChecks size={20} className="text-yellow-600" />,
    title: 'Starting Protocols for Beginners',
    color: 'yellow',
  },
  {
    id: 'safety',
    icon: <ShieldAlert size={20} className="text-yellow-600" />,
    title: 'Safety Considerations',
    color: 'cyan',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "How to Use Peptides: Complete Beginner's Guide to Dosing & Injection",
  description: "Complete beginner's guide to peptides — what they are, how to inject subcutaneously, starting doses, protocols, and how to get results fast.",
  url: 'https://www.peptidesclav.com/guide',
  image: 'https://www.peptidesclav.com/og-image.png',
  author: { '@type': 'Organization', name: 'PeptidesClav', url: 'https://www.peptidesclav.com' },
  publisher: { '@type': 'Organization', name: 'PeptidesClav', logo: { '@type': 'ImageObject', url: 'https://www.peptidesclav.com/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.peptidesclav.com/guide' },
};

const guideCitations = [
  {
    number: 1,
    authors: 'Wilding JPH, et al.',
    title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity',
    journal: 'New England Journal of Medicine, 384(11), 989–1002',
    year: 2021,
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2032183',
  },
  {
    number: 2,
    authors: 'Jastreboff AM, et al.',
    title: 'Tirzepatide Once Weekly for the Treatment of Obesity',
    journal: 'New England Journal of Medicine, 387(3), 205–216',
    year: 2022,
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2206038',
  },
  {
    number: 3,
    authors: 'Sikiric P, et al.',
    title: 'Stable Gastric Pentadecapeptide BPC 157 as Basis of a New Type of Therapy',
    journal: 'Current Pharmaceutical Design, 24(18), 1990–2001',
    year: 2018,
    url: 'https://pubmed.ncbi.nlm.nih.gov/29773026/',
  },
  {
    number: 4,
    authors: 'Pickart L, Margolina A.',
    title: 'GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration',
    journal: 'BioMed Research International, 2018',
    year: 2018,
    url: 'https://pubmed.ncbi.nlm.nih.gov/29750133/',
  },
  {
    number: 5,
    authors: 'Khavinson VKh, et al.',
    title: 'Peptide regulation of aging: the key to longevity',
    journal: 'Biogerontology, 21, 401–418',
    year: 2020,
    url: 'https://pubmed.ncbi.nlm.nih.gov/32270325/',
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/3 w-96 h-96 bg-gray-900/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Education</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="badge badge-cyan">Beginner's Guide</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">The Beginner's Guide</span>
              <br />
              <span className="gradient-text">to Peptides</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Everything you need to know before running your first peptide protocol — from the
              science of what peptides actually are, to your first subcutaneous injection, to
              choosing the right starting stack for your goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#what-are-peptides" className="btn-primary">
                Start Reading
                <ArrowRight size={16} />
              </a>
              <Link href="/faq" className="btn-secondary">
                View FAQ
              </Link>
            </div>
          </div>

          {/* Table of contents */}
          <div className="mt-14 max-w-2xl">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              In This Guide
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl border transition-colors hover:border-yellow-600/40 hover:bg-gray-900/5"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <span className="text-gray-400 text-xs font-mono w-5">{String(i + 1).padStart(2, '0')}</span>
                  {s.icon}
                  <span className="text-sm text-gray-700 font-medium">{s.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-20 space-y-12 sm:space-y-20">

        {/* Section 1: What are peptides */}
        <section id="what-are-peptides" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gray-900/15 border border-yellow-600/25 flex items-center justify-center">
              <FlaskConical size={18} className="text-yellow-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What Are Peptides?</h2>
          </div>

          <p className="text-gray-500 leading-relaxed mb-5">
            Peptides are short chains of amino acids — the same building blocks that make up
            proteins. While proteins are typically hundreds to thousands of amino acids long,
            peptides range from just 2 to about 50 amino acids. This smaller size is critical:
            it allows peptides to interact directly with specific receptors and signaling pathways
            in your cells in ways that larger proteins cannot.
          </p>
          <p className="text-gray-500 leading-relaxed mb-5">
            Your body already produces thousands of peptides naturally. Hormones like insulin and
            oxytocin are peptides. Digestive enzymes use peptide signals. Growth hormone releasing
            hormone (GHRH) — which tells your pituitary to release GH — is a peptide. Research
            peptides are synthetic versions or analogs of these naturally occurring compounds,
            engineered for stability, specificity, or enhanced potency.
          </p>
          <div
            className="p-5 rounded-xl border-l-4 border-yellow-600 mb-5"
            style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Key insight:</strong> Peptides are not steroids,
              hormones, or drugs in the conventional sense. Many work by stimulating your body's
              own production of beneficial compounds (like GH) rather than introducing exogenous
              substances. This is why their side effect profiles are dramatically more favorable
              than pharmacological alternatives.
            </p>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Most peptides cannot be taken orally because stomach acid and digestive enzymes
            break down the amino acid chains before they can reach the bloodstream. This is why
            subcutaneous injection is the standard administration route — it delivers the peptide
            directly into the subcutaneous fat layer where it can be absorbed intact into systemic
            circulation. A small number of peptides (like BPC-157) can also survive oral administration.
          </p>
        </section>

        <div className="glow-divider" />

        {/* Section 2: Why use peptides */}
        <section id="why-peptides" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center">
              <BookOpen size={18} className="text-yellow-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Use Peptides?</h2>
          </div>

          <p className="text-gray-500 leading-relaxed mb-5">
            Peptides occupy a unique space: they are backed by peer-reviewed science
            (many with human clinical trial data), they target specific physiological mechanisms
            with precision, and their side effect profiles are dramatically better than pharmacological
            alternatives that address the same goals.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {[
              {
                title: 'Injury Recovery',
                body: 'BPC-157 heals tendons and ligaments 2× faster than untreated controls in peer-reviewed studies. For chronic injuries that have lingered for months, this is transformative.',
              },
              {
                title: 'Anti-Aging',
                body: 'Epithalon produced a 27–36% reduction in all-cause mortality in 15-year human follow-up studies. GHK-Cu reverses gene expression aging in skin fibroblasts.',
              },
              {
                title: 'Body Composition',
                body: 'GH secretagogues and GLP-1 agonists produce simultaneous fat loss and lean mass preservation — the combination that diet and most supplements cannot achieve.',
              },
              {
                title: 'Weight Loss',
                body: "Semaglutide produced 14.9% average body weight reduction in the STEP-1 trial. Tirzepatide achieved up to 22.5% weight loss — the highest ever recorded for a pharmaceutical compound.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-4 rounded-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <h4 className="font-semibold text-gray-900 text-sm mb-2">{card.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 leading-relaxed">
            The peptide category has expanded rapidly in the past decade as the scientific
            literature has grown. Many compounds originally studied decades ago are now widely
            validated in Western journals. The evidence base is robust — the key is knowing which
            peptides have strong data and choosing appropriate protocols.
          </p>
        </section>

        <div className="glow-divider" />

        {/* Section 3: How to inject */}
        <section id="how-to-inject" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gray-900/15 border border-yellow-600/25 flex items-center justify-center">
              <Syringe size={18} className="text-yellow-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              How to Inject Subcutaneously
            </h2>
          </div>

          <p className="text-gray-500 leading-relaxed mb-6">
            Subcutaneous (SubQ) injection is far simpler than most beginners expect. You're
            injecting into the fat layer just beneath the skin — not into muscle (intramuscular)
            or a vein (intravenous). The needle is tiny (27–31 gauge, 0.5" length is standard),
            and most people report minimal to no discomfort once they've done it a few times.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Need</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { item: 'Insulin syringe', detail: '27–31 gauge, 0.5" or 1cc. Available at pharmacies without prescription.' },
                { item: 'Bacteriostatic water (BW)', detail: 'For reconstituting lyophilized (freeze-dried) peptides. Use sterile BW, not regular saline.' },
                { item: 'Alcohol swabs', detail: 'Wipe the rubber top of your peptide vial and your injection site before each use.' },
                { item: 'Sharps container', detail: 'Dispose of needles safely. Small sharps containers are inexpensive and available at pharmacies.' },
              ].map((item) => (
                <div
                  key={item.item}
                  className="flex gap-3 p-3 rounded-xl border"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <CheckCircle2 size={14} className="text-yellow-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.item}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Injection Protocol</h3>
          <div className="space-y-3 mb-6">
            {[
              {
                step: '01',
                title: 'Reconstitute your peptide',
                body: 'Using a fresh syringe, draw the appropriate amount of bacteriostatic water and inject it slowly into the peptide vial by aiming at the glass wall (not directly onto the powder). Swirl gently — never shake. Store reconstituted peptides refrigerated.',
              },
              {
                step: '02',
                title: 'Calculate your dose',
                body: "Draw up the appropriate volume based on your reconstitution ratio. If you added 2mL of BW to a 5mg vial, each 0.1mL (10 units on an insulin syringe) = 250mcg. Write this down before you inject — don't do math on the fly.",
              },
              {
                step: '03',
                title: 'Choose and prep your injection site',
                body: 'Lower abdomen (2 inches from navel), outer thigh, or love handle area. Wipe with an alcohol swab and let dry completely (10–15 seconds). Rotating injection sites prevents lipodystrophy at a single spot.',
              },
              {
                step: '04',
                title: 'Pinch and insert',
                body: 'Pinch a small fold of skin between your thumb and forefinger. Insert the needle at a 45° angle (some prefer 90° — both work for SubQ). Insert the full 0.5" length of the needle quickly and smoothly.',
              },
              {
                step: '05',
                title: 'Inject and withdraw',
                body: 'Push the plunger slowly and steadily over 5–10 seconds. Withdraw the needle at the same angle it was inserted. Apply gentle pressure with a clean swab if there is any bleeding (rare). Do not rub the site.',
              },
              {
                step: '06',
                title: 'Dispose of needle',
                body: 'Drop the used syringe (do not recap) directly into your sharps container. Never place used needles in regular household trash.',
              },
            ].map((step) => (
              <div
                key={step.step}
                className="flex gap-4 p-4 rounded-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <span className="text-yellow-600 font-mono font-bold text-sm shrink-0 mt-0.5">
                  {step.step}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{step.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="glow-divider" />

        {/* Section 4: Common mistakes */}
        <section id="common-mistakes" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center">
              <AlertTriangle size={18} className="text-yellow-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Common Mistakes to Avoid</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                mistake: 'Injecting GH peptides in a fed state',
                detail: 'Insulin from your last meal directly blunts GH release. Eating within 2 hours of injection can reduce efficacy by 50–70%. Always inject fasted — pre-sleep timing is ideal because you naturally fast overnight.',
              },
              {
                mistake: 'Shaking the reconstituted peptide vial',
                detail: 'Shaking causes foaming which denatures (destroys) the peptide structure. Always swirl gently or roll the vial between your palms. If your reconstituted peptide is foamy, you have already damaged some of it.',
              },
              {
                mistake: 'Using regular sterile water instead of bacteriostatic water',
                detail: 'Regular water lacks the preservative (benzyl alcohol) that gives bacteriostatic water its shelf life. Reconstituted peptides in regular water must be used within 24 hours or they will grow bacteria. BW-reconstituted peptides last 4–6 weeks refrigerated.',
              },
              {
                mistake: 'Running multiple new peptides simultaneously',
                detail: "Start with one peptide, run it for 2–4 weeks, and assess your response. If you stack three new peptides and experience a side effect, you won't know which caused it. Introduce one variable at a time.",
              },
              {
                mistake: 'Expecting overnight results',
                detail: 'Most peptides show initial effects within 1–2 weeks, but meaningful body composition and healing changes develop over 8–16 weeks. Abandon protocols too early is the most common reason people conclude that peptides "don\'t work."',
              },
              {
                mistake: 'Storing reconstituted peptides at room temperature',
                detail: 'Reconstituted peptides must be refrigerated (2–8°C). Lyophilized (powder) peptides can be stored at room temperature for short periods or in the freezer long-term. Reconstituted peptides left at room temperature degrade rapidly.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl border-l-4 border-amber-500"
                style={{
                  background: 'var(--bg-card)',
                  borderTop: '1px solid var(--border)',
                  borderRight: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <AlertTriangle size={16} className="text-yellow-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.mistake}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="glow-divider" />

        {/* Section 5: Starting protocols */}
        <section id="starting-protocols" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gray-900/15 border border-yellow-600/25 flex items-center justify-center">
              <ListChecks size={18} className="text-yellow-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Starting Protocols for Beginners
            </h2>
          </div>

          <p className="text-gray-500 leading-relaxed mb-8">
            Choose your starting protocol based on your primary goal. These are the simplest,
            most evidence-backed starting points — each single-peptide or two-peptide protocols
            that beginners have the most success with.
          </p>

          <div className="space-y-5">
            {[
              {
                goal: 'Injury Recovery',
                badge: 'Most Popular',
                badgeColor: 'yellow',
                peptides: 'BPC-157 + TB-500',
                dose: 'BPC-157: 250mcg 2× daily | TB-500: 5mg 2× per week',
                timing: 'BPC-157: Morning + Evening | TB-500: Monday + Thursday',
                duration: '8–12 weeks',
                href: '/stacks/ultimate-healing',
              },
              {
                goal: 'Body Composition / Anti-Aging',
                badge: 'Beginner Friendly',
                badgeColor: 'cyan',
                peptides: 'Ipamorelin + CJC-1295',
                dose: '200mcg of each per injection',
                timing: 'Before sleep, fasted (2+ hrs after last meal)',
                duration: '12–24 weeks',
                href: '/stacks/gh-optimization',
              },
              {
                goal: 'Cognitive Enhancement',
                badge: 'Intranasal',
                badgeColor: 'yellow',
                peptides: 'Semax + Selank',
                dose: 'Semax: 400–600mcg | Selank: 250–400mcg (both intranasal)',
                timing: 'Morning upon waking',
                duration: '4 weeks on / 2 weeks off',
                href: '/stacks/performance-elite',
              },
              {
                goal: 'Longevity',
                badge: 'Intermediate',
                badgeColor: 'cyan',
                peptides: 'Epithalon burst + GHK-Cu',
                dose: 'Epithalon: 10mg/day for 10–20 days | GHK-Cu: 1–2mg daily',
                timing: 'Epithalon: Evening | GHK-Cu: Morning',
                duration: 'Epithalon 2× per year + GHK-Cu continuous',
                href: '/stacks/longevity-elite',
              },
            ].map((protocol) => (
              <div
                key={protocol.goal}
                className="p-5 rounded-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge">{protocol.goal}</span>
                  <span
                    className={`badge ${protocol.badgeColor === 'cyan' ? 'badge-cyan' : ''}`}
                  >
                    {protocol.badge}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 mb-3">{protocol.peptides}</h4>
                <div className="grid sm:grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'Dose', value: protocol.dose },
                    { label: 'Timing', value: protocol.timing },
                    { label: 'Duration', value: protocol.duration },
                  ].map((d) => (
                    <div key={d.label}>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{d.label}</p>
                      <p className="text-xs text-gray-700">{d.value}</p>
                    </div>
                  ))}
                </div>
                <Link href={protocol.href} className="btn-secondary py-1.5 px-3 text-xs">
                  Full Protocol
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <div className="glow-divider" />

        {/* Section 6: Safety */}
        <section id="safety" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center">
              <ShieldAlert size={18} className="text-yellow-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Safety Considerations</h2>
          </div>

          <div
            className="p-5 rounded-xl border-l-4 border-amber-500 mb-8"
            style={{
              background: 'rgba(245,158,11,0.05)',
              borderTop: '1px solid rgba(245,158,11,0.15)',
              borderRight: '1px solid rgba(245,158,11,0.15)',
              borderBottom: '1px solid rgba(245,158,11,0.15)',
            }}
          >
            <div className="flex gap-3">
              <AlertTriangle size={18} className="text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Important:</strong> Start with conservative doses,
                purchase only from suppliers with third-party certificates of analysis, and
                introduce one new compound at a time so you can accurately assess your individual response.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Source quality matters above everything',
                body: 'The purity of your peptide determines both efficacy and safety. Only purchase from reputable suppliers with third-party HPLC and mass spectrometry certificates of analysis — look for full CoAs published for every product.',
              },
              {
                title: 'Start low and assess tolerance',
                body: 'Begin at the lower end of the dose range for any new peptide and run it solo for 1–2 weeks before adding anything. This lets you establish your baseline response, identify any individual sensitivities, and build confidence with the injection process.',
              },
              {
                title: 'Watch for hypersensitivity reactions',
                body: 'Allergic reactions to peptides are rare but possible. Signs include itching, hives, swelling, or difficulty breathing. If you experience any of these, stop immediately and seek medical attention. The vast majority of users never experience this.',
              },
              {
                title: 'GH peptides and glucose',
                body: 'GH secretagogues can modestly elevate blood glucose and reduce insulin sensitivity at high doses. This is generally not clinically meaningful at therapeutic doses, but diabetics or pre-diabetics should monitor blood glucose when starting GH peptide protocols.',
              },
              {
                title: 'Cycle appropriately',
                body: 'Most peptides benefit from cycling — periods of use followed by breaks. This prevents receptor desensitization and allows your body\'s natural systems to remain responsive. Follow the cycle recommendations in each product\'s protocol page.',
              },
              {
                title: 'Keep a log',
                body: 'Track your dose, timing, injection sites, and any noticeable effects or side effects. This data is invaluable for optimizing your protocol over time and is essential if you ever need to discuss your protocol with a healthcare provider.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <CheckCircle2 size={16} className="text-yellow-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* CTA footer */}
      <section
        className="py-10 sm:py-20 text-center"
        style={{ backgroundColor: 'var(--bg-card)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="glow-divider mb-10" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your First Protocol?
          </h2>
          <p className="text-gray-500 mb-8">
            Browse our curated stacks for your specific goal, or explore the full product catalog
            with detailed protocol guides for every peptide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/stacks" className="btn-primary">
              Browse Stacks
              <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn-secondary">
              All Products
            </Link>
            <Link href="/faq" className="btn-secondary">
              Read FAQ
            </Link>
          </div>
        </div>
      </section>

      <CitationsSection citations={guideCitations} />
      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/guide" />
    </div>
  );
}
