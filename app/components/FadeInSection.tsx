"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  /** Atraso em ms ao entrar na tela (para sequência quando vários entram juntos) */
  delay?: number;
  /** Classe CSS adicional no wrapper */
  className?: string;
  /** Quanto do elemento precisa estar visível para disparar (0–1). Ex: 0.1 = 10% */
  threshold?: number;
}

export default function FadeInSection({
  children,
  delay = 0,
  className = "",
  threshold = 0.1,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // dispara um pouco antes de entrar totalmente
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={isVisible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
