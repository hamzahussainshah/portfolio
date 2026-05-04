import { services } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-bg px-6 py-24 md:px-12 md:py-32">
      <SectionHeader
        label="Services"
        title="What I Do Best"
        subtitle="The work I&apos;m hired for most often — and what I genuinely enjoy doing."
      />

      <ul className="grid grid-cols-1 gap-px border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 xl:grid-cols-3">
        {services.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 60}>
            <article className="group relative h-full overflow-hidden bg-bg-3 p-7 transition-all duration-300 hover:bg-surface md:p-8">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
                <span aria-hidden>{s.icon}</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold tracking-[-0.01em] md:text-xl">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-muted md:text-[15px]">
                {s.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
