import { Container, Title } from '@/components';
import * as C from './Home.styles';
import bg from "../../assets/img/firewatch-wallpaper.jpg";
import profileImg from "../../assets/img/profile.jpeg";
import { useEffect, useRef, useState } from 'react';
import { Verified } from '@/assets/svg';

export const Home = () => {
    /*const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    console.log(ref.current.clientHeight)

    useEffect(() => {
        setHeight(ref.current.clientHeight);
    }, []);*/

    return (
        <Container width='100%' maxWidth='780px'>
            <>
                <C.Background src={bg} alt="" />
                <C.Wrapper>
                    <C.BioWrapper>
                        <C.Profile src={profileImg} alt="" />
                        <C.Bio>
                            <C.TitleWrapper>
                                <Title text='Raphael Andrews' fontSize='1.5rem' fontSizeLG='2rem' />
                                <Verified width='1.25rem' height='1.25rem' />
                            </C.TitleWrapper>
                        </C.Bio>
                    </C.BioWrapper>
                    <C.Text fontWeight='400' margin='1.5rem 0 0 0' marginMD='1.5rem 0 0 1rem'>🔥 Building creative things on web </C.Text>
                    <C.Text fontWeight='400' margin='.5rem 0 0 0' marginMD='.75rem 0 0 1rem'>💾 Frontend Developer. JavaScript. TypeScript. React. NodeJS. KoaJS. Prisma</C.Text>
                </C.Wrapper>
            </>
        </Container>
    )
}
