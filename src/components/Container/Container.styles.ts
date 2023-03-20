import styled from "styled-components";

interface ContainerProps {
    width?: string;
    widthMD?: string;
    maxWidth?: string;
    margin?: string;
}

export const ContainerDefault = styled.div<ContainerProps>`
    width: ${(props) => props.width ? props.width : "90%"};
    max-width: ${(props) => props.maxWidth ? props.maxWidth : "1180px"};
    margin: ${(props) => props.margin ? props.margin : "0 auto"};

    @media (min-width: 600px) {
        width: ${(props) => props.widthMD ? props.widthMD : "90%"};
    }
`