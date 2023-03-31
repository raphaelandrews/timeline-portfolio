import styled from "styled-components";

export const Wrapper = styled.section`
    padding-top: 2rem;
`

export const ListWrapper = styled.ul`
    display: flex;
    padding: 1rem 0 0;

    li {
        font-size: var(--font-size-2);
        color: var(--alt-color);
        text-align: center;
        width: calc(100% / 3);
        padding: .75rem 0;
        transition: .5s;

        &:hover {
            color: var(--first-color);
            background-color: var(--bg-alt-color);
            cursor: pointer;
        }
    }
`

interface ListItemProps {
    borderBottom?: string;
}

export const ListItem = styled.span<ListItemProps>`    
    padding: .5rem .5rem;
    border-top: 2px solid transparent;
    border-bottom: ${(props) => props.borderBottom};
`