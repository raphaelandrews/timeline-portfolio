import styled from "styled-components";

export const Header = styled.header`
    padding-top: 4rem;
`

export const Wrapper = styled.div`
    padding: 0 2rem;

    @media (min-width: 400px) {
        padding: 0 3rem;
    }

    @media (min-width: 600px) {
        padding: 0 4rem;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    svg {
        margin-top: .3rem;
    }
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
    width: 5.5rem;
    margin-top: -2.75rem;
    border: 6px solid var(--bg-color);
    border-radius: 50%;
    aspect-ratio: 1/1;

    @media (min-width: 400px) {
        width: 7rem;
        margin-top: -3.75rem;
    }

    @media (min-width: 600px) {     
        border: 8px solid var(--bg-color);
    }

    @media (min-width: 800px) {
        width: 8rem;
        margin-top: -4rem;
    }
`

export const BioWrapper = styled.div`
    @media (min-width: 460px) {
        display: flex;
    }
`

export const Bio = styled.div`
    margin: .75rem 0 0;

    @media (min-width: 600px) {
        margin: .75rem 0 0 .75rem;
    }
`

interface TextProps {
    fontWeight?: string;
    margin?: string;
    marginMD?: string;
}

export const Text = styled.p<TextProps>`
    font-size: .875rem;
    font-weight:  ${(props) => props.fontWeight};
    color: var(--alt-color);
    margin: ${(props) => props.margin};
    line-height: 1.5em;

    @media (min-width: 600px) {
        font-size: 1rem;
        margin: ${(props) => props.marginMD};
        line-height: inherit;
    }
`
