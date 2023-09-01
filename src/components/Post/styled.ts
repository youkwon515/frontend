import styled from "styled-components";

export const PostDiv = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    width : 100%;
    height : 35px;
    padding : 0 20px 0 25px;
    cursor: pointer;
    background : var(--background-color);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    > p {
        color : var(--font-color);
    }

    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`;