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
  title: 'BPC-157 for ACL Recovery | Knee Ligament Healing',
  description:
    'BPC-157 and TB-500 ACL recovery protocol — pre and post-surgery peptide support for faster ligament healing, reduced swelling, and restored knee stability.',
  keywords:
    'BPC-157 ACL, peptides for ACL recovery, ACL healing peptides, TB-500 ACL, knee ligament peptides, ACL surgery peptides, ACL recovery protocol',
  alternates: { canonical: 'https://www.peptidesclav.com/healing/acl' },
  openGraph: {
    title: 'BPC-157 for ACL Recovery | Knee Ligament Healing',
    description:
      'BPC-157 and TB-500 ACL recovery protocol — pre and post-surgery peptide support for faster ligament healing, reduced swelling, and restored knee stability.',
    type: 'website',
    url: 'https://www.peptidesclav.com/healing/acl',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BPC-157 ACL Recovery Protocol' }],
  },
};

const timeline = [
  {
    phase: 'Pre-Op',
    weeks: 'Week −2 to 0',
    title: 'Tissue Priming',
    description:
      'Begin BPC-157 500mcg twice daily in the two weeks before surgery. Pre-operative peptide loading primes the local tissue environment, upregulates growth factor receptors, and may reduce post-surgical swelling. Some surgeons report cleaner operative fields in patients who pre-loaded BPC-157.',
    color: 'text-gray-500',
    border: 'border-zinc-600/30',
    bg: 'bg-zinc-500/10',
  },
  {
    phase: 'Post-Op',
    weeks: 'Week 1–4',
    title: 'Swelling Reduction & Initial Healing',
    description:
      'BPC-157 500mcg twice daily near the knee + TB-500 10mg/week loading dose. The loading phase of TB-500 accelerates systemic anti-inflammatory effects and initiates ligament fibroblast recruitment. Post-surgical swelling and pain typically decrease 30–50% faster versus no peptide use.',
    color: 'text-yellow-600',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-50',
  },
  {
    phase: 'Post-Op',
    weeks: 'Week 5–12',
    title: 'Ligament Remodeling',
    description:
      'Shift TB-500 to 5mg/week maintenance. BPC-157 continues driving collagen synthesis and angiogenesis. The graft (patellar tendon or hamstring) begins remodeling into ligament tissue — a process called "ligamentization" that BPC-157 directly accelerates. Range of motion and early strength training resumes.',
    color: 'text-yellow-600',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
  },
  {
    phase: 'Post-Op',
    weeks: 'Week 13–24',
    title: 'Strength Rebuilding',
    description:
      'Peptide protocol can be tapered or continued at maintenance dose. Quadriceps and hamstring symmetry returns. Agility, proprioception, and sport-specific training resume. Graft maturation continues for up to 12–18 months but the functional recovery phase is largely complete.',
    color: 'text-yellow-600',
    border: 'border-yellow-400/40',
    bg: 'bg-yellow-50',
  },
];

const faqs = [
  {
    q: 'Can BPC-157 replace ACL surgery?',
    a: "No — BPC-157 cannot replace ACL reconstruction for complete tears. The ACL has virtually no intrinsic healing capacity after complete rupture due to its intra-articular environment. BPC-157 accelerates and enhances surgical healing, not non-surgical healing of complete tears. For partial tears (grade I–II sprains), BPC-157 can potentially enable non-surgical recovery with proper rehabilitation, but this should be assessed by an orthopedic surgeon with MRI confirmation.",
  },
  {
    q: 'When should I start peptides after ACL surgery?',
    a: 'Start BPC-157 as soon as 48–72 hours post-operatively, once the surgical site has begun closing. Earlier is generally better for reducing the inflammatory cascade. TB-500 can be started simultaneously at the 10mg/week loading dose. There is no evidence of interference with the graft-to-bone tunnel healing when peptides are started at this window. Many users also pre-load for 2 weeks before surgery for optimal tissue priming.',
  },
  {
    q: 'How does BPC-157 promote ligament healing differently from tendons?',
    a: 'Ligament healing differs from tendon healing in several ways: ligaments have less collagen density, different collagen subtype ratios (more type III vs type I), and are often in avascular intra-articular environments. BPC-157 addresses the shared bottleneck — poor vascularity and fibroblast signaling — but in the ACL context, the key benefit is accelerating ligamentization of the graft tissue and improving bone-tunnel integration. TB-500 also plays a larger role in ACL recovery than in tendon recovery due to the greater degree of scar tissue and adhesion formation post-surgery.',
  },
  {
    q: 'What about meniscus injuries alongside ACL?',
    a: 'Combined ACL + meniscus injuries are common (the "unhappy triad"). BPC-157 supports meniscal repair as well as ligament healing — the mechanisms overlap significantly. If you have a combined injury, the same protocol applies but extend the duration: run BPC-157 for 12–16 weeks rather than 8–12. Meniscal tissue, particularly the avascular inner zone, benefits especially from BPC-157\'s angiogenic effects. Discuss the specific meniscal repair type with your surgeon, as the healing timeline varies by repair location.',
  },
];

export default function ACLPage() {
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
            <Link href="/healing" className="badge hover:text-gray-900 transition-colors">Healing</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="badge badge-cyan">ACL Recovery</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">BPC-157 for </span>
              <span className="gradient-text">ACL Recovery</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
              ACL reconstruction is one of the most demanding recovery timelines in sports medicine.
              BPC-157 and TB-500 address the core biological bottlenecks — graft ligamentization,
              post-surgical inflammation, and bone-tunnel integration — to accelerate every phase.
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
              { icon: <Zap size={18} className="text-yellow-600" />, value: '24 wk', label: 'Full recovery timeline' },
              { icon: <Clock size={18} className="text-yellow-600" />, value: '2 wk', label: 'Pre-op tissue priming' },
              { icon: <Syringe size={18} className="text-yellow-600" />, value: '500mcg', label: 'BPC-157 per dose' },
              { icon: <Shield size={18} className="text-yellow-600" />, value: '10mg', label: 'TB-500 loading dose/wk' },
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

      {/* Protocol Overview — Pre & Post */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Protocol Overview</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Pre- &amp; Post-Surgery Protocol
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          The ACL protocol is divided into two phases: pre-operative tissue priming and
          post-operative recovery. Both phases are critical for optimal outcomes.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pre-op */}
          <div
            className="card p-6 border border-zinc-600/40"
            style={{ background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">Pre-Surgery</span>
              <span className="text-xs text-gray-500">Week −2 to 0</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Tissue Priming Phase</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">BPC-157 dose</span>
                <span className="text-gray-900 font-semibold">500 mcg × 2 daily</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">TB-500</span>
                <span className="text-gray-900 font-semibold">Optional / 5mg/week</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Duration</span>
                <span className="text-gray-900 font-semibold">2 weeks before surgery</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Goal</span>
                <span className="text-gray-900 font-semibold">Upregulate healing receptors</span>
              </div>
            </div>
          </div>

          {/* Post-op Loading */}
          <div
            className="card p-6 border border-yellow-400/40"
            style={{ background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="badge badge-cyan">Post-Surgery</span>
              <span className="text-xs text-gray-500">Week 1–4</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Loading Phase</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">BPC-157</span>
                <span className="text-gray-900 font-semibold">500 mcg × 2 daily</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">TB-500</span>
                <span className="text-gray-900 font-semibold">10 mg/week loading</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Inject near</span>
                <span className="text-gray-900 font-semibold">Knee (BPC) / Abdomen (TB)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Start</span>
                <span className="text-gray-900 font-semibold">48–72 hrs post-op</span>
              </div>
            </div>
          </div>

          {/* Post-op Maintenance */}
          <div
            className="card p-6 border border-cyan-500/30 md:col-span-2"
            style={{ background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="badge badge-cyan">Post-Surgery</span>
              <span className="text-xs text-gray-500">Week 5–12+</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Maintenance &amp; Remodeling Phase</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex justify-between sm:flex-col gap-1 text-sm">
                <span className="text-gray-500">BPC-157</span>
                <span className="text-gray-900 font-semibold">500 mcg × 2 daily (continue)</span>
              </div>
              <div className="flex justify-between sm:flex-col gap-1 text-sm">
                <span className="text-gray-500">TB-500 (maintenance)</span>
                <span className="text-gray-900 font-semibold">5 mg/week</span>
              </div>
              <div className="flex justify-between sm:flex-col gap-1 text-sm">
                <span className="text-gray-500">Total duration</span>
                <span className="text-gray-900 font-semibold">12–16 weeks post-op</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge mb-4 inline-block">Mechanism</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            How Peptides Accelerate ACL Healing
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Graft Ligamentization',
                desc: "BPC-157 accelerates the remodeling of tendon graft tissue into ligament — the most time-sensitive phase of ACL recovery. By upregulating fibroblast signaling, it shortens the ligamentization window significantly.",
                accent: 'text-yellow-600',
                bg: 'bg-yellow-50',
              },
              {
                title: 'Bone-Tunnel Integration',
                desc: 'The graft-to-bone tunnel interface is a critical healing point. BPC-157 promotes periosteal growth and collagen organization at the tunnel aperture, improving fixation strength during the vulnerable early weeks.',
                accent: 'text-yellow-600',
                bg: 'bg-cyan-500/10',
              },
              {
                title: 'Swelling & Hemarthrosis',
                desc: 'Post-surgical knee effusion delays rehabilitation. BPC-157 modulates the inflammatory mediators responsible for excessive fluid accumulation, reducing swelling faster and allowing earlier quad activation.',
                accent: 'text-yellow-600',
                bg: 'bg-yellow-50',
              },
              {
                title: 'Fibrosis Prevention (TB-500)',
                desc: 'Post-surgical adhesions can limit long-term range of motion. TB-500 prevents excessive fibrosis formation during the healing phase, preserving joint mobility and preventing "cyclops lesion" formation.',
                accent: 'text-yellow-600',
                bg: 'bg-cyan-500/10',
              },
              {
                title: 'Angiogenesis at the Graft',
                desc: 'The transplanted graft undergoes avascular necrosis early post-surgery before revascularization occurs. BPC-157 accelerates new vessel ingrowth into the graft, shortening the vulnerable avascular window.',
                accent: 'text-yellow-600',
                bg: 'bg-yellow-50',
              },
              {
                title: 'Quad Atrophy Mitigation',
                desc: 'BPC-157 has demonstrated direct effects on muscle fiber preservation and satellite cell activation. Combined with early quad-setting exercises, it helps preserve the quadriceps mass that is lost rapidly after ACL surgery.',
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

      {/* Timeline */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="badge badge-cyan mb-4 inline-block">Recovery Timeline</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          ACL Recovery Timeline with Peptides
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          Standard ACL recovery is 9–12 months. With optimized peptide support and rehabilitation,
          many athletes achieve return-to-sport criteria in 6–8 months.
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
                  <span className="text-xs font-bold text-gray-500">{i + 1}</span>
                </div>
                <div
                  className={`card flex-1 p-5 border ${item.border}`}
                  style={{ background: 'var(--bg-card)' }}
                >
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className={`text-xs font-bold uppercase tracking-wider ${item.color}`}>
                      {item.weeks}
                    </span>
                    <span className="badge text-[10px]">{item.phase}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
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
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Start Your ACL Recovery Protocol
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            The Ultimate Healing Stack includes BPC-157 and TB-500 with complete ACL protocol
            guidance for both pre- and post-surgical phases.
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
          <Link href="/healing" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            ← Back to All Healing Protocols
          </Link>
        </div>
      </section>

      <RelatedReading pageKey="/healing/acl" />
    </div>
  );
}
