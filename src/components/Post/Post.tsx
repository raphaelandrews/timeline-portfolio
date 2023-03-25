import { ReactNode } from "react";
import { PostDefault } from "./Post.styles"

interface PostProps {
    img: string;
    emoji: string;
    content: JSX.Element;
    children?: ReactNode;
}

export const Post = (props: PostProps) => {
    return (
        <PostDefault>
            <img src={props.img} alt="Andrews" />
            <div>
                <div className="post__title">
                    <p>Andrews</p>
                    <span></span>
                    <time>22 mar 2023 </time>
                </div>

                <p className="post__emoji">{props.emoji}</p>

                {props.content}
            </div>
        </PostDefault>
    )
}
