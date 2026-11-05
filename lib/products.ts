import { apolloProductUrl } from './site';

export interface ProductHighlight {
  title: string;
  body: string;
}

export interface ProductAuthor {
  name: string;
  url?: string;
  jobTitle?: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  salePrice: number;
  category: string;
  tags: string[];
  image: string;
  shopUrl: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  protocol: string;
  synergies: string[];
  seoTitle: string;
  deepDiveTitle: string;
  highlights: ProductHighlight[];
  researchRating: number;
  popularityRank: number;
  updatedAt?: string;
  author?: ProductAuthor;
}

const HANDLING =
  'Lyophilized research material. Keep the vial sealed, dry, and frozen until a qualified laboratory opens it. Shark Tides does not sell this compound for human consumption, injection, or clinical use. Checkout is completed with the research supplier, and the live price is shown there.';

function item(
  input: Omit<Product, 'price' | 'salePrice' | 'image' | 'shopUrl' | 'protocol' | 'updatedAt'> & {
    apollo: string;
  },
): Product {
  const { apollo, ...rest } = input;
  return {
    ...rest,
    price: 0,
    salePrice: 0,
    image: `/catalog/${rest.slug}.webp`,
    shopUrl: apolloProductUrl(apollo),
    protocol: HANDLING,
    updatedAt: '2026-11-05',
    author: { name: 'Shark Tides Research Desk', jobTitle: 'Catalog editor' },
  };
}

export const products: Product[] = [
  item({
    apollo: 'glp-3r-10mg',
    slug: 'retatrutide-10mg',
    name: 'Retatrutide 10mg',
    tagline: 'Triple-agonist research peptide. Supplier listing: GLP-3 R 10mg.',
    category: 'Body Composition',
    tags: ['Retatrutide', 'GLP-1', 'Metabolic', 'Research'],
    shortDescription:
      'Retatrutide 10mg lyophilized vial for laboratory research. The supplier lists this SKU as GLP-3 R 10mg. Orders checkout on the supplier site with live pricing.',
    seoTitle: 'Retatrutide 10mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Retatrutide 10mg in the Shark Tides catalog',
    researchRating: 4,
    popularityRank: 1,
    synergies: ['retatrutide-15mg', 'tirzepatide-15mg', 'semaglutide-10mg'],
    highlights: [
      { title: 'Catalog match', body: 'Checkout title on the supplier is GLP-3 R 10mg. The vial image is the single-vial retatrutide 10mg pack shot.' },
      { title: 'What it is', body: 'Retatrutide is an investigational peptide studied as a GIP, GLP-1, and glucagon receptor agonist.' },
    ],
    benefits: [
      'Single 10mg research vial, not a multi-pack',
      'Listed by the supplier under the code GLP-3 R',
      'Product photo hosted on sharktides.com',
      'Referral checkout stays on the supplier order page',
    ],
    fullDescription: `Retatrutide is a single-chain peptide under published investigation as a triple receptor agonist at GIP, GLP-1, and glucagon receptors. Academic and industry papers describe it as distinct from single-agonist GLP-1 compounds and from dual GIP/GLP-1 compounds such as tirzepatide.

This Shark Tides listing is the 10mg vial. On the supplier storefront the same item is titled GLP-3 R 10mg, which is the name you will see at checkout. The photograph on this page is that supplier’s single-vial image, saved on sharktides.com so the catalog does not depend on an outside image host.

Shark Tides publishes the research catalog, comparison guides, and product pages. The supplier fulfills the order. Use the order button on this page to open the matching vial with our referral attached. Confirm the vial size on that page before you submit payment.`,
  }),
  item({
    apollo: 'glp-2t-15m',
    slug: 'tirzepatide-15mg',
    name: 'Tirzepatide 15mg',
    tagline: 'Dual GIP/GLP-1 research peptide. Supplier listing: GLP-2 T 15mg.',
    category: 'Body Composition',
    tags: ['Tirzepatide', 'GLP-1', 'GIP', 'Metabolic'],
    shortDescription:
      'Tirzepatide 15mg research vial. The supplier lists this SKU as GLP-2 T 15mg. Photo and order link are matched to that exact listing.',
    seoTitle: 'Tirzepatide 15mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Tirzepatide 15mg catalog notes',
    researchRating: 5,
    popularityRank: 2,
    synergies: ['tirzepatide-30mg', 'semaglutide-10mg', 'retatrutide-10mg'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-2t-15m. Image file is the single tirzepatide 15mg vial.' },
      { title: 'What it is', body: 'Tirzepatide is a dual GIP and GLP-1 receptor agonist studied in metabolic research.' },
    ],
    benefits: [
      '15mg single vial, separate from the 4-pack and 10-pack listings',
      'Supplier code GLP-2 T so the checkout name matches the vial',
      'Image served from the Shark Tides domain',
      'Larger 30mg and 60mg vials are listed separately',
    ],
    fullDescription: `Tirzepatide is a dual incretin receptor agonist, active at both GIP and GLP-1 receptors. That dual activity is why published metabolic studies treat it as a different research tool from semaglutide, which is a GLP-1 receptor agonist only.

This page is the 15mg single vial. The supplier sells it as GLP-2 T 15mg. Shark Tides also lists 20mg, 30mg, and 60mg singles, plus multi-vial packs, each with its own photo and its own checkout URL. Do not assume a pack page and a single-vial page are the same SKU.

The picture here is the supplier’s tirzepatide 15mg photograph, stored at /catalog/tirzepatide-15mg.webp on this domain. The order button opens that supplier URL with the Shark Tides referral parameter and does not hand this page’s canonical URL to the supplier.`,
  }),
  item({
    apollo: 'glp-1s-10mg',
    slug: 'semaglutide-10mg',
    name: 'Semaglutide 10mg',
    tagline: 'GLP-1 receptor agonist research vial. Supplier listing: GLP-1 S 10mg.',
    category: 'Body Composition',
    tags: ['Semaglutide', 'GLP-1', 'Metabolic'],
    shortDescription:
      'Semaglutide 10mg research vial. Supplier title GLP-1 S 10mg. Use this page for the single vial, not the box of 10.',
    seoTitle: 'Semaglutide 10mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Semaglutide 10mg catalog notes',
    researchRating: 5,
    popularityRank: 3,
    synergies: ['semaglutide-5mg', 'semaglutide-15mg', 'cagri-sema'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-1s-10mg. Image is the single semaglutide 10mg vial.' },
      { title: 'What it is', body: 'Semaglutide is a GLP-1 receptor agonist widely described in metabolic and weight-research literature.' },
    ],
    benefits: [
      '10mg single vial',
      '5mg and 15mg singles are separate listings',
      'A box of ten is its own product page',
      'Checkout name is GLP-1 S 10mg',
    ],
    fullDescription: `Semaglutide is a GLP-1 receptor agonist. Published clinical literature on the pharmaceutical form covers glycemic control and body-weight studies. The vial on this page is research material from the supplier, not a pharmacy-dispensed medicine.

Shark Tides lists three single sizes — 5mg, 10mg, and 15mg — and a matching box of ten for each. This URL is only the 10mg single. The supplier calls it GLP-1 S 10mg.

The product photo is hosted on sharktides.com. Ordering leaves this site through a nofollow referral link so the catalog page remains the indexed URL and the supplier still receives the referral id.`,
  }),
  item({
    apollo: 'bpc157-10mg',
    slug: 'bpc-157',
    name: 'BPC-157 10mg',
    tagline: 'Body protection compound fragment, 10mg research vial.',
    category: 'Healing & Recovery',
    tags: ['Healing', 'Gut Health', 'Tendon', 'BPC-157'],
    shortDescription:
      'BPC-157 10mg research vial. Synthetic 15-amino-acid fragment studied in tissue-repair and gut-barrier models. Photo matched to the supplier’s BPC-157 10mg listing.',
    seoTitle: 'BPC-157 10mg Research Peptide | Shark Tides',
    deepDiveTitle: 'BPC-157 10mg catalog notes',
    researchRating: 5,
    popularityRank: 4,
    synergies: ['tb-500', 'kpv', 'ghk-cu'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug bpc157-10mg. One 10mg vial.' },
      { title: 'What it is', body: 'BPC-157 is a pentadecapeptide fragment of a gastric protein sequence used in preclinical repair models.' },
    ],
    benefits: [
      '10mg single research vial',
      'Often discussed alongside TB-500 in repair literature',
      'Separate from KPV, which is a different peptide',
      'Image and checkout URL are the supplier’s BPC-157 10mg item',
    ],
    fullDescription: `BPC-157 (body protection compound-157) is a 15-residue synthetic peptide fragment derived from a sequence found in a gastric protein. Preclinical papers report work on tendon, gut mucosa, and vascular models. Those papers are animal and laboratory studies. This listing is the research vial only.

The supplier SKU is BPC-157 10mg. Shark Tides hosts that product image locally and sends the order to the same SKU. TB-500 10mg is a different compound and a different page. Researchers comparing the two should open both catalog entries rather than treating them as substitutes.

Nothing on this page is a dosing plan for people. Handling belongs in a laboratory. The order button shows the supplier’s current price.`,
  }),
  item({
    apollo: 'tb500-10mg',
    slug: 'tb-500',
    name: 'TB-500 10mg',
    tagline: 'Thymosin beta-4 fragment, 10mg research vial.',
    category: 'Healing & Recovery',
    tags: ['Healing', 'TB-500', 'Recovery'],
    shortDescription:
      'TB-500 10mg research vial, a synthetic fragment of thymosin beta-4. Supplier listing tb500-10mg, with the matching vial photo hosted here.',
    seoTitle: 'TB-500 10mg Research Peptide | Shark Tides',
    deepDiveTitle: 'TB-500 10mg catalog notes',
    researchRating: 5,
    popularityRank: 5,
    synergies: ['bpc-157', 'ghk-cu', 'kpv'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug tb500-10mg.' },
      { title: 'What it is', body: 'TB-500 is a synthetic version of the actin-binding region of thymosin beta-4.' },
    ],
    benefits: [
      '10mg research vial',
      'Distinct SKU from BPC-157 10mg',
      'Local product image',
      'Referral checkout on the TB-500 listing',
    ],
    fullDescription: `TB-500 is a synthetic peptide fragment modeled on thymosin beta-4, a protein associated with actin binding and cell migration in laboratory research. It is not the same molecule as BPC-157, and the supplier sells them as separate 10mg vials.

This Shark Tides page uses the supplier’s TB-500 10mg photograph and the supplier’s TB-500 product URL. If a stack guide on this site mentions both compounds, each name links to its own in-stock listing.

Research handling only. The live price is on the supplier checkout, not printed here, because the supplier gates pricing behind its own catalog.`,
  }),
  item({
    apollo: 'glp-3-r-30mg',
    slug: 'retatrutide-30mg',
    name: 'Retatrutide 30mg',
    tagline: 'Retatrutide 30mg single vial. Supplier listing: GLP-3 R 30mg.',
    category: 'Body Composition',
    tags: ['Retatrutide', 'GLP-1', 'Metabolic'],
    shortDescription:
      'Retatrutide 30mg research vial. Supplier code GLP-3 R 30mg. Not the same SKU as the 10mg vial or the box of ten.',
    seoTitle: 'Retatrutide 30mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Retatrutide 30mg catalog notes',
    researchRating: 4,
    popularityRank: 6,
    synergies: ['retatrutide-10mg', 'retatrutide-40mg', 'tirzepatide-30mg'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-3-r-30mg. Single-vial image.' },
      { title: 'Size', body: '30mg fill. 10mg, 15mg, 40mg, and 60mg are separate pages.' },
    ],
    benefits: ['30mg single vial', 'GLP-3 R checkout name', 'Separate multi-pack listing exists', 'Local image'],
    fullDescription: `This is the 30mg retatrutide vial. The supplier titles it GLP-3 R 30mg. Shark Tides keeps a separate page for every retatrutide size the supplier currently publishes: 10mg, 15mg, 30mg, 40mg, and 60mg, plus boxes of ten where those boxes exist.

The image is the single-vial retatrutide 30mg photo. Multi-pack photos are used only on the box listings, so a buyer can tell a single vial from a box before leaving this site.`,
  }),
  item({
    apollo: 'glp-2t-30mg',
    slug: 'tirzepatide-30mg',
    name: 'Tirzepatide 30mg',
    tagline: 'Tirzepatide 30mg single vial. Supplier listing: GLP-2 T 30mg.',
    category: 'Body Composition',
    tags: ['Tirzepatide', 'GLP-1', 'GIP'],
    shortDescription:
      'Tirzepatide 30mg research vial. Supplier code GLP-2 T 30mg. Single vial, with a separate box-of-ten page.',
    seoTitle: 'Tirzepatide 30mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Tirzepatide 30mg catalog notes',
    researchRating: 5,
    popularityRank: 7,
    synergies: ['tirzepatide-15mg', 'tirzepatide-60mg', 'retatrutide-30mg'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-2t-30mg.' },
      { title: 'Size', body: '30mg single. The 30mg box of ten is a different URL.' },
    ],
    benefits: ['30mg single vial', 'GLP-2 T checkout name', 'Not the 15mg or 60mg vial', 'Local image'],
    fullDescription: `Tirzepatide 30mg is the mid-high single-vial size in this catalog. The supplier lists it as GLP-2 T 30mg. A box of ten 30mg vials has its own Shark Tides page and its own supplier URL, using the multi-vial photograph.

Choose the single if you need one vial. Choose the box page if you need the multi-pack. Both stay on sharktides.com until the order button.`,
  }),
  item({
    apollo: 'ghk-cu',
    slug: 'ghk-cu',
    name: 'GHK-Cu 50mg',
    tagline: 'Copper tripeptide GHK-Cu, 50mg research vial.',
    category: 'Anti-Aging & Skin',
    tags: ['GHK-Cu', 'Skin', 'Hair Growth', 'Copper peptide'],
    shortDescription:
      'GHK-Cu 50mg research vial. Copper-binding tripeptide used in skin and tissue-remodeling research. An 80mg vial is listed separately.',
    seoTitle: 'GHK-Cu 50mg Research Peptide | Shark Tides',
    deepDiveTitle: 'GHK-Cu 50mg catalog notes',
    researchRating: 4,
    popularityRank: 8,
    synergies: ['ghk-cu-80mg', 'snap-8', 'epithalon'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug ghk-cu. Image labeled 50mg.' },
      { title: 'What it is', body: 'GHK-Cu is the copper complex of the tripeptide glycyl-L-histidyl-L-lysine.' },
    ],
    benefits: ['50mg vial', '80mg vial is a separate SKU', 'Often compared with SNAP-8 in skin research', 'Local image'],
    fullDescription: `GHK-Cu is the copper complex of the naturally occurring tripeptide GHK. Laboratory literature discusses it in the context of skin matrix, gene-expression, and tissue-remodeling models. This page is the 50mg vial. Shark Tides also lists the supplier’s 80mg GHK-Cu vial as its own product.

The photograph is the supplier’s 50mg GHK-Cu image, stored on this domain. SNAP-8 is a different peptide and is not included in this vial.`,
  }),
  item({
    apollo: 'cjc1295-ipamorelin',
    slug: 'ipamorelin-cjc',
    name: 'CJC-1295 / Ipamorelin',
    tagline: 'GHRH analog plus ipamorelin research blend. Supplier vial image is the 5mg/5mg blend.',
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'CJC-1295', 'Ipamorelin', 'Sleep'],
    shortDescription:
      'CJC-1295 / Ipamorelin research blend. Supplier listing cjc1295-ipamorelin. Catalog image is the 5mg/5mg vial.',
    seoTitle: 'CJC-1295 Ipamorelin Blend Research Peptide | Shark Tides',
    deepDiveTitle: 'CJC-1295 / Ipamorelin catalog notes',
    researchRating: 4,
    popularityRank: 9,
    synergies: ['tesamorelin', 'igf-1-lr3', 'bpc-157'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug cjc1295-ipamorelin. Image file cjc1295 5-5mg.' },
      { title: 'What it is', body: 'CJC-1295 is a GHRH analog. Ipamorelin is a ghrelin-receptor agonist. This SKU is the blend.' },
    ],
    benefits: ['Blend vial, not two separate peptides', 'Image shows the 5mg/5mg presentation', 'Growth-hormone research category', 'Local image'],
    fullDescription: `This listing is the supplier’s CJC-1295 / Ipamorelin blend, not standalone ipamorelin and not standalone CJC-1295. The catalog photograph is the vial artwork labeled as a 5mg/5mg blend.

CJC-1295 is studied as a growth-hormone-releasing hormone analog. Ipamorelin is studied as a selective ghrelin receptor agonist. Laboratories buy the blend when a protocol calls for both in one vial. Tesamorelin 20mg is a different GHRH-related peptide and has its own page.

Order through the button on this page so the referral is attached to the blend SKU specifically.`,
  }),
  item({
    apollo: 'nad',
    slug: 'nad-plus',
    name: 'NAD+ 500mg',
    tagline: 'NAD+ 500mg research vial. Supplier listing: NAD.',
    category: 'Anti-Aging & Longevity',
    tags: ['NAD+', 'Longevity', 'Cellular'],
    shortDescription:
      'NAD+ 500mg research vial. Nicotinamide adenine dinucleotide, not a peptide. Supplier image labeled 500mg.',
    seoTitle: 'NAD+ 500mg Research Material | Shark Tides',
    deepDiveTitle: 'NAD+ 500mg catalog notes',
    researchRating: 4,
    popularityRank: 10,
    synergies: ['ss-31', 'epithalon', 'foxo4-dri'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug nad. Image nad 500mg.' },
      { title: 'What it is', body: 'NAD+ is a cellular redox cofactor. This vial is the research material, not an oral supplement brand.' },
    ],
    benefits: ['500mg vial', 'Paired in this catalog with SS-31 and Epithalon', 'Local image', 'Supplier product URL'],
    fullDescription: `NAD+ (nicotinamide adenine dinucleotide) is a cofactor in cellular redox reactions. It is not a peptide, and it is listed here because the supplier sells a 500mg research vial alongside the peptide catalog.

The Shark Tides image is the supplier’s NAD 500mg photograph. SS-31, a mitochondria-targeted peptide, is a separate SKU for laboratories studying related pathways. Confirm you are opening the NAD listing before checkout.`,
  }),
  item({
    apollo: 'glp-3r-15mg',
    slug: 'retatrutide-15mg',
    name: 'Retatrutide 15mg',
    tagline: 'Retatrutide 15mg single vial. Supplier listing: GLP-3 R 15mg.',
    category: 'Body Composition',
    tags: ['Retatrutide', 'GLP-1', 'Metabolic'],
    shortDescription: 'Retatrutide 15mg research vial. Supplier code GLP-3 R 15mg. Single vial with its own photo.',
    seoTitle: 'Retatrutide 15mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Retatrutide 15mg catalog notes',
    researchRating: 4,
    popularityRank: 11,
    synergies: ['retatrutide-10mg', 'retatrutide-30mg'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-3r-15mg.' },
      { title: 'Size', body: '15mg single, between the 10mg and 30mg vials.' },
    ],
    benefits: ['15mg single vial', 'Own checkout URL', 'Not the 15mg box of ten', 'Local image'],
    fullDescription: `Retatrutide 15mg is the single-vial SKU between 10mg and 30mg. The supplier calls it GLP-3 R 15mg. The box of ten 15mg vials is a different product page and uses the multi-vial photograph. Use this page when the order is one vial.`,
  }),
  item({
    apollo: 'glp-1s-5mg',
    slug: 'semaglutide-5mg',
    name: 'Semaglutide 5mg',
    tagline: 'Semaglutide 5mg single vial. Supplier listing: GLP-1 S 5mg.',
    category: 'Body Composition',
    tags: ['Semaglutide', 'GLP-1', 'Metabolic'],
    shortDescription: 'Semaglutide 5mg research vial. Supplier code GLP-1 S 5mg. Smallest single semaglutide size in this catalog.',
    seoTitle: 'Semaglutide 5mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Semaglutide 5mg catalog notes',
    researchRating: 5,
    popularityRank: 12,
    synergies: ['semaglutide-10mg', 'cagri-sema'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-1s-5mg.' },
      { title: 'Size', body: '5mg single vial.' },
    ],
    benefits: ['5mg single', '10mg and 15mg listed separately', 'Box of ten listed separately', 'Local image'],
    fullDescription: `This is the 5mg semaglutide vial, supplier code GLP-1 S 5mg. It is the smallest single semaglutide size currently published by the supplier. The 5mg box of ten uses a different photo and a different URL. Cagrilintide/semaglutide 5mg/5mg is also a different blend and should not be ordered from this page.`,
  }),
  item({
    apollo: 'glp-1s-15mg',
    slug: 'semaglutide-15mg',
    name: 'Semaglutide 15mg',
    tagline: 'Semaglutide 15mg single vial. Supplier listing: GLP-1 S 15mg.',
    category: 'Body Composition',
    tags: ['Semaglutide', 'GLP-1', 'Metabolic'],
    shortDescription: 'Semaglutide 15mg research vial. Supplier code GLP-1 S 15mg. Largest single semaglutide vial in this catalog.',
    seoTitle: 'Semaglutide 15mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Semaglutide 15mg catalog notes',
    researchRating: 5,
    popularityRank: 13,
    synergies: ['semaglutide-10mg', 'tirzepatide-15mg'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-1s-15mg.' },
      { title: 'Size', body: '15mg single vial.' },
    ],
    benefits: ['15mg single', 'Distinct from the 15mg box', 'GLP-1 S checkout name', 'Local image'],
    fullDescription: `Semaglutide 15mg is the largest single semaglutide vial in the current supplier catalog. Checkout reads GLP-1 S 15mg. The box of ten 15mg vials is listed on its own page with the multi-vial image. Tirzepatide 15mg is a different molecule at the same milligram number and has a separate listing.`,
  }),
  item({
    apollo: 'glp-2-t-20mg',
    slug: 'tirzepatide-20mg',
    name: 'Tirzepatide 20mg',
    tagline: 'Tirzepatide 20mg single vial. Supplier listing: GLP-2 T 20mg.',
    category: 'Body Composition',
    tags: ['Tirzepatide', 'GLP-1', 'GIP'],
    shortDescription: 'Tirzepatide 20mg research vial. Supplier code GLP-2 T 20mg. Single vial, plus separate 5-pack and 10-pack pages.',
    seoTitle: 'Tirzepatide 20mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Tirzepatide 20mg catalog notes',
    researchRating: 5,
    popularityRank: 14,
    synergies: ['tirzepatide-15mg', 'tirzepatide-30mg'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-2-t-20mg. Single-vial image.' },
      { title: 'Packs', body: 'A 5-pack and a box of ten are separate SKUs.' },
    ],
    benefits: ['20mg single vial', '5-pack listed separately', '10-pack listed separately', 'Local image'],
    fullDescription: `Tirzepatide 20mg is sold by the supplier as a single vial and also in multi-vial packs. This page is only the single. The 5-pack and the box of ten keep the multi-vial artwork so the quantity is visible before checkout. Supplier code for the compound line is GLP-2 T.`,
  }),
  item({
    apollo: 'glp-2-t-60mg',
    slug: 'tirzepatide-60mg',
    name: 'Tirzepatide 60mg',
    tagline: 'Tirzepatide 60mg single vial. Supplier listing: GLP-2 T 60mg.',
    category: 'Body Composition',
    tags: ['Tirzepatide', 'GLP-1', 'GIP'],
    shortDescription: 'Tirzepatide 60mg research vial. Supplier code GLP-2 T 60mg. Highest single tirzepatide fill in this catalog.',
    seoTitle: 'Tirzepatide 60mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Tirzepatide 60mg catalog notes',
    researchRating: 5,
    popularityRank: 15,
    synergies: ['tirzepatide-30mg', 'tirzepatide-60mg-10-pack'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-2-t-60mg.' },
      { title: 'Size', body: '60mg single vial.' },
    ],
    benefits: ['60mg single', 'Box of ten is a different page', 'GLP-2 T checkout name', 'Local image'],
    fullDescription: `This listing is one 60mg tirzepatide vial. The supplier’s box of ten 60mg vials is a separate Shark Tides page using the multi-vial image and the box checkout URL. Order from this page only when the quantity is a single 60mg vial.`,
  }),
  item({
    apollo: 'glp-3-r-40mg',
    slug: 'retatrutide-40mg',
    name: 'Retatrutide 40mg',
    tagline: 'Retatrutide 40mg single vial. Supplier listing: GLP-3 R 40mg.',
    category: 'Body Composition',
    tags: ['Retatrutide', 'GLP-1', 'Metabolic'],
    shortDescription: 'Retatrutide 40mg research vial. Supplier code GLP-3 R 40mg. A size the supplier lists only as a single in the current catalog.',
    seoTitle: 'Retatrutide 40mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Retatrutide 40mg catalog notes',
    researchRating: 4,
    popularityRank: 16,
    synergies: ['retatrutide-30mg', 'retatrutide-60mg'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-3-r-40mg.' },
      { title: 'Size', body: '40mg single. No 40mg box is in the current public catalog.' },
    ],
    benefits: ['40mg single vial', 'Sits between 30mg and 60mg', 'GLP-3 R checkout name', 'Local image'],
    fullDescription: `Retatrutide 40mg is a single-vial size in the supplier catalog. There is no public 40mg box of ten in the current product sitemap, so this page does not pretend one exists. Neighboring sizes are 30mg and 60mg, each with its own photo and URL. Checkout name: GLP-3 R 40mg.`,
  }),
  item({
    apollo: 'glp-3-r-60mg',
    slug: 'retatrutide-60mg',
    name: 'Retatrutide 60mg',
    tagline: 'Retatrutide 60mg single vial. Supplier listing: GLP-3 R 60mg.',
    category: 'Body Composition',
    tags: ['Retatrutide', 'GLP-1', 'Metabolic'],
    shortDescription: 'Retatrutide 60mg research vial. Supplier code GLP-3 R 60mg. Highest single retatrutide fill in this catalog.',
    seoTitle: 'Retatrutide 60mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Retatrutide 60mg catalog notes',
    researchRating: 4,
    popularityRank: 17,
    synergies: ['retatrutide-40mg', 'retatrutide-60mg-10-pack'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-3-r-60mg. Single-vial image.' },
      { title: 'Size', body: '60mg single. The box of ten is a separate listing.' },
    ],
    benefits: ['60mg single', 'Box of ten listed separately', 'GLP-3 R checkout name', 'Local image'],
    fullDescription: `Retatrutide 60mg single vial, supplier code GLP-3 R 60mg. The matching box of ten uses the multi-vial image and a different supplier URL. This page’s photograph is the single-vial artwork so the quantity is obvious on sharktides.com before the referral hop.`,
  }),
  item({
    apollo: 'glp-1cglp-1s-5mg',
    slug: 'cagri-sema',
    name: 'Cagrilintide / Semaglutide 5mg',
    tagline: 'Cagrilintide plus semaglutide research blend. Image labeled 5mg/5mg.',
    category: 'Body Composition',
    tags: ['Cagrilintide', 'Semaglutide', 'GLP-1', 'Amylin'],
    shortDescription:
      'Cagrilintide / semaglutide research blend. Supplier image is the 5mg/5mg vial. Not a substitute for semaglutide-only vials.',
    seoTitle: 'Cagrilintide Semaglutide 5mg Research Blend | Shark Tides',
    deepDiveTitle: 'Cagrilintide / semaglutide catalog notes',
    researchRating: 4,
    popularityRank: 18,
    synergies: ['semaglutide-5mg', 'semaglutide-10mg'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug glp-1cglp-1s-5mg. Image cagri/sema 5/5mg.' },
      { title: 'What it is', body: 'Cagrilintide is an amylin analog. This SKU pairs it with semaglutide.' },
    ],
    benefits: ['Blend, not semaglutide alone', '5mg/5mg artwork', 'Own checkout URL', 'Local image'],
    fullDescription: `This is the supplier’s cagrilintide plus semaglutide blend. The vial artwork is labeled 5mg/5mg. Cagrilintide is an amylin-receptor agonist studied in combination with GLP-1 receptor agonists. It is not the same SKU as any semaglutide-only vial on this site.

The supplier slug is glp-1cglp-1s-5mg. Order from this page when the blend is the intended material. Semaglutide 5mg alone is the neighboring listing.`,
  }),
  item({
    apollo: 'kpv-10mg',
    slug: 'kpv',
    name: 'KPV 10mg',
    tagline: 'KPV tripeptide, 10mg research vial.',
    category: 'Healing & Recovery',
    tags: ['KPV', 'Gut Health', 'Healing'],
    shortDescription:
      'KPV 10mg research vial. Lysine-proline-valine tripeptide from the C-terminus of alpha-MSH, used in inflammation research.',
    seoTitle: 'KPV 10mg Research Peptide | Shark Tides',
    deepDiveTitle: 'KPV 10mg catalog notes',
    researchRating: 3,
    popularityRank: 19,
    synergies: ['bpc-157', 'tb-500'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug kpv-10mg.' },
      { title: 'What it is', body: 'KPV is the Lys-Pro-Val tripeptide sequence.' },
    ],
    benefits: ['10mg vial', 'Different molecule from BPC-157', 'Gut and inflammation research category', 'Local image'],
    fullDescription: `KPV is the C-terminal tripeptide of alpha-melanocyte-stimulating hormone, sequence lysine-proline-valine. Laboratory papers discuss it in inflammatory signaling models, including gut models. It is not BPC-157 and it is not a fragment of thymosin beta-4.

The supplier SKU is KPV 10mg. This page hosts that image and points the order button at that SKU only.`,
  }),
  item({
    apollo: 'snap-8',
    slug: 'snap-8',
    name: 'SNAP-8 10mg',
    tagline: 'SNAP-8 acetyl octapeptide, 10mg research vial.',
    category: 'Anti-Aging & Skin',
    tags: ['SNAP-8', 'Skin'],
    shortDescription: 'SNAP-8 10mg research vial. Acetyl octapeptide studied in cosmetic peptide research. A 2-pack is listed separately.',
    seoTitle: 'SNAP-8 10mg Research Peptide | Shark Tides',
    deepDiveTitle: 'SNAP-8 10mg catalog notes',
    researchRating: 3,
    popularityRank: 20,
    synergies: ['snap-8-2pack', 'ghk-cu'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug snap-8. Single 10mg image.' },
      { title: 'What it is', body: 'SNAP-8 is an acetyl octapeptide discussed in expression-line research.' },
    ],
    benefits: ['10mg single', '2-pack is a separate SKU', 'Skin research category', 'Local image'],
    fullDescription: `SNAP-8 is an acetyl octapeptide related to the SNAP-25 conversation in cosmetic science. This page is one 10mg vial. The supplier also sells a 2-pack, which Shark Tides lists with the 2-pack photograph and a different checkout URL. GHK-Cu is a separate copper tripeptide.`,
  }),
  item({
    apollo: 'epithalon-50mg',
    slug: 'epithalon',
    name: 'Epithalon 50mg',
    tagline: 'Epithalon tetrapeptide, 50mg research vial.',
    category: 'Anti-Aging & Longevity',
    tags: ['Epithalon', 'Longevity', 'GH Peptide'],
    shortDescription: 'Epithalon 50mg research vial. Tetrapeptide Ala-Glu-Asp-Gly. A 40mg vial is listed separately.',
    seoTitle: 'Epithalon 50mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Epithalon 50mg catalog notes',
    researchRating: 4,
    popularityRank: 21,
    synergies: ['epithalon-40mg', 'nad-plus', 'ghk-cu'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug epithalon-50mg.' },
      { title: 'What it is', body: 'Epithalon is the tetrapeptide AEDG, studied in telomerase research.' },
    ],
    benefits: ['50mg vial', '40mg vial listed separately', 'Longevity category', 'Local image'],
    fullDescription: `Epithalon (also spelled epitalon in older papers) is the synthetic tetrapeptide alanine-glutamate-aspartate-glycine. Published work discusses telomerase and pineal models. This listing is the supplier’s 50mg vial. The 40mg vial is a different fill and a different page. NAD+ 500mg is not part of this vial.`,
  }),
  item({
    apollo: 'epithalon-40mg',
    slug: 'epithalon-40mg',
    name: 'Epithalon 40mg',
    tagline: 'Epithalon tetrapeptide, 40mg research vial.',
    category: 'Anti-Aging & Longevity',
    tags: ['Epithalon', 'Longevity'],
    shortDescription: 'Epithalon 40mg research vial. Same tetrapeptide as the 50mg listing, different fill weight.',
    seoTitle: 'Epithalon 40mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Epithalon 40mg catalog notes',
    researchRating: 4,
    popularityRank: 22,
    synergies: ['epithalon', 'nad-plus'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug epithalon-40mg.' },
      { title: 'Size', body: '40mg, not the 50mg vial.' },
    ],
    benefits: ['40mg fill', 'Separate from the 50mg SKU', 'Own product photo', 'Own checkout URL'],
    fullDescription: `Epithalon 40mg is the smaller of the two epithalon vials in the current supplier catalog. It is the same tetrapeptide as the 50mg listing and a different amount of material. The photograph and the order link on this page are the 40mg SKU only.`,
  }),
  item({
    apollo: 'ghk-cu-80mg',
    slug: 'ghk-cu-80mg',
    name: 'GHK-Cu 80mg',
    tagline: 'GHK-Cu 80mg research vial. Higher fill than the 50mg listing.',
    category: 'Anti-Aging & Skin',
    tags: ['GHK-Cu', 'Skin', 'Copper peptide'],
    shortDescription: 'GHK-Cu 80mg research vial. Same copper tripeptide as the 50mg listing, different fill.',
    seoTitle: 'GHK-Cu 80mg Research Peptide | Shark Tides',
    deepDiveTitle: 'GHK-Cu 80mg catalog notes',
    researchRating: 4,
    popularityRank: 23,
    synergies: ['ghk-cu', 'snap-8'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug ghk-cu-80mg.' },
      { title: 'Size', body: '80mg vial.' },
    ],
    benefits: ['80mg fill', '50mg vial remains available', 'Skin research category', 'Local image'],
    fullDescription: `GHK-Cu 80mg is the larger copper-tripeptide vial. The 50mg vial stays listed because it is a different supplier SKU with a different photo. Order from this page for the 80mg fill. KLOW 75mg is a separate blend and is not this vial.`,
  }),
  item({
    apollo: 'ss31-10mg',
    slug: 'ss-31',
    name: 'SS-31 10mg',
    tagline: 'SS-31 (elamipretide) 10mg research vial.',
    category: 'Anti-Aging & Longevity',
    tags: ['SS-31', 'Mitochondria', 'Longevity'],
    shortDescription: 'SS-31 10mg research vial. Mitochondria-targeted tetrapeptide also known as elamipretide.',
    seoTitle: 'SS-31 10mg Research Peptide | Shark Tides',
    deepDiveTitle: 'SS-31 10mg catalog notes',
    researchRating: 4,
    popularityRank: 24,
    synergies: ['nad-plus', 'foxo4-dri'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug ss31-10mg.' },
      { title: 'What it is', body: 'SS-31 is a mitochondria-targeted aromatic-cationic tetrapeptide.' },
    ],
    benefits: ['10mg vial', 'Distinct from NAD+', 'Longevity category', 'Local image'],
    fullDescription: `SS-31, also called elamipretide, is a tetrapeptide designed to concentrate at the inner mitochondrial membrane. Published work covers mitochondrial function models. The supplier SKU is SS-31 10mg. NAD+ is a cofactor vial, not a substitute. This page uses the supplier’s SS-31 image and that product URL.`,
  }),
  item({
    apollo: 'tesamorelin-20mg',
    slug: 'tesamorelin',
    name: 'Tesamorelin 20mg',
    tagline: 'Tesamorelin 20mg research vial. GHRH analog.',
    category: 'Growth Hormone',
    tags: ['GH Peptide', 'Tesamorelin'],
    shortDescription:
      'Tesamorelin 20mg research vial. Growth-hormone-releasing hormone analog. This vial is research material, not the branded prescription product.',
    seoTitle: 'Tesamorelin 20mg Research Peptide | Shark Tides',
    deepDiveTitle: 'Tesamorelin 20mg catalog notes',
    researchRating: 4,
    popularityRank: 25,
    synergies: ['ipamorelin-cjc', 'igf-1-lr3'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug tesamorelin-20mg.' },
      { title: 'What it is', body: 'Tesamorelin is a synthetic GHRH analog. A prescription form exists for a specific medical indication. This listing is the research vial.' },
    ],
    benefits: ['20mg research vial', 'Not the CJC/Ipamorelin blend', 'Growth hormone category', 'Local image'],
    fullDescription: `Tesamorelin is a synthetic analog of growth-hormone-releasing hormone. A pharmaceutical preparation is approved for a defined medical use. The vial sold through this catalog is the supplier’s 20mg research material, not that finished drug product and not a prescription.

The CJC-1295/Ipamorelin blend is a different pair of peptides. IGF-1 LR3 is a different growth-factor analog. Each has its own photo and checkout link.`,
  }),
  item({
    apollo: 'igf-1lr3',
    slug: 'igf-1-lr3',
    name: 'IGF-1 LR3 1mg',
    tagline: 'IGF-1 LR3, 1mg research vial.',
    category: 'Growth Hormone',
    tags: ['IGF-1', 'GH Peptide'],
    shortDescription: 'IGF-1 LR3 1mg research vial. Long arginine-3 analog of IGF-1. Supplier image labeled 1mg.',
    seoTitle: 'IGF-1 LR3 1mg Research Peptide | Shark Tides',
    deepDiveTitle: 'IGF-1 LR3 catalog notes',
    researchRating: 4,
    popularityRank: 26,
    synergies: ['ipamorelin-cjc', 'tesamorelin'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug igf-1lr3. Image labeled 1mg.' },
      { title: 'What it is', body: 'LR3 is an extended analog of IGF-1 with a substituted arginine.' },
    ],
    benefits: ['1mg vial', 'Not a GH secretagogue', 'Own checkout URL', 'Local image'],
    fullDescription: `IGF-1 LR3 is a long analog of insulin-like growth factor 1, with an N-terminal extension and an arginine substitution that changes binding behavior relative to native IGF-1. The supplier image is the 1mg vial. It is not ipamorelin, CJC-1295, or tesamorelin, which act upstream of growth hormone rather than as the growth factor itself.`,
  }),
  item({
    apollo: '5-amino-5g',
    slug: '5-amino-1mq',
    name: '5-Amino-1MQ',
    tagline: '5-Amino-1MQ research material. Supplier image labeled 5mg. Confirm the vial at checkout.',
    category: 'Body Composition',
    tags: ['5-Amino-1MQ', 'NNMT', 'Metabolic'],
    shortDescription:
      '5-Amino-1MQ research listing. Small-molecule NNMT inhibitor, not a peptide. Supplier image is labeled 5mg. Confirm the vial text on the supplier page before paying.',
    seoTitle: '5-Amino-1MQ Research Compound | Shark Tides',
    deepDiveTitle: '5-Amino-1MQ catalog notes',
    researchRating: 3,
    popularityRank: 27,
    synergies: ['nad-plus', 'semaglutide-10mg'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug 5-amino-5g. Product image file is labeled 5mg.' },
      { title: 'What it is', body: '5-Amino-1MQ is a small molecule studied as an NNMT inhibitor. It is not a peptide.' },
    ],
    benefits: ['Matched to the supplier’s 5-Amino listing', 'Image hosted locally', 'Not grouped with GLP-1 vials', 'Checkout is that exact URL'],
    fullDescription: `5-Amino-1MQ is a small molecule studied as an inhibitor of nicotinamide N-methyltransferase. It is not a peptide and it is not a GLP-1 agonist. Shark Tides lists it because it is in the supplier’s current public catalog.

The supplier’s image file is labeled 5mg. The supplier’s URL slug reads 5-amino-5g. Those two labels do not say the same thing, so the order button opens the supplier page where the vial text can be confirmed before payment. This page does not invent a price or a fill weight beyond what that image shows.`,
  }),
  item({
    apollo: 'fox04-dri-10mg',
    slug: 'foxo4-dri',
    name: 'FOXO4-DRI 10mg',
    tagline: 'FOXO4-DRI 10mg research vial.',
    category: 'Anti-Aging & Longevity',
    tags: ['FOXO4', 'Senescence', 'Longevity'],
    shortDescription: 'FOXO4-DRI 10mg research vial. D-retro-inverso peptide studied in senescent-cell models.',
    seoTitle: 'FOXO4-DRI 10mg Research Peptide | Shark Tides',
    deepDiveTitle: 'FOXO4-DRI catalog notes',
    researchRating: 3,
    popularityRank: 28,
    synergies: ['epithalon', 'ss-31'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug fox04-dri-10mg.' },
      { title: 'What it is', body: 'A D-retro-inverso peptide directed at the FOXO4/p53 interaction in cell models.' },
    ],
    benefits: ['10mg vial', 'Longevity category', 'Not epithalon', 'Local image'],
    fullDescription: `FOXO4-DRI is a D-retro-inverso peptide used in laboratory papers on the FOXO4 interaction with p53 in senescent cells. It is an experimental research material. The supplier SKU is 10mg. Epithalon and SS-31 are different sequences with different pages.`,
  }),
  item({
    apollo: 'klow-75mg',
    slug: 'klow',
    name: 'KLOW 75mg',
    tagline: 'KLOW 75mg research blend, as supplied.',
    category: 'Anti-Aging & Skin',
    tags: ['KLOW', 'Blend', 'Skin'],
    shortDescription:
      'KLOW 75mg research blend. Sold by the supplier as a 75mg blend vial. Composition is whatever is printed on that supplier listing.',
    seoTitle: 'KLOW 75mg Research Blend | Shark Tides',
    deepDiveTitle: 'KLOW 75mg catalog notes',
    researchRating: 3,
    popularityRank: 29,
    synergies: ['ghk-cu', 'kpv'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug klow-75mg. Image labeled 75mg.' },
      { title: 'Blend', body: 'This is a named blend, not the plain GHK-Cu 50mg or 80mg vial.' },
    ],
    benefits: ['75mg blend vial', 'Separate from single-peptide GHK-Cu', 'Own photo', 'Own checkout URL'],
    fullDescription: `KLOW 75mg is a named research blend in the supplier catalog. Shark Tides does not restate a recipe that is not printed on this page’s source image. The vial is 75mg total as labeled, and it is not the same product as GHK-Cu 50mg, GHK-Cu 80mg, or KPV 10mg. Those compounds have their own listings. Order the blend only from this page.`,
  }),
  item({
    apollo: 'snap-8-2-pack',
    slug: 'snap-8-2pack',
    name: 'SNAP-8 2-Pack',
    tagline: 'Two SNAP-8 10mg research vials.',
    category: 'Anti-Aging & Skin',
    tags: ['SNAP-8', 'Skin', 'Multi-pack'],
    shortDescription: 'SNAP-8 two-vial pack. Supplier image is the 10mg 2-pack. Not the single-vial listing.',
    seoTitle: 'SNAP-8 2-Pack Research Peptide | Shark Tides',
    deepDiveTitle: 'SNAP-8 2-pack catalog notes',
    researchRating: 3,
    popularityRank: 30,
    synergies: ['snap-8', 'ghk-cu'],
    highlights: [
      { title: 'Catalog match', body: 'Supplier slug snap-8-2-pack.' },
      { title: 'Quantity', body: 'Two vials. The single is a different page.' },
    ],
    benefits: ['2-pack quantity', 'Single vial still listed', '2-pack photograph', 'Own checkout URL'],
    fullDescription: `This is the supplier’s SNAP-8 2-pack, pictured as two 10mg vials. The single SNAP-8 10mg vial remains available on its own page. The photos differ so the quantity is visible here before checkout.`,
  }),
  item({
    apollo: 'glp-1-s-5mg-box-of-10',
    slug: 'semaglutide-5mg-10-pack',
    name: 'Semaglutide 5mg — Box of 10',
    tagline: 'Ten semaglutide 5mg vials. Supplier listing: GLP-1 S 5mg box of 10.',
    category: 'Body Composition',
    tags: ['Semaglutide', 'GLP-1', 'Multi-pack'],
    shortDescription: 'Box of ten semaglutide 5mg research vials. Multi-vial photo. Not the single 5mg vial.',
    seoTitle: 'Semaglutide 5mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Semaglutide 5mg 10-pack',
    researchRating: 5,
    popularityRank: 31,
    synergies: ['semaglutide-5mg', 'semaglutide-10mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 5mg.' },
      { title: 'Photo', body: 'Multi-vial semaglutide 5mg artwork.' },
    ],
    benefits: ['Box of 10', '5mg fill per vial', 'Not the single-vial SKU', 'Local multi-pack image'],
    fullDescription: `Ten semaglutide 5mg vials, supplier code GLP-1 S 5mg box of 10. The single 5mg vial has a different photo and a different order link. Use this page for the box.`,
  }),
  item({
    apollo: 'glp-1-s-10mg-box-of-10',
    slug: 'semaglutide-10mg-10-pack',
    name: 'Semaglutide 10mg — Box of 10',
    tagline: 'Ten semaglutide 10mg vials.',
    category: 'Body Composition',
    tags: ['Semaglutide', 'GLP-1', 'Multi-pack'],
    shortDescription: 'Box of ten semaglutide 10mg research vials. Multi-vial photo matched to the supplier box listing.',
    seoTitle: 'Semaglutide 10mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Semaglutide 10mg 10-pack',
    researchRating: 5,
    popularityRank: 32,
    synergies: ['semaglutide-10mg', 'semaglutide-15mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 10mg.' },
      { title: 'Photo', body: 'Multi-vial semaglutide 10mg artwork.' },
    ],
    benefits: ['Box of 10', '10mg fill per vial', 'Separate from the single', 'Local image'],
    fullDescription: `Box of ten semaglutide 10mg vials. Supplier listing GLP-1 S 10mg box of 10. The single 10mg vial is a different Shark Tides page. The image on this page is the multi-vial photograph.`,
  }),
  item({
    apollo: 'glp-1-s-15mg-box-of-10',
    slug: 'semaglutide-15mg-10-pack',
    name: 'Semaglutide 15mg — Box of 10',
    tagline: 'Ten semaglutide 15mg vials.',
    category: 'Body Composition',
    tags: ['Semaglutide', 'GLP-1', 'Multi-pack'],
    shortDescription: 'Box of ten semaglutide 15mg research vials.',
    seoTitle: 'Semaglutide 15mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Semaglutide 15mg 10-pack',
    researchRating: 5,
    popularityRank: 33,
    synergies: ['semaglutide-15mg', 'semaglutide-10mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 15mg.' },
      { title: 'Photo', body: 'Multi-vial semaglutide 15mg artwork.' },
    ],
    benefits: ['Box of 10', '15mg fill per vial', 'Separate from the single', 'Local image'],
    fullDescription: `Box of ten semaglutide 15mg vials, supplier code GLP-1 S 15mg box of 10. Do not use the single-vial page if the order is the box. The multi-vial image is hosted on sharktides.com.`,
  }),
  item({
    apollo: 'glp-2t-15mg-4-pack',
    slug: 'tirzepatide-15mg-4-pack',
    name: 'Tirzepatide 15mg — 4 Pack',
    tagline: 'Four tirzepatide 15mg vials.',
    category: 'Body Composition',
    tags: ['Tirzepatide', 'Multi-pack'],
    shortDescription: 'Four-pack of tirzepatide 15mg research vials. Distinct from the single and from the box of ten.',
    seoTitle: 'Tirzepatide 15mg 4-Pack | Shark Tides',
    deepDiveTitle: 'Tirzepatide 15mg 4-pack',
    researchRating: 5,
    popularityRank: 34,
    synergies: ['tirzepatide-15mg', 'tirzepatide-15mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Four vials of 15mg.' },
      { title: 'Photo', body: 'Multi-vial tirzepatide 15mg artwork.' },
    ],
    benefits: ['4 vials', '15mg each', 'Not the box of ten', 'Own checkout URL'],
    fullDescription: `Four tirzepatide 15mg vials. The supplier lists this quantity separately from the single vial and from the box of ten. This page uses the multi-vial 15mg image and the 4-pack checkout URL. Supplier code line: GLP-2 T.`,
  }),
  item({
    apollo: 'glp-2t-15mg-10-pack',
    slug: 'tirzepatide-15mg-10-pack',
    name: 'Tirzepatide 15mg — Box of 10',
    tagline: 'Ten tirzepatide 15mg vials.',
    category: 'Body Composition',
    tags: ['Tirzepatide', 'Multi-pack'],
    shortDescription: 'Box of ten tirzepatide 15mg research vials.',
    seoTitle: 'Tirzepatide 15mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Tirzepatide 15mg 10-pack',
    researchRating: 5,
    popularityRank: 35,
    synergies: ['tirzepatide-15mg', 'tirzepatide-15mg-4-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 15mg.' },
      { title: 'Photo', body: 'Multi-vial tirzepatide 15mg artwork.' },
    ],
    benefits: ['Box of 10', '15mg each', '4-pack is a different page', 'Local image'],
    fullDescription: `Ten tirzepatide 15mg vials. Choose the 4-pack page if the quantity is four, or the single-vial page if the quantity is one. This URL is the box of ten only.`,
  }),
  item({
    apollo: 'glp-2t-20mg-5-pack',
    slug: 'tirzepatide-20mg-5-pack',
    name: 'Tirzepatide 20mg — 5 Pack',
    tagline: 'Five tirzepatide 20mg vials.',
    category: 'Body Composition',
    tags: ['Tirzepatide', 'Multi-pack'],
    shortDescription: 'Five-pack of tirzepatide 20mg research vials.',
    seoTitle: 'Tirzepatide 20mg 5-Pack | Shark Tides',
    deepDiveTitle: 'Tirzepatide 20mg 5-pack',
    researchRating: 5,
    popularityRank: 36,
    synergies: ['tirzepatide-20mg', 'tirzepatide-20mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Five vials of 20mg.' },
      { title: 'Photo', body: 'Multi-vial tirzepatide 20mg artwork.' },
    ],
    benefits: ['5 vials', '20mg each', 'Box of ten listed separately', 'Local image'],
    fullDescription: `Five tirzepatide 20mg vials. The box of ten and the single 20mg vial are separate products with separate order links. This page is the 5-pack.`,
  }),
  item({
    apollo: 'glp-2-t-20mg-box-of-10',
    slug: 'tirzepatide-20mg-10-pack',
    name: 'Tirzepatide 20mg — Box of 10',
    tagline: 'Ten tirzepatide 20mg vials.',
    category: 'Body Composition',
    tags: ['Tirzepatide', 'Multi-pack'],
    shortDescription: 'Box of ten tirzepatide 20mg research vials.',
    seoTitle: 'Tirzepatide 20mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Tirzepatide 20mg 10-pack',
    researchRating: 5,
    popularityRank: 37,
    synergies: ['tirzepatide-20mg', 'tirzepatide-20mg-5-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 20mg.' },
      { title: 'Photo', body: 'Multi-vial tirzepatide 20mg artwork.' },
    ],
    benefits: ['Box of 10', '20mg each', '5-pack is separate', 'Local image'],
    fullDescription: `Ten tirzepatide 20mg vials, supplier box listing. The 5-pack uses a different supplier URL even though the multi-vial artwork is similar. This page’s order button opens the box of ten.`,
  }),
  item({
    apollo: 'glp-2-t-30mg-box-of-10',
    slug: 'tirzepatide-30mg-10-pack',
    name: 'Tirzepatide 30mg — Box of 10',
    tagline: 'Ten tirzepatide 30mg vials.',
    category: 'Body Composition',
    tags: ['Tirzepatide', 'Multi-pack'],
    shortDescription: 'Box of ten tirzepatide 30mg research vials.',
    seoTitle: 'Tirzepatide 30mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Tirzepatide 30mg 10-pack',
    researchRating: 5,
    popularityRank: 38,
    synergies: ['tirzepatide-30mg', 'tirzepatide-60mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 30mg.' },
      { title: 'Photo', body: 'Multi-vial tirzepatide 30mg artwork.' },
    ],
    benefits: ['Box of 10', '30mg each', 'Single 30mg listed separately', 'Local image'],
    fullDescription: `Box of ten tirzepatide 30mg vials. The single 30mg vial uses the single-vial photograph and a different checkout link. Use this page for the box.`,
  }),
  item({
    apollo: 'glp-2-t-60mg-box-of-10y',
    slug: 'tirzepatide-60mg-10-pack',
    name: 'Tirzepatide 60mg — Box of 10',
    tagline: 'Ten tirzepatide 60mg vials.',
    category: 'Body Composition',
    tags: ['Tirzepatide', 'Multi-pack'],
    shortDescription: 'Box of ten tirzepatide 60mg research vials. Supplier slug ends in the store’s own spelling.',
    seoTitle: 'Tirzepatide 60mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Tirzepatide 60mg 10-pack',
    researchRating: 5,
    popularityRank: 39,
    synergies: ['tirzepatide-60mg', 'tirzepatide-30mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 60mg.' },
      { title: 'Checkout', body: 'Opens the supplier’s exact box URL, including their slug spelling.' },
    ],
    benefits: ['Box of 10', '60mg each', 'Matched to the live supplier slug', 'Local image'],
    fullDescription: `Ten tirzepatide 60mg vials. The supplier’s public URL for this box uses their existing slug, and the order button uses that exact address plus the referral id. The single 60mg vial is a different page.`,
  }),
  item({
    apollo: 'glp-3-r-10mg-box-of-10',
    slug: 'retatrutide-10mg-10-pack',
    name: 'Retatrutide 10mg — Box of 10',
    tagline: 'Ten retatrutide 10mg vials.',
    category: 'Body Composition',
    tags: ['Retatrutide', 'Multi-pack'],
    shortDescription: 'Box of ten retatrutide 10mg research vials. Supplier code GLP-3 R 10mg box of 10.',
    seoTitle: 'Retatrutide 10mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Retatrutide 10mg 10-pack',
    researchRating: 4,
    popularityRank: 40,
    synergies: ['retatrutide-10mg', 'retatrutide-15mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 10mg.' },
      { title: 'Photo', body: 'Multi-vial retatrutide 10mg artwork.' },
    ],
    benefits: ['Box of 10', '10mg each', 'Single listed separately', 'Local image'],
    fullDescription: `Box of ten retatrutide 10mg vials, supplier code GLP-3 R. The single 10mg vial is the separate bestseller page. This page is only the box, and it uses the multi-vial image.`,
  }),
  item({
    apollo: 'glp-3-r-15mg-box-of-10',
    slug: 'retatrutide-15mg-10-pack',
    name: 'Retatrutide 15mg — Box of 10',
    tagline: 'Ten retatrutide 15mg vials.',
    category: 'Body Composition',
    tags: ['Retatrutide', 'Multi-pack'],
    shortDescription: 'Box of ten retatrutide 15mg research vials.',
    seoTitle: 'Retatrutide 15mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Retatrutide 15mg 10-pack',
    researchRating: 4,
    popularityRank: 41,
    synergies: ['retatrutide-15mg', 'retatrutide-10mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 15mg.' },
      { title: 'Photo', body: 'Multi-vial retatrutide 15mg artwork.' },
    ],
    benefits: ['Box of 10', '15mg each', 'Single listed separately', 'Local image'],
    fullDescription: `Ten retatrutide 15mg vials. Supplier listing GLP-3 R 15mg box of 10. The single 15mg vial remains on its own page with the single-vial photo.`,
  }),
  item({
    apollo: 'glp-3-r-30mg-box-of-10',
    slug: 'retatrutide-30mg-10-pack',
    name: 'Retatrutide 30mg — Box of 10',
    tagline: 'Ten retatrutide 30mg vials.',
    category: 'Body Composition',
    tags: ['Retatrutide', 'Multi-pack'],
    shortDescription: 'Box of ten retatrutide 30mg research vials.',
    seoTitle: 'Retatrutide 30mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Retatrutide 30mg 10-pack',
    researchRating: 4,
    popularityRank: 42,
    synergies: ['retatrutide-30mg', 'retatrutide-60mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 30mg.' },
      { title: 'Photo', body: 'Multi-vial retatrutide 30mg artwork.' },
    ],
    benefits: ['Box of 10', '30mg each', 'Single listed separately', 'Local image'],
    fullDescription: `Box of ten retatrutide 30mg vials, supplier code GLP-3 R 30mg box of 10. Order the single from the 30mg single page if you need one vial. This image is the multi-pack artwork.`,
  }),
  item({
    apollo: 'glp-3-r-60mg-box-of-10',
    slug: 'retatrutide-60mg-10-pack',
    name: 'Retatrutide 60mg — Box of 10',
    tagline: 'Ten retatrutide 60mg vials.',
    category: 'Body Composition',
    tags: ['Retatrutide', 'Multi-pack'],
    shortDescription: 'Box of ten retatrutide 60mg research vials.',
    seoTitle: 'Retatrutide 60mg Box of 10 | Shark Tides',
    deepDiveTitle: 'Retatrutide 60mg 10-pack',
    researchRating: 4,
    popularityRank: 43,
    synergies: ['retatrutide-60mg', 'retatrutide-30mg-10-pack'],
    highlights: [
      { title: 'Quantity', body: 'Ten vials of 60mg.' },
      { title: 'Photo', body: 'Multi-vial retatrutide 60mg artwork.' },
    ],
    benefits: ['Box of 10', '60mg each', 'Single listed separately', 'Local image'],
    fullDescription: `Box of ten retatrutide 60mg vials. This is the largest retatrutide multi-pack in the current public supplier catalog. The single 60mg vial is a different page. The order button opens the box URL with the Shark Tides referral id.`,
  }),
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
