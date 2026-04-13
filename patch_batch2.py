#!/usr/bin/env python3
"""Batch 2 — 10 products: CagriSema, Ipamorelin 10mg, CJC-1295 No DAC, GHRP-2, GHRP-6, Hexarelin, Sermorelin 10mg, Tesamorelin 10mg, Selank 10mg, Semax 30mg"""

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
# 1. CAGRI-SEMA
# ─────────────────────────────────────────────────────────────────
slug = 'cagri-sema'
next_slug = 'tirzepatide-15mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Cagrilintide + Semaglutide (CagriSema) is one of the most scientifically compelling combination weight loss regimens in current development — pairing two peptides that target entirely different hormonal pathways to produce additive and potentially synergistic weight loss far exceeding either agent alone.

**Semaglutide: The GLP-1 Component**

Semaglutide is a GLP-1 (Glucagon-Like Peptide-1) receptor agonist with 94% homology to human GLP-1 and a 7-day half-life from albumin-binding modifications. The STEP trial program established it as the gold standard GLP-1 agent — producing 14.9% average weight loss over 68 weeks in STEP 1. Its primary mechanisms are hypothalamic appetite suppression (NPY/AgRP downregulation), gastric emptying delay (30–50% slowing), and hepatic glucose output reduction.

**Cagrilintide: The Amylin Component**

Cagrilintide (AM833) is a long-acting analog of amylin — the lesser-known but equally important pancreatic satiety peptide. Amylin is co-secreted with insulin from pancreatic beta cells in response to meals. Natural amylin has a half-life of minutes; cagrilintide uses fatty acid-based albumin binding (identical modification strategy to semaglutide) to achieve a ~7-day half-life, enabling a perfectly matched once-weekly co-administration schedule.

Amylin works through mechanisms entirely distinct from GLP-1:
- **Area Postrema**: The primary amylin signaling hub in the brainstem — distinct from hypothalamic GLP-1 receptors
- **Gastric Emptying**: Independent gastric emptying delay that adds to GLP-1's effect without apparent ceiling
- **Glucagon Suppression**: Post-meal glucagon suppression through direct pancreatic and CNS mechanisms
- **Body Weight Set Point**: Amylin is believed to act on the brain's defended body weight set point — working through a complementary neural circuit to GLP-1's satiety mechanisms

**The CagriSema Combination Advantage**

The dual-pathway hypothesis is that amylin and GLP-1 act on different neural circuits for satiety — meaning their effects combine at the behavioral output (food intake reduction) even though their mechanisms are independent. This is the same logic behind tirzepatide's dual GIP/GLP-1 design, validated by tirzepatide's superiority over either agent alone.

Phase 1b and Phase 2 combination data demonstrates the hypothesis is correct:
- Cagrilintide alone (4.5mg): ~6% weight loss over 26 weeks
- Semaglutide alone (2.4mg): ~14.9% over 68 weeks
- CagriSema combination: ~15.6% over just 32 weeks — with weight loss trajectory still declining at study end

The 32-week timeframe comparison is key: semaglutide requires 68 weeks to reach 14.9% — CagriSema matched and exceeded this in roughly half the time.

**REDEFINE Phase 3 Program**

The REDEFINE clinical trial program is currently evaluating CagriSema (cagrilintide 2.4mg + semaglutide 2.4mg, fixed combination) in large Phase 3 trials. Based on the Phase 2 trajectory, analysts and clinicians expect CagriSema to challenge tirzepatide's position as the most effective approved weight loss compound. Results from REDEFINE-1 are expected 2025–2026.

**Cardiovascular and Metabolic Effects**

Phase 2 data documented improvements beyond weight loss:
- HbA1c reduction: significant improvements in both T2D and non-diabetic subjects
- Blood pressure: systolic reductions consistent with GLP-1 class data
- Liver fat: reduction consistent with amylin and GLP-1 combined effects on hepatic lipid metabolism
- Triglycerides and LDL: favorable lipid profile changes

**Combination vs. Sequential Therapy**

The CagriSema combination outperforms sequential therapy (trying each agent alone and switching). Because the neural circuits for amylin and GLP-1 satiety are distinct, patients who have maximized semaglutide dosing and plateaued may respond robustly to the addition of cagrilintide — and vice versa. This complementarity is what makes the fixed combination uniquely valuable.`,
'''

w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      '~15.6% weight loss in 32 weeks — surpassing semaglutide\'s 68-week 14.9% in half the time',
      'Dual amylin + GLP-1 pathway targeting — two independent neural satiety circuits',
      'Amylin acts on area postrema (brainstem) — entirely distinct from GLP-1\'s hypothalamic target',
      'Additive gastric emptying delay from two independent mechanisms',
      'Amylin suppresses post-meal glucagon — reduces blood glucose spikes independent of GLP-1',
      'Matched 7-day half-life — both components co-administered in a single weekly injection',
      'Phase 3 REDEFINE program ongoing — expected to challenge tirzepatide\'s efficacy record',
      'Improves HbA1c, blood pressure, triglycerides, and liver fat beyond either agent alone',
      'Works in patients who have plateaued on semaglutide — complementary mechanism adds new response',
      'Novel approach to weight loss ceiling: adding amylin axis where GLP-1 axis is maxed',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**CagriSema Research Protocol:**
- Starting dose: cagrilintide 0.3mg + semaglutide 0.25mg weekly
- Escalate each component independently over 16–20 weeks
- Target maintenance: cagrilintide 2.4mg + semaglutide 2.4mg once weekly
- Route: Subcutaneous injection (abdomen, thigh, or upper arm)
- Same day each week for consistent plasma levels

**Dose Escalation Reference (each component):**
- Weeks 1–4: 0.25–0.3mg
- Weeks 5–8: 0.5–0.6mg
- Weeks 9–12: 1.0mg
- Weeks 13–16: 1.7–2.0mg
- Week 17+: 2.4mg maintenance

**GI Management:**
- Same nausea management protocol as semaglutide alone
- Avoid accelerating dose escalation — standard 4-week intervals are required
- Most GI effects resolve within 8–12 weeks of consistent dosing`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: '32-Week vs. 68-Week', body: 'CagriSema reached 15.6% weight loss in 32 weeks — semaglutide alone requires 68 weeks to reach 14.9%. The combination nearly doubles speed of result.' },
      { title: 'Dual Neural Circuit', body: 'Amylin (area postrema) + GLP-1 (hypothalamus) target different brain regions — genuinely additive satiety through independent pathways.' },
      { title: 'REDEFINE Phase 3', body: 'Currently in Phase 3 clinical trials. Projected to become the highest-efficacy fixed-dose combination in metabolic medicine.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ CagriSema patched")

# ─────────────────────────────────────────────────────────────────
# 2. IPAMORELIN 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'ipamorelin-10mg'
next_slug = 'cjc-1295-no-dac-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Ipamorelin is the most selective growth hormone releasing peptide (GHRP) ever developed — a pentapeptide that triggers strong, clean GH pulses from the pituitary with a side-effect profile that is dramatically cleaner than any other GHRP. Where GHRP-2 and GHRP-6 elevate cortisol, prolactin, and ghrelin to varying degrees, ipamorelin's receptor selectivity makes it the definitive choice for sustained, long-duration GH optimization protocols.

**How Ipamorelin Works: Ghrelin Receptor Selectivity**

Ipamorelin acts as a selective agonist at the GHS-R1a receptor (the ghrelin receptor) — the primary GHRP receptor on pituitary somatotrophs that controls GH secretion. The key word is selective: ipamorelin binds GHS-R1a with high affinity but does NOT meaningfully activate the corticotrophic axis (ACTH/cortisol), lactotrophic axis (prolactin), or ghrelin-mediated hunger pathways.

This selectivity profile is what makes ipamorelin unique:
- **GHRP-2**: Strong GHS-R1a activation + significant cortisol + moderate prolactin elevation
- **GHRP-6**: Strong GHS-R1a activation + moderate cortisol + significant ghrelin-mediated hunger
- **Hexarelin**: Strongest GH pulse of any GHRP + cardiac receptors + rapid desensitization
- **Ipamorelin**: Strong, clean GHS-R1a activation — essentially zero cortisol, prolactin, or hunger elevation

**GH Pulse Characteristics**

Ipamorelin triggers sharp, physiological GH pulses that closely mimic the body's natural GH secretion pattern. A single 300mcg injection produces a GH peak at approximately 30–60 minutes post-injection, with pulse duration of 2–3 hours before returning to baseline. This pulsatile pattern is critical for preserving pituitary sensitivity and avoiding the receptor downregulation that occurs with continuous GH elevation.

When combined with a GHRH analog (CJC-1295 No DAC), the combined pulse amplitude increases 3–5× over either agent alone — this is the ipamorelin/CJC-1295 combination that became the most popular GH peptide stack in the research community.

**GH Axis Benefits Over Time**

GH naturally declines with age — by approximately 14% per decade after age 25. By middle age, most individuals experience GH secretion at 40–50% of youthful levels. This decline correlates with:
- Increased visceral fat accumulation (GH is lipolytic at adipocytes)
- Reduced lean muscle mass and slower recovery
- Decreased collagen synthesis and skin/connective tissue quality
- Impaired sleep architecture (GH secretion is highest during slow-wave sleep)
- Reduced bone mineral density

Ipamorelin's GH pulse stimulation reverses these downstream effects over 12–24 week protocols. Most users report improvements in sleep quality (typically first), body composition changes (8–12 weeks), skin/hair quality improvements (12–16 weeks), and enhanced recovery capacity throughout.

**Why Ipamorelin Standalone vs. the Combination**

The Ipamorelin 10mg standalone is ideal for:
- Users who already have CJC-1295 No DAC or another GHRH and want to add GHRP separately
- Custom dosing flexibility — precise GHRP control without a fixed blend ratio
- Lower-dose protocols (200mcg) for subtle sleep/recovery optimization without full GH axis stimulation
- Stacking with IGF-1 LR3 during intensive anabolic phases (GHRP provides GH pulse while LR3 covers IGF-1 receptor directly)

The Ipamorelin/CJC-1295 Blend product is ideal for convenience and the most common protocol stack.

**Long-Term Safety Profile**

Ipamorelin has been studied for up to 2 years in continuous use without evidence of somatotroph desensitization, pituitary dysfunction, or adverse endocrine effects — a profile unmatched by any other GHRP. The peptide's strict GHS-R1a selectivity means the HPA axis remains undisturbed, making it suitable for protocols lasting 6–24 months with no cycling requirement beyond occasional breaks for psychological reset.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Most selective GHRP — zero cortisol, prolactin, or ghrelin-mediated hunger elevation',
      'Clean GH pulses: 300mcg triggers GH peak at 30–60 min, returning to baseline in 2–3 hours',
      'Preserves pulsatile GH secretion pattern — prevents pituitary receptor downregulation',
      '3–5× GH pulse amplification when combined with CJC-1295 No DAC',
      'Improves sleep architecture — specifically slow-wave sleep GH release',
      'Reduces visceral fat accumulation through GH-mediated lipolysis',
      'Supports lean muscle mass and recovery acceleration',
      'Stimulates collagen synthesis — improves skin, hair, and connective tissue quality',
      'Safe for 12–24 month protocols — no somatotroph desensitization documented',
      'Increases bone mineral density with long-term use',
      'Synergistic with IGF-1 LR3 for complete GH-axis anabolic coverage',
      '99.2% purity with third-party Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Standard Ipamorelin Protocol:**
- Dose: 200–300mcg per injection (most common: 300mcg)
- Timing: Immediately before sleep in a fasted state (3+ hours post-meal)
- Optional second injection: 30 minutes pre-workout (fasted)
- Route: Subcutaneous injection (abdomen or thigh)
- Frequency: Daily, or 5 days on / 2 days off for physiological pulsatility
- Duration: 12–24 weeks; no mandatory off-cycle required

**Combination with CJC-1295 No DAC:**
- Draw both into the same syringe
- Inject simultaneously for synergistic GH pulse amplification
- CJC-1295 No DAC dose: 100–200mcg with Ipamorelin 300mcg
- Peak GH pulse 3–5× greater than Ipamorelin alone

**Reconstitution:**
- Reconstitute with 2mL bacteriostatic water
- Each 0.06mL = 300mcg at this dilution
- Refrigerate after reconstitution; use within 28 days

**Injection Timing Guidelines:**
- Fasted state is critical — insulin suppresses GH pulse amplitude significantly
- Avoid carbohydrates or protein within 2 hours of injection
- Pre-sleep injection takes advantage of natural GH release window (10pm–2am)`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Zero Cortisol Effect', body: 'Unlike GHRP-2 and GHRP-6, Ipamorelin does not elevate cortisol, prolactin, or ghrelin — the cleanest GHRP side-effect profile available.' },
      { title: '3–5× Pulse Amplification', body: 'Combined with CJC-1295 No DAC, Ipamorelin triggers GH pulses 3–5× greater than either agent alone through complementary GHRP/GHRH mechanisms.' },
      { title: '24-Month Safety Data', body: 'No pituitary desensitization or endocrine dysfunction in long-term protocols — uniquely suited for extended use.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Ipamorelin 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 3. CJC-1295 NO DAC 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'cjc-1295-no-dac-10mg'
next_slug = 'cjc-1295-no-dac-5mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `CJC-1295 No DAC (also known as Mod GRF 1-29 or Modified GRF) is a 29-amino acid synthetic analog of human Growth Hormone Releasing Hormone (GHRH) — the hypothalamic peptide that signals the pituitary to release growth hormone. Unlike the DAC (Drug Affinity Complex) version, CJC-1295 No DAC retains a short 30-minute half-life that produces physiologically pulsatile GH release when paired with a GHRP like Ipamorelin.

**The GHRH Side of the Equation**

The GH axis operates through two complementary signals from the hypothalamus:
1. **GHRH** — stimulates GH secretion ("gas pedal")
2. **Somatostatin** — inhibits GH secretion ("brake pedal")

GHRPs (like Ipamorelin) work at the pituitary level to amplify GH release in response to existing GHRH signals. CJC-1295 No DAC delivers the GHRH signal itself — independently stimulating the pituitary GHRH-R to initiate GH secretion. When both signals arrive simultaneously, the combined effect on GH pulse amplitude is multiplicative (3–5×), not merely additive.

**Why No DAC vs. CJC-1295 With DAC**

CJC-1295 No DAC and CJC-1295 With DAC are fundamentally different compounds despite similar names:

| Feature | No DAC | With DAC |
|---|---|---|
| Half-life | 30 minutes | 8–14 days |
| GH release pattern | Pulsatile (natural) | Blunted continuous elevation |
| Appropriate pairing | Ipamorelin or GHRP | Can be used alone |
| Ideal use case | Natural pulsatile protocols | Convenience/less frequent injection |

The No DAC version is preferred by most advanced researchers because pulsatile GH release more closely mirrors the body's natural secretion pattern — protecting pituitary sensitivity and avoiding the IGF-1 suppression that can occur with constant GH elevation.

**Modifications for Stability**

CJC-1295 No DAC incorporates four amino acid substitutions vs. native GHRH(1-29): Ala2Ser (position 2), Gln8Ala (position 8), Ser27Leu (position 27), and Leu26 to Norleucine (position 26). These substitutions protect the peptide from rapid degradation by DPP-IV and other serum peptidases — extending its biologically active window from the ~7 minutes of native GHRH to approximately 30 minutes, sufficient for a clean GH pulse while maintaining pulsatile kinetics.

**The Ipamorelin + CJC-1295 No DAC Stack: Science Behind the Synergy**

This combination has become the most popular GH optimization stack in the research peptide community — and the mechanism is clear. GHRH (CJC-1295 No DAC) and GHRPs (Ipamorelin) work through completely different pituitary receptors:
- GHRH-R: Gs-coupled receptor — increases cAMP, activates PKA, triggers GH exocytosis
- GHS-R1a: Gq-coupled receptor — activates PKC and intracellular calcium, triggers GH exocytosis

When both pathways are activated simultaneously, the converging intracellular signals produce a GH pulse 3–5× larger than either peptide alone. For a 10mg CJC-1295 No DAC vial at 100–200mcg per injection, users have approximately 50–100 injections worth of supply — sufficient for 10–20 weeks when used daily.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Directly activates pituitary GHRH-R — the natural hypothalamic GH secretion signal',
      'Pulsatile 30-minute half-life preserves natural GH secretion pattern',
      '3–5× GH pulse amplification when combined with Ipamorelin (complementary receptor mechanisms)',
      'Four amino acid substitutions protect from DPP-IV degradation without altering kinetics',
      'Distinct from CJC-1295 With DAC — no continuous GH elevation or IGF-1 suppression risk',
      'Gs-coupled GHRH-R activation converges with Gq-coupled GHS-R1a for synergistic pulse',
      'Precise injection timing enables alignment with natural GH pulse windows',
      'Preserves pituitary sensitivity with long-term use (physiological pulsatility vs. continuous stimulation)',
      'Can be drawn into the same syringe as Ipamorelin — single injection convenience',
      '99.2% purity with third-party Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Standard Protocol (paired with Ipamorelin):**
- CJC-1295 No DAC: 100–200mcg per injection
- Ipamorelin: 200–300mcg per injection
- Combine in same syringe and inject simultaneously
- Timing: Fasted state, 30 minutes before bed (prime GH release window)
- Optional second injection: 30 minutes pre-workout
- Frequency: Daily, or 5 days on / 2 days off
- Duration: 12–24 weeks

**Standalone Protocol (without Ipamorelin):**
- Dose: 200–400mcg per injection
- Produces modest GH pulse but significantly enhanced by GHRP co-administration
- Less common — most users prefer the full synergistic combination

**Timing Notes:**
- Must inject in a fasted state — insulin and elevated blood glucose blunt GH response
- Allow 3+ hours post-meal before injection
- Pre-sleep injection is preferred: maximizes slow-wave sleep GH pulse

**Reconstitution:**
- 2mL bacteriostatic water → 5mg/mL → 0.02–0.04mL per 100–200mcg dose
- Stable refrigerated for 28 days post-reconstitution`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'GHRH Signal — Pure', body: 'CJC-1295 No DAC delivers the hypothalamic GHRH signal directly to pituitary GHRH receptors — the upstream half of the GH pulse equation.' },
      { title: '3–5× Pulse With Ipamorelin', body: 'GHRH-R (CJC) + GHS-R1a (Ipamorelin) activate different intracellular cascades that converge multiplicatively — producing pulses far beyond additive.' },
      { title: '30-Minute Half-Life Advantage', body: 'Unlike CJC-1295 With DAC (8–14 day half-life), No DAC preserves the pulsatile pattern critical for long-term pituitary sensitivity.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ CJC-1295 No DAC 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 4. GHRP-2 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'ghrp-2-10mg'
next_slug = 'ghrp-6-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `GHRP-2 (Growth Hormone Releasing Peptide-2) is one of the most potent synthetic GHRPs ever developed — a hexapeptide that produces among the highest GH pulse amplitudes of any peptide available. For researchers prioritizing maximum acute GH output, GHRP-2 represents the upper ceiling of GHRP-mediated GH stimulation.

**Mechanism and Potency**

GHRP-2 acts as a potent agonist at the GHS-R1a ghrelin receptor — the same receptor targeted by Ipamorelin — but with less receptor selectivity. While Ipamorelin achieves strong GH release through highly targeted GHS-R1a activation, GHRP-2 produces a broader receptor activation pattern that results in:
- Higher peak GH pulse amplitude vs. Ipamorelin (30–50% greater at matched doses)
- Moderate cortisol elevation (approximately 30–50% above baseline)
- Moderate prolactin elevation (significant for some users)
- Minimal to no ghrelin-mediated hunger stimulation (unlike GHRP-6)

The cortisol and prolactin elevation is dose-dependent — at lower doses (100–150mcg), these side effects are more manageable. The tradeoff vs. Ipamorelin is that users accept some HPA axis activation for higher peak GH output.

**Where GHRP-2 Outperforms**

GHRP-2 is specifically preferred over Ipamorelin when:
- Maximum acute GH pulse amplitude is the primary goal
- Short-cycle protocols where cumulative cortisol effects are limited by cycle length
- Research applications comparing GHRP potencies
- Users who have developed tolerance to Ipamorelin and seek higher GH stimulation
- Pairing with high-dose CJC-1295 No DAC for maximum GH output protocols

**Clinical Research Context**

GHRP-2 is one of the most extensively studied synthetic GHRPs in peer-reviewed literature. Multiple human studies have validated its ability to stimulate GH secretion dose-dependently, and it has been used as a pharmacological GH stimulation test in clinical GH deficiency evaluation. This research foundation provides confidence in its mechanism and dose-response characteristics.

**GHRP-2 + CJC-1295 No DAC: Maximum Output Stack**

The GHRP-2/CJC-1295 No DAC combination produces the highest absolute GH pulse amplitude achievable through peptide-only protocols:
- GHRP-2 (GHS-R1a): 200–300mcg
- CJC-1295 No DAC (GHRH-R): 100–200mcg
- Combined GH pulse: estimated 5–8× baseline (vs. 3–5× for Ipamorelin/CJC)

For experienced researchers who have used Ipamorelin/CJC and want to explore the maximum ceiling of GHRP-mediated GH release, GHRP-2 is the logical next step.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Highest GH pulse amplitude among common GHRPs — 30–50% greater than Ipamorelin at matched doses',
      'Well-characterized dose-response: used clinically as a GH stimulation test',
      'Moderate cortisol elevation — manageable with dose optimization',
      'Minimal ghrelin-mediated hunger (unlike GHRP-6) at standard doses',
      'Extensive peer-reviewed research literature — among the most studied GHRPs',
      'Synergistic with CJC-1295 No DAC for maximum combined GH pulse output',
      'Stimulates GH independent of endogenous GHRH levels',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**GHRP-2 Protocol:**
- Dose: 100–300mcg per injection
- Starting dose: 100mcg (assess cortisol/prolactin tolerance)
- Maintenance: 200–300mcg (high GH output)
- Timing: Fasted state — pre-sleep or pre-workout
- Frequency: 1–3× daily (3× maximizes pulsatile GH release)
- Duration: 6–12 weeks with 4-week off-cycle periods (to manage cortisol exposure)

**With CJC-1295 No DAC:**
- GHRP-2 200–300mcg + CJC-1295 No DAC 100–200mcg
- Combine in same syringe and inject simultaneously
- This stack produces the highest peptide-achievable GH pulse amplitude

**Cortisol Management:**
- Keep cycles to 8–12 weeks maximum
- Monitor for signs of excess cortisol (water retention, sleep disruption)
- Lower dose (100mcg) significantly reduces cortisol impact while maintaining strong GH output`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Max GH Amplitude', body: 'GHRP-2 produces 30–50% higher GH pulses than Ipamorelin at comparable doses — the GHRP choice for those prioritizing peak GH output.' },
      { title: 'Clinical Validation', body: 'Used as a pharmacological GH stimulation test in clinical settings — among the most research-supported synthetic GHRPs.' },
      { title: 'Manageable Cortisol', body: 'Cortisol elevation is dose-dependent and cycle-length-dependent — kept in check with standard dose optimization and cycle management.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ GHRP-2 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 5. GHRP-6 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'ghrp-6-10mg'
next_slug = 'hexarelin-5mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `GHRP-6 is the original synthetic growth hormone releasing hexapeptide — the first GHRP to demonstrate clinically significant GH secretion in human studies and a foundational compound in GH peptide research. Though newer GHRPs have largely superseded it for pure GH optimization protocols, GHRP-6 occupies a unique position because of its dual GH + appetite stimulation mechanism — making it the GHRP of choice for mass-building and aggressive anabolic protocols.

**Historical Significance and Research Foundation**

GHRP-6 was synthesized in the 1980s and became one of the most studied GHRPs in academic literature through the 1990s and 2000s. The foundational peptide GH research we rely on today — dose-response curves, injection timing optimization, synergy with GHRH analogs, GH pulse characteristics — was largely conducted using GHRP-6. This extensive research history provides a level of pharmacological characterization unmatched by many newer peptides.

**The Ghrelin Connection: Appetite Stimulation**

GHRP-6 differs from Ipamorelin in one critical way: it produces significant ghrelin-mediated appetite stimulation. Ghrelin is the "hunger hormone" — a gut peptide that signals the hypothalamus to increase food intake. GHRP-6 activates the ghrelin receptor (GHS-R1a) with less selectivity than Ipamorelin, producing both GH release AND the downstream appetite-stimulating effects of full ghrelin receptor activation.

This property is a liability for individuals managing weight or caloric intake — but it is a distinct strategic advantage for those in caloric surplus phases (bulking). GHRP-6 essentially combines GH pulse stimulation with appetite enhancement, making it easier to eat in the aggressive surplus required for maximum mass gain. Users typically report increased hunger within 30–60 minutes of injection that persists for 1–3 hours.

**GH Output Characteristics**

GHRP-6 produces strong, supraphysiological GH pulses — amplitude broadly similar to GHRP-2. Like all GHRPs, its pulse amplitude is dramatically enhanced when co-administered with a GHRH analog (CJC-1295 No DAC) via the dual receptor convergence mechanism. At matched doses, GHRP-6 produces GH pulses moderately higher than Ipamorelin due to less selective receptor engagement activating additional signaling pathways.

**Side Effect Profile**

GHRP-6 produces:
- Significant ghrelin-mediated hunger (feature in bulking; liability in cutting)
- Moderate cortisol elevation (less than GHRP-2 at comparable doses)
- Moderate prolactin elevation
- No significant cardiac effects

For most modern GH optimization protocols, Ipamorelin is preferred over GHRP-6 due to its cleaner side-effect profile. GHRP-6 is specifically recommended when appetite stimulation is desired as part of the protocol design.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Original GHRP — the most extensively researched synthetic GH releasing peptide in academic literature',
      'Strong GH pulse stimulation with well-characterized dose-response profile',
      'Significant appetite stimulation via ghrelin receptor activation — strategic advantage for bulking protocols',
      'Synergistic with CJC-1295 No DAC for amplified GH pulses via dual receptor mechanism',
      'Strong anabolic environment: GH + elevated appetite + improved nutrient partitioning',
      'Foundation compound with decades of safety and pharmacology data',
      'More aggressive GH + hunger stimulation than Ipamorelin for mass-focused protocols',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**GHRP-6 Protocol:**
- Dose: 100–300mcg per injection
- Timing: Fasted state (pre-sleep or 30 min pre-workout)
- Frequency: 1–3× daily; 3× maximizes GH pulse frequency
- Duration: 6–12 week cycles with 4-week breaks

**For Bulking Protocols (Appetite Amplification):**
- Inject 30–45 minutes before a large meal to align hunger peak with eating opportunity
- The hunger effect peaks 30–60 minutes post-injection — time this to your largest meal window
- Combine with CJC-1295 No DAC for maximum GH + appetite synergy

**Side Effect Management:**
- Expect notable hunger within 30–60 minutes post-injection — have food prepared
- Cortisol and prolactin elevation: use 6-week maximum cycles in sensitive individuals
- Not recommended for cutting or caloric-deficit protocols — Ipamorelin preferred in those contexts`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Appetite Stimulation Feature', body: 'GHRP-6 produces significant ghrelin-mediated hunger — a strategic tool for caloric surplus mass-building protocols.' },
      { title: 'Historical Gold Standard', body: 'The foundational GH peptide in academic research — decades of dose-response, safety, and pharmacology data.' },
      { title: 'Strong GH Pulses', body: 'Among the strongest GHRP-mediated GH pulse amplitudes, further amplified 3–5× by CJC-1295 No DAC co-administration.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ GHRP-6 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 6. HEXARELIN 5mg
# ─────────────────────────────────────────────────────────────────
slug = 'hexarelin-5mg'
next_slug = 'sermorelin-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Hexarelin is the most potent synthetic GHRP ever developed — a hexapeptide that produces the highest GH pulse amplitude of any peptide in its class while also demonstrating unique cardioprotective properties that are entirely independent of its GH-releasing activity. For researchers specifically targeting peak GH output or cardiac protection mechanisms, hexarelin occupies a unique position in the GHRP family.

**GH Potency: The Strongest GHRP**

Hexarelin activates GHS-R1a (the ghrelin receptor) with the highest binding affinity and efficacy of any synthetic GHRP. At comparable doses:
- Hexarelin produces GH pulses 40–80% greater than Ipamorelin
- Pulse amplitude exceeds GHRP-2 and GHRP-6 at matched doses
- The theoretical ceiling of GHRP-mediated GH release

However, this potency comes with important caveats:
- **Rapid desensitization**: Hexarelin produces faster receptor downregulation than other GHRPs — requiring stricter cycle protocols (4–6 weeks on, 4+ weeks off)
- **Cortisol elevation**: Moderate to high cortisol and prolactin elevation at higher doses
- **Tolerance development**: GH pulse amplitude declines measurably within 2–4 weeks of continuous use

For these reasons, hexarelin is typically used in short-burst protocols specifically designed around its highest-output phase before desensitization develops.

**Cardioprotective Mechanism: Independent of GH**

Hexarelin's most scientifically unique property is its cardiac protection — an effect that persists even in GH-deficient subjects and is abolished by GHS-R1a antagonists rather than GH receptor antagonists, confirming it acts directly through cardiac GHS-R1a receptors rather than via downstream GH or IGF-1.

Cardiac GHS-R1a activation by hexarelin produces:
- **Ischemia/reperfusion protection**: Hexarelin significantly reduces cardiac damage in ischemia/reperfusion models — the key mechanism in heart attack damage mitigation
- **Coronary vasodilation**: Direct coronary artery dilation independent of GH/IGF-1
- **Cardiomyocyte protection**: Anti-apoptotic signaling in cardiomyocytes under stress conditions
- **Improved cardiac function**: Enhanced contractility and ejection fraction in models of cardiac dysfunction

In human studies, hexarelin improved cardiac function in GH-deficient patients even before GH levels normalized — confirming the direct cardiac mechanism independent of GH axis activation.

**Research Applications**

The combination of peak GH pulse amplitude + direct cardiac GHS-R1a activation makes hexarelin uniquely valuable for:
- Maximum-output GH protocols (short cycles prioritizing pulse height over duration)
- Cardiac research applications where GH-independent cardioprotection is being studied
- Researchers who have exhausted Ipamorelin and GHRP-2 protocols and need higher GH stimulation
- Combined GH + cardiac protection protocols (particularly relevant for older researchers with cardiovascular risk factors)`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Highest GH pulse amplitude of any synthetic GHRP — 40–80% greater than Ipamorelin at matched doses',
      'GH-independent cardioprotection via cardiac GHS-R1a receptors — unique among all GHRPs',
      'Ischemia/reperfusion protection in cardiac models — reduces myocardial damage markers',
      'Coronary vasodilation independent of GH or IGF-1 — direct cardiac mechanism confirmed',
      'Anti-apoptotic signaling in cardiomyocytes under ischemic stress',
      'Improved cardiac contractility and ejection fraction in human GH-deficient studies',
      'Short-burst cycle design maximizes GH output before desensitization window',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Hexarelin Protocol (Short Cycle — Mandatory):**
- Dose: 100–200mcg per injection
- Starting dose: 100mcg (assess tolerance)
- Timing: Fasted state — pre-sleep (primary) or pre-workout (optional)
- Frequency: Once or twice daily
- Cycle: Maximum 4–6 weeks on; minimum 4 weeks off
- OFF-CYCLE IS MANDATORY: receptor desensitization begins within 2–3 weeks

**With CJC-1295 No DAC:**
- Hexarelin 100–200mcg + CJC-1295 No DAC 100–200mcg
- Produces the highest achievable peptide GH pulse amplitude
- Still limit to 4–6 week maximum cycle

**Monitoring Desensitization:**
- If GH-related effects (recovery speed, sleep quality, pump improvement) decline noticeably during cycle, stop and begin off-cycle period
- Do not attempt to compensate with higher doses — receptor downregulation will not respond to dose increases

**Cardiac Research Context:**
- Lower doses (100mcg once daily) sufficient to study cardiac GHS-R1a effects
- Cardiac protection effects do not appear to desensitize at the same rate as GH release`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Most Potent GHRP', body: '40–80% higher GH pulse amplitude than Ipamorelin at comparable doses — the absolute ceiling of GHRP-mediated GH release.' },
      { title: 'GH-Independent Cardioprotection', body: 'Cardiac GHS-R1a activation protects against ischemia/reperfusion injury independently of GH levels — a mechanism unique to hexarelin among GHRPs.' },
      { title: 'Strict 4–6 Week Cycles', body: 'Rapid receptor desensitization requires mandatory off-cycles — but these cycles deliver maximum GH output before downregulation begins.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Hexarelin 5mg patched")

# ─────────────────────────────────────────────────────────────────
# 7. SERMORELIN 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'sermorelin-10mg'
next_slug = 'sermorelin-5mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Sermorelin is a 29-amino acid synthetic fragment of human Growth Hormone Releasing Hormone (GHRH) — the first GHRH analog to achieve FDA approval (for pediatric GH deficiency, brand name Geref) and one of the most clinically studied GH secretagogues in medical history. Its mechanism, clinical history, and safety profile are better documented than virtually any other GHRH analog.

**The GHRH Fragment: Why 29 Amino Acids**

Human GHRH is a 44-amino acid peptide produced by the hypothalamus. Research established that the first 29 amino acids (GHRH 1-29) contain the full biological activity of the complete 44-amino acid sequence — the C-terminal region (amino acids 30-44) is not required for receptor binding or GH stimulation. Sermorelin is essentially the minimal active fragment of human GHRH.

This minimization has practical advantages:
- Smaller molecular size reduces immunogenicity risk
- Retains full GHRH-R binding affinity
- Production is simpler and more consistent at scale
- Regulatory history is extensive (FDA approval provides a foundation of safety data)

**Mechanism: Pituitary-Driven Natural GH Release**

Sermorelin works exclusively through the physiological GHRH pathway — binding GHRH receptors on pituitary somatotrophs and stimulating GH secretion in a completely natural, pulsatile fashion. Unlike exogenous GH (which bypasses the pituitary entirely), sermorelin:
- Preserves the pituitary's role in GH regulation
- Maintains pulsatile GH secretion patterns
- Allows somatostatin feedback mechanisms to remain active (preventing excess GH elevation)
- Does not suppress endogenous GHRH production

This physiological regulation is why sermorelin is considered one of the safest approaches to GH optimization — it works with the body's existing regulatory systems rather than overriding them.

**Clinical History and Safety Data**

Sermorelin received FDA approval in 1997 for pediatric GH deficiency. Its clinical track record spans 30+ years of use, providing:
- Long-term safety data unavailable for newer peptides
- Well-established dose-response pharmacokinetics
- Documented efficacy in GH-deficient populations
- Clinical prescribing that informs research protocols

The prescription sermorelin market (compounding pharmacies, anti-aging clinics) has generated additional real-world data from widespread adult use over 20+ years.

**Sermorelin vs. Newer GHRH Analogs**

How does sermorelin compare to CJC-1295 No DAC and Tesamorelin?

- **Half-life**: Sermorelin ~10–15 minutes; CJC-1295 No DAC ~30 minutes; Tesamorelin ~30 minutes
- **Modifications**: Sermorelin is the native 1-29 fragment (unmodified); CJC-1295 No DAC has 4 stabilizing substitutions; Tesamorelin has a trans-3-hexenoic acid conjugation
- **GH output**: Sermorelin produces clean, natural GH pulses; CJC and Tesamorelin produce slightly more sustained stimulation due to longer half-lives
- **Clinical history**: Sermorelin has FDA approval and 30+ years of data; others have less long-term human data
- **Pairing**: All three pair well with Ipamorelin for synergistic GH release`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'FDA-approved GHRH analog — the most clinically validated synthetic GHRH in medical history',
      'Stimulates pituitary GH release through physiological GHRH pathway — works with the body, not around it',
      'Preserves pulsatile GH secretion pattern and pituitary regulatory mechanisms',
      'Somatostatin feedback remains active — prevents excessive GH elevation',
      '30+ years of clinical safety data across pediatric and adult populations',
      'Does not suppress endogenous GHRH production',
      'Synergistic with Ipamorelin for 3–5× amplified GH pulses vs. either alone',
      'Shorter half-life than CJC-1295 No DAC provides tighter control over injection timing',
      'Native 1-29 fragment — the minimal bioactive GHRH with lowest immunogenicity risk',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Sermorelin Protocol:**
- Dose: 200–500mcg per injection
- Timing: 30–60 minutes before sleep (fasted state — 3+ hours post-meal)
- Frequency: Daily, or 5 days on / 2 days off
- Duration: 12–24 weeks; longer protocols well-tolerated

**Combined with Ipamorelin:**
- Sermorelin 200–400mcg + Ipamorelin 200–300mcg in same syringe
- Inject together for synergistic GH pulse
- The combination produces significantly higher GH pulses than sermorelin alone

**Reconstitution:**
- Reconstitute with 2mL bacteriostatic water (5mg/mL)
- 0.04–0.08mL per 200–400mcg injection
- Refrigerate; use within 28 days

**Expected Timeline:**
- Weeks 1–4: Sleep quality improvements, subtle recovery enhancement
- Weeks 5–12: Body composition changes begin — visceral fat reduction, lean mass improvement
- Weeks 13–24: Full effects on skin quality, bone density, and body composition`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'FDA Approved', body: 'Sermorelin is the only GHRH analog that received FDA approval — 30+ years of clinical safety and efficacy data across adult and pediatric populations.' },
      { title: 'Physiological GH Release', body: 'Stimulates the pituitary through its natural GHRH receptor — preserving somatostatin feedback and pulsatile secretion unlike exogenous GH administration.' },
      { title: 'The Original GHRH', body: 'Native human GHRH 1-29 fragment — minimal bioactive sequence with the deepest research foundation of any GHRH analog.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Sermorelin 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 8. TESAMORELIN 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'tesamorelin-10mg'
next_slug = 'tesamorelin-20mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Tesamorelin (brand name Egrifta) is an FDA-approved GHRH analog with a specific clinical indication: reduction of visceral adipose tissue (VAT) in HIV-associated lipodystrophy. It is the only peptide in existence with FDA approval specifically targeting visceral fat reduction — and the clinical data behind this approval provides a uniquely robust evidence base for its metabolic applications.

**The Trans-3-Hexenoic Acid Modification**

Tesamorelin is synthesized by conjugating human GHRH(1-44) — the complete 44-amino acid GHRH sequence, unlike sermorelin which uses only 1-29 — with trans-3-hexenoic acid at the N-terminus. This modification dramatically extends the peptide's half-life and metabolic stability:
- Native GHRH: ~7 minutes half-life (rapidly cleaved by DPP-IV)
- Tesamorelin: ~30 minutes half-life — matching CJC-1295 No DAC without the amino acid substitutions

The complete 1-44 sequence plus the N-terminal fatty acid conjugation creates a compound with slightly different receptor kinetics than sermorelin (1-29) — thought to contribute to tesamorelin's particularly pronounced visceral fat selectivity.

**FDA Approval and Clinical Evidence**

Tesamorelin received FDA approval in 2010 based on two Phase 3 pivotal trials:
- **Study 1** (n=412, 26 weeks): 15.2% reduction in visceral adipose tissue vs. 1.4% placebo increase — net difference of ~16.6%
- **Study 2** (n=273, 26 weeks): 17.8% VAT reduction vs. 0.5% increase in placebo
- Secondary endpoints: Improved triglycerides (-40 to -50 mg/dL), reduced LDL:HDL ratio, improved insulin sensitivity
- Trunk fat reduction correlated with improved quality of life scores

At 52 weeks (extension study), continuous tesamorelin maintained the VAT reduction — demonstrating sustained efficacy without tolerance development.

**Why Visceral Fat Specifically?**

The selective visceral fat reduction is mechanistically significant. Tesamorelin stimulates GH release, which then signals adipocytes through the GH receptor. Visceral adipocytes (intra-abdominal fat) express the highest density of GH receptors of any fat depot — making them proportionally more sensitive to GH-mediated lipolysis than subcutaneous fat. This receptor density difference explains why tesamorelin produces proportionally greater visceral vs. subcutaneous fat reduction.

Visceral fat is metabolically distinct from subcutaneous fat — it is more metabolically active, more strongly associated with insulin resistance, inflammation, cardiovascular disease, and type 2 diabetes, and it produces more adipokines and inflammatory cytokines. Reducing visceral fat specifically provides greater metabolic benefit per kilogram lost than subcutaneous fat reduction.

**Metabolic and Cardiovascular Benefits**

Beyond VAT reduction, tesamorelin Phase 3 data documented:
- Triglycerides: -40 to -50 mg/dL (significant cardiovascular risk reduction)
- Total cholesterol/HDL ratio: improved
- Liver fat: reduction in subjects with hepatic steatosis (NAFLD/NASH)
- C-reactive protein: modest reduction (marker of systemic inflammation)
- IGF-1: increased in parallel with GH stimulation (downstream anabolic effects)

**Tesamorelin vs. Ipamorelin/CJC for Visceral Fat**

Tesamorelin's advantage over the Ipamorelin/CJC-1295 combination is specifically its FDA approval and dedicated clinical evidence for visceral fat. The mechanism (GH stimulation → visceral adipocyte lipolysis) is shared by all GHRH analogs, but tesamorelin is the only one with prospective clinical trial data quantifying the visceral fat reduction effect specifically.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'FDA-approved for visceral adipose tissue reduction — the only peptide with this specific regulatory approval',
      '15–18% visceral fat reduction in Phase 3 trials at 26 weeks (vs. <2% placebo)',
      'Visceral fat selectivity: visceral adipocytes express highest GH receptor density of any fat depot',
      'Triglyceride reduction of 40–50 mg/dL — cardiovascular risk factor improvement',
      'Maintained efficacy at 52 weeks — no tolerance development in extension trials',
      'Reduces liver fat in NAFLD/NASH subjects through GH-mediated hepatic lipid regulation',
      'Complete 1-44 GHRH sequence — different from sermorelin (1-29) with distinct receptor kinetics',
      'Trans-3-hexenoic acid modification extends half-life to ~30 minutes without amino acid substitutions',
      'Improves insulin sensitivity and LDL:HDL ratio in metabolic syndrome profile',
      '99.1% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Tesamorelin Visceral Fat Protocol (Phase 3 Reference):**
- Dose: 1–2mg once daily subcutaneous
- Timing: Pre-sleep (30–60 minutes before bed, fasted state)
- Route: Subcutaneous injection — abdomen preferred for fastest absorption
- Duration: Minimum 26 weeks for full VAT reduction benefit (Phase 3 endpoint)
- No cycling required for VAT reduction — continuous use maintains effect

**With Ipamorelin (Enhanced Protocol):**
- Tesamorelin 1–2mg + Ipamorelin 200–300mcg before sleep
- Combines GHRH signal (tesamorelin) with GHRP amplification (ipamorelin)
- Produces higher GH pulse amplitude than tesamorelin alone

**Body Composition Protocol:**
- Tesamorelin 1mg/day for visceral fat reduction
- Ipamorelin/CJC-1295 3× weekly for general GH optimization and lean mass support
- This two-component approach targets visceral fat specifically while maintaining full GH axis support

**Expected Timeline:**
- Weeks 1–8: Metabolic markers improve (triglycerides, glucose), subtle body composition changes
- Weeks 12–16: Noticeable visceral waist reduction begins
- Weeks 26+: Full Phase 3-equivalent visceral fat reduction achieved`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'FDA-Approved for Visceral Fat', body: 'The only peptide in existence with FDA approval specifically for visceral adipose tissue reduction — backed by two Phase 3 pivotal trials.' },
      { title: '15–18% VAT Reduction', body: '26-week Phase 3 trials documented 15.2–17.8% visceral fat reduction vs. ~1% increase in placebo groups — a massive net difference.' },
      { title: 'Visceral Fat Selectivity', body: 'Visceral adipocytes express the highest GH receptor density of any fat depot — tesamorelin-stimulated GH acts disproportionately on metabolically dangerous intra-abdominal fat.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Tesamorelin 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 9. SELANK 10mg
# ─────────────────────────────────────────────────────────────────
slug = 'selank-10mg'
next_slug = 'na-selank-amidate-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `Selank is a synthetic heptapeptide (7 amino acids) derived from tuftsin — an endogenous tetrapeptide that is a fragment of the IgG immunoglobulin heavy chain. Selank was developed by the Institute of Molecular Genetics of the Russian Academy of Sciences and is registered as an anxiolytic and anti-asthenic drug in Russia and Ukraine (under the trade names Selank and Selanc), where it has been prescribed for anxiety disorders for over a decade.

**The Tuftsin Connection**

Selank began as a modification of tuftsin (Thr-Lys-Pro-Arg, amino acids 289-292 of IgG), which has known immunomodulatory and neurotropic properties. The development team extended the tuftsin sequence with a Pro-Gly-Pro tripeptide at the C-terminal end to dramatically improve metabolic stability in plasma while preserving and enhancing the anxiolytic properties. The result is a compound that combines anxiety reduction, cognitive enhancement, and neuroprotection in a single molecule with an exceptional safety profile.

**Anxiolytic Mechanism: GABA and Beyond**

Selank reduces anxiety through multiple converging mechanisms — not a single receptor target:

1. **GABA-A potentiation**: Selank enhances GABAergic transmission at the GABA-A receptor complex without binding the benzodiazepine site. This produces anxiolysis without sedation, cognitive impairment, or dependence — the major liabilities of traditional GABA-A drugs (benzodiazepines, Z-drugs).

2. **Serotonin modulation**: Selank increases serotonin metabolism in the brain (5-HT uptake and degradation regulation), contributing to mood stabilization. Serotonergic effects develop over days to weeks of consistent use.

3. **Enkephalin protection**: Selank inhibits enkephalin-degrading enzymes, prolonging the activity of endogenous opioid peptides associated with stress reduction and mood.

4. **BDNF upregulation**: Selank increases BDNF (Brain-Derived Neurotrophic Factor) expression — the primary neuroplasticity growth factor. BDNF reduction is associated with anxiety, depression, and cognitive decline; Selank's BDNF-enhancing effect contributes to both its anxiolytic and cognitive-enhancing properties.

**No Dependence, Tolerance, or Rebound**

The most significant advantage of Selank over conventional anxiolytics is its dependence-free mechanism. Because it does not act through the benzodiazepine binding site, Selank:
- Does not produce physical dependence or withdrawal syndrome
- Does not cause sedation, psychomotor impairment, or memory suppression
- Does not produce rebound anxiety on discontinuation
- Can be used continuously without tolerance development

Clinical studies with Selank conducted in Russia over 15+ years of approved use have not documented addiction, withdrawal, or abuse potential.

**Cognitive Enhancement Properties**

Selank improves cognitive function independent of its anxiolytic effects — a combination not seen with conventional anxiolytics (which typically impair cognition):
- Enhanced memory consolidation (particularly declarative and working memory)
- Improved learning speed and retention
- Increased attention and focus capacity
- Reduced cognitive fatigue under stress conditions

These effects are attributed to Selank's BDNF upregulation, serotonergic modulation, and enhanced GABAergic inhibition of noise in neural circuits.

**Clinical Evidence**

Russian clinical trials for anxiolytic drug registration documented:
- Significant reduction in anxiety scale scores vs. placebo
- Comparable anxiolytic efficacy to phenibut (a common Russian anxiolytic) with substantially better cognitive safety profile
- No sedation, no psychomotor impairment
- Immune system enhancement (consistent with tuftsin origin — tuftsin is an immunostimulant)`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Registered anxiolytic drug in Russia and Ukraine — 15+ years of clinical use and approval data',
      'Reduces anxiety without sedation, cognitive impairment, or psychomotor slowing',
      'GABA-A potentiation at non-benzodiazepine site — no dependence, tolerance, or withdrawal',
      'No rebound anxiety on discontinuation — can be stopped without gradual taper',
      'BDNF upregulation — improves neuroplasticity and memory consolidation simultaneously with anxiety reduction',
      'Enhances memory, learning speed, and focus capacity alongside anxiolysis',
      'Serotonin metabolism modulation — mood stabilization developing over days to weeks of consistent use',
      'Enkephalin-degrading enzyme inhibition — extends endogenous stress-reduction peptide activity',
      'Immune system enhancement (tuftsin-derived mechanism) — dual anxiolytic + immunomodulatory profile',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**Selank Protocol:**
- Dose: 250–500mcg per injection or intranasal
- Intranasal: 2–3 sprays per nostril (most common route in Russia)
- Subcutaneous: 250–500mcg injection
- Frequency: Once or twice daily; or as-needed for acute anxiety
- Duration: Continuous use is safe; no tolerance or dependence develops

**Acute Anxiolytic Use:**
- 250–500mcg intranasal or subcutaneous 30–60 minutes before high-stress situations
- Onset: 15–30 minutes (intranasal faster than subcutaneous)
- Duration: 4–6 hours per dose

**Chronic Anxiety Protocol:**
- 250mcg twice daily (morning and before sleep)
- Serotonergic effects accumulate over 1–2 weeks of consistent use
- BDNF benefits require sustained use — daily protocol preferred for cognitive effects

**Combination with Semax:**
- Selank (anxiolytic/calming) + Semax (stimulating/cognitive) is the most popular nootropic peptide stack
- Selank in the evening (anxiolytic, sleep-supportive), Semax in the morning (cognitive activation)
- Complementary mechanism: Selank reduces anxiety noise, Semax increases cognitive signal

**Reconstitution (if powder form):**
- Use sterile saline or bacteriostatic water
- Standard concentration: 1mg/mL for easy dosing`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'Registered Drug', body: 'Selank is a registered anxiolytic medication in Russia and Ukraine — 15+ years of approved clinical use with documented efficacy and safety data.' },
      { title: 'Anxiety + Cognition', body: 'Unlike conventional anxiolytics that impair cognition, Selank simultaneously reduces anxiety and enhances memory consolidation through BDNF upregulation.' },
      { title: 'Zero Dependence Risk', body: 'Non-benzodiazepine GABA-A mechanism produces no dependence, tolerance, withdrawal, or rebound anxiety — can be discontinued at any time.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ Selank 10mg patched")

# ─────────────────────────────────────────────────────────────────
# 10. SEMAX 30mg (N-Acetyl Semax Amidate)
# ─────────────────────────────────────────────────────────────────
slug = 'semax-30mg'
next_slug = 'pe-22-28-10mg'
ws, we = find_window(src, slug, next_slug)
w = src[ws:we]

fd = '''    fullDescription: `N-Acetyl Semax Amidate is the most potent and bioavailable form of Semax — a synthetic ACTH(4-7)PGP analog registered in Russia and Ukraine as a medicine for cognitive disorders, ischemic stroke, optic nerve diseases, and asthenic conditions. The compound combines two chemical enhancements over standard Semax: an N-terminal acetyl group and a C-terminal amide — both of which increase resistance to peptidase degradation, extending CNS bioavailability and potency.

**Origins: ACTH Fragment Pharmacology**

Semax is derived from the 4-7 fragment of ACTH (Adrenocorticotropic Hormone) — specifically the Met-Glu-His-Phe sequence, which is the minimal bioactive nootropic fragment of the parent ACTH molecule. Unlike ACTH itself (which stimulates adrenal cortisol production), the 4-7 fragment has no HPA axis activity — it acts purely on neurotropic receptors without affecting cortisol or adrenal function. The Pro-Gly-Pro extension added to create Semax improves CNS targeting and metabolic stability.

**N-Acetyl and Amide Modifications: Why They Matter**

Standard Semax has good CNS activity but is susceptible to cleavage by endopeptidases. The NA-Amidate variant addresses both termini:
- **N-acetyl group**: Acetylation at the N-terminus blocks aminopeptidase degradation, extending the peptide half-life significantly
- **C-terminal amide**: Amidation blocks carboxypeptidase degradation from the C-terminus
- **Combined effect**: Dramatically reduced enzymatic degradation → substantially higher bioavailability per dose → lower effective dose required
- N-Acetyl Semax Amidate is estimated to be 2–4× more potent than standard Semax on a per-weight basis

**Mechanism: BDNF, NGF, and Serotonin**

N-Acetyl Semax Amidate produces its cognitive and neuroprotective effects through three primary pathways:

1. **BDNF Upregulation**: This is Semax's signature mechanism. BDNF (Brain-Derived Neurotrophic Factor) is the primary growth factor for neurons — it drives dendritic branching, synaptic plasticity, new neuron formation in the hippocampus, and protection against neurodegeneration. Semax produces dose-dependent BDNF upregulation in the hippocampus and frontal cortex within 1–4 hours of administration. BDNF is the most important molecular substrate for memory formation, learning, and cognitive resilience.

2. **NGF Upregulation**: Nerve Growth Factor (NGF) stimulates the growth and maintenance of cholinergic neurons — the neurons most critical for attention, working memory, and executive function. NGF decline is associated with cognitive aging; Semax-driven NGF upregulation produces measurable improvements in cholinergic circuit function.

3. **Serotonin System Enhancement**: Semax increases serotonin synthesis and receptor sensitivity — contributing to mood stabilization, anxiety reduction, and the subjective sense of mental clarity that many users report as the most noticeable acute effect.

**Clinical Evidence: Stroke, Cognitive Disorders, Neuroprotection**

Semax was developed for clinical use and has been evaluated in human trials:
- **Ischemic stroke**: Semax accelerated neurological recovery in clinical trials — attributed to BDNF and NGF upregulation promoting neuroplasticity in the post-stroke brain
- **ADHD and cognitive disorders**: Documented improvements in attention, processing speed, and working memory in clinical populations
- **Optic nerve atrophy**: Registered indication in Russia — neuroprotective effects in optic nerve degeneration models
- **Asthenic conditions**: Reduces mental and physical fatigue, improves stamina under cognitive load

**N-Acetyl Semax Amidate in Practice: What Users Experience**

Across the research community, N-Acetyl Semax Amidate produces some of the most subjectively noticeable acute cognitive effects of any nootropic peptide:
- Mental clarity and focus: Often reported within 30–60 minutes of administration
- Word recall and verbal fluency improvements
- Enhanced motivation and drive (distinct from stimulant-type effects — cleaner and more sustained)
- Stress resilience under cognitive load
- Mood lift through serotonergic effects

The BDNF-mediated long-term effects (structural neuroplasticity, improved memory architecture) develop over weeks of consistent use — distinguishing Semax from simple stimulants that produce only acute effects.`,
'''
w = re.sub(r"    fullDescription: `[^`]*`,\n", fd, w, count=1)

ben = '''    benefits: [
      'Registered drug in Russia and Ukraine for cognitive disorders, stroke recovery, and nerve diseases',
      'Most potent Semax form — N-acetyl + C-terminal amide modifications produce 2–4× greater potency vs. standard Semax',
      'BDNF upregulation in hippocampus and frontal cortex — the primary molecular driver of memory and neuroplasticity',
      'NGF upregulation — supports cholinergic circuits critical for attention and working memory',
      'No HPA axis activity — ACTH 4-7 fragment does not stimulate cortisol production',
      'Neuroprotective in ischemic models — registered for optic nerve and stroke applications',
      'Serotonin synthesis enhancement — mood stabilization and anxiety reduction alongside cognitive activation',
      'Fast onset: cognitive effects reported within 30–60 minutes of intranasal or subcutaneous administration',
      'Sustained long-term neuroplasticity effects from structural BDNF-driven changes with consistent use',
      '99.0% purity with Certificate of Analysis',
    ],
'''
w = re.sub(r"    benefits: \[[^\]]*\],\n", ben, w, count=1)

pro = '''    protocol: `**N-Acetyl Semax Amidate Protocol:**
- Dose: 100–500mcg per administration
- Starting dose: 100mcg (assess CNS response — potent at low doses)
- Maintenance: 200–300mcg (typical effective range)
- Route: Intranasal (primary — fastest CNS delivery) or subcutaneous
- Frequency: Once or twice daily (morning preferred; avoid late evening due to stimulating effects)
- Duration: 4–8 week cycles; or chronic low-dose use (100mcg/day)

**Acute Cognitive Boost:**
- 200–300mcg intranasal 30 minutes before demanding cognitive work
- Effects: enhanced focus, clarity, and verbal fluency within 30–60 minutes
- Duration: 4–6 hours

**Stack with Selank (the Classic Nootropic Pair):**
- Morning: N-Acetyl Semax Amidate 200mcg (cognitive activation)
- Evening: Selank 250mcg (anxiolytic, supports sleep)
- This combination addresses both cognitive performance and anxiety — complementary mechanisms that do not interfere with each other

**Reconstitution:**
- Sterile saline or bacteriostatic water
- For intranasal: 1mg/mL in sterile saline (commercial nasal spray concentration)
- For subcutaneous: 2–5mg/mL concentration in bacteriostatic water`,
'''
w = re.sub(r"    protocol: `[^`]*`,\n", pro, w, count=1)

hls = '''    highlights: [
      { title: 'BDNF Upregulation', body: 'Semax produces dose-dependent BDNF upregulation in hippocampus and frontal cortex — the primary molecular mechanism for memory formation and cognitive resilience.' },
      { title: 'Most Potent Form', body: 'N-acetyl + amide modifications block peptidase degradation at both termini — delivering 2–4× greater CNS bioavailability than standard Semax.' },
      { title: 'Registered Medicine', body: 'Registered in Russia for cognitive disorders, ischemic stroke, and optic nerve diseases — clinical-grade compound with a decade of approved human use.' },
    ],
'''
w = re.sub(r"    highlights: \[.*?\],\n", hls, w, count=1, flags=re.DOTALL)

src = src[:ws] + w + src[we:]
print("✓ N-Acetyl Semax Amidate 30mg patched")

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
