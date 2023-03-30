import { Subtitle } from "@/components";
import * as C from "./About.styles";
import image from "../../assets/img/about-img.png";

export const About = () => {
  return (
    <C.Wrapper>
      <Subtitle text="👋 Hello!" margin="0 0 1.5rem" />
      <p>I'm Raphael Andrews, a Frontend Developer who likes to build creative things on the web!</p>
      <p>I specialized in Frontend development but I also build Fullstack projects. For Frontend development,
        I use tools such as React with JavaScript/TypeScript, Styled Components, and TailwindCSS.For the Backend, I use Koa.js and Express.js frameworks to work with Node.js.
        The ORMs I prefer are Prisma and Sequelize, and the databases I use are PlanetScale, MongoDB, and Firebase.</p>
      <p>Since I'm also interested in design, I have knowledge in Figma, Photoshop, Illustrator and UI/UX.</p>
      <p>I have been playing chess since I was ten and recently built the website for my state's chess federation, the <a href="https://www.fsx.org.br">Federação Sergipana de Xadrez</a>. You can find me on my <a href="https://lichess.org/@/RaphaelAndrews">Lichess.org</a> page {"(yes, I enjoy playing bullet)."}</p>

      <figure>
        <img src={image} alt="" />
        <figcaption>It's me! Parque Tanguá - Curitiba/PR</figcaption>
      </figure>
    </C.Wrapper>
  )
}
