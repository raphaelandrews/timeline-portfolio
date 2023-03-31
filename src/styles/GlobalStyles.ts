import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: var(--first-font);
    font-weight: 500;
    color: var(--first-color);
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    background: var(--bg-color);
    padding-top: 4rem;
  }

  main {
    min-height: calc(100vh - 10rem);
  }

  a {
    text-decoration: none;
    color: var(--first-color);
  }

  ul {
    list-style: none;
  }

  :root {
    //===== Color =====//
    --first-color: ${({ theme }) => theme.colors.primary};
    --second-color: ${({ theme }) => theme.colors.secondary};
    --second-color-alt: ${({ theme }) => theme.colors.secondaryAlt};
    --third-color: ${({ theme }) => theme.colors.tertiary};
    --third-color-alt: ${({ theme }) => theme.colors.tertiaryAlt};
    --fourth-color: ${({ theme }) => theme.colors.quaternary};
    --fifth-color: ${({ theme }) => theme.colors.quinary};
    --alt-color: ${({ theme }) => theme.colors.alternative};
    --bg-alt-color: ${({ theme }) => theme.colors.backgroundAlt};
    --bg-color: ${({ theme }) => theme.colors.background};

    //===== Fonts =====//
    --first-font: ${({ theme }) => theme.fonts.primary};

    --font-size-1: clamp(1.5rem, 1.21rem + 1.46vw, 2rem);
    --font-size-2: clamp(0.875rem, 0.802rem + 0.366vw, 1rem);
    --font-size-3: clamp(1rem, 0.854rem + 0.731vw, 1.25rem);
    --font-size-4: clamp(0.75rem, 0.713rem + 0.183vw, 0.8125rem);
    --font-size-5: clamp(1.25rem, 0.957rem + 1.463vw, 1.75rem);

    //===== Shadows =====//
    --bs-1: hsla(0 ,0% ,20% , .2) 0px 7px 29px 0px;
  }
  
  /*=============== SCROLL BAR ===============*/
  ::-webkit-scrollbar {
    width: .6rem;
    border-radius: .5rem;
    background: var(--bg-alt-color);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: .5rem;
    background-color: hsla(240, 6%, 23%);
    transition: .5s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: hsla(240, 6%, 29%);
  }
`;
