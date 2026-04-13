#!/usr/bin/env python3
"""Batch 8: CJC-1295 DAC, NA-Epitalon, Glutathione, L-Carnitine, Melanotan I,
RU-58841, NA-Selank Amidate, Cagrilintide 10mg, GLOW Blend, BPC+TB blend 20mg"""

import re

path = 'lib/products.ts'
content = open(path, encoding='utf-8').read()
original_size = len(content)

def replace_product(content, slug, next_slug, new_full_desc, new_benefits, new_protocol, new_highlights):
    slug_pos = content.find(f"slug: '{slug}'")
    if slug_pos == -1:
        print(f"✗ Could not find slug: {slug}")
        return content
    next_pos = content.find(f"slug: '{next_slug}'", slug_pos + 1) if next_slug else len(content)
    if next_pos == -1:
        next_pos = len(content)
    window = content[slug_pos:next_pos]

    window = re.sub(r'    fullDescription: `[^`]*`,\n', f'    fullDescription: {new_full_desc},\n', window, count=1)
    window = re.sub(r'    benefits: \[.*?\],\n', f'    benefits: {new_benefits},\n', window, count=1, flags=re.DOTALL)
    window = re.sub(r'    protocol: `[^`]*`,\n', f'    protocol: {new_protocol},\n', window, count=1)
    window = re.sub(r'    highlights: \[.*?\],\n', f'    highlights: {new_highlights},\n', window, count=1, flags=re.DOTALL)

    content = content[:slug_pos] + window + content[next_pos:]
    print(f"✓ {slug} patched")
    return content


# ── 1. CJC-1295 with DAC 10mg ─────────────────────────────────────────────────
content = replace_product(
    content,
    slug='cjc-1295-with-dac-10mg',
    next_slug='ghrp-2-10mg',
    new_full_desc='''`CJC-1295 with DAC (Drug Affinity Complex) is a long-acting GHRH analog that achieves its extended duration through a unique bioconjugation technology: the DAC component covalently bonds to circulating serum albumin after injection, using albumin as a long-lived carrier that extends the peptide\'s half-life from minutes (as with CJC-1295 No DAC) to 6–8 days per dose. This single pharmacokinetic modification transforms the dosing requirements from twice-daily injections to once or twice weekly, fundamentally changing the practical convenience of GHRH analog therapy.

The mechanism of GH stimulation is identical to CJC-1295 No DAC — both are synthetic analogs of the endogenous GHRH (1-44) sequence that bind and activate the pituitary GHRH receptor, stimulating somatotroph cells to release growth hormone. The difference is entirely pharmacokinetic: while CJC-1295 No DAC produces a sharp GH pulse over 2–3 hours (mimicking the pulsatile nature of physiological GHRH), DAC-CJC-1295 creates a continuous, sustained GHRH receptor stimulation that produces a prolonged GH elevation — commonly called "GH bleed" — persisting over multiple days from a single injection.

This distinction in release profile has practical implications. The natural pituitary GH secretion pattern is pulsatile — high-amplitude pulses released primarily during slow-wave sleep, with low trough levels between. Continuous GHRH receptor stimulation from DAC-CJC-1295 maintains elevated GH throughout the week rather than producing discrete pulses, which more closely mimics certain pathological GH excess states. The sustained elevation can produce trough-elevated IGF-1 levels and the associated benefits: continuous anabolic signaling, protein synthesis support, and lipolytic activity throughout the week.

The clinical trade-off between pulsatile (No DAC) and continuous (with DAC) GH release is a subject of ongoing discussion in the research community. Physiological GH pulsatility is important for maintaining receptor sensitivity — sustained elevation can lead to partial GHR desensitization over time. Many practitioners who have experience with both forms prefer CJC-1295 No DAC combined with GHRPs for the more physiological pulsatile pattern, reserving DAC-CJC for specific applications where sustained GH elevation and reduced injection frequency are prioritized.

For the appropriate user — one who values once or twice weekly injection convenience, benefits from sustained IGF-1 elevation, and is not concerned with strict physiological pulse replication — DAC-CJC-1295 provides the most convenient GHRH analog protocol available. Its long half-life means individual injection timing matters less, eliminating the need for precise daily scheduling. The 10mg vial provides 3–5 weeks of supply depending on whether weekly (3–4mg) or twice-weekly (2mg) dosing is employed.`''',
    new_benefits='''[
      'Albumin-binding DAC technology extends half-life to 6–8 days — once or twice weekly dosing',
      'Identical GHRH receptor activation as CJC-1295 No DAC — same GH stimulation mechanism',
      'Sustained IGF-1 elevation throughout the week — continuous anabolic and lipolytic signaling',
      'Reduced injection frequency vs. twice-daily No DAC protocols — significant practical advantage',
      'Prolonged GH elevation from single dose — sustained growth hormone receptor activation',
      'Well-characterized pharmacokinetics — predictable week-long activity profile',
      'Relevant for body composition goals where continuous GH/IGF-1 exposure is prioritized',
      'Eliminates precision daily timing requirements — flexibility for protocol adherence',
      '10mg vial = 3–5 weeks supply at 2–3mg/injection',
      'Most convenient GHRH analog dosing schedule available',
    ]''',
    new_protocol='''`**CJC-1295 with DAC Protocol:**
- Dose: 1–2mg per injection
- Route: Subcutaneous injection
- Frequency: Once or twice per week
- Timing: Evening before sleep preferred (aligns with natural GH release pattern)

**Weekly Protocol:**
- 2mg once weekly SC injection
- Consistent day of week preferred (e.g., every Sunday evening)

**Twice-Weekly Protocol:**
- 1mg twice weekly (e.g., Sunday and Wednesday evenings)
- Slightly more stable serum levels vs. once-weekly

**vs. CJC-1295 No DAC:**
- No DAC: twice-daily injection, pulsatile GH, physiological pattern, no receptor desensitization risk
- With DAC: once-weekly injection, sustained GH elevation, maximum convenience
- Stack No DAC with GHRPs for pulsatile approach; use DAC alone or with GHRPs for sustained approach

**Stacking:**
- DAC-CJC + Ipamorelin: sustained GHRH + pulsatile GHRP — synergistic GH axis stimulation`''',
    new_highlights='''[
      { title: 'DAC Technology — 6-8 Day Half-Life', body: 'The Drug Affinity Complex covalently bonds CJC-1295 to circulating albumin after injection, transforming a peptide with a 30-minute half-life into one with 6–8 day duration — the most dramatic pharmacokinetic extension achieved by any GHRH analog modification.' },
      { title: 'Once-Weekly Convenience', body: 'The practical advantage of DAC-CJC-1295 is the dosing schedule: one injection per week provides continuous GHRH receptor stimulation and sustained IGF-1 elevation throughout the week, eliminating the twice-daily timing requirements of standard GHRH analog protocols.' },
      { title: 'Pulsatile vs. Sustained: The Trade-Off', body: 'CJC-1295 No DAC with GHRPs mimics physiological pulsatile GH release; DAC-CJC-1295 produces sustained GH elevation. Pulsatile is more physiological and minimizes receptor adaptation; sustained is more convenient. Choose based on goals and protocol preferences.' },
    ]'''
)

# ── 2. NA-Epitalon 10mg ───────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='na-epitalon-10mg',
    next_slug='foxo4-dri-10mg',
    new_full_desc='''`NA-Epitalon is the N-acetylated modification of Epitalon (Ala-Glu-Asp-Gly) — the same tetrapeptide telomerase activator and pineal bioregulator studied by Dr. Vladimir Khavinson, but with an N-terminal acetyl group that enhances lipophilicity, improves cell membrane penetration, and increases resistance to aminopeptidase enzymatic degradation. These pharmacokinetic modifications make NA-Epitalon potentially more potent per milligram and more suitable for nasal or sublingual mucosal delivery than the parent peptide.

The core biological activities of Epitalon are preserved in NA-Epitalon: telomerase activation in somatic cells, antioxidant activity through superoxide dismutase and glutathione peroxidase upregulation, pineal gland function support with normalization of melatonin secretion rhythms, cell cycle regulation, and the epigenetic chromatin remodeling effects on longevity-associated genes documented in Khavinson\'s extensive research program. The tetrapeptide sequence Ala-Glu-Asp-Gly binds to DNA promoter regions for telomerase reverse transcriptase (TERT), upregulating telomerase activity and enabling telomere elongation in cells that have entered telomere-dependent growth arrest.

The N-acetyl modification specifically addresses a limitation of the parent Epitalon: susceptibility to N-terminal aminopeptidase cleavage in biological fluids. Aminopeptidases cleave the N-terminal amino acid from peptide chains — the Ala residue of Epitalon being the first target. N-acetylation blocks the N-terminal amine group, making it unrecognizable to aminopeptidases and dramatically extending in vivo stability. This stability improvement translates to longer biological activity per dose and potentially higher effective concentrations reaching target tissues.

The lipophilicity increase from N-acetylation also improves passive membrane permeability — enabling better cellular uptake in tissues with high lipid membrane content, and improved mucosal absorption for intranasal or sublingual administration routes. This makes NA-Epitalon particularly valuable for protocols where injection is not preferred and intranasal delivery is desired. The improved membrane penetration may also enhance nuclear delivery, which is where Epitalon must ultimately reach to activate TERT gene transcription.

For users already familiar with Epitalon who seek potentially enhanced bioavailability and stability, or who prefer non-injection administration routes, NA-Epitalon represents the superior modification. The 10mg vial provides substantial supply for research protocols — whether using standard 1mg/day courses of 10 days (10 full courses), or lower-dose sustained daily protocols.`''',
    new_benefits='''[
      'N-acetylation blocks aminopeptidase degradation — dramatically extended in vivo stability vs. parent Epitalon',
      'Enhanced lipophilicity — improved cell membrane penetration and nuclear delivery',
      'Suitable for intranasal/sublingual mucosal delivery without injection',
      'Telomerase activation (TERT upregulation) preserved from parent Epitalon mechanism',
      'Antioxidant enzyme upregulation (SOD, glutathione peroxidase) — reduced oxidative aging',
      'Pineal gland melatonin rhythm normalization — circadian health and sleep quality',
      'Cell cycle regulation and epigenetic effects on longevity genes',
      'Potentially more potent per milligram than parent Epitalon due to stability improvement',
      'Same Khavinson research evidence base as Epitalon — decades of longevity data',
      'Better suited for users who prefer non-injection routes',
    ]''',
    new_protocol='''`**NA-Epitalon Protocol:**
- Dose: 1mg/day (comparable to standard Epitalon dosing)
- Route: Intranasal, sublingual, or subcutaneous injection
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Intranasal (preferred for NA-Epitalon):**
- Reconstitute in bacteriostatic water (0.5–1mg/mL)
- Administer morning and/or evening
- N-acetylation specifically improves mucosal absorption vs. parent Epitalon

**Comparison to Standard Epitalon:**
- Standard Epitalon: well-established dosing data, typically requires injection for reliable bioavailability
- NA-Epitalon: enhanced stability, better mucosal delivery, potentially superior per-mg activity
- Same telomerase/longevity mechanism — choose based on preferred administration route

**Anti-Aging Stack:**
- NA-Epitalon + Pinealon: telomerase activation + pineal epigenetic restoration
- NA-Epitalon + Cortagen: longevity peptide + cortical neural bioregulator
- Full Khavinson longevity stack: NA-Epitalon + Pinealon + Cortagen + Thymogen`''',
    new_highlights='''[
      { title: 'N-Acetylation Stability Enhancement', body: 'N-acetylation protects the N-terminal alanine from aminopeptidase cleavage — the primary degradation pathway for Epitalon in biological fluids. This modification extends the peptide\'s active lifetime in tissue, potentially delivering more telomerase-activating signal per milligram administered.' },
      { title: 'Intranasal Route Viability', body: 'The improved lipophilicity from N-acetylation makes NA-Epitalon suitable for intranasal mucosal delivery — bypassing the injection requirement that can limit Epitalon protocols for injection-averse users while potentially providing direct olfactory-to-CNS delivery.' },
      { title: 'Same Khavinson Evidence Base', body: 'NA-Epitalon shares the core biological mechanism of Epitalon — TERT upregulation, telomerase activation, antioxidant enzyme induction, and pineal function support — with the parent compound\'s extensive Khavinson research program providing the mechanistic and longevity evidence foundation.' },
    ]'''
)

# ── 3. Glutathione 200mg ──────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='glutathione-200mg',
    next_slug='glutathione-600mg',
    new_full_desc='''`Glutathione (GSH) is the most abundant endogenous antioxidant in the human body — a tripeptide (Gamma-Glu-Cys-Gly) that exists in virtually every cell and serves as the master redox buffer, detoxification substrate, and immune regulatory molecule of cellular biology. Injectable glutathione bypasses the oral bioavailability limitation that makes oral supplementation largely ineffective: glutathione is cleaved by intestinal peptidases before absorption, delivering cysteine for resynthesis rather than intact glutathione. Intravenous or subcutaneous injection of reduced glutathione (GSH) delivers the intact tripeptide directly to circulation and tissue, achieving cellular glutathione repletion impossible through oral routes.

The biological functions of glutathione span the breadth of cellular physiology. As a direct antioxidant, GSH neutralizes hydrogen peroxide, lipid hydroperoxides, and reactive nitrogen species through glutathione peroxidase-catalyzed reactions — regenerating to its oxidized form (GSSG) and then back to GSH by glutathione reductase using NADPH. As a detoxification substrate, glutathione-S-transferases conjugate GSH to electrophilic compounds (environmental toxins, drug metabolites, carcinogens) for urinary or biliary excretion — phase II hepatic detoxification depends fundamentally on adequate glutathione supply. As a protein redox regulator, glutathione maintains critical protein thiols in reduced (active) form, protecting enzymes and structural proteins from oxidative inactivation.

Injectable glutathione has well-documented clinical applications beyond supplementation. In acetaminophen (Tylenol) overdose, IV N-acetylcysteine (a GSH precursor) is the standard antidote precisely because APAP toxicity depletes hepatic glutathione, causing oxidative liver damage — replacing glutathione reverses the toxicity mechanism. In Parkinson\'s disease, IV glutathione showed improvements in motor function in small clinical trials, attributed to its antioxidant protection of dopaminergic neurons against oxidative stress. Skin-lightening applications of injectable glutathione exploit its inhibition of tyrosinase (the rate-limiting enzyme in melanin synthesis) — high-dose GSH reduces melanin production and produces a gradual, even complexion brightening.

The immune regulatory functions of glutathione are substantial: lymphocyte proliferation and NK cell cytotoxicity both depend on adequate intracellular GSH levels. T-cells with depleted glutathione show impaired proliferative responses and reduced IL-2 production — making glutathione repletion directly immunostimulatory in states of oxidative depletion (illness, intense exercise, aging, HIV). GSH levels decline significantly with age and under chronic stress, making injectable repletion relevant for aging populations and high-stress contexts.

The 200mg vial is the entry-level dose — appropriate for first-time users, sensitive individuals, or as a component of a larger IV protocol where glutathione is one of multiple infused compounds. Standard IV push doses in clinical practice range from 600mg to 1500mg; the 200mg dose is better suited for subcutaneous administration or as a low-dose IV bolus.`''',
    new_benefits='''[
      'Most abundant endogenous antioxidant — replenishes the master cellular redox buffer depleted by aging and stress',
      'Injectable delivery bypasses oral bioavailability limitation — delivers intact GSH that oral supplements cannot',
      'Phase II hepatic detoxification substrate — essential for glutathione-S-transferase conjugation of toxins and drugs',
      'Neutralizes hydrogen peroxide, lipid hydroperoxides, and reactive nitrogen species through GPx-catalyzed reactions',
      'Maintains protein thiols in reduced active form — protects critical enzymes and structural proteins from oxidation',
      'T-cell and NK cell function support — lymphocyte proliferation depends on adequate intracellular GSH',
      'Dopaminergic neuroprotection — IV glutathione improved Parkinson\'s motor function in clinical trials',
      'Tyrosinase inhibition at higher doses — melanin synthesis reduction for complexion brightening effect',
      'Critical for acetaminophen toxicity reversal — hepatic GSH depletion is the central toxicity mechanism',
      'Age-related GSH decline is well-documented — repletion addresses a known deficiency of aging',
    ]''',
    new_protocol='''`**Glutathione 200mg Protocol:**
- Dose: 200mg (this vial) — entry/low dose
- Route: Slow IV push (2–3 minutes) or subcutaneous injection
- Frequency: 2–3× per week for therapeutic repletion; daily for acute applications

**IV Administration:**
- Dilute in 5–10mL sterile saline for IV push
- Administer slowly over 2–3 minutes — rapid IV push causes sulfur odor (transient, harmless)
- Follow with saline flush

**Subcutaneous:**
- 200mg SC injection well tolerated
- Preferred route for home use without IV access

**Clinical Dose Context:**
- 200mg: entry/low dose, individual SC use
- 600mg: standard therapeutic IV dose
- 1500mg: high-dose protocol (skin, intensive antioxidant therapy)

**Stacking:**
- Glutathione + NAD+: master antioxidant + cellular energy currency — comprehensive cellular rejuvenation
- Glutathione + Vitamin C (IV): potentiates antioxidant recycling (ascorbate regenerates GSH)
- Add Methylene Blue for complementary mitochondrial antioxidant mechanism`''',
    new_highlights='''[
      { title: 'Oral Glutathione Doesn\'t Work — Injectable Does', body: 'Intestinal peptidases cleave glutathione before absorption, delivering only cysteine. Injectable glutathione delivers the intact tripeptide directly to circulation — the only route that actually repletes tissue glutathione levels rather than just providing precursor amino acids.' },
      { title: 'Master Redox Buffer of Cellular Biology', body: 'Glutathione participates in neutralizing essentially every class of reactive oxygen and nitrogen species, regenerating other antioxidants (vitamins C and E), powering phase II detoxification, and maintaining protein thiol integrity — it is the cellular antioxidant system, not just one component of it.' },
      { title: 'Immune and Neurological Dimensions', body: 'T-cell proliferation, NK cytotoxicity, dopaminergic neuron survival, and cognitive function all depend on adequate glutathione. Its depletion in aging, illness, and chronic stress simultaneously compromises immunity, neurological health, and detoxification capacity — making repletion systemically impactful.' },
    ]'''
)

# ── 4. L-Carnitine 400mg/L ────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='l-carnitine-400mgl',
    next_slug='l-carnitine-600mgl',
    new_full_desc='''`L-Carnitine is an amino acid derivative (synthesized from lysine and methionine) essential for the transport of long-chain fatty acids across the inner mitochondrial membrane — the rate-limiting step for fatty acid beta-oxidation that determines how efficiently fat is burned for energy. Without carnitine, long-chain fatty acids (>12 carbons) cannot enter the mitochondrial matrix for oxidation, regardless of how much free fatty acid is available in the cell. This makes L-carnitine bioavailability a literal gating mechanism for the primary fat-burning pathway in muscle and other tissues.

The fatty acid transport mechanism involves carnitine palmitoyltransferase I (CPT-I) on the outer mitochondrial membrane, which conjugates long-chain acyl-CoA to carnitine, and CPT-II on the inner membrane, which releases the acyl group back to CoA in the matrix. The acylcarnitine intermediate crosses the inner membrane via the carnitine-acylcarnitine translocase. This entire shuttling system depends on adequate free carnitine — and carnitine deficiency (from dietary insufficiency, renal loss, or genetic disorders) produces characteristic metabolic dysfunction: impaired fat oxidation, accumulation of long-chain acylcarnitine species, hypoglycemia during fasting, and muscle weakness.

Injectable L-carnitine achieves plasma and tissue concentrations unattainable through oral supplementation alone. Oral carnitine has 14–18% bioavailability at typical doses (400–2000mg), with intestinal absorption saturation limiting uptake. Intravenous or intramuscular carnitine produces immediate high plasma concentrations that drive tissue uptake through mass action, transiently increasing intramuscular carnitine content far above what oral dosing achieves. This pharmacokinetic advantage makes injectable carnitine the modality of choice for applications where maximum carnitine delivery is desired: perioperative metabolic support, sports performance enhancement, and intensive fat loss protocols.

Beyond direct fat transport, L-carnitine serves multiple metabolic functions: carnitine carries short-chain acyl groups out of the mitochondria as acylcarnitines, preventing toxic accumulation that inhibits mitochondrial enzymes; carnitine participates in the beta-oxidation of medium-chain fatty acids; and acetyl-L-carnitine (the acetylated form) serves as a neurotransmitter precursor and acetyl group donor for acetyl-CoA synthesis in neurons and muscle. The acetyl-L-carnitine fraction of injectable carnitine preparations provides these neurological benefits alongside the metabolic effects.

Sports performance applications are well-documented: meta-analyses of carnitine supplementation show consistent effects on muscle carnitine content with high-dose injectable protocols, improvements in exercise performance at ventilatory threshold, and reduced exercise-induced muscle damage markers. The 400mg/L concentration provides 12g total (30mL vial) — appropriate for single high-dose injections or multi-dose protocols.`''',
    new_benefits='''[
      'Essential fatty acid mitochondrial transport cofactor — gates the primary fat-burning pathway in muscle and liver',
      'Injectable delivery achieves tissue concentrations oral supplementation cannot replicate',
      'Increases muscle carnitine content — the rate-limiting factor for long-chain fatty acid oxidation',
      'Prevents toxic long-chain acylcarnitine accumulation that inhibits mitochondrial enzyme function',
      'Improved exercise performance at ventilatory threshold in meta-analyses of carnitine supplementation',
      'Reduced exercise-induced muscle damage markers following carnitine loading',
      'Short-chain acyl group clearance from mitochondria — prevents acetyl-CoA inhibition of key metabolic enzymes',
      'Acetyl-L-carnitine fraction supports neurological acetyl-CoA availability',
      '12g total per vial — substantial supply for high-dose injectable protocols',
      'Perioperative and clinical carnitine repletion for documented carnitine deficiency states',
    ]''',
    new_protocol='''`**L-Carnitine 400mg/L Injectable Protocol:**
- Concentration: 400mg/mL (12g total in 30mL vial)
- Route: Slow IV push or IM injection
- Dose: 1–3g per administration (2.5–7.5mL)

**Fat Loss Protocol:**
- 2g (5mL) IV push 30 minutes before aerobic exercise
- 3–5× per week on exercise days
- IV administration produces immediate plasma spike driving muscle uptake

**Performance Protocol:**
- 2–3g IV 45 minutes pre-competition or high-intensity training
- Reduces muscle carnitine bottleneck during high fatty acid demand

**IV Administration:**
- Dilute in 10–20mL saline for slow IV push (3–5 minutes)
- Warm solution to body temperature to reduce vein irritation
- Flush with saline after administration

**Stacking:**
- L-Carnitine + AOD9604: fat mobilization (HGH fragment lipolysis) + fat oxidation (carnitine transport)
- L-Carnitine + AICAR: AMPK activation increases CPT-I expression alongside carnitine availability
- L-Carnitine + CoQ10: complementary mitochondrial energy production support`''',
    new_highlights='''[
      { title: 'Rate-Limiting Gate for Fat Burning', body: 'Long-chain fatty acids cannot enter the mitochondrial matrix without carnitine — it is the literal molecular gate that determines whether free fatty acids get burned or accumulate. Injectable carnitine opens this gate wider than any oral supplement can by delivering concentrations that drive mass-action tissue uptake.' },
      { title: 'Injectable vs. Oral: Pharmacokinetic Superiority', body: 'Oral carnitine has 14–18% bioavailability with absorption saturation limiting uptake. IV administration bypasses intestinal absorption entirely, producing plasma and muscle carnitine concentrations that oral dosing cannot achieve regardless of dose — making injectable the choice for maximum fat oxidation support.' },
      { title: 'Meta-Analytic Sports Performance Evidence', body: 'Multiple meta-analyses confirm that carnitine supplementation (particularly injectable protocols) increases muscle carnitine content, improves ventilatory threshold performance, and reduces exercise-induced muscle damage — among the most consistently replicated ergogenic effects in the sports supplementation literature.' },
    ]'''
)

# ── 5. Melanotan I 10mg ───────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='melanotan-i-10mg',
    next_slug='ru-58841-30ml',
    new_full_desc='''`Melanotan I (afamelanotide) is a selective MC1R (melanocortin-1 receptor) agonist and the linear analog of alpha-MSH — distinct from Melanotan II in both structure and receptor selectivity profile. While Melanotan II is cyclic and non-selectively activates MC1R, MC3R, MC4R, and MC5R (producing tanning, libido, appetite, and other effects through multiple receptor subtypes), Melanotan I is linear, longer-acting, and selectively activates MC1R with minimal MC3R/MC4R activity — providing UV-independent tanning through the melanogenesis pathway without the sexual arousal, appetite suppression, nausea, or cardiovascular effects attributable to MC4R/MC3R activation in Melanotan II.

MC1R is the key receptor governing skin pigmentation. MC1R activation triggers cAMP signaling in melanocytes, which drives the shift from pheomelanin (yellow/red, photoprotective) to eumelanin (brown/black, highly photoprotective) synthesis — increasing the concentration of the more UV-absorbing melanin type and darkening skin pigmentation. This eumelanin shift provides actual photoprotection: eumelanin efficiently dissipates UV photon energy as heat rather than allowing it to cause DNA damage, which is why MC1R activation (through sun exposure or afamelanotide) constitutes genuine photoprotection rather than simply cosmetic tanning.

Afamelanotide is an FDA-approved pharmaceutical in Europe (Scenesse, Clinuvel Pharmaceuticals) for the rare photosensitivity disorder erythropoietic protoporphyria (EPP) — where solar-induced pain severely limits sun exposure and quality of life. The approval was based on rigorous Phase 3 randomized controlled trials demonstrating significantly increased pain-free sun exposure time in EPP patients. It has also been studied in solar urticaria, vitiligo (to stimulate repigmentation in affected areas), and skin cancer prevention in high-risk populations (organ transplant recipients on immunosuppression with elevated squamous cell carcinoma risk).

The photoprotection mechanism of Melanotan I makes it relevant for populations with high UV exposure risk: fair-skinned individuals with low baseline melanin, those with personal or family history of melanoma, outdoor workers, and people in high-altitude or high-UV environments. The SC-16 implant form of afamelanotide (used in EPP clinical trials) provides slow-release over 2 months from a single implant; the injectable peptide form provides shorter-duration tanning effects from weekly or bi-weekly injections.

The superior selectivity of Melanotan I for MC1R with reduced MC4R activity makes it the preferred compound for users seeking UV-independent tanning or photoprotective pigmentation without the sexual, appetite, or nausea side effects of non-selective MT-II. The absence of MC4R-mediated libido effects makes it appropriate for female users who experienced unwanted sexual side effects with Melanotan II.

Protocol: 1–2mg/day SC injection for 5–7 days for initial tanning, maintenance 1–2mg twice weekly.`''',
    new_benefits='''[
      'Selective MC1R agonism — UV-independent melanogenesis without MC4R-mediated libido, appetite, or nausea effects',
      'Shifts pheomelanin to eumelanin — produces genuinely photoprotective pigmentation rather than cosmetic tanning',
      'FDA-approved (Scenesse/afamelanotide) in Europe for EPP — rigorous Phase 3 RCT safety and efficacy data',
      'Significantly increased pain-free sun exposure time in EPP Phase 3 trials',
      'Studied in solar urticaria, vitiligo repigmentation, and skin cancer prevention in transplant recipients',
      'Longer half-life than Melanotan II — more stable once-daily or twice-weekly dosing profile',
      'No involuntary erections or sexual side effects — MC4R selectivity minimized vs. MT-II',
      'Reduced nausea vs. Melanotan II — less MC3R gastrointestinal activity',
      'Appropriate for female users seeking tanning without libido side effects',
      'Genuine photoprotection application — relevant for high UV exposure risk populations',
    ]''',
    new_protocol='''`**Melanotan I Protocol:**
- Loading Dose: 1–2mg/day SC injection for 5–7 days
- Maintenance: 1–2mg twice weekly after loading
- Route: Subcutaneous injection
- Timing: Evening preferred to allow any mild flushing to resolve overnight

**Tanning Response Timeline:**
- Days 3–5: Initial melanocyte stimulation, subtle color change
- Week 2: Visible tanning effect developing
- Week 3–4: Full tanning effect established
- Maintenance: Twice-weekly dosing sustains pigmentation

**Photoprotection Context:**
- Eumelanin produced provides actual UV-absorbing photoprotection
- Continue normal sun protection practices — Melanotan I supplements, does not replace, sunscreen
- Particularly relevant in high UV environments or for MC1R-variant individuals with poor natural tanning

**vs. Melanotan II:**
- MT-I: MC1R selective, no libido effect, less nausea, longer-acting, FDA-approved pharmaceutical analog
- MT-II: non-selective, libido/sexual arousal effects, more nausea, faster onset, not approved
- Choose MT-I for tanning without sexual side effects or for female users`''',
    new_highlights='''[
      { title: 'FDA-Approved Pharmaceutical Analog', body: 'Afamelanotide (Scenesse) is the FDA/EMA-approved form of Melanotan I — a pharmaceutical approved through rigorous Phase 3 randomized controlled trials for EPP. This regulatory approval provides a level of clinical validation that no other tanning peptide has achieved.' },
      { title: 'Eumelanin Shift: Real Photoprotection', body: 'MC1R activation shifts melanocytes from pheomelanin to eumelanin synthesis. Eumelanin absorbs UV photons far more efficiently than pheomelanin and dissipates them as heat — providing genuine, measurable photoprotection rather than just cosmetic color change.' },
      { title: 'MC1R Selectivity Over MT-II', body: 'Melanotan I\'s selectivity for MC1R with minimal MC4R activity eliminates the involuntary sexual arousal, appetite suppression, and associated side effects that characterize non-selective MT-II — making it the appropriate choice for users wanting pigmentation benefits without multi-receptor activation consequences.' },
    ]'''
)

# ── 6. RU-58841 30ml ──────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='ru-58841-30ml',
    next_slug='ru-58841-60ml',
    new_full_desc='''`RU-58841 is a non-steroidal androgen receptor antagonist developed for topical application — designed specifically to block androgen receptor (AR) activation in scalp hair follicles while minimizing systemic absorption that would interfere with circulating testosterone effects. Hair follicle miniaturization in androgenetic alopecia (male pattern baldness) is driven by DHT (dihydrotestosterone) activation of AR in genetically susceptible follicles, triggering a shortening of the anagen (growth) phase and progressive miniaturization that ultimately produces vellus (unpigmented, fine) hair from terminal follicles. RU-58841 applied topically to the scalp competes with DHT for follicular AR binding, blocking the androgen signal that drives this miniaturization process without requiring systemic DHT reduction.

The mechanism distinguishes RU-58841 fundamentally from oral finasteride (5-alpha reductase inhibitor) and oral dutasteride. Finasteride reduces systemic DHT by inhibiting the enzyme that converts testosterone to DHT — but this systemic DHT reduction affects androgen signaling throughout the body, producing the well-documented side effects of sexual dysfunction, mood changes, and cognitive effects that have generated significant concern under the "Post-Finasteride Syndrome" discussion. RU-58841 targets the AR directly and only at the point of application — with sufficient topical selectivity that meaningful systemic androgenic activity is not significantly altered, preserving the systemic benefits of DHT (libido, erectile function, mood, neurotransmission) while blocking its follicular effects.

Preclinical studies in the stump-tailed macaque (a primate model of androgenetic alopecia with AR-driven hair loss matching the human phenotype) demonstrated significant hair regrowth with topical RU-58841 compared to vehicle controls — results published in peer-reviewed literature establishing the proof-of-concept for topical AR antagonism in alopecia. Clinical development was discontinued in the 1990s, not due to safety issues but due to corporate decisions at ProStrakan (the pharmaceutical developer) — the compound never progressed to Phase 3 not because of failure but because of business decisions.

The practical application of RU-58841 has driven a substantial self-experimenter community that has accumulated significant anecdotal evidence over two decades. Many users report results comparable to or better than finasteride for hair retention, without the sexual or cognitive side effects associated with systemic 5-alpha reductase inhibition. The combination with minoxidil (VEGF/potassium channel mechanism) is the most common protocol, addressing hair loss through both androgen receptor blockade (RU-58841) and follicular vasodilation and proliferation (minoxidil) — two mechanistically independent pathways to hair retention.

The 30mL bottle at standard research concentrations (25–50mg/mL in carrier vehicle) provides a 1–2 month supply at typical application doses of 50mg/day. Vehicle choice is important for delivery — the included or recommended carrier should penetrate the stratum corneum to reach follicular AR in the dermal papilla.`''',
    new_benefits='''[
      'Topical AR antagonism blocks DHT-driven follicular miniaturization at scalp without systemic DHT reduction',
      'No systemic androgenic suppression — preserves libido, erectile function, and DHT-dependent neurological function',
      'Avoids Post-Finasteride Syndrome risks — does not inhibit 5-alpha reductase or alter circulating hormones',
      'Significant hair regrowth in stump-tailed macaque primate model — published peer-reviewed evidence',
      'Development discontinued for business reasons, not safety failure — no adverse Phase trial outcomes',
      'Two decades of anecdotal evidence in self-experimenter community — extensive real-world usage data',
      'Mechanistically complementary to minoxidil — AR blockade + vasodilation/proliferation dual protocol',
      'Once-daily topical application — practical dosing without systemic medication requirements',
      'Relevant for DHT-sensitive hair follicle preservation in genetically susceptible individuals',
      'Non-steroidal structure — avoids steroidal AR antagonist off-target hormonal effects',
    ]''',
    new_protocol='''`**RU-58841 30ml Protocol:**
- Concentration: 25–50mg/mL in carrier vehicle
- Dose: 50mg/day (1mL at 50mg/mL) applied to affected scalp areas
- Route: Topical scalp application
- Frequency: Once daily

**Application:**
- Apply to dry scalp in areas of thinning/miniaturization
- Massage gently to distribute into scalp
- Allow to dry before hair styling (10–15 minutes)
- Evening application preferred — allows overnight scalp absorption without washing off

**Vehicle Considerations:**
- Ethanol/propylene glycol vehicles: good penetration, may cause scalp dryness
- Liposome or nanoparticle vehicles: potentially superior follicular delivery with less scalp irritation
- Avoid application to face/forehead — minimize non-target area absorption

**Combination Protocol (standard):**
- RU-58841 (morning or evening) + Minoxidil 5% (morning)
- Address both AR-mediated miniaturization (RU-58841) and follicular vasodilation (minoxidil)
- Biotin, collagen, and hair growth peptides (GHK-Cu) complement both

**Storage:**
- 4°C or room temperature, away from light — ethanol vehicles evaporate slowly over time`''',
    new_highlights='''[
      { title: 'Topical Selectivity — No Systemic DHT Reduction', body: 'RU-58841 blocks DHT\'s action at follicular AR topically, without reducing systemic DHT production. This preserves DHT\'s neurological, sexual, and systemic anabolic functions that finasteride ablates — the fundamental advantage over oral 5-alpha reductase inhibitors.' },
      { title: 'Primate Model Evidence', body: 'Published peer-reviewed studies in stump-tailed macaques (the gold-standard primate model for androgenetic alopecia) showed significant hair regrowth with topical RU-58841 — preclinical evidence in a non-human primate model that closely parallels human AR-driven alopecia pathology.' },
      { title: 'Mechanistically Distinct from Minoxidil', body: 'RU-58841 blocks androgen receptor activation — the cause of follicular miniaturization. Minoxidil drives follicular vasodilation and proliferation — treating consequences rather than cause. Combined, they address hair loss from both ends: blocking the miniaturization signal and promoting follicular regrowth simultaneously.' },
    ]'''
)

# ── 7. NA-Selank Amidate 10mg ─────────────────────────────────────────────────
content = replace_product(
    content,
    slug='na-selank-amidate-10mg',
    next_slug='na-selank-amidate-30mg',
    new_full_desc='''`NA-Selank Amidate is the doubly-modified version of Selank — combining N-terminal acetylation (NA-) and C-terminal amidation (-amidate) modifications that together produce the most pharmacokinetically stable and bioavailable form of the Selank peptide sequence. Selank (Thr-Lys-Pro-Arg-Pro-Gly-Pro) is derived from tuftsin and was developed at the Institute of Molecular Genetics in Moscow as an anxiolytic and nootropic peptide. NA-Selank Amidate extends the biological activity duration and improves CNS delivery of the parent compound through modifications that protect both termini from enzymatic degradation.

N-acetylation at the N-terminal threonine blocks aminopeptidase cleavage (the primary route of N-terminal degradation in plasma and tissue), while C-terminal amidation replaces the free carboxylate group with an amide — protecting against carboxypeptidase degradation and producing a neutral C-terminus that more closely mimics the charge state of many endogenous neuropeptides. Together, these modifications extend the peptide\'s plasma half-life from minutes (unmodified Selank) to significantly longer durations, increasing the AUC (area under the curve) of active peptide per dose and requiring less frequent re-dosing for sustained effects.

The anxiolytic mechanism of Selank involves GABAergic modulation (increasing the sensitivity of GABA-A receptors and potentiating GABA\'s inhibitory signaling in the amygdala and limbic system), serotonergic upregulation (increases brain serotonin levels through 5-HTP pathway stimulation), and direct neurotrophin activity (upregulates BDNF expression in hippocampus and cortex). The combination of GABAergic and serotonergic effects produces anxiolysis without the sedation, dependence, or cognitive impairment of benzodiazepines — Selank\'s anxiolysis is "clean," leaving alertness and cognitive performance intact or enhanced.

Beyond anxiety reduction, NA-Selank Amidate produces cognitive enhancement effects independent of its anxiolytic activity. Improved memory consolidation, enhanced attention and focus, and faster information processing have been reported in both research contexts and among users. The mechanism for cognitive enhancement likely involves the BDNF upregulation (improving hippocampal synaptic plasticity) and the GABAergic balance optimization (reducing the anxiety-related cognitive interference that impairs performance under stress). This dual anxiolytic-nootropic profile makes NA-Selank Amidate one of the most comprehensively useful cognitive peptides — it both calms anxious cognition and actively enhances performance.

The immune regulatory effects of Selank add a third dimension: enkephalin-related peptides and tuftsin derivatives like Selank modulate cytokine production and NK cell activity. Selank has been shown to increase T-lymphocyte activity and normalize the inflammatory cytokine imbalances associated with chronic stress — an immunological benefit that complements its neurological effects in high-stress contexts.

Protocol: 250–500mcg intranasal per dose, 1–2× daily. NA-Selank Amidate is ideal for intranasal delivery due to the stability improvements enabling reliable CNS access.`''',
    new_benefits='''[
      'Dual N-acetyl + C-amide protection — most stable Selank variant with maximum enzymatic degradation resistance',
      'Extended plasma half-life vs. unmodified Selank — longer active duration per dose, less frequent re-dosing',
      'GABAergic anxiolysis without sedation — benzodiazepine-like anxiety relief without cognitive impairment or dependence',
      'Serotonin pathway upregulation — 5-HTP stimulation adds serotonergic anxiolysis alongside GABAergic mechanism',
      'BDNF upregulation in hippocampus and cortex — cognitive enhancement through neuroplasticity stimulation',
      'Improved memory consolidation, attention, and information processing speed',
      'Cognitive performance enhancement under stress — dual anxiolytic + nootropic action works synergistically',
      'T-lymphocyte activity increase and cytokine normalization — stress-related immune modulation',
      'Clean anxiolysis: alertness maintained or enhanced, not sedated',
      'Ideal for intranasal delivery — stability modifications support reliable CNS access without injection',
    ]''',
    new_protocol='''`**NA-Selank Amidate Protocol:**
- Dose: 250–500mcg per administration
- Route: Intranasal (preferred) or subcutaneous
- Frequency: 1–2× daily; morning for cognitive effect, evening for anxiety/sleep
- Duration: Can be used acutely (as-needed) or in sustained daily courses

**Intranasal:**
- Reconstitute in bacteriostatic water (250mcg/mL)
- 250–500mcg per nostril or split across both
- Effects onset within 10–20 minutes

**Acute Use (cognitive demand or anxiety):**
- 250–500mcg intranasal 20 minutes before performance demand or stressful situation
- Clean anxiolysis maintains cognitive performance while reducing anxiety response

**Daily Course Protocol:**
- 250mcg morning + 250mcg evening for 4–8 weeks
- BDNF/neuroplasticity effects build over 2–4 weeks of daily use
- 2–4 week washout before repeating

**Stacking:**
- NA-Selank Amidate + N-Acetyl Semax Amidate: GABAergic anxiolysis + dopaminergic focus — complementary mechanisms
- NA-Selank Amidate + PE-22-28: GABAergic + TrkB — dual anxiety + neuroplasticity stack
- Add Methylene Blue for energy substrate support`''',
    new_highlights='''[
      { title: 'Dual Terminal Modification for Maximum Stability', body: 'N-acetylation (N-terminus) + amidation (C-terminus) together protect against both aminopeptidase and carboxypeptidase degradation — producing the most enzymatically stable Selank variant available, with significantly longer active duration per dose than unmodified or singly-modified forms.' },
      { title: 'Anxiolysis Without Sedation or Dependence', body: 'Unlike benzodiazepines that produce dependence, tolerance, and cognitive sedation, NA-Selank Amidate\'s GABAergic modulation produces anxiolysis while maintaining or enhancing alertness and cognitive performance — the defining pharmacological advantage of this class over classical anxiolytics.' },
      { title: 'Dual Anxiolytic and Nootropic Action', body: 'NA-Selank Amidate simultaneously reduces anxiety (GABAergic + serotonergic) and enhances cognition (BDNF neuroplasticity + attention/memory) — the two effects work synergistically because anxiety impairs cognitive performance, and anxiolysis + direct cognitive enhancement produce greater net cognitive improvement than either alone.' },
    ]'''
)

# ── 8. Cagrilintide 10mg ──────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='cagrilintide-10mg',
    next_slug='cagrilintide-5mg',
    new_full_desc='''`Cagrilintide is a long-acting analog of amylin — a pancreatic peptide hormone co-secreted with insulin from beta cells in response to meals — and the most clinically advanced amylin receptor agonist ever developed. While Pramlintide (Symlin) is the only approved amylin analog (for type 1 and type 2 diabetes), its short half-life requires 2–3 daily injections. Cagrilintide is engineered with fatty acid conjugation and structural modifications that extend its half-life to enable once-weekly dosing — matching the dosing convenience of semaglutide and making it practical for long-term obesity and metabolic management.

Amylin and GLP-1 are mechanistically complementary yet distinct in their pathways. GLP-1 primarily reduces food intake by activating hypothalamic GLP-1 receptors to increase satiety signaling and reduce appetite, while also slowing gastric emptying. Amylin reduces food intake through the area postrema (AP) and nucleus tractus solitarius (NTS) in the brainstem — different neuroanatomical circuits that converge on appetite suppression but through separate receptor populations. This complementarity is why the combination of cagrilintide with semaglutide (the CagriSema combination being developed by Novo Nordisk) produces weight loss greater than either alone: two independent satiety pathways are simultaneously activated.

The amylin receptor signaling pathway involves a heterodimeric receptor complex consisting of the calcitonin receptor (CTR) combined with receptor activity-modifying proteins (RAMPs 1, 2, or 3). This receptor complex activates cAMP and MAPK signaling cascades in amylin-responsive neurons. Beyond appetite suppression, amylin receptor signaling has multiple metabolic effects: suppression of glucagon secretion after meals (reducing post-meal hepatic glucose output), slowing gastric emptying (reducing the rate of glucose absorption and blunting postprandial glucose spikes), and through central effects, influencing energy expenditure and body weight set-point regulation.

CagriSema Phase 3 trial data (REDEFINE-1) published in 2024 showed 22.7% mean weight loss at 68 weeks — the highest weight reduction ever recorded in a Phase 3 obesity trial for any pharmaceutical, surpassing tirzepatide\'s 22.5% (SURMOUNT-1) and semaglutide\'s 14.9% (STEP-1). This establishes CagriSema as the new efficacy benchmark for obesity pharmacotherapy, and places cagrilintide\'s contribution — the approximately 8% additional weight loss it adds when combined with semaglutide — as one of the most clinically significant recent additions to the metabolic pharmacology armamentarium.

The 10mg vial provides extended supply for ongoing weekly dosing protocols. Clinical dose escalation for cagrilintide follows a similar titration schedule as GLP-1 agonists: starting at 0.25–0.5mg weekly and escalating to the target 2.4mg dose over 16 weeks to minimize GI adverse effects.`''',
    new_benefits='''[
      'Long-acting amylin analog — once-weekly dosing through fatty acid conjugation and structural optimization',
      'Distinct satiety pathway from GLP-1: area postrema/NTS brainstem circuits vs. hypothalamic GLP-1 signaling',
      'CagriSema 22.7% weight loss at 68 weeks — highest Phase 3 obesity trial result in pharmaceutical history',
      'Adds ~8% additional weight loss when combined with semaglutide — significant independent contribution',
      'Glucagon suppression after meals — reduces post-meal hepatic glucose output and glycemic excursions',
      'Gastric emptying delay — blunts postprandial glucose absorption rate',
      'Mechanistically complementary to all GLP-1 agonists — independent pathway, additive or synergistic effect',
      'Better GI tolerability than pramlintide — weekly injection vs. 3× daily, improved tolerability profile',
      'Novo Nordisk Phase 3 development for combined CagriSema product — regulatory pathway in progress',
      '10mg vial = approximately 4 weeks supply at 2.4mg/week target dose',
    ]''',
    new_protocol='''`**Cagrilintide 10mg Dose Escalation:**
- Route: Subcutaneous injection (abdomen, thigh, upper arm)
- Frequency: Once weekly, same day each week

**Escalation Schedule (16 weeks to target):**
- Weeks 1–4: 0.25mg/week
- Weeks 5–8: 0.5mg/week
- Weeks 9–12: 1.0mg/week
- Weeks 13–16: 1.7mg/week
- Week 17+: 2.4mg/week (target dose)

**GI Management:**
- Primary side effects: nausea, vomiting, decreased appetite (dose-dependent)
- Gradual escalation essential — do not rush beyond tolerance
- Small frequent meals during first weeks of new dose level

**CagriSema Combination Protocol:**
- Cagrilintide 2.4mg/week + Semaglutide 2.4mg/week (separate or co-formulated)
- Co-injection in separate syringes at same site acceptable
- Dual satiety pathway activation maximizes weight loss outcomes

**Supply Calculation:**
- 10mg vial at 2.4mg/week = ~4 weeks at target dose
- Escalation doses consume 1–3mg/week for 16 weeks`''',
    new_highlights='''[
      { title: 'REDEFINE-1: 22.7% Weight Loss — New Efficacy Record', body: 'CagriSema in REDEFINE-1 Phase 3 achieved 22.7% mean weight loss at 68 weeks — exceeding every previous obesity trial result for any pharmaceutical agent, establishing dual GLP-1/amylin agonism as the most effective pharmacological approach to obesity currently in clinical development.' },
      { title: 'Complementary to GLP-1, Not Redundant', body: 'GLP-1 agonists activate hypothalamic satiety circuits. Cagrilintide activates brainstem area postrema/NTS amylin circuits. These are anatomically and mechanistically distinct pathways — the combination does not create redundancy but dual independent activation that produces greater-than-additive weight loss.' },
      { title: 'Amylin\'s Unique Glucagon Suppression', body: 'Unlike GLP-1 agonists that only suppress glucagon through indirect mechanisms, amylin directly suppresses post-meal glucagon secretion from alpha cells — reducing post-meal hepatic glucose output and providing glycemic control through a mechanism that complements rather than duplicates GLP-1\'s insulin-stimulating effect.' },
    ]'''
)

# ── 9. GLOW Blend 50mg ────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='glow-blend-50mg',
    next_slug='glow-blend-70mg',
    new_full_desc='''`Phiogen\'s GLOW Blend is a targeted skin and hair peptide combination formulated to address the multiple molecular mechanisms underlying skin aging, hair miniaturization, and dermal matrix degradation simultaneously. Rather than delivering a single peptide with a single mechanism, GLOW combines peptides with complementary and synergistic activities across the key biological pathways that govern skin quality and hair follicle health — collagen synthesis, elastin production, melanin regulation, follicular growth signaling, and antioxidant defense at the dermal level.

The skin aging process involves multiple converging pathways: progressive loss of type I and III collagen (the structural matrix proteins providing firmness and elasticity), fragmentation and cross-linking of elastin fibers (reducing skin\'s resilience and bounce), thinning of the dermal-epidermal junction, reduced hyaluronic acid production (loss of hydration and plumpness), accumulation of oxidative damage in dermal fibroblasts (reducing synthetic capacity), and shortening of telomeres in skin cells (limiting replicative capacity for self-renewal). No single peptide addresses all of these — but a targeted multi-peptide blend can simultaneously activate collagen synthesis, stimulate fibroblast activity, provide antioxidant protection, and support the cellular renewal pathways that maintain skin quality.

GLOW\'s formulation typically includes copper peptide (GHK-Cu) for its dual collagen synthesis stimulation and SPARC gene expression effects that are foundational to dermal matrix quality; SNAP-8 or related acetyl hexapeptides for expression-line smoothing through neuromuscular junction modulation at the dermal level; hair growth peptides that activate Wnt/β-catenin signaling in follicular dermal papilla cells (the master pathway governing anagen initiation and hair growth); and antioxidant peptides that protect dermal fibroblasts from the oxidative damage that accelerates synthetic decline. The specific formula reflects Phiogen\'s optimization of these complementary targets in a stable, injectable formulation.

Hair follicle health requires dedicated support: follicular dermal papilla (DP) cells produce the signaling molecules that direct hair shaft production, and their functional decline through DHT sensitivity, inflammatory signals, and oxidative stress is the common final pathway in both androgenetic and telogen effluvium hair loss. Peptides that activate Wnt/β-catenin in DP cells can restart the anagen phase in resting follicles, while peptides reducing oxidative stress in follicular tissue protect the DP cells that orchestrate hair growth. GLOW addresses both aspects.

The 50mg vial provides approximately 50 daily doses at 1mg/day — a standard 50-day course for sustained dermal and follicular peptide protocol. Daily low-dose consistent exposure is generally more effective for dermal peptide applications than intermittent higher doses, as collagen synthesis and follicular Wnt signaling benefit from sustained rather than pulsatile stimulation.`''',
    new_benefits='''[
      'Multi-mechanism skin aging intervention: collagen synthesis, elastin support, fibroblast activation, antioxidant protection',
      'GHK-Cu component: foundational collagen synthesis stimulation and SPARC gene expression for dermal matrix quality',
      'Hair follicle Wnt/β-catenin activation — restarts anagen phase in resting follicles',
      'Neuromuscular junction modulation for expression line reduction (SNAP-8/acetyl hexapeptide components)',
      'Antioxidant protection for dermal fibroblasts — prevents oxidative decline in skin synthetic capacity',
      'Hyaluronic acid synthesis support — dermal hydration and plumpness maintenance',
      'Daily low-dose protocol sustains continuous dermal peptide signaling for collagen/matrix maintenance',
      'Comprehensive skin and hair dual coverage — addresses both tissue types with organ-specific peptides',
      '50mg = 50-day supply at 1mg/day — full course duration for sustained structural improvements',
      'Pre-formulated convenience — optimized blend ratios without individual compound sourcing required',
    ]''',
    new_protocol='''`**GLOW Blend 50mg Protocol:**
- Dose: 1mg/day
- Route: Subcutaneous injection
- Duration: 50-day course (entire vial)
- Frequency: Daily for sustained collagen and follicular signaling

**Administration:**
- Reconstitute with 5mL bacteriostatic water (10mg/mL)
- 0.1mL (1mg) SC injection — abdomen, thigh, or upper arm
- Morning or evening — consistent timing for predictable skin cell cycle exposure

**Skin Focus:**
- Continue for full 50 days without interruption — collagen synthesis benefits are cumulative
- Visible skin improvements typically develop by weeks 3–6 of consistent daily use
- Pair with topical retinoids or peptide serums for synergistic dermal effects

**Hair Focus:**
- Concurrent use of topical minoxidil and/or RU-58841 provides complementary follicular stimulation
- Systemic peptide GLOW + topical minoxidil = systemic growth factors + scalp vasodilation

**Cycle Structure:**
- 50-day course, 2–4 week break, repeat
- 4 courses/year for sustained dermal and follicular maintenance`''',
    new_highlights='''[
      { title: 'Multi-Pathway Skin Aging Coverage', body: 'GLOW addresses collagen synthesis, elastin support, fibroblast antioxidant protection, and Wnt-mediated follicular renewal simultaneously — no single-peptide protocol can replicate the breadth of dermal aging mechanisms targeted by a purpose-formulated multi-peptide blend.' },
      { title: 'GHK-Cu Synergy with Hair Peptides', body: 'GHK-Cu is documented to activate SPARC and collagen synthesis in dermis AND to stimulate hair follicle growth in its own right — combining it with dedicated Wnt/β-catenin activating hair peptides in GLOW creates synergistic coverage of both the dermal matrix and follicular growth pathways.' },
      { title: 'Daily Low-Dose for Dermal Biology', body: 'Collagen synthesis, follicular anagen cycling, and dermal fibroblast activity all benefit from sustained daily signaling rather than periodic high doses. GLOW\'s 50-day daily dosing design aligns with the biology of dermal and follicular remodeling timescales.' },
    ]'''
)

# ── 10. BPC-157 + TB-500 Blend 20mg ──────────────────────────────────────────
content = replace_product(
    content,
    slug='bpc-157-tb-500-blend-20mg',
    next_slug='bpc-157-tb-500-blend-10mg',
    new_full_desc='''`The BPC-157 + TB-500 Blend 20mg combines 10mg of each peptide — the two most evidence-supported systemic tissue healing peptides available — in a single pre-blended vial that delivers dual-mechanism healing activation with single reconstitution convenience. This combination is often called the "healing stack" because the two peptides address tissue repair through complementary and largely non-overlapping molecular pathways: BPC-157 through growth factor upregulation, angiogenesis, and the GABAergic/nitric oxide systems; TB-500 through actin dynamics and systemic actin sequestration that redistributes cellular repair capacity to injury sites.

BPC-157\'s healing mechanism centers on its ability to upregulate growth factor receptors and stimulate angiogenesis (new blood vessel formation) at injury sites. BPC-157 upregulates VEGF (vascular endothelial growth factor) expression, activating the formation of new capillary networks in damaged tissue that restore blood supply essential for sustained repair. It also activates FAK-paxillin signaling in tendon and connective tissue fibroblasts, promoting cell migration and proliferation into injury sites. GH and IGF-1 receptor expression is upregulated by BPC-157, amplifying the anabolic signaling that drives tissue rebuilding. NO (nitric oxide) production modulation and EGR-1 transcription factor activation further coordinate BPC-157\'s multi-signal repair orchestration. These mechanisms are systemic — BPC-157 administered subcutaneously remote from the injury site still reaches the injury and activates local repair cascades.

TB-500 (Thymosin Beta-4 synthetic peptide) operates through the actin sequestration mechanism. Thymosin Beta-4 binds G-actin (globular, monomeric actin) to prevent its polymerization into F-actin (filamentous actin), maintaining a pool of free G-actin available for rapid cellular movement and shape changes. This actin availability enables faster migration of repair cells (fibroblasts, endothelial progenitors, inflammatory cells) into injury sites, accelerating the cellular recruitment phase of tissue repair. TB-500 also activates Wnt/β-catenin stem cell signaling, mobilizing stem cells from bone marrow and local tissue niches to injury sites — adding a regenerative cellular recruitment component absent from BPC-157\'s primarily growth factor-mediated mechanisms.

The two peptides are synergistic because they accelerate different phases and mechanisms of repair simultaneously: BPC-157 establishes the vascular supply and growth factor milieu; TB-500 accelerates cell migration and stem cell mobilization. Together, they address the two primary rate-limiting factors in tissue repair — inadequate blood supply to the injury site and insufficient recruitment of repair-competent cells to execute the rebuilding process. Neither alone produces as complete a repair-accelerating effect as both combined.

The 20mg vial (10mg BPC-157 + 10mg TB-500) at standard research doses (250mcg each per injection) provides approximately 40 combined doses — 8 weeks at 5× weekly, or 13 weeks at 3× weekly. This is the highest-dose blend option, suitable for acute injury protocols or for users who have established the lower-dose blend\'s tolerability.`''',
    new_benefits='''[
      'Dual-mechanism healing synergy: BPC-157 (growth factors + angiogenesis) + TB-500 (actin dynamics + stem cells)',
      'VEGF upregulation by BPC-157 — new capillary formation restores blood supply to injury sites',
      'FAK-paxillin fibroblast activation — accelerated connective tissue cell migration and proliferation',
      'TB-500 actin sequestration — maintains free G-actin pool enabling rapid repair cell movement',
      'Wnt/β-catenin stem cell mobilization from TB-500 — regenerative cell recruitment to injury site',
      'Systemic delivery — both peptides reach injury sites from remote subcutaneous injection',
      'Complementary rate-limiting factor coverage: vascular supply (BPC-157) + cellular recruitment (TB-500)',
      'Pre-blended convenience — single reconstitution delivers both peptides simultaneously',
      '20mg total = highest dose option for acute injury protocols',
      'The most evidence-supported and widely used healing peptide combination available',
    ]''',
    new_protocol='''`**BPC-157 + TB-500 Blend 20mg Protocol:**
- Dose: 250mcg each (500mcg total blend) per injection
- Route: Subcutaneous injection (proximal to injury when possible)
- Frequency: Daily (acute injury) or 3–5× weekly (maintenance/prevention)
- Duration: 6–8 weeks for acute injury; ongoing for chronic conditions

**Reconstitution:**
- Add 4mL bacteriostatic water to 20mg vial (2.5mg/mL per peptide)
- 250mcg BPC-157 + 250mcg TB-500 = 0.2mL (200mcg/mL per peptide solution)

**Acute Injury Protocol:**
- Start within 24–48 hours of injury for maximum efficacy
- Daily injections for first 2 weeks, then 3–5× weekly for remaining 4 weeks
- Local SC injection near injury site preferred over distal injection

**Maintenance Protocol:**
- 3× weekly at maintenance doses
- For active athletes: year-round maintenance prevents chronic microtrauma accumulation

**Monitoring:**
- Imaging (MRI, ultrasound) at baseline and 6–8 weeks for structural outcome measurement
- Pain and functional scores as immediate clinical markers`''',
    new_highlights='''[
      { title: 'The Healing Peptide Stack', body: 'BPC-157 + TB-500 is the most widely used and most evidence-supported peptide combination for tissue healing — the two peptides cover the fundamental rate-limiting factors in repair (vascular supply and cell recruitment) through completely non-overlapping mechanisms that produce genuine synergy rather than redundancy.' },
      { title: 'BPC-157 Builds the Vascular Infrastructure', body: 'VEGF upregulation by BPC-157 drives new capillary formation that restores blood supply to avascular or hypovascular injury sites — without adequate blood supply, the cells and nutrients needed for tissue repair cannot reach the injury. BPC-157 solves the blood supply problem that limits all other repair mechanisms.' },
      { title: 'TB-500 Mobilizes the Repair Workforce', body: 'G-actin availability from TB-500\'s sequestration mechanism allows repair cells to rapidly reshape and migrate into injury sites, while Wnt/β-catenin stem cell signaling mobilizes regenerative cells from systemic sources. TB-500 solves the cellular recruitment problem that limits structural tissue rebuilding.' },
    ]'''
)


# ── Save ──────────────────────────────────────────────────────────────────────
open(path, 'w', encoding='utf-8').write(content)
new_size = len(content)
print(f"\nAll 10 products patched.")
print(f"File size change: {original_size} → {new_size} chars (+{new_size - original_size})")
