"use client";

import { useState, type ReactElement } from "react";
import { SITE } from "@/lib/data";
import { Reveal } from "./Reveal";

type Social = {
  label: string;
  href: string;
  handle: string;
  icon: ReactElement;
};

const socials: Social[] = [
  {
    label: "Email",
    handle: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "@hamza-hussain-shah",
    href: SITE.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.12 1.43-2.12 2.9V21h-4z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: "@hamzahussainshah",
    href: SITE.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.84c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.13 3.18.77.84 1.24 1.91 1.24 3.23 0 4.62-2.81 5.65-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "+92 317 5568197",
    href: SITE.whatsapp,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 3.4A11 11 0 0 0 3.5 17.1L2 22l5-1.4a11 11 0 0 0 5 1.3 11 11 0 0 0 8.5-18.5Zm-8.5 17a9 9 0 0 1-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3a9 9 0 1 1 7.2 3.8Zm5.2-6.7c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5 4.4l1.6.6c.7.2 1.3.2 1.7.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4Z" />
      </svg>
    ),
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.07] bg-bg px-6 py-24 md:px-12 md:py-32"
    >
      {/* Animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="mesh-blob absolute -left-32 top-10 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(72% 0.18 200 / 0.5) 0%, transparent 70%)" }}
        />
        <div
          className="mesh-blob delay-2 absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(72% 0.18 300 / 0.45) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Availability badge */}
        <Reveal>
          <div className="mb-10 flex justify-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for work
            </span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mb-6 text-center text-[clamp(48px,9vw,120px)] font-bold leading-[0.95] tracking-[-0.04em]">
            Let&apos;s build
            <br />
            <span className="shimmer-text">something great.</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-[1.7] text-muted md:text-lg">
            Have an app idea, a half-built MVP, or an existing app that needs to
            be faster, cleaner or production-ready? Tell me what you&apos;re working
            on — I usually reply within 24 hours.
          </p>
        </Reveal>

        {/* Email pill (CTA + copy) */}
        <Reveal>
          <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${SITE.email}`}
              className="group flex flex-1 items-center justify-between gap-4 rounded-lg border border-white/[0.08] bg-bg-3 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-bg-2 hover:shadow-[0_12px_40px_oklch(72%_0.18_200/0.18)]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span className="truncate font-mono text-sm text-white md:text-[15px]">
                  {SITE.email}
                </span>
              </div>
              <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-[0.1em] text-muted transition-colors group-hover:text-accent">
                Send →
              </span>
            </a>
            <button
              type="button"
              onClick={onCopy}
              aria-label="Copy email address"
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/[0.08] bg-bg-3 px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white sm:w-32"
            >
              <span className={`flex items-center gap-2 transition-all ${copied ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"}`}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy
              </span>
              <span className={`absolute inset-0 flex items-center justify-center gap-2 text-emerald-400 transition-all ${copied ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied
              </span>
            </button>
          </div>
        </Reveal>

        {/* Social cards grid */}
        <Reveal>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-lg border border-white/[0.07] bg-bg-3 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface md:p-6"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/[0.06] text-muted transition-all duration-300 group-hover:bg-accent group-hover:text-bg">
                    <span className="h-[18px] w-[18px]">{s.icon}</span>
                  </div>
                  <div>
                    <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                      {s.label}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-medium text-white">
                        {s.handle}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 flex-shrink-0 -translate-x-1 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
