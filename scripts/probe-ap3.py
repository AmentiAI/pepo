import re
html = open(r"c:\Users\Wilso\pepo\scripts\_probe.html", encoding="utf-8").read()
# strip scripts/styles for visible-ish text chunks containing BPC or price-like
text = re.sub(r"<script[\s\S]*?</script>", " ", html)
text = re.sub(r"<style[\s\S]*?</style>", " ", text)
text = re.sub(r"<[^>]+>", "\n", text)
text = re.sub(r"\n+", "\n", text)
lines = [ln.strip() for ln in text.split("\n") if ln.strip()]
# keep lines with dollar or mg or BPC or cart
keep = [ln for ln in lines if re.search(r"\$|mg|BPC|cart|vial|Price|Add", ln, re.I)]
open(r"c:\Users\Wilso\pepo\scripts\_probe.txt", "w", encoding="utf-8").write("\n".join(keep[:250]))
print("lines", len(lines), "keep", len(keep))
