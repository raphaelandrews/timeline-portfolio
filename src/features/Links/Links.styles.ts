import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;

    @media (min-width: 500px) { 
        grid-template-columns: 1fr 1fr;
    }
`

interface LinkProps {
    backgroundColor: string;
}

export const Link = styled.a<LinkProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding: 1rem 2rem;
    border-radius: 1.25rem;
    background-color: ${(props) => props.backgroundColor};

    div {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: 1.25rem;
        font-weight: 600;
        color: #fff;
        height: 100%;
    }
`