import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    img {
        width: 2rem;
        height: 2rem;
    }

    @media (min-width: 1000px) {
        padding: 1.5rem;
    }
`