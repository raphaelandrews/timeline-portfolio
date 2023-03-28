import { ReactNode } from "react";
import { PostDefault } from "./Post.styles"

interface PostProps {
    img: string;
    user: string;
    date: string;
    emoji: string;
    image: JSX.Element;
    techs?: JSX.Element[];
    content: JSX.Element;
    children?: ReactNode;
}

export const Post = (props: PostProps) => {
    return (
        <PostDefault>
            <img src={props.img} alt="Andrews" className="post__img" />
            <div>
                <div className="post__title">
                    <p>{props.user}</p>
                    <span></span>
                    <time>{props.date}</time>
                </div>

                <p className="post__emoji">{props.emoji}</p>

                <div className="post__content">
                    {props.content}
                    {props.techs && (
                        <div className="post__techs">
                            {props.techs.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>
                    )}
                </div>

                {props.image}
            </div>
        </PostDefault>
    );
};
