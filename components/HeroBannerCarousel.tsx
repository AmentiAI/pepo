'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const IMG = '/phio'; // proxied through our domain

const slides = [
  {
    type: 'logo' as const,
    headline: 'Expert Peptide Protocols',
    sub: 'BPC-157, Semaglutide, Ipamorelin & 18 more — evidence-based guides for healing, fat loss & anti-aging.',
    cta: { label: 'Browse All Peptides', href: '/products' },
    ctaSecondary: { label: 'View Stacks', href: '/stacks' },
  },
  {
    type: 'product' as const,
    image: `${IMG}/bpc-157-10mg.png`,
    name: 'BPC-157',
    badge: '#1 Healing Peptide',
    headline: 'Accelerate Healing — Tendon, Gut & Muscle',
    sub: 'The gold-standard tissue repair peptide. 2× faster healing from injuries that have lingered for months.',
    cta: { label: 'Full Protocol Guide', href: '/products/bpc-157' },
    ctaSecondary: { label: 'Get BPC-157', href: '/out/bpc-157' },
    accentColor: '#eab308',
  },
  {
    type: 'product' as const,
    image: `${IMG}/semaglutide-6mg.png`,
    name: 'Semaglutide',
    badge: 'GLP-1 Fat Loss',
    headline: '14.9% Average Body Weight Reduction',
    sub: 'The most clinically validated fat loss peptide — STEP-1 trial proven over 68 weeks.',
    cta: { label: 'Full Protocol Guide', href: '/products/semaglutide-10mg' },
    ctaSecondary: { label: 'Get Semaglutide', href: '/out/semaglutide-10mg' },
    accentColor: '#f59e0b',
  },
  {
    type: 'product' as const,
    image: `${IMG}/ipamorelin-cjc-1295-blend-10mg.png`,
    name: 'Ipamorelin / CJC-1295',
    badge: 'GH Optimization',
    headline: '3–5× Natural Growth Hormone Pulse',
    sub: 'Restore the GH profile of a healthy 25-year-old — lean mass, fat loss, deeper sleep.',
    cta: { label: 'Full Protocol Guide', href: '/products/ipamorelin-cjc' },
    ctaSecondary: { label: 'Get CJC-1295', href: '/out/ipamorelin-cjc' },
    accentColor: '#eab308',
  },
  {
    type: 'product' as const,
    image: `${IMG}/epithalon-50mg.png`,
    name: 'Epithalon',
    badge: 'Longevity',
    headline: '27–36% Mortality Reduction in 15-Year Studies',
    sub: 'Activates telomerase, extends telomere length, and resets the aging clock at the cellular level.',
    cta: { label: 'Full Protocol Guide', href: '/products/epithalon' },
    ctaSecondary: { label: 'Get Epithalon', href: '/out/epithalon' },
    accentColor: '#f59e0b',
  },
  {
    type: 'product' as const,
    image: `${IMG}/tirzepatide-15mg.png`,
    name: 'Tirzepatide',
    badge: 'Dual GIP/GLP-1',
    headline: 'Up to 22.5% Weight Loss — Highest Ever Recorded',
    sub: 'Dual agonist targeting both GIP and GLP-1 receptors for unprecedented fat loss results.',
    cta: { label: 'Full Protocol Guide', href: '/products/tirzepatide-15mg' },
    ctaSecondary: { label: 'Get Tirzepatide', href: '/out/tirzepatide-15mg' },
    accentColor: '#eab308',
  },
];

export default function HeroBannerCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{ minHeight: '520px' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(234,179,8,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Slide content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {slide.type === 'logo' ? (
          /* ── Logo slide ── */
          <div className="flex flex-col items-center text-center gap-6">
            <Image
              src="/logo.png"
              alt="PeptidesClav"
              width={120}
              height={120}
              className="rounded-2xl shadow-2xl shadow-yellow-200/60"
              priority
            />
            <div>
              <div className="inline-flex items-center gap-2 badge mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                Evidence-Based Peptide Protocols
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                {slide.headline}
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">{slide.sub}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={slide.cta.href} className="btn-primary text-base px-7 py-3.5">
                  {slide.cta.label} <ArrowRight size={17} />
                </Link>
                <Link href={slide.ctaSecondary.href} className="btn-secondary text-base px-7 py-3.5">
                  {slide.ctaSecondary.label}
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* ── Product slide ── */
          <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
            {/* Product image */}
            <div
              className="shrink-0 rounded-2xl overflow-hidden flex items-center justify-center shadow-xl"
              style={{
                width: 220,
                height: 280,
                background: '#fafafa',
                border: '1px solid #e5e7eb',
                boxShadow: `0 0 60px rgba(234,179,8,0.2)`,
              }}
            >
              <img
                src={(slide as { image: string }).image}
                alt={(slide as { name: string }).name}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <span className="badge mb-4 inline-block">{(slide as { badge: string }).badge}</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
                {(slide as { name: string }).name}
              </h2>
              <p className="text-xl sm:text-2xl font-semibold mb-4 text-yellow-600">
                {slide.headline}
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">{slide.sub}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                <Link href={slide.cta.href} className="btn-primary text-base px-7 py-3.5">
                  {slide.cta.label} <ArrowRight size={17} />
                </Link>
                <Link
                  href={(slide as { ctaSecondary: { href: string; label: string } }).ctaSecondary.href}
                  className="btn-secondary text-base px-7 py-3.5"
                >
                  {slide.ctaSecondary.label}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white border border-gray-200 text-gray-500 hover:border-yellow-400 hover:text-yellow-600 shadow-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white border border-gray-200 text-gray-500 hover:border-yellow-400 hover:text-yellow-600 shadow-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background: i === current ? '#eab308' : 'rgba(234,179,8,0.3)',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
