import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavWrapper } from "./Nav.styles";
import { Button } from "@/components";
import { Logo, Command } from "@/assets/svg";
import { ThemeContext } from "@/context/ThemeContext";

export const Nav = () => {
    const { toggleThemePicker } = useContext(ThemeContext);

    return (
        <NavWrapper>
            <Link to="/">
                <Logo width="2rem" height="2rem" color="var(--first-color)" />
            </Link>
            <Button
                padding=".5rem"
                border="none"
                borderRadius=".5rem"
                backgroundColor="transparent"
                backgroundColorHover="var(--bg-alt-color)"
                action={toggleThemePicker}
            >
                <Command width="1.5rem" height="1.5rem" />
            </Button>

            
        </NavWrapper>
    )
}
