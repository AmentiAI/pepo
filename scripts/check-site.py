import urllib.request

def get(url):
    req = urllib.request.Request(url, method="GET")
    try:
        with urllib.request.urlopen(req) as res:
            body = res.read().decode("utf-8", "ignore")
            return res.status, dict(res.headers), body
    except urllib.error.HTTPError as err:
        body = err.read().decode("utf-8", "ignore")
        return err.code, dict(err.headers), body

status, headers, home = get("http://localhost:3002/")
print("home", status)
print("shark", home.count("Shark Tides"))
print("catalog", home.count("/catalog/"))
print("logo", home.count("/logo.png"))
print("old", home.lower().count("phiogen") + home.lower().count("peptidesclav") + home.count("/phio"))
imgs = [part for part in home.split('"') if part.startswith("/catalog/")]
print("imgs", imgs[:8])

status, headers, product = get("http://localhost:3002/products/bpc-157")
print("product", status, "/catalog/bpc-157.webp" in product, "/out/bpc-157" in product)

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None

opener = urllib.request.build_opener(NoRedirect)
try:
    res = opener.open("http://localhost:3002/out/bpc-157")
    print("redir", res.status, res.headers.get("Location"))
except urllib.error.HTTPError as err:
    print("redir", err.code, err.headers.get("Location"), err.headers.get("X-Robots-Tag"))
