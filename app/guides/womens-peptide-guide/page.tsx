import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Shield,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: "Women's Peptide Guide: Protocols for Hormones, Anti-Aging & Weight Loss",
  description:
    'Peptide protocols for women — hormonal balance, perimenopause, weight loss, skin health, and anti-aging. Dosing adjustments and stacking guide for female physiology.',
  keywords:
    'peptides for women, best peptides for women, women\'s peptide protocol, female peptide stack, peptides for perimenopause, peptides for women over 40, women peptide guide',
  alternates: { canonical: 'https://www.peptidesclav.com/guides/womens-peptide-guide' },
  openGraph: {
    title: "Women's Peptide Guide: Protocols for Hormones, Anti-Aging & Weight Loss",
    description:
      'Peptide protocols for women — hormonal balance, perimenopause, weight loss, skin health, and anti-aging. Dosing adjustments and stacking guide for female physiology.',
    type: 'website',
    url: 'https://www.peptidesclav.com/guides/womens-peptide-guide',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: "Women's Peptide Guide" }],
  },
};

const protocols = [
  {
    label: 'A',
    title: 'Weight Loss & Body Composition',
    badge: 'GLP-1 + GH Peptides',
    badgeClass: 'badge badge-cyan',
    color: 'text-yellow-600',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    items: [
      { role: 'Primary', detail: 'Semaglutide 0.25mg/week titrating to 1mg (women often respond at lower doses than the 2.4mg male max)' },
      { role: 'Add-on', detail: 'Ipamorelin/CJC-1295 100mcg 2×/day for lean mass preservation during fat loss' },
      { role: 'Upgrade', detail: 'Tirzepatide for women who don\'t respond sufficiently to Semaglutide alone' },
    ],
  },
  {
    label: 'B',
    title: 'Anti-Aging & Longevity (40+ Women)',
    badge: 'Epithalon + GHK-Cu + NAD+',
    badgeClass: 'badge',
    color: 'text-yellow-600',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-50',
    items: [
      { role: 'Foundation', detail: 'Epithalon 5–10mg per cycle (telomere support, anti-cancer activity in research)' },
      { role: 'Skin', detail: 'GHK-Cu 1–2mg 2×/week (collagen restoration, gene expression reset)' },
      { role: 'Energy', detail: 'NAD+ for mitochondrial restoration and energy metabolism' },
      { role: 'Nightly', detail: 'Ipamorelin 100mcg before bed (GH pulse — supports skin, bone density, sleep quality)' },
    ],
  },
  {
    label: 'C',
    title: 'Perimenopause Support',
    badge: 'GH Axis + PT-141 + BPC-157',
    badgeClass: 'badge',
    color: 'text-yellow-600',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-50',
    items: [
      { role: 'GH Support', detail: 'Ipamorelin/CJC-1295: addresses the GH axis decline that accelerates with age and menopause' },
      { role: 'Libido', detail: 'PT-141 (Bremelanotide): FDA-approved for HSDD in premenopausal women (Vyleesi 1.75mg SQ)' },
      { role: 'Mood/Gut', detail: 'BPC-157: gut-brain axis support and mood stabilization downstream of gut health' },
      { role: 'Note', detail: 'Peptides complement but do not replace HRT — they support GH and tissue repair alongside hormone therapy' },
    ],
  },
  {
    label: 'D',
    title: 'Skin & Hair Health',
    badge: 'GHK-Cu + SNAP-8 + BPC-157',
    badgeClass: 'badge',
    color: 'text-yellow-600',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    items: [
      { role: 'Collagen', detail: 'GHK-Cu topical + injectable: collagen synthesis, wrinkle reversal, skin thickness' },
      { role: 'Hair', detail: 'BPC-157: hair follicle stimulation and scalp healing via angiogenesis' },
      { role: 'Topical', detail: 'SNAP-8: reduces expression lines at the neuromuscular level (topical application)' },
      { role: 'GH-Mediated', detail: 'Ipamorelin: GH-mediated skin thickness and collagen improvement' },
    ],
  },
  {
    label: 'E',
    title: 'Healing & Recovery',
    badge: 'BPC-157 + TB-500 + IGF-1',
    badgeClass: 'badge',
    color: 'text-gray-500',
    border: 'border-zinc-600/30',
    bg: 'bg-zinc-500/10',
    items: [
      { role: 'Tissue Repair', detail: 'BPC-157: same protocols as men — women respond equally well' },
      { role: 'Systemic', detail: 'TB-500: systemic healing at same doses as men' },
      { role: 'Anabolic', detail: 'IGF-1 LR3: women use 20–40mcg (lower than male 50–100mcg range) due to higher sensitivity' },
    ],
  },
];

const dosingTable = [
  { peptide: 'Ipamorelin', women: '100 mcg', men: '200–300 mcg', note: 'Women more sensitive to GH-axis peptides' },
  { peptide: 'CJC-1295', women: '100 mcg', men: '100–200 mcg', note: 'Lower end of male range works well' },
  { peptide: 'GHK-Cu', women: '1–2 mg', men: '1–2 mg', note: 'Same range — no sex-based adjustment needed' },
  { peptide: 'BPC-157', women: '250 mcg', men: '250–500 mcg', note: 'Lower end of male range is typical' },
  { peptide: 'Semaglutide', women: 'Full clinical dose', men: 'Full clinical dose', note: 'Equal efficacy in trials — no dose reduction' },
  { peptide: 'IGF-1 LR3', women: '20–40 mcg', men: '50–100 mcg', note: 'Women have higher IGF-1 sensitivity — reduce accordingly' },
];

const faqs = [
  {
    q: 'Do women need lower peptide doses than men?',
    a: "For GH-axis peptides (Ipamorelin, IGF-1 LR3), yes — women generally use 60–80% of male doses due to higher sensitivity and lower body weight. GLP-1 peptides (Semaglutide, Tirzepatide) use the same clinical doses as men — the major weight loss trials enrolled roughly equal numbers of men and women at identical doses.",
  },
  {
    q: 'Can women use peptides while on birth control?',
    a: "There are no known pharmacological interactions between peptides and hormonal contraceptives. However, GLP-1 peptides (Semaglutide, Tirzepatide) may reduce oral contraceptive absorption due to delayed gastric emptying — use a backup contraceptive method when starting or titrating GLP-1 peptides.",
  },
  {
    q: 'Is PT-141 safe for women?',
    a: "Yes — PT-141 (Bremelanotide) is FDA approved specifically for premenopausal women with hypoactive sexual desire disorder (HSDD) under the brand name Vyleesi at 1.75mg subcutaneous. The most common side effect is nausea (~40% of users), which is manageable with anti-nausea medication taken 30 minutes before dosing.",
  },
  {
    q: 'Can peptides help with perimenopause symptoms?',
    a: "Peptides can support several perimenopause-related biological changes: Ipamorelin addresses GH axis decline that accelerates at menopause, GHK-Cu addresses collagen loss and skin changes, BPC-157 addresses gut-brain axis mood effects downstream of gut health changes. They complement — but do not replace — hormone therapy. Women on HRT can layer peptides on top for comprehensive support.",
  },
  {
    q: "What's the safest peptide for a woman to start with?",
    a: "Ipamorelin alone (without CJC-1295) at 100mcg before bed is the most conservative starting point. It produces a pulsatile GH release without the cortisol spike associated with some GHRH analogs, has a well-studied safety profile, and delivers noticeable benefits (improved sleep quality, skin texture, recovery speed) without dramatic body composition effects. It's an ideal foundation to build on as you understand your individual response.",
  },
];

export default function WomensPeptideGuidePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="badge hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/guide" className="badge hover:text-gray-900 transition-colors">Guides</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="badge badge-cyan">Women's Peptide Guide</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">2026 Guide</span>
              <span className="badge badge-cyan">Updated March 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">Women's</span>
              <span className="text-gray-900"> Peptide Guide</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Female physiology requires adjusted protocols — lower GH-axis doses, hormone-cycle
              timing awareness, and goal-specific stacks. This guide covers five goal categories
              with complete dosing, timing, and safety information for women.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/anti-aging-skin" className="btn-primary">
                Anti-Aging Skin Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/guide" className="btn-secondary">
                Full Peptide Guide
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Star size={18} className="text-yellow-600" />, value: '5', label: 'Goal categories: Weight, anti-aging, hormones, skin, healing' },
              { icon: <Zap size={18} className="text-yellow-600" />, value: '70–80%', label: 'Lower doses: Women typically use 70–80% of male doses' },
              { icon: <Sparkles size={18} className="text-yellow-600" />, value: 'Cycle', label: 'Cycle aware: Protocol adjustments for menstrual cycle phases' },
              { icon: <Shield size={18} className="text-yellow-600" />, value: 'Research', label: 'Research-backed: Multiple clinical trials include female subjects' },
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

      {/* Why Women's Protocols Differ */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Why It's Different</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Why Women's Protocols Differ from Men's
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          Female physiology introduces five key variables that affect peptide dosing, timing, and
          selection. Understanding these is the foundation of an effective women's protocol.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: 'Lower Body Weight',
              desc: 'Women have lower average body weight, which translates directly to lower absolute peptide doses — particularly for GH-axis peptides like Ipamorelin and IGF-1 LR3.',
              accent: 'text-yellow-600',
              bg: 'bg-yellow-50',
            },
            {
              title: 'Higher Body Fat Percentage',
              desc: 'Women naturally carry more body fat, which alters GH secretion patterns. GH pulse amplitude is lower in women with higher adiposity, making GH-stimulating peptides especially valuable.',
              accent: 'text-yellow-600',
              bg: 'bg-cyan-500/10',
            },
            {
              title: 'Hormonal Fluctuations',
              desc: 'The menstrual cycle creates estrogen and progesterone fluctuations that affect GH sensitivity. Some women report better GH peptide response in the follicular phase (days 1–14), though research evidence is limited.',
              accent: 'text-yellow-600',
              bg: 'bg-yellow-50',
            },
            {
              title: 'Estrogen Interactions',
              desc: 'Estrogen has complex interactions with GH-axis peptides — it increases GH pulse frequency but reduces hepatic IGF-1 production. Women generally need lower IGF-1 LR3 doses due to inherently higher IGF-1 sensitivity.',
              accent: 'text-yellow-600',
              bg: 'bg-cyan-500/10',
            },
            {
              title: 'GLP-1 Peptides: Equal Dosing',
              desc: 'For GLP-1 peptides (Semaglutide, Tirzepatide), women use the same clinical doses as men — major trials enrolled both sexes at identical doses with equivalent efficacy outcomes.',
              accent: 'text-yellow-600',
              bg: 'bg-yellow-50',
            },
            {
              title: 'PT-141: Designed for Women',
              desc: 'Bremelanotide (PT-141/Vyleesi) is specifically FDA-approved for premenopausal women with HSDD — it\'s the only peptide with an approved women-specific indication.',
              accent: 'text-yellow-600',
              bg: 'bg-cyan-500/10',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card p-5 border"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
            >
              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center mb-3`}>
                <CheckCircle2 size={16} className={item.accent} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goal-Based Protocols */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Goal-Based Protocols</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Five Goal-Based Protocols for Women
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Select the protocol that matches your primary goal. Most women eventually combine
            elements from two or more protocols as they gain experience.
          </p>
          <div className="space-y-6">
            {protocols.map((protocol) => (
              <div
                key={protocol.label}
                className={`card p-6 border ${protocol.border}`}
                style={{ background: 'var(--bg)' }}
              >
                <div className="flex items-start gap-4 mb-4 flex-wrap">
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 ${protocol.bg}`}
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <span className={`text-sm font-bold ${protocol.color}`}>{protocol.label}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-gray-900">{protocol.title}</h3>
                      <span className={protocol.badgeClass}>{protocol.badge}</span>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {protocol.items.map((item) => (
                    <div
                      key={item.role}
                      className="rounded-lg px-4 py-3 border"
                      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                    >
                      <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${protocol.color}`}>
                        {item.role}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Dosing Adjustments Table */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Dosing Reference</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Women's Dosing Adjustments vs Men's
        </h2>
        <p className="text-gray-500 mb-8 max-w-2xl">
          GH-axis peptides are dosed lower in women; GLP-1 peptides use the same clinical doses.
        </p>
        <div className="card border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                  <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Peptide</th>
                  <th className="text-left px-5 py-3 text-xs font-bold text-yellow-600 uppercase tracking-wider">Women's Dose</th>
                  <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Men's Dose</th>
                  <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Rationale</th>
                </tr>
              </thead>
              <tbody>
                {dosingTable.map((row, i) => (
                  <tr
                    key={row.peptide}
                    style={{
                      backgroundColor: i % 2 === 0 ? 'var(--bg)' : 'var(--bg-card)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <td className="px-5 py-3 font-semibold text-gray-900 text-xs">{row.peptide}</td>
                    <td className="px-5 py-3 text-yellow-600 font-semibold text-xs">{row.women}</td>
                    <td className="px-5 py-3 text-gray-500 text-xs">{row.men}</td>
                    <td className="px-5 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Menstrual Cycle Timing */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Cycle Timing</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Menstrual Cycle Timing
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl">
            Some women report better GH peptide response in the follicular phase (days 1–14). No
            strong clinical research confirms this, but user reports are consistent enough to note.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { peptide: 'GH Peptides (Ipamorelin, CJC)', timing: 'Neutral', desc: 'Use consistently — no phase-specific advantage confirmed in research.', color: 'text-gray-500', border: 'border-zinc-600/30' },
              { peptide: 'GLP-1 Peptides', timing: 'Neutral', desc: 'Same weekly dose regardless of cycle phase — GLP-1 receptor sensitivity is not cycle-dependent.', color: 'text-gray-500', border: 'border-zinc-600/30' },
              { peptide: 'BPC-157', timing: 'Use Consistently', desc: 'BPC-157 works through tissue-level mechanisms, not hormonal axes — use daily without cycle adjustment.', color: 'text-yellow-600', border: 'border-cyan-500/30' },
              { peptide: 'PT-141', timing: 'Any Time', desc: 'Can be used at any point in the cycle as needed. FDA approval was not cycle-phase specific.', color: 'text-yellow-600', border: 'border-yellow-400/40' },
            ].map((item) => (
              <div
                key={item.peptide}
                className={`card p-5 border ${item.border}`}
                style={{ background: 'var(--bg)' }}
              >
                <h3 className="text-xs font-bold text-gray-500 mb-1">{item.peptide}</h3>
                <p className={`text-sm font-bold mb-2 ${item.color}`}>{item.timing}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Safety */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Safety</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Safety Considerations for Women
        </h2>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Key safety notes specific to female physiology and life stage.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          <div
            className="card p-6 border border-red-500/20"
            style={{ background: 'var(--bg-card)' }}
          >
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Shield size={16} className="text-red-400" />
              Pregnancy &amp; Breastfeeding
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              No peptides have been specifically shown to be harmful in pregnancy or breastfeeding,
              but they are contraindicated as a precaution due to absence of safety data in these
              populations. Always discontinue all peptides when pregnant or breastfeeding. GLP-1
              peptides (Semaglutide, Tirzepatide) are approved for use in non-pregnant women but are
              specifically contraindicated in pregnancy.
            </p>
          </div>
          <div
            className="card p-6 border border-cyan-500/20"
            style={{ background: 'var(--bg-card)' }}
          >
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-yellow-600" />
              Getting Started: Beginner Recommendation
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Beginners should start with Ipamorelin alone (without CJC-1295) at 100mcg before bed.
              This is the lowest-risk, highest-benefit entry point for most women — pulsatile GH
              release with no cortisol spike, well-studied safety profile, and noticeable benefits
              (sleep quality, skin texture, energy, recovery) within 3–4 weeks. Build from this
              foundation based on your specific goals.
            </p>
          </div>
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

      <div className="glow-divider" />

      {/* CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Start Your Women's Peptide Protocol
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          The Anti-Aging Skin Stack is the most popular starting point for women — combining
          GHK-Cu, SNAP-8, and Ipamorelin for visible skin, hair, and body composition results.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/stacks/anti-aging-skin" className="btn-primary">
            Anti-Aging Skin Stack
            <ArrowRight size={16} />
          </Link>
          <Link href="/guide" className="btn-secondary">
            Full Peptide Guide
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/guides/womens-peptide-guide" />
    </div>
  );
}
