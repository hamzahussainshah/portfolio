"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 md:px-12 ${
        scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-white/[0.07]" : ""
      }`}
      aria-label="Main navigation"
    >
      <a href="#home" className="text-lg font-bold tracking-tight">
        HHS<span className="text-accent">.</span>
      </a>

      <ul className="hidden gap-9 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.06em] text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center md:hidden"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="relative block h-3 w-6">
          <span
            className={`absolute left-0 right-0 top-0 h-px bg-white transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 right-0 h-px bg-white transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-white/[0.07] bg-bg/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-[0.08em] text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
