"use client";

import { useState } from "react";
import { skillGroups } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const current = skillGroups.find((g) => g.id === active) ?? skillGroups[0];

  return (
    <section id="skills" className="bg-bg-2 px-6 py-24 md:px-12 md:py-32">
      <SectionHeader
        label="Expertise"
        title="What I Build With"
        subtitle="A practical toolkit for shipping mobile apps — from the first commit to the post-launch fixes."
      />

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="Skill categories"
        className="-mx-6 mb-10 flex gap-2 overflow-x-auto px-6 pb-2 md:-mx-0 md:flex-wrap md:overflow-visible md:px-0"
      >
        {skillGroups.map((g) => {
          const isActive = g.id === active;
          return (
            <button
              key={g.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(g.id)}
              className={`flex-shrink-0 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-all duration-300 md:text-[11px] ${
                isActive
                  ? "border-accent/60 bg-accent/10 text-white"
                  : "border-white/[0.08] bg-bg-3 text-muted hover:border-white/20 hover:text-white"
              }`}
            >
              {g.label}
            </button>
          );
        })}
      </div>

      <p className="mb-10 text-base leading-[1.7] text-muted md:text-[17px]">
        {current.caption}
      </p>

      {/* Skill grid */}
      <div className="grid grid-cols-1 gap-px border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
        {current.items.map((skill) => (
          <article
            key={skill.name}
            className="group relative overflow-hidden bg-bg-3 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-surface"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-white/[0.06] text-2xl transition-colors group-hover:bg-accent/15">
              {skill.icon}
            </div>
            <h3 className="mb-1.5 text-[15px] font-semibold">{skill.name}</h3>
            <p className="text-[13px] leading-[1.6] text-muted">{skill.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
