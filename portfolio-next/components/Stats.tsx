import { stats } from "@/lib/data";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function Stats() {
  return (
    <Reveal
      as="section"
      aria-label="Quick stats"
      className="grid grid-cols-2 divide-x divide-y divide-white/[0.07] border-y border-white/[0.07] bg-bg-2 lg:grid-cols-4 lg:divide-y-0"
    >
      {stats.map((stat) => {
        const numeric = /^\d+$/.test(stat.num);
        return (
          <div key={stat.label} className="p-7 md:p-9">
            <div className="mb-1 text-3xl font-bold tracking-[-0.03em] md:text-[40px]">
              {numeric ? (
                <CountUp to={Number(stat.num)} />
              ) : (
                stat.num
              )}
              <span className="text-accent">{stat.suffix}</span>
            </div>
            <div className="text-xs tracking-wide text-muted">{stat.label}</div>
          </div>
        );
      })}
    </Reveal>
  );
}
