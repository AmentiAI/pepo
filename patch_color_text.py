import os

base = '/mnt/c/Users/Wilso/pepo'

def find_tsx(root):
    results = []
    for dirpath, _, filenames in os.walk(root):
        if 'node_modules' in dirpath or '.next' in dirpath:
            continue
        for fn in filenames:
            if fn.endswith('.tsx') or fn.endswith('.ts'):
                results.append(os.path.join(dirpath, fn))
    return results

all_files = find_tsx(os.path.join(base, 'app')) + find_tsx(os.path.join(base, 'components'))

replacements = [
    # Text colors
    ('text-cyan-300', 'text-yellow-500'),
    ('text-cyan-400', 'text-yellow-500'),
    ('text-cyan-500', 'text-yellow-600'),
    ('text-cyan-600', 'text-yellow-600'),
    ('text-blue-400', 'text-yellow-600'),
    ('text-blue-300', 'text-yellow-500'),
    ('text-blue-500', 'text-yellow-600'),
    ('text-blue-600', 'text-yellow-600'),
    ('text-pink-400', 'text-yellow-500'),
    ('text-pink-500', 'text-yellow-600'),
    ('text-pink-600', 'text-yellow-600'),
    ('text-fuchsia-300', 'text-yellow-500'),
    ('text-fuchsia-400', 'text-yellow-500'),
    ('text-emerald-400', 'text-yellow-600'),
    ('text-emerald-300', 'text-yellow-500'),
    ('text-emerald-500', 'text-yellow-600'),
    ('text-teal-400', 'text-yellow-600'),
    ('text-teal-300', 'text-yellow-500'),
    ('text-sky-400', 'text-yellow-500'),
    ('text-sky-500', 'text-yellow-600'),
    ('text-indigo-400', 'text-yellow-500'),
    # hover: variants
    ('hover:text-cyan-300', 'hover:text-yellow-500'),
    ('hover:text-cyan-500', 'hover:text-yellow-600'),
    # Background with these colors (non-decorative accents)
    ('bg-cyan-500/20', 'bg-yellow-500/20'),
    ('bg-cyan-500/15', 'bg-yellow-500/15'),
    ('bg-pink-600/15', 'bg-yellow-500/15'),
    ('bg-blue-600/15', 'bg-yellow-500/15'),
    ('bg-emerald-600/15', 'bg-yellow-500/15'),
    ('bg-emerald-500/15', 'bg-yellow-500/15'),
    # Border with these colors
    ('border-pink-600/25', 'border-yellow-500/25'),
    ('border-blue-600/25', 'border-yellow-500/25'),
    ('border-emerald-600/25', 'border-yellow-500/25'),
    ('border-cyan-900/60', 'border-yellow-600/60'),
    ('border-cyan-500/60', 'border-yellow-500/60'),
    ('border-cyan-500/30', 'border-yellow-500/30'),
    # colorMap tag entries
    ("tag: 'text-cyan-300'", "tag: 'text-yellow-500'"),
    ("tag: 'text-fuchsia-300'", "tag: 'text-yellow-500'"),
    # accent entries
    ("accent: 'text-emerald-400'", "accent: 'text-yellow-600'"),
    ("accent: 'text-blue-400'", "accent: 'text-yellow-600'"),
    # color ternaries (both sides already same, clean up remaining)
    ("'bg-cyan-500/20 text-cyan-300'", "'bg-yellow-500/20 text-yellow-500'"),
]

changed = []
for path in all_files:
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
