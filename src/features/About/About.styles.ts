import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 1rem;

    p {
        font-size: var(--font-size-2);
        font-weight: 400;
        margin-bottom: 1.5rem;

        a {
            font-weight: 600;
            color: var(--second-color);

            &:hover {
                text-decoration: underline;
            }
        }
    }

    img {
        width: 100%;
        border-radius: .5rem;
        aspect-ratio: 2/1;
        object-fit: cover;
    }

    figcaption {
        font-size: var(--font-size-4);
        font-weight: 400;
        color: var(--alt-color);
        text-align: center;
        margin-top: .2rem;
    }
`