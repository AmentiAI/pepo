import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';
import { articles } from '@/lib/articles';

const BASE_URL = 'https://peptidesclav.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                              priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/products`,               priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/stacks`,                 priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/anti-aging`,             priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/body-composition`,       priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/healing`,                priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/guide`,                  priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/faq`,                    priority: 0.5, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/contact`,                priority: 0.4, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/gut-health`,                        priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/sleep`,                             priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/hair-growth`,                       priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/glp1-comparison`,                   priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/retatrutide`,                       priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/best-peptide-for-weight-loss`,      priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/best-peptide-for-muscle-growth`,    priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/best-peptide-for-anti-aging`,       priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/about`,                             priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/glossary`,                          priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/healing/rotator-cuff`,              priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/healing/tendonitis`,                priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/healing/acl`,                       priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/looksmaxxing`,                       priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/peptides/mk-677`,                    priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/peptides/pt-141`,                    priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/comparisons/bpc-157-vs-tb-500`,      priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/how-to/reconstitute-peptides`,       priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/goals/skin-healing-ghk-cu`,          priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/how-to/subcutaneous-injection-guide`,priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/healing/gut-health-bpc-157`,         priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/goals/cognitive-enhancement`,        priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/guides/womens-peptide-guide`,        priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/how-to/peptide-storage-guide`,       priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/blog`,                               priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }));

  const stackPages: MetadataRoute.Sitemap = stacks.map((s) => ({
    url: `${BASE_URL}/stacks/${s.id}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const blogPages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...productPages, ...stackPages, ...blogPages];
}
