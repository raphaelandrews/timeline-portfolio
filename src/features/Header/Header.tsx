import { Link } from "react-router-dom";

import { HeaderWrapper } from "./Header.styles";
import { Button } from "@/components";
import { Logo, ColorSwatch } from "@/assets/svg";

export const Header = () => {
    return (
        <HeaderWrapper>
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
        </HeaderWrapper>
    )
}
