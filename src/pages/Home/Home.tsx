import { useState } from 'react';

import * as C from './Home.styles';
import { Container } from '@/components';
import { About, Links, Feed } from '@/features';

export const Home = () => {
    const borderActive = "3px solid var(--second-color)";
    const border = "3px solid transparent";
    const [isShow, setIsShow] = useState(<Feed />)
    const [isFeed, setIsFeed] = useState(borderActive)
    const [isAbout, setIsAbout] = useState(border)
    const [isContact, setIsContact] = useState(border)

    const handleFeed = () => {
        setIsShow(<Feed />)
        setIsFeed(borderActive)
        setIsAbout(border)
        setIsContact(border)
    }

    const handleAbout = () => {
        setIsShow(<About />)
        setIsFeed(border)
        setIsAbout(borderActive)
        setIsContact(border)
    }

    const handleContact = () => {
        setIsShow(<Links />)
        setIsFeed(border)
        setIsAbout(border)
        setIsContact(borderActive)
    }

    const handleProjects = () => {
        setIsFeed(border)
        setIsAbout(border)
        setIsContact(border)
    }

    return (
        <Container width='100%' maxWidth='652px'>
            <>
                <C.ListWrapper>
                    <li onClick={handleFeed}><C.ListItem borderBottom={isFeed} >Feed</C.ListItem></li>
                    <li onClick={handleAbout}><C.ListItem borderBottom={isAbout} >About</C.ListItem></li>
                    <li onClick={handleContact}><C.ListItem borderBottom={isContact} >Contact</C.ListItem></li>
                </C.ListWrapper>
                <C.Wrapper>
                    {isShow}
                </C.Wrapper>
            </>
        </Container>
    )
}
