import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * ThemeToggle – switches between dark/light themes.
 * Uses system preference by default and saves choice to localStorage.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("system");

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const effectiveTheme =
      stored || (systemPrefersDark ? "dark" : "light");

    root.classList.toggle("dark", effectiveTheme === "dark");
    setTheme(effectiveTheme);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="icon-btn"
      aria-label={`Toggle theme (${theme})`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}