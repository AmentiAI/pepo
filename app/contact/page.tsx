import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquare, Mail, ArrowRight, HelpCircle, BookOpen, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peptide Protocol Help & Business Inquiries | Contact',
  description:
    'Contact PeptidesClav for protocol questions, business inquiries, or partnerships. Use the AI chat for instant peptide protocol help — available 24/7.',
  keywords: 'contact peptidesclav, peptide protocol help, peptide questions, peptide business inquiry',
  alternates: { canonical: 'https://www.peptidesclav.com/contact' },
  openGraph: {
    title: 'Peptide Protocol Help & Business Inquiries | Contact',
    description: 'Get in touch with PeptidesClav for protocol questions and business inquiries.',
    type: 'website',
    url: 'https://www.peptidesclav.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact PeptidesClav' }],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/3 w-96 h-96 bg-gray-900/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="badge mb-5 inline-block">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-gray-900">Contact </span>
              <span className="gradient-text">PeptidesClav</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Protocol questions, business inquiries, or partnership opportunities —
              here's how to reach the right place for your needs.
            </p>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Contact cards */}
      <section className="py-10 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-6">

          {/* AI Chat */}
          <div
            className="card p-7"
            style={{ borderColor: 'rgba(234,179,8,0.35)' }}
          >
            <div className="w-12 h-12 rounded-xl bg-gray-900/15 border border-yellow-600/25 flex items-center justify-center mb-5">
              <MessageSquare size={22} className="text-yellow-600" />
            </div>
            <div className="badge badge-cyan mb-3 inline-block text-xs">Fastest Response</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Protocol &amp; Product Questions
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              For questions about peptide protocols, dosing, stacking, and product selection —
              use the <strong className="text-gray-900">AI chat assistant</strong> in the bottom
              right corner of any page. It's trained on our complete protocol library and can
              answer detailed questions about timing, reconstitution, combinations, and more —
              instantly, 24/7.
            </p>
            <div
              className="flex items-start gap-3 p-4 rounded-xl mb-5"
              style={{ background: 'rgba(234,179,8,0.07)', border: '1px solid rgba(234,179,8,0.2)' }}
            >
              <MessageSquare size={16} className="text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                Look for the chat bubble in the <strong className="text-gray-900">bottom right</strong> corner
                of every page on PeptidesClav.
              </p>
            </div>
            <p className="text-xs text-gray-800">
              Questions the AI can answer: dosing, protocols, stacking, timing, storage,
              reconstitution, side effects, and product comparisons.
            </p>
          </div>

          {/* Business email */}
          <div className="card p-7">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center mb-5">
              <Mail size={22} className="text-yellow-600" />
            </div>
            <span className="badge mb-3 inline-block text-xs">Business Only</span>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Business &amp; Partnership Inquiries
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              For business inquiries, partnership collaborations, content collaborations, or any
              other commercial communications, email us directly at:
            </p>
            <a
              href="mailto:info@peptidesclav.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{
                background: 'rgba(245,158,11,0.08)',
                border: '1px solid rgba(245,158,11,0.25)',
                color: '#67e8f9',
              }}
            >
              <Mail size={16} />
              info@peptidesclav.com
            </a>
            <p className="text-xs text-gray-800 mt-5">
              Please allow 2–3 business days for a response to business inquiries. We review
              all partnership proposals — please include relevant details in your initial email.
            </p>
          </div>
        </div>

        {/* Helpful links */}
        <div className="mt-10">
          <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Self-Service Resources
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                icon: <HelpCircle size={16} className="text-yellow-600" />,
                label: 'FAQ',
                desc: '15+ questions answered',
                href: '/faq',
              },
              {
                icon: <BookOpen size={16} className="text-yellow-600" />,
                label: "Beginner's Guide",
                desc: 'Start here if new to peptides',
                href: '/guide',
              },
              {
                icon: <Layers size={16} className="text-yellow-600" />,
                label: 'Stacks',
                desc: 'Pre-built protocol guides',
                href: '/stacks',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 rounded-xl border transition-colors hover:border-yellow-600/40 hover:bg-gray-900/5"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {link.icon}
                <div>
                  <p className="text-sm font-semibold text-gray-900">{link.label}</p>
                  <p className="text-xs text-gray-800">{link.desc}</p>
                </div>
                <ArrowRight size={14} className="text-gray-800 ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
