export const SITE_URL = 'https://sharktides.com';
export const SITE_NAME = 'Shark Tides';
export const SITE_DOMAIN = 'sharktides.com';

/** Refersion affiliate id. Must travel on the final supplier URL. */
export const AFFILIATE_ID = '9016964.3f1b1e';

export const SUPPLIER_HOME = `https://apollopeptidesciences.com/?rfsn=${AFFILIATE_ID}`;

export function apolloProductUrl(apolloSlug: string) {
  const slug = apolloSlug.replace(/^\/+|\/+$/g, '');
  const product = `https://apollopeptidesciences.com/product/${slug}/?rfsn=${AFFILIATE_ID}`;
  // Apollo redirects every logged-out product URL to /my-account/ and throws away
  // the original address. Their login form only returns to the vial when this
  // redirect_to value is present.
  const gate = new URL('https://apollopeptidesciences.com/my-account/');
  gate.searchParams.set('redirect_to', product);
  return gate.toString();
}

export function withAffiliate(url: string) {
  const next = new URL(url);
  if (!next.searchParams.get('rfsn')) next.searchParams.set('rfsn', AFFILIATE_ID);
  return next.toString();
}

export function hasListedPrice(amount: number) {
  return Number.isFinite(amount) && amount > 0;
}

export function formatPrice(amount: number) {
  return hasListedPrice(amount) ? `$${amount.toFixed(2)}` : 'Live supplier price';
}
