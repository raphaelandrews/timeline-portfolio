import { useContext } from 'react';
import { ThemeContext } from '../../styles/ThemeProvider';
import styled from 'styled-components';
import { Theme } from '../../Types/Types';

const Button = styled.button<{ theme: Theme }>`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
`;

export const ToggleButton = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};
