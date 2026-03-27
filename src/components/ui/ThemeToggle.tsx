"use client";

import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-lg border border-border px-3 py-1 text-sm transition-[color,background-color,border-color] duration-300 hover:bg-surface"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

