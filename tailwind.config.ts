import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          glow: "var(--accent-glow)",
        },
        "warm-cream": "var(--warm-cream)",
        "warm-stone": "var(--warm-stone)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(2.5rem, 7vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "page": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "section": ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
    },
  },
  plugins: [],
};

export default config;
