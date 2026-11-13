"""Build lib/products.ts and public/catalog images from American Peptides."""
import json
import re
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from io import BytesIO
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATALOG = json.loads((ROOT / "scripts" / "ap-catalog.json").read_text(encoding="utf-8"))
IMG_DIR = ROOT / "public" / "catalog"
UA = {"User-Agent": "Mozilla/5.0 (compatible; SharkTidesCatalog/1.0)"}

ALIAS = {
    "copper-binding-peptide-ghk-cu": "ghk-cu",
    "nad": "nad-plus",
    "kpv-10-mg-1": "kpv",
    "cjc-1295-no-dac-ipamorelin": "ipamorelin-cjc",
    "klow-blend": "klow",
    "ap-tesa": "tesamorelin",
    "epi": "epithalon",
    "ap-sem-1": "semaglutide-10mg",
    "ap-trz-2": "tirzepatide-15mg",
    "ap-rta-3": "retatrutide-10mg",
}

RANK = [
    "retatrutide-10mg",
    "tirzepatide-15mg",
    "semaglutide-10mg",
    "bpc-157",
    "tb-500",
    "ghk-cu",
    "ipamorelin-cjc",
    "nad-plus",
    "ap-mx4",
    "ap-amr1",
    "klow",
    "epithalon",
    "tesamorelin",
    "igf-1-lr3",
    "snap-8",
    "ss-31",
    "kpv",
    "sermorelin",
    "ipamorelin",
    "cjc-1295-no-dac",
    "bpc-157-tb-500",
    "glow-mix",
    "aod-9604",
    "5-amino-1mq",
    "pt-141",
    "mots-c",
    "thymosin-alpha-1",
]

HEALING = {
    "bpc-157",
    "tb-500",
    "bpc-157-tb-500",
    "kpv-10-mg-1",
    "ara-290",
    "thymosin-alpha-1",
    "glow-mix",
    "klow-blend",
}
GH = {
    "ipamorelin",
    "cjc-1295-no-dac",
    "cjc-1295-no-dac-ipamorelin",
    "cjc-1295-no-dac-ghrp-6",
    "sermorelin",
    "ap-tesa",
    "ap-tesa-ipamorelin",
    "igf-1-lr3",
    "kisspeptin-10",
}
BODY = {
    "ap-sem-1",
    "ap-trz-2",
    "ap-rta-3",
    "ap-mx4",
    "ap-amr1",
    "aod-9604",
    "5-amino-1mq",
}
SKIN = {
    "copper-binding-peptide-ghk-cu",
    "snap-8",
    "melanotan-1",
    "melanotan-2",
}
COGNITIVE = {
    "semax",
    "selank",
    "selank-semax",
    "dihexa",
    "adamax",
    "p-21",
    "pe-22-28",
    "dsip",
    "melts-brain-fuel-dissolving-strips",
    "melts-pro-selank-semax-dissolving-strips",
}
BIO = {"pinealon", "prostamax", "testagen", "vesugen", "vilon", "thymalin"}
SUPPLIES = {"bacteriostatic-water-30ml-bottle", "reconstitution-solution-30ml"}


def display_name(raw: str) -> str:
    trademark = "™" if "™" in raw else ""
    text = raw.replace("™", "").strip()
    words = []
    for word in text.split():
        letters = re.sub(r"[^A-Za-z]", "", word)
        if letters.isupper() and len(letters) > 3 and not any(ch.isdigit() for ch in word):
            words.append(word.capitalize())
        else:
            words.append(word)
    return " ".join(words) + trademark


def category_for(slug: str) -> str:
    if slug.startswith("bundle-"):
        return "Bundles"
    if "tablet" in slug:
        return "Tablets"
    if "spray" in slug:
        return "Sprays"
    if slug in SUPPLIES:
        return "Supplies"
    if slug in BIO:
        return "Bioregulators"
    if slug in COGNITIVE:
        return "Cognitive Enhancement"
    if slug in HEALING:
        return "Healing & Recovery"
    if slug in GH:
        return "Growth Hormone"
    if slug in BODY:
        return "Body Composition"
    if slug in SKIN:
        return "Anti-Aging & Skin"
    return "Anti-Aging & Longevity"


def tags_for(slug: str, cat: str) -> list[str]:
    tags = ["Research", cat]
    if slug.startswith("bpc-157") or "kpv" in slug or "larazotide" in slug:
        tags.append("Gut Health")
    if slug in {"ghk-cu", "copper-binding-peptide-ghk-cu", "tb-500", "ghk-cu-ir-tablets"} or "ghk-cu" in slug:
        tags.append("Hair Growth")
    if cat == "Growth Hormone":
        tags.append("GH Peptide")
    if slug in {"dsip", "epithalon", "epi", "ipamorelin-cjc", "cjc-1295-no-dac-ipamorelin", "sleep-research-blend-liquid-spray"}:
        tags.append("Sleep")
    if slug in BODY or slug in {"ap-sem-1", "ap-trz-2", "ap-rta-3", "ap-mx4", "ap-amr1"}:
        tags.append("GLP-1")
    # unique, stable order
    seen = []
    for tag in tags:
        if tag not in seen:
            seen.append(tag)
    return seen[:6]


def clean(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def download(row: dict) -> tuple[str, str]:
    slug = ALIAS.get(row["supplierSlug"], row["supplierSlug"])
    url = row["image"]
    if not url:
        raise RuntimeError("missing image")
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=45) as res:
        data = res.read()
    dest = IMG_DIR / f"{slug}.webp"
    try:
        from PIL import Image

        image = Image.open(BytesIO(data))
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA")
        image.save(dest, "WEBP", quality=82, method=4)
    except Exception:
        dest = IMG_DIR / f"{slug}.png"
        dest.write_bytes(data)
    return slug, f"/catalog/{dest.name}"


def ts(value) -> str:
    return json.dumps(value, ensure_ascii=False)


def main() -> None:
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    rows = CATALOG["products"]
    images: dict[str, str] = {}
    with ThreadPoolExecutor(max_workers=8) as pool:
        futs = {pool.submit(download, row): row["supplierSlug"] for row in rows}
        for fut in as_completed(futs):
            slug, path = fut.result()
            images[slug] = path
            print("img", slug)

    built = []
    for row in rows:
        supplier = row["supplierSlug"]
        slug = ALIAS.get(supplier, supplier)
        offers = row["offers"] or [{"name": "Standard", "price": 0, "sku": ""}]
        prices = [float(offer["price"]) for offer in offers]
        low = min(prices) if prices else 0
        high = max(prices) if prices else 0
        name = display_name(row["name"])
        desc = clean(row["description"])
        size_bits = [
            f"{clean(offer['name'])} ${float(offer['price']):.0f}"
            for offer in offers
            if offer.get("name")
        ]
        size_line = " · ".join(size_bits)
        cat = category_for(supplier)
        tagline = size_line if size_line else desc
        if desc and size_line:
            tagline = f"{size_line}. {desc}"
        tagline = tagline[:220]
        form = clean(row["props"].get("Physical Form", ""))
        purity = clean(row["props"].get("Purity", ""))
        benefits = []
        if purity:
            benefits.append(purity)
        if form:
            benefits.append(form)
        if size_line:
            benefits.append(size_line)
        benefits.append("Research use only. Not for human consumption.")
        highlights = [
            {
                "title": "Supplier listing",
                "body": f"Checkout is the American Peptides page /products/{supplier}.",
            },
            {
                "title": "What it is",
                "body": desc[:280] or name,
            },
        ]
        full = desc or f"{name} research material listed by American Peptides."
        full += f"\n\nSizes on the supplier page: {size_line or 'see the live listing'}."
        full += " The photograph is stored on sharktides.com. The order button opens that exact American Peptides product with the Shark Tides referral attached."
        built.append(
            {
                "supplier": supplier,
                "slug": slug,
                "name": name,
                "tagline": tagline,
                "price": round(low, 2),
                "highPrice": round(high, 2),
                "category": cat,
                "tags": tags_for(supplier, cat),
                "image": images[slug],
                "shortDescription": (desc or tagline)[:240],
                "fullDescription": full,
                "benefits": benefits[:4],
                "seoTitle": f"{name} | Shark Tides",
                "deepDiveTitle": f"{name} in the Shark Tides catalog",
                "highlights": highlights,
                "researchRating": 4,
            }
        )

    built.sort(key=lambda row: (RANK.index(row["slug"]) if row["slug"] in RANK else 1000, row["name"]))
    by_cat: dict[str, list[str]] = {}
    for row in built:
        by_cat.setdefault(row["category"], []).append(row["slug"])
    for index, row in enumerate(built, start=1):
        row["popularityRank"] = index
        others = [slug for slug in by_cat[row["category"]] if slug != row["slug"]]
        row["synergies"] = others[:3]

    keep = {Path(row["image"]).name for row in built}
    for old in IMG_DIR.iterdir():
        if old.is_file() and old.name not in keep:
            old.unlink()

    lines = [
        "import { supplierProductUrl } from './site';",
        "",
        "export interface ProductHighlight {",
        "  title: string;",
        "  body: string;",
        "}",
        "",
        "export interface ProductAuthor {",
        "  name: string;",
        "  url?: string;",
        "  jobTitle?: string;",
        "}",
        "",
        "export interface Product {",
        "  slug: string;",
        "  name: string;",
        "  tagline: string;",
        "  price: number;",
        "  salePrice: number;",
        "  highPrice?: number;",
        "  category: string;",
        "  tags: string[];",
        "  image: string;",
        "  shopUrl: string;",
        "  shortDescription: string;",
        "  fullDescription: string;",
        "  benefits: string[];",
        "  protocol: string;",
        "  synergies: string[];",
        "  seoTitle: string;",
        "  deepDiveTitle: string;",
        "  highlights: ProductHighlight[];",
        "  researchRating: number;",
        "  popularityRank: number;",
        "  updatedAt?: string;",
        "  author?: ProductAuthor;",
        "}",
        "",
        "const HANDLING =",
        "  'Lyophilized or finished research material. Keep it sealed, dry, and stored as the supplier label directs until a qualified laboratory opens it. Shark Tides does not sell this compound for human consumption, injection, or clinical use. Checkout and the size you select are completed on American Peptides.';",
        "",
        "function item(",
        "  input: Omit<Product, 'salePrice' | 'shopUrl' | 'protocol' | 'updatedAt' | 'author'> & { supplier: string },",
        "): Product {",
        "  const { supplier, ...rest } = input;",
        "  return {",
        "    ...rest,",
        "    salePrice: 0,",
        "    shopUrl: supplierProductUrl(supplier),",
        "    protocol: HANDLING,",
        "    updatedAt: '2026-11-13',",
        "    author: { name: 'Shark Tides Research Desk', jobTitle: 'Catalog editor' },",
        "  };",
        "}",
        "",
        "export const products: Product[] = [",
    ]
    for row in built:
        supplier = row.pop("supplier")
        lines.append(f"  item({{ supplier: {ts(supplier)},")
        for key, value in row.items():
            lines.append(f"    {key}: {ts(value)},")
        lines.append("  }),")
    lines.append("];")
    lines.append("")
    lines.append("export function getProduct(slug: string) {")
    lines.append("  return products.find((product) => product.slug === slug);")
    lines.append("}")
    lines.append("")
    (ROOT / "lib" / "products.ts").write_text("\n".join(lines), encoding="utf-8")
    print("products", len(built), "images", len(keep))


if __name__ == "__main__":
    main()
