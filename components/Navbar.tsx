'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Stacks', href: '/stacks' },
  {
    label: 'Goals',
    href: '#',
    children: [
      { label: 'Healing & Recovery', href: '/healing' },
      { label: 'Body Composition', href: '/body-composition' },
      { label: 'Anti-Aging', href: '/anti-aging' },
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
          ? 'bg-[#08080f]/97 backdrop-blur-md border-b border-[#1e1e35] shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24">
        {/* Brand text logo */}
        <Link href="/" className="flex items-center gap-0 group shrink-0">
          <span className="font-black text-2xl sm:text-3xl tracking-tight leading-none">
            <span className="text-white">Peptides</span>
            <span className="gradient-text">Clav</span>
            <span className="text-[10px] font-semibold text-zinc-500 ml-1.5 align-middle">.com</span>
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
                <button className="flex items-center gap-1.5 px-4 py-2.5 text-[0.95rem] font-medium text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  {link.label}
                  <ChevronDown size={15} className={`transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                </button>
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 pt-1 w-56">
                    <div className="bg-[#0f0f1a] border border-[#1e1e35] rounded-xl p-1.5 shadow-xl shadow-black/50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-violet-500/10 rounded-lg transition-colors"
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
                    ? 'text-white bg-violet-500/15'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/products" className="btn-primary py-3 px-6 text-[0.95rem]">
            Shop Peptides
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f1a] border-t border-[#1e1e35]">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-2">{link.label}</p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-3 text-base text-zinc-400 hover:text-white transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 text-base text-zinc-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
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
