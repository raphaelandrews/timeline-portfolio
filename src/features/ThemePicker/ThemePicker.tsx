import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { Span, ThemePickerContainer, ThemePickerDefault, Btns } from "./ThemePicker.styles";
import { Button, Container } from "@/components";
import { lightTheme, darkTheme, cyberpunkTheme } from "@/styles/theme";
import { Close } from "@/assets/svg";

interface ThemePickerProps {
    height?: string;
    children?: ReactNode;
}

export const ThemePicker = (props: ThemePickerProps) => {
    const { toggleSetTheme, toggleThemePicker, isThemePicker } = useContext(ThemeContext);

    return (
        <Container width='100%' maxWidth='780px'>
            <ThemePickerContainer>
                <ThemePickerDefault isThemePicker={isThemePicker}>
                    <Button
                        action={toggleThemePicker}
                        className="close"
                        display="flex"
                        border="none"
                        backgroundColor="transparent"
                    >
                        <Close width="1.25rem" />
                    </Button>
                    <Btns>
                        <Button className="btns"
                            action={() => toggleSetTheme("cyberpunk")}
                            minWidth="136px"
                            padding="1rem"
                            border={`2px solid ${lightTheme.colors.primary}`}
                            borderRadius=".5rem"
                            backgroundColor={cyberpunkTheme.colors.background}>
                            <Span
                                fontFamily={cyberpunkTheme.fonts.primary}
                                fontSize="var(--fs-5)"
                                color={cyberpunkTheme.colors.primary}
                            >
                                Cyberpunk
                            </Span>

                            <Span padding=".25rem 0 0">
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={cyberpunkTheme.colors.primary}
                                    boxShadow={`0 0 0 2px ${cyberpunkTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={cyberpunkTheme.colors.secondary}
                                    boxShadow={`0 0 0 2px ${cyberpunkTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={cyberpunkTheme.colors.alternative}
                                    boxShadow={`0 0 0 2px ${cyberpunkTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={cyberpunkTheme.colors.quaternary}
                                    boxShadow={`0 0 0 2px ${cyberpunkTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={cyberpunkTheme.colors.backgroundAlt}
                                    boxShadow={`0 0 0 2px ${cyberpunkTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                            </Span>
                        </Button>
                        <Button className="btns"
                            action={() => toggleSetTheme("dark")}
                            minWidth="136px"
                            padding="1rem"
                            border={`2px solid ${darkTheme.colors.primary}`}
                            borderRadius=".5rem"
                            backgroundColor={darkTheme.colors.background}>
                            <Span
                                fontFamily={darkTheme.fonts.primary}
                                fontSize="var(--fs-5)"
                                color={darkTheme.colors.primary}
                            >
                                Dark
                            </Span>

                            <Span padding=".25rem 0 0">
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={darkTheme.colors.primary}
                                    boxShadow={`0 0 0 2px ${darkTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={darkTheme.colors.secondary}
                                    boxShadow={`0 0 0 2px ${darkTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={darkTheme.colors.alternative}
                                    boxShadow={`0 0darkx ${lightTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={darkTheme.colors.quaternary}
                                    boxShadow={`0 0 0 2px ${darkTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={darkTheme.colors.backgroundAlt}
                                    boxShadow={`0 0 0 2px ${darkTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                            </Span>
                        </Button>
                        <Button className="btns"
                            action={() => toggleSetTheme("light")}
                            minWidth="136px"
                            padding="1rem"
                            border={`2px solid ${lightTheme.colors.primary}`}
                            borderRadius=".5rem"
                            backgroundColor={lightTheme.colors.background}>
                            <Span
                                fontFamily={lightTheme.fonts.primary}
                                fontSize="var(--fs-5)"
                                color={lightTheme.colors.primary}
                            >
                                Light
                            </Span>

                            <Span padding=".25rem 0 0">
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={lightTheme.colors.primary}
                                    boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={lightTheme.colors.secondary}
                                    boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={lightTheme.colors.alternative}
                                    boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={lightTheme.colors.quaternary}
                                    boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                                <Span
                                    display="inline-block"
                                    textAlign="left"
                                    textIndent="100%"
                                    whiteSpace="nowrap"
                                    width="1.25rem"
                                    height="1.25rem"
                                    borderRadius="50%"
                                    backgroundColor={lightTheme.colors.backgroundAlt}
                                    boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                    verticalAlign="bottom"
                                    overflow="hidden"
                                />
                            </Span>
                        </Button>
                    </Btns>
                </ThemePickerDefault>
            </ThemePickerContainer>
        </Container>
    )
}