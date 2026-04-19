import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';
import { articles } from '@/lib/articles';

const BASE_URL = 'https://www.peptidesclav.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                              lastModified: new Date('2026-04-06'), priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/products`,               lastModified: new Date('2026-04-06'), priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/stacks`,                 lastModified: new Date('2026-04-05'), priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/blog`,                   lastModified: new Date('2026-04-06'), priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/looksmaxxing`,           lastModified: new Date('2026-04-04'), priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/glp1-comparison`,        lastModified: new Date('2026-04-03'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/retatrutide`,            lastModified: new Date('2026-04-03'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/best-peptide-for-weight-loss`,   lastModified: new Date('2026-04-02'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/anti-aging`,             lastModified: new Date('2026-04-01'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/body-composition`,       lastModified: new Date('2026-04-01'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/healing`,                lastModified: new Date('2026-04-01'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/gut-health`,             lastModified: new Date('2026-03-30'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/sleep`,                  lastModified: new Date('2026-03-30'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/hair-growth`,            lastModified: new Date('2026-03-30'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/best-peptide-for-muscle-growth`, lastModified: new Date('2026-03-29'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/best-peptide-for-anti-aging`,    lastModified: new Date('2026-03-29'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/peptides/mk-677`,        lastModified: new Date('2026-03-28'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/peptides/pt-141`,                        lastModified: new Date('2026-03-28'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/peptides/tb-500`,                        lastModified: new Date('2026-04-06'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/peptides/ghk-cu`,                        lastModified: new Date('2026-04-06'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/peptides/ipamorelin-cjc`,                lastModified: new Date('2026-04-06'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/comparisons/bpc-157-vs-tb-500`,          lastModified: new Date('2026-03-27'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/comparisons/semaglutide-vs-tirzepatide`, lastModified: new Date('2026-04-06'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/stacks/clavicular-ascension`, lastModified: new Date('2026-03-27'), priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/stacks/venus-protocol`,  lastModified: new Date('2026-03-26'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/stacks/wolverine-healing`, lastModified: new Date('2026-03-26'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/how-to/reconstitute-peptides`,       lastModified: new Date('2026-03-25'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/how-to/subcutaneous-injection-guide`, lastModified: new Date('2026-03-25'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/how-to/peptide-storage-guide`,       lastModified: new Date('2026-03-24'), priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/goals/skin-healing-ghk-cu`,          lastModified: new Date('2026-03-24'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/goals/cognitive-enhancement`,        lastModified: new Date('2026-03-24'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/guides/womens-peptide-guide`,        lastModified: new Date('2026-03-23'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/healing/rotator-cuff`,  lastModified: new Date('2026-03-23'), priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/healing/tendonitis`,     lastModified: new Date('2026-03-23'), priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/healing/acl`,            lastModified: new Date('2026-03-22'), priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/healing/gut-health-bpc-157`, lastModified: new Date('2026-03-22'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/glossary`,               lastModified: new Date('2026-03-21'), priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/guide`,                  lastModified: new Date('2026-03-20'), priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/about`,                  lastModified: new Date('2026-03-15'), priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/faq`,                    lastModified: new Date('2026-03-15'), priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/contact`,                lastModified: new Date('2026-03-10'), priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  const SITE_LAUNCH = new Date('2026-04-05');
  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : SITE_LAUNCH,
  }));

  const stackPages: MetadataRoute.Sitemap = stacks.map((s) => ({
    url: `${BASE_URL}/stacks/${s.id}`,
    lastModified: new Date('2026-04-04'),
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const blogPages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}`,
    lastModified: new Date('2026-04-03'),
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...productPages, ...stackPages, ...blogPages];
}
