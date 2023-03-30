import { SubtitleDefault } from "./Subtitle.styles";

interface SubtitleProps {
    fontSize?: string;
    fontSizeMD?: string;
    fontSizeLG?: string;
    fontWeight?: string;
    margin?: string;
    marginMD?: string;
    text: string;
}

export const Subtitle = (props: SubtitleProps) => {
    return (
        <SubtitleDefault
            fontSize={props.fontSize}
            fontSizeMD={props.fontSizeMD}
            fontSizeLG={props.fontSizeLG}
            fontWeight={props.fontWeight}
            margin={props.margin}
            marginMD={props.marginMD}
        >
            {props.text}
        </SubtitleDefault>
    )
}
