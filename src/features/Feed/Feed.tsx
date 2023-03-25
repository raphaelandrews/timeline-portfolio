import * as C from "./Feed.styles";
import profileImg from "../../assets/img/profile.jpeg";
import { Post } from "@/components";

export const Feed = () => {
  return (
    <C.FeedWrapper>
      <Post
      img={profileImg}
      emoji="🔨 Working"
      content={
        <p className="post__content post__first">QR Code Challenge</p>
      }
      />
    </C.FeedWrapper>
  )
}
