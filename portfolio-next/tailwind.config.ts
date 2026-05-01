import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0d0d0f",
          2: "#111114",
          3: "#16161a",
        },
        surface: "#1c1c22",
        muted: "#7a7a8c",
        accent: {
          DEFAULT: "oklch(72% 0.18 200)",
          orange: "oklch(72% 0.18 50)",
          purple: "oklch(72% 0.18 300)",
          pink: "oklch(72% 0.18 330)",
          red: "oklch(60% 0.22 20)",
          yellow: "oklch(80% 0.18 85)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
