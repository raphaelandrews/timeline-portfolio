import { IconTypes } from "../../types/Types";

export const Logo: React.FC<IconTypes> = (props: IconTypes) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 707 647"
        fill="none"
        aria-label="Logo icon"
        >
            <title>Ndrws</title>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M354.742 34L62 326.742L354.742 619.484L647.484 326.742L354.742 34ZM354.871 147L175 326.871L354.871 506.742L534.742 326.871L354.871 147Z"
                fill={props.color}
            />
            <path d="M61.8113 61.8113L208.058 100.998L100.998 208.058L61.8113 61.8113Z" fill={props.color} />
            <path d="M641.434 61.8113L602.247 208.058L495.187 100.998L641.434 61.8113Z" fill={props.color} />
            <path d="M644.434 584.434L498.187 545.247L605.247 438.187L644.434 584.434Z" fill={props.color} />
            <path d="M64.8113 584.434L103.998 438.187L211.058 545.247L64.8113 584.434Z" fill={props.color} />
        </svg>

    );
};
