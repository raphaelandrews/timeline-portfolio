import styled from "styled-components";

interface ThemePickerProps {
    height?: string;
}

export const ThemePickerContainer = styled.section`
    width: 100%;
    padding-top: 4rem;
    margin-bottom: -2rem;
`

export const ThemePickerDefault = styled.div<ThemePickerProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 1400px;
    //height: 10rem;
    padding: 2rem;
    margin: 0 auto;
    border-radius: 2rem;
    background-color: var(--bg-alt-color);
    overflow: hidden;
    transition: 10rem .4s cubic-bezier(.4, 0, .2, 1);
    
    .close {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    &::-webkit-scrollbar {
        height: .4rem !important;
    }
`

interface SpanProps {
    display?: string;
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    textAlign?: string;
    textIndent?: string;
    whiteSpace?: string;
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    backgroundColor?: string;
    boxShadow?: string;
    verticalAlign?: string;
    overflow?: string;
}

export const Span = styled.span<SpanProps>`
    display: ${(props) => props.display ? props.display : "block"};
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    text-align: ${(props) => props.textAlign};
    text-indent: ${(props) => props.textIndent};
    white-space: ${(props) => props.whiteSpace};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.borderRadius};
    background-color: ${(props) => props.backgroundColor};
    box-shadow: ${(props) => props.boxShadow};
    vertical-align: ${(props) => props.verticalAlign};
    overflow: ${(props) => props.overflow};
`