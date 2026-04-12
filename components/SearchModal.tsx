'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, FlaskConical } from 'lucide-react';
import { products } from '@/lib/products';

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
  type: 'product' | 'goal';
  label: string;
  sub: string;
  href: string;
  image?: string;
  category?: string;
}

function search(query: string): Result[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();

  const productResults: Result[] = products
    .filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.shortDescription.toLowerCase().includes(q)
    )
    .slice(0, 6)
    .map((p) => ({
      type: 'product',
      label: p.name,
      sub: p.tagline,
      href: `/products/${p.slug}`,
      image: p.image || '',
      category: p.category,
    }));

  const goalResults: Result[] = goalPages
    .filter((g) =>
      g.label.toLowerCase().includes(q) ||
      g.desc.toLowerCase().includes(q)
    )
    .slice(0, 3)
    .map((g) => ({
      type: 'goal',
      label: g.label,
      sub: g.desc,
      href: g.href,
    }));

  return [...productResults, ...goalResults].slice(0, 8);
}

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(-1);
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
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-400 hover:border-yellow-400 hover:text-gray-600 transition-colors bg-white text-sm"
        aria-label="Search"
      >
        <Search size={15} />
        <span className="hidden sm:inline text-sm text-gray-400 w-28 text-left">Search peptides…</span>
        <span className="hidden md:inline text-[11px] font-medium text-gray-300 border border-gray-200 rounded px-1.5 py-0.5 ml-1">⌘K</span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] px-4"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)' }}
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{ border: '1px solid #e5e7eb' }}
          >
            {/* Search input row */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
              <Search size={18} className="text-gray-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setActiveIdx(-1); }}
                onKeyDown={handleKey}
                placeholder="Search peptides, goals, stacks…"
                className="flex-1 bg-transparent outline-none text-gray-900 text-base placeholder:text-gray-400"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600 p-0.5">
                  <X size={16} />
                </button>
              )}
              <button onClick={close} className="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 hover:border-gray-400">
                Esc
              </button>
            </div>

            {/* Results */}
            <div ref={listRef} className="max-h-[60vh] overflow-y-auto">
              {query && results.length === 0 && (
                <div className="px-5 py-8 text-center text-gray-400 text-sm">
                  No results for "<span className="font-medium text-gray-600">{query}</span>"
                </div>
              )}

              {results.length > 0 && (
                <div className="py-2">
                  {/* Product results */}
                  {results.filter((r) => r.type === 'product').length > 0 && (
                    <div>
                      <p className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Products</p>
                      {results.filter((r) => r.type === 'product').map((r, i) => (
                        <Link
                          key={r.href}
                          href={r.href}
                          onClick={close}
                          className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${activeIdx === i ? 'bg-yellow-50' : 'hover:bg-gray-50'}`}
                        >
                          {r.image ? (
                            <img
                              src={r.image}
                              alt={r.label}
                              className="w-9 h-9 object-contain rounded-lg shrink-0 bg-gray-50"
                              style={{ border: '1px solid #e5e7eb', padding: '3px' }}
                            />
                          ) : (
                            <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                              <FlaskConical size={16} className="text-gray-400" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm truncate">{r.label}</p>
                            <p className="text-xs text-gray-400 truncate">{r.sub}</p>
                          </div>
                          <ArrowRight size={13} className="text-gray-300 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Goal/page results */}
                  {results.filter((r) => r.type === 'goal').length > 0 && (
                    <div>
                      <p className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">Pages</p>
                      {results.filter((r) => r.type === 'goal').map((r, i) => {
                        const idx = results.filter((x) => x.type === 'product').length + i;
                        return (
                          <Link
                            key={r.href}
                            href={r.href}
                            onClick={close}
                            className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${activeIdx === idx ? 'bg-yellow-50' : 'hover:bg-gray-50'}`}
                          >
                            <div className="w-9 h-9 rounded-lg bg-yellow-50 flex items-center justify-center shrink-0" style={{ border: '1px solid #e5e7eb' }}>
                              <ArrowRight size={14} className="text-yellow-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-gray-900 text-sm truncate">{r.label}</p>
                              <p className="text-xs text-gray-400 truncate">{r.sub}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Empty state / quick links */}
              {!query && (
                <div className="px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">Quick Links</p>
                  <div className="flex flex-wrap gap-2">
                    {['BPC-157', 'Semaglutide', 'Ipamorelin', 'GHK-Cu', 'Tirzepatide', 'Epithalon', 'Healing', 'Weight Loss'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 bg-gray-100 hover:bg-yellow-100 hover:text-yellow-700 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2.5 border-t border-gray-100 flex items-center gap-4 text-[11px] text-gray-400">
              <span><kbd className="font-medium">↑↓</kbd> navigate</span>
              <span><kbd className="font-medium">↵</kbd> open</span>
              <span><kbd className="font-medium">Esc</kbd> close</span>
              <Link href="/products" onClick={close} className="ml-auto text-yellow-600 hover:text-yellow-700 font-medium">
                Browse all products →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
