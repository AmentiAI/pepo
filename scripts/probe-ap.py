import re
import urllib.request

url = "https://www.americanpeptides.us/products/bpc-157"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req, timeout=40).read().decode("utf-8", "replace")
open(r"c:\Users\Wilso\pepo\scripts\_probe.html", "w", encoding="utf-8").write(html)
print("len", len(html))
m = re.search(r"<title>([^<]+)", html)
print("title", m.group(1) if m else None)
imgs = re.findall(r"https://[^\"'\s>]+\.(?:webp|png|jpg|jpeg|avif)", html, re.I)
print("imgs", len(set(imgs)))
for i in list(dict.fromkeys(imgs))[:40]:
    print(i[:220])
print("--- ldjson count", html.count("application/ld+json"))
print("--- price snippets")
for p in re.findall(r".{0,40}\$[0-9]+(?:\.[0-9]{2})?.{0,40}", html)[:15]:
    print(p.replace("\n", " ")[:120])
