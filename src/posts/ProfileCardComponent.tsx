import { Post } from "@/components";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/profile-card-component.webp";
import { HTML, CSS, JavaScript } from "@/assets/svg";


export const ProfileCardComponent = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="27 mar 2023"
            emoji="⚔️ Feeling challenged"
            content={
                <>
                    <p className="post__content post__first">Profile Card Component challenge 🗡️</p>
                    <p className="post__content">My solution to the <a href="https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ" target="_blank">Frontendmentor Challenge</a>.</p>
                    <p className="post__content"><a href="https://raphaelandrews.github.io/Profile-Card-Component/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/Profile-Card-Component" target="_blank">source</a>.</p>
                </>
            }

            image={
                <a href="https://raphaelandrews.github.io/Profile-Card-Component/" target="_blank">
                    <img src={mainImg} alt="Profile Card Component" className="post__mainImg" />
                </a>
            }
            techs={[<HTML width="1rem" />, <CSS width="1rem" />, <JavaScript width="1rem" />]}
        />
    )
}
