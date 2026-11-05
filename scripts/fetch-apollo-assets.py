"""Download Apollo product images onto this domain and build Shark Tides icons."""
import os
import urllib.request
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CATALOG = os.path.join(ROOT, "public", "catalog")
PUBLIC = os.path.join(ROOT, "public")
APP = os.path.join(ROOT, "app")
LOGO_SRC = r"C:\Users\Wilso\.cursor\projects\c-Users-Wilso-pepo\assets\c__Users_Wilso_AppData_Roaming_Cursor_User_workspaceStorage_b07345468b6f8f527fb8d4b4eeadf6b2_images_image-8933851f-e90f-4b39-b130-2c0eed5dd2da.jpg"

IMAGES = {
    "bpc-157": "https://apollopeptidesciences.com/wp-content/uploads/2025/09/bpc157_10mg.webp",
    "tb-500": "https://apollopeptidesciences.com/wp-content/uploads/2025/09/TB500_10mg.webp",
    "kpv": "https://apollopeptidesciences.com/wp-content/uploads/2026/10/kpv-10mg.webp",
    "semaglutide-5mg": "https://apollopeptidesciences.com/wp-content/uploads/2024/10/semaglutide_5mg.webp",
    "semaglutide-10mg": "https://apollopeptidesciences.com/wp-content/uploads/2024/10/semaglutide_10mg-1.webp",
    "semaglutide-15mg": "https://apollopeptidesciences.com/wp-content/uploads/2024/06/semaglutide_15mg.webp",
    "semaglutide-5mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2026/04/semaglutide_5mg_multi.webp",
    "semaglutide-10mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2026/04/semaglutide_10mg_multi.webp",
    "semaglutide-15mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2026/04/semaglutide_15mg_multi.webp",
    "tirzepatide-15mg": "https://apollopeptidesciences.com/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp",
    "tirzepatide-20mg": "https://apollopeptidesciences.com/wp-content/uploads/2026/06/tirzepatide_20mg.webp",
    "tirzepatide-30mg": "https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_30mg.webp",
    "tirzepatide-60mg": "https://apollopeptidesciences.com/wp-content/uploads/2025/12/tirzepatide_60mg-1.webp",
    "tirzepatide-15mg-4-pack": "https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_15mg_multi.webp",
    "tirzepatide-15mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_15mg_multi.webp",
    "tirzepatide-20mg-5-pack": "https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_20mg_multi.webp",
    "tirzepatide-20mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_20mg_multi.webp",
    "tirzepatide-30mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2026/04/tirzepatide_30mg_multi.webp",
    "tirzepatide-60mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2026/04/tirzepatide_60mg_multi.webp",
    "retatrutide-10mg": "https://apollopeptidesciences.com/wp-content/uploads/2024/04/retatrutide_10mg-1.webp",
    "retatrutide-15mg": "https://apollopeptidesciences.com/wp-content/uploads/2024/06/retatrutide_15mg.webp",
    "retatrutide-30mg": "https://apollopeptidesciences.com/wp-content/uploads/2025/12/retatrutide_30mg.webp",
    "retatrutide-40mg": "https://apollopeptidesciences.com/wp-content/uploads/2026/10/retatrutide_40mg.webp",
    "retatrutide-60mg": "https://apollopeptidesciences.com/wp-content/uploads/2025/12/retatrutide_60mg.webp",
    "retatrutide-10mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2026/04/retatrutide_10mg_multi.webp",
    "retatrutide-15mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2026/05/retatrutide_15mg_multi.webp",
    "retatrutide-30mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2026/04/retatrutide_30mg_multi.webp",
    "retatrutide-60mg-10-pack": "https://apollopeptidesciences.com/wp-content/uploads/2026/04/retatrutide_60mg_multi.webp",
    "cagri-sema": "https://apollopeptidesciences.com/wp-content/uploads/2025/09/cagri_sema_5_5mg-1.webp",
    "ipamorelin-cjc": "https://apollopeptidesciences.com/wp-content/uploads/2025/01/cjc1295_5-5mg.webp",
    "igf-1-lr3": "https://apollopeptidesciences.com/wp-content/uploads/2025/09/igf-1lr3-1mg.webp",
    "tesamorelin": "https://apollopeptidesciences.com/wp-content/uploads/2026/10/tesamorelin-20mg.webp",
    "ghk-cu": "https://apollopeptidesciences.com/wp-content/uploads/2025/01/ghk-cu_50mg.webp",
    "ghk-cu-80mg": "https://apollopeptidesciences.com/wp-content/uploads/2026/06/ghk-cu_80mg.webp",
    "snap-8": "https://apollopeptidesciences.com/wp-content/uploads/2025/01/snap-8_10mg.webp",
    "snap-8-2pack": "https://apollopeptidesciences.com/wp-content/uploads/2025/01/snap-8_10mg_2pack.webp",
    "nad-plus": "https://apollopeptidesciences.com/wp-content/uploads/2025/09/nad_500mg.webp",
    "epithalon": "https://apollopeptidesciences.com/wp-content/uploads/2025/09/epithalon_50mg.webp",
    "epithalon-40mg": "https://apollopeptidesciences.com/wp-content/uploads/2026/10/epithalon_40mg.webp",
    "foxo4-dri": "https://apollopeptidesciences.com/wp-content/uploads/2025/01/fox04_10mg-1.webp",
    "five-amino-1mq": "https://apollopeptidesciences.com/wp-content/uploads/2026/06/5-amino_5mg.webp",
    "ss-31": "https://apollopeptidesciences.com/wp-content/uploads/2026/06/ss31_10mg.webp",
    "klow": "https://apollopeptidesciences.com/wp-content/uploads/2026/06/klow_75mg.webp",
}

os.makedirs(CATALOG, exist_ok=True)
opener = urllib.request.build_opener()
opener.addheaders = [("User-Agent", "Mozilla/5.0")]
urllib.request.install_opener(opener)

failed = []
for slug, url in IMAGES.items():
    dest = os.path.join(CATALOG, f"{slug}.webp")
    try:
        urllib.request.urlretrieve(url, dest)
        print(f"ok {slug} {os.path.getsize(dest)}")
    except Exception as exc:
        failed.append((slug, str(exc)))
        print(f"FAIL {slug} {exc}")

logo = Image.open(LOGO_SRC).convert("RGBA")
# Trim near-black margins so the mark fills the favicon.
pixels = logo.load()
w, h = logo.size
minx, miny, maxx, maxy = w, h, 0, 0
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a > 20 and (r + g + b) > 30:
            minx = min(minx, x)
            miny = min(miny, y)
            maxx = max(maxx, x)
            maxy = max(maxy, y)
pad = 8
logo = logo.crop((max(0, minx - pad), max(0, miny - pad), min(w, maxx + pad), min(h, maxy + pad)))

def square(img, size, bg=(0, 0, 0, 255)):
    canvas = Image.new("RGBA", (size, size), bg)
    fitted = img.copy()
    fitted.thumbnail((size, size), Image.Resampling.LANCZOS)
    canvas.paste(fitted, ((size - fitted.width) // 2, (size - fitted.height) // 2), fitted)
    return canvas

square(logo, 512).save(os.path.join(PUBLIC, "logo.png"), "PNG")
square(logo, 180).save(os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG")
square(logo, 192).save(os.path.join(PUBLIC, "icon-192.png"), "PNG")
square(logo, 512).save(os.path.join(PUBLIC, "icon-512.png"), "PNG")
square(logo, 32).save(os.path.join(PUBLIC, "favicon-32x32.png"), "PNG")
square(logo, 16).save(os.path.join(PUBLIC, "favicon-16x16.png"), "PNG")
square(logo, 512).save(os.path.join(APP, "icon.png"), "PNG")
square(logo, 180).save(os.path.join(APP, "apple-icon.png"), "PNG")

ico_sizes = [square(logo, s).convert("RGBA") for s in (16, 32, 48)]
ico_sizes[0].save(
    os.path.join(PUBLIC, "favicon.ico"),
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=ico_sizes[1:],
)
ico_sizes[0].save(
    os.path.join(APP, "favicon.ico"),
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=ico_sizes[1:],
)

# Open Graph card: black field, logo, domain line.
og = Image.new("RGB", (1200, 630), (2, 6, 16))
mark = square(logo, 460)
og.paste(mark, ((1200 - 460) // 2, 36), mark)
draw = ImageDraw.Draw(og)
try:
    font = ImageFont.truetype("arialbd.ttf", 42)
except Exception:
    font = ImageFont.load_default()
text = "sharktides.com  ·  Research peptide catalog"
bbox = draw.textbbox((0, 0), text, font=font)
draw.text(((1200 - (bbox[2] - bbox[0])) // 2, 540), text, fill=(186, 230, 253), font=font)
og.save(os.path.join(PUBLIC, "og-image.png"), "PNG")
print("icons written", "failed", len(failed))
if failed:
    raise SystemExit(1)
