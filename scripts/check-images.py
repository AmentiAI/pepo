from pathlib import Path
from PIL import Image
im = Image.open(Path(r"c:\Users\Wilso\pepo\public\catalog\bpc-157.webp")).convert("RGB")
w, h = im.size
px = im.load()
for x in (400, 500, 560, 700, 790):
    black = 0
    n = 0
    for y in range(0, h, 6):
        r, g, b = px[x, y]
        n += 1
        if r < 14 and g < 14 and b < 14:
            black += 1
    print(x, "black", black, "of", n, "mid", px[x, h // 2])
