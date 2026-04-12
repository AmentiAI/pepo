import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/out/', '/go/', '/api/'],
      },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'Slurp', allow: '/' },
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Baiduspider', allow: '/' },
      { userAgent: 'YandexBot', allow: '/' },
      { userAgent: 'facebot', allow: '/' },
      { userAgent: 'Twitterbot', allow: '/' },
    ],
    sitemap: 'https://www.peptidesclav.com/sitemap.xml',
    host: 'https://www.peptidesclav.com',
  };
}
