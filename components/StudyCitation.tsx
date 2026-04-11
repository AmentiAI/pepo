import { ExternalLink } from 'lucide-react';

interface StudyCitationProps {
  number: number;
  authors: string;
  title: string;
  journal: string;
  year: number;
  url: string;
}

export default function StudyCitation({ number, authors, title, journal, year, url }: StudyCitationProps) {
  return (
    <div className="flex items-start gap-3 py-3 border-b last:border-0" style={{ borderColor: 'var(--border)' }}>
      <span className="text-xs font-bold text-yellow-600 mt-0.5 shrink-0 w-5">[{number}]</span>
      <div className="min-w-0">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-700 hover:text-yellow-600 transition-colors leading-relaxed inline-flex items-start gap-1.5 group"
        >
          <span>{authors} ({year}). <em>{title}</em>. <span className="text-gray-500">{journal}</span></span>
          <ExternalLink size={12} className="mt-1 shrink-0 text-gray-400 group-hover:text-yellow-600 transition-colors" />
        </a>
      </div>
    </div>
  );
}
