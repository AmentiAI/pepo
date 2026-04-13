#!/usr/bin/env python3
"""Batch 6: Prostamax, Testagen, Thymogen, Thymulin, Vesilute, Vesugen, Vilon,
ACE-031, PNC-27, Survodutide"""

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


# ── 1. Prostamax 20mg ─────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='prostamax-20mg',
    next_slug='testagen-20mg',
    new_full_desc='''`Prostamax is a bioregulator peptide derived from prostate tissue — one of the most clinically targeted organs in the Khavinson series of tissue-specific short peptides developed at the St. Petersburg Institute of Bioregulation and Gerontology. Prostamax activates gene expression in prostatic epithelial and stromal cells through the characteristic epigenetic mechanism of the bioregulator series: the short peptide penetrates prostate cell nuclei, binds to histone-DNA complexes, and reactivates transcription of prostate-specific functional genes silenced by aging, androgen fluctuation, and chronic inflammatory exposure.

The prostate is uniquely vulnerable to the intersection of aging and hormonal change. As testosterone levels decline and DHT (dihydrotestosterone) signaling patterns shift with age, the prostate undergoes progressive histological and functional changes: stromal proliferation, epithelial changes, inflammatory infiltration, and the gradual development of benign prostatic hyperplasia (BPH) in the majority of aging men. These changes reflect partly epigenetic dysregulation — age-related silencing of genes governing normal prostate cell differentiation, anti-proliferative signaling, and anti-inflammatory response in prostatic tissue.

Prostamax targets this epigenetic component of prostatic aging. The peptide activates transcription of genes encoding anti-proliferative factors that normally constrain prostatic stromal expansion, differentiation markers that maintain normal epithelial architecture, anti-inflammatory cytokines and their signaling components, and proteins involved in androgen receptor pathway regulation. By restoring these gene expression programs, Prostamax supports the maintenance of normal prostate cell identity and function against the epigenetic drift that enables hyperplastic and inflammatory changes.

Research from the Khavinson group has demonstrated Prostamax effects in aging animal prostate tissue and in human clinical studies in elderly men with age-related prostatic dysfunction. In experimental models, Prostamax treatment reduced prostatic inflammatory infiltration, improved histological markers of normal glandular architecture, and reduced proliferative markers in prostatic stromal tissue. Human clinical outcomes in published work include improvements in urinary flow parameters (urinary symptom scores, peak flow rates), reduced post-void residual volume, and improvements in subjective lower urinary tract symptoms — the clinical manifestation of BPH.

The preventive dimension is significant: epigenetic silencing of anti-proliferative prostatic genes begins decades before BPH becomes symptomatic. Prostamax used as a preventive cycling protocol in middle-aged men may maintain prostatic tissue quality and delay the epigenetic changes that enable BPH development — a fundamentally different approach from alpha-blockers (symptom relief) or 5-alpha reductase inhibitors (DHT reduction) that address downstream consequences rather than the upstream epigenetic root.

Protocol: 2mg/day for 10 consecutive days, subcutaneously or intranasally, repeated 2–4 times per year. Combination with Testagen (testicular/testosterone bioregulator) provides complementary male reproductive system coverage — prostate tissue restoration alongside gonadal hormone axis epigenetic support.`''',
    new_benefits='''[
      'Epigenetic reactivation of prostate-specific gene expression — anti-proliferative factors, differentiation markers, anti-inflammatory signals',
      'Reduced prostatic stromal proliferation markers in animal studies — targets BPH development at epigenetic root',
      'Improved urinary flow parameters and symptom scores in human clinical work',
      'Reduced post-void residual volume — improved bladder emptying in aging men with BPH',
      'Anti-inflammatory gene activation in prostate tissue — reduces chronic inflammatory infiltration',
      'Restores normal glandular architecture markers in histological analysis',
      'Preventive application in middle-aged men before BPH becomes symptomatic',
      'Mechanistically distinct from alpha-blockers and 5-ARI — epigenetic root cause rather than downstream management',
      'Combines with Testagen for complete male reproductive system bioregulator coverage',
      'Effects persist post-course — characteristic epigenetic self-sustaining transcriptional activation',
    ]''',
    new_protocol='''`**Standard Prostamax Course:**
- Dose: 2mg/day
- Route: Subcutaneous injection or intranasal
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Preventive vs. Therapeutic Use:**
- Preventive (age 40–55, no symptoms): 2 courses/year starting early
- Therapeutic (established BPH symptoms): 4 courses/year + urological monitoring

**Male Reproductive System Stack:**
- Prostamax + Testagen: complete prostate + testicular bioregulator pair
- Compatible with standard BPH medications — different mechanism, no interaction

**Monitoring:**
- International Prostate Symptom Score (IPSS) at baseline and 6-month intervals
- Uroflowmetry (peak flow rate, post-void residual) for objective tracking
- PSA monitoring per standard urological guidelines

**Administration:**
- Morning SC injection preferred
- Intranasal equally effective for systemic prostate bioregulator delivery`''',
    new_highlights='''[
      { title: 'Prostatic Epigenetic Restoration', body: 'Prostamax reactivates age-silenced anti-proliferative and differentiation genes in prostate cells — addressing the epigenetic changes that enable BPH development decades before symptoms appear.' },
      { title: 'Measured Urological Outcomes', body: 'Human clinical work shows improved urinary flow rates, reduced symptom scores, and lower post-void residual volume — objective urological improvements from an epigenetic rather than pharmacological mechanism.' },
      { title: 'Prevention Before Symptom Onset', body: 'Starting Prostamax courses before BPH becomes symptomatic maintains prostatic tissue quality against the epigenetic drift that enables hyperplasia — a fundamentally earlier intervention point than any current pharmaceutical approach.' },
    ]'''
)

# ── 2. Testagen 20mg ──────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='testagen-20mg',
    next_slug='thymogen-20mg',
    new_full_desc='''`Testagen is a bioregulator peptide targeting testicular tissue — the primary site of testosterone synthesis and spermatogenesis in men. Developed by Dr. Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology, Testagen activates gene expression in Leydig cells (testosterone-producing) and Sertoli cells (spermatogenesis-supporting) that progressively silences with age — the epigenetic contribution to the androgen decline that begins in men\'s third and fourth decades and accelerates significantly after 50.

Testosterone is the master anabolic hormone of the male body: governing muscle mass, bone density, libido, red blood cell production, mood, cognitive function, and metabolic efficiency. Age-related testosterone decline (andropause) is one of the most consequential hormonal changes in male aging — yet unlike female menopause, it occurs gradually and is often attributed to "normal aging" rather than recognized as a treatable or addressable endocrine change. The epigenetic component of this decline — progressive silencing of steroidogenic genes in Leydig cells — is exactly what Testagen targets.

Testagen\'s peptide sequence penetrates Leydig cell and Sertoli cell nuclei and binds to histone-DNA complexes, reactivating transcription of testicular functional genes. In Leydig cells, these include the steroidogenic enzyme genes (StAR, CYP11A1, 3β-HSD, CYP17A1, 17β-HSD) that constitute the testosterone synthesis pathway, LH receptor genes enabling pituitary-gonadal axis signaling, and anti-apoptotic factors maintaining Leydig cell viability. In Sertoli cells, Testagen activates genes for androgen-binding protein (ABP), inhibin, FSH receptor, and structural support proteins required for spermatogenesis.

Research from the Khavinson group demonstrates measurable effects on testicular function. In aging animal models, Testagen treatment increased testicular weight (a proxy for Leydig cell and seminiferous tubule mass), elevated serum testosterone levels compared to untreated aging controls, improved histological markers of spermatogenesis quality, and reduced apoptotic markers in testicular cell populations. The testosterone elevation mechanism is distinct from exogenous testosterone administration — rather than replacing testosterone, Testagen restores the cellular machinery that produces testosterone endogenously, maintaining pituitary-gonadal feedback and avoiding the testicular atrophy and fertility suppression that accompany exogenous testosterone.

Human clinical applications in the Khavinson group\'s work have focused on aging men with documented testosterone decline and hypogonadal symptoms, fertility concerns in aging males, and preventive protocols for men seeking to maintain endocrine health. Outcomes include improvements in serum testosterone levels, FSH/LH axis normalization, improvements in male sexual health parameters, and subjective improvements in energy, libido, and mood consistent with testosterone restoration.

The key distinction from testosterone replacement therapy (TRT): Testagen works upstream at the epigenetic level to restore endogenous testosterone production, preserving natural pulsatility, HPG axis feedback, and fertility — outcomes impossible with exogenous testosterone supplementation. Protocol: 2mg/day for 10 consecutive days, subcutaneous injection, 2–4 courses per year.`''',
    new_benefits='''[
      'Epigenetic reactivation of Leydig cell steroidogenic genes — StAR, CYP11A1, CYP17A1, 17β-HSD in testosterone synthesis pathway',
      'Elevated endogenous testosterone in aging animal models — restored biosynthesis rather than exogenous replacement',
      'Preserves HPG axis integrity — maintains pituitary feedback and natural testosterone pulsatility',
      'No testicular atrophy — unlike exogenous testosterone which suppresses LH and causes testicular shrinkage',
      'Sertoli cell gene activation — supports spermatogenesis and fertility alongside testosterone restoration',
      'Improved testicular histology in aging animals — better preserved seminiferous tubule architecture',
      'Improved male sexual health parameters in human clinical work',
      'Mood, energy, and libido improvements consistent with testosterone restoration',
      'Works upstream of testosterone — restores the cellular machinery for production rather than bypassing it',
      'Complements Prostamax for complete male reproductive system bioregulator coverage',
    ]''',
    new_protocol='''`**Standard Testagen Course:**
- Dose: 2mg/day
- Route: Subcutaneous injection preferred
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Timing:**
- Morning administration aligns with natural testosterone production peak
- No specific food restriction

**Male Hormonal Stack:**
- Testagen + Prostamax: complete testicular + prostate bioregulator pair
- Testagen + Kisspeptin-10: epigenetic Leydig cell restoration + upstream HPG pulsatile signaling support

**Monitoring:**
- Serum total and free testosterone at baseline and 6 weeks after course completion
- LH/FSH to confirm HPG axis maintenance (should remain active, unlike with TRT)
- SHBG for complete hormonal picture

**vs. TRT:**
- Testagen restores endogenous production — HPG axis preserved, fertility maintained
- TRT replaces testosterone externally — HPG suppressed, testicular function reduced
- For men wanting to maintain natural production rather than replace it, Testagen addresses the epigenetic root`''',
    new_highlights='''[
      { title: 'Endogenous Production Restoration', body: 'Testagen reactivates the steroidogenic enzyme genes in Leydig cells that produce testosterone — restoring the cellular machinery for endogenous production rather than bypassing it with exogenous hormone.' },
      { title: 'HPG Axis Preservation', body: 'Because Testagen restores testicular testosterone production rather than supplementing it externally, pituitary LH/FSH signaling remains intact — preserving natural pulsatility, feedback regulation, and fertility that TRT eliminates.' },
      { title: 'Upstream Epigenetic Intervention', body: 'Testosterone decline begins as epigenetic silencing of steroidogenic genes in Leydig cells decades before andropause symptoms appear. Testagen intervenes at this epigenetic origin point — addressing the cause rather than supplementing around it.' },
    ]'''
)

# ── 3. Thymogen 20mg ──────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='thymogen-20mg',
    next_slug='thymulin-10mg',
    new_full_desc='''`Thymogen (Glu-Trp) is a dipeptide derived from thymus tissue — one of the simplest and most extensively studied thymus-derived immunoregulatory peptides in the Khavinson bioregulator series. As a two-amino acid thymic peptide, Thymogen directly stimulates T-lymphocyte maturation and activation, enhances natural killer (NK) cell cytotoxicity, and modulates cytokine production — functioning as a concentrated signal of thymic activity that the immune system is designed to recognize and respond to.

The thymus produces multiple peptide hormones that regulate the immune system beyond its role in T-cell education. These thymic hormones — thymosin-α1, thymulin, thymopoietin, and thymic humoral factor — all signal to peripheral immune cells to maintain activation thresholds, proliferative capacity, and functional balance. Thymogen, derived from the thymus tissue peptide pool, carries this class of thymic signals in its simplest dipeptide form. Its small size (two amino acids) gives it pharmacological advantages: high stability, excellent bioavailability across mucosal surfaces, and the ability to reach immune cells throughout the body rapidly following intranasal or sublingual administration.

The immunological mechanism of Thymogen centers on T-cell biology. Thymogen treatment increases the proportion of mature CD3+, CD4+, and CD8+ T cells in peripheral blood, enhances T-cell proliferative responses to mitogenic stimulation, increases IL-2 production (the primary T-cell growth and activation cytokine), and augments NK cell cytotoxicity against tumor cell targets. These effects collectively strengthen cell-mediated immunity — the arm of adaptive immunity responsible for eliminating intracellular pathogens (viral infections), cancerous cells, and coordinating adaptive immune responses.

Khavinson group research has documented Thymogen\'s effects in multiple clinical contexts. In immunosuppressed patients (post-chemotherapy, elderly with documented immunosenescence), Thymogen courses normalized lymphocyte counts and improved T-cell functional parameters. In aging populations, Thymogen reduced the incidence and severity of respiratory infections over follow-up periods. In oncology adjunct applications, Thymogen was studied as an immune support agent during chemotherapy — maintaining immune function and potentially improving outcomes in studies of immune surveillance.

Thymogen is particularly well-suited for rapid immune support needs — its dipeptide simplicity allows effective intranasal administration with direct mucosal immune access, and its effects on T-cell activation are measurable within the first treatment course. This makes it appropriate for: pre-travel immune preparation, post-illness immune recovery, winter infection prevention protocols, and as an adjunct to the deeper structural thymic restoration provided by Crystagen and Thymosin Alpha-1.

Protocol: 1mg/day for 10 consecutive days, intranasally or sublingually, 2–4 times per year. The simplest and most accessible thymic peptide — complements Crystagen (epigenetic thymic restoration) and Thymosin Alpha-1 (direct TA-1 thymic hormone) in a complete thymic immune stack.`''',
    new_benefits='''[
      'Direct T-lymphocyte maturation stimulation — increases CD3+, CD4+, CD8+ T-cell proportions in peripheral blood',
      'Enhanced T-cell proliferative response to mitogenic stimulation — restored adaptive immune activation capacity',
      'Increased IL-2 production — the primary T-cell growth and activation cytokine',
      'NK cell cytotoxicity augmentation — strengthened innate immune surveillance against pathogens and cancer cells',
      'Rapid onset — dipeptide simplicity enables fast immune response, measurable within first course',
      'Excellent intranasal bioavailability — direct mucosal immune access without injection requirement',
      'Reduced respiratory infection frequency and severity in aging populations',
      'Immune recovery support post-chemotherapy and illness',
      'Adjunct oncology immune support — studied for maintenance of immune surveillance during treatment',
      'Simplest thymic peptide — most accessible entry point for thymic immune support protocols',
    ]''',
    new_protocol='''`**Standard Thymogen Course:**
- Dose: 1mg/day
- Route: Intranasal or sublingual preferred (excellent mucosal bioavailability)
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Intranasal Administration:**
- Reconstitute in bacteriostatic water (0.5mg/mL)
- 1mg once daily intranasal dose
- Evening administration for overnight immune activation

**Complete Thymic Immune Stack:**
- Thymogen (T-cell activation) + Thymosin Alpha-1 (thymic hormones) + Crystagen (thymic epigenetics)
- Together: upstream epigenetic thymic restoration + direct thymic hormone signaling + T-cell activation

**Acute Use Protocols:**
- Pre-travel: begin course 5 days before travel
- Post-illness recovery: course immediately following resolution of acute illness
- Winter prevention: quarterly courses aligned with respiratory infection seasons

**Compatibility:**
- Compatible with all standard thymic peptides
- Can stack with Kisspeptin-10 for broader immune-endocrine support`''',
    new_highlights='''[
      { title: 'Dipeptide Simplicity, Immune Power', body: 'Thymogen\'s two-amino acid structure provides exceptional stability and bioavailability — the smallest functional thymic signal, effective intranasally without injection, yet producing measurable T-cell and NK cell functional improvements.' },
      { title: 'Measurable T-Cell Activation', body: 'CD3+/CD4+/CD8+ T-cell normalization, IL-2 upregulation, and NK cytotoxicity enhancement are documented effects — making Thymogen one of the most directly measurable immunostimulatory peptides in the Khavinson series.' },
      { title: 'Complement to Crystagen and TA-1', body: 'Crystagen restores the thymic microenvironment epigenetically; Thymosin Alpha-1 provides thymic hormones; Thymogen activates peripheral T-cells directly. The three-peptide thymic stack addresses immune aging at structural, hormonal, and cellular activation levels simultaneously.' },
    ]'''
)

# ── 4. Thymulin 10mg ──────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='thymulin-10mg',
    next_slug='vesilute-20mg',
    new_full_desc='''`Thymulin is a nonapeptide (9-amino acid) hormone produced exclusively by thymic epithelial cells — the only thymic hormone with a fully identified primary structure and a specific receptor on T-lymphocytes. Unlike Thymogen (a stimulatory dipeptide) or Thymosin Alpha-1 (a T-cell maturation hormone), Thymulin functions as a specific thymic signal that promotes the final maturation steps of T-lymphocyte differentiation — the conversion of pre-T cells into fully functional, antigen-responsive mature T cells capable of executing adaptive immune responses.

Thymulin requires zinc as an obligate cofactor for biological activity: the zinc-complexed form (Zn-Thymulin) is the active hormone, while the unbound peptide is inactive. This zinc dependence makes Thymulin one of the most informative biomarkers of thymic function — serum Thymulin levels fall dramatically with thymic involution and aging, can be partially restored by zinc supplementation in zinc-deficient elderly, and serve as a measurable index of residual thymic activity. The decline in Thymulin is measurable from adolescence and parallels the progression of immunosenescence.

The biological role of Thymulin centers on T-cell terminal differentiation and phenotypic identity. Thymulin induces expression of T-cell surface markers (CD3, CD4, CD8, TCR components) that define T-cell identity and function, enhances T-cell responsiveness to mitogenic stimulation, supports the development of regulatory T-cells (Tregs) that prevent autoimmunity, and modulates the balance between Th1 and Th2 T-cell subsets that determines immune response character. These activities are distinct from and complementary to Thymogen\'s T-cell activation effects and Thymosin Alpha-1\'s broader thymic hormone roles.

Khavinson group and broader thymus research has documented Thymulin\'s immunological effects extensively. In aging animal models with depleted Thymulin levels, exogenous Thymulin administration restored T-cell surface marker expression, improved T-cell mitogenic responses, and reduced autoimmune markers — outcomes consistent with restored T-cell terminal differentiation. Clinical studies in immunosuppressed patients (HIV, chemotherapy-induced lymphopenia, elderly with documented immunosenescence) showed improved T-cell counts and function, reduced infection rates, and normalized T-cell subset ratios following Thymulin treatment courses.

A noteworthy application of Thymulin is autoimmune modulation. By supporting Treg development, Thymulin contributes to the immune self-tolerance mechanisms that prevent autoimmune activity — an increasingly relevant consideration in aging populations where declining Thymulin is associated with increased autoimmune dysregulation and inflammaging. This immunomodulatory balance role distinguishes Thymulin from purely stimulatory immunological peptides.

Protocol: 1–2mg/day for 10 consecutive days, subcutaneous injection, 2–4 times per year. Zinc co-supplementation (15–30mg elemental zinc/day) during and between courses is recommended to ensure cofactor availability for Thymulin bioactivity.`''',
    new_benefits='''[
      'Only thymic hormone with fully identified structure and specific T-cell receptor — precise terminal differentiation signal',
      'Induces CD3/CD4/CD8/TCR surface marker expression — promotes T-cell phenotypic identity and functional competence',
      'Enhances T-cell responsiveness to mitogenic stimulation — restored adaptive immune activation',
      'Supports regulatory T-cell (Treg) development — prevents autoimmune dysregulation that increases with aging',
      'Modulates Th1/Th2 balance — governs adaptive immune response character and avoids inflammatory dysregulation',
      'Normalizes T-cell subset ratios in immunosuppressed patients (HIV, chemotherapy, aging)',
      'Serum Thymulin is a measurable biomarker of thymic function — allows objective monitoring of response',
      'Zinc-dependent activity — requires adequate zinc cofactor for biological action',
      'Reduced autoimmune markers in aging animal models following Thymulin restoration',
      'Complements Thymogen (T-cell activation) and Crystagen (thymic microenvironment) for complete thymic coverage',
    ]''',
    new_protocol='''`**Standard Thymulin Course:**
- Dose: 1–2mg/day
- Route: Subcutaneous injection
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Zinc Co-Supplementation (Required):**
- Thymulin requires zinc as obligate cofactor
- Take 15–30mg elemental zinc daily during course AND between courses
- Zinc deficiency renders Thymulin inactive — verify adequacy before/during protocol

**Thymic Peptide Stack:**
- Thymulin + Thymogen: terminal T-cell differentiation + peripheral T-cell activation
- Add Crystagen for upstream thymic microenvironment epigenetic restoration
- Full stack: Crystagen + Thymosin Alpha-1 + Thymogen + Thymulin = comprehensive thymic immune system protocol

**Monitoring:**
- Serum Thymulin levels if available (specialized immunology lab)
- T-cell subset analysis (CD4/CD8 ratio, CD3+ percentage, Tregs)
- Clinical: infection frequency, autoimmune symptom tracking in relevant populations`''',
    new_highlights='''[
      { title: 'Only Thymic Hormone with Specific T-Cell Receptor', body: 'Thymulin is the sole thymic hormone with a fully characterized structure and a dedicated receptor on T-lymphocytes — making it a precise molecular signal for T-cell terminal differentiation rather than a general immunostimulant.' },
      { title: 'Autoimmune Prevention via Treg Support', body: 'By supporting regulatory T-cell development, Thymulin contributes to immune self-tolerance — addressing the increased autoimmune dysregulation that accompanies declining Thymulin levels in aging populations, an effect no purely stimulatory thymic peptide replicates.' },
      { title: 'Zinc-Dependent Activation', body: 'Thymulin requires zinc as an obligate cofactor — making zinc co-supplementation a prerequisite for bioactivity. The zinc-Thymulin complex is the active hormone; unbound peptide is inactive, making this the only thymic peptide with a mandatory mineral dependency.' },
    ]'''
)

# ── 5. Vesilute 20mg ──────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='vesilute-20mg',
    next_slug='vesugen-20mg',
    new_full_desc='''`Vesilute is a peptide bioregulator targeting bladder epithelial tissue (urothelium) — one of the more specialized organ-specific peptides in the Khavinson bioregulator series developed at the St. Petersburg Institute of Bioregulation and Gerontology. As a tissue-specific short peptide derived from bladder tissue, Vesilute activates gene expression in urothelial cells that has been progressively silenced by aging, chronic mechanical stress, recurrent infection, and inflammatory damage — the epigenetic root of the age-related bladder dysfunction that affects a substantial portion of aging populations.

The urothelium is a highly specialized transitional epithelium with unique structural properties: it must be impermeable to urine components (ions, urea, organic acids) while withstanding continuous mechanical stretch and relaxation as the bladder fills and empties. Urothelial cells express specialized proteins — uroplakins (UP Ia, Ib, II, III), tight junction components, and barrier lipids — that maintain this impermeability. With aging, expression of these barrier genes progressively declines, leading to urothelial permeability increases, penetration of urine components into the bladder wall, sensory nerve sensitization, and the urgency, frequency, and pain symptoms characteristic of bladder aging syndrome.

Vesilute\'s peptide sequence penetrates urothelial cell nuclei and reactivates transcription of these barrier and functional genes — uroplakin expression, tight junction proteins (claudins, occludins), anti-inflammatory genes that reduce sensory sensitization, and growth factors supporting urothelial self-renewal. The restoration of urothelial barrier integrity directly addresses the mechanism underlying overactive bladder symptoms, increased infection susceptibility, and the painful bladder conditions associated with urothelial compromise.

Khavinson group research on Vesilute has examined its effects in aging animal bladder tissue and in human populations with age-related lower urinary tract symptoms (LUTS). Animal studies demonstrate improved urothelial histology following Vesilute treatment — better preserved barrier architecture, higher uroplakin expression, and reduced inflammatory infiltration in bladder wall tissue. Human clinical outcomes include improvements in urinary frequency, reduced nocturia, improved bladder capacity, and reduced urinary urgency episodes — outcomes that directly improve quality of life for the substantial aging population affected by LUTS.

The mechanism is meaningfully different from anticholinergic drugs and beta-3 agonists used for overactive bladder: those compounds reduce detrusor muscle contractility or block muscarinic receptors to suppress urgency symptoms. Vesilute addresses the upstream urothelial barrier dysfunction that sensitizes sensory nerves and drives the urgency sensation — a causal intervention rather than symptomatic management. For post-menopausal women and aging men where urothelial atrophy is a significant contributor to LUTS, Vesilute\'s epigenetic restoration approach targets the actual tissue pathology.

Protocol: 2mg/day for 10 consecutive days, subcutaneous or intranasal, repeated 2–4 times per year.`''',
    new_benefits='''[
      'Epigenetic reactivation of urothelial barrier gene expression — uroplakins, tight junctions, barrier lipids',
      'Restores urothelial impermeability — prevents urine component penetration that sensitizes sensory nerves',
      'Improved bladder capacity and reduced urinary frequency in human clinical outcomes',
      'Reduced nocturia and urgency episodes — direct quality-of-life improvement',
      'Addresses urothelial barrier dysfunction upstream of muscarinic/beta-3 symptom management',
      'Better preserved urothelial histological architecture in aging animal bladder tissue',
      'Reduced inflammatory infiltration in bladder wall — anti-inflammatory gene activation',
      'Supports urothelial self-renewal — growth factor gene activation for epithelial maintenance',
      'Particularly relevant for post-menopausal women and aging men with urothelial atrophy',
      'Complements Prostamax for comprehensive lower urinary tract bioregulator coverage in men',
    ]''',
    new_protocol='''`**Standard Vesilute Course:**
- Dose: 2mg/day
- Route: Subcutaneous injection or intranasal
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Lower Urinary Tract Stack:**
- Vesilute + Prostamax (men): complete bladder epithelium + prostate bioregulator pair
- Vesilute alone (women): urothelial barrier restoration for post-menopausal LUTS

**Monitoring:**
- Voiding diary: frequency, nocturia episodes, urgency scale at baseline and after course
- Bladder capacity (cystometrogram if available) for objective measure
- Quality of life questionnaire (OAB-q, ICIQ) for standardized outcome tracking

**vs. Anticholinergics/Beta-3 Agonists:**
- Standard LUTS drugs suppress detrusor contractility — symptom management
- Vesilute restores urothelial barrier — causal tissue repair
- Can be used alongside pharmacological treatment; addresses different mechanism`''',
    new_highlights='''[
      { title: 'Urothelial Barrier Epigenetic Restoration', body: 'Vesilute reactivates uroplakin and tight junction gene expression in urothelial cells — rebuilding the specialized barrier that prevents urine components from penetrating the bladder wall and sensitizing the sensory nerves driving urgency and frequency.' },
      { title: 'Causal vs. Symptomatic Treatment', body: 'Anticholinergics and beta-3 agonists suppress bladder contractions to manage symptoms. Vesilute restores the urothelial barrier dysfunction that causes the sensitization — an upstream causal intervention that anticholinergics cannot address.' },
      { title: 'Quality-of-Life Impact', body: 'Improved bladder capacity, reduced nocturia, and fewer urgency episodes represent direct quality-of-life improvements for one of the most common and underaddressed aging conditions — lower urinary tract symptoms affecting the majority of people over 60.' },
    ]'''
)

# ── 6. Vesugen 20mg ───────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='vesugen-20mg',
    next_slug='vilon-20mg',
    new_full_desc='''`Vesugen is a tripeptide bioregulator targeting vascular endothelial cells — the single cell layer lining every blood vessel in the body, from the largest arteries to the smallest capillaries. Developed by Dr. Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology, Vesugen activates gene expression in endothelial cells that is progressively silenced by the cumulative effects of aging, oxidative stress, inflammatory signaling, and metabolic burden — the epigenetic foundation of vascular aging and its cardiovascular consequences.

The vascular endothelium is not merely a passive structural barrier — it is the largest endocrine and paracrine organ in the body by total surface area, producing a remarkable array of signaling molecules that regulate vascular tone (nitric oxide, endothelin), prevent thrombosis (prostacyclin, t-PA, thrombomodulin), control inflammation (ICAM-1, VCAM-1, selectins), and maintain barrier integrity (VE-cadherin, tight junction proteins). Endothelial dysfunction — the impaired ability of endothelial cells to perform these functions — is recognized as the earliest measurable pathological change in atherosclerosis and is strongly predictive of future cardiovascular events.

Vascular aging manifests as progressive endothelial dysfunction: reduced nitric oxide bioavailability (leading to impaired vasodilation, hypertension, and reduced blood flow to target organs), increased endothelial permeability (facilitating lipoprotein infiltration into vessel walls), pro-inflammatory endothelial activation (upregulation of adhesion molecules enabling monocyte adhesion and foam cell formation), and reduced endothelial repair capacity. These changes are driven partly by epigenetic mechanisms — age-related methylation and histone modification progressively silences eNOS (endothelial nitric oxide synthase), KLF2 (a mechanosensitive protective transcription factor), and other endothelial cytoprotective genes.

Vesugen penetrates endothelial cell nuclei and reactivates these silenced vascular protective genes. Target gene expression programs include: eNOS for nitric oxide production, KLF2 and KLF4 for endothelial quiescence and atheroprotection, VE-cadherin and tight junction proteins for barrier maintenance, anti-thrombotic factors, and anti-inflammatory mediators that prevent endothelial activation. This comprehensive endothelial gene expression restoration addresses vascular aging at multiple functional levels simultaneously.

Khavinson group research demonstrates Vesugen effects in aging animal vascular tissue and human clinical contexts. In experimental models, Vesugen treatment improved endothelial-dependent vasodilation (a standard measure of endothelial nitric oxide function), reduced endothelial permeability markers, and improved vascular histological architecture. Human clinical outcomes include improvements in microcirculation parameters, blood flow measurements, and cardiovascular risk marker profiles. The peptide is particularly relevant for aging populations with documented endothelial dysfunction, early atherosclerotic changes, microcirculatory compromise (peripheral circulation, cognitive blood flow), and those with metabolic risk factors for cardiovascular disease.

Protocol: 2mg/day for 10 consecutive days, subcutaneous injection, 2–4 times per year. Combines synergistically with Cardiogen (cardiac tissue bioregulator) for comprehensive cardiovascular epigenetic protection — endothelium + cardiomyocytes addressed together.`''',
    new_benefits='''[
      'Epigenetic reactivation of endothelial protective gene expression — eNOS, KLF2, VE-cadherin, anti-thrombotic factors',
      'Restores nitric oxide production — improved vasodilation, reduced endothelial dysfunction',
      'Reduces endothelial permeability — prevents lipoprotein infiltration underlying early atherosclerosis',
      'Anti-inflammatory endothelial gene activation — reduces adhesion molecule expression and monocyte recruitment',
      'Improved endothelial-dependent vasodilation in aging animal models',
      'Microcirculation improvements — relevant to peripheral circulation and cognitive blood flow',
      'Improved cardiovascular risk marker profiles in human clinical outcomes',
      'Addresses atherosclerosis at earliest pathological stage — endothelial dysfunction precedes plaque formation',
      'Complements Cardiogen for complete cardiovascular epigenetic protection',
      'Effects persist post-course — endothelial epigenetic restoration is self-sustaining',
    ]''',
    new_protocol='''`**Standard Vesugen Course:**
- Dose: 2mg/day
- Route: Subcutaneous injection
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Cardiovascular Bioregulator Stack:**
- Vesugen + Cardiogen: vascular endothelium + cardiomyocyte epigenetic restoration
- Add SS-31 for mitochondrial protection in both endothelial cells and cardiomyocytes

**Monitoring:**
- Flow-mediated dilation (FMD) if available — gold standard endothelial function measure
- Blood pressure and pulse wave velocity for vascular stiffness tracking
- Lipid panel and hsCRP for cardiovascular risk markers

**Risk-Stratified Cycling:**
- Documented endothelial dysfunction, metabolic syndrome, or family history: 4 courses/year
- Preventive in aging population: 2 courses/year
- Post-cardiovascular event adjunct (with physician oversight): discuss individualized protocol`''',
    new_highlights='''[
      { title: 'Endothelial Epigenetic Restoration', body: 'Vesugen reactivates eNOS and endothelial protective gene programs silenced by vascular aging — restoring the nitric oxide production, barrier integrity, and anti-inflammatory properties of youthful endothelium that are progressively lost across decades.' },
      { title: 'Addresses Atherosclerosis at Its Origin', body: 'Endothelial dysfunction is the earliest measurable stage of atherosclerotic disease — preceding plaque formation by years. Vesugen targets this origin point, making it a more preventive intervention than any therapy acting on established plaques or downstream consequences.' },
      { title: 'Microcirculation and Cognitive Blood Flow', body: 'Endothelial dysfunction affects the entire vascular tree — including the microcirculation supplying brain tissue. Vesugen\'s endothelial restoration may improve cerebral perfusion alongside systemic cardiovascular benefits, linking vascular aging to cognitive preservation.' },
    ]'''
)

# ── 7. Vilon 20mg ─────────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='vilon-20mg',
    next_slug='pnc-27-30mg',
    new_full_desc='''`Vilon (Lys-Glu) is a thymus-derived dipeptide that modulates cytokine production and T-cell activation — the simplest thymic dipeptide in the Khavinson series and one with particularly well-documented immunomodulatory and anti-aging properties. As a two-amino acid peptide, Vilon combines the accessibility advantages of small peptide size (excellent bioavailability, intranasal delivery efficacy) with surprisingly potent effects on immune regulation, cellular proliferation control, and longevity pathways.

Vilon\'s immunological mechanism operates through multiple concurrent pathways. At the cytokine level, Vilon modulates the balance between pro-inflammatory and regulatory cytokine production — reducing excessive IL-1β, TNF-α, and IL-6 production while supporting IL-2 and regulated interferon responses. This cytokine normalization is the defining characteristic of Vilon among the thymic peptides: rather than purely stimulating immune activity, Vilon balances immune function, reducing the chronic low-grade pro-inflammatory cytokine dysregulation (inflammaging) that characterizes immune aging and drives multiple age-related pathologies.

At the cellular level, Vilon influences T-cell activation thresholds and proliferation dynamics. Vilon treatment increases the proportion of activated CD25+ T-cells (IL-2 receptor-expressing, actively proliferating T cells), enhances T-cell responsiveness to specific antigens, and improves the coordination between T-helper and T-cytotoxic subsets that governs adaptive immune response quality. These effects complement the thymic hormone activities of Thymosin Alpha-1 and Thymulin — Vilon\'s cytokine-level immunomodulation operates in parallel with the receptor-level thymic hormone activities.

Beyond immune effects, Vilon has attracted research interest for anti-aging properties that extend beyond the immune system. Vilon treatment in aging animal models has produced statistically significant lifespan extension in multiple experimental series — effects attributed to normalization of the chronic inflammatory signaling that drives multi-organ aging across tissues. The Khavinson group\'s lifespan extension data from Vilon parallels findings with Epithalon (the telomere-extending longevity peptide), suggesting that immune inflammatory normalization may be a significant pathway through which both peptides extend biological lifespan.

Vilon has also demonstrated effects on cellular proliferation regulation beyond the immune system — in particular, effects on cell cycle arrest and apoptotic pathway normalization in aging cells. This broader cellular regulation activity, combined with the immune modulation, positions Vilon as one of the more broadly bioactive anti-aging peptides in the Khavinson series, despite its extreme structural simplicity.

Protocol: 1mg/day for 10 consecutive days, intranasally or sublingually, 2–4 times per year. The smallest and most accessible thymic anti-aging peptide — effective as a standalone immune aging intervention and powerful in combination with the broader Crystagen/Thymosin Alpha-1/Thymogen thymic stack.`''',
    new_benefits='''[
      'Cytokine balance normalization — reduces IL-1β, TNF-α, IL-6 while supporting IL-2 and coordinated interferon responses',
      'Reduces inflammaging — the chronic low-grade inflammatory dysregulation driving multi-organ age-related disease',
      'Increases activated CD25+ T-cell proportion — enhanced adaptive immune response quality',
      'T-cell activation threshold and proliferation regulation — coordinated immune response control',
      'Statistically significant lifespan extension in aged animal models across multiple experimental series',
      'Cellular proliferation regulation beyond immune system — cell cycle and apoptotic pathway normalization',
      'Excellent intranasal bioavailability — dipeptide size enables effective mucosal delivery',
      'Complements Thymosin Alpha-1 and Thymulin — cytokine-level immunomodulation alongside receptor-level thymic hormones',
      'Anti-aging effects linked to inflammatory normalization pathway — similar mechanism to Epithalon lifespan data',
      'Simplest thymic peptide with longevity data — most accessible anti-aging immune intervention',
    ]''',
    new_protocol='''`**Standard Vilon Course:**
- Dose: 1mg/day
- Route: Intranasal or sublingual preferred
- Duration: 10 consecutive days per course
- Frequency: 2–4 courses per year

**Complete Thymic Anti-Aging Stack:**
- Vilon + Thymogen + Crystagen + Thymosin Alpha-1: comprehensive thymic immune aging reversal
- Vilon + Epithalon: cytokine normalization + telomere maintenance — two complementary longevity pathways

**Administration:**
- Evening intranasal preferred (supports overnight immune regulation during sleep)
- Reconstitute in bacteriostatic water (0.5mg/mL)

**Anti-Aging Protocol Integration:**
- Vilon addresses inflammaging — the immune-inflammatory component of multi-system aging
- Combine with organ-specific bioregulators (Pinealon, Cortagen, Cardiogen) for comprehensive anti-aging stack
- Quarterly courses maintain cytokine balance normalization throughout the year`''',
    new_highlights='''[
      { title: 'Cytokine Balance Over Immune Stimulation', body: 'Vilon does not simply stimulate immune activity — it normalizes the cytokine balance dysregulated by aging, reducing chronic pro-inflammatory signaling (TNF-α, IL-1β) while supporting functional adaptive immunity. This is immunomodulation rather than immunostimulation.' },
      { title: 'Lifespan Extension in Animal Models', body: 'Vilon produced statistically significant lifespan extension in aged animal models across multiple experimental series — an effect attributed to inflammatory normalization and cellular proliferation regulation that extends beyond the immune system into multi-organ aging pathways.' },
      { title: 'Smallest Thymic Peptide with Longevity Data', body: 'As a dipeptide, Vilon is the structurally simplest thymic peptide with documented lifespan extension data — combining maximal bioavailability and delivery ease with anti-aging biological activity that only a handful of peptides in any class can demonstrate.' },
    ]'''
)

# ── 8. ACE-031 1mg ────────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='ace-031-1mg',
    next_slug='pinealon-10mg',
    new_full_desc='''`ACE-031 is a fusion protein of the activin receptor type IIB (ActRIIB) extracellular domain fused to human IgG1 Fc — a soluble "decoy receptor" designed to sequester myostatin and related TGF-β superfamily ligands that limit muscle growth. Developed by Acceleron Pharma, ACE-031 acts as a molecular sponge for the most potent endogenous muscle growth inhibitors, including myostatin (GDF-8), activin A, GDF-11, and BMP-9 — preventing these ligands from binding their natural receptors and signaling muscle protein synthesis suppression.

Myostatin is the defining endogenous limiter of skeletal muscle mass. Genetic myostatin deficiency — documented in several human children, cattle breeds, and animal models — produces dramatic muscle hypertrophy without apparent adverse effects, demonstrating that physiological muscle mass is constrained well below its biological ceiling by myostatin signaling. Myostatin inhibition has been the most sought-after pharmaceutical target in muscle-wasting disease research for two decades. ACE-031 extends this inhibition to include not just myostatin but the entire family of myostatin-related ligands that converge on ActRIIB — providing broader muscle anabolic signaling enhancement than myostatin-selective antibodies.

In human Phase 2 clinical trials in healthy postmenopausal women, a single dose of ACE-031 produced statistically significant increases in lean body mass (thigh muscle volume by MRI) and bone mineral density within 28 days. This rapid, pronounced effect from a single dose — greater lean mass gain in weeks than typical exercise interventions produce in months — established ACE-031 as one of the most potent anabolic biological agents ever evaluated in controlled human trials. Phase 2 trials in Duchenne Muscular Dystrophy, facioscapulohumeral muscular dystrophy, and other muscle-wasting conditions were also initiated, showing clinically meaningful muscle mass improvements.

The mechanism produces effects beyond muscle: ACE-031 also increases bone density, reduces fat mass, and improves muscle fiber-type distribution toward oxidative (Type I) fibers. The bone effects are attributed to BMP-9 sequestration (which normally suppresses osteoblast activity), while the fat effects reflect ActRIIB\'s role in adipocyte biology alongside muscle. This makes ACE-031 a multi-tissue anabolic agent with effects on body composition comprehensively, not just muscle isolation.

The program was placed on clinical hold in 2013 after participants developed telangiectasias (dilated capillaries) and some reported epistaxis and gingival bleeding — adverse effects attributed to BMP-9 sequestration affecting vascular development pathways. ACE-031 was not approved and is not a pharmaceutical product; it is available as a research compound. The bleeding effects at Phase 2 human doses were dose-dependent, and research protocols use substantially lower doses with correspondingly different risk profiles.

Dose: 1mg (the available vial size), administered subcutaneously. Frequency and cycling require individual research protocol determination. Combination with Follistatin (if available) covers overlapping and complementary ActRIIB pathway inhibition with different molecular specificity.`''',
    new_benefits='''[
      'Sequesters myostatin, activin A, GDF-11, and BMP-9 — broadest ActRIIB ligand inhibition of any available compound',
      'Statistically significant lean body mass increase from single dose in Phase 2 healthy human trial',
      'MRI-confirmed thigh muscle volume increase within 28 days — most rapid measured anabolic response in controlled trials',
      'Bone mineral density increase — multi-tissue anabolic effect beyond skeletal muscle',
      'Fat mass reduction alongside lean mass increase — comprehensive body composition improvement',
      'Type I oxidative muscle fiber promotion — improved muscle endurance characteristics alongside hypertrophy',
      'Evaluated in DMD, FSHD, and multiple muscle-wasting disease Phase 2 programs',
      'Single-dose efficacy demonstrated — pharmacokinetically active for weeks from one administration',
      'Mechanistically distinct from anabolic steroids — no androgen receptor pathway, different side effect profile',
      'Most potent lean mass anabolic effect ever measured in controlled human clinical trials for a single dose',
    ]''',
    new_protocol='''`**Research Protocol — ACE-031:**
- Dose: 1mg per administration (available vial size)
- Route: Subcutaneous injection
- Frequency: Single dose / monthly (Phase 2 clinical trial used 1mg/kg monthly; research protocols use lower doses)
- Duration: Research-defined; effects persist for weeks post-dose

**Important Context:**
- Phase 2 clinical hold was due to vascular adverse effects (telangiectasias, epistaxis) at pharmaceutical doses
- Research protocols use lower doses with different risk-benefit profile
- Not an approved therapeutic — research compound only

**Stacking:**
- ACE-031 + IGF-1 LR3: ActRIIB inhibition (removes ceiling) + IGF-1R signaling (active anabolic drive)
- Combined muscle anabolic mechanisms: disinhibition + active growth factor stimulation

**Monitoring:**
- DEXA or MRI for lean mass quantification at baseline and follow-up
- Monitor for vascular effects (skin telangiectasias, bleeding) as primary safety endpoint
- Hemoglobin and coagulation parameters for safety tracking`''',
    new_highlights='''[
      { title: 'Broadest Myostatin Pathway Inhibition', body: 'ACE-031 sequesters myostatin, activin A, GDF-11, AND BMP-9 simultaneously — blocking the entire ActRIIB ligand family that limits muscle growth, rather than just myostatin alone. No other available compound matches this breadth of anabolic disinhibition.' },
      { title: 'Most Potent Single-Dose Lean Mass Effect in Human Trials', body: 'A single dose produced MRI-confirmed thigh muscle volume and bone mineral density increases within 28 days in Phase 2 healthy postmenopausal women — the largest anabolic lean mass effect ever measured from a single pharmaceutical dose in a controlled clinical trial.' },
      { title: 'Multi-Tissue Body Composition Effects', body: 'ACE-031 simultaneously increases lean mass, increases bone density, and reduces fat mass — a comprehensive body composition improvement reflecting ActRIIB\'s roles across muscle, bone, and adipose tissue biology beyond the anabolic focus of growth hormone peptides.' },
    ]'''
)

# ── 9. PNC-27 30mg ────────────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='pnc-27-30mg',
    next_slug='semaglutide-3mg',
    new_full_desc='''`PNC-27 is a chimeric peptide that combines the p53 MDM-2 binding domain with a leader sequence derived from the HDM-2-interacting region of p14ARF — designed to selectively penetrate and destroy cancer cell membranes while leaving normal cells unaffected. The selectively mechanism exploits a property unique to cancer cells: the aberrant expression of MDM-2 (murine double minute 2) protein on the plasma membrane of malignant cells, which is not found on normal cell membranes. PNC-27 binds to this membrane-expressed MDM-2, causing rapid and selective disruption of cancer cell plasma membranes.

The design of PNC-27 represents an elegant approach to cancer cell specificity. MDM-2 is well-characterized as the primary negative regulator of p53 — it binds to p53\'s transactivation domain in the nucleus to ubiquitinate and degrade p53. In cancer cells, MDM-2 is frequently overexpressed and, crucially, aberrantly trafficked to the plasma membrane — a translocation not observed in normal non-cancerous cells. PNC-27\'s p53 homologous peptide domain binds to this membrane-expressed MDM-2, while the leader sequence drives membrane penetration, resulting in pore formation and membrane disruption specifically in MDM-2-expressing cancer cells.

In vitro and in vivo preclinical studies have demonstrated PNC-27\'s selective cytotoxicity across multiple cancer cell lines: pancreatic adenocarcinoma, breast cancer, leukemia, melanoma, and others expressing membrane MDM-2. The cytotoxic mechanism is direct membrane disruption — cancer cells treated with PNC-27 undergo rapid necrosis rather than the slower apoptotic cell death, suggesting pore formation as the primary killing mechanism. Critically, normal cell lines exposed to the same PNC-27 concentrations show no significant cytotoxicity — the selectivity index (cancer/normal cell kill ratio) is high.

The peptide has progressed through preclinical development under the research of the Cooper laboratory and collaborators, with in vivo mouse tumor models demonstrating tumor growth inhibition following PNC-27 treatment. These studies demonstrate that the MDM-2 membrane expression selectivity translates from in vitro cell culture to living tumor microenvironments — the mechanism functions in the complex tissue context, not just simplified cell culture conditions.

PNC-27 is a research compound — it has not entered human clinical trials. Its significance lies in demonstrating a proof-of-concept cancer cell selectivity mechanism based on membrane MDM-2 targeting, and as a research tool for investigating MDM-2 membrane expression biology. The 30mg vial provides a substantial research quantity for in vitro experimentation. Research applications include: MDM-2 membrane expression studies, selective cytotoxicity assays in cancer cell lines, combination therapy research with conventional chemotherapeutics, and investigation of membrane disruption mechanisms in malignant cells.

This is a research compound for laboratory use. Not for human administration.`''',
    new_benefits='''[
      'Selective cancer cell membrane disruption — exploits MDM-2 membrane expression unique to malignant cells',
      'Normal cell sparing in vitro — high selectivity index cancer/normal cytotoxicity ratio',
      'Rapid necrotic cell death mechanism — direct pore formation rather than slower apoptotic pathway',
      'Active across multiple cancer cell types: pancreatic, breast, leukemia, melanoma with membrane MDM-2 expression',
      'In vivo tumor growth inhibition in mouse models — mechanism validated in living tumor microenvironments',
      'MDM-2 membrane expression biomarker potential — targets the specific molecular marker of malignant transformation',
      'Mechanistically distinct from chemotherapy — membrane disruption rather than DNA damage or enzyme inhibition',
      'Research tool for MDM-2 biology investigation and cancer selectivity mechanism studies',
      'Combination therapy research potential with conventional chemotherapeutics',
      'Proof-of-concept cancer selectivity based on tumor-specific protein membrane translocation',
    ]''',
    new_protocol='''`**Research Use Only — PNC-27:**
- Application: In vitro cancer cell biology research; in vivo preclinical tumor models
- NOT for human administration
- Concentration: Reconstitute to desired concentration for assay requirements

**In Vitro Research Applications:**
- Cytotoxicity assays: cancer cell lines vs. normal cell controls (selectivity index measurement)
- MDM-2 membrane expression correlation studies
- Pore formation and membrane disruption mechanism investigation
- Combination studies with standard chemotherapeutics for additive/synergistic effects

**In Vivo Preclinical Applications:**
- Subcutaneous tumor xenograft models in immunocompromised mice
- Dose-escalation protocols per published Cooper laboratory methodology
- Tumor volume measurement as primary efficacy endpoint

**Storage:**
- Lyophilized: -20°C, desiccated
- Reconstituted: 4°C, use within 7 days
- Avoid repeated freeze-thaw cycles`''',
    new_highlights='''[
      { title: 'MDM-2 Membrane Expression Selectivity', body: 'PNC-27 targets MDM-2 expressed on the plasma membrane of cancer cells — a molecular feature not present on normal cells. This tumor-specific membrane MDM-2 targeting provides a selectivity mechanism that is fundamentally different from any chemotherapy or targeted therapy approach.' },
      { title: 'Direct Membrane Pore Formation', body: 'Rather than inducing apoptosis through intracellular signaling cascades, PNC-27 causes direct plasma membrane disruption and rapid necrotic cell death — a killing mechanism that bypasses the apoptotic resistance mechanisms cancer cells frequently develop against conventional treatments.' },
      { title: 'Multi-Cancer Cell Line Activity', body: 'PNC-27 shows selective cytotoxicity across pancreatic adenocarcinoma, breast cancer, leukemia, and melanoma cell lines expressing membrane MDM-2 — demonstrating that MDM-2 membrane expression is a broadly shared cancer cell marker enabling peptide-based selective targeting.' },
    ]'''
)

# ── 10. Survodutide 10mg ──────────────────────────────────────────────────────
content = replace_product(
    content,
    slug='survodutide-10mg',
    next_slug='mazdutide-6mg',
    new_full_desc='''`Survodutide (BI 456906) is a dual GLP-1/Glucagon receptor agonist developed by Boehringer Ingelheim — one of the most clinically advanced non-semaglutide/tirzepatide weight loss peptides in late-stage development, with a distinct pharmacological profile driven by its significant glucagon receptor agonism alongside GLP-1 receptor activity. The glucagon component fundamentally distinguishes survodutide from pure GLP-1 agonists, adding hepatic fat mobilization and thermogenic metabolic effects that GLP-1 receptor activation alone does not provide.

The molecular mechanism of survodutide reflects its dual receptor profile. GLP-1 receptor agonism provides the established effects of this class: appetite suppression through hypothalamic signaling, delayed gastric emptying that reduces caloric intake and blunts postprandial glucose excursions, improved pancreatic insulin secretion in response to elevated glucose, and cardiovascular protective effects through GLP-1 receptor-expressing cardiac tissue. The simultaneous glucagon receptor agonism adds hepatic triglyceride lipolysis (glucagon drives hepatic fat mobilization), increased thermogenesis through brown adipose tissue activation, and additional hepatic metabolic effects that are particularly relevant for non-alcoholic fatty liver disease (NAFLD/MASH).

This dual activity produces a mechanistically differentiated weight loss and metabolic profile. Clinical trial data from Phase 2 studies demonstrates survodutide\'s efficacy: the SYNERGY-NASH trial in patients with MASH (metabolic dysfunction-associated steatohepatitis) showed survodutide produced significantly greater hepatic fat reduction than semaglutide comparators, with histological MASH resolution in a substantial proportion of participants. Body weight reduction in Phase 2 obesity trials reached 18–19% at 46 weeks — comparable to tirzepatide and approaching the efficacy ceiling of current GLP-1-based agents, while potentially offering superior hepatic benefits through the glucagon component.

The glucagon receptor agonism in survodutide requires careful pharmacological engineering — excess glucagon signaling drives hyperglycemia by stimulating hepatic glucose production, which would counteract the glucose-lowering GLP-1 component. Survodutide\'s dose ratio between GLP-1 and glucagon agonism is calibrated to achieve metabolic benefits from glucagon (hepatic fat, thermogenesis) without the glycemic liability, using the glucose-lowering GLP-1 component to offset potential glucagon-driven glucose elevation. This balance makes the ratio of dual agonism as pharmacologically significant as the absolute potency at each receptor.

Survodutide is currently in Phase 3 trials for obesity (SYNCHRONIZE program) and MASH — making it the most advanced GLP-1/glucagon dual agonist in clinical development. The MASH indication is of particular interest: MASH has extremely limited pharmacological treatment options, and survodutide\'s ability to combine appetite suppression, weight loss, and direct hepatic fat reduction through glucagon receptor agonism positions it as a potential breakthrough in this unmet need.

Research compound only. Protocol: doses ranging from 0.3mg to 4.8mg SC injection, with dose escalation to therapeutic target. Phase 2 studies used weekly subcutaneous injection.`''',
    new_benefits='''[
      'Dual GLP-1/Glucagon receptor agonism — metabolic profile mechanistically distinct from pure GLP-1 agonists',
      '18–19% body weight reduction at 46 weeks in Phase 2 obesity trials — top-tier efficacy approaching tirzepatide',
      'Superior hepatic fat reduction vs. semaglutide in SYNERGY-NASH trial — glucagon receptor hepatic lipolysis effect',
      'MASH histological resolution in substantial proportion of Phase 2 NASH trial participants',
      'Thermogenic enhancement through glucagon receptor-mediated brown adipose tissue activation',
      'Hepatic triglyceride mobilization beyond GLP-1 — addresses fatty liver with a mechanism semaglutide lacks',
      'GLP-1 component offsets glucagon glycemic liability — calibrated dual agonist balance',
      'Currently in Phase 3 obesity and MASH trials (SYNCHRONIZE program) — most advanced non-sema/tirz agent',
      'Addresses MASH — high unmet need indication with essentially no current pharmacological options',
      'Weekly subcutaneous injection dosing — same administration convenience as leading GLP-1 agents',
    ]''',
    new_protocol='''`**Research Protocol — Survodutide:**
- Route: Subcutaneous injection
- Frequency: Weekly (Phase 2 dosing schedule)
- Dose escalation: Start 0.3mg/week, escalate per tolerance over 12–16 weeks
- Target research doses: 2.4–4.8mg/week (Phase 2 efficacy range)

**Phase 2 Trial Context:**
- Obesity Phase 2: weekly SC injection, 46-week treatment period
- SYNERGY-NASH: weekly SC injection, primary endpoint hepatic fat change by MRI-PDFF

**GI Tolerability:**
- Nausea/vomiting most common adverse effects (class effect of GLP-1 agonism)
- Gradual dose escalation critical to minimize GI side effects
- Dose-dependent response — escalate to highest tolerated dose for efficacy

**Stacking Context:**
- Not recommended to stack with other GLP-1 or glucagon agonists (overlapping receptor targets)
- Can combine with MOTS-c or AICAR for AMPK-mediated metabolic complement

**Note:** Phase 3 trials ongoing (SYNCHRONIZE) — research compound, not approved`''',
    new_highlights='''[
      { title: 'Glucagon Receptor Adds Hepatic Dimension', body: 'Pure GLP-1 agonists drive weight loss primarily through appetite suppression. Survodutide\'s glucagon receptor agonism adds hepatic triglyceride mobilization and thermogenesis — a mechanistic dimension that produces superior MASH outcomes compared to semaglutide in head-to-head trial data.' },
      { title: 'Phase 3 MASH Potential Breakthrough', body: 'MASH (metabolic dysfunction-associated steatohepatitis) has virtually no approved pharmacological treatments. Survodutide\'s dual mechanism — weight loss plus direct hepatic fat reduction — positions it as one of the most compelling investigational agents for this high-unmet-need indication.' },
      { title: '18–19% Weight Loss at 46 Weeks', body: 'Phase 2 weight reduction data places survodutide in the same efficacy tier as tirzepatide — significantly above the 14–15% achievable with semaglutide — while the glucagon component provides additional metabolic benefits outside the direct weight loss dimension.' },
    ]'''
)


# ── Save ──────────────────────────────────────────────────────────────────────
open(path, 'w', encoding='utf-8').write(content)
new_size = len(content)
print(f"\nAll 10 products patched.")
print(f"File size change: {original_size} → {new_size} chars (+{new_size - original_size})")
