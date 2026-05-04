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
            I&apos;m <strong className="font-semibold text-white">Hamza Hussain Shah</strong>
            , a senior mobile developer with{" "}
            <strong className="font-semibold text-white">4+ years</strong> shipping
            Flutter and React Native apps to the App Store and Play Store —{" "}
            <strong className="font-semibold text-white">20+ products</strong> across
            FinTech, Health, Automotive, Enterprise and AI.
          </p>
          <p>
            I work with founders and teams who need things <em>actually finished</em>
            : MVPs taken from Figma to production, half-built or AI-generated apps
            cleaned up and stabilized, slow apps made fast, and modern features —
            payments, push, real-time chat,{" "}
            <strong className="font-semibold text-white">AI integrations</strong> —
            wired in properly with{" "}
            <strong className="font-semibold text-white">Firebase</strong> and clean
            MVVM architecture.
          </p>
          <p>
            On the web side I build with{" "}
            <strong className="font-semibold text-white">React, Next.js & TypeScript</strong>
            . Honest estimates, weekly demos, no silent weeks, no surprise scope
            creep — that&apos;s the bar.
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
