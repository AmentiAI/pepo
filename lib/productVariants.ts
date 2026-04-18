// Deterministic per-slug variants used to break DOM templating across product pages.
// Goal: same SSG + canonical URLs, but no two pages share section order,
// eyebrow text, or category-specific section content — Google treats them as unique.

export type SectionKey =
  | 'deepDive'
  | 'benefits'
  | 'protocol'
  | 'timeline'
  | 'categorySection'

export function hashSlug(slug: string): number {
  let h = 2166136261 >>> 0
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i)
    h = Math.imul(h, 16777619) >>> 0
  }
  return h >>> 0
}

export function pickVariant<T>(slug: string, pool: T[], seed = 0): T {
  const idx = (hashSlug(slug) + seed * 2654435761) % pool.length
  return pool[idx]
}

export const SECTION_ORDERINGS: SectionKey[][] = [
  ['deepDive', 'benefits', 'protocol', 'categorySection', 'timeline'],
  ['deepDive', 'categorySection', 'benefits', 'protocol', 'timeline'],
  ['deepDive', 'benefits', 'categorySection', 'protocol', 'timeline'],
  ['deepDive', 'categorySection', 'protocol', 'benefits', 'timeline'],
  ['deepDive', 'benefits', 'protocol', 'timeline', 'categorySection'],
  ['deepDive', 'categorySection', 'timeline', 'benefits', 'protocol'],
  ['deepDive', 'protocol', 'categorySection', 'benefits', 'timeline'],
  ['deepDive', 'benefits', 'categorySection', 'timeline', 'protocol'],
]

export const DEEP_DIVE_EYEBROWS = [
  'Mechanism · Evidence · Application',
  'Research · Dosing · Outcomes',
  'Science · Protocol · Results',
  'Biology · Clinical Data · Practice',
  'Pharmacology · Use · Evidence',
  'Pathway · Trial Data · Application',
]

export const TIMELINE_EYEBROWS = [
  'What to expect · Phase by phase',
  'Week-by-week · Expected response',
  'Response timeline · Milestone markers',
  'Phase-by-phase · Progress indicators',
  'Weekly milestones · Evidence-based',
]

export const CTA_KICKERS = [
  'Ready to Start?',
  'Begin Research',
  'Start Your Protocol',
  'Next Step',
  'Get Started',
]

export const STACK_KICKERS = [
  'Synergistic Combinations',
  'Protocol Partners',
  'Research Stacks',
  'Pair With',
  'Complementary Compounds',
]

export const HIGHLIGHTS_LAYOUTS: Array<'numbered' | 'iconed' | 'framed'> = [
  'numbered',
  'iconed',
  'framed',
]

export const SIDEBAR_ORDERINGS: Array<'cta-cat-qa' | 'cta-qa-cat' | 'cat-cta-qa' | 'qa-cta-cat'> = [
  'cta-cat-qa',
  'cta-qa-cat',
  'cat-cta-qa',
  'qa-cta-cat',
]

export function getVariants(slug: string) {
  return {
    sectionOrder: pickVariant(slug, SECTION_ORDERINGS, 1),
    deepDiveEyebrow: pickVariant(slug, DEEP_DIVE_EYEBROWS, 2),
    timelineEyebrow: pickVariant(slug, TIMELINE_EYEBROWS, 3),
    ctaKicker: pickVariant(slug, CTA_KICKERS, 4),
    stackKicker: pickVariant(slug, STACK_KICKERS, 5),
    highlightsLayout: pickVariant(slug, HIGHLIGHTS_LAYOUTS, 6),
    sidebarOrder: pickVariant(slug, SIDEBAR_ORDERINGS, 7),
  }
}
