import type { Metadata } from 'next';
import Link from 'next/link';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Peptide Glossary: BPC-157, GLP-1 & Secretagogue Definitions',
  description:
    'Complete peptide glossary — definitions for BPC-157, GLP-1, GLP-1 agonist, secretagogue, GHRH, telomerase, NAD+, and 40+ more peptide science terms.',
  alternates: { canonical: 'https://www.peptidesclav.com/glossary' },
  openGraph: {
    title: 'Peptide Glossary: BPC-157, GLP-1 & Secretagogue Definitions',
    description:
      'Complete peptide glossary — definitions for BPC-157, GLP-1, GLP-1 agonist, secretagogue, GHRH, telomerase, NAD+, and 40+ more peptide science terms.',
    type: 'website',
    url: 'https://www.peptidesclav.com/glossary',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Peptide Glossary — PeptidesClav' }],
  },
};

interface Term {
  term: string;
  definition: string;
  link?: { href: string; label: string };
}

interface Section {
  id: string;
  label: string;
  terms: Term[];
}

const sections: Section[] = [
  {
    id: 'a-f',
    label: 'A – F',
    terms: [
      {
        term: 'Actin-binding',
        definition:
          'A property of certain proteins and peptides that allows them to physically associate with actin filaments, the structural scaffolding of cells. Actin-binding activity is relevant to peptides like TB-500 (thymosin beta-4), which modulates actin polymerisation to facilitate cell migration and tissue repair. This mechanism underpins its utility in wound healing and musculoskeletal recovery.',
        link: { href: '/products/tb-500', label: 'TB-500' },
      },
      {
        term: 'Adipogenesis',
        definition:
          'The biological process by which precursor cells differentiate into mature fat cells (adipocytes). Several peptide compounds — including AOD-9604 and certain GH secretagogues — are studied for their ability to modulate adipogenesis, potentially reducing lipid accumulation without broad metabolic disruption. Inhibiting adipogenesis is a key mechanism explored in metabolic research.',
      },
      {
        term: 'Amylin',
        definition:
          'A 37-amino-acid peptide hormone co-secreted with insulin by pancreatic beta cells. Amylin slows gastric emptying, suppresses post-meal glucagon release, and promotes satiety. It is relevant to metabolic peptide research because amylin agonists (like pramlintide) and combination approaches with GLP-1 agonists show additive effects on glucose control and weight reduction.',
      },
      {
        term: 'Anabolism',
        definition:
          'The set of metabolic pathways that construct molecules from smaller units, requiring energy input. In the context of peptide research, anabolism typically refers to muscle protein synthesis driven by growth hormone, IGF-1, and related secretagogues. Peptides that increase GH pulsatility or directly activate IGF-1 signalling promote an anabolic environment that favours lean mass accrual.',
      },
      {
        term: 'Angiogenesis',
        definition:
          'The formation of new blood vessels from pre-existing vasculature. BPC-157 and GHK-Cu both upregulate VEGF and other pro-angiogenic factors, accelerating the vascular supply to injured tissues. This mechanism is central to their wound-healing and tissue-repair properties, as adequate blood flow is a prerequisite for cellular repair and collagen remodelling.',
        link: { href: '/products/bpc-157', label: 'BPC-157' },
      },
      {
        term: 'AOD-9604',
        definition:
          'A synthetic peptide analogue derived from the C-terminal fragment of human growth hormone (amino acids 176–191). AOD-9604 was developed to replicate GH\'s lipolytic effects without stimulating IGF-1 production or promoting systemic anabolic signalling. Research suggests it activates beta-3 adrenergic receptors in adipose tissue, promoting fat breakdown while leaving blood glucose and IGF-1 unaffected.',
      },
      {
        term: 'Bacteriostatic Water',
        definition:
          'Sterile water containing 0.9% benzyl alcohol as a preservative. The benzyl alcohol inhibits bacterial growth, allowing a vial to be used multiple times over several weeks once opened. Bacteriostatic water (BAC water) is the standard diluent for reconstituting lyophilised peptides because it extends refrigerated shelf-life of the reconstituted solution to approximately 28–30 days.',
      },
      {
        term: 'BAC Water',
        definition:
          'Abbreviation for Bacteriostatic Water. See the entry above. BAC water is synonymous with bacteriostatic water and is the preferred reconstitution vehicle for most research peptides due to its multi-use safety profile. Using plain sterile water (without a preservative) increases contamination risk after the first draw.',
      },
      {
        term: 'BPC-157',
        definition:
          'Body Protection Compound-157 is a synthetic 15-amino-acid peptide derived from a protective protein found in gastric juice. It has demonstrated potent tendon-to-bone healing, gut-lining repair, and anti-inflammatory activity across numerous animal studies. Its mechanisms include upregulation of growth hormone receptors, promotion of angiogenesis via VEGF, and modulation of nitric oxide synthesis. It is among the most extensively researched repair peptides.',
        link: { href: '/products/bpc-157', label: 'View BPC-157' },
      },
      {
        term: 'Catabolism',
        definition:
          'The metabolic breakdown of complex molecules into simpler ones, releasing energy. In the context of body composition, catabolism refers specifically to the breakdown of muscle protein under conditions of caloric deficit, illness, or elevated cortisol. Certain peptides — particularly GH secretagogues and IGF-1 analogues — are studied for their ability to attenuate catabolic signalling and preserve lean mass during stress or dieting.',
      },
      {
        term: 'Certificate of Analysis (COA)',
        definition:
          'A document issued by an independent analytical laboratory confirming the identity, purity, and concentration of a compound. For research peptides, a valid COA should include HPLC purity percentage (typically ≥98%), mass spectrometry confirmation of molecular weight, and lot/batch number for traceability. Purchasing peptides without a publicly available COA significantly increases the risk of receiving an impure, mislabelled, or counterfeit product.',
      },
      {
        term: 'CJC-1295',
        definition:
          'A synthetic analogue of growth-hormone-releasing hormone (GHRH) engineered with a Drug Affinity Complex (DAC) modification that binds to serum albumin, extending its half-life from minutes to approximately 8 days. CJC-1295 (with DAC) produces sustained elevation of GH and IGF-1, making it suitable for long-acting GH support protocols. It is commonly paired with Ipamorelin to stimulate both the GHRH and GHRP pathways simultaneously.',
        link: { href: '/products/ipamorelin-cjc', label: 'Ipamorelin / CJC-1295' },
      },
      {
        term: 'Copper peptide',
        definition:
          'A class of peptide-copper complexes, most notably GHK-Cu (glycine-histidine-lysine bound to copper). Copper peptides occur naturally in human plasma and decrease with age. They promote wound healing, collagen synthesis, angiogenesis, and anti-inflammatory signalling. Topically, GHK-Cu is used in skin-rejuvenation applications; systemically it is studied for tissue repair and anti-ageing effects.',
        link: { href: '/products/ghk-cu', label: 'GHK-Cu' },
      },
      {
        term: 'DEXA scan',
        definition:
          'Dual-Energy X-ray Absorptiometry — a gold-standard imaging technique that measures bone mineral density, lean mass, and fat mass compartment by compartment. Researchers and biohackers use serial DEXA scans to objectively quantify body composition changes during peptide protocols, providing ground-truth data beyond subjective appearance or scale weight.',
      },
      {
        term: 'Dose-response',
        definition:
          'The relationship between the amount of a compound administered and the magnitude of its biological effect. Peptide dose-response curves are often non-linear — many compounds exhibit a therapeutic window where efficacy plateaus or reverses at very high doses (a phenomenon called hormesis or bell-shaped response). Understanding dose-response is essential for designing protocols that optimise effect while minimising unnecessary exposure.',
      },
      {
        term: 'Epithalon',
        definition:
          'A synthetic tetrapeptide (Ala-Glu-Asp-Gly) derived from the pineal gland extract epithalamin, developed by the St. Petersburg Institute of Bioregulation. Epithalon is studied for its ability to stimulate telomerase activity, extend telomere length in somatic cells, restore melatonin secretion in older animals, and modulate neuroendocrine function. It is one of the most researched longevity peptides with a multi-decade human observational dataset.',
        link: { href: '/products/epithalon', label: 'View Epithalon' },
      },
      {
        term: 'Fibrosis',
        definition:
          'The pathological overgrowth of connective tissue, typically collagen, in response to injury or chronic inflammation. Fibrosis impairs organ function in conditions like liver cirrhosis, kidney disease, and post-injury scarring. BPC-157 and GHK-Cu have both shown anti-fibrotic properties in animal models, reducing excessive collagen cross-linking and promoting more functional tissue remodelling rather than scar formation.',
      },
      {
        term: 'Fragment peptide',
        definition:
          'A peptide synthesised to correspond to a specific amino-acid subsequence of a larger protein. AOD-9604, for example, is a fragment of human growth hormone spanning residues 176–191. Fragment peptides are used in research to isolate and study the activity of specific domains of a larger protein, often retaining a subset of the parent molecule\'s biological actions while losing others.',
      },
    ],
  },
  {
    id: 'g-l',
    label: 'G – L',
    terms: [
      {
        term: 'GHK-Cu',
        definition:
          'Glycine-histidine-lysine copper complex — a naturally occurring tripeptide found in human plasma, saliva, and urine that declines significantly with age. GHK-Cu activates genes involved in wound healing, anti-inflammatory signalling, and collagen/elastin synthesis. It has demonstrated potent skin-rejuvenation effects topically and is studied for broader tissue-repair and anti-ageing applications systemically.',
        link: { href: '/products/ghk-cu', label: 'View GHK-Cu' },
      },
      {
        term: 'GHRH',
        definition:
          'Growth Hormone-Releasing Hormone — a 44-amino-acid hypothalamic peptide that signals the pituitary gland to release growth hormone in a pulsatile fashion. GHRH acts through specific GHRH receptors on somatotroph cells. Synthetic GHRH analogues (such as CJC-1295 and Sermorelin) mimic this signal with extended half-lives, forming the basis of many GH secretagogue protocols.',
      },
      {
        term: 'GHRH Agonist',
        definition:
          'A compound that binds to and activates the GHRH receptor, mimicking the action of endogenous GHRH. GHRH agonists stimulate pulsatile GH release from the pituitary without suppressing the hypothalamic-pituitary axis in the same way that exogenous HGH does. Examples include Sermorelin, CJC-1295 (with or without DAC), and Tesamorelin. They preserve feedback regulation better than direct HGH administration.',
      },
      {
        term: 'GHRP',
        definition:
          'Growth Hormone-Releasing Peptide — a family of synthetic peptides that stimulate GH secretion by binding to the ghrelin receptor (GHSR-1a). GHRPs act via a different receptor than GHRH agonists, and combining the two pathways produces synergistic GH release. Common GHRPs include Ipamorelin, GHRP-2, and GHRP-6. They also stimulate appetite and gastric motility to varying degrees depending on selectivity.',
      },
      {
        term: 'GIP',
        definition:
          'Glucose-dependent Insulinotropic Polypeptide — an incretin hormone secreted by intestinal K cells in response to nutrient ingestion. GIP potentiates insulin release in a glucose-dependent manner and also acts on adipose tissue and bone. Tirzepatide is a dual GIP/GLP-1 agonist, and its superior efficacy over pure GLP-1 agonists is partially attributed to the additive GIP signalling component.',
        link: { href: '/products/tirzepatide-15mg', label: 'Tirzepatide' },
      },
      {
        term: 'GLP-1',
        definition:
          'Glucagon-Like Peptide-1 — an incretin hormone secreted by intestinal L cells in response to food intake. GLP-1 stimulates glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, and signals satiety to the hypothalamus. Its natural half-life is under 2 minutes due to rapid degradation by DPP-4. Synthetic GLP-1 receptor agonists are engineered to resist this degradation, extending activity to days or weeks.',
      },
      {
        term: 'GLP-1 Agonist',
        definition:
          'A compound that binds to and activates the GLP-1 receptor, producing the same downstream effects as endogenous GLP-1 but with a dramatically extended duration of action. GLP-1 agonists — including Semaglutide, Tirzepatide (dual GIP/GLP-1), and Retatrutide (triple agonist) — produce substantial weight loss, improved glycaemic control, and cardiovascular risk reduction in clinical trials.',
        link: { href: '/products/semaglutide-10mg', label: 'Semaglutide' },
      },
      {
        term: 'Growth Hormone (GH)',
        definition:
          'A 191-amino-acid peptide hormone produced by somatotroph cells in the anterior pituitary. GH drives anabolic processes — stimulating IGF-1 production in the liver, promoting lipolysis in adipose tissue, and supporting lean mass accrual. GH secretion is pulsatile, peaking during deep sleep. Age-related GH decline (somatopause) is a primary driver of interest in GH secretagogue peptides.',
      },
      {
        term: 'Half-life',
        definition:
          'The time required for the plasma concentration of a compound to decrease by 50%. Half-life determines dosing frequency — compounds with short half-lives (like native GLP-1 at ~2 minutes or GHRH at ~5–7 minutes) require either continuous infusion or synthetic modification to be clinically useful. Semaglutide\'s ~7-day half-life enables once-weekly dosing; CJC-1295 with DAC achieves ~8 days.',
      },
      {
        term: 'HPLC testing',
        definition:
          'High-Performance Liquid Chromatography — an analytical technique that separates, identifies, and quantifies components in a mixture by forcing the sample through a column under high pressure. For peptides, HPLC generates a purity percentage indicating what fraction of the sample is the target compound. A purity of ≥98% is the standard quality threshold. HPLC alone cannot confirm molecular identity — mass spectrometry is required for that.',
      },
      {
        term: 'Hypertrophy',
        definition:
          'An increase in the size of skeletal muscle cells (myofibrils) resulting from mechanical overload and anabolic signalling. At the molecular level, hypertrophy requires net positive muscle protein synthesis driven by mTOR activation. Growth hormone secretagogues and IGF-1 analogues can amplify hypertrophic signalling, particularly in combination with resistance training, by increasing IGF-1 availability at the muscle.',
      },
      {
        term: 'IBD (Inflammatory Bowel Disease)',
        definition:
          'A category of chronic inflammatory conditions affecting the gastrointestinal tract, including Crohn\'s disease and ulcerative colitis. BPC-157 has generated significant research interest in IBD models due to its ability to repair gut epithelial barrier integrity, downregulate pro-inflammatory cytokines, and promote mucosal healing — mechanisms highly relevant to IBD pathology.',
        link: { href: '/products/bpc-157', label: 'BPC-157' },
      },
      {
        term: 'IGF-1',
        definition:
          'Insulin-Like Growth Factor-1 — a 70-amino-acid peptide hormone produced primarily in the liver in response to GH stimulation. IGF-1 is the primary mediator of GH\'s anabolic and mitogenic effects, activating pathways that promote muscle protein synthesis, satellite cell activation, and lean mass accrual. Serum IGF-1 is also used as a proxy marker for GH status and as a monitoring tool in GH secretagogue protocols.',
      },
      {
        term: 'IGF-1 LR3',
        definition:
          'A long-acting synthetic analogue of IGF-1 with an arginine substitution at position 3 and an added 13-amino-acid N-terminal extension. These modifications reduce binding to IGF-binding proteins, increasing free, bioavailable IGF-1 and extending its half-life from ~15 minutes to approximately 20–30 hours. IGF-1 LR3 produces potent systemic anabolic effects and is studied for muscle wasting, recovery, and body composition applications.',
        link: { href: '/products/igf-1-lr3', label: 'View IGF-1 LR3' },
      },
      {
        term: 'Ipamorelin',
        definition:
          'A highly selective fifth-generation GHRP that stimulates GH release with minimal effect on cortisol, prolactin, or appetite — a selectivity advantage over earlier GHRPs like GHRP-6. Ipamorelin is commonly combined with CJC-1295 to achieve synergistic, pulsatile GH release via simultaneous GHRH and ghrelin receptor activation. The combination is among the most popular GH secretagogue protocols.',
        link: { href: '/products/ipamorelin-cjc', label: 'Ipamorelin / CJC-1295' },
      },
      {
        term: 'Lipolysis',
        definition:
          'The enzymatic hydrolysis of triglycerides stored in adipose tissue into free fatty acids and glycerol, which are then available for energy production. GH is a potent lipolytic agent, and GH secretagogue peptides promote fat loss in part through this mechanism. AOD-9604 is specifically designed to activate lipolytic pathways in adipocytes while avoiding systemic anabolic effects.',
      },
      {
        term: 'Longevity peptides',
        definition:
          'A broad category of peptides studied primarily for their ability to extend healthspan — the period of life spent in good health — rather than simply treating disease. Key longevity peptides include Epithalon (telomere extension, melatonin restoration), GHK-Cu (gene expression, anti-fibrotic), and NAD+ precursors. Many originate from research into the biology of ageing conducted in Russia and Eastern Europe from the 1970s onward.',
        link: { href: '/products/epithalon', label: 'Epithalon' },
      },
      {
        term: 'Lyophilized',
        definition:
          'Freeze-dried. Lyophilisation removes water from a substance by freezing it and then reducing surrounding pressure to allow ice to sublimate directly from solid to vapour. Lyophilised peptides are chemically stable at room temperature for extended periods and are the standard commercial form for research peptides. They must be reconstituted with bacteriostatic or sterile water before use.',
      },
    ],
  },
  {
    id: 'm-r',
    label: 'M – R',
    terms: [
      {
        term: 'Mass spectrometry',
        definition:
          'An analytical technique that measures the mass-to-charge ratio of ions, producing a spectrum that uniquely identifies a molecule\'s molecular weight and fragmentation pattern. For peptide quality control, mass spectrometry confirms molecular identity — it verifies that the compound in the vial is actually the peptide on the label, not a structurally similar impurity or truncated sequence. HPLC purity + mass spec confirmation together constitute the quality standard.',
      },
      {
        term: 'Mitochondria',
        definition:
          'Membrane-bound organelles responsible for generating the majority of cellular ATP through oxidative phosphorylation. Mitochondrial dysfunction is increasingly recognised as a driver of ageing and metabolic disease. NAD+ is an essential cofactor for mitochondrial energy production and declines significantly with age. Peptides and compounds that restore NAD+ levels — such as NMN and NR — are studied for mitochondrial rejuvenation and longevity.',
        link: { href: '/products/nad-plus', label: 'NAD+' },
      },
      {
        term: 'Myogenesis',
        definition:
          'The biological process by which muscle cells (myocytes) are formed, differentiated, and fused into mature muscle fibres. Myogenesis is driven by satellite cell activation and downstream transcription factors including MyoD and myogenin. Growth hormone, IGF-1, and peptides that activate these pathways support myogenesis following muscle injury or during hypertrophy, accelerating the restoration of contractile tissue.',
      },
      {
        term: 'NAD+',
        definition:
          'Nicotinamide Adenine Dinucleotide — a coenzyme found in all living cells that is essential for energy metabolism, DNA repair, and sirtuin-mediated gene regulation. NAD+ levels decline approximately 50% between youth and middle age. Supplementation via NAD+ precursors (NMN, NR) or direct NAD+ infusion is studied for metabolic rejuvenation, cognitive support, mitochondrial function, and healthy ageing.',
        link: { href: '/products/nad-plus', label: 'View NAD+' },
      },
      {
        term: 'Nootropic peptide',
        definition:
          'A peptide that exerts beneficial effects on cognitive function, including memory, focus, neuroplasticity, or neuroprotection. Examples studied in this category include Semax (ACTH analogue), Selank (tuftsin analogue), and Dihexa (hepatocyte growth factor modulator). Nootropic peptides typically act via BDNF upregulation, modulation of monoamine systems, or direct neuroprotective effects on neuronal membranes.',
      },
      {
        term: 'Peptide',
        definition:
          'A short chain of amino acids linked by peptide bonds, typically defined as containing fewer than 50 amino acids (longer chains are called proteins). Peptides are the body\'s primary signalling molecules — hormones, neurotransmitters, and growth factors are all peptides or peptide-derived. Synthetic research peptides are designed to mimic or modulate endogenous peptide signals, often with enhanced stability or receptor selectivity compared to their natural counterparts.',
      },
      {
        term: 'Pharmacokinetics',
        definition:
          'The study of how the body processes a compound over time — specifically absorption, distribution, metabolism, and excretion (ADME). For peptides, key pharmacokinetic parameters include bioavailability by route (subcutaneous injection typically achieves 50–100% vs. near-zero for oral unmodified peptides), time to peak concentration (Tmax), volume of distribution, and half-life. Pharmacokinetics drives dosing frequency and route recommendations.',
      },
      {
        term: 'Protocol',
        definition:
          'In the context of peptide research, a protocol is a structured plan specifying compound selection, dose, injection timing, injection site, cycle duration, and any co-administration considerations. Well-designed protocols account for half-life (to determine dosing frequency), receptor desensitisation (to determine cycle breaks), and synergy or antagonism between co-administered peptides.',
      },
      {
        term: 'Pulsatile GH release',
        definition:
          'The natural pattern of growth hormone secretion from the pituitary, characterised by discrete pulses — primarily during slow-wave sleep — separated by troughs of near-zero GH. This pulsatile pattern is important because sustained elevation of GH (as seen with exogenous HGH) can downregulate GH receptors and disrupt feedback. GH secretagogue peptides are designed to amplify natural pulses rather than produce continuous GH elevation.',
      },
      {
        term: 'Reconstitution',
        definition:
          'The process of dissolving a lyophilised (freeze-dried) peptide powder in a liquid diluent — typically bacteriostatic water — to produce a solution suitable for injection. Proper reconstitution technique involves injecting diluent gently down the inside wall of the vial (never directly onto the powder), swirling rather than shaking, and allowing full dissolution before drawing a dose. Vigorous shaking can denature peptide structure.',
      },
      {
        term: 'Retatrutide',
        definition:
          'A novel synthetic triple agonist targeting GLP-1, GIP, and glucagon receptors simultaneously. Phase 2 clinical trial data showed average weight loss of approximately 17.5% at 24 weeks at the highest dose — among the most significant weight-loss results ever recorded for a pharmacological agent in a randomised trial. Its glucagon receptor activity adds to energy expenditure beyond what dual GIP/GLP-1 agonists achieve.',
        link: { href: '/products/retatrutide-10mg', label: 'View Retatrutide' },
      },
    ],
  },
  {
    id: 's-z',
    label: 'S – Z',
    terms: [
      {
        term: 'Secretagogue',
        definition:
          'Any compound that stimulates the secretion of another substance. In peptide research, the term most often refers to GH secretagogues — compounds that stimulate pituitary release of growth hormone rather than supplying exogenous GH directly. GH secretagogues preserve the pulsatile, physiologically regulated pattern of GH release and maintain hypothalamic-pituitary feedback, reducing the suppression risks associated with exogenous HGH.',
      },
      {
        term: 'Semaglutide',
        definition:
          'A GLP-1 receptor agonist with ~94% sequence homology to native GLP-1, modified with a C18 fatty acid chain that enables albumin binding and confers a ~7-day half-life. Weekly subcutaneous injection produces 15–17% average body weight reduction over 68 weeks in clinical trials (STEP programme). Semaglutide also holds cardiovascular outcome trial evidence (SELECT trial) showing significant reduction in major adverse cardiovascular events.',
        link: { href: '/products/semaglutide-10mg', label: 'View Semaglutide' },
      },
      {
        term: 'SNAP-8',
        definition:
          'A synthetic octapeptide (8-amino-acid) analogue of the N-terminal end of SNAP-25, a protein involved in the SNARE complex that mediates neurotransmitter vesicle fusion at the neuromuscular junction. By competitively inhibiting SNARE complex formation, SNAP-8 reduces acetylcholine release and thereby attenuates the muscle contractions responsible for expression lines. It is used topically in cosmetic formulations as a needle-free alternative to botulinum toxin approaches.',
      },
      {
        term: 'Subcutaneous injection',
        definition:
          'Injection into the subcutaneous tissue — the fatty layer directly beneath the skin, above the muscle. The standard route of administration for most research peptides including BPC-157, TB-500, GLP-1 agonists, and GH secretagogues. Subcutaneous injections are administered at a 45–90° angle with an insulin syringe (typically 29–31 gauge), commonly into abdominal fat, the thigh, or the flank. This route provides reliable absorption with minimal technique difficulty.',
      },
      {
        term: 'Synergistic stack',
        definition:
          'A combination of peptides or compounds whose combined effect is greater than the sum of their individual effects (synergy, not merely additivity). A classic example is the Ipamorelin + CJC-1295 stack, which simultaneously activates GHRH receptors and ghrelin receptors, producing a GH pulse significantly larger than either peptide alone. Stack design requires understanding receptor targets to identify genuine synergies rather than redundant co-administration.',
      },
      {
        term: 'TB-500',
        definition:
          'The research name for a synthetic version of thymosin beta-4 (Tβ4), a 43-amino-acid naturally occurring peptide found in virtually all human and animal cells. TB-500 promotes tissue repair through actin-binding activity, which facilitates cell migration, new blood vessel formation, and reduced inflammation. It is particularly studied for musculoskeletal injury recovery and is commonly stacked with BPC-157 for synergistic healing effects.',
        link: { href: '/products/tb-500', label: 'View TB-500' },
      },
      {
        term: 'Telomerase',
        definition:
          'A ribonucleoprotein enzyme complex that adds repetitive DNA sequences to the ends of chromosomes (telomeres), counteracting the shortening that occurs with each cell division. Telomerase is highly active in germ cells and stem cells but largely silenced in most somatic cells. Epithalon is the most studied peptide for its ability to reactivate telomerase expression in somatic cells, potentially slowing replicative senescence.',
        link: { href: '/products/epithalon', label: 'Epithalon' },
      },
      {
        term: 'Telomere',
        definition:
          'Repetitive nucleotide sequences (TTAGGG in humans) that cap the ends of chromosomes, protecting them from degradation and preventing chromosomal fusions. Telomeres shorten with each cell division due to the end-replication problem. When telomeres become critically short, cells enter replicative senescence or apoptosis. Telomere length is studied as a biomarker of biological age and cellular health.',
      },
      {
        term: 'Thymosin',
        definition:
          'A family of peptides originally isolated from thymus gland extracts, known for their roles in immune modulation, cellular repair, and tissue regeneration. The two most researched members in the peptide community are thymosin alpha-1 (Tα1), studied for immune system stimulation and anti-viral activity, and thymosin beta-4 (Tβ4), the source peptide for TB-500, studied for tissue repair and anti-inflammatory activity.',
      },
      {
        term: 'Tirzepatide',
        definition:
          'A dual GIP and GLP-1 receptor agonist (twincretin) developed by Eli Lilly, administered once weekly. Clinical trials (SURMOUNT programme) demonstrated 20–22% mean body weight reduction over 72 weeks — the largest weight-loss results recorded for a weekly injectable at the time of approval. Its GIP receptor activity likely contributes to tolerability (reduced nausea vs. pure GLP-1 agonists) and superior fat mass reduction.',
        link: { href: '/products/tirzepatide-15mg', label: 'View Tirzepatide' },
      },
      {
        term: 'Triple agonist',
        definition:
          'A compound that simultaneously agonises three distinct receptor types. In metabolic peptide research, the most clinically significant triple agonist is Retatrutide, which targets GLP-1, GIP, and glucagon receptors. The glucagon receptor component increases energy expenditure and hepatic fat mobilisation beyond what dual agonists achieve, contributing to the superior weight-loss outcomes observed in Phase 2 trials.',
        link: { href: '/products/retatrutide-10mg', label: 'Retatrutide' },
      },
      {
        term: 'VEGF (Vascular Endothelial Growth Factor)',
        definition:
          'A signal protein that stimulates the formation of new blood vessels (angiogenesis) and the growth of existing vasculature. VEGF is upregulated by BPC-157 and GHK-Cu, which partly explains their accelerated wound-healing and tissue-repair properties. Adequate VEGF-driven angiogenesis is prerequisite for supplying oxygen and nutrients to healing tissue and for supporting the proliferative phase of repair.',
        link: { href: '/products/bpc-157', label: 'BPC-157' },
      },
    ],
  },
];

const alphabet = sections.map((s) => ({ id: s.id, label: s.label }));

export default function GlossaryPage() {
  return (
    <div className="grid-bg min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-6 pb-12 sm:pt-10 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge badge-cyan mb-4 inline-block">Reference</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
            Peptide <span className="gradient-text">Glossary</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Plain-language definitions for 40+ peptide science terms — from secretagogues and GHRH to
            telomerase, GLP-1 agonists, and beyond. Each definition cites the mechanism, not just the marketing.
          </p>
          {/* Anchor nav */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {alphabet.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="tag-chip text-xs sm:text-sm hover:border-cyan-500/60 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* ── Glossary Sections ── */}
      <div className="max-w-6xl mx-auto px-4 pb-10 sm:pb-20 space-y-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="gradient-text">{section.label}</span>
              </h2>
              <div className="flex-1 h-px bg-[var(--border)]" />
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-yellow-600 transition-colors shrink-0"
              >
                ↑ top
              </a>
            </div>

            {/* Two-column grid of term cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {section.terms.map(({ term, definition, link }) => (
                <div
                  key={term}
                  className="card p-5 flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-gray-900 text-base leading-snug">{term}</h3>
                    {link && (
                      <Link
                        href={link.href}
                        className="shrink-0 text-xs text-yellow-600 hover:text-cyan-300 border border-cyan-900/60 hover:border-cyan-500/60 rounded px-2 py-0.5 transition-colors whitespace-nowrap"
                      >
                        {link.label} →
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{definition}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ── Related Reading ── */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 py-10 sm:py-16">
          <RelatedReading pageKey="/glossary" />
        </div>
      </div>
    </div>
  );
}
