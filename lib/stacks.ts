export interface StackProduct {
  slug: string;
  dose: string;
  timing: string;
  notes?: string;
}

export interface Stack {
  id: string;
  name: string;
  tagline: string;
  goal: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  cost: string;
  products: StackProduct[];
  overview: string;
  schedule: string;
  expectedResults: string[];
  tags: string[];
  seoTitle: string;
  shortDescription: string;
}

export const stacks: Stack[] = [
  {
    id: 'ultimate-healing',
    name: 'Ultimate Healing Stack',
    tagline: 'The gold-standard for injury recovery — BPC-157 + TB-500 synergy.',
    goal: 'Injury Recovery',
    difficulty: 'Beginner',
    duration: '8–12 weeks',
    cost: '$115–$130/month',
    tags: ['Healing', 'Injury', 'Tendon', 'Recovery', 'Most Popular'],
    seoTitle: 'Ultimate Healing Peptide Stack | BPC-157 + TB-500 Protocol',
    shortDescription:
      'The most popular peptide combination for musculoskeletal injury recovery. BPC-157 handles local tissue repair while TB-500 provides systemic healing and flexibility restoration.',
    products: [
      {
        slug: 'bpc-157',
        dose: '250–500mcg',
        timing: 'Twice daily (AM + PM)',
        notes: 'Inject near injury site for local effect or subcutaneously for systemic',
      },
      {
        slug: 'tb-500',
        dose: '5mg (split 2× per week)',
        timing: 'Monday + Thursday subcutaneous',
        notes: 'Inject systemically (abdomen, thigh) — TB-500 works systemically',
      },
    ],
    overview: `This is the most widely used and well-validated peptide stack for musculoskeletal injury recovery. BPC-157 and TB-500 work through complementary, synergistic mechanisms that together cover every aspect of the healing cascade.

BPC-157 promotes local tissue repair, angiogenesis, and gut health while dramatically reducing inflammation at the injury site. TB-500 circulates systemically, reducing whole-body inflammation, preventing fibrosis, and restoring flexibility in damaged connective tissue.

Together, they produce healing speeds that athletes consistently report as dramatically superior to either compound alone — many reporting complete resolution of injuries that had lingered for months within 6–10 weeks of the combined protocol.`,
    schedule: `Week 1–2 (Loading):
• BPC-157: 500mcg twice daily
• TB-500: 10mg/week (5mg × 2 injections)

Week 3–12 (Maintenance):
• BPC-157: 250mcg twice daily
• TB-500: 5mg/week (2.5mg × 2 injections)`,
    expectedResults: [
      'Noticeable reduction in pain and inflammation within 1–2 weeks',
      'Significantly improved range of motion and flexibility by week 3–4',
      'Substantial tissue repair and strength restoration by week 8–10',
      'Complete resolution of most soft tissue injuries by week 12',
    ],
  },

  {
    id: 'gh-optimization',
    name: 'GH Optimization Stack',
    tagline: 'Maximize endogenous GH pulses for body composition and recovery.',
    goal: 'Body Composition & Anti-Aging',
    difficulty: 'Beginner',
    duration: '12–24 weeks',
    cost: '$110–$130/month',
    tags: ['Growth Hormone', 'Muscle', 'Fat Loss', 'Sleep', 'Anti-Aging'],
    seoTitle: 'GH Optimization Peptide Stack | CJC-1295 + Ipamorelin + IGF-1 LR3 Protocol',
    shortDescription:
      'The gold-standard GH peptide combination: CJC-1295 + Ipamorelin triggers clean GH pulses for muscle growth, fat loss, and sleep. Add IGF-1 LR3 for direct anabolic signaling.',
    products: [
      {
        slug: 'ipamorelin-cjc',
        dose: '200mcg each',
        timing: 'Before sleep (fasted), optional second dose pre-workout',
        notes: 'Mix both peptides in same syringe — identical injection site',
      },
      {
        slug: 'igf-1-lr3',
        dose: '40–60mcg',
        timing: 'Post-workout (4–6 week cycles only)',
        notes: 'Add during active training phases — cycle 4 weeks on / 4 weeks off',
      },
    ],
    overview: `The CJC-1295 + Ipamorelin stack is the most commonly used starting protocol for growth hormone optimization. CJC-1295 primes the pituitary and amplifies GH pulse amplitude while Ipamorelin triggers selective GH release — together producing a 3–5× baseline GH pulse that closely mimics a healthy 25-year-old's secretion pattern.

Adding IGF-1 LR3 during active training phases takes this to another level by directly signaling muscle cell proliferation and hypertrophy downstream of GH — activating both GH-dependent recovery and direct anabolic pathways simultaneously.`,
    schedule: `Daily (Year-Round):
• Before sleep: CJC-1295 200mcg + Ipamorelin 200mcg (fasted, 2+ hrs after last meal)
• Optional: Second injection 30 min before morning training

Training Phase Add-On (4–6 week cycles):
• Post-workout: IGF-1 LR3 40–60mcg within 30 min of training
• Rest weeks: Skip IGF-1 LR3, continue CJC/Ipamorelin`,
    expectedResults: [
      'Dramatically improved deep sleep quality within 1–2 weeks',
      'Noticeable increases in recovery speed and reduced DOMS by week 3–4',
      'Visible body composition improvements (fat loss + muscle) by week 8–12',
      'Enhanced anabolic response to training when IGF-1 LR3 cycles are active',
    ],
  },

  {
    id: 'longevity-elite',
    name: 'Longevity Elite Stack',
    tagline: 'Comprehensive anti-aging protocol — cellular, hormonal, and genetic.',
    goal: 'Longevity & Anti-Aging',
    difficulty: 'Intermediate',
    duration: '3–6 months',
    cost: '$190–$220/month',
    tags: ['Longevity', 'Anti-Aging', 'Telomere', 'Skin', 'NAD+'],
    seoTitle: 'Longevity Elite Peptide Stack | Epithalon + GHK-Cu + NAD+ Protocol',
    shortDescription:
      'A comprehensive anti-aging protocol combining Epithalon for telomere extension, GHK-Cu for cellular rejuvenation, and NAD+ for mitochondrial restoration and sirtuin activation.',
    products: [
      {
        slug: 'epithalon',
        dose: '5–10mg daily',
        timing: 'Evening subcutaneous injection',
        notes: 'Run as 10–20 day burst protocol 1–2× per year',
      },
      {
        slug: 'ghk-cu',
        dose: '1–2mg daily',
        timing: 'Morning subcutaneous injection',
        notes: 'Also apply topically to face and scalp for local anti-aging effects',
      },
      {
        slug: 'nad-plus',
        dose: '100–300mg',
        timing: 'Morning subcutaneous, 2–3× per week',
        notes: 'Activates sirtuins and restores mitochondrial function year-round',
      },
    ],
    overview: `This stack addresses the three primary mechanisms of biological aging simultaneously: telomere shortening (Epithalon), cellular gene dysregulation (GHK-Cu), and NAD+ depletion (NAD+ 500mg). No other combination covers these distinct aging pathways as comprehensively.

The protocol is structured around Epithalon burst cycles (10–20 days, 1–2× per year) combined with continuous daily use of GHK-Cu and NAD+ year-round. Epithalon activates telomerase for chromosomal longevity, GHK-Cu resets gene expression patterns across thousands of aging-associated genes, and NAD+ restores the cellular energy and sirtuin-mediated DNA repair that decline with age.`,
    schedule: `Epithalon Burst (10–20 days, 2× per year):
• Each evening: Epithalon 5–10mg subcutaneous
• Continue GHK-Cu and NAD+ throughout

Daily Maintenance (year-round):
• Morning: GHK-Cu 1–2mg subcutaneous
• Morning 3× per week: NAD+ 100–300mg subcutaneous`,
    expectedResults: [
      'Improved sleep depth and melatonin rhythm normalization within 2 weeks (Epithalon)',
      'Visible skin improvements: firmness, elasticity, reduced lines within 4–6 weeks (GHK-Cu)',
      'Improved energy, mental clarity, and exercise capacity within 2–4 weeks (NAD+)',
      'Measurable improvements in biological aging markers over 6–12 months',
    ],
  },

  {
    id: 'glp1-fat-loss',
    name: 'GLP-1 Accelerated Fat Loss Stack',
    tagline: 'Pharmaceutical-grade weight loss — semaglutide + GH optimization for body recomposition.',
    goal: 'Fat Loss & Body Composition',
    difficulty: 'Intermediate',
    duration: '16–24 weeks',
    cost: '$130–$160/month',
    tags: ['Fat Loss', 'GLP-1', 'Semaglutide', 'Body Composition', 'Metabolic'],
    seoTitle: 'GLP-1 Fat Loss Stack | Semaglutide + CJC-1295 + BPC-157 Protocol',
    shortDescription:
      'Combine semaglutide\'s clinically proven 14.9% weight loss with CJC/Ipamorelin\'s GH-mediated fat burning and BPC-157\'s gut health support for a comprehensive fat loss protocol.',
    products: [
      {
        slug: 'semaglutide-10mg',
        dose: '0.5–2.4mg once weekly',
        timing: 'Same day each week, any time',
        notes: 'Escalate dose over 12–16 weeks — start at 0.25mg/week',
      },
      {
        slug: 'ipamorelin-cjc',
        dose: '200mcg each',
        timing: 'Before sleep (fasted)',
        notes: 'GH optimization amplifies fat burning — synergistic with GLP-1 mechanism',
      },
      {
        slug: 'bpc-157',
        dose: '250mcg twice daily',
        timing: 'AM + PM subcutaneous',
        notes: 'Protects gut lining from GLP-1-related nausea and GI effects',
      },
    ],
    overview: `This protocol combines the clinical efficacy of GLP-1 receptor agonism with the GH-mediated metabolic improvements of CJC-1295/Ipamorelin, and uses BPC-157 as a gut-protective adjunct to minimize GLP-1 class GI side effects.

Semaglutide provides the primary fat loss mechanism — appetite reduction, gastric slowing, and multi-organ metabolic regulation that produced 14.9% average weight loss in the STEP-1 trial. CJC-1295/Ipamorelin adds GH-mediated lipolysis and lean muscle preservation, counteracting the muscle loss that can accompany aggressive caloric restriction. BPC-157 supports gut health during the adjustment phase.`,
    schedule: `Daily (Ongoing):
• Before sleep: CJC-1295 200mcg + Ipamorelin 200mcg
• Morning: BPC-157 250mcg subcutaneous
• Evening: BPC-157 250mcg subcutaneous

Once Weekly:
• Semaglutide (escalate per protocol: 0.25 → 0.5 → 1.0 → 1.7 → 2.4mg)`,
    expectedResults: [
      'Noticeable appetite reduction within 1–2 weeks of starting semaglutide',
      'Meaningful weight loss (5–10%) within the first 12 weeks',
      'Improved body composition (muscle preserved) vs. GLP-1 alone due to GH support',
      'Significantly reduced GI side effects from GLP-1 due to BPC-157 gut protection',
    ],
  },

  {
    id: 'anti-aging-skin',
    name: 'Anti-Aging & Skin Stack',
    tagline: 'Complete facial and systemic rejuvenation — GHK-Cu + SNAP-8 + Epithalon.',
    goal: 'Anti-Aging & Skin Rejuvenation',
    difficulty: 'Beginner',
    duration: '8–12 weeks',
    cost: '$130–$190/month',
    tags: ['Anti-Aging', 'Skin', 'Anti-Wrinkle', 'Collagen', 'Cosmetic'],
    seoTitle: 'Anti-Aging Skin Stack | GHK-Cu + SNAP-8 + Epithalon Protocol',
    shortDescription:
      'Target facial aging from three angles: SNAP-8 relaxes expression lines (anti-wrinkle), GHK-Cu rebuilds collagen and resets gene expression, and Epithalon addresses cellular longevity.',
    products: [
      {
        slug: 'ghk-cu',
        dose: '1–2mg daily (systemic) + topical',
        timing: 'Morning subcutaneous + topical application AM/PM',
        notes: 'Apply topically to face and scalp as well as systemic injection',
      },
      {
        slug: 'snap-8',
        dose: '5–10% concentration serum',
        timing: 'Topical AM and PM to expression line areas',
        notes: 'Target forehead, crow\'s feet, perioral lines — use a dedicated serum base',
      },
      {
        slug: 'epithalon',
        dose: '5–10mg daily',
        timing: 'Evening subcutaneous injection during burst',
        notes: '10–20 day burst protocol — the systemic cellular longevity component',
      },
    ],
    overview: `This stack attacks facial and systemic aging through three independent mechanisms. SNAP-8 targets the neuromuscular junction to reduce expression line formation — a fundamentally different approach than collagen stimulation. GHK-Cu rebuilds the extracellular matrix and resets 4,000+ aging-associated genes for comprehensive structural rejuvenation. Epithalon provides the deep cellular foundation — telomere maintenance and biological age reversal at the chromosomal level.

Together, they address aging at the surface (SNAP-8 expression lines), the structural middle layer (GHK-Cu collagen and gene expression), and the cellular foundation (Epithalon telomere maintenance).`,
    schedule: `Daily:
• Morning: GHK-Cu 1–2mg subcutaneous injection
• Morning + Evening: SNAP-8 serum topically to expression line areas
• Morning + Evening: GHK-Cu solution topically to face and scalp

Epithalon Burst (10–20 days, run 1–2× per year):
• Each evening: Epithalon 5–10mg subcutaneous`,
    expectedResults: [
      'Reduced expression line depth within 4 weeks of SNAP-8 application',
      'Improved skin firmness and texture within 4–6 weeks of GHK-Cu',
      'Visible reduction in fine lines and improved skin density within 8 weeks',
      'Comprehensive anti-aging benefits including improved sleep and energy (Epithalon)',
    ],
  },

  {
    id: 'performance-elite',
    name: 'Performance Elite Stack',
    tagline: 'Complete body recomposition — GH, anabolics, and recovery in one protocol.',
    goal: 'Athletic Performance & Body Composition',
    difficulty: 'Advanced',
    duration: '16–24 weeks',
    cost: '$170–$200/month',
    tags: ['Performance', 'Body Composition', 'Muscle', 'Recovery', 'GH'],
    seoTitle: 'Performance Elite Peptide Stack | CJC-1295 + IGF-1 LR3 + BPC-157 Protocol',
    shortDescription:
      'The most comprehensive performance and body composition protocol: CJC/Ipamorelin for GH optimization, IGF-1 LR3 for direct anabolic signaling, and BPC-157 for injury prevention and recovery.',
    products: [
      {
        slug: 'ipamorelin-cjc',
        dose: '200mcg each',
        timing: 'Pre-sleep daily',
        notes: 'Foundation of the stack — GH optimization and sleep quality',
      },
      {
        slug: 'bpc-157',
        dose: '250–500mcg',
        timing: 'Upon waking, fasted',
        notes: 'Joint and tissue maintenance for training longevity',
      },
      {
        slug: 'igf-1-lr3',
        dose: '40–60mcg',
        timing: 'Post-workout',
        notes: 'Direct anabolic stimulus — 4–6 week cycles only, then break',
      },
    ],
    overview: `This is the most comprehensive performance and body composition protocol in our catalog. It addresses three independent pillars simultaneously: GH axis restoration (CJC-1295/Ipamorelin), structural maintenance and recovery (BPC-157), and direct anabolic signaling (IGF-1 LR3).

CJC-1295/Ipamorelin provides the GH foundation — elevated GH pulses for fat loss, muscle gain, improved sleep, and recovery. BPC-157 runs continuously to protect tendons, ligaments, and gut health under the stress of intensive training. IGF-1 LR3 is cycled in 4–6 week training blocks to provide direct anabolic stimulus — each cycle driving measurable hypertrophy beyond what the GH axis alone achieves.`,
    schedule: `Daily (Continuous):
• Morning: BPC-157 250–500mcg subcutaneous
• Pre-sleep (fasted): CJC-1295 200mcg + Ipamorelin 200mcg

Post-Workout (4–6 week cycles, alternating):
• IGF-1 LR3: 40–60mcg within 30 min of training
• 4–6 weeks on → 4 weeks off IGF-1 LR3`,
    expectedResults: [
      'Superior sleep quality and overnight recovery from week 1',
      'Noticeable body recomposition (muscle gain + fat loss) within 6–8 weeks',
      'Enhanced anabolic response during IGF-1 LR3 cycles — strength and size gains',
      'Reduced injury risk and improved training consistency throughout',
    ],
  },
];

export function getStackById(id: string): Stack | undefined {
  return stacks.find((s) => s.id === id);
}
