import { Post } from "@/components";
import { MongoDB, NextJs, Prisma, React, Tailwind, TypeScript, Vercel } from "@/assets/svg";
import profileImg from "../assets/img/profile-resized.webp";
import mainImg from "../assets/img/next-twitter-converted.webp";

export const NextTwitter = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="02 abr 2023"
            emoji="🐦 NextBird.js"
            content={
                <>
                    <p className="post__content post__first">Next Twitter 🦜</p>
                    <p className="post__content">This is a Twitter clone based on the video tutorial of <a href="https://www.youtube.com/watch?v=ytkG7RT6SvU&t=36s" target="_blank">Antonio Erdeljac</a>.
                    It's built with Next.js.</p>
                    <p className="post__content"><a href="https://twitter-next-raphaelandrews.vercel.app" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/twitter-next" target="_blank">source</a>.</p>                   
                </>
            }

            image={
                <a href="https://twitter-next-raphaelandrews.vercel.app" target="_blank">
                    <img src={mainImg} alt="Next.js Twitter" className="post__mainImg" />
                </a>
            }
            techs={[<NextJs/>, <React/>, <TypeScript/>, <Tailwind/>, <Prisma/>, <MongoDB/>, <Vercel/>]}
        />
    )
}
