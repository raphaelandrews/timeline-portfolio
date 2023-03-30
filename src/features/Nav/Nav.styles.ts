import styled from "styled-components";

export const NavWrapper = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: .75rem 1.25rem;
    //background-color: hsla(210, 40%, 2%, .8);
    backdrop-filter: blur(8px);
    box-shadow: var(--bs-1);
    z-index: 1;

    a {
        display: flex;
    }

    img {
        width: 2rem;
        height: 2rem;
    }

    button {
        svg {
            display: flex;
        }
    }

    @media (min-width: 600px) {  
        box-shadow: none;
    }
`