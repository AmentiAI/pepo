import { products } from '@/lib/products';
import RedirectClient from './redirect-client';

const AFFILIATE_BASE = 'https://phiogen.is/?ref=PEPS';
const PHIOGEN_PRODUCT_BASE = 'https://phiogen.is/products';
const AFFILIATE_PARAM = '?ref=PEPS';

function buildDestination(slug: string): string {
  // 1. Look up the product by our SEO slug
  const product = products.find((p) => p.slug === slug);

  if (product?.shopUrl) {
    const url = product.shopUrl;
    // Guard against double-appending — ensure ?ref=PEPS is present
    if (url.includes('ref=')) return url;
    return url + (url.includes('?') ? '&' : '?') + 'ref=PEPS';
  }

  // 2. Fallback: construct from slug directly (slug may already match Phiogen's slug)
  if (slug && slug !== 'shop') {
    return `${PHIOGEN_PRODUCT_BASE}/${slug}${AFFILIATE_PARAM}`;
  }

  // 3. Final fallback: affiliate homepage
  return AFFILIATE_BASE;
}

export default async function OutRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = buildDestination(slug);

  return <RedirectClient destination={destination} />;
}
