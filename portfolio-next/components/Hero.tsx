import { SITE } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pt-32"
    >
      {/* Animated mesh gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="mesh-blob absolute -right-24 top-1/4 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(72% 0.18 200 / 0.5) 0%, transparent 70%)" }}
        />
        <div
          className="mesh-blob delay-1 absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(72% 0.18 300 / 0.45) 0%, transparent 70%)" }}
        />
        <div
          className="mesh-blob delay-2 absolute left-1/3 top-0 h-[320px] w-[320px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(72% 0.18 50 / 0.35) 0%, transparent 70%)" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        <div className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-accent opacity-0 animate-fade-up [animation-delay:200ms]">
          <span className="h-px w-8 bg-accent" />
          {SITE.role}
        </div>

        <h1 className="mb-4 text-[clamp(52px,8vw,110px)] font-bold leading-[0.95] tracking-[-0.03em] opacity-0 animate-fade-up [animation-delay:350ms]">
          Hamza
          <br />
          Hussain <span className="shimmer-text">Shah</span>
        </h1>

        <p className="mb-10 text-[clamp(28px,4vw,52px)] font-light leading-tight tracking-[-0.02em] text-muted opacity-0 animate-fade-up [animation-delay:500ms]">
          Building beautiful mobile experiences
        </p>

        <p className="mb-12 max-w-xl text-base leading-[1.75] text-muted opacity-0 animate-fade-up [animation-delay:650ms] md:text-[17px]">
          4+ years building production Flutter and React Native apps —{" "}
          <span className="text-white">20+ shipped</span> across FinTech, Health,
          Automotive and AI. I take ideas, half-built MVPs and broken codebases
          and turn them into apps that ship and scale.
        </p>

        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up [animation-delay:800ms]">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded bg-accent px-7 py-3.5 text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_oklch(72%_0.18_200/0.35)]"
          >
            <span className="relative z-10">View My Work</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded border border-white/[0.07] px-7 py-3.5 text-sm font-medium transition-colors duration-200 hover:border-white/30 hover:bg-surface"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted md:flex"
      >
        <span>Scroll</span>
        <span className="block h-12 w-px overflow-hidden bg-white/10">
          <span className="block h-1/3 w-px animate-[fadeUp_2s_ease-in-out_infinite] bg-accent" />
        </span>
      </div>
    </section>
  );
}
