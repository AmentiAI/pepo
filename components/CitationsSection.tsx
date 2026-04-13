import StudyCitation from './StudyCitation';

interface Citation {
  number: number;
  authors: string;
  title: string;
  journal: string;
  year: number;
  url: string;
}

interface CitationsSectionProps {
  citations: Citation[];
}

export default function CitationsSection({ citations }: CitationsSectionProps) {
  return (
    <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl">
        <h2 className="text-lg font-bold text-gray-900 mb-2">References & Research</h2>
        <p className="text-xs text-gray-700 mb-6">
          All clinical claims on this page are traced to published, peer-reviewed research.
        </p>
        <div className="rounded-xl border p-5" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          {citations.map((c) => (
            <StudyCitation key={c.number} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
