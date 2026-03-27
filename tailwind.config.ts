import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--text-muted)"
      },
      transitionDuration: {
        DEFAULT: "300ms",
        200: "300ms"
      }
    }
  },
  plugins: []
} satisfies Config;
