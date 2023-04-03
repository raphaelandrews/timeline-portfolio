import { IconTypes } from "../../types/Types";

export const Previous: React.FC<IconTypes> = (props: IconTypes) => {
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
            aria-label="Previous icon"
        >
            <title>Previous</title>
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    );
};
