import { Link } from "react-router-dom";

import { NavWrapper } from "./Nav.styles";
import { Button } from "@/components";
import { Logo, ColorSwatch } from "@/assets/svg";

export const Nav = () => {
    return (
        <NavWrapper>
            <Link to="/">
                <Logo width="2rem" height="2rem" />
            </Link>
            <Button
                padding=".5rem"
                border="none"
                borderRadius=".5rem"
                backgroundColor="transparent"
                backgroundColorHover="var(--bg-alt-color)"
            >
                <ColorSwatch width="1.5rem" height="1.5rem" />
            </Button>
        </NavWrapper>
    )
}
