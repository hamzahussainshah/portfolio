const TECH = [
  "Flutter",
  "Dart",
  "React Native",
  "React",
  "Next.js",
  "TypeScript",
  "Firebase",
  "Firestore",
  "Cloud Functions",
  "OpenAI",
  "Claude API",
  "Stripe",
  "Stacked CLI",
  "FCM",
  "Mixpanel",
  "Figma",
];

export function Marquee() {
  return (
    <section
      aria-label="Tech stack"
      className="overflow-hidden border-b border-white/[0.07] bg-bg py-7"
    >
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {[...TECH, ...TECH].map((label, i) => (
          <div
            key={`${label}-${i}`}
            className="flex items-center gap-4 font-mono text-sm uppercase tracking-[0.2em] text-muted/80"
          >
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
