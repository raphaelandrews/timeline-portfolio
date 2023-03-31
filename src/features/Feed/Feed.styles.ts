import styled from "styled-components";

export const FeedWrapper = styled.div`
    
`

export const Pagination = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: var(--alt-color);
    margin-top: 2rem;

    .pagination__nav {
        display: flex;
        gap: .5rem;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;

    @media (min-width: 600px) { 
        right: 1rem;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const Input = styled.input`
    font-family: 'Inter', sans-serif;
    font-size: .875rem;
    font-weight: 600;
    text-align: center;
    padding: .25rem .5rem;
    width: 2rem;
    border: none;
    border-radius: .25rem;
    background-color: var(--fifth-color);

    &:focus {
        outline: none;
    }
`
