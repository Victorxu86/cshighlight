import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // Deep dark background
        foreground: "#e5e5e5", // Soft white for text
        muted: "#737373", // Muted gray for secondary text
        accent: "#d4d4d4", // Light gray for accents
        border: "#262626", // Dark gray for borders
        // New Amber Theme
        amber: {
            50: '#fffbeb',
            100: '#fef3c7', // Light glow
            400: '#fbbf24', // Base Amber
            500: '#f59e0b', // Deep Amber
            900: '#78350f', // Dark Amber (shadows)
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(251, 191, 36, 0.1)' },
          '100%': { textShadow: '0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2)' },
        }
      },
      backgroundImage: {
        'amber-gradient': 'radial-gradient(circle at center, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
};
export default config;
