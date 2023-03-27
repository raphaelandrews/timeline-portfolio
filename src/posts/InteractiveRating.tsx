import { Post } from "@/components";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/interactive-rating.jpg";

export const InteractiveRating = () => {
    return (
        <Post
            img={profileImg}
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
                    <img src={mainImg} alt="QR code challenge" className="post__mainImg" />
                </a>
            }
        />
    )
}
