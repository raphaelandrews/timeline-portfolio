import { Post } from "@/components";
import { React, Vercel } from "@/assets/svg";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/andrews-os.webp";

export const AndrewsOS = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="28 mar 2023"
            emoji="🌅 Synthwave Vibes"
            content={
                <>
                    <p className="post__content post__first">Andrews OS 💾</p>
                    <p className="post__content">This is an unfinished project that I would use as a portfolio before building this Feed Portfolio.
                        It is based on an operating system with synthwave design. Building this project has been an enjoyable experience, and I plan to add more features to it in the future.
                    </p>
                    <p className="post__content"><a href="https://andrews-os.vercel.app" target="_blank">Demo</a></p>                   
                </>
            }

            image={
                <a href="https://andrews-os.vercel.app" target="_blank">
                    <img src={mainImg} alt="AndrewOS Preview" className="post__mainImg" />
                </a>
            }
            techs={[<React width="1rem" />, <Vercel width="1rem"/>]}
        />
    )
}
