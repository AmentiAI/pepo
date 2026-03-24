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

const BASE = 'https://apollopeptidesciences.com/product';
const IMG = 'https://apollopeptidesciences.com/wp-content/uploads';

function shopLink(path: string) {
  return `${BASE}/${path}`;
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
    image: `${IMG}/2025/09/bpc157_10mg.webp`,
    shopUrl: shopLink('bpc157-10mg'),
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
    image: `${IMG}/2025/09/TB500_10mg.webp`,
    shopUrl: shopLink('tb500-10mg'),
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
    price: 50.00,
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'Muscle', 'Fat Loss', 'Recovery', 'Anti-Aging'],
    image: `${IMG}/2025/01/cjc1295_5-5mg.webp`,
    shopUrl: shopLink('cjc1295-ipamorelin'),
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
    image: `${IMG}/2025/09/igf-1lr3-1mg.webp`,
    shopUrl: shopLink('igf-1lr3'),
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
    image: `${IMG}/2025/01/ghk-cu_50mg.webp`,
    shopUrl: shopLink('ghk-cu'),
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
    image: `${IMG}/2025/09/epithalon_50mg.webp`,
    shopUrl: shopLink('epithalon-50mg'),
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
    price: 69.99,
    category: 'Anti-Aging & Longevity',
    tags: ['NAD+', 'Energy', 'Mitochondria', 'Anti-Aging', 'Longevity', 'Sirtuin'],
    image: `${IMG}/2025/09/nad_500mg.webp`,
    shopUrl: shopLink('nad'),
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
    image: `${IMG}/2025/01/snap-8_10mg.webp`,
    shopUrl: shopLink('snap-8'),
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
    image: `${IMG}/2025/01/snap-8_10mg_2pack.webp`,
    shopUrl: shopLink('snap-8-2-pack'),
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
    image: `${IMG}/2024/10/semaglutide_5mg.webp`,
    shopUrl: shopLink('glp-1s-5mg'),
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
    price: 99.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GLP-1', 'Metabolic', 'Appetite', 'Semaglutide'],
    image: `${IMG}/2024/10/semaglutide_10mg-1.webp`,
    shopUrl: shopLink('glp-1s-10mg'),
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
    price: 159.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GLP-1', 'Metabolic', 'Long Protocol', 'Semaglutide'],
    image: `${IMG}/2024/06/semaglutide_15mg.webp`,
    shopUrl: shopLink('glp-1s-15mg'),
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
    price: 109.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Amylin', 'GLP-1', 'Combination', 'Metabolic'],
    image: `${IMG}/2025/09/cagri_sema_5_5mg-1.webp`,
    shopUrl: shopLink('glp-1cglp-1s-5mg'),
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
    image: `${IMG}/2024/04/tirzepatide_15mg-1.webp`,
    shopUrl: shopLink('glp-2t-15m'),
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
    price: 279.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'GIP', 'GLP-1', 'Tirzepatide', 'Extended Protocol'],
    image: `${IMG}/2024/06/tirzepatide_30mg.webp`,
    shopUrl: shopLink('glp-2t-30mg'),
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
    image: `${IMG}/2024/06/tirzepatide_15mg_multi.webp`,
    shopUrl: shopLink('glp-2t-15mg-4-pack'),
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
    image: `${IMG}/2024/06/tirzepatide_20mg_multi.webp`,
    shopUrl: shopLink('glp-2t-20mg-5-pack'),
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
    image: `${IMG}/2024/06/tirzepatide_15mg_multi.webp`,
    shopUrl: shopLink('glp-2t-15mg-10-pack'),
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
    image: `${IMG}/2024/04/retatrutide_10mg-1.webp`,
    shopUrl: shopLink('glp-3r-10mg'),
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
    price: 189.99,
    category: 'Body Composition',
    tags: ['Weight Loss', 'Triple Agonist', 'GLP-3', 'Retatrutide', 'Extended'],
    image: `${IMG}/2024/06/retatrutide_15mg.webp`,
    shopUrl: shopLink('glp-3r-15mg'),
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

  // ── SUPPLIES ────────────────────────────────────────────────────
  {
    slug: 'bacteriostatic-water',
    name: 'Bacteriostatic Water 10ml',
    tagline: 'Essential reconstitution solution — safely dissolve and store lyophilized peptides.',
    price: 9.99,
    category: 'Supplies',
    tags: ['Reconstitution', 'Bacteriostatic', 'Peptide Prep', 'Essential', 'BAC Water'],
    image: `${IMG}/2024/06/reconsitution_solution_10ml.webp`,
    shopUrl: shopLink('bacteriostatic-water-reconstitution-solution-10ml'),
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
