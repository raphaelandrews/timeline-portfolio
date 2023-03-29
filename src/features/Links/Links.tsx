import { ExternalLink, Github, Gmail, LinkedIn } from "@/assets/svg";
import * as C from "./Links.styles";

export const Links = () => {
  return (
    <C.Wrapper>
      <C.Link href="https://github.com/raphaelandrews" target="_blank" backgroundColor="hsl(0, 0%, 0%)">
        <Github height="80%" />
        <ExternalLink width="1.25rem" color="#fff" />
      </C.Link>
      <C.Link href="mailto:raphaelandrews95@gmail.com" target="_blank" backgroundColor="hsl(0, 0%, 94%)">
        <Gmail height="80%" />
        <ExternalLink width="1.25rem" color="#000" />
      </C.Link>
      <C.Link href="mailto:raphaelandrews95@gmail.com" target="_blank" backgroundColor="hsl(210, 90%, 40%)">
        <LinkedIn height="80%" />
        <ExternalLink width="1.25rem" color="#fff" />
      </C.Link>
    </C.Wrapper>
  )
}