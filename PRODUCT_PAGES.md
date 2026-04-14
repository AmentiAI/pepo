# Product Pages — Architecture & SEO Setup

This doc explains exactly how the 60+ indexed product pages on peptidesmuscle.com are generated, rendered, and surfaced to search engines. Use it as the reference when adding, editing, or auditing a product page.

---

## 1. Single source of truth

All product data lives in one file:

- `lib/products.ts` — exports `products: Product[]` (currently ~142 entries).

Each product conforms to the `Product` interface:

```ts
interface Product {
  slug: string                 // URL segment → /products/<slug>
  name: string
  tagline: string
  price: string
  category: string             // drives accent color + hero variant
  tags: string[]
  image: string                // absolute URL (Phiogen CDN)
  affiliateUrl: string         // outbound link (phiogen.is/...?ref=PEPS)
  shortDescription: string     // used as meta description + OG/twitter
  fullDescription: string
  benefits: string[]
  protocol: string
  synergies: string[]          // slugs of related products
  badge?: string
  featured?: boolean
  seoTitle?: string            // overrides default <title>
  deepDiveTitle: string
  highlights: { label; title; body }[]
  faqs?: { q; a }[]            // rendered as FAQ accordion + JSON-LD fodder
}
```

Helpers in the same file:

- `getProductBySlug(slug)` — lookup used by the dynamic route.
- `AFF(slug)` — builds the affiliate URL with the `?ref=PEPS` tag.

**Rule:** never hardcode product data in a page component. Add/edit in `lib/products.ts` only.

---

## 2. The dynamic route

`app/products/[slug]/page.tsx` is the single template that renders every product page.

Key exports at the top:

```ts
export const dynamic = 'force-static'   // pre-render all slugs at build
export const revalidate = 86400         // ISR: re-build each page daily

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}
```

**Why this matters for SEO:**

- `force-static` + `generateStaticParams` means every product URL is pre-rendered as HTML at build time. Vercel serves them with `cache-control: public`, which is what Googlebot wants (no `private`/`no-store` leaks).
- `revalidate = 86400` refreshes each page once per day without a full redeploy.
- If you add a new product to `lib/products.ts`, it gets a statically-generated page on the next build automatically.

---

## 3. Per-page metadata

```ts
export async function generateMetadata({ params }): Promise<Metadata>
```

For each slug this function emits:

- `title` — `p.seoTitle` if set, else `${p.name} | PeptidesMuscle`.
- `description` — `p.shortDescription`.
- `alternates.canonical` — `https://www.peptidesmuscle.com/products/${slug}` (self-canonical, one per page).
- `openGraph` — title, description, URL, type `website`, `siteName`, and a 1200×630 OG image.
- `twitter` — `summary_large_image` card with the product image.

**Rule:** canonical is always the `www.peptidesmuscle.com` origin. Keep `shortDescription` under ~160 chars so Google doesn't truncate.

---

## 4. Page structure (rendering contract)

Every product page, regardless of category, ships with the same backbone so Google sees consistent structured content:

1. **Clinical Evidence banner** — only for `Fat Loss / Metabolic` products that have a row in `CLINICAL_TRIALS` (semaglutide, tirzepatide, retatrutide, cagri-sema). Trial name, outcome, duration.
2. **Breadcrumb** — `Home / Peptides / {name}`. Visible breadcrumb improves Google's SERP breadcrumb rendering.
3. **ProductHero** — H1 (`product.name`), tagline, category pill, price, affiliate CTA.
4. **Stat strip** — pulled from `PRODUCT_STATS[slug]` (amino acids, half-life, cycle length, etc.). Only defined for flagship slugs; others get a default set.
5. **Deep-dive section** — uses `deepDiveTitle` as H2 and iterates `highlights[]` as labeled content blocks (Mechanism / Key Benefits / Stacking).
6. **Category-specific modules:**
   - Recovery & Healing → `HEALING_STAGES` (angiogenesis → recruitment → regeneration).
   - Growth Peptides → `ANABOLIC_PATHWAY` (IGF-1R → PI3K/Akt → mTOR → protein synthesis).
   - Anti-Aging & Longevity → `LOOKS_TIMELINE` (Week 1–2 through 10–12).
7. **Benefits list** — `product.benefits[]`.
8. **Protocol** — `product.protocol`.
9. **Synergies** — renders `<ProductCard>` for each slug in `product.synergies[]` (cross-links to other product pages, huge for internal linking).
10. **FAQ accordion** (`<FaqAccordion>`) — `product.faqs[]`. This is the hook for FAQ rich results when JSON-LD is added.
11. **Further Reading** — `<FurtherReading links={productInternalLinks[slug]} />` pulls curated guide links from `lib/internal-links.ts`.

**Category accents** (`CATEGORY_ACCENT` map) tint each template variant so pages look differentiated despite sharing one template.

---

## 5. Internal linking

Three mechanisms, each matters for crawl depth:

- **`lib/internal-links.ts` (`productInternalLinks`)** — per-slug curated links out to long-form guides (e.g. `/bpc-157-complete-guide`). Rendered by `FurtherReading`.
- **`product.synergies`** — cross-links between product pages. Each rendered `ProductCard` is an internal link to another `/products/<slug>`.
- **Breadcrumb** — links back to `/` and `/products`.

The `/products` index page (`app/products/page.tsx`) lists every product as a `ProductCard`, so Googlebot can discover all 142 product URLs in one hop from the index.

---

## 6. Sitemap

`app/sitemap.ts` builds `sitemap.xml` at build time:

```ts
const productPages = products.map(p => ({
  url: `${BASE}/products/${p.slug}`,
  lastModified: SITE_LAUNCH,
  changeFrequency: 'monthly',
  priority: 0.8,
}))
```

- Every product in `lib/products.ts` is auto-added — no manual list to maintain.
- `priority: 0.8` for product pages (vs. 0.9 for hub/guide pages and 1.0 for the homepage).
- `lastModified` is honest: it's set to the site launch date, not `new Date()`. Faking fresh dates harms crawl prioritization once Google notices.
- `robots.ts` references this sitemap.

---

## 7. Adding a new product (checklist)

1. Add a new entry to the `products` array in `lib/products.ts`. Required fields: `slug`, `name`, `tagline`, `price`, `category`, `tags`, `image`, `affiliateUrl` (use `AFF(slug)`), `shortDescription`, `fullDescription`, `benefits`, `protocol`, `synergies`, `deepDiveTitle`, `highlights` (3 blocks). Optional but recommended: `seoTitle`, `faqs`, `badge`, `featured`.
2. If it's a flagship product, add a row to `PRODUCT_STATS` in `app/products/[slug]/page.tsx`.
3. If it's in `Fat Loss / Metabolic` and has a published trial, add a row to `CLINICAL_TRIALS`.
4. (Optional) Add curated guide links to `productInternalLinks[slug]` in `lib/internal-links.ts`.
5. Build/deploy — static page, sitemap entry, and metadata are all generated automatically.

---

## 8. Why this setup indexes well

- **One template, uniform schema** — Google sees a consistent content pattern across 142 URLs.
- **Static HTML, public cache** — no client-side-only content, no render delays for the crawler.
- **Self-canonical per URL** — no duplicate-content signals.
- **Dense internal linking** — index page → product → synergies → guides → back to products.
- **Honest `lastmod`** — preserves crawl budget.
- **Complete OG/Twitter metadata** — good social previews, which indirectly drive links.
- **FAQ blocks on every page** — ready for FAQ JSON-LD (next enhancement if not already wired).
