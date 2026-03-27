import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { internalLinks } from '@/lib/internalLinks';

interface RelatedReadingProps {
  pageKey: string;
}

export default function RelatedReading({ pageKey }: RelatedReadingProps) {
  const links = internalLinks[pageKey];
  if (!links || links.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-5">
        Related Reading
      </p>
      <ul className="grid sm:grid-cols-2 gap-3">
        {links.map((link) => {
          const isExternal = link.href.startsWith('http');
          const className =
            'flex items-center gap-2 text-sm text-zinc-400 hover:text-violet-400 transition-colors group';
          const icon = (
            <ArrowRight
              size={13}
              className="shrink-0 text-violet-600 group-hover:text-violet-400 transition-colors"
            />
          );
          return (
            <li key={link.href}>
              {isExternal ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {icon}
                  {link.anchor}
                </a>
              ) : (
                <Link href={link.href} className={className}>
                  {icon}
                  {link.anchor}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
