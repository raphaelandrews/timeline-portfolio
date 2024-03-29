import { Download, ExternalLink, Github, Gmail, LinkedIn, Logo } from "@/assets/svg";
import * as C from "./Links.styles";

import cv from "../../assets/pdf/cv-raphael-andrews.pdf"

export const Links = () => {
  return (
    <C.Wrapper>
      <C.Link download href={cv} backgroundColor="var(--second-color)">
        <div>
          <Logo height="80%" color="#fff" />
          <span>Download CV</span>
        </div>
        <Download width="1.25rem" color="#fff" />
      </C.Link>
      <C.Link href="https://github.com/raphaelandrews" target="_blank" backgroundColor="hsl(0, 0%, 0%)">
        <Github height="80%" />
        <ExternalLink width="1.25rem" color="#fff" />
      </C.Link>
      <C.Link href="mailto:ndrws.dev@gmail.com" target="_blank" backgroundColor="hsl(0, 0%, 94%)">
        <Gmail height="80%" />
        <ExternalLink width="1.25rem" color="#000" />
      </C.Link>
      <C.Link href="https://www.linkedin.com/in/raphael-andrews/" target="_blank" backgroundColor="hsl(210, 90%, 40%)">
        <LinkedIn height="80%" />
        <ExternalLink width="1.25rem" color="#fff" />
      </C.Link>
    </C.Wrapper>
  )
}
