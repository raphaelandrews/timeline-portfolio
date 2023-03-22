import styled from "styled-components";

export const NavWrapper = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-shadow: var(--bs-1);
    z-index: 1;

    img {
        width: 2rem;
        height: 2rem;
    }

    @media (min-width: 600px) {  
        box-shadow: none;
    }

    @media (min-width: 1000px) {
        padding: 1.5rem;
    }
`