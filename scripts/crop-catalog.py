from pathlib import Path
from PIL import Image

root = Path(r"c:\Users\Wilso\pepo\public\catalog")


def content_box(im: Image.Image) -> tuple[int, int, int, int]:
    rgb = im.convert("RGB")
    w, h = rgb.size
    px = rgb.load()

    def mostly_black(samples) -> bool:
        if not samples:
            return False
        black = 0
        for r, g, b in samples:
            if r < 14 and g < 14 and b < 14:
                black += 1
        return black / len(samples) > 0.7

    def col(x: int):
        return [px[x, y] for y in range(0, h, 6)]

    def row(y: int):
        return [px[x, y] for x in range(0, w, 6)]

    left, right, top, bottom = 0, w - 1, 0, h - 1
    while left < right and mostly_black(col(left)):
        left += 1
    while right > left and mostly_black(col(right)):
        right -= 1
    while top < bottom and mostly_black(row(top)):
        top += 1
    while bottom > top and mostly_black(row(bottom)):
        bottom -= 1
    pad = 12
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(w - 1, right + pad)
    bottom = min(h - 1, bottom + pad)
    return left, top, right + 1, bottom + 1


cropped = 0
for path in root.glob("*.webp"):
    im = Image.open(path)
    box = content_box(im)
    if box != (0, 0, im.size[0], im.size[1]):
        im.convert("RGB").crop(box).save(path, "WEBP", quality=82, method=4)
        cropped += 1
        print("cropped", path.name, im.size, "->", (box[2] - box[0], box[3] - box[1]))
print("cropped", cropped)
