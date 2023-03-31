import styled from "styled-components";

export const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: .75rem .75rem .75rem 1.25rem;
    //background-color: hsla(210, 40%, 2%, .8);
    backdrop-filter: blur(8px);
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
`