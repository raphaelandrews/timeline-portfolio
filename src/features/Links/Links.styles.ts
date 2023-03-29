import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
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
`