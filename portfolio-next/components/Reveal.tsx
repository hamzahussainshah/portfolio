"use client";

import { createElement, useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

export function Reveal({ children, className = "", delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
      className: `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`,
    },
    children
  );
}
