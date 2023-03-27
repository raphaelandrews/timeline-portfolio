import { TitleDefault } from "./Title.styles";

interface TitleProps {
    fontSize?: string;
    fontSizeMD?: string;
    fontSizeLG?: string;
    fontWeight?: string;
    margin?: string;
    marginMD?: string;
    text: string;
}

export const Title = (props: TitleProps) => {
    return (
        <TitleDefault
            fontSize={props.fontSize}
            fontSizeMD={props.fontSizeMD}
            fontSizeLG={props.fontSizeLG}
            fontWeight={props.fontWeight}
            margin={props.margin}
            marginMD={props.marginMD}
        >
            {props.text}
        </TitleDefault>
    )
}
