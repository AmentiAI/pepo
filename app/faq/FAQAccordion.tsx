'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';

const faqGroups = [
  {
    group: 'Safety & Side Effects',
    faqs: [
      {
        q: 'Are peptides safe to use?',
        a: 'The most commonly used peptides — BPC-157, TB-500, Ipamorelin, CJC-1295, GHK-Cu — have strong safety records across decades of widespread use. Serious adverse events are extremely rare at therapeutic doses. Safety depends heavily on source quality, dose accuracy, and individual health factors. Always purchase from suppliers with third-party certificates of analysis.',
      },
      {
        q: 'What are the most common side effects?',
        a: 'Side effects vary by peptide. The most commonly reported issues are mild and temporary: water retention with GH peptides (usually resolves within a few weeks), mild injection site redness, and temporary hunger changes. Ipamorelin was specifically developed to avoid the cortisol and prolactin bleed of older GHRPs — it remains one of the cleanest peptides available. Serious allergic reactions are rare but possible with any compound.',
      },
      {
        q: 'Can peptides interfere with my existing medications?',
        a: "Drug interactions with peptides are generally minimal due to their targeted, receptor-specific mechanisms. GH peptides can modestly affect insulin sensitivity, which is relevant if you take diabetes medications. BPC-157 has been shown to modulate dopamine and serotonin systems, which could theoretically interact with psychiatric medications at high doses.",
      },
      {
        q: 'Are peptides legal?',
        a: "Peptides are available for purchase as health and wellness compounds in most countries. Legal status varies by jurisdiction — always verify regulations where you live before purchasing. In the US, peptides are widely available and sold by established suppliers. In Australia and some other countries, certain peptides may be regulated differently.",
      },
    ],
  },
  {
    group: 'Dosing & Protocols',
    faqs: [
      {
        q: 'How do I calculate my dose from a reconstituted peptide vial?',
        a: 'The formula is straightforward: (Amount of BW added in mL) divided by (Peptide amount in mcg) = mL per mcg. Example: if you have a 5mg (5,000mcg) vial and add 2mL of bacteriostatic water, each 0.1mL (10 units on an insulin syringe) = 250mcg. Always calculate this before drawing your dose, not while holding the syringe.',
      },
      {
        q: 'How often should I inject?',
        a: 'This depends on the specific peptide and protocol. BPC-157 is typically injected 1–2x daily. GH peptides (Ipamorelin/CJC) once before sleep, optionally a second time pre-workout. TB-500 is 2x per week. Epithalon is used in 10–20 day burst protocols 1–2x per year. Always follow the specific dosing schedule in the protocol guide for your chosen peptide.',
      },
      {
        q: 'What is a loading phase and do I need one?',
        a: 'A loading phase is an initial higher-dose period designed to rapidly saturate receptors or systemic pathways. TB-500 commonly uses a 2-week loading phase (7.5–10mg/week) before dropping to maintenance (5mg/week). For most other peptides, loading phases are optional — you can simply start at the maintenance dose, though results may take slightly longer to appear.',
      },
      {
        q: 'How long should I run a peptide cycle?',
        a: 'Minimum meaningful cycles are typically 8–12 weeks for healing peptides and 12–24 weeks for GH peptides. Shorter cycles often produce initial effects but miss the compounding benefits that develop over time. Anti-aging peptides like GHK-Cu can be run continuously for skin applications, while Epithalon is best as annual burst cycles. Follow the cycle recommendations in each product protocol.',
      },
    ],
  },
  {
    group: 'Injection & Storage',
    faqs: [
      {
        q: 'Does subcutaneous injection hurt?',
        a: 'Most people are surprised by how painless SubQ injection is. The needles used (27–31 gauge insulin syringes) are tiny — far smaller than the needles used in blood draws or vaccinations. The most common description from first-timers is "I barely felt it." Any discomfort usually comes from injecting too quickly rather than the needle itself.',
      },
      {
        q: 'Where are the best injection sites?',
        a: 'The three most common SubQ injection sites are: (1) lower abdomen, 1–2 inches from the navel — the easiest to access and least sensitive; (2) outer thigh — good alternative when abdomen is sore; (3) love handle / flank area. Rotate through all sites to prevent lipodystrophy (fat loss at a single repeated injection site).',
      },
      {
        q: 'How should I store my peptides?',
        a: "Lyophilized (powder) peptides can be stored at room temperature for short periods (weeks) or in the freezer for up to 1–2 years. Once reconstituted with bacteriostatic water, they must be kept refrigerated (2–8°C) and are stable for 4–6 weeks. Do not freeze reconstituted peptides — the ice crystals damage the peptide structure. Keep vials away from light.",
      },
      {
        q: 'How much bacteriostatic water should I add to reconstitute?',
        a: 'There is no single correct answer — it depends on your target dose and the volume you want to inject. Common practice is to add 1–2mL of bacteriostatic water to create a concentration that puts a useful dose in a 0.05–0.15mL volume. For a 5mg vial targeting 250mcg doses, 2mL gives you exactly 0.1mL per 250mcg dose — clean and easy to measure.',
      },
    ],
  },
  {
    group: 'Stacking & Goals',
    faqs: [
      {
        q: 'Can I stack multiple peptides together?',
        a: "Yes — many peptides work synergistically and are commonly stacked. The BPC-157 + TB-500 healing stack and the Ipamorelin + CJC-1295 GH stack are classic combinations. That said, always introduce one new peptide at a time so you can identify any individual responses before adding complexity. Running four new peptides simultaneously makes it impossible to troubleshoot.",
      },
      {
        q: 'Which peptide should I start with as a complete beginner?',
        a: "The best first peptide depends entirely on your primary goal. For injury recovery: BPC-157. For body composition and sleep: Ipamorelin + CJC-1295. For longevity and skin: GHK-Cu topical. For weight loss: Semaglutide. BPC-157 and Ipamorelin/CJC are the most popular starting points due to their strong safety profiles and immediately noticeable effects.",
      },
      {
        q: 'Can peptides be combined with TRT or other hormone therapy?',
        a: 'Generally yes. GH peptides are commonly used alongside TRT (testosterone replacement therapy) and are considered complementary — GH optimization and testosterone optimization address different axes. BPC-157 has no known interactions with testosterone. GH peptides and TRT are among the most popular concurrent protocols in the performance and longevity communities.',
      },
      {
        q: 'Are peptides effective for women?',
        a: "Absolutely. Most peptides work identically in men and women — BPC-157, TB-500, GHK-Cu, Epithalon, GH peptides, and cognitive peptides are all used widely by women with the same protocols. GH peptide dosing may be slightly lower for women due to higher natural GH sensitivity. GHK-Cu and SNAP-8 are particularly popular among women for skin and anti-aging applications.",
      },
    ],
  },
  {
    group: 'Sourcing & Purchasing',
    faqs: [
      {
        q: 'How do I know if my peptides are high quality?',
        a: "Look for suppliers that publish full CoAs for every product batch — HPLC purity reports and mass spectrometry identity confirmation together. These prove what is actually in the vial. Avoid any supplier that cannot provide these.",
      },
      {
        q: 'Why do peptide prices vary so much between suppliers?',
        a: "Price variation in the peptide market correlates closely with purity and quality control. Cheap peptides often have low purity (<95%), incorrect concentrations, or worse — contamination. Premium suppliers maintain 98%+ purity with independent verification. When you're injecting a compound, cutting corners on quality is not worth the savings.",
      },
    ],
  },
];

export const totalFAQCount = faqGroups.reduce((acc, g) => acc + g.faqs.length, 0);

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <>
      {/* FAQ accordion */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          {faqGroups.map((group) => (
            <div key={group.group}>
              <div className="flex items-center gap-3 mb-5">
                <HelpCircle size={18} className="text-yellow-600" />
                <h2 className="text-lg font-bold text-gray-900">{group.group}</h2>
                <span className="badge text-[10px]">{group.faqs.length}</span>
              </div>

              <div className="space-y-2">
                {group.faqs.map((faq, i) => {
                  const key = `${group.group}-${i}`;
                  const isOpen = openItems.has(key);
                  return (
                    <div
                      key={key}
                      className="rounded-xl border overflow-hidden transition-colors"
                      style={{
                        background: 'var(--bg-card)',
                        borderColor: isOpen ? 'rgba(234,179,8,0.4)' : 'var(--border)',
                      }}
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-gray-900 text-sm leading-snug pr-2">
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`shrink-0 text-gray-500 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-yellow-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <div
                            className="pt-4 border-t"
                            style={{ borderColor: 'var(--border)' }}
                          >
                            <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="glow-divider mb-10" />
          <div className="grid sm:grid-cols-2 gap-5">
            <div
              className="p-6 rounded-2xl border"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
            >
              <MessageSquare size={22} className="text-yellow-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                Use the AI chat assistant (bottom right) for instant answers about protocols,
                dosing, and stacking. It is trained on our complete product library.
              </p>
              <Link href="/contact" className="btn-secondary py-2 px-4 text-sm">
                Contact Page
                <ArrowRight size={14} />
              </Link>
            </div>
            <div
              className="p-6 rounded-2xl border"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
            >
              <HelpCircle size={22} className="text-yellow-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">New to peptides?</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                Read the complete beginner guide — everything from what peptides are to
                your first injection and choosing the right starting protocol.
              </p>
              <Link href="/guide" className="btn-primary py-2 px-4 text-sm">
                Read the Guide
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
