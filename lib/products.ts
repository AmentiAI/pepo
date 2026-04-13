export interface ProductHighlight {
  title: string;
  body: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  category: string;
  tags: string[];
  image: string;
  shopUrl: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  protocol: string;
  synergies: string[];
  seoTitle: string;
  deepDiveTitle: string;
  highlights: ProductHighlight[];
  researchRating: number; // 1-5
  popularityRank: number;
}

const BASE = 'https://phiogen.is/products';
const IMG = '/phio'; // proxied through our domain via Next.js rewrite → phiogen.is/images/products/

function shopLink(path: string) {
  return `${BASE}/${path}?ref=PEPS`;
}

export const products: Product[] = [
  // ── HEALING & RECOVERY ─────────────────────────────────────────
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    tagline: 'The Body Protection Compound — accelerate healing at the cellular level.',
    price: 59.99,
    category: 'Healing & Recovery',
    tags: ['Healing', 'Gut Health', 'Tendon', 'Anti-Inflammatory', 'Injury'],
    image: `${IMG}/bpc-157-10mg.png`,
    shopUrl: shopLink('bpc-157-10mg'),
    shortDescription:
      'BPC-157 is a 15-amino-acid synthetic peptide derived from gastric juice proteins. Clinically shown to accelerate tendon, ligament, muscle, and gut tissue repair.',
    seoTitle: 'BPC-157 | #1 Healing Peptide for Tendon, Gut & Muscle Recovery',
    deepDiveTitle: 'BPC-157: The Complete Healing Protocol Guide',
    researchRating: 5,
    popularityRank: 1,
    fullDescription: `BPC-157 (Body Protection Compound 157) is a 15-amino-acid peptide fragment derived from a protein found naturally in human gastric juice. Unlike most peptides that degrade rapidly in the digestive system, BPC-157 demonstrates remarkable stability and systemic effects whether administered subcutaneously, intramuscularly, or even orally.

**Mechanism of Action**

BPC-157 works through several interconnected pathways. It upregulates growth hormone receptors, promotes angiogenesis (the formation of new blood vessels), and modulates nitric oxide production — all of which accelerate tissue repair. Its anti-inflammatory properties come from its ability to inhibit the expression of inflammatory cytokines while simultaneously activating healing cascades.

Crucially, BPC-157 has been shown to accelerate the expression of VEGF (vascular endothelial growth factor) and to promote collagen synthesis — two fundamental drivers of tissue regeneration.

**What the Research Shows**

Animal studies have demonstrated BPC-157's ability to:
- Dramatically accelerate tendon-to-bone healing in rotator cuff models
- Heal full-thickness gastric ulcers and intestinal anastomosis wounds
- Reverse alcohol and NSAID-induced gut damage
- Protect neurons and reduce neuroinflammation
- Restore dopaminergic function after brain injury

**Practical Application**

For musculoskeletal injuries, most users inject 250–500mcg subcutaneously near the injury site or systemically once or twice daily for 4–12 weeks. For gut-related conditions (IBD, leaky gut, GERD), oral or subcutaneous administration at similar doses is effective.

The combination of BPC-157 with TB-500 is often called the "healing stack" — both work synergistically to accelerate systemic tissue repair from different mechanistic angles.`,
    benefits: [
      'Accelerates tendon, ligament, and muscle repair by 30–50% in peer-reviewed studies',
      'Heals gut lining damage including ulcers, IBD, and leaky gut syndrome',
      'Reduces systemic inflammation without suppressing the immune system',
      'Promotes angiogenesis — new blood vessel formation for faster healing',
      'Protects neurons and reduces neuroinflammatory damage',
      'Restores gut-brain axis function and improves mood in injury states',
      'Compatible with oral or subcutaneous administration for systemic effects',
      'No significant toxicity observed at therapeutic doses in peer-reviewed studies',
    ],
    protocol: `**Standard Protocol:**
- Dose: 250–500mcg per injection
- Frequency: Once or twice daily
- Route: Subcutaneous injection near injury site, or systemic subcutaneous
- Duration: 4–12 weeks depending on injury severity
- Cycle: Can be run continuously for chronic conditions; 8 weeks on / 4 weeks off for maintenance

**Gut Health Protocol:**
- Dose: 250mcg twice daily (oral capsule or sublingual)
- Duration: 6–8 weeks
- Notes: Take on empty stomach for best gut absorption`,
    synergies: ['tb-500', 'ghk-cu', 'nad-plus'],
    highlights: [
      { title: 'Healing Speed', body: 'Up to 2× faster tendon and ligament repair vs. untreated controls in peer-reviewed studies.' },
      { title: 'Gut Protection', body: 'Reverses NSAID-induced gut damage and supports the mucosal lining against ulceration.' },
      { title: 'Systemic Safety', body: 'Derived from naturally occurring gastric proteins — no receptor desensitization reported.' },
    ],
  },

  {
    slug: 'tb-500',
    name: 'TB-500',
    tagline: 'Thymosin Beta-4 — systemic tissue repair and flexibility restoration.',
    price: 59.99,
    category: 'Healing & Recovery',
    tags: ['Healing', 'Systemic', 'Flexibility', 'Inflammation', 'Recovery'],
    image: `${IMG}/tb-500-thymosin-beta-4-10mg.png`,
    shopUrl: shopLink('tb-500-thymosin-beta-4-10mg'),
    shortDescription:
      'TB-500 is a synthetic version of Thymosin Beta-4, a protein found in virtually every cell. It promotes systemic healing, reduces inflammation, and restores range of motion.',
    seoTitle: 'TB-500 | Systemic Tissue Repair Peptide for Athletes & Injury Recovery',
    deepDiveTitle: 'TB-500: Full-Body Healing & Systemic Recovery Protocol',
    researchRating: 5,
    popularityRank: 2,
    fullDescription: `TB-500 is a synthetic version of Thymosin Beta-4 — a naturally occurring 43-amino-acid protein present in virtually all human and animal cells. Unlike BPC-157 which tends to exert more localized effects, TB-500's primary mechanism is systemic: it travels through the bloodstream, signaling repair cascades throughout the entire body.

**How TB-500 Works**

TB-500's primary action is its high affinity for actin — a protein essential to cell structure and movement. By binding to actin, TB-500 promotes cell migration and proliferation, which is the foundational step in tissue repair. It also upregulates the expression of anti-inflammatory cytokines while downregulating pro-inflammatory ones, making it one of the most powerful systemic anti-inflammatory peptides available.

TB-500 also promotes angiogenesis and myogenesis (muscle fiber formation), making it valuable for both acute injuries and chronic overuse conditions.

**Key Research Findings**

Studies have shown TB-500 to:
- Accelerate wound closure and tissue remodeling
- Reduce fibrosis (scar tissue formation) after injury
- Promote hair follicle growth and stimulate hair stem cells
- Reduce cardiac damage after myocardial infarction in animal models
- Improve flexibility and range of motion in tendons and fascia

**The BPC-157 + TB-500 Stack**

This combination is considered the gold standard for musculoskeletal injury recovery. BPC-157 addresses local repair and gut health while TB-500 handles systemic inflammation and full-body tissue regeneration. Together, they hit every mechanism of the healing cascade simultaneously.`,
    benefits: [
      'Systemic tissue repair — reaches every muscle, tendon, and ligament',
      'Dramatically reduces post-injury fibrosis and scar tissue',
      'Restores flexibility and range of motion in damaged connective tissue',
      'Reduces chronic inflammation without suppressing immune function',
      'Promotes hair follicle stem cell activation',
      'Cardiac tissue protection demonstrated in ischemia models',
      'Ideal for overuse injuries, tears, and chronic inflammation',
      'Works synergistically with BPC-157 for complete healing coverage',
    ],
    protocol: `**Loading Phase (Weeks 1–2):**
- Dose: 7.5–10mg total per week, split across 2–3 injections
- Route: Subcutaneous injection
- Notes: Higher initial dose saturates systemic pathways faster

**Maintenance Phase (Weeks 3–12):**
- Dose: 5–7.5mg per week
- Frequency: 2× per week
- Duration: Continue for duration of healing period

**Cycle Structure:**
- Standard: 12 weeks on / 4 weeks off
- For chronic conditions: 8 weeks on / 4 weeks off, repeat as needed`,
    synergies: ['bpc-157', 'ipamorelin-cjc', 'ghk-cu'],
    highlights: [
      { title: 'Systemic Reach', body: 'Unlike localized peptides, TB-500 circulates throughout the body, repairing tissue everywhere simultaneously.' },
      { title: 'Anti-Fibrotic', body: 'Reduces scar tissue formation — critical for athletes who need full range of motion post-injury.' },
      { title: 'Flexibility', body: 'Users consistently report significant improvements in joint and tendon flexibility within 2–4 weeks.' },
    ],
  },

  // ── GROWTH HORMONE ──────────────────────────────────────────────
  {
    slug: 'ipamorelin-cjc',
    name: 'CJC-1295 / Ipamorelin',
    tagline: 'The gold-standard GH peptide stack — maximize GH pulses naturally.',
    price: 89.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'Muscle', 'Fat Loss', 'Recovery', 'Anti-Aging'],
    image: `${IMG}/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipamorelin-5mg.png`,
    shopUrl: shopLink('ipamorelin-cjc-1295-blend-10mg'),
    shortDescription:
      'Ipamorelin + CJC-1295 is the most popular GH secretagogue combination. Ipamorelin triggers GH pulses while CJC-1295 amplifies and extends them for superior muscle growth and fat loss.',
    seoTitle: 'CJC-1295 / Ipamorelin | Best GH Peptide Stack for Muscle & Fat Loss',
    deepDiveTitle: 'CJC-1295 + Ipamorelin: The Complete GH Optimization Protocol',
    researchRating: 5,
    popularityRank: 3,
    fullDescription: `The Ipamorelin + CJC-1295 combination is the most widely used growth hormone peptide stack. These two peptides work through complementary mechanisms to produce GH pulses 3–5× baseline — mimicking the natural GH profile of a healthy 25-year-old.

**How It Works**

CJC-1295 is a GHRH (Growth Hormone Releasing Hormone) analog. It binds to GHRH receptors in the pituitary, priming it for increased GH release and amplifying the amplitude of natural GH pulses. When combined with Ipamorelin — a selective GHRP (Growth Hormone Releasing Peptide) — you get both the pulse trigger and the amplification simultaneously.

Critically, Ipamorelin is the most selective GHRP available. Unlike older GHRPs (GHRP-2, GHRP-6), Ipamorelin does not significantly elevate cortisol or prolactin, making it ideal for long-term use without the side effects common to other secretagogues.

**Research-Backed Benefits**

The combination produces measurable improvements in:
- Body composition (lean mass gain + fat loss) over 12–24 weeks
- Deep sleep quality and GH-dependent overnight recovery
- Skin quality, hair thickness, and collagen density
- Recovery speed from training and injury
- Metabolic rate through GH-mediated lipolysis

**The Right Protocol**

The key insight: GH is released in pulses, and the largest pulse occurs during the first hours of deep sleep. Injecting before sleep in a fasted state (2+ hours after last meal) synchronizes the peptide-induced pulse with the body's natural GH secretion window, producing additive rather than competing effects.`,
    benefits: [
      'Elevates GH pulse amplitude 3–5× baseline — without suppressing natural production',
      'Improves deep sleep architecture and overnight recovery quality',
      'Promotes lean muscle gain and fat loss over 12–24 week cycles',
      'Enhances skin elasticity, collagen density, and hair thickness',
      'No cortisol or prolactin elevation — cleaner profile than GHRP-2/6',
      'Reduces recovery time between training sessions by 20–30%',
      'Improves joint comfort and connective tissue health over time',
      'Ideal for long-term use: 5 days on / 2 days off maintains receptor sensitivity',
    ],
    protocol: `**Standard Protocol:**
- Dose: 200mcg Ipamorelin + 200mcg CJC-1295
- Frequency: Once daily before sleep (fasted state)
- Optional: Second injection pre-workout for body composition
- Duration: 12–24 weeks continuous

**Injection Timing:**
- Must be fasted (2+ hours after last meal)
- Avoid carbohydrates for 30 minutes after injection
- Mixing: Both peptides can be drawn into the same syringe

**Long-Term Cycling:**
- 5 days on / 2 days off for receptor sensitivity maintenance
- 6 months on / 1 month off if running extended protocols`,
    synergies: ['bpc-157', 'igf-1-lr3', 'epithalon'],
    highlights: [
      { title: 'GH Pulse Amplitude', body: '3–5× baseline GH elevation — comparable to early adult pulsatile secretion patterns.' },
      { title: 'Sleep Quality', body: 'Users consistently report dramatically improved deep sleep within the first 1–2 weeks.' },
      { title: 'Body Recomposition', body: 'Measurable fat loss and lean mass gain over 12–24 week cycles — visible by 8 weeks.' },
    ],
  },

  {
    slug: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    tagline: 'Insulin-like Growth Factor-1 Long Arg3 — direct anabolic signaling for peak muscle growth.',
    price: 79.99,
    category: 'Growth Hormone',
    tags: ['Anabolic', 'Muscle', 'Hypertrophy', 'Recovery', 'GH Axis'],
    image: `${IMG}/igf-1-lr3-1mg.png`,
    shopUrl: shopLink('igf-1-lr3-1mg'),
    shortDescription:
      'IGF-1 LR3 is a modified form of Insulin-like Growth Factor-1 with 13× longer half-life. It directly signals muscle cell proliferation and hypertrophy — the downstream anabolic effector of GH.',
    seoTitle: 'IGF-1 LR3 | Direct Anabolic Peptide for Maximum Muscle Growth',
    deepDiveTitle: 'IGF-1 LR3: The Direct Anabolic Protocol Guide',
    researchRating: 4,
    popularityRank: 7,
    fullDescription: `IGF-1 LR3 (Insulin-like Growth Factor-1 Long Arg3) is a modified version of the naturally occurring IGF-1 peptide. The LR3 variant has an arginine-glutamate substitution at position 3 and an 8-amino-acid N-terminal extension that dramatically reduces its binding to IGF binding proteins (IGFBPs) — the proteins that inactivate most circulating IGF-1. The result is a 13× longer half-life (20–30 hours vs. 15–90 minutes for native IGF-1) and significantly enhanced bioavailability.

**The GH → IGF-1 Axis**

IGF-1 is the primary anabolic downstream effector of growth hormone. When GH stimulates the liver and peripheral tissues, they produce IGF-1, which then acts on muscle, bone, and connective tissue to drive growth and repair. IGF-1 LR3 bypasses the GH pituitary step entirely, delivering direct anabolic signaling to muscle tissue.

**Mechanism: Hyperplasia vs. Hypertrophy**

IGF-1's unique advantage over anabolic steroids is its ability to stimulate muscle hyperplasia — the creation of new muscle fiber cells — not just hypertrophy (enlargement of existing cells). New muscle fibers represent permanent genetic changes to muscle architecture, making IGF-1 LR3 gains more durable than those from other anabolic agents.

**Cycling Requirement**

Due to receptor desensitization, IGF-1 LR3 must be cycled in short 4–6 week bursts. Continuous use leads to receptor downregulation and diminishing returns. Most protocols run 4–6 weeks on, minimum 4 weeks off.`,
    benefits: [
      'Direct anabolic signaling to muscle tissue — bypasses the GH-liver axis',
      'Stimulates muscle hyperplasia (new fiber creation) — not just hypertrophy',
      'Dramatically accelerates recovery between training sessions',
      'Enhances nutrient partitioning — directs calories to muscle over fat',
      '13× longer half-life than native IGF-1 for sustained anabolic environment',
      'Synergistic with GH peptides (Ipamorelin/CJC) for complete GH axis optimization',
      'Potential for permanent muscle architecture changes via hyperplasia',
      'Improves connective tissue strength and injury resistance',
    ],
    protocol: `**Cycle Protocol (4–6 weeks only):**
- Dose: 40–60mcg per injection
- Timing: Post-workout (within 30 minutes of training completion)
- Route: Subcutaneous or intramuscular injection
- Frequency: Daily on training days; skip on rest days

**Off-Cycle:**
- Minimum 4 weeks off between cycles
- Continue Ipamorelin/CJC-1295 during off periods for maintained GH support

**Advanced Protocol:**
- Can be run during the loading phase of a longer GH peptide cycle
- Stack with BPC-157 for connective tissue protection during anabolic phases`,
    synergies: ['ipamorelin-cjc', 'bpc-157'],
    highlights: [
      { title: 'Hyperplasia', body: 'One of the only compounds capable of stimulating new muscle fiber creation (hyperplasia) rather than just enlarging existing cells.' },
      { title: 'Bioavailability', body: '13× longer half-life than native IGF-1 due to reduced IGFBP binding — more sustained anabolic signal.' },
      { title: 'Short Cycles', body: 'Must be limited to 4–6 week cycles due to receptor desensitization — this is a feature, not a drawback.' },
    ],
  },

  // ── ANTI-AGING & LONGEVITY ──────────────────────────────────────
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    tagline: 'Copper peptide — reset aging gene expression, rebuild collagen, restore skin.',
    price: 50.00,
    category: 'Anti-Aging & Skin',
    tags: ['Anti-Aging', 'Skin', 'Collagen', 'Hair Growth', 'Gene Expression'],
    image: `${IMG}/ghk-cu-50mg.png`,
    shopUrl: shopLink('ghk-cu-50mg'),
    shortDescription:
      'GHK-Cu is a naturally occurring copper-binding tripeptide that resets gene expression patterns, stimulates collagen synthesis, and reverses signs of skin aging.',
    seoTitle: 'GHK-Cu | #1 Anti-Aging Copper Peptide for Skin, Collagen & Hair',
    deepDiveTitle: 'GHK-Cu: The Complete Anti-Aging & Skin Rejuvenation Protocol',
    researchRating: 5,
    popularityRank: 4,
    fullDescription: `GHK-Cu (Glycyl-L-Histidyl-L-Lysine : Copper) is a naturally occurring human plasma tripeptide that has emerged as one of the most scientifically compelling anti-aging compounds. It naturally declines with age — plasma concentrations drop from approximately 200ng/mL at age 20 to 80ng/mL at age 60 — and this decline correlates with many hallmarks of aging.

**The Gene Expression Reset**

Perhaps the most remarkable property of GHK-Cu is its ability to modulate gene expression at a profound level. Research by Dr. Loren Pickart demonstrated that GHK-Cu resets approximately 30% of age-related gene dysregulation — effectively reversing aging-associated changes in the activity of over 4,000 genes.

This includes upregulating genes involved in collagen synthesis, anti-oxidant defense, DNA repair, and nerve growth — while downregulating genes associated with inflammation, cancer proliferation, and oxidative stress.

**Skin and Collagen Effects**

GHK-Cu is the most evidence-backed peptide for skin rejuvenation. It:
- Increases collagen synthesis by up to 70% in fibroblast studies
- Stimulates elastin production and proteoglycans for skin plumpness
- Activates tissue remodeling enzymes (matrix metalloproteinases)
- Improves skin density, firmness, and reduces fine line depth

**Hair Restoration**

GHK-Cu stimulates hair follicle stem cells and enlarges hair follicle size, making it one of the most studied peptides for hair loss applications. Applied topically to the scalp, it promotes follicle recovery and hair regrowth comparable to minoxidil in peer-reviewed studies.`,
    benefits: [
      'Resets ~30% of age-related gene dysregulation in human fibroblasts',
      'Increases collagen synthesis by up to 70% — measurable skin density improvement',
      'Stimulates hair follicle growth comparable to minoxidil in peer-reviewed studies',
      'Promotes stem cell activation for tissue repair and renewal',
      'Activates anti-oxidant defense genes reducing oxidative aging damage',
      'Reduces chronic inflammation through gene expression modulation',
      'Improves wound healing speed and scar reduction',
      'Neuroprotective — promotes nerve growth factor and cognitive resilience',
    ],
    protocol: `**Systemic Anti-Aging Protocol:**
- Dose: 1–2mg subcutaneous daily
- Timing: Morning injection preferred
- Duration: Year-round daily use; no cycling required
- Best combined with Epithalon for comprehensive anti-aging coverage

**Topical Application (Face/Scalp):**
- Reconstitute to 0.1–0.5% concentration in saline or serum base
- Apply to face and neck 1–2× daily (morning and evening)
- Apply to scalp daily for hair restoration

**Combination Protocol:**
- Use alongside Epithalon burst cycles for maximum anti-aging effect
- BPC-157 + GHK-Cu = healing + rejuvenation combined protocol`,
    synergies: ['epithalon', 'snap-8', 'nad-plus'],
    highlights: [
      { title: 'Gene Reset', body: 'Modulates the activity of 4,000+ genes — reversing age-related dysregulation at the genetic level.' },
      { title: 'Collagen Boost', body: 'Up to 70% increase in collagen synthesis in human fibroblast studies — visible skin improvements within 4–6 weeks.' },
      { title: 'Dual Delivery', body: 'Effective both subcutaneously (systemic) and topically (local skin/scalp) — unique dual-administration peptide.' },
    ],
  },

  {
    slug: 'epithalon',
    name: 'Epithalon',
    tagline: 'Telomerase activator — extend telomere length and reduce all-cause mortality.',
    price: 139.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Longevity', 'Telomere', 'Anti-Aging', 'Epigenetic', 'Mortality'],
    image: `${IMG}/epitalon-50mg.png`,
    shopUrl: shopLink('epitalon-50mg'),
    shortDescription:
      'Epithalon is a tetrapeptide that activates telomerase, extends telomere length, and has shown 27–36% reduction in all-cause mortality in 15-year human follow-up studies.',
    seoTitle: 'Epithalon | Telomerase Activator for Longevity & Anti-Aging',
    deepDiveTitle: 'Epithalon: The Science-Backed Longevity Protocol',
    researchRating: 5,
    popularityRank: 5,
    fullDescription: `Epithalon (Epitalon, Epithalamin) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) derived from the pineal gland peptide Epithalamin. It is the most extensively human-researched peptide for anti-aging and longevity, with studies spanning over 15 years conducted by Vladimir Khavinson and colleagues at the St. Petersburg Institute of Bioregulation and Gerontology.

**Telomerase Activation — The Foundation of Longevity**

The primary mechanism of Epithalon is the activation of telomerase — the enzyme that maintains and extends telomere length. Telomeres are the protective caps at chromosome ends that shorten with each cell division. When telomeres reach critical minimum length, cells undergo senescence or apoptosis. Shorter telomeres are one of the strongest predictors of biological age and mortality.

Epithalon activates telomerase and has been shown in human cell studies to add approximately 33% more telomere length — a finding with profound implications for cellular longevity.

**The Human Longevity Data**

The most remarkable aspect of Epithalon is its human clinical data. In a 15-year retrospective study of 266 elderly subjects, those who received periodic Epithalon injections showed a 27–36% reduction in all-cause mortality compared to controls. This is one of the largest mortality-reduction effects documented for any peptide in human subjects.

Additional human studies documented improvements in:
- Sleep quality and melatonin normalization
- Immune function (T-lymphocyte and natural killer cell activity)
- Vision and retinal health
- Endocrine function in elderly subjects`,
    benefits: [
      '27–36% reduction in all-cause mortality in 15-year human follow-up studies',
      'Activates telomerase — extends telomere length by ~33% in human cell studies',
      'Normalizes melatonin secretion — improves circadian rhythm and sleep quality',
      'Enhances immune function: T-lymphocytes, NK cells, and thymus activity',
      'Restores antioxidant enzyme activity (superoxide dismutase, catalase)',
      'Improves retinal function in age-related macular degeneration models',
      'Regulates pineal gland and neuroendocrine function across aging',
      'Used in short burst protocols — achieves lasting effects with minimal doses',
    ],
    protocol: `**Standard Burst Protocol (Most Common):**
- Dose: 5–10mg daily subcutaneous injection
- Duration: 10–20 consecutive days
- Frequency: 1–2 burst cycles per year
- Timing: Evening injection preferred

**Extended Protocol (Advanced):**
- 20 days on / 4+ months off
- Some practitioners use every 3 months for aggressive anti-aging

**Year-Round Maintenance:**
- After initial burst: 5mg injections 1–2× per week during off periods
- Continue GHK-Cu and NAD+ year-round between Epithalon cycles

**Storage:**
- Lyophilized powder: stable at room temperature for shipping
- Reconstituted: refrigerate and use within 30 days`,
    synergies: ['ghk-cu', 'nad-plus', 'ipamorelin-cjc'],
    highlights: [
      { title: '27–36% Mortality Reduction', body: 'Documented in Khavinson et al. 15-year human study — the strongest longevity data of any peptide in the literature.' },
      { title: 'Telomere Extension', body: '~33% increase in telomere length in human cell studies — a direct measure of slowed biological aging.' },
      { title: 'Burst Protocol', body: 'Only 10–20 days of injection per year produce lasting results — high efficacy with minimal intervention.' },
    ],
  },

  {
    slug: 'nad-plus',
    name: 'NAD+ 500mg',
    tagline: 'Cellular energy currency — restore NAD+ levels for peak mitochondrial function.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['NAD+', 'Energy', 'Mitochondria', 'Anti-Aging', 'Longevity', 'Sirtuin'],
    image: `${IMG}/nad-500mg.png`,
    shopUrl: shopLink('nad-500mg'),
    shortDescription:
      'NAD+ (nicotinamide adenine dinucleotide) is the master cellular energy cofactor that declines 50% by age 50. Restoring NAD+ levels activates sirtuins, improves mitochondrial function, and slows cellular aging.',
    seoTitle: 'NAD+ 500mg | Cellular Anti-Aging & Energy Restoration',
    deepDiveTitle: 'NAD+ 500mg: The Complete Cellular Rejuvenation Protocol',
    researchRating: 5,
    popularityRank: 6,
    fullDescription: `NAD+ (Nicotinamide Adenine Dinucleotide) is one of the most critical molecules in biology — a coenzyme present in every living cell that serves as the primary electron carrier in cellular energy metabolism. NAD+ is essential for converting nutrients into ATP (cellular energy) and serves as a required cofactor for over 500 enzymatic reactions.

**The Aging-NAD+ Connection**

NAD+ levels decline dramatically with age. By age 50, most individuals have approximately 50% of the NAD+ levels they had at age 20. By age 80, this drops to as low as 10–15% of youthful levels. This decline is now recognized as a central mechanism of the aging process — not just a consequence.

As NAD+ declines:
- Mitochondrial function deteriorates (less energy production)
- Sirtuin activity drops (impaired DNA repair and gene regulation)
- PARP enzymes (DNA damage response) become less efficient
- Cellular senescence accelerates

**Sirtuin Activation — The Longevity Pathway**

NAD+ is the required substrate for sirtuin enzymes (SIRT1–SIRT7) — the so-called "longevity proteins" that regulate DNA repair, inflammation, mitochondrial biogenesis, and metabolic health. Without adequate NAD+, sirtuins cannot function. Restoring NAD+ essentially reactivates the body's cellular maintenance programs.

**Research Evidence**

Human clinical trials with NAD+ precursors and direct NAD+ supplementation have documented improvements in:
- Mitochondrial function and energy production
- Cognitive performance and neurological health
- Physical endurance and muscle function
- Metabolic health markers (insulin sensitivity, lipid profiles)`,
    benefits: [
      'Restores declining NAD+ levels — halted or reversed by age-related depletion',
      'Activates sirtuin enzymes (SIRT1–SIRT7) — core longevity and DNA repair proteins',
      'Improves mitochondrial function and cellular energy production',
      'Enhances cognitive performance, mental clarity, and neurological resilience',
      'Supports DNA repair mechanisms through PARP enzyme activation',
      'Improves insulin sensitivity and metabolic health markers',
      'Reduces inflammation through NF-κB pathway modulation',
      'Synergistic with Epithalon and GHK-Cu for comprehensive anti-aging coverage',
    ],
    protocol: `**Standard Subcutaneous Protocol:**
- Dose: 100–500mg per injection
- Frequency: 2–3× per week (or daily for intensive protocols)
- Timing: Morning preferred for energy benefits
- Duration: Year-round use; no cycling required

**IV/High-Dose Protocol (Clinical Setting):**
- 500–1000mg via slow IV infusion
- Weekly for 4–8 weeks, then monthly maintenance

**Combination Protocol:**
- Best results when combined with Epithalon (synergistic longevity effect)
- Pair with GHK-Cu for comprehensive cellular rejuvenation`,
    synergies: ['epithalon', 'ghk-cu', 'bpc-157'],
    highlights: [
      { title: 'NAD+ Decline', body: 'NAD+ drops 50% by age 50 and 85%+ by age 80 — directly correlating with accelerated aging and disease risk.' },
      { title: 'Sirtuin Activation', body: 'NAD+ is the required fuel for sirtuin longevity enzymes — without it, cellular maintenance programs shut down.' },
      { title: 'Energy & Cognition', body: 'Most users report noticeable improvements in energy, mental clarity, and exercise capacity within 2–4 weeks.' },
    ],
  },

  // ── ANTI-AGING & SKIN ───────────────────────────────────────────
  {
    slug: 'snap-8',
    name: 'SNAP-8',
    tagline: 'Octapeptide anti-wrinkle — clinically proven to reduce expression line depth.',
    price: 45.00,
    category: 'Anti-Aging & Skin',
    tags: ['Anti-Wrinkle', 'Skin', 'Cosmetic', 'Expression Lines', 'SNAP-25'],
    image: `${IMG}/snap-8-10mg.png`,
    shopUrl: shopLink('snap-8-10mg'),
    shortDescription:
      'SNAP-8 is an octapeptide analog of SNAP-25 that competitively inhibits the SNARE complex, reducing muscle contraction in facial muscles to soften expression lines and wrinkles.',
    seoTitle: 'SNAP-8 | Anti-Wrinkle Peptide for Expression Lines',
    deepDiveTitle: 'SNAP-8: The Evidence-Based Anti-Wrinkle Protocol',
    researchRating: 4,
    popularityRank: 11,
    fullDescription: `SNAP-8 is an octapeptide (8 amino acid sequence) that functions as a competitive inhibitor of the SNARE (Soluble NSF Attachment Protein Receptor) complex — the molecular machinery that enables the fusion of synaptic vesicles with the nerve cell membrane to release acetylcholine.

**Mechanism: Targeted Muscle Relaxation**

When acetylcholine release at the neuromuscular junction is reduced, the facial muscles that create expression lines (corrugator, orbicularis oculi, frontalis) contract less forcefully. The result is a reduction in the mechanical stress that creates and deepens wrinkles — particularly forehead lines, crow's feet, and glabellar lines.

Unlike Botulinum toxin (Botox), SNAP-8 works by a reversible competitive inhibition mechanism — it competes with SNAP-25 for the SNARE complex rather than permanently cleaving it. This makes it safer for topical and low-dose use.

**Clinical Evidence**

A double-blind, vehicle-controlled study demonstrated:
- 26% reduction in wrinkle volume after 28 days of twice-daily topical application
- 17% reduction in wrinkle depth measurable by profilometry
- Significant improvements in skin smoothness and texture scores

**Combination with GHK-Cu**

SNAP-8 works through a fundamentally different mechanism than GHK-Cu (muscle relaxation vs. collagen synthesis), making these two peptides highly synergistic for comprehensive facial anti-aging. While GHK-Cu rebuilds the structural matrix, SNAP-8 prevents the mechanical formation of new lines.`,
    benefits: [
      'Reduces expression line depth by up to 26% in clinical studies',
      'Targets forehead lines, crow\'s feet, and glabellar furrows specifically',
      'Reversible mechanism — safer profile than neurotoxin-based approaches',
      'Suitable for topical or low-dose intradermal application',
      'Highly synergistic with GHK-Cu for complete facial rejuvenation',
      'No systemic side effects at typical therapeutic doses',
      'Improves skin smoothness and overall texture scores',
      'Can be used in DIY serum formulations at 5–10% concentration',
    ],
    protocol: `**Topical Serum Application (Most Common):**
- Concentration: 5–10% SNAP-8 in serum or cream base
- Frequency: Twice daily (AM and PM)
- Area: Focus on forehead, crow's feet, glabellar lines, and perioral area
- Duration: 4–8 weeks for measurable results

**Intradermal Microneedling (Advanced):**
- Reconstitute in saline to 0.1–0.5% concentration
- Apply during or after microneedling session for enhanced penetration
- Frequency: Once every 2–4 weeks

**Storage:**
- Lyophilized: Room temperature stable
- Reconstituted: Refrigerate, use within 30 days`,
    synergies: ['ghk-cu', 'epithalon'],
    highlights: [
      { title: 'Clinical Proof', body: '26% reduction in wrinkle volume in double-blind study — one of the most evidence-backed cosmetic peptides.' },
      { title: 'SNARE Inhibition', body: 'Reduces neuromuscular transmission to facial muscles — relaxing expression lines without systemic effects.' },
      { title: 'GHK-Cu Synergy', body: 'SNAP-8 (relaxes muscle) + GHK-Cu (rebuilds collagen) = complete dual-mechanism facial anti-aging stack.' },
    ],
  },

  {
    slug: 'snap-8-2pack',
    name: 'SNAP-8 (2-Pack)',
    tagline: 'Double supply of SNAP-8 — best value for ongoing anti-wrinkle protocols.',
    price: 80.00,
    category: 'Anti-Aging & Skin',
    tags: ['Anti-Wrinkle', 'Skin', 'Cosmetic', 'Expression Lines', 'Value Pack'],
    image: `${IMG}/snap-8-10mg.png`,
    shopUrl: shopLink('snap-8-10mg'),
    shortDescription:
      'Two vials of SNAP-8 at a discounted bundle price. Ideal for extended protocols, professional use, or sharing the stack with a partner.',
    seoTitle: 'SNAP-8 2-Pack | Anti-Wrinkle Peptide Bundle',
    deepDiveTitle: 'SNAP-8 2-Pack: Extended Anti-Wrinkle Protocol',
    researchRating: 4,
    popularityRank: 12,
    fullDescription: `The SNAP-8 2-Pack provides two vials of SNAP-8 (20mg total) at a reduced per-vial price — the optimal choice for individuals running extended anti-wrinkle protocols or practitioners treating multiple areas simultaneously.

**Why 2 Vials?**

Clinical studies demonstrate that wrinkle reduction with SNAP-8 is progressive — the most significant improvements occur between weeks 4 and 12 of consistent application. A single vial is typically sufficient for a standard 4-week protocol; two vials supports a full 8–12 week regimen without interruption.

For individuals applying SNAP-8 to multiple facial zones (forehead, periorbital, perioral, neck), consumption is higher and the 2-pack ensures uninterrupted supply.

**Same Mechanism, Better Value**

This product contains identical SNAP-8 (octapeptide) to the single vial — the same clinically studied compound that demonstrated 26% wrinkle volume reduction in double-blind controlled clinical studies. The 2-pack simply provides better per-vial economics for committed anti-aging protocols.

See SNAP-8 single vial product page for complete mechanism of action, clinical data, and protocol details.`,
    benefits: [
      'Best value for 8–12 week extended anti-wrinkle protocols',
      'Sufficient supply for full facial treatment (multiple zones simultaneously)',
      'Ideal for practitioners or shared use',
      'Same SNAP-8 quality as single vial — 26% wrinkle reduction in clinical studies',
      'No interruption in protocol for maximum cumulative effect',
    ],
    protocol: `See SNAP-8 single vial protocol. The 2-pack supports:
- 8–12 week full facial protocol (forehead + crow's feet + perioral)
- 4-week protocol for two people
- Professional multi-area treatment sessions

**Extended Protocol Schedule:**
- Weeks 1–4: Twice daily application to target zones
- Weeks 5–8: Daily maintenance application
- Weeks 9–12: Every other day for minimum maintenance`,
    synergies: ['snap-8', 'ghk-cu', 'epithalon'],
    highlights: [
      { title: 'Extended Coverage', body: 'Two vials = 20mg total SNAP-8 — enough for a full 8–12 week multi-zone facial protocol.' },
      { title: 'Value Bundle', body: 'Lower per-vial cost than buying two single vials separately.' },
      { title: 'Uninterrupted Protocol', body: 'Consistent daily application over 8–12 weeks produces significantly superior results to short cycles.' },
    ],
  },

  // ── BODY COMPOSITION — GLP PEPTIDES ────────────────────────────
  {
    slug: 'semaglutide-5mg',
    name: 'Semaglutide 5mg (GLP-1 S)',
    tagline: 'GLP-1 receptor agonist — clinically proven weight loss and metabolic health.',
    price: 79.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GLP-1', 'Metabolic', 'Appetite', 'Semaglutide'],
    image: `${IMG}/semaglutide-6mg.png`,
    shopUrl: shopLink('semaglutide-6mg'),
    shortDescription:
      'Semaglutide is a GLP-1 receptor agonist that reduces appetite, slows gastric emptying, and drives clinically significant weight loss of 10–15% body weight in 68-week trials.',
    seoTitle: 'Semaglutide 5mg | GLP-1 Peptide for Clinically Proven Weight Loss',
    deepDiveTitle: 'Semaglutide (GLP-1 S) 5mg: The Research Protocol Guide',
    researchRating: 5,
    popularityRank: 8,
    fullDescription: `Semaglutide is a GLP-1 (Glucagon-Like Peptide-1) receptor agonist — a class of peptide that mimics the body's natural GLP-1 hormone, which is released from the gut after eating. GLP-1 is a powerful regulator of appetite, gastric emptying, and insulin secretion. Semaglutide has 94% structural homology to human GLP-1 but with modifications that extend its half-life to approximately 7 days, enabling once-weekly dosing.

**Why GLP-1 Agonists Work**

GLP-1 receptors are expressed in the brain (hypothalamus, brainstem), pancreas, gut, heart, and adipose tissue. Semaglutide acts on all of these simultaneously:

- **Brain**: Reduces appetite by acting on hypothalamic satiety centers
- **Gut**: Slows gastric emptying, increasing satiety duration
- **Pancreas**: Stimulates insulin secretion in response to glucose (glucose-dependent)
- **Adipose**: Promotes fat oxidation and reduces lipogenesis

**The Clinical Evidence**

The STEP clinical trials with semaglutide are among the most impactful in metabolic medicine:
- STEP 1: 14.9% average body weight reduction over 68 weeks (vs. 2.4% placebo)
- 33% of participants lost more than 20% of body weight
- Improvements in blood pressure, lipids, and glycemic control

**Quality Assurance**

This is pharmaceutical-grade semaglutide with HPLC purity verification and a Certificate of Analysis available for every batch.`,
    benefits: [
      '10–15% average body weight reduction in 68-week clinical trials',
      'Reduces appetite via hypothalamic GLP-1 receptor activation',
      'Slows gastric emptying — extends satiety for hours post-meal',
      'Glucose-dependent insulin stimulation — metabolically safe profile',
      'Improves cardiovascular risk markers (blood pressure, LDL, triglycerides)',
      'Once-weekly dosing due to 7-day half-life',
      'Reduces liver fat (non-alcoholic fatty liver disease improvement)',
      'Preserves lean muscle mass relative to total weight lost',
    ],
    protocol: `**Standard Research Escalation Protocol:**
- Week 1–4: 0.25mg once weekly subcutaneous
- Week 5–8: 0.5mg once weekly
- Week 9–12: 1.0mg once weekly
- Week 13+: 1.7–2.4mg once weekly (if well tolerated)

**Injection Timing:**
- Once weekly subcutaneous injection (abdomen, thigh, or upper arm)
- Same day each week for consistency
- No fasting required

**Common Side Effects (Dose-Dependent):**
- Nausea most common during dose escalation — typically resolves with time
- Slow escalation protocol minimizes gastrointestinal effects`,
    synergies: ['semaglutide-10mg', 'ipamorelin-cjc'],
    highlights: [
      { title: '14.9% Weight Loss', body: 'Average body weight reduction in STEP 1 trial — 14.9% vs 2.4% placebo over 68 weeks.' },
      { title: 'Starter Dose', body: '5mg vial provides a starter supply for the dose-escalation protocol commonly used in clinical settings.' },
      { title: 'Multi-Organ Action', body: 'Acts on brain, gut, pancreas, and adipose simultaneously — comprehensive metabolic intervention.' },
    ],
  },

  {
    slug: 'semaglutide-10mg',
    name: 'Semaglutide 10mg (GLP-1 S)',
    tagline: 'Full-dose semaglutide — the most popular GLP-1 vial for sustained weight loss protocols.',
    price: 129.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GLP-1', 'Metabolic', 'Appetite', 'Semaglutide'],
    image: `${IMG}/semaglutide-12mg.png`,
    shopUrl: shopLink('semaglutide-12mg'),
    shortDescription:
      'Semaglutide 10mg — the most popular vial size for sustained GLP-1 dosing protocols. Provides 4–8 weeks of supply depending on dose escalation stage.',
    seoTitle: 'Semaglutide 10mg | Best Value GLP-1 Weight Loss Protocol',
    deepDiveTitle: 'Semaglutide (GLP-1 S) 10mg: Full Protocol Guide',
    researchRating: 5,
    popularityRank: 9,
    fullDescription: `The Semaglutide 10mg vial is the most popular choice for sustained GLP-1 dosing protocols. At maintenance doses of 1.7–2.4mg per week, a single 10mg vial provides approximately 4–6 weeks of supply — ideal for mid-protocol replenishment without frequent reordering.

**The GLP-1 Research Landscape**

Semaglutide has become the gold standard of GLP-1 receptor agonism following the landmark STEP clinical trials. The STEP 1 trial demonstrated average weight reduction of 14.9% over 68 weeks — a magnitude previously only achievable through bariatric surgery. The SUSTAIN trials further validated cardiovascular risk reduction, establishing semaglutide as one of the most comprehensively studied metabolic peptides in modern medicine.

**Why 10mg?**

The 10mg vial is the practical sweet spot for most users:
- At 0.25mg/week (starting dose): 40 weeks of supply
- At 1.0mg/week (common maintenance): 10 weeks of supply
- At 2.4mg/week (max dose): ~4 weeks of supply

For those at maintenance doses, ordering monthly with a 10mg vial avoids stockpiling while minimizing reorder frequency.

For complete mechanism of action, clinical evidence, and protocol details, see the Semaglutide 5mg product page.`,
    benefits: [
      'Most cost-effective single vial for sustained maintenance protocols',
      'Same pharmaceutical-grade semaglutide with 7-day half-life',
      '10–15% body weight reduction potential in full 68-week protocol',
      'Reduces cardiovascular risk markers in metabolic syndrome protocols',
      'Flexible supply: serves starter or maintenance doses depending on protocol stage',
      'HPLC-verified purity — COA available per batch',
    ],
    protocol: `Same protocol as Semaglutide 5mg. The 10mg vial is the preferred size for:
- Researchers entering the 1.0mg+ weekly maintenance phase
- Long-duration protocols (12–24 weeks) without frequent reordering
- Practitioners sourcing for multiple users

**Dose Escalation Reference:**
- 0.25mg/week × 4 weeks → 0.5mg/week × 4 weeks → 1.0mg/week → 1.7mg/week → 2.4mg/week`,
    synergies: ['semaglutide-5mg', 'semaglutide-15mg', 'ipamorelin-cjc'],
    highlights: [
      { title: 'Best Value Vial', body: 'Most popular size — provides 4–10 weeks at typical maintenance doses without frequent reordering.' },
      { title: '68-Week Data', body: 'Backed by the STEP trial program — the largest weight loss peptide clinical dataset ever assembled.' },
      { title: 'HPLC Verified', body: 'Certificate of analysis provided with every batch — guaranteed purity.' },
    ],
  },

  {
    slug: 'semaglutide-15mg',
    name: 'Semaglutide 15mg (GLP-1 S)',
    tagline: 'Maximum supply semaglutide — long-duration GLP-1 dosing protocols.',
    price: 189.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GLP-1', 'Metabolic', 'Long Protocol', 'Semaglutide'],
    image: `${IMG}/semaglutide-20mg.png`,
    shopUrl: shopLink('semaglutide-20mg'),
    shortDescription:
      'Semaglutide 15mg — the largest single vial for extended GLP-1 weight loss protocols. Covers 6–12 weeks of supply at maintenance doses and is the most cost-efficient per-mg option.',
    seoTitle: 'Semaglutide 15mg | High-Dose GLP-1 for Maximum Fat Loss Results',
    deepDiveTitle: 'Semaglutide (GLP-1 S) 15mg: Extended Protocol Guide',
    researchRating: 5,
    popularityRank: 10,
    fullDescription: `The Semaglutide 15mg vial is the largest single-vial option — designed for those running extended 16–24 week protocols at maintenance doses. At 1.7–2.4mg per week, a single 15mg vial provides approximately 6–8 weeks of continuous supply.

**Optimal for Long-Duration Research**

The full clinical efficacy of semaglutide emerges gradually over time. The STEP trials showed that weight loss continued to accumulate through 68 weeks, with the most dramatic improvements in cardiometabolic markers typically observed after 16+ weeks of consistent dosing. The 15mg vial minimizes the logistics of mid-protocol reordering for those committed to full-duration protocols.

**Cost Efficiency**

At $159.99 for 15mg, the 15mg vial offers the best per-mg price point of all three semaglutide options — approximately $10.67/mg vs. $11.11/mg for the 10mg vial. For those planning extended protocols, this represents meaningful cost savings over multiple purchase cycles.

For complete mechanism, clinical trial data, and protocol details, see the Semaglutide 5mg and 10mg product pages.`,
    benefits: [
      'Best per-mg value of all semaglutide vial sizes',
      'Sufficient for 6–8 weeks at 2.4mg/week maintenance dose',
      'Minimizes reorder frequency for extended dosing protocols',
      'Identical pharmaceutical-grade semaglutide — same HPLC-verified quality',
      'Ideal for protocols running beyond 16 weeks for full cardiometabolic benefit',
    ],
    protocol: `Same protocol as Semaglutide 5mg and 10mg. The 15mg vial is recommended for:
- Researchers in the 1.7–2.4mg/week maintenance phase
- Extended protocols (16–24 weeks) seeking to minimize reorders
- Larger supply for multi-person household protocols

**Duration Guide at Common Doses:**
- 1.0mg/week: ~15 weeks of supply
- 1.7mg/week: ~9 weeks
- 2.4mg/week: ~6 weeks`,
    synergies: ['semaglutide-10mg', 'ipamorelin-cjc'],
    highlights: [
      { title: 'Best Per-Mg Value', body: 'Most cost-efficient semaglutide option — ideal for those planning extended 16–24 week protocols.' },
      { title: 'Extended Coverage', body: '6–15 weeks at typical doses — eliminating frequent reorders during critical protocol phases.' },
      { title: 'Same Quality', body: 'Identical pharmaceutical-grade purity as smaller vials — COA per batch.' },
    ],
  },

  {
    slug: 'cagri-sema',
    name: 'Cagrilintide + Semaglutide',
    tagline: 'Dual amylin/GLP-1 combination — superior weight loss through complementary mechanisms.',
    price: 179.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Amylin', 'GLP-1', 'Combination', 'Metabolic'],
    image: `${IMG}/cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg.png`,
    shopUrl: shopLink('cagri-sema-blend-10mg'),
    shortDescription:
      'Cagrilintide (amylin analog) combined with Semaglutide (GLP-1 agonist) targets weight loss through two independent peptide pathways — additive effects vs. GLP-1 alone.',
    seoTitle: 'Cagrilintide + Semaglutide | Dual-Action Amylin & GLP-1 Fat Loss Stack',
    deepDiveTitle: 'Cagrilintide + Semaglutide: The Dual-Pathway Weight Loss Protocol',
    researchRating: 4,
    popularityRank: 13,
    fullDescription: `This combination product contains both Cagrilintide (an amylin analog) and Semaglutide (a GLP-1 receptor agonist) — two peptides that act through distinct but complementary mechanisms to produce weight loss effects that appear additive or even synergistic.

**Cagrilintide: The Amylin Component**

Cagrilintide is a long-acting analog of amylin — a peptide hormone co-secreted with insulin from pancreatic beta cells in response to food intake. Amylin signals satiety through the area postrema in the brain, slows gastric emptying, and suppresses post-meal glucagon release. Natural amylin has a half-life of minutes; cagrilintide has been modified for a ~7-day half-life, enabling once-weekly dosing.

Amylin and GLP-1 activate distinct and complementary neural satiety pathways — acting on different brainstem and hypothalamic circuits to reduce food intake from multiple angles simultaneously.

**CagriSema Clinical Data**

In Phase 2 trials, the CagriSema combination (cagrilintide + semaglutide) demonstrated weight loss of approximately 15.6% over 32 weeks — numerically superior to semaglutide alone in the same timeframe. Phase 3 trials (REDEFINE) are currently underway.

The combination also showed improvements in:
- Fasting glucose and HbA1c
- Blood pressure and lipid profiles
- Liver fat reduction`,
    benefits: [
      'Dual-pathway satiety — amylin and GLP-1 activate independent brain satiety circuits',
      '~15.6% weight loss in Phase 2 trials — superior to GLP-1 alone',
      'Once-weekly dosing for both components due to matched half-lives',
      'Improved glycemic control through complementary insulin-regulating mechanisms',
      'Enhanced cardiovascular risk factor reduction vs. single-agent protocols',
      'Amylin suppresses post-meal glucagon — reduces blood glucose spikes',
      'Additive satiety effects with fewer side effects than dose-escalating a single GLP-1',
    ],
    protocol: `**Standard Research Protocol:**
- Dose: 2.4mg cagrilintide + 2.4mg semaglutide once weekly (from this 5+5mg vial)
- Route: Subcutaneous injection (abdomen, thigh, or upper arm)
- Escalation: Begin at lower doses and escalate over 16 weeks to maintenance
- Duration: 32+ weeks for full body composition effects

**Injection Notes:**
- Once-weekly injection of the combination
- Same day each week recommended for consistent plasma levels
- Follow standard GLP-1 nausea management protocol during dose escalation`,
    synergies: ['tirzepatide-15mg', 'ipamorelin-cjc'],
    highlights: [
      { title: '15.6% Weight Loss', body: 'Phase 2 CagriSema trials showed 15.6% weight reduction — surpassing semaglutide-alone comparators.' },
      { title: 'Dual Mechanism', body: 'Amylin + GLP-1 target different satiety circuits — genuinely additive effects at the neural level.' },
      { title: 'Phase 3 Ongoing', body: 'REDEFINE Phase 3 trials represent the most advanced dual-agonist program in metabolic medicine.' },
    ],
  },

  {
    slug: 'tirzepatide-15mg',
    name: 'Tirzepatide 15mg (GLP-2 T)',
    tagline: 'Dual GIP/GLP-1 agonist — the most effective weight loss peptide in clinical trials.',
    price: 149.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GIP', 'GLP-1', 'Tirzepatide', 'Body Composition'],
    image: `${IMG}/tirzepatide-15mg.png`,
    shopUrl: shopLink('tirzepatide-15mg'),
    shortDescription:
      'Tirzepatide is a dual GIP/GLP-1 receptor agonist that achieved 20.9% average weight loss in Phase 3 trials — the greatest weight reduction of any peptide in clinical history.',
    seoTitle: 'Tirzepatide 15mg | Dual GIP/GLP-1 Peptide — Up to 22.5% Weight Loss',
    deepDiveTitle: 'Tirzepatide (GLP-2 T) 15mg: The Complete Dual Agonist Protocol',
    researchRating: 5,
    popularityRank: 14,
    fullDescription: `Tirzepatide is the most effective anti-obesity peptide ever studied in Phase 3 clinical trials. As a dual GIP (Glucose-Dependent Insulinotropic Polypeptide) and GLP-1 (Glucagon-Like Peptide-1) receptor agonist, tirzepatide activates two complementary metabolic regulatory pathways simultaneously.

**The GIP + GLP-1 Dual Mechanism**

GIP and GLP-1 are the two primary incretins — gut hormones released in response to eating. While GLP-1 (targeted by semaglutide) has been well-characterized, GIP's role in weight regulation was less understood until tirzepatide's development.

Tirzepatide's dual mechanism produces effects exceeding either agonist alone:
- **GIP activation**: Enhances insulin sensitivity, promotes adipose lipolysis, and modulates food reward pathways
- **GLP-1 activation**: Reduces appetite, slows gastric emptying, and regulates glucose metabolism
- **Combined**: The dual signal appears to produce synergistic — not merely additive — effects on body weight

**SURMOUNT Trial Data**

The SURMOUNT-1 Phase 3 trial is the landmark dataset:
- 20.9% average body weight reduction at 72 weeks (5mg–15mg dose range)
- 56% of participants lost 20%+ of body weight at the highest dose
- 82% of participants at 15mg achieved at least 5% weight loss
- Improvements in blood pressure, lipids, insulin resistance, and liver fat`,
    benefits: [
      '20.9% average weight loss in SURMOUNT-1 — the most ever documented for a single peptide',
      '56% of subjects lost 20%+ of body weight at 15mg — surgical-level weight loss',
      'Dual GIP + GLP-1 activation — superior to single-agonist protocols',
      'Significantly improves insulin resistance and type 2 diabetes markers',
      'Reduces visceral and liver fat more than semaglutide in head-to-head data',
      'Once-weekly subcutaneous injection due to ~5-day half-life',
      'Improves cardiovascular risk markers: blood pressure, LDL, triglycerides',
      'Preserves lean muscle mass at higher rates than earlier GLP-1 agents',
    ],
    protocol: `**Escalation Protocol (16 weeks to maintenance):**
- Weeks 1–4: 2.5mg once weekly
- Weeks 5–8: 5mg once weekly
- Weeks 9–12: 7.5mg once weekly
- Weeks 13–16: 10mg once weekly
- Weeks 17+: 12.5–15mg once weekly (maximum)

**Injection Instructions:**
- Once-weekly subcutaneous injection (abdomen, thigh, or upper arm)
- Rotate injection sites each week
- May take with or without food
- Same day of week for consistent plasma levels`,
    synergies: ['tirzepatide-30mg', 'semaglutide-10mg', 'ipamorelin-cjc'],
    highlights: [
      { title: '20.9% Weight Loss', body: 'SURMOUNT-1 data — the largest weight reduction ever documented in a Phase 3 anti-obesity trial.' },
      { title: 'Dual Agonist', body: 'GIP + GLP-1 dual activation produces greater weight loss than either target alone — synergistic mechanism.' },
      { title: '56% Lose 20%+', body: 'At 15mg, 56% of subjects lost more than 20% of body weight — results previously achievable only through surgery.' },
    ],
  },

  {
    slug: 'tirzepatide-30mg',
    name: 'Tirzepatide 30mg (GLP-2 T)',
    tagline: 'Extended supply tirzepatide — best value for ongoing dual GIP/GLP-1 weight loss protocols.',
    price: 249.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GIP', 'GLP-1', 'Tirzepatide', 'Extended Protocol'],
    image: `${IMG}/tirzepatide-30mg.png`,
    shopUrl: shopLink('tirzepatide-30mg'),
    shortDescription:
      'Tirzepatide 30mg — two months of supply at 15mg/week maintenance dose. Best single-vial value for extended tirzepatide protocols.',
    seoTitle: 'Tirzepatide 30mg | High-Dose GIP/GLP-1 Weight Loss Protocol',
    deepDiveTitle: 'Tirzepatide (GLP-2 T) 30mg: Extended Protocol Guide',
    researchRating: 5,
    popularityRank: 15,
    fullDescription: `The Tirzepatide 30mg vial is the standard choice for those at maintenance dosing who want 8+ weeks of uninterrupted supply. At the 15mg/week maintenance dose used in SURMOUNT trials, a single 30mg vial provides approximately two weeks of supply — though most users maintain lower doses (5–10mg) where a 30mg vial provides 3–6 weeks.

**Why 30mg?**

The SURMOUNT-1 trial demonstrated that tirzepatide's weight loss effects continue to compound through 72 weeks. Researchers running extended 24+ week protocols benefit from larger vial sizes to avoid supply interruptions during critical protocol phases.

The 30mg vial also represents better per-mg economics than the 15mg vial at ~$9.33/mg vs. ~$10.00/mg.

For complete mechanism of action, clinical trial data, and escalation protocols, see the Tirzepatide 15mg product page.`,
    benefits: [
      'Best per-mg value of the 15mg and 30mg tirzepatide options',
      'Sufficient for 2–6 weeks depending on maintenance dose',
      'Minimizes reorder frequency during extended protocol phases',
      'Same HPLC-verified pharmaceutical-grade tirzepatide as 15mg vial',
      'Ideal for 24+ week protocols where supply continuity is critical',
    ],
    protocol: `Same as Tirzepatide 15mg protocol. 30mg vial provides:
- ~2 weeks at 15mg/week (maintenance)
- ~4 weeks at 7.5mg/week
- ~6 weeks at 5mg/week

Recommended for those transitioning into the 7.5–10mg/week maintenance phase and seeking to consolidate supply.`,
    synergies: ['tirzepatide-15mg', 'ipamorelin-cjc'],
    highlights: [
      { title: 'Extended Supply', body: '30mg = 2–6 weeks depending on dose — the preferred option for committed long-duration protocols.' },
      { title: 'Value Per-mg', body: '~$9.33/mg — better economics than the 15mg vial for those at maintenance doses.' },
      { title: 'No Interruptions', body: 'Supply continuity is critical in long-duration protocols — a single 30mg vial covers most maintenance phases.' },
    ],
  },

  {
    slug: 'tirzepatide-15mg-4pack',
    name: 'Tirzepatide 15mg 4-Pack (GLP-2 T)',
    tagline: 'Four-vial tirzepatide bundle — optimal for 12–16 week dosing protocols.',
    price: 569.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GIP', 'GLP-1', 'Tirzepatide', 'Multi-Pack', 'Best Value'],
    image: `${IMG}/tirzepatide-15mg.png`,
    shopUrl: shopLink('tirzepatide-15mg'),
    shortDescription:
      'Four vials of Tirzepatide 15mg (60mg total) at the best per-vial price. Covers a complete 12–16 week protocol from dose escalation through maintenance.',
    seoTitle: 'Tirzepatide 4-Pack | Best Value Multi-Vial Bundle',
    deepDiveTitle: 'Tirzepatide 15mg 4-Pack: Complete Protocol Bundle',
    researchRating: 5,
    popularityRank: 16,
    fullDescription: `The Tirzepatide 4-Pack provides four vials of Tirzepatide 15mg (60mg total) — enough to cover a complete 12–16 week protocol from dose escalation through maintenance at 7.5–10mg/week.

**What 60mg Covers**

Following the standard SURMOUNT-1 escalation protocol:
- Weeks 1–4: 2.5mg/week = 10mg total
- Weeks 5–8: 5mg/week = 20mg total
- Weeks 9–12: 7.5mg/week = 30mg total
- Weeks 13–16: 10mg/week = 40mg total
- Total for 16-week protocol: ~100mg — order 2 packs for full coverage

At 5mg/week maintenance, the 4-pack covers 12 weeks.

**Price Advantage**

At $569.99 for 60mg = $9.50/mg — the best per-mg price of any single tirzepatide option.

For complete mechanism, clinical data, and escalation protocol, see the Tirzepatide 15mg product page.`,
    benefits: [
      'Best per-mg tirzepatide price: ~$9.50/mg',
      '60mg total — covers most 8–12 week mid-protocol phases',
      'No mid-protocol reordering for 5–10mg/week maintenance dosing',
      'Same quality as single vials — batch-tested tirzepatide',
    ],
    protocol: `Same as Tirzepatide 15mg. 4-pack (60mg total) covers:
- 12 weeks at 5mg/week
- 8 weeks at 7.5mg/week
- 6 weeks at 10mg/week
- 4 weeks at 15mg/week`,
    synergies: ['tirzepatide-30mg'],
    highlights: [
      { title: '60mg Total', body: 'Four 15mg vials — the optimal bundle for 8–12 week sustained maintenance protocols.' },
      { title: 'Best Per-Mg Price', body: '~$9.50/mg — the lowest tirzepatide cost per mg available.' },
      { title: 'Protocol Coverage', body: 'Covers complete dose-escalation through maintenance without reordering.' },
    ],
  },

  {
    slug: 'tirzepatide-20mg-5pack',
    name: 'Tirzepatide 20mg 5-Pack (GLP-2 T)',
    tagline: 'Maximum supply — 100mg tirzepatide for extended extended protocols.',
    price: 699.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GIP', 'GLP-1', 'Tirzepatide', 'Research Program'],
    image: `${IMG}/tirzepatide-30mg.png`,
    shopUrl: shopLink('tirzepatide-30mg'),
    shortDescription:
      'Five vials of Tirzepatide 20mg (100mg total) — the largest supply bundle for high-dose extended protocols. Best economics for full 24-week protocol coverage.',
    seoTitle: 'Tirzepatide 20mg 5-Pack | Best Price Per Vial Fat Loss Bundle',
    deepDiveTitle: 'Tirzepatide 20mg 5-Pack: Extended Research Program',
    researchRating: 5,
    popularityRank: 17,
    fullDescription: `The Tirzepatide 20mg 5-Pack provides 100mg of pharmaceutical-grade tirzepatide across five vials — the largest supply option and the best economics for those running full 24-week extended protocols.

**What 100mg Covers**

At maximum therapeutic doses (15mg/week), 100mg provides approximately 6.5 weeks. At more typical 5–10mg/week maintenance:
- 5mg/week: 20 weeks of supply
- 7.5mg/week: ~13 weeks
- 10mg/week: 10 weeks

For those tracking the full SURMOUNT-1 protocol duration (72 weeks), multiple 5-packs would be required for the complete protocol.

**Institutional and Multi-Subject Research**

The 5-pack format is particularly suited to institutional extended protocols studying multiple subjects simultaneously, or longitudinal studies where supply continuity over many months is critical.

For complete mechanism and protocol details, see Tirzepatide 15mg.`,
    benefits: [
      '100mg total — the largest single-purchase tirzepatide option',
      'Enables 10–20 weeks of uninterrupted dosing at typical maintenance doses',
      'Institutional-scale supply for multi-subject extended protocols',
      'Best per-mg economics for maximum-scale tirzepatide protocols',
    ],
    protocol: `Same as Tirzepatide 15mg. 5-pack (100mg total) covers:
- 20 weeks at 5mg/week (dose-escalation and early maintenance)
- 13 weeks at 7.5mg/week
- 10 weeks at 10mg/week
- ~6.5 weeks at 15mg/week`,
    synergies: ['tirzepatide-30mg'],
    highlights: [
      { title: '100mg Total', body: 'Five 20mg vials — maximum supply for extended or multi-subject extended protocols.' },
      { title: 'Longitudinal Research', body: 'Sufficient for 10–20 week maintenance phases without reordering.' },
      { title: 'Best Bulk Economics', body: 'Best per-mg pricing for those committing to full-duration tirzepatide protocols.' },
    ],
  },

  {
    slug: 'tirzepatide-15mg-10pack',
    name: 'Tirzepatide 15mg 10-Pack (GLP-2 T)',
    tagline: 'Institutional supply — 150mg tirzepatide for large-scale extended protocols.',
    price: 1399.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GIP', 'GLP-1', 'Tirzepatide', 'Institutional', 'Bulk'],
    image: `${IMG}/tirzepatide-15mg.png`,
    shopUrl: shopLink('tirzepatide-15mg'),
    shortDescription:
      'Ten vials of Tirzepatide 15mg (150mg total) — institutional-scale supply for large extended protocols, multi-subject studies, or long-duration protocols.',
    seoTitle: 'Tirzepatide 15mg 10-Pack | Maximum Savings Bulk Supply',
    deepDiveTitle: 'Tirzepatide 15mg 10-Pack: Institutional Research Supply',
    researchRating: 5,
    popularityRank: 18,
    fullDescription: `The Tirzepatide 10-Pack is an institutional-tier option — 10 vials of Tirzepatide 15mg (150mg total), suitable for multi-subject extended protocols, institutional laboratory use, or long-duration replications of the SURMOUNT clinical trial protocol.

**Supply at Scale**

150mg represents:
- 30 weeks at 5mg/week (full Phase 3 trial dose-escalation phase)
- 20 weeks at 7.5mg/week
- 10 weeks at 15mg/week (maximum dose)
- For a 2-subject study at 10mg/week each: ~7.5 weeks supply

**Research Context**

The SURMOUNT-1 trial ran for 72 weeks. Replicating this in a protocol context at 10mg/week per subject requires approximately 720mg of tirzepatide — or roughly 5 × 10-packs. The 10-pack is the appropriate unit purchase for institutional-scale protocols.

All vials carry HPLC and mass spectrometry certification of analysis.`,
    benefits: [
      '150mg total — institutional-scale supply for multi-subject or long-duration protocols',
      'Covers 20–30 weeks for single-subject protocols at typical doses',
      'Batch-tested with HPLC and mass spectrometry verification',
      'Suitable for replications of SURMOUNT clinical trial methodology',
    ],
    protocol: `Same as Tirzepatide 15mg. 10-pack (150mg total):
- 30 weeks at 5mg/week
- 20 weeks at 7.5mg/week
- 15 weeks at 10mg/week
- 10 weeks at 15mg/week`,
    synergies: [],
    highlights: [
      { title: '150mg Total', body: 'Institutional-scale supply — 10 × 15mg vials for multi-subject or long-duration extended protocols.' },
      { title: 'COA Per Batch', body: 'Each batch carries HPLC and mass spectrometry certificate of analysis.' },
      { title: 'Full Protocol Coverage', body: '20–30 weeks of supply at typical maintenance doses without reordering.' },
    ],
  },

  // ── RETATRUTIDE ─────────────────────────────────────────────────
  {
    slug: 'retatrutide-10mg',
    name: 'Retatrutide 10mg (GLP-3 R)',
    tagline: 'Triple GIP/GLP-1/Glucagon agonist — the next generation of metabolic weight loss peptides.',
    price: 149.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Triple Agonist', 'GLP-3', 'Retatrutide', 'Metabolic'],
    image: `${IMG}/retatrutide-10mg.png`,
    shopUrl: shopLink('retatrutide-10mg'),
    shortDescription:
      'Retatrutide is a triple GIP/GLP-1/Glucagon receptor agonist that showed 24.2% average weight loss in Phase 2 trials — potentially the most powerful anti-obesity peptide ever studied.',
    seoTitle: 'Retatrutide 10mg | GLP-1/GIP/GCG Triple Agonist for Superior Weight Loss',
    deepDiveTitle: 'Retatrutide (GLP-3 R) 10mg: The Triple Agonist Protocol',
    researchRating: 4,
    popularityRank: 19,
    fullDescription: `Retatrutide is a "triple agonist" — a single molecule that simultaneously activates three distinct metabolic hormone receptors: GIP (Glucose-Dependent Insulinotropic Polypeptide), GLP-1 (Glucagon-Like Peptide-1), and the Glucagon receptor. This triple mechanism distinguishes it from semaglutide (single GLP-1 agonist) and tirzepatide (dual GIP/GLP-1 agonist) and has produced the most dramatic weight loss data in the history of pharmaceutical anti-obesity medicine.

**The Third Receptor: Glucagon**

The addition of glucagon receptor agonism is the key differentiator. Glucagon promotes lipolysis (fat breakdown), increases energy expenditure, and drives hepatic fat reduction more aggressively than GLP-1 or GIP alone. However, pure glucagon agonism raises concerns about hyperglycemia. Retatrutide's design balances glucagon-mediated fat burning with GIP and GLP-1's insulin-stimulating effects, creating a metabolic equilibrium that drives fat loss without dangerous glucose elevation.

**Phase 2 Clinical Data**

The Phase 2 trial published in the New England Journal of Medicine (2023) showed:
- 24.2% average body weight reduction at 48 weeks (12mg dose)
- 17.5% weight reduction at the 4mg dose
- Significant improvements in triglycerides, blood pressure, and waist circumference
- Safety profile comparable to other GLP-1 class agents

**Research Status**

Retatrutide (LY3437943) is currently in Phase 3 trials. The Phase 2 data has made it one of the most watched compounds in metabolic medicine.`,
    benefits: [
      '24.2% average weight loss in Phase 2 — potentially the highest ever recorded',
      'Triple GIP/GLP-1/Glucagon activation: three independent fat-loss mechanisms',
      'Glucagon receptor agonism drives hepatic fat reduction and energy expenditure',
      'Significantly reduces triglycerides, blood pressure, and visceral fat',
      'Currently in Phase 3 trials — the most advanced triple agonist in development',
      'NEJM Phase 2 publication — high-quality peer-reviewed evidence base',
    ],
    protocol: `**Phase 2 Escalation Protocol (Research Reference):**
- Weeks 1–4: 2mg once weekly
- Weeks 5–8: 4mg once weekly
- Weeks 9–12: 8mg once weekly
- Weeks 13+: 12mg once weekly (Phase 2 maximum)

**Injection:**
- Once-weekly subcutaneous injection
- Standard GLP class dose escalation to manage gastrointestinal effects
- Same injection sites as tirzepatide (abdomen, thigh, upper arm)`,
    synergies: ['retatrutide-15mg', 'ipamorelin-cjc'],
    highlights: [
      { title: '24.2% Weight Loss', body: 'Phase 2 NEJM publication — the largest weight reduction percentage ever published for any anti-obesity agent.' },
      { title: 'Triple Agonist', body: 'GIP + GLP-1 + Glucagon — three distinct metabolic pathways activated simultaneously.' },
      { title: 'Phase 3 Active', body: 'Currently in Phase 3 clinical trials — the most closely watched compound in anti-obesity medicine.' },
    ],
  },

  {
    slug: 'retatrutide-15mg',
    name: 'Retatrutide 15mg (GLP-3 R)',
    tagline: 'Extended supply retatrutide — best value for triple agonist dosing protocols.',
    price: 199.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Triple Agonist', 'GLP-3', 'Retatrutide', 'Extended'],
    image: `${IMG}/retatrutide-15mg.png`,
    shopUrl: shopLink('retatrutide-15mg'),
    shortDescription:
      'Retatrutide 15mg — larger supply vial for extended triple GIP/GLP-1/Glucagon protocols. Best per-mg economics for retatrutide protocols beyond the starter phase.',
    seoTitle: 'Retatrutide 15mg | High-Dose Triple Agonist Fat Loss Protocol',
    deepDiveTitle: 'Retatrutide (GLP-3 R) 15mg: Extended Protocol Guide',
    researchRating: 4,
    popularityRank: 20,
    fullDescription: `The Retatrutide 15mg vial provides extended supply for those moving beyond the initial dose-escalation phase into sustained 8–12mg/week maintenance dosing. At 8mg/week, a 15mg vial provides approximately 2 weeks of supply; at 4mg/week (common mid-escalation dose), it covers ~4 weeks.

**Retatrutide in Context**

Following the landmark NEJM Phase 2 publication showing 24.2% weight loss, retatrutide has become one of the most in-demand peptides in the metabolic category. The 15mg vial is positioned for those who have completed initial dose-escalation and are maintaining dosing protocols at higher doses.

For complete mechanism, clinical data, and escalation protocols, see the Retatrutide 10mg product page.`,
    benefits: [
      'Best per-mg value for retatrutide protocols',
      'Covers 2–4 weeks at mid-to-high escalation doses',
      'Same batch-tested quality as 10mg vial',
      'Ideal for those beyond the starter escalation phase',
    ],
    protocol: `Same as Retatrutide 10mg. 15mg vial provides:
- ~4 weeks at 4mg/week
- ~2.5 weeks at 6mg/week
- ~2 weeks at 8mg/week
- ~1.3 weeks at 12mg/week`,
    synergies: ['retatrutide-10mg', 'ipamorelin-cjc'],
    highlights: [
      { title: 'Best Per-Mg Value', body: 'Lowest per-mg price for retatrutide — ideal for those beyond the initial escalation phase.' },
      { title: '15mg Supply', body: 'Covers multiple weeks at typical Phase 2-equivalent doses.' },
      { title: 'Triple Agonist', body: 'Same GIP + GLP-1 + Glucagon mechanism as 10mg vial — 24.2% weight loss in Phase 2.' },
    ],
  },

  // ── NEW PHIOGEN PRODUCTS ─────────────────────────────────────────

  // BLENDS & STACKS
  {
    slug: 'bpc-157-tb-500-blend-20mg',
    name: 'BPC-157 + TB-500 Blend 20mg',
    tagline: 'The gold-standard healing stack — BPC-157 and TB-500 combined in one vial.',
    price: 99.99,
    category: 'Blends & Stacks',
    tags: ['Healing', 'Recovery', 'BPC-157', 'TB-500', 'Stack'],
    image: `${IMG}/bpc-157-tb-500-blend-bpc-157-10mg-tb-500-10mg.png`,
    shopUrl: shopLink('bpc-157-tb-500-blend-20mg'),
    shortDescription: 'Research-grade BPC-157 + TB-500 Blend 20mg (10mg each). 99.0% purity. The most popular healing stack combining local and systemic tissue repair.',
    seoTitle: 'BPC-157 + TB-500 Blend 20mg | #1 Healing Peptide Stack',
    deepDiveTitle: 'BPC-157 + TB-500 Blend: The Complete Healing Stack Protocol',
    researchRating: 5,
    popularityRank: 25,
    fullDescription: `The BPC-157 + TB-500 blend combines 10mg of each peptide in a single vial — the most popular healing stack in peptide research. BPC-157 drives localized tissue repair and gut protection while TB-500 provides systemic anti-inflammatory and regenerative effects throughout the entire body. Together they cover every mechanism of the healing cascade simultaneously.`,
    benefits: [
      'BPC-157 accelerates local tissue repair: tendons, ligaments, gut lining',
      'TB-500 provides systemic anti-inflammatory and regenerative effects',
      'Combined action covers every phase of the healing cascade',
      '99.0% purity — third-party tested with published COA',
      'Single vial convenience vs. purchasing two separate peptides',
    ],
    protocol: `**Standard Healing Protocol:**
- Dose: 250–500mcg BPC-157 + 2–5mg TB-500 per injection
- Frequency: Once daily (BPC-157 component); TB-500 component 2–3× weekly
- Duration: 4–12 weeks depending on injury severity`,
    synergies: ['ghk-cu', 'ipamorelin-cjc'],
    highlights: [
      { title: 'Dual Mechanism', body: 'BPC-157 targets local repair; TB-500 drives systemic healing — complete coverage in one vial.' },
      { title: 'Top Stack', body: 'The most widely used healing peptide combination in research protocols.' },
      { title: '99.0% Purity', body: 'Third-party tested with published certificate of analysis per batch.' },
    ],
  },

  {
    slug: 'bpc-157-tb-500-blend-10mg',
    name: 'BPC-157 + TB-500 Blend 10mg',
    tagline: 'Starter healing stack — 5mg BPC-157 and 5mg TB-500 in one vial.',
    price: 59.99,
    category: 'Blends & Stacks',
    tags: ['Healing', 'Recovery', 'BPC-157', 'TB-500', 'Stack', 'Starter'],
    image: `${IMG}/bpc-157-tb-500-blend-bpc-157-5mg-tb-500-5mg.png`,
    shopUrl: shopLink('bpc-157-tb-500-blend-10mg'),
    shortDescription: 'Research-grade BPC-157 + TB-500 Blend 10mg (5mg each). 99.0% purity. Entry-level healing stack for short protocols.',
    seoTitle: 'BPC-157 + TB-500 Blend 10mg | Healing Stack Starter Vial',
    deepDiveTitle: 'BPC-157 + TB-500 10mg: Starter Healing Protocol',
    researchRating: 5,
    popularityRank: 26,
    fullDescription: `The 10mg blend provides 5mg BPC-157 and 5mg TB-500 — ideal for a starter 4–6 week healing protocol or for those testing the combination before committing to the larger 20mg vial.`,
    benefits: [
      'Complete healing stack in a single starter vial',
      '5mg BPC-157 + 5mg TB-500 — covers 4–6 week protocol',
      '99.0% purity with third-party COA',
    ],
    protocol: `Same as BPC-157 + TB-500 Blend 20mg. The 10mg vial covers a 4–6 week starter protocol.`,
    synergies: ['ghk-cu', 'nad-plus'],
    highlights: [
      { title: 'Starter Size', body: '10mg total — ideal introduction to the BPC-157 + TB-500 healing stack.' },
    ],
  },

  {
    slug: 'ipamorelin-cjc-1295-blend-10mg',
    name: 'Ipamorelin/CJC-1295 Blend 10mg',
    tagline: 'Pre-blended GH peptide stack — convenience format for the gold-standard GH protocol.',
    price: 89.99,
    category: 'Blends & Stacks',
    tags: ['GH Peptide', 'Growth Hormone', 'CJC-1295', 'Ipamorelin', 'Stack'],
    image: `${IMG}/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipamorelin-5mg.png`,
    shopUrl: shopLink('ipamorelin-cjc-1295-blend-10mg'),
    shortDescription: 'Research-grade Ipamorelin/CJC-1295 Blend 10mg (5mg each). 99.0% purity. Pre-combined GH secretagogue stack.',
    seoTitle: 'Ipamorelin/CJC-1295 Blend 10mg | Pre-Mixed GH Peptide Stack',
    deepDiveTitle: 'Ipamorelin/CJC-1295 Blend: GH Optimization Protocol',
    researchRating: 5,
    popularityRank: 27,
    fullDescription: `Pre-blended convenience format of the most popular GH peptide stack. Contains 5mg Ipamorelin and 5mg CJC-1295 No DAC in a single vial, eliminating the need to reconstitute and mix two separate peptides before each injection.`,
    benefits: [
      'Pre-mixed convenience — one vial, one reconstitution, one injection',
      '5mg Ipamorelin + 5mg CJC-1295 No DAC',
      'Same GH-optimizing effects as individually purchased peptides',
      '99.0% purity with COA',
    ],
    protocol: `**Standard GH Protocol:**
- Dose: 200mcg of each component per injection
- Timing: Before sleep in fasted state
- Frequency: Daily or 5 days on / 2 days off
- Duration: 12–24 weeks`,
    synergies: ['igf-1-lr3', 'bpc-157'],
    highlights: [
      { title: 'Pre-Mixed', body: 'Single vial eliminates the need to prepare two peptides before each injection.' },
      { title: 'GH Stack', body: 'The proven Ipamorelin + CJC combination in a convenient single-vial format.' },
    ],
  },

  {
    slug: 'ipa-tesa-blend-15mg',
    name: 'IPA/TESA Blend 15mg',
    tagline: 'Ipamorelin + Tesamorelin combined — dual GH mechanism for body composition.',
    price: 149.99,
    category: 'Blends & Stacks',
    tags: ['GH Peptide', 'Growth Hormone', 'Tesamorelin', 'Ipamorelin', 'Stack', 'Fat Loss'],
    image: `${IMG}/ipa-tesa-blend-ipa-5mg-tesa-10mg-15mg.png`,
    shopUrl: shopLink('ipa-tesa-blend-ipa-5mg-tesa-10mg-15mg'),
    shortDescription: 'Research-grade IPA/TESA Blend 15mg (Ipamorelin 5mg + Tesamorelin 10mg). 99.0% purity. GH stack targeting visceral fat reduction.',
    seoTitle: 'IPA/TESA Blend 15mg | Ipamorelin + Tesamorelin GH Stack',
    deepDiveTitle: 'IPA/TESA Blend: Visceral Fat Reduction Protocol',
    researchRating: 4,
    popularityRank: 28,
    fullDescription: `Combines Ipamorelin (5mg GHRP) with Tesamorelin (10mg GHRH analog) — a dual-mechanism GH stack particularly studied for visceral adipose tissue reduction. Tesamorelin has FDA approval for HIV-associated lipodystrophy, with strong data on visceral fat reduction.`,
    benefits: [
      'Tesamorelin reduces visceral adipose tissue — FDA-approved mechanism',
      'Ipamorelin provides selective GH pulse amplification',
      'Combined: enhanced GH release for body recomposition',
      'Particularly effective for visceral fat targeting',
    ],
    protocol: `- Dose: Ipamorelin 200mcg + Tesamorelin 1–2mg per injection
- Timing: Once daily before sleep
- Duration: 12–24 weeks`,
    synergies: ['bpc-157', 'nad-plus'],
    highlights: [
      { title: 'Visceral Fat', body: 'Tesamorelin is FDA-approved for visceral fat reduction — strongest data of any GH peptide for this endpoint.' },
      { title: 'Dual GH', body: 'GHRP + GHRH combination maximizes GH pulse amplitude and duration.' },
    ],
  },

  {
    slug: 'ipamorelin-tesamorelin-blend-15mg',
    name: 'Ipamorelin/Tesamorelin Blend 15mg',
    tagline: 'Ipamorelin 5mg + Tesamorelin 10mg — the premier GH body composition stack.',
    price: 149.99,
    category: 'Blends & Stacks',
    tags: ['GH Peptide', 'Growth Hormone', 'Tesamorelin', 'Ipamorelin', 'Stack'],
    image: `${IMG}/ipamorelin-tesamorelin-blend-ipa-5mg-tesa-10mg.png`,
    shopUrl: shopLink('ipamorelin-tesamorelin-blend-ipa-5mg-tesa-10mg'),
    shortDescription: 'Research-grade Ipamorelin/Tesamorelin Blend 15mg. 99.0% purity. Pre-combined GH stack for body recomposition.',
    seoTitle: 'Ipamorelin/Tesamorelin Blend 15mg | GH Body Composition Stack',
    deepDiveTitle: 'Ipamorelin/Tesamorelin 15mg Blend: Protocol Guide',
    researchRating: 4,
    popularityRank: 29,
    fullDescription: `Pre-blended Ipamorelin 5mg and Tesamorelin 10mg — same composition as IPA/TESA Blend 15mg. Single vial for the combined GH secretagogue protocol targeting visceral fat and lean mass optimization.`,
    benefits: [
      'Pre-blended convenience — Ipamorelin 5mg + Tesamorelin 10mg',
      'Tesamorelin: FDA-approved visceral fat reduction mechanism',
      'Ipamorelin: selective GH pulse amplification without cortisol elevation',
    ],
    protocol: `Same as IPA/TESA Blend 15mg protocol.`,
    synergies: ['igf-1-lr3', 'bpc-157'],
    highlights: [
      { title: 'Pre-Mixed', body: 'Single vial convenience for the Ipamorelin + Tesamorelin stack.' },
    ],
  },

  {
    slug: 'ipamorelin-tesamorelin-blend-13mg',
    name: 'Ipamorelin/Tesamorelin Blend 13mg',
    tagline: 'Ipamorelin 3mg + Tesamorelin 10mg — starter IPA/TESA stack.',
    price: 129.99,
    category: 'Blends & Stacks',
    tags: ['GH Peptide', 'Growth Hormone', 'Tesamorelin', 'Ipamorelin', 'Stack'],
    image: `${IMG}/ipamorelin-tesamorelin-blend-ipa-3mg-tesa-10mg.png`,
    shopUrl: shopLink('ipamorelin-tesamorelin-blend-ipa-3mg-tesa-10mg'),
    shortDescription: 'Research-grade Ipamorelin/Tesamorelin Blend 13mg (Ipamorelin 3mg + Tesamorelin 10mg). 99.0% purity.',
    seoTitle: 'Ipamorelin/Tesamorelin Blend 13mg | GH Stack',
    deepDiveTitle: 'Ipamorelin/Tesamorelin 13mg: Starter GH Protocol',
    researchRating: 4,
    popularityRank: 30,
    fullDescription: `Lower Ipamorelin dose (3mg) version of the Tesamorelin stack — ideal for those prioritizing Tesamorelin's visceral fat reduction with a smaller Ipamorelin component.`,
    benefits: ['Tesamorelin 10mg for visceral fat reduction', 'Ipamorelin 3mg for selective GH pulses', '99.0% purity with COA'],
    protocol: `Same protocol as Ipamorelin/Tesamorelin Blend 15mg.`,
    synergies: ['igf-1-lr3'],
    highlights: [{ title: 'Tesamorelin Focus', body: 'Higher Tesamorelin ratio — optimized for visceral fat reduction protocols.' }],
  },

  {
    slug: 'glow-blend-50mg',
    name: 'GLOW Blend 50mg',
    tagline: 'Skin and hair rejuvenation stack — collagen, hair, and radiance peptides combined.',
    price: 89.99,
    category: 'Blends & Stacks',
    tags: ['Skin', 'Hair', 'Anti-Aging', 'Collagen', 'Cosmetic', 'Stack'],
    image: `${IMG}/glow-blend-50mg.png`,
    shopUrl: shopLink('glow-blend-50mg'),
    shortDescription: 'Research-grade GLOW Blend 50mg — a proprietary combination of skin-targeting peptides for radiance, collagen, and hair restoration.',
    seoTitle: 'GLOW Blend 50mg | Skin & Hair Rejuvenation Peptide Stack',
    deepDiveTitle: 'GLOW Blend 50mg: Skin Rejuvenation Protocol',
    researchRating: 4,
    popularityRank: 31,
    fullDescription: `Phiogen's GLOW Blend combines skin and hair-targeted peptides designed to work synergistically for comprehensive cosmetic rejuvenation — collagen stimulation, antioxidant defense, and follicle support in a single vial.`,
    benefits: ['Supports collagen synthesis and skin elasticity', 'Promotes hair follicle activation', 'Antioxidant and anti-inflammatory skin support'],
    protocol: `Subcutaneous or topical protocol — consult Phiogen COA for component breakdown.`,
    synergies: ['ghk-cu', 'snap-8'],
    highlights: [{ title: 'Multi-Peptide', body: 'Combines skin-targeting peptides for comprehensive cosmetic rejuvenation.' }],
  },

  {
    slug: 'glow-blend-70mg',
    name: 'GLOW Blend 70mg',
    tagline: 'Extended GLOW Blend — larger supply for ongoing skin and hair protocols.',
    price: 109.99,
    category: 'Blends & Stacks',
    tags: ['Skin', 'Hair', 'Anti-Aging', 'Collagen', 'Cosmetic', 'Stack'],
    image: `${IMG}/glow-blend-70mg.png`,
    shopUrl: shopLink('glow-blend-70mg'),
    shortDescription: 'Research-grade GLOW Blend 70mg — extended supply of the skin and hair rejuvenation stack.',
    seoTitle: 'GLOW Blend 70mg | Extended Skin Rejuvenation Peptide Stack',
    deepDiveTitle: 'GLOW Blend 70mg: Extended Skin Protocol',
    researchRating: 4,
    popularityRank: 32,
    fullDescription: `Extended 70mg supply of the GLOW skin and hair peptide blend — ideal for longer protocols or higher-dose topical applications.`,
    benefits: ['Extended supply for 8–12 week cosmetic protocols', 'Same formulation as GLOW Blend 50mg'],
    protocol: `Same as GLOW Blend 50mg.`,
    synergies: ['ghk-cu', 'snap-8'],
    highlights: [{ title: 'Extended Supply', body: '70mg provides greater protocol coverage for full skin rejuvenation cycles.' }],
  },

  {
    slug: 'klow-blend-80mg',
    name: 'KLOW Blend 80mg',
    tagline: 'Fat loss and metabolic optimization stack — multi-peptide body composition blend.',
    price: 119.99,
    category: 'Blends & Stacks',
    tags: ['Fat Loss', 'Metabolic', 'Body Composition', 'Stack'],
    image: `${IMG}/klow-blend-80mg.png`,
    shopUrl: shopLink('klow-blend-80mg'),
    shortDescription: 'Research-grade KLOW Blend 80mg — a multi-peptide stack for fat loss and metabolic optimization.',
    seoTitle: 'KLOW Blend 80mg | Fat Loss Peptide Stack',
    deepDiveTitle: 'KLOW Blend 80mg: Metabolic Protocol',
    researchRating: 4,
    popularityRank: 33,
    fullDescription: `Phiogen's KLOW Blend combines metabolic and fat-loss peptides in an 80mg vial — a multi-mechanism approach to body composition optimization.`,
    benefits: ['Multi-peptide fat loss mechanism', 'Metabolic optimization through complementary pathways', '80mg extended supply'],
    protocol: `Consult Phiogen COA for component breakdown and dosing protocol.`,
    synergies: ['tirzepatide-15mg', 'ipamorelin-cjc'],
    highlights: [{ title: 'Multi-Mechanism', body: 'Combines fat-loss peptides targeting different metabolic pathways.' }],
  },

  {
    slug: 'cagri-reta-10mg',
    name: 'Cagri-Reta 10mg',
    tagline: 'Cagrilintide + Retatrutide combination — dual amylin and triple agonist stack.',
    price: 189.99,
    category: 'Blends & Stacks',
    tags: ['Weight Loss', 'Amylin', 'Triple Agonist', 'Stack', 'Fat Loss'],
    image: `${IMG}/cagri-reta-10mg.png`,
    shopUrl: shopLink('cagri-reta-10mg'),
    shortDescription: 'Research-grade Cagri-Reta 10mg — Cagrilintide and Retatrutide blend for multi-pathway weight loss.',
    seoTitle: 'Cagri-Reta 10mg | Cagrilintide + Retatrutide Weight Loss Stack',
    deepDiveTitle: 'Cagri-Reta 10mg: Triple + Amylin Weight Loss Protocol',
    researchRating: 4,
    popularityRank: 34,
    fullDescription: `Combines Cagrilintide (amylin analog) with Retatrutide (GIP/GLP-1/Glucagon triple agonist) — potentially the most comprehensive multi-mechanism weight loss stack available, targeting amylin, GIP, GLP-1, and glucagon receptors simultaneously.`,
    benefits: [
      'Four distinct metabolic receptor targets simultaneously',
      'Amylin + triple agonist = comprehensive appetite and metabolic regulation',
      'Cutting-edge combination based on emerging Phase 3 data',
    ],
    protocol: `Once-weekly subcutaneous injection. Escalate dose gradually over 16 weeks.`,
    synergies: ['ipamorelin-cjc'],
    highlights: [{ title: 'Four Pathways', body: 'Amylin + GIP + GLP-1 + Glucagon receptor activation in one protocol.' }],
  },

  {
    slug: 'cagri-reta-5mg',
    name: 'Cagri-Reta 5mg',
    tagline: 'Starter Cagrilintide + Retatrutide combination for dose escalation.',
    price: 129.99,
    category: 'Blends & Stacks',
    tags: ['Weight Loss', 'Amylin', 'Triple Agonist', 'Stack'],
    image: `${IMG}/cagri-reta-5mg.png`,
    shopUrl: shopLink('cagri-reta-5mg'),
    shortDescription: 'Research-grade Cagri-Reta 5mg — starter vial for the Cagrilintide + Retatrutide combination protocol.',
    seoTitle: 'Cagri-Reta 5mg | Cagrilintide + Retatrutide Starter Stack',
    deepDiveTitle: 'Cagri-Reta 5mg: Starter Protocol',
    researchRating: 4,
    popularityRank: 35,
    fullDescription: `5mg starter vial of the Cagrilintide + Retatrutide combination. Ideal for beginning the dose-escalation phase of this advanced weight loss stack.`,
    benefits: ['Starter dose for Cagrilintide + Retatrutide combination', 'Same formulation as 10mg vial at entry dose'],
    protocol: `Begin at 2mg/week and escalate as tolerated. See Cagri-Reta 10mg for full protocol.`,
    synergies: ['cagri-reta-10mg'],
    highlights: [{ title: 'Starter Vial', body: 'Entry point for the Cagri-Reta combination protocol.' }],
  },

  {
    slug: 'reta-cagri-5mg-5mg',
    name: 'Reta-Cagri 5mg/5mg',
    tagline: 'Balanced Retatrutide + Cagrilintide blend — equal doses for combined metabolic action.',
    price: 149.99,
    category: 'Blends & Stacks',
    tags: ['Weight Loss', 'Amylin', 'Triple Agonist', 'Stack', 'Fat Loss'],
    image: `${IMG}/reta-cagri-5mg-5mg.png`,
    shopUrl: shopLink('reta-cagri-5mg-5mg'),
    shortDescription: 'Research-grade Reta-Cagri 5mg/5mg — equal 5mg doses of Retatrutide and Cagrilintide in one vial.',
    seoTitle: 'Reta-Cagri 5mg/5mg | Retatrutide + Cagrilintide Blend',
    deepDiveTitle: 'Reta-Cagri 5mg/5mg: Combined Weight Loss Protocol',
    researchRating: 4,
    popularityRank: 36,
    fullDescription: `Equal 5mg doses of Retatrutide (GIP/GLP-1/Glucagon triple agonist) and Cagrilintide (amylin analog) for a balanced four-pathway weight loss approach.`,
    benefits: ['Equal ratio Retatrutide + Cagrilintide', 'Balanced four-receptor metabolic intervention', '99.0% purity with COA'],
    protocol: `Once-weekly subcutaneous injection with standard dose escalation.`,
    synergies: ['tirzepatide-15mg'],
    highlights: [{ title: 'Equal Ratio', body: '5mg of each compound — balanced four-pathway metabolic stack.' }],
  },

  // GROWTH HORMONE PEPTIDES
  {
    slug: 'ipamorelin-10mg',
    name: 'Ipamorelin 10mg',
    tagline: 'The cleanest GHRP — selective growth hormone release without cortisol elevation.',
    price: 59.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRP', 'Growth Hormone', 'Sleep', 'Muscle'],
    image: `${IMG}/ipamorelin-10mg.png`,
    shopUrl: shopLink('ipamorelin-10mg'),
    shortDescription: 'Research-grade Ipamorelin 10mg. 99.2% purity. The most selective GHRP available — pure GH pulse stimulation with minimal side effects.',
    seoTitle: 'Ipamorelin 10mg | Cleanest GHRP for Growth Hormone Release',
    deepDiveTitle: 'Ipamorelin 10mg: The Selective GHRP Protocol',
    researchRating: 5,
    popularityRank: 37,
    fullDescription: `Ipamorelin is a selective growth hormone releasing peptide (GHRP) — it triggers GH pulses from the pituitary without the cortisol, prolactin, or hunger side effects common to GHRP-2 and GHRP-6. It is the preferred standalone GHRP for long-term GH optimization protocols.`,
    benefits: [
      'Selective GH release — no cortisol or prolactin elevation',
      'Triggers natural GH pulses 3–4× baseline',
      'Improves sleep quality and overnight recovery',
      'Ideal for long-term use due to clean side-effect profile',
      '99.2% purity with third-party COA',
    ],
    protocol: `**Standard Protocol:**
- Dose: 200–300mcg per injection
- Timing: Before sleep (fasted state)
- Optional: Second injection pre-workout
- Duration: 12–24 weeks; 5 days on / 2 days off`,
    synergies: ['ipamorelin-cjc', 'igf-1-lr3', 'bpc-157'],
    highlights: [
      { title: 'Most Selective GHRP', body: 'No cortisol, prolactin, or hunger stimulation — the cleanest GHRP available.' },
      { title: 'Long-Term Safe', body: 'Receptor selectivity makes Ipamorelin suitable for extended protocols without hormonal side effects.' },
    ],
  },

  {
    slug: 'cjc-1295-no-dac-10mg',
    name: 'CJC-1295 No DAC 10mg',
    tagline: 'GHRH analog without DAC — natural GH pulse amplification.',
    price: 79.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRH', 'CJC-1295', 'Growth Hormone'],
    image: `${IMG}/cjc-1295-no-dac-10mg.png`,
    shopUrl: shopLink('cjc-1295-no-dac-10mg'),
    shortDescription: 'Research-grade CJC-1295 No DAC 10mg. 99.2% purity. Short-acting GHRH analog for pulsatile GH release — typically paired with Ipamorelin.',
    seoTitle: 'CJC-1295 No DAC 10mg | GHRH Analog for Natural GH Pulses',
    deepDiveTitle: 'CJC-1295 No DAC: Protocol Guide',
    researchRating: 5,
    popularityRank: 38,
    fullDescription: `CJC-1295 No DAC (also called Mod GRF 1-29) is a short-acting GHRH analog with a 30-minute half-life. It mimics the body's natural GHRH pulses, amplifying GH release when paired with a GHRP like Ipamorelin. The No DAC version produces physiologically pulsatile GH release rather than the continuous elevation from the DAC version.`,
    benefits: [
      'Amplifies GH pulse amplitude when combined with Ipamorelin',
      'Physiological pulsatile GH release — mirrors natural secretion pattern',
      'Short half-life allows precise injection timing',
      '99.2% purity with COA',
    ],
    protocol: `**Standard Protocol (paired with Ipamorelin):**
- Dose: 100–200mcg per injection
- Timing: Before sleep (fasted state), within minutes of Ipamorelin
- Can be drawn into the same syringe as Ipamorelin`,
    synergies: ['ipamorelin-10mg', 'igf-1-lr3'],
    highlights: [
      { title: 'Pulsatile Release', body: 'No DAC variant produces natural GH pulses — more physiological than the DAC version.' },
      { title: 'Ipamorelin Synergy', body: 'GHRH + GHRP combination produces 5–10× baseline GH elevation.' },
    ],
  },

  {
    slug: 'cjc-1295-no-dac-5mg',
    name: 'CJC-1295 No DAC 5mg',
    tagline: 'Starter CJC-1295 No DAC — entry-level GHRH for GH optimization.',
    price: 49.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRH', 'CJC-1295', 'Growth Hormone'],
    image: `${IMG}/cjc-1295-no-dac-5mg.png`,
    shopUrl: shopLink('cjc-1295-no-dac-5mg'),
    shortDescription: 'Research-grade CJC-1295 No DAC 5mg. 99.2% purity. Starter vial for GHRH-based GH protocols.',
    seoTitle: 'CJC-1295 No DAC 5mg | Starter GHRH GH Peptide',
    deepDiveTitle: 'CJC-1295 No DAC 5mg: Starter GH Protocol',
    researchRating: 5,
    popularityRank: 39,
    fullDescription: `5mg starter vial of CJC-1295 No DAC. Same GHRH analog as the 10mg vial — ideal for starting a GH optimization protocol before committing to larger supply.`,
    benefits: ['Starter 5mg supply for CJC-1295 No DAC protocols', 'Same purity as 10mg vial', 'Pairs with Ipamorelin for GH optimization'],
    protocol: `Same as CJC-1295 No DAC 10mg. 5mg covers 4–6 weeks at standard doses.`,
    synergies: ['ipamorelin-10mg'],
    highlights: [{ title: 'Starter Size', body: '5mg provides initial GH protocol supply before upgrading to the 10mg vial.' }],
  },

  {
    slug: 'cjc-1295-with-dac-10mg',
    name: 'CJC-1295 with DAC 10mg',
    tagline: 'Long-acting GHRH analog — sustained GH elevation with once-weekly dosing.',
    price: 99.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRH', 'CJC-1295', 'Long-Acting', 'Growth Hormone'],
    image: `${IMG}/cjc-1295-with-dac-10mg.png`,
    shopUrl: shopLink('cjc-1295-with-dac-10mg'),
    shortDescription: 'Research-grade CJC-1295 with DAC 10mg. 99.1% purity. Long-acting GHRH analog with Drug Affinity Complex — enables once or twice-weekly dosing.',
    seoTitle: 'CJC-1295 with DAC 10mg | Long-Acting GHRH for Sustained GH',
    deepDiveTitle: 'CJC-1295 with DAC: Long-Acting GH Protocol',
    researchRating: 4,
    popularityRank: 40,
    fullDescription: `CJC-1295 with DAC uses a Drug Affinity Complex to bind to albumin in the bloodstream, extending the half-life to 6–8 days and enabling once or twice-weekly injection. It produces a sustained, lower-amplitude GH elevation rather than the sharp pulses of the No DAC version — different mechanism, different use case.`,
    benefits: [
      'Once or twice-weekly dosing due to 6–8 day half-life',
      'Sustained baseline GH elevation for continuous anabolic environment',
      'Convenient dosing schedule vs. daily No DAC protocol',
      '99.1% purity with COA',
    ],
    protocol: `- Dose: 1–2mg once or twice weekly
- Route: Subcutaneous injection
- Duration: 12–24 weeks continuous`,
    synergies: ['ipamorelin-10mg', 'igf-1-lr3'],
    highlights: [
      { title: 'Once-Weekly', body: '6–8 day half-life enables a much simpler dosing schedule than No DAC variants.' },
      { title: 'Sustained GH', body: 'Continuous GH elevation rather than pulsatile — different profile for different goals.' },
    ],
  },

  {
    slug: 'ghrp-2-10mg',
    name: 'GHRP-2 10mg',
    tagline: 'Potent growth hormone releasing peptide — strong GH pulse stimulation.',
    price: 49.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRP', 'Growth Hormone', 'GHRP-2'],
    image: `${IMG}/ghrp-2-10mg.png`,
    shopUrl: shopLink('ghrp-2-10mg'),
    shortDescription: 'Research-grade GHRP-2 10mg. 99.0% purity. One of the strongest GHRPs — high GH pulse amplitude with some cortisol elevation.',
    seoTitle: 'GHRP-2 10mg | Potent Growth Hormone Releasing Peptide',
    deepDiveTitle: 'GHRP-2: Potent GHRP Protocol Guide',
    researchRating: 4,
    popularityRank: 41,
    fullDescription: `GHRP-2 is one of the most potent GHRPs available — it produces strong GH pulses but also elevates cortisol and prolactin to a greater degree than Ipamorelin. Preferred by those seeking maximal acute GH response and willing to manage mild cortisol elevation.`,
    benefits: [
      'High GH pulse amplitude — among the strongest GHRPs',
      'Well-studied compound with extensive research literature',
      'Pairs with CJC-1295 for maximum GH output',
    ],
    protocol: `- Dose: 100–300mcg per injection
- Timing: Fasted state, before sleep or pre-workout
- Note: Cortisol and prolactin elevation expected — cycle appropriately`,
    synergies: ['cjc-1295-no-dac-10mg', 'igf-1-lr3'],
    highlights: [{ title: 'Max GH Output', body: 'Higher GH pulse amplitude than Ipamorelin — for those prioritizing peak GH release.' }],
  },

  {
    slug: 'ghrp-6-10mg',
    name: 'GHRP-6 10mg',
    tagline: 'Classic GHRP with hunger stimulation — the original GH releasing peptide.',
    price: 49.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRP', 'Growth Hormone', 'GHRP-6', 'Appetite'],
    image: `${IMG}/ghrp-6-10mg.png`,
    shopUrl: shopLink('ghrp-6-10mg'),
    shortDescription: 'Research-grade GHRP-6 10mg. 99.0% purity. The original GHRP — strong GH release with notable appetite stimulation.',
    seoTitle: 'GHRP-6 10mg | Classic Growth Hormone Releasing Peptide',
    deepDiveTitle: 'GHRP-6: Classic GHRP Protocol',
    researchRating: 4,
    popularityRank: 42,
    fullDescription: `GHRP-6 is the original GH releasing hexapeptide — one of the first synthetic GHRPs developed. It produces strong GH pulses and is well-studied but causes significant appetite stimulation (via ghrelin receptor activation) and some cortisol elevation. Useful in contexts where appetite stimulation is desired (bulking protocols).`,
    benefits: ['Strong GH pulse stimulation', 'Significant appetite stimulation — useful for bulking protocols', 'Extensively researched compound'],
    protocol: `- Dose: 100–300mcg per injection
- Note: Expect significant increase in hunger — time dosing with meals for bulking`,
    synergies: ['cjc-1295-no-dac-10mg'],
    highlights: [{ title: 'Appetite Stimulation', body: 'GHRP-6 significantly increases appetite — beneficial for mass-building protocols.' }],
  },

  {
    slug: 'hexarelin-5mg',
    name: 'Hexarelin 5mg',
    tagline: 'Most potent GHRP — maximum GH release with cardiac protection properties.',
    price: 59.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRP', 'Growth Hormone', 'Cardiac', 'Hexarelin'],
    image: `${IMG}/hexarelin-5mg.png`,
    shopUrl: shopLink('hexarelin-5mg'),
    shortDescription: 'Research-grade Hexarelin 5mg. 99.0% purity. The most potent GHRP — strong GH release plus unique cardioprotective properties.',
    seoTitle: 'Hexarelin 5mg | Most Potent GHRP with Cardiac Protection',
    deepDiveTitle: 'Hexarelin: Most Potent GHRP Protocol',
    researchRating: 4,
    popularityRank: 43,
    fullDescription: `Hexarelin is the most potent synthetic GHRP — it produces the highest GH pulse amplitude of any GHRP while also demonstrating unique cardioprotective effects independent of GH. Research shows hexarelin protects cardiac tissue from ischemia/reperfusion injury and may improve cardiac function directly.`,
    benefits: [
      'Highest GH pulse amplitude of any GHRP',
      'Unique cardioprotective properties independent of GH',
      'Cardiac tissue protection in ischemia models',
    ],
    protocol: `- Dose: 100–200mcg per injection
- Note: Rapid receptor desensitization — cycle 4–6 weeks on / 4 weeks off
- Fasted state injection for maximum GH response`,
    synergies: ['cjc-1295-no-dac-10mg'],
    highlights: [{ title: 'Cardiac Protection', body: 'Hexarelin shows GH-independent cardioprotective effects — unique among GHRPs.' }],
  },

  {
    slug: 'sermorelin-10mg',
    name: 'Sermorelin 10mg',
    tagline: 'Natural GHRH analog — the original prescription GH secretagogue.',
    price: 119.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRH', 'Sermorelin', 'Growth Hormone', 'Anti-Aging'],
    image: `${IMG}/sermorelin-10mg.png`,
    shopUrl: shopLink('sermorelin-10mg'),
    shortDescription: 'Research-grade Sermorelin 10mg. 99.0% purity. The original GHRH analog — 29-amino acid fragment of human GHRH, formerly FDA-approved for pediatric GH deficiency.',
    seoTitle: 'Sermorelin 10mg | Original GHRH Analog for GH Optimization',
    deepDiveTitle: 'Sermorelin: The Original GHRH Protocol',
    researchRating: 4,
    popularityRank: 44,
    fullDescription: `Sermorelin is a 29-amino acid fragment of human Growth Hormone Releasing Hormone (GHRH). It was the first GHRH analog with clinical approval (for pediatric GH deficiency) and remains one of the most studied GHRH-based peptides. Sermorelin stimulates the pituitary to release GH naturally — preserving the pulsatile physiological pattern.`,
    benefits: [
      'Natural GHRH mechanism — pituitary-driven GH release',
      'Extensive clinical history — formerly FDA-approved compound',
      'Preserves pulsatile GH secretion pattern',
      'Well-tolerated with decades of safety data',
    ],
    protocol: `- Dose: 200–500mcg before sleep (fasted)
- Frequency: Daily or 5 days on / 2 days off
- Duration: 12–24 weeks`,
    synergies: ['ipamorelin-10mg', 'igf-1-lr3'],
    highlights: [{ title: 'Clinical History', body: 'Formerly FDA-approved GHRH analog — the most clinically validated GH secretagogue.' }],
  },

  {
    slug: 'sermorelin-5mg',
    name: 'Sermorelin 5mg',
    tagline: 'Starter Sermorelin — entry-level GHRH supply.',
    price: 69.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRH', 'Sermorelin', 'Growth Hormone'],
    image: `${IMG}/sermorelin-5mg.png`,
    shopUrl: shopLink('sermorelin-5mg'),
    shortDescription: 'Research-grade Sermorelin 5mg. 99.0% purity. Starter vial for Sermorelin GHRH protocols.',
    seoTitle: 'Sermorelin 5mg | Starter GHRH Peptide',
    deepDiveTitle: 'Sermorelin 5mg: Starter Protocol',
    researchRating: 4,
    popularityRank: 45,
    fullDescription: `5mg starter vial of Sermorelin GHRH analog. Same compound as the 10mg vial — ideal for initiating a GH protocol before upgrading to larger supply.`,
    benefits: ['Starter Sermorelin supply', '5mg covers initial dose-escalation phase', 'Same purity as 10mg vial'],
    protocol: `Same as Sermorelin 10mg. 5mg vial covers 3–4 weeks at standard doses.`,
    synergies: ['ipamorelin-10mg'],
    highlights: [{ title: 'Entry Point', body: '5mg provides initial Sermorelin supply for protocol initiation.' }],
  },

  {
    slug: 'sermorelin-2mg',
    name: 'Sermorelin 2mg',
    tagline: 'Minimal Sermorelin supply for testing or short stacks.',
    price: 39.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRH', 'Sermorelin', 'Growth Hormone'],
    image: `${IMG}/sermorelin-2mg.png`,
    shopUrl: shopLink('sermorelin-2mg'),
    shortDescription: 'Research-grade Sermorelin 2mg. 99.0% purity. Minimal vial for protocol testing.',
    seoTitle: 'Sermorelin 2mg | Minimal GHRH Trial Vial',
    deepDiveTitle: 'Sermorelin 2mg: Trial Protocol',
    researchRating: 4,
    popularityRank: 46,
    fullDescription: `2mg Sermorelin vial — minimal supply for initial protocol testing or stacking alongside another GHRH source.`,
    benefits: ['2mg trial supply', 'Entry price for Sermorelin evaluation', '99.0% purity'],
    protocol: `Same as Sermorelin 10mg. 2mg provides approximately 1–2 weeks of supply.`,
    synergies: ['ipamorelin-10mg'],
    highlights: [{ title: 'Trial Size', body: 'Minimal investment to test Sermorelin before committing to larger vials.' }],
  },

  {
    slug: 'tesamorelin-10mg',
    name: 'Tesamorelin 10mg',
    tagline: 'FDA-approved GHRH analog — clinically proven visceral fat reduction.',
    price: 119.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRH', 'Tesamorelin', 'Visceral Fat', 'Fat Loss'],
    image: `${IMG}/tesamorelin-10mg.png`,
    shopUrl: shopLink('tesamorelin-10mg'),
    shortDescription: 'Research-grade Tesamorelin 10mg. 99.1% purity. FDA-approved GHRH analog — clinically proven to reduce visceral adipose tissue.',
    seoTitle: 'Tesamorelin 10mg | FDA-Approved GHRH for Visceral Fat Reduction',
    deepDiveTitle: 'Tesamorelin: Visceral Fat Reduction Protocol',
    researchRating: 5,
    popularityRank: 47,
    fullDescription: `Tesamorelin is an FDA-approved GHRH analog (brand name Egrifta) — the only peptide with FDA approval specifically for reducing visceral adipose tissue (VAT). Clinical trials showed 15–17% reduction in VAT over 26 weeks. It works by stimulating pituitary GH release, which drives lipolysis specifically in visceral fat deposits.`,
    benefits: [
      'FDA-approved for visceral adipose tissue reduction',
      '15–17% visceral fat reduction in clinical trials',
      'Stimulates GH release targeting visceral lipolysis',
      'Improves triglycerides and metabolic syndrome markers',
      '99.1% purity with COA',
    ],
    protocol: `- Dose: 1–2mg once daily subcutaneous
- Timing: Before sleep or morning
- Duration: 26 weeks minimum for full visceral fat benefit`,
    synergies: ['ipamorelin-10mg', 'semaglutide-6mg'],
    highlights: [
      { title: 'FDA Approved', body: 'Tesamorelin is FDA-approved for visceral fat reduction — the only peptide with this specific approval.' },
      { title: '15–17% VAT Reduction', body: 'Clinical trials showed significant visceral adipose tissue reduction over 26 weeks.' },
    ],
  },

  {
    slug: 'tesamorelin-20mg',
    name: 'Tesamorelin 20mg',
    tagline: 'Extended Tesamorelin supply — best value for 26-week visceral fat protocol.',
    price: 199.99,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'GHRH', 'Tesamorelin', 'Visceral Fat', 'Fat Loss'],
    image: `${IMG}/tesamorelin-20mg.png`,
    shopUrl: shopLink('tesamorelin-20mg'),
    shortDescription: 'Research-grade Tesamorelin 20mg. 99.1% purity. Extended supply for sustained visceral fat reduction protocols.',
    seoTitle: 'Tesamorelin 20mg | Best Value Visceral Fat Reduction Supply',
    deepDiveTitle: 'Tesamorelin 20mg: Extended Protocol',
    researchRating: 5,
    popularityRank: 48,
    fullDescription: `20mg Tesamorelin vial — extended supply for those running the full 26-week FDA-validated protocol. At 2mg/day, a 20mg vial provides 10 days of supply; at 1mg/day, it covers 20 days. Best per-mg value for committed visceral fat reduction protocols.`,
    benefits: ['Extended supply for 26-week clinical protocol', 'Best per-mg value for Tesamorelin', 'Same FDA-proven compound as 10mg vial'],
    protocol: `Same as Tesamorelin 10mg. 20mg vial covers 10–20 days at standard doses.`,
    synergies: ['ipamorelin-10mg'],
    highlights: [{ title: 'Best Value', body: '20mg provides the best per-mg price for extended Tesamorelin protocols.' }],
  },

  {
    slug: 'peg-mgf-2mg',
    name: 'PEG-MGF 2mg',
    tagline: 'Pegylated Mechano Growth Factor — muscle repair and satellite cell activation.',
    price: 69.99,
    category: 'Growth Hormone',
    tags: ['Growth Factor', 'Muscle', 'MGF', 'Hypertrophy', 'Recovery'],
    image: `${IMG}/peg-mgf-2mg.png`,
    shopUrl: shopLink('peg-mgf-2mg'),
    shortDescription: 'Research-grade PEG-MGF 2mg. 98.5% purity. Pegylated Mechano Growth Factor for muscle satellite cell activation and post-workout recovery.',
    seoTitle: 'PEG-MGF 2mg | Muscle Growth Factor for Satellite Cell Activation',
    deepDiveTitle: 'PEG-MGF: Muscle Repair and Growth Protocol',
    researchRating: 4,
    popularityRank: 49,
    fullDescription: `PEG-MGF (Pegylated Mechano Growth Factor) is a splice variant of IGF-1 that activates muscle satellite cells — the stem cells responsible for muscle repair and growth. The PEG modification extends its half-life from minutes to several days, enabling practical post-workout administration. It works differently from IGF-1 LR3: MGF activates satellite cell proliferation while IGF-1 drives their differentiation.`,
    benefits: [
      'Activates muscle satellite cells for enhanced repair and growth',
      'Pegylation extends half-life for practical dosing',
      'Complements IGF-1 LR3 through different IGF-1 splice variant mechanism',
      'Ideal for post-workout muscle repair acceleration',
    ],
    protocol: `- Dose: 200–400mcg post-workout (within 30 minutes)
- Frequency: On training days only
- Cycle: 4–6 weeks, same as IGF-1 LR3`,
    synergies: ['igf-1-lr3', 'bpc-157'],
    highlights: [{ title: 'Satellite Cells', body: 'PEG-MGF specifically activates muscle stem cells — a distinct mechanism from IGF-1 LR3.' }],
  },

  {
    slug: 'kisspeptin-10-10mg',
    name: 'Kisspeptin-10 10mg',
    tagline: 'Hypothalamic peptide — reproductive hormone regulation and GnRH stimulation.',
    price: 99.99,
    category: 'Growth Hormone',
    tags: ['Hormonal', 'GnRH', 'Testosterone', 'Kisspeptin', 'Reproductive'],
    image: `${IMG}/kisspeptin-10-10mg.png`,
    shopUrl: shopLink('kisspeptin-10-10mg'),
    shortDescription: 'Research-grade Kisspeptin-10 10mg. 98.8% purity. Hypothalamic neuropeptide that stimulates GnRH release — regulates the HPG axis and reproductive hormones.',
    seoTitle: 'Kisspeptin-10 10mg | GnRH Stimulating Peptide for Hormonal Regulation',
    deepDiveTitle: 'Kisspeptin-10: HPG Axis Regulation Protocol',
    researchRating: 4,
    popularityRank: 50,
    fullDescription: `Kisspeptin-10 is the active C-terminal fragment of Kisspeptin-54, a hypothalamic neuropeptide that acts as the master regulator of GnRH (Gonadotropin-Releasing Hormone) secretion. It activates the HPG (hypothalamic-pituitary-gonadal) axis, stimulating LH and FSH release which drives testosterone and estrogen production.`,
    benefits: [
      'Stimulates GnRH → LH/FSH → testosterone cascade',
      'Potential for HPG axis restoration post-suppression',
      'Naturally occurring hypothalamic signaling molecule',
    ],
    protocol: `- Dose: 50–100mcg subcutaneous injection
- Frequency: Varies by protocol goal
- Application: HPG axis support, PCT considerations`,
    synergies: ['gonadorelin-acetate'],
    highlights: [{ title: 'HPG Axis', body: 'Activates the master hormonal cascade from hypothalamus to gonads.' }],
  },

  {
    slug: 'kisspeptin-10-5mg',
    name: 'Kisspeptin-10 5mg',
    tagline: 'Starter Kisspeptin-10 for HPG axis protocols.',
    price: 59.99,
    category: 'Growth Hormone',
    tags: ['Hormonal', 'GnRH', 'Testosterone', 'Kisspeptin'],
    image: `${IMG}/kisspeptin-10-5mg.png`,
    shopUrl: shopLink('kisspeptin-10-5mg'),
    shortDescription: 'Research-grade Kisspeptin-10 5mg. 98.8% purity. Starter supply for HPG axis peptide protocols.',
    seoTitle: 'Kisspeptin-10 5mg | Starter HPG Axis Peptide',
    deepDiveTitle: 'Kisspeptin-10 5mg: Starter Protocol',
    researchRating: 4,
    popularityRank: 51,
    fullDescription: `5mg starter vial of Kisspeptin-10 — same compound as the 10mg vial at entry supply level.`,
    benefits: ['Starter 5mg supply for Kisspeptin-10 protocols', 'Same purity and quality as 10mg vial'],
    protocol: `Same as Kisspeptin-10 10mg protocol.`,
    synergies: ['kisspeptin-10-10mg'],
    highlights: [{ title: 'Entry Supply', body: 'Starter vial for Kisspeptin-10 HPG axis protocols.' }],
  },

  {
    slug: 'gonadorelin-acetate',
    name: 'Gonadorelin Acetate',
    tagline: 'Synthetic GnRH — direct HPG axis stimulation for testosterone support.',
    price: 49.99,
    category: 'Growth Hormone',
    tags: ['Hormonal', 'GnRH', 'Testosterone', 'HPG Axis', 'Gonadorelin'],
    image: `${IMG}/gonadorelin-acetate.png`,
    shopUrl: shopLink('gonadorelin-acetate'),
    shortDescription: 'Research-grade Gonadorelin Acetate. 99.0% purity. Synthetic GnRH — stimulates LH and FSH release for testosterone and FSH support.',
    seoTitle: 'Gonadorelin Acetate | Synthetic GnRH for HPG Axis Support',
    deepDiveTitle: 'Gonadorelin Acetate: GnRH Protocol Guide',
    researchRating: 4,
    popularityRank: 52,
    fullDescription: `Gonadorelin is a synthetic form of GnRH (Gonadotropin-Releasing Hormone) — the master hypothalamic signal that triggers LH and FSH release from the pituitary, which in turn stimulates testosterone production. Used in protocols for maintaining testicular function and HPG axis activity.`,
    benefits: [
      'Direct GnRH receptor activation — stimulates LH and FSH',
      'Supports testicular function and endogenous testosterone production',
      'Short half-life allows precise pulsatile dosing',
      '99.0% purity with COA',
    ],
    protocol: `- Dose: 50–100mcg 2–3× weekly subcutaneous
- Application: HPG axis maintenance protocols`,
    synergies: ['kisspeptin-10-10mg'],
    highlights: [{ title: 'Direct GnRH', body: 'Synthetic GnRH — directly activates the HPG axis master signal.' }],
  },

  // ANTI-AGING & LONGEVITY
  {
    slug: 'epitalon-10mg',
    name: 'Epitalon 10mg',
    tagline: 'Starter Epithalon — telomerase activation in a smaller vial.',
    price: 59.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Longevity', 'Telomere', 'Anti-Aging', 'Epigenetic'],
    image: `${IMG}/epitalon-10mg.png`,
    shopUrl: shopLink('epitalon-10mg'),
    shortDescription: 'Research-grade Epitalon 10mg. 99.4% purity. Starter vial of the telomerase-activating tetrapeptide.',
    seoTitle: 'Epitalon 10mg | Starter Telomerase Activation Peptide',
    deepDiveTitle: 'Epitalon 10mg: Starter Longevity Protocol',
    researchRating: 5,
    popularityRank: 60,
    fullDescription: `10mg starter vial of Epitalon (Epithalon) — the same telomerase-activating tetrapeptide as the 50mg vial. Ideal for burst cycle protocols or for those beginning a longevity peptide program.`,
    benefits: ['Starter 10mg supply for Epitalon burst protocols', 'Telomerase activation mechanism', '99.4% purity with COA'],
    protocol: `**Burst Cycle Protocol:**
- Dose: 5–10mg total per burst cycle (10 days)
- Route: Subcutaneous injection 1–2mg per day
- Frequency: 1–2 burst cycles per year`,
    synergies: ['ghk-cu', 'nad-plus'],
    highlights: [{ title: 'Burst Protocol', body: '10mg vial is ideal for the standard 10-day Epitalon burst cycle.' }],
  },

  {
    slug: 'na-epitalon-10mg',
    name: 'NA-Epitalon 10mg',
    tagline: 'N-Acetyl Epitalon — enhanced bioavailability form of the longevity tetrapeptide.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Longevity', 'Telomere', 'Anti-Aging', 'N-Acetyl'],
    image: `${IMG}/na-epitalon-10mg.png`,
    shopUrl: shopLink('na-epitalon-10mg'),
    shortDescription: 'Research-grade NA-Epitalon (N-Acetyl Epitalon) 10mg. 99.2% purity. Modified form of Epitalon with enhanced stability.',
    seoTitle: 'NA-Epitalon 10mg | N-Acetyl Epitalon Enhanced Bioavailability',
    deepDiveTitle: 'NA-Epitalon: Enhanced Longevity Protocol',
    researchRating: 4,
    popularityRank: 61,
    fullDescription: `NA-Epitalon is the N-acetyl modification of Epitalon (Ala-Glu-Asp-Gly). The N-acetyl group enhances resistance to peptidase degradation, potentially improving bioavailability and extending active duration compared to standard Epitalon.`,
    benefits: ['Enhanced peptidase resistance vs. standard Epitalon', 'Same telomerase-activating core mechanism', 'N-acetyl modification for improved stability'],
    protocol: `Same burst cycle protocol as standard Epitalon.`,
    synergies: ['epithalon', 'ghk-cu'],
    highlights: [{ title: 'Enhanced Form', body: 'N-acetyl modification may improve bioavailability over standard Epitalon.' }],
  },

  {
    slug: 'foxo4-dri-10mg',
    name: 'FOXO4-DRI 10mg',
    tagline: 'Senolytic peptide — selectively eliminates senescent cells for cellular rejuvenation.',
    price: 149.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Senolytic', 'Anti-Aging', 'Longevity', 'Senescent Cells', 'Apoptosis'],
    image: `${IMG}/fox04-dri-10mg.png`,
    shopUrl: shopLink('foxo4-dri-10mg'),
    shortDescription: 'Research-grade FOXO4-DRI 10mg. 98.5% purity. First-generation peptide senolytic — selectively induces apoptosis in senescent cells.',
    seoTitle: 'FOXO4-DRI 10mg | Peptide Senolytic for Cellular Rejuvenation',
    deepDiveTitle: 'FOXO4-DRI: Senolytic Peptide Protocol',
    researchRating: 4,
    popularityRank: 62,
    fullDescription: `FOXO4-DRI is a D-retro-inverso peptide that disrupts the interaction between FOXO4 and p53 in senescent cells — triggering apoptosis specifically in senescent (zombie) cells while sparing healthy cells. Published in Cell (van Deursen, 2017), it reversed frailty and improved physical function in aged mice. It is the first peptide-based senolytic.`,
    benefits: [
      'Selectively eliminates senescent cells without affecting healthy cells',
      'Published in Cell — reversal of frailty in aged mouse models',
      'Targets the FOXO4-p53 interaction specific to senescent cell survival',
      'Potential for periodic senescent cell clearance protocols',
    ],
    protocol: `**Intermittent Senolytic Protocol:**
- Dose: 1–5mg per injection
- Schedule: Intermittent dosing (e.g., 3 consecutive days per month)
- Route: Subcutaneous injection`,
    synergies: ['epithalon', 'nad-plus', 'ss-31-10mg'],
    highlights: [
      { title: 'Cell Publication', body: 'FOXO4-DRI was published in Cell journal — reversed aging phenotypes in mouse models.' },
      { title: 'Selective Senolysis', body: 'Targets senescent cells specifically — healthy cells are spared.' },
    ],
  },

  {
    slug: 'ghk-cu-100mg',
    name: 'GHK-Cu 100mg',
    tagline: 'Best value GHK-Cu — extended supply for long-term systemic anti-aging protocols.',
    price: 89.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Anti-Aging', 'Skin', 'Collagen', 'Hair Growth', 'Gene Expression', 'Best Value'],
    image: `${IMG}/ghk-cu-100mg.png`,
    shopUrl: shopLink('ghk-cu-100mg'),
    shortDescription: 'Research-grade GHK-Cu 100mg. 99.1% purity. Best value extended supply for sustained systemic and topical GHK-Cu protocols.',
    seoTitle: 'GHK-Cu 100mg | Best Value Extended Supply Anti-Aging Peptide',
    deepDiveTitle: 'GHK-Cu 100mg: Extended Anti-Aging Protocol',
    researchRating: 5,
    popularityRank: 63,
    fullDescription: `100mg of GHK-Cu — the best value option for those running extended systemic anti-aging or hair restoration protocols. At 1–2mg/day subcutaneous, 100mg provides 50–100 days of supply. For topical applications, 100mg enables formulation of high-volume serums or scalp treatments.`,
    benefits: ['Best per-mg value for GHK-Cu', '50–100 days systemic supply at standard doses', 'Same gene-resetting compound as 50mg vial', 'Ideal for topical serum formulation batches'],
    protocol: `Same as GHK-Cu 50mg. 100mg vial provides extended systemic supply or topical formulation volume.`,
    synergies: ['epithalon', 'snap-8', 'nad-plus'],
    highlights: [{ title: 'Best Value', body: '100mg at $89.99 — the lowest per-mg price for GHK-Cu extended protocols.' }],
  },

  {
    slug: 'nad-1000mg',
    name: 'NAD+ 1000mg',
    tagline: 'Maximum NAD+ supply — institutional-grade cellular energy restoration.',
    price: 139.99,
    category: 'Anti-Aging & Longevity',
    tags: ['NAD+', 'Energy', 'Mitochondria', 'Anti-Aging', 'Longevity', 'Best Value'],
    image: `${IMG}/nad-1000mg.png`,
    shopUrl: shopLink('nad-1000mg'),
    shortDescription: 'Research-grade NAD+ 1000mg. 99.5% purity. Maximum supply for sustained NAD+ restoration protocols.',
    seoTitle: 'NAD+ 1000mg | Maximum Supply Cellular Energy Restoration',
    deepDiveTitle: 'NAD+ 1000mg: Extended Cellular Rejuvenation Protocol',
    researchRating: 5,
    popularityRank: 64,
    fullDescription: `1000mg NAD+ vial — double the supply of the 500mg option at the best per-mg price. At 500mg/infusion or 100mg/injection protocols, 1000mg provides extended coverage for sustained mitochondrial and sirtuin activation.`,
    benefits: ['Best per-mg value for NAD+', 'Extended supply for sustained sirtuin activation', 'Same pharmaceutical-grade NAD+ as 500mg vial', 'Suitable for IV infusion protocols'],
    protocol: `Same as NAD+ 500mg. Larger vial supports extended protocols without reordering.`,
    synergies: ['epithalon', 'ghk-cu', 'ss-31-10mg'],
    highlights: [{ title: 'Maximum Supply', body: '1000mg — double the standard vial for extended or high-dose NAD+ protocols.' }],
  },

  {
    slug: 'ss-31-10mg',
    name: 'SS-31 10mg',
    tagline: 'Mitochondria-targeted antioxidant peptide — restore mitochondrial function.',
    price: 99.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Mitochondria', 'Anti-Aging', 'Antioxidant', 'SS-31', 'Elamipretide'],
    image: `${IMG}/ss-31-10mg.png`,
    shopUrl: shopLink('ss-31-10mg'),
    shortDescription: 'Research-grade SS-31 (Elamipretide) 10mg. 98.8% purity. Mitochondria-targeted tetrapeptide antioxidant that restores cristae structure and ATP production.',
    seoTitle: 'SS-31 10mg | Mitochondria-Targeted Antioxidant Peptide',
    deepDiveTitle: 'SS-31 (Elamipretide): Mitochondrial Restoration Protocol',
    researchRating: 5,
    popularityRank: 65,
    fullDescription: `SS-31 (also known as Elamipretide or MTP-131) is a cell-permeable tetrapeptide that selectively accumulates in mitochondrial inner membranes, where it binds to cardiolipin — the critical phospholipid that maintains cristae structure and electron transport chain function. In aged cells, cardiolipin oxidation disrupts cristae architecture, reducing ATP production. SS-31 restores cardiolipin integrity, reverses cristae collapse, and dramatically improves mitochondrial efficiency.`,
    benefits: [
      'Restores mitochondrial cristae structure disrupted by aging',
      'Dramatically improves ATP production in dysfunctional mitochondria',
      'Reduces mitochondrial ROS production without impairing signaling',
      'Shown to reverse age-related mitochondrial dysfunction in skeletal muscle',
      'In Phase 2 trials for heart failure and Barth syndrome',
    ],
    protocol: `- Dose: 1–3mg subcutaneous daily
- Duration: Continuous use or 8-week cycles
- Stack: Synergistic with NAD+ for comprehensive mitochondrial support`,
    synergies: ['nad-plus', 'nad-1000mg', 'mots-c-10mg'],
    highlights: [
      { title: 'Cristae Restoration', body: 'Directly targets the inner mitochondrial membrane architecture — unique mechanism among anti-aging compounds.' },
      { title: 'Phase 2 Trials', body: 'SS-31 (Elamipretide) is in Phase 2 clinical trials for heart failure — strong translational evidence.' },
    ],
  },

  {
    slug: 'ss-31-25mg',
    name: 'SS-31 25mg',
    tagline: 'Extended SS-31 supply — mid-size vial for sustained mitochondrial protocols.',
    price: 189.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Mitochondria', 'Anti-Aging', 'Antioxidant', 'SS-31'],
    image: `${IMG}/ss-31-25mg.png`,
    shopUrl: shopLink('ss-31-25mg'),
    shortDescription: 'Research-grade SS-31 25mg. 98.8% purity. Extended supply for sustained mitochondrial restoration protocols.',
    seoTitle: 'SS-31 25mg | Extended Mitochondrial Antioxidant Supply',
    deepDiveTitle: 'SS-31 25mg: Extended Mitochondrial Protocol',
    researchRating: 5,
    popularityRank: 66,
    fullDescription: `25mg SS-31 vial — provides 8–25 days at standard doses. Best value option for multi-week mitochondrial support protocols.`,
    benefits: ['Extended 8–25 day supply', 'Same SS-31 compound as 10mg vial', 'Better per-mg economics than 10mg vial'],
    protocol: `Same as SS-31 10mg. 25mg covers 8–25 days at 1–3mg/day.`,
    synergies: ['nad-plus', 'nad-1000mg'],
    highlights: [{ title: 'Extended Supply', body: '25mg provides 2–3 week supply at standard daily doses.' }],
  },

  {
    slug: 'ss-31-50mg',
    name: 'SS-31 50mg',
    tagline: 'Best value SS-31 — maximum supply for committed mitochondrial rejuvenation.',
    price: 329.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Mitochondria', 'Anti-Aging', 'Antioxidant', 'SS-31', 'Best Value'],
    image: `${IMG}/ss-31-50mg.png`,
    shopUrl: shopLink('ss-31-50mg'),
    shortDescription: 'Research-grade SS-31 50mg. 98.8% purity. Maximum supply for long-term mitochondrial restoration protocols.',
    seoTitle: 'SS-31 50mg | Maximum Supply Mitochondrial Peptide',
    deepDiveTitle: 'SS-31 50mg: Maximum Mitochondrial Protocol',
    researchRating: 5,
    popularityRank: 67,
    fullDescription: `50mg SS-31 vial — the largest supply option for committed mitochondrial restoration protocols. Best per-mg value for those running extended daily protocols.`,
    benefits: ['Best per-mg value for SS-31', '16–50 days supply at standard doses', 'Ideal for extended mitochondrial rejuvenation protocols'],
    protocol: `Same as SS-31 10mg. 50mg covers 16–50 days at 1–3mg/day.`,
    synergies: ['nad-1000mg', 'epithalon'],
    highlights: [{ title: 'Best Value', body: 'Best per-mg price for SS-31 — designed for extended mitochondrial restoration.' }],
  },

  {
    slug: 'mots-c-10mg',
    name: 'MOTS-c 10mg',
    tagline: 'Mitochondrial-derived peptide — exercise mimetic for metabolic and longevity benefits.',
    price: 129.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Mitochondria', 'Exercise Mimetic', 'Metabolic', 'Anti-Aging', 'MOTS-c'],
    image: `${IMG}/mots-c-10mg.png`,
    shopUrl: shopLink('mots-c-10mg'),
    shortDescription: 'Research-grade MOTS-c 10mg. 98.5% purity. Mitochondrial-derived peptide that mimics exercise adaptations — improves insulin sensitivity and metabolic flexibility.',
    seoTitle: 'MOTS-c 10mg | Exercise Mimetic Mitochondrial Peptide',
    deepDiveTitle: 'MOTS-c: Exercise Mimetic Mitochondrial Peptide Protocol',
    researchRating: 4,
    popularityRank: 68,
    fullDescription: `MOTS-c is a mitochondrial-derived peptide encoded in the mitochondrial genome — a recently discovered class of peptide signal. It acts as an exercise mimetic, activating AMPK signaling pathways that improve insulin sensitivity, glucose uptake, and metabolic flexibility. In animal studies, MOTS-c injection produced improvements in physical performance and metabolic health comparable to sustained aerobic exercise training.`,
    benefits: [
      'AMPK activation — mimics metabolic adaptations to exercise',
      'Improves insulin sensitivity and glucose uptake',
      'Enhances metabolic flexibility (fat vs. glucose utilization)',
      'May extend healthspan through mitochondrial signaling',
      'Declines with age — restoration may reverse metabolic aging',
    ],
    protocol: `- Dose: 5–15mg weekly subcutaneous
- Frequency: 1–3× weekly
- Duration: Continuous or cycled based on metabolic goals`,
    synergies: ['ss-31-10mg', 'nad-plus'],
    highlights: [
      { title: 'Exercise Mimetic', body: 'MOTS-c mimics metabolic adaptations of exercise through AMPK activation.' },
      { title: 'Mitochondrial Genome', body: 'Encoded in mitochondrial DNA — a newly discovered class of peptide hormone.' },
    ],
  },

  {
    slug: 'mots-c-20mg',
    name: 'MOTS-c 20mg',
    tagline: 'Extended MOTS-c supply — sustained exercise mimetic metabolic support.',
    price: 219.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Mitochondria', 'Exercise Mimetic', 'Metabolic', 'Anti-Aging'],
    image: `${IMG}/mots-c-20mg.png`,
    shopUrl: shopLink('mots-c-20mg'),
    shortDescription: 'Research-grade MOTS-c 20mg. 98.5% purity. Extended supply for sustained metabolic optimization protocols.',
    seoTitle: 'MOTS-c 20mg | Extended Exercise Mimetic Metabolic Supply',
    deepDiveTitle: 'MOTS-c 20mg: Extended Protocol',
    researchRating: 4,
    popularityRank: 69,
    fullDescription: `20mg MOTS-c vial — extended supply for sustained metabolic optimization. At 10mg/week, covers 2 weeks; at 5mg/week, covers 4 weeks.`,
    benefits: ['Extended supply for sustained AMPK activation', 'Better per-mg value than 10mg vial', 'Same mitochondrial-derived peptide'],
    protocol: `Same as MOTS-c 10mg.`,
    synergies: ['ss-31-10mg', 'nad-plus'],
    highlights: [{ title: 'Extended Protocol', body: '20mg supports 2–4 weeks of continuous MOTS-c metabolic optimization.' }],
  },

  {
    slug: 'mots-c-40mg',
    name: 'MOTS-c 40mg',
    tagline: 'Best value MOTS-c — maximum supply for long-term metabolic optimization.',
    price: 379.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Mitochondria', 'Exercise Mimetic', 'Metabolic', 'Anti-Aging', 'Best Value'],
    image: `${IMG}/mots-c-40mg.png`,
    shopUrl: shopLink('mots-c-40mg'),
    shortDescription: 'Research-grade MOTS-c 40mg. 98.5% purity. Best value maximum supply for committed MOTS-c protocols.',
    seoTitle: 'MOTS-c 40mg | Best Value Maximum MOTS-c Supply',
    deepDiveTitle: 'MOTS-c 40mg: Maximum Protocol',
    researchRating: 4,
    popularityRank: 70,
    fullDescription: `40mg MOTS-c — the best per-mg option for long-term metabolic optimization. At 10mg/week, provides 4 weeks of supply.`,
    benefits: ['Best per-mg value for MOTS-c', '4–8 weeks supply at standard doses', 'Ideal for committed long-term metabolic protocols'],
    protocol: `Same as MOTS-c 10mg. 40mg covers 4–8 weeks at 5–10mg/week.`,
    synergies: ['ss-31-10mg', 'nad-1000mg'],
    highlights: [{ title: 'Best Value', body: 'Lowest per-mg price for MOTS-c — optimal for committed long-term metabolic protocols.' }],
  },

  {
    slug: 'glutathione-200mg',
    name: 'Glutathione 200mg',
    tagline: 'Master antioxidant — cellular detoxification and oxidative stress reduction.',
    price: 49.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Antioxidant', 'Detox', 'Anti-Aging', 'Glutathione', 'Immune'],
    image: `${IMG}/glutathione-200mg.png`,
    shopUrl: shopLink('glutathione-200mg'),
    shortDescription: 'Research-grade Glutathione 200mg. 99.0% purity. The master cellular antioxidant for detoxification and oxidative stress reduction.',
    seoTitle: 'Glutathione 200mg | Master Antioxidant Peptide',
    deepDiveTitle: 'Glutathione: Master Antioxidant Protocol',
    researchRating: 4,
    popularityRank: 71,
    fullDescription: `Glutathione (GSH) is the body's master intracellular antioxidant — a tripeptide (Gly-Cys-Glu) that neutralizes reactive oxygen species, regenerates vitamin C and E, and supports detoxification in the liver. Injectable glutathione bypasses gut degradation for direct cellular delivery.`,
    benefits: [
      'Master intracellular antioxidant — neutralizes reactive oxygen species',
      'Supports liver detoxification pathways',
      'Regenerates vitamins C and E for sustained antioxidant defense',
      'Immune function support',
      'Injectable form bypasses gut degradation',
    ],
    protocol: `- Dose: 200–600mg IV push or subcutaneous
- Frequency: 2–3× weekly
- Application: Anti-aging, detoxification, immune support`,
    synergies: ['nad-plus', 'ss-31-10mg'],
    highlights: [{ title: 'Master Antioxidant', body: 'Glutathione is the primary intracellular antioxidant — the body\'s most important oxidative defense.' }],
  },

  {
    slug: 'glutathione-600mg',
    name: 'Glutathione 600mg',
    tagline: 'Mid-range Glutathione — full therapeutic dose in one vial.',
    price: 89.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Antioxidant', 'Detox', 'Anti-Aging', 'Glutathione', 'Immune'],
    image: `${IMG}/glutathione-600mg.png`,
    shopUrl: shopLink('glutathione-600mg'),
    shortDescription: 'Research-grade Glutathione 600mg. 99.0% purity. Standard therapeutic dose for antioxidant and detox protocols.',
    seoTitle: 'Glutathione 600mg | Therapeutic Dose Antioxidant',
    deepDiveTitle: 'Glutathione 600mg: Therapeutic Protocol',
    researchRating: 4,
    popularityRank: 72,
    fullDescription: `600mg Glutathione — the standard clinical infusion dose for antioxidant therapy. Full therapeutic dose in a single vial.`,
    benefits: ['Standard 600mg clinical dose', 'Full antioxidant load per injection', 'Same pharmaceutical-grade GSH as 200mg vial'],
    protocol: `- Dose: 600mg IV push or subcutaneous
- Frequency: 2–3× weekly`,
    synergies: ['nad-plus'],
    highlights: [{ title: 'Clinical Dose', body: '600mg is the standard clinical glutathione infusion dose.' }],
  },

  {
    slug: 'glutathione-1500mg',
    name: 'Glutathione 1500mg',
    tagline: 'High-dose Glutathione — maximum antioxidant load for intensive protocols.',
    price: 179.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Antioxidant', 'Detox', 'Anti-Aging', 'Glutathione', 'Best Value'],
    image: `${IMG}/glutathione-1500mg.png`,
    shopUrl: shopLink('glutathione-1500mg'),
    shortDescription: 'Research-grade Glutathione 1500mg. 99.0% purity. High-dose antioxidant for intensive protocols or multiple dosing sessions.',
    seoTitle: 'Glutathione 1500mg | High-Dose Maximum Antioxidant Supply',
    deepDiveTitle: 'Glutathione 1500mg: High-Dose Protocol',
    researchRating: 4,
    popularityRank: 73,
    fullDescription: `1500mg Glutathione — the largest single vial for high-dose or multi-session antioxidant protocols. Best per-mg value for sustained glutathione supplementation.`,
    benefits: ['Best per-mg value for Glutathione', 'Multiple therapeutic doses per vial', 'Ideal for intensive detox or anti-aging protocols'],
    protocol: `Same as Glutathione 200mg. 1500mg provides multiple 600mg clinical doses.`,
    synergies: ['nad-plus', 'ss-31-10mg'],
    highlights: [{ title: 'Best Value', body: '1500mg — best per-mg price for extended glutathione therapy.' }],
  },

  {
    slug: 'thymosin-alpha-1-10mg',
    name: 'Thymosin Alpha-1 10mg',
    tagline: 'FDA-approved immune modulator — restore and optimize immune system function.',
    price: 119.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Immune', 'Anti-Aging', 'Thymosin', 'Infection', 'Cancer'],
    image: `${IMG}/thymosin-alpha-1-10mg.png`,
    shopUrl: shopLink('thymosin-alpha-1-10mg'),
    shortDescription: 'Research-grade Thymosin Alpha-1 10mg. 99.2% purity. FDA-approved immunomodulatory peptide — approved in 35+ countries for immune deficiency.',
    seoTitle: 'Thymosin Alpha-1 10mg | FDA-Approved Immune Modulator',
    deepDiveTitle: 'Thymosin Alpha-1: Immune Optimization Protocol',
    researchRating: 5,
    popularityRank: 74,
    fullDescription: `Thymosin Alpha-1 (Tα1) is a 28-amino acid peptide derived from the thymus gland that regulates immune function. It is approved in 35+ countries (brand name Zadaxin) for chronic hepatitis B and C, immune deficiency states, and certain cancers. It enhances T-cell maturation, NK cell activity, and dendritic cell function while normalizing dysregulated immune responses.`,
    benefits: [
      'Approved in 35+ countries for immune deficiency and viral hepatitis',
      'Enhances T-cell and NK cell function',
      'Normalizes immune dysregulation — both immunostimulatory and immunomodulatory',
      'Thymic peptide — supports declining thymic function with age',
      '99.2% purity with COA',
    ],
    protocol: `- Dose: 1.6mg subcutaneous 2× weekly
- Duration: 12–24 weeks
- Application: Immune support, chronic viral infections, aging`,
    synergies: ['ll-37-10mg', 'bpc-157'],
    highlights: [
      { title: '35+ Country Approval', body: 'Zadaxin (Thymosin Alpha-1) is approved in 35+ countries — strongest regulatory validation of any immunomodulatory peptide.' },
      { title: 'Thymic Function', body: 'Supports declining thymus activity with age — restoring youthful immune architecture.' },
    ],
  },

  {
    slug: 'thymosin-alpha-1-5mg',
    name: 'Thymosin Alpha-1 5mg',
    tagline: 'Starter Thymosin Alpha-1 — entry supply for immune optimization.',
    price: 69.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Immune', 'Anti-Aging', 'Thymosin'],
    image: `${IMG}/thymosin-alpha-1-5mg.png`,
    shopUrl: shopLink('thymosin-alpha-1-5mg'),
    shortDescription: 'Research-grade Thymosin Alpha-1 5mg. 99.2% purity. Starter supply for Thymosin Alpha-1 immune protocols.',
    seoTitle: 'Thymosin Alpha-1 5mg | Starter Immune Modulator Supply',
    deepDiveTitle: 'Thymosin Alpha-1 5mg: Starter Protocol',
    researchRating: 5,
    popularityRank: 75,
    fullDescription: `5mg starter vial of Thymosin Alpha-1. Same FDA-approved immunomodulatory peptide as the 10mg vial — entry supply for protocol initiation.`,
    benefits: ['Starter 5mg supply for Thymosin Alpha-1 protocols', '99.2% purity with COA', 'Entry price for immune optimization'],
    protocol: `Same as Thymosin Alpha-1 10mg.`,
    synergies: ['thymosin-alpha-1-10mg'],
    highlights: [{ title: 'Entry Point', body: 'Starter vial for the approved immunomodulatory peptide.' }],
  },

  {
    slug: 'abaloparatide-3mg',
    name: 'Abaloparatide 3mg',
    tagline: 'PTHrP analog — FDA-approved bone density restoration peptide.',
    price: 149.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bone Density', 'Anti-Aging', 'PTH', 'Osteoporosis', 'Abaloparatide'],
    image: `${IMG}/abaloparatide-3mg.png`,
    shopUrl: shopLink('abaloparatide-3mg'),
    shortDescription: 'Research-grade Abaloparatide 3mg. 98.7% purity. PTHrP analog FDA-approved for osteoporosis — increases bone density and reduces fracture risk.',
    seoTitle: 'Abaloparatide 3mg | FDA-Approved Bone Density Restoration Peptide',
    deepDiveTitle: 'Abaloparatide: Bone Density Restoration Protocol',
    researchRating: 4,
    popularityRank: 76,
    fullDescription: `Abaloparatide is a synthetic analog of PTHrP (Parathyroid Hormone-related Protein) approved as Tymlos® for osteoporosis. It activates the PTH1 receptor with a selectivity that favors bone formation over resorption — producing greater increases in bone mineral density than teriparatide in head-to-head trials.`,
    benefits: [
      'FDA-approved for osteoporosis — strong clinical validation',
      'Superior bone density gains vs. teriparatide in head-to-head trials',
      'Favors bone formation over resorption (anabolic mechanism)',
      'Reduces vertebral and hip fracture risk',
    ],
    protocol: `- Dose: 80mcg daily subcutaneous injection
- Duration: Maximum 2 years (as with all PTH analogs)`,
    synergies: ['igf-1-lr3', 'ghk-cu'],
    highlights: [{ title: 'FDA Approved', body: 'Tymlos® (abaloparatide) is FDA-approved for osteoporosis — clinical-grade bone density restoration.' }],
  },

  {
    slug: 'ace-031-1mg',
    name: 'ACE-031 1mg',
    tagline: 'Myostatin inhibitor — remove the brakes on muscle growth.',
    price: 199.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Muscle', 'Myostatin', 'Anti-Aging', 'Strength', 'ACE-031'],
    image: `${IMG}/ace-031-1mg.png`,
    shopUrl: shopLink('ace-031-1mg'),
    shortDescription: 'Research-grade ACE-031 1mg. 98.5% purity. Activin receptor type IIB (ActRIIB) decoy — inhibits myostatin and activin to dramatically increase muscle mass.',
    seoTitle: 'ACE-031 1mg | Myostatin Inhibitor for Maximum Muscle Growth',
    deepDiveTitle: 'ACE-031: Myostatin Inhibition Protocol',
    researchRating: 3,
    popularityRank: 77,
    fullDescription: `ACE-031 is a fusion protein of the activin receptor type IIB (ActRIIB) extracellular domain and human IgG1 Fc region. It acts as a "myostatin trap" — binding myostatin and other TGF-β family members that inhibit muscle growth, effectively removing the body's natural ceiling on muscle mass. Phase 2 trials in Duchenne muscular dystrophy showed significant lean mass gains.`,
    benefits: [
      'Inhibits myostatin and activin — removes natural muscle growth ceiling',
      'Phase 2 data: significant lean mass increases in muscular dystrophy',
      'Acts on ActRIIB — a different mechanism from other anabolic peptides',
    ],
    protocol: `- Dose: Varies — typically in the 1–3mg/kg range in clinical settings
- Note: Preliminary compound — use with caution, limited human data at this dose`,
    synergies: ['igf-1-lr3', 'ipamorelin-cjc'],
    highlights: [{ title: 'Myostatin Trap', body: 'Binds myostatin before it can signal — removes the genetic ceiling on muscle mass.' }],
  },

  {
    slug: 'pinealon-10mg',
    name: 'Pinealon 10mg',
    tagline: 'Pineal gland peptide — cognitive restoration and circadian regulation.',
    price: 69.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Cognitive', 'Anti-Aging', 'Pineal', 'Neuroprotective', 'Circadian'],
    image: `${IMG}/pinealon-10mg.png`,
    shopUrl: shopLink('pinealon-10mg'),
    shortDescription: 'Research-grade Pinealon 10mg. 99.0% purity. Pineal gland tripeptide for neuroprotection and circadian rhythm normalization.',
    seoTitle: 'Pinealon 10mg | Pineal Gland Peptide for Cognitive Health',
    deepDiveTitle: 'Pinealon: Pineal Peptide Neuroprotection Protocol',
    researchRating: 4,
    popularityRank: 78,
    fullDescription: `Pinealon (Ala-Glu-Asp-Gly... EDR tripeptide) is a synthetic peptide derived from the pineal gland — the brain structure responsible for melatonin production and circadian regulation. It penetrates the blood-brain barrier and has been studied for neuroprotection, cognitive restoration in age-related decline, and normalization of circadian rhythm disruption.`,
    benefits: [
      'Neuroprotective — reduces oxidative stress in brain tissue',
      'Normalizes circadian rhythm and sleep architecture',
      'Potential for cognitive restoration in age-related decline',
      'Pineal gland origin — melatonin pathway support',
    ],
    protocol: `- Dose: 5–10mg per cycle (10-day burst protocol)
- Route: Subcutaneous injection 0.5–1mg per day
- Frequency: 1–2 burst cycles per year`,
    synergies: ['epithalon', 'dsip-10mg'],
    highlights: [{ title: 'BBB Penetration', body: 'Pinealon crosses the blood-brain barrier — direct neuroprotective action.' }],
  },

  {
    slug: 'pinealon-20mg',
    name: 'Pinealon 20mg',
    tagline: 'Extended Pinealon supply for sustained neuroprotection protocols.',
    price: 119.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Cognitive', 'Anti-Aging', 'Pineal', 'Neuroprotective'],
    image: `${IMG}/pinealon-20mg.png`,
    shopUrl: shopLink('pinealon-20mg'),
    shortDescription: 'Research-grade Pinealon 20mg. 99.0% purity. Extended supply for multi-cycle neuroprotection protocols.',
    seoTitle: 'Pinealon 20mg | Extended Neuroprotection Supply',
    deepDiveTitle: 'Pinealon 20mg: Extended Protocol',
    researchRating: 4,
    popularityRank: 79,
    fullDescription: `20mg Pinealon — sufficient for 2 full 10-day burst cycles or extended lower-dose protocols.`,
    benefits: ['2 full burst cycles per vial', 'Extended neuroprotection coverage', 'Same compound as 10mg vial'],
    protocol: `Same as Pinealon 10mg. 20mg covers 2 burst cycles.`,
    synergies: ['epithalon', 'dsip-10mg'],
    highlights: [{ title: 'Multi-Cycle', body: '20mg provides 2 full burst cycle protocols.' }],
  },

  // Bioregulator peptides
  {
    slug: 'bronchogen-20mg',
    name: 'Bronchogen 20mg',
    tagline: 'Bronchial bioregulator peptide — lung tissue support and respiratory health.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Lung', 'Respiratory', 'Anti-Aging'],
    image: `${IMG}/bronchogen-20mg.png`,
    shopUrl: shopLink('bronchogen-20mg'),
    shortDescription: 'Research-grade Bronchogen 20mg. 99.0% purity. Bronchial tissue bioregulator peptide for respiratory health and lung longevity.',
    seoTitle: 'Bronchogen 20mg | Bronchial Bioregulator Peptide',
    deepDiveTitle: 'Bronchogen: Respiratory Bioregulator Protocol',
    researchRating: 3,
    popularityRank: 80,
    fullDescription: `Bronchogen is a tetrapeptide bioregulator from the Khavinson peptide bioregulator series — designed to target bronchial tissue. Peptide bioregulators are short peptides derived from specific organs that restore gene expression patterns in those organ types.`,
    benefits: ['Targets bronchial and lung tissue specifically', 'Part of the validated Khavinson bioregulator series', 'Supports respiratory health in aging populations'],
    protocol: `- Dose: 5–10mg per burst cycle
- Route: Subcutaneous injection over 10 days`,
    synergies: ['epithalon', 'thymosin-alpha-1-10mg'],
    highlights: [{ title: 'Organ-Specific', body: 'Bronchogen targets bronchial tissue — an organ-specific bioregulator peptide.' }],
  },

  {
    slug: 'cardiogen-20mg',
    name: 'Cardiogen 20mg',
    tagline: 'Cardiac bioregulator peptide — heart tissue support and cardioprotection.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Cardiac', 'Heart', 'Anti-Aging'],
    image: `${IMG}/cardiogen-20mg.png`,
    shopUrl: shopLink('cardiogen-20mg'),
    shortDescription: 'Research-grade Cardiogen 20mg. 99.0% purity. Cardiac tissue bioregulator peptide for heart health and longevity.',
    seoTitle: 'Cardiogen 20mg | Cardiac Bioregulator Peptide',
    deepDiveTitle: 'Cardiogen: Cardiac Bioregulator Protocol',
    researchRating: 3,
    popularityRank: 81,
    fullDescription: `Cardiogen is a tetrapeptide cardiac tissue bioregulator from the Khavinson series — targets heart muscle cells to restore age-related gene expression changes in cardiac tissue.`,
    benefits: ['Cardiac tissue-targeted bioregulator', 'Khavinson-validated peptide series', 'Supports cardiac health in aging'],
    protocol: `Same burst cycle protocol as other bioregulators.`,
    synergies: ['epithalon', 'ss-31-10mg'],
    highlights: [{ title: 'Cardiac Target', body: 'Specifically targets cardiac tissue gene expression normalization.' }],
  },

  {
    slug: 'cartalax-20mg',
    name: 'Cartalax 20mg',
    tagline: 'Cartilage and connective tissue bioregulator peptide.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Cartilage', 'Joints', 'Anti-Aging'],
    image: `${IMG}/cartalax-20mg.png`,
    shopUrl: shopLink('cartalax-20mg'),
    shortDescription: 'Research-grade Cartalax 20mg. 99.0% purity. Cartilage and connective tissue bioregulator peptide.',
    seoTitle: 'Cartalax 20mg | Cartilage Bioregulator Peptide',
    deepDiveTitle: 'Cartalax: Cartilage Bioregulator Protocol',
    researchRating: 3, popularityRank: 82,
    fullDescription: `Cartalax is a bioregulator peptide targeting cartilage and connective tissue — designed to restore gene expression patterns in chondrocytes and related cells.`,
    benefits: ['Cartilage-specific bioregulator', 'Supports joint health and cartilage longevity'],
    protocol: `Standard bioregulator burst cycle: 10mg over 10 days subcutaneous.`,
    synergies: ['bpc-157', 'ghk-cu'],
    highlights: [{ title: 'Joint Health', body: 'Cartalax targets cartilage tissue specifically for joint longevity support.' }],
  },

  {
    slug: 'chonluten-20mg',
    name: 'Chonluten 20mg',
    tagline: 'Lung and bronchial mucosa bioregulator peptide.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Lung', 'Mucosa', 'Anti-Aging'],
    image: `${IMG}/chonluten-20mg.png`,
    shopUrl: shopLink('chonluten-20mg'),
    shortDescription: 'Research-grade Chonluten 20mg. 99.0% purity. Lung and bronchial mucosa bioregulator for respiratory longevity.',
    seoTitle: 'Chonluten 20mg | Lung Mucosa Bioregulator Peptide',
    deepDiveTitle: 'Chonluten: Lung Bioregulator Protocol',
    researchRating: 3, popularityRank: 83,
    fullDescription: `Chonluten is a tripeptide bioregulator targeting lung mucosa cells — supports bronchial mucosal health and respiratory tissue longevity.`,
    benefits: ['Lung mucosa-targeted bioregulator', 'Supports bronchial mucosal integrity'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['bronchogen-20mg', 'epithalon'],
    highlights: [{ title: 'Mucosa Target', body: 'Specifically targets bronchial mucosa gene expression.' }],
  },

  {
    slug: 'cortagen-20mg',
    name: 'Cortagen 20mg',
    tagline: 'Brain cortex bioregulator peptide — cerebral cortex neuroprotection.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Brain', 'Neuroprotective', 'Anti-Aging'],
    image: `${IMG}/cortagen-20mg.png`,
    shopUrl: shopLink('cortagen-20mg'),
    shortDescription: 'Research-grade Cortagen 20mg. 99.0% purity. Brain cortex bioregulator peptide for neuroprotection and cognitive longevity.',
    seoTitle: 'Cortagen 20mg | Brain Cortex Bioregulator Peptide',
    deepDiveTitle: 'Cortagen: Cortical Bioregulator Protocol',
    researchRating: 3, popularityRank: 84,
    fullDescription: `Cortagen is a peptide bioregulator derived from brain cortex tissue — targets cerebral cortical cells to restore age-related gene expression changes associated with cognitive decline.`,
    benefits: ['Brain cortex-targeted bioregulator', 'Neuroprotective gene expression restoration', 'Cognitive longevity support'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['pinealon-10mg', 'epithalon'],
    highlights: [{ title: 'Cortical Target', body: 'Specifically targets brain cortex cells for cognitive longevity.' }],
  },

  {
    slug: 'crystagen-20mg',
    name: 'Crystagen 20mg',
    tagline: 'Thymus-derived crystallin peptide bioregulator.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Thymus', 'Immune', 'Anti-Aging'],
    image: `${IMG}/crystagen-20mg.png`,
    shopUrl: shopLink('crystagen-20mg'),
    shortDescription: 'Research-grade Crystagen 20mg. 99.0% purity. Thymus peptide bioregulator for immune aging support.',
    seoTitle: 'Crystagen 20mg | Thymus Bioregulator Peptide',
    deepDiveTitle: 'Crystagen: Thymic Bioregulator Protocol',
    researchRating: 3, popularityRank: 85,
    fullDescription: `Crystagen is a bioregulator peptide targeting thymic tissue — supports thymus function which naturally involutes with age, contributing to immune senescence.`,
    benefits: ['Thymus-targeted bioregulator', 'Supports declining thymic immune function with age'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['thymosin-alpha-1-10mg', 'epithalon'],
    highlights: [{ title: 'Thymic Support', body: 'Targets the thymus — the organ most critical for T-cell immune aging.' }],
  },

  {
    slug: 'livagen-20mg',
    name: 'Livagen 20mg',
    tagline: 'Liver bioregulator peptide — hepatic tissue support and longevity.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Liver', 'Hepatic', 'Anti-Aging'],
    image: `${IMG}/livagen-20mg.png`,
    shopUrl: shopLink('livagen-20mg'),
    shortDescription: 'Research-grade Livagen 20mg. 99.0% purity. Liver tissue bioregulator for hepatic health and longevity.',
    seoTitle: 'Livagen 20mg | Liver Bioregulator Peptide',
    deepDiveTitle: 'Livagen: Hepatic Bioregulator Protocol',
    researchRating: 3, popularityRank: 86,
    fullDescription: `Livagen is a tetrapeptide bioregulator targeting liver (hepatic) tissue — designed to restore chromatin structure and gene expression in hepatocytes that changes with aging.`,
    benefits: ['Liver-targeted bioregulator', 'Hepatic gene expression restoration', 'Liver health and longevity support'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['epithalon', 'nad-plus'],
    highlights: [{ title: 'Hepatic Target', body: 'Targets liver cells specifically — hepatic bioregulator from Khavinson series.' }],
  },

  {
    slug: 'ovagen-20mg',
    name: 'Ovagen 20mg',
    tagline: 'Liver and GI bioregulator peptide — gastrointestinal longevity support.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'GI', 'Liver', 'Anti-Aging'],
    image: `${IMG}/ovagen-20mg.png`,
    shopUrl: shopLink('ovagen-20mg'),
    shortDescription: 'Research-grade Ovagen 20mg. 99.0% purity. Liver and GI mucosa bioregulator peptide.',
    seoTitle: 'Ovagen 20mg | GI and Liver Bioregulator Peptide',
    deepDiveTitle: 'Ovagen: GI Bioregulator Protocol',
    researchRating: 3, popularityRank: 87,
    fullDescription: `Ovagen is a peptide bioregulator targeting liver and gastrointestinal mucosa. Supports GI tract longevity and liver health through targeted gene expression modulation.`,
    benefits: ['Combined liver and GI bioregulator', 'Supports GI mucosal integrity with aging'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['bpc-157', 'livagen-20mg'],
    highlights: [{ title: 'Dual Target', body: 'Targets both liver and GI mucosa — comprehensive GI tract bioregulator.' }],
  },

  {
    slug: 'pancragen-20mg',
    name: 'Pancragen 20mg',
    tagline: 'Pancreatic bioregulator peptide — pancreas tissue support and metabolic health.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Pancreas', 'Metabolic', 'Anti-Aging'],
    image: `${IMG}/pancragen-20mg.png`,
    shopUrl: shopLink('pancragen-20mg'),
    shortDescription: 'Research-grade Pancragen 20mg. 99.0% purity. Pancreatic tissue bioregulator for metabolic health and longevity.',
    seoTitle: 'Pancragen 20mg | Pancreatic Bioregulator Peptide',
    deepDiveTitle: 'Pancragen: Pancreatic Bioregulator Protocol',
    researchRating: 3, popularityRank: 88,
    fullDescription: `Pancragen is a bioregulator peptide targeting pancreatic tissue — designed to restore gene expression in pancreatic beta and acinar cells that changes with aging and metabolic stress.`,
    benefits: ['Pancreas-targeted bioregulator', 'Supports beta cell function and insulin production longevity'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['epithalon', 'nad-plus'],
    highlights: [{ title: 'Pancreatic Target', body: 'Specifically targets pancreatic cells for metabolic longevity.' }],
  },

  {
    slug: 'prostamax-20mg',
    name: 'Prostamax 20mg',
    tagline: 'Prostate bioregulator peptide — prostate tissue support and men\'s health.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Prostate', 'Men\'s Health', 'Anti-Aging'],
    image: `${IMG}/prostamax-20mg.png`,
    shopUrl: shopLink('prostamax-20mg'),
    shortDescription: 'Research-grade Prostamax 20mg. 99.0% purity. Prostate tissue bioregulator for men\'s health and longevity.',
    seoTitle: 'Prostamax 20mg | Prostate Bioregulator Peptide for Men\'s Health',
    deepDiveTitle: 'Prostamax: Prostate Bioregulator Protocol',
    researchRating: 3, popularityRank: 89,
    fullDescription: `Prostamax is a bioregulator peptide derived from prostate tissue — targets prostate gland cells to restore age-related gene expression changes and support prostate health in aging men.`,
    benefits: ['Prostate-targeted bioregulator', 'Men\'s prostate health support with aging', 'Khavinson bioregulator series'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['epithalon', 'testagen-20mg'],
    highlights: [{ title: 'Prostate Health', body: 'Specifically targets prostate gland cells for men\'s health longevity.' }],
  },

  {
    slug: 'testagen-20mg',
    name: 'Testagen 20mg',
    tagline: 'Testes bioregulator peptide — gonadal tissue support for men\'s hormonal longevity.',
    price: 89.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Testes', 'Testosterone', 'Men\'s Health', 'Anti-Aging'],
    image: `${IMG}/testagen-20mg.png`,
    shopUrl: shopLink('testagen-20mg'),
    shortDescription: 'Research-grade Testagen 20mg. 99.0% purity. Testicular tissue bioregulator for men\'s hormonal health and longevity.',
    seoTitle: 'Testagen 20mg | Testes Bioregulator for Men\'s Hormonal Longevity',
    deepDiveTitle: 'Testagen: Gonadal Bioregulator Protocol',
    researchRating: 3, popularityRank: 90,
    fullDescription: `Testagen is a bioregulator peptide targeting testicular tissue — designed to restore gene expression patterns in Leydig cells and Sertoli cells that change with aging, supporting endogenous testosterone production longevity.`,
    benefits: ['Testes-targeted bioregulator', 'Supports Leydig cell function for testosterone production', 'Men\'s hormonal longevity support'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['epithalon', 'gonadorelin-acetate'],
    highlights: [{ title: 'Leydig Cell Target', body: 'Targets testosterone-producing Leydig cells for hormonal longevity.' }],
  },

  {
    slug: 'thymogen-20mg',
    name: 'Thymogen 20mg',
    tagline: 'Thymus bioregulator dipeptide — immune system anti-aging.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Thymus', 'Immune', 'Anti-Aging'],
    image: `${IMG}/thymogen-20mg.png`,
    shopUrl: shopLink('thymogen-20mg'),
    shortDescription: 'Research-grade Thymogen 20mg. 99.0% purity. Thymus-derived dipeptide (Glu-Trp) for immune system longevity.',
    seoTitle: 'Thymogen 20mg | Thymus Dipeptide Immune Bioregulator',
    deepDiveTitle: 'Thymogen: Thymic Immune Longevity Protocol',
    researchRating: 3, popularityRank: 91,
    fullDescription: `Thymogen (Glu-Trp) is a dipeptide derived from thymus tissue — one of the simplest and most extensively studied thymic peptides. It stimulates T-cell maturation and immune function, with particular relevance for the age-related thymic involution that drives immune senescence.`,
    benefits: ['Thymus-derived dipeptide — simplest thymic bioregulator', 'Stimulates T-cell maturation and immune function', 'Addresses age-related thymic decline'],
    protocol: `Standard 10-day burst cycle.`,
    synergies: ['thymosin-alpha-1-10mg', 'epithalon'],
    highlights: [{ title: 'Thymic Dipeptide', body: 'Glu-Trp — the simplest thymic bioregulator with strong supporting data.' }],
  },

  {
    slug: 'thymulin-10mg',
    name: 'Thymulin 10mg',
    tagline: 'Thymic hormone — T-cell differentiation and immune aging reversal.',
    price: 59.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Thymus', 'Immune', 'Anti-Aging', 'T-Cell', 'Thymulin'],
    image: `${IMG}/thymulin-10mg.png`,
    shopUrl: shopLink('thymulin-10mg'),
    shortDescription: 'Research-grade Thymulin 10mg. 99.0% purity. Thymic hormone for T-cell differentiation and immune system rejuvenation.',
    seoTitle: 'Thymulin 10mg | Thymic Hormone for Immune Aging',
    deepDiveTitle: 'Thymulin: Thymic Hormone Protocol',
    researchRating: 3, popularityRank: 92,
    fullDescription: `Thymulin is a nonapeptide hormone produced exclusively by thymic epithelial cells — it is required for T-cell differentiation and maturation. Thymulin levels decline dramatically with age parallel to thymic involution, contributing to immunosenescence. Supplementation has been studied for immune restoration in aging.`,
    benefits: ['Required for T-cell differentiation', 'Declines with thymic involution — restoration may reverse immune aging', 'Thymus-exclusive hormone'],
    protocol: `- Dose: 5–10mg burst cycle over 10 days
- Route: Subcutaneous injection`,
    synergies: ['thymosin-alpha-1-10mg', 'thymogen-20mg'],
    highlights: [{ title: 'T-Cell Required', body: 'Thymulin is required for T-cell differentiation — declining levels directly impair immune aging.' }],
  },

  {
    slug: 'vesilute-20mg',
    name: 'Vesilute 20mg',
    tagline: 'Bladder tissue bioregulator peptide.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Bladder', 'Urological', 'Anti-Aging'],
    image: `${IMG}/vesilute-20mg.png`,
    shopUrl: shopLink('vesilute-20mg'),
    shortDescription: 'Research-grade Vesilute 20mg. 99.0% purity. Bladder tissue bioregulator peptide for urological health.',
    seoTitle: 'Vesilute 20mg | Bladder Bioregulator Peptide',
    deepDiveTitle: 'Vesilute: Bladder Bioregulator Protocol',
    researchRating: 3, popularityRank: 93,
    fullDescription: `Vesilute is a peptide bioregulator targeting bladder epithelial tissue — designed to restore gene expression patterns in bladder cells for urological health maintenance with aging.`,
    benefits: ['Bladder-targeted bioregulator', 'Urological health with aging'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['epithalon'],
    highlights: [{ title: 'Bladder Target', body: 'Specifically targets bladder epithelial cells for urological longevity.' }],
  },

  {
    slug: 'vesugen-20mg',
    name: 'Vesugen 20mg',
    tagline: 'Vascular bioregulator peptide — blood vessel health and cardiovascular longevity.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Vascular', 'Cardiovascular', 'Anti-Aging'],
    image: `${IMG}/vesugen-20mg.png`,
    shopUrl: shopLink('vesugen-20mg'),
    shortDescription: 'Research-grade Vesugen 20mg. 99.0% purity. Vascular tissue bioregulator for cardiovascular longevity.',
    seoTitle: 'Vesugen 20mg | Vascular Bioregulator Peptide',
    deepDiveTitle: 'Vesugen: Vascular Bioregulator Protocol',
    researchRating: 3, popularityRank: 94,
    fullDescription: `Vesugen is a tripeptide bioregulator targeting vascular endothelial cells — designed to restore gene expression patterns that maintain blood vessel integrity and function with aging.`,
    benefits: ['Vascular endothelium-targeted bioregulator', 'Cardiovascular longevity support', 'Endothelial function restoration'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['cardiogen-20mg', 'epithalon'],
    highlights: [{ title: 'Vascular Target', body: 'Targets vascular endothelium — foundational for cardiovascular longevity.' }],
  },

  {
    slug: 'vilon-20mg',
    name: 'Vilon 20mg',
    tagline: 'Thymus bioregulator peptide — versatile immune system modulator.',
    price: 79.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Bioregulator', 'Thymus', 'Immune', 'Anti-Aging'],
    image: `${IMG}/vilon-20mg.png`,
    shopUrl: shopLink('vilon-20mg'),
    shortDescription: 'Research-grade Vilon 20mg. 99.0% purity. Thymus-derived dipeptide bioregulator (Lys-Glu) for immune system modulation.',
    seoTitle: 'Vilon 20mg | Thymus Dipeptide Immune Bioregulator',
    deepDiveTitle: 'Vilon: Thymic Bioregulator Protocol',
    researchRating: 3, popularityRank: 95,
    fullDescription: `Vilon (Lys-Glu) is a thymus-derived dipeptide that modulates cytokine production and T-cell activity. It has been studied for its effects on aging-associated immune dysfunction and inflammatory cytokine normalization.`,
    benefits: ['Thymus-derived dipeptide immune modulator', 'Normalizes inflammatory cytokine production', 'Studied for immune aging'],
    protocol: `Standard 10-day bioregulator burst cycle.`,
    synergies: ['thymogen-20mg', 'epithalon'],
    highlights: [{ title: 'Cytokine Modulation', body: 'Vilon normalizes inflammatory cytokine profiles — relevant for immune aging.' }],
  },

  {
    slug: 'pnc-27-30mg',
    name: 'PNC-27 30mg',
    tagline: 'Anti-cancer peptide — selectively induces apoptosis in cancer cells.',
    price: 119.99,
    category: 'Anti-Aging & Longevity',
    tags: ['Oncology', 'Apoptosis', 'Anti-Cancer', 'PNC-27'],
    image: `${IMG}/pnc-27-30mg.png`,
    shopUrl: shopLink('pnc-27-30mg'),
    shortDescription: 'Research-grade PNC-27 30mg. 98.5% purity. A p53 MDM-2 binding domain peptide that selectively induces apoptosis in cancer cells without affecting normal cells.',
    seoTitle: 'PNC-27 30mg | Anti-Cancer Apoptosis-Inducing Peptide',
    deepDiveTitle: 'PNC-27: Selective Cancer Cell Apoptosis Protocol',
    researchRating: 3,
    popularityRank: 96,
    fullDescription: `PNC-27 is a chimeric peptide combining the p53 MDM-2 binding domain with a leader sequence targeting the cancer cell membrane. It selectively inserts into cancer cell membranes (which uniquely express HDM-2) and induces apoptosis — while leaving normal cells unaffected. Published in multiple peer-reviewed journals.`,
    benefits: ['Selective cancer cell apoptosis — spares normal cells', 'Targets HDM-2 expressed on cancer cell membranes', 'Peer-reviewed publications across multiple cancer types'],
    protocol: `Experimental compound — dosing protocols vary by research application.`,
    synergies: ['foxo4-dri-10mg'],
    highlights: [{ title: 'Selective Apoptosis', body: 'PNC-27 selectively kills cancer cells via HDM-2 targeting without affecting normal cells.' }],
  },

  // FAT LOSS / METABOLIC
  {
    slug: 'semaglutide-3mg',
    name: 'Semaglutide 3mg',
    tagline: 'Starter semaglutide — entry supply for GLP-1 dose escalation.',
    price: 49.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GLP-1', 'Semaglutide', 'Starter'],
    image: `${IMG}/semaglutide-3mg.png`,
    shopUrl: shopLink('semaglutide-3mg'),
    shortDescription: 'Research-grade Semaglutide 3mg. 99.2% purity. Entry vial for GLP-1 dose escalation protocols.',
    seoTitle: 'Semaglutide 3mg | Starter GLP-1 Weight Loss Vial',
    deepDiveTitle: 'Semaglutide 3mg: Entry Protocol',
    researchRating: 5, popularityRank: 100,
    fullDescription: `3mg starter vial of Semaglutide GLP-1 agonist — covers the initial 0.25–0.5mg/week dose escalation phase. Ideal for first-time users before upgrading to larger vials.`,
    benefits: ['Entry-level GLP-1 supply', 'Covers initial 0.25–0.5mg/week escalation phase', '99.2% purity with COA'],
    protocol: `See Semaglutide 6mg for full escalation protocol. 3mg covers weeks 1–4 at 0.25mg/week.`,
    synergies: ['semaglutide-6mg', 'ipamorelin-cjc'],
    highlights: [{ title: 'Entry Supply', body: '3mg covers the initial semaglutide dose escalation weeks.' }],
  },

  {
    slug: 'semaglutide-30mg',
    name: 'Semaglutide 30mg',
    tagline: 'Maximum supply semaglutide — extended GLP-1 protocol coverage.',
    price: 249.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GLP-1', 'Semaglutide', 'Extended', 'Best Value'],
    image: `${IMG}/semaglutide-30mg.png`,
    shopUrl: shopLink('semaglutide-30mg'),
    shortDescription: 'Research-grade Semaglutide 30mg. 99.2% purity. Maximum supply vial for extended 24+ week GLP-1 protocols.',
    seoTitle: 'Semaglutide 30mg | Maximum Supply GLP-1 Extended Protocol',
    deepDiveTitle: 'Semaglutide 30mg: Maximum Supply Protocol',
    researchRating: 5, popularityRank: 101,
    fullDescription: `30mg Semaglutide — the largest single-vial supply for extended GLP-1 protocols. At 2.4mg/week (max dose), covers ~12 weeks; at 1mg/week, covers ~30 weeks.`,
    benefits: ['Maximum supply for extended protocols', 'Best per-mg value for Semaglutide', 'Covers 12–30 weeks depending on dose'],
    protocol: `Same as Semaglutide 6mg escalation protocol. 30mg provides extended maintenance supply.`,
    synergies: ['semaglutide-20mg', 'ipamorelin-cjc'],
    highlights: [{ title: 'Maximum Supply', body: '30mg is the largest semaglutide vial — covers 12–30 weeks at typical doses.' }],
  },

  {
    slug: 'tirzepatide-60mg',
    name: 'Tirzepatide 60mg',
    tagline: 'Maximum tirzepatide supply — 4 weeks at full 15mg/week protocol.',
    price: 399.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GIP', 'GLP-1', 'Tirzepatide', 'Best Value'],
    image: `${IMG}/tirzepatide-60mg.png`,
    shopUrl: shopLink('tirzepatide-60mg'),
    shortDescription: 'Research-grade Tirzepatide 60mg. 99.2% purity. Maximum single-vial supply for extended tirzepatide protocols.',
    seoTitle: 'Tirzepatide 60mg | Maximum Supply Dual GIP/GLP-1 Peptide',
    deepDiveTitle: 'Tirzepatide 60mg: Maximum Protocol Supply',
    researchRating: 5, popularityRank: 102,
    fullDescription: `60mg Tirzepatide — the largest single-vial supply. At 15mg/week (maximum SURMOUNT dose), covers 4 weeks; at 5mg/week, covers 12 weeks. Best per-mg economics for committed long-duration tirzepatide protocols.`,
    benefits: ['Maximum supply in a single vial', 'Best per-mg value for Tirzepatide', '12 weeks at 5mg/week maintenance'],
    protocol: `Same as Tirzepatide 15mg. 60mg covers 4–12 weeks depending on dose.`,
    synergies: ['tirzepatide-30mg', 'ipamorelin-cjc'],
    highlights: [{ title: 'Maximum Supply', body: '60mg — the largest tirzepatide vial for uninterrupted long-duration protocols.' }],
  },

  {
    slug: 'retatrutide-20mg',
    name: 'Retatrutide 20mg',
    tagline: 'Extended retatrutide supply — the triple agonist for committed weight loss protocols.',
    price: 249.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Triple Agonist', 'GLP-3', 'Retatrutide', 'Extended'],
    image: `${IMG}/retatrutide-20mg.png`,
    shopUrl: shopLink('retatrutide-20mg'),
    shortDescription: 'Research-grade Retatrutide 20mg. 99.0% purity. Extended supply for the triple GIP/GLP-1/Glucagon agonist.',
    seoTitle: 'Retatrutide 20mg | Extended Triple Agonist Weight Loss Supply',
    deepDiveTitle: 'Retatrutide 20mg: Extended Protocol',
    researchRating: 4, popularityRank: 103,
    fullDescription: `20mg Retatrutide vial — extended supply for those in the maintenance phase of the triple agonist protocol. At 8mg/week, covers ~2.5 weeks; at 4mg/week, covers ~5 weeks.`,
    benefits: ['Extended supply for triple agonist maintenance', 'Better per-mg value than 15mg vial', 'Same Phase 2 NEJM compound'],
    protocol: `Same as Retatrutide 10mg. 20mg covers 2–5 weeks at standard maintenance doses.`,
    synergies: ['retatrutide-10mg', 'retatrutide-15mg'],
    highlights: [{ title: 'Extended Supply', body: '20mg provides 2–5 weeks of Retatrutide maintenance dosing.' }],
  },

  {
    slug: 'retatrutide-30mg',
    name: 'Retatrutide 30mg',
    tagline: 'Maximum retatrutide supply — best value for extended triple agonist protocols.',
    price: 329.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Triple Agonist', 'GLP-3', 'Retatrutide', 'Best Value'],
    image: `${IMG}/retatrutide-30mg.png`,
    shopUrl: shopLink('retatrutide-30mg'),
    shortDescription: 'Research-grade Retatrutide 30mg. 99.0% purity. Maximum supply for committed triple agonist weight loss protocols.',
    seoTitle: 'Retatrutide 30mg | Best Value Triple Agonist Maximum Supply',
    deepDiveTitle: 'Retatrutide 30mg: Maximum Protocol',
    researchRating: 4, popularityRank: 104,
    fullDescription: `30mg Retatrutide — the best per-mg value for committed triple agonist protocols. At 4mg/week, covers ~7.5 weeks; at 8mg/week, covers ~3.75 weeks.`,
    benefits: ['Best per-mg value for Retatrutide', '7+ weeks at 4mg/week maintenance', 'Ideal for committed long-term triple agonist protocols'],
    protocol: `Same as Retatrutide 10mg. 30mg covers 3–7+ weeks at typical maintenance doses.`,
    synergies: ['ipamorelin-cjc'],
    highlights: [{ title: 'Best Value', body: 'Lowest per-mg Retatrutide price — designed for extended committed protocols.' }],
  },

  {
    slug: 'cagrilintide-10mg',
    name: 'Cagrilintide 10mg',
    tagline: 'Long-acting amylin analog — satiety and weight loss through amylin receptor pathway.',
    price: 169.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Amylin', 'GLP-1', 'Cagrilintide', 'Satiety'],
    image: `${IMG}/cagrilintide-10mg.png`,
    shopUrl: shopLink('cagrilintide-10mg'),
    shortDescription: 'Research-grade Cagrilintide 10mg. 98.8% purity. Long-acting amylin analog for satiety and weight loss independent of GLP-1.',
    seoTitle: 'Cagrilintide 10mg | Long-Acting Amylin Analog for Weight Loss',
    deepDiveTitle: 'Cagrilintide: Amylin Pathway Weight Loss Protocol',
    researchRating: 4, popularityRank: 105,
    fullDescription: `Cagrilintide is a long-acting analog of amylin — a pancreatic peptide hormone co-secreted with insulin that signals satiety via the area postrema. With a ~7-day half-life (once-weekly dosing), cagrilintide reduces food intake through a distinct pathway from GLP-1 agonists, making it highly complementary to semaglutide or tirzepatide.`,
    benefits: [
      'Amylin receptor pathway — distinct from GLP-1 satiety mechanism',
      'Once-weekly dosing due to ~7-day half-life',
      'Additive to GLP-1 agonists for enhanced weight loss',
      'Suppresses post-meal glucagon — reduces blood glucose spikes',
    ],
    protocol: `- Dose: 0.3–2.4mg once weekly subcutaneous (escalate slowly)
- Can be combined with Semaglutide or Tirzepatide`,
    synergies: ['cagri-sema', 'tirzepatide-15mg'],
    highlights: [{ title: 'Amylin Pathway', body: 'Targets amylin receptors — completely distinct from GLP-1, making combination additive.' }],
  },

  {
    slug: 'cagrilintide-5mg',
    name: 'Cagrilintide 5mg',
    tagline: 'Starter Cagrilintide — amylin analog entry supply.',
    price: 99.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Amylin', 'Cagrilintide'],
    image: `${IMG}/cagrilintide-5mg.png`,
    shopUrl: shopLink('cagrilintide-5mg'),
    shortDescription: 'Research-grade Cagrilintide 5mg. 98.8% purity. Starter supply for amylin analog weight loss protocols.',
    seoTitle: 'Cagrilintide 5mg | Starter Amylin Analog Supply',
    deepDiveTitle: 'Cagrilintide 5mg: Starter Protocol',
    researchRating: 4, popularityRank: 106,
    fullDescription: `5mg starter vial of Cagrilintide amylin analog. Covers the initial dose-escalation phase before upgrading to the 10mg vial.`,
    benefits: ['Starter amylin analog supply', 'Entry price for Cagrilintide protocols', '98.8% purity with COA'],
    protocol: `Same as Cagrilintide 10mg. 5mg covers initial escalation at 0.3–0.6mg/week.`,
    synergies: ['cagrilintide-10mg', 'cagri-sema'],
    highlights: [{ title: 'Entry Supply', body: '5mg provides initial Cagrilintide escalation supply.' }],
  },

  {
    slug: 'survodutide-10mg',
    name: 'Survodutide 10mg',
    tagline: 'Dual GLP-1/Glucagon agonist — next-generation metabolic weight loss peptide.',
    price: 159.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GLP-1', 'Glucagon', 'Survodutide', 'Dual Agonist'],
    image: `${IMG}/survodutide-10mg.png`,
    shopUrl: shopLink('survodutide-10mg'),
    shortDescription: 'Research-grade Survodutide 10mg. 98.8% purity. Dual GLP-1/Glucagon receptor agonist in Phase 3 trials for obesity.',
    seoTitle: 'Survodutide 10mg | Dual GLP-1/Glucagon Agonist Weight Loss',
    deepDiveTitle: 'Survodutide: Dual Agonist Weight Loss Protocol',
    researchRating: 4, popularityRank: 107,
    fullDescription: `Survodutide is a dual GLP-1/Glucagon receptor agonist (Boehringer Ingelheim) currently in Phase 3 trials. In Phase 2, it demonstrated approximately 19% weight loss at 48 weeks — comparable to tirzepatide. The glucagon component drives hepatic fat reduction and energy expenditure, while GLP-1 provides appetite control and glucose regulation.`,
    benefits: [
      'Dual GLP-1/Glucagon mechanism — two fat-loss pathways',
      '~19% weight loss in Phase 2 trials',
      'Strong hepatic fat reduction from glucagon component',
      'Phase 3 trials ongoing',
    ],
    protocol: `Once-weekly subcutaneous injection with standard GLP-class dose escalation.`,
    synergies: ['tirzepatide-15mg', 'ipamorelin-cjc'],
    highlights: [
      { title: '~19% Weight Loss', body: 'Phase 2 data showing ~19% body weight reduction — comparable to tirzepatide.' },
      { title: 'Dual Agonist', body: 'GLP-1 + Glucagon receptor activation — two independent fat-loss mechanisms.' },
    ],
  },

  {
    slug: 'mazdutide-6mg',
    name: 'Mazdutide 6mg',
    tagline: 'GLP-1/Glucagon dual agonist — weight loss and MASH liver disease treatment.',
    price: 129.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GLP-1', 'Glucagon', 'Mazdutide', 'Liver'],
    image: `${IMG}/mazdutide-6mg.png`,
    shopUrl: shopLink('mazdutide-6mg'),
    shortDescription: 'Research-grade Mazdutide 6mg. 98.7% purity. GLP-1/Glucagon dual agonist with strong liver fat reduction data.',
    seoTitle: 'Mazdutide 6mg | GLP-1/Glucagon Dual Agonist for Weight Loss and MASH',
    deepDiveTitle: 'Mazdutide: Dual Agonist Protocol',
    researchRating: 4, popularityRank: 108,
    fullDescription: `Mazdutide (IBI362, OXM3) is a GLP-1/Glucagon dual agonist being developed for obesity and MASH (metabolic-associated steatohepatitis / liver disease). It shows strong hepatic fat reduction data alongside significant weight loss in Phase 2 trials.`,
    benefits: ['Dual GLP-1/Glucagon agonism for weight loss', 'Strong hepatic fat reduction — relevant for MASH', 'Phase 2 weight loss data'],
    protocol: `Once-weekly subcutaneous injection with standard escalation.`,
    synergies: ['tirzepatide-15mg'],
    highlights: [{ title: 'Liver Fat', body: 'Mazdutide shows particularly strong hepatic fat reduction alongside weight loss.' }],
  },

  {
    slug: 'aod9604-10mg',
    name: 'AOD9604 10mg',
    tagline: 'HGH fragment 176-191 — targeted fat metabolism without anabolic effects.',
    price: 119.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'HGH Fragment', 'AOD9604', 'Metabolic', 'Lipolysis'],
    image: `${IMG}/aod9604-10mg.png`,
    shopUrl: shopLink('aod9604-10mg'),
    shortDescription: 'Research-grade AOD9604 10mg. 99.0% purity. HGH fragment 176-191 — stimulates lipolysis without IGF-1-mediated anabolic effects.',
    seoTitle: 'AOD9604 10mg | HGH Fragment for Targeted Fat Loss',
    deepDiveTitle: 'AOD9604: HGH Fragment Fat Loss Protocol',
    researchRating: 4, popularityRank: 109,
    fullDescription: `AOD9604 is the C-terminal fragment of human growth hormone (residues 176–191) that contains the fat-metabolizing properties of HGH without the anabolic, IGF-1-stimulating effects. It stimulates lipolysis (fat breakdown) and inhibits lipogenesis (fat storage) through a mechanism resembling natural GH fat metabolism — without the side effects of full-length HGH.`,
    benefits: [
      'Stimulates lipolysis without IGF-1 or anabolic effects',
      'No impact on blood glucose or insulin resistance',
      'Targets fat metabolism specifically from the HGH sequence',
      'FDA granted GRAS status — strong safety profile',
    ],
    protocol: `- Dose: 300–500mcg daily subcutaneous
- Timing: Morning fasted for maximum lipolytic effect
- Duration: 12–24 weeks`,
    synergies: ['ipamorelin-cjc', 'tirzepatide-15mg'],
    highlights: [
      { title: 'GRAS Status', body: 'FDA granted AOD9604 Generally Recognized as Safe status — extensive safety evaluation.' },
      { title: 'No Anabolic Effects', body: 'Pure lipolytic mechanism — no IGF-1 stimulation, blood glucose impact, or receptor downregulation.' },
    ],
  },

  {
    slug: 'aod9604-5mg',
    name: 'AOD9604 5mg',
    tagline: 'HGH fragment 176-191 — mid-supply fat loss peptide.',
    price: 69.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'HGH Fragment', 'AOD9604', 'Metabolic'],
    image: `${IMG}/aod9604-5mg.png`,
    shopUrl: shopLink('aod9604-5mg'),
    shortDescription: 'Research-grade AOD9604 5mg. 99.0% purity. Mid-supply HGH fragment for fat loss protocols.',
    seoTitle: 'AOD9604 5mg | HGH Fragment Fat Loss Mid Supply',
    deepDiveTitle: 'AOD9604 5mg: Protocol',
    researchRating: 4, popularityRank: 110,
    fullDescription: `5mg AOD9604 vial — mid-range supply for 10–17 day protocols at standard 300–500mcg/day dosing.`,
    benefits: ['Mid-range supply: 10–17 days at standard doses', 'Same HGH fragment as 10mg vial', '99.0% purity with COA'],
    protocol: `Same as AOD9604 10mg.`,
    synergies: ['aod9604-10mg', 'ipamorelin-cjc'],
    highlights: [{ title: 'Mid Supply', body: '5mg covers 10–17 days at standard AOD9604 doses.' }],
  },

  {
    slug: 'aod9604-2mg',
    name: 'AOD9604 2mg',
    tagline: 'Starter AOD9604 — entry-level HGH fragment supply.',
    price: 39.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'HGH Fragment', 'AOD9604'],
    image: `${IMG}/aod9604-2mg.png`,
    shopUrl: shopLink('aod9604-2mg'),
    shortDescription: 'Research-grade AOD9604 2mg. 99.0% purity. Entry supply for HGH fragment fat loss protocols.',
    seoTitle: 'AOD9604 2mg | Starter HGH Fragment Vial',
    deepDiveTitle: 'AOD9604 2mg: Starter Protocol',
    researchRating: 4, popularityRank: 111,
    fullDescription: `2mg starter vial of AOD9604 HGH fragment — minimal supply for protocol testing.`,
    benefits: ['Entry price for AOD9604 protocols', '4–6 day supply at 300–500mcg/day', '99.0% purity'],
    protocol: `Same as AOD9604 10mg.`,
    synergies: ['aod9604-5mg'],
    highlights: [{ title: 'Trial Size', body: 'Minimal investment to test AOD9604 before committing to larger vials.' }],
  },

  {
    slug: 'aicar-50mg',
    name: 'AICAR 50mg',
    tagline: 'AMPK activator — exercise mimetic for endurance and metabolic health.',
    price: 69.99,
    category: 'Body Composition',
    tags: ['AMPK', 'Exercise Mimetic', 'Fat Loss', 'Endurance', 'AICAR'],
    image: `${IMG}/aicar-50mg.png`,
    shopUrl: shopLink('aicar-50mg'),
    shortDescription: 'Research-grade AICAR 50mg. 99.1% purity. AMPK activator that mimics endurance training adaptations — improves metabolic flexibility and endurance capacity.',
    seoTitle: 'AICAR 50mg | AMPK Activator Exercise Mimetic',
    deepDiveTitle: 'AICAR: AMPK Activation Protocol',
    researchRating: 4, popularityRank: 112,
    fullDescription: `AICAR (5-Aminoimidazole-4-carboxamide ribonucleotide) is an AMPK activator that mimics cellular energy depletion, triggering the same metabolic adaptations as endurance exercise without physical activity. It improves fat oxidation, mitochondrial biogenesis, and exercise capacity. Famous for the "couch potato pill" studies where sedentary mice improved endurance by 44% without exercise.`,
    benefits: [
      'AMPK activation — mimics endurance training metabolic adaptations',
      '44% endurance improvement in sedentary mice without exercise',
      'Improves fat oxidation and metabolic flexibility',
      'Mitochondrial biogenesis promotion',
    ],
    protocol: `- Dose: 500mg/kg equivalent in human terms (~500mg for 70kg individual)
- Frequency: Daily or 5 days/week
- Note: GW501516 synergy studied but GW is a known carcinogen — avoid`,
    synergies: ['mots-c-10mg', 'nad-plus'],
    highlights: [{ title: '+44% Endurance', body: 'Sedentary mice improved endurance by 44% with AICAR — without any exercise training.' }],
  },

  {
    slug: '5-amino-1mq-50mg',
    name: '5-Amino-1MQ 50mg',
    tagline: 'NNMT inhibitor — activate "skinny gene" for fat loss and metabolic health.',
    price: 79.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'NNMT', 'Metabolic', 'NAD+', '5-Amino-1MQ'],
    image: `${IMG}/5-amino-1mq-50mg.png`,
    shopUrl: shopLink('5-amino-1mq-50mg'),
    shortDescription: 'Research-grade 5-Amino-1MQ 50mg. 98.9% purity. NNMT inhibitor that activates the "skinny gene" pathway — increases NAD+ and drives fat cell breakdown.',
    seoTitle: '5-Amino-1MQ 50mg | NNMT Inhibitor for Fat Loss',
    deepDiveTitle: '5-Amino-1MQ: NNMT Inhibition Fat Loss Protocol',
    researchRating: 3, popularityRank: 113,
    fullDescription: `5-Amino-1MQ is a small molecule inhibitor of NNMT (Nicotinamide N-methyltransferase) — an enzyme highly expressed in obese adipose tissue that consumes NAD+ and methyl groups. Inhibiting NNMT increases cellular NAD+ levels, activates SIRT1, and reduces fat cell size. In animal studies, 5-Amino-1MQ prevented diet-induced obesity and caused significant fat loss without caloric restriction.`,
    benefits: [
      'Inhibits NNMT — increases cellular NAD+ in adipose tissue',
      'Activates SIRT1 through elevated NAD+',
      'Reduces adipocyte size and fat mass in animal studies',
      'Prevented diet-induced obesity without caloric restriction in mice',
    ],
    protocol: `- Dose: 50mg daily oral or subcutaneous
- Frequency: Daily`,
    synergies: ['nad-plus', 'ipamorelin-cjc'],
    highlights: [{ title: 'NNMT Inhibition', body: '5-Amino-1MQ blocks the enzyme that depletes NAD+ in fat tissue — activating fat-burning pathways.' }],
  },

  {
    slug: '5-amino-1mq-50mg-caps',
    name: '5-Amino-1MQ 50mg x60 Capsules',
    tagline: 'NNMT inhibitor in convenient capsule form — oral bioavailability optimized.',
    price: 119.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'NNMT', 'Metabolic', 'Oral', 'Capsules'],
    image: `${IMG}/5-amino-1mq-50mg-x60-capsules.png`,
    shopUrl: shopLink('5-amino-1mq-50mg-x60-capsules'),
    shortDescription: 'Research-grade 5-Amino-1MQ 50mg x60 capsules. 98.9% purity. Two-month oral supply of the NNMT inhibitor fat loss compound.',
    seoTitle: '5-Amino-1MQ 50mg Capsules | Oral NNMT Inhibitor 2-Month Supply',
    deepDiveTitle: '5-Amino-1MQ Capsules: Oral Fat Loss Protocol',
    researchRating: 3, popularityRank: 114,
    fullDescription: `60 capsules of 5-Amino-1MQ (50mg each) — 2-month oral supply at 50mg/day. Capsule format for convenient daily oral administration without reconstitution.`,
    benefits: ['60-day supply at 50mg/day', 'Capsule format — no injection required', 'Same NNMT-inhibiting compound'],
    protocol: `- Dose: 1 capsule (50mg) daily with food
- Duration: 60-day supply per bottle`,
    synergies: ['nad-plus', '5-amino-1mq-50mg'],
    highlights: [{ title: 'Oral Capsules', body: '60 pre-dosed 50mg capsules — convenient daily oral administration.' }],
  },

  {
    slug: '5-amino-1mq-5mg',
    name: '5-Amino-1MQ 5mg',
    tagline: 'Low-dose 5-Amino-1MQ — micro-dosing NNMT inhibitor protocol.',
    price: 19.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'NNMT', 'Micro-Dose'],
    image: `${IMG}/5-amino-1mq-5mg.png`,
    shopUrl: shopLink('5-amino-1mq-5mg'),
    shortDescription: 'Research-grade 5-Amino-1MQ 5mg. 98.9% purity. Low-dose entry vial for NNMT inhibitor protocols.',
    seoTitle: '5-Amino-1MQ 5mg | Entry NNMT Inhibitor Vial',
    deepDiveTitle: '5-Amino-1MQ 5mg: Micro-Dose Protocol',
    researchRating: 3, popularityRank: 115,
    fullDescription: `5mg entry vial of 5-Amino-1MQ — minimal supply for initial NNMT inhibitor testing at low doses.`,
    benefits: ['Minimal investment for initial testing', 'Entry-level NNMT inhibitor supply'],
    protocol: `Low-dose trial: 5mg over 1 week. See 5-Amino-1MQ 50mg for full protocol.`,
    synergies: ['5-amino-1mq-50mg'],
    highlights: [{ title: 'Entry Price', body: 'Lowest cost entry point for 5-Amino-1MQ NNMT inhibitor testing.' }],
  },

  {
    slug: 'adipotide-ftpp-10mg',
    name: 'Adipotide (FTPP) 10mg',
    tagline: 'Targeted fat cell apoptosis — a novel peptide pro-apoptotic approach to fat loss.',
    price: 149.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'Apoptosis', 'Adipotide', 'FTPP', 'Obesity'],
    image: `${IMG}/adipotide-ftpp-10mg.png`,
    shopUrl: shopLink('adipotide-ftpp-10mg'),
    shortDescription: 'Research-grade Adipotide (FTPP) 10mg. 98.7% purity. Chimeric peptide that selectively induces apoptosis in the vasculature of adipose tissue.',
    seoTitle: 'Adipotide FTPP 10mg | Fat Cell Apoptosis Peptide',
    deepDiveTitle: 'Adipotide: Fat Vasculature Apoptosis Protocol',
    researchRating: 3, popularityRank: 116,
    fullDescription: `Adipotide (FTPP) is a chimeric peptide designed to target and destroy the blood vessels that supply adipose tissue. It binds to prohibitin on the surface of fat cell vasculature, triggering apoptosis in those endothelial cells and depriving fat deposits of their blood supply. In primate studies, monkeys lost ~11% of body weight in 4 weeks without dietary changes.`,
    benefits: [
      'Selectively targets adipose tissue vasculature',
      '~11% weight loss in 4 weeks in primate studies',
      'Novel mechanism — not a GLP-1 or GH pathway',
      'Potentially complements GLP-1 agonists through distinct mechanism',
    ],
    protocol: `Experimental compound — dosing based on animal studies. Use with caution; limited human safety data.`,
    synergies: ['tirzepatide-15mg'],
    highlights: [{ title: 'Novel Mechanism', body: 'Destroys adipose vasculature — a fundamentally different mechanism from all other fat loss peptides.' }],
  },

  {
    slug: 'adipotide-ftpp-5mg',
    name: 'Adipotide (FTPP) 5mg',
    tagline: 'Starter Adipotide — entry supply for fat vasculature apoptosis protocols.',
    price: 89.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'Apoptosis', 'Adipotide'],
    image: `${IMG}/adipotide-ftpp-5mg.png`,
    shopUrl: shopLink('adipotide-ftpp-5mg'),
    shortDescription: 'Research-grade Adipotide (FTPP) 5mg. 98.7% purity. Starter vial for fat vasculature apoptosis protocols.',
    seoTitle: 'Adipotide FTPP 5mg | Starter Fat Apoptosis Vial',
    deepDiveTitle: 'Adipotide 5mg: Starter Protocol',
    researchRating: 3, popularityRank: 117,
    fullDescription: `5mg starter vial of Adipotide (FTPP) — entry supply for this novel fat loss peptide.`,
    benefits: ['Starter supply for Adipotide protocols', 'Same chimeric peptide as 10mg vial'],
    protocol: `See Adipotide 10mg for full protocol.`,
    synergies: ['adipotide-ftpp-10mg'],
    highlights: [{ title: 'Entry Supply', body: 'Starter 5mg vial for Adipotide fat vasculature protocols.' }],
  },

  {
    slug: 'bam-15-30mgl-30ml',
    name: 'BAM-15 30mg/mL 30mL',
    tagline: 'Mitochondrial uncoupler — accelerate metabolism without hormonal effects.',
    price: 89.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'Mitochondria', 'Uncoupler', 'BAM-15', 'Metabolic'],
    image: `${IMG}/bam-15-30mg-ml-30ml.png`,
    shopUrl: shopLink('bam-15-30mg-ml-30ml'),
    shortDescription: 'Research-grade BAM-15 30mg/mL 30mL. 98.5% purity. Mitochondrial proton uncoupler that drives fat oxidation without thermogenic side effects.',
    seoTitle: 'BAM-15 30mg/mL | Mitochondrial Uncoupler for Fat Loss',
    deepDiveTitle: 'BAM-15: Mitochondrial Uncoupling Fat Loss Protocol',
    researchRating: 3, popularityRank: 118,
    fullDescription: `BAM-15 is a mitochondrial proton uncoupler — it dissipates the proton gradient across the inner mitochondrial membrane, forcing cells to burn more fuel to maintain ATP production. Unlike DNP (the classic uncoupler), BAM-15 does not cause dangerous hyperthermia, making it far safer. In obese mouse studies, BAM-15 caused significant fat loss while improving insulin sensitivity.`,
    benefits: [
      'Mitochondrial uncoupling drives fat oxidation without hormonal interference',
      'No dangerous hyperthermia unlike classic uncouplers (DNP)',
      'Improves insulin sensitivity alongside fat loss',
      'Works independent of diet or exercise',
    ],
    protocol: `Liquid injectable format. Dosing based on animal study equivalents — caution advised.`,
    synergies: ['aicar-50mg', 'mots-c-10mg'],
    highlights: [{ title: 'Safe Uncoupler', body: 'BAM-15 produces DNP-like metabolic acceleration without the dangerous temperature elevation.' }],
  },

  {
    slug: 'bam-15-50mgl-30ml',
    name: 'BAM-15 50mg/mL 30mL',
    tagline: 'High-concentration BAM-15 — more potent uncoupling for fat loss protocols.',
    price: 129.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'Mitochondria', 'Uncoupler', 'BAM-15'],
    image: `${IMG}/bam-15-50mg-ml-30ml.png`,
    shopUrl: shopLink('bam-15-50mg-ml-30ml'),
    shortDescription: 'Research-grade BAM-15 50mg/mL 30mL. 98.5% purity. Higher concentration BAM-15 solution for advanced uncoupling protocols.',
    seoTitle: 'BAM-15 50mg/mL | High-Concentration Mitochondrial Uncoupler',
    deepDiveTitle: 'BAM-15 50mg/mL: Advanced Uncoupling Protocol',
    researchRating: 3, popularityRank: 119,
    fullDescription: `50mg/mL concentration of BAM-15 in 30mL solution — higher concentration allows smaller injection volumes for equivalent doses.`,
    benefits: ['Higher concentration — smaller injection volumes', 'Same BAM-15 uncoupling compound', 'Extended supply vs. 30mg/mL version'],
    protocol: `Same as BAM-15 30mg/mL — adjust volume for equivalent dose.`,
    synergies: ['aicar-50mg'],
    highlights: [{ title: 'Higher Concentration', body: '50mg/mL allows smaller injection volumes per dose.' }],
  },

  {
    slug: 'o-304-capsules',
    name: 'O-304 (ATX-304) 100mg x60 Capsules',
    tagline: 'Pan-AMPK activator — next-generation exercise mimetic in capsule form.',
    price: 119.99,
    category: 'Body Composition',
    tags: ['AMPK', 'Exercise Mimetic', 'Fat Loss', 'O-304', 'Oral'],
    image: `${IMG}/o-304-atx-304-100mg-x-60-capsules.png`,
    shopUrl: shopLink('o-304-atx-304-100mg-x-60-capsules'),
    shortDescription: 'Research-grade O-304 (ATX-304) 100mg x60 capsules. Pan-AMPK activator with favorable pharmacokinetics for metabolic exercise mimicry.',
    seoTitle: 'O-304 (ATX-304) 100mg Capsules | Pan-AMPK Activator',
    deepDiveTitle: 'O-304: Pan-AMPK Activation Protocol',
    researchRating: 3, popularityRank: 120,
    fullDescription: `O-304 (development name ATX-304) is a pan-AMPK activator — activates all AMPK isoforms to produce comprehensive exercise-mimicking metabolic adaptations. Phase 2 data in type 2 diabetes showed improvements in insulin sensitivity and metabolic markers.`,
    benefits: ['Pan-AMPK activation — all isoforms', 'Phase 2 data in type 2 diabetes', 'Oral capsule — no injection required', '60-day supply at 100mg/day'],
    protocol: `- Dose: 100mg daily oral with food
- Duration: 60-day supply per bottle`,
    synergies: ['aicar-50mg', 'mots-c-10mg'],
    highlights: [{ title: 'Pan-AMPK', body: 'Activates all AMPK isoforms for comprehensive exercise-mimicking metabolic adaptations.' }],
  },

  {
    slug: 'slu-pp-332-100mg-120caps',
    name: 'SLU-PP-332 100mg x120 Capsules',
    tagline: 'ERR agonist exercise mimetic — endurance without exercise.',
    price: 159.99,
    category: 'Body Composition',
    tags: ['Exercise Mimetic', 'ERR', 'Endurance', 'Fat Loss', 'SLU-PP-332'],
    image: `${IMG}/slu-pp-332-100mg-x-120-capsules.png`,
    shopUrl: shopLink('slu-pp-332-100mg-x-120-capsules'),
    shortDescription: 'Research-grade SLU-PP-332 100mg x120 capsules. ERRα/γ agonist for exercise mimicry and metabolic improvement.',
    seoTitle: 'SLU-PP-332 100mg x120 Capsules | ERR Agonist Exercise Mimetic',
    deepDiveTitle: 'SLU-PP-332: ERR Agonist Protocol',
    researchRating: 3, popularityRank: 121,
    fullDescription: `SLU-PP-332 is an ERRα (Estrogen-Related Receptor alpha) and ERRγ agonist that activates mitochondrial biogenesis and oxidative metabolism in skeletal muscle — producing endurance exercise-like adaptations. In animal studies, it dramatically improved running capacity without training.`,
    benefits: ['ERRα/γ activation — mitochondrial biogenesis in muscle', 'Improved endurance capacity without training in animals', '4-month supply at 100mg/day', 'Oral capsule format'],
    protocol: `- Dose: 100mg daily oral
- Duration: 120-day supply (4 months)`,
    synergies: ['aicar-50mg', 'mots-c-10mg'],
    highlights: [{ title: 'ERR Agonist', body: 'SLU-PP-332 activates ERRα/γ to produce mitochondrial and endurance adaptations without exercise.' }],
  },

  {
    slug: 'slu-pp-332-100mg-30caps',
    name: 'SLU-PP-332 100mg x30 Capsules',
    tagline: 'ERR agonist exercise mimetic — one-month trial supply.',
    price: 59.99,
    category: 'Body Composition',
    tags: ['Exercise Mimetic', 'ERR', 'Endurance', 'Fat Loss'],
    image: `${IMG}/slu-pp-332-100mg-x-30-capsules.png`,
    shopUrl: shopLink('slu-pp-332-100mg-x-30-capsules'),
    shortDescription: 'Research-grade SLU-PP-332 100mg x30 capsules. One-month supply of the ERR agonist exercise mimetic.',
    seoTitle: 'SLU-PP-332 100mg x30 Capsules | ERR Agonist One-Month Supply',
    deepDiveTitle: 'SLU-PP-332 30-Day: Trial Protocol',
    researchRating: 3, popularityRank: 122,
    fullDescription: `30-day trial supply of SLU-PP-332 at 100mg/day — ideal for initial protocol testing.`,
    benefits: ['30-day entry supply', 'Same ERR agonist as 120-cap version', 'One-month trial at 100mg/day'],
    protocol: `Same as SLU-PP-332 120-cap version.`,
    synergies: ['aicar-50mg'],
    highlights: [{ title: '30-Day Trial', body: 'One-month entry supply for SLU-PP-332 ERR agonist protocols.' }],
  },

  {
    slug: 'slu-pp-332-1mg-30caps',
    name: 'SLU-PP-332 1mg x30 Capsules',
    tagline: 'Low-dose SLU-PP-332 capsules for micro-dosing protocols.',
    price: 39.99,
    category: 'Body Composition',
    tags: ['Exercise Mimetic', 'ERR', 'Micro-Dose'],
    image: `${IMG}/slu-pp-332-1mg-x-30-capsules.png`,
    shopUrl: shopLink('slu-pp-332-1mg-x-30-capsules'),
    shortDescription: 'Research-grade SLU-PP-332 1mg x30 capsules. Low-dose format for micro-dosing ERR agonist protocols.',
    seoTitle: 'SLU-PP-332 1mg x30 | Low-Dose ERR Agonist Capsules',
    deepDiveTitle: 'SLU-PP-332 1mg: Micro-Dose Protocol',
    researchRating: 3, popularityRank: 123,
    fullDescription: `Low-dose 1mg x30 capsules of SLU-PP-332 for micro-dosing protocols.`,
    benefits: ['Micro-dose format', 'Entry-price access to SLU-PP-332'],
    protocol: `Low-dose micro-dosing protocol.`,
    synergies: ['slu-pp-332-100mg-30caps'],
    highlights: [{ title: 'Micro-Dose', body: '1mg capsules for low-dose ERR agonist protocol exploration.' }],
  },

  {
    slug: 'slu-pp-332-1mgl-30ml',
    name: 'SLU-PP-332 1mg/mL 30mL',
    tagline: 'Liquid SLU-PP-332 — precise low-dose dosing via injection.',
    price: 79.99,
    category: 'Body Composition',
    tags: ['Exercise Mimetic', 'ERR', 'Injectable'],
    image: `${IMG}/slu-pp-332-1mg-ml-30ml.png`,
    shopUrl: shopLink('slu-pp-332-1mg-ml-30ml'),
    shortDescription: 'Research-grade SLU-PP-332 1mg/mL 30mL. Liquid injectable format for precise ERR agonist dosing.',
    seoTitle: 'SLU-PP-332 1mg/mL 30mL | Injectable ERR Agonist',
    deepDiveTitle: 'SLU-PP-332 1mg/mL: Injectable Protocol',
    researchRating: 3, popularityRank: 124,
    fullDescription: `Injectable liquid SLU-PP-332 at 1mg/mL concentration — 30mL total (30mg). Allows precise dose titration for injectable ERR agonist protocols.`,
    benefits: ['Injectable format for precise dosing', '30mg total supply', 'Subcutaneous administration'],
    protocol: `Subcutaneous injection of desired volume.`,
    synergies: ['slu-pp-332-5mgl-30ml'],
    highlights: [{ title: 'Injectable', body: '1mg/mL liquid for injectable SLU-PP-332 protocols.' }],
  },

  {
    slug: 'slu-pp-332-5mgl-30ml',
    name: 'SLU-PP-332 5mg/mL 30mL',
    tagline: 'Higher concentration liquid SLU-PP-332 for injectable protocols.',
    price: 99.99,
    category: 'Body Composition',
    tags: ['Exercise Mimetic', 'ERR', 'Injectable'],
    image: `${IMG}/slu-pp-332-5mg-ml-30ml.png`,
    shopUrl: shopLink('slu-pp-332-5mg-ml-30ml'),
    shortDescription: 'Research-grade SLU-PP-332 5mg/mL 30mL. Higher concentration injectable ERR agonist solution.',
    seoTitle: 'SLU-PP-332 5mg/mL 30mL | Injectable ERR Agonist',
    deepDiveTitle: 'SLU-PP-332 5mg/mL: Injectable Protocol',
    researchRating: 3, popularityRank: 125,
    fullDescription: `5mg/mL concentration of SLU-PP-332 in 30mL — 150mg total. Higher concentration allows smaller injection volumes.`,
    benefits: ['Higher concentration — smaller injection volumes', '150mg total supply', 'Subcutaneous administration'],
    protocol: `Subcutaneous injection of desired volume for ERR agonist protocols.`,
    synergies: ['aicar-50mg'],
    highlights: [{ title: 'High Concentration', body: '5mg/mL provides 150mg total SLU-PP-332 with convenient small injection volumes.' }],
  },

  {
    slug: 'tesofensine-capsules',
    name: 'Tesofensine 500mcg x30 Capsules',
    tagline: 'Triple monoamine reuptake inhibitor — powerful appetite suppression for weight loss.',
    price: 99.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Appetite', 'Norepinephrine', 'Dopamine', 'Tesofensine'],
    image: `${IMG}/tesofensine-500mcg-x-30-capsules.png`,
    shopUrl: shopLink('tesofensine-500mcg-x-30-capsules'),
    shortDescription: 'Research-grade Tesofensine 500mcg x30 capsules. Triple monoamine reuptake inhibitor for powerful appetite suppression.',
    seoTitle: 'Tesofensine 500mcg Capsules | Triple Monoamine Reuptake Inhibitor',
    deepDiveTitle: 'Tesofensine: Triple Monoamine Appetite Suppression Protocol',
    researchRating: 4, popularityRank: 126,
    fullDescription: `Tesofensine is a triple reuptake inhibitor of serotonin, dopamine, and norepinephrine — originally developed for Alzheimer's and Parkinson's disease, where researchers noticed significant weight loss as a side effect. Phase 2 trials showed 12.8% weight loss at 0.5mg/day over 24 weeks — among the most potent appetite suppressants studied.`,
    benefits: [
      '12.8% weight loss in Phase 2 at 0.5mg/day over 24 weeks',
      'Triple monoamine reuptake inhibition — powerful appetite reduction',
      'Improves cognitive function as secondary benefit',
      'Once-daily oral dosing',
    ],
    protocol: `- Dose: 0.25–0.5mg once daily oral
- Duration: 12–24 weeks
- Note: CNS stimulant — avoid late-day dosing`,
    synergies: ['semaglutide-6mg', 'tirzepatide-15mg'],
    highlights: [{ title: '12.8% Weight Loss', body: 'Phase 2 data: 12.8% body weight reduction at 0.5mg/day — one of the most effective oral weight loss agents studied.' }],
  },

  {
    slug: 'tesofensine-tablets',
    name: 'Tesofensine 500mcg x30 Tablets',
    tagline: 'Tesofensine tablets — triple monoamine reuptake inhibitor for weight loss.',
    price: 99.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Appetite', 'Tesofensine', 'Tablet'],
    image: `${IMG}/tesofensine-500mcg-x-30-tablets.png`,
    shopUrl: shopLink('tesofensine-500mcg-x-30-tablets'),
    shortDescription: 'Research-grade Tesofensine 500mcg x30 tablets. Same compound as capsule format — tablet formulation.',
    seoTitle: 'Tesofensine 500mcg Tablets | Triple Monoamine Weight Loss',
    deepDiveTitle: 'Tesofensine Tablets: Protocol',
    researchRating: 4, popularityRank: 127,
    fullDescription: `Tablet formulation of Tesofensine 500mcg — same triple monoamine reuptake inhibitor compound as the capsule version.`,
    benefits: ['Same Tesofensine compound in tablet form', '30-day supply at 0.5mg/day'],
    protocol: `Same as Tesofensine capsules.`,
    synergies: ['semaglutide-6mg'],
    highlights: [{ title: 'Tablet Format', body: 'Tablet formulation of the same powerful appetite suppressant.' }],
  },

  {
    slug: 'l-carnitine-400mgl',
    name: 'L-Carnitine 400mg/mL',
    tagline: 'Injectable L-Carnitine — mitochondrial fat transport for enhanced fat oxidation.',
    price: 39.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'Mitochondria', 'L-Carnitine', 'Energy'],
    image: `${IMG}/l-carnitine-400mg-ml.png`,
    shopUrl: shopLink('l-carnitine-400mg-ml'),
    shortDescription: 'Research-grade L-Carnitine 400mg/mL injectable. Essential mitochondrial cofactor for fatty acid transport and fat oxidation.',
    seoTitle: 'L-Carnitine 400mg/mL | Injectable Fat Oxidation Support',
    deepDiveTitle: 'L-Carnitine Injectable: Fat Oxidation Protocol',
    researchRating: 4, popularityRank: 128,
    fullDescription: `L-Carnitine is an amino acid derivative essential for transporting long-chain fatty acids across the inner mitochondrial membrane for beta-oxidation. Injectable L-Carnitine bypasses gut absorption limitations, providing direct availability for fat metabolism — particularly useful during fasted training.`,
    benefits: ['Essential for mitochondrial fatty acid transport', 'Injectable bypasses gut absorption — higher bioavailability', 'Supports fat oxidation during fasted training', 'Improves exercise recovery and reduces muscle damage'],
    protocol: `- Dose: 1–2g (2.5–5mL) per injection
- Timing: Pre-workout or morning fasted
- Route: Subcutaneous or IM injection`,
    synergies: ['aod9604-10mg', 'ipamorelin-cjc'],
    highlights: [{ title: 'Mitochondrial Transport', body: 'L-Carnitine is the gatekeeper for fat entering mitochondria — injectable form maximizes bioavailability.' }],
  },

  {
    slug: 'l-carnitine-600mgl',
    name: 'L-Carnitine 600mg/mL',
    tagline: 'High-concentration injectable L-Carnitine for maximum fat oxidation support.',
    price: 49.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'Mitochondria', 'L-Carnitine'],
    image: `${IMG}/l-carnitine-600mg-ml.png`,
    shopUrl: shopLink('l-carnitine-600mg-ml'),
    shortDescription: 'Research-grade L-Carnitine 600mg/mL injectable. Higher concentration format for smaller injection volumes.',
    seoTitle: 'L-Carnitine 600mg/mL | High-Concentration Injectable',
    deepDiveTitle: 'L-Carnitine 600mg/mL: Protocol',
    researchRating: 4, popularityRank: 129,
    fullDescription: `600mg/mL concentration of injectable L-Carnitine — allows delivery of 1–2g doses in smaller injection volumes (1.7–3.3mL).`,
    benefits: ['Higher concentration — smaller injection volumes', 'Same L-Carnitine fat transport support', 'Convenient 1–2g dosing in small volumes'],
    protocol: `Same as L-Carnitine 400mg/mL. Adjust volume for equivalent dose.`,
    synergies: ['aod9604-10mg'],
    highlights: [{ title: 'High Concentration', body: '600mg/mL allows 1g dose in just 1.7mL — convenient for daily injection.' }],
  },

  {
    slug: 'l-carnitine-5pack',
    name: 'L-Carnitine 5-Pack 600mg',
    tagline: 'Multi-pack L-Carnitine — best value for sustained fat oxidation support.',
    price: 89.99,
    category: 'Body Composition',
    tags: ['Fat Loss', 'Mitochondria', 'L-Carnitine', 'Value Pack'],
    image: `${IMG}/l-carnitine-5-pack-600mg.png`,
    shopUrl: shopLink('l-carnitine-5-pack-600mg'),
    shortDescription: 'Research-grade L-Carnitine 5-Pack at 600mg — best value for extended injection protocols.',
    seoTitle: 'L-Carnitine 5-Pack | Best Value Injectable Fat Oxidation',
    deepDiveTitle: 'L-Carnitine 5-Pack: Extended Protocol',
    researchRating: 4, popularityRank: 130,
    fullDescription: `5-pack of L-Carnitine 600mg — best per-unit value for sustained injectable L-Carnitine protocols.`,
    benefits: ['Best per-unit value', 'Extended supply for daily protocols', 'Same pharmaceutical-grade L-Carnitine'],
    protocol: `Same as L-Carnitine 600mg/mL.`,
    synergies: ['aod9604-10mg', 'ipamorelin-cjc'],
    highlights: [{ title: 'Best Value', body: '5-pack provides lowest per-dose cost for extended L-Carnitine protocols.' }],
  },

  // COGNITIVE & NOOTROPIC
  {
    slug: 'dsip-10mg',
    name: 'DSIP 10mg',
    tagline: 'Delta Sleep-Inducing Peptide — restore deep sleep architecture.',
    price: 79.99,
    category: 'Cognitive & Nootropic',
    tags: ['Sleep', 'Cognitive', 'Neuropeptide', 'Recovery', 'DSIP'],
    image: `${IMG}/dsip-delta-sleep-inducing-peptide-10mg.png`,
    shopUrl: shopLink('dsip-delta-sleep-inducing-peptide-10mg'),
    shortDescription: 'Research-grade DSIP 10mg. 99.0% purity. Delta Sleep-Inducing Peptide — a hypothalamic neuropeptide that promotes deep, restorative sleep architecture.',
    seoTitle: 'DSIP 10mg | Delta Sleep-Inducing Peptide for Deep Sleep',
    deepDiveTitle: 'DSIP: Delta Sleep Optimization Protocol',
    researchRating: 4, popularityRank: 131,
    fullDescription: `DSIP (Delta Sleep-Inducing Peptide) is a naturally occurring nonapeptide found in the hypothalamus and pineal gland that has been shown to induce and maintain delta (slow-wave) sleep. Delta sleep is the deepest restorative phase — critical for GH secretion, memory consolidation, and cellular repair. DSIP also shows stress-normalizing and antioxidant properties.`,
    benefits: [
      'Promotes delta (deep) sleep architecture — the most restorative phase',
      'Increases GH release through sleep-gated secretion',
      'Normalizes stress response and cortisol patterns',
      'Antioxidant properties in the CNS',
      'Non-habit-forming natural neuropeptide',
    ],
    protocol: `- Dose: 200–300mcg subcutaneous
- Timing: 30–60 minutes before sleep
- Frequency: As needed — not intended for daily long-term use`,
    synergies: ['epithalon', 'ipamorelin-cjc'],
    highlights: [
      { title: 'Delta Sleep', body: 'DSIP promotes deep delta sleep — maximizing GH release and cellular repair overnight.' },
      { title: 'Natural Neuropeptide', body: 'Endogenous peptide — non-habit-forming sleep restoration without receptor downregulation.' },
    ],
  },

  {
    slug: 'dsip-15mg',
    name: 'DSIP 15mg',
    tagline: 'Extended DSIP supply — best value for ongoing sleep optimization.',
    price: 99.99,
    category: 'Cognitive & Nootropic',
    tags: ['Sleep', 'DSIP', 'Neuropeptide'],
    image: `${IMG}/dsip-delta-sleep-inducing-peptide-15mg.png`,
    shopUrl: shopLink('dsip-delta-sleep-inducing-peptide-15mg'),
    shortDescription: 'Research-grade DSIP 15mg. 99.0% purity. Extended supply for sustained sleep optimization protocols.',
    seoTitle: 'DSIP 15mg | Best Value Delta Sleep Peptide',
    deepDiveTitle: 'DSIP 15mg: Extended Sleep Protocol',
    researchRating: 4, popularityRank: 132,
    fullDescription: `15mg DSIP — extended supply for regular sleep optimization use. At 250mcg per use, 15mg provides ~60 uses.`,
    benefits: ['~60 uses at 250mcg', 'Best value for regular DSIP use', 'Same delta sleep promoting compound'],
    protocol: `Same as DSIP 10mg.`,
    synergies: ['epithalon', 'ipamorelin-cjc'],
    highlights: [{ title: 'Best Value', body: '15mg provides 60 uses at 250mcg — extended sleep optimization supply.' }],
  },

  {
    slug: 'dsip-5mg',
    name: 'DSIP 5mg',
    tagline: 'Starter DSIP — entry supply for delta sleep protocol.',
    price: 49.99,
    category: 'Cognitive & Nootropic',
    tags: ['Sleep', 'DSIP'],
    image: `${IMG}/dsip-delta-sleep-inducing-peptide-5mg.png`,
    shopUrl: shopLink('dsip-delta-sleep-inducing-peptide-5mg'),
    shortDescription: 'Research-grade DSIP 5mg. 99.0% purity. Starter supply for delta sleep optimization.',
    seoTitle: 'DSIP 5mg | Starter Delta Sleep Peptide',
    deepDiveTitle: 'DSIP 5mg: Starter Protocol',
    researchRating: 4, popularityRank: 133,
    fullDescription: `5mg starter vial of DSIP — entry supply for ~20 uses at 250mcg per dose.`,
    benefits: ['~20 uses at 250mcg', 'Entry price for DSIP sleep optimization', '99.0% purity'],
    protocol: `Same as DSIP 10mg.`,
    synergies: ['epithalon'],
    highlights: [{ title: 'Starter Supply', body: '5mg provides ~20 uses for initial DSIP sleep optimization.' }],
  },

  {
    slug: 'selank-10mg',
    name: 'Selank 10mg',
    tagline: 'Anxiolytic neuropeptide — anxiety reduction and cognitive enhancement.',
    price: 69.99,
    category: 'Cognitive & Nootropic',
    tags: ['Anxiolytic', 'Cognitive', 'Nootropic', 'Selank', 'Anxiety'],
    image: `${IMG}/selank-10mg.png`,
    shopUrl: shopLink('selank-10mg'),
    shortDescription: 'Research-grade Selank 10mg. 99.0% purity. Synthetic analog of tuftsin with anxiolytic and nootropic properties — registered in Russia for anxiety and asthenia.',
    seoTitle: 'Selank 10mg | Anxiolytic Neuropeptide for Anxiety and Cognition',
    deepDiveTitle: 'Selank: Anxiolytic and Cognitive Enhancement Protocol',
    researchRating: 4, popularityRank: 134,
    fullDescription: `Selank is a synthetic heptapeptide analog of tuftsin — registered in Russia and Ukraine as an anxiolytic drug. It reduces anxiety without sedation, enhances memory and learning, modulates BDNF expression, and stabilizes the GABA-A system. Unlike benzodiazepines, it does not cause dependence or cognitive impairment.`,
    benefits: [
      'Reduces anxiety without sedation or cognitive impairment',
      'Registered drug in Russia/Ukraine — clinical validation',
      'Enhances memory consolidation and learning capacity',
      'Increases BDNF expression — neuroplasticity support',
      'GABA-A modulation without dependence potential',
    ],
    protocol: `- Dose: 250–500mcg subcutaneous or intranasal
- Frequency: As needed or twice daily
- Duration: Continuous use is safe; no dependence`,
    synergies: ['na-selank-amidate-10mg', 'semax-30mg'],
    highlights: [
      { title: 'Registered Drug', body: 'Selank is a registered anxiolytic medication in Russia — among the most clinically validated nootropic peptides.' },
      { title: 'No Dependence', body: 'GABA-A modulation without addiction, tolerance, or rebound anxiety.' },
    ],
  },

  {
    slug: 'na-selank-amidate-10mg',
    name: 'NA-Selank Amidate 10mg',
    tagline: 'N-Acetyl Selank Amidate — enhanced bioavailability anxiolytic peptide.',
    price: 79.99,
    category: 'Cognitive & Nootropic',
    tags: ['Anxiolytic', 'Cognitive', 'N-Acetyl', 'Selank', 'Nootropic'],
    image: `${IMG}/na-selank-amidate-10mg.png`,
    shopUrl: shopLink('na-selank-amidate-10mg'),
    shortDescription: 'Research-grade NA-Selank Amidate 10mg. 99.0% purity. N-acetyl + amide modification of Selank for enhanced metabolic stability.',
    seoTitle: 'NA-Selank Amidate 10mg | Enhanced Bioavailability Anxiolytic',
    deepDiveTitle: 'NA-Selank Amidate: Enhanced Anxiolytic Protocol',
    researchRating: 4, popularityRank: 135,
    fullDescription: `NA-Selank Amidate combines N-acetyl and C-terminal amide modifications to Selank — both modifications improve resistance to peptidase degradation, potentially enhancing bioavailability and duration of action compared to standard Selank.`,
    benefits: ['Enhanced peptidase resistance vs. standard Selank', 'Same anxiolytic and nootropic mechanism', 'N-acetyl + amide dual modification for stability'],
    protocol: `Same as Selank 10mg — may be effective at lower doses due to enhanced bioavailability.`,
    synergies: ['selank-10mg', 'na-selank-amidate-30mg'],
    highlights: [{ title: 'Enhanced Form', body: 'Dual modification (N-acetyl + amide) improves stability over standard Selank.' }],
  },

  {
    slug: 'na-selank-amidate-30mg',
    name: 'NA-Selank Amidate 30mg',
    tagline: 'Extended supply NA-Selank Amidate — best value anxiolytic nootropic.',
    price: 179.99,
    category: 'Cognitive & Nootropic',
    tags: ['Anxiolytic', 'Cognitive', 'N-Acetyl', 'Selank'],
    image: `${IMG}/na-selank-amidate-30mg.png`,
    shopUrl: shopLink('na-selank-amidate-30mg'),
    shortDescription: 'Research-grade NA-Selank Amidate 30mg. Extended supply for sustained anxiolytic protocols.',
    seoTitle: 'NA-Selank Amidate 30mg | Extended Anxiolytic Supply',
    deepDiveTitle: 'NA-Selank Amidate 30mg: Extended Protocol',
    researchRating: 4, popularityRank: 136,
    fullDescription: `30mg extended supply of NA-Selank Amidate — best per-mg value for sustained anxiolytic and cognitive enhancement protocols.`,
    benefits: ['Extended ~120 uses at 250mcg', 'Best per-mg value for NA-Selank Amidate', 'Same enhanced bioavailability compound'],
    protocol: `Same as NA-Selank Amidate 10mg.`,
    synergies: ['selank-10mg'],
    highlights: [{ title: 'Best Value', body: '30mg provides ~120 uses — optimal supply for extended anxiolytic protocols.' }],
  },

  {
    slug: 'semax-30mg',
    name: 'N-Acetyl Semax Amidate 30mg',
    tagline: 'Most potent Semax form — cognitive enhancement and neuroprotection.',
    price: 149.99,
    category: 'Cognitive & Nootropic',
    tags: ['Nootropic', 'Cognitive', 'BDNF', 'Neuroprotective', 'Semax'],
    image: `${IMG}/n-acetyl-semax-amidate-30mg.png`,
    shopUrl: shopLink('n-acetyl-semax-amidate-30mg'),
    shortDescription: 'Research-grade N-Acetyl Semax Amidate 30mg. 99.0% purity. The most potent and bioavailable form of Semax — ACTH analog for cognitive enhancement and BDNF upregulation.',
    seoTitle: 'N-Acetyl Semax Amidate 30mg | Most Potent Nootropic Peptide',
    deepDiveTitle: 'N-Acetyl Semax Amidate: Maximum Potency Nootropic Protocol',
    researchRating: 4, popularityRank: 137,
    fullDescription: `N-Acetyl Semax Amidate is the most bioavailable and potent form of Semax — a synthetic ACTH(4-7) analog registered in Russia for cognitive disorders, stroke recovery, and nerve damage. The N-acetyl + amide modifications dramatically increase CNS penetration and half-life vs. standard Semax. It upregulates BDNF, NGF, and serotonin expression, producing cognitive enhancement, focus, and neuroprotection.`,
    benefits: [
      'Registered drug in Russia for cognitive disorders and stroke',
      'Most potent Semax form — N-acetyl + amide for maximum CNS penetration',
      'Upregulates BDNF and NGF — neuroplasticity and neuroprotection',
      'Enhances focus, working memory, and cognitive speed',
      'Neuroprotective in ischemia models',
    ],
    protocol: `- Dose: 100–500mcg intranasal or subcutaneous
- Frequency: Once or twice daily
- Duration: Cycles of 4–8 weeks or as needed`,
    synergies: ['selank-10mg', 'pe-22-28-10mg'],
    highlights: [
      { title: 'BDNF Upregulation', body: 'Semax increases BDNF expression — the primary driver of neuroplasticity and memory.' },
      { title: 'Registered Drug', body: 'Semax is a registered medicine in Russia — one of the most clinically validated nootropic peptides.' },
    ],
  },

  {
    slug: 'pe-22-28-10mg',
    name: 'PE-22-28 10mg',
    tagline: 'BDNF mimetic antidepressant peptide — fast-acting mood enhancement.',
    price: 79.99,
    category: 'Cognitive & Nootropic',
    tags: ['Antidepressant', 'BDNF', 'Nootropic', 'Mood', 'PE-22-28'],
    image: `${IMG}/pe-22-28-10mg.png`,
    shopUrl: shopLink('pe-22-28-10mg'),
    shortDescription: 'Research-grade PE-22-28 10mg. 99.0% purity. Selective BDNF TrkB receptor agonist with antidepressant effects comparable to imipramine.',
    seoTitle: 'PE-22-28 10mg | BDNF Mimetic Antidepressant Peptide',
    deepDiveTitle: 'PE-22-28: BDNF TrkB Agonist Protocol',
    researchRating: 4, popularityRank: 138,
    fullDescription: `PE-22-28 is a synthetic peptide derived from the BDNF loop 4 region that selectively activates TrkB receptors — the primary receptor for BDNF (Brain-Derived Neurotrophic Factor). In animal studies, PE-22-28 produced antidepressant effects comparable to imipramine while also enhancing memory and cognitive function.`,
    benefits: [
      'Selective TrkB (BDNF receptor) agonist',
      'Antidepressant effects comparable to imipramine in animal studies',
      'Enhances memory and learning through BDNF-TrkB signaling',
      'BDNF pathway — most evidence-supported target for depression and cognition',
    ],
    protocol: `- Dose: 100–500mcg subcutaneous
- Frequency: Once daily
- Duration: As needed or continuous`,
    synergies: ['semax-30mg', 'selank-10mg'],
    highlights: [{ title: 'TrkB Agonist', body: 'Direct BDNF receptor activation — antidepressant and cognitive effects through the BDNF pathway.' }],
  },

  {
    slug: 'p21-10mg',
    name: 'P21 10mg',
    tagline: 'CNTF analog peptide — neurogenesis and cognitive enhancement.',
    price: 89.99,
    category: 'Cognitive & Nootropic',
    tags: ['Neurogenesis', 'Cognitive', 'CNTF', 'Nootropic', 'P21'],
    image: `${IMG}/p21-10mg.png`,
    shopUrl: shopLink('p21-10mg'),
    shortDescription: 'Research-grade P21 10mg. 99.0% purity. CNTF-derived peptide fragment that promotes neurogenesis and cognitive function without the side effects of full-length CNTF.',
    seoTitle: 'P21 10mg | CNTF Analog Neurogenesis Peptide',
    deepDiveTitle: 'P21: Neurogenesis and Cognitive Protocol',
    researchRating: 3, popularityRank: 139,
    fullDescription: `P21 is a synthetic peptide derived from CNTF (Ciliary Neurotrophic Factor) — a neurotrophic factor that promotes neurogenesis in the hippocampus. P21 retains the neurogenic properties of CNTF without its weight-suppressing and anti-fertility side effects. Animal studies show P21 increases hippocampal neurogenesis and improves working memory.`,
    benefits: [
      'Promotes hippocampal neurogenesis — growth of new brain cells',
      'Improves working memory and spatial learning in animal studies',
      'CNTF-derived without weight suppression side effects',
      'Potential for age-related cognitive decline support',
    ],
    protocol: `- Dose: 100–500mcg subcutaneous
- Frequency: Daily or as needed
- Note: Experimental compound with limited human data`,
    synergies: ['semax-30mg', 'cortagen-20mg'],
    highlights: [{ title: 'Neurogenesis', body: 'P21 promotes new neuron growth in the hippocampus — the memory-critical brain region.' }],
  },

  {
    slug: 'adamax-10mg',
    name: 'Adamax 10mg',
    tagline: 'Nootropic peptide blend — cognitive enhancement and neuroprotection stack.',
    price: 99.99,
    category: 'Cognitive & Nootropic',
    tags: ['Nootropic', 'Cognitive', 'Neuroprotective', 'Adamax', 'Stack'],
    image: `${IMG}/adamax-10mg.png`,
    shopUrl: shopLink('adamax-10mg'),
    shortDescription: 'Research-grade Adamax 10mg. 98.7% purity. Cognitive enhancement and neuroprotection peptide stack.',
    seoTitle: 'Adamax 10mg | Nootropic Peptide for Cognitive Enhancement',
    deepDiveTitle: 'Adamax: Cognitive Enhancement Protocol',
    researchRating: 3, popularityRank: 140,
    fullDescription: `Adamax is a proprietary nootropic peptide blend designed for cognitive enhancement and neuroprotection — combining multiple peptide mechanisms for comprehensive cognitive support.`,
    benefits: ['Multi-peptide cognitive enhancement stack', 'Neuroprotective mechanisms', '98.7% purity with COA'],
    protocol: `Consult Phiogen COA for component breakdown and dosing protocol.`,
    synergies: ['semax-30mg', 'selank-10mg'],
    highlights: [{ title: 'Multi-Mechanism', body: 'Adamax combines nootropic peptides for comprehensive cognitive enhancement.' }],
  },

  {
    slug: 'oxytocin-10mg',
    name: 'Oxytocin 10mg',
    tagline: 'Love hormone — social bonding, stress reduction, and cognitive effects.',
    price: 79.99,
    category: 'Cognitive & Nootropic',
    tags: ['Social', 'Bonding', 'Stress', 'Cognitive', 'Oxytocin'],
    image: `${IMG}/oxytocin-10mg.png`,
    shopUrl: shopLink('oxytocin-10mg'),
    shortDescription: 'Research-grade Oxytocin 10mg. 99.0% purity. The "love hormone" — modulates social behavior, reduces anxiety, and has cognitive and cardiovascular benefits.',
    seoTitle: 'Oxytocin 10mg | Love Hormone for Social Bonding and Stress Reduction',
    deepDiveTitle: 'Oxytocin: Social and Stress Modulation Protocol',
    researchRating: 4, popularityRank: 141,
    fullDescription: `Oxytocin is a 9-amino acid neuropeptide produced in the hypothalamus — the "love hormone" mediating social bonding, trust, and affiliation. It also reduces cortisol and anxiety, promotes cardiovascular health, and has been studied for autism spectrum conditions, PTSD, and social anxiety.`,
    benefits: [
      'Reduces cortisol and stress response',
      'Promotes social bonding and trust',
      'Studied for autism, PTSD, and social anxiety',
      'Cardiovascular protective effects',
      'Accelerates wound healing and GI motility',
    ],
    protocol: `- Dose: 10–40IU intranasal (most common)
- Subcutaneous: 100–250mcg
- Timing: As needed for social contexts or daily for anxiety`,
    synergies: ['selank-10mg', 'dsip-10mg'],
    highlights: [{ title: 'Cortisol Reduction', body: 'Oxytocin directly reduces cortisol — addressing the root hormonal driver of chronic stress.' }],
  },

  {
    slug: 'oxytocin-8mg',
    name: 'Oxytocin 8mg',
    tagline: 'Starter Oxytocin — entry supply for social bonding and stress protocols.',
    price: 69.99,
    category: 'Cognitive & Nootropic',
    tags: ['Social', 'Bonding', 'Stress', 'Oxytocin'],
    image: `${IMG}/oxytocin-8mg.png`,
    shopUrl: shopLink('oxytocin-8mg'),
    shortDescription: 'Research-grade Oxytocin 8mg. 99.0% purity. Entry supply for Oxytocin protocols.',
    seoTitle: 'Oxytocin 8mg | Starter Love Hormone Supply',
    deepDiveTitle: 'Oxytocin 8mg: Starter Protocol',
    researchRating: 4, popularityRank: 142,
    fullDescription: `8mg starter vial of Oxytocin — entry supply for social and stress modulation protocols.`,
    benefits: ['Entry supply for Oxytocin protocols', '8mg at lower price point', '99.0% purity'],
    protocol: `Same as Oxytocin 10mg.`,
    synergies: ['selank-10mg'],
    highlights: [{ title: 'Entry Supply', body: '8mg provides initial Oxytocin protocol supply at lower entry cost.' }],
  },

  {
    slug: 'methylene-blue-50ml',
    name: 'Methylene Blue 10mg/mL 50mL',
    tagline: 'Mitochondrial electron carrier — cognitive enhancement and neuroprotection.',
    price: 59.99,
    category: 'Cognitive & Nootropic',
    tags: ['Cognitive', 'Mitochondria', 'Neuroprotective', 'Methylene Blue'],
    image: `${IMG}/methylene-blue-10mg-ml-50ml.png`,
    shopUrl: shopLink('methylene-blue-10mg-ml-50ml'),
    shortDescription: 'Research-grade Methylene Blue 10mg/mL 50mL. Mitochondrial electron carrier for cognitive enhancement and neuroprotection.',
    seoTitle: 'Methylene Blue 10mg/mL | Mitochondrial Cognitive Enhancer',
    deepDiveTitle: 'Methylene Blue: Cognitive Mitochondrial Protocol',
    researchRating: 4, popularityRank: 143,
    fullDescription: `Methylene Blue is a mitochondrial electron carrier — it directly participates in the mitochondrial electron transport chain, improving cellular energy production in neurons. At low doses (0.5–4mg/kg), it enhances memory, neuroprotection, and cognitive performance. It also has antimicrobial, antimalarial, and antifungal properties.`,
    benefits: [
      'Directly boosts mitochondrial electron transport in neurons',
      'Enhances memory consolidation and retrieval in animal and human studies',
      'Neuroprotective against oxidative and ischemic damage',
      'Improves complex memory tasks at low doses',
      'Antimicrobial and antimalarial properties',
    ],
    protocol: `- Dose: 0.5–4mg/kg (35–280mg for 70kg individual)
- Route: Oral or IV at clinical doses; injectable at research doses
- Note: Turns urine blue — harmless cosmetic effect`,
    synergies: ['nad-plus', 'ss-31-10mg'],
    highlights: [{ title: 'Electron Carrier', body: 'Methylene Blue participates directly in mitochondrial ETC — not just an indirect activator.' }],
  },

  {
    slug: 'pt-141-10mg',
    name: 'PT-141 10mg',
    tagline: 'Melanocortin sexual agonist — FDA-approved libido peptide for women.',
    price: 69.99,
    category: 'Cognitive & Nootropic',
    tags: ['Sexual Health', 'Libido', 'Melanocortin', 'PT-141', 'Bremelanotide'],
    image: `${IMG}/pt-141-10mg.png`,
    shopUrl: shopLink('pt-141-10mg'),
    shortDescription: 'Research-grade PT-141 (Bremelanotide) 10mg. 99.0% purity. FDA-approved melanocortin receptor agonist for sexual dysfunction.',
    seoTitle: 'PT-141 10mg | FDA-Approved Libido Peptide (Bremelanotide)',
    deepDiveTitle: 'PT-141 (Bremelanotide): Sexual Enhancement Protocol',
    researchRating: 5, popularityRank: 144,
    fullDescription: `PT-141 (Bremelanotide) is a synthetic melanocortin receptor agonist FDA-approved as Vyleesi® for hypoactive sexual desire disorder (HSDD) in premenopausal women. Unlike PDE5 inhibitors that work peripherally, PT-141 acts centrally in the hypothalamus to increase sexual motivation and desire — effective in both men and women.`,
    benefits: [
      'FDA-approved (Vyleesi®) for sexual dysfunction in women',
      'Central mechanism — increases sexual motivation via hypothalamic melanocortin receptors',
      'Effective in both men and women',
      'Works regardless of vascular function (unlike Viagra/Cialis)',
      '99.0% purity with COA',
    ],
    protocol: `- Dose: 1–2mg subcutaneous 1–4 hours before intended activity
- Note: Transient nausea at higher doses — start at 1mg`,
    synergies: ['oxytocin-10mg'],
    highlights: [
      { title: 'FDA Approved', body: 'Bremelanotide is FDA-approved as Vyleesi® — clinically validated for sexual dysfunction.' },
      { title: 'Central Action', body: 'Acts in the brain hypothalamus rather than peripherally — works for both men and women.' },
    ],
  },

  // RECOVERY & HEALING
  {
    slug: 'bpc-157-capsules',
    name: 'BPC-157 Capsules 500mcg x60',
    tagline: 'Oral BPC-157 — gut-targeted healing through oral administration.',
    price: 79.99,
    category: 'Healing & Recovery',
    tags: ['Healing', 'Gut Health', 'Oral', 'BPC-157', 'Capsules'],
    image: `${IMG}/bpc-157-capsules-500mcg-x-60-capsules.png`,
    shopUrl: shopLink('bpc-157-capsules-500mcg-x-60-capsules'),
    shortDescription: 'Research-grade BPC-157 Capsules 500mcg x60. Oral format for gut-targeted BPC-157 delivery — ideal for GI conditions.',
    seoTitle: 'BPC-157 Capsules 500mcg | Oral Gut Healing Protocol',
    deepDiveTitle: 'BPC-157 Oral Capsules: Gut Health Protocol',
    researchRating: 5, popularityRank: 145,
    fullDescription: `60 capsules of BPC-157 at 500mcg each — the oral format for gut-targeted BPC-157 applications. While injectable BPC-157 provides systemic effects, oral BPC-157 concentrates action in the GI tract making it ideal for leaky gut, IBD, ulcers, and GI repair protocols.`,
    benefits: [
      'Oral delivery concentrates BPC-157 activity in the GI tract',
      'Ideal for leaky gut, IBD, GERD, and ulcer protocols',
      '60-day supply at 500mcg/day',
      'No injection required — convenient daily oral administration',
    ],
    protocol: `- Dose: 1–2 capsules (500–1000mcg) daily on empty stomach
- Duration: 60-day supply at 500mcg/day`,
    synergies: ['bpc-157', 'kpv-10mg'],
    highlights: [{ title: 'Gut Targeted', body: 'Oral administration focuses BPC-157 activity in the GI tract — optimal for gut healing.' }],
  },

  {
    slug: 'ara-290-10mg',
    name: 'ARA-290 10mg',
    tagline: 'Erythropoietin tissue protective peptide — nerve repair and anti-inflammation.',
    price: 89.99,
    category: 'Healing & Recovery',
    tags: ['Neuroprotective', 'Recovery', 'Nerve', 'Anti-Inflammatory', 'ARA-290'],
    image: `${IMG}/ara-290-10mg.png`,
    shopUrl: shopLink('ara-290-10mg'),
    shortDescription: 'Research-grade ARA-290 10mg. 98.7% purity. Erythropoietin-derived peptide with tissue protective and neuroprotective effects without erythropoietic activity.',
    seoTitle: 'ARA-290 10mg | EPO-Derived Neuroprotective Healing Peptide',
    deepDiveTitle: 'ARA-290: Tissue Protective Peptide Protocol',
    researchRating: 4, popularityRank: 146,
    fullDescription: `ARA-290 is a synthetic peptide derived from the helix B region of erythropoietin (EPO) — it activates the tissue-protective receptor (EPOR/βcR heterodimer) without triggering erythropoiesis. This gives it EPO's anti-apoptotic, anti-inflammatory, and nerve-protective properties without the blood-thickening risks. Phase 2 trials showed improvements in diabetic neuropathy pain and corneal nerve repair.`,
    benefits: [
      'EPO-derived tissue protection without erythropoietic effects',
      'Neuroprotective — peripheral nerve repair and pain reduction',
      'Phase 2 data: improvements in diabetic neuropathy',
      'Anti-apoptotic and anti-inflammatory via EPOR/βcR',
    ],
    protocol: `- Dose: 4mg daily subcutaneous
- Duration: 4–12 weeks based on application`,
    synergies: ['bpc-157', 'tb-500'],
    highlights: [{ title: 'EPO Without Blood Thickening', body: 'ARA-290 delivers EPO\'s tissue-protective benefits without the dangerous erythropoietic effects.' }],
  },

  {
    slug: 'kpv-10mg',
    name: 'KPV 10mg',
    tagline: 'Alpha-MSH derived tripeptide — potent anti-inflammatory for gut and systemic use.',
    price: 99.99,
    category: 'Healing & Recovery',
    tags: ['Anti-Inflammatory', 'Gut Health', 'Healing', 'KPV', 'IBD'],
    image: `${IMG}/kpv-10mg.png`,
    shopUrl: shopLink('kpv-10mg'),
    shortDescription: 'Research-grade KPV 10mg. 99.0% purity. C-terminal tripeptide of alpha-MSH with potent anti-inflammatory and gut protective effects.',
    seoTitle: 'KPV 10mg | Alpha-MSH Derived Anti-Inflammatory Peptide',
    deepDiveTitle: 'KPV: Gut Anti-Inflammatory Protocol',
    researchRating: 4, popularityRank: 147,
    fullDescription: `KPV is the C-terminal tripeptide (Lys-Pro-Val) of alpha-melanocyte-stimulating hormone (α-MSH). It retains α-MSH's potent anti-inflammatory properties — reducing IL-6, TNF-α, and NF-κB — without the melanocyte-stimulating effects. Particularly studied for inflammatory bowel disease, where oral KPV reduces colonic inflammation without systemic immunosuppression.`,
    benefits: [
      'Reduces IL-6, TNF-α, and NF-κB inflammatory cytokines',
      'Oral effectiveness for gut inflammation — IBD, Crohn\'s, UC',
      'No systemic immunosuppression — targeted anti-inflammatory',
      'Derived from endogenous α-MSH — favorable safety profile',
      '99.0% purity with COA',
    ],
    protocol: `- Dose: 500mcg–2mg daily (oral or subcutaneous)
- For gut inflammation: Oral administration concentrates action in GI tract
- Duration: 4–12 weeks`,
    synergies: ['bpc-157', 'thymosin-alpha-1-10mg'],
    highlights: [
      { title: 'Gut IBD', body: 'KPV is particularly effective for inflammatory bowel disease via oral administration.' },
      { title: 'α-MSH Fragment', body: 'Derives anti-inflammatory properties from endogenous hormone without melanocyte effects.' },
    ],
  },

  {
    slug: 'kpv-5mg',
    name: 'KPV 5mg',
    tagline: 'Starter KPV — entry anti-inflammatory supply.',
    price: 59.99,
    category: 'Healing & Recovery',
    tags: ['Anti-Inflammatory', 'Gut Health', 'KPV'],
    image: `${IMG}/kpv-5mg.png`,
    shopUrl: shopLink('kpv-5mg'),
    shortDescription: 'Research-grade KPV 5mg. 99.0% purity. Starter supply for alpha-MSH derived anti-inflammatory protocols.',
    seoTitle: 'KPV 5mg | Starter Anti-Inflammatory Peptide',
    deepDiveTitle: 'KPV 5mg: Starter Protocol',
    researchRating: 4, popularityRank: 148,
    fullDescription: `5mg starter vial of KPV — entry supply for gut anti-inflammatory protocols.`,
    benefits: ['Starter 5mg supply', 'Entry price for KPV gut protocols', '99.0% purity'],
    protocol: `Same as KPV 10mg.`,
    synergies: ['bpc-157', 'kpv-10mg'],
    highlights: [{ title: 'Entry Supply', body: '5mg starter vial for initial KPV anti-inflammatory protocols.' }],
  },

  {
    slug: 'll-37-10mg',
    name: 'LL-37 10mg',
    tagline: 'Human antimicrobial peptide — immune defense, wound healing, and anti-biofilm.',
    price: 99.99,
    category: 'Healing & Recovery',
    tags: ['Antimicrobial', 'Immune', 'Wound Healing', 'LL-37', 'Cathelicidin'],
    image: `${IMG}/ll-37-10mg.png`,
    shopUrl: shopLink('ll-37-10mg'),
    shortDescription: 'Research-grade LL-37 10mg. 98.8% purity. The only human cathelicidin antimicrobial peptide — broad-spectrum antimicrobial, immune modulating, and wound healing.',
    seoTitle: 'LL-37 10mg | Human Cathelicidin Antimicrobial Peptide',
    deepDiveTitle: 'LL-37: Antimicrobial and Immune Protocol',
    researchRating: 4, popularityRank: 149,
    fullDescription: `LL-37 is the only human cathelicidin — a family of host defense peptides produced by neutrophils, epithelial cells, and other immune cells. It has broad-spectrum antimicrobial activity against bacteria, fungi, and viruses; disrupts biofilms; modulates immune responses; and promotes wound healing by stimulating angiogenesis and re-epithelialization.`,
    benefits: [
      'Broad-spectrum antimicrobial — bacteria, fungi, viruses',
      'Disrupts biofilms resistant to conventional antibiotics',
      'Promotes wound healing through angiogenesis stimulation',
      'Immune modulation — both pro-inflammatory and anti-inflammatory context-dependent',
      'The only human cathelicidin — natural defense molecule',
    ],
    protocol: `- Dose: 100–500mcg locally or systemically
- Application: Wound care, antimicrobial, immune support
- Route: Subcutaneous, topical, or local injection`,
    synergies: ['bpc-157', 'thymosin-alpha-1-10mg'],
    highlights: [
      { title: 'Only Human Cathelicidin', body: 'LL-37 is unique among human antimicrobial peptides — a natural first-line defense molecule.' },
      { title: 'Biofilm Disruption', body: 'Breaks down bacterial biofilms — addresses antibiotic-resistant infections at the structural level.' },
    ],
  },

  {
    slug: 'vip-10mg',
    name: 'VIP 10mg',
    tagline: 'Vasoactive Intestinal Peptide — immune modulation, gut health, and neuroprotection.',
    price: 139.99,
    category: 'Healing & Recovery',
    tags: ['Immune', 'Gut Health', 'Neuroprotective', 'VIP', 'Anti-Inflammatory'],
    image: `${IMG}/vip-10mg.png`,
    shopUrl: shopLink('vip-10mg'),
    shortDescription: 'Research-grade VIP 10mg. 98.8% purity. Vasoactive Intestinal Peptide — 28-amino acid neuropeptide with immune modulation, gut protection, and neuroprotective effects.',
    seoTitle: 'VIP 10mg | Vasoactive Intestinal Peptide Immune Modulator',
    deepDiveTitle: 'VIP: Vasoactive Intestinal Peptide Protocol',
    researchRating: 4, popularityRank: 150,
    fullDescription: `VIP (Vasoactive Intestinal Peptide) is a 28-amino acid neuropeptide with widespread distribution in the GI tract, immune system, and CNS. It is a potent anti-inflammatory that shifts immune responses toward Th2 and regulatory T-cell phenotypes, protects against inflammatory bowel conditions, promotes gut motility, and has neuroprotective effects in neurodegenerative disease models.`,
    benefits: [
      'Potent anti-inflammatory — shifts toward regulatory immune phenotypes',
      'GI protection — motility, mucosal defense, IBD applications',
      'Neuroprotective in Parkinson\'s and Alzheimer\'s models',
      'Pulmonary vasodilation — studied for pulmonary arterial hypertension',
      'Chronobiotic effects — circadian rhythm modulation',
    ],
    protocol: `- Dose: 50–500mcg subcutaneous or intranasal
- Frequency: Once or twice daily
- Application: Inflammatory conditions, gut health, neurological support`,
    synergies: ['bpc-157', 'kpv-10mg'],
    highlights: [{ title: 'Multi-System', body: 'VIP has effects across GI, immune, CNS, and pulmonary systems — broad therapeutic range.' }],
  },

  {
    slug: 'vip-5mg',
    name: 'VIP 5mg',
    tagline: 'Starter VIP — entry supply for Vasoactive Intestinal Peptide protocols.',
    price: 79.99,
    category: 'Healing & Recovery',
    tags: ['Immune', 'Gut Health', 'VIP'],
    image: `${IMG}/vip-5mg.png`,
    shopUrl: shopLink('vip-5mg'),
    shortDescription: 'Research-grade VIP 5mg. 98.8% purity. Starter supply for VIP immune and gut protocols.',
    seoTitle: 'VIP 5mg | Starter Vasoactive Intestinal Peptide Supply',
    deepDiveTitle: 'VIP 5mg: Starter Protocol',
    researchRating: 4, popularityRank: 151,
    fullDescription: `5mg starter vial of Vasoactive Intestinal Peptide — entry supply for immune modulation and gut protection protocols.`,
    benefits: ['Starter 5mg supply for VIP protocols', '98.8% purity with COA'],
    protocol: `Same as VIP 10mg.`,
    synergies: ['bpc-157', 'kpv-5mg'],
    highlights: [{ title: 'Entry Supply', body: '5mg provides initial VIP protocol supply.' }],
  },

  // COSMETIC / HAIR / SKIN
  {
    slug: 'melanotan-ii-10mg',
    name: 'Melanotan II 10mg',
    tagline: 'Melanocortin agonist — tanning, libido enhancement, and appetite reduction.',
    price: 59.99,
    category: 'Anti-Aging & Skin',
    tags: ['Tanning', 'Melanocortin', 'Libido', 'Appetite', 'MT-II'],
    image: `${IMG}/melanotan-2-10mg.png`,
    shopUrl: shopLink('melanotan-2-10mg'),
    shortDescription: 'Research-grade Melanotan II 10mg. 98.9% purity. Non-selective melanocortin agonist for UV-independent skin tanning and libido effects.',
    seoTitle: 'Melanotan II 10mg | Melanocortin Tanning and Libido Peptide',
    deepDiveTitle: 'Melanotan II: Tanning and Melanocortin Protocol',
    researchRating: 3, popularityRank: 152,
    fullDescription: `Melanotan II is a non-selective agonist of melanocortin receptors (MC1R, MC3R, MC4R, MC5R). MC1R activation drives melanin production for UV-independent skin darkening; MC4R activation produces aphrodisiac effects (the basis for PT-141/Bremelanotide); MC4R also reduces appetite. Melanotan II's lack of selectivity vs. PT-141's selectivity distinguishes their use cases.`,
    benefits: [
      'UV-independent melanin production — skin tanning without UV damage',
      'Libido enhancement via MC4R activation',
      'Appetite suppression through central MC4R signaling',
      'Widely studied compound with extensive literature',
    ],
    protocol: `- Starting dose: 0.25mg subcutaneous (test dose)
- Escalate: 0.5–1mg with UV exposure
- Note: Nausea common at initiation — start very low`,
    synergies: ['melanotan-i-10mg', 'pt-141-10mg'],
    highlights: [{ title: 'Multi-Receptor', body: 'Activates MC1, MC3, MC4, MC5 — broader effects than selective melanocortin peptides.' }],
  },

  {
    slug: 'melanotan-i-10mg',
    name: 'Melanotan I 10mg',
    tagline: 'Selective alpha-MSH analog — pure tanning without libido effects.',
    price: 59.99,
    category: 'Anti-Aging & Skin',
    tags: ['Tanning', 'Melanocortin', 'MC1R', 'Skin', 'MT-I'],
    image: `${IMG}/melanotan-1-10mg.png`,
    shopUrl: shopLink('melanotan-1-10mg'),
    shortDescription: 'Research-grade Melanotan I 10mg. 98.9% purity. Selective MC1R agonist for UV-independent tanning without melanocortin side effects.',
    seoTitle: 'Melanotan I 10mg | Selective MC1R Tanning Peptide',
    deepDiveTitle: 'Melanotan I: Selective Tanning Protocol',
    researchRating: 3, popularityRank: 153,
    fullDescription: `Melanotan I (also called afamelanotide) is a selective MC1R agonist — longer half-life than natural α-MSH with selective affinity for the melanocyte-stimulating receptor. Unlike Melanotan II, it does not significantly activate MC4R (no libido or appetite effects). FDA/EMA approved as Scenesse® for erythropoietic protoporphyria — provides UV protection through melanin induction.`,
    benefits: [
      'Selective MC1R activation — pure melanin induction without side effects',
      'FDA/EMA approved (Scenesse®) for light sensitivity conditions',
      'UV-independent tanning with better selectivity than MT-II',
      'No significant libido or appetite effects',
    ],
    protocol: `- Dose: 500mcg–1mg subcutaneous
- Timing: Before UV exposure for photoprotection effect`,
    synergies: ['ghk-cu', 'melanotan-ii-10mg'],
    highlights: [{ title: 'FDA/EMA Approved', body: 'Afamelanotide (Melanotan I) is approved as Scenesse® for erythropoietic protoporphyria.' }],
  },

  {
    slug: 'ru-58841-30ml',
    name: 'RU-58841 50mg x30mL',
    tagline: 'Non-steroidal androgen receptor antagonist — topical hair loss prevention.',
    price: 79.99,
    category: 'Anti-Aging & Skin',
    tags: ['Hair Loss', 'Androgenic Alopecia', 'DHT Blocker', 'RU-58841', 'Topical'],
    image: `${IMG}/ru-58841-50mg-x-30ml.png`,
    shopUrl: shopLink('ru-58841-50mg-x-30ml'),
    shortDescription: 'Research-grade RU-58841 50mg/30mL. Non-steroidal androgen receptor antagonist applied topically to block DHT at the scalp without systemic anti-androgen effects.',
    seoTitle: 'RU-58841 50mg 30mL | Topical Androgen Antagonist for Hair Loss',
    deepDiveTitle: 'RU-58841: Topical Androgenic Alopecia Protocol',
    researchRating: 4, popularityRank: 154,
    fullDescription: `RU-58841 is a non-steroidal androgen receptor antagonist designed for topical scalp application. It competitively blocks DHT binding at follicular androgen receptors — preventing the androgen-induced follicle miniaturization that causes androgenic alopecia — without systemic absorption that would cause sexual side effects.`,
    benefits: [
      'Blocks DHT at scalp follicles without systemic anti-androgen effects',
      'Non-steroidal — reduced risk of systemic sexual side effects',
      'Topical application concentrates action at follicle level',
      'Animal studies: superior efficacy to finasteride in topical comparison',
    ],
    protocol: `- Dose: 50–75mg applied topically to affected scalp areas
- Frequency: Once daily
- Solvent: Typically prepared in propylene glycol/ethanol solution`,
    synergies: ['ghk-cu', 'melanotan-ii-10mg'],
    highlights: [{ title: 'No Systemic Effects', body: 'Local scalp action blocks DHT at the follicle without systemic anti-androgen side effects.' }],
  },

  {
    slug: 'ru-58841-60ml',
    name: 'RU-58841 50mg x60mL',
    tagline: 'Extended supply RU-58841 — best value for ongoing hair loss prevention.',
    price: 129.99,
    category: 'Anti-Aging & Skin',
    tags: ['Hair Loss', 'Androgenic Alopecia', 'RU-58841'],
    image: `${IMG}/ru-58841-50mg-x-60ml.png`,
    shopUrl: shopLink('ru-58841-50mg-x-60ml'),
    shortDescription: 'Research-grade RU-58841 50mg x60mL. Extended 2-month supply for topical hair loss prevention.',
    seoTitle: 'RU-58841 50mg 60mL | Extended Hair Loss Prevention Supply',
    deepDiveTitle: 'RU-58841 60mL: Extended Hair Protocol',
    researchRating: 4, popularityRank: 155,
    fullDescription: `60mL supply of RU-58841 — double the standard supply for 2-month continuous hair loss prevention protocols.`,
    benefits: ['2-month supply at daily use', 'Best per-mL value for RU-58841', 'Same topical androgen antagonist formula'],
    protocol: `Same as RU-58841 30mL.`,
    synergies: ['ghk-cu'],
    highlights: [{ title: 'Extended Supply', body: '60mL provides 2 months of daily topical application for hair loss prevention.' }],
  },

  // Bacteriostatic Water USP
  {
    slug: 'bacteriostatic-water-usp-30ml',
    name: 'Bacteriostatic Water USP 30mL',
    tagline: 'USP-grade bacteriostatic water — pharmaceutical standard peptide reconstitution.',
    price: 14.99,
    category: 'Supplies',
    tags: ['Reconstitution', 'Bacteriostatic', 'USP', 'Peptide Prep', 'BAC Water'],
    image: `${IMG}/usp-bacteriostatic-water-30ml.png`,
    shopUrl: shopLink('usp-bacteriostatic-water-30ml'),
    shortDescription: 'Research-grade Bacteriostatic Water USP 30mL. United States Pharmacopeia standard — highest grade reconstitution solution for lyophilized peptides.',
    seoTitle: 'Bacteriostatic Water USP 30mL | Pharmaceutical Grade Reconstitution Solution',
    deepDiveTitle: 'Bacteriostatic Water USP: Premium Reconstitution Guide',
    researchRating: 5,
    popularityRank: 200,
    fullDescription: `USP-grade Bacteriostatic Water in a 30mL vial — meets United States Pharmacopeia standards for sterility and purity. The 0.9% benzyl alcohol preservative prevents bacterial growth for 28-day multi-use vials. Larger 30mL vial provides more reconstitution capacity than standard 10mL vials.`,
    benefits: [
      'United States Pharmacopeia (USP) grade — highest standard',
      '0.9% benzyl alcohol for 28-day multi-use bacterial inhibition',
      '30mL vial — enough for multiple peptide vials',
      '0.22-micron filtered for sterility assurance',
    ],
    protocol: `Same reconstitution protocol as standard BAC Water. 30mL vial provides reconstitution supply for 3× more peptide vials than 10mL.`,
    synergies: ['bpc-157', 'tb-500', 'bacteriostatic-water'],
    highlights: [
      { title: 'USP Grade', body: 'Meets United States Pharmacopeia standards — the gold standard for pharmaceutical-grade water.' },
      { title: '30mL Volume', body: '3× the volume of standard 10mL vials — provides reconstitution supply for multiple peptides.' },
    ],
  },

  // ── SUPPLIES ────────────────────────────────────────────────────
  {
    slug: 'bacteriostatic-water',
    name: 'Bacteriostatic Water 10ml',
    tagline: 'Essential reconstitution solution — safely dissolve and store lyophilized peptides.',
    price: 12.99,
    category: 'Supplies',
    tags: ['Reconstitution', 'Bacteriostatic', 'Peptide Prep', 'Essential', 'BAC Water'],
    image: `${IMG}/bacteriostatic-water-30ml.png`,
    shopUrl: shopLink('bacteriostatic-water-30ml'),
    shortDescription:
      'Bacteriostatic Water (BAC Water) is the standard reconstitution solution for lyophilized peptides. The 0.9% benzyl alcohol preservative prevents bacterial growth for safe multi-use storage.',
    seoTitle: 'Bacteriostatic Water 10ml | Peptide Reconstitution Solution',
    deepDiveTitle: 'Bacteriostatic Water: The Essential Peptide Reconstitution Guide',
    researchRating: 5,
    popularityRank: 21,
    fullDescription: `Bacteriostatic Water (BAC Water) is a pharmaceutical-grade sterile water solution containing 0.9% benzyl alcohol as a bacteriostatic agent. It is the industry standard for reconstituting lyophilized (freeze-dried) peptides and the only appropriate reconstitution solution for multi-dose peptide vials.

**Why Bacteriostatic Water?**

Lyophilized peptides are provided as dry powder to maximize shelf stability. Before injection, they must be dissolved in a sterile, compatible solvent. Bacteriostatic Water is preferred over plain sterile water because:

1. **Bacterial Inhibition**: The 0.9% benzyl alcohol prevents bacterial growth in the reconstituted solution for up to 28 days — essential for multi-use vials
2. **Chemical Compatibility**: BAC Water's pH and osmolarity are compatible with virtually all peptides without degrading their structure
3. **Stability**: Reconstituted peptides maintain potency significantly longer in BAC Water vs. plain water
4. **Safety**: Pharmaceutical-grade, 0.22-micron filtered — the same standard used in clinical applications

**Reconstitution Protocol**

The standard approach: add BAC Water to the lyophilized peptide vial slowly down the side of the glass (never directly onto the powder), swirl gently, and let dissolve completely. Never vortex or shake. Refrigerate immediately after reconstitution.

**Dosing Reference**

1ml of BAC Water added to a 5mg peptide vial = 5mg/ml concentration.
Drawing 0.1ml (10 units on an insulin syringe) = 0.5mg dose.`,
    benefits: [
      '0.9% benzyl alcohol prevents bacterial contamination for 28-day multi-use storage',
      'Pharmaceutical-grade, 0.22-micron filtered for sterility assurance',
      'Compatible with all standard peptides without degradation',
      'Stable reconstituted peptides vs. plain sterile water',
      '10ml vial provides reconstitution supply for multiple peptide vials',
      'Standard industry reconstitution solution — used in clinical settings',
      'Included in all proper peptide dosing protocols',
    ],
    protocol: `**Reconstitution Steps:**
1. Allow peptide vial to reach room temperature (5–10 min)
2. Draw desired BAC Water volume into insulin syringe
3. Insert needle into peptide vial, angle toward vial wall
4. Slowly release BAC Water down the glass side (not directly onto powder)
5. Gently swirl vial — do NOT shake or vortex
6. Let stand 2–5 minutes until fully dissolved
7. Refrigerate immediately at 2–8°C (36–46°F)

**Standard Concentrations:**
- 1ml BAC Water per 5mg peptide = 5mg/ml (0.5mg per 0.1ml syringe draw)
- 2ml BAC Water per 5mg peptide = 2.5mg/ml (0.25mg per 0.1ml draw)

**Storage After Reconstitution:**
- Refrigerate at 2–8°C
- Use within 28 days
- Keep away from light`,
    synergies: ['bpc-157', 'tb-500'],
    highlights: [
      { title: 'Essential Supply', body: 'Every lyophilized peptide requires reconstitution — BAC Water is the non-negotiable standard.' },
      { title: '28-Day Stability', body: '0.9% benzyl alcohol prevents bacterial growth — reconstituted peptides stable for 28 days refrigerated.' },
      { title: 'Pharma Grade', body: '0.22-micron filtered pharmaceutical-grade water — the same standard used in clinical peptide preparations.' },
    ],
  },
];
