import { Post } from "@/components";
import { MongoDB, NextJs, Prisma, Tailwind, TypeScript, Vercel } from "@/assets/svg";
import profileImg from "../assets/img/profile-resized.webp";
import mainImg from "../assets/img/airbnb-next-converted.webp";

export const NextAirbnb = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="05 abr 2023"
            emoji="🏡 NextHouse.js"
            content={
                <>
                    <p className="post__content post__first">Next Airbnb 🛖</p>
                    <p className="post__content">This is a Airbnb clone based on the video tutorial of <a href="https://www.youtube.com/watch?v=c_-b_isI4vg&list=PL4Z8_ZaqY5M319SOx669pM72WA7xZ2Gtn&index=6" target="_blank">Antonio Erdeljac</a>.
                    It's built with Next.js and inlcudes Auth with Google and Github and image upload with Cloudinary.</p>
                    <p className="post__content"><a href="https://rentbnb-next.vercel.app/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/airbnb-next" target="_blank">source</a>.</p>                   
                </>
            }

            image={
                <a href="https://rentbnb-next.vercel.app/" target="_blank">
                    <img src={mainImg} alt="Next.js Airbnb" className="post__mainImg" />
                </a>
            }
            techs={[<NextJs/>, <TypeScript/>, <Tailwind/>, <Prisma/>, <MongoDB/>, <Vercel/>]}
        />
    )
}
