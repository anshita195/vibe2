'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Context for theme
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

declare global {
  interface Window {
    __onThemeChange: (newTheme: string) => void;
    __setPreferredTheme: (newTheme: string) => void;
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Sync with early theme script
      setTheme(window.document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      window.__onThemeChange = (newTheme: string) => setTheme(newTheme);
      console.log('ThemeProvider initialized. Current theme:', window.document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== 'undefined' && window.__setPreferredTheme) {
      window.__setPreferredTheme(theme === 'dark' ? 'light' : 'dark');
      console.log('Toggled theme to', theme === 'dark' ? 'light' : 'dark');
    } else {
      console.error('window.__setPreferredTheme is not available!');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
} 