import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  label: string;
  title: ReactNode;
  subtitle?: string;
};

export function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <>
      <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        {label}
        <span className="block h-px w-12 bg-accent sm:w-16" />
      </div>
      <Reveal>
        <h2 className="mb-5 text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.03em]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal>
          <p className="mb-16 max-w-xl text-base leading-[1.7] text-muted md:text-[17px] md:mb-[72px]">
            {subtitle}
          </p>
        </Reveal>
      )}
    </>
  );
}
