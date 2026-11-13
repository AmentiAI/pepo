'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); setDropdown(null); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image
            src="/logo.png"
            alt="Shark Tides"
            width={72}
            height={72}
            priority
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />
          <span className="font-black text-lg sm:text-xl tracking-tight leading-none text-white">
            Shark Tides
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
                <button className="flex items-center gap-1.5 px-4 py-2.5 text-[0.95rem] font-medium text-white/75 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                  {link.label}
                  <ChevronDown size={15} className={`transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                </button>
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 pt-1 w-56">
                    <div className="bg-black border border-white/10 rounded-xl p-1.5 shadow-lg shadow-black/40">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
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
                    ? 'text-white bg-white/10'
                    : 'text-white/75 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <SearchModal />
          <Link href="/products" className="hidden md:inline-flex items-center rounded-xl bg-white py-3 px-6 text-[0.95rem] font-bold text-black hover:bg-gray-100">
            Shop Peptides
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-1.5 text-xs font-semibold text-white/50 uppercase tracking-wider mt-2">{link.label}</p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-3 text-base text-white/75 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 text-base text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link href="/products" className="inline-flex w-full justify-center rounded-xl bg-white py-3.5 text-base font-bold text-black">
                Shop All Peptides
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
