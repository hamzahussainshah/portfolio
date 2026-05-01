import { highlights } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-bg-2 px-6 py-24 md:px-12 md:py-32">
      <SectionHeader label="About" title="Who I Am" />
      <Reveal className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-5 text-base leading-[1.8] text-muted md:text-[17px]">
          <p>
            I&apos;m <strong className="font-semibold text-white">Hamza Hussain Shah</strong>,
            a Flutter developer with a passion for building beautiful, performant
            mobile applications that users love.
          </p>
          <p>
            With extensive experience in{" "}
            <strong className="font-semibold text-white">
              Flutter and Stacked CLI architecture
            </strong>
            , I write clean, readable, and maintainable code. I care deeply about
            the craft — from pixel-perfect UI implementation to scalable backend
            design with{" "}
            <strong className="font-semibold text-white">Firebase</strong>.
          </p>
          <p>
            Beyond mobile, I&apos;m comfortable across the stack — building with{" "}
            <strong className="font-semibold text-white">React, Next.js</strong>,
            and modern web technologies. Whether it&apos;s a FinTech app, a
            healthcare platform, or a creative consumer product, I bring the same
            level of precision and care.
          </p>
        </div>

        <ul className="flex flex-col gap-0.5">
          {highlights.map((h) => (
            <li
              key={h.label}
              className="flex items-start gap-4 border border-white/[0.07] bg-bg-3 px-7 py-6 transition-colors hover:border-white/[0.12] hover:bg-surface"
            >
              <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
              <div>
                <div className="text-sm font-semibold">{h.label}</div>
                <div className="text-[13px] text-muted">{h.value}</div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
