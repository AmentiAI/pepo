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
  title: 'BPC-157 for Rotator Cuff | Shoulder Recovery Protocol',
  description:
    'BPC-157 and TB-500 rotator cuff recovery protocol. Evidence-based dosing, injection sites, and week-by-week timeline for tendon and labrum healing.',
  keywords:
    'BPC-157 rotator cuff, peptides for rotator cuff, BPC-157 shoulder, rotator cuff healing peptides, TB-500 shoulder recovery',
  alternates: { canonical: 'https://www.peptidesclav.com/healing/rotator-cuff' },
  openGraph: {
    title: 'BPC-157 for Rotator Cuff | Shoulder Recovery Protocol',
    description:
      'BPC-157 and TB-500 rotator cuff recovery protocol. Evidence-based dosing, injection sites, and week-by-week timeline for tendon and labrum healing.',
    type: 'website',
    url: 'https://www.peptidesclav.com/healing/rotator-cuff',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BPC-157 Rotator Cuff Recovery Protocol' }],
  },
};

const timeline = [
  {
    weeks: 'Week 1–2',
    title: 'Pain Reduction Begins',
    description:
      'Inflammation decreases noticeably. BPC-157 begins upregulating growth hormone receptors in the subacromial space. Most users report 20–40% reduction in resting pain.',
    color: 'text-yellow-600',
    border: 'border-yellow-400/40',
  },
  {
    weeks: 'Week 3–4',
    title: 'Improved Range of Motion',
    description:
      'Stiffness reduces as TB-500 begins breaking down accumulated fibrosis. Active range of motion improves — overhead reaching becomes less painful. Sleep quality on the affected side may improve.',
    color: 'text-yellow-600',
    border: 'border-cyan-500/30',
  },
  {
    weeks: 'Week 5–8',
    title: 'Structural Tissue Repair',
    description:
      'The core healing phase. BPC-157 drives tendon cell proliferation and collagen synthesis. Angiogenesis (new blood vessel formation) restores nutrient supply to avascular tendon tissue. Strength begins returning.',
    color: 'text-yellow-600',
    border: 'border-yellow-400/40',
  },
  {
    weeks: 'Week 9–12',
    title: 'Full Integration & Injury Prevention',
    description:
      'Repaired tissue matures and integrates with surrounding muscle and bone. Reinforcement of the healed area reduces re-injury risk. Most users achieve near-full or full functional recovery.',
    color: 'text-yellow-600',
    border: 'border-cyan-500/30',
  },
];

const faqs = [
  {
    q: 'How does BPC-157 heal rotator cuff tendons?',
    a: 'BPC-157 accelerates tendon healing through multiple pathways: it upregulates growth hormone receptors locally, promotes tendon fibroblast proliferation, stimulates angiogenesis (critical for the typically avascular rotator cuff), and modulates the inflammatory response to prevent excessive scar tissue. Unlike NSAIDs which suppress inflammation and impair healing, BPC-157 resolves inflammation while accelerating repair.',
  },
  {
    q: 'Should I inject near the shoulder or subcutaneously elsewhere?',
    a: 'For rotator cuff injuries, injecting subcutaneously near the shoulder — just below the deltoid or in the subacromial area — concentrates BPC-157 at the injury site and produces faster local effects. This is preferred for acute or focal tendon tears. TB-500 should always be injected systemically (abdomen or thigh) as it acts through the bloodstream and distributes systemically regardless of injection site.',
  },
  {
    q: 'Can I use peptides post-surgery?',
    a: 'Yes, and many surgeons familiar with peptides actively recommend BPC-157 post-operatively. Starting 72 hours after rotator cuff surgery (to allow initial wound closure) can significantly accelerate tendon-to-bone healing, reduce post-surgical inflammation, and improve long-term outcomes. Always confirm with your surgeon. The same protocol applies: 500mcg BPC-157 twice daily near the surgical site, TB-500 5mg twice weekly systemically.',
  },
  {
    q: 'How does this compare to platelet-rich plasma (PRP)?',
    a: 'PRP and BPC-157 are complementary rather than competing. PRP provides a concentrated burst of growth factors from your own blood at the injury site — excellent for acute re-stimulation. BPC-157 provides sustained, multi-mechanism healing support over weeks. BPC-157 is also significantly more affordable and self-administerable. Many practitioners combine both: PRP injection at the site plus BPC-157 + TB-500 systemically for 8–12 weeks.',
  },
];

export default function RotatorCuffPage() {
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
            <Link href="/healing" className="badge hover:text-gray-900 transition-colors">Healing</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="badge badge-cyan">Rotator Cuff</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">BPC-157 for </span>
              <span className="gradient-text">Rotator Cuff</span>
              <span className="text-gray-900"> Recovery</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Rotator cuff injuries — tears, tendinopathy, and impingement — are among the most
              stubborn musculoskeletal injuries to heal. BPC-157 and TB-500 address the exact
              biological bottlenecks that stall shoulder recovery.
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
              { icon: <Zap size={18} className="text-yellow-600" />, value: '8–12', label: 'Week full recovery' },
              { icon: <Clock size={18} className="text-yellow-600" />, value: '3–7', label: 'Days to pain relief' },
              { icon: <Syringe size={18} className="text-yellow-600" />, value: '2×', label: 'Daily injections' },
              { icon: <Shield size={18} className="text-yellow-600" />, value: '500mcg', label: 'BPC-157 per dose' },
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

      {/* Protocol Overview */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <span className="badge badge-cyan mb-4 inline-block">Protocol Overview</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Rotator Cuff Peptide Protocol
          </h2>
          <p className="text-gray-500 max-w-2xl">
            This protocol is designed for rotator cuff tears (partial and full), supraspinatus
            tendinopathy, impingement syndrome, and labrum injuries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* BPC-157 card */}
          <div
            className="card p-6 border"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center">
                <Syringe size={20} className="text-yellow-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">BPC-157</p>
                <p className="text-xs text-gray-500">Body Protective Compound</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Dose</span>
                <span className="text-gray-900 font-semibold">500 mcg per injection</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Frequency</span>
                <span className="text-gray-900 font-semibold">2× per day</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Injection site</span>
                <span className="text-gray-900 font-semibold">Near shoulder / subacromial</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Route</span>
                <span className="text-gray-900 font-semibold">Subcutaneous</span>
              </div>
            </div>
          </div>

          {/* TB-500 card */}
          <div
            className="card p-6 border"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                <Shield size={20} className="text-yellow-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">TB-500</p>
                <p className="text-xs text-gray-500">Thymosin Beta-4</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Dose</span>
                <span className="text-gray-900 font-semibold">5 mg per injection</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Frequency</span>
                <span className="text-gray-900 font-semibold">2× per week</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Injection site</span>
                <span className="text-gray-900 font-semibold">Abdomen (systemic)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Route</span>
                <span className="text-gray-900 font-semibold">Subcutaneous</span>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div
            className="card p-6 border md:col-span-2"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Clock size={18} className="text-yellow-600" />
              <p className="font-bold text-gray-900">Protocol Duration</p>
            </div>
            <p className="text-gray-500 text-sm">
              <span className="text-gray-900 font-semibold">8–12 weeks</span> for most rotator cuff
              injuries. Partial tears typically resolve by week 8. Full-thickness tears and
              post-surgical cases benefit from the full 12-week course. Follow with a 4-week break
              before repeating if needed.
            </p>
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Mechanism</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Why BPC-157 Works for Shoulder Injuries
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Angiogenesis',
                desc: 'Rotator cuff tendons have poor blood supply — the primary reason they heal slowly. BPC-157 directly stimulates formation of new blood vessels, restoring nutrient delivery to the injury site.',
                accent: 'text-yellow-600',
                bg: 'bg-yellow-50',
              },
              {
                title: 'Tendon Fibroblast Activation',
                desc: 'BPC-157 upregulates tendon fibroblast growth factor receptors, driving the proliferation of cells responsible for producing new collagen — the structural protein of tendons.',
                accent: 'text-yellow-600',
                bg: 'bg-cyan-500/10',
              },
              {
                title: 'Inflammation Resolution',
                desc: 'Unlike anti-inflammatories that block healing signals, BPC-157 resolves chronic neurogenic inflammation while preserving the acute inflammatory signals that initiate repair.',
                accent: 'text-yellow-600',
                bg: 'bg-yellow-50',
              },
              {
                title: 'Fibrosis Breakdown (TB-500)',
                desc: "TB-500's primary role in shoulder injuries is breaking down accumulated scar tissue and restoring normal tissue architecture and flexibility.",
                accent: 'text-yellow-600',
                bg: 'bg-cyan-500/10',
              },
              {
                title: 'GH Receptor Upregulation',
                desc: 'BPC-157 amplifies the local effect of growth hormone at the injury site, accelerating tissue regeneration beyond what systemic GH levels alone can achieve.',
                accent: 'text-yellow-600',
                bg: 'bg-yellow-50',
              },
              {
                title: 'Nitric Oxide Pathway',
                desc: 'BPC-157 modulates nitric oxide signaling to improve local blood flow and reduce ischemic pain — one of the reasons many users notice rapid pain relief within the first week.',
                accent: 'text-yellow-600',
                bg: 'bg-cyan-500/10',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card p-5 border"
                style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              >
                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center mb-3`}>
                  <CheckCircle2 size={16} className={item.accent} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Week-by-Week Timeline */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Recovery Timeline</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Week-by-Week Recovery Timeline
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          Individual results vary based on injury severity, age, and baseline health. These
          milestones reflect typical progression for a partial rotator cuff tear or tendinopathy.
        </p>
        <div className="relative">
          {/* Timeline line */}
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
                  <span className="text-xs font-bold text-gray-500">{i + 1}</span>
                </div>
                <div
                  className={`card flex-1 p-5 border ${item.border}`}
                  style={{ background: 'var(--bg-card)' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider ${item.color}`}>
                      {item.weeks}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
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
            <HelpCircle size={20} className="text-yellow-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
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
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            The Ultimate Healing Stack includes both BPC-157 and TB-500 with full protocol
            guidance — everything you need for rotator cuff recovery.
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
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <Link href="/healing" className="hover:text-gray-700 transition-colors">
            ← Back to All Healing Protocols
          </Link>
        </div>
      </section>

      <RelatedReading pageKey="/healing/rotator-cuff" />
    </div>
  );
}
