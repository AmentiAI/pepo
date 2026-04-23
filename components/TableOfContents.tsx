'use client';

import { useEffect, useState } from 'react';

type Heading = { id: string; text: string };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function TableOfContents({ containerSelector }: { containerSelector: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const nodes = Array.from(container.querySelectorAll('h2'));
    const used = new Set<string>();
    const extracted: Heading[] = nodes.map((node) => {
      const text = node.textContent?.trim() ?? '';
      let id = slugify(text);
      let candidate = id;
      let i = 2;
      while (used.has(candidate)) {
        candidate = `${id}-${i++}`;
      }
      used.add(candidate);
      node.id = candidate;
      node.style.scrollMarginTop = '96px';
      return { id: candidate, text };
    });

    setHeadings(extracted);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px' },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [containerSelector]);

  if (headings.length < 2) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-xl border p-5 mb-10"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <p className="text-xs font-bold uppercase tracking-widest text-yellow-600 mb-3">
        Table of Contents
      </p>
      <ol className="space-y-1.5 list-none pl-0">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              className="flex gap-2 text-sm leading-snug transition-colors hover:text-yellow-600"
              style={{ color: activeId === h.id ? '#d97706' : '#374151' }}
            >
              <span className="text-gray-500 shrink-0">{i + 1}.</span>
              <span>{h.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
