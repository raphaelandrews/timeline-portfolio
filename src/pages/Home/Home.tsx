import { useState } from 'react';

import * as C from './Home.styles';
import { Container } from '@/components';
import { Feed } from '@/features';

export const Home = () => {
    const borderActive = "3px solid var(--first-color)"
    const border = "3px solid transparent"
    const [isFeed, setIsFeed] = useState(borderActive)
    const [isAbout, setIsAbout] = useState(border)
    const [isContact, setIsContact] = useState(border)
    const [isProjects, setIsProjects] = useState(border)

    const handleFeed = () => {
        setIsFeed(borderActive)
        setIsAbout(border)
        setIsContact(border)
        setIsProjects(border)
    }

    const handleAbout = () => {
        setIsFeed(border)
        setIsAbout(borderActive)
        setIsContact(border)
        setIsProjects(border)
    }

    const handleContact = () => {
        setIsFeed(border)
        setIsAbout(border)
        setIsContact(borderActive)
        setIsProjects(border)
    }

    const handleProjects = () => {
        setIsFeed(border)
        setIsAbout(border)
        setIsContact(border)
        setIsProjects(borderActive)
    }

    return (
        <Container width='100%' maxWidth='652px'>
            <>
                <C.ListWrapper>
                    <li onClick={handleFeed}><C.ListItem borderBottom={isFeed} >Feed</C.ListItem></li>
                    <li onClick={handleAbout}><C.ListItem borderBottom={isAbout} >About</C.ListItem></li>
                    <li onClick={handleContact}><C.ListItem borderBottom={isContact} >Contact</C.ListItem></li>
                    <li onClick={handleProjects}><C.ListItem borderBottom={isProjects}>Projects</C.ListItem></li>
                </C.ListWrapper>
                <C.Wrapper>
                    <Feed />
                </C.Wrapper>
            </>
        </Container>
    )
}
