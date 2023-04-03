import { IconTypes } from "../../types/Types";

export const Close: React.FC<IconTypes> = (props: IconTypes) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--first-color)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <title>Close</title>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
};
