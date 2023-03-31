import { createContext } from "react";

type ThemeContextType = {
  isSetTheme: string;
  isThemePicker: boolean;
  toggleSetTheme: (e: string) => void;
  toggleThemePicker: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isSetTheme: "",
  isThemePicker: false, 
  toggleSetTheme: () => {},
  toggleThemePicker: () => {},
});

