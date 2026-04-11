import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, BookOpen, FlaskConical, AlertTriangle, ExternalLink, CheckCircle2 } from 'lucide-react';
import RelatedReading from '@/components/RelatedReading';
import CitationsSection from '@/components/CitationsSection';

export const metadata: Metadata = {
  title: 'About PeptidesClav | Evidence-Based Peptide Research',
  description:
    'PeptidesClav is an independent research publication producing evidence-based peptide protocols. Learn our methodology, research standards, and editorial independence.',
  alternates: { canonical: 'https://www.peptidesclav.com/about' },
  openGraph: {
    title: 'About PeptidesClav | Evidence-Based Peptide Research',
    description:
      'PeptidesClav is an independent research publication producing evidence-based peptide protocols. Learn our methodology, research standards, and editorial independence.',
    type: 'website',
    url: 'https://www.peptidesclav.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About PeptidesClav' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PeptidesClav',
  url: 'https://www.peptidesclav.com',
  description:
    'Evidence-based peptide protocol research covering BPC-157, TB-500, GLP-1 agonists, longevity peptides, and more.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.peptidesclav.com/products?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const methodologyPoints = [
  {
    icon: BookOpen,
    heading: 'Peer-Reviewed Sources Only',
    body: 'Every protocol claim is traced back to published research — PubMed-indexed studies, clinical trials, or systematic reviews. We cite our sources in-line so you can verify anything we write.',
  },
  {
    icon: FlaskConical,
    heading: 'Dosing Based on Human Data',
    body: 'Where human trials exist we use them. Where only animal data exists we say so explicitly, apply appropriate extrapolation caveats, and flag the uncertainty in plain language.',
  },
  {
    icon: ShieldCheck,
    heading: 'Regular Content Audits',
    body: 'Peptide research moves fast. We review existing guides when new studies are published and update dosing, contraindication, and stacking information accordingly.',
  },
  {
    icon: CheckCircle2,
    heading: 'No Hype, No Anecdote-as-Evidence',
    body: 'User anecdotes and community reports inform which topics we cover, but they never serve as evidence for efficacy claims. We keep speculation clearly labelled.',
  },
];

const supplierReasons = [
  'Third-party HPLC (High-Performance Liquid Chromatography) purity testing on every batch',
  'Mass spectrometry verification confirming molecular identity of each peptide',
  'Certificate of Analysis (COA) available for every product — no request needed',
  'Lyophilized powder shipped with desiccant for stability in transit',
  'US-based customer support with peptide-knowledgeable staff',
  'Consistent re-order experience — same lot quality over repeated purchases',
];

const aboutCitations = [
  {
    number: 1,
    authors: 'Sikiric P, et al.',
    title: 'Stable Gastric Pentadecapeptide BPC 157 as Basis of a New Type of Therapy',
    journal: 'Current Pharmaceutical Design, 24(18), 1990–2001',
    year: 2018,
    url: 'https://pubmed.ncbi.nlm.nih.gov/29773026/',
  },
  {
    number: 2,
    authors: 'Khavinson VKh, et al.',
    title: 'Peptide regulation of aging: the key to longevity',
    journal: 'Biogerontology, 21, 401–418',
    year: 2020,
    url: 'https://pubmed.ncbi.nlm.nih.gov/32270325/',
  },
  {
    number: 3,
    authors: 'Wilding JPH, et al.',
    title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity',
    journal: 'New England Journal of Medicine, 384(11), 989–1002',
    year: 2021,
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2032183',
  },
  {
    number: 4,
    authors: 'Pickart L, Margolina A.',
    title: 'GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration',
    journal: 'BioMed Research International, 2018',
    year: 2018,
    url: 'https://pubmed.ncbi.nlm.nih.gov/29750133/',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid-bg min-h-screen">
        {/* ── Hero ── */}
        <section className="pt-14 pb-12 sm:pt-28 sm:pb-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge badge-cyan mb-4 inline-block">Independent Research</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
              About{' '}
              <span className="gradient-text">PeptidesClav</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We&apos;re an independent research team with one goal: translate the peer-reviewed peptide science
              into clear, accurate, actionable protocols — without the hype, gatekeeping, or bro-science
              that dominates most corners of this space.
            </p>
          </div>
        </section>

        <div className="glow-divider" />

        {/* ── Mission ── */}
        <section className="py-10 sm:py-20 px-4" id="mission">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="badge">Mission</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Making Peptide Science <span className="gradient-text">Accessible</span>
            </h2>
            <div className="card p-6 sm:p-8 space-y-4 text-gray-300 leading-relaxed prose-dark">
              <p>
                Peptide research has accelerated dramatically over the last decade. Compounds like BPC-157,
                TB-500, Epithalon, and the GLP-1 agonist family are attracting serious academic attention —
                yet the publicly available information remains fragmented across paywalled journals, Reddit
                threads, and vendor marketing copy that confuses rather than informs.
              </p>
              <p>
                PeptidesClav exists to close that gap. We read the studies, extract the clinically relevant
                details, and write guides that a motivated non-specialist can actually use: accurate dosing
                windows, mechanistic explanations, stacking rationale, and honest uncertainty disclosures
                where the evidence is thin.
              </p>
              <p>
                We are <strong className="text-gray-900">not</strong> a medical practice and nothing on this
                site constitutes medical advice. Our role is to surface and explain the science — your
                physician&apos;s role is to help you apply it safely to your individual circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* ── Research Methodology ── */}
        <section className="py-10 sm:py-20 px-4 border-t border-[var(--border)]" id="methodology">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="badge">Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Our Research <span className="gradient-text">Methodology</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl">
              Every guide published on PeptidesClav follows the same evidence-evaluation framework.
              Here&apos;s exactly how we verify what we write.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {methodologyPoints.map(({ icon: Icon, heading, body }) => (
                <div key={heading} className="card p-6 flex gap-4">
                  <div className="shrink-0 mt-0.5">
                    <div className="w-10 h-10 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{heading}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card p-6 mt-6 text-gray-300 leading-relaxed prose-dark">
              <p className="text-sm">
                <strong className="text-gray-900">A note on study quality:</strong> We distinguish between
                in-vitro (cell culture), in-vivo (animal), and human trial data throughout our guides.
                Animal data informs hypotheses — it does not confirm human outcomes. Where the evidence
                hierarchy matters we call it out explicitly rather than burying the caveat in fine print.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why Our Supplier ── */}
        <section className="py-10 sm:py-20 px-4 border-t border-[var(--border)]" id="why-supplier">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="badge">Sourcing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Why We Recommend{' '}
              <span className="gradient-text">Our Supplier</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              We evaluated multiple vendors against a checklist of non-negotiable quality criteria before
              linking to any product. Our recommended supplier cleared every bar — here&apos;s the specific evidence.
            </p>
            <div className="card p-6 sm:p-8">
              <ul className="space-y-3">
                {supplierReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-[var(--border)]">
                <p className="text-sm text-gray-400">
                  Purity testing methodology matters because peptide synthesis regularly produces truncated
                  sequences, oxidised residues, and racemised amino acids that are biologically inert or
                  actively harmful. HPLC + mass spec together confirm both purity percentage and molecular
                  identity — neither alone is sufficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Transparency ── */}
        <section className="py-10 sm:py-20 px-4 border-t border-[var(--border)]" id="transparency">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <ExternalLink className="w-4 h-4 text-yellow-400" />
              <span className="badge">Transparency</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              How We Stay <span className="gradient-text">Independent</span>
            </h2>
            <div className="card p-6 sm:p-8 space-y-4 text-gray-300 leading-relaxed prose-dark border-yellow-900/40">
              <p>
                PeptidesClav is an independent research publication. Every protocol, dosing guide, and
                compound analysis on this site is produced from primary literature — PubMed studies,
                clinical trial data, and pharmacological research. No vendor pays for coverage or placement.
              </p>
              <p>
                Where we link to products, we have evaluated vendors against non-negotiable quality criteria:
                third-party HPLC purity testing, mass spectrometry identity confirmation, and per-batch
                Certificates of Analysis. A vendor that fails these criteria does not appear on this site,
                regardless of any commercial relationship.
              </p>
              <p>
                The research and guides on PeptidesClav are free and always will be. Our editorial
                positions are formed independently of any commercial relationship — if quality standards
                change, our recommendations change with them.
              </p>
            </div>
          </div>
        </section>

        {/* ── Disclaimer ── */}
        <section className="py-10 sm:py-20 px-4 border-t border-[var(--border)]" id="disclaimer">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              <span className="badge">Disclaimer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Medical <span className="gradient-text">Disclaimer</span>
            </h2>
            <div className="card p-6 sm:p-8 space-y-4 text-gray-300 leading-relaxed prose-dark">
              <p>
                The content published on PeptidesClav is for <strong className="text-gray-900">informational
                and educational purposes only</strong>. It does not constitute medical advice, diagnosis, or
                treatment. Always consult a qualified healthcare provider before starting any peptide
                protocol, especially if you have existing health conditions, take prescription medications,
                or are pregnant or nursing.
              </p>
              <p>
                Many peptides discussed on this site are research chemicals. Their legal status varies by
                jurisdiction. It is your responsibility to understand and comply with the laws applicable
                in your location.
              </p>
              <p>
                Individual results vary. The studies cited represent population-level findings — they do not
                guarantee any specific outcome for any individual user. We present the evidence as
                accurately as we can; we cannot predict how a given compound will affect you personally.
              </p>
            </div>
          </div>
        </section>

        <CitationsSection citations={aboutCitations} />

        {/* ── Related Reading ── */}
        <section className="py-10 sm:py-16 px-4 border-t border-[var(--border)]">
          <div className="max-w-4xl mx-auto">
            <RelatedReading pageKey="/about" />
          </div>
        </section>
      </div>
    </>
  );
}
