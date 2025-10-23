import { useEffect, useState } from 'react';

const getInitialTheme = (): 'light' | 'dark' => {
  try {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored as 'light' | 'dark';
    // Respect OS preference when no stored preference exists
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'dark';
  } catch (e) {
    return 'dark';
  }
};

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

  useEffect(() => {
    try {
      // keep DOM and storage in sync (effect runs after mount/update)
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
      try { (window as any).__theme = theme; } catch (e) {}
      // eslint-disable-next-line no-console
      console.log('[useTheme] effect theme ->', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        // Apply immediately so the UI responds without waiting for effect
        document.documentElement.classList.toggle('dark', next === 'dark');
        localStorage.setItem('theme', next);
        try { (window as any).__theme = next; } catch (e) {}
        // eslint-disable-next-line no-console
        console.log('[useTheme] toggle ->', next);
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  return { theme, toggleTheme };
};

export default useTheme;
