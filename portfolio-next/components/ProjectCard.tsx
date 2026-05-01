import Image from "next/image";
import type { Project, AccentKey } from "@/lib/data";
import { Tilt } from "./Tilt";

const accentVar: Record<AccentKey, string> = {
  teal: "oklch(72% 0.18 200)",
  orange: "oklch(72% 0.18 50)",
  purple: "oklch(72% 0.18 300)",
  pink: "oklch(72% 0.18 330)",
  red: "oklch(60% 0.22 20)",
  yellow: "oklch(80% 0.18 85)",
};

type Props = { project: Project; index: number };

export function ProjectCard({ project, index }: Props) {
  const reverse = index % 2 === 1;
  const accent = accentVar[project.accent];

  return (
    <article
      style={{ ["--proj" as never]: accent } as React.CSSProperties}
      className="proj-glow group grid min-h-[420px] grid-cols-1 overflow-hidden rounded-sm border border-white/[0.07] transition-colors duration-300 hover:border-white/[0.15] md:min-h-[560px] md:grid-cols-2"
    >
      {/* Info panel */}
      <div
        className={`relative order-1 flex flex-col justify-center overflow-hidden bg-bg-3 p-8 md:p-14 ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-5 -right-2 text-[120px] font-extrabold leading-none tracking-[-0.05em] text-white/[0.025] md:text-[180px]"
        >
          {project.num}
        </span>
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          {project.num} / {project.kind}
        </div>
        <h3
          className="mb-4 text-[clamp(28px,3vw,44px)] font-bold leading-tight tracking-[-0.02em]"
          style={{ color: "var(--proj)" }}
        >
          {project.title}
        </h3>
        <p className="mb-8 max-w-md text-[15px] leading-[1.75] text-muted">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border px-3 py-[5px] text-[11px] font-semibold uppercase tracking-[0.08em]"
              style={{ borderColor: "var(--proj)", color: "var(--proj)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image showcase */}
      <Tilt
        max={4}
        className={`relative order-2 overflow-hidden bg-bg-2 ${
          reverse ? "md:order-1" : ""
        }`}
      >
        {project.showcase === "phones" && <PhoneShowcase project={project} />}
        {project.showcase === "wide" && <WideShowcase project={project} />}
        {project.showcase === "single" && <SingleShowcase project={project} />}
      </Tilt>
    </article>
  );
}

function PhoneShowcase({ project }: { project: Project }) {
  return (
    <div className="flex h-full min-h-[340px] items-center justify-center gap-3 px-6 py-10 md:gap-4 md:px-8">
      {project.images.map((img, i) => {
        const isCenter = i === 1;
        const tilt = i === 0 ? "-rotate-3" : i === 2 ? "rotate-3" : "rotate-0";
        const offset = isCenter ? "translate-y-0" : "translate-y-6";
        const hover = isCenter
          ? "group-hover:-translate-y-2"
          : i === 0
            ? "group-hover:translate-y-3 group-hover:-rotate-2"
            : "group-hover:translate-y-3 group-hover:rotate-2";

        return (
          <div
            key={img.src}
            className={`relative aspect-[9/19] overflow-hidden rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${tilt} ${offset} ${hover} ${
              isCenter ? "w-[140px] md:w-[180px]" : "w-[120px] md:w-[160px]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 140px, 180px"
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}

function WideShowcase({ project }: { project: Project }) {
  return (
    <div className="flex h-full min-h-[340px] items-center justify-center gap-2 px-6 py-10 md:gap-3 md:px-8">
      {project.images.map((img, i) => (
        <div
          key={img.src}
          className={`relative aspect-[9/19] max-w-[110px] flex-1 overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.07)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:max-w-[140px] ${
            i === 1
              ? "group-hover:-translate-y-3"
              : "group-hover:-translate-y-1.5"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 110px, 140px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function SingleShowcase({ project }: { project: Project }) {
  const img = project.images[0];
  return (
    <div className="flex h-full min-h-[340px] items-center justify-center px-6 py-10 md:px-8">
      <div className="relative aspect-[9/19] w-[200px] overflow-hidden rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:-translate-y-2 md:w-[220px]">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="220px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
