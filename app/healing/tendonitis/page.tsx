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
  Zap,
} from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'BPC-157 for Tendonitis | Tendon Pain & Healing Protocol',
  description:
    'BPC-157 and TB-500 tendonitis protocol — patellar, Achilles, elbow, and wrist tendonitis. Evidence-based dosing with week-by-week recovery timeline.',
  keywords:
    'BPC-157 tendonitis, peptides for tendonitis, BPC-157 Achilles tendon, patellar tendonitis peptides, tendon healing peptides, TB-500 tendonitis',
  alternates: { canonical: 'https://www.peptidesclav.com/healing/tendonitis' },
  openGraph: {
    title: 'BPC-157 for Tendonitis | Tendon Pain & Healing Protocol',
    description:
      'BPC-157 and TB-500 tendonitis protocol — patellar, Achilles, elbow, and wrist tendonitis. Evidence-based dosing with week-by-week recovery timeline.',
    type: 'website',
    url: 'https://www.peptidesclav.com/healing/tendonitis',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BPC-157 Tendonitis Recovery Protocol' }],
  },
};

const tendonTypes = [
  {
    name: 'Patellar Tendonitis',
    location: 'Knee',
    tag: 'Jumper\'s Knee',
    inject: 'Just below patella / medial knee',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    name: 'Achilles Tendonitis',
    location: 'Ankle',
    tag: 'Runner\'s Tendon',
    inject: 'Posterior ankle / lower calf',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    name: 'Lateral Epicondylitis',
    location: 'Elbow',
    tag: 'Tennis Elbow',
    inject: 'Lateral epicondyle area',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    name: 'Plantar Fasciitis',
    location: 'Foot',
    tag: 'Heel Pain',
    inject: 'Medial heel / arch area',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
];

const timeline = [
  {
    weeks: 'Week 1–2',
    title: 'Pain Reduction Begins',
    description:
      'Acute pain and heat around the tendon decreases. BPC-157 begins modulating the inflammatory cascade — most users report 25–40% reduction in activity-related pain by end of week 2.',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
  },
  {
    weeks: 'Week 3–4',
    title: 'Improved Range of Motion',
    description:
      'Morning stiffness decreases. TB-500 begins dissolving accumulated fibrous adhesions. Eccentric loading (e.g., heel drops for Achilles) becomes more tolerable and productive.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
  },
  {
    weeks: 'Week 5–8',
    title: 'Structural Tendon Repair',
    description:
      'The core healing window. Collagen synthesis is elevated and new blood vessels supply previously ischemic tendon tissue. Strength during load-bearing activities returns progressively.',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
  },
  {
    weeks: 'Week 9–10',
    title: 'Full Integration & Return to Sport',
    description:
      'Healed tendon tissue matures and aligns with mechanical load. Eccentric and plyometric training can resume. The risk of re-injury is significantly reduced versus untreated healing.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
  },
];

const faqs = [
  {
    q: 'Which tendonitis responds best to BPC-157?',
    a: 'All common tendinopathies respond well, but Achilles and patellar tendonitis have the most supporting evidence in the research literature. These tendons are also notoriously slow to heal conventionally due to poor vascularity — exactly the bottleneck BPC-157 addresses through angiogenesis. Tennis elbow (lateral epicondylitis) and plantar fasciitis also respond strongly, typically within 4–6 weeks.',
  },
  {
    q: 'Should I inject locally near the tendon or systemically?',
    a: 'For tendonitis, local subcutaneous injection near the affected tendon produces faster and more concentrated effects. Inject within 2–4 cm of the pain site — you do not need to inject into the tendon itself. TB-500 should always be injected systemically (abdomen or thigh) as it works through the bloodstream. If you are treating multiple tendon sites simultaneously, systemic BPC-157 injection (abdomen) also produces systemic healing effects, though slightly slower locally.',
  },
  {
    q: 'Does it matter if my tendonitis is chronic or acute?',
    a: 'Yes — chronic tendonitis (tendinosis) and acute tendonitis involve different tissue states. Acute tendonitis involves active inflammation that BPC-157 resolves quickly (1–2 weeks). Chronic tendinosis involves degenerated, disorganized collagen with minimal vascularity — here BPC-157\'s angiogenic effects are especially critical, and the full 8–10 week course is recommended. TB-500\'s fibrosis-dissolving action is particularly valuable for chronic cases with scar tissue buildup.',
  },
  {
    q: 'Can I exercise during the protocol?',
    a: 'Yes, and it is recommended — with appropriate load management. BPC-157 does not accelerate healing by reducing mechanical stimulus; it works alongside it. Eccentric loading protocols (e.g., heel drops for Achilles, single-leg squats for patellar) have synergistic effects with BPC-157 by promoting organized collagen alignment. Avoid high-impact loading in weeks 1–2, then progressively reintroduce. The peptides reduce pain enough that many users can resume structured rehabilitation sooner than expected.',
  },
];

export default function TendonitisPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="badge hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-zinc-600" />
            <Link href="/healing" className="badge hover:text-white transition-colors">Healing</Link>
            <ChevronRight size={14} className="text-zinc-600" />
            <span className="badge badge-cyan">Tendonitis</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">BPC-157 for </span>
              <span className="gradient-text">Tendonitis</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              Tendon injuries are the most common sports injury — and among the most frustrating to
              heal. BPC-157 targets the exact biological failures that cause tendons to stall in
              chronic pain: poor vascularity, disordered collagen, and persistent inflammation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/ultimate-healing" className="btn-primary">
                Ultimate Healing Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/healing" className="btn-secondary">
                All Healing Protocols
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Zap size={18} className="text-violet-400" />, value: '6–10', label: 'Week protocol duration' },
              { icon: <Clock size={18} className="text-cyan-400" />, value: '1–2', label: 'Weeks to pain relief' },
              { icon: <Syringe size={18} className="text-violet-400" />, value: '250–500', label: 'mcg per injection' },
              { icon: <Shield size={18} className="text-cyan-400" />, value: '4+', label: 'Tendon types covered' },
            ].map((stat) => (
              <div key={stat.label} className="card p-4 flex items-start gap-3">
                <div className="mt-0.5">{stat.icon}</div>
                <div>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Tendon Types */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Conditions Covered</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Tendonitis Types This Protocol Addresses
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          BPC-157 works across all tendon types through the same core mechanism. Injection site
          varies by location — all other protocol parameters remain constant.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tendonTypes.map((t) => (
            <div
              key={t.name}
              className="card p-5 border"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
            >
              <div className={`w-8 h-8 rounded-lg ${t.bg} flex items-center justify-center mb-3`}>
                <Syringe size={16} className={t.color} />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-white text-sm">{t.name}</h3>
              </div>
              <span className="tag-chip mb-3 inline-block">{t.tag}</span>
              <div className="space-y-1.5 mt-2">
                <p className="text-xs text-zinc-500">
                  <span className="text-zinc-400 font-medium">Location:</span> {t.location}
                </p>
                <p className="text-xs text-zinc-500">
                  <span className="text-zinc-400 font-medium">Inject near:</span> {t.inject}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Protocol Overview</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Tendonitis Peptide Protocol
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="card p-6 border"
              style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center">
                  <Syringe size={20} className="text-violet-400" />
                </div>
                <div>
                  <p className="font-bold text-white">BPC-157</p>
                  <p className="text-xs text-zinc-500">Local tendon healing</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Dose</span>
                  <span className="text-white font-semibold">250–500 mcg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Frequency</span>
                  <span className="text-white font-semibold">2× per day</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Injection site</span>
                  <span className="text-white font-semibold">Near affected tendon</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Route</span>
                  <span className="text-white font-semibold">Subcutaneous</span>
                </div>
              </div>
            </div>

            <div
              className="card p-6 border"
              style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <Shield size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="font-bold text-white">TB-500</p>
                  <p className="text-xs text-zinc-500">Systemic anti-fibrotic</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Dose</span>
                  <span className="text-white font-semibold">5 mg per injection</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Frequency</span>
                  <span className="text-white font-semibold">2× per week</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Injection site</span>
                  <span className="text-white font-semibold">Abdomen (systemic)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Duration</span>
                  <span className="text-white font-semibold">6–10 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Timeline */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Recovery Timeline</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Week-by-Week Recovery Timeline
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          Timelines apply to most tendon types. Chronic tendinosis (12+ months) may take 2–4 weeks
          longer. Acute tendonitis (&lt;3 months) often resolves faster.
        </p>
        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ backgroundColor: 'var(--border)' }}
          />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 z-10"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <span className="text-xs font-bold text-zinc-400">{i + 1}</span>
                </div>
                <div
                  className={`card flex-1 p-5 border ${item.border}`}
                  style={{ background: 'var(--bg-card)' }}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider ${item.color}`}>
                    {item.weeks}
                  </span>
                  <h3 className="font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={20} className="text-violet-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card p-6 border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Start Your Tendon Recovery Protocol
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            The Ultimate Healing Stack has everything you need — BPC-157, TB-500, and complete
            protocol guidance for any tendon injury.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/stacks/ultimate-healing" className="btn-primary">
            Ultimate Healing Stack
            <ArrowRight size={16} />
          </Link>
          <Link href="/products/bpc-157" className="btn-secondary">
            BPC-157 Product Page
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Link href="/healing" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to All Healing Protocols
          </Link>
        </div>
      </section>

      <RelatedReading pageKey="/healing/tendonitis" />
    </div>
  );
}
