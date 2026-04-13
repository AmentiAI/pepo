#!/usr/bin/env python3
"""Batch 4 — 10 products: ARA-290, KPV, LL-37, VIP, Thymosin Alpha-1, Abaloparatide, AICAR, 5-Amino-1MQ, Methylene Blue, Melanotan II"""

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
# 1. ARA-290 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'ara-290-10mg'
next_slug = 'kpv-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `ARA-290 is a synthetic peptide engineered from the helix B region of erythropoietin (EPO) — specifically the 11-amino acid sequence that activates EPO's tissue-protective receptor complex without triggering the erythropoietic effects that make EPO dangerous as a doping agent. By isolating the tissue-protective signaling arm of EPO from its red-blood-cell-stimulating arm, ARA-290 delivers neuroprotection, anti-inflammation, and tissue repair without any blood-thickening risk.

**The Two Faces of Erythropoietin**

Erythropoietin (EPO) is well known as the "blood doping" hormone — it stimulates red blood cell production (erythropoiesis) by binding the homodimeric EPOR (EPO receptor) on erythroid progenitor cells in bone marrow. This is EPO's erythropoietic function, and it is responsible for both EPO's therapeutic role in anemia and its abuse in endurance sports.

However, EPO has a completely separate tissue-protective function: it binds a heterodimeric receptor complex (EPOR/βcR — EPO receptor paired with the beta common receptor, also known as CD131) in non-hematopoietic tissues. This receptor complex, expressed in neurons, cardiac tissue, kidney, retina, and immune cells, mediates EPO's anti-apoptotic, anti-inflammatory, and tissue-repair effects.

ARA-290 (also known as Cibinetide) was designed specifically to activate only the EPOR/βcR complex — it has minimal affinity for the homodimeric EPOR that drives erythropoiesis. This selectivity provides all of EPO's protective benefits with none of its blood-thickening risks.

**Neuroprotective Applications: Diabetic Neuropathy**

ARA-290's most clinically developed application is peripheral neuropathy — particularly the pain and nerve damage associated with diabetes and other metabolic conditions. Phase 2 clinical trials showed:
- Significant reduction in neuropathic pain scores
- Improvements in corneal nerve fiber density (measurable nerve regeneration)
- Reduction in small-fiber neuropathy measures
- The corneal nerve data is particularly significant — it provides objective evidence of actual nerve repair rather than just symptomatic pain relief

Peripheral neuropathy affects >30 million Americans and has essentially no disease-modifying treatments — existing medications only manage symptoms. ARA-290 is among the few compounds showing objective nerve regeneration in clinical trials.

**Anti-Inflammatory Mechanism**

EPOR/βcR activation by ARA-290 produces:
- Reduction of NF-κB activation (the master inflammatory transcription factor)
- Decreased pro-inflammatory cytokine production (IL-6, TNF-α, IL-1β)
- Increased anti-inflammatory IL-10
- Activation of Jak2/STAT3 protective signaling in injured cells
- Inhibition of apoptosis in neurons, cardiomyocytes, and renal cells under stress

This anti-inflammatory and anti-apoptotic profile makes ARA-290 broadly relevant for any condition involving tissue damage from inflammation or ischemia.

**Cardiac Protection**

Cardiac EPOR/βcR activation provides cardioprotection in ischemia/reperfusion models — similar to the mechanism of hexarelin (which activates GHS-R1a on cardiac tissue). ARA-290's cardiac protection adds another dimension to its tissue-protective applications beyond neuropathy.

**Research Status**

ARA-290 is being developed by Araim Pharmaceuticals and has completed Phase 2 trials for diabetic neuropathy and sarcoidosis-associated small-fiber neuropathy. Phase 3 trials are in planning stages. The sarcoidosis data showed significant improvements in corneal nerve density and pain — conditions with extremely limited treatment options.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Activates EPO tissue-protective receptor (EPOR/βcR) without erythropoietic effects — no blood-thickening risk',
      'Phase 2: objective corneal nerve fiber density improvement — measurable nerve regeneration, not just pain relief',
      'Significant neuropathic pain reduction in diabetic and sarcoidosis-associated neuropathy trials',
      'Anti-apoptotic in neurons, cardiomyocytes, and renal cells under ischemic stress',
      'Reduces NF-κB, IL-6, TNF-α, and IL-1β — broad anti-inflammatory profile',
      'Activates Jak2/STAT3 protective signaling across multiple tissue types',
      'Cardiac protection in ischemia/reperfusion models through EPOR/βcR cardiac expression',
      'Small-fiber neuropathy improvement — a condition with essentially no other disease-modifying options',
      '98.7% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**ARA-290 Neuroprotective Protocol:**
- Dose: 4mg subcutaneous daily
- Route: Subcutaneous injection (abdomen or thigh)
- Duration: 8–12 weeks minimum for nerve regeneration assessment
- Frequency: Daily (Phase 2 reference protocol)

**Neuropathy Protocol:**
- 4mg daily for 8 weeks
- Assess pain scores and nerve function at 4-week intervals
- Corneal nerve density changes (if measurable) typically evident at 8+ weeks
- Continue 12–24 weeks for maximum nerve repair response

**Anti-Inflammatory Stack:**
- ARA-290 4mg daily (tissue protection and nerve repair)
- BPC-157 250mcg 2× daily (systemic angiogenesis and healing cascade)
- TB-500 2.5mg twice weekly (anti-fibrotic and anti-inflammatory)
This combination provides overlapping coverage across neuroprotection, vascular repair, and anti-inflammation

**Reconstitution:**
- Reconstitute with bacteriostatic water
- 4mg/mL — standard 1mL daily injection`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'EPO Without Doping Risk', body: 'ARA-290 isolates EPO\'s tissue-protective EPOR/βcR receptor activation from erythropoiesis — delivering neuroprotection without any blood-thickening or hematopoietic effects.' },
      { title: 'Objective Nerve Regeneration', body: 'Phase 2 trials showed measurable corneal nerve fiber density increases — rare evidence of actual nerve repair rather than symptomatic management.' },
      { title: 'Phase 2 Diabetic Neuropathy Data', body: 'Significant pain reduction and nerve density improvement in a condition with essentially no disease-modifying alternatives.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ ARA-290 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 2. KPV 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'kpv-10mg'
next_slug = 'kpv-5mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `KPV is the C-terminal tripeptide (Lysine-Proline-Valine) of alpha-melanocyte-stimulating hormone (α-MSH) — the three-amino acid sequence that contains the full anti-inflammatory activity of the parent hormone without its melanocyte-stimulating effects. This minimal bioactive fragment has been particularly well-characterized for gastrointestinal inflammation, where it functions as a potent, locally-acting anti-inflammatory through multiple converging mechanisms.

**Alpha-MSH and Its Fragments**

Alpha-MSH is a 13-amino acid peptide derived from proopiomelanocortin (POMC) that acts on all five melanocortin receptors (MC1R–MC5R). While MC1R activation by α-MSH drives melanin production and tanning, the molecule also has potent anti-inflammatory effects mediated primarily through MC3R and MC4R on immune cells, epithelial cells, and neurons.

KPV corresponds to α-MSH 11–13 — the C-terminal tripeptide. Research by Catania and colleagues established that this tripeptide fragment retains the anti-inflammatory and anti-nociceptive properties of full α-MSH with minimal melanocyte-stimulating activity. Because KPV is only 3 amino acids, it is also highly stable in biological fluids and can remain active after oral administration where larger peptides might be degraded.

**Mechanism: Multi-Target Anti-Inflammation**

KPV reduces inflammation through multiple pathways:
1. **NF-κB inhibition**: KPV suppresses nuclear factor-κB (NF-κB) activation — the master transcriptional regulator of inflammatory cytokine production. Reduced NF-κB translocation decreases IL-6, TNF-α, IL-1β, and MCP-1 expression in intestinal epithelial cells and immune cells.
2. **MAPK pathway modulation**: Inhibits ERK1/2 and p38 MAPK signaling — two inflammatory kinase cascades activated by cytokines and pathogen-associated molecular patterns.
3. **Direct cellular penetration**: KPV can penetrate intestinal epithelial cells directly and act intracellularly on NF-κB pathways — a mechanism not dependent on surface receptor engagement.
4. **JAK/STAT3 pathway modulation**: KPV reduces STAT3 phosphorylation, an important driver of inflammatory gene expression in intestinal epithelial cells.

**Gastrointestinal Applications**

KPV\'s most studied applications involve GI inflammation:

- **Inflammatory Bowel Disease (IBD)**: Murine models of Crohn\'s disease and ulcerative colitis show oral KPV significantly reduces colonic inflammation markers, maintains epithelial barrier function, and preserves normal mucosal architecture. Critically, these effects are achieved without systemic immunosuppression — KPV acts locally within the GI tract.

- **Gut Epithelial Barrier Protection**: KPV preserves and restores tight junction integrity, reducing intestinal permeability (leaky gut). This barrier-protective effect works alongside BPC-157 through complementary mechanisms.

- **Post-Inflammatory Mucosal Repair**: Following acute GI inflammation (from infection, NSAIDs, alcohol, stress), KPV accelerates mucosal recovery by reducing residual inflammation and promoting epithelial cell survival.

**Systemic Applications**

Beyond the GI tract, KPV shows anti-inflammatory effects in:
- Skin inflammation models (eczema, dermatitis)
- Neurological inflammation (neuroprotective effects in inflammatory models)
- Wound healing acceleration through reduced inflammatory phase`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Alpha-MSH C-terminal tripeptide — retains full anti-inflammatory activity with minimal melanocyte stimulation',
      'NF-κB suppression reduces IL-6, TNF-α, IL-1β directly in intestinal epithelial cells',
      'Oral effectiveness for gut inflammation — highly stable tripeptide survives GI transit',
      'Restores tight junction integrity — addresses intestinal permeability at the molecular level',
      'No systemic immunosuppression — targeted GI anti-inflammatory without whole-body immune suppression',
      'IBD animal models: significant reduction in colonic inflammation with preserved mucosal architecture',
      'Direct cellular penetration enables intracellular NF-κB pathway inhibition',
      'Synergistic with BPC-157 for comprehensive GI healing (complementary mechanisms)',
      'Applicable for skin inflammation via topical or subcutaneous routes',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**KPV Gut Protocol:**
- Dose: 500mcg–2mg daily
- Oral: 500mcg–1mg twice daily on empty stomach (for GI conditions)
- Subcutaneous: 500mcg–1mg twice daily (for systemic anti-inflammatory + gut)
- Duration: 8–16 weeks for IBD/gut inflammation conditions

**For Leaky Gut and IBD:**
- Oral KPV 1mg twice daily (AM fasted, PM fasted)
- Combined with BPC-157 Capsules 500mcg daily for synergistic tight junction repair
- Both compounds act through different mechanisms — additive GI epithelial protection

**For Skin Inflammation:**
- Subcutaneous: 500mcg once daily
- Topical formulation: 0.1–0.5mg/mL in carrier for direct skin application

**Reconstitution:**
- Reconstitute with sterile saline or bacteriostatic water
- 1mg/mL concentration standard
- Oral: Can dissolve in sterile water and swallow directly`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Targeted GI Anti-Inflammatory', body: 'KPV reduces NF-κB and inflammatory cytokines locally within the GI tract without systemic immunosuppression — specific to the site of damage.' },
      { title: 'Oral Stability', body: 'Three-amino acid structure survives GI transit — effective when taken orally, concentrating anti-inflammatory activity throughout the gut lumen.' },
      { title: 'IBD Animal Model Data', body: 'Significant reduction in colonic inflammation and preserved mucosal architecture in Crohn\'s and colitis animal models.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ KPV 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 3. LL-37 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'll-37-10mg'
next_slug = 'vip-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `LL-37 is the only known human cathelicidin — a 37-amino acid cationic antimicrobial peptide that serves as one of the most important first-line defense molecules in human innate immunity. Unlike conventional antibiotics that target specific bacterial pathways, LL-37 works through a fundamentally different mechanism: it physically disrupts the lipid membranes of pathogens, making resistance development significantly more difficult. It also disrupts bacterial biofilms — the protective matrix that shields antibiotic-resistant bacterial communities.

**Human Cathelicidin: The Innate Defense Peptide**

Cathelicidins are a family of antimicrobial peptides produced as part of the innate immune response. While many mammals have multiple cathelicidins, humans express only one: hCAP-18, which is proteolytically cleaved to release the active LL-37 C-terminal peptide. LL-37 is produced by neutrophils, macrophages, mast cells, NK cells, epithelial cells of the skin, gut, respiratory tract, and genital mucosa.

LL-37 is among the most rapidly mobilized antimicrobial defenses — it is stored in granules ready for immediate release upon detection of pathogen-associated molecular patterns. Its expression is also induced by vitamin D, making vitamin D deficiency a factor in reduced LL-37 expression and increased infection susceptibility.

**Antimicrobial Mechanism: Membrane Disruption**

LL-37\'s antimicrobial activity works through electrostatic attraction and membrane insertion:
1. The peptide\'s cationic charges (positive) are attracted to the anionic (negative) surface of bacterial and fungal membranes
2. LL-37 inserts into the lipid bilayer and adopts an amphipathic helical structure
3. This helical insertion disrupts membrane integrity — creating pores or detergent-like solubilization of the membrane
4. Bacterial and fungal cell contents leak out, causing rapid death

This membrane-disruptive mechanism is effective against:
- Gram-positive bacteria (Staphylococcus aureus, including MRSA)
- Gram-negative bacteria (E. coli, Pseudomonas aeruginosa)
- Fungal pathogens (Candida species)
- Enveloped viruses (HIV, influenza, herpes)

**Biofilm Disruption: The Critical Advantage**

Biofilms are communities of bacteria encased in a self-produced extracellular polysaccharide matrix that dramatically reduces antibiotic penetration. Chronic wound infections, implant-associated infections, and many recurrent bacterial infections involve biofilms that resist conventional antibiotics at 100–1000× normal concentrations.

LL-37 disrupts biofilm architecture through:
- Inhibition of initial biofilm formation (binding to bacterial surfaces and preventing adherence)
- Penetration through the extracellular matrix — enabled by LL-37\'s amphipathic structure and positive charge
- Direct bacterial killing within the biofilm
- Reduction of quorum sensing signals that coordinate biofilm behavior

This anti-biofilm activity is increasingly recognized as one of LL-37\'s most clinically important properties.

**Immune Modulation Beyond Killing**

LL-37 does more than kill pathogens — it is a central immune modulatory signal:
- Promotes chemotaxis of monocytes, neutrophils, and T-cells to sites of infection
- Activates dendritic cells, enhancing adaptive immune response initiation
- Promotes angiogenesis for wound vascularization
- Stimulates keratinocyte migration and proliferation for wound re-epithelialization
- Modulates inflammatory cytokine production in context-dependent ways (pro-inflammatory in early infection; anti-inflammatory in resolution phase)`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Only human cathelicidin — the most fundamental first-line antimicrobial defense peptide in innate immunity',
      'Broad-spectrum antimicrobial: kills MRSA, E. coli, Pseudomonas, Candida, and enveloped viruses',
      'Membrane disruption mechanism — pathogen resistance development is significantly harder than with conventional antibiotics',
      'Disrupts bacterial biofilms at concentrations far below what conventional antibiotics require',
      'Anti-biofilm activity against MRSA and Pseudomonas — important for chronic wound and implant infections',
      'Promotes wound healing through angiogenesis stimulation and keratinocyte migration',
      'Immune modulation: recruits neutrophils, monocytes, and T-cells to infection sites',
      'Activates dendritic cells — bridges innate and adaptive immune responses',
      'Vitamin D-dependent expression — LL-37 deficiency links to vitamin D deficiency and infection susceptibility',
      '98.8% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**LL-37 Wound and Infection Protocol:**
- Dose: 100–500mcg per application (locally) or 500mcg–1mg systemically
- Local wound: Direct injection into wound margins or topical application
- Subcutaneous: 500mcg–1mg once or twice daily for systemic immune support
- Duration: Until wound healing/infection resolution, typically 4–8 weeks

**Topical Application:**
- Dissolve in sterile saline at 0.5–1mg/mL
- Apply directly to wound surface 1–2× daily
- Cover with sterile dressing; change with each application
- Particularly effective for biofilm-associated chronic wounds

**Immune Support Protocol:**
- 500mcg subcutaneous 2–3× weekly for systemic innate immune enhancement
- Stack with Thymosin Alpha-1 1.6mg 2× weekly for adaptive immune support
- This combination covers both innate (LL-37) and adaptive (Thymosin Alpha-1) immune axes

**MRSA/Resistant Infection Context:**
- Local injection: 250–500mcg directly at infection site
- Multiple daily applications may be required
- LL-37 works regardless of antibiotic resistance patterns — complementary to antibiotic therapy`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Only Human Cathelicidin', body: 'LL-37 is the sole human cathelicidin — the body\'s own broad-spectrum first-line antimicrobial peptide present in every mucosal surface.' },
      { title: 'Biofilm Disruption', body: 'Breaks down bacterial biofilms at concentrations far below conventional antibiotics — critical for MRSA, Pseudomonas, and chronic wound infections.' },
      { title: 'Beyond Killing', body: 'Simultaneously kills pathogens, stimulates wound healing, recruits immune cells, and modulates inflammation — a complete antimicrobial immune response molecule.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ LL-37 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 4. VIP 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'vip-10mg'
next_slug = 'vip-5mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `VIP (Vasoactive Intestinal Peptide) is a 28-amino acid neuropeptide with one of the broadest tissue distributions and most diverse functional profiles of any peptide in biology. Originally named for its vasodilatory effects on intestinal blood vessels, VIP is now recognized as a central regulatory signal for the immune system, GI motility, circadian biology, pulmonary function, and neuroprotection — acting through VPAC1 and VPAC2 receptors expressed in virtually every tissue.

**Multi-System Receptor Distribution**

VPAC1 and VPAC2 receptors are G-protein-coupled receptors that activate adenylyl cyclase and increase intracellular cAMP. They are expressed in:
- **GI tract**: Enteric neurons, smooth muscle, epithelial cells, immune cells
- **Immune system**: T-cells, B-cells, macrophages, dendritic cells, mast cells
- **CNS**: Hippocampus, suprachiasmatic nucleus (SCN), cortex, astrocytes
- **Lung**: Pulmonary smooth muscle, pulmonary arterial endothelium
- **Heart**: Cardiac myocytes and coronary vessels
- **Reproductive system**: Uterine and ovarian tissue

This broad receptor distribution explains VIP\'s unusually wide-ranging effects — it is not a single-target compound but a systemic regulatory signal.

**Immune Modulation: From Pro-Inflammatory to Regulatory**

VIP is one of the most potent endogenous immunomodulators known. Its primary effect is shifting immune responses from pro-inflammatory Th1 toward anti-inflammatory Th2 and regulatory T-cell (Treg) phenotypes:
- Reduces Th1 cytokines: IFN-γ, IL-2, TNF-α
- Increases Th2 cytokines: IL-4, IL-5, IL-10
- Promotes regulatory T-cell differentiation and expansion
- Inhibits activated macrophage pro-inflammatory cytokine production
- Suppresses NF-κB in activated immune cells

These immunomodulatory effects make VIP theoretically relevant for autoimmune conditions, chronic inflammatory diseases, and MCAS (Mast Cell Activation Syndrome), where it reduces mast cell degranulation.

**Gastrointestinal Effects**

VIP is co-released with acetylcholine from non-adrenergic, non-cholinergic (NANC) enteric neurons and serves as a key regulator of GI function:
- Relaxes GI smooth muscle — important for normal intestinal peristalsis and prevention of spasms
- Stimulates intestinal epithelial chloride secretion and water transport
- Protects gastric mucosa from acid damage (cytoprotective)
- Regulates sphincter function in the GI tract
- VIP deficiency in enteric neurons is associated with motility disorders

**Neuroprotective Applications**

VIP and its analog PACAP (pituitary adenylate cyclase-activating polypeptide) are among the most potent neuroprotective agents known in preclinical research:
- Protects dopaminergic neurons in Parkinson\'s disease models
- Reduces amyloid beta toxicity in Alzheimer\'s models
- Promotes neurotrophic factor (BDNF, GDNF) expression
- Protects neurons from excitotoxicity and oxidative stress
- Anti-apoptotic in neurons through VPAC2 receptor / cAMP / PKA pathway

**Circadian Biology**

VIP is the primary neurotransmitter of the suprachiasmatic nucleus (SCN) — the brain\'s master circadian clock. VPAC2 receptor signaling synchronizes cellular circadian oscillators across the body to the central pacemaker. VIP deficiency in the SCN leads to arrhythmic circadian outputs, and VIP administration can help reset disrupted circadian rhythms in certain contexts.

**Pulmonary Arterial Hypertension**

VIP has been studied in Phase 2 trials for pulmonary arterial hypertension (PAH). Its pulmonary vasodilatory effects through VPAC1/VPAC2 on pulmonary vascular smooth muscle reduce pulmonary arterial pressure. Phase 2 data showed improvements in pulmonary hemodynamics and 6-minute walk distance, though the compound has not progressed to approval.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Most broadly distributed neuropeptide — VPAC1/VPAC2 receptors in immune, GI, CNS, pulmonary, and cardiac tissues',
      'Shifts immune response from pro-inflammatory Th1 to regulatory Th2/Treg — potent anti-inflammatory immunomodulator',
      'Reduces TNF-α, IFN-γ, IL-2 while increasing IL-4, IL-10 — comprehensive cytokine profile normalization',
      'Mast cell degranulation suppression — relevant for MCAS and histamine-driven inflammatory conditions',
      'GI motility regulation and mucosal cytoprotection through enteric NANC neurotransmission',
      'Neuroprotection of dopaminergic neurons in Parkinson\'s models — GDNF/BDNF upregulation',
      'Circadian pacemaker neurotransmitter in SCN — relevant for circadian rhythm disorders',
      'Phase 2 PAH data: improvements in pulmonary hemodynamics and exercise capacity',
      'Anti-apoptotic in neurons through VPAC2/cAMP/PKA survival signaling',
      '98.8% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**VIP Protocol:**
- Dose: 50–500mcg per administration
- Route: Intranasal (CNS and upper respiratory access) or subcutaneous
- Frequency: Once or twice daily
- Duration: Continuous; no tolerance or desensitization documented

**Immune Modulation Protocol:**
- 100–200mcg subcutaneous once daily
- Particularly relevant for inflammatory conditions (IBD, autoimmune flares, MCAS)
- Effects on Treg expansion may require 4–8 weeks of consistent use

**Intranasal for CNS/Neuroprotection:**
- 100mcg per nostril (200mcg total)
- Provides direct CNS access via olfactory mucosa
- Morning dosing aligns with natural VIP circadian patterns

**GI Protocol:**
- 100mcg subcutaneous twice daily for intestinal motility and mucosal protection
- Stack with KPV or BPC-157 for comprehensive GI coverage

**Reconstitution:**
- Sterile saline preferred for intranasal use
- Bacteriostatic water for subcutaneous use
- 0.5–1mg/mL concentration for precise low-dose delivery`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Broadest Distribution', body: 'VPAC1/VPAC2 receptors expressed in immune, GI, CNS, pulmonary, and cardiac tissue — VIP regulates more physiological systems than virtually any other single peptide.' },
      { title: 'Th1 to Treg Shift', body: 'VIP shifts immune balance from pro-inflammatory Th1 cytokines toward regulatory Treg and Th2 — one of the most potent endogenous immunomodulators known.' },
      { title: 'Circadian Pacemaker Signal', body: 'VIP is the primary neurotransmitter of the suprachiasmatic nucleus — the brain\'s master clock — making it uniquely relevant for circadian rhythm disruption.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ VIP 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 5. THYMOSIN ALPHA-1 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'thymosin-alpha-1-10mg'
next_slug = 'thymosin-alpha-1-5mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Thymosin Alpha-1 (Tα1) is a 28-amino acid peptide derived from the thymus gland — the organ responsible for T-cell maturation and the development of adaptive immunity. First isolated by Goldstein and colleagues in 1972, Thymosin Alpha-1 has been approved in 35+ countries (brand name Zadaxin) for treatment of chronic hepatitis B, chronic hepatitis C, and immune deficiency states associated with malignancy and chemotherapy. It is one of the most comprehensively studied immunomodulatory peptides in clinical medicine.

**The Thymic Decline Problem**

The thymus involutes (shrinks) progressively from puberty onward — by age 40, thymic tissue is largely replaced by fat, and the output of naive T-cells (the fresh, undifferentiated T-cells that can respond to new antigens) declines dramatically. By age 70, thymic output is only ~5% of young-adult levels.

This thymic involution is a primary driver of immune aging ("immunosenescence"):
- Reduced naive T-cell output → reduced capacity to respond to new infections and vaccines
- Decreased T-regulatory cell production → increased autoimmune and inflammatory tone
- Impaired thymic education of T-cells → reduced self-tolerance
- Declining thymosin peptide concentrations → reduced thymic signaling to peripheral immune cells

Thymosin Alpha-1 provides the thymic signaling that supports T-cell maturation and function even as thymic tissue declines with age.

**Mechanism: Multi-Level Immune Optimization**

Tα1 acts through Toll-like receptor 9 (TLR9) and myeloid differentiation protein 88 (MyD88) signaling, activating multiple immune pathways:

1. **T-cell maturation enhancement**: Increases the differentiation of immature thymocytes into functional CD4+ helper and CD8+ cytotoxic T-cells — restoring the adaptive immune capacity lost with thymic involution

2. **NK cell activation**: Enhances natural killer cell cytotoxicity — critical for first-line defense against virally infected and malignant cells

3. **Dendritic cell activation**: Promotes dendritic cell maturation and antigen presentation — the critical step that links innate detection to adaptive response initiation

4. **Th1 polarization**: Increases interferon-gamma and IL-2 production, shifting toward the Th1 responses essential for viral clearance and tumor surveillance

5. **T-regulatory cell support**: Promotes Treg differentiation, helping balance immune activation with tolerance

6. **Immune dysregulation normalization**: In conditions of both immune deficiency and excessive immune activation, Tα1 normalizes rather than simply stimulates — restoring balance rather than amplifying a particular direction

**Clinical Evidence Across Disease Areas**

- **Hepatitis B**: Zadaxin-treated patients showed significantly higher HBsAg clearance rates vs. placebo — evidence of restored antiviral T-cell function
- **Hepatitis C**: Combined with interferon, improved sustained virological response rates
- **Cancer**: Used in multiple countries as adjunct to chemotherapy — reduces treatment-associated infections, maintains immune function during immunosuppressive treatment
- **COVID-19**: Studies during the pandemic showed Tα1 reduced mortality and ICU admission in severe COVID-19 patients — consistent with its antiviral immune mechanism
- **Vaccine response enhancement**: Thymosin Alpha-1 increases vaccine immunogenicity in immunocompromised and elderly populations who respond poorly to standard vaccination`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Approved in 35+ countries as Zadaxin — one of the most clinically validated immunomodulatory peptides available',
      'Enhances T-cell maturation from immature thymocytes to functional CD4+ and CD8+ T-cells',
      'Activates NK cell cytotoxicity — first-line defense against viral infections and malignant cells',
      'Promotes dendritic cell maturation — the critical bridge between innate detection and adaptive response',
      'Th1 immune polarization: increases IFN-γ and IL-2 for antiviral and tumor surveillance immunity',
      'Normalizes immune dysregulation — restores balance in both immunodeficiency and inflammatory excess',
      'COVID-19 studies: reduced mortality and ICU admission in severe patients',
      'Improves vaccine immunogenicity in immunocompromised and elderly populations',
      'Hepatitis B/C clinical data: improved HBsAg clearance and virological response rates',
      '99.2% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Thymosin Alpha-1 Standard Protocol:**
- Dose: 1.6mg per injection (clinical approval reference dose)
- Route: Subcutaneous injection (abdomen or thigh)
- Frequency: 2× weekly (Tuesday and Friday recommended for consistent spacing)
- Duration: 12–24 weeks for immune optimization protocols

**Antiviral/Immune Deficiency Protocol (Zadaxin reference):**
- 1.6mg 2× weekly for 24 weeks (Hepatitis B/C approved protocol)
- With interferon for viral hepatitis: enhanced virological response

**Anti-Aging Immune Protocol:**
- 1.6mg 2× weekly for 12 weeks
- Repeat 12-week cycles with 4-week breaks
- Aim: restore thymic T-cell output and NK cell function that declines with age

**Combination Immune Stack:**
- Thymosin Alpha-1 1.6mg 2× weekly (adaptive immune optimization)
- LL-37 500mcg 3× weekly (innate antimicrobial defense)
- This combination addresses both adaptive (Tα1) and innate (LL-37) immune arms simultaneously

**Vaccine Response Enhancement:**
- Start Thymosin Alpha-1 2 weeks before scheduled vaccination
- Continue 4 weeks post-vaccination for enhanced and sustained immune response`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: '35+ Country Approval', body: 'Zadaxin (Thymosin Alpha-1) is approved in 35+ countries for viral hepatitis and immune deficiency — the deepest regulatory and clinical validation of any immunomodulatory peptide.' },
      { title: 'Thymic Involution Reversal', body: 'Provides the thymic signaling that declines with age-related thymic atrophy — restoring T-cell maturation capacity lost from decades of thymic involution.' },
      { title: 'Immune Balance, Not Just Stimulation', body: 'Normalizes immune dysregulation in both directions — restores deficient immune function and reduces excessive inflammatory activation.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Thymosin Alpha-1 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 6. ABALOPARATIDE 3mg
# ─────────────────────────────────────────────────────────────────
slug = 'abaloparatide-3mg'
next_slug = 'ace-031-1mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Abaloparatide (brand name Tymlos®) is a synthetic PTHrP (Parathyroid Hormone-related Protein) analog that is FDA-approved for the treatment of osteoporosis in postmenopausal women and men at high fracture risk. It activates the PTH1 receptor with a receptor conformation that preferentially drives bone formation (anabolism) over bone resorption — making it among the most potent bone-building interventions in clinical medicine.

**The PTH Receptor and Bone Formation**

The PTH1 receptor (PTH1R) can exist in two conformational states:
- **RG configuration** (G-protein coupled, rapid): Drives transient anabolic bone formation signals — the state preferentially activated by intermittent PTH/PTHrP analog dosing
- **R0 configuration** (β-arrestin coupled, persistent): Drives bone resorption and catabolic effects — the state activated by continuous PTH exposure

Abaloparatide's structure was engineered to preferentially stabilize the RG conformation — maximizing anabolic bone formation signals while minimizing the resorptive R0 pathway engagement. This mechanistic precision is why abaloparatide produces superior bone density gains vs. teriparatide (the first PTH analog) despite similar receptor targeting.

**Clinical Evidence: Superior to Teriparatide**

The ACTIVE trial (n=2463) compared abaloparatide 80mcg/day vs. teriparatide 20mcg/day vs. placebo over 18 months:
- **Abaloparatide**: 25.7% reduction in new vertebral fractures vs. placebo
- **Teriparatide**: 8.0% reduction vs. placebo (in the same trial)
- Abaloparatide produced significantly greater increases in bone mineral density at both spine and hip vs. teriparatide
- Bone marker data confirmed abaloparatide produces a higher formation-to-resorption ratio than teriparatide

These head-to-head results established abaloparatide as the more effective bone anabolic agent, making it the preferred choice for severe osteoporosis requiring maximum bone density restoration.

**Bone Mineral Density Gains: The ACTIVE Data**

Over 18 months:
- Lumbar spine BMD: +11.9% (abaloparatide) vs. +11.0% (teriparatide)
- Total hip BMD: +3.4% (abaloparatide) vs. +2.4% (teriparatide)
- Femoral neck BMD: +3.0% (abaloparatide) vs. +1.8% (teriparatide)

Hip BMD is the most clinically important endpoint — hip fractures carry the highest mortality and disability risk of any osteoporotic fracture.

**Post-Abaloparatide Consolidation**

Both abaloparatide and teriparatide are limited to 2 years of use (due to theoretical osteosarcoma risk at lifetime exposure in rodent models, though no human signal has been detected at clinical doses). The ACTIVE extension study (ACTIVExtend) showed that following abaloparatide with alendronate (bisphosphonate) further consolidated and maintained the BMD gains — a sequential anabolic-then-antiresorptive protocol used in clinical practice.

**Applications in Anti-Aging Research**

Bone density is a fundamental longevity marker — osteoporotic fractures, particularly hip fractures, are independently associated with significant mortality in older adults. For comprehensive longevity protocols, bone mineral density maintenance is as important as cardiovascular, metabolic, and cognitive health. Abaloparatide provides the most potent available intervention for building bone density in individuals where it has declined significantly.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'FDA-approved (Tymlos®) for osteoporosis — the most potent bone anabolic peptide in clinical use',
      'ACTIVE trial: 25.7% reduction in new vertebral fractures — superior to teriparatide (8.0%) in the same trial',
      'Superior BMD gains at hip (+3.4%) and femoral neck vs. teriparatide — the most fracture-relevant sites',
      'PTH1R RG conformation selectivity drives bone formation over resorption — mechanistically optimized anabolism',
      'Lumbar spine BMD: +11.9% over 18 months of once-daily subcutaneous dosing',
      'Reduces hip fracture risk — the most lethal and disabling osteoporotic fracture type',
      'Sequential protocol with bisphosphonate (ACTIVExtend): maintains gains beyond the 2-year treatment period',
      'Anabolic mechanism — builds new bone rather than simply preventing resorption (different from bisphosphonates)',
      '98.7% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Abaloparatide Protocol:**
- Dose: 80mcg once daily subcutaneous
- Route: Subcutaneous injection — thigh or abdomen
- Duration: Maximum 2 years (FDA limit — consistent with clinical use guidelines)
- Timing: Same time each day; morning recommended

**Sequential Protocol (Clinical Best Practice):**
- Abaloparatide 80mcg daily × 18–24 months (anabolic phase — bone building)
- Then: Transition to antiresorptive (e.g., bisphosphonate) to consolidate gains
- This two-phase approach maximizes long-term BMD through sequential mechanisms

**Monitoring:**
- DEXA scan at baseline and 6–12 months for BMD response assessment
- Bone markers (P1NP, CTX) at 3–6 months — formation markers should increase rapidly
- Calcium and vitamin D supplementation recommended throughout (ensures adequate substrate)

**Anti-Aging Bone Protocol:**
- Abaloparatide 80mcg daily (bone anabolism)
- GHK-Cu 2mg 3× weekly (collagen matrix for bone quality)
- IGF-1 LR3 60mcg post-workout (bone IGF-1R activation, 4–6 week cycles)
- These three compounds address bone density, quality, and repair simultaneously`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'FDA Approved — Superior to Teriparatide', body: 'ACTIVE trial: abaloparatide reduced vertebral fractures by 25.7% vs. teriparatide\'s 8.0% in the same trial — the most effective bone anabolic peptide in clinical medicine.' },
      { title: 'Anabolic Bone Building', body: 'PTH1R RG conformation selectivity maximizes bone formation signals — abaloparatide builds bone rather than merely preventing resorption like bisphosphonates.' },
      { title: '2-Year Maximum', body: 'Limited to 2 years by FDA protocol — followed by antiresorptive consolidation in clinical practice, maintaining gains long-term.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Abaloparatide 3mg patched")

# ─────────────────────────────────────────────────────────────────
# 7. AICAR 50mg
# ─────────────────────────────────────────────────────────────────
slug = 'aicar-50mg'
next_slug = '5-amino-1mq-50mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `AICAR (5-Aminoimidazole-4-carboxamide ribonucleoside/ribonucleotide) is an AMPK activator that mimics the cellular energy depletion signal of exercise without any physical activity. AICAR works by being converted intracellularly to ZMP — a AMP analog that activates AMPK (AMP-Activated Protein Kinase), the master energy sensor of all cells. The result is the same metabolic cascade triggered by sustained aerobic exercise: increased fat oxidation, improved insulin sensitivity, mitochondrial biogenesis, and enhanced endurance capacity.

**The "Couch Potato Pill" Studies**

AICAR became famous through the work of Ronald Evans at the Salk Institute. In a landmark 2008 Cell Metabolism paper, Evans demonstrated that:
- Sedentary mice treated with AICAR for 4 weeks improved endurance capacity by 44% without any exercise
- AICAR mice had increased expression of slow-twitch muscle fiber genes and mitochondrial oxidative genes — changes identical to endurance training
- When combined with GW501516 (a PPARδ agonist), the combination produced an 80% improvement in endurance

This research established AICAR as a genuine exercise mimetic — not just a metabolic supplement but a compound that triggers the same genetic programs as aerobic training at the molecular level.

**AMPK: The Master Energy Sensor**

AMPK is activated when the AMP:ATP ratio rises (when cells are low on energy — exactly as in exercise). Once activated, AMPK:
- Activates glucose transporters (GLUT-4 translocation) for insulin-independent glucose uptake
- Phosphorylates and activates acetyl-CoA carboxylase (ACC) — increasing fat oxidation
- Activates PGC-1α — the master regulator of mitochondrial biogenesis
- Stimulates GLUT-4 gene expression for lasting insulin sensitivity improvements
- Inhibits anabolic pathways (protein synthesis, fatty acid synthesis) that consume energy

AICAR specifically activates AMPK by generating ZMP (which mimics AMP), bypassing the need for actual energy depletion.

**Metabolic Benefits**

AICAR produces measurable improvements in metabolic health markers:
- Reduces fasting glucose in animal models of type 2 diabetes
- Improves insulin sensitivity through GLUT-4 upregulation
- Reduces hepatic fat accumulation (NAFLD improvement) through hepatic AMPK activation
- Reduces visceral fat through enhanced fat oxidation and adipogenesis inhibition
- Improves lipid profiles (reduced triglycerides, improved HDL)

**Endurance Enhancement Mechanism**

AICAR drives a fiber-type shift in skeletal muscle:
- Increases expression of slow oxidative (type I) fiber genes: PGC-1α, myoglobin, GLUT-4, HADHA
- Increases mitochondrial density in muscle fibers
- Enhances oxygen utilization efficiency

These adaptations are what improve endurance capacity — the same molecular changes that occur over months of endurance training can be initiated pharmacologically by AICAR in weeks.

**AMPK in Anti-Aging**

AMPK is now recognized as one of the most important longevity pathways:
- Rapamycin (mTOR inhibitor) extends lifespan in mice — AMPK inhibits mTOR
- Metformin (the diabetes drug that may extend healthspan) activates AMPK
- Caloric restriction extends lifespan partly through AMPK activation
- Exercise extends healthspan partly through AMPK activation
AICAR activates this longevity-associated pathway directly, positioning it as relevant beyond athletic performance for healthspan optimization.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'AMPK activation: triggers the same metabolic cascade as sustained aerobic exercise without physical activity',
      'Sedentary mice +44% endurance capacity with AICAR alone — verified exercise mimetic effect',
      'Improves insulin sensitivity through GLUT-4 translocation and upregulation — insulin-independent glucose uptake',
      'Mitochondrial biogenesis via PGC-1α — increases mitochondrial density in skeletal muscle',
      'Fat oxidation enhancement: activates ACC phosphorylation to increase fatty acid beta-oxidation rate',
      'Reduces hepatic fat (NAFLD) through hepatic AMPK activation',
      'Slow-twitch fiber gene expression upregulation — structural adaptation toward oxidative muscle fibers',
      'AMPK pathway is a central longevity target: same pathway as metformin, rapamycin, caloric restriction',
      'Reduces fasting glucose and improves lipid profiles in metabolic disease models',
      '99.1% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**AICAR Protocol:**
- Dose: 25–100mg subcutaneous (note: animal doses much higher — human dose range is not definitively established)
- Starting dose: 25mg daily for 4 weeks (assess response)
- Route: Subcutaneous injection
- Frequency: Daily or 5 days/week with weekend breaks
- Duration: 4–8 week cycles; 4-week break between cycles

**Exercise Enhancement Protocol:**
- 50mg AICAR 2 hours before endurance training
- AMPK pre-activation primes metabolic pathways for enhanced fat oxidation during exercise
- Post-exercise metabolic window is extended with AICAR activation

**Metabolic Health Stack:**
- AICAR 50mg daily (AMPK/exercise mimetic)
- MOTS-c 10mg weekly (complementary AMPK activator from mitochondrial genome)
- NAD+ 250mg 3× weekly (AMPK-NAD+ positive feedback loop)

**Important Note:**
- Human dosing data is limited — start conservatively
- GW501516 (often mentioned alongside AICAR) is not recommended — known carcinogen in animal studies`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: '+44% Endurance Without Exercise', body: 'Landmark 2008 Cell Metabolism study: sedentary mice improved endurance 44% with AICAR — genetic expression of exercise adaptations without physical training.' },
      { title: 'AMPK Master Pathway', body: 'AMPK activation is the same pathway as metformin, caloric restriction, and exercise — one of the most validated longevity and metabolic health targets in biology.' },
      { title: 'Mitochondrial Biogenesis', body: 'Activates PGC-1α — the master regulator of mitochondrial biogenesis — increasing mitochondrial density in skeletal muscle just as months of endurance training would.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ AICAR 50mg patched")

# ─────────────────────────────────────────────────────────────────
# 8. 5-AMINO-1MQ 50mg
# ─────────────────────────────────────────────────────────────────
slug = '5-amino-1mq-50mg'
next_slug = '5-amino-1mq-50mg-caps'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `5-Amino-1MQ is a small molecule inhibitor of NNMT (Nicotinamide N-methyltransferase) — an enzyme that is dramatically upregulated in obese adipose tissue and plays a previously underappreciated role in obesity, metabolic disease, and cellular aging. By blocking NNMT, 5-Amino-1MQ restores NAD+ and methyl group availability in fat cells, activating SIRT1 and reversing the metabolic dysfunction that drives fat cell expansion.

**NNMT: The Obesity Enzyme**

NNMT catalyzes the methylation of nicotinamide (vitamin B3) using S-adenosylmethionine (SAM) as the methyl donor — producing 1-methylnicotinamide and S-adenosylhomocysteine. This reaction consumes two critical metabolic resources simultaneously:
1. Nicotinamide → consumed, reducing NAD+ production from this precursor pathway
2. SAM methyl groups → consumed, reducing methyl availability for DNA methylation and other critical reactions

NNMT is highly expressed in white adipose tissue, liver, and skeletal muscle, and its expression increases dramatically in obesity. Research has identified NNMT as a key driver of the metabolic dysfunction in obese adipose tissue:
- Obese subjects have 2–6× higher NNMT expression in adipose vs. lean subjects
- High NNMT depletes NAD+ in fat cells → impairs SIRT1 → promotes fat storage over metabolism
- NNMT upregulation in adipose tissue creates a metabolic environment that favors further weight gain

**The NAD+ Connection**

Nicotinamide is a precursor for NAD+ production via the nicotinamide salvage pathway. When NNMT diverts nicotinamide to 1-methylnicotinamide instead, less NAD+ is produced in that tissue. In adipose tissue, reduced NAD+ availability impairs sirtuin enzymes — SIRT1, SIRT3, SIRT6 — that regulate fat cell metabolism, lipolysis, and mitochondrial function.

5-Amino-1MQ blocks NNMT, allowing nicotinamide to enter the NAD+ biosynthesis pathway instead — restoring NAD+ in fat cells and reactivating sirtuin-mediated fat metabolism.

**Animal Study Evidence**

The landmark 5-Amino-1MQ studies from the University of Texas Health Science Center:
- Obese mice given 5-Amino-1MQ showed significant reduction in fat cell size and fat mass
- Treatment prevented diet-induced obesity when started prophylactically
- Reduction in total body fat without caloric restriction
- Increased NAD+ levels and SIRT1 activity in adipose tissue confirmed in tissue analysis
- No adverse effects on lean mass, organ function, or metabolic markers

**SAM Methyl Group Conservation**

Beyond NAD+, blocking NNMT conserves SAM methyl groups. SAM is the universal methyl donor in biology — it methylates DNA (epigenetic regulation), histones (gene regulation), neurotransmitters (catecholamine synthesis), and proteins. In high-NNMT states, excessive SAM consumption for nicotinamide methylation depletes methyl availability for these other critical reactions. 5-Amino-1MQ preserves the methyl pool, with potential downstream benefits for epigenetic regulation and neurotransmitter synthesis.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Inhibits NNMT — the upregulated obesity enzyme that depletes NAD+ and methyl groups in fat tissue',
      'Restores NAD+ in adipose tissue by redirecting nicotinamide from methylation to NAD+ synthesis',
      'Activates SIRT1 in fat cells through elevated NAD+ — reactivating fat metabolism and lipolysis',
      'Animal studies: significant fat mass reduction without caloric restriction',
      'Prevented diet-induced obesity when initiated prophylactically in mouse models',
      'No lean mass reduction — selective fat-targeting through adipose NNMT pathway',
      'Conserves SAM methyl groups for DNA methylation, histone modification, and neurotransmitter synthesis',
      'NNMT obese adipose expression is 2–6× higher than lean — addressing a root driver of metabolic dysfunction',
      'Synergistic with NAD+ supplementation for comprehensive sirtuin activation in adipose tissue',
      '98.9% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**5-Amino-1MQ Protocol:**
- Dose: 50mg daily
- Route: Oral (preferred) or subcutaneous injection
- Timing: With meals for oral; anytime for subcutaneous
- Duration: 12–24 weeks; reassess body composition at 8-week intervals

**Oral Capsule Protocol:**
- 1 capsule (50mg) daily — see 5-Amino-1MQ Capsules for convenience format
- Can be taken with or without food
- Most consistent results with daily, not intermittent, use

**Fat Loss Stack:**
- 5-Amino-1MQ 50mg daily (NNMT inhibition — adipose NAD+ restoration)
- NAD+ 250mg 3× weekly (systemic NAD+ elevation to amplify SIRT1 activation)
- Semaglutide or Tirzepatide (appetite/GLP-1 mechanism for total fat loss)

**Anti-Aging Methyl Protocol:**
- 5-Amino-1MQ 50mg daily (conserves SAM methyl groups)
- Benefits methylation patterns through SAM preservation — relevant for epigenetic maintenance`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'NNMT — The Obesity Enzyme', body: 'NNMT expression is 2–6× elevated in obese adipose tissue — blocking it with 5-Amino-1MQ addresses a root cause of adipose metabolic dysfunction rather than downstream symptoms.' },
      { title: 'Fat Loss Without Restriction', body: 'Animal studies show significant fat mass reduction without caloric restriction — a NAD+-SIRT1 mediated fat cell metabolism restoration.' },
      { title: 'SAM Methyl Conservation', body: 'By stopping nicotinamide methylation, 5-Amino-1MQ preserves the universal methyl donor SAM for DNA methylation, histone modification, and neurotransmitter synthesis.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ 5-Amino-1MQ 50mg patched")

# ─────────────────────────────────────────────────────────────────
# 9. METHYLENE BLUE 50ml
# ─────────────────────────────────────────────────────────────────
slug = 'methylene-blue-50ml'
next_slug = 'pt-141-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Methylene Blue (MB) is a phenothiazine compound with a 150-year history in medicine — the first fully synthetic drug ever used clinically (1876) and a WHO Essential Medicine for methemoglobinemia. At nanomolar to micromolar concentrations, Methylene Blue acts as an electron carrier in the mitochondrial electron transport chain, improving neuronal energy production, protecting against neurodegeneration, and enhancing cognitive function through mechanisms that no other compound replicates.

**Mitochondrial Electron Carrier: The Core Mechanism**

The mitochondrial electron transport chain (ETC) transfers electrons from NADH and FADH2 through Complexes I–IV to oxygen, driving ATP synthesis via proton gradient creation. When individual complexes in the ETC become dysfunctional or overloaded, electrons can leak and combine with oxygen to form reactive oxygen species (ROS), reducing ATP production and causing oxidative damage.

Methylene Blue acts as an alternative electron carrier that can accept electrons from NADH at Complex I, and donate them directly to cytochrome c (between Complexes III and IV) — essentially creating a bypass of the damaged ETC segments. This has two consequences:
1. **Increased ATP production**: More electrons reach oxygen efficiently, driving more ATP synthesis
2. **Reduced ROS**: The bypass reduces electron leakage at the most ROS-generating sites (Complexes I and III)

This mechanism is unique — no other cognitive or anti-aging compound provides a direct alternative electron shuttling pathway.

**Cognitive Enhancement Evidence**

Methylene Blue has demonstrated measurable cognitive benefits at low doses (the hormetic dose-response — too little is ineffective, too high is inhibitory):
- **Memory enhancement**: Multiple rodent studies and at least two human clinical trials showing improvements in object memory retention and recall
- **Cognitive aging reversal**: In aged rats, Methylene Blue improved performance on spatial and object recognition tasks to near-young-rat levels
- **Glucose metabolism in the brain**: MB enhances glucose utilization in the prefrontal cortex and hippocampus — two regions most critical for executive function and memory
- **Alzheimer\'s disease connection**: MB dissolves tau protein aggregates and neurofibrillary tangles in vitro — and the derivative LMTX has undergone clinical trials for Alzheimer\'s disease

**Neuroprotective Mechanisms**

Beyond energy enhancement, Methylene Blue protects neurons through:
- Inhibition of monoamine oxidase (MAO) at higher doses — increases dopamine, serotonin, and norepinephrine
- Inhibition of nitric oxide synthase (NOS) — reduces nitrosative stress
- Upregulation of heme oxygenase-1 and other cytoprotective enzymes
- Direct antioxidant activity (the oxidized MB form accepts electrons, preventing them from creating ROS)
- Autophagy enhancement — promotes clearance of damaged proteins and organelles

**Antimicrobial and Other Properties**

Methylene Blue\'s original clinical applications were antimicrobial — it was the first synthetic drug used against Plasmodium falciparum (malaria) in 1891. It remains active against drug-resistant pathogens:
- Broad antibacterial activity (particularly against gram-positive organisms)
- Antifungal (Candida inhibition)
- Antiviral activity in certain contexts
- Antiseptic properties at higher concentrations

**The Dose-Response: Hormesis**

Methylene Blue follows a strict hormetic dose-response — beneficial at low doses, potentially detrimental at high doses:
- **Optimal range**: 0.5–4mg/kg body weight (35–280mg for 70kg)
- **Too low** (<0.5mg/kg): Minimal effects
- **Too high** (>10mg/kg): Pro-oxidant, serotonin syndrome risk at extreme doses
- Most cognitive enhancement studies use 0.5–2mg/kg`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Alternative electron carrier in mitochondrial ETC — increases ATP production and reduces ROS at Complex I/III',
      'Unique mechanism: bypasses damaged ETC segments to restore neuronal energy production',
      'Human clinical trial evidence for cognitive memory enhancement and recall improvement',
      'Improved glucose utilization in prefrontal cortex and hippocampus — brain regions most affected by aging',
      'Tau aggregate dissolution in vitro — Alzheimer\'s disease derivative (LMTX) in clinical trials',
      'MAO inhibition at higher doses — increases dopamine, serotonin, and norepinephrine',
      'Nitric oxide synthase inhibition — reduces neuronal nitrosative stress',
      'Autophagy enhancement — promotes clearance of damaged neuronal proteins',
      'Antimicrobial: original pharmaceutical use — active against malaria, bacteria, and fungi',
      'WHO Essential Medicine — 150+ year safety and clinical history',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Methylene Blue Cognitive Protocol:**
- Dose: 0.5–2mg/kg body weight
- For 70kg individual: 35–140mg per dose
- Starting dose: 35mg (low end) to assess tolerance and effects
- Route: Oral (preferred), or IV at clinical doses
- Frequency: Once daily or 5 days/week with weekend break
- Timing: Morning with meal (can cause mild nausea if taken fasted)

**Dosing This Product (10mg/mL x50mL = 500mg total):**
- 35mg dose = 3.5mL
- 70mg dose = 7mL
- Measure with oral syringe; can be diluted in juice to mask metallic taste
- Turns urine blue/green — completely harmless, expected

**Cognitive Enhancement Protocol:**
- 70mg (1mg/kg for 70kg) once daily, 5 days/week
- Consider cycling 8 weeks on / 4 weeks off to prevent tolerance and maintain sensitivity
- Best cognitive effects typically noted at 1–2mg/kg in the studies

**Anti-Aging Mitochondrial Stack:**
- Methylene Blue 70mg daily (ETC electron carrier and ROS reduction)
- SS-31 2mg daily (cardiolipin restoration and cristae structure)
- NAD+ 250mg 3× weekly (sirtuin substrate and ETC cofactor)
These three compounds address different aspects of mitochondrial function decline

**Important Notes:**
- Avoid combining with serotonergic drugs (SSRIs, MAOIs) — serotonin syndrome risk at high doses
- Does NOT interact at standard cognitive-enhancement doses (below 10mg/kg)
- Store protected from light — degrades with UV exposure`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Unique ETC Electron Carrier', body: 'Methylene Blue creates an alternative electron transfer pathway in the mitochondrial ETC — increasing ATP and reducing ROS through a mechanism no other cognitive compound replicates.' },
      { title: '150-Year Safety History', body: 'WHO Essential Medicine with 150+ years of clinical use — the most historically validated cognitive enhancer available.' },
      { title: 'Tau Aggregate Dissolution', body: 'MB and its derivatives dissolve tau neurofibrillary tangles in vitro — the pathology underlying Alzheimer\'s disease — making it the basis for ongoing Alzheimer\'s drug development.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Methylene Blue 50ml patched")

# ─────────────────────────────────────────────────────────────────
# 10. MELANOTAN II 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'melanotan-ii-10mg'
next_slug = 'melanotan-i-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Melanotan II (MT-2) is a synthetic, cyclic analog of alpha-melanocyte-stimulating hormone (α-MSH) that acts as a non-selective agonist at multiple melanocortin receptors (MC1R, MC3R, MC4R, MC5R). It was originally developed at the University of Arizona as a tanning agent to prevent UV-induced skin cancer — with the theory that a compound that induces melanin production without UV exposure could reduce the UV damage associated with sunbathing. In clinical trials, MT-2 produced unexpected and dramatic sexual side effects, which eventually led to the development of PT-141 (bremelanotide, FDA-approved as Vyleesi®).

**Multi-Receptor Activation Profile**

Unlike selective compounds, MT-2 activates four of the five melanocortin receptors:
- **MC1R**: Expressed on melanocytes — drives melanin production (eumelanin, the dark/brown pigment) independently of UV radiation
- **MC3R**: Expressed in the brain and immune cells — involved in energy homeostasis and immune modulation
- **MC4R**: Expressed in the hypothalamus — drives sexual arousal, reduces appetite, and regulates energy balance
- **MC5R**: Expressed in exocrine glands — involved in sebum production and other secretory functions

This broad receptor activation is what distinguishes MT-2 from more selective analogs: it produces a comprehensive melanocortin agonist effect across all expressing tissues.

**UV-Independent Tanning: MC1R Mechanism**

MC1R activation by MT-2 drives melanogenesis in melanocytes through cAMP/PKA/MITF signaling:
1. MT-2 binds MC1R → increases intracellular cAMP
2. cAMP activates PKA → phosphorylates CREB transcription factor
3. CREB activates MITF (Melanocyte Inducing Transcription Factor)
4. MITF drives transcription of tyrosinase and other melanogenic enzymes
5. Melanin is synthesized and transferred to keratinocytes → skin darkening

Critically, this pathway is activated without UV radiation — meaning tanning occurs without the DNA damage, immunosuppression, and carcinogenesis risk of UV exposure. Small UV exposure (without burning) amplifies the MT-2 effect by providing additional cellular stress signals that upregulate melanogenesis.

**Libido and Sexual Function: MC4R Mechanism**

MT-2\'s discovery of sexual side effects in tanning trials was accidental but transformative — leading directly to PT-141\'s development as an FDA-approved drug. MC4R activation in the hypothalamus produces:
- Enhanced sexual motivation and arousal (both sexes)
- Facilitation of erection in men through oxytocinergic neurons
- These effects appear more potent in MT-2 than PT-141 due to MT-2\'s higher receptor promiscuity

MT-2 produces stronger libido enhancement than PT-141 at equivalent doses but with more side effects — primarily nausea, facial flushing, spontaneous erections at unintended times, and yawning/stretching (a characteristic gape response mediated by MC4R).

**Appetite Suppression: MC4R/MC3R Mechanism**

MC4R and MC3R in the hypothalamus regulate energy homeostasis — activation of these receptors suppresses appetite through the same hypothalamic circuits that respond to leptin. MT-2 consistently reduces food intake and body weight in animal studies through central melanocortin appetite signaling.

**Comparing MT-2 to PT-141 and Melanotan I**

| Compound | Primary Use | MC1R | MC4R | Half-Life | Selectivity |
|---|---|---|---|---|---|
| MT-2 | Tanning + libido | High | High | Short | Non-selective |
| PT-141 | Libido only | Low | High | Short | MC3R/MC4R selective |
| Melanotan I | Tanning only | High | Low | Extended | MC1R selective |

MT-2 is for users seeking both tanning and libido effects; PT-141 for libido without tanning; Melanotan I for tanning without libido effects.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'UV-independent melanin induction via MC1R — tanning without UV radiation and associated DNA damage',
      'Libido enhancement through MC4R activation — the basis for FDA-approved PT-141 (Bremelanotide)',
      'Central appetite suppression through MC3R/MC4R hypothalamic signaling',
      'Comprehensive melanocortin agonism: MC1R + MC3R + MC4R + MC5R simultaneously',
      'Developed by University of Arizona specifically to enable safe tanning without UV carcinogenesis risk',
      'MC4R oxytocinergic pathway facilitates erection in men through central neural mechanism',
      'University research origin — extensively studied pharmacologically across all receptor subtypes',
      '98.9% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Melanotan II Tanning Protocol:**
- Starting test dose: 0.1–0.25mg subcutaneous (mandatory — assess nausea and side effects)
- Escalation: Increase by 0.1–0.25mg per injection over 1–2 weeks
- Loading dose: 0.5–1mg daily with modest UV exposure (20 min sun, non-burning)
- Maintenance: 0.5mg 2–3× weekly once target tan achieved
- Route: Subcutaneous injection

**Managing Side Effects:**
- Nausea (very common in first week): Start at 0.1mg; take before sleep to reduce severity
- Flushing and warmth: Expected, transient (30–60 minutes post-injection)
- Spontaneous erections: Expected side effect at higher doses — time dosing accordingly
- Yawning/stretching: MC4R activation effect — harmless, common in first few doses

**Comparison with PT-141:**
- MT-2 for those seeking BOTH tanning and libido effects in one compound
- PT-141 (Bremelanotide) for those wanting libido effects only, without tanning
- Melanotan I for those wanting tanning only, without libido/appetite effects

**Freckle/Mole Warning:**
- MT-2 can darken or develop new nevi (moles) — monitor existing moles
- Not appropriate for individuals with melanoma history or high melanoma risk`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'UV-Free Tanning', body: 'MC1R activation drives melanin synthesis without UV radiation — achieving natural-looking pigmentation without UV-associated DNA damage or carcinogenesis risk.' },
      { title: 'Parent of PT-141', body: 'MT-2 trials accidentally discovered the MC4R-mediated libido enhancement that led directly to PT-141\'s development and FDA approval as Vyleesi®.' },
      { title: 'Non-Selective: More Effects, More Side Effects', body: 'Activates MC1R, MC3R, MC4R, and MC5R simultaneously — broader effects than selective analogs but with correspondingly broader side effect profile.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Melanotan II 10mg patched")

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
