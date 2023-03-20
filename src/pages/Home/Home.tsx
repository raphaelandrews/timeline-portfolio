import { Container } from '@/components';
import * as C from './Home.styles';
import bg from "../../assets/img/firewatch-wallpaper.jpg";
import profileImg from "../../assets/img/profile.jpeg";

export const Home = () => {
    return (
        <Container width='100%' maxWidth='780px'>
            <C.Wrapper>
                <C.Background src={bg} alt="" />
                <C.Profile src={profileImg} alt="" />
            </C.Wrapper>
        </Container>
    )
}
