import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Zap, Moon, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Growth Hormone Peptides | CJC-1295, Ipamorelin, IGF-1 LR3 Protocols',
  description:
    'CJC-1295 / Ipamorelin and IGF-1 LR3 protocols for GH optimization — naturally amplify GH pulses 3–5×, build lean muscle, burn visceral fat, and improve deep sleep. Science-backed dosing guides.',
  keywords:
    'growth hormone peptides, CJC-1295, Ipamorelin, IGF-1 LR3, GH peptide stack, GH secretagogues, muscle building peptides, fat loss peptides, CJC-1295 Ipamorelin protocol',
  alternates: { canonical: 'https://www.peptidesclav.com/growth-hormone' },
  openGraph: {
    title: 'Growth Hormone Peptides | CJC-1295, Ipamorelin, IGF-1 LR3',
    description:
      'Naturally amplify GH pulses 3–5× with CJC-1295 / Ipamorelin — the gold-standard GH secretagogue stack for muscle, fat loss, and anti-aging.',
    type: 'website',
    url: 'https://www.peptidesclav.com/growth-hormone',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Growth Hormone Peptides — CJC-1295 Ipamorelin IGF-1' }],
  },
};

const ghFaqs = [
  {
    q: 'What is the difference between CJC-1295 and Ipamorelin?',
    a: 'CJC-1295 is a GHRH analog — it binds to GHRH receptors in the pituitary to amplify and extend GH pulses. Ipamorelin is a GHRP (growth hormone releasing peptide) that selectively triggers GH release without elevating cortisol or prolactin. Used together, they hit two independent pathways simultaneously: one primes the pituitary (CJC-1295) while the other triggers the pulse (Ipamorelin). The result is GH elevations 3–5× higher than either compound alone.',
  },
  {
    q: 'When should I inject CJC-1295 / Ipamorelin?',
    a: 'The optimal time is 30–60 minutes before sleep in a completely fasted state (2+ hours after your last meal). This synchronizes the peptide-induced GH pulse with the body\'s largest natural GH release — which occurs during the first wave of deep sleep. Injecting fed blunts the response significantly. Avoid carbohydrates and insulin-spiking foods for 30 minutes post-injection as well.',
  },
  {
    q: 'How long until I see results from GH peptides?',
    a: 'Most users notice improved deep sleep and faster recovery within 1–2 weeks. Body composition changes (fat loss, lean mass increase) become visible around weeks 6–10 of a consistent protocol. The full benefit accumulates over 12–24 weeks, as GH-mediated effects on collagen, skin, and body composition are gradual by nature.',
  },
  {
    q: 'Can I stack IGF-1 LR3 with CJC-1295 / Ipamorelin?',
    a: 'Yes — this is the Performance Elite Stack. CJC-1295/Ipamorelin optimizes the GH pulse (upstream), and IGF-1 LR3 provides direct downstream anabolic signaling to muscle tissue. IGF-1 LR3 must be cycled in 4–6 week bursts due to receptor desensitization, so most users run it during specific phases of a longer GH peptide cycle rather than continuously.',
  },
  {
    q: 'Do GH peptides suppress natural GH production?',
    a: 'No — this is a key advantage over exogenous HGH. CJC-1295 and Ipamorelin work by amplifying the pituitary\'s own GH secretion through natural receptor pathways. They do not suppress the hypothalamic-pituitary-GH axis. GH secretion typically returns to baseline quickly after discontinuation, and no post-cycle therapy is required.',
  },
  {
    q: 'What dose of Ipamorelin and CJC-1295 should a beginner start with?',
    a: 'The standard starting dose is 100–200mcg of each peptide per injection. Both peptides are typically mixed in the same syringe and injected together subcutaneously. Start at the lower end (100mcg each) and assess tolerance over 1–2 weeks before increasing to 200mcg each. Most users find 200mcg of each before sleep to be the sweet spot for the balance of efficacy and cost.',
  },
];

const ghBenefits = [
  {
    icon: TrendingUp,
    title: 'Lean Muscle Growth',
    description: 'GH-mediated IGF-1 stimulation drives lean mass accrual over 12–24 week cycles without the androgenic side effects of anabolic steroids.',
    color: 'from-cyan-600 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Visceral Fat Loss',
    description: 'Growth hormone directly stimulates lipolysis in adipose tissue — particularly visceral fat, which is the most metabolically dangerous fat depot.',
    color: 'from-violet-600 to-violet-400',
  },
  {
    icon: Moon,
    title: 'Deep Sleep Optimization',
    description: 'GH is primarily secreted during deep sleep. GH peptides dramatically improve slow-wave sleep quality — users notice this within days of starting.',
    color: 'from-indigo-600 to-blue-500',
  },
];

export default function GrowthHormonePage() {
  const ghProducts = products.filter((p) => p.category === 'Growth Hormone');
  const ghStack = getStackById('gh-optimization');
  const performanceStack = getStackById('performance-elite');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Category</span>
              <ChevronRight size={14} className="text-zinc-600" />
              <span className="badge badge-cyan">Growth Hormone</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Growth Hormone </span>
              <span className="gradient-text">Peptides</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              CJC-1295 / Ipamorelin and IGF-1 LR3 are the most scientifically validated peptides for GH
              optimization. They amplify natural GH pulses 3–5× — driving lean muscle growth, visceral fat
              loss, and deep sleep improvement without suppressing your own GH axis.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/stacks/gh-optimization" className="btn-primary">
                GH Optimization Stack <ArrowRight size={16} />
              </Link>
              <a href="/go/shop" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Shop GH Peptides <ExternalLink size={15} />
              </a>
              <Link href="/products/ipamorelin-cjc" className="btn-secondary">
                CJC-1295 Protocol <ChevronRight size={15} />
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { value: '3–5×', label: 'Natural GH Pulse Amplification' },
                { value: '12–24wk', label: 'Recommended Cycle Length' },
                { value: 'No PCT', label: 'Required After Cycle' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black gradient-text">{s.value}</p>
                  <p className="text-xs text-zinc-600 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Why GH Peptides</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What GH Optimization Delivers</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Growth hormone peptides address three of the most sought-after physiological improvements simultaneously.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ghBenefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="card p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center mb-5`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{b.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────── */}
      <section className="py-12 sm:py-20" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">GH Peptide Catalog</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Growth Hormone Peptides</h2>
              <p className="text-zinc-400 mt-2 max-w-lg">
                Every GH peptide available — from the gold-standard Ipamorelin/CJC combo to advanced IGF-1 LR3 for direct anabolic signaling.
              </p>
            </div>
            <a
              href="/go/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-5 text-sm hidden sm:inline-flex"
            >
              Shop All <ExternalLink size={14} />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ghProducts.map((product) => (
              <ProductCard key={product.slug} product={product} showAffiliateButton={true} />
            ))}
          </div>
          <div className="mt-8 sm:hidden text-center">
            <a href="/go/shop" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Shop GH Peptides <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── PROTOCOL GUIDE ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">The Protocol</p>
            <h2 className="text-3xl font-bold text-white mb-5">How to Run GH Peptides</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Timing is everything with GH peptides. The largest natural GH pulse occurs 60–90 minutes after sleep onset.
              Injecting CJC-1295 / Ipamorelin 30 minutes before sleep in a fasted state synchronizes the peptide-triggered
              pulse with this window — producing an additive rather than competing effect.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Dose: 200mcg CJC-1295 + 200mcg Ipamorelin per injection',
                'Timing: 30–60 min before sleep, fully fasted (2+ hrs after last meal)',
                'Frequency: Daily (5 days on / 2 days off for receptor maintenance)',
                'Duration: 12–24 weeks continuous for full body composition benefit',
                'Optional second injection: Pre-workout for enhanced GH-mediated recovery',
                'No carbohydrates 30 min post-injection — insulin blunts GH release',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-zinc-400">
                  <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/products/ipamorelin-cjc" className="btn-primary text-sm px-5 py-2.5">
                Full CJC-1295 Protocol <ArrowRight size={14} />
              </Link>
              <Link href="/products/igf-1-lr3" className="btn-secondary text-sm px-5 py-2.5">
                IGF-1 LR3 Protocol <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Stacks */}
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-widest text-fuchsia-400 uppercase mb-1">Recommended Stacks</p>
            {[ghStack, performanceStack].filter(Boolean).map((stack) => stack && (
              <Link
                key={stack.id}
                href={`/stacks/${stack.id}`}
                className="card p-6 flex flex-col group block"
              >
                <div className="h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 mb-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-white text-base leading-tight">{stack.name}</h3>
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
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">{stack.shortDescription}</p>
                <div className="flex items-center justify-between text-xs border-t pt-3" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-zinc-500">Duration: <span className="text-zinc-300">{stack.duration}</span></span>
                  <span className="text-zinc-500">Cost: <span className="text-zinc-300">{stack.cost}</span></span>
                  <span className="flex items-center gap-1 text-violet-400 font-medium group-hover:gap-2 transition-all">
                    View Protocol <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-20" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Common Questions</p>
            <h2 className="text-3xl font-bold text-white mb-4">GH Peptide FAQ</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Everything you need to know before starting a growth hormone peptide protocol.
            </p>
          </div>
          <div className="space-y-4">
            {ghFaqs.map((faq, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-semibold text-white mb-3 flex items-start gap-3">
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ background: 'rgba(6,182,212,0.15)', color: '#22d3ee', border: '1px solid rgba(6,182,212,0.3)' }}
                  >
                    Q
                  </span>
                  {faq.q}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div
          className="rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(124,58,237,0.12) 100%)',
            border: '1px solid rgba(6,182,212,0.25)',
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">Start Your GH Protocol</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Optimize Your Growth Hormone?
          </h2>
          <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8">
            HPLC-verified CJC-1295, Ipamorelin, and IGF-1 LR3 — with COA per batch and science-backed protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/go/shop" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-3.5">
              Shop GH Peptides <ExternalLink size={16} />
            </a>
            <Link href="/stacks/gh-optimization" className="btn-secondary text-base px-8 py-3.5">
              View GH Stack <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn-secondary text-base px-8 py-3.5">
              All Peptides <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <RelatedReading pageKey="/growth-hormone" />
    </div>
  );
}
