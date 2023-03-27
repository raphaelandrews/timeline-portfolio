import styled from "styled-components";

interface TitleProps {
    fontSize?: string;
    fontSizeMD?: string;
    fontSizeLG?: string;
    fontWeight?: string;
    margin?: string;
    marginMD?: string;
}

export const TitleDefault = styled.h1<TitleProps>`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : "700"};
    margin: ${(props) => props.margin ? props.margin : "0"};

    @media (min-width: 600px) {
        font-size: ${(props) => props.fontSizeMD};
        margin: ${(props) => props.marginMD};
    }

    @media (min-width: 800px) {
        font-size: ${(props) => props.fontSizeLG};
    }
`