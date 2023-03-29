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
    const [isLinks, setIsLinks] = useState(border)

    const handleFeed = () => {
        setIsShow(<Feed />)
        setIsFeed(borderActive)
        setIsAbout(border)
        setIsLinks(border)
    }

    const handleAbout = () => {
        setIsShow(<About />)
        setIsFeed(border)
        setIsAbout(borderActive)
        setIsLinks(border)
    }

    const handleLinks = () => {
        setIsShow(<Links />)
        setIsFeed(border)
        setIsAbout(border)
        setIsLinks(borderActive)
    }

    return (
        <Container width='100%' maxWidth='652px'>
            <>
                <C.ListWrapper>
                    <li onClick={handleFeed}><C.ListItem borderBottom={isFeed} >Feed</C.ListItem></li>
                    <li onClick={handleAbout}><C.ListItem borderBottom={isAbout} >About</C.ListItem></li>
                    <li onClick={handleLinks}><C.ListItem borderBottom={isLinks} >Links</C.ListItem></li>
                </C.ListWrapper>
                <C.Wrapper>
                    {isShow}
                </C.Wrapper>
            </>
        </Container>
    )
}
