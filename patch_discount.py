import re

path = '/mnt/c/Users/Wilso/pepo/lib/products.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Match lines like `    price: 59.99,` and insert salePrice after
def add_sale(m):
    indent = m.group(1)
    price_val = float(m.group(2))
    sale = round(price_val * 0.9, 2)
    sale_str = f'{sale:.2f}'
    # Remove trailing zero for whole cents: 54.00 stays as 54.00 (keep 2dp always)
    return f'{indent}price: {m.group(2)},\n{indent}salePrice: {sale_str},'

# Only match the price field (not shopUrl etc.), pattern: whitespace + "price: NUMBER,"
# Make sure we don't add salePrice twice
if 'salePrice:' not in content:
    content = re.sub(r'( +)price: (\d+(?:\.\d+)?),', add_sale, content)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Done — salePrice fields added.')
else:
    print('salePrice already present, skipping.')
