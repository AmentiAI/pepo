import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const footerLinks = {
  Products: [
    { label: 'All Peptides', href: '/products' },
    { label: 'Healing Peptides', href: '/healing' },
    { label: 'GH Peptides', href: '/products?category=Growth+Hormone' },
    { label: 'Anti-Aging', href: '/anti-aging' },
    { label: 'Fat Loss', href: '/body-composition' },
    { label: 'Cognitive', href: '/products?category=Cognitive+%26+Mental+Health' },
  ],
  Protocols: [
    { label: 'Peptide Stacks', href: '/stacks' },
    { label: 'Beginner Guide', href: '/guide' },
    { label: 'Dosing FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
  ],
  Company: [
    { label: 'Contact', href: '/contact' },
    { label: 'Apollo Peptides', href: '/go/shop', external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e35] bg-[#08080f] mt-12 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="PeptidesClav" width={52} height={52} className="rounded-xl object-contain" />
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Evidence-based peptide protocols for healing, performance, body composition, and longevity. All products sourced from Apollo Peptides Sciences.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white mb-4">{section}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-violet-400 transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-divider mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} PeptidesClav. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Affiliate disclosure: Links to Apollo Peptides contain affiliate tracking.
          </p>
        </div>

        <p className="text-center text-[11px] text-zinc-700 mt-4 leading-relaxed">
          PeptidesClav is an independent educational resource and is not affiliated with, endorsed by,
          or associated in any way with the content creator known as &ldquo;Clavicular.&rdquo;
        </p>
      </div>
    </footer>
  );
}
