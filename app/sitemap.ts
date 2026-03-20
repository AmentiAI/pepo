import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';

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
    { url: `${BASE_URL}/learn`,                  priority: 0.5, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`,                priority: 0.4, changeFrequency: 'yearly' },
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

  return [...staticPages, ...productPages, ...stackPages];
}
