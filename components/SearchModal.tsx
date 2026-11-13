'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, FlaskConical } from 'lucide-react';
import { searchCatalog, suggestQuery, type SearchResult } from '@/lib/search';

const suggestions = [
  { label: 'Semaglutide', hint: 'AP-SEM-1' },
  { label: 'Tirzepatide', hint: 'AP-TRZ-2' },
  { label: 'Retatrutide', hint: 'AP-RTA-3' },
  { label: 'BPC-157', hint: 'Healing' },
  { label: 'Weight loss', hint: 'GLP-1' },
  { label: 'Sleep', hint: 'DSIP' },
];

function mark(text: string, query: string) {
  const needle = query.trim();
  if (needle.length < 2) return text;
  const at = text.toLowerCase().indexOf(needle.toLowerCase());
  if (at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <mark className="bg-transparent font-semibold text-gray-950">{text.slice(at, at + needle.length)}</mark>
      {text.slice(at + needle.length)}
    </>
  );
}

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(-1);
  const [shortcut, setShortcut] = useState('Ctrl K');
  const boxRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);

  const results = searchCatalog(query);
  const suggestion = query.trim().length >= 4 && results.length === 0 ? suggestQuery(query) : null;

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIdx(-1);
  }, []);

  const go = useCallback((href: string) => {
    close();
    window.location.href = href;
  }, [close]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
        const desktop = window.matchMedia('(min-width: 768px)').matches;
        setTimeout(() => (desktop ? desktopRef : mobileRef).current?.focus(), 30);
      }
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close]);

  useEffect(() => {
    setShortcut(/Mac|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl K');
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!boxRef.current?.contains(event.target as Node)) close();
    };
    document.addEventListener('mousedown', onPointer);
    return () => document.removeEventListener('mousedown', onPointer);
  }, [open, close]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const pick = results[activeIdx] ?? results[0];
      if (pick) go(pick.href);
    }
  };

  const panel = open && (
    <div className="fixed inset-x-3 top-20 z-[200] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl md:absolute md:inset-x-auto md:right-0 md:top-full md:mt-2 md:w-[28rem]">
      <div className="flex items-center gap-2 border-b border-gray-200 px-3 md:hidden">
        <Search size={15} className="shrink-0 text-gray-400" />
        <input
          ref={mobileRef}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setActiveIdx(-1); }}
          onKeyDown={onKey}
          placeholder="Search peptides, codes, goals"
          className="h-12 flex-1 bg-transparent text-[15px] text-gray-900 outline-none placeholder:text-gray-400"
          aria-label="Search catalog"
        />
        <button onClick={close} className="text-gray-400" aria-label="Close search"><X size={16} /></button>
      </div>

      <div className="max-h-[60vh] overflow-y-auto py-2">
        {query && results.length === 0 && (
          <div className="px-4 py-8 text-center text-sm text-gray-500">
            <p>No matches for <span className="font-medium text-gray-900">{query}</span></p>
            {suggestion && (
              <button
                onClick={() => { setQuery(suggestion); setActiveIdx(-1); }}
                className="mt-3 text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4"
              >
                Did you mean {suggestion}?
              </button>
            )}
          </div>
        )}

        {results.length > 0 && (
          <ResultList results={results} query={query} activeIdx={activeIdx} onPick={close} />
        )}

        {!query && (
          <div className="px-2 pb-1">
            <p className="px-2 pb-1 pt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">Try</p>
            <div className="grid grid-cols-2">
              {suggestions.map((term) => (
                <button
                  key={term.label}
                  onClick={() => { setQuery(term.label); setActiveIdx(-1); }}
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
        <span className="hidden sm:inline"><kbd className="rounded border border-gray-200 bg-white px-1 font-medium text-gray-500">↑↓</kbd> move</span>
        <span className="hidden sm:inline"><kbd className="rounded border border-gray-200 bg-white px-1 font-medium text-gray-500">Enter</kbd> open best match</span>
        <Link href="/products" onClick={close} className="ml-auto font-medium text-gray-700 hover:text-gray-900">
          View catalog
        </Link>
      </div>
    </div>
  );

  return (
    <div ref={boxRef} className="relative">
      <label className="hidden h-10 w-[240px] items-center gap-2 rounded-md border border-gray-200 bg-gray-50 pl-3 pr-2 text-gray-500 transition-colors focus-within:border-gray-300 focus-within:bg-white md:flex lg:w-[280px]">
        <Search size={15} className="shrink-0 text-gray-400" />
        <input
          ref={desktopRef}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setActiveIdx(-1); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          placeholder="Search peptides"
          className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          aria-label="Search catalog"
          aria-expanded={open}
          role="combobox"
          aria-autocomplete="list"
        />
        {query ? (
          <button type="button" onClick={() => { setQuery(''); desktopRef.current?.focus(); }} className="text-gray-400 hover:text-gray-700" aria-label="Clear search">
            <X size={14} />
          </button>
        ) : (
          <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-gray-400">{shortcut}</kbd>
        )}
      </label>

      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setTimeout(() => mobileRef.current?.focus(), 30);
        }}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-600 transition-colors hover:bg-gray-50 md:hidden"
        aria-label="Search catalog"
      >
        <Search size={16} />
      </button>
      {panel}
    </div>
  );
}

function ResultList({
  results,
  query,
  activeIdx,
  onPick,
}: {
  results: SearchResult[];
  query: string;
  activeIdx: number;
  onPick: () => void;
}) {
  const groups: { title: string; type: SearchResult['type'] }[] = [
    { title: 'Products', type: 'product' },
    { title: 'Stacks', type: 'stack' },
    { title: 'Guides', type: 'goal' },
  ];

  return (
    <div>
      {groups.map((group) => {
        const rows = results.filter((result) => result.type === group.type);
        if (rows.length === 0) return null;
        return (
          <div key={group.type}>
            <p className="px-4 pb-1 pt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">{group.title}</p>
            {rows.map((result) => {
              const index = results.findIndex((item) => item.href === result.href && item.type === result.type);
              return (
                  <Link
                    key={result.href}
                    href={result.href}
                    onClick={(event) => {
                      event.preventDefault();
                      onPick();
                      window.location.href = result.href;
                    }}
                  className={`mx-2 flex items-center gap-3 rounded-md px-2 py-2 transition-colors ${activeIdx === index ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                >
                  {result.image ? (
                    <img src={result.image} alt="" className="h-20 w-14 shrink-0 rounded-md bg-[#f3f4f6] object-contain" />
                  ) : (
                    <div className="flex h-20 w-14 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white">
                      {result.type === 'product' || result.type === 'stack'
                        ? <FlaskConical size={15} className="text-gray-400" />
                        : <ArrowRight size={14} className="text-gray-400" />}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900">{mark(result.label, query)}</p>
                    <p className="truncate text-xs text-gray-500">{result.sub}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
