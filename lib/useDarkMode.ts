import { useEffect, useState } from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined" && "_initialDarkMode" in window) {
      return (window as any)._initialDarkMode;
    }

    return false;
  });

  useEffect(() => {
    const handler = (e: { matches: boolean }) => setDarkMode(e.matches);

    const q = window.matchMedia("(prefers-color-scheme: dark)");
    handler(q);

    q.addEventListener("change", handler);

    return () => {
      q.removeEventListener("change", handler);
    };
  }, []);

  return darkMode;
}
