import os, re

base = '/mnt/c/Users/Wilso/pepo'

# Map violet RGB to amber equivalents (maintaining opacity)
# rgb(139 92 246) = violet → rgb(217 119 6) = amber-600
# rgba(139,92,246,...) → rgba(217,119,6,...)

files_to_fix = [
    'app/looksmaxxing/page.tsx',
]

# Also scan all TSX for any remaining rgba(139,92,246 or rgb(139 92 246)
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
    # rgba(139,92,246, X) → rgba(234,179,8, X)
    ('rgba(139,92,246,0.06)', 'rgba(234,179,8,0.06)'),
    ('rgba(139,92,246,0.08)', 'rgba(234,179,8,0.08)'),
    ('rgba(139,92,246,0.1)', 'rgba(234,179,8,0.10)'),
    ('rgba(139,92,246,0.10)', 'rgba(234,179,8,0.10)'),
    ('rgba(139,92,246,0.15)', 'rgba(234,179,8,0.15)'),
    ('rgba(139,92,246,0.2)', 'rgba(234,179,8,0.20)'),
    ('rgba(139,92,246,0.20)', 'rgba(234,179,8,0.20)'),
    ('rgba(139,92,246,0.25)', 'rgba(234,179,8,0.25)'),
    ('rgba(139,92,246,0.3)', 'rgba(234,179,8,0.30)'),
    ('rgba(139,92,246,0.30)', 'rgba(234,179,8,0.30)'),
    ('rgba(139,92,246,0.4)', 'rgba(234,179,8,0.40)'),
    ('rgba(139,92,246,0.40)', 'rgba(234,179,8,0.40)'),
    ('rgba(139,92,246,0.5)', 'rgba(234,179,8,0.50)'),
    # rgb(139 92 246) → rgb(234 179 8)
    ('rgb(139 92 246)', 'rgb(234 179 8)'),
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
