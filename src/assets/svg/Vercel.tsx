import { IconTypes } from "../../types/Types";

export const Vercel: React.FC<IconTypes> = (props: IconTypes) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="var(--first-color)"
            viewBox="0 0 512 512"
        >
            <path
                d="M256,48,496,464H16Z"
                fillRule="evenodd"
            />
        </svg>
    );
};
