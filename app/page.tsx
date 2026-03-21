import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, ChevronRight, CheckCircle, Shield, Zap, Brain,
  FlaskConical, Activity, Star, TrendingUp, Clock, Users, Award,
} from 'lucide-react';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';
import ProductCard from '@/components/ProductCard';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'BPC-157, Semaglutide & Top Peptide Protocols for Healing & Fat Loss',
  description:
    'Expert peptide protocols for BPC-157, TB-500, Ipamorelin, CJC-1295, GHK-Cu, Epithalon & more. Evidence-based guides for healing, muscle growth, fat loss, anti-aging & cognitive enhancement. Sourced from Apollo Peptides.',
  keywords:
    'BPC-157, TB-500, Ipamorelin, CJC-1295, Semaglutide, Tirzepatide, GHK-Cu anti-aging, Epithalon telomere, peptide protocols, Apollo Peptides, best healing peptides 2026, fat loss peptides',
  openGraph: {
    title: 'BPC-157, Semaglutide & Top Peptide Protocols',
    description:
      'Evidence-based peptide guides for healing, muscle growth, fat loss, anti-aging & cognitive enhancement. Expert protocols — zero guesswork.',
    type: 'website',
    url: 'https://peptidesclav.com',
    siteName: 'PeptidesClav',
  },
};

const marqueeItems = [
  'BPC-157 Healing', 'TB-500 Recovery', 'Ipamorelin/CJC-1295', 'GHK-Cu Anti-Aging',
  'Epithalon Longevity', 'Semaglutide GLP-1', 'Tirzepatide Dual GIP/GLP-1', 'Retatrutide Triple Agonist',
  'IGF-1 LR3 Anabolic', 'NAD+ Energy', 'SNAP-8 Anti-Wrinkle', 'Cagrilintide+Sema',
];

const goals = [
  {
    icon: Shield,
    label: 'Healing & Recovery',
    title: 'Peptides for Injury Healing & Recovery',
    description:
      'BPC-157 and TB-500 are the gold-standard peptides for accelerating tendon, ligament, muscle, and gut tissue repair. Athletes report 2–4× faster recovery from injuries that have lingered for months.',
    stats: [
      { value: '2×', label: 'Faster Tissue Repair' },
      { value: '6–10wk', label: 'Protocol Duration' },
    ],
    href: '/healing',
    color: 'from-violet-600 to-violet-400',
    border: 'hover:border-violet-500/60',
  },
  {
    icon: TrendingUp,
    label: 'Body Composition',
    title: 'GH Peptides for Muscle Growth & Fat Loss',
    description:
      'Ipamorelin/CJC-1295 and Tesamorelin optimize growth hormone pulsatility for lean muscle gain, visceral fat reduction, and improved body composition — without the side effects of exogenous HGH.',
    stats: [
      { value: '3–5×', label: 'Natural GH Pulse' },
      { value: '12–24wk', label: 'Cycle Length' },
    ],
    href: '/body-composition',
    color: 'from-cyan-600 to-cyan-400',
    border: 'hover:border-cyan-500/60',
  },
  {
    icon: Activity,
    label: 'Anti-Aging & Longevity',
    title: 'Anti-Aging Peptides for Cellular Rejuvenation',
    description:
      'Epithalon activates telomerase and extends telomere length. GHK-Cu resets aging gene expression in skin. Together, they form the most powerful evidence-based anti-aging peptide protocol available.',
    stats: [
      { value: '27–36%', label: 'Mortality Reduction*' },
      { value: '33%', label: 'Telomere Lengthening' },
    ],
    href: '/anti-aging',
    color: 'from-fuchsia-600 to-violet-500',
    border: 'hover:border-fuchsia-500/60',
  },
];

const stats = [
  { value: '18+', label: 'Peptide Deep-Dives', icon: FlaskConical },
  { value: '6', label: 'Expert Protocol Stacks', icon: Activity },
  { value: '5★', label: 'Apollo Peptides Quality', icon: Award },
  { value: '3rd Party', label: 'Tested & Verified', icon: CheckCircle },
];

const steps = [
  {
    number: '01',
    title: 'Choose Your Goal',
    description:
      'Browse protocols by goal: healing & injury recovery, growth hormone optimization, fat loss, anti-aging & longevity, cognitive enhancement, or sexual performance. Every goal has a curated, evidence-based protocol.',
    color: '#a78bfa',
  },
  {
    number: '02',
    title: 'Read the Deep-Dive Guide',
    description:
      'Each peptide page includes mechanism of action, clinical study summaries, exact dosing protocols, injection timing, cycle lengths, synergistic combinations, and week-by-week result timelines.',
    color: '#06b6d4',
  },
  {
    number: '03',
    title: 'Source & Execute',
    description:
      'We partner with Apollo Peptides Sciences — the highest-quality US-based peptide supplier with third-party purity testing and certificates of analysis for every batch. Start your protocol with confidence.',
    color: '#a78bfa',
  },
];

const researchHighlights = [
  {
    peptide: 'BPC-157',
    claim: 'Accelerates tendon-to-bone healing by up to 2× in rotator cuff models vs. untreated controls.',
    category: 'Healing',
    href: '/products/bpc-157',
  },
  {
    peptide: 'TB-500',
    claim: 'Promotes systemic tissue repair via actin-binding — reduces fibrosis and restores range of motion.',
    category: 'Recovery',
    href: '/products/tb-500',
  },
  {
    peptide: 'Ipamorelin + CJC-1295',
    claim: 'Elevates GH pulse amplitude 3–5× baseline, mimicking the GH profile of a healthy 25-year-old.',
    category: 'GH Optimization',
    href: '/products/ipamorelin-cjc',
  },
  {
    peptide: 'GHK-Cu',
    claim: 'Resets approximately 30% of age-related gene dysregulation in human skin fibroblasts.',
    category: 'Anti-Aging',
    href: '/products/ghk-cu',
  },
  {
    peptide: 'Epithalon',
    claim: '27–36% reduction in all-cause mortality in 15-year human follow-up studies (Khavinson et al.).',
    category: 'Longevity',
    href: '/products/epithalon',
  },
  {
    peptide: 'Semaglutide (GLP-1)',
    claim: '14.9% average body weight reduction in the STEP-1 trial over 68 weeks — the most clinically validated fat loss peptide available.',
    category: 'Weight Loss',
    href: '/products/semaglutide-10mg',
  },
];

const faqs = [
  {
    q: 'What are peptides and are they safe?',
    a: 'Peptides are short-chain amino acid sequences that signal specific biological responses — healing, hormonal, metabolic, and anti-aging. Most are derived from naturally occurring proteins in the human body, which is why their side effect profiles are dramatically more favorable than pharmacological alternatives. Compounds like BPC-157, TB-500, and Ipamorelin have extensive safety data from decades of widespread use.',
  },
  {
    q: 'How do I choose between BPC-157 and TB-500 for healing?',
    a: 'BPC-157 excels at localized tissue repair — tendons, ligaments, gut lining, and neurological injuries. TB-500 works systemically, reducing whole-body inflammation and restoring flexibility in damaged connective tissue. Most experienced users combine both as the "Ultimate Healing Stack" for synergistic effects: BPC-157 at 250–500mcg 2× daily + TB-500 at 5mg 2× weekly. See our full protocol guide.',
  },
  {
    q: 'What is the best peptide for fat loss and body composition?',
    a: 'The most effective fat loss peptide stack combines Semaglutide (14.9% average weight loss in STEP-1), Tirzepatide (up to 22.5% weight loss — the highest ever recorded), and Ipamorelin/CJC-1295 for GH-mediated lean mass preservation. Together these peptides address appetite, metabolic rate, and body composition through multiple independent mechanisms.',
  },
  {
    q: 'Which peptide is best for anti-aging?',
    a: 'For comprehensive anti-aging, the Longevity Elite Stack combines Epithalon (telomerase activation, 27–36% mortality reduction in 15-year human follow-up studies), GHK-Cu (gene expression reset, collagen synthesis, hair growth), and NAD+ (mitochondrial restoration and sirtuin activation). Epithalon is run as a 10–20 day burst protocol 1–2× per year; GHK-Cu and NAD+ are used year-round.',
  },
  {
    q: 'How are peptides administered?',
    a: 'Most peptides are injected subcutaneously using 29–31 gauge insulin syringes — a painless process that takes under 30 seconds. Reconstitution with bacteriostatic water is required for lyophilized (freeze-dried) powders. Our protocol guides include step-by-step injection instructions, reconstitution ratios, storage requirements, and dosing schedules for every peptide.',
  },
  {
    q: 'Where should I buy peptides?',
    a: 'We exclusively recommend Apollo Peptides Sciences — a US-based supplier with HPLC testing, mass spectrometry analysis, and certificates of analysis for every batch. Apollo consistently ranks as the top supplier for purity, consistency, and responsible sourcing. All products on PeptidesClav link directly to Apollo via our affiliate partnership.',
  },
];

export default function HomePage() {
  const featuredProducts = [...products].sort((a, b) => a.popularityRank - b.popularityRank).slice(0, 6);
  const featuredStacks   = stacks.slice(0, 3);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute rounded-full opacity-20 blur-3xl"
            style={{ top: '-10%', left: '20%', width: 600, height: 600, background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
          <div className="absolute rounded-full opacity-15 blur-3xl"
            style={{ bottom: '10%', right: '15%', width: 400, height: 400, background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-6 py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-sm text-violet-300 font-medium tracking-wide">
              Evidence-Based Peptide Protocols • Apollo Peptides Affiliate
            </span>
          </div>

          <h1 className="font-extrabold leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
            <span className="text-white">The #1 Resource for</span>
            <br />
            <span className="gradient-text">Expert Peptide Protocols</span>
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            The most complete peptide protocol library on the internet — covering{' '}
            <strong className="text-zinc-200">BPC-157</strong>,{' '}
            <strong className="text-zinc-200">Semaglutide</strong>,{' '}
            <strong className="text-zinc-200">Tirzepatide</strong>,{' '}
            <strong className="text-zinc-200">Ipamorelin/CJC-1295</strong>,{' '}
            <strong className="text-zinc-200">Epithalon</strong>, GHK-Cu &amp; 15 more.
            Exact dosing. Real results. Zero guesswork.
          </p>
          <p className="text-zinc-500 max-w-xl mx-auto mb-10 text-sm">
            Expert protocols. Zero guesswork. Sourced from Apollo Peptides Sciences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products" className="btn-primary text-base px-8 py-3.5">
              Browse All Peptides <ArrowRight size={18} />
            </Link>
            <Link href="/stacks" className="btn-secondary text-base px-8 py-3.5">
              View Protocol Stacks <ChevronRight size={18} />
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-2 text-sm text-zinc-500">
                  <Icon size={15} className="text-violet-400" />
                  <span className="text-zinc-300 font-semibold">{s.value}</span>
                  <span>{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────── */}
      <div className="py-3 overflow-hidden border-y" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="tag-chip mx-3 text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* ── GOALS ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">Goal-Based Protocols</p>
          <h2 className="text-4xl font-bold text-white mb-4">What Are You Optimizing For?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Every peptide protocol is engineered around a specific physiological goal.
            Select your target and we&rsquo;ll match you to the right peptides and stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <Link
                key={goal.title}
                href={goal.href}
                className={`card p-7 flex flex-col group cursor-pointer border ${goal.border} transition-all duration-200`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${goal.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={22} className="text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#7c3aed' }}>
                  {goal.label}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{goal.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm flex-1">{goal.description}</p>

                <div className="flex gap-4 mt-5 mb-4">
                  {goal.stats.map((st) => (
                    <div key={st.label}>
                      <p className="text-xl font-black gradient-text">{st.value}</p>
                      <p className="text-xs text-zinc-600">{st.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-violet-400 text-sm font-medium group-hover:gap-2 transition-all duration-150">
                  Explore protocols <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="glow-divider mx-6" />

      {/* ── FEATURED PRODUCTS ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Top-Rated Peptides</p>
            <h2 className="text-4xl font-bold text-white">Most Popular Peptides</h2>
            <p className="text-zinc-400 mt-2 max-w-lg">
              The most-used peptides in the community — ranked by clinical evidence and user popularity.
            </p>
          </div>
          <Link href="/products" className="btn-secondary py-2.5 px-5 text-sm hidden sm:inline-flex">
            All 18 Peptides <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton={true} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/products" className="btn-secondary">
            View All 18 Peptides <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />

      {/* ── RESEARCH HIGHLIGHTS ───────────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">Peer-Reviewed Evidence</p>
            <h2 className="text-4xl font-bold text-white mb-4">What the Evidence Shows</h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-lg">
              Every protocol on PeptidesClav is grounded in published preclinical and clinical research.
              No broscience. No guesswork. Only evidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchHighlights.map((h) => (
              <Link
                key={h.peptide}
                href={h.href}
                className="card p-5 group flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-white text-base group-hover:text-violet-400 transition-colors">
                    {h.peptide}
                  </span>
                  <span className="badge-cyan badge text-[9px]">{h.category}</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed flex-1">{h.claim}</p>
                <div className="flex items-center gap-1 text-violet-400 text-xs font-medium mt-auto">
                  Full protocol <ArrowRight size={11} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">Simple Process</p>
          <h2 className="text-4xl font-bold text-white mb-4">How PeptidesClav Works</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            From goal to protocol in three steps. Whether you&rsquo;re a first-time user or a seasoned biohacker.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div
                className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl font-black"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-bright)', color: step.color }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="glow-divider mx-6" />

      {/* ── FEATURED STACKS ───────────────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest text-fuchsia-400 uppercase mb-3">Multi-Peptide Combinations</p>
              <h2 className="text-4xl font-bold text-white">Expert Peptide Stacks</h2>
              <p className="text-zinc-400 mt-2 max-w-lg">
                Pre-built protocols that combine synergistic peptides for maximum effect. Each stack includes complete dosing schedules, expected results, and sourcing links.
              </p>
            </div>
            <Link href="/stacks" className="btn-secondary py-2.5 px-5 text-sm hidden sm:inline-flex">
              All Stacks <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredStacks.map((stack) => (
              <Link key={stack.id} href={`/stacks/${stack.id}`} className="card p-6 flex flex-col group">
                <div className="h-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 mb-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">{stack.name}</h3>
                    <p className="text-xs text-zinc-500 mt-1">{stack.goal}</p>
                  </div>
                  <span
                    className="badge shrink-0 text-xs"
                    style={{
                      color: stack.difficulty === 'Beginner' ? '#34d399' : stack.difficulty === 'Intermediate' ? '#fbbf24' : '#f87171',
                      borderColor: stack.difficulty === 'Beginner' ? 'rgba(52,211,153,0.25)' : stack.difficulty === 'Intermediate' ? 'rgba(251,191,36,0.25)' : 'rgba(248,113,113,0.25)',
                    }}
                  >
                    {stack.difficulty}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1 line-clamp-3">{stack.shortDescription}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {stack.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm border-t pt-4 mt-auto" style={{ borderColor: 'var(--border)' }}>
                  <div>
                    <p className="text-zinc-600 text-xs">Duration</p>
                    <p className="text-zinc-300 font-medium text-xs mt-0.5">{stack.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-zinc-600 text-xs">Est. Cost</p>
                    <p className="text-zinc-300 font-medium text-xs mt-0.5">{stack.cost}</p>
                  </div>
                  <div className="flex items-center gap-1 text-violet-400 text-xs font-medium group-hover:gap-2 transition-all">
                    View Protocol <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── APOLLO TRUST SECTION ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Our Sourcing Partner</p>
            <h2 className="text-3xl font-bold text-white mb-5">
              Why We Only Recommend<br />
              <span className="gradient-text">Apollo Peptides Sciences</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Peptide quality varies enormously between suppliers. Underdosed, contaminated, or improperly stored peptides
              produce zero results — or worse. Apollo Peptides Sciences is the only supplier we trust and recommend
              because of their uncompromising commitment to purity.
            </p>
            <ul className="space-y-3">
              {[
                'HPLC (High-Performance Liquid Chromatography) purity testing on every batch',
                'Mass spectrometry verification of molecular weight and identity',
                'Certificate of Analysis (COA) publicly available for every product',
                'US-based supplier with responsible sourcing and quality control',
                'Lyophilized peptides with proper cold-chain shipping',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-zinc-400">
                  <CheckCircle size={16} className="text-violet-400 mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary text-sm px-6 py-3"
              >
                Shop Apollo Peptides <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'HPLC Tested', value: '100%', desc: 'Every batch purity verified' },
              { label: 'Mass Spec', value: '✓', desc: 'Molecular identity confirmed' },
              { label: 'Products', value: '30+', desc: 'Peptides available' },
              { label: 'COA', value: 'Public', desc: 'Full transparency per batch' },
            ].map((item) => (
              <div key={item.label} className="card p-5 text-center">
                <p className="text-3xl font-black gradient-text mb-1">{item.value}</p>
                <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-xs text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider mx-6" />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Common Questions</p>
          <h2 className="text-4xl font-bold text-white mb-4">Peptide FAQ</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Everything you need to know before starting your first peptide protocol.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-white mb-3 flex items-start gap-3">
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' }}
                >
                  Q
                </span>
                {faq.q}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed pl-9">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-12 text-center relative overflow-hidden animate-pulse-glow"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.1) 100%)',
            border: '1px solid rgba(124,58,237,0.3)',
          }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(124,58,237,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(6,182,212,0.12) 0%, transparent 60%)' }} />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">Get Started Today</p>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to Start Your Peptide Protocol?
            </h2>
            <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8">
              Browse 21 complete peptide guides. Find your stack. Source from Apollo Peptides — the gold standard in pharmaceutical-grade purity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary text-base px-8 py-3.5">
                Browse All Peptides <ArrowRight size={18} />
              </Link>
              <Link href="/guide" className="btn-secondary text-base px-8 py-3.5">
                Beginner&apos;s Guide <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/" />
    </>
  );
}
