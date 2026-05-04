import { integrations } from "@/lib/data";
import { Reveal } from "./Reveal";

const GROUP_ORDER = ["Auth", "Payments", "AI", "Backend", "Engagement", "Real-time", "Analytics"];

const groupAccent: Record<string, string> = {
  Auth: "oklch(72% 0.18 200)",
  Payments: "oklch(72% 0.18 50)",
  AI: "oklch(72% 0.18 300)",
  Backend: "oklch(72% 0.18 30)",
  Engagement: "oklch(72% 0.18 330)",
  "Real-time": "oklch(72% 0.18 160)",
  Analytics: "oklch(80% 0.18 85)",
};

export function IntegrationStrip() {
  return (
    <Reveal>
      <div className="relative mb-12 overflow-hidden rounded-xl border border-white/[0.08] bg-bg-3 p-7 md:mb-16 md:p-10">
        {/* Glow accents */}
        <span
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full blur-3xl"
          style={{ background: "oklch(72% 0.18 300 / 0.15)" }}
        />

        <div className="relative z-10 mb-6 flex flex-col items-start justify-between gap-4 md:mb-8 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Most-requested skill
            </div>
            <h3 className="text-[clamp(24px,3vw,36px)] font-bold leading-tight tracking-[-0.02em]">
              Social Auth, Payments & Key Integrations
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-[1.7] text-muted md:text-[15px]">
              One-tap sign-in with Google, Apple, Facebook and TikTok. Stripe and
              in-app subscriptions wired to RevenueCat. AI providers, push, deep
              links, real-time and analytics — connected, tested and shipped.
            </p>
          </div>
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.15em] text-muted md:block">
            <span className="text-accent">{integrations.length}+</span> services
            integrated
          </div>
        </div>

        <ul className="relative z-10 flex flex-wrap gap-2">
          {GROUP_ORDER.flatMap((group) =>
            integrations
              .filter((i) => i.group === group)
              .map((i) => (
                <li
                  key={i.label}
                  className="group/pill inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-bg-2 px-3.5 py-1.5 text-[12px] font-medium text-white/90 transition-all hover:border-white/25 hover:bg-surface md:text-[13px]"
                  style={{ ["--pill" as never]: groupAccent[group] } as React.CSSProperties}
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover/pill:scale-150"
                    style={{ background: "var(--pill)" }}
                  />
                  {i.label}
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                    {i.group}
                  </span>
                </li>
              ))
          )}
        </ul>
      </div>
    </Reveal>
  );
}
