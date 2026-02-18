/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/context/**/*.{js,jsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      /* ── Custom Color Palette (SaaS Dark Theme) ──────────── */
      colors: {
        brand: {
          50:  "#f3e8ff",
          100: "#e4ccff",
          200: "#c084fc",
          300: "#a855f7",
          400: "#9333ea",   // primary accent
          500: "#7c3aed",   // default brand
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3b0764",
        },
        "dark-bg":  "#000000",   // main page background
        "dark-bg2": "#0a0a0a",   // alternate / slightly lighter
        surface: {
          DEFAULT: "#111111",    // card / panel background
          light:   "#1a1a1a",    // hover state / elevated cards
          border:  "#222222",    // subtle borders
        },
        accent: {
          pink:   "#EC4899",     // gradient end / highlights
          cyan:   "#22D3EE",     // secondary accent
        },
        muted:    "#94A3B8",     // secondary text
      },

      /* ── Font Families ───────────────────────────────────── */
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "Fira Code", "monospace"],
      },

      /* ── Gradients via Background Image ──────────────────── */
      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand":   "linear-gradient(135deg, #7c3aed 0%, #EC4899 100%)",
        "gradient-hero":    "linear-gradient(160deg, #7c3aed 0%, #a855f7 40%, #EC4899 100%)",
        "gradient-subtle":  "linear-gradient(180deg, rgba(124,58,237,0.15) 0%, rgba(236,72,153,0.08) 100%)",
        "gradient-card":    "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(236,72,153,0.05) 100%)",
      },

      /* ── Box Shadows (Glow effects) ─────────────────────── */
      boxShadow: {
        glow:       "0 0 20px rgba(124, 58, 237, 0.3)",
        "glow-lg":  "0 0 40px rgba(124, 58, 237, 0.25), 0 0 80px rgba(236, 72, 153, 0.15)",
        "glow-sm":  "0 0 10px rgba(124, 58, 237, 0.2)",
        glass:      "0 8px 32px rgba(0, 0, 0, 0.36)",
      },

      /* ── Border Radius ──────────────────────────────────── */
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      /* ── Animations ─────────────────────────────────────── */
      keyframes: {
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in":    "fade-in 0.5s ease-out forwards",
        float:        "float 3s ease-in-out infinite",
        shimmer:      "shimmer 2s linear infinite",
      },

      /* ── Backdrop Blur (glassmorphism) ──────────────────── */
      backdropBlur: {
        xs: "2px",
      },

      /* ── Spacing / Sizing helpers ───────────────────────── */
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },

  plugins: [],
};
