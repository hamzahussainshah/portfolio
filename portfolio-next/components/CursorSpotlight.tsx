"use client";

import { useEffect } from "react";

export function CursorSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.body.classList.add("spotlight");
    let raf = 0;
    let mx = 0;
    let my = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          document.body.style.setProperty("--mx", `${mx}px`);
          document.body.style.setProperty("--my", `${my}px`);
          raf = 0;
        });
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("spotlight");
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
