html = open(r"c:\Users\Wilso\pepo\scripts\_probe.html", encoding="utf-8").read()
i = html.find("BPC-157-5MG")
open(r"c:\Users\Wilso\pepo\scripts\_probe.txt", "w", encoding="utf-8").write(html[i-2500:i+1500] if i>0 else "not found "+str(i))
print("idx", i)
