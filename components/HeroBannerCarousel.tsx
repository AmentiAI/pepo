'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { apolloProductUrl } from '@/lib/site';

const IMG = '/catalog';

const slides = [
  {
    type: 'logo' as const,
    headline: 'Shark Tides Research Catalog',
    sub: 'Retatrutide, tirzepatide, semaglutide, BPC-157, and every other vial currently sold by our research supplier.',
    cta: { label: 'Browse All Peptides', href: '/products' },
    ctaSecondary: { label: 'View Stacks', href: '/stacks' },
  },
  {
    type: 'product' as const,
    image: `${IMG}/bpc-157.webp`,
    name: 'BPC-157',
    badge: 'Healing research',
    headline: 'BPC-157 10mg',
    sub: 'Supplier vial photo, hosted on sharktides.com, with checkout on the matching listing.',
    cta: { label: 'View listing', href: '/products/bpc-157' },
    ctaSecondary: { label: 'Order BPC-157', href: apolloProductUrl('bpc157-10mg') },
    accentColor: '#0284c7',
  },
  {
    type: 'product' as const,
    image: `${IMG}/semaglutide-10mg.webp`,
    name: 'Semaglutide',
    badge: 'GLP-1 S 10mg',
    headline: 'Semaglutide 10mg',
    sub: 'Single research vial. The box of ten is a separate listing.',
    cta: { label: 'View listing', href: '/products/semaglutide-10mg' },
    ctaSecondary: { label: 'Order Semaglutide', href: apolloProductUrl('glp-1s-10mg') },
    accentColor: '#0ea5e9',
  },
  {
    type: 'product' as const,
    image: `${IMG}/ipamorelin-cjc.webp`,
    name: 'CJC-1295 / Ipamorelin',
    badge: 'GH research',
    headline: 'CJC-1295 / Ipamorelin blend',
    sub: 'The supplier’s 5mg/5mg blend vial.',
    cta: { label: 'View listing', href: '/products/ipamorelin-cjc' },
    ctaSecondary: { label: 'Order blend', href: apolloProductUrl('cjc1295-ipamorelin') },
    accentColor: '#0284c7',
  },
  {
    type: 'product' as const,
    image: `${IMG}/epithalon.webp`,
    name: 'Epithalon',
    badge: 'Longevity',
    headline: 'Epithalon 50mg',
    sub: 'Tetrapeptide research vial. The 40mg fill is listed separately.',
    cta: { label: 'View listing', href: '/products/epithalon' },
    ctaSecondary: { label: 'Order Epithalon', href: apolloProductUrl('epithalon-50mg') },
    accentColor: '#0ea5e9',
  },
  {
    type: 'product' as const,
    image: `${IMG}/tirzepatide-15mg.webp`,
    name: 'Tirzepatide',
    badge: 'GLP-2 T 15mg',
    headline: 'Tirzepatide 15mg',
    sub: 'Single vial. Packs are separate catalog pages.',
    cta: { label: 'View listing', href: '/products/tirzepatide-15mg' },
    ctaSecondary: { label: 'Order Tirzepatide', href: apolloProductUrl('glp-2t-15m') },
    accentColor: '#0284c7',
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
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        {slide.type === 'logo' ? (
          /* ── Logo slide ── */
          <div className="flex flex-col items-center text-center gap-5">
            <Image
              src="/logo.png"
              alt="Shark Tides"
              width={90}
              height={90}
              className="rounded-2xl shadow-xl shadow-yellow-200/60 sm:w-[120px] sm:h-[120px]"
              priority
            />
            <div>
              <div className="inline-flex items-center gap-2 badge mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                Evidence-Based Peptide Protocols
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
                {slide.headline}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto mb-6 leading-relaxed">{slide.sub}</p>
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
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 lg:gap-16">
            {/* Product image — responsive sizing */}
            <div
              className="shrink-0 rounded-2xl overflow-hidden flex items-center justify-center shadow-xl w-36 h-44 sm:w-[200px] sm:h-[260px] lg:w-[220px] lg:h-[280px]"
              style={{
                background: '#fafafa',
                border: '1px solid #e5e7eb',
                boxShadow: `0 0 60px rgba(234,179,8,0.2)`,
              }}
            >
              <img
                src={(slide as { image: string }).image}
                alt={(slide as { name: string }).name}
                className="w-full h-full object-contain p-3"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <span className="badge mb-3 inline-block">{(slide as { badge: string }).badge}</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                {(slide as { name: string }).name}
              </h2>
              <p className="text-base sm:text-xl font-semibold mb-3 text-yellow-600">
                {slide.headline}
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 max-w-lg line-clamp-3 sm:line-clamp-none">{slide.sub}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                <Link href={slide.cta.href} className="btn-primary text-base px-7 py-3.5">
                  {slide.cta.label} <ArrowRight size={17} />
                </Link>
                <a
                  href={(slide as { ctaSecondary: { href: string; label: string } }).ctaSecondary.href}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="btn-secondary text-base px-7 py-3.5"
                >
                  {slide.ctaSecondary.label}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white border border-gray-200 text-gray-700 hover:border-yellow-400 hover:text-yellow-600 shadow-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white border border-gray-200 text-gray-700 hover:border-yellow-400 hover:text-yellow-600 shadow-sm"
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
