# Building 20 Unique Sites — Full Blueprint

Based on the PeptidesClav architecture. Each site replicates every feature of the original and has its own niche, content, affiliate program, and product sourcing strategy.

---

## The Template Feature Set (What Every Site Gets)

Before the niches, here is every feature you must replicate on each build:

| Feature | How It Works in the Template |
|---|---|
| **Product catalog** | `/products` page with category filter tabs + grid of product cards |
| **Individual product pages** | `/products/[slug]` — full guide: description, benefits, protocols, synergies |
| **Protocol stacks** | `/stacks` + `/stacks/[slug]` — curated multi-product combos |
| **Goal pages** | Filtered views of products by use-case (e.g., `/healing`, `/body-composition`) |
| **Beginner guide** | `/guide` — educational long-form page |
| **FAQ page** | `/faq` — 15+ questions |
| **Contact page** | `/contact` — form with inquiry types |
| **AI chat widget** | Floating OpenAI-powered advisor, bottom-right, suggests products |
| **Affiliate links** | All "Buy" buttons use affiliate URLs with tracking parameter |
| **Affiliate disclosure** | Footer disclaimer |
| **SEO** | Dynamic sitemap, robots.txt, per-page metadata, OG image |
| **Animations** | Framer Motion `AnimateIn` wrapper, hero marquee carousel |
| **Responsive design** | Tailwind CSS, mobile nav menu |
| **Static generation** | `generateStaticParams()` on all dynamic routes |
| **Image optimization** | Next.js `<Image>` with external domain allow-list in `next.config.ts` |

---

## Tech Stack (Identical for All 20 Sites)

```
Next.js 16.2.0 (read node_modules/next/dist/docs/ before writing any code)
React 19.2.4
TypeScript 5.x
Tailwind CSS 4.x
Framer Motion 12.x
Lucide React 0.577.0
Neon Serverless PostgreSQL (@neondatabase/serverless)
OpenAI SDK 6.x (GPT-4o-mini for chat widget)
```

### Environment Variables (`.env.local`) for Every Site

```env
DATABASE_URL=         # Neon PostgreSQL connection string (create new project per site)
OPENAI_API_KEY=       # Your OpenAI key (shared across sites is fine)
```

### `next.config.ts` — Add each site's image CDN domain

```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'AFFILIATE_IMAGE_DOMAIN.com' },
    { protocol: 'https', hostname: 'cdn.shopify.com' },
  ],
},
```

---

## Affiliate Setup — How the Original Works & How to Replicate

### Original Pattern (`lib/products.ts`)

```ts
// One helper function, one affiliate ID — everything flows through it
const AFFILIATE_ID = '9016964.3f1b1e';         // Your unique ref ID from the program
const BASE = 'https://apollopeptidesciences.com/product';

function apollo(slug: string) {
  return `${BASE}/${slug}/?rfsn=${AFFILIATE_ID}`;
}

// Each product has:
{
  affiliateUrl: apollo('bpc157-10mg'),
  // resolves to: https://apollopeptidesciences.com/product/bpc157-10mg/?rfsn=9016964.3f1b1e
}
```

### How to Replicate for Any Affiliate Program

1. **Sign up** at the affiliate program (links provided per niche below).
2. **Get your tracking parameter** — every program has one:
   - `?rfsn=YOUR_ID` (Refersion-based programs like Apollo)
   - `?ref=YOUR_ID` (most Shopify stores)
   - `?aff=YOUR_ID` (ShareASale, Impact, etc.)
   - `?subid=YOUR_ID` (CJ Affiliate)
3. **Create a helper function** in `lib/products.ts`:

```ts
const AFFILIATE_ID = 'YOUR_ID_HERE';
const BASE_URL = 'https://VENDOR.com/products';
const PARAM = 'ref';  // whatever the program uses

function aff(slug: string) {
  return `${BASE_URL}/${slug}?${PARAM}=${AFFILIATE_ID}`;
}
```

4. **Use it on every product** — `affiliateUrl: aff('product-slug')`.
5. **Add disclosure to footer** — required by FTC and most affiliate TOS:

```tsx
<p>Links to [Vendor] contain affiliate tracking. We may earn a commission at no cost to you.</p>
```

### How to Find Product Slugs for Affiliate URLs

1. Go to the vendor's site and browse to a product page.
2. The URL slug is the part after `/product/` or `/products/` — copy it exactly.
3. Append your affiliate parameter: `?ref=YOUR_ID`.
4. Test: click it, complete a test checkout step, verify it shows "referred by [your ID]" in the vendor's affiliate dashboard.

### How to Get Product Images

There are three methods (use whichever the affiliate program allows):

**Method A — Direct CDN (what PeptidesClav does)**
- Right-click any product image on the vendor site → "Copy image address"
- Paste the full URL into your product's `image` field
- Add the domain to `next.config.ts` `remotePatterns`
- **Pros:** Always up to date. **Cons:** Image can break if vendor moves/deletes it.

**Method B — Download and self-host in `/public/images/`**
- Download images → put in `/public/images/PRODUCT_SLUG.webp`
- Reference as `image: '/images/PRODUCT_SLUG.webp'`
- **Pros:** Never breaks. **Cons:** Need to update manually if product changes.

**Method C — Use the vendor's Shopify API (if they're on Shopify)**
```
https://VENDOR.myshopify.com/products.json
```
Returns all products with image URLs, titles, and handles. Parse this once to build your `lib/products.ts` data file. Most Shopify stores have this endpoint publicly accessible.

---

## The 20 Sites

---

### Site 1 — NootroProtocols.com
**Niche:** Nootropics & cognitive enhancement protocols

**Goal Pages:** `/focus`, `/memory`, `/mood`, `/sleep`

**Sample Products (15-18):**
- Alpha-GPC 300mg
- Lion's Mane Extract 1000mg
- Bacopa Monnieri 300mg
- L-Theanine + Caffeine Stack
- Modafinil (prescription only — educational only, no affiliate link)
- Phosphatidylserine 100mg
- Noopept 10mg
- Racetam Stack (Aniracetam + Oxiracetam)
- Ashwagandha KSM-66
- Rhodiola Rosea 500mg
- Citicoline 250mg
- NAC 600mg
- Magnesium L-Threonate
- Microdose PRL-8-53 (research)
- Vinpocetine 10mg
- Huperzine A 50mcg

**Sample Stacks (5):**
1. Beginner Focus Stack (L-Theanine + Alpha-GPC)
2. Memory Consolidation Stack (Bacopa + Lion's Mane + Phosphatidylserine)
3. Creative Flow Stack (Aniracetam + Alpha-GPC + Rhodiola)
4. Mood & Resilience Stack (Ashwagandha + NAC + L-Theanine)
5. Deep Sleep Stack (Magnesium L-Threonate + Ashwagandha)

**Affiliate Program:**
- **Primary:** [Double Wood Supplements](https://www.doublewoodsupplements.com/pages/affiliate-program) — pays 15% commission, Refersion-based, cookie 30 days
- **Secondary:** Pure Rawz, Nootropics Depot (has affiliate program via email inquiry)
- **Tracking param:** `?rfsn=YOUR_ID` (Double Wood uses Refersion)

**Product Images:** Double Wood product images are hosted at `cdn.shopify.com` — already on the allow-list in `next.config.ts`.

**AI Chat System Prompt Focus:** Cognitive goals, study routines, stack safety, cycling protocols, combining with prescription meds disclaimer.

---

### Site 2 — SARMsProtocol.com
**Niche:** SARMs research chemical education (educational/informational only — no direct sales links to avoid legal issues; monetize via informational affiliate links to PCT supplements)

**Goal Pages:** `/bulking`, `/cutting`, `/recomposition`, `/pct`

**Sample Products (12):**
- RAD-140 (Testolone) — educational profile
- LGD-4033 (Ligandrol)
- Ostarine (MK-2866)
- Cardarine (GW-501516)
- Ibutamoren (MK-677)
- Andarine (S4)
- YK-11
- SR9009 (Stenabolic)
- S23
- AC-262,536
- ACP-105
- RAD-150

**Affiliate Strategy:** Rather than linking to SARMs (legal gray area), monetize PCT and support supplement pages:
- **PCT Products:** Nolvadex info → affiliate to natural PCT stacks at Double Wood or Nootropics Depot
- **Blood work services:** PrivateMDLabs affiliate program
- **Cycle support:** Milk Thistle, NAC, TUDCA from Double Wood

**Affiliate Program:**
- **PrivateMDLabs** (blood testing) — has affiliate program, pays per order
- **Double Wood** for PCT/support supplements
- **Tracking:** Add disclaimer — "This site does not sell or endorse SARMs. All content is for harm reduction and research education."

**Product Images:** Use placeholder imagery or royalty-free lab/science imagery from Unsplash.

---

### Site 3 — GLP1Protocols.com
**Niche:** GLP-1 agonist education (Semaglutide, Tirzepatide, Retatrutide) — mirrors the body-composition section of PeptidesClav but as a dedicated site

**Goal Pages:** `/weight-loss`, `/diabetes-management`, `/anti-aging`, `/appetite`

**Sample Products (12):**
- Semaglutide 2mg
- Semaglutide 5mg
- Semaglutide 10mg
- Tirzepatide 5mg
- Tirzepatide 10mg
- Tirzepatide 15mg
- Retatrutide 2mg
- Retatrutide 5mg
- Cagrilintide + Semaglutide Combo
- Bacteriostatic Water 30ml
- Insulin Syringes 1ml (supplies)
- Alcohol Swabs (supplies)

**Sample Stacks (4):**
1. Beginner Sema Protocol (2mg titration)
2. Accelerated Fat Loss (Semaglutide + CJC/Ipamorelin)
3. Tirzepatide Ramp Protocol
4. Maintenance Phase Protocol

**Affiliate Program:**
- **Apollo Peptides Sciences** — same affiliate you already have: `?rfsn=9016964.3f1b1e`
- Simply reuse the same affiliate ID, new site

**Product Images:**
```
https://apollopeptidesciences.com/wp-content/uploads/
```
Copy exact image URLs from your existing `lib/products.ts` in PeptidesClav.

---

### Site 4 — MushroomMedicine.co
**Niche:** Medicinal mushroom protocols

**Goal Pages:** `/immunity`, `/cognition`, `/energy`, `/gut-health`

**Sample Products (14):**
- Lion's Mane 8:1 Extract
- Reishi Dual Extract
- Chaga Mushroom Extract
- Cordyceps Militaris 500mg
- Turkey Tail 500mg
- Shiitake Extract
- Maitake D-Fraction
- Agarikon Extract
- Tremella Fuciformis
- Psilocybin Microdose Education (information only)
- Lion's Mane + Cordyceps Stack
- Reishi + Turkey Tail Immune Blend
- Full Spectrum 10-Mushroom Blend
- Mushroom Growing Kit (physical product)

**Sample Stacks (5):**
1. Immune Fortress Stack (Turkey Tail + Reishi + Shiitake)
2. Brain Booster Stack (Lion's Mane + Cordyceps)
3. Energy Protocol (Cordyceps + Chaga)
4. Gut Restoration Stack (Turkey Tail + Maitake)
5. Full Longevity Protocol (All 5 major species)

**Affiliate Program:**
- **Real Mushrooms** — `https://www.realmushrooms.com/affiliate-program/` — pays 10-15%, ShareASale based
- **Host Defense (Paul Stamets)** — affiliate via Commission Junction (CJ)
- **Four Sigmatic** — affiliate program via Impact
- **Tracking param:** varies by program (ShareASale uses `?afftrack=`, CJ uses `?aid=`)

**Product Images:** Request hi-res product images from the affiliate program manager — most programs provide a media kit. Otherwise use Shopify JSON endpoint.

---

### Site 5 — PeptideHealing.com
**Niche:** Injury recovery peptides (BPC-157, TB-500 focus) — spun from PeptidesClav's healing section

**Goal Pages:** `/tendon`, `/muscle`, `/joint`, `/nerve`, `/gut`

**Sample Products (10):**
- BPC-157 5mg
- BPC-157 10mg
- TB-500 (Thymosin Beta-4) 5mg
- TB-500 10mg
- BPC-157 + TB-500 Combo
- KPV Peptide
- GHK-Cu 50mg
- LL-37 Antimicrobial
- Selank 5mg
- Bacteriostatic Water 10ml

**Sample Stacks (5):**
1. Tendon Repair Stack (BPC-157 + TB-500)
2. Muscle Tear Protocol (TB-500 + IGF-1 LR3)
3. Joint Recovery Stack (BPC-157 + GHK-Cu)
4. Gut Healing Protocol (BPC-157 oral + KPV)
5. Neural Recovery Stack (BPC-157 + Selank)

**Affiliate Program:** Apollo Peptides Sciences — same ID as PeptidesClav: `?rfsn=9016964.3f1b1e`

**Product Images:** Same Apollo CDN URLs from your existing site's `lib/products.ts`.

---

### Site 6 — LongevityStack.io
**Niche:** Anti-aging and longevity supplement protocols

**Goal Pages:** `/senolytic`, `/nad-pathway`, `/telomere`, `/hormesis`

**Sample Products (16):**
- NMN 500mg
- NR (Nicotinamide Riboside) 300mg
- Resveratrol 500mg
- Quercetin 500mg
- Fisetin 100mg
- Dasatinib (prescription — info only)
- Epithalon Peptide 10mg
- GHK-Cu 50mg
- Rapamycin (info only)
- Metformin (info only)
- Spermidine 6mg
- Alpha-Ketoglutarate (AKG)
- Glycine 1000mg
- NAC 600mg
- Astaxanthin 12mg
- CoQ10 Ubiquinol 200mg

**Sample Stacks (5):**
1. Yamanaka Lite Stack (NMN + Resveratrol + NR)
2. Senolytic Protocol (Quercetin + Fisetin — 2 days/month)
3. Telomere Support Stack (Epithalon + GHK-Cu + Astaxanthin)
4. Mitochondrial Optimization (CoQ10 + NAC + AKG)
5. Full David Sinclair Protocol

**Affiliate Program:**
- **ProHealth Longevity** — `https://www.prohealthlongevity.com/pages/affiliate-program` — 8-12% commission
- **DoNotAge.org** — has affiliate program, strong longevity community
- **Renue By Science** — NMN/NR specialist, affiliate via Refersion
- **Tracking param:** `?rfsn=YOUR_ID` (Refersion programs)

**Product Images:**
- ProHealth product images: `images.ctfassets.net` (Contentful CDN) — add to `next.config.ts`
- DoNotAge: `donotage.org` CDN or Shopify

---

### Site 7 — AdaptogenProtocols.com
**Niche:** Adaptogen herbs for stress and performance

**Goal Pages:** `/stress`, `/hormones`, `/sleep`, `/athletic-performance`

**Sample Products (15):**
- Ashwagandha KSM-66 600mg
- Rhodiola Rosea 500mg
- Eleuthero (Siberian Ginseng)
- Panax Ginseng 200mg
- Schisandra Berry Extract
- Holy Basil (Tulsi) 400mg
- Shilajit (Mumijo) 250mg
- Maca Root 1500mg
- Fo-Ti (He Shou Wu)
- Astragalus 500mg
- Jiaogulan Extract
- Shatavari 500mg
- Licorice Root DGL
- Moringa Oleifera
- Codonopsis (Dang Shen)

**Sample Stacks (5):**
1. HPA Axis Reset (Ashwagandha + Rhodiola + Holy Basil)
2. Athletic Edge Stack (Panax Ginseng + Eleuthero + Shilajit)
3. Hormonal Balance Protocol (Maca + Shatavari + Ashwagandha)
4. Sleep & Recovery Stack (Ashwagandha + Schisandra + Licorice Root)
5. Longevity Adaptogen Protocol (Astragalus + Fo-Ti + Jiaogulan)

**Affiliate Program:**
- **Mountain Rose Herbs** — affiliate via Commission Junction
- **Banyan Botanicals** — has affiliate program for Ayurvedic herbs
- **Herb Pharm** — affiliate via Commission Junction
- **Tracking param:** CJ uses `?cjpid=YOUR_ID&url=`

**Product Images:** Request from affiliate program media kits, or use Shopify JSON endpoint if vendor is on Shopify.

---

### Site 8 — CollagenOptimized.com
**Niche:** Collagen, skin health, and connective tissue protocols

**Goal Pages:** `/skin`, `/joints`, `/gut-lining`, `/hair-nails`

**Sample Products (12):**
- Marine Collagen Peptides 10g
- Bovine Collagen Type I & III
- Collagen Type II (UC-II) 40mg
- Vitamin C 1000mg (collagen co-factor)
- GHK-Cu Copper Peptide 50mg
- Hyaluronic Acid 200mg
- Silica (Bamboo Extract)
- Proline 500mg
- Glycine 3g
- MSM 1000mg
- Biotin 5000mcg
- SNAP-8 Topical (wrinkle peptide)

**Sample Stacks (4):**
1. Skin Regeneration Stack (Marine Collagen + GHK-Cu + Vitamin C)
2. Joint Lubrication Protocol (UC-II + Hyaluronic + MSM)
3. Hair & Nail Stack (Biotin + Silica + Marine Collagen)
4. Full Connective Tissue Protocol (All types combined)

**Affiliate Program:**
- **Vital Proteins** — affiliate via Impact (`?irclickid=`)
- **Ancient Nutrition (Dr. Axe)** — affiliate via Commission Junction
- **Sports Research** — affiliate via ShareASale
- For GHK-Cu/SNAP-8: Apollo Peptides `?rfsn=9016964.3f1b1e`

**Product Images:**
- Vital Proteins: `images.ctfassets.net`
- Ancient Nutrition: Shopify CDN

---

### Site 9 — SleepBiohack.com
**Niche:** Sleep optimization protocols and supplements

**Goal Pages:** `/sleep-onset`, `/deep-sleep`, `/dream`, `/circadian-reset`

**Sample Products (14):**
- Magnesium Glycinate 400mg
- Magnesium L-Threonate 2g
- L-Theanine 200mg
- Apigenin 50mg
- Inositol 900mg
- Melatonin 0.5mg (low-dose)
- Tart Cherry Extract
- Glycine 3g
- Ashwagandha KSM-66 (evening protocol)
- Phosphatidylserine 100mg (cortisol suppression)
- GABA 750mg
- 5-HTP 100mg
- Valerian Root 600mg
- Passionflower Extract

**Sample Stacks (5):**
1. Andrew Huberman Sleep Stack (Magnesium Threonate + Apigenin + L-Theanine)
2. Deep Sleep Protocol (Magnesium Glycinate + Glycine + Tart Cherry)
3. Cortisol Clearing Stack (Phosphatidylserine + Ashwagandha + GABA)
4. REM Optimization (5-HTP + Inositol + Valerian)
5. Circadian Reset Protocol (low-dose Melatonin timing guide)

**Affiliate Program:**
- **Momentous** — affiliate via Impact; strong Huberman overlap
- **Double Wood** for individual ingredients
- **Tracking param:** `?ref=YOUR_ID` (Momentous uses standard Refersion-like)

**Product Images:** Momentous uses `cdn.shopify.com` — already on allow-list.

---

### Site 10 — GutHealthProtocols.com
**Niche:** Gut microbiome, digestive health, leaky gut

**Goal Pages:** `/leaky-gut`, `/ibs`, `/microbiome`, `/digestion`

**Sample Products (15):**
- Probiotic 100B CFU (30-strain)
- Saccharomyces Boulardii 10B
- L-Glutamine 5g
- Zinc Carnosine 75mg
- Deglycyrrhizinated Licorice (DGL)
- Butyrate (Sodium Butyrate) 600mg
- Colostrum 500mg
- Digestive Enzymes Blend
- Betaine HCl 500mg
- Berberine 500mg
- Prebiotic Fiber (Partially Hydrolyzed Guar Gum)
- Slippery Elm 400mg
- Marshmallow Root
- BPC-157 5mg (gut healing peptide)
- Collagen Peptides (gut lining)

**Sample Stacks (5):**
1. Leaky Gut Repair (L-Glutamine + Zinc Carnosine + DGL)
2. Microbiome Rebuild (Probiotics + Prebiotics + Butyrate)
3. SIBO Protocol (Berberine + Digestive Enzymes + Betaine HCl)
4. IBS Calming Stack (Colostrum + Slippery Elm + L-Glutamine)
5. Advanced Gut Peptide Protocol (BPC-157 + L-Glutamine + Collagen)

**Affiliate Program:**
- **Seed Health** — affiliate program available (`?promo=YOUR_CODE`)
- **Thrive Market** — affiliate via Impact
- **Double Wood** for individual supplements
- For BPC-157: Apollo Peptides `?rfsn=9016964.3f1b1e`

---

### Site 11 — ThyroidProtocols.com
**Niche:** Thyroid health optimization (educational — no prescription meds)

**Goal Pages:** `/hypothyroid`, `/hyperthyroid`, `/hashimotos`, `/iodine-protocol`

**Sample Products (12):**
- Iodine + Iodide (Lugol's 5%)
- Selenium 200mcg
- Zinc 30mg (Zinc Bisglycinate)
- Vitamin D3 5000IU + K2
- Magnesium Glycinate
- Ashwagandha KSM-66
- NAC 600mg
- Myo-Inositol 2g
- L-Tyrosine 500mg
- GLP-1 (Semaglutide — thyroid caution page)
- Betaine HCl (thyroid/stomach acid connection)
- Curcumin (anti-inflammatory for Hashimoto's)

**Sample Stacks (4):**
1. Hypothyroid Support Stack (Iodine + Selenium + Zinc)
2. Hashimoto's Protocol (Myo-Inositol + Selenium + Curcumin)
3. Thyroid-Adrenal Stack (Ashwagandha + Tyrosine + Vitamin D)
4. Detox & Conversion Protocol (NAC + Selenium + Zinc)

**Affiliate Program:**
- **Seeking Health** — affiliate via ShareASale, specialist in methylation/thyroid
- **Optimox (Iodoral)** — contact for affiliate program
- **Double Wood** for individual items
- **Tracking:** ShareASale uses `?afftrack=CLICKID&sscid=YOUR_ID`

---

### Site 12 — TestosteroneProtocols.com
**Niche:** Natural testosterone optimization (no TRT — educational only)

**Goal Pages:** `/testosterone-boost`, `/pct`, `/estrogen-control`, `/fertility`

**Sample Products (14):**
- Tongkat Ali (Longjack) 400mg
- Fadogia Agrestis 600mg
- Ashwagandha KSM-66
- Boron Glycinate 6mg
- Zinc + Magnesium (ZMA)
- Vitamin D3 5000IU
- Shilajit Purified 250mg
- DHEA 25mg
- Creatine Monohydrate 5g
- Fenugreek 600mg
- Maca Root
- DIM (Diindolylmethane) 300mg
- Chrysin 500mg
- Nettle Root Extract

**Sample Stacks (5):**
1. Huberman Testosterone Stack (Tongkat Ali + Fadogia)
2. Natural PCT Stack (DIM + Zinc + Ashwagandha)
3. Estrogen Control Protocol (DIM + Chrysin + Nettle Root)
4. Fertility & Motility Stack (Zinc + Shilajit + Maca)
5. Full Testosterone Optimization (All 6 key compounds)

**Affiliate Program:**
- **Momentous** (sells Tongkat Ali, Fadogia) — affiliate via Impact
- **Double Wood Supplements** — has all ingredients
- **Nootropics Depot** — has affiliate program (email inquiry at their site)

---

### Site 13 — ImmunityProtocols.com
**Niche:** Immune system optimization and defense protocols

**Goal Pages:** `/acute-defense`, `/long-covid`, `/autoimmune`, `/prevention`

**Sample Products (15):**
- Vitamin C Liposomal 1000mg
- Vitamin D3 + K2 5000IU
- Zinc Glycinate 30mg
- Quercetin 500mg
- NAC 600mg
- Elderberry Extract 500mg
- Beta-Glucan 1,3/1,6 500mg
- Turkey Tail Mushroom 500mg
- Astragalus 500mg
- Lactoferrin 300mg
- Selenium 200mcg
- Andrographis 400mg
- Cat's Claw 500mg
- Thymosin Alpha-1 Peptide (research)
- LL-37 Antimicrobial Peptide

**Sample Stacks (5):**
1. Acute Infection Protocol (Vitamin C + Zinc + Quercetin)
2. Chronic Defense Stack (Beta-Glucan + Turkey Tail + Astragalus)
3. Long COVID Recovery (NAC + Quercetin + Lactoferrin)
4. Autoimmune Support (Thymosin Alpha-1 + Turkey Tail + Vitamin D)
5. Prevention Baseline Stack (Vitamin D + Zinc + Elderberry)

**Affiliate Program:**
- **Lifeextension.com** — affiliate via Commission Junction
- **Double Wood** for individual supplements
- Apollo Peptides for TA-1 and LL-37 peptides: `?rfsn=9016964.3f1b1e`

---

### Site 14 — WomensHormones.co
**Niche:** Women's hormonal health, PCOS, menopause, fertility

**Goal Pages:** `/pcos`, `/menopause`, `/fertility`, `/perimenopause`

**Sample Products (14):**
- Myo-Inositol + D-Chiro Inositol (40:1)
- DIM 300mg
- Vitex (Chasteberry) 400mg
- Magnesium Glycinate 400mg
- Shatavari 500mg
- NAC 600mg
- Berberine 500mg
- Evening Primrose Oil 1000mg
- Boron Glycinate 6mg
- Progesterone Cream (topical, OTC)
- Rhodiola Rosea
- Ashwagandha KSM-66
- Vitamin D3 + K2
- Iron Bisglycinate 36mg

**Sample Stacks (5):**
1. PCOS Protocol (Myo-Inositol + DIM + Berberine)
2. Menopause Transition Stack (Shatavari + DIM + Magnesium)
3. Fertility Optimization (Vitex + Myo-Inositol + NAC)
4. PMS Relief Stack (Vitex + Magnesium + Evening Primrose)
5. Full Hormone Balance Protocol

**Affiliate Program:**
- **Fairhaven Health** (fertility specialty) — affiliate via Commission Junction
- **Flo Vitamins** — affiliate program via ShareASale
- **Double Wood** for general supplements

---

### Site 15 — CognitiveEdge.io
**Niche:** Performance cognitive enhancement for professionals and athletes

**Goal Pages:** `/focus`, `/memory`, `/executive-function`, `/flow-state`

**Sample Products (16):**
- Semax 0.1% Nasal Spray
- Selank 0.15% Nasal Spray
- Dihexa Peptide
- Cerebrolysin (education only)
- Alpha-GPC 600mg
- Uridine Monophosphate 250mg
- Omega-3 (EPA/DHA) 2000mg
- Bacopa Monnieri 450mg
- Lion's Mane 8:1 Extract
- Noopept 10mg
- Piracetam 800mg
- Aniracetam 750mg
- Vinpocetine 10mg
- Huperzine A 50mcg
- ALCAR 500mg
- PRL-8-53 5mg

**Sample Stacks (6):**
1. Semax + Alpha-GPC (ADHD-alternative research protocol)
2. Selank Anxiety-Focus Stack
3. Beginner Nootropic Stack (Bacopa + Lion's Mane + Alpha-GPC)
4. Advanced Racetam Stack (Piracetam + Aniracetam + Alpha-GPC)
5. Executive Function Protocol (Uridine + DHA + CDP-Choline)
6. Long-Term Neurogenesis (Lion's Mane + Bacopa + Omega-3)

**Affiliate Program:**
- **Cosmic Nootropic** — sells Semax, Selank; has affiliate program via Refersion
- **Peptide Sciences** (different from Apollo) — has affiliate program
- **Double Wood** for standard nootropics
- **Cosmic Nootropic tracking:** `?ref=YOUR_ID`

**Product Images:** Cosmic Nootropic is on Shopify — use `products.json` endpoint to get all image URLs.

---

### Site 16 — BiohackingProtocols.com
**Niche:** Advanced biohacking, quantified self, intervention tracking

**Goal Pages:** `/metabolic`, `/hormonal`, `/epigenetic`, `/mitochondrial`

**Sample Products (18):**
- Rapamycin (info/education page only)
- Metformin (info/education only)
- NMN 1g (high dose)
- Fisetin 100mg (senolytic)
- Quercetin + Dasatinib Protocol (education)
- Berberine 500mg (GLP-1 mimetic)
- AKG (Alpha-Ketoglutarate) 2g
- Spermidine 6mg
- Lithium Orotate 5mg
- NAD+ IV equivalent (sublingual)
- Methylene Blue 1mg
- Taurine 2g
- Urolithin A 500mg
- GHK-Cu Peptide
- Epithalon Peptide
- BPC-157
- Semaglutide (metabolic)
- Thymosin Alpha-1 (immune)

**Sample Stacks (6):**
1. Bryan Johnson Protocol Recreation (NMN + AKG + Taurine + Fisetin)
2. David Sinclair Full Stack
3. Rapamycin Mimetic Stack (Berberine + Spermidine + Urolithin A)
4. Mitochondrial Max Protocol (Methylene Blue + Taurine + NAD+)
5. Immune Rejuvenation (TA-1 + Epithalon + GHK-Cu)
6. Full Longevity Protocol (All 6 pathways covered)

**Affiliate Programs:**
- **DoNotAge** — affiliate program for NMN, spermidine, etc.
- **Apollo Peptides** — for peptides: `?rfsn=9016964.3f1b1e`
- **Renue By Science** — NMN specialist, affiliate via Refersion
- **AgelessRx** — telemedicine for rapamycin (affiliate program available)

---

### Site 17 — ThymosinProtocols.com
**Niche:** Thymosin peptides and immune/healing peptides (TA-1, TB-500, KPV)

**Goal Pages:** `/immune-restoration`, `/lyme`, `/autoimmune`, `/cancer-support`

**Sample Products (10):**
- Thymosin Alpha-1 5mg
- Thymosin Beta-4 (TB-500) 5mg
- Thymosin Beta-4 Fragment
- KPV Tripeptide 50mg
- LL-37 Antimicrobial 5mg
- VLPALPQ (Antimicrobial Peptide)
- BPC-157 5mg
- Epitalon 10mg (Epithalon)
- GHK-Cu Copper Peptide
- Bacteriostatic Water

**Sample Stacks (4):**
1. Chronic Infection Protocol (TA-1 + LL-37 + BPC-157)
2. Autoimmune Reset (TA-1 + KPV + TB-500)
3. Post-Cancer Support (TA-1 + Epithalon + GHK-Cu)
4. Full Immune Optimization (TA-1 + TB-500 + KPV)

**Affiliate Program:** Apollo Peptides: `?rfsn=9016964.3f1b1e` — has all of these products.

**Product Images:** Same Apollo CDN as PeptidesClav.

---

### Site 18 — PerformancePeptides.com
**Niche:** Athletic performance and body composition peptides (dedicated site for the gym/sport demographic)

**Goal Pages:** `/muscle-gain`, `/fat-loss`, `/recovery`, `/endurance`

**Sample Products (14):**
- CJC-1295 + Ipamorelin Blend 5mg
- IGF-1 LR3 0.1mg
- Hexarelin 5mg
- GHRP-2 5mg
- GHRP-6 5mg
- Tesamorelin 2mg
- AOD-9604 (fat metabolism peptide)
- Follistatin 344 1mg
- Mechano Growth Factor (MGF)
- BPC-157 10mg (recovery)
- TB-500 10mg (recovery)
- Semaglutide 5mg (fat loss)
- Tirzepatide 10mg (body recomp)
- Bacteriostatic Water 30ml

**Sample Stacks (6):**
1. Beginner GH Stack (CJC-1295 + Ipamorelin)
2. Mass Builder (CJC + Ipamorelin + IGF-1 LR3)
3. Fat Loss Accelerator (Semaglutide + CJC/Ipa + AOD-9604)
4. Recovery Pro (BPC-157 + TB-500 post-injury)
5. Endurance Stack (Tesamorelin + IGF-1 + BPC-157)
6. Elite Recomp (Tirzepatide + CJC + BPC-157)

**Affiliate Program:** Apollo Peptides: `?rfsn=9016964.3f1b1e`

**Product Images:** Apollo CDN — copy from PeptidesClav's existing product data.

---

### Site 19 — CopperPeptideProtocols.com
**Niche:** GHK-Cu copper peptide and skin/hair/wound healing (very specific niche)

**Goal Pages:** `/skin-rejuvenation`, `/hair-loss`, `/wound-healing`, `/anti-aging`

**Sample Products (10):**
- GHK-Cu Injectable 50mg
- GHK-Cu Topical Serum 0.1%
- GHK-Cu Topical Serum 0.5%
- SNAP-8 Topical Serum
- Argireline Solution 10%
- Leuphasyl Hexapeptide
- Matrixyl 3000 Serum
- Palmitoyl Tripeptide-5
- NAD+ Topical (skin application)
- Micro-needling Guide (non-product informational page with tool affiliate links)

**Sample Stacks (4):**
1. Anti-Wrinkle Peptide Protocol (GHK-Cu + SNAP-8 + Matrixyl)
2. Hair Growth Stack (GHK-Cu injectable + Topical + Minoxidil info)
3. Wound & Scar Protocol (GHK-Cu high-dose + Vitamin C)
4. Full Skin Rejuvenation Protocol (All cosmetic peptides)

**Affiliate Programs:**
- Apollo Peptides for injectable GHK-Cu and SNAP-8: `?rfsn=9016964.3f1b1e`
- **The Ordinary / DECIEM** — affiliate via Commission Junction (for topical serums)
- **Skincare Hero** marketplace — has affiliate program

---

### Site 20 — EpigenomicsProtocols.com
**Niche:** Epigenetic reprogramming, methylation, and gene expression optimization

**Goal Pages:** `/methylation`, `/detox`, `/dna-repair`, `/telomere-support`

**Sample Products (16):**
- Methyl-B12 1mg sublingual
- Methylfolate (5-MTHF) 1mg
- TMG (Trimethylglycine) 1g
- SAM-e 400mg
- Phosphatidylcholine 840mg
- NAC 600mg
- Sulforaphane (Broccoli Sprout) 30mg
- EGCG Green Tea Extract
- Resveratrol 500mg
- Pterostilbene 50mg
- Quercetin 500mg
- NMN 500mg
- Lithium Orotate 5mg (neuroprotective methylation)
- Epithalon (telomere peptide)
- GHK-Cu (gene expression modulator)
- Folic Acid vs Folate explainer (content page, not product)

**Sample Stacks (5):**
1. MTHFR Support Stack (Methylfolate + Methyl-B12 + TMG)
2. DNA Repair Protocol (NMN + Resveratrol + NAC)
3. Detox Pathway Stack (Sulforaphane + NAC + Phosphatidylcholine)
4. Telomere Preservation (Epithalon + Pterostilbene + Astragalus)
5. Full Epigenetic Reset Protocol

**Affiliate Programs:**
- **Seeking Health** (Dr. Ben Lynch's brand) — methylation specialty — ShareASale
- **Renue By Science** for NMN
- Apollo Peptides for Epithalon and GHK-Cu: `?rfsn=9016964.3f1b1e`

---

## Step-by-Step Build Process (Apply to All 20)

### Step 1 — Copy the Template

```bash
# Clone PeptidesClav as starting point
cp -r /mnt/c/Users/Wilso/pepo /mnt/c/Users/Wilso/SITE_NAME
cd /mnt/c/Users/Wilso/SITE_NAME
git init && git add . && git commit -m "initial from template"
```

### Step 2 — Update `lib/products.ts`

Replace all 21 products with your niche's products. Keep the exact same `Product` type shape:

```ts
type Product = {
  slug: string;           // url-safe, lowercase, hyphens
  name: string;
  tagline: string;        // one-line hook
  price: number;          // in dollars
  category: string;       // matches your goal pages
  tags: string[];         // used for filtering
  image: string;          // full URL or /public path
  affiliateUrl: string;   // aff('vendor-slug') result
  shortDescription: string;
  fullDescription: string;  // 300-500 words, include mechanism of action
  benefits: string[];     // 6-8 bullet points
  protocols: Protocol[];  // dosing schedules
  synergies: string[];    // other product slugs
  seoTitle: string;
  researchRating: number; // 1-5
  popularityRank: number; // 1 to N
  highlights: string[];   // 3 short callout phrases
}
```

### Step 3 — Update `lib/stacks.ts`

Create 5-6 stacks for your niche. Each stack must reference product slugs from your new `lib/products.ts`.

### Step 4 — Update Goal Pages

In the original site, goal pages (`/healing`, `/body-composition`, `/anti-aging`) filter `allProducts` by category tag. Rename these to match your niche's goal pages. Edit `app/[goal-page]/page.tsx` and update the filter logic.

### Step 5 — Update Site Metadata

In `app/layout.tsx`:

```ts
export const metadata = {
  title: 'Your Site Tagline Here',
  description: 'Your niche description',
  metadataBase: new URL('https://yourdomain.com'),
}
```

Update the OG image at `public/og-image.png` (1200x630px recommended).

### Step 6 — Update the AI Chat System Prompt

In `app/api/chat/route.ts`, the system prompt currently references peptide products. Replace it with your niche's context:

```ts
const systemPrompt = `You are a knowledgeable [NICHE] protocol advisor...
You help users choose the right [PRODUCTS] for their goals.
Current catalog: ${JSON.stringify(allProducts.map(p => ({ name: p.name, slug: p.slug, category: p.category })))}
...`
```

### Step 7 — Update `next.config.ts` Image Domains

```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'your-affiliate-image-cdn.com' },
    { protocol: 'https', hostname: 'cdn.shopify.com' },
  ],
},
```

### Step 8 — Update Footer Disclosure

In `components/Footer.tsx`, change the affiliate disclosure text to name your specific affiliate program.

### Step 9 — Update Sitemap & Robots

`app/sitemap.ts` and `app/robots.ts` — update the base URL to your domain.

### Step 10 — Set Environment Variables

In `.env.local`:
```
DATABASE_URL=          # New Neon project per site
OPENAI_API_KEY=        # Shared key is fine
```

Create a new Neon project at neon.tech for each site (free tier supports it).

### Step 11 — Deploy

Each site goes to Vercel as a separate project. Add env vars in the Vercel dashboard. Connect a custom domain.

---

## Unique Content Checklist Per Site

To avoid duplicate content penalties (Google penalizes identical content across domains):

- [ ] All product descriptions rewritten for the niche (no copy-paste from template)
- [ ] All stack overviews written fresh
- [ ] `/guide` page rewritten for your specific niche and audience
- [ ] `/faq` page has niche-specific questions (not generic)
- [ ] Homepage hero headline and stats are niche-specific
- [ ] Goal page descriptions rewritten
- [ ] AI chat system prompt reflects new niche
- [ ] Unique OG image and logo
- [ ] Unique domain and metadata title/description

---

## Affiliate Tracking Parameter Quick Reference

| Network | Param Format | Example |
|---|---|---|
| Refersion | `?rfsn=ID.hash` | `?rfsn=9016964.3f1b1e` |
| ShareASale | `?afftrack=&sscid=ID` | `?afftrack=&sscid=abc123` |
| Impact | `?irclickid=` (dynamic) | Needs JS tag in `<head>` |
| Commission Junction | `?cjpid=ID` | `?cjpid=12345678` |
| Shopify Collabs | `?ref=CODE` | `?ref=yourcode` |
| PartnerStack | `?ref=ID` | `?ref=yourname` |
| Direct/Custom | varies | Check program dashboard |

**For Impact and CJ:** You may need to add a pixel/JS tag in `app/layout.tsx` `<head>` rather than just URL parameters. Check your program's integration docs.

---

## Scaling Notes

- **One Neon project per site** — free tier gives 10 projects, enough for 10 sites; upgrade or use multiple accounts for 20.
- **One Vercel account** can host all 20 sites on the free/pro plan.
- **One OpenAI key** can be shared across all sites — just watch token spend.
- **One Apollo affiliate ID** works across as many domains as you want — they track by the URL parameter, not the domain.
- Build sites in batches of 4-5, validate affiliate link tracking on each before building more.
