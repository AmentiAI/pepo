'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import SearchModal from './SearchModal';

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Stacks', href: '/stacks' },
  {
    label: 'Goals',
    href: '#',
    children: [
      { label: 'Healing & Recovery', href: '/healing' },
      { label: 'Growth Hormone', href: '/growth-hormone' },
      { label: 'Body Composition', href: '/body-composition' },
      { label: 'Anti-Aging', href: '/anti-aging' },
      { label: 'Weight Loss', href: '/best-peptide-for-weight-loss' },
      { label: 'Cognitive Enhancement', href: '/goals/cognitive-enhancement' },
      { label: 'Looksmaxxing', href: '/looksmaxxing' },
    ],
  },
  { label: 'Guide', href: '/guide' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDropdown(null); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24">
        {/* Brand text logo */}
        <Link href="/" className="flex items-center gap-0 group shrink-0">
          <span className="font-black text-2xl sm:text-3xl tracking-tight leading-none">
            <span className="text-gray-900">Peptides</span>
            <span className="gradient-text">Clav</span>
            <span className="text-[10px] font-semibold text-gray-800 ml-1.5 align-middle">.com</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2.5 text-[0.95rem] font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100">
                  {link.label}
                  <ChevronDown size={15} className={`transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                </button>
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 pt-1 w-56">
                    <div className="bg-white border border-gray-200 rounded-xl p-1.5 shadow-lg shadow-black/8">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 text-[0.95rem] font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'text-gray-900 bg-yellow-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Search + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <SearchModal />
          <Link href="/products" className="btn-primary py-3 px-6 text-[0.95rem]">
            Shop Peptides
          </Link>
        </div>

        {/* Mobile: search + toggle */}
        <div className="flex md:hidden items-center gap-2">
          <SearchModal />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-1.5 text-xs font-semibold text-gray-800 uppercase tracking-wider mt-2">{link.label}</p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-3 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors rounded-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 text-base text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link href="/products" className="btn-primary w-full justify-center text-base py-3.5">
                Shop All Peptides
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
