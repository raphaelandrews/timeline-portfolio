// ThemeProvider.tsx
import { useEffect, useState, ReactNode } from "react";
import { ThemeProvider } from "../styles/ThemeProvider";
import { ThemeContext } from "./ThemeContext";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Theme } from "../types/Types";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [isSetTheme, setIsSetTheme] = useState("");

  const [isThemePicker, setIsThemePicker] = useState(false);

  const toggleSetTheme = (e: string) => {
    setIsSetTheme(e);
  };

  const toggleThemePicker = () => {
    setIsThemePicker(!isThemePicker);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setIsSetTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    function setTheme() {
      localStorage.setItem("theme", isSetTheme);
    }

    setTheme()
  }, [isSetTheme]);

  function getThemeObject(theme: string): Theme {
    if (theme === "dark") {
      return darkTheme;
    } else if (theme === "light") {
      return lightTheme;
    }
    return theme === "corinthians" ? darkTheme : lightTheme;
  }

  const contextValue = {
    isSetTheme,
    toggleSetTheme,
    toggleThemePicker,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={getThemeObject(isSetTheme)}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
