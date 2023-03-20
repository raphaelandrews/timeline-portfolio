import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
`

export const Background = styled.img`
    width: 100%;
    aspect-ratio: 2/1;
    object-fit: cover;

    @media (min-width: 600px) {
        border-radius: 4rem;
        aspect-ratio: 3/1;
    }
`

export const Profile = styled.img`
    position: absolute;
    left: 2rem;
    bottom: 0;
    transform: translateY(50%);
    width: 5.5rem;
    border: 6px solid var(--bg-color);
    border-radius: 50%;
    aspect-ratio: 1/1;

    @media (min-width: 400px) {
        left: 3rem;
        width: 7rem;
    }

    @media (min-width: 600px) {  
        left: 4rem;    
        border: 8px solid var(--bg-color);
    }

    @media (min-width: 800px) {
        left: 5rem;
        width: 8rem;
    }
`