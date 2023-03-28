import { Post } from "@/components";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/interactive-rating.jpg";
import { HTML, CSS, JS } from "@/assets/svg";

export const InteractiveRating = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="26 mar 2023"
            emoji="🔨 Working"
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
            techs={[<HTML width="1rem" />, <CSS width="1rem" />, <JS width="1rem" />]}
        />
    )
}
