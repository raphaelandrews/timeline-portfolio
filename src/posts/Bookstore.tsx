import { Post } from "@/components";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/bookstore.png";
import { React, TypeScript, StyledComponents, Koa, Node, Prisma, PlanetScale, Vercel } from "@/assets/svg";

export const Bookstore = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="28 mar 2023"
            emoji="📚 Books, books, books"
            content={
                <>
                    <p className="post__content post__first">Bookstore 📖</p>
                    <p className="post__content">This project was built for the Final Project of the Gama Experience #46, a six-month bootcamp in which I participated.</p>
                    <p className="post__content">It's an e-commerce platform with authentication, cart, admin panel and other essential e-commerce functionalities.</p>
                    <p className="post__content">For the frontend, I used React, TypeScript, and Styled Components. For the backend, I used Koa.js, Prisma, and PlanetScale. The project is deployed on Vercel.</p>
                    <p className="post__content"><a href="https://gamaxp-final-project-web.vercel.app" target="_blank">Demo</a></p>
                </>
            }

            image={
                <a href="https://gamaxp-final-project-web.vercel.app" target="_blank">
                    <img src={mainImg} alt="Bookstore Preview" className="post__mainImg" />
                </a>
            }
            techs={[
                <React width="1rem" />,
                <TypeScript width="1rem" />,
                <StyledComponents width="1rem" />,
                <Koa width="1rem" />,
                <Node width="1rem" />,
                <Prisma width="1rem" />,
                <PlanetScale width="1rem" />,
                <Vercel width="1rem" />
            ]}
        />
    )
}
