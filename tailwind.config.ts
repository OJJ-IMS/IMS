import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0C1929",
          "navy-light": "#112235",
          "navy-mid": "#0F1E30",
          blue: "#1A5FA8",
          "blue-light": "#2472C8",
          "blue-dark": "#134A88",
          "blue-muted": "#1A5FA820",
        },
        surface: {
          DEFAULT: "#112235",
          elevated: "#152840",
          border: "#1E3A52",
          hover: "#1A3045",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0C1929 0%, #0F2340 100%)",
        "gradient-blue": "linear-gradient(135deg, #1A5FA8 0%, #2472C8 100%)",
        "gradient-card": "linear-gradient(135deg, #112235 0%, #152840 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
