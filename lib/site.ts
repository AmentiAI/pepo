export const SITE_URL = 'https://sharktides.com';
export const SITE_NAME = 'Shark Tides';
export const SITE_DOMAIN = 'sharktides.com';

/** American Peptides affiliate code. Must travel on the product URL. */
export const AFFILIATE_ID = '01xjeP7mUu';

export const SUPPLIER_HOME = `https://www.americanpeptides.us/?ref=${AFFILIATE_ID}`;

export function supplierProductUrl(supplierSlug: string) {
  const slug = supplierSlug.replace(/^\/+|\/+$/g, '');
  const url = new URL(`https://www.americanpeptides.us/products/${slug}`);
  url.searchParams.set('ref', AFFILIATE_ID);
  return url.toString();
}

export function withAffiliate(url: string) {
  const next = new URL(url);
  if (!next.searchParams.get('ref')) next.searchParams.set('ref', AFFILIATE_ID);
  return next.toString();
}

export function hasListedPrice(amount: number) {
  return Number.isFinite(amount) && amount > 0;
}

export function formatPrice(amount: number) {
  return hasListedPrice(amount) ? `$${amount.toFixed(2)}` : 'Live supplier price';
}
