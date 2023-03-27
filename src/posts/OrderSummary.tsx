import { Post } from "@/components";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/order-summary-challenge.jpg";

export const OrderSummary = () => {
    return (
        <Post
            img={profileImg}
            emoji="🔨 Working"
            content={
                <>
                    <p className="post__content post__first">Order Summary challenge 🗡️</p>
                    <p className="post__content">My solution to the <a href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj" target="_blank">Frontendmentor Challenge</a>.</p>
                    <p className="post__content"><a href="https://raphaelandrews.github.io/Order-Summary/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/Order-Summary" target="_blank">source</a>.</p>
                </>
            }

            image={
                <a href="https://raphaelandrews.github.io/Order-Summary/" target="_blank">
                    <img src={mainImg} alt="QR code challenge" className="post__mainImg" />
                </a>
            }
        />
    )
}
