"use client";

import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
};

export function Tilt({ children, className = "", max = 6 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const ry = (x - 0.5) * max * 2;
    const rx = (0.5 - y) * max * 2;
    node.style.setProperty("--rx", `${rx}deg`);
    node.style.setProperty("--ry", `${ry}deg`);
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}
