import { Post } from "@/components";
import { HTML, CSS, JavaScript } from "@/assets/svg";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/interactive-rating.webp";

export const InteractiveRating = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="26 mar 2023"
            emoji="⚔️ Feeling challenged"
            content={
                <>
                    <p className="post__content post__first">Interactive Rating challenge 🗡️</p>
                    <p className="post__content">My solution to the <a href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/hub" target="_blank">Frontendmentor Challenge</a>.</p>
                    <p className="post__content"><a href="https://raphaelandrews.github.io/Interactive-Rating/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/Interactive-Rating" target="_blank">source</a>.</p>
                </>
            }

            image={
                <a href="https://raphaelandrews.github.io/Interactive-Rating/" target="_blank">
                    <img src={mainImg} alt="Interactive Rating" className="post__mainImg" />
                </a>
            }
            techs={[<HTML width="1rem" />, <CSS width="1rem" />, <JavaScript width="1rem" />]}
        />
    )
}
