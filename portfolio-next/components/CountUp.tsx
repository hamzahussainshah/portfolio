"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function CountUp({ to, duration = 1400, suffix = "", prefix = "", className }: Props) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(Math.round(eased * to));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}
