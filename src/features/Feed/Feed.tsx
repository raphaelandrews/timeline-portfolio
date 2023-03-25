import * as C from "./Feed.styles";
import profileImg from "../../assets/img/profile.jpeg";
import { Post } from "@/components";
import qrcode from "../../assets/img/qrcode-challenge.jpg"

export const Feed = () => {
  return (
    <C.FeedWrapper>
      <Post
        img={profileImg}
        emoji="🔨 Working"
        content={
          <>
            <p className="post__content post__first">QR code component challenge</p>
            <p className="post__content">My solution to the <a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H">Frontendmentor Challenge</a>.</p>
            <p className="post__content">Check the <a href="https://raphaelandrews.github.io/QR-Code/" target="_blank">live preview</a> and the <a href="https://github.com/raphaelandrews/QR-Code" target="_blank">Github repository</a>.</p>
          </>
        }

        image={
          <a href="https://raphaelandrews.github.io/QR-Code/" target="_blank">
            <img src={qrcode} alt="QR code challenge" className="post__mainImg" />
          </a>
        }
      />
    </C.FeedWrapper>
  )
}
