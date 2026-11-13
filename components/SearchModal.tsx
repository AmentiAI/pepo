'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, FlaskConical } from 'lucide-react';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';

const goalPages = [
  { label: 'Healing & Recovery', href: '/healing', desc: 'BPC-157, TB-500 protocols' },
  { label: 'Growth Hormone', href: '/growth-hormone', desc: 'CJC-1295, Ipamorelin, IGF-1' },
  { label: 'Body Composition', href: '/body-composition', desc: 'Muscle growth & fat loss' },
  { label: 'Anti-Aging & Longevity', href: '/anti-aging', desc: 'Epithalon, GHK-Cu, NAD+' },
  { label: 'Weight Loss', href: '/best-peptide-for-weight-loss', desc: 'GLP-1 peptides guide' },
  { label: 'Cognitive Enhancement', href: '/goals/cognitive-enhancement', desc: 'Semax, Selank' },
  { label: 'Looksmaxxing', href: '/looksmaxxing', desc: 'Tier-ranked peptide guide' },
  { label: 'Stacks', href: '/stacks', desc: 'Pre-built peptide protocols' },
  { label: 'Hair Growth', href: '/hair-growth', desc: 'TB-500, GHK-Cu for hair' },
  { label: 'Gut Health', href: '/gut-health', desc: 'BPC-157 gut protocols' },
  { label: 'Sleep Optimization', href: '/sleep', desc: 'Ipamorelin for deep sleep' },
];

interface Result {
  type: 'product' | 'goal' | 'stack';
  label: string;
  sub: string;
  href: string;
  image?: string;
  category?: string;
}

function compact(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function matches(query: string, ...fields: string[]) {
  const q = query.toLowerCase().trim();
  const folded = compact(q);
  return fields.some((field) => {
    const text = field.toLowerCase();
    return text.includes(q) || (folded.length >= 2 && compact(field).includes(folded));
  });
}

function search(query: string): Result[] {
  if (!query.trim()) return [];

  const productResults: Result[] = products
    .filter((p) =>
      matches(
        query,
        p.name,
        p.slug,
        p.category,
        p.tagline,
        p.shortDescription,
        p.tags.join(' '),
      )
    )
    .slice(0, 6)
    .map((p) => ({
      type: 'product',
      label: p.name,
      sub: p.category,
      href: `/products/${p.slug}`,
      image: p.image || '',
      category: p.category,
    }));

  const stackResults: Result[] = stacks
    .filter((stack) => matches(query, stack.name, stack.tagline, stack.goal, stack.tags.join(' ')))
    .slice(0, 3)
    .map((stack) => ({
      type: 'stack',
      label: stack.name,
      sub: stack.goal,
      href: `/stacks/${stack.id}`,
    }));

  const goalResults: Result[] = goalPages
    .filter((g) => matches(query, g.label, g.desc))
    .slice(0, 3)
    .map((g) => ({
      type: 'goal',
      label: g.label,
      sub: g.desc,
      href: g.href,
    }));

  return [...productResults, ...stackResults, ...goalResults].slice(0, 8);
}

const suggestions = [
  { label: 'Semaglutide', hint: 'AP-SEM-1' },
  { label: 'Tirzepatide', hint: 'AP-TRZ-2' },
  { label: 'Retatrutide', hint: 'AP-RTA-3' },
  { label: 'BPC-157', hint: 'Healing' },
  { label: 'Ipamorelin', hint: 'Growth hormone' },
  { label: 'GHK-Cu', hint: 'Skin' },
];

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(-1);
  const [shortcut, setShortcut] = useState('Ctrl K');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = search(query);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIdx(-1);
  }, []);

  // Open with ⌘K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close]);

  useEffect(() => {
    const mac = /Mac|iPhone|iPad/.test(navigator.platform);
    setShortcut(mac ? '⌘K' : 'Ctrl K');
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === 'Enter' && activeIdx >= 0 && results[activeIdx]) {
      close();
      window.location.href = results[activeIdx].href;
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 h-10 w-[220px] lg:w-[248px] pl-3 pr-2 rounded-md border border-gray-200 bg-gray-50 text-gray-500 hover:bg-white hover:border-gray-300 transition-colors"
        aria-label="Search catalog"
      >
        <Search size={15} className="text-gray-400 shrink-0" />
        <span className="flex-1 text-left text-sm text-gray-500">Search catalog</span>
        <kbd className="text-[10px] font-medium tracking-wide text-gray-400 bg-white border border-gray-200 rounded px-1.5 py-0.5">
          {shortcut}
        </kbd>
      </button>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        aria-label="Search catalog"
      >
        <Search size={16} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh] px-4 bg-slate-900/40"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div
            className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
            role="dialog"
            aria-label="Search catalog"
          >
            <div className="flex items-center gap-3 h-14 px-4 border-b border-gray-200">
              <Search size={16} className="text-gray-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setActiveIdx(-1); }}
                onKeyDown={handleKey}
                placeholder="Search peptides, stacks, and guides"
                className="flex-1 bg-transparent outline-none text-gray-900 text-[15px] placeholder:text-gray-400"
                aria-label="Search peptides, stacks, and guides"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-700 p-1" aria-label="Clear search">
                  <X size={15} />
                </button>
              )}
              <button onClick={close} className="text-[11px] font-medium text-gray-500 border border-gray-200 rounded px-1.5 py-0.5 hover:bg-gray-50" aria-label="Close search">
                Esc
              </button>
            </div>

            <div ref={listRef} className="max-h-[60vh] overflow-y-auto py-2">
              {query && results.length === 0 && (
                <div className="px-5 py-10 text-center text-sm text-gray-500">
                  No matches for <span className="font-medium text-gray-900">{query}</span>
                </div>
              )}

              {results.length > 0 && (
                <div>
                  {results.filter((r) => r.type === 'product').length > 0 && (
                    <div>
                      <p className="px-4 pt-2 pb-1 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">Products</p>
                      {results.filter((r) => r.type === 'product').map((r, i) => (
                        <Link
                          key={r.href}
                          href={r.href}
                          onClick={close}
                          className={`mx-2 flex items-center gap-3 rounded-md px-2 py-2 transition-colors ${activeIdx === i ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                        >
                          {r.image ? (
                            <img
                              src={r.image}
                              alt=""
                              className="h-10 w-10 shrink-0 rounded-md border border-gray-200 bg-white object-contain p-1"
                            />
                          ) : (
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white">
                              <FlaskConical size={15} className="text-gray-400" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900">{r.label}</p>
                            <p className="truncate text-xs text-gray-500">{r.sub}</p>
                          </div>
                          <ArrowRight size={14} className="shrink-0 text-gray-300" />
                        </Link>
                      ))}
                    </div>
                  )}

                  {results.some((r) => r.type === 'stack') && (
                    <div>
                      <p className="px-4 pt-3 pb-1 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">Stacks</p>
                      {results.filter((r) => r.type === 'stack').map((r) => {
                        const idx = results.findIndex((item) => item.href === r.href);
                        return (
                          <Link
                            key={r.href}
                            href={r.href}
                            onClick={close}
                            className={`mx-2 flex items-center gap-3 rounded-md px-2 py-2 transition-colors ${activeIdx === idx ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white">
                              <FlaskConical size={15} className="text-gray-500" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-gray-900">{r.label}</p>
                              <p className="truncate text-xs text-gray-500">{r.sub}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {results.filter((r) => r.type === 'goal').length > 0 && (
                    <div>
                      <p className="px-4 pt-3 pb-1 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">Guides</p>
                      {results.filter((r) => r.type === 'goal').map((r) => {
                        const idx = results.findIndex((item) => item.href === r.href);
                        return (
                          <Link
                            key={r.href}
                            href={r.href}
                            onClick={close}
                            className={`mx-2 flex items-center gap-3 rounded-md px-2 py-2 transition-colors ${activeIdx === idx ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white">
                              <ArrowRight size={14} className="text-gray-500" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-gray-900">{r.label}</p>
                              <p className="truncate text-xs text-gray-500">{r.sub}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {!query && (
                <div className="px-2 pb-1">
                  <p className="px-2 pt-2 pb-1 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">Popular searches</p>
                  <div className="grid grid-cols-2">
                    {suggestions.map((term) => (
                      <button
                        key={term.label}
                        onClick={() => setQuery(term.label)}
                        className="flex items-center justify-between gap-3 rounded-md px-2 py-2.5 text-left hover:bg-slate-50"
                      >
                        <span className="text-sm text-gray-800">{term.label}</span>
                        <span className="text-xs text-gray-400">{term.hint}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 border-t border-gray-200 bg-gray-50 px-4 py-2.5 text-[11px] text-gray-500">
              <span className="hidden sm:inline"><kbd className="rounded border border-gray-200 bg-white px-1 font-medium text-gray-500">↑↓</kbd> navigate</span>
              <span className="hidden sm:inline"><kbd className="rounded border border-gray-200 bg-white px-1 font-medium text-gray-500">Enter</kbd> open</span>
              <Link href="/products" onClick={close} className="ml-auto font-medium text-gray-700 hover:text-gray-900">
                View catalog
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
