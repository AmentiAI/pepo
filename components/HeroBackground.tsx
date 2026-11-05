'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const slides = [
  { type: 'logo' as const },
  { type: 'product' as const, src: '/catalog/bpc-157.webp', label: 'BPC-157' },
  { type: 'product' as const, src: '/catalog/semaglutide-10mg.webp', label: 'Semaglutide' },
  { type: 'product' as const, src: '/catalog/ipamorelin-cjc.webp', label: 'CJC-1295 / Ipamorelin' },
  { type: 'product' as const, src: '/catalog/epithalon.webp', label: 'Epithalon' },
  { type: 'product' as const, src: '/catalog/tirzepatide-15mg.webp', label: 'Tirzepatide' },
];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <>
      {/* Dark canvas — always present */}
      <div className="absolute inset-0" style={{ background: '#08080f' }} aria-hidden="true" />

      {/* Slide layer */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
        {slide.type === 'logo' ? (
          <Image
            key="logo"
            src="/logo.png"
            alt=""
            width={520}
            height={520}
            className="object-contain select-none animate-fade-in"
            style={{ opacity: 0.1 }}
            priority
          />
        ) : (
          /* Product image — shown large and centered, slightly tinted */
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            className="animate-fade-in"
            style={{
              width: '380px',
              height: '480px',
              objectFit: 'contain',
              opacity: 0.18,
              filter: 'brightness(0.7) saturate(0.6)',
            }}
            loading="lazy"
          />
        )}
      </div>

      {/* Dark vignette overlay so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 60% 70% at 50% 50%, transparent 10%, rgba(8,8,15,0.6) 60%, rgba(8,8,15,0.95) 100%),
            linear-gradient(to bottom, rgba(8,8,15,0.5) 0%, rgba(8,8,15,0.25) 40%, rgba(8,8,15,0.7) 100%)
          `,
        }}
      />

      {/* Slide dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10 pointer-events-none">
        {slides.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-500"
            style={{
              width: i === current ? 22 : 7,
              height: 7,
              background: i === current ? 'rgba(124,58,237,0.9)' : 'rgba(124,58,237,0.3)',
            }}
          />
        ))}
      </div>
    </>
  );
}
