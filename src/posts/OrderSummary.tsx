import { Post } from "@/components";
import profileImg from "../assets/img/profile-resized.webp";
import mainImg from "../assets/img/order-summary-challenge-resized.webp";
import { HTML, CSS } from "@/assets/svg";

export const OrderSummary = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="26 mar 2023"
            emoji="⚔️ Feeling challenged"
            content={
                <>
                    <p className="post__content post__first">Order Summary challenge 🗡️</p>
                    <p className="post__content">My solution to the <a href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj" target="_blank">Frontendmentor Challenge</a>.</p>
                    <p className="post__content"><a href="https://raphaelandrews.github.io/Order-Summary/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/Order-Summary" target="_blank">source</a>.</p>
                </>
            }

            image={
                <a href="https://raphaelandrews.github.io/Order-Summary/" target="_blank">
                    <img src={mainImg} alt="Order Summary" className="post__mainImg" />
                </a>
            }
            techs={[<HTML width="1rem" />, <CSS width="1rem" />]}
        />
    )
}
