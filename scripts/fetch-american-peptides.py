"""Pull American Peptides product JSON-LD and images into data/ap-catalog.json."""
import json
import re
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "scripts" / "ap-catalog.json"
SITEMAP = "https://www.americanpeptides.us/sitemap.xml"
SKIP = {
    "american-peptides-hoodie",
    "american-peptides-tank",
    "american-peptides-tee",
    "ap-performance-hat-usa",
    "ap-performance-hat-white-black-rope",
    "ap-performance-hat-wild-desert",
}
UA = {"User-Agent": "Mozilla/5.0 (compatible; SharkTidesCatalog/1.0)"}


def get(url: str) -> str:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=45) as res:
        return res.read().decode("utf-8", "replace")


def product_slugs() -> list[str]:
    xml = get(SITEMAP)
    slugs = []
    for loc in re.findall(r"<loc>(https://www\.americanpeptides\.us/products/[^<]+)</loc>", xml):
        slug = loc.rstrip("/").split("/")[-1]
        if slug not in SKIP:
            slugs.append(slug)
    return slugs


def parse_product(slug: str) -> dict:
    html = get(f"https://www.americanpeptides.us/products/{slug}")
    blocks = re.findall(
        r'<script type="application/ld\+json">(.*?)</script>', html
    )
    product = None
    for block in blocks:
        try:
            data = json.loads(block)
        except json.JSONDecodeError:
            continue
        if isinstance(data, dict) and data.get("@type") == "Product":
            product = data
            break
    if not product:
        raise RuntimeError(f"no product schema for {slug}")
    offers = product.get("offers") or []
    if isinstance(offers, dict):
        offers = [offers]
    clean_offers = []
    for offer in offers:
        if not isinstance(offer, dict):
            continue
        price = offer.get("price")
        try:
            price = float(price)
        except (TypeError, ValueError):
            continue
        clean_offers.append(
            {
                "sku": offer.get("sku") or "",
                "name": offer.get("name") or "",
                "price": price,
            }
        )
    images = product.get("image") or []
    if isinstance(images, str):
        images = [images]
    props = {}
    for prop in product.get("additionalProperty") or []:
        if isinstance(prop, dict) and prop.get("name"):
            props[prop["name"]] = prop.get("value") or ""
    return {
        "supplierSlug": slug,
        "name": product.get("name") or slug,
        "description": product.get("description") or "",
        "image": images[0] if images else "",
        "images": images,
        "offers": clean_offers,
        "props": props,
        "schemaCategory": product.get("category") or "",
    }


def main() -> None:
    slugs = product_slugs()
    print("products", len(slugs))
    rows = []
    errors = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        futs = {pool.submit(parse_product, slug): slug for slug in slugs}
        for fut in as_completed(futs):
            slug = futs[fut]
            try:
                rows.append(fut.result())
                print("ok", slug)
            except Exception as exc:
                errors.append({"slug": slug, "error": str(exc)})
                print("ERR", slug, exc)
    rows.sort(key=lambda row: row["supplierSlug"])
    OUT.write_text(json.dumps({"products": rows, "errors": errors}, indent=2), encoding="utf-8")
    print("wrote", OUT, "count", len(rows), "errors", len(errors))


if __name__ == "__main__":
    main()
