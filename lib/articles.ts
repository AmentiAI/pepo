export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export const articles: Article[] = [
  {
    slug: 'retatrutide-vs-tirzepatide-vs-semaglutide-2026',
    title: 'Retatrutide vs Tirzepatide vs Semaglutide: Which Weight Loss Peptide Wins in 2026?',
    description: 'Phase 3 data just dropped. Retatrutide users lost an average of 71.2 lbs in TRIUMPH-4. Here\'s the full clinical comparison.',
    date: '2026-03-20',
    readTime: '12 min read',
    category: 'Weight Loss',
    tags: ['Retatrutide', 'Tirzepatide', 'Semaglutide', 'GLP-1', 'Weight Loss'],
    image: '/og-image.png',
  },
  {
    slug: 'bpc-157-research-2026',
    title: 'BPC-157 in 2026: What the Science Actually Says (Cutting Through the Hype)',
    description: 'STAT News, RFK Jr., and the FDA are all talking about BPC-157. Here\'s what the peer-reviewed research actually shows — and what\'s still anecdotal.',
    date: '2026-03-18',
    readTime: '11 min read',
    category: 'Research',
    tags: ['BPC-157', 'Research', 'FDA', 'Safety'],
    image: '/og-image.png',
  },
  {
    slug: 'peptides-for-men-over-40',
    title: 'Peptides for Men Over 40: The Complete Protocol for Testosterone, Fat Loss & Recovery',
    description: 'Testosterone drops 1–2% per year after 30. GH drops 14% per decade. Here\'s the exact peptide protocol to reverse both.',
    date: '2026-03-15',
    readTime: '14 min read',
    category: 'Protocols',
    tags: ['Men Over 40', 'Testosterone', 'Ipamorelin', 'CJC-1295', 'BPC-157'],
    image: '/og-image.png',
  },
  {
    slug: 'cjc-1295-ipamorelin-stack-guide',
    title: 'CJC-1295 + Ipamorelin Stack: The Complete 2026 Protocol Guide',
    description: 'The most popular GH peptide stack explained — DAC vs no-DAC, dosing timing, realistic results timeline, and who actually benefits.',
    date: '2026-03-12',
    readTime: '10 min read',
    category: 'Protocols',
    tags: ['CJC-1295', 'Ipamorelin', 'GH Peptides', 'Stack', 'Body Composition'],
    image: '/og-image.png',
  },
  {
    slug: 'ghk-cu-beauty-peptide-2026',
    title: 'GHK-Cu: The Beauty Peptide Quietly Becoming the Most Researched Compound in Skincare',
    description: '4,000+ published studies. A 2022 RCT showing 55.7% wrinkle reduction. GHK-Cu is the skinmaxxing peptide the mainstream hasn\'t caught up to yet.',
    date: '2026-03-10',
    readTime: '9 min read',
    category: 'Skinmaxxing',
    tags: ['GHK-Cu', 'Skinmaxxing', 'Collagen', 'Anti-Aging', 'Hair Growth'],
    image: '/og-image.png',
  },
  {
    slug: 'are-peptides-safe-2026',
    title: 'Are Peptides Safe? What Mainstream Science Says in 2026',
    description: 'TIME, MIT Technology Review, and STAT all raised peptide safety questions in 2026. Here\'s the honest, fully-cited answer.',
    date: '2026-03-08',
    readTime: '10 min read',
    category: 'Safety',
    tags: ['Safety', 'Side Effects', 'Research', 'Beginners'],
    image: '/og-image.png',
  },
  {
    slug: 'looksmaxxing-peptide-stack-2026',
    title: 'The 2026 Looksmaxxing Peptide Stack: What Actually Works for Face, Hair & Body',
    description: 'The definitive looksmaxxing peptide stack for 2026 — skinmaxxing with GHK-Cu, bodymaxxing with Ipamorelin, face leanness with GLP-1s. Tier-ranked.',
    date: '2026-03-05',
    readTime: '11 min read',
    category: 'Looksmaxxing',
    tags: ['Looksmaxxing', 'GHK-Cu', 'Ipamorelin', 'Skinmaxxing', 'Bodymaxxing'],
    image: '/og-image.png',
  },
  {
    slug: 'peptides-for-beginners-2026',
    title: 'How to Start Peptides: The Beginner\'s Guide That Doesn\'t Assume You Already Know Everything',
    description: 'Everything you need to start your first peptide protocol — what to buy, how to reconstitute, how to inject, and what to expect week by week.',
    date: '2026-03-01',
    readTime: '13 min read',
    category: 'Beginners',
    tags: ['Beginners', 'Getting Started', 'Injection Guide', 'Reconstitution', 'First Protocol'],
    image: '/og-image.png',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
