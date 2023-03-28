import { Post } from "@/components";
import { HTML, CSS } from "@/assets/svg";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/ecommerce-product-page.jpg";

export const EcommerceProductPage = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="28 mar 2023"
            emoji="🛍️ Let's shop"
            content={
                <>
                    <p className="post__content post__first">Ecommerce Product Page challenge 🗡️</p>
                    <p className="post__content">My solution to the <a href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6" target="_blank">Frontendmentor Challenge</a>.</p>
                    <p className="post__content"><a href="https://raphaelandrews.github.io/ecommerce-product-page/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/ecommerce-product-page" target="_blank">source</a>.</p>
                </>
            }

            image={
                <a href="https://raphaelandrews.github.io/ecommerce-product-page/" target="_blank">
                    <img src={mainImg} alt="Ecommerce Product Page" className="post__mainImg" />
                </a>
            }
            techs={[<HTML width="1rem" />, <CSS width="1rem" />]}
        />
    )
}
