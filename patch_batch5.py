#!/usr/bin/env python3
"""Batch 5: Khavinson bioregulator peptides — Pinealon, Bronchogen, Cardiogen, Cartalax,
Chonluten, Cortagen, Crystagen, Livagen, Ovagen, Pancragen"""

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

    # Replace fullDescription
    window = re.sub(r'    fullDescription: `[^`]*`,\n', f'    fullDescription: {new_full_desc},\n', window, count=1)
    # Replace benefits
    window = re.sub(r'    benefits: \[.*?\],\n', f'    benefits: {new_benefits},\n', window, count=1, flags=re.DOTALL)
    # Replace protocol
    window = re.sub(r'    protocol: `[^`]*`,\n', f'    protocol: {new_protocol},\n', window, count=1)
    # Replace highlights
    window = re.sub(r'    highlights: \[.*?\],\n', f'    highlights: {new_highlights},\n', window, count=1, flags=re.DOTALL)

    content = content[:slug_pos] + window + content[next_pos:]
    print(f"✓ {slug} patched")
    return content


# ── 1. Pinealon 10mg ──────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='pinealon-10mg',
    next_slug='pinealon-20mg',
    new_full_desc='''`Pinealon is a synthetic tripeptide (Glu-Asp-Arg) derived from pineal gland tissue by Dr. Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology. As a tissue-specific bioregulator of the pineal gland — the organ responsible for melatonin synthesis and circadian master regulation — Pinealon works through epigenetic mechanisms to restore physiologically youthful gene expression patterns in neural and pineal cells.

The bioregulator mechanism that defines all Khavinson peptides is elegantly direct: short di-, tri-, and tetrapeptides penetrate cell nuclei and bind to histone-DNA complexes, activating the transcription of tissue-specific proteins that have been silenced by age-related chromatin compaction. Pinealon specifically upregulates expression of genes involved in melatonin synthesis, antioxidant defense, and pineal gland metabolic activity — effectively "unlocking" epigenetic silencing that accumulates in pineal tissue with age. This is distinct from pharmacological receptor stimulation; the effect is restorative rather than agonistic.

The pineal gland undergoes progressive calcification and functional decline with age — a process detectable by MRI by the third decade of life and accelerating significantly after 50. Pineal calcification correlates strongly with disrupted melatonin rhythms, poor sleep architecture, reduced antioxidant defense, and accelerated neurological aging. Pinealon targets this degradation at the gene expression level, supporting the cellular machinery responsible for melatonin production, tryptophan hydroxylase activity, and hydroxyindole-O-methyltransferase (HIOMT) expression.

Clinically, Khavinson and colleagues have published extensively on Pinealon\'s effects across multiple human and animal studies. Animal studies demonstrate significant increases in pineal melatonin output following Pinealon administration, with corresponding improvements in sleep architecture, antioxidant enzyme activity (superoxide dismutase, catalase), and resistance to oxidative neural damage. In aged animal models, Pinealon treatment extended median lifespan by 12–25% in multiple experimental series — findings the Khavinson group attributes to combined effects on circadian normalization, oxidative stress reduction, and epigenetic rejuvenation of neural tissue.

Human studies have focused on aging populations with compromised circadian function — insomnia in the elderly, shift workers with chronic circadian misalignment, and patients with neurodegenerative disease. Results consistently show improved sleep quality, reduced nocturnal waking, normalized melatonin rhythm amplitude, and subjective improvements in cognitive clarity and energy. Importantly, these effects persist for weeks after the peptide course ends — consistent with the epigenetic mechanism, where transcriptional "re-activation" sustains itself beyond the peptide\'s presence.

Neurological applications extend beyond sleep. Pinealon has demonstrated neuroprotective effects in models of ischemic brain injury, with reduced neuronal loss and improved functional recovery when administered peri-ischemia. The proposed mechanisms include: suppression of apoptotic cascades in neural tissue, enhancement of endogenous antioxidant defenses, and maintenance of mitochondrial membrane potential in neurons under oxidative stress. These effects position Pinealon as a candidate adjunct for age-related cognitive decline, post-stroke recovery, and neurodegenerative conditions — though human clinical trials in these applications are limited to the Khavinson group\'s observational work.

Standard Pinealon protocol is 10mg/day for 10 consecutive days, administered intranasally or sublingually (the tripeptide is small enough for mucosal absorption), or via subcutaneous injection. Courses are typically repeated 2–4 times per year with 3–6 month intervals between cycles. The extended effect duration means more frequent administration is generally unnecessary. Combination with Epithalon (the pineal-derived telomerase activator) represents a synergistic approach to comprehensive pineal-neural rejuvenation.`''',
    new_benefits='''[
      'Epigenetic reactivation of silenced pineal gland gene expression — restores melatonin synthesis machinery',
      'Increases pineal melatonin output in aged tissue — measured in animal studies following Pinealon treatment',
      'Improves sleep architecture: reduced sleep latency, fewer nocturnal awakenings, deeper slow-wave sleep',
      'Antioxidant defense enhancement — upregulates SOD, catalase in neural tissue',
      'Neuroprotective in ischemic models — reduces neuronal apoptosis and improves functional recovery',
      'Extended effect duration post-course — epigenetic changes sustain transcriptional activity',
      'Median lifespan extension 12–25% in aged animal models across multiple experimental series',
      'Circadian normalization — restores amplitude of melatonin rhythm blunted by pineal calcification',
      'Cognitive clarity improvement — reported in aging populations with disrupted melatonin cycles',
      'Safe long-term cycling protocol — minimal systemic effects due to tissue-specific gene targeting',
    ]''',
    new_protocol='''`**Standard Pinealon Course:**
- Dose: 10mg/day
- Route: Intranasal, sublingual, or subcutaneous injection
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year, with 3–6 month intervals

**Intranasal Administration:**
- Reconstitute in bacteriostatic water (1mg/mL concentration)
- 10mg split across 2–4 intranasal doses throughout day
- Mucosal absorption bypasses first-pass metabolism

**Timing:**
- Evening administration preferred (aligns with melatonin rhythm support)
- Consistent daily timing more important than specific clock time

**Stacking:**
- Combine with Epithalon for comprehensive pineal rejuvenation
- Can stack with Cortagen for broader neuro-bioregulator coverage
- Compatible with melatonin supplementation (additive, not redundant)

**Cycle Structure:**
- Year 1: 4 courses recommended for established effect
- Maintenance: 2 courses/year once effects are established
- Effects persist 3–6 months after course completion`''',
    new_highlights='''[
      { title: 'Epigenetic Pineal Restoration', body: 'Pinealon binds histone-DNA complexes in pineal cell nuclei, reactivating age-silenced genes for melatonin synthesis — an epigenetic mechanism that produces effects lasting months after course completion.' },
      { title: 'Lifespan Extension in Animal Models', body: 'Khavinson group data: Pinealon extended median lifespan 12–25% in aged rodent models — attributed to circadian normalization, antioxidant restoration, and neural epigenetic rejuvenation acting in concert.' },
      { title: 'Neuroprotection Beyond Sleep', body: 'Pinealon reduces neuronal apoptosis and improves functional recovery in ischemic brain models — positioning it beyond sleep support as a neural tissue protective agent for aging and injury contexts.' },
    ]'''
)

# ── 2. Bronchogen 20mg ────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='bronchogen-20mg',
    next_slug='cardiogen-20mg',
    new_full_desc='''`Bronchogen is a tetrapeptide bioregulator (Ala-Glu-Asp-Lys) derived from bronchial tissue — one of the original tissue-specific peptides developed by Dr. Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology. As part of the Khavinson peptide bioregulator series, Bronchogen operates through epigenetic mechanisms to restore and maintain the gene expression patterns of bronchial epithelial cells that degrade with age, environmental damage, and chronic inflammation.

The bronchial epithelium is one of the most environmentally stressed tissues in the body — continuously exposed to inhaled pathogens, particulates, pollutants, and oxidative stress. This chronic exposure accelerates epigenetic silencing of protective genes: those encoding mucociliary clearance proteins, tight junction maintenance, anti-inflammatory cytokine modulators, and cellular repair enzymes. Bronchogen\'s tetrapeptide sequence penetrates bronchial epithelial cell nuclei and binds to histone-DNA complexes, specifically activating transcription of these silenced bronchial tissue genes.

Research from the Khavinson group has demonstrated that Bronchogen stimulates proliferation of bronchial epithelial cells, increases expression of respiratory mucosa-specific proteins, and reduces markers of chronic bronchial inflammation. In aged animal models, Bronchogen treatment resulted in measurable improvements in respiratory tract histology — with more intact epithelial architecture, improved mucociliary function, and reduced inflammatory cell infiltration compared to controls. These structural improvements translate to functional outcomes: improved respiratory efficiency and reduced susceptibility to respiratory infections.

In human clinical work, Bronchogen has been studied in aging populations with chronic respiratory dysfunction, patients with chronic bronchitis, and elderly individuals experiencing age-related respiratory decline. Outcomes include improvements in spirometric parameters (FEV1, FVC), reduced frequency and severity of respiratory infections, improved mucociliary clearance assessed by mucociliary transport rate, and subjective improvements in breathing capacity. The peptide\'s mechanism — tissue-specific epigenetic activation rather than direct anti-inflammatory drug action — means benefits accumulate over repeat courses rather than requiring continuous administration.

Bronchogen is particularly relevant for: smokers or ex-smokers with bronchial epithelial damage, individuals with chronic low-grade airway inflammation, aging populations experiencing progressive respiratory decline, and those in high-pollution environments with accelerated bronchial aging. The tissue-specific mechanism means Bronchogen acts directly on the affected tissue type rather than producing systemic immunosuppression.

Administration is typically intranasal or via sublingual absorption at 1–2mg/day for 10 consecutive days. The short tetrapeptide structure allows mucosal absorption without requiring injection, though subcutaneous administration is also used. Courses are repeated 2–4 times annually. The combination with Chonluten (lung mucosa bioregulator) provides complementary coverage of both bronchial epithelium and deeper pulmonary mucosa, addressing respiratory aging at multiple tissue levels simultaneously.`''',
    new_benefits='''[
      'Epigenetic reactivation of bronchial epithelial gene expression — restores mucociliary clearance proteins and tight junction integrity',
      'Stimulates bronchial epithelial cell proliferation — supports tissue repair and renewal of damaged airways',
      'Reduces chronic bronchial inflammation markers — anti-inflammatory through restorative mechanism, not immunosuppression',
      'Improves spirometric parameters (FEV1, FVC) in aging populations with respiratory decline',
      'Reduces frequency and severity of respiratory infections through restored mucosal barrier function',
      'Improves mucociliary transport rate — measured functional outcome in clinical studies',
      'Particularly relevant for ex-smokers with residual bronchial epithelial damage',
      'Course effects persist for months — epigenetic transcriptional activation is self-sustaining',
      'Complements Chonluten for full respiratory tract coverage (bronchi + lung mucosa)',
      'No systemic immunosuppression — tissue-specific action confined to bronchial epithelium',
    ]''',
    new_protocol='''`**Standard Bronchogen Course:**
- Dose: 1–2mg/day
- Route: Intranasal or sublingual (mucosal absorption); subcutaneous injection also effective
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Intranasal Administration:**
- Reconstitute in bacteriostatic water
- Divide daily dose across 2 administrations (morning and evening)
- Consistent 10-day course without gaps

**Stacking for Respiratory Coverage:**
- Bronchogen + Chonluten: complete bronchial + pulmonary mucosa bioregulator stack
- Add Crystagen for immune system support if recurrent infections are a concern

**Timing:**
- Morning and evening intranasal administrations preferred
- No specific meal timing requirement

**Cycle Structure:**
- Initial year: 4 courses (quarterly) for establishing effect
- Maintenance: 2 courses per year once baseline is restored
- Smokers/ex-smokers: may benefit from more frequent initial cycling`''',
    new_highlights='''[
      { title: 'Bronchial Epithelial Epigenetics', body: 'Bronchogen penetrates bronchial epithelial cell nuclei and activates age-silenced genes for mucociliary proteins and tight junctions — reversing the epigenetic damage that accumulates from aging, smoking, and pollution.' },
      { title: 'Measured Respiratory Improvements', body: 'Human clinical work shows improved FEV1/FVC spirometry, faster mucociliary transport, and fewer respiratory infections following Bronchogen courses — outcomes that persist well beyond the 10-day treatment period.' },
      { title: 'Complementary to Chonluten', body: 'Bronchogen targets bronchial epithelium (large airway mucosa) while Chonluten targets deeper lung mucosa — together they form a complete respiratory tract bioregulator pair addressing aging at every airway level.' },
    ]'''
)

# ── 3. Cardiogen 20mg ─────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='cardiogen-20mg',
    next_slug='cartalax-20mg',
    new_full_desc='''`Cardiogen is a tetrapeptide bioregulator (Ala-Glu-Asp-Arg) derived from cardiac tissue — one of the most clinically significant peptides in the Khavinson bioregulator series developed at the St. Petersburg Institute of Bioregulation and Gerontology. The heart is among the most metabolically demanding and least regenerative organs in the body, making cardiac-specific epigenetic restoration a compelling target for aging and cardiovascular optimization.

The mechanism that distinguishes Khavinson peptides from conventional cardioprotective drugs is their epigenetic action: Cardiogen\'s tetrapeptide sequence penetrates cardiomyocyte nuclei and binds specifically to histone-DNA complexes in cardiac chromatin, reactivating the transcription of cardioprotective genes silenced by age-related methylation and histone modification. These genes include those encoding antioxidant enzymes (Mn-SOD, catalase), mitochondrial respiratory chain components critical for cardiomyocyte energy production, heat shock proteins that protect cardiac proteins from oxidative unfolding, and anti-apoptotic factors that maintain cardiomyocyte viability under metabolic stress.

Cardiomyocytes are terminally differentiated cells — the heart has extremely limited regenerative capacity compared to other organ systems. This means that age-related functional decline in cardiomyocytes is particularly consequential: every cell lost to apoptosis or senescence represents a permanent reduction in cardiac reserve. Cardiogen addresses this by enhancing the intrinsic survival machinery of existing cardiomyocytes — reducing apoptotic susceptibility, improving mitochondrial function, and restoring the antioxidant capacity that protects against the chronic oxidative stress inherent to the heart\'s continuous high-energy metabolic demand.

Animal studies from the Khavinson group demonstrate that Cardiogen treatment in aged rodent models produces measurable improvements in cardiac histology (reduced cardiomyocyte apoptosis, better preserved myofibril architecture), biochemical markers (improved antioxidant enzyme activity, reduced lipid peroxidation products in cardiac tissue), and functional parameters (improved cardiac contractility under stress conditions). The survival data is notable: aged animals receiving periodic Cardiogen courses showed reduced cardiovascular mortality and median lifespan extension — effects the researchers attribute to maintained cardiac functional reserve preventing the cascade of organ failure that commonly terminates aging.

Human clinical application has focused on elderly patients with age-related cardiac dysfunction, individuals recovering from myocardial stress, and preventive protocols in aging populations at elevated cardiovascular risk. Outcomes in published Khavinson group work include improvements in echocardiographic parameters, reduced cardiac biomarker elevation under stress, and subjective improvements in exercise tolerance and cardiac symptomatology. The peptide is not an acute intervention for cardiac emergencies but rather a course-based restoration protocol for maintaining cardiac tissue quality over time.

Standard protocol is 2mg/day for 10 consecutive days, administered subcutaneously or intranasally, with courses repeated 2–4 times annually. The cardiac-specific epigenetic restoration mechanism means effects accumulate with repeated courses — each cycle builds on the transcriptional reactivation established by previous cycles. Combination with SS-31 (mitochondrial-targeted antioxidant with strong cardiomyocyte data) provides mechanistically complementary cardiac protection at the mitochondrial level.`''',
    new_benefits='''[
      'Epigenetic reactivation of cardioprotective gene expression — antioxidant enzymes, mitochondrial components, anti-apoptotic factors',
      'Reduces cardiomyocyte apoptosis — protects terminally differentiated cardiac cells that cannot be replaced',
      'Improves mitochondrial function in cardiac tissue — restores energy production in energy-demanding cardiomyocytes',
      'Antioxidant defense restoration in cardiac tissue — reduces lipid peroxidation and oxidative damage',
      'Improved echocardiographic parameters in aging populations in human clinical studies',
      'Reduced cardiovascular mortality in aged animal models with periodic Cardiogen course protocols',
      'Improved cardiac contractility under stress conditions — maintained cardiac reserve',
      'Better myofibril architecture in histology — structural preservation of cardiomyocytes',
      'Compatible with conventional cardiac medications — different mechanism, no pharmacological interference',
      'Lifespan extension in aging animal models linked to preserved cardiac functional reserve',
    ]''',
    new_protocol='''`**Standard Cardiogen Course:**
- Dose: 2mg/day
- Route: Subcutaneous injection or intranasal
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Subcutaneous Administration:**
- Reconstitute in bacteriostatic water (1mg/mL)
- 2mg once daily SC injection, preferably morning

**Intranasal Protocol:**
- 2mg divided across morning/evening intranasal doses
- Mucosal absorption effective for this tetrapeptide size

**Stacking:**
- Cardiogen + SS-31: epigenetic cardiac restoration + mitochondrial antioxidant protection
- Add Livagen for combined cardiac/hepatic bioregulator coverage (synergistic organ-level aging support)

**Cycle Structure:**
- High-risk individuals (cardiovascular history, age 60+): 4 courses/year
- Maintenance/prevention: 2 courses/year
- Effects build with successive courses — cumulative epigenetic benefit`''',
    new_highlights='''[
      { title: 'Cardiac-Specific Epigenetic Restoration', body: 'Cardiogen penetrates cardiomyocyte nuclei and reactivates age-silenced cardioprotective genes — directly addressing the epigenetic root of cardiac aging rather than masking symptoms with pharmacological intervention.' },
      { title: 'Protecting Irreplaceable Cells', body: 'Cardiomyocytes are terminally differentiated and cannot regenerate — every apoptotic loss is permanent. Cardiogen reduces cardiomyocyte apoptosis, preserving the finite population of cardiac muscle cells that determines lifetime heart function.' },
      { title: 'Mechanistically Distinct from Cardiovascular Drugs', body: 'Statins, ACE inhibitors, and beta-blockers reduce risk factors or manage symptoms. Cardiogen restores the intrinsic cellular quality of cardiac tissue — a fundamentally different and complementary approach to cardiac longevity.' },
    ]'''
)

# ── 4. Cartalax 20mg ──────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='cartalax-20mg',
    next_slug='chonluten-20mg',
    new_full_desc='''`Cartalax is a bioregulator peptide targeting cartilage and connective tissue — part of the Khavinson series of tissue-specific short peptides developed at the St. Petersburg Institute of Bioregulation and Gerontology. Its precise amino acid sequence activates gene transcription in chondrocytes and connective tissue cells that has been suppressed by aging, mechanical stress, and inflammatory signaling — the epigenetic root of progressive joint degeneration.

Articular cartilage presents one of the most challenging tissue maintenance problems in the body: it is avascular, meaning it receives no direct blood supply and relies on diffusion from synovial fluid for nutrient delivery. This limited nutrition, combined with the compressive loads experienced in daily movement, makes cartilage uniquely susceptible to accumulative damage. Chondrocytes — the sole cell type in cartilage — have limited replicative capacity and declining synthetic activity with age, progressively reducing the rate at which type II collagen and aggrecan (the key extracellular matrix components that give cartilage its load-bearing properties) are replaced.

Cartalax acts by penetrating chondrocyte nuclei and binding to histone-DNA complexes, activating transcription of genes for collagen synthesis, proteoglycan production, and chondrocyte differentiation markers. This epigenetic reactivation restores the cell\'s ability to produce and maintain the extracellular matrix proteins responsible for cartilage mechanical properties. In animal studies, Cartalax treatment produced measurable increases in cartilage matrix density, improved chondrocyte viability, and reduced markers of cartilaginous degeneration — effects sustained well beyond the treatment period.

Beyond direct cartilage effects, Cartalax influences the broader connective tissue environment. Connective tissue bioregulators like Cartalax also affect fibroblast activity in joint capsule, ligament, and tendon tissue — supporting the entire periarticular connective tissue complex rather than cartilage alone. This comprehensive connective tissue trophic effect makes Cartalax relevant not only for joint degeneration but also for ligament and tendon repair following injury, and for maintaining connective tissue integrity throughout the musculoskeletal system with aging.

The clinical relevance extends to bone-cartilage interface health. Subchondral bone quality is a critical determinant of cartilage health — mechanical signaling from degenerated subchondral bone accelerates cartilage breakdown. Cartalax\'s connective tissue effects include support for the bone-cartilage interface, addressing the bidirectional relationship between bone quality and cartilage preservation.

Standard protocol involves 2mg/day for 10 consecutive days, administered subcutaneously or intranasally, with cycles repeated 2–4 times per year. For active joint rehabilitation following injury, more frequent initial cycling (every 3 months in the first year) is typically employed. Cartalax combines synergistically with BPC-157 (which promotes connective tissue healing through growth factor upregulation) and TB-500 (actin-mediated tissue repair) — the epigenetic restoration of chondrocyte synthetic capacity provided by Cartalax complements the growth factor and actin-mediated repair mechanisms of these healing peptides.`''',
    new_benefits='''[
      'Epigenetic reactivation of chondrocyte synthetic genes — restores type II collagen and aggrecan production in cartilage cells',
      'Improves cartilage matrix density and structural integrity in animal models',
      'Reduces chondrocyte apoptosis — maintains the limited cell population responsible for cartilage maintenance',
      'Broad connective tissue trophic effect — supports fibroblasts in ligament, tendon, and joint capsule tissue',
      'Supports bone-cartilage interface health — addresses the subchondral bone link in cartilage degeneration',
      'Relevant for both age-related joint degeneration and post-injury connective tissue repair',
      'Course effects persist beyond treatment period — epigenetic transcriptional reactivation is self-sustaining',
      'Combinable with BPC-157 and TB-500 for multi-mechanism connective tissue restoration',
      'No systemic anti-inflammatory side effects — tissue-specific gene activation rather than pharmacological suppression',
      'Applicable to multiple joint sites simultaneously — systemic administration reaches all chondrocyte populations',
    ]''',
    new_protocol='''`**Standard Cartalax Course:**
- Dose: 2mg/day
- Route: Subcutaneous injection or intranasal
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Injury/Rehabilitation Protocol:**
- 4 courses in first year (quarterly) for active joint repair
- Reduce to 2 courses/year for maintenance once structural improvement established

**Stacking for Joint Repair:**
- Cartalax + BPC-157: epigenetic chondrocyte restoration + growth factor-mediated tissue repair
- Cartalax + TB-500: connective tissue epigenetic + actin-mediated repair mechanisms
- Triple stack: Cartalax + BPC-157 + TB-500 for comprehensive joint rehabilitation

**Administration:**
- SC injection: 2mg once daily in periarticular tissue or distant SC site
- Intranasal: equally effective for systemic chondrocyte bioregulator effect

**Monitoring:**
- MRI or ultrasound at baseline and 6–12 months for objective cartilage tracking
- Pain scores and functional assessment as proxy outcome measures`''',
    new_highlights='''[
      { title: 'Chondrocyte Epigenetic Restoration', body: 'Cartalax reactivates age-silenced genes for collagen and proteoglycan synthesis in chondrocytes — addressing cartilage degeneration at the root epigenetic level rather than masking inflammation or supplementing matrix components externally.' },
      { title: 'Complete Connective Tissue Coverage', body: 'Beyond cartilage, Cartalax activates fibroblast gene expression in ligament, tendon, and joint capsule tissue — making it a comprehensive periarticular connective tissue bioregulator, not merely a cartilage-specific agent.' },
      { title: 'Synergistic with BPC-157 and TB-500', body: 'Cartalax restores the cellular capacity to synthesize connective tissue matrix; BPC-157 and TB-500 drive growth factor signaling and actin-mediated repair. Together they address joint degeneration at epigenetic, growth factor, and structural levels simultaneously.' },
    ]'''
)

# ── 5. Chonluten 20mg ─────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='chonluten-20mg',
    next_slug='cortagen-20mg',
    new_full_desc='''`Chonluten is a tripeptide bioregulator (Glu-Asp-Leu) targeting lung mucosa cells — the epithelial lining of the alveoli and bronchioles that constitutes the functional respiratory surface for gas exchange. Developed by Dr. Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology, Chonluten operates through the same epigenetic histone-DNA binding mechanism as the broader bioregulator series, specifically activating gene expression in pulmonary epithelial cells that declines with age, chronic environmental exposure, and inflammatory injury.

The lung\'s respiratory surface is a delicate epithelial structure with enormous functional consequences for the entire organism. Type I pneumocytes cover roughly 95% of the alveolar surface and are the primary sites of gas exchange — oxygen entry and CO2 elimination occur across their exceptionally thin membranes. Type II pneumocytes produce surfactant, the phospholipid-protein mixture that prevents alveolar collapse at end-expiration and plays crucial immune defense roles. Both cell types show age-related functional decline: reduced surfactant production, impaired barrier integrity, decreased proliferative capacity for self-renewal, and increased susceptibility to oxidative damage from inhaled oxidants.

Chonluten\'s tripeptide sequence activates transcription of genes critical to both pneumocyte populations: surfactant protein genes (SP-A, SP-B, SP-C, SP-D), tight junction proteins maintaining the alveolar barrier, antioxidant enzymes protecting epithelium from inhaled oxidative stress, and growth factors supporting type II pneumocyte proliferation for alveolar self-renewal. The Khavinson group\'s research demonstrates that Chonluten treatment in aging animals restores these gene expression profiles toward youthful patterns, with measurable improvements in lung histology (preserved alveolar architecture, better surfactant distribution, reduced inflammatory infiltration) and physiological parameters (improved gas exchange efficiency).

Clinically, Chonluten has been studied in aging populations with age-related pulmonary decline, patients with chronic non-infectious pulmonary disease, and individuals with occupational or environmental respiratory damage. Outcomes include improvements in spirometry, reduced frequency of respiratory infections (attributable to restored mucosal immune defense), and improvements in subjective breathing capacity. The peptide is particularly relevant for: aging individuals with progressive pulmonary function loss, those with environmental particulate exposure history, ex-smokers with residual alveolar damage, and patients recovering from pulmonary injury who need to rebuild alveolar tissue quality.

The distinction between Chonluten and Bronchogen is anatomical and functional: Bronchogen targets the bronchial epithelium (conducting airways), while Chonluten targets the alveolar and bronchiolar epithelium (gas exchange surface). Together they provide complete respiratory tract bioregulator coverage — bronchial wall restoration from Bronchogen, alveolar restoration from Chonluten. For comprehensive respiratory aging support, the combination addresses the full anatomical spectrum of age-related pulmonary decline.

Protocol is 1–2mg/day intranasally or by subcutaneous injection for 10 consecutive days, repeated 2–4 times per year. Intranasal administration is particularly relevant given that inhaled peptide can reach bronchiolar and distal airway epithelium directly — though systemic absorption following intranasal or SC administration also provides bioregulator activity at the alveolar level. Response is cumulative across course cycles.`''',
    new_benefits='''[
      'Epigenetic reactivation of pulmonary epithelial gene expression — surfactant proteins, tight junctions, antioxidant enzymes',
      'Restores type I and type II pneumocyte function — supports both gas exchange efficiency and surfactant production',
      'Improved alveolar architecture in aging animals — preserved gas exchange surface area',
      'Reduced respiratory infection frequency — restored mucosal immune defense through surfactant protein upregulation',
      'Improved spirometry in aging populations with pulmonary function decline',
      'Protects against inhaled oxidative damage — antioxidant gene activation in alveolar epithelium',
      'Relevant for ex-smokers with residual alveolar damage and ongoing oxidative stress',
      'Intranasal delivery provides direct access to bronchiolar epithelium — local and systemic bioregulator effect',
      'Complements Bronchogen for complete bronchial + alveolar respiratory bioregulator coverage',
      'Effects persist between courses — epigenetic transcriptional activation sustains beyond peptide presence',
    ]''',
    new_protocol='''`**Standard Chonluten Course:**
- Dose: 1–2mg/day
- Route: Intranasal preferred (direct airway epithelial access); subcutaneous also effective
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Intranasal Administration:**
- Reconstitute in bacteriostatic water (0.5–1mg/mL)
- Morning and evening intranasal administrations preferred
- Inhale gently after administration to distribute to distal airways

**Respiratory Bioregulator Stack:**
- Chonluten + Bronchogen: complete respiratory tract epigenetic restoration (alveoli + bronchi)
- Add Crystagen if recurrent pulmonary infections present (thymic immune support)

**Cycle Structure:**
- First year: 4 courses for establishing alveolar function improvement
- Maintenance: 2 courses/year once baseline is normalized
- Ex-smokers with significant damage: may benefit from more aggressive initial cycling`''',
    new_highlights='''[
      { title: 'Alveolar Epithelial Restoration', body: 'Chonluten reactivates surfactant protein genes and tight junction expression in pneumocytes — restoring the gas exchange surface quality that determines respiratory efficiency and declines continuously from the third decade of life.' },
      { title: 'Anatomically Distinct from Bronchogen', body: 'While Bronchogen restores conducting airway (bronchial) epithelium, Chonluten targets the alveolar/bronchiolar gas exchange surface — the two peptides provide non-overlapping respiratory coverage that is maximally comprehensive when combined.' },
      { title: 'Reduces Respiratory Infections', body: 'Surfactant proteins SP-A and SP-D are critical innate immune defense components against inhaled pathogens. By reactivating surfactant gene expression, Chonluten restores this first-line pulmonary immune defense — reducing infection frequency beyond its direct structural effects.' },
    ]'''
)

# ── 6. Cortagen 20mg ──────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='cortagen-20mg',
    next_slug='crystagen-20mg',
    new_full_desc='''`Cortagen is a peptide bioregulator derived from brain cortex tissue — targeting the cortical neurons and support cells whose epigenetic decline underlies the progressive cognitive aging that accompanies advancing years. Developed by Dr. Vladimir Khavinson and colleagues at the St. Petersburg Institute of Bioregulation and Gerontology, Cortagen is a tissue-specific short peptide that penetrates neuronal nuclei and reactivates age-silenced gene expression in cortical brain tissue, restoring the transcriptional patterns of younger neural cells.

The cerebral cortex houses the highest-order cognitive functions: executive planning, working memory, language, abstract reasoning, and conscious perception. These functions depend on the structural and synaptic integrity of cortical neurons — cells that are post-mitotic and cannot be replaced if lost, making their preservation a critical priority for lifelong cognitive maintenance. Age-related cortical decline is driven not only by neuron loss but by widespread epigenetic changes: promoter hypermethylation, altered histone modifications, and chromatin compaction that progressively silence the expression of neurotrophic factors, synaptic plasticity genes, and neuroprotective proteins that maintain cortical function.

Cortagen\'s amino acid sequence is derived from the specific peptide bioregulators found in cortical tissue during development and early adulthood — the period of peak gene expression for cortical function genes. When administered to aging cells, these peptides re-engage the chromatin remodeling machinery to restore expression of neurotrophins (BDNF, NGF), synaptic proteins (PSD-95, synapsin), antioxidant enzymes protecting neurons from oxidative stress, and mitochondrial proteins supporting the high energy demands of cortical neurons.

Research from the Khavinson group demonstrates Cortagen\'s effects across multiple levels of analysis. In vitro, Cortagen treatment of cortical neuron cultures increases expression of neuroprotective markers and reduces apoptotic susceptibility under oxidative challenge. In aging animal models, systemic Cortagen administration produced improvements in spatial memory tasks, faster learning acquisition in maze paradigms, and reduced cortical oxidative stress markers — consistent with the hypothesized mechanism of restored neuroprotective gene expression. Histologically, Cortagen-treated animals showed better preserved cortical architecture, with more intact synaptic density and reduced neurofibrillary tangle formation compared to controls.

Human applications have centered on cognitive aging, mild cognitive impairment in the elderly, and preventive protocols for individuals at risk for neurodegenerative decline. Published outcomes include improvements in cognitive function assessments, better sleep quality (through cortical normalization of sleep-wake regulatory circuits), and improvements in neurological symptom scores in populations with age-related cognitive decline. The Khavinson group has also reported data suggesting Cortagen may slow the accumulation of pathological markers in neurodegenerative contexts — though this remains a research-stage application.

Standard protocol: 2mg/day for 10 consecutive days, administered subcutaneously or intranasally. Courses repeated 2–4 times per year. Cortagen combines naturally with Pinealon (pineal-specific neurological bioregulator) for comprehensive neural aging support, and with Epithalon for its parallel telomere maintenance and neural protection effects. The cognitive effects of Cortagen are distinct from stimulant nootropics — there is no acute performance enhancement but rather a gradual restoration of neural substrate quality with cumulative course cycles.`''',
    new_benefits='''[
      'Epigenetic reactivation of cortical neuron gene expression — BDNF, NGF, synaptic proteins, neuroprotective enzymes',
      'Improves spatial memory and learning acquisition in aging animal models',
      'Reduces cortical oxidative stress markers — protects post-mitotic neurons that cannot be replaced',
      'Better preserved cortical synaptic density in histological analysis of treated aging animals',
      'Reduced neurofibrillary tangle formation — relevant to neurodegenerative aging pathology',
      'Improvements in cognitive function assessments in elderly populations in human studies',
      'Restores cortical sleep-wake regulatory circuit function — improved sleep quality outcome',
      'Gradual cumulative benefit with repeat courses — builds neural tissue quality over time',
      'No stimulant mechanism — neurological substrate restoration rather than neurotransmitter manipulation',
      'Synergistic with Pinealon and Epithalon for comprehensive neural bioregulator coverage',
    ]''',
    new_protocol='''`**Standard Cortagen Course:**
- Dose: 2mg/day
- Route: Subcutaneous injection or intranasal
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Intranasal Administration:**
- Direct nasal-to-brain pathway provides enhanced cortical access vs. peripheral routes
- 1mg morning + 1mg evening intranasal dosing preferred
- Reconstitute in bacteriostatic water (1mg/mL)

**Comprehensive Neural Bioregulator Stack:**
- Cortagen + Pinealon: cerebral cortex + pineal gland epigenetic restoration
- Add Epithalon for telomere maintenance and broader neural anti-aging
- Full stack: Cortagen + Pinealon + Epithalon covers the primary neural bioregulator targets

**Cycle Structure:**
- Initial year: 4 courses (quarterly) for establishing cortical function improvement
- Maintenance: 2 courses/year
- Cognitive decline prevention: start protocols before significant symptoms appear for best outcome`''',
    new_highlights='''[
      { title: 'Cortical Neuron Epigenetic Restoration', body: 'Cortagen reactivates BDNF, synaptic plasticity genes, and neuroprotective programs in cortical neurons — addressing the epigenetic silencing that underlies progressive cognitive aging at its cellular root.' },
      { title: 'Cumulative Cognitive Benefit', body: 'Unlike stimulant nootropics that provide acute effects requiring continuous dosing, Cortagen produces cumulative improvements with repeat course cycles — each course builds on transcriptional reactivation from previous cycles, progressively restoring neural tissue quality.' },
      { title: 'Synergistic Neural Bioregulator Trio', body: 'Cortagen (cortex) + Pinealon (pineal/melatonin) + Epithalon (telomere/longevity) represents the complete Khavinson neural bioregulator stack — addressing cortical function, circadian regulation, and cellular aging simultaneously.' },
    ]'''
)

# ── 7. Crystagen 20mg ─────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='crystagen-20mg',
    next_slug='livagen-20mg',
    new_full_desc='''`Crystagen is a bioregulator peptide targeting thymic tissue — the primary lymphoid organ responsible for T-cell maturation, immune education, and the lifelong programming of adaptive immunity. Part of the Khavinson series of tissue-specific short peptides, Crystagen activates gene expression in thymic stromal cells and thymocyte precursors that has been progressively silenced by the thymic involution that begins in early adulthood and accelerates to near-complete atrophy by age 50–60.

Thymic involution is one of the most consequential aging processes in the body, and one of the best characterized at the molecular level. The thymus involutes — shrinks and is replaced by fat tissue — beginning in puberty and accelerating in the third and fourth decades. By age 50, the thymus has lost roughly 80% of its functional parenchyma; by 70, little functional thymic tissue remains. This progressive loss directly translates to reduced naive T-cell output, shrinking T-cell receptor diversity, and progressively compromised adaptive immune capacity. The cumulative consequence is the immune aging (immunosenescence) that makes elderly individuals disproportionately vulnerable to infections, cancers, and autoimmune dysregulation.

Crystagen\'s peptide sequence was derived from thymic tissue and activates the specific gene expression programs of thymic stromal cells (thymic epithelial cells, dendritic cells, macrophages) responsible for T-cell education and maturation. The epigenetic mechanism — histone-DNA binding and chromatin remodeling to reactivate silenced promoters — restores expression of thymic hormones (thymosin-α1, thymulin, thymopoietin), MHC molecules necessary for T-cell selection, cytokines directing T-cell lineage commitment, and adhesion molecules maintaining the thymic microenvironment architecture that T-cell maturation requires.

Khavinson group research demonstrates Crystagen\'s effects on thymic function restoration. In aging animals, Crystagen treatment increased thymic weight (reversal of involution), increased thymocyte cellularity, improved T-cell receptor diversity measures, and enhanced T-cell proliferative response to mitogenic stimulation. Immunological outcomes included better antibody response to novel antigens, improved pathogen clearance, and reduced inflammatory cytokine dysregulation — the chronic low-grade inflammation ("inflammaging") that characterizes immune aging and drives multiple age-related diseases.

Human clinical applications in the Khavinson group\'s work include aging populations with documented immune decline, frequent infection patterns, cancer patients with immune suppression from treatment, and prevention-oriented protocols in middle-aged individuals. Published outcomes include improved lymphocyte counts and subpopulation balance, better response to vaccination (particularly relevant in elderly populations where vaccine efficacy drops precipitously), and reduced infection frequency over follow-up periods. Crystagen is distinct from Thymosin Alpha-1 (a single thymic hormone that functions as a direct immunostimulant) — Crystagen\'s epigenetic mechanism restores the entire thymic microenvironment gene expression program rather than supplementing a single thymic hormone.

Protocol: 2mg/day for 10 consecutive days, repeated 2–4 times per year. Crystagen combines synergistically with Thymosin Alpha-1 (direct thymic hormone supplementation) and Vilon (thymus-derived dipeptide with complementary T-cell activation properties) for comprehensive thymic immune restoration.`''',
    new_benefits='''[
      'Epigenetic reactivation of thymic stromal cell gene expression — thymic hormones, MHC molecules, T-cell education cytokines',
      'Reverses thymic involution in aging animals — increases thymic weight and thymocyte cellularity',
      'Improves T-cell receptor diversity — restores adaptive immune repertoire breadth that shrinks with thymic aging',
      'Enhances T-cell proliferative response to mitogens — restored adaptive immune activation capacity',
      'Better antibody response to novel antigens in aging animals — improved vaccine responsiveness',
      'Reduced inflammaging markers — normalizes the chronic low-grade inflammatory dysregulation of immune aging',
      'Improved vaccination efficacy in elderly — highly relevant for this demographically critical application',
      'Mechanistically distinct from Thymosin Alpha-1 — whole thymic microenvironment restoration vs. single hormone supplementation',
      'Combinable with Thymosin Alpha-1 and Vilon for comprehensive multi-level thymic immune support',
      'Effects persist post-course — thymic microenvironment epigenetic restoration is self-sustaining',
    ]''',
    new_protocol='''`**Standard Crystagen Course:**
- Dose: 2mg/day
- Route: Subcutaneous injection or intranasal
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Administration:**
- Reconstitute in bacteriostatic water (1mg/mL)
- Once daily SC injection or split intranasal doses (morning/evening)

**Comprehensive Thymic Immune Stack:**
- Crystagen + Thymosin Alpha-1: epigenetic thymic restoration + direct thymic hormone supplementation
- Add Vilon for additional T-cell activating dipeptide effect
- Full stack covers: thymic microenvironment (Crystagen), thymic hormones (TA-1), T-cell activation (Vilon)

**Indications for More Aggressive Cycling:**
- Documented immune suppression (post-chemotherapy, chronic infection)
- Age 60+ with frequent infections suggesting immunosenescence
- Poor vaccine response in preceding season

**Monitoring:**
- Lymphocyte count and subpopulation analysis (CD4/CD8 ratio, naive T-cells)
- Clinical: infection frequency, severity, and recovery time as functional markers`''',
    new_highlights='''[
      { title: 'Thymic Involution Reversal', body: 'Crystagen increases thymic weight and thymocyte cellularity in aging animals — measurable structural reversal of the progressive thymic atrophy that drives immunosenescence and the entire immune aging phenotype.' },
      { title: 'Whole Thymic Microenvironment vs. Single Hormone', body: 'Thymosin Alpha-1 supplements one thymic hormone. Crystagen reactivates the complete gene expression program of thymic stromal cells — the architectural and signaling environment T-cells require for proper education and maturation.' },
      { title: 'Vaccination Efficacy Restoration', body: 'Improved antibody response to novel antigens in aging animals translates directly to one of the most clinically meaningful applications: restoring vaccine efficacy in elderly populations where immunosenescence renders standard vaccine schedules inadequate.' },
    ]'''
)

# ── 8. Livagen 20mg ───────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='livagen-20mg',
    next_slug='ovagen-20mg',
    new_full_desc='''`Livagen is a tetrapeptide bioregulator targeting liver (hepatic) tissue — one of the most metabolically central organs in the body and the primary site of detoxification, protein synthesis, lipid metabolism, glucose homeostasis, and coagulation factor production. Developed by Dr. Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology, Livagen\'s tissue-specific peptide sequence activates the gene expression programs of hepatocytes and hepatic stellate cells that are progressively silenced by age-related epigenetic changes, chronic metabolic burden, and toxic exposures.

The liver\'s metabolic functions are so broad that hepatic aging has systemic consequences: deteriorating lipid metabolism (rising LDL, dyslipidemia), reduced synthesis of carrier proteins, coagulation factors, and albumin, impaired phase I and II detoxification (reduced cytochrome P450 activity), declining gluconeogenic capacity, and impaired hepatic clearance of metabolic waste products. These changes accumulate silently over decades before they manifest as detectable dysfunction — making epigenetic maintenance of hepatocyte function a compelling preventive strategy.

Livagen operates through the characteristic Khavinson mechanism: the tetrapeptide penetrates hepatocyte nuclei and binds to histone-DNA complexes in hepatic chromatin, reactivating transcription of hepatocyte-specific genes whose promoters have been hypermethylated or compacted by aging. Target genes include those encoding detoxification enzymes (CYP450 family, GST, UGT), lipid metabolizing enzymes, glucokinase and other glycolytic enzymes, albumin, coagulation factors, and anti-inflammatory mediators produced by the liver. The restoration of expression in these functional gene categories translates directly to restored metabolic capacity.

A particularly significant mechanism attributed to Livagen is its effect on chromatin decondensation. Livagen has been shown to increase the accessibility of condensed heterochromatin in hepatocytes — "opening up" epigenetically silenced genomic regions to allow transcriptional activity that aging has progressively restricted. This chromatin remodeling effect is not specific to single genes but operates at the level of broader genomic accessibility, making Livagen one of the more broadly epigenetically active peptides in the Khavinson series. This mechanism also underpins observed effects on cellular longevity markers.

In experimental systems, Livagen treatment of hepatocyte cultures and aging animal liver tissue produces measurable increases in hepatic metabolic enzyme activity, improved detoxification capacity (measured by clearance rates of test substrates), and better preservation of hepatic histological architecture. In aged animals, Livagen treatment reduced markers of hepatic aging and improved liver function parameters — with effects persisting well beyond the treatment period, consistent with epigenetic restoration rather than pharmacological support.

Beyond pure hepatic function, Livagen has demonstrated effects on immune modulation. The liver is a major immune regulatory organ — it produces acute phase reactants, tolerizes the immune system to dietary antigens via hepatic tolerogenic mechanisms, and houses a large population of resident macrophages (Kupffer cells). Livagen\'s hepatic epigenetic restoration influences these immune functions as well, contributing to the normalized inflammatory signaling observed in aged animal models following treatment.

Protocol: 1–2mg/day for 10 consecutive days, administered subcutaneously or intranasally, repeated 2–4 times per year. Combines synergistically with Ovagen (GI mucosa/liver bioregulator) and Pancragen (pancreatic bioregulator) for comprehensive hepato-gastrointestinal aging support.`''',
    new_benefits='''[
      'Epigenetic reactivation of hepatocyte metabolic gene expression — detoxification enzymes, lipid metabolism, glucokinase, coagulation factors',
      'Chromatin decondensation effect — broad reopening of epigenetically silenced genomic regions in hepatocytes',
      'Improved hepatic detoxification capacity — cytochrome P450 and phase II enzyme activity restoration',
      'Better lipid metabolism profiles — relevant to age-related dyslipidemia from declining hepatic lipid processing',
      'Preserved hepatic architecture in aging animal histology',
      'Improved liver function biomarkers in aged animal models following treatment courses',
      'Hepatic immune regulatory effects — influences Kupffer cell function and hepatic tolerance mechanisms',
      'Reduces hepatic aging markers — targets epigenetic root of progressive liver function decline',
      'Effects persist post-course — characteristic of epigenetic mechanism vs. pharmacological support',
      'Complements Ovagen and Pancragen for comprehensive GI/hepatic bioregulator coverage',
    ]''',
    new_protocol='''`**Standard Livagen Course:**
- Dose: 1–2mg/day
- Route: Subcutaneous injection or intranasal
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Hepatic Bioregulator Stack:**
- Livagen + Ovagen: hepatic + GI mucosa bioregulator pair — comprehensive hepato-intestinal coverage
- Add Pancragen for full hepato-pancreatic-GI bioregulator support

**Administration:**
- Once daily SC injection preferred for hepatic delivery
- Intranasal also effective (systemic absorption reaches liver)

**Cycle Structure:**
- For documented hepatic function decline (elevated enzymes, dyslipidemia): 4 courses/year
- Preventive/longevity use: 2 courses/year
- Consider liver function panel at baseline and 6 months for objective monitoring

**Compatibility:**
- Compatible with standard lipid and liver support supplements
- No known interactions with hepatic-metabolized medications at bioregulator doses`''',
    new_highlights='''[
      { title: 'Hepatocyte Epigenetic Restoration', body: 'Livagen reactivates age-silenced genes for detoxification, lipid metabolism, and protein synthesis in hepatocytes — directly reversing the epigenetic changes underlying the metabolic liver aging that drives systemic dyslipidemia, impaired detoxification, and reduced synthetic capacity.' },
      { title: 'Chromatin Decondensation', body: 'Beyond specific gene activation, Livagen has been shown to broadly decondense heterochromatin in hepatocytes — opening epigenetically silenced genomic regions across the hepatic transcriptome, making it one of the most broadly epigenetically active Khavinson peptides.' },
      { title: 'Systemic Metabolic Consequences', body: 'Hepatic gene expression restoration has cascading metabolic effects throughout the body — normalized lipid handling, improved detoxification of metabolic waste and xenobiotics, better coagulation factor production, and restored acute phase immune response capacity.' },
    ]'''
)

# ── 9. Ovagen 20mg ────────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='ovagen-20mg',
    next_slug='pancragen-20mg',
    new_full_desc='''`Ovagen is a peptide bioregulator targeting liver and gastrointestinal mucosa — a dual-target bioregulator in the Khavinson series, uniquely active in both hepatic parenchymal tissue and the epithelial lining of the gastrointestinal tract. Developed at the St. Petersburg Institute of Bioregulation and Gerontology, Ovagen\'s peptide sequence was derived from gastrointestinal tissue and activates gene expression programs in both GI mucosal cells and hepatocytes that decline with age and chronic exposure to dietary, microbial, and inflammatory stressors.

The gastrointestinal mucosa is among the most rapidly renewing tissues in the body — the intestinal epithelium replaces itself completely every 3–5 days under physiologically optimal conditions. However, this rapid renewal depends on the proliferative and differentiation capacity of intestinal stem cells (ISCs), the gene expression programs of which are subject to progressive epigenetic silencing with age. As ISC function declines, renewal rate slows, mucosal architecture degrades (reduced villus height, impaired tight junction integrity, diminished mucus layer quality), and the resulting barrier dysfunction drives the chronic low-grade intestinal inflammation that underlies the increasing GI dysfunction, food sensitivities, and systemic inflammatory burden characteristic of gut aging.

Ovagen penetrates the nuclei of GI epithelial cells and intestinal stem cells, binding to histone-DNA complexes and reactivating the transcription of genes that maintain mucosal renewal and integrity: tight junction proteins (claudins, occludins), mucin genes for mucus layer production, antimicrobial peptides for innate luminal immune defense, growth factors supporting epithelial proliferation, and anti-apoptotic factors maintaining stem cell viability. The restoration of these programs rebuilds the mucosal barrier from the epigenetic level up.

The simultaneous hepatic activity of Ovagen complements its GI effects through a functional axis of great importance: the gut-liver axis. The liver receives 70% of its blood supply from the portal circulation draining the intestines — meaning that anything crossing the intestinal barrier (bacterial products, dietary metabolites, inflammatory mediators) passes directly to the liver first. Maintaining intestinal barrier integrity (Ovagen\'s GI action) directly reduces the chronic portal endotoxemia (bacterial LPS translocation through leaky gut) that drives hepatic inflammation, steatosis, and fibrosis. Ovagen\'s dual activity addresses both sides of this critical axis.

Animal studies demonstrate that Ovagen treatment improves intestinal mucosal histology (better preserved villi, intact tight junctions, adequate goblet cell density), reduces intestinal permeability markers, and improves hepatic function parameters simultaneously — the expected outcome of a dual GI/hepatic bioregulator. Human clinical work in the Khavinson group has examined Ovagen in aging populations with GI dysfunction, individuals with hepato-biliary disorders, and prevention-oriented protocols. Results include improved GI symptom scores, better tolerability of dietary variety, and normalized liver enzyme panels in follow-up assessments.

Protocol: 1–2mg/day for 10 consecutive days, subcutaneous or intranasal, repeated 2–4 times per year. Ovagen pairs naturally with Livagen (liver-specific) for hepatic coverage reinforcement, and with BPC-157 (GI mucosal healing via growth factor mechanisms) for multi-mechanism gut repair. Pancragen adds pancreatic bioregulator coverage for a complete upper GI system restoration stack.`''',
    new_benefits='''[
      'Dual-target bioregulator — simultaneously activates gene expression in GI epithelium and hepatocytes',
      'Reactivates tight junction and mucin gene expression — rebuilds intestinal barrier from epigenetic level',
      'Supports intestinal stem cell function — maintains the proliferative capacity driving mucosal self-renewal',
      'Reduces intestinal permeability — closes leaky gut at the gene expression level',
      'Addresses gut-liver axis: intestinal barrier restoration reduces portal endotoxemia driving hepatic inflammation',
      'Hepatic gene expression activation complements GI effects — comprehensive hepato-intestinal coverage',
      'Improved GI symptom scores in aging populations in human clinical work',
      'Better preserved villus architecture and goblet cell density in animal histology',
      'Combines with BPC-157 for epigenetic + growth factor multi-mechanism GI mucosal healing',
      'Pairs with Livagen and Pancragen for complete hepato-pancreatic-GI bioregulator stack',
    ]''',
    new_protocol='''`**Standard Ovagen Course:**
- Dose: 1–2mg/day
- Route: Subcutaneous injection or intranasal
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**GI/Hepatic Bioregulator Stack:**
- Ovagen + Livagen: reinforced hepatic + GI coverage (Ovagen has dual activity, Livagen adds hepatic depth)
- Ovagen + BPC-157: epigenetic GI restoration + growth factor-mediated mucosal healing — comprehensive gut repair
- Full stack: Ovagen + Livagen + Pancragen + BPC-157 for complete GI/hepatic/pancreatic restoration

**Timing:**
- Morning administration preferred for GI mucosal activity (gut epithelial renewal is most active during fasting)
- No specific food restriction for bioregulator peptides

**Monitoring:**
- Intestinal permeability markers (zonulin, lactulose/mannitol ratio) at baseline and follow-up
- Liver enzyme panel (ALT, AST, GGT) for hepatic outcome tracking
- GI symptom scores as subjective functional measure`''',
    new_highlights='''[
      { title: 'Dual GI and Hepatic Bioregulator', body: 'Ovagen is unique in the Khavinson series for targeting both GI mucosal cells and hepatocytes — addressing the gut-liver axis from both ends simultaneously, providing bioregulator coverage no single-organ peptide can replicate.' },
      { title: 'Gut-Liver Axis Restoration', body: 'Intestinal barrier restoration (Ovagen GI action) reduces the bacterial LPS translocation through leaky gut that drives hepatic inflammation and steatosis — an indirect hepatoprotective effect that compounds with Ovagen\'s direct hepatic gene activation.' },
      { title: 'Epigenetic + Growth Factor GI Synergy', body: 'Ovagen reactivates the transcriptional programs of intestinal stem cells; BPC-157 drives growth factor signaling that accelerates mucosal healing — together they address gut repair at both the genetic program and growth signal levels.' },
    ]'''
)

# ── 10. Pancragen 20mg ────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='pancragen-20mg',
    next_slug='prostamax-20mg',
    new_full_desc='''`Pancragen is a bioregulator peptide targeting pancreatic tissue — the organ responsible for insulin and glucagon secretion (endocrine pancreas via Langerhans islets) and digestive enzyme production (exocrine pancreas via acinar cells). Part of the Khavinson series of tissue-specific short peptides, Pancragen activates gene expression in both endocrine and exocrine pancreatic cells that progressively silences with age, chronic metabolic stress, and the cumulative damage of decades of high glucose and inflammatory exposure.

The pancreas occupies a uniquely central position in metabolic health: its beta cells produce insulin, the master anabolic hormone governing glucose uptake and storage throughout the body, while its exocrine tissue produces the complete digestive enzyme arsenal required to extract nutrients from every macronutrient class. Beta cell dysfunction — reduced insulin secretory capacity and/or reduced beta cell mass — is the defining pathophysiology of both type 1 and type 2 diabetes, with progressive beta cell failure driving the metabolic deterioration that characterizes T2D progression. Exocrine pancreatic decline, though less studied, results in progressive digestive insufficiency — fat malabsorption, protein maldigestion, and nutritional deficiencies that contribute to sarcopenia and systemic metabolic deterioration with aging.

Pancragen\'s tissue-specific peptide sequence penetrates pancreatic cell nuclei and reactivates age-silenced gene expression in both cell types. In beta cells, target genes include PDX1 (the master transcription factor for beta cell identity and insulin gene expression), insulin gene itself, glucokinase (the glucose-sensing enzyme that couples insulin secretion to blood glucose levels), and GLP-1 receptor (enabling beta cells to respond appropriately to incretin signals). In acinar cells, Pancragen activates genes for digestive enzymes (lipase, amylase, trypsinogen, chymotrypsinogen) and the ductal cell proteins required for bicarbonate secretion and enzyme transport to the duodenum.

Khavinson group research demonstrates Pancragen effects in aging animal pancreatic tissue: improved insulin secretory response to glucose challenge, better preserved islet architecture and beta cell morphology, increased exocrine enzyme content, and reduced pancreatic oxidative stress markers. In diabetic animal models with impaired insulin secretion, Pancragen treatment improved glucose tolerance — an outcome consistent with the hypothesized restoration of beta cell functional gene expression. Human clinical applications have been studied in elderly patients with impaired glucose tolerance, individuals with early metabolic syndrome, and preventive protocols for those with high T2D risk.

The preventive dimension of Pancragen is particularly compelling: the progressive epigenetic silencing of pancreatic gene expression begins decades before T2D is diagnosed, during the period of "compensated insulin resistance" where beta cells are overworked and accumulating damage. Intervening with epigenetic restoration during this pre-diabetic phase — preserving beta cell mass and secretory capacity before irreversible cell loss — represents a more effective strategy than attempting restoration after significant beta cell loss has occurred.

Protocol: 2mg/day for 10 consecutive days, administered subcutaneously or intranasally, repeated 2–4 times per year. Particularly relevant in combination with Livagen and Ovagen for complete hepato-pancreato-intestinal bioregulator coverage — the three organs most central to metabolic regulation acting in concert when all their bioregulators are cycling simultaneously.`''',
    new_benefits='''[
      'Epigenetic reactivation of beta cell gene expression — PDX1, insulin, glucokinase, GLP-1 receptor',
      'Improved insulin secretory response to glucose challenge in aging animal models',
      'Preserved islet of Langerhans architecture and beta cell morphology in pancreatic histology',
      'Exocrine pancreatic enzyme expression restoration — lipase, amylase, proteases for digestive sufficiency',
      'Relevant for pre-diabetic epigenetic intervention — restoring beta cell capacity before irreversible loss',
      'Improved glucose tolerance in diabetic animal models following Pancragen treatment',
      'Reduced pancreatic oxidative stress — protects beta cells from ROS damage that drives dysfunction',
      'Both endocrine and exocrine coverage — single bioregulator addresses all pancreatic cell types',
      'Preventive metabolic application: anti-aging intervention decades before T2D clinical presentation',
      'Synergistic with Livagen + Ovagen for complete metabolic organ bioregulator stack',
    ]''',
    new_protocol='''`**Standard Pancragen Course:**
- Dose: 2mg/day
- Route: Subcutaneous injection or intranasal
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Metabolic Bioregulator Stack:**
- Pancragen + Livagen + Ovagen: complete hepato-pancreato-intestinal bioregulator coverage
- Add MOTS-c for AMPK-mediated mitochondrial metabolic support alongside epigenetic pancreatic restoration

**Preventive vs. Therapeutic Application:**
- Preventive (pre-T2D, impaired glucose tolerance): 2 courses/year starting in 40s
- Therapeutic (established metabolic dysfunction): 4 courses/year + metabolic monitoring
- Not a replacement for insulin or GLP-1 agonist therapy — complementary epigenetic support

**Monitoring:**
- HbA1c and fasting glucose at baseline and 6-month intervals
- HOMA-IR for insulin resistance tracking
- Pancreatic enzyme activity (fecal elastase) for exocrine function assessment

**Timing:**
- No specific meal timing requirement for peptide bioregulators
- Morning administration with breakfast (associates bioregulator activity with metabolic demand)`''',
    new_highlights='''[
      { title: 'Dual Endocrine and Exocrine Restoration', body: 'Pancragen activates gene expression in both insulin-producing beta cells and digestive enzyme-producing acinar cells — addressing both the metabolic and nutritional dimensions of pancreatic aging with a single bioregulator.' },
      { title: 'Pre-Diabetic Epigenetic Prevention', body: 'Beta cell epigenetic silencing precedes T2D diagnosis by decades. Pancragen targets this pre-clinical phase — preserving beta cell secretory capacity and mass before the irreversible cell loss that defines established diabetes makes restoration increasingly difficult.' },
      { title: 'Metabolic Organ Trio', body: 'Combined with Livagen (liver) and Ovagen (GI/liver), Pancragen completes the bioregulator coverage of the three metabolic organs most central to glucose, lipid, and nutrient metabolism — providing a coordinated systemic metabolic epigenetic restoration protocol.' },
    ]'''
)


# ── Save ──────────────────────────────────────────────────────────────────────
open(path, 'w', encoding='utf-8').write(content)
new_size = len(content)
print(f"\nAll 10 products patched.")
print(f"File size change: {original_size} → {new_size} chars (+{new_size - original_size})")
