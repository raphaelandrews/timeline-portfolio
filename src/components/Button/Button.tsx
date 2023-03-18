import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

const Button = styled.button`
  background-color: var(--bg-color);
  color: red;
`;

export const ToggleButton = () => {
  const { toggleSetTheme } = useContext(ThemeContext);

  return (
    <>
      <Button onClick={() => toggleSetTheme("light")}>Toggle Theme</Button>
      <Button onClick={() => toggleSetTheme("dark")}>Toggle Theme</Button>
    </>
  )
};
