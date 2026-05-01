"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="bg-bg-2 px-6 py-24 md:px-12 md:py-32">
      <SectionHeader
        label="Expertise"
        title="What I Build With"
        subtitle="My toolkit for creating polished, performant cross-platform applications."
      />
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-px border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-bg-3 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-surface"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center text-2xl">
              {skill.icon}
            </div>
            <div className="mb-1.5 text-[15px] font-semibold">{skill.name}</div>
            <div className="text-[13px] leading-[1.6] text-muted">
              {skill.desc}
            </div>
            <div className="mt-3.5 h-0.5 overflow-hidden rounded bg-white/[0.07]">
              <div
                className="h-full rounded bg-accent transition-[width] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ width: animate ? `${skill.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
