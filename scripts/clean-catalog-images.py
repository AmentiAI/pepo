"""Re-download catalog photos and place each product on a white square.

The supplier shots sit on a black studio background. Cropping that background
cut vials and left black strips, which is what the thumbnails were showing.
"""
import json
import urllib.request
from collections import deque
from concurrent.futures import ThreadPoolExecutor, as_completed
from io import BytesIO
from pathlib import Path

from PIL import Image

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


def is_studio_black(r: int, g: int, b: int) -> bool:
    peak = max(r, g, b)
    if peak <= 18:
        return True
    # Neutral charcoal only. Colored label pixels stay.
    return peak <= 32 and (peak - min(r, g, b)) <= 8


def knock_out_background(im: Image.Image):
    rgb = im.convert("RGB")
    w, h = rgb.size
    px = rgb.load()
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if max(r, g, b) <= 12:
                px[x, y] = (255, 255, 255)
    seen = bytearray(w * h)
    q: deque[tuple[int, int]] = deque()

    def push(x: int, y: int) -> None:
        i = y * w + x
        if seen[i]:
            return
        seen[i] = 1
        r, g, b = px[x, y]
        if is_studio_black(r, g, b):
            q.append((x, y))

    for x in range(w):
        push(x, 0)
        push(x, h - 1)
    for y in range(h):
        push(0, y)
        push(w - 1, y)

    cleared = 0
    while q:
        x, y = q.popleft()
        px[x, y] = (255, 255, 255)
        cleared += 1
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h:
                push(nx, ny)
    return rgb, cleared / (w * h)


def content_box(im: Image.Image) -> tuple[int, int, int, int]:
    w, h = im.size
    px = im.load()
    left, right, top, bottom = w, 0, h, 0
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if r < 246 or g < 246 or b < 246:
                if x < left:
                    left = x
                if x > right:
                    right = x
                if y < top:
                    top = y
                if y > bottom:
                    bottom = y
    if right <= left or bottom <= top:
        return 0, 0, w, h
    return left, top, right + 1, bottom + 1


def on_white_square(im: Image.Image, size: int = 900) -> Image.Image:
    left, top, right, bottom = content_box(im)
    crop = im.crop((left, top, right, bottom))
    side = int(max(crop.size) * 1.16)
    canvas = Image.new("RGB", (side, side), (255, 255, 255))
    canvas.paste(crop, ((side - crop.size[0]) // 2, (side - crop.size[1]) // 2))
    return canvas.resize((size, size), Image.Resampling.LANCZOS)


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=45) as res:
        return res.read()


def process(row: dict) -> str:
    slug = ALIAS.get(row["supplierSlug"], row["supplierSlug"])
    raw = Image.open(BytesIO(fetch(row["image"])))
    cleaned, fraction = knock_out_background(raw)
    on_white_square(cleaned).save(IMG_DIR / f"{slug}.webp", "WEBP", quality=84, method=4)
    return f"{slug} cleared={fraction:.2f} src={raw.size}"


def main() -> None:
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    rows = [row for row in CATALOG["products"] if row.get("image")]
    with ThreadPoolExecutor(max_workers=6) as pool:
        futs = [pool.submit(process, row) for row in rows]
        for fut in as_completed(futs):
            print(fut.result())
    print("done", len(rows))


if __name__ == "__main__":
    main()
