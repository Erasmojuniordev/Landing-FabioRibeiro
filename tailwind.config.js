/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a5f",    // azul escuro
        secondary: "#c9a84c",  // dourado
        light: "#f5f5f0",      // fundo off-white
        background: "#ffffff",
        foreground: "#0f172a",
        card: "#ffffff",
        "card-foreground": "#0f172a",
        muted: "#f1f5f9",
        "muted-foreground": "#64748b",
        border: "#e2e8f0",
        input: "#cbd5e1",
        ring: "#d5b15f",
        destructive: "#dc2626",
        "primary-foreground": "#ffffff",
        "secondary-foreground": "#071521",
      },
    },
  },
  plugins: [],
}
