#!/usr/bin/env python3
"""Batch 3 — 10 products: PEG-MGF, Kisspeptin-10, Gonadorelin, FOXO4-DRI, SS-31, MOTS-c, AOD9604, DSIP, PT-141, BPC-157 Capsules"""

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

# ─────────────────────────────────────────────────────────────────
# 1. PEG-MGF 2mg
# ─────────────────────────────────────────────────────────────────
slug = 'peg-mgf-2mg'
next_slug = 'kisspeptin-10-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `PEG-MGF (Pegylated Mechano Growth Factor) is a modified splice variant of IGF-1 that plays a fundamentally different role in muscle biology than IGF-1 LR3. While IGF-1 LR3 drives muscle cell hypertrophy and hyperplasia through PI3K/Akt/mTOR signaling, MGF specifically activates dormant muscle satellite cells — the myogenic stem cells that proliferate and fuse with damaged muscle fibers to enable repair and new growth.

**The Mechano Growth Factor Biology**

MGF is generated locally in muscle tissue in response to mechanical load and damage. When muscle fibers are stressed or torn by training, local IGF-1 gene expression shifts to produce the MGF splice variant (rather than IGF-1Ea). MGF then acts in a paracrine fashion — stimulating nearby satellite cells to proliferate (divide and multiply) before they differentiate into new muscle nuclei and fibers.

This mechano-responsive, localized satellite cell activation is distinct from the systemic anabolic signaling of IGF-1:
- **IGF-1 LR3**: Acts systemically via IGF-1R to drive mTOR activation, protein synthesis, and differentiation
- **MGF**: Acts locally via the MGF/E-peptide domain receptor to drive satellite cell proliferation BEFORE differentiation

The two peptides are therefore sequentially complementary: MGF drives satellite cell multiplication, and then IGF-1 LR3 drives their differentiation into new muscle tissue. Running them together covers both phases of the satellite cell response.

**Why Pegylation Was Critical**

Native MGF has a half-life of only minutes in plasma — rapidly degraded before it can reach and activate satellite cells in peripheral muscle tissue. The polyethylene glycol (PEG) modification dramatically improves this:
- Native MGF half-life: ~2 minutes
- PEG-MGF half-life: Several days (PEG modification dependent)
- PEG modification also increases molecular size, improving tissue retention at injection sites

This extended half-life transforms MGF from a locally-acting endogenous signal into a practical injectable peptide.

**Muscle Satellite Cell Biology: Why This Matters**

Muscle satellite cells are quiescent under normal conditions — lying dormant along muscle fibers. After damage or intense training, they activate, proliferate, and fuse with existing fibers (contributing new nuclei) or form entirely new fiber segments. The number of satellite cells available and their activation speed determines how effectively muscle can repair and grow.

PEG-MGF appears to:
1. Expand the satellite cell pool through proliferation
2. Accelerate the transition from quiescence to activation
3. Increase the number of nuclei available for muscle fiber repair

This translates to faster recovery between training sessions, reduced DOMS duration, and enhanced adaptation capacity during intensive training blocks.

**PEG-MGF vs. IGF-1 LR3: The Stack Logic**

The ideal protocol combines both: PEG-MGF post-workout (satellite cell activation phase) and IGF-1 LR3 post-workout (differentiation and hypertrophy phase). Because their mechanisms target different phases of myogenesis, they produce additive rather than redundant effects when used together during the same 4–6 week anabolic cycle.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Activates dormant muscle satellite cells — expands the myogenic stem cell pool for repair and growth',
      'Distinct mechanism from IGF-1 LR3: drives satellite cell proliferation before differentiation',
      'Pegylation extends half-life from ~2 minutes to days — enables practical injectable delivery',
      'Accelerates recovery between training sessions by increasing satellite cell availability',
      'Reduces DOMS duration through faster muscle fiber repair initiation',
      'Sequential synergy with IGF-1 LR3: MGF activates, IGF-1 LR3 differentiates',
      'Localized paracrine mechanism — acts at the site of muscle damage',
      'Increases myonuclei number through satellite cell fusion with existing fibers',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**PEG-MGF Protocol:**
- Dose: 200–400mcg per injection
- Timing: Post-workout (within 30 minutes of training completion)
- Route: Subcutaneous injection near the primary trained muscle group
- Frequency: Training days only (rest days optional at 200mcg for systemic satellite cell support)
- Cycle: 4–6 weeks (same as IGF-1 LR3 to manage receptor/cell response)

**Combined with IGF-1 LR3 (Optimal Anabolic Stack):**
- IGF-1 LR3: 40–60mcg post-workout (drives differentiation)
- PEG-MGF: 200–400mcg post-workout (drives proliferation)
- Inject simultaneously — both peptides act in the same post-workout window
- This covers both phases of the satellite cell activation cycle

**Off-Cycle:**
- 4-week minimum off period after each cycle
- Continue Ipamorelin/CJC-1295 during off periods for GH axis maintenance without satellite cell overstimulation`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Satellite Cell Activation', body: 'PEG-MGF activates dormant muscle satellite cells — the myogenic stem cells responsible for fiber repair and new growth.' },
      { title: 'Complementary to IGF-1 LR3', body: 'MGF drives satellite cell proliferation; IGF-1 LR3 drives differentiation — together they cover both phases of the myogenic response.' },
      { title: 'PEG-Extended Half-Life', body: 'Pegylation extends native MGF\'s 2-minute half-life to days — transforming a locally-acting endogenous signal into a practical injectable.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ PEG-MGF 2mg patched")

# ─────────────────────────────────────────────────────────────────
# 2. KISSPEPTIN-10 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'kisspeptin-10-10mg'
next_slug = 'kisspeptin-10-5mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Kisspeptin-10 is the minimal bioactive fragment of Kisspeptin-54 — a hypothalamic neuropeptide that serves as the master "pulse generator" for the entire HPG (Hypothalamic-Pituitary-Gonadal) axis. Without kisspeptin signaling, GnRH secretion ceases, LH and FSH fall to zero, and gonadal steroidogenesis stops entirely. Kisspeptin is not a peripheral modulator — it is the upstream gate that controls whether the HPG axis runs at all.

**The HPG Axis Master Control**

The HPG axis hierarchy:
1. Kisspeptin neurons (hypothalamus) → activate GnRH neurons
2. GnRH (from hypothalamus) → stimulates pituitary LH and FSH release
3. LH (from pituitary) → drives Leydig cell testosterone production
4. FSH (from pituitary) → drives spermatogenesis and gonadal development

Kisspeptin is the first step in this cascade. It acts as the upstream integrator of metabolic, hormonal, and environmental signals that determine whether the reproductive axis is activated. Kisspeptin neurons receive input from leptin, insulin, thyroid hormones, cortisol, and circadian rhythms — and integrate all of these signals to determine appropriate GnRH pulse frequency and amplitude.

**Kisspeptin-10 vs. Kisspeptin-54**

Kisspeptin-54 (the full 54-amino acid peptide) has a short half-life and is difficult to synthesize. Kisspeptin-10 (the 10 C-terminal amino acids, residues 45-54) contains the full binding activity for the KiSS1 receptor (KISS1R, also known as GPR54) and is the biologically active minimum sequence. It retains the full pharmacological potency of the parent peptide at much lower manufacturing complexity.

**KiSS1R Receptor Mechanism**

Kisspeptin-10 binds the KISS1R Gq-coupled receptor on GnRH neurons. This triggers:
- Intracellular calcium release
- GnRH neuron depolarization and firing
- Pulsatile GnRH secretion
- Downstream LH and FSH pulses

The pulsatile nature of kisspeptin administration is critical: pulsatile kisspeptin stimulates LH release, while continuous kisspeptin infusion desensitizes KISS1R and suppresses the HPG axis (analogous to how continuous GnRH agonists downregulate LH through desensitization).

**Clinical Research Applications**

Kisspeptin has been studied in multiple clinical contexts:
- **HPG axis restoration**: Used as a pharmacological tool to restore GnRH pulsatility in hypothalamic amenorrhea
- **Testosterone optimization**: Human studies show kisspeptin administration drives LH surges and testosterone elevation in healthy men
- **HPG axis suppression recovery**: Post-exogenous androgen exposure, kisspeptin may accelerate recovery of the suppressed HPG axis by stimulating GnRH neurons upstream of the pituitary
- **Fertility research**: GnRH-stimulating effects used in reproductive medicine for ovulation induction and timing

**Research Note on Pulsatile Administration**

The HPG axis is inherently pulsatile — GnRH, LH, and testosterone are all secreted in pulses rather than continuously. Kisspeptin-10 protocols must mimic this pulsatile pattern: intermittent injections 2–3× weekly are far more effective than daily or continuous administration, which leads to receptor desensitization and paradoxical HPG suppression.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Master regulator of the HPG axis — acts upstream of GnRH to initiate the entire reproductive hormone cascade',
      'Drives pulsatile GnRH secretion → LH/FSH release → testosterone production',
      'Kisspeptin-10 contains the full KISS1R binding activity of the 54-amino acid parent peptide',
      'Clinical studies confirm LH surges and testosterone elevation in healthy men',
      'Useful for HPG axis restoration protocols after periods of hormonal suppression',
      'Integrates metabolic signals (leptin, insulin) into HPG axis activation',
      'Pulsatile administration preserves KISS1R sensitivity — prevents the desensitization seen with continuous agonists',
      '98.8% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Kisspeptin-10 Research Protocol:**
- Dose: 50–100mcg per injection
- Route: Subcutaneous injection
- Frequency: 2–3× weekly (PULSATILE — not daily)
- Timing: Any time of day; morning injection aligns with natural LH pulse patterns

**Critical Rule — Pulsatile Administration Only:**
- Daily use leads to KISS1R desensitization → HPG axis suppression
- 2–3× weekly spacing allows receptor resensitization between doses
- Think of each injection as one "pulse" — mimic the body\'s intermittent kisspeptin release pattern

**HPG Axis Restoration Protocol:**
- Kisspeptin-10 50–100mcg 3× weekly
- Gonadorelin 50–100mcg 2–3× weekly
- These two peptides work at adjacent levels of the HPG cascade
- Combination stimulates both kisspeptin-GnRH and GnRH-LH/FSH steps simultaneously

**Expected Response:**
- LH pulse increase: within 60–120 minutes of injection
- Testosterone elevation: 24–48 hours after consistent pulsatile protocol
- Testicular volume maintenance: 8+ week protocols`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'HPG Axis Master Gate', body: 'Kisspeptin is the upstream activator of GnRH neurons — without kisspeptin signaling, the entire HPG axis (testosterone, LH, FSH) shuts down.' },
      { title: 'Pulsatile Protocol Required', body: 'Daily kisspeptin causes KISS1R desensitization and HPG suppression — 2–3× weekly pulsatile dosing is mandatory for stimulatory effects.' },
      { title: 'Clinical LH Evidence', body: 'Human studies confirm Kisspeptin-10 drives measurable LH surges and testosterone elevation in healthy men.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Kisspeptin-10 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 3. GONADORELIN ACETATE
# ─────────────────────────────────────────────────────────────────
slug = 'gonadorelin-acetate'
next_slug = 'epitalon-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Gonadorelin is a synthetic form of GnRH (Gonadotropin-Releasing Hormone) — the exact 10-amino acid sequence of human GnRH with no modifications. It is structurally identical to endogenous GnRH and was the first GnRH peptide approved for clinical use. Gonadorelin activates pituitary GnRH receptors to drive LH and FSH release — the downstream signals that maintain testicular function, testosterone production, and spermatogenesis.

**GnRH Biology and the Pituitary Gate**

GnRH is produced by GnRH neurons in the hypothalamus and released into the hypothalamic-pituitary portal circulation in pulses every 60–120 minutes. These pulses arrive at the anterior pituitary where they bind GnRH receptors on gonadotrophs — specialized cells that respond by releasing LH (Luteinizing Hormone) and FSH (Follicle-Stimulating Hormone) into systemic circulation.

LH targets Leydig cells in the testes, driving cholesterol-to-testosterone conversion. FSH targets Sertoli cells, supporting spermatogenesis and testicular health. When GnRH pulsatility is disrupted — whether by exogenous androgens, stress, illness, or undernutrition — LH and FSH fall, testosterone drops, and testicular atrophy begins.

Gonadorelin fills this role pharmacologically: providing the GnRH pulses that maintain pituitary GnRH receptor sensitivity and drive ongoing LH/FSH secretion.

**Pulsatile vs. Continuous: The Critical Distinction**

This is the most important pharmacological principle for gonadorelin use:
- **Pulsatile gonadorelin** (injections 2–3× weekly): Stimulates LH and FSH release — the intended clinical effect
- **Continuous gonadorelin** (daily or more frequent): Causes GnRH receptor downregulation → LH/FSH suppression — the opposite of the intended effect

This is the same principle exploited by GnRH agonist drugs (leuprolide, etc.) used for chemical castration in prostate cancer. By making GnRH receptor activation continuous rather than pulsatile, they paradoxically shut down testosterone production. Gonadorelin protocols must be designed to avoid this paradox.

**Applications in Research**

1. **TRT-adjacent protocols**: During testosterone replacement or exogenous androgen protocols, endogenous GnRH/LH/FSH signals are suppressed. Gonadorelin injections maintain pituitary GnRH receptor sensitivity and testicular stimulation — preventing the testicular atrophy and spermatogenesis suppression associated with exogenous androgen use.

2. **Post-cycle restoration**: Following androgen suppression, the HPG axis requires time and stimulation to recover. Gonadorelin helps accelerate HPG axis reactivation by providing the GnRH signal that restarts pituitary gonadotropin secretion.

3. **Diagnostic testing**: Gonadorelin is used clinically as a GnRH stimulation test — measuring pituitary LH/FSH response to a standard gonadorelin dose helps diagnose hypothalamic vs. pituitary causes of hypogonadism.

**Gonadorelin vs. Kisspeptin-10**

Both peptides support the HPG axis through related but distinct mechanisms:
- Kisspeptin-10: Acts upstream of GnRH neurons — stimulates endogenous GnRH release
- Gonadorelin: Acts as synthetic GnRH itself — directly stimulates pituitary LH/FSH

For maximum HPG axis stimulation, combining both provides coverage at two levels of the cascade simultaneously.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Identical to endogenous GnRH — stimulates LH and FSH through the body\'s natural pituitary GnRH receptor',
      'Maintains testicular function and testosterone production during androgen suppression protocols',
      'Prevents testicular atrophy through continued LH stimulation of Leydig cells',
      'Preserves spermatogenesis through FSH signaling to Sertoli cells',
      'Used clinically as the GnRH stimulation test for HPG axis diagnostic evaluation',
      'Supports HPG axis recovery after periods of suppression',
      'Pulsatile administration preserves pituitary GnRH receptor sensitivity',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Gonadorelin Protocol (Pulsatile — Mandatory):**
- Dose: 50–100mcg per injection
- Route: Subcutaneous injection
- Frequency: 2–3× weekly (never daily — daily use causes receptor downregulation)
- Timing: Space injections evenly through the week (e.g., Monday/Wednesday/Friday)

**During Exogenous Androgen Protocols:**
- 100mcg gonadorelin 2–3× weekly to maintain pituitary sensitivity
- Prevents complete HPG axis shutdown and testicular atrophy
- Does NOT produce meaningful testosterone restoration when endogenous testosterone is suppressed — purpose is maintenance, not replacement

**Post-Suppression HPG Restoration:**
- Gonadorelin 100mcg 3× weekly
- Kisspeptin-10 50–100mcg 2–3× weekly (complementary upstream stimulation)
- Continue for 8–16 weeks or until LH/FSH/testosterone normalize

**Key Rules:**
- NEVER use daily — triggers the same HPG suppression as GnRH agonist drugs
- Dose remains at 50–100mcg — higher doses don\'t improve efficacy and increase desensitization risk
- Monitor LH, FSH, and testosterone every 4–6 weeks to assess response`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Identical to Human GnRH', body: 'Gonadorelin is the exact 10-amino acid human GnRH sequence — clinically used for 50+ years to test and restore HPG axis function.' },
      { title: 'Pulsatile Principle', body: 'Daily use paradoxically suppresses LH/FSH (the GnRH agonist effect) — 2–3× weekly pulsatile protocol is required for stimulatory effects.' },
      { title: 'TRT Companion', body: 'Used during exogenous androgen protocols to prevent testicular atrophy and maintain FSH-driven spermatogenesis.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Gonadorelin Acetate patched")

# ─────────────────────────────────────────────────────────────────
# 4. FOXO4-DRI 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'foxo4-dri-10mg'
next_slug = 'ghk-cu-100mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `FOXO4-DRI is the world\'s first peptide-based senolytic — a compound designed to selectively eliminate senescent ("zombie") cells that accumulate with aging and are now recognized as a primary driver of the aging phenotype across organs and tissues. Published in Cell (van Deursen lab, 2017), FOXO4-DRI reversed multiple hallmarks of aging in mouse models including frailty, muscle wasting, kidney dysfunction, and hair loss.

**Senescent Cells: The Aging Accumulation Problem**

Cellular senescence is a state of permanent cell cycle arrest. When cells sustain DNA damage, oncogene activation, or other stresses they cannot repair, they enter senescence rather than dying via apoptosis. Senescent cells stop dividing but remain metabolically active — and critically, they secrete a cocktail of inflammatory cytokines, proteases, and growth factors known as the SASP (Senescence-Associated Secretory Phenotype).

In young organisms, senescent cells are efficiently cleared by the immune system. As we age, this immune clearance fails, and senescent cells accumulate across tissues. By middle age, significant senescent cell burdens are found in:
- Adipose tissue, liver, lung, kidney, heart, and brain
- Skeletal muscle (contributing to sarcopenia)
- Skin, cartilage, and bone

The SASP from these cells drives chronic low-grade inflammation ("inflammaging"), disrupts stem cell niches, accelerates local tissue dysfunction, and creates paracrine propagation — senescent cells can induce neighboring healthy cells to become senescent.

**The FOXO4-p53 Survival Mechanism**

Normal cells survive through a survival-apoptosis balance. Senescent cells, however, have an abnormally strong anti-apoptotic program — they actively resist cell death despite accumulating enormous DNA damage. Research by van Deursen\'s group identified that senescent cells rely on a unique survival interaction: FOXO4 (a transcription factor upregulated in senescence) binds to nuclear p53 and prevents it from triggering mitochondrial apoptosis.

FOXO4-DRI is a D-retro-inverso peptide (synthesized from D-amino acids in reverse sequence) that penetrates cells and disrupts the FOXO4-p53 interaction. In senescent cells (which overexpress FOXO4), this disruption tips the balance toward apoptosis, triggering programmed cell death. In healthy cells (which have normal, low FOXO4 expression), the peptide has minimal effect — the selectivity is provided by the senescent cell\'s own elevated FOXO4.

**The Cell Publication: Proof of Concept**

The 2017 Cell paper by Baar et al. demonstrated:
- FOXO4-DRI selectively killed chemotherapy-induced, oncogene-induced, and naturally aged senescent cells in vitro
- In aged mice (>24 months), FOXO4-DRI administration led to:
  - Improved physical fitness and grip strength (reversal of frailty)
  - Restoration of normal coat density and hair follicle cycling
  - Reduced renal dysfunction markers
  - Extended healthspan (improvement in biological function markers)

**The Intermittent Senolytic Concept**

Senescent cells accumulate gradually — they do not re-accumulate immediately after clearance. This means FOXO4-DRI does not need to be administered continuously. An intermittent protocol (clearing accumulated senescent cells periodically) is the conceptually appropriate approach — analogous to scheduled maintenance rather than constant treatment. Most experimental protocols use 3–5 consecutive days per month, or quarterly burst cycles.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'First-in-class peptide senolytic — selectively eliminates senescent zombie cells that drive aging and inflammaging',
      'Targets FOXO4-p53 interaction specific to senescent cells — healthy cells spared',
      'Published in Cell journal (2017) — peer-reviewed reversal of aging phenotypes in aged mice',
      'Reversed frailty, muscle function, hair loss, and renal dysfunction in aged mouse models',
      'SASP elimination removes chronic inflammatory cytokine burden from cleared senescent cells',
      'Intermittent protocol design — periodic clearance is theoretically sufficient (cells don\'t immediately re-accumulate)',
      'D-retro-inverso design provides resistance to proteolytic degradation for enhanced cellular penetration',
      '98.5% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Intermittent Senolytic Protocol:**
- Dose: 1–5mg per injection (1–2mg starting dose)
- Route: Subcutaneous injection
- Schedule: 3 consecutive days per month (or quarterly 5-day bursts)
- Do NOT use daily — this is an intermittent clearance protocol by design

**Monthly Protocol:**
- Days 1-3 each month: 1–2mg subcutaneous
- Remaining 27 days: no dosing

**Quarterly Protocol:**
- 5 consecutive days every 3 months: 2–5mg per injection
- Allows accumulation of new senescent cells between cycles, which are then cleared

**Stack with Anti-Aging Core:**
- FOXO4-DRI (quarterly clearing)
- NAD+ (mitochondrial/sirtuin support)
- Epithalon (telomere maintenance)
- GHK-Cu (gene expression reset)
These four components address complementary aging mechanisms — FOXO4-DRI specifically handles the senescent cell accumulation burden.

**Important Research Note:**
- Limited human data — mouse model results, while compelling, await human clinical validation
- Current use is research-only`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Cell Publication', body: 'Published in Cell (2017) — demonstrated reversal of frailty, renal function, hair loss, and fitness in aged mice through selective senescent cell elimination.' },
      { title: 'Selective Mechanism', body: 'Disrupts FOXO4-p53 in senescent cells specifically — healthy cells with low FOXO4 expression are unaffected.' },
      { title: 'First Peptide Senolytic', body: 'FOXO4-DRI is the first peptide-based senolytic ever designed — a new class of anti-aging intervention targeting the accumulation of dysfunctional cells.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ FOXO4-DRI 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 5. SS-31 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'ss-31-10mg'
next_slug = 'ss-31-25mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `SS-31 (also known as Elamipretide or MTP-131) is a cell-permeable tetrapeptide that specifically accumulates in the inner mitochondrial membrane, where it binds to cardiolipin — the unique phospholipid that is critical to mitochondrial architecture and function. SS-31 is arguably the most mechanistically precise anti-aging compound available: it targets the specific lipid that maintains mitochondrial cristae structure, and its application reverses the cristae collapse that underlies age-related mitochondrial dysfunction.

**Cardiolipin: The Mitochondrial Structural Phospholipid**

Cardiolipin is a phospholipid found almost exclusively in the inner mitochondrial membrane. It serves multiple critical functions:
- Maintains the physical structure of cristae (the inner membrane folds that create surface area for the electron transport chain)
- Anchors and stabilizes electron transport chain complexes I, III, IV, and V in their optimal positions
- Facilitates proton gradient formation essential for ATP synthesis
- Supports the assembly of the respiratory supercomplexes ("respirasomes")

In young, healthy mitochondria, cardiolipin is present in high concentrations and maintained in its reduced (non-oxidized) state. With aging, oxidative stress causes cardiolipin oxidation — and oxidized cardiolipin cannot perform these structural functions. The result is cristae collapse: the inner membrane loses its folded architecture, electron transport chain complexes dissociate, and ATP production efficiency falls dramatically.

This isn\'t a minor inefficiency. Aged muscle mitochondria can produce 50–70% less ATP per unit of substrate than young mitochondria — an age-related bioenergetic deficit that is a primary driver of sarcopenia, exercise intolerance, and metabolic decline.

**How SS-31 Restores Function**

SS-31 binds directly to cardiolipin through electrostatic interactions (its positively charged residues interact with cardiolipin\'s negative charge) and accumulates ~1000× more in inner mitochondrial membranes than cytoplasm. This targeting specificity is fundamental to its mechanism.

When bound to cardiolipin, SS-31:
1. **Prevents cardiolipin oxidation**: Acts as a targeted antioxidant at the inner membrane, scavenging reactive oxygen species generated by the electron transport chain before they can oxidize cardiolipin
2. **Restores cristae structure**: Protected cardiolipin maintains cristae architecture, restoring the physical geometry of the electron transport chain
3. **Improves respiratory supercomplex assembly**: Stabilized cardiolipin allows electron transport chain complexes to reassemble into higher-order supercomplexes, dramatically improving electron transfer efficiency
4. **Increases ATP production**: Downstream of all the above — functional cristae produce functional ATP synthesis

**Clinical Development: Elamipretide**

SS-31 is in clinical development as Elamipretide (brand name Bendavia) for multiple cardiovascular and mitochondrial disease indications:
- **Phase 2 for Heart Failure with Preserved Ejection Fraction (HFpEF)**: The SEET-HFpEF trial — initial data showed significant improvements in 6-minute walk distance and exercise tolerance
- **Phase 2 for Barth Syndrome**: Rare mitochondrial cardiomyopathy — Phase 2 trial data showed improved cardiac function and exercise capacity
- **Phase 2 for Ischemia/Reperfusion**: Studies showing protection of cardiac mitochondria during ischemic events

The clinical data provides human translational evidence for SS-31\'s mitochondrial improvement mechanism.

**SS-31 and the Aging Mitochondria**

Studies in aged mice and primate models have shown SS-31 can:
- Reverse age-related skeletal muscle mitochondrial dysfunction in 8 weeks
- Improve exercise capacity and VO2 max in aged animals
- Restore mitochondrial cristae structure visible under electron microscopy
- Reduce markers of mitochondrial oxidative stress
These animal results have driven significant interest in SS-31 for human aging applications.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Selectively accumulates 1000× in inner mitochondrial membranes — the most targeted mitochondrial peptide available',
      'Binds cardiolipin to prevent oxidation and restore cristae structure',
      'Reverses cristae collapse that causes 50–70% ATP production decline in aged mitochondria',
      'Restores respiratory supercomplex assembly for efficient electron transfer',
      'Reduces mitochondrial ROS without impairing physiological redox signaling',
      'In Phase 2 clinical trials for heart failure, Barth syndrome, and ischemia/reperfusion',
      'Improved exercise capacity and 6-minute walk distance in heart failure Phase 2 data',
      'Animal studies: reversal of age-related skeletal muscle mitochondrial dysfunction within 8 weeks',
      'Synergistic with NAD+ — addresses different aspects of mitochondrial decline simultaneously',
      '98.8% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**SS-31 Protocol:**
- Dose: 1–3mg subcutaneous daily
- Starting dose: 1mg daily (assess tolerance)
- Maintenance: 2–3mg daily
- Route: Subcutaneous injection (abdomen or thigh)
- Timing: Morning preferred — mitochondrial support benefits align with daytime energy demands
- Duration: Continuous use or 8-week cycles with 2-week break

**Mitochondrial Anti-Aging Stack:**
- SS-31 2mg daily (cardiolipin protection and cristae restoration)
- NAD+ 250mg 3× weekly (sirtuin activation and electron transport substrate)
- MOTS-c 10mg weekly (AMPK activation and metabolic flexibility)
These three compounds address different levels of mitochondrial function decline

**Exercise Enhancement Context:**
- SS-31 administered 30–60 minutes before exercise may enhance mitochondrial ATP output during training
- Post-exercise use supports mitochondrial recovery from exercise-induced oxidative stress`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Cardiolipin Binding', body: 'SS-31 targets the specific inner mitochondrial membrane phospholipid responsible for cristae structure — the most mechanistically precise mitochondrial intervention available.' },
      { title: 'Phase 2 Clinical Evidence', body: 'Elamipretide (SS-31) is in Phase 2 trials for heart failure and Barth syndrome — improved exercise capacity and cardiac function documented in human subjects.' },
      { title: '1000× Mitochondrial Accumulation', body: 'Electrostatic targeting produces 1000× concentration in inner mitochondrial membranes vs. cytoplasm — ensuring the antioxidant effect occurs exactly where mitochondrial damage happens.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ SS-31 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 6. MOTS-c 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'mots-c-10mg'
next_slug = 'mots-c-20mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA Type-c) is a 16-amino acid peptide encoded not in the nuclear genome, but in the mitochondrial genome — the small circular DNA maintained by mitochondria. It belongs to a newly discovered class of biological molecules called "mitochondrial-derived peptides" (MDPs), which are now recognized as critical inter-organ signaling molecules. MOTS-c acts as an exercise mimetic — its injection produces metabolic improvements comparable to sustained aerobic training.

**The Mitochondrial Genome: An Unexpected Peptide Source**

The mitochondrial genome encodes only 37 genes in humans — 13 oxidative phosphorylation subunit proteins, 22 tRNAs, and 2 rRNAs. MOTS-c is produced from a conserved open reading frame in the 12S rRNA gene — a gene previously thought to encode only non-coding RNA. This discovery fundamentally changed our understanding of mitochondrial biology: mitochondria do not just produce energy, they produce regulatory signals that coordinate whole-body metabolism.

MOTS-c levels decline with age and are reduced in conditions associated with metabolic disease. Exercise increases MOTS-c expression — leading to the hypothesis that MOTS-c mediates some of exercise\'s metabolic benefits independently of the mechanical training stimulus itself.

**Primary Mechanism: AMPK Activation**

MOTS-c\'s primary metabolic mechanism is AMPK (AMP-Activated Protein Kinase) activation in skeletal muscle and other peripheral tissues. AMPK is the cell\'s master energy sensor — activated when cellular energy (ATP/ADP ratio) is low, and responsible for:
- Increasing glucose uptake via GLUT-4 translocation (insulin-independent)
- Enhancing fatty acid oxidation (fat burning)
- Stimulating mitochondrial biogenesis (more mitochondria per cell)
- Suppressing anabolic pathways that consume energy (when energy is scarce)

By activating AMPK, MOTS-c mimics the metabolic signal of exercise without the mechanical component — improving the same downstream outcomes (insulin sensitivity, metabolic flexibility, fat utilization) that make exercise effective for metabolic health.

**Metabolic Flexibility: The Core Benefit**

Metabolic flexibility — the ability to switch efficiently between glucose and fat as fuel sources — is one of the most important determinants of metabolic health, athletic performance, and longevity. Insulin-resistant, metabolically inflexible individuals are "stuck" burning primarily glucose and struggle to access fat stores even when fasting or exercising.

MOTS-c improves metabolic flexibility through multiple mechanisms:
- AMPK-driven GLUT-4 translocation improves glucose uptake when appropriate (post-meal, during exercise)
- Increased fat oxidation capacity (more mitochondria, enhanced beta-oxidation)
- Improved fatty acid mobilization from adipose tissue
- Reduced glucose dependency at rest

**Nuclear Translocation: Gene Regulatory Actions**

Recent research revealed that MOTS-c can translocate from the cytoplasm to the nucleus, where it acts as a transcription co-regulator — directly modifying gene expression patterns associated with aging, stress resistance, and longevity. This nuclear action extends MOTS-c\'s effects beyond acute metabolic changes to epigenetic-level programming of cellular age.

**Physical Performance Evidence**

Animal studies have demonstrated:
- MOTS-c injection improved endurance capacity in mice (comparable to 4 weeks of exercise training)
- Aged mice receiving MOTS-c showed restoration of physical performance metrics to young-animal levels
- Muscle insulin sensitivity improved dramatically in high-fat diet models
- Visceral fat reduction comparable to caloric restriction protocols`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Encoded in the mitochondrial genome — a newly discovered class of mitochondrial-derived peptide (MDP) hormone',
      'AMPK activation: the master metabolic sensor driving insulin-independent glucose uptake, fat oxidation, and mitochondrial biogenesis',
      'Exercise mimetic: produces metabolic adaptations comparable to sustained aerobic training in animal studies',
      'Improves metabolic flexibility — restores ability to efficiently switch between glucose and fat as fuel',
      'Increases mitochondrial biogenesis (more mitochondria per cell through PGC-1alpha pathway)',
      'Declines with aging and in metabolic disease — restoration addresses an age-related deficit',
      'Nuclear translocation enables epigenetic-level gene regulatory effects on longevity pathways',
      'Reduces visceral fat in high-fat diet animal models comparable to caloric restriction',
      'Aged animals receiving MOTS-c restored physical performance metrics to young-animal levels',
      '98.5% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**MOTS-c Protocol:**
- Dose: 5–15mg weekly
- Route: Subcutaneous injection
- Starting dose: 5mg/week for 4 weeks, then escalate to 10–15mg/week
- Frequency: 1–3× weekly (once weekly is common for convenience)
- Duration: Continuous or cycled; no receptor desensitization reported

**Exercise Enhancement Protocol:**
- MOTS-c 10mg 2–3 hours before a major training session
- AMPK activation primes metabolic pathways for enhanced fat oxidation during exercise
- May improve endurance performance and accelerate post-workout metabolic recovery

**Metabolic Health Stack:**
- MOTS-c 10mg weekly (AMPK/metabolic flexibility)
- SS-31 2mg daily (mitochondrial cristae)
- NAD+ 250mg 3× weekly (sirtuin pathway)
- This triple combination addresses metabolic flexibility, mitochondrial structure, and cellular maintenance

**Reconstitution:**
- Reconstitute with bacteriostatic water
- 1mg/mL concentration for easy weekly dosing`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Mitochondrial Genome Peptide', body: 'MOTS-c is encoded in mitochondrial DNA — a newly discovered class of regulatory signal that coordinates whole-body metabolism.' },
      { title: 'Exercise Without Exercise', body: 'AMPK activation by MOTS-c produces metabolic adaptations comparable to endurance training — animal studies show VO2 and insulin sensitivity improvements matching 4 weeks of exercise.' },
      { title: 'Aging Decline Reversal', body: 'MOTS-c levels fall with age — aged animals receiving MOTS-c restored physical performance and metabolic function to young-animal levels.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ MOTS-c 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 7. AOD9604 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'aod9604-10mg'
next_slug = 'aod9604-5mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `AOD9604 (Anti-Obesity Drug 9604) is the C-terminal fragment of human growth hormone — specifically amino acids 176–191 — that contains the fat-metabolizing properties of HGH without any of the anabolic, IGF-1-stimulating effects. It was originally developed by Monash University (Melbourne) in the 1990s as part of a program to isolate the lipolytic mechanism of GH from its anabolic mechanisms.

**Why Fragment a Peptide?**

Full-length HGH stimulates multiple receptor pathways simultaneously: it drives IGF-1 production (anabolism and potential pro-growth effects), stimulates GH receptors in liver, muscle, and bone (causing insulin resistance at high doses), and activates the 176–191 region responsible for lipolysis. By isolating just the lipolytic fragment, researchers created a compound that retains targeted fat metabolism while eliminating the side effect risks of full HGH:
- No IGF-1 stimulation (no anabolic or proliferative effects)
- No insulin resistance (full HGH is diabetogenic at pharmacological doses)
- No bone or organ growth effects
- FDA Investigational New Drug status granted; GRAS (Generally Recognized as Safe) designation received

**Mechanism: The GH Lipolytic Fragment**

The 176–191 fragment interacts with a receptor mechanism distinct from the full GH receptor. It appears to stimulate:
1. **Lipolysis**: Activation of hormone-sensitive lipase (HSL) in adipocytes, releasing stored triglycerides as free fatty acids for beta-oxidation
2. **Anti-lipogenic effect**: Inhibition of lipogenic enzymes (particularly fatty acid synthase and acetyl-CoA carboxylase), reducing new fat storage
3. **Beta-3 adrenoceptor stimulation**: May activate beta-3 adrenoceptors on adipocytes, which drives thermogenesis and further lipolysis — the same receptor targeted by fat-burning compounds in brown adipose tissue

These effects are particularly active on visceral fat deposits, which express higher concentrations of the relevant receptors.

**Clinical History and Safety Profile**

AOD9604 has been through extensive preclinical and clinical evaluation:
- Phase 1 and Phase 2a trials conducted in Australia and the US
- Phase 2b trial showed modest but consistent fat loss improvements vs. placebo
- FDA GRAS status granted — among the most favorable regulatory classifications for a research peptide
- No adverse signals on insulin sensitivity, blood glucose, IGF-1 levels, or cardiovascular markers across all trials
- No anabolic effects observed at any tested dose

**The Practical Case for AOD9604**

AOD9604\'s value proposition is its safety profile and mechanism specificity:
- Users who want GH-mediated lipolytic effects without committing to full GH peptide protocols
- Individuals where IGF-1 elevation is undesired (certain medical contexts)
- Stack addition for fat loss protocols alongside GLP-1 agents or Ipamorelin/CJC
- Morning fasted injection takes advantage of low insulin, maximizing the lipolytic response

The fat loss magnitude from AOD9604 alone is modest relative to GLP-1 agents — its strength is as a targeted adjunct in comprehensive body composition protocols, not a standalone weight loss solution.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Isolated lipolytic fragment of HGH — activates fat metabolism without IGF-1, insulin resistance, or anabolic effects',
      'FDA GRAS status (Generally Recognized as Safe) — the most favorable safety classification available',
      'Stimulates hormone-sensitive lipase (HSL) in adipocytes — activates stored fat release',
      'Inhibits lipogenic enzymes — reduces new fat storage at cellular level',
      'Beta-3 adrenoceptor activation — may drive thermogenesis in brown adipose tissue',
      'Selective visceral fat lipolysis — highest receptor density in metabolically risky fat depots',
      'No blood glucose impact — safe for insulin-sensitive individuals',
      'No IGF-1 stimulation — no pro-proliferative concerns at any tested dose',
      'Adjunct to GLP-1 or GHRH protocols for comprehensive fat metabolism coverage',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**AOD9604 Protocol:**
- Dose: 300–500mcg per injection
- Timing: Morning fasted (2–3 hours before first meal)
- Route: Subcutaneous injection (abdomen preferred for visceral fat proximity)
- Frequency: Daily
- Duration: 12–24 weeks (continuous use safe given GRAS status)

**Fasted State Timing Rationale:**
- Low insulin levels in the fasted state maximize adrenergic and lipolytic receptor sensitivity
- Carbohydrate-driven insulin release blunts HSL activity — always inject before eating
- Morning also aligns with natural cortisol peak, which synergizes with lipolytic signaling

**Stack for Maximum Effect:**
- AOD9604 500mcg morning (fasted lipolysis)
- Ipamorelin/CJC-1295 300/200mcg before sleep (GH pulse for overnight lipolysis)
- Semaglutide or Tirzepatide (appetite reduction and metabolic improvement)
This combination targets fat metabolism through three independent mechanisms simultaneously.`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'FDA GRAS Status', body: 'AOD9604 received FDA Generally Recognized as Safe designation — Phase 1 and Phase 2 trials showed no adverse metabolic, anabolic, or cardiovascular signals.' },
      { title: 'Zero IGF-1 Effect', body: 'Isolated lipolytic fragment with no IGF-1 stimulation — pure fat metabolism without anabolic or proliferative effects.' },
      { title: 'HGH Mechanism Without HGH Risks', body: 'The same lipolytic mechanism as growth hormone but with none of HGH\'s insulin resistance, IGF-1 elevation, or organ growth effects.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ AOD9604 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 8. DSIP 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'dsip-10mg'
next_slug = 'dsip-15mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `DSIP (Delta Sleep-Inducing Peptide) is a naturally occurring nonapeptide (9 amino acids) first isolated from the cerebral venous blood of sleeping rabbits in 1977 by Monnier and colleagues at the University of Basel. It is found in the hypothalamus, limbic system, pituitary, and pineal gland, and has been shown to promote the deepest stage of sleep — delta sleep (NREM Stage 3 slow-wave sleep) — while also exerting stress-normalizing, antioxidant, and neuromodulatory effects that extend beyond simple sleep induction.

**Why Delta Sleep Matters**

NREM Stage 3 sleep (delta sleep) is the most biologically productive sleep stage:
- **Growth hormone secretion**: 70-80% of daily GH is secreted during the first few cycles of delta sleep. This GH drives overnight tissue repair, muscle protein synthesis, and fat metabolism.
- **Memory consolidation**: Slow-wave sleep is critical for declarative memory consolidation — transferring information from hippocampal short-term storage to cortical long-term memory
- **Cellular repair**: Delta sleep triggers the most active phases of protein synthesis, cellular turnover, and DNA repair in peripheral tissues
- **Immune function**: Deep sleep is when the immune system performs its most productive activity — lymphocyte proliferation, cytokine secretion, and pathogen clearance

Modern lifestyle disrupts delta sleep architecture before almost any other sleep stage — blue light exposure, stress, alcohol, and sleep schedule irregularity all specifically reduce deep sleep proportion.

**DSIP Mechanism: Multi-Target Neuromodulation**

DSIP does not work through a single receptor — its effects involve multiple CNS pathways:
1. **Sleep regulation**: DSIP modulates the activity of sleep-promoting circuits in the hypothalamus. It appears to enhance the delta oscillation generating systems rather than simply sedating the brain — preserving sleep quality while promoting the specific deep-sleep architecture
2. **Somatostatin modulation**: DSIP inhibits somatostatin release — the hormone that blocks GH secretion. By reducing somatostatin at night, DSIP amplifies sleep-gated GH pulses
3. **Circadian synchronization**: DSIP has been shown to help reset disrupted circadian rhythms — useful for shift workers, jet lag, or individuals with sleep phase disorders
4. **Stress axis normalization**: DSIP reduces cortisol and ACTH levels, particularly when they are inappropriately elevated. This stress-normalizing effect contributes to both improved sleep quality and daytime mood stabilization
5. **Antioxidant CNS activity**: DSIP shows antioxidant properties in neuronal tissue, protecting against oxidative stress-induced neural damage

**Stress-Normalizing Properties**

One of DSIP\'s less-discussed but important properties is its ability to normalize the hypothalamic-pituitary-adrenal (HPA) axis in stress conditions. In individuals with chronically elevated cortisol (from work stress, overtraining, or sleep deprivation), DSIP reduces cortisol back toward normal ranges. This is particularly relevant because elevated cortisol is one of the primary disruptors of delta sleep — creating a vicious cycle where stress disrupts sleep, and poor sleep drives more cortisol elevation.

**Research History**

DSIP has been studied extensively in the European research literature, particularly Swiss and German groups. It has been evaluated in clinical contexts including:
- Chronic insomnia and sleep disorders
- Pain management (analgesic effects in certain protocols)
- Opiate withdrawal support
- Stress-related neuroendocrine normalization`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Promotes delta (slow-wave) sleep architecture — the deepest, most restorative sleep stage',
      'Amplifies sleep-gated GH secretion by inhibiting somatostatin at night',
      'Memory consolidation support — delta sleep is critical for declarative memory transfer',
      'Normalizes HPA axis cortisol elevation in chronically stressed individuals',
      'Resets disrupted circadian rhythms — useful for jet lag, shift work, and sleep phase disorders',
      'Non-habit-forming natural nonapeptide — no receptor desensitization or withdrawal',
      'CNS antioxidant activity — neuroprotective effects in neuronal oxidative stress models',
      'Studied for opiate withdrawal support and chronic pain protocols',
      'Analgesic properties documented in certain research contexts',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**DSIP Sleep Protocol:**
- Dose: 200–300mcg subcutaneous
- Timing: 30–60 minutes before intended sleep time
- Route: Subcutaneous injection (abdomen or thigh)
- Frequency: As needed (not for nightly long-term use — periodic use for sleep quality optimization)
- Typical use: 2–4× per week for sleep architecture improvement during periods of disruption

**For Circadian Reset (Jet Lag/Shift Work):**
- 250mcg 1 hour before intended new sleep time
- Continue 3–5 consecutive nights to anchor new sleep timing
- DSIP appears to help synchronize internal clocks to new sleep schedules faster than natural adaptation

**Stack with Ipamorelin/CJC-1295:**
- DSIP 250mcg 45 minutes before sleep
- Ipamorelin 300mcg + CJC-1295 200mcg 20 minutes before sleep
- DSIP enhances delta sleep architecture → maximizes the GH pulse that occurs during delta sleep
- Ipamorelin provides additional GHRP stimulation for the GH pulse

**For Stress-Related Sleep Disruption:**
- 200mcg DSIP 45 minutes before sleep
- Particularly effective when elevated cortisol is the primary sleep disruption mechanism
- DSIP\'s HPA axis normalization addresses the root cause rather than just sedating

**Reconstitution:**
- Reconstitute with bacteriostatic water
- 1mg/mL gives easy 0.2–0.3mL doses per injection`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Delta Sleep Induction', body: 'DSIP specifically promotes NREM Stage 3 delta sleep — the stage responsible for 70-80% of daily GH secretion, memory consolidation, and cellular repair.' },
      { title: 'GH Amplification', body: 'Inhibits somatostatin release at night — removing the brake on sleep-gated GH pulses for amplified overnight growth hormone secretion.' },
      { title: 'Stress-Cortisol Normalization', body: 'Normalizes elevated HPA axis cortisol — breaks the cortisol-poor sleep-more cortisol vicious cycle that is the most common cause of sleep architecture disruption.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ DSIP 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 9. PT-141 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'pt-141-10mg'
next_slug = 'bpc-157-capsules'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `PT-141 (Bremelanotide) is a synthetic melanocortin receptor agonist that is FDA-approved as Vyleesi® for the treatment of hypoactive sexual desire disorder (HSDD) in premenopausal women — making it the only non-hormonal, centrally-acting FDA-approved sexual dysfunction medication. Unlike PDE5 inhibitors (Viagra, Cialis) which work peripherally by enhancing blood flow, PT-141 acts directly in the hypothalamus to increase sexual motivation and desire from a central neurological mechanism.

**Central vs. Peripheral Sexual Function Mechanisms**

The distinction between central and peripheral mechanisms matters enormously for understanding PT-141\'s unique clinical position:

- **PDE5 Inhibitors (sildenafil, tadalafil)**: Act in genital blood vessels to enhance blood flow in response to sexual stimulation. They do not increase desire, motivation, or arousal — they only enhance the vascular response IF arousal already exists. They are ineffective when the problem is low desire rather than mechanical vascular dysfunction.

- **PT-141 (Central mechanism)**: Acts on melanocortin-3 and melanocortin-4 receptors (MC3R and MC4R) in the hypothalamus — specifically in circuits that regulate sexual motivation and arousal. By activating these receptors, PT-141 directly increases the central drive toward sexual behavior, working upstream of the vascular and motor responses that follow arousal.

This means PT-141 is effective even when arousal and desire are the limiting factors, rather than vascular function. It works in both men and women, and is effective in populations where PDE5 inhibitors fail.

**Melanocortin System and Sexual Function**

The melanocortin system is one of the most important regulators of energy balance, appetite, pigmentation, and sexual behavior in mammals. The MC4 receptor, expressed densely in hypothalamic nuclei including the paraventricular nucleus and medial preoptic area, plays a central role in sexual arousal circuitry.

PT-141 was developed from Melanotan II (MT-2), a non-selective melanocortin agonist that produced unexpected spontaneous erections in early clinical trials for tanning. PT-141 is a cyclic heptapeptide analog engineered to retain the sexual function effects of MT-2 while eliminating its tanning/pigmentation activity.

**FDA Approval and Clinical Evidence**

Vyleesi® (bremelanotide) received FDA approval in June 2019 based on two Phase 3 trials (RECONNECT):
- Significantly more women (25% vs. 17% placebo) achieved a clinically meaningful increase in satisfying sexual events
- Significant reduction in distress related to low desire
- Onset: 45 minutes; duration: up to 24 hours
- Common side effects: nausea (40% incidence, usually mild), flushing, blood pressure changes

The Phase 3 data specifically addresses the women\'s FDA indication. Male clinical studies have consistently shown PT-141 produces erections and sexual arousal in men — including those who do not respond to PDE5 inhibitors.

**Men vs. Women: Different Expressions of the Same Mechanism**

In men, MC4R activation in hypothalamic circuits produces both increased sexual motivation AND facilitation of the pro-erectile neural pathway through activation of oxytocinergic neurons in the paraventricular nucleus. These oxytocinergic projections drive erection through spinal cord circuits — a pathway completely independent of the PDE5 mechanism.

Clinical studies in men:
- PT-141 1.25–4mg produced erections sufficient for intercourse in a majority of subjects, including some with sildenafil non-response
- Effective in psychogenic erectile dysfunction (where desire/anxiety is the primary factor)
- Effective in organic erectile dysfunction (where central drive amplification benefits even vascular cases)`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'FDA-approved (Vyleesi®) for HSDD in women — the only non-hormonal, centrally-acting sexual dysfunction medication',
      'Acts on hypothalamic MC3R and MC4R — increases sexual desire and motivation from the source',
      'Effective for both men and women through the same central melanocortin mechanism',
      'Works independently of vascular function — effective in cases where PDE5 inhibitors fail',
      'Increases satisfying sexual events and reduces distress in FDA Phase 3 trials',
      'Activates pro-erectile oxytocinergic neurons in men — central erection pathway independent of PDE5',
      'Onset ~45 minutes; duration up to 24 hours per dose',
      'Non-hormonal — does not alter testosterone, estrogen, or other endocrine levels',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**PT-141 Protocol:**
- Dose: 0.75–2mg subcutaneous (starting dose: 0.75mg to assess nausea tolerance)
- Maintenance: 1–2mg (women); 1–2mg (men)
- Timing: 45 minutes to 2 hours before intended sexual activity
- Route: Subcutaneous injection (abdomen or thigh)
- Frequency: Maximum once per 24 hours; not for daily use

**Nausea Management:**
- Nausea is the most common side effect — dose-dependent
- Start at 0.75mg and escalate only if well-tolerated
- Take on a light (not empty, not full) stomach — empty stomach increases nausea
- Antiemetics (e.g., ondansetron) can be used prophylactically at higher doses if nausea has been problematic

**Men Specific:**
- 1–2mg 45–90 minutes before activity
- Produces both central arousal and facilitation of the pro-erectile pathway
- Can be combined with PDE5 inhibitors for additive effects (different mechanisms)
- Particularly valuable when both desire and vascular function are suboptimal

**Women Specific:**
- 1.75mg is the FDA-approved dose (Vyleesi®) — this is the Phase 3-validated dose
- Can reduce to 0.75–1mg for reduced nausea with maintained efficacy for many users
- Inject at least 45 minutes before desired onset`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'FDA Approved Vyleesi', body: 'Bremelanotide (PT-141) is FDA-approved as Vyleesi® for female hypoactive sexual desire disorder — the only centrally-acting non-hormonal approval in this category.' },
      { title: 'Central Desire Mechanism', body: 'Activates hypothalamic MC4 receptors to increase sexual motivation centrally — fundamentally different from PDE5 inhibitors that only enhance vascular response peripherally.' },
      { title: 'Effective for Both Men and Women', body: 'Same hypothalamic melanocortin mechanism produces enhanced arousal in both sexes — and works in cases where PDE5 inhibitors fail.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ PT-141 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 10. BPC-157 CAPSULES
# ─────────────────────────────────────────────────────────────────
slug = 'bpc-157-capsules'
next_slug = 'ara-290-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `BPC-157 Oral Capsules deliver the Body Protection Compound-157 through the gastrointestinal tract — a route of administration that, paradoxically, makes BPC-157 uniquely effective for GI conditions. While injectable BPC-157 distributes systemically and must reach the gut from the bloodstream, oral BPC-157 passes directly through the GI lumen in contact with the mucosal surface, making it the first-choice format for gut-targeted healing protocols.

**The GI Stability Paradox**

BPC-157\'s oral bioavailability for systemic effects is debated — the peptide may undergo partial degradation in the stomach. However, this apparent weakness becomes a therapeutic advantage for GI applications: the peptide remains at therapeutic concentrations in the GI lumen (stomach, small intestine, large intestine) while in transit, producing local healing effects directly at the mucosal surface before any absorption question arises.

The original BPC-157 research by Dr. Predrag Sikiric\'s group at the University of Zagreb used both oral and injected routes, finding both effective for GI conditions — with the oral route providing particularly convenient and well-tolerated GI-specific therapeutic coverage.

**Conditions Where Oral BPC-157 Is the Preferred Format**

1. **Leaky Gut Syndrome (Intestinal Permeability)**: BPC-157 upregulates tight junction proteins (ZO-1, ZO-2, occludin, claudin) that maintain the integrity of the intestinal epithelial barrier. In the oral format, these effects are delivered directly to the compromised junction sites throughout the gut lining.

2. **IBD (Inflammatory Bowel Disease) — Crohn\'s and Colitis**: Animal models of IBD show BPC-157 reduces mucosal inflammation, promotes ulcer healing, and restores normal bowel motility. The oral route delivers anti-inflammatory peptide directly to inflamed intestinal mucosa.

3. **GERD and Esophageal Damage**: BPC-157 promotes esophageal healing in acid damage models — oral capsules allow contact with the esophageal and gastric mucosa during capsule transit.

4. **Peptic and Duodenal Ulcers**: BPC-157 was first characterized for its gastric cytoprotective effects — promotion of ulcer healing through angiogenesis, fibroblast activation, and growth factor upregulation. Oral delivery concentrates these effects in the stomach and duodenum.

5. **Gut Microbiome Disruption**: Post-antibiotic gut recovery and dysbiosis — BPC-157 supports mucosal repair and appears to improve gut barrier function during microbiome reestablishment.

**Mechanism in the GI Context**

Oral BPC-157 triggers the same core repair mechanisms as injectable BPC-157, but with localized GI concentration:
- **Angiogenesis**: VEGF upregulation and VEGFR2 signaling promote new blood vessel formation in healing GI mucosa — improving oxygen and nutrient delivery to repair sites
- **Tight junction restoration**: Counteracts the tight junction disruption caused by inflammation, NSAIDs, alcohol, and stress
- **Growth factor cascade**: Stimulates EGF (Epidermal Growth Factor), FGF (Fibroblast Growth Factor), and TGF-β expression locally in GI tissue
- **Motility normalization**: Restores normal GI contractility in both hypomotility (ileus) and hypermotility (diarrhea) conditions through interaction with nitrergic and serotonergic systems
- **Anti-inflammatory**: Modulates NF-κB and COX-2 expression in GI epithelial cells

**Oral vs. Injectable: Choosing the Right Format**

- **Oral capsules**: Preferred for GI conditions (leaky gut, IBD, GERD, ulcers, gut health maintenance)
- **Injectable BPC-157**: Preferred for systemic effects (musculoskeletal healing, neurological, systemic anti-inflammatory)
- **Combined protocol**: Some users run both simultaneously — oral for gut coverage, injectable for systemic repair`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Oral format concentrates BPC-157 activity directly on GI mucosal surface throughout the entire GI tract',
      'Upregulates tight junction proteins (ZO-1, ZO-2, occludin) — directly repairs intestinal permeability',
      'Reduces mucosal inflammation in IBD animal models — anti-inflammatory effects at the site of damage',
      'Promotes ulcer healing through VEGF-driven angiogenesis and fibroblast activation in gastric mucosa',
      'Restores GI motility — normalizes both hypomotility and hypermotility through nitrergic/serotonergic pathways',
      'Supports post-antibiotic gut barrier repair during microbiome reestablishment',
      'GERD and esophageal healing — capsule transit allows mucosal contact throughout upper GI tract',
      'No injection required — convenient once-daily oral protocol ideal for sustained gut maintenance',
      '60-day supply at 500mcg/day (500mcg x60 capsules)',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Oral BPC-157 Protocol:**
- Dose: 500–1000mcg (1–2 capsules) daily
- Timing: On empty stomach (30 minutes before meals) for maximum mucosal transit time
- Frequency: Daily
- Duration: 60-day minimum for sustained GI repair (research suggests 8–16 weeks for IBD/leaky gut conditions)

**For Acute GI Conditions:**
- 1000mcg (2 capsules) daily split AM and PM for first 2–4 weeks
- Reduce to 500mcg daily maintenance after initial phase

**Combined with Injectable BPC-157:**
- Oral 500mcg AM (GI-specific) + Injectable 250mcg subcutaneous PM (systemic)
- Provides both local gut coverage and systemic anti-inflammatory effects
- Ideal for those with both GI conditions and systemic healing needs

**Gut Health Maintenance Stack:**
- BPC-157 Oral Capsules 500mcg daily
- KPV 250mcg intranasal or oral (complementary GI anti-inflammatory peptide)
- This combination provides dual-peptide GI protection and repair coverage

**Empty Stomach Rationale:**
- GI transit time in fasted state allows longer mucosal contact vs. mixed with food
- Acidic stomach environment in fasted state may enhance peptide-mucosa interaction
- Food in the stomach accelerates transit and reduces mucosal contact time`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'GI-Targeted Delivery', body: 'Oral capsules pass BPC-157 in direct contact with GI mucosa throughout the entire GI tract — more effective for gut conditions than injectable BPC-157 reaching the gut from the bloodstream.' },
      { title: 'Tight Junction Repair', body: 'Upregulates ZO-1, ZO-2, occludin, and claudin tight junction proteins — the molecular mechanism behind leaky gut reversal.' },
      { title: '60-Day Supply', body: '60 capsules at 500mcg provides a complete 60-day gut healing protocol at maintenance dose — or 30 days at 2 capsules per day for intensive repair.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ BPC-157 Capsules patched")

# ─────────────────────────────────────────────────────────────────
# Write
# ─────────────────────────────────────────────────────────────────
if src == original:
    print("WARNING: No changes made!")
    sys.exit(1)

with open('lib/products.ts', 'w', encoding='utf-8') as f:
    f.write(src)

print(f"\nAll 10 products patched.")
print(f"File size change: {len(original)} → {len(src)} chars (+{len(src)-len(original)})")
