"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="
        flex items-center justify-center rounded-xl border border-(--border-color) bg-(--card-bg) p-3 text-xl text-foreground transition-all duration-300 hover:border-[#E50914] hover:text-[#E50914]
      "
      aria-label="toggle theme"
    >
      {currentTheme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}