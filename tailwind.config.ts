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
        // Midnight Theme - Rich, layered dark colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        card: "var(--card)",
        "card-elevated": "var(--card-elevated)",
        border: "var(--border)",
        // Accent colors - Indigo to Cyan gradient spectrum
        accent: {
          DEFAULT: "var(--accent)",
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0",
        relaxed: "0.025em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in": "slideIn 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
        "spotlight": "spotlight 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)",
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(99, 102, 241, 0.4)",
          },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
        },
        spotlight: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        // Gradient utilities for premium effects
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "spotlight-top": "radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-primary-rgb, rgba(99, 102, 241, 0.15)), transparent)",
        "spotlight-center": "radial-gradient(ellipse 50% 50% at 50% 50%, var(--accent-primary-rgb, rgba(99, 102, 241, 0.1)), transparent)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px var(--accent-primary)",
        "glow": "0 0 25px -5px var(--accent-primary)",
        "glow-lg": "0 0 50px -10px var(--accent-primary)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
      },
    },
  },
  plugins: [],
};

export default config;
