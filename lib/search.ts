import { products, type Product } from '@/lib/products';
import { stacks } from '@/lib/stacks';
import { formatPrice } from '@/lib/site';

export interface SearchResult {
  type: 'product' | 'stack' | 'goal';
  label: string;
  sub: string;
  href: string;
  image?: string;
  score: number;
}

/** Names shoppers type that are not the supplier's coded label. */
const KNOWN_AS: Record<string, string> = {
  'semaglutide-10mg': 'Semaglutide',
  'tirzepatide-15mg': 'Tirzepatide',
  'retatrutide-10mg': 'Retatrutide',
  'ap-amr1': 'Cagrilintide',
  'ap-mx4': 'Retatrutide + cagrilintide',
};

const EXTRA: Record<string, string[]> = {
  'semaglutide-10mg': ['semaglutide', 'sema', 'nn9535', 'glp-1'],
  'tirzepatide-15mg': ['tirzepatide', 'tirz', 'ly3298176', 'gip'],
  'retatrutide-10mg': ['retatrutide', 'reta', 'ly3437943'],
  'ap-amr1': ['cagrilintide', 'cagri', 'am833'],
  'ap-mx4': ['retatrutide', 'cagrilintide', 'cagri', 'sema'],
  tesamorelin: ['tesamorelin', 'tesa', 'th9507'],
  'bpc-157': ['bpc', 'bpc157'],
  'tb-500': ['tb500', 'tb-500', 'thymosin'],
  'ghk-cu': ['ghk', 'ghkcu', 'copper peptide'],
  'nad-plus': ['nad', 'nad+', 'nad plus'],
  ipamorelin: ['ipa', 'ipamorelin'],
  'ipamorelin-cjc': ['cjc', 'ipa', 'ipamorelin', 'cjc-1295', 'no dac'],
  'cjc-1295-no-dac': ['cjc', 'cjc-1295', 'no dac'],
  'cjc-1295-no-dac-ghrp-6': ['cjc', 'ghrp', 'ghrp-6'],
  'melanotan-1': ['mt1', 'mt-1', 'melanotan'],
  'melanotan-2': ['mt2', 'mt-2', 'melanotan'],
  'aod-9604': ['aod', 'aod9604'],
  '5-amino-1mq': ['1mq', '5-amino', 'amino 1mq'],
  'pt-141': ['pt141', 'pt-141', 'bremelanotide'],
  'igf-1-lr3': ['igf', 'igf1', 'igf-1', 'lr3'],
  epithalon: ['epitalon', 'epithalon'],
  'ss-31': ['ss31', 'ss-31', 'elamipretide'],
  'mots-c': ['motsc', 'mots-c'],
  'snap-8': ['snap8', 'snap-8'],
  dsip: ['dsip', 'sleep peptide', 'sleep'],
  kpv: ['kpv'],
  sermorelin: ['sermorelin'],
  semax: ['semax', 'focus', 'nootropic'],
  selank: ['selank'],
  'selank-semax': ['selank', 'semax'],
  'selank-nasal-spray': ['selank', 'nasal'],
  'semax-nasal-spray': ['semax', 'nasal'],
  'l-glutathione': ['glutathione', 'gsh'],
  'glutathione-liquid-spray': ['glutathione', 'gsh'],
  'bacteriostatic-water-30ml-bottle': ['bac water', 'bacteriostatic', 'bac'],
  'reconstitution-solution-30ml': ['reconstitution', 'bac water'],
  'glow-mix': ['glow'],
  klow: ['klow', 'glow'],
  'bpc-157-tb-500': ['wolverine', 'bpc', 'tb500', 'healing blend'],
  dihexa: ['dihexa'],
  'sleep-research-blend-liquid-spray': ['sleep', 'sleep blend'],
};

/** Shopper language that should surface a set of products even when the label does not contain those words. */
const INTENT: Record<string, string> = {
  'semaglutide-10mg': 'weight loss fat loss glp appetite ozempic wegovy',
  'tirzepatide-15mg': 'weight loss fat loss glp mounjaro zepbound',
  'retatrutide-10mg': 'weight loss fat loss glp',
  'ap-mx4': 'weight loss fat loss glp',
  'ap-amr1': 'weight loss appetite',
  'aod-9604': 'fat loss weight',
  '5-amino-1mq': 'fat loss weight metabolism',
  'bpc-157': 'healing injury tendon gut recovery',
  'tb-500': 'healing injury recovery hair',
  'bpc-157-tb-500': 'healing injury wolverine recovery',
  kpv: 'healing gut inflammation',
  'ghk-cu': 'skin hair copper anti-aging',
  'snap-8': 'skin wrinkles',
  dsip: 'sleep',
  'sleep-research-blend-liquid-spray': 'sleep',
  'ipamorelin-cjc': 'sleep growth hormone muscle',
  semax: 'focus brain cognitive nootropic',
  selank: 'focus calm cognitive',
  'selank-semax': 'focus brain cognitive',
};

const goals = [
  { label: 'Healing & Recovery', href: '/healing', desc: 'BPC-157, TB-500 protocols', words: ['healing', 'injury', 'bpc', 'tb-500', 'tendon'] },
  { label: 'Growth Hormone', href: '/growth-hormone', desc: 'CJC-1295, Ipamorelin, IGF-1', words: ['growth hormone', 'cjc', 'ipamorelin', 'igf'] },
  { label: 'Body Composition', href: '/body-composition', desc: 'Muscle growth and fat loss', words: ['body', 'muscle', 'fat loss', 'recomp'] },
  { label: 'Anti-Aging & Longevity', href: '/anti-aging', desc: 'Epithalon, GHK-Cu, NAD+', words: ['anti-aging', 'longevity', 'epithalon', 'nad'] },
  { label: 'Weight Loss', href: '/best-peptide-for-weight-loss', desc: 'GLP-1 research peptides', words: ['weight', 'fat loss', 'glp', 'semaglutide', 'tirzepatide', 'retatrutide'] },
  { label: 'Cognitive Enhancement', href: '/goals/cognitive-enhancement', desc: 'Semax, Selank', words: ['cognitive', 'focus', 'semax', 'selank', 'nootropic'] },
  { label: 'Looksmaxxing', href: '/looksmaxxing', desc: 'Tier-ranked peptide guide', words: ['looksmaxxing', 'skinmaxxing'] },
  { label: 'Stacks', href: '/stacks', desc: 'Pre-built peptide protocols', words: ['stack', 'protocol'] },
  { label: 'Hair Growth', href: '/hair-growth', desc: 'TB-500, GHK-Cu for hair', words: ['hair', 'ghk'] },
  { label: 'Gut Health', href: '/gut-health', desc: 'BPC-157 gut protocols', words: ['gut', 'bpc'] },
  { label: 'Sleep Optimization', href: '/sleep', desc: 'Sleep research peptides', words: ['sleep', 'dsip'] },
];

function compact(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function edits(a: string, b: string) {
  if (Math.abs(a.length - b.length) > 2) return 3;
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let last = i - 1;
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cur = prev[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, last + cost);
      last = cur;
    }
  }
  return prev[b.length];
}

function fieldScore(query: string, folded: string, text: string, weight: number) {
  const raw = text.toLowerCase();
  const flat = compact(text);
  if (!raw || !folded) return 0;
  if (raw === query || flat === folded) return weight + 28;
  const tokens = raw.split(/[^a-z0-9+]+/).map(compact).filter((word) => word.length >= 2);
  if (tokens.some((word) => word === folded)) return weight + 22;
  if (folded.length < 5) return 0;
  if (raw.startsWith(query) || flat.startsWith(folded)) return weight + 12;
  if (raw.includes(query) || flat.includes(folded)) return weight;
  const words = tokens.filter((word) => word.length >= 4);
  for (const word of words) {
    if (Math.abs(word.length - folded.length) > 2) continue;
    const distance = edits(word, folded);
    if (distance <= 1) return weight - 18;
    if (distance === 2 && folded.length >= 7) return weight - 32;
  }
  return 0;
}

function scoreText(query: string, fields: { text: string; weight: number }[]) {
  const tokens = query.toLowerCase().trim().split(/\s+/).filter((token) => token.length >= 2);
  if (tokens.length <= 1) return bestScore(query, fields);
  let total = 0;
  for (const token of tokens) {
    const score = bestScore(token, fields);
    if (score <= 0) return 0;
    total += score;
  }
  return total;
}

function bestScore(query: string, fields: { text: string; weight: number }[]) {
  const q = query.toLowerCase().trim();
  const folded = compact(q);
  return fields.reduce((best, field) => Math.max(best, fieldScore(q, folded, field.text, field.weight)), 0);
}

function aliases(product: Product) {
  const fromSlug = product.slug
    .split('-')
    .filter((part) => part.length > 2 && !/^\d+$/.test(part));
  const codes = [...product.shortDescription.matchAll(/\b([A-Z]{2,}\d[\w-]*)\b/g)].map((match) => match[1]);
  return [...new Set([...(EXTRA[product.slug] ?? []), ...(KNOWN_AS[product.slug] ? [KNOWN_AS[product.slug]] : []), ...fromSlug, ...codes])];
}

function priceLine(product: Product) {
  const price = formatPrice(product.price);
  return product.highPrice && product.highPrice > product.price ? `From ${price}` : price;
}

function presentation(product: Product, query: string) {
  const folded = compact(query.split(/\s+/)[0] ?? query);
  const known = KNOWN_AS[product.slug] ?? '';
  const alias = aliases(product).find((name) => {
    const flat = compact(name);
    return flat === folded || flat.startsWith(folded) || (folded.length >= 4 && edits(flat, folded) <= 1);
  });
  const spoken = known || (alias && alias.toLowerCase() !== product.name.toLowerCase() ? alias : '');
  const nameFlat = compact(product.name);
  const typedCommonName = Boolean(
    spoken && folded.length >= 3 && (compact(spoken) === folded || compact(spoken).startsWith(folded)) && !nameFlat.startsWith(folded),
  );
  if (typedCommonName) {
    return {
      label: spoken,
      sub: [product.name, product.category, priceLine(product)].join(' · '),
    };
  }
  return {
    label: product.name,
    sub: [spoken, product.category, priceLine(product)].filter(Boolean).join(' · '),
  };
}

export function suggestQuery(query: string): string | null {
  const folded = compact(query);
  if (folded.length < 4) return null;
  let best: { label: string; distance: number } | null = null;
  for (const product of products) {
    const names = [product.name, KNOWN_AS[product.slug], ...(EXTRA[product.slug] ?? [])].filter((name): name is string => Boolean(name));
    for (const name of names) {
      const flat = compact(name);
      if (flat.length < 4 || Math.abs(flat.length - folded.length) > 2) continue;
      const distance = edits(flat, folded);
      if (distance === 0 || distance > 2) continue;
      if (!best || distance < best.distance) best = { label: name, distance };
    }
  }
  return best?.label ?? null;
}

export function searchCatalog(query: string): SearchResult[] {
  const q = query.trim();
  if (q.length < 2) return [];

  const productHits = products
    .map((product) => {
      const names = aliases(product);
      const aliasScore = names.reduce((best, name) => Math.max(best, fieldScore(q, compact(q), name, 110)), 0);
      const score = Math.max(aliasScore, scoreText(q, [
        { text: product.name, weight: 100 },
        { text: product.slug, weight: 88 },
        { text: INTENT[product.slug] ?? '', weight: 70 },
        { text: product.tags.join(' '), weight: 54 },
        { text: product.category, weight: 36 },
        { text: product.shortDescription, weight: 24 },
      ]));
      return { product, score };
    })
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score || a.product.popularityRank - b.product.popularityRank)
    .slice(0, 6)
    .map(({ product, score }): SearchResult => {
      const view = presentation(product, q);
      return {
        type: 'product',
        label: view.label,
        sub: view.sub,
        href: `/products/${product.slug}`,
        image: product.image,
        score,
      };
    });

  const bySlug = new Map(products.map((product) => [product.slug, product]));
  const stackHits = stacks
    .map((stack) => {
      const members = stack.products
        .map((item) => bySlug.get(item.slug))
        .filter((product): product is Product => Boolean(product))
        .flatMap((product) => [product.name, product.slug, ...aliases(product)])
        .join(' ');
      const score = scoreText(q, [
        { text: stack.name, weight: 80 },
        { text: `${stack.goal} ${stack.tags.join(' ')}`, weight: 60 },
        { text: members, weight: 44 },
        { text: stack.tagline, weight: 28 },
      ]);
      return { stack, score };
    })
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ stack, score }): SearchResult => ({
      type: 'stack',
      label: stack.name,
      sub: stack.goal,
      href: `/stacks/${stack.id}`,
      score,
    }));

  const goalHits = goals
    .map((goal) => {
      const score = scoreText(q, [
        { text: goal.label, weight: 70 },
        { text: `${goal.desc} ${goal.words.join(' ')}`, weight: 48 },
      ]);
      return { goal, score };
    })
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ goal, score }): SearchResult => ({
      type: 'goal',
      label: goal.label,
      sub: goal.desc,
      href: goal.href,
      score,
    }));

  return [...productHits, ...stackHits, ...goalHits];
}
