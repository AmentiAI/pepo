import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion, { totalFAQCount } from './FAQAccordion';
import RelatedReading from '@/components/RelatedReading';

export const metadata: Metadata = {
  title: 'Peptide FAQ: Safety, Dosing, Injection & Stacking Guide',
  description:
    'Answers to common peptide questions — safety, dosing, injection, storage, stacking & sourcing. 15+ Q&As for beginners and advanced users.',
  keywords:
    'peptide FAQ, peptide questions, how to use peptides, peptide safety, peptide dosing, inject peptides, peptide storage, peptide stacking',
  alternates: { canonical: 'https://www.peptidesclav.com/faq' },
  openGraph: {
    title: 'Peptide FAQ: Safety, Dosing, Injection & Stacking Guide',
    description:
      'Comprehensive answers to peptide safety, dosing, injection, stacking, and sourcing questions.',
    type: 'website',
    url: 'https://www.peptidesclav.com/faq',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Peptide FAQ — Safety, Dosing & Injection Guide' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are peptides and are they safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peptides are short-chain amino acid sequences that signal specific biological responses. Most are derived from naturally occurring proteins in the human body, giving them favorable safety profiles compared to pharmacological alternatives.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I choose between BPC-157 and TB-500 for healing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BPC-157 excels at localized tissue repair — tendons, ligaments, gut lining, and neurological injuries. TB-500 works systemically, reducing whole-body inflammation and restoring flexibility. Most users combine both for synergistic results: BPC-157 at 250–500mcg twice daily and TB-500 at 5mg twice weekly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best peptide for fat loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective fat loss combination is Semaglutide (14.9% average weight loss in STEP-1), Tirzepatide (up to 22.5% weight loss), and Ipamorelin/CJC-1295 for GH-mediated lean mass preservation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which peptide is best for anti-aging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Longevity Elite Stack combines Epithalon (telomerase activation, 27–36% mortality reduction in 15-year studies), GHK-Cu (gene expression reset, collagen synthesis), and NAD+ (mitochondrial restoration).',
      },
    },
    {
      '@type': 'Question',
      name: 'How are peptides administered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most peptides are injected subcutaneously using 29–31 gauge insulin syringes. Reconstitution with bacteriostatic water is required for lyophilized powders. The process takes under 30 seconds and is essentially painless.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should I buy peptides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PeptidesClav exclusively recommends a US-based supplier with HPLC testing, mass spectrometry analysis, and certificates of analysis for every batch.',
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero — server rendered */}
      <section className="relative pt-14 pb-12 sm:pt-28 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-gray-900/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="badge mb-5 inline-block">Support</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">Frequently</span>
              <br />
              <span className="gradient-text">Asked Questions</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">
              {totalFAQCount} questions covering safety, dosing, injection, storage, stacking,
              sourcing, and everything else you need to use peptides confidently.
            </p>
            <p className="text-sm text-gray-400">
              {"Can't find your answer? "}
              <Link
                href="/contact"
                className="text-yellow-600 hover:text-yellow-500 underline underline-offset-2"
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
