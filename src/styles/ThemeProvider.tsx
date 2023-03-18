import React, { useState, createContext, useEffect } from 'react';
import { Theme, ThemeContextType } from '../Types/Types';

const themes = {
    light: {
        background: '#ffffff',
        foreground: '#000000',
    },
    dark: {
        background: '#000000',
        foreground: '#ffffff',
    },
};



export const ThemeContext = createContext<ThemeContextType>({
    theme: themes.light,
    toggleTheme: () => { },
});

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(themes.light);
  
    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        const parsedTheme = themes[storedTheme as keyof typeof themes];
        setTheme(parsedTheme);
      }
    }, []);
  
    const toggleTheme = () => {
      const newTheme = theme === themes.light ? themes.dark : themes.light;
      localStorage.setItem('theme', newTheme === themes.light ? 'light' : 'dark');
      setTheme(newTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
