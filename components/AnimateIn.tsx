'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'in';
}

export default function AnimateIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animation = direction === 'up' ? 'animate-fade-up' : 'animate-fade-in';

  return (
    <div
      ref={ref}
      className={`${className} transition-none`}
      style={{
        opacity: visible ? undefined : 0,
        animation: visible ? `${animation.replace('animate-', '')} 0.65s ease ${delay}ms both` : 'none',
      }}
    >
      {children}
    </div>
  );
}
