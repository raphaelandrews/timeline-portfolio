import { ContainerDefault } from "./Container.styles";

interface ContainerProps {
    width?: string;
    widthMD?: string;
    maxWidth?: string;
    margin?: string;
    children?: JSX.Element;
}

export const Container = (props: ContainerProps) => {
    return (
        <ContainerDefault
            width={props.width}
            widthMD={props.widthMD}
            maxWidth={props.maxWidth}
            margin={props.margin}
        >
            {props.children}
        </ContainerDefault>
    )
}
