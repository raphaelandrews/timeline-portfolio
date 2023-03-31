import { Helmet } from 'react-helmet';
import * as C from './Header.styles';
import { Container, Title } from '@/components';
import { Verified } from '@/assets/svg';

import bg from "../../assets/img/retrowave-sunset-resized.webp";
import profileImg from "../../assets/img/profile-resized.webp";


export const Header = () => {
  return (
    <C.Header>
      <Helmet>
      <link rel="preload" as="image" href="/assets/retrowave-sunset-resized-8bcac5ff.webp" />
      </Helmet>
      <Container width='100%' maxWidth='780px'>
        <>
          <C.Background src={bg} alt="Profile Wallpaper" />
          <C.Wrapper>
            <C.BioWrapper>
              <C.Profile src={profileImg} alt="Raphael Andrews" />
              <C.Bio>
                <C.TitleWrapper>
                  <Title text='Raphael Andrews' fontSize='var(--font-size-1)' />
                  <Verified width='1.25rem' height='1.25rem' />
                </C.TitleWrapper>
              </C.Bio>
            </C.BioWrapper>
            <C.Text fontWeight='400' margin='1.5rem 0 0 0' marginMD='1.5rem 0 0 1rem'>🔥 Building creative things on web </C.Text>
            <C.Text fontWeight='400' margin='.5rem 0 0 0' marginMD='.5rem 0 0 1rem'>💾 Frontend Developer. JavaScript. TypeScript. React. NodeJS. KoaJS. Prisma</C.Text>
          </C.Wrapper>
        </>
      </Container>
    </C.Header>
  )
}
