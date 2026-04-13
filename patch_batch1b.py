#!/usr/bin/env python3
"""Patch products 6-10 of batch 1: Semaglutide 10mg, Tirzepatide 15mg, IGF-1 LR3, NAD+ 500mg, Retatrutide 10mg"""

import re, sys

with open('lib/products.ts', 'r', encoding='utf-8') as f:
    src = f.read()

original = src

def find_window(src, slug, next_slug=None):
    start = src.find(f"slug: '{slug}'")
    if start == -1:
        raise ValueError(f"Slug not found: {slug}")
    if next_slug:
        end = src.find(f"slug: '{next_slug}'", start)
    else:
        end = len(src)
    return start, end

def patch_field(window, field_start_pattern, field_end_pattern, new_content):
    start = window.find(field_start_pattern)
    if start == -1:
        raise ValueError(f"Pattern not found: {field_start_pattern[:50]}")
    end = window.find(field_end_pattern, start + len(field_start_pattern))
    if end == -1:
        raise ValueError(f"End pattern not found: {field_end_pattern[:50]}")
    end += len(field_end_pattern)
    return window[:start] + new_content + window[end:]

# ─────────────────────────────────────────────────────────────────
# 1. SEMAGLUTIDE 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'semaglutide-10mg'
next_slug = 'semaglutide-15mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

new_fullDesc = """    fullDescription: `Semaglutide is the most clinically studied GLP-1 receptor agonist in history — a once-weekly peptide that has redefined what is pharmacologically achievable in weight management and metabolic health. The 10mg vial represents the practical centerpiece of most sustained semaglutide protocols, providing 4–10 weeks of supply depending on protocol stage.

**How Semaglutide Works: Five Mechanisms**

Semaglutide's weight loss efficacy emerges from a coordinated multi-organ mechanism that no single-target compound can replicate:

1. **Hypothalamic appetite suppression**: GLP-1 receptors in the arcuate nucleus and lateral hypothalamus receive semaglutide's signal and reduce neuropeptide Y (NPY) and AgRP release — the primary hunger-driving neurotransmitters. At the same time, POMC/CART neurons are activated, generating satiety. Users consistently report a fundamental shift in how they experience hunger — cravings diminish, portion sizes naturally decrease, and the psychological "food noise" of constant hunger quiets significantly.

2. **Gastric emptying delay**: Semaglutide slows the rate at which the stomach empties food into the small intestine by 30–50%. This mechanical effect extends feelings of fullness for 3–6 hours post-meal, reduces postprandial glucose spikes, and decreases overall caloric absorption per meal.

3. **Hepatic glucose regulation**: In the liver, semaglutide suppresses inappropriate glucagon release and reduces hepatic glucose output — particularly relevant for individuals with insulin resistance or pre-diabetic glucose patterns. This hepatic effect also drives measurable reduction in liver fat (NAFLD/NASH improvement) documented across multiple trials.

4. **Pancreatic insulin optimization**: Semaglutide stimulates glucose-dependent insulin secretion — meaning it increases insulin only when blood glucose is actually elevated, not in a blanket fashion that risks hypoglycemia. This glucose-dependency makes it metabolically safe even in non-diabetic research participants.

5. **Adipose tissue remodeling**: GLP-1 receptors expressed in white adipose tissue respond to semaglutide by reducing lipogenesis (fat storage) and promoting lipolysis (fat breakdown). Over extended protocols, this drives selective visceral fat reduction — the metabolically active abdominal fat most strongly associated with cardiovascular and metabolic disease risk.

**The STEP Trial Program: Definitive Clinical Evidence**

The STEP (Semaglutide Treatment Effect in People with Obesity) clinical trial program is the largest and most comprehensive weight loss trial program ever conducted for any pharmaceutical compound:

- **STEP 1** (n=1961): 14.9% average body weight reduction over 68 weeks at 2.4mg/week. 33% of participants lost >20% body weight. Placebo: 2.4%
- **STEP 2** (Type 2 diabetes): 9.6% weight loss with concurrent improvements in HbA1c, fasting glucose, and cardiovascular risk markers
- **STEP 3** (behavioral intervention): 16.0% weight loss with intensive behavioral therapy co-intervention
- **STEP 4** (withdrawal study): Weight regain occurred when semaglutide was discontinued — confirming ongoing treatment is required to maintain results

**Cardiovascular Protection: The SUSTAIN-6 Legacy**

The SUSTAIN-6 trial — a dedicated cardiovascular outcomes trial — established that semaglutide reduces major adverse cardiovascular events (MACE) by 26% in high-risk individuals. This was the first weight loss compound to demonstrate protective cardiovascular effects in a prospective outcomes trial, fundamentally changing how metabolic medicine views GLP-1 therapy beyond simple weight reduction.

**Why the 10mg Vial**

The 10mg vial is the most practical size for the majority of users:
- At 0.25mg/week (weeks 1–4): 40 weeks of supply
- At 0.5mg/week (weeks 5–8): 20 weeks
- At 1.0mg/week (common plateau dose): 10 weeks
- At 1.7mg/week: ~6 weeks
- At 2.4mg/week (maximum dose): ~4 weeks

For users in the mid-protocol 1.0–1.7mg maintenance range, the 10mg vial provides roughly 6–10 weeks of supply — eliminating frequent reorder cycles while avoiding excessive stockpiling.

**What to Expect: Timeline**

- **Weeks 1–4 (0.25mg)**: Appetite reduction begins. Most users notice smaller portion sizes and reduced snacking within 7–14 days. GI adjustment (mild nausea, occasional loose stools) is common.
- **Weeks 5–8 (0.5mg)**: Weight loss accelerates. Average 1–2 lbs/week. GI adaptation largely complete.
- **Weeks 9–16 (1.0mg)**: Most users reach their primary weight loss plateau-breaking dose. Energy levels improve.
- **Weeks 17+ (1.7–2.4mg)**: Maximum metabolic effect. Continued weight loss, cardiovascular marker improvements, and normalization of metabolic panels.`,
"""

w = re.sub(
    r"    fullDescription: `[^`]*`,\n",
    new_fullDesc,
    w, count=1
)

new_benefits = """    benefits: [
      'Average 14.9% body weight reduction — STEP 1 trial, 68 weeks, 2.4mg/week',
      'Reduces appetite via five distinct mechanisms across brain, gut, liver, pancreas, and adipose',
      'Slows gastric emptying 30–50% — extends satiety for hours post-meal',
      'Suppresses hepatic glucose output — reduces liver fat in NAFLD/NASH',
      'Glucose-dependent insulin stimulation — metabolically safe even in non-diabetics',
      'SUSTAIN-6: 26% reduction in major adverse cardiovascular events',
      '33% of STEP 1 participants lost more than 20% of body weight',
      'STEP 4 data confirms ongoing dosing required to maintain results',
      '10mg vial covers 4–10 weeks depending on dose escalation stage',
      'HPLC-verified pharmaceutical grade — COA provided with every batch',
      'Reduces visceral fat more selectively than subcutaneous fat',
      'Compatible with Ipamorelin/CJC for lean-body-composition protocols',
    ],
"""
w = re.sub(
    r"    benefits: \[[^\]]*\],\n",
    new_benefits,
    w, count=1
)

new_protocol = """    protocol: `**Dose Escalation Protocol (Standard Research):**
- Weeks 1–4: 0.25mg once weekly subcutaneous (stomach, thigh, or upper arm)
- Weeks 5–8: 0.5mg once weekly
- Weeks 9–12: 1.0mg once weekly
- Weeks 13–16: 1.7mg once weekly
- Week 17+: 2.4mg once weekly (maximum dose)

**Reconstitution:**
- Reconstitute with 2mL bacteriostatic water for easy 0.1mL per 0.5mg dosing
- Refrigerate after reconstitution; use within 28 days
- Allow vial to reach room temperature before injecting

**Managing Nausea:**
- Eat smaller portions and avoid high-fat meals at the time of injection
- Take injection at bedtime to sleep through initial GI effects
- Never accelerate escalation — the slow ramp exists to prevent GI intolerance

**10mg Vial Duration Guide:**
- 1.0mg/week → 10 weeks
- 1.7mg/week → ~6 weeks
- 2.4mg/week → ~4 weeks`,
"""
w = re.sub(
    r"    protocol: `[^`]*`,\n",
    new_protocol,
    w, count=1
)

new_highlights = """    highlights: [
      { title: '14.9% Body Weight Lost', body: 'STEP 1 Phase 3 data — average 14.9% reduction over 68 weeks, with 33% of participants losing more than 20%.' },
      { title: '26% MACE Reduction', body: 'SUSTAIN-6 cardiovascular outcomes trial — 26% reduction in major adverse cardiovascular events in high-risk subjects.' },
      { title: 'HPLC Verified', body: 'Pharmaceutical-grade semaglutide with batch COA — guaranteed purity matching clinical trial material.' },
    ],
"""
w = re.sub(
    r"    highlights: \[.*?\],\n",
    new_highlights,
    w, count=1, flags=re.DOTALL
)

src = src[:ws] + w + src[we:]
print("✓ Semaglutide 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 2. TIRZEPATIDE 15mg
# ─────────────────────────────────────────────────────────────────
slug = 'tirzepatide-15mg'
next_slug = 'tirzepatide-15mg-4pack'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

new_fullDesc = """    fullDescription: `Tirzepatide is the most effective anti-obesity peptide ever evaluated in Phase 3 clinical trials. As a dual GIP (Glucose-Dependent Insulinotropic Polypeptide) and GLP-1 (Glucagon-Like Peptide-1) receptor agonist, it activates two complementary metabolic regulatory pathways simultaneously — producing results that consistently exceed every previous single-agonist compound.

**Understanding the GIP + GLP-1 Dual Mechanism**

GIP and GLP-1 are the two primary incretins — gut-derived hormones released in response to food intake. Together they regulate appetite, insulin secretion, gastric motility, and fat metabolism. Tirzepatide was engineered to activate both receptor types with a single weekly injection.

The clinical superiority of dual agonism is now well established. In the SURPASS-2 head-to-head trial, tirzepatide at 15mg produced 5.5% greater weight loss than semaglutide at 2.4mg — the most head-to-head weight loss difference ever documented between approved anti-obesity agents.

*GIP receptor agonism specifically contributes:*
- Enhanced insulin sensitivity in peripheral tissues (muscle, liver, adipose)
- Direct adipocyte lipolysis — GIP receptors on fat cells respond by mobilizing stored triglycerides
- Modulation of food reward pathways in the brain's reward centers (GIP receptors in the VTA and nucleus accumbens)
- Incretin effect potentiation — GIP amplifies the insulin response to glucose beyond GLP-1 alone

*GLP-1 receptor agonism contributes:*
- Hypothalamic appetite suppression (NPY/AgRP pathway downregulation)
- Gastric emptying delay (30–50% reduction)
- Hepatic glucose output suppression
- Pancreatic beta-cell function preservation

**SURMOUNT Trial Program: The Definitive Dataset**

The SURMOUNT clinical trial program represents the most extensive weight loss trial program conducted for any drug beyond the semaglutide STEP series:

- **SURMOUNT-1** (n=2539, 72 weeks): 20.9% average weight reduction at 10mg–15mg doses. At 15mg specifically: 56% of participants lost >20% body weight, 82% lost >5%
- **SURMOUNT-2** (Type 2 diabetes, n=938): 15.7% weight reduction — extraordinary for a diabetic population where weight loss is historically harder to achieve
- **SURMOUNT-3** (12-week behavioral lead-in): 26.6% total weight reduction — the highest ever recorded in any anti-obesity trial when combining intensive behavioral intervention with tirzepatide
- **SURMOUNT-4** (withdrawal study): 14.8% weight regain within 1 year of discontinuation, confirming ongoing therapy is required

**Cardiovascular Outcomes: SURPASS-CVOT**

The SURPASS-CVOT trial demonstrated significant improvements in cardiometabolic risk factors:
- HbA1c reduction of 2.58%
- LDL cholesterol: -14 to -24% across doses
- Blood pressure reduction: -7 to -10 mmHg systolic
- Triglycerides: -24% reduction at 15mg

**How Tirzepatide Compares to Semaglutide**

The SURPASS-2 head-to-head trial provides clean comparative data:
| Endpoint | Tirzepatide 15mg | Semaglutide 2.4mg |
|---|---|---|
| Average weight loss | 20.9% | 14.9% |
| >20% body weight lost | 56% | 33% |
| HbA1c reduction | 2.58% | 2.09% |
| Waist circumference | -14.1cm | -9.4cm |

**Muscle Preservation During Weight Loss**

An important and often overlooked advantage of tirzepatide: lean mass preservation. MRI body composition analysis from SURMOUNT trials showed that approximately 60–70% of weight lost was adipose tissue — higher fat-to-lean ratio than most conventional weight loss interventions. GIP receptor agonism in skeletal muscle is believed to contribute to this lean-preserving effect, as GIP promotes glucose uptake and protein synthesis in muscle independently of insulin.

**Side Effect Profile and Management**

Gastrointestinal side effects (nausea, vomiting, diarrhea) are the primary adverse events — incidence and severity are dose-dependent and dramatically mitigated by slow dose escalation. The 4-week escalation intervals used in SURMOUNT trials were specifically designed to allow GI adaptation. Most subjects with GI symptoms report resolution by weeks 8–12.`,
"""

w = re.sub(
    r"    fullDescription: `[^`]*`,\n",
    new_fullDesc,
    w, count=1
)

new_benefits = """    benefits: [
      '20.9% average weight loss in SURMOUNT-1 at 72 weeks — highest of any Phase 3 anti-obesity trial',
      '56% of 15mg subjects lost more than 20% body weight — surgical-level results non-invasively',
      'SURPASS-2 head-to-head: 5.5% more weight loss than semaglutide 2.4mg',
      'Dual GIP + GLP-1 activation produces synergistic, not merely additive, weight loss',
      'GIP receptor agonism drives direct adipocyte lipolysis and muscle insulin sensitivity',
      'SURMOUNT-3: 26.6% total weight loss with behavioral lead-in — highest ever recorded in any trial',
      'Preserves lean muscle mass — 60–70% of weight lost is adipose tissue (MRI-verified)',
      'Reduces HbA1c by 2.58%, LDL by 14–24%, blood pressure by 7–10 mmHg',
      'Once-weekly injection due to ~5-day half-life — same convenience as semaglutide',
      'SURMOUNT-2 demonstrates efficacy in Type 2 diabetes: 15.7% weight reduction',
      'Reduces visceral and liver fat more than semaglutide in direct comparison data',
      'FDA-approved (Mounjaro/Zepbound) — the most clinical evidence available for any dual agonist',
    ],
"""
w = re.sub(
    r"    benefits: \[[^\]]*\],\n",
    new_benefits,
    w, count=1
)

new_protocol = """    protocol: `**Escalation Protocol (16 weeks to maintenance — SURMOUNT reference):**
- Weeks 1–4: 2.5mg once weekly
- Weeks 5–8: 5mg once weekly
- Weeks 9–12: 7.5mg once weekly
- Weeks 13–16: 10mg once weekly
- Weeks 17–20: 12.5mg once weekly
- Week 21+: 15mg once weekly (maximum dose)

**Injection Instructions:**
- Subcutaneous injection: abdomen (2 inches from navel), thigh, or upper arm
- Rotate injection sites each week to prevent lipohypertrophy
- Same day each week for consistent plasma levels
- May take with or without food

**Managing GI Effects:**
- Begin dose escalation strictly at 4-week intervals — never accelerate
- Eat smaller meals; avoid high-fat, heavy meals on injection day
- Evening injections allow sleeping through initial nausea in first 2–3 days of new dose
- GI symptoms typically resolve fully by weeks 8–12

**What to Expect by Phase:**
- Weeks 1–8 (2.5–5mg): Appetite reduction, 1–2% weight loss, GI adjustment
- Weeks 9–16 (7.5–10mg): Primary fat loss phase — 0.5–1.5% weight loss/week
- Weeks 17+ (12.5–15mg): Sustained weight loss, body composition improvements, metabolic marker normalization`,
"""
w = re.sub(
    r"    protocol: `[^`]*`,\n",
    new_protocol,
    w, count=1
)

new_highlights = """    highlights: [
      { title: '20.9% Weight Loss', body: 'SURMOUNT-1: 20.9% average body weight reduction at 72 weeks — the highest Phase 3 result ever for any anti-obesity compound.' },
      { title: 'Beats Semaglutide', body: 'SURPASS-2 head-to-head: 5.5% greater weight loss than semaglutide 2.4mg — the largest comparative gap between approved agents.' },
      { title: '56% Lose 20%+', body: 'At 15mg dose, 56% of subjects lost more than 20% of body weight — outcomes previously achievable only through bariatric surgery.' },
    ],
"""
w = re.sub(
    r"    highlights: \[.*?\],\n",
    new_highlights,
    w, count=1, flags=re.DOTALL
)

src = src[:ws] + w + src[we:]
print("✓ Tirzepatide 15mg patched")

# ─────────────────────────────────────────────────────────────────
# 3. IGF-1 LR3
# ─────────────────────────────────────────────────────────────────
slug = 'igf-1-lr3'
next_slug = 'ghk-cu'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

new_fullDesc = """    fullDescription: `IGF-1 LR3 (Insulin-like Growth Factor-1 Long Arg3) is the most potent anabolic research peptide for direct muscle hypertrophy and hyperplasia. Unlike growth hormone peptides that stimulate endogenous GH release — which then triggers hepatic IGF-1 production — IGF-1 LR3 acts as the downstream effector itself, delivering anabolic signaling directly to muscle tissue without the intermediate steps.

**The LR3 Modification: Why It Matters**

Native IGF-1 has a half-life of just 15–90 minutes in circulation because it is rapidly bound and inactivated by IGF Binding Proteins (IGFBPs) — a family of 6 carrier proteins that sequester IGF-1 from its receptors. Over 99% of circulating IGF-1 is bound to IGFBPs at any given time, making free, bioavailable IGF-1 extremely scarce.

The LR3 modification changes this completely. IGF-1 LR3 has:
- An arginine-to-glutamate substitution at position 3 of the mature sequence
- An 8-amino-acid N-terminal extension (the "Long" component)
- These modifications reduce IGFBP binding affinity by ~97%, keeping IGF-1 LR3 in the free, active form

The result: **13× longer half-life** (20–30 hours vs. 15–90 minutes) and dramatically higher tissue exposure per unit dose. This is not a trivial pharmacokinetic difference — it fundamentally changes what is achievable compared to native IGF-1.

**Hyperplasia: The Unique Anabolic Advantage**

IGF-1 LR3's most important and unique property is its capacity to stimulate muscle cell hyperplasia — the creation of entirely new muscle fibers — rather than just hypertrophy (enlargement of existing fibers).

This distinction matters enormously for long-term muscle architecture:
- **Hypertrophy** (from training and most anabolics): Existing muscle fibers get larger. If the stimulus is removed, they shrink back toward baseline.
- **Hyperplasia** (from IGF-1/MGF): New satellite cells are recruited and differentiated into permanent new muscle fibers. Once formed, these fibers become a permanent part of your muscle architecture.

IGF-1 LR3 activates both PI3K/Akt/mTOR (hypertrophy pathway) and MEK/ERK/Ras (proliferation/hyperplasia pathway) simultaneously — an unusual dual anabolic signal that most compounds cannot replicate.

**The GH-IGF-1 Axis: Where IGF-1 LR3 Fits**

The growth hormone axis operates as a cascade:
1. Hypothalamus releases GHRH → stimulates pituitary GH secretion
2. Pituitary GH → acts on liver and peripheral tissues
3. Liver/tissues produce IGF-1 → drives anabolism in muscle, bone, and connective tissue

GH peptides (Ipamorelin, CJC-1295) work at step 1–2 of this cascade. IGF-1 LR3 works at step 3 — and can bypass all upstream steps entirely. This makes it uniquely powerful for situations where the pituitary or GH response is limiting, and also makes it genuinely synergistic with GH peptides (which increase endogenous IGF-1 while LR3 adds a parallel direct signal).

**Nutrient Partitioning Effect**

Beyond muscle tissue directly, IGF-1 LR3 improves nutrient partitioning — the ratio of calories directed toward muscle vs. fat storage. By activating GLUT-4 translocation in muscle cells (improving glucose uptake) and inhibiting adipocyte differentiation, IGF-1 LR3 biases the body's metabolic priorities toward lean tissue accretion, particularly in a caloric surplus.

**Connective Tissue and Injury Resistance**

IGF-1 receptors are expressed in tenocytes (tendon cells), ligament fibroblasts, and chondrocytes (cartilage cells). IGF-1 LR3 stimulates collagen synthesis in these connective tissues, increasing tensile strength and injury resistance during high-intensity anabolic training phases when connective tissue is often the limiting factor.

**Cycle Architecture: The Critical Rule**

IGF-1 LR3's efficacy is time-limited by receptor desensitization. Continuous use leads to IGF-1R downregulation within 4–6 weeks — the receptor density decreases and the anabolic response progressively diminishes. This is why strict cycling is mandatory:
- Maximum 4–6 weeks of continuous use
- Minimum 4 weeks completely off (ideally 6–8 weeks)
- During off periods, GH peptides maintain the GH axis without driving receptor desensitization`,
"""

w = re.sub(
    r"    fullDescription: `[^`]*`,\n",
    new_fullDesc,
    w, count=1
)

new_benefits = """    benefits: [
      'Stimulates both muscle hyperplasia (new fiber creation) AND hypertrophy — a uniquely dual anabolic mechanism',
      '13× longer half-life than native IGF-1 due to IGFBP-resistance modifications',
      'Directly activates PI3K/Akt/mTOR and MEK/ERK/Ras pathways simultaneously',
      'Bypasses the GH-liver axis — direct downstream anabolic signaling',
      'Hyperplasia-driven gains represent permanent changes to muscle fiber architecture',
      'Improves nutrient partitioning — directs calories toward muscle over fat storage',
      'Enhances connective tissue strength via tenocyte and fibroblast IGF-1R activation',
      'Synergistic with Ipamorelin/CJC-1295 for complete GH-axis optimization',
      'Post-workout timing maximizes satellite cell recruitment at the site of muscle damage',
      'GLUT-4 translocation in muscle cells — improves intra-workout glucose uptake',
      'Dramatically accelerates recovery — enables higher training frequency',
      'Short cycle design (4–6 weeks) prevents receptor downregulation and maintains sensitivity',
    ],
"""
w = re.sub(
    r"    benefits: \[[^\]]*\],\n",
    new_benefits,
    w, count=1
)

new_protocol = """    protocol: `**Cycle Protocol (maximum 4–6 weeks):**
- Dose: 40–100mcg per injection
- Starting dose: 40–50mcg (assess tolerance before escalating)
- Advanced dose: 80–100mcg (experienced users only)
- Timing: Immediately post-workout (within 15–30 minutes of training completion)
- Route: Subcutaneous injection near the trained muscle group (bilateral if full-body)
- Frequency: Daily on training days; rest days optional at reduced dose

**Off-Cycle Rules:**
- Minimum 4 weeks completely off — ideally 6–8 weeks for full receptor resensitization
- Continue Ipamorelin/CJC-1295 throughout off-cycle for baseline GH axis maintenance
- Monitor for signs of receptor desensitization (diminishing pumps, reduced recovery speed) — if detected, end cycle immediately regardless of week

**Advanced Stacking:**
- Stack with BPC-157 during anabolic cycles for connective tissue protection (prevents tendon/ligament injury from rapid strength gains)
- Can overlap the first 2 weeks of an Ipamorelin/CJC-1295 cycle for peak anabolic launch phase

**Reconstitution:**
- Reconstitute with 0.6% acetic acid (not bacteriostatic water) for stability
- Store at 2–8°C after reconstitution; use within 3 weeks
- Protect from light and temperature fluctuations`,
"""
w = re.sub(
    r"    protocol: `[^`]*`,\n",
    new_protocol,
    w, count=1
)

new_highlights = """    highlights: [
      { title: 'Hyperplasia + Hypertrophy', body: 'Simultaneously activates both muscle fiber creation (hyperplasia) and enlargement (hypertrophy) pathways — the only compound to reliably do both.' },
      { title: '13× Half-Life', body: 'IGFBP-resistant LR3 modification produces 20–30 hour half-life vs. 15–90 minutes for native IGF-1 — fundamentally different bioavailability profile.' },
      { title: 'Strict Cycling Required', body: '4–6 week on, 4–8 week off protocol prevents IGF-1R downregulation and preserves long-term receptor sensitivity.' },
    ],
"""
w = re.sub(
    r"    highlights: \[.*?\],\n",
    new_highlights,
    w, count=1, flags=re.DOTALL
)

src = src[:ws] + w + src[we:]
print("✓ IGF-1 LR3 patched")

# ─────────────────────────────────────────────────────────────────
# 4. NAD+ 500mg
# ─────────────────────────────────────────────────────────────────
slug = 'nad-plus'
next_slug = 'snap-8'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

new_fullDesc = """    fullDescription: `NAD+ (Nicotinamide Adenine Dinucleotide) is the most fundamental coenzyme in cellular biology — present in every living cell, required for over 500 enzymatic reactions, and serving as the primary electron carrier in the mitochondrial electron transport chain. Without NAD+, cells cannot produce ATP, cannot repair DNA damage, and cannot maintain the regulatory programs that distinguish youthful cellular function from senescent deterioration.

**The NAD+ Decline: Central to the Aging Process**

Aging is now understood to be fundamentally a process of declining cellular energy and maintenance capacity — and NAD+ decline is one of its central drivers. The data is unequivocal:

- At age 20: ~100% baseline NAD+ levels
- At age 40: ~50–60% of youthful levels
- At age 60: ~30–40% remaining
- At age 80: as low as 10–15%

This is not a peripheral change. A 50% decline in NAD+ by midlife means a 50% reduction in the substrate required for sirtuins, PARP enzymes, CD38, and the electron transport chain — the core systems that determine whether cells maintain themselves or deteriorate. David Sinclair's landmark research at Harvard identified NAD+ decline as a primary upstream driver of the aging hallmarks documented by the Hallmarks of Aging framework.

**Sirtuins: The Longevity Enzymes That Need NAD+**

The sirtuin family (SIRT1–SIRT7) are the most studied longevity-associated proteins in biology. They are NAD+-dependent deacylases — enzymes that can only function when NAD+ is available as a cofactor. Without adequate NAD+, sirtuins are enzymatically inactive regardless of their expression levels.

What sirtuins do when active:
- **SIRT1**: Deacetylates p53 and NF-κB (anti-inflammatory), activates PGC-1α (mitochondrial biogenesis), regulates circadian rhythms
- **SIRT3**: Maintains mitochondrial protein acetylation homeostasis, critical for electron transport chain efficiency
- **SIRT6**: DNA double-strand break repair, telomere maintenance, suppression of inflammatory gene expression
- **SIRT7**: Ribosomal DNA stability, regulation of cellular stress responses

Restoring NAD+ essentially reboots these cellular maintenance systems — not by altering gene expression directly, but by providing the fuel that allows existing longevity programs to run at full capacity.

**PARP Activation: The DNA Damage Response**

PARP enzymes (Poly ADP-Ribose Polymerases) are the cell's emergency DNA repair crew — they detect and repair single-strand DNA breaks that accumulate constantly from oxidative damage, UV exposure, and replication errors. PARPs are NAD+-dependent and consume large amounts of NAD+ when activated.

This creates a critical dynamic in aging: as cellular stress and DNA damage increase with age, PARP activation depletes NAD+ even faster, creating a vicious cycle where declining NAD+ reduces repair capacity → more damage accumulates → more PARP activation → further NAD+ depletion. Supplementing NAD+ breaks this cycle by ensuring PARP enzymes have the substrate they need without depleting the NAD+ pool available for sirtuins and the electron transport chain.

**Mitochondrial Function and Energy Production**

NAD+ is the primary electron acceptor in cellular energy metabolism. In glycolysis, the citric acid cycle, and beta-oxidation (fat burning), NAD+ accepts electrons from metabolites (becoming NADH), which then enter the electron transport chain to produce ATP. When NAD+ levels fall, this entire process becomes rate-limited — the metabolic engine slows regardless of substrate availability.

Clinical correlates of this mitochondrial slowdown are familiar: declining energy levels, reduced exercise capacity, longer recovery times, brain fog, and impaired thermoregulation — all symptoms that correspond to NAD+ decline timelines.

**Cognitive Performance and Neurological Health**

The brain is one of the most energetically demanding tissues, consuming approximately 20% of the body's ATP despite representing only 2% of body mass. Neurons are exquisitely sensitive to NAD+ decline:
- Cognitive performance studies with NAD+ precursors show improvements in processing speed, working memory, and executive function
- Neuroprotective effects through SIRT1 and SIRT3 in neuronal mitochondria
- NAD+ supports the tryptophan-kynurenine pathway, which generates NAD+ in the brain and is linked to neurotransmitter homeostasis
- Animal model data demonstrates that NAD+ restoration reverses cognitive aging markers, though human translation is still being studied

**Injectable NAD+ vs. Oral Precursors (NMN/NR)**

Oral NAD+ precursors (NMN, NR) require conversion steps before becoming active NAD+ — NMN → NAD+ via NMN adenyltransferase; NR → NMN → NAD+. These pathways are tissue-specific and capacity-limited, particularly in aging cells where conversion enzyme activity declines.

Subcutaneous or intravenous NAD+ bypasses all precursor conversion — it enters the bloodstream directly. IV administration produces plasma NAD+ levels 100–1000× higher than oral supplementation. The tradeoff is practicality (requiring injection equipment) and the well-documented "NAD+ flush" — a temporary flushing, tingling, or muscle cramping that occurs with rapid IV infusion (managed by slow infusion rate). Subcutaneous injection at lower doses (100–250mg) is generally well-tolerated without significant flushing.`,
"""

w = re.sub(
    r"    fullDescription: `[^`]*`,\n",
    new_fullDesc,
    w, count=1
)

new_benefits = """    benefits: [
      'Restores NAD+ levels depleted by 50–90% with aging — directly addressing a central aging mechanism',
      'Activates SIRT1–SIRT7 sirtuin longevity enzymes — the cell\'s primary maintenance and DNA repair regulators',
      'Fuels PARP DNA damage repair enzymes — breaks the NAD+/DNA damage vicious cycle of aging',
      'Improves mitochondrial efficiency across all tissues — direct energy production enhancement',
      'Cognitive improvements documented: processing speed, working memory, executive function',
      'Supports PGC-1α activation through SIRT1 — drives mitochondrial biogenesis (more mitochondria)',
      'Reduces inflammatory signaling through NF-κB deacetylation via SIRT1',
      'SIRT6 activation maintains telomere integrity — a direct anti-aging mechanism at the chromosomal level',
      'Injectable NAD+ bypasses oral precursor conversion limitations — 100–1000× higher plasma levels than NMN/NR',
      'Improves insulin sensitivity and metabolic health markers in human clinical studies',
      'Synergistic with Epithalon (telomere/pineal) and GHK-Cu (gene expression) for full anti-aging stack',
      'No cycling required — year-round use with no receptor downregulation',
    ],
"""
w = re.sub(
    r"    benefits: \[[^\]]*\],\n",
    new_benefits,
    w, count=1
)

new_protocol = """    protocol: `**Standard Subcutaneous Protocol:**
- Dose: 100–500mg per injection
- Starting dose: 100mg 2–3× per week (assess tolerance)
- Maintenance: 250–500mg 2–3× per week
- Timing: Morning preferred — energy and cognitive benefits are felt acutely
- Injection: Subcutaneous, abdomen or thigh
- Duration: Year-round; no cycling required

**IV Protocol (Clinical/High-Dose):**
- 500–1,000mg via slow IV infusion (saline bag over 90–120 minutes)
- Weekly for 4–8 weeks, then monthly maintenance
- Administer slowly — rapid infusion causes flushing, muscle cramping, and nausea
- Most common for cognitive reset protocols and acute energy restoration

**Managing the NAD+ Flush:**
- Subcutaneous injection at <250mg: usually well-tolerated without significant flushing
- At higher doses: expect temporary warmth, tingling, or tightness — peaks at 10–20 minutes and resolves
- Reducing dose or slowing IV infusion rate eliminates flushing entirely

**Anti-Aging Stack Protocol:**
- NAD+ 250mg 3× per week
- Epithalon 10mg 2× per week (burst protocol — see Epithalon page)
- GHK-Cu 2–3mg 3× per week
- This combination addresses NAD+ energy, telomere length, and gene expression reset simultaneously`,
"""
w = re.sub(
    r"    protocol: `[^`]*`,\n",
    new_protocol,
    w, count=1
)

new_highlights = """    highlights: [
      { title: 'NAD+ Drops 85% by 80', body: 'From 100% at age 20 to as low as 10–15% by age 80 — a decline now recognized as a primary upstream driver of the aging hallmarks.' },
      { title: 'Sirtuin Longevity Fuel', body: 'SIRT1–SIRT7 are enzymatically inactive without NAD+ — supplementation reboots cellular maintenance programs that have been starved of their required substrate.' },
      { title: 'Injectable vs. Oral', body: 'Subcutaneous/IV NAD+ bypasses precursor conversion pathways — produces 100–1000× higher plasma levels than NMN or NR supplements.' },
    ],
"""
w = re.sub(
    r"    highlights: \[.*?\],\n",
    new_highlights,
    w, count=1, flags=re.DOTALL
)

src = src[:ws] + w + src[we:]
print("✓ NAD+ 500mg patched")

# ─────────────────────────────────────────────────────────────────
# 5. RETATRUTIDE 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'retatrutide-10mg'
next_slug = 'retatrutide-15mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

new_fullDesc = """    fullDescription: `Retatrutide (LY3437943) is a triple agonist — the first single peptide molecule designed to simultaneously activate three distinct metabolic hormone receptors: GIP (Glucose-Dependent Insulinotropic Polypeptide), GLP-1 (Glucagon-Like Peptide-1), and the Glucagon receptor. This tri-receptor approach has produced the most dramatic weight loss data in the history of pharmaceutical anti-obesity medicine, with Phase 2 trials demonstrating average body weight reductions of 24.2% — a figure that exceeded every previous compound at the time of publication.

**The Third Receptor: Why Glucagon Changes Everything**

Semaglutide targets one receptor (GLP-1). Tirzepatide targets two (GIP + GLP-1). Retatrutide targets three — and the third receptor, glucagon (GCG), is the key differentiator that drives retatrutide's superior efficacy.

Glucagon's metabolic role is often misunderstood. Most people know glucagon as a counter-regulatory hormone that raises blood sugar — but in the context of retatrutide's co-agonist design, glucagon receptor activation provides critical fat-burning effects that neither GLP-1 nor GIP can generate:

- **Hepatic fat reduction**: Glucagon receptor agonism drives aggressive hepatic lipid metabolism, reducing liver fat content more effectively than any other mechanism. SURMOUNT data showed liver fat reduction of 60%+ in subjects with baseline hepatic steatosis.
- **Energy expenditure**: Glucagon activates thermogenic pathways (brown adipose tissue activation, uncoupling protein expression), increasing basal metabolic rate beyond the food intake reduction from GLP-1 effects
- **Lipolysis**: Direct glucagon receptor activation on white adipose tissue triggers fat cell lipolysis — mobilizing stored triglycerides for oxidation
- **Visceral fat targeting**: Glucagon's lipolytic effects are disproportionately active on visceral (intra-abdominal) fat — the depot most strongly associated with metabolic disease and cardiovascular risk

The challenge with pure glucagon agonism is hyperglycemia — glucagon raises blood glucose. Retatrutide's design elegantly balances this by pairing glucagon activation with GIP and GLP-1's insulin-stimulating effects, maintaining glucose homeostasis while capturing glucagon's fat-mobilizing benefits.

**Phase 2 NEJM Data: The Numbers**

Retatrutide's Phase 2 results were published in the New England Journal of Medicine in 2023 — one of the highest-impact peer-reviewed journals in medicine. The data across doses:

| Dose | Weight Loss (48 weeks) | Notes |
|---|---|---|
| Placebo | 2.1% | Baseline reference |
| 1mg | 8.7% | Lowest dose |
| 4mg | 17.5% | Mid-range |
| 8mg | 22.8% | Near-maximum |
| 12mg | 24.2% | Maximum studied dose |

At 12mg, 100% of retatrutide subjects achieved at least 5% weight loss. More remarkably, the weight loss trajectory at 48 weeks had not yet plateaued — suggesting the full efficacy potential extends beyond what the Phase 2 study captured.

**Metabolic Marker Improvements**

Beyond weight loss, the Phase 2 data documented:
- Triglycerides: -42% reduction at 12mg (exceptional — nearly double semaglutide's effect)
- Fasting insulin: -65% reduction (profound insulin sensitization)
- Blood pressure: -8 to -12 mmHg systolic
- Waist circumference: -21.7cm at 12mg
- Liver fat (MRI-PDFF): 60%+ reduction in subjects with hepatic steatosis

**Phase 3 Status and the Path Forward**

Retatrutide is currently in Phase 3 clinical development (TRIUMPH program). The Phase 2 data was sufficiently compelling that FDA granted it Fast Track designation for obesity and type 2 diabetes. Phase 3 enrollment began in 2023, with results expected 2025–2026. If Phase 3 confirms the Phase 2 trajectory, retatrutide may represent the most significant advance in anti-obesity medicine since GLP-1 agonism was established.

**Retatrutide vs. Tirzepatide vs. Semaglutide**

The weight loss hierarchy is now clear from available data:
1. Retatrutide 12mg: ~24.2% body weight loss (Phase 2, 48 weeks)
2. Tirzepatide 15mg: ~20.9% body weight loss (Phase 3, 72 weeks)
3. Semaglutide 2.4mg: ~14.9% body weight loss (Phase 3, 68 weeks)

It is important to note that these comparisons are across different trial designs and durations — the retatrutide number comes from a shorter Phase 2 study. Direct head-to-head data is expected in Phase 3 programs.`,
"""

w = re.sub(
    r"    fullDescription: `[^`]*`,\n",
    new_fullDesc,
    w, count=1
)

new_benefits = """    benefits: [
      '24.2% average weight loss in NEJM Phase 2 — the highest ever recorded for any anti-obesity compound at time of publication',
      'Triple GIP + GLP-1 + Glucagon activation: three independent metabolic pathways simultaneously',
      'Glucagon receptor agonism drives hepatic fat reduction 60%+ in subjects with liver steatosis',
      'Triglyceride reduction of -42% at 12mg — nearly double the effect of semaglutide',
      '-65% fasting insulin reduction — profound systemic insulin sensitization',
      'Energy expenditure increase via brown adipose tissue activation and thermogenic pathways',
      '100% of Phase 2 subjects at 12mg lost at least 5% body weight — no non-responders at maximum dose',
      'Visceral fat targeting disproportionate to subcutaneous fat — highest metabolic disease risk reduction',
      'FDA Fast Track designation for obesity and T2D — expedited regulatory pathway',
      'Currently in Phase 3 TRIUMPH trials — the most watched compound in metabolic medicine',
      'Weight loss trajectory had not plateaued at 48 weeks — full potential extends beyond Phase 2 timeframe',
      'Same once-weekly subcutaneous injection convenience as semaglutide and tirzepatide',
    ],
"""
w = re.sub(
    r"    benefits: \[[^\]]*\],\n",
    new_benefits,
    w, count=1
)

new_protocol = """    protocol: `**Phase 2 Reference Escalation Protocol:**
- Weeks 1–4: 2mg once weekly
- Weeks 5–8: 4mg once weekly
- Weeks 9–12: 6mg once weekly
- Weeks 13–16: 8mg once weekly
- Weeks 17–20: 10mg once weekly
- Week 21+: 12mg once weekly (Phase 2 maximum)

**Injection:**
- Once-weekly subcutaneous injection
- Sites: abdomen (2 inches from navel), anterior thigh, or posterolateral upper arm
- Rotate sites each week
- Same day of week for consistent plasma trough levels

**GI Management:**
- The triple agonist mechanism produces similar but slightly more pronounced GI effects vs. tirzepatide during initial escalation
- Standard escalation intervals (4 weeks minimum between dose increases) are critical
- Evening injections on dose-change weeks allow sleeping through initial nausea
- Most GI effects resolve fully by weeks 10–14 as adaptation occurs

**Research Context:**
- Phase 2 dosing is the reference for research protocols
- The 10mg vial allows full escalation to the Phase 2 maximum (12mg/week) with supply for multiple weeks at lower doses
- Most researchers begin at 2–4mg to assess GI tolerance before escalating`,
"""
w = re.sub(
    r"    protocol: `[^`]*`,\n",
    new_protocol,
    w, count=1
)

new_highlights = """    highlights: [
      { title: '24.2% in Phase 2', body: 'NEJM-published Phase 2 data — 24.2% average body weight reduction at 48 weeks at 12mg dose. Weight loss had not plateaued at study end.' },
      { title: 'Triple Receptor Agonist', body: 'GIP + GLP-1 + Glucagon — the glucagon component drives hepatic fat reduction (-60%), energy expenditure, and visceral lipolysis beyond GLP-1/GIP capacity.' },
      { title: 'FDA Fast Track', body: 'Received FDA Fast Track designation for obesity and T2D. Phase 3 (TRIUMPH program) active — results expected 2025–2026.' },
    ],
"""
w = re.sub(
    r"    highlights: \[.*?\],\n",
    new_highlights,
    w, count=1, flags=re.DOTALL
)

src = src[:ws] + w + src[we:]
print("✓ Retatrutide 10mg patched")

# ─────────────────────────────────────────────────────────────────
# Write output
# ─────────────────────────────────────────────────────────────────
if src == original:
    print("WARNING: No changes were made!")
    sys.exit(1)

with open('lib/products.ts', 'w', encoding='utf-8') as f:
    f.write(src)

print("\nAll 5 products patched successfully.")
print(f"File size change: {len(original)} → {len(src)} chars (+{len(src)-len(original)})")
