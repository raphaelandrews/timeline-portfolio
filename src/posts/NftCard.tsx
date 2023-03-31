import { Post } from "@/components";
import profileImg from "../assets/img/profile-resized.webp";
import mainImg from "../assets/img/nft-card-resized.webp";
import { HTML, CSS } from "@/assets/svg";

export const NftCard = () => {
    return (
        <Post
            img={profileImg}
            user="Andrews"
            date="27 mar 2023"
            emoji="⚔️ Feeling challenged"
            content={
                <>
                    <p className="post__content post__first">NFT Card challenge 🗡️</p>
                    <p className="post__content">My solution to the <a href="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U/hub" target="_blank">Frontendmentor Challenge</a>.</p>
                    <p className="post__content"><a href="https://raphaelandrews.github.io/NFT-Card/" target="_blank">Demo</a> and <a href="https://github.com/raphaelandrews/NFT-Card" target="_blank">source</a>.</p>
                </>
            }

            image={
                <a href="https://raphaelandrews.github.io/NFT-Card/" target="_blank">
                    <img src={mainImg} alt="NFT Card" className="post__mainImg" />
                </a>
            }
            techs={[<HTML/>, <CSS/>]}
        />
    )
}
