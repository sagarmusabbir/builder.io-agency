/** @type {import('tailwindcss').Config} */
module.exports = {
  // Control dark pseudo-selector by ancestor's "dark" class
  darkMode: "class",
  // Scan these files for Tailwind classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./svg/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent color
        // primary: {
        //   // Tailwind emereld
        //   50: "#f0fdfa",
        //   100: "#ccfbf1",
        //   200: "#99f6e4",
        //   300: "#6ee7b7",
        //   400: "#34d399",
        //   500: "#10b981",
        //   600: "#059669",
        //   700: "#047857",
        //   800: "#065f46",
        //   900: "#022c22",
        // },

        primary: {
          // Tailwind teal
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },

        // Grayscale
        // gray: {
        //   // Tailwind slate
        //   50: "#f8fafc",
        //   100: "#f1f5f9",
        //   200: "#e2e8f0",
        //   300: "#cbd5e1",
        //   400: "#94a3b8",
        //   500: "#64748b",
        //   600: "#475569",
        //   700: "#334155",
        //   800: "#1e293b",
        //   900: "#0f172a",
        // },

        gray: {
          // Tailwind custom
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#9ca3af",
          500: "#64748b", //slate-600
          600: "#383838", //
          700: "#2B1B17", //Midnight
          800: "#111111", //licorice
          900: "#0C090A", //night
          950: "#0C0404", //Asphalt
        },

        // Gradient colors
        neon: {
          blue: "#3b82f6",
          pink: "#ec4899",
          purple: "#a855f7",
          teal: "#14b8a6",
          green: "#22c55e",
          sky: "#0ea5e9",
          amber: "#f59e0b",
          red: "#ef4444",
          emereld: "#10b981",
        },
      },
      fontFamily: {
        sans: ["Avenir Next", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
