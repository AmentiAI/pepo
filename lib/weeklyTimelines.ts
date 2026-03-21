export interface WeeklyTimeline {
  period: string;   // e.g. "Week 1–2"
  title: string;    // e.g. "Initial Response"
  description: string; // 1-2 sentences
}

export const weeklyTimelines: Record<string, WeeklyTimeline[]> = {
  'bpc-157': [
    { period: 'Days 3–7', title: 'First Effects', description: 'Pain and inflammation reduce noticeably. Most users report improved comfort during movement and reduced swelling around injury sites.' },
    { period: 'Week 2–3', title: 'Mobility Returns', description: 'Range of motion begins improving. The anti-inflammatory cascade reduces stiffness, and early-stage angiogenesis begins at the injury site.' },
    { period: 'Week 4–6', title: 'Structural Repair', description: 'Active collagen synthesis and tendon-to-bone reattachment. Strength begins returning. The injury site feels notably more stable.' },
    { period: 'Week 8–12', title: 'Full Integration', description: 'Tissue repair consolidates. Most soft-tissue injuries resolve fully by week 10–12. Protocol can be discontinued or cycled for chronic conditions.' },
  ],

  'tb-500': [
    { period: 'Week 1–2', title: 'Systemic Anti-Inflammation', description: 'Whole-body inflammation markers reduce. Flexibility begins improving throughout the body, not just at the injury site.' },
    { period: 'Week 3–4', title: 'Fibrosis Reduction', description: 'Scar tissue begins to break down and reorganize. Range of motion improves measurably. Actin-binding drives cell migration to damaged tissue.' },
    { period: 'Week 5–8', title: 'Tissue Remodeling', description: 'New, properly organized tissue replaces fibrotic material. Myogenesis (muscle fiber formation) activates for muscle injuries.' },
    { period: 'Week 9–12', title: 'Restoration', description: 'Flexibility and function at or near pre-injury levels. Systemic healing benefits continue beyond the injury site.' },
  ],

  'ipamorelin-cjc': [
    { period: 'Week 1–2', title: 'Sleep Quality Improves', description: 'Deeper sleep and more vivid dreams are the first notable changes. Most users wake feeling more rested within 1–2 weeks of nightly dosing.' },
    { period: 'Week 3–4', title: 'Recovery Accelerates', description: 'Reduced muscle soreness after training. Faster bounce-back between sessions. IGF-1 levels rising. Subtle improvements in body composition begin.' },
    { period: 'Week 6–10', title: 'Body Composition Shifts', description: 'Visible reductions in body fat, particularly in the midsection. Lean muscle preservation improves. Skin quality and hair quality improvements may appear.' },
    { period: 'Week 12–24', title: 'Full Recomposition', description: 'Significant lean mass improvement and fat loss consolidate. Optimal GH pulsatility established. Most users see peak body composition results at week 16–20.' },
  ],

  'igf-1-lr3': [
    { period: 'Day 1–7', title: 'Immediate Anabolic Signal', description: 'IGF-1 LR3 begins binding muscle cell receptors immediately. Users often notice unusual muscle fullness and enhanced pump during training within the first week.' },
    { period: 'Week 2–3', title: 'Satellite Cell Activation', description: 'Muscle satellite cells activate, beginning the process of hyperplasia (new muscle fiber creation, not just hypertrophy). Strength gains accelerate.' },
    { period: 'Week 3–4', title: 'Peak Anabolic Phase', description: 'IGF-1 LR3 is typically run in 4-week cycles at this stage. Maximum muscle protein synthesis and nitrogen retention during this window.' },
    { period: 'Post-Cycle', title: 'Gains Consolidate', description: 'New muscle fibers created during the cycle persist post-cycle. A 4-week off period prevents receptor desensitization before the next cycle.' },
  ],

  'epithalon': [
    { period: 'Week 1–2', title: 'Pineal Activation', description: 'Epithalon begins activating the pineal gland and improving melatonin production. Sleep quality improvements and enhanced circadian rhythm are often the first effects.' },
    { period: 'Week 2–3', title: 'Telomerase Induction', description: 'Telomerase enzyme activity increases in somatic cells. This process is not immediately felt but represents the core anti-aging mechanism at work.' },
    { period: 'Post-Protocol', title: 'Sustained Effects', description: 'Unlike most peptides, Epithalon is run as a 10–20 day burst protocol 1–2 times per year. Effects on gene expression and telomere health persist for months after the course.' },
    { period: '6–12 Months', title: 'Cumulative Longevity', description: 'With annual or biannual courses, telomere maintenance compounds over years. Human follow-up data shows 27–36% mortality reduction with multi-year use.' },
  ],

  'semaglutide-10mg': [
    { period: 'Week 1–4', title: 'Dose Titration & Appetite Reduction', description: 'Starting dose (0.25mg/week) with rapid appetite suppression. Most users eat 30–40% fewer calories without hunger. Nausea is common and typically mild.' },
    { period: 'Week 4–8', title: 'Significant Weight Loss Begins', description: 'Dose increases to 0.5–1mg/week. Most users lose 4–8 lbs in this phase. Metabolic improvements (blood glucose, insulin sensitivity) become measurable.' },
    { period: 'Week 8–16', title: 'Accelerated Fat Loss Phase', description: 'At therapeutic doses (1–2.4mg/week), consistent weekly weight loss of 0.5–1.5 lbs. STEP-1 trial participants lost an average of 14.9% body weight over 68 weeks.' },
    { period: 'Week 16–68', title: 'Plateau Management', description: 'Weight loss slows as body adapts. Combining with Ipamorelin/CJC-1295 preserves lean mass and prevents the GH suppression associated with caloric restriction.' },
  ],

  'tirzepatide-15mg': [
    { period: 'Week 1–4', title: 'Titration Phase', description: '2.5mg/week starting dose. Both GLP-1 and GIP receptors activate, producing appetite suppression plus direct fat cell effects not seen with semaglutide alone.' },
    { period: 'Week 4–12', title: 'Accelerated Fat Loss', description: 'Dose escalation to 5–10mg/week. Users consistently lose more weight per week than comparable semaglutide doses — the GIP component adds metabolic rate benefits.' },
    { period: 'Week 12–24', title: 'Body Composition Recomposition', description: 'At 10–15mg/week, SURMOUNT-1 trial participants averaged 22.5% weight loss over 72 weeks. Visceral fat specifically targets due to GIP receptor distribution in adipose tissue.' },
    { period: 'Week 24+', title: 'Maintenance Phase', description: 'Weight loss plateaus at a lower setpoint than semaglutide. Switching to maintenance dosing (5mg/week) preserves results. Lean mass preservation is enhanced by concurrent GH peptide use.' },
  ],

  'ghk-cu': [
    { period: 'Week 1–3', title: 'Gene Expression Reset', description: 'GHK-Cu begins modulating approximately 30% of age-related gene dysregulation. Initial effects: improved skin hydration and early improvements in firmness and texture.' },
    { period: 'Week 3–6', title: 'Collagen Synthesis', description: 'Visible improvements in skin elasticity and reduction in fine lines. Collagen and elastin production increases. Hair follicle stimulation begins.' },
    { period: 'Week 6–12', title: 'Full Rejuvenation', description: 'Significant improvements in skin quality, reduced appearance of wrinkles, improved hair thickness (scalp application). Wound healing and tissue repair effects visible.' },
    { period: 'Month 3+', title: 'Cumulative Benefits', description: 'GHK-Cu effects compound with continued use. Most users continue year-round at maintenance frequency. Combined with Epithalon, the anti-aging effects are synergistic.' },
  ],
};
