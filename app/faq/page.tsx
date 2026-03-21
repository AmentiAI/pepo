import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion, { totalFAQCount } from './FAQAccordion';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Peptide FAQ: Safety, Dosing, Injection & Stacking Guide',
  description:
    'Answers to the most common peptide questions — safety, dosing, injection technique, storage, stacking, legality, and sourcing. 15+ Q&As for beginners and advanced users.',
  keywords:
    'peptide FAQ, peptide questions, how to use peptides, peptide safety, peptide dosing, inject peptides',
  openGraph: {
    title: 'Frequently Asked Questions',
    description:
      'Comprehensive answers to peptide safety, dosing, injection, stacking, and sourcing questions.',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero — server rendered */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="badge mb-5 inline-block">Support</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Frequently</span>
              <br />
              <span className="gradient-text">Asked Questions</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-4">
              {totalFAQCount} questions covering safety, dosing, injection, storage, stacking,
              sourcing, and everything else you need to use peptides confidently.
            </p>
            <p className="text-sm text-zinc-600">
              {"Can't find your answer? "}
              <Link
                href="/contact"
                className="text-violet-400 hover:text-violet-300 underline underline-offset-2"
              >
                Contact us
              </Link>
              {' or use the AI chat assistant in the bottom right corner.'}
            </p>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Client accordion + CTA */}
      <FAQAccordion />

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/faq" />
    </div>
  );
}
