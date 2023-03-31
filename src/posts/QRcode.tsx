import { Post } from "@/components";
import profileImg from "../assets/img/profile-resized.webp";
import mainImg from "../assets/img/qrcode-challenge-resized.webp";
import { HTML, CSS } from "@/assets/svg";

export const QRcode = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="23 mar 2023"
            emoji="⚔️ Feeling challenged"
            content={
                <>
                    <p className="post__content post__first">QR code component challenge 🗡️</p>
                    <p className="post__content">My solution to the <a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H" target="_blank">Frontendmentor Challenge</a>.</p>
                    <p className="post__content"><a href="https://raphaelandrews.github.io/QR-Code/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/QR-Code" target="_blank">source</a>.</p>
                </>
            }

            image={
                <a href="https://raphaelandrews.github.io/QR-Code/" target="_blank">
                    <img src={mainImg} alt="QR code challenge" className="post__mainImg" />
                </a>
            }
            techs={[<HTML width="1rem" />, <CSS width="1rem" />]}
        />
    )
}
