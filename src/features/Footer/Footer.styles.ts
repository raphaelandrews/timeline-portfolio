import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .25rem;
    font-size: var(--font-size-4);
    color: var(--alt-color);
    padding: 4rem 2rem 1.5rem;

    span {
        display: flex;
        align-items: center;
        gap: .25rem;
    }
`