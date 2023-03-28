import styled from "styled-components";

interface PostProps {

}

export const PostDefault = styled.article<PostProps>`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: .75rem;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: .5rem;
    transition: .5s;

    &:hover {
        background-color: var(--bg-alt-color);
    }

    .post__img {
        width: 3rem;
        border-radius: 50%;
        aspect-ratio: 1/1;
    }

    .post__title {
        display: flex;
        align-items: center;
        gap: .5rem;
        
        p {
            font-size: 1rem;
            font-weight: 700;
        }

        span {
            width: .25rem;
            height: .25rem;
            margin-top: .2rem;
            border-radius: 50%;
            background-color: var(--alt-color);
        }
        
        time {
            font-size: .75rem;
            font-weight: 400;
            color: var(--alt-color);
            margin-top: .2rem;
        }
    }

    .post__emoji {
        display: inline-block;
        font-size: .75rem;
        font-weight: 700;
        padding: .25rem .75rem;
        margin-top: .25rem;
        border-radius: 100px;
        background-color: var(--fourth-color);
    }

    .post__content {
        font-weight: 400;
        margin-bottom: 1rem;

        a {
            font-weight: 600;
            color: var(--second-color);

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .post__techs {
        display: flex;
        gap: .5rem;
        color: var(--third-color);
        margin-bottom: 1rem;
    }
    
    .post__first {
        margin-top: .5rem;
    }

    .post__mainImg {
        width: 100%;
        border-radius: .5rem;
        aspect-ratio: 3/2;
        object-fit: cover;
    }
`