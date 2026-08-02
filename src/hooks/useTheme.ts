import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "empire-theme";

function getInitialTheme(): Theme {
    if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
