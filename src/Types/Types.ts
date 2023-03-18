
export type Theme = {
    background: string;
    foreground: string;
};

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};