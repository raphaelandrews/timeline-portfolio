import { Post } from "@/components";
import { HTML, CSS } from "@/assets/svg";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/3-column-preview-card.webp";

export const ThreeColumnPreviewCard = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="27 mar 2023"
            emoji="⚔️ Feeling challenged"
            content={
                <>
                    <p className="post__content post__first">3 Column Preview Card challenge 🗡️</p>
                    <p className="post__content">My solution to the <a href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-/hub" target="_blank">Frontendmentor Challenge</a>.</p>
                    <p className="post__content"><a href="https://raphaelandrews.github.io/3-Column-Preview-Card/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/3-Column-Preview-Card" target="_blank">source</a>.</p>
                </>
            }

            image={
                <a href="https://raphaelandrews.github.io/3-Column-Preview-Card/" target="_blank">
                    <img src={mainImg} alt="3 Column Preview Card" className="post__mainImg" />
                </a>
            }
            techs={[<HTML width="1rem" />, <CSS width="1rem" />]}
        />
    )
}
