import styled from "styled-components";

interface ButtonProps {
    display?: string;
    displayMD?: string;
    fontFamily?: string;
    size?: string;
    sizeMD?: string;
    color?: string;
    colorHover?: string;
    weight?: string;
    textTransform?: string;
    width?: string;
    minWidth?: string;
    height?: string;
    padding?: string;
    margin?: string;
    marginMD?: string;
    borderRadius?: string;
    border?: string;
    backgroundColor?: string;
    backgroundColorHover?: string;
    link?: string;
}

export const ButtonDefault = styled.button<ButtonProps>`
    display: ${(props) => props.display};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${(props) => props.size };
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color};
    text-transform: ${(props) => props.textTransform};
    width: ${(props) => props.width};
    min-width: ${(props) => props.minWidth};
    height: ${(props) => props.height};
    border-radius: ${(props) => props.borderRadius};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.borderRadius};
    border: ${(props) => props.border};
    background-color: ${(props) => props.backgroundColor};
    transition: .5s;
    cursor: pointer;

    &:hover {
        color:  ${(props) => props.colorHover};
        background-color:  ${(props) => props.backgroundColorHover};
    }

    a {
        display: ${(props) => props.link ? props.link : "block"};
        color: var(--bg-color);
        width: 100%;
        height: 100%;
        padding: 1rem 0;
    }

    @media (min-width: 800px) {
        display: ${(props) => props.displayMD};
        font-size: ${(props) => props.sizeMD};
        margin: ${(props) => props.marginMD};
    }
`