"""Trim near-white margins so vial photos fill catalog thumbnails."""
from pathlib import Path
from PIL import Image

root = Path(r"c:\Users\Wilso\pepo\public\catalog")


def content_box(im: Image.Image):
    rgb = im.convert("RGB")
    w, h = rgb.size
    px = rgb.load()

    def blank(x: int, y: int) -> bool:
        r, g, b = px[x, y]
        return r > 246 and g > 246 and b > 246

    left, right, top, bottom = w, -1, h, -1
    for y in range(h):
        for x in range(w):
            if blank(x, y):
                continue
            if x < left:
                left = x
            if x > right:
                right = x
            if y < top:
                top = y
            if y > bottom:
                bottom = y
    if right < left or bottom < top:
        return None
    pad = 36
    return (
        max(0, left - pad),
        max(0, top - pad),
        min(w, right + 1 + pad),
        min(h, bottom + 1 + pad),
    )


changed = 0
for path in sorted(root.glob("*.webp")):
    im = Image.open(path).convert("RGB")
    box = content_box(im)
    if not box:
        print("skip empty", path.name)
        continue
    if box == (0, 0, im.size[0], im.size[1]):
        continue
    cropped = im.crop(box)
    if cropped.size == im.size:
        continue
    cropped.save(path, "WEBP", quality=86, method=6)
    changed += 1
    print(f"{path.name}: {im.size[0]}x{im.size[1]} -> {cropped.size[0]}x{cropped.size[1]}")

print("trimmed", changed)
