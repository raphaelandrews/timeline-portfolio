import { Post } from "@/components";
import profileImg from "../assets/img/profile.jpeg";
import mainImg from "../assets/img/movie-app.png";
import { React } from "@/assets/svg";

export const MovieApp = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="27 mar 2023"
            emoji="📽️ Movie Time"
            content={
                <>
                    <p className="post__content post__first">Movie App 🎞️</p>
                    <p className="post__content">In this project I made a Movie App based on the video tutorial of <a href="https://www.youtube.com/watch?v=ntYXj9W1Ez8" target="_blank">Tuat Tran Anh</a>.
                    It's built with React and the themoviedb API.
                    </p>
                    <p className="post__content"><a href="https://raphaelandrews.github.io/3-Column-Preview-Card/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/3-Column-Preview-Card" target="_blank">source</a>.</p>                   
                </>
            }

            image={
                <a href="https://raphaelandrews.github.io/3-Column-Preview-Card/" target="_blank">
                    <img src={mainImg} alt="Movie App Preview" className="post__mainImg" />
                </a>
            }
            techs={[<React width="1rem" />]}
        />
    )
}
