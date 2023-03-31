import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .25rem;
    font-size: var(--font-size-4);
    color: var(--alt-color);
    padding: 6rem 2rem 2rem;

    span {
        display: flex;
        align-items: center;
        gap: .25rem;
    }
`