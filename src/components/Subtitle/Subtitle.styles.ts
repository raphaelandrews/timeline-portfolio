import styled from "styled-components";

interface SubtitleProps {
    fontSize?: string;
    fontSizeMD?: string;
    fontSizeLG?: string;
    fontWeight?: string;
    margin?: string;
    marginMD?: string;
}

export const SubtitleDefault = styled.h2<SubtitleProps>`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : "600"};
    margin: ${(props) => props.margin ? props.margin : "0"};

    @media (min-width: 600px) {
        font-size: ${(props) => props.fontSizeMD};
        margin: ${(props) => props.marginMD};
    }

    @media (min-width: 800px) {
        font-size: ${(props) => props.fontSizeLG};
    }
`