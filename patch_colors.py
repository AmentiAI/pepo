import re, os

files = [
    'app/anti-aging/page.tsx',
    'app/best-peptide-for-anti-aging/page.tsx',
    'app/best-peptide-for-muscle-growth/page.tsx',
    'app/best-peptide-for-weight-loss/page.tsx',
    'app/blog/page.tsx',
    'app/body-composition/page.tsx',
    'app/comparisons/bpc-157-vs-tb-500/page.tsx',
    'app/comparisons/semaglutide-vs-tirzepatide/page.tsx',
    'app/contact/page.tsx',
    'app/glp1-comparison/page.tsx',
    'app/goals/cognitive-enhancement/page.tsx',
    'app/goals/skin-healing-ghk-cu/page.tsx',
    'app/growth-hormone/page.tsx',
    'app/guide/page.tsx',
    'app/gut-health/page.tsx',
    'app/hair-growth/page.tsx',
    'app/healing/gut-health-bpc-157/page.tsx',
    'app/healing/page.tsx',
    'app/healing/rotator-cuff/page.tsx',
    'app/healing/tendonitis/page.tsx',
    'app/how-to/peptide-storage-guide/page.tsx',
    'app/how-to/reconstitute-peptides/page.tsx',
    'app/how-to/subcutaneous-injection-guide/page.tsx',
    'app/looksmaxxing/page.tsx',
    'app/page.tsx',
    'app/peptides/ipamorelin-cjc/page.tsx',
    'app/peptides/mk-677/page.tsx',
    'app/peptides/pt-141/page.tsx',
    'app/peptides/tb-500/page.tsx',
    'app/retatrutide/page.tsx',
    'app/sleep/page.tsx',
]

replacements = [
    # Hex colors
    ('#7c3aed', '#d97706'),
    ('#6d28d9', '#92400e'),
    ('#a78bfa', '#d97706'),
    ('#8b5cf6', '#d97706'),
    ('#7c3fed', '#d97706'),
    # Tailwind gradient combos (order matters - more specific first)
    ('from-violet-700 via-purple-600 to-violet-500', 'from-yellow-600 via-amber-500 to-yellow-500'),
    ('from-fuchsia-600 to-violet-500', 'from-yellow-500 to-amber-400'),
    ('from-violet-700 to-violet-500', 'from-yellow-600 to-amber-500'),
    ('from-violet-600 to-violet-400', 'from-yellow-500 to-amber-400'),
    ('from-violet-600 to-cyan-500', 'from-yellow-500 to-amber-400'),
    # Individual Tailwind classes
    ('bg-violet-500/8', 'bg-yellow-500/8'),
    ('bg-violet-500/10', 'bg-yellow-500/10'),
    ('bg-violet-500/15', 'bg-yellow-500/15'),
    ('bg-violet-500/20', 'bg-yellow-500/20'),
    ('bg-violet-500', 'bg-yellow-500'),
    ('bg-violet-400', 'bg-yellow-400'),
    ('border-violet-400/20', 'border-yellow-400/20'),
    ('border-violet-500/20', 'border-yellow-500/20'),
    ('border-violet-500/25', 'border-yellow-500/25'),
    ('border-violet-500/40', 'border-yellow-500/40'),
    ('border-violet-500/50', 'border-yellow-500/50'),
    ('border-violet-500', 'border-yellow-500'),
    ('border-violet-600/20', 'border-yellow-600/20'),
    ('border-violet-600/25', 'border-yellow-600/25'),
    ('border-violet-600/40', 'border-yellow-600/40'),
    ('border-violet-600', 'border-yellow-600'),
    ('hover:border-violet-500/40', 'hover:border-yellow-500/40'),
    ('hover:border-violet-500/50', 'hover:border-yellow-500/50'),
    ('hover:border-violet-500/60', 'hover:border-yellow-500/60'),
    ('hover:border-violet-600/40', 'hover:border-yellow-600/40'),
    ('ring-violet-500/10', 'ring-yellow-500/10'),
    ('text-violet-400', 'text-yellow-400'),
    ('text-violet-500', 'text-yellow-500'),
    ('text-violet-600', 'text-yellow-600'),
    ('from-violet-700', 'from-yellow-600'),
    ('from-violet-600', 'from-yellow-500'),
    ('from-violet-500', 'from-yellow-500'),
    ('to-violet-500', 'to-amber-400'),
    ('to-violet-400', 'to-amber-400'),
    ('via-purple-600', 'via-amber-500'),
    ('from-fuchsia-600', 'from-yellow-500'),
    ('from-purple-600', 'from-yellow-500'),
    # color: 'violet' string values
    ("color: 'violet'", "color: 'yellow'"),
    ('badgeColor: \'violet\'', 'badgeColor: \'yellow\''),
    # badge-violet class usage
    ('badge-violet', 'badge-yellow'),
    # borderLeftColor purple hex
    ("borderLeftColor: '#7c3aed'", "borderLeftColor: '#d97706'"),
]

base = '/mnt/c/Users/Wilso/pepo'
changed = []

for rel in files:
    path = os.path.join(base, rel)
    if not os.path.exists(path):
        print(f'SKIP (not found): {rel}')
        continue
    with open(path, 'r', encoding='utf-8') as f:
        orig = f.read()
    text = orig
    for old, new in replacements:
        text = text.replace(old, new)
    if text != orig:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
        changed.append(rel)
        print(f'CHANGED: {rel}')
    else:
        print(f'no-op:   {rel}')

print(f'\nDone. {len(changed)} files changed.')
