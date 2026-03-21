export interface InternalLink {
  anchor: string;
  href: string;
}

/**
 * Static internal link map — 3-4 keyword-matched links per page.
 * Keys are the route paths. Never changes on reload (pure static data).
 */
export const internalLinks: Record<string, InternalLink[]> = {
  '/': [
    { anchor: 'BPC-157 & TB-500 healing protocols', href: '/healing' },
    { anchor: 'GH peptides for body recomposition', href: '/body-composition' },
    { anchor: 'Epithalon & GHK-Cu anti-aging stack', href: '/anti-aging' },
    { anchor: "beginner's guide to peptide protocols", href: '/guide' },
  ],

  '/healing': [
    { anchor: 'BPC-157 tendon repair & dosing protocol', href: '/products/bpc-157' },
    { anchor: 'TB-500 systemic recovery guide', href: '/products/tb-500' },
    { anchor: 'Ultimate Healing Stack: BPC-157 + TB-500', href: '/stacks/ultimate-healing' },
    { anchor: 'how to start your first peptide protocol', href: '/guide' },
  ],

  '/body-composition': [
    { anchor: 'Ipamorelin / CJC-1295 GH optimization protocol', href: '/products/ipamorelin-cjc' },
    { anchor: 'Semaglutide GLP-1 fat loss protocol', href: '/products/semaglutide-10mg' },
    { anchor: 'GH Optimization Stack for body recomposition', href: '/stacks/gh-optimization' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
  ],

  '/anti-aging': [
    { anchor: 'Epithalon telomere extension protocol', href: '/products/epithalon' },
    { anchor: 'GHK-Cu skin regeneration & gene reset guide', href: '/products/ghk-cu' },
    { anchor: 'Longevity Elite Stack: Epithalon + GHK-Cu + NAD+', href: '/stacks/longevity-elite' },
    { anchor: 'NAD+ mitochondrial restoration protocol', href: '/products/nad-plus' },
  ],

  '/guide': [
    { anchor: 'healing peptides: BPC-157 & TB-500 protocols', href: '/healing' },
    { anchor: 'body composition & fat loss peptide guide', href: '/body-composition' },
    { anchor: 'anti-aging longevity peptide protocols', href: '/anti-aging' },
    { anchor: 'expert peptide protocol stacks', href: '/stacks' },
  ],

  '/faq': [
    { anchor: 'BPC-157 complete dosing & injection guide', href: '/products/bpc-157' },
    { anchor: 'healing & recovery peptide protocols', href: '/healing' },
    { anchor: 'beginner peptide protocol guide', href: '/guide' },
    { anchor: 'expert peptide stacks for every goal', href: '/stacks' },
  ],

  '/products': [
    { anchor: 'healing & recovery peptide protocols', href: '/healing' },
    { anchor: 'body composition peptide stacks', href: '/body-composition' },
    { anchor: 'anti-aging & longevity peptide guide', href: '/anti-aging' },
    { anchor: "beginner's guide to peptides", href: '/guide' },
  ],

  '/stacks': [
    { anchor: 'Ultimate Healing Stack: BPC-157 + TB-500', href: '/stacks/ultimate-healing' },
    { anchor: 'GH Optimization Stack for lean muscle & fat loss', href: '/stacks/gh-optimization' },
    { anchor: 'Longevity Elite anti-aging stack', href: '/stacks/longevity-elite' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
  ],

  // ── Product pages ──────────────────────────────────────────────────────────

  '/products/bpc-157': [
    { anchor: 'TB-500 systemic healing complement', href: '/products/tb-500' },
    { anchor: 'Ultimate Healing Stack protocol', href: '/stacks/ultimate-healing' },
    { anchor: 'healing & recovery peptide category', href: '/healing' },
    { anchor: 'how to inject peptides — beginner guide', href: '/guide' },
  ],

  '/products/tb-500': [
    { anchor: 'BPC-157 local tissue repair protocol', href: '/products/bpc-157' },
    { anchor: 'Ultimate Healing Stack: BPC-157 + TB-500', href: '/stacks/ultimate-healing' },
    { anchor: 'healing & recovery peptide protocols', href: '/healing' },
    { anchor: 'IGF-1 LR3 anabolic recovery guide', href: '/products/igf-1-lr3' },
  ],

  '/products/ipamorelin-cjc': [
    { anchor: 'GH Optimization Stack protocol', href: '/stacks/gh-optimization' },
    { anchor: 'body composition peptide guide', href: '/body-composition' },
    { anchor: 'IGF-1 LR3 anabolic signaling guide', href: '/products/igf-1-lr3' },
    { anchor: 'Semaglutide for simultaneous fat loss', href: '/products/semaglutide-10mg' },
  ],

  '/products/igf-1-lr3': [
    { anchor: 'Ipamorelin / CJC-1295 GH optimization', href: '/products/ipamorelin-cjc' },
    { anchor: 'Performance Elite Stack', href: '/stacks/performance-elite' },
    { anchor: 'body composition peptide protocols', href: '/body-composition' },
    { anchor: 'GH Optimization Stack', href: '/stacks/gh-optimization' },
  ],

  '/products/epithalon': [
    { anchor: 'GHK-Cu skin & gene expression reset guide', href: '/products/ghk-cu' },
    { anchor: 'Longevity Elite anti-aging stack', href: '/stacks/longevity-elite' },
    { anchor: 'anti-aging peptide protocols', href: '/anti-aging' },
    { anchor: 'NAD+ mitochondrial energy restoration', href: '/products/nad-plus' },
  ],

  '/products/ghk-cu': [
    { anchor: 'Epithalon telomere extension protocol', href: '/products/epithalon' },
    { anchor: 'Anti-Aging Skin Stack: GHK-Cu + SNAP-8', href: '/stacks/anti-aging-skin' },
    { anchor: 'anti-aging & longevity peptide guide', href: '/anti-aging' },
    { anchor: 'SNAP-8 anti-wrinkle peptide protocol', href: '/products/snap-8' },
  ],

  '/products/snap-8': [
    { anchor: 'GHK-Cu skin regeneration protocol', href: '/products/ghk-cu' },
    { anchor: 'Anti-Aging Skin Stack', href: '/stacks/anti-aging-skin' },
    { anchor: 'Epithalon longevity & telomere guide', href: '/products/epithalon' },
    { anchor: 'anti-aging peptide protocols', href: '/anti-aging' },
  ],

  '/products/nad-plus': [
    { anchor: 'Epithalon longevity protocol', href: '/products/epithalon' },
    { anchor: 'Longevity Elite Stack', href: '/stacks/longevity-elite' },
    { anchor: 'anti-aging & longevity peptide guide', href: '/anti-aging' },
    { anchor: "beginner's guide to peptide protocols", href: '/guide' },
  ],

  '/products/semaglutide-5mg': [
    { anchor: 'Semaglutide 10mg protocol guide', href: '/products/semaglutide-10mg' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
    { anchor: 'body composition peptide guide', href: '/body-composition' },
    { anchor: 'Tirzepatide dual GIP/GLP-1 protocol', href: '/products/tirzepatide-15mg' },
  ],

  '/products/semaglutide-10mg': [
    { anchor: 'Tirzepatide dual GIP/GLP-1 fat loss protocol', href: '/products/tirzepatide-15mg' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
    { anchor: 'body composition peptide guide', href: '/body-composition' },
    { anchor: 'Retatrutide triple agonist protocol', href: '/products/retatrutide-10mg' },
  ],

  '/products/semaglutide-15mg': [
    { anchor: 'Tirzepatide 30mg advanced fat loss', href: '/products/tirzepatide-30mg' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
    { anchor: 'Retatrutide triple agonist protocol', href: '/products/retatrutide-10mg' },
    { anchor: 'body composition peptide protocols', href: '/body-composition' },
  ],

  '/products/cagri-sema': [
    { anchor: 'Semaglutide GLP-1 fat loss guide', href: '/products/semaglutide-10mg' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
    { anchor: 'Tirzepatide dual agonist protocol', href: '/products/tirzepatide-15mg' },
    { anchor: 'body composition peptide guide', href: '/body-composition' },
  ],

  '/products/tirzepatide-15mg': [
    { anchor: 'Semaglutide GLP-1 fat loss comparison', href: '/products/semaglutide-10mg' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
    { anchor: 'body composition peptide protocols', href: '/body-composition' },
    { anchor: 'Retatrutide triple agonist guide', href: '/products/retatrutide-10mg' },
  ],

  '/products/tirzepatide-30mg': [
    { anchor: 'Tirzepatide 15mg starting protocol', href: '/products/tirzepatide-15mg' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
    { anchor: 'Retatrutide triple agonist protocol', href: '/products/retatrutide-10mg' },
    { anchor: 'body composition peptide guide', href: '/body-composition' },
  ],

  '/products/retatrutide-10mg': [
    { anchor: 'Tirzepatide dual GIP/GLP-1 protocol', href: '/products/tirzepatide-15mg' },
    { anchor: 'Semaglutide GLP-1 fat loss guide', href: '/products/semaglutide-10mg' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
    { anchor: 'body composition peptide protocols', href: '/body-composition' },
  ],

  '/products/retatrutide-15mg': [
    { anchor: 'Retatrutide 10mg starting dose guide', href: '/products/retatrutide-10mg' },
    { anchor: 'Tirzepatide dual agonist comparison', href: '/products/tirzepatide-15mg' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
    { anchor: 'body composition peptide protocols', href: '/body-composition' },
  ],

  // ── Stack pages ────────────────────────────────────────────────────────────

  '/stacks/ultimate-healing': [
    { anchor: 'BPC-157 complete dosing & protocol guide', href: '/products/bpc-157' },
    { anchor: 'TB-500 systemic healing guide', href: '/products/tb-500' },
    { anchor: 'all healing & recovery peptides', href: '/healing' },
    { anchor: 'Performance Elite Stack', href: '/stacks/performance-elite' },
  ],

  '/stacks/gh-optimization': [
    { anchor: 'Ipamorelin / CJC-1295 peptide guide', href: '/products/ipamorelin-cjc' },
    { anchor: 'body composition peptide protocols', href: '/body-composition' },
    { anchor: 'IGF-1 LR3 anabolic peptide guide', href: '/products/igf-1-lr3' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
  ],

  '/stacks/longevity-elite': [
    { anchor: 'Epithalon telomere extension guide', href: '/products/epithalon' },
    { anchor: 'GHK-Cu skin & gene expression protocol', href: '/products/ghk-cu' },
    { anchor: 'anti-aging peptide category', href: '/anti-aging' },
    { anchor: 'NAD+ mitochondrial restoration', href: '/products/nad-plus' },
  ],

  '/stacks/glp1-fat-loss': [
    { anchor: 'Semaglutide GLP-1 fat loss protocol', href: '/products/semaglutide-10mg' },
    { anchor: 'Tirzepatide dual agonist guide', href: '/products/tirzepatide-15mg' },
    { anchor: 'body composition peptide guide', href: '/body-composition' },
    { anchor: 'Retatrutide triple agonist protocol', href: '/products/retatrutide-10mg' },
  ],

  '/stacks/anti-aging-skin': [
    { anchor: 'GHK-Cu skin regeneration protocol', href: '/products/ghk-cu' },
    { anchor: 'SNAP-8 anti-wrinkle peptide guide', href: '/products/snap-8' },
    { anchor: 'anti-aging longevity peptide guide', href: '/anti-aging' },
    { anchor: 'Longevity Elite Stack', href: '/stacks/longevity-elite' },
  ],

  '/stacks/performance-elite': [
    { anchor: 'IGF-1 LR3 anabolic protocol guide', href: '/products/igf-1-lr3' },
    { anchor: 'BPC-157 recovery acceleration', href: '/products/bpc-157' },
    { anchor: 'GH Optimization Stack', href: '/stacks/gh-optimization' },
    { anchor: 'body composition peptide protocols', href: '/body-composition' },
  ],

  '/gut-health': [
    { anchor: 'BPC-157 tendon & tissue repair protocol', href: '/products/bpc-157' },
    { anchor: 'Ultimate Healing Stack: BPC-157 + TB-500', href: '/stacks/ultimate-healing' },
    { anchor: 'healing & recovery peptide guide', href: '/healing' },
    { anchor: "beginner's guide to peptide protocols", href: '/guide' },
  ],

  '/sleep': [
    { anchor: 'Ipamorelin / CJC-1295 GH optimization protocol', href: '/products/ipamorelin-cjc' },
    { anchor: 'GH Optimization Stack for body recomposition', href: '/stacks/gh-optimization' },
    { anchor: 'body composition peptide guide', href: '/body-composition' },
    { anchor: 'Epithalon longevity & circadian protocol', href: '/products/epithalon' },
  ],

  '/hair-growth': [
    { anchor: 'GHK-Cu skin regeneration & gene reset guide', href: '/products/ghk-cu' },
    { anchor: 'TB-500 systemic healing & angiogenesis', href: '/products/tb-500' },
    { anchor: 'Anti-Aging Skin Stack: GHK-Cu + SNAP-8', href: '/stacks/anti-aging-skin' },
    { anchor: 'anti-aging & longevity peptide guide', href: '/anti-aging' },
  ],

  '/glp1-comparison': [
    { anchor: 'Semaglutide GLP-1 fat loss protocol', href: '/products/semaglutide-10mg' },
    { anchor: 'Tirzepatide dual GIP/GLP-1 protocol', href: '/products/tirzepatide-15mg' },
    { anchor: 'Retatrutide triple agonist guide', href: '/products/retatrutide-10mg' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
  ],

  '/retatrutide': [
    { anchor: 'Tirzepatide vs Retatrutide comparison', href: '/glp1-comparison' },
    { anchor: 'Semaglutide GLP-1 protocol', href: '/products/semaglutide-10mg' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
    { anchor: 'body composition peptide guide', href: '/body-composition' },
  ],

  '/best-peptide-for-weight-loss': [
    { anchor: 'Semaglutide GLP-1 dosing protocol', href: '/products/semaglutide-10mg' },
    { anchor: 'Tirzepatide dual agonist guide', href: '/products/tirzepatide-15mg' },
    { anchor: 'GLP-1 vs GIP vs Glucagon comparison', href: '/glp1-comparison' },
    { anchor: 'GLP-1 Fat Loss Accelerator Stack', href: '/stacks/glp1-fat-loss' },
  ],

  '/best-peptide-for-muscle-growth': [
    { anchor: 'IGF-1 LR3 direct anabolic protocol', href: '/products/igf-1-lr3' },
    { anchor: 'GH Optimization Stack', href: '/stacks/gh-optimization' },
    { anchor: 'Performance Elite Stack', href: '/stacks/performance-elite' },
    { anchor: 'body composition peptide guide', href: '/body-composition' },
  ],

  '/best-peptide-for-anti-aging': [
    { anchor: 'Epithalon telomere extension protocol', href: '/products/epithalon' },
    { anchor: 'GHK-Cu skin regeneration guide', href: '/products/ghk-cu' },
    { anchor: 'Longevity Elite anti-aging stack', href: '/stacks/longevity-elite' },
    { anchor: 'anti-aging peptide category', href: '/anti-aging' },
  ],

  '/about': [
    { anchor: 'peptide protocol beginner guide', href: '/guide' },
    { anchor: 'healing & recovery peptide protocols', href: '/healing' },
    { anchor: 'all peptide products catalog', href: '/products' },
    { anchor: 'frequently asked peptide questions', href: '/faq' },
  ],

  '/glossary': [
    { anchor: 'BPC-157 complete protocol guide', href: '/products/bpc-157' },
    { anchor: 'GLP-1 comparison: Semaglutide vs Tirzepatide', href: '/glp1-comparison' },
    { anchor: 'peptide protocol beginner guide', href: '/guide' },
    { anchor: 'expert peptide stacks', href: '/stacks' },
  ],

  '/healing/rotator-cuff': [
    { anchor: 'BPC-157 complete dosing protocol', href: '/products/bpc-157' },
    { anchor: 'TB-500 systemic healing guide', href: '/products/tb-500' },
    { anchor: 'Ultimate Healing Stack', href: '/stacks/ultimate-healing' },
    { anchor: 'all healing & recovery peptides', href: '/healing' },
  ],

  '/healing/tendonitis': [
    { anchor: 'BPC-157 complete dosing protocol', href: '/products/bpc-157' },
    { anchor: 'Ultimate Healing Stack: BPC-157 + TB-500', href: '/stacks/ultimate-healing' },
    { anchor: 'rotator cuff recovery protocol', href: '/healing/rotator-cuff' },
    { anchor: 'all healing & recovery peptides', href: '/healing' },
  ],

  '/healing/acl': [
    { anchor: 'BPC-157 tendon & ligament repair', href: '/products/bpc-157' },
    { anchor: 'TB-500 systemic healing guide', href: '/products/tb-500' },
    { anchor: 'Ultimate Healing Stack protocol', href: '/stacks/ultimate-healing' },
    { anchor: 'healing & recovery peptide category', href: '/healing' },
  ],
};
