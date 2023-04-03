import { IconTypes } from "../../types/Types";

export const Next: React.FC<IconTypes> = (props: IconTypes) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--alt-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-label="Next icon"
        >
            <title>Next</title>
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    );
};
