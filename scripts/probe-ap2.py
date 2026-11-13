import re

html = open(r"c:\Users\Wilso\pepo\scripts\_probe.html", encoding="utf-8").read()
out = []
out.append("media " + " | ".join(re.findall(r"/media/[a-z0-9]+\.(?:png|webp|jpg|jpeg|avif)", html, re.I)[:20]))
# h1
h1 = re.findall(r"<h1[^>]*>(.*?)</h1>", html, re.S)
out.append("h1 " + " || ".join(re.sub("<[^>]+>", "", x)[:200] for x in h1[:3]))
# money
money = re.findall(r"\$\d+(?:\.\d{2})?", html)
out.append("money " + " ".join(money[:40]))
# variant-ish
for pat in ["variant", "dosage", "mg", "priceCents", "unitPrice", "amount"]:
    out.append(f"count {pat} {html.lower().count(pat.lower())}")
# nearby price context
idx = html.find("$")
out.append("around first dollar: " + html[max(0, idx-200):idx+200].replace("\n", " "))
open(r"c:\Users\Wilso\pepo\scripts\_probe.txt", "w", encoding="utf-8").write("\n".join(out))
print("wrote", len(out))
