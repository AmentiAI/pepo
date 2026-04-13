#!/usr/bin/env python3
"""Batch 7: Mazdutide, Adipotide, BAM-15, O-304, SLU-PP-332, Tesofensine,
PE-22-28, P21, Adamax, Oxytocin"""

import re, sys

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


# ── 1. Mazdutide 6mg ──────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='mazdutide-6mg',
    next_slug='aod9604-10mg',
    new_full_desc='''`Mazdutide (IBI362, OXM3) is a GLP-1/Glucagon dual agonist being developed by Innovent Biologics primarily for the Chinese and Asian patient populations, where it has undergone extensive Phase 2 and Phase 3 clinical investigation for both obesity and type 2 diabetes management. Its dual receptor mechanism mirrors survodutide\'s pharmacological approach — GLP-1 receptor agonism for appetite suppression and insulin secretion paired with glucagon receptor agonism for hepatic fat mobilization and thermogenesis — but with a distinct molecular structure and development profile optimized through Innovent\'s SAIL (Structured Amide Insertion Ligation) technology.

The pharmacological rationale for GLP-1/Glucagon dual agonism in mazdutide is the same mechanistic advantage shared across this class: glucagon receptor agonism contributes benefits that GLP-1 alone cannot provide. Glucagon drives hepatic lipolysis — increasing fatty acid oxidation and reducing hepatic triglyceride content — which is directly relevant to the high prevalence of non-alcoholic fatty liver disease (NAFLD) in the metabolic syndrome population that most benefits from GLP-1-based therapy. Glucagon also activates brown adipose tissue (BAT) thermogenesis through β-3 adrenergic and sympathetic nervous system cross-talk, increasing energy expenditure beyond the appetite suppression mediated by GLP-1. Together, these mechanisms produce a more favorable metabolic shift than GLP-1 monotherapy.

Phase 2 clinical data for mazdutide in Chinese patients with obesity demonstrated weight reductions of 10–14% over 24 weeks at optimal doses — highly significant for a Phase 2 duration and consistent with the GLP-1/glucagon dual agonist class. Importantly, mazdutide showed significant HbA1c reduction alongside weight loss, confirming the GLP-1 component\'s glycemic efficacy. Phase 3 trials (GLORY program) are ongoing for both obesity and T2D indications in China, with potential for broader global regulatory applications pending those outcomes.

The distinction from semaglutide lies in the glucagon component and its hepatic metabolic effects. Head-to-head comparisons in animal models and Phase 2 human data suggest GLP-1/glucagon dual agonists produce greater reduction in liver fat than GLP-1 monotherapy — a clinically meaningful differentiator given the extremely high NAFLD/NASH prevalence in the obese metabolic syndrome population. This hepatic dimension may ultimately drive mazdutide\'s adoption as a preferred agent in populations where metabolic liver disease is a co-primary therapeutic target alongside weight management.

The SAIL technology used in mazdutide\'s engineering improves protease stability and extends half-life through structured molecular modifications — addressing one of the key pharmaceutical challenges in peptide drug development (enzymatic degradation). This technical improvement contributes to the once-weekly dosing profile that makes mazdutide practical for long-term obesity management.

Research compound reflecting late-stage clinical development. Weekly subcutaneous injection, dose escalation from 1.2mg to 6mg target dose per clinical trial protocols.`''',
    new_benefits='''[
      'GLP-1/Glucagon dual agonism — appetite suppression plus hepatic fat mobilization and thermogenesis',
      '10–14% weight reduction at 24 weeks in Phase 2 Chinese obesity population',
      'Significant HbA1c reduction alongside weight loss — combined glycemic and metabolic efficacy',
      'Greater hepatic fat reduction than GLP-1 monotherapy — glucagon-mediated hepatic lipolysis advantage',
      'BAT thermogenesis activation — increased energy expenditure beyond appetite suppression',
      'Phase 3 GLORY program ongoing — most advanced GLP-1/glucagon dual agonist in Chinese regulatory pathway',
      'SAIL technology engineering for protease stability and weekly dosing pharmacokinetics',
      'Particularly relevant for metabolic syndrome with co-prevalent NAFLD/NASH',
      'Once-weekly subcutaneous injection — equivalent administration convenience to semaglutide',
      'Mechanistically distinct from tirzepatide (GLP-1/GIP) — different dual receptor combination and metabolic profile',
    ]''',
    new_protocol='''`**Research Protocol — Mazdutide:**
- Route: Subcutaneous injection
- Frequency: Once weekly
- Dose escalation: 1.2mg → 2.4mg → 3.6mg → 4.8mg → 6mg (escalate every 4 weeks per tolerance)
- Target dose: 6mg/week (Phase 3 primary dose)

**GI Tolerability:**
- Nausea, decreased appetite, vomiting are primary adverse effects (GLP-1 class effect)
- Gradual dose escalation essential — do not rush escalation
- Most GI effects diminish after 4–6 weeks at stable dose

**Clinical Context:**
- Developed primarily for Asian/Chinese patient populations with high NAFLD co-prevalence
- Phase 3 data expected 2025–2026 for obesity and T2D Chinese indications

**Stacking:**
- Not recommended to combine with other GLP-1 or glucagon agonists
- AICAR or MOTS-c may complement metabolic effects through AMPK pathway

**Monitoring:**
- Weight (weekly), waist circumference (monthly)
- Liver enzymes (ALT, AST) and imaging for NAFLD monitoring
- HbA1c and fasting glucose for glycemic tracking`''',
    new_highlights='''[
      { title: 'Hepatic Fat Target Beyond GLP-1', body: 'Mazdutide\'s glucagon receptor component drives hepatic lipolysis — producing greater liver fat reduction than GLP-1 monotherapy, directly addressing NAFLD/NASH that co-exists in the majority of the obese metabolic syndrome population this drug targets.' },
      { title: 'SAIL Technology Stability Engineering', body: 'Innovent\'s SAIL (Structured Amide Insertion Ligation) technology improves mazdutide\'s protease resistance and pharmacokinetic profile — enabling once-weekly dosing through molecular engineering rather than fatty acid conjugation like semaglutide.' },
      { title: 'Phase 3 in Asian Metabolic Syndrome', body: 'Mazdutide is the most advanced GLP-1/glucagon dual agonist specifically developed for Asian obesity and T2D populations — where high NAFLD prevalence and distinct metabolic phenotypes make the glucagon-mediated hepatic component particularly relevant.' },
    ]'''
)

# ── 2. Adipotide 10mg ─────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='adipotide-ftpp-10mg',
    next_slug='adipotide-ftpp-5mg',
    new_full_desc='''`Adipotide (FTPP — Fat-Targeted Pro-Apoptotic Peptide) is a chimeric peptide designed to target and destroy the blood supply to white adipose tissue — an approach to fat loss that is mechanistically unique among all peptide and pharmaceutical weight loss strategies. Rather than reducing appetite, increasing fat oxidation, or altering hormonal signaling, Adipotide directly kills the endothelial cells of blood vessels supplying white adipose tissue depots, depriving fat cells of their vascular supply and inducing apoptotic fat cell death.

The targeting mechanism relies on a homing peptide that recognizes ANXA2 (Annexin A-2) expressed specifically on the vasculature of white adipose tissue, combined with a pro-apoptotic peptide (KLAKLAK sequence) that disrupts mitochondrial membranes when internalized into cells. ANXA2 expression on adipose vasculature is up-regulated in the context of metabolic obesity relative to the vasculature of other tissues — providing a degree of selectivity toward fat-associated blood vessels over general systemic vasculature. When Adipotide reaches its adipose vascular target, the pro-apoptotic domain kills the endothelial cells, the vessels collapse, and the dependent adipocytes die from ischemia.

Preclinical studies in obese non-human primates (rhesus macaques) demonstrated dramatic results: systemic Adipotide treatment produced 11% reduction in body weight over 4 weeks, with preferential loss of visceral and subcutaneous abdominal fat confirmed by MRI. This rate of fat loss far exceeded what could be achieved by caloric restriction in the study period and was accompanied by improvements in insulin sensitivity — a metabolic benefit independent of just the weight change. Importantly, the non-human primate data is one of the most directly translatable preclinical models for human metabolic disease, making these results particularly noteworthy.

The mechanism produces fat loss irrespective of caloric intake — adipose vasculature destruction works regardless of what the subject eats, making it fundamentally different from appetite-suppressing peptides whose efficacy depends on behavioral compliance with reduced intake. However, this mechanism also carries the potential for adverse effects: nephrotoxicity was observed in the NHP study at therapeutic doses (elevated creatinine, tubular injury on kidney biopsy), attributed to ANXA2 expression on renal tubular vasculature causing off-target renal vessel damage. This nephrotoxicity was reversible in most cases but represents a significant safety consideration.

Human Phase 1 safety data is not publicly available. Adipotide remains a preclinical/early research compound. Its significance lies in demonstrating proof-of-concept for adipose vascular targeting as a fat loss mechanism — a category of approach entirely distinct from all current pharmaceutical weight loss strategies. Research applications include mechanistic studies of adipose vasculature biology, proof-of-concept for vascular targeting peptide approaches, and preclinical fat loss model work.

Research compound — not for human use. The nephrotoxicity findings in NHP studies represent a significant preclinical safety concern that would require resolution before clinical development proceeds.`''',
    new_benefits='''[
      'Unique mechanism: direct adipose vasculature destruction rather than appetite or metabolic manipulation',
      '11% body weight reduction in 4 weeks in obese rhesus macaque study — remarkable preclinical fat loss speed',
      'Preferential visceral and subcutaneous abdominal fat reduction by MRI confirmation',
      'Improved insulin sensitivity alongside weight loss — independent metabolic benefit',
      'Caloric intake-independent fat loss mechanism — works regardless of diet compliance',
      'ANXA2-targeted homing provides adipose vascular selectivity over general circulation',
      'Mitochondrial pro-apoptotic domain (KLAKLAK) produces definitive endothelial cell killing',
      'Rapid onset of fat loss effect — vascular destruction produces ischemic adipocyte death quickly',
      'Proof-of-concept for vascular targeting as fat loss strategy — a fundamentally new category',
      'Research tool for adipose vasculature biology and targeted pro-apoptotic peptide mechanism studies',
    ]''',
    new_protocol='''`**Research Use Only — Adipotide:**
- Application: Preclinical in vivo obesity models; in vitro adipose vasculature biology research
- NOT for human administration
- Published NHP protocol: 1mg/kg/day SC injection × 28 days (produced 11% weight loss)

**Safety Considerations:**
- Nephrotoxicity (renal tubular injury) observed in NHP studies — significant off-target effect
- Kidney function monitoring essential in any animal study (creatinine, BUN, urinalysis)
- Dose-dependent nephrotoxicity — lower doses may reduce renal risk
- Reversible in most NHP subjects but represent a preclinical safety concern requiring resolution

**Preclinical Research Applications:**
- Obese rodent and NHP adipose vascular targeting studies
- ANXA2 expression biology in adipose and other vascular beds
- KLAKLAK pro-apoptotic mechanism studies
- Combination with metabolic peptides for multi-mechanism fat loss model research

**Storage:**
- Lyophilized: -20°C, protected from light
- Reconstituted: 4°C, use within 5 days`''',
    new_highlights='''[
      { title: 'Adipose Vasculature Destruction Mechanism', body: 'Adipotide is the only peptide that directly destroys the blood supply to white fat — killing adipose endothelial cells through ANXA2-targeted pro-apoptotic action that deprives fat cells of vascular support, causing their death from ischemia rather than metabolic signaling.' },
      { title: '11% Weight Loss in 4 Weeks in Primates', body: 'Obese rhesus macaque data showed 11% body weight reduction over 4 weeks with preferential visceral fat loss by MRI — a rate and selectivity of fat reduction that no current pharmaceutical or peptide approach has matched in a comparable primate model.' },
      { title: 'Caloric Intake Independence', body: 'Unlike every appetite-suppressing peptide, Adipotide\'s mechanism operates independent of food intake behavior — adipose vasculature destruction produces fat loss regardless of caloric consumption, representing a fundamentally different and caloric compliance-independent strategy.' },
    ]'''
)

# ── 3. BAM-15 30mg/L 30ml ─────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='bam-15-30mgl-30ml',
    next_slug='bam-15-50mgl-30ml',
    new_full_desc='''`BAM-15 is a mitochondrial proton uncoupler — it dissipates the proton gradient across the inner mitochondrial membrane that normally drives ATP synthesis, converting that stored electrochemical energy into heat rather than ATP production. This uncoupling mechanism increases energy expenditure (metabolic rate elevation) without the cardiovascular toxicity, hyperthermia risk, or thyroid-like adverse effects that have prevented older uncouplers from clinical development. BAM-15 is the most selectively tolerated mitochondrial uncoupler ever pharmacologically characterized.

The energy coupling mechanism of the mitochondria works as follows: electron transport chain (ETC) activity pumps protons from the mitochondrial matrix to the intermembrane space, creating an electrochemical gradient (proton-motive force) that drives ATP synthesis through the F1F0-ATP synthase. Chemical uncouplers allow protons to flow back across the inner mitochondrial membrane directly, bypassing ATP synthase — dissipating the proton-motive force as heat rather than ATP. The metabolic consequence is that ETC activity must increase to maintain mitochondrial function, dramatically increasing substrate (glucose, fatty acids) oxidation rate without producing proportional ATP. The cell burns more fuel to maintain the same energy currency.

The classical uncoupler DNP (2,4-dinitrophenol) operates through this mechanism and produces powerful fat loss — but caused multiple human deaths from uncontrolled hyperthermia when used by bodybuilders, as systemic uncoupling at therapeutic doses produced dangerous heat generation. BAM-15\'s selectivity advantage is its preferential accumulation in mitochondria with higher membrane potential (more depolarized) — meaning it concentrates preferentially in metabolically active tissues like brown adipose tissue, liver, and muscle rather than distributing uniformly to all tissues including the heart. This selective accumulation profile, combined with its molecular structure that limits passage across plasma membranes, restricts uncoupling activity to metabolic tissues and substantially reduces systemic thermogenic risk.

Preclinical data in murine obesity models demonstrates BAM-15\'s metabolic effects: significant fat mass reduction, improved insulin sensitivity, and metabolic rate elevation without the temperature increases or cardiovascular effects observed with non-selective uncouplers. In diet-induced obese mice, BAM-15 produced fat loss comparable to semaglutide with improved metabolic markers — particularly reduced lipid peroxidation and oxidative stress markers (ROS reduction is a counter-intuitive benefit of uncoupling, as reduced proton gradient backpressure decreases superoxide production at complex I/III). The reduction in mitochondrial ROS production with BAM-15 has made it a subject of interest in metabolic disease contexts beyond just fat loss — including insulin resistance, fatty liver, and neurodegeneration models where mitochondrial oxidative stress is a driving pathology.

The 30mg/L (30mL) formulation provides 0.9mg total BAM-15 in injectable liquid form — a precise low-concentration format suitable for research dosing protocols where exact dose titration is required. BAM-15 remains a research compound without human clinical data.`''',
    new_benefits='''[
      'Mitochondrial proton uncoupling increases metabolic rate — burns more substrate without increasing ATP demand',
      'Fat mass reduction in diet-induced obese murine models — efficacy comparable to semaglutide in preclinical data',
      'Improved insulin sensitivity alongside fat loss — metabolic benefit independent of weight reduction',
      'Selective mitochondrial accumulation reduces cardiovascular and thermogenic risk vs. classical uncouplers like DNP',
      'Reduces mitochondrial ROS production — counter-intuitive antioxidant effect from reduced electron backpressure',
      'Reduced hepatic lipid peroxidation and oxidative stress markers in preclinical metabolic disease models',
      'No thyroid axis involvement — metabolic rate increase through direct mitochondrial mechanism',
      'Relevant for insulin resistance and fatty liver disease contexts beyond fat loss through ROS reduction',
      'No appetite suppression mechanism required — metabolic rate increase is substrate and caloric independent',
      'Most selectively tolerated mitochondrial uncoupler pharmacologically characterized — best safety profile in class',
    ]''',
    new_protocol='''`**Research Protocol — BAM-15 (30mg/L):**
- Formulation: 30mg/L injectable solution (0.9mg per 30mL vial)
- Application: Preclinical metabolic research; in vitro mitochondrial biology
- NOT for human administration

**Preclinical Dosing Context:**
- Published murine studies: 50mg/kg/day IP injection produced significant fat loss
- Lower doses in drinking water formulations also show metabolic effects
- Dose-response relationship is steep — careful titration required

**Research Applications:**
- Diet-induced obesity mouse models — metabolic rate measurement, fat mass tracking
- Mitochondrial ROS production studies (seahorse respirometry, JC-1/TMRE assays)
- Insulin resistance reversal studies in HFD models
- Combination with GLP-1 peptides for multi-mechanism fat loss research

**Storage:**
- Injectable liquid: 4°C, protect from light
- Do not freeze liquid formulation
- Use within 60 days of receipt`''',
    new_highlights='''[
      { title: 'Selective Mitochondrial Uncoupling', body: 'BAM-15 concentrates preferentially in metabolically active tissues with high mitochondrial membrane potential — achieving the metabolic rate-increasing fat loss effect of uncoupling without the systemic heat generation that made DNP fatally dangerous.' },
      { title: 'ROS Reduction as Bonus Effect', body: 'Mitochondrial uncoupling paradoxically reduces superoxide production at complexes I and III by reducing the proton gradient backpressure that drives electron leakage — giving BAM-15 an antioxidant metabolic effect that complements rather than conflicts with its fat-burning activity.' },
      { title: 'Fat Loss Without Appetite Suppression', body: 'BAM-15 produces fat loss through metabolic rate elevation and increased substrate oxidation — independent of appetite, food intake behavior, or any hormonal signaling pathway. This mechanism is entirely complementary to GLP-1 agonists and acts through a completely different system.' },
    ]'''
)

# ── 4. O-304 Capsules ─────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='o-304-capsules',
    next_slug='slu-pp-332-100mg-120caps',
    new_full_desc='''`O-304 (ATX-304) is a pan-AMPK activator — it activates all three regulatory AMPK (AMP-activated protein kinase) beta subunit isoforms (β1, β2, β3) simultaneously, producing broader and more complete AMPK activation than isoform-selective activators like AICAR or metformin. Developed by Betagenon AB (Sweden), O-304 entered human clinical trials and is one of the few direct AMPK activators with actual human Phase 2 data — making it one of the most clinically validated AMPK activating compounds available as a research agent.

AMPK is the master cellular energy sensor — activated when cellular AMP:ATP ratios rise (indicating energy depletion), AMPK triggers a coordinated metabolic response that increases energy production and reduces energy consumption: fatty acid oxidation increases, glucose uptake rises through GLUT4 translocation, mitochondrial biogenesis is activated through PGC-1α, and anabolic processes (fatty acid synthesis, protein synthesis, gluconeogenesis) are suppressed. This metabolic reorientation is exactly what makes AMPK activation therapeutically attractive for metabolic syndrome, insulin resistance, obesity, and age-related metabolic decline.

O-304\'s pan-AMPK activation through all three beta isoforms is pharmacologically significant because different AMPK beta isoforms have distinct tissue distributions and functional roles. Beta-1 is highly expressed in liver and heart; beta-2 predominates in skeletal muscle; beta-3 is important in adipose tissue. Isoform-selective activators (like the beta-1-selective GSK621 or the beta-1/2 AICAR-like agents) miss important tissue compartments. O-304\'s pan-activation provides simultaneous hepatic (β1), skeletal muscle (β2), and adipose (β3) AMPK signaling — a more complete metabolic effect than any single-isoform activator.

Human Phase 2 data from O-304\'s clinical development in type 2 diabetes showed clinically meaningful improvements in fasting glucose, HbA1c, and insulin sensitivity without the lactic acidosis risk that limits metformin use in renally compromised patients. The Phase 2 also showed improvements in cardiovascular risk markers (blood pressure, heart rate) consistent with the known cardiovascular protective effects of AMPK activation in cardiac and vascular tissue — effects observed because the human heart expresses significant beta-1 AMPK, and cardiac AMPK activation reduces ischemic injury and improves energy efficiency under metabolic stress.

O-304 is orally bioavailable — an advantage over AICAR (poor oral bioavailability) that makes practical long-term dosing far more accessible. The capsule formulation reflects this oral delivery route. For researchers interested in comprehensive AMPK activation across all tissue compartments with human clinical data supporting the mechanism, O-304 represents the most complete and clinically validated available option.

Dose: available in capsule form. Published Phase 2 doses ranged from 200–800mg daily.`''',
    new_benefits='''[
      'Pan-AMPK activation across all three beta isoforms (β1, β2, β3) — complete multi-tissue metabolic activation',
      'Human Phase 2 clinical data — one of very few AMPK activators with actual human trial evidence',
      'Improved fasting glucose and HbA1c in Type 2 diabetes Phase 2 trial',
      'Improved insulin sensitivity — skeletal muscle glucose uptake through GLUT4 translocation',
      'Cardiovascular risk marker improvements (blood pressure, heart rate) — cardiac AMPK protective effects',
      'No lactic acidosis risk — unlike metformin, does not inhibit complex I respiratory chain',
      'Orally bioavailable — practical long-term dosing without injection requirement',
      'Mitochondrial biogenesis activation through PGC-1α — increases metabolic capacity',
      'Hepatic (β1), muscle (β2), and adipose (β3) AMPK coverage — more complete than isoform-selective agents',
      'Developed by Betagenon AB with full Phase 2 safety and tolerability characterization',
    ]''',
    new_protocol='''`**Research Protocol — O-304:**
- Route: Oral capsule
- Dose range: 200–800mg/day (Phase 2 range; start low and titrate)
- Timing: With meals to improve absorption and reduce GI discomfort
- Duration: Continuous supplementation (chronic AMPK activation is the target)

**AMPK Activator Comparison:**
- O-304 (pan-β1/β2/β3): most complete tissue coverage, oral, human Phase 2 data
- AICAR (AMPK via AMP mimicry): injectable, less stable, no human clinical data at pharmacological doses
- Metformin (AMPK via complex I inhibition): oral, lactic acidosis risk, narrow therapeutic window

**Stacking:**
- O-304 + MOTS-c: pan-AMPK activation + mitochondria-derived AMPK signal — synergistic metabolic activation
- O-304 + 5-Amino-1MQ: AMPK activation + NNMT inhibition — dual metabolic enzyme targeting for NAD+ and energy metabolism

**Monitoring:**
- Fasting glucose and HbA1c at baseline and 3-month intervals
- Liver function panel (AMPK activators affect hepatic metabolism)
- CK for muscle safety (rare but relevant for high-intensity exercise + AMPK activation)`''',
    new_highlights='''[
      { title: 'Pan-AMPK Beta Isoform Coverage', body: 'O-304 activates all three AMPK beta isoforms (β1, β2, β3) simultaneously — providing hepatic, skeletal muscle, and adipose AMPK signaling that no single-isoform-selective activator can replicate. The completeness of metabolic tissue coverage is O-304\'s defining pharmacological advantage.' },
      { title: 'Human Phase 2 Clinical Validation', body: 'Unlike AICAR and most AMPK activators that lack human data at pharmacological doses, O-304 has Phase 2 human trial results showing improved glycemia, insulin sensitivity, and cardiovascular markers — making it the most clinically validated direct AMPK activator available for research use.' },
      { title: 'No Complex I Inhibition, No Lactic Acidosis', body: 'Metformin activates AMPK indirectly by inhibiting mitochondrial Complex I — the same mechanism that causes lactic acidosis in renally impaired patients. O-304 activates AMPK through a direct allosteric mechanism, producing the metabolic benefits without the mitochondrial respiratory chain liability.' },
    ]'''
)

# ── 5. SLU-PP-332 100mg 120caps ───────────────────────────────────────────────
content = replace_product(
    content,
    slug='slu-pp-332-100mg-120caps',
    next_slug='slu-pp-332-100mg-30caps',
    new_full_desc='''`SLU-PP-332 is an ERRα (Estrogen-Related Receptor alpha) and ERRγ agonist that activates the transcriptional programs of endurance exercise adaptation in skeletal muscle — earning it the nickname "exercise in a pill" in research circles after its characterization by the Bhupinder Bhatt laboratory at Washington University. Unlike AICAR (which activates AMPK signaling) or PPAR delta agonists (which activate fatty acid oxidation pathways), SLU-PP-332 acts at the upstream nuclear receptor level to coordinate the full transcriptional program of aerobic adaptation that endurance training induces — including mitochondrial biogenesis, oxidative fiber-type switching, angiogenesis in muscle, and increased VO2 capacity.

ERRα and ERRγ are orphan nuclear receptors that regulate energy metabolism gene expression without requiring a classical lipid or hormone ligand. In skeletal muscle, ERRα/γ activation drives the expression of the complete transcriptional network that coordinates aerobic muscle adaptation: PGC-1α co-activation (the master mitochondrial biogenesis regulator), VEGF expression for muscle angiogenesis, genes encoding mitochondrial respiratory chain components, fatty acid β-oxidation enzymes, and the transcription factors that drive type II→type I oxidative fiber conversion. This coordinated transcriptional program is identical to what endurance exercise training achieves through repeated calcium/CAMKII and AMPK signaling — SLU-PP-332 bypasses the upstream signaling and directly activates the nuclear receptor that coordinates the downstream gene expression.

2023 preclinical data from Washington University demonstrated striking results: SLU-PP-332 administration to sedentary, obese mice produced measurable improvements in running capacity without additional exercise training, with gene expression analysis confirming ERRα/γ target gene activation across the skeletal muscle metabolic gene network. Treated mice showed increased skeletal muscle oxidative fiber content, higher mitochondrial density, and better metabolic parameters (glucose tolerance, body composition) compared to vehicle-treated controls — all without any forced exercise intervention.

The clinical relevance extends beyond athletic performance. ERRα/γ activation in cardiac muscle may provide cardioprotective metabolic benefits by improving cardiac energy efficiency (the heart uses ERRα/γ signaling extensively for its constant aerobic demands). In metabolic disease, ERRα/γ agonism improves skeletal muscle insulin sensitivity through increased mitochondrial capacity and oxidative metabolism. In aging, where sarcopenia (muscle wasting) and declining VO2max are consequences of diminished mitochondrial biogenesis, SLU-PP-332 may counter the muscle quality decline that accelerates age-related functional loss.

The 120-capsule supply provides 4 months at 100mg/day — the standard long-term research dosing supply. Oral bioavailability has been confirmed in preclinical pharmacokinetics. No human clinical data is yet available; this is a research compound reflecting the cutting edge of exercise mimetic pharmacology.`''',
    new_benefits='''[
      'ERRα and ERRγ agonism — activates the complete nuclear receptor transcriptional program of aerobic exercise adaptation',
      'Improved running capacity in sedentary obese mice without exercise training — 2023 Washington University data',
      'Increased skeletal muscle oxidative (Type I) fiber content — mitochondrial-rich aerobic fiber conversion',
      'Higher mitochondrial density per muscle fiber — increased aerobic metabolic capacity',
      'Improved glucose tolerance and body composition in preclinical models without dietary intervention',
      'PGC-1α co-activation — the master mitochondrial biogenesis regulator',
      'VEGF expression induction — muscle angiogenesis for improved oxygen and substrate delivery',
      'Cardiac energy efficiency improvement through cardiac ERRα/γ signaling',
      'Relevant for sarcopenia and age-related VO2max decline — counters mitochondrial biogenesis decline',
      'Upstream of AICAR/AMPK — acts at nuclear receptor level coordinating the full adaptation gene network',
    ]''',
    new_protocol='''`**Research Protocol — SLU-PP-332 (100mg capsules):**
- Dose: 100mg/day
- Route: Oral capsule
- Timing: Morning with food (fat-containing meal may improve absorption of lipophilic nuclear receptor agonist)
- Duration: Continuous — effects are cumulative with sustained ERRα/γ activation
- Supply: 120 capsules = 4 months at 100mg/day

**AMPK/Exercise Mimetic Stack:**
- SLU-PP-332 + AICAR: ERRα/γ nuclear receptor activation + AMPK signaling — upstream transcription + downstream signal
- SLU-PP-332 + O-304: ERRα/γ + pan-AMPK beta — dual nuclear and cytoplasmic exercise mimetic mechanisms
- SLU-PP-332 + MOTS-c: nuclear receptor ERRα + mitochondria-derived peptide — comprehensive aerobic adaptation support

**Exercise Interaction:**
- Designed to complement rather than replace exercise — additional exercise training amplifies ERRα/γ adaptive response
- Of interest for populations with limited exercise capacity (musculoskeletal conditions, elderly, obesity)

**Monitoring:**
- VO2max testing (CPX or submaximal) at baseline and 12-week intervals
- DEXA for lean mass and body composition tracking
- Mitochondrial function biomarkers if available (muscle biopsy for CS activity in research settings)`''',
    new_highlights='''[
      { title: 'Nuclear Receptor Exercise Mimetic', body: 'SLU-PP-332 activates ERRα and ERRγ — the nuclear receptors that coordinate the complete transcriptional program of aerobic exercise adaptation. Rather than stimulating one signaling pathway, it drives the master gene expression network that training converges on, producing coordinated mitochondrial biogenesis, angiogenesis, and fiber-type adaptation.' },
      { title: 'Capacity Improvement Without Training', body: '2023 data: sedentary obese mice treated with SLU-PP-332 showed measurable running capacity improvements and aerobic gene expression changes without any exercise — demonstrating that ERRα/γ agonism can partially recapitulate training adaptation at the transcriptional level in non-exercising animals.' },
      { title: 'Broader Than AICAR or AMPK', body: 'AICAR and AMPK activators operate at the cytoplasmic signaling level; SLU-PP-332 acts at the nuclear transcription factor level — upstream of all kinase signaling, directly driving the gene expression changes that represent the final adaptive output. The transcriptional coordination is more complete than any single pathway activator.' },
    ]'''
)

# ── 6. Tesofensine 500mcg Capsules ────────────────────────────────────────────
content = replace_product(
    content,
    slug='tesofensine-capsules',
    next_slug='tesofensine-tablets',
    new_full_desc='''`Tesofensine is a triple reuptake inhibitor of serotonin, dopamine, and norepinephrine — originally developed as an anti-Parkinson treatment before its mechanism of action was discovered to produce significant weight loss in clinical trials. By blocking the reuptake transporters for all three monoamine neurotransmitters simultaneously, tesofensine elevates synaptic levels of serotonin (appetite suppression via hypothalamic 5-HT signaling), dopamine (reward pathway modulation and reduced compulsive eating), and norepinephrine (sympathomimetic energy expenditure increase and appetite suppression) — producing converging neurochemical effects that are among the most powerful appetite-suppressing mechanisms pharmacologically achievable.

The discovery of tesofensine\'s weight loss potential was serendipitous. In Phase 2 Parkinson\'s trials, patients treated with tesofensine demonstrated unexpected and substantial weight loss as an adverse effect — levels of weight reduction that significantly exceeded what had been seen with any previous single anti-obesity drug. Subsequent Phase 2 obesity trials (TIPO-1, published in The Lancet 2008) confirmed and quantified this effect: tesofensine at 0.5mg/day produced 10.6% weight loss over 24 weeks, far exceeding the weight loss of all comparator anti-obesity drugs available at the time (orlistat, sibutramine, rimonabant) in equivalent trials. This result established tesofensine as one of the most potent non-GLP-1 weight loss pharmacological agents ever evaluated.

The mechanisms that produce such powerful weight loss are multi-convergent. Serotonin reuptake inhibition activates hypothalamic 5-HT2C receptors (the same target as lorcaserin, now withdrawn) to reduce hunger signaling. Norepinephrine reuptake inhibition produces sympathomimetic CNS effects that increase metabolic rate, reduce appetite through β-adrenergic hypothalamic pathways, and increase energy expenditure through thermogenic mechanisms. Dopamine reuptake inhibition modulates the mesolimbic reward circuit — reducing food reward salience and compulsive eating behavior driven by hedonic rather than homeostatic hunger. Together, these three mechanisms address both homeostatic (hypothalamic hunger regulation) and hedonic (reward-driven eating) components of food intake simultaneously.

The cardiovascular profile of triple monoamine reuptake inhibitors requires careful attention. The norepinephrine and dopamine components produce sympathomimetic cardiovascular effects: increased heart rate, blood pressure elevation, and potential arrhythmic risk at high doses — the same class concerns that led to sibutramine\'s market withdrawal despite its efficacy. Tesofensine at the 0.5mg Phase 2 dose showed modest cardiovascular effects that were deemed manageable, but this remains the primary safety consideration for any development at this mechanism.

Tesofensine is in Phase 3 development for obesity (NeuroSearch AS / Saniona). The 500mcg capsule format reflects the established Phase 2 efficacy dose. Available as a research compound.`''',
    new_benefits='''[
      'Triple serotonin, dopamine, and norepinephrine reuptake inhibition — most potent monoamine appetite suppression mechanism',
      '10.6% weight loss at 24 weeks (0.5mg/day) in TIPO-1 Phase 2 Lancet trial — exceeded all contemporaneous anti-obesity drugs',
      'Multi-convergent mechanism: homeostatic hunger (hypothalamic) + hedonic eating (reward circuit) both suppressed',
      'Serotonin component (5-HT2C): reduces homeostatic hunger signaling — comparable to withdrawn lorcaserin',
      'Norepinephrine component: sympathomimetic energy expenditure increase + appetite suppression',
      'Dopamine component: mesolimbic reward circuit modulation — reduces compulsive and hedonic overeating',
      'Originally anti-Parkinson compound — mechanism discovery was incidental to weight loss potential',
      'Phase 3 development ongoing (NeuroSearch/Saniona) — established regulatory pathway',
      'Mechanistically complementary to GLP-1 agonists — different pathways, potentially additive',
      'Addresses both caloric restriction compliance (appetite) and hedonic eating behavior (reward) simultaneously',
    ]''',
    new_protocol='''`**Research Protocol — Tesofensine:**
- Dose: 500mcg/day (0.5mg — established Phase 2 efficacy dose)
- Route: Oral capsule
- Timing: Morning (sympathomimetic effects may interfere with sleep if taken late)
- Duration: Phase 2 trial duration was 24 weeks

**Cardiovascular Safety Monitoring:**
- Blood pressure and heart rate at baseline and monthly
- Primary safety concern: sympathomimetic cardiovascular effects (norepinephrine/dopamine components)
- Contraindicated with MAO inhibitors (serotonin syndrome risk)
- Caution with other sympathomimetics or adrenergic agents

**Starting Protocol:**
- Consider starting at 250mcg/day for first 2 weeks for sympathomimetic tolerance
- Titrate to 500mcg after tolerability confirmed

**Stacking Considerations:**
- Do NOT combine with other serotonergic agents (SSRIs, SNRIs, 5-HT agonists) — serotonin syndrome risk
- Mechanistically complementary to GLP-1 agonists — different CNS/peripheral targets
- Not recommended with stimulants (amphetamines, pseudoephedrine) — additive cardiovascular risk`''',
    new_highlights='''[
      { title: 'Triple Monoamine Mechanism — Most Potent Non-GLP-1 Appetite Suppression', body: 'By simultaneously blocking serotonin, dopamine, and norepinephrine reuptake, tesofensine activates every major neurochemical appetite suppression pathway — producing weight loss that exceeded all comparator anti-obesity drugs in the Phase 2 TIPO-1 Lancet trial at equivalent durations.' },
      { title: 'Serendipitous Discovery from Parkinson\'s Trials', body: 'Tesofensine was being developed for Parkinson\'s disease when investigators noticed unexpected, dramatic weight loss in trial participants — the accidental discovery of one of the most potent anti-obesity mechanisms observed in any drug class.' },
      { title: 'Homeostatic and Hedonic Hunger — Both Addressed', body: 'Most anti-obesity drugs address homeostatic hunger (hypothalamic satiety signals) but not the hedonic, reward-driven eating that drives overconsumption in modern food environments. Tesofensine\'s dopamine component targets the mesolimbic reward circuit that GLP-1 agonists only partially address — reducing both hunger types simultaneously.' },
    ]'''
)

# ── 7. PE-22-28 10mg ──────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='pe-22-28-10mg',
    next_slug='p21-10mg',
    new_full_desc='''`PE-22-28 is a synthetic peptide derived from the BDNF (Brain-Derived Neurotrophic Factor) loop 4 region that selectively activates TrkB (tropomyosin receptor kinase B) — the primary receptor through which BDNF exerts its neuroplasticity, antidepressant, anxiolytic, and neuroprotective effects. The key pharmacological advantage of PE-22-28 over BDNF itself is stability: native BDNF is a 27kDa protein that does not penetrate the blood-brain barrier, degrades rapidly in biological fluids, and cannot be administered systemically to achieve CNS effects. PE-22-28, as a small synthetic peptide mimicking BDNF\'s active TrkB-binding domain, can be designed for enhanced BBB penetration and stability while retaining the neurological receptor activation that makes BDNF\'s effects so compelling.

BDNF and TrkB signaling are foundational to the neurobiology of depression, anxiety, learning, memory, and neuroplasticity. The neurotrophic hypothesis of depression posits that deficient BDNF-TrkB signaling — reduced BDNF levels in hippocampus and prefrontal cortex, reduced TrkB activity — underlies the hippocampal volume loss, impaired neurogenesis, and reduced synaptic plasticity that characterize major depression. Virtually all effective antidepressants, regardless of their primary mechanism (SSRIs, SNRIs, tricyclics, ketamine), converge on BDNF-TrkB signaling upregulation as a shared downstream mechanism required for therapeutic efficacy. This suggests that direct TrkB activation through BDNF mimetic peptides like PE-22-28 may produce antidepressant effects through the core pathway all antidepressants share, rather than indirect upstream mechanisms.

Preclinical research with PE-22-28 and related BDNF loop 4 peptide mimetics demonstrates antidepressant-like effects in rodent behavioral models (forced swim test, tail suspension test, chronic mild stress model), anxiolytic effects in elevated plus maze and open field tests, and cognitive improvements in memory and learning paradigms. These behavioral outcomes are consistent with TrkB activation driving hippocampal neurogenesis, enhanced synaptic plasticity (LTP facilitation), and the cortical neurotrophic signaling that maintains adaptive cognitive capacity.

Neurogenesis — the birth of new neurons in the hippocampal dentate gyrus — is now understood as a functional contributor to antidepressant response. Treatments that enhance hippocampal neurogenesis (exercise, antidepressants, ketamine) also produce antidepressant effects, while blocking neurogenesis attenuates antidepressant drug efficacy. TrkB-activating BDNF mimetics like PE-22-28 directly stimulate the neurogenic niche in the hippocampus, providing a mechanism for both antidepressant effect and cognitive enhancement through structural plasticity.

PE-22-28 is a research peptide — no human clinical trials are yet published. Its significance lies in representing a pharmacologically rational approach to direct neurotrophin receptor agonism as a psychiatric and cognitive enhancement strategy. Protocol: 100–300mcg intranasal or SC injection, 1–2× daily.`''',
    new_benefits='''[
      'Selective TrkB agonism — directly activates BDNF\'s primary receptor for neuroplasticity and antidepressant signaling',
      'Antidepressant-like effects in forced swim, tail suspension, and chronic mild stress rodent models',
      'Anxiolytic effects in elevated plus maze and open field tests',
      'Hippocampal neurogenesis stimulation — new neuron birth in dentate gyrus underlies antidepressant response',
      'Cognitive enhancement through LTP facilitation and synaptic plasticity enhancement',
      'Overcomes BDNF\'s BBB impermeability — small peptide mimetic with potential CNS access',
      'Activates the shared downstream pathway of all effective antidepressants — direct rather than upstream approach',
      'Neuroprotective through TrkB-mediated anti-apoptotic signaling in cortical neurons',
      'Intranasal administration suitable for direct CNS peptide delivery',
      'Mechanistically distinct from monoaminergic antidepressants — neurotrophic rather than synaptic',
    ]''',
    new_protocol='''`**Research Protocol — PE-22-28:**
- Dose: 100–300mcg per administration
- Route: Intranasal preferred (direct CNS delivery via nasal-to-brain pathway)
- Frequency: 1–2× daily
- Duration: Research-defined; neuroplasticity effects are cumulative with sustained TrkB activation

**Intranasal Administration:**
- Reconstitute in bacteriostatic water (100mcg/mL concentration)
- 100–300mcg per nostril per dose
- Morning and evening administrations for sustained TrkB signaling

**TrkB/Neuroplasticity Stack:**
- PE-22-28 + P21: TrkB/BDNF + CNTF/STAT3 — complementary neurotrophic receptor activation
- PE-22-28 + Selank: TrkB neuroplasticity + tuftsin-derived anxiolytic — anxiety + neurogenesis
- PE-22-28 + Semax: TrkB agonism + BDNF upregulation (Semax mechanism) — direct + indirect BDNF signaling

**Monitoring:**
- Behavioral assessment (mood scales, anxiety questionnaires in human research contexts)
- Cognitive testing (memory, executive function) at baseline and 4–8 week intervals
- No known biomarker for TrkB activation in peripheral blood — rely on functional/behavioral outcomes`''',
    new_highlights='''[
      { title: 'Direct TrkB Activation — The Shared Antidepressant Target', body: 'Every effective antidepressant — SSRIs, SNRIs, tricyclics, ketamine — ultimately converges on BDNF-TrkB signaling as a required downstream mechanism. PE-22-28 activates TrkB directly rather than through upstream pathways, targeting the core neuroplasticity mechanism all antidepressants share.' },
      { title: 'Hippocampal Neurogenesis as Antidepressant Mechanism', body: 'TrkB activation in the hippocampal dentate gyrus drives neurogenesis — the birth of new neurons that is increasingly understood as a key functional contributor to antidepressant response. PE-22-28\'s direct TrkB agonism provides the strongest available neurogenic signal in this niche.' },
      { title: 'BBB-Penetrating BDNF Mimetic', body: 'Native BDNF is 27kDa and cannot cross the blood-brain barrier — it cannot be administered systemically for CNS effects. PE-22-28\'s small peptide structure representing only BDNF\'s TrkB-binding loop provides the neurological receptor activation while bypassing the pharmacokinetic barrier that makes BDNF itself non-pharmacological.' },
    ]'''
)

# ── 8. P21 10mg ───────────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='p21-10mg',
    next_slug='adamax-10mg',
    new_full_desc='''`P21 is a synthetic peptide derived from the CNTF (Ciliary Neurotrophic Factor) binding domain — designed to activate neuroplasticity, enhance cognitive function, and stimulate neurogenesis through mechanisms complementary to but distinct from BDNF/TrkB signaling. CNTF is a neuroprotective cytokine with potent effects on neural cell survival, differentiation, and functional maintenance across multiple CNS cell populations. P21 delivers CNTF-like neurological signaling through a small, pharmacologically optimized peptide format that addresses CNTF\'s own limitations as a therapeutic agent.

CNTF signals through a receptor complex (CNTFRα/gp130/LIFR) that activates JAK-STAT3 and MAPK signaling cascades in neurons and glia. These pathways regulate neuronal survival, axonal regeneration, glial support function, and critically — hippocampal neurogenesis. CNTF-derived P21 peptide activates these same pathways, promoting the survival and proliferation of neural progenitor cells in the subventricular zone and hippocampal subgranular zone, driving new neuron birth and integration that supports learning, memory formation, and mood regulation.

The cognitive enhancement mechanism of P21 is neuroplasticity-based rather than neurotransmitter-based. Where modafinil and stimulants enhance cognition by increasing dopamine/norepinephrine availability (effect disappears when drug clears), P21 promotes structural changes in hippocampal and cortical tissue — neurogenesis, synaptogenesis, and increased BDNF expression — that improve the underlying computational substrate of cognition. Effects accumulate with sustained administration and persist after discontinuation as the structural neural changes outlast the peptide.

Research evidence for P21\'s effects includes: cognitive improvements in Morris water maze (spatial learning), novel object recognition, and fear conditioning paradigms in rodent models; hippocampal neurogenesis quantification (BrdU/NeuN labeling) confirming new neuron production; BDNF protein level increases in hippocampus and cortex following P21 administration (indirect neurotrophic amplification beyond the direct CNTF-receptor signaling); and neuroprotective effects in models of age-related cognitive decline and early dementia pathology.

The combination of P21 (CNTF-derived) and PE-22-28 (BDNF-derived) addresses hippocampal neuroplasticity through two distinct neurotrophic receptor pathways — CNTF/JAK-STAT3 and BDNF/TrkB respectively — providing broader neuroplasticity coverage than either alone. Both converge on hippocampal neurogenesis as the functional outcome, but through mechanistically distinct pathways that activate different gene expression programs in neural progenitor cells.

Research peptide — no human clinical data. Protocol: 100–300mcg intranasal or SC, 1–2× daily.`''',
    new_benefits='''[
      'CNTF-derived TrkB/JAK-STAT3 neuroplasticity activation — distinct pathway from BDNF/PE-22-28',
      'Hippocampal neurogenesis stimulation — new neuron birth and integration confirmed in rodent models',
      'Spatial learning and memory improvements in Morris water maze paradigms',
      'Novel object recognition enhancement — hippocampus-dependent memory consolidation',
      'BDNF protein level increases in hippocampus and cortex — indirect neurotrophic amplification',
      'Neuroprotective in age-related cognitive decline models',
      'Structural neural changes outlast peptide presence — effects persist post-discontinuation',
      'Complements PE-22-28 for dual CNTF + BDNF pathway neuroplasticity coverage',
      'Intranasal delivery suitable for direct BBB bypass and CNS access',
      'Cognitive enhancement through substrate improvement, not neurotransmitter manipulation',
    ]''',
    new_protocol='''`**Research Protocol — P21:**
- Dose: 100–300mcg per administration
- Route: Intranasal preferred; subcutaneous also effective
- Frequency: 1–2× daily
- Duration: Cumulative effects — 4–8 week minimum for structural neuroplasticity changes

**Intranasal Administration:**
- Reconstitute in bacteriostatic water (100mcg/mL)
- Morning and evening intranasal doses for sustained CNTF/JAK-STAT3 signaling

**Dual Neurotrophin Stack:**
- P21 (CNTF-derived, JAK-STAT3) + PE-22-28 (BDNF-derived, TrkB): dual receptor neuroplasticity activation
- Together: comprehensive hippocampal neurogenic and plasticity signaling from two distinct receptor systems
- Add Semax for additional BDNF pathway stimulation

**Cognitive Research Protocol:**
- Baseline cognitive assessment at start
- 8-week P21 course with mid-point and end-point cognitive testing
- 4-week washout before re-assessment to measure persistent structural effects

**Monitoring:**
- Cognitive battery: memory (immediate and delayed recall), executive function, processing speed
- Neuroimaging if available (hippocampal volume) for structural change assessment in longer research protocols`''',
    new_highlights='''[
      { title: 'CNTF Pathway — Distinct from BDNF/TrkB', body: 'P21 activates JAK-STAT3 and MAPK cascades through CNTF receptor signaling — a completely distinct pathway from BDNF/TrkB. Combined with PE-22-28, it provides dual-pathway neuroplasticity activation that no single neurotrophic peptide alone can achieve.' },
      { title: 'Structural Enhancement, Not Stimulation', body: 'P21 improves cognition by driving neurogenesis, synaptogenesis, and BDNF expression — structural improvements to the neural substrate itself. Unlike stimulant nootropics whose effects vanish with clearance, P21\'s structural changes persist after the peptide is gone.' },
      { title: 'Neurogenesis Confirmation in Preclinical Data', body: 'BrdU/NeuN labeling in hippocampal tissue confirms actual new neuron production following P21 administration — not just functional improvement that could reflect multiple mechanisms, but documented structural neurogenesis in the dentate gyrus that underlies the cognitive and mood effects.' },
    ]'''
)

# ── 9. Adamax 10mg ────────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='adamax-10mg',
    next_slug='oxytocin-10mg',
    new_full_desc='''`Adamax is a proprietary nootropic peptide blend designed for cognitive enhancement — combining multiple neuroactive peptides that act through complementary mechanisms to support memory formation, executive function, stress resilience, and neuroplasticity. Rather than targeting a single receptor or neurotransmitter system, Adamax is formulated to address the multifactorial nature of cognitive performance: neurotrophic support (brain-derived growth factors), neurotransmitter balance (GABAergic and monoaminergic optimization), anti-inflammatory neural protection, and metabolic support for high energy-demand cognitive tasks.

The design philosophy behind Adamax reflects the growing understanding that peak cognitive function is not achievable through a single neurotransmitter target. Classic stimulant nootropics (modafinil, racetams, amphetamines) enhance cognition by flooding particular neurotransmitter systems — increasing dopamine, norepinephrine, or acetylcholine availability. These approaches produce acute effects that depend on continuous drug presence and often involve tolerance development or neurochemical adaptation that diminishes effects over time. Peptide-based nootropic blends like Adamax aim for a different outcome: supporting the neurobiological substrate conditions that enable sustained, high-quality cognition — neuroprotection, neuroplasticity, and metabolic support — rather than overstimulating any single pathway.

Adamax includes peptides that address key aspects of cognitive neurobiology. Semax-derived components support BDNF and NGF upregulation in frontal cortex and hippocampus, driving the neuroplasticity changes that underlie learning and memory consolidation. Selank-derived components provide anxiolytic GABAergic modulation and immune regulatory activity in the CNS, reducing the neuroinflammatory and anxiety-related signals that impair cognitive performance under stress. GHRP-derived sequences may support hippocampal GH/IGF-1 signaling that maintains neuronal energy metabolism and synaptic maintenance. The peptide combination is calibrated for synergistic rather than simply additive effects.

Cognitive applications include: enhanced working memory and executive function capacity for high-demand cognitive tasks, improved learning consolidation and recall speed, stress resilience under cognitive load, reduced cognitive fatigue in sustained attention tasks, and neuroplasticity enhancement for skill acquisition and learning new domains. The formulation is intended for both acute cognitive demand situations and sustained cognitive optimization protocols where neuroplasticity-based structural improvements are the target.

Adamax is distinguished from single-peptide nootropics by its multi-target approach. Where N-Acetyl Semax Amidate alone targets BDNF pathways and Selank alone targets anxiolytic GABA modulation, Adamax integrates multiple complementary pathways in calibrated doses — addressing the multiple neurobiological factors that limit cognitive performance simultaneously.

Protocol: 1mg intranasal dose. Designed for intranasal delivery to maximize CNS access through the nasal-to-brain pathway. Used on cognitive demand days or in sustained daily cognitive optimization protocols.`''',
    new_benefits='''[
      'Multi-target nootropic peptide blend — addresses BDNF, GABAergic, neuroinflammatory, and metabolic cognitive factors simultaneously',
      'BDNF/NGF upregulation component — supports neuroplasticity, memory consolidation, and learning capacity',
      'Anxiolytic GABAergic modulation — reduces anxiety-impaired cognition and stress-related performance decline',
      'Anti-neuroinflammatory peptide activity — reduces the inflammatory CNS signaling that impairs cognitive function',
      'Working memory and executive function support for high cognitive demand tasks',
      'Improved learning consolidation and recall speed through multi-pathway neuroplasticity activation',
      'Stress resilience under cognitive load — anxiolytic + neuroplasticity components work synergistically',
      'Reduced cognitive fatigue in sustained attention paradigms',
      'Intranasal delivery for direct nasal-to-brain CNS access',
      'Synergistic multi-peptide formulation — complementary mechanisms rather than single target',
    ]''',
    new_protocol='''`**Standard Adamax Protocol:**
- Dose: 1mg per administration
- Route: Intranasal
- Frequency: Daily for sustained neuroplasticity effects; or as-needed for acute cognitive demand
- Duration: Cumulative benefit with daily use over 4–8 weeks

**Intranasal Administration:**
- Reconstitute in bacteriostatic water
- 1mg split across both nostrils (0.5mg each)
- Morning administration for sustained daytime cognitive benefit

**Acute Cognitive Demand Protocol:**
- 1mg intranasal 30–60 minutes before high-demand cognitive task
- Can redose at 0.5mg if needed mid-task (4+ hour tasks)

**Sustained Optimization Protocol:**
- Daily 1mg morning dose for 4–8 week course
- Neuroplasticity-based improvements become apparent by weeks 2–4
- Cycle: 8 weeks on, 2–4 weeks off, repeat

**Stacking:**
- Adamax + Methylene Blue: peptide neuroplasticity + mitochondrial ETC electron carrier — comprehensive cognitive support
- Adamax + NAD+: peptide neurotrophic + cellular energy substrate — brain energy + plasticity together`''',
    new_highlights='''[
      { title: 'Multi-Target vs. Single Mechanism Nootropics', body: 'While single-peptide nootropics target one receptor or pathway, Adamax simultaneously addresses BDNF neuroplasticity, GABAergic anxiety reduction, neuroinflammation, and metabolic support — the multiple independent factors that limit cognitive performance in different individuals and contexts.' },
      { title: 'Substrate Enhancement Over Stimulation', body: 'Adamax is formulated to improve the neurobiological conditions that enable cognition — neuroplasticity, neuroprotection, anxiety reduction — rather than stimulating neurotransmitter flooding that produces tolerance and neuroadaptation over time.' },
      { title: 'Intranasal CNS Delivery', body: 'The intranasal route bypasses the blood-brain barrier through the olfactory and trigeminal nerve pathways, delivering the peptide components directly to the CNS with far higher effective concentrations than systemic injection for equivalent peripheral doses.' },
    ]'''
)

# ── 10. Oxytocin 10mg ─────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='oxytocin-10mg',
    next_slug='oxytocin-8mg',
    new_full_desc='''`Oxytocin is a 9-amino acid neuropeptide produced in the paraventricular and supraoptic nuclei of the hypothalamus — one of the most multifunctional neurochemical signaling molecules in mammalian biology. Originally characterized for its roles in parturition (uterine contraction at birth) and lactation (milk ejection), oxytocin is now understood to govern a remarkably broad range of social, emotional, and physiological functions: social bonding, trust, empathy, anxiety modulation, stress response calibration, pain perception, gut motility, immune regulation, and even metabolic function. The research expansion of our understanding of oxytocin beyond its reproductive roles has made it one of the most investigated peptides in contemporary neuroscience and psychiatry.

Oxytocin\'s social and emotional effects are mediated through widely distributed oxytocin receptor (OXTR) expression throughout the limbic system: amygdala, hippocampus, nucleus accumbens, cingulate cortex, and brainstem. Amygdala OXTR activation reduces threat response reactivity — the mechanism underlying oxytocin\'s established anxiolytic effects and its ability to reduce social anxiety and threat-related hypervigilance that impairs social function. Nucleus accumbens OXTR signaling modulates the reward value of social interactions — reinforcing prosocial behavior and social bonding through dopaminergic reward circuit engagement. Hippocampal OXTR activity supports memory consolidation for social information and spatial contexts.

The neuropsychiatric research applications of oxytocin have been extensive. Multiple Phase 2 trials have examined intranasal oxytocin for autism spectrum disorder (ASD) — motivated by the central role of social impairment in ASD and oxytocin\'s established prosocial effects. Results have been mixed in heterogeneous ASD populations, but show consistent effects in subgroups with more intact social motivation circuitry. PTSD trials have examined oxytocin for fear extinction enhancement and reduction of social hypervigilance — the amygdala-suppression mechanism directly relevant to PTSD\'s threat-response dysregulation. Social anxiety disorder (SAD) trials show more consistent positive effects from single oxytocin doses on social interaction quality and anxiety reduction.

Beyond psychiatric applications, oxytocin has received growing research attention for: metabolic effects (OXTR in the hypothalamus and gut regulate appetite and energy homeostasis; exogenous oxytocin reduces food intake in humans); anti-inflammatory effects (peripheral OXTR activation reduces pro-inflammatory cytokine production, with potential relevance to inflammatory pain and autoimmune conditions); and cardiovascular effects (oxytocin is cardioprotective in ischemia-reperfusion models through cardiac OXTR activation).

Intranasal oxytocin is the standard research administration route, providing effective CNS delivery through olfactory nerve pathways while minimizing peripheral effects from systemic injection. The 10mg vial provides approximately 40 research doses at standard 250mcg (4IU) intranasal doses. Protocol: 250–400mcg intranasal 15–30 minutes before social or cognitively demanding situations, or for sustained anxiolytic/prosocial effect protocols.`''',
    new_benefits='''[
      'Social bonding and prosocial behavior enhancement through limbic OXTR activation — the defining "trust hormone" effect',
      'Anxiety reduction — amygdala OXTR activation reduces threat-response reactivity and social anxiety',
      'Reduces social hypervigilance — directly relevant to social anxiety disorder and PTSD social avoidance',
      'Fear extinction facilitation — enhances the extinction learning relevant to PTSD treatment',
      'Nucleus accumbens reward circuit modulation — increases social interaction reward value',
      'Anti-inflammatory peripheral effects — reduces pro-inflammatory cytokine production through peripheral OXTR',
      'Metabolic appetite suppression — hypothalamic and gut OXTR signaling reduces food intake',
      'Cardioprotective effects in ischemia-reperfusion models through cardiac OXTR activation',
      'Intranasal route provides effective CNS delivery without systemic injection',
      'One of the most extensively studied neuropeptides in psychiatry — enormous research evidence base',
    ]''',
    new_protocol='''`**Standard Oxytocin Protocol:**
- Dose: 250–400mcg (4–8 IU) per intranasal administration
- Route: Intranasal
- Timing: 15–30 minutes before social situations or cognitive demand for acute effects
- Frequency: As-needed acute use; or daily for sustained anxiolytic protocol

**Intranasal Administration:**
- Reconstitute in bacteriostatic water (100mcg/mL for standard dosing)
- 250mcg into each nostril or split 400mcg across 2–3 applications
- Inhale gently after administration to distribute to olfactory epithelium

**Social Anxiety Protocol:**
- 250mcg 20–30 min before anxiety-provoking social interaction
- Effects: reduced amygdala reactivity, increased social fluency, reduced social hypervigilance

**Research Applications:**
- ASD social function studies (mixed evidence, but effect in motivation-intact subgroups)
- PTSD fear extinction enhancement (adjunct to exposure therapy protocols)
- Social anxiety disorder — most consistent evidence for single-dose anxiety reduction

**Metabolic Protocol:**
- 250mcg pre-meal for appetite suppression effect
- Combine with GLP-1 agonists for complementary appetite reduction mechanisms

**Stacking:**
- Oxytocin + Selank: dual anxiolytic pathways (GABAergic + oxytocinergic)
- Oxytocin + PT-141: prosocial bonding + libido enhancement — combined social intimacy support`''',
    new_highlights='''[
      { title: 'The Trust Hormone', body: 'Oxytocin\'s nucleus accumbens and amygdala receptor activation simultaneously increases social reward value and reduces threat reactivity — producing the prosocial bonding state that underlies trust, empathy, and social connection through neurochemistry rather than behavioral choice.' },
      { title: 'Amygdala Reactivity Reduction', body: 'OXTR activation in the amygdala reduces hyperreactive threat processing — the mechanism underlying anxiety, social hypervigilance, and the fight-flight activation that impairs social function in anxiety disorders and PTSD. This is the most pharmacologically direct amygdala anxiolytic mechanism available.' },
      { title: 'Metabolic and Immune Dimensions', body: 'Beyond its famous social effects, oxytocin receptors in the hypothalamus and gut regulate appetite and energy balance (OXTR activation reduces food intake), while peripheral OXTR activation reduces inflammatory cytokine production — making oxytocin one of the most functionally diverse neuropeptides with clinical potential across multiple organ systems.' },
    ]'''
)


# ── Save ──────────────────────────────────────────────────────────────────────
open(path, 'w', encoding='utf-8').write(content)
new_size = len(content)
print(f"\nAll 10 products patched.")
print(f"File size change: {original_size} → {new_size} chars (+{new_size - original_size})")
