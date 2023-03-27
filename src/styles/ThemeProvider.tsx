import { ReactNode } from 'react';
import { Theme } from '../Types/Types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

type ThemeProviderProps = {
    theme: Theme;
    children: ReactNode;
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
