import os, re

# All TSX files in app/ and components/
base = '/mnt/c/Users/Wilso/pepo'

def find_tsx(root):
    results = []
    for dirpath, _, filenames in os.walk(root):
        # skip node_modules and .next
        if 'node_modules' in dirpath or '.next' in dirpath:
            continue
        for fn in filenames:
            if fn.endswith('.tsx') or fn.endswith('.ts'):
                results.append(os.path.join(dirpath, fn))
    return results

files = find_tsx(os.path.join(base, 'app')) + find_tsx(os.path.join(base, 'components'))

# Replacement pairs: (old, new)
# Light inline hex colors → near-black
# Medium grays → dark gray
# Tailwind light classes → dark equivalents
replacements = [
    # Very light / barely visible text
    ("color: '#a1a1b5'", "color: '#1f2937'"),
    ('color: "#a1a1b5"', 'color: "#1f2937"'),
    # Medium grays
    ("color: '#71717a'", "color: '#1f2937'"),
    ('color: "#71717a"', 'color: "#1f2937"'),
    ("color: '#52525b'", "color: '#374151'"),
    ('color: "#52525b"', 'color: "#374151"'),
    ("color: '#6b7280'", "color: '#374151'"),
    ('color: "#6b7280"', 'color: "#374151"'),
    # Other light grays that might appear
    ("color: '#9ca3af'", "color: '#374151'"),
    ("color: '#d1d5db'", "color: '#374151'"),
    # Tailwind text color classes — light → dark equivalents
    # Handle class attribute strings carefully: only replace when followed by space, quote, or end of class
    # We'll do simple string replace for common patterns
    ('text-gray-400 ', 'text-gray-800 '),
    ('text-gray-400"', 'text-gray-800"'),
    ("text-gray-400'", "text-gray-800'"),
    ('text-gray-400}', 'text-gray-800}'),
    ('text-gray-500 ', 'text-gray-700 '),
    ('text-gray-500"', 'text-gray-700"'),
    ("text-gray-500'", "text-gray-700'"),
    ('text-gray-500}', 'text-gray-700}'),
    ('text-zinc-400 ', 'text-gray-800 '),
    ('text-zinc-400"', 'text-gray-800"'),
    ("text-zinc-400'", "text-gray-800'"),
    ('text-zinc-500 ', 'text-gray-700 '),
    ('text-zinc-500"', 'text-gray-700"'),
    ("text-zinc-500'", "text-gray-700'"),
    ('text-slate-400 ', 'text-gray-800 '),
    ('text-slate-400"', 'text-gray-800"'),
    ("text-slate-400'", "text-gray-800'"),
    ('text-slate-500 ', 'text-gray-700 '),
    ('text-slate-500"', 'text-gray-700"'),
    ("text-slate-500'", "text-gray-700'"),
]

changed = []
for path in files:
    try:
        with open(path, 'r', encoding='utf-8') as f:
            orig = f.read()
    except Exception:
        continue
    text = orig
    for old, new in replacements:
        text = text.replace(old, new)
    if text != orig:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
        changed.append(path.replace(base + '/', ''))
        print(f'CHANGED: {path.replace(base + "/", "")}')

print(f'\nDone. {len(changed)} files changed.')
