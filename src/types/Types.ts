export type Theme = {
    colors: {
        primary: string;
        secondary: string;
        secondaryAlt: string;
        tertiary: string;
        tertiaryAlt: string;
        quaternary: string;
        quinary: string;
        alternative: string;
        backgroundAlt: string;
        background: string;
    };
    fonts: {
        primary: string;
    };
};

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export type IconTypes = {
    position?: string;
    display?: string;
    top?: string;
    left?: string;
    fontSize?: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    color?: string;
    transform?: string;
}