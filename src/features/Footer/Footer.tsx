import * as C from "./Footer.styles";
import { Logo } from "@/assets/svg";

export const Footer = () => {
  return (
    <C.Footer>
      <div>
        <p>Designed & built by </p>
      </div>
      <span>
        <Logo width=".875rem" color="var(--alt-color)" />
        Andrews
      </span>
    </C.Footer>
  )
}
