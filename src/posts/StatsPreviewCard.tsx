import { Post } from "@/components";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/stats-preview-card.webp";
import { HTML, CSS } from "@/assets/svg";

export const StatsPreviewCard = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="27 mar 2023"
            emoji="⚔️ Feeling challenged"
            content={
                <>
                    <p className="post__content post__first">Stats Preview Card challenge 🗡️</p>
                    <p className="post__content">My solution to the <a href="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62/hub" target="_blank">Frontendmentor Challenge</a>.</p>
                    <p className="post__content"><a href="https://raphaelandrews.github.io/Stats-Preview-Card/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/Stats-Preview-Card" target="_blank">source</a>.</p>
                </>
            }

            image={
                <a href="https://raphaelandrews.github.io/Stats-Preview-Card/" target="_blank">
                    <img src={mainImg} alt="Stats Preview Card" className="post__mainImg" />
                </a>
            }
            techs={[<HTML width="1rem" />, <CSS width="1rem" />]}
        />
    )
}
