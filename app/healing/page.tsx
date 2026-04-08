import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ShieldCheck, Clock, ArrowRight, CheckCircle2, HelpCircle, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { getStackById } from '@/lib/stacks';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Healing & Recovery Peptides | BPC-157, TB-500 Protocols',
  description:
    'BPC-157 and TB-500 protocols for injury recovery — tendons, ligaments, muscle, and gut healing. Science-backed dosing guides and stacking protocols.',
  keywords: 'BPC-157, TB-500, healing peptides, injury recovery, tendon repair, peptide protocols, BPC-157 dosing',
  alternates: { canonical: 'https://www.peptidesclav.com/healing' },
  openGraph: {
    title: 'Healing & Recovery Peptides | BPC-157, TB-500 Protocols',
    description:
      'BPC-157 and TB-500 — the gold-standard peptide combination for musculoskeletal injury recovery.',
    type: 'website',
    url: 'https://www.peptidesclav.com/healing',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Healing & Recovery Peptides — BPC-157 and TB-500' }],
  },
};

const healingFaqs = [
  {
    q: 'Can BPC-157 help with gut permeability and leaky gut syndrome?',
    a: 'Yes — BPC-157 is one of the most researched peptides for gut healing. It directly repairs intestinal tight junctions, restores mucosal lining integrity, and counteracts NSAID-induced gut damage. Studies show BPC-157 heals full-thickness gastric ulcers, reverses alcohol-induced gut damage, and protects against stress-induced ulceration. For leaky gut specifically, subcutaneous administration works as effectively as oral dosing, with many users reporting significant improvement in digestive symptoms within 2–4 weeks.',
  },
  {
    q: 'Is TB-500 effective for hair regrowth and follicle health?',
    a: 'TB-500 stimulates hair follicle stem cells and increases the expression of hair growth genes. Research has shown it enlarges hair follicle size and improves follicular blood supply — two key mechanisms underlying hair loss. Many users combine TB-500 systemically with GHK-Cu (which has the strongest follicle data of any peptide) for a comprehensive hair restoration protocol. Results are typically visible after 8–12 weeks of consistent use.',
  },
  {
    q: 'Should I stop exercising while using healing peptides?',
    a: 'Active movement, within tolerance, generally accelerates healing outcomes with BPC-157 and TB-500. Both peptides work by enhancing tissue repair processes that are stimulated by mechanical loading — complete immobilization can actually impede their efficacy. Continue light-to-moderate movement of the injured area (within pain limits), and reserve complete rest only for acute inflammatory phases (first 48–72 hours post-injury). As healing progresses, gradually increase load while continuing the peptide protocol.',
  },
  {
    q: 'How long until I feel BPC-157 working?',
    a: 'Most users notice reduced pain and inflammation within 3–7 days of starting BPC-157 at 250–500mcg twice daily. Structural tissue repair continues over 4–12 weeks, with full resolution of most soft tissue injuries by weeks 8–12.',
  },
  {
    q: 'Should I inject near the injury site or subcutaneously elsewhere?',
    a: 'For local injuries (tendons, ligaments, joints), injecting subcutaneously near the injury site concentrates the peptide locally and produces faster results. For gut or systemic conditions, anywhere subcutaneous works equally well. TB-500 should always be injected systemically (abdomen or thigh) as it works through the bloodstream.',
  },
  {
    q: 'Can I stack BPC-157 with TB-500 from day one?',
    a: 'Yes — this is actually the recommended approach for most injuries. BPC-157 and TB-500 work through entirely different mechanisms and have no negative interactions. Running them together from the start produces synergistic results that far exceed either compound alone.',
  },
  {
    q: 'Is BPC-157 safe for long-term use?',
    a: "BPC-157 is derived from a protein naturally found in human gastric juice. No significant toxicity has been observed at therapeutic doses in research models, and many users run it continuously for chronic conditions. The standard cycle is 8–12 weeks on with a 4-week break, though this is conservative — not a safety requirement.",
  },
  {
    q: 'Will these peptides work for chronic injuries, not just acute ones?',
    a: 'Yes, and arguably this is where they shine. Chronic injuries often involve poor blood supply and incomplete healing cycles. BPC-157 actively stimulates angiogenesis (new blood vessel formation) which is the primary bottleneck in healing chronic tendinopathies, and TB-500 breaks down accumulated fibrosis (scar tissue) to restore proper tissue architecture.',
  },
  {
    q: 'What dose should a beginner start with?',
    a: 'Start with BPC-157 at 250mcg twice daily (morning and evening). If well-tolerated after a week, you can increase to 500mcg per injection. For TB-500, begin with 2.5mg twice per week (5mg/week total) during a maintenance phase, or 5mg twice per week (10mg/week) during a loading phase for acute injuries.',
  },
];

export default function HealingPage() {
  const healingProducts = products.filter((p) => p.category === 'Healing & Recovery');
  const healingStack = getStackById('ultimate-healing');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="badge">Category</span>
              <ChevronRight size={14} className="text-zinc-600" />
              <span className="badge badge-cyan">Healing & Recovery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Healing &amp; </span>
              <span className="gradient-text">Recovery</span>
              <span className="text-white"> Peptides</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
              BPC-157 and TB-500 are the most validated peptides for musculoskeletal injury recovery.
              Together they cover every mechanism of the healing cascade — from local tissue repair and
              angiogenesis to systemic inflammation reduction and flexibility restoration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/stacks/ultimate-healing" className="btn-primary">
                View Healing Stack
                <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn-secondary">
                All Products
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <Zap size={18} className="text-violet-400" />, value: '2×', label: 'Faster healing vs. untreated' },
              { icon: <ShieldCheck size={18} className="text-cyan-400" />, value: '30+', label: 'Years of research' },
              { icon: <Clock size={18} className="text-violet-400" />, value: '3–7', label: 'Days to first effects' },
              { icon: <CheckCircle2 size={18} className="text-cyan-400" />, value: '100%', label: 'Naturally-derived basis' },
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

      {/* Products grid */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Healing &amp; Recovery Products
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Every peptide in this category has been selected for its evidence base in tissue repair,
            inflammation reduction, and recovery acceleration.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {healingProducts.map((product) => (
            <ProductCard key={product.slug} product={product} showAffiliateButton />
          ))}
        </div>
      </section>

      {/* Featured stack */}
      {healingStack && (
        <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge">Featured Stack</span>
              <span className="badge badge-cyan">Most Popular</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {healingStack.name}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {healingStack.shortDescription}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { label: 'Duration', value: healingStack.duration },
                    { label: 'Cost', value: healingStack.cost },
                    { label: 'Difficulty', value: healingStack.difficulty },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="px-4 py-2.5 rounded-xl border"
                      style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                    >
                      <p className="text-[11px] text-zinc-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-white mt-0.5">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Link href="/stacks/ultimate-healing" className="btn-primary">
                  Full Stack Protocol
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                  Expected Results
                </h3>
                {healingStack.expectedResults.map((result, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                  >
                    <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-zinc-300">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How healing peptides work */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How These Peptides Accelerate Healing</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            BPC-157 and TB-500 target distinct but complementary aspects of the healing cascade,
            making their combination greater than the sum of its parts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: 'BPC-157',
              subtitle: 'Local Repair Engine',
              color: 'violet',
              points: [
                'Upregulates growth hormone receptors at injury site',
                'Stimulates VEGF for new blood vessel formation (angiogenesis)',
                'Promotes collagen synthesis and tendon-to-bone attachment',
                'Inhibits inflammatory cytokines without immune suppression',
                'Heals gut lining — uniquely effective for IBD and leaky gut',
              ],
            },
            {
              name: 'TB-500',
              subtitle: 'Systemic Healing Signal',
              color: 'cyan',
              points: [
                'Binds to actin — drives cell migration and proliferation throughout the body',
                'Reduces fibrosis and scar tissue formation after injury',
                'Anti-inflammatory at the systemic level, not just locally',
                'Promotes myogenesis (muscle fiber formation)',
                'Restores flexibility and range of motion in damaged fascia',
              ],
            },
          ].map((item) => (
            <div key={item.name} className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    item.color === 'violet'
                      ? 'bg-violet-600/15 border border-violet-600/25'
                      : 'bg-cyan-500/15 border border-cyan-500/25'
                  }`}
                >
                  <Zap
                    size={18}
                    className={item.color === 'violet' ? 'text-violet-400' : 'text-cyan-400'}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.name}</h3>
                  <p className="text-xs text-zinc-500">{item.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <CheckCircle2
                      size={14}
                      className={`mt-0.5 shrink-0 ${
                        item.color === 'violet' ? 'text-violet-400' : 'text-cyan-400'
                      }`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONDITIONS SECTION ──────────────────────────── */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">Applications</p>
            <h2 className="text-3xl font-bold text-white mb-4">What Conditions Do Healing Peptides Treat?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              BPC-157 and TB-500 have the broadest documented therapeutic scope of any peptide class.
              Below are the most commonly targeted conditions — each with specific evidence in the peer-reviewed literature.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                category: 'Tendon Injuries',
                color: 'text-violet-400',
                items: ['Achilles tendinopathy and tears', 'Patellar tendon injuries', 'Rotator cuff partial and full tears', 'Tennis elbow (lateral epicondylitis)', 'Biceps tendon injuries', 'Plantar fasciitis'],
              },
              {
                category: 'Ligament & Joint',
                color: 'text-cyan-400',
                items: ['ACL, MCL, PCL sprains and tears', 'Ankle ligament injuries', 'Knee osteoarthritis and cartilage damage', 'Hip labral tears', 'Shoulder instability', 'Post-surgical joint recovery'],
              },
              {
                category: 'Muscle Injuries',
                color: 'text-violet-400',
                items: ['Muscle tears (grade I–III strains)', 'Chronic overuse injuries', 'Hamstring and quadriceps pulls', 'Calf strains', 'Sports hernias', 'Post-training DOMS acceleration'],
              },
              {
                category: 'Gut & GI Conditions',
                color: 'text-cyan-400',
                items: ['Inflammatory bowel disease (IBD/Crohn\'s)', 'Leaky gut syndrome and intestinal permeability', 'NSAID-induced gut damage', 'Gastric ulcers and GERD', 'Post-antibiotic gut dysbiosis', 'Irritable bowel syndrome (IBS)'],
              },
              {
                category: 'Neurological & Systemic',
                color: 'text-violet-400',
                items: ['Traumatic brain injury recovery support', 'Peripheral neuropathy', 'Spinal cord injury support', 'Post-concussion syndrome', 'Nerve damage from surgery or injury', 'Dopaminergic system restoration'],
              },
              {
                category: 'Bone & Connective Tissue',
                color: 'text-cyan-400',
                items: ['Stress fractures and bone healing', 'Osteoporosis-related fracture recovery', 'Fibromyalgia and widespread connective tissue pain', 'Scar tissue breakdown (post-surgical)', 'Cartilage repair support', 'Disc injury recovery'],
              },
            ].map((group) => (
              <div key={group.category} className="card p-5">
                <h3 className={`font-bold text-sm mb-3 ${group.color}`}>{group.category}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 size={11} className="text-violet-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEEK-BY-WEEK TIMELINE ───────────────────────── */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">What to Expect</p>
          <h2 className="text-3xl font-bold text-white mb-4">Week-by-Week Healing Timeline</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Healing with BPC-157 and TB-500 follows a predictable progression. Here is what most users experience on the Ultimate Healing Stack at standard doses.
          </p>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              week: 'Days 1–7',
              color: '#a78bfa',
              title: 'Anti-Inflammatory Phase',
              body: 'Most users notice a meaningful reduction in pain and swelling within the first 3–7 days. BPC-157\'s immediate anti-inflammatory action reduces cytokine signaling at the injury site. This is not masking pain — it is genuine reduction in inflammatory cascade activity. TB-500 begins its systemic circulation, priming the body for full-scale repair.',
            },
            {
              week: 'Weeks 2–4',
              color: '#06b6d4',
              title: 'Angiogenesis & Tissue Regeneration',
              body: 'BPC-157 actively stimulates VEGF (vascular endothelial growth factor) expression, triggering the formation of new blood vessels into the injury site. This is the critical bottleneck in chronic tendon and ligament injuries — poor vascularity is why they heal so slowly on their own. New blood supply brings oxygen, nutrients, and repair signals. Range of motion typically begins improving in this window.',
            },
            {
              week: 'Weeks 5–8',
              color: '#a78bfa',
              title: 'Structural Remodeling',
              body: 'Collagen synthesis peaks during this phase. BPC-157 upregulates collagen cross-linking and tenocyte proliferation, building new structural tissue. TB-500 simultaneously reduces fibrosis — scar tissue — so the new tissue forms with correct architecture rather than disorganized scar. Most users report returning to normal activity in this window for moderate injuries.',
            },
            {
              week: 'Weeks 9–12',
              color: '#06b6d4',
              title: 'Full Functional Recovery',
              body: 'The final phase consolidates structural gains and restores full functional capacity. Biomechanical strength returns as collagen matures and organizes. For severe injuries (complete tears, post-surgical recovery, chronic multi-year conditions), full resolution may extend beyond 12 weeks — but functional improvement should be sustained and progressive throughout the entire protocol. Most athletes return to full training in this phase.',
            },
          ].map((phase) => (
            <div key={phase.week} className="card p-6 flex gap-5 items-start">
              <div
                className="shrink-0 w-20 text-center px-2 py-2 rounded-xl text-xs font-bold"
                style={{ background: `${phase.color}18`, color: phase.color, border: `1px solid ${phase.color}30` }}
              >
                {phase.week}
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{phase.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/stacks/ultimate-healing" className="btn-primary px-8 py-3">
            View Full Healing Stack Protocol <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── SCIENCE DEEP DIVE ───────────────────────────── */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">Science</p>
              <h2 className="text-3xl font-bold text-white mb-5">Why Peptides Outperform Conventional Injury Treatment</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Standard-of-care injury treatment — rest, ice, NSAIDs, physiotherapy — addresses symptoms rather than mechanisms.
                NSAIDs reduce pain and inflammation, but prostaglandins inhibited by NSAIDs are also required for tissue repair.
                Multiple studies have shown NSAID use during acute injury phases delays healing and reduces the final structural quality of repaired tissue.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                BPC-157 and TB-500 address the actual bottlenecks of tissue repair: inadequate vascularity, incomplete collagen
                remodeling, excessive fibrosis, and chronic inflammatory signaling. They do not merely block pain signals —
                they accelerate the biological processes that produce genuine structural recovery.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Perhaps most importantly, these peptides are derived from proteins that naturally exist in the human body.
                BPC-157 is a fragment of a gastric protein produced endogenously. TB-500 is a synthetic version of Thymosin Beta-4,
                a 43-amino-acid peptide present in every human cell. Their side effect profiles reflect this natural origin —
                both compounds have demonstrated excellent safety in decades of research with no significant toxicity reported
                at therapeutic doses.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products/bpc-157" className="btn-secondary text-sm px-4 py-2">
                  BPC-157 Full Protocol <ArrowRight size={13} />
                </Link>
                <Link href="/products/tb-500" className="btn-secondary text-sm px-4 py-2">
                  TB-500 Full Protocol <ArrowRight size={13} />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: 'NSAIDs Impede Healing',
                  body: 'Ibuprofen and similar drugs inhibit COX enzymes — reducing prostaglandins needed for repair. Research in rotator cuff models shows significantly worse structural outcomes in NSAID-treated groups vs. controls. BPC-157 reduces inflammation through cytokine modulation, preserving healing prostaglandins.',
                },
                {
                  title: 'Vascularity Is the Rate Limiter',
                  body: 'Tendons and ligaments have notoriously poor blood supply — this is why they heal slowly and incompletely. BPC-157\'s VEGF upregulation directly addresses this bottleneck by triggering angiogenesis. New capillaries supply the building blocks needed for proper structural repair.',
                },
                {
                  title: 'Fibrosis Blocks Full Recovery',
                  body: 'Scar tissue (fibrosis) forms when repair outpaces remodeling. It lacks the tensile strength and flexibility of native tissue. TB-500 actively reduces fibrosis via its actin-binding mechanism, ensuring repaired tissue is functional rather than rigid and prone to re-injury.',
                },
                {
                  title: 'Systemic + Local Coverage',
                  body: 'BPC-157 works best with local injection near the injury. TB-500 is systemic — it circulates throughout the body and benefits every tissue simultaneously. Together, they provide both targeted local repair and whole-body anti-inflammatory signaling.',
                },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <h4 className="font-bold text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle size={22} className="text-violet-400" />
            <h2 className="text-2xl font-bold text-white">Healing Peptide FAQ</h2>
          </div>
          <div className="space-y-4">
            {healingFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border p-5"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <p className="font-semibold text-white mb-2">{faq.q}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Recovery?</h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Browse the complete healing protocol, or explore other peptide categories for your goals.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/stacks/ultimate-healing" className="btn-primary">
            View Ultimate Healing Stack
            <ArrowRight size={16} />
          </Link>
          <Link href="/stacks" className="btn-secondary">
            All Stacks
          </Link>
        </div>
      </section>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/healing" />
    </div>
  );
}
