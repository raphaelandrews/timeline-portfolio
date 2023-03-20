import { useState } from 'react';

import * as C from './Home.styles';
import { Container, Title } from '@/components';
import { Verified } from '@/assets/svg';

import bg from "../../assets/img/firewatch-wallpaper.jpg";
import profileImg from "../../assets/img/profile.jpeg";

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
        <Container width='100%' maxWidth='780px'>
            <>
                <C.Background src={bg} alt="Profile Wallpaper" />
                <C.Wrapper>
                    <C.BioWrapper>
                        <C.Profile src={profileImg} alt="Raphael Andrews" />
                        <C.Bio>
                            <C.TitleWrapper>
                                <Title text='Raphael Andrews' fontSize='1.5rem' fontSizeLG='2rem' />
                                <Verified width='1.25rem' height='1.25rem' />
                            </C.TitleWrapper>
                        </C.Bio>
                    </C.BioWrapper>
                    <C.Text fontWeight='400' margin='1.5rem 0 0 0' marginMD='1.5rem 0 0 1rem'>🔥 Building creative things on web </C.Text>
                    <C.Text fontWeight='400' margin='.5rem 0 0 0' marginMD='.5rem 0 0 1rem'>💾 Frontend Developer. JavaScript. TypeScript. React. NodeJS. KoaJS. Prisma</C.Text>
                    <C.ListWrapper>
                        <li onClick={handleFeed}><C.ListItem borderBottom={isFeed} >Feed</C.ListItem></li>
                        <li onClick={handleAbout}><C.ListItem borderBottom={isAbout} >Feed</C.ListItem></li>
                        <li onClick={handleContact}><C.ListItem borderBottom={isContact} >Feed</C.ListItem></li>
                        <li onClick={handleProjects}><C.ListItem borderBottom={isProjects}>Feed</C.ListItem></li>
                    </C.ListWrapper>
                </C.Wrapper>

            </>
        </Container>
    )
}
